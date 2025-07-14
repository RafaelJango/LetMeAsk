/** biome-ignore-all lint/suspicious/noConsole: Dev Console logs */
import { Mic, MicOff } from 'lucide-react';
import { useRef, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Aurora from '@/Aurora/Aurora';
import { Button } from '@/components/ui/button';

const isRecordingSupported =
  Boolean(navigator.mediaDevices) &&
  typeof navigator.mediaDevices.getUserMedia === 'function' &&
  typeof window.MediaRecorder === 'function';

type RoomParams = {
  roomId: string;
};

export function RecordRoomAudio() {
  const params = useParams<RoomParams>();

  const [isRecording, setIsRecording] = useState(false);
  const recorder = useRef<MediaRecorder | null>(null);
  const intervalRef = useRef<NodeJS.Timeout>(null);

  function stopRecording() {
    setIsRecording(false);

    if (recorder.current && recorder.current.state !== 'inactive') {
      recorder.current.stop();
    }

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }

  async function uploadAudio(audio: Blob) {
    const formData = new FormData();
    formData.append('file', audio, 'audio.webm');

    const response = await fetch(
      `http://localhost:3333/rooms/${params.roomId}/audio`,
      {
        method: 'POST',
        body: formData,
      }
    );

    const result = await response.json();

    console.log(result);
  }

  function createRecorder(audio: MediaStream) {
    recorder.current = new MediaRecorder(audio, {
      mimeType: 'audio/webm',
      audioBitsPerSecond: 64_000,
    });

    recorder.current.ondataavailable = (event) => {
      if (event.data.size > 0) {
        uploadAudio(event.data);
      }
    };

    recorder.current.onstart = () => {
      console.log('gravação iniciada');
    };

    recorder.current.onstop = () => {
      console.log('gravação encerrada');
    };

    recorder.current.start();
  }

  async function startRecording() {
    if (!isRecordingSupported) {
      alert('O seu navegador não suporta gravação');
      return;
    }
    setIsRecording(true);

    const audio = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        sampleRate: 44_100,
      },
    });

    createRecorder(audio);

    intervalRef.current = setInterval(() => {
      recorder.current?.stop();

      createRecorder(audio);
    }, 5000);
  }

  if (!params.roomId) {
    return <Navigate replace to="/" />;
  }
  return (
    <>
      {isRecording ? (
        <div className="-z-10 pointer-events-none fixed inset-0 rotate-180">
          <Aurora
            amplitude={0.3}
            blend={0.5}
            colorStops={['#c42424', '#600101', '#c42424']}
            speed={0.5}
          />
        </div>
      ) : (
        <div className="-z-10 pointer-events-none fixed inset-0 rotate-180">
          <Aurora
            amplitude={0.3}
            blend={0.5}
            colorStops={['#8040a5', '#531d72', '#8040a5']}
            speed={0.5}
          />
        </div>
      )}
      <div className="relative z-10 flex h-screen flex-col items-center justify-center gap-3 ">
        {isRecording ? (
          <div className="flex flex-col items-center gap-2 ">
            <Mic className="mb-5" size={200} />
            <Button onClick={stopRecording} size={'lg'}>
              Parar áudio
            </Button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 ">
            <MicOff className="mb-5" size={200} />
            <Button onClick={startRecording} size={'lg'}>
              Gravar áudio
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
