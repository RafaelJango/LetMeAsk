import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { CreateQuestionRequest } from './types/create-question-request';
import type { CreateQuestionResponse } from './types/create-question-response';
import type { GetRoomsQuestionsResponse } from './types/get-room-questions-response';

export function useCreateQuestion(roomId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: CreateQuestionRequest) => {
      const response = await fetch(
        `http://localhost:3333/rooms/${roomId}/questions`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      const result: CreateQuestionResponse = await response.json();

      return result;
    },

    onMutate({ question }) {
      const questions = queryClient.getQueryData<GetRoomsQuestionsResponse>([
        'get-questions',
        roomId,
      ]);

      const questionsArray = questions ?? [];

      const newQuestion = {
        id: crypto.randomUUID(),
        question,
        answer: null,
        createdAt: new Date().toISOString(),
      };

      queryClient.setQueryData<GetRoomsQuestionsResponse>(
        ['get-questions', roomId],
        [newQuestion, ...questionsArray]
      );

      return { newQuestion, questions };
    },

    onSuccess(data, _variables, context) {
      queryClient.setQueryData<GetRoomsQuestionsResponse>(
        ['get-questions', roomId],
        (questions) => {
          if (!(questions && context?.newQuestion)) {
            return questions;
          }

          return questions.map((question) => {
            if (question.id === context.newQuestion.id) {
              return {
                ...context.newQuestion,
                id: data.questionId,
                answer: data.answer,
              };
            }
            return question;
          });
        }
      );
    },

    onError(_error, _variables, context) {
      if (context?.questions) {
        queryClient.setQueryData<GetRoomsQuestionsResponse>(
          ['get-questions', roomId],
          context.questions
        );
      }
    },
  });
}
