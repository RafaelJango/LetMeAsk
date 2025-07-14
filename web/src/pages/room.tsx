import { ArrowLeft, Radio } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { QuestionForm } from '@/components/questionForm';
import { QuestionList } from '@/components/questionList';
import { Button } from '@/components/ui/button';
import Particles from '@/Particles/Particles';

type RoomParams = {
  roomId: string;
};

export function Room() {
  const params = useParams<RoomParams>();

  if (!params.roomId) {
    return <Navigate replace to="/" />;
  }

  return (
    <div
      style={{
        width: '100vw',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Particles background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      >
        <Particles
          alphaParticles={false}
          disableRotation={true}
          moveParticlesOnHover={true}
          particleBaseSize={400}
          particleColors={['#8040a5', '#531d72']}
          particleCount={200}
          particleHoverFactor={1}
          particleSpread={8}
          sizeRandomness={1}
          speed={0.3}
        />
      </div>
      {/* Main content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          minHeight: '100vh',
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <div className="container mx-auto max-w-4xl px-4 py-8">
          <div className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <Link to="/">
                <Button variant="outline">
                  <ArrowLeft className="mr-2 size-4" />
                  Voltar ao Início
                </Button>
              </Link>
              <Link to={`/room/${params.roomId}/audio`}>
                <Button className="flex items-center gap-2" variant="secondary">
                  <Radio className="size-4" />
                  Gravar Áudio
                </Button>
              </Link>
            </div>
            <h1 className="mb-2 font-bold text-3xl text-foreground">
              Sala de Perguntas
            </h1>
            <p className="text-muted-foreground">
              Faça perguntas e receba respostas com IA
            </p>
          </div>

          <div className="mb-8">
            <QuestionForm roomId={params.roomId} />
          </div>
          <QuestionList roomId={params.roomId} />
        </div>
      </div>
    </div>
  );
}
