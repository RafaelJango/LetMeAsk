import { Rocket } from 'lucide-react';

export default function HomeHeader() {
  return (
    <header className="mx-auto mt-4 mb-4 w-full max-w-4xl border-bpy-4 border-zinc-800 md:mt-8 md:mb-8">
      <div className="container mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-4 md:flex-row md:gap-0">
        <div className="flex items-center gap-2">
          <Rocket className="h-8 w-8 text-accent md:h-10 md:w-10" />
          <h1 className="mb-2 font-bold text-3xl text-foreground md:text-5xl">
            Letmeask
          </h1>
        </div>
        <div className="flex items-center gap-4 md:items-end">
          <span className="text-center text-base text-muted-foreground md:text-left md:text-lg">
            Pergunte, compartilhe, aprenda.
            <br />
            <span className="mt-1 block text-xs not-italic">
              <strong>Como usar:</strong> Crie uma sala, envie sua pergunta e
              aguarde a resposta da IA.
              <br />
              Você também pode gravar um áudio para perguntas mais rápidas!
            </span>
          </span>
        </div>
      </div>
    </header>
  );
}
