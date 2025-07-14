import { CreateRoomForm } from '@/components/createRoomForm';
import HomeHeader from '@/components/homeHeader';
import { RoomList } from '@/components/roomList';
import Particles from '@/Particles/Particles';

export function CreateRoom() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
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
      <div
        className="h-full"
        style={{
          position: 'relative',
          zIndex: 1,
          minHeight: '100vh',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        <HomeHeader />
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col gap-8">
            <CreateRoomForm />
            <RoomList />
          </div>
        </div>
      </div>
    </div>
  );
}
