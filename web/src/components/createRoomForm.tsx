import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod/v4';
import { useCreateRoom } from '@/http/use-create-room';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const createRoomSchema = z.object({
  name: z.string().min(3, { message: 'Inclua no mínimo 3 caracteres' }),
  description: z.string(),
});

type CreateRoomFormData = z.infer<typeof createRoomSchema>;

export function CreateRoomForm() {
  const { mutateAsync: createRoom } = useCreateRoom();

  const createRoomForm = useForm<CreateRoomFormData>({
    resolver: zodResolver(createRoomSchema),
    defaultValues: {
      name: '',
      description: '',
    },
  });

  async function handleCreateRoom({ name, description }: CreateRoomFormData) {
    await createRoom({ name, description });
    createRoomForm.reset();
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="leading-relaxed">
          Crie uma nova sala para interagir com a Inteligência Artificial e obter 
          respostas personalizadas para suas perguntas.
        </CardTitle>
      </CardHeader>
      <CardContent className='px-6'>
        <Form {...createRoomForm}>
          <form
            className="flex flex-col justify-between gap-4"
            onSubmit={createRoomForm.handleSubmit(handleCreateRoom)}
          >
            <FormField
              control={createRoomForm.control}
              name="name"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className="font-bold text-base">
                      Nome
                      <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="resize-none p-3"
                        placeholder="Descreva o nome da sala..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm" />
                  </FormItem>
                );
              }}
            />

            <FormField
              control={createRoomForm.control}
              name="description"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel className="font-bold text-base">
                      Descrição
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        className="min-h-[120px] resize-none p-3"
                        placeholder="Descreva o propósito da sala..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm" />
                  </FormItem>
                );
              }}
            />

            <Button className="w-full" type="submit">
              Criar Sala
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
