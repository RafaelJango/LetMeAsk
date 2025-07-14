import { Bot, Loader2, MessageSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { dayjs } from '@/lib/dayjs';

interface Question {
  id: string;
  question: string;
  answer?: string | null;
  createdAt: string;
}

interface QuestionItemProps {
  question: Question;
}

export function QuestionItem({ question }: QuestionItemProps) {
  const isGenerating = !question.answer;

  return (
    <Card>
      <CardContent className="px-6">
        <div className="flex flex-col gap-6">
          {/* Pergunta */}
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <div className="flex size-8 items-center justify-center rounded-full bg-primary/10">
                <MessageSquare className="size-4 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <p className="mb-1 font-bold text-base text-foreground">
                Pergunta
              </p>
              <p className="whitespace-pre-line text-muted-foreground text-sm leading-relaxed">
                {question.question}
              </p>
            </div>
          </div>

          {/* Resposta da IA */}
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <div className="flex size-8 items-center justify-center rounded-full bg-primary/10">
                <Bot className="size-4 text-secondary-foreground" />
              </div>
            </div>
            <div className="flex-1">
              <p className="mb-1 font-bold text-base text-foreground">
                Resposta da IA
              </p>
              <div className="text-muted-foreground">
                {isGenerating ? (
                  <div className="flex items-center gap-2">
                    <Loader2 className="size-4 animate-spin text-primary" />
                    <span className="text-primary text-sm italic">
                      Gerando resposta...
                    </span>
                  </div>
                ) : (
                  <p className="whitespace-pre-line text-sm leading-relaxed">
                    {question.answer}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Data */}
          <div className="flex justify-end">
            <span className="text-muted-foreground text-xs">
              {dayjs(question.createdAt).toNow()}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
