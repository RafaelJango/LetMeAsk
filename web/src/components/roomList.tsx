import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRooms } from '@/http/use-rooms';
import { dayjs } from '@/lib/dayjs';
import { Badge } from './ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';

export function RoomList() {
  const { data, isLoading } = useRooms();
  return (
    <Card>
      <CardHeader className="px-6">
        <CardTitle className="font-bold text-2xl">Salas recentes</CardTitle>
        <CardDescription className="mb-3 text-muted-foreground text-sm">
          Acesso rápido para as salas criadas recentemente
        </CardDescription>
        <CardContent className="scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-300 custom-scrollbar hover:scrollbar-thumb-gray-400 flex max-h-[200px] flex-initial flex-col gap-3 overflow-y-auto">
          {isLoading && (
            <p className="text-muted-foreground text-sm">Carregando salas...</p>
          )}
          {data?.map((room) => {
            return (
              <Link
                className="flex items-center justify-between rounded-lg border p-3 transition-colors duration-300 hover:bg-accent/40 "
                key={room.id}
                to={`/room/${room.id}`}
              >
                <div className="flex-1 flex-col ">
                  <h3 className="mb-2 font-medium ">{room.name}</h3>

                  <div className="flex items-center gap-2">
                    <Badge className="text-xs" variant="secondary">
                      {room.questionsCount} pergunta(s)
                    </Badge>
                    <Badge className="text-xs" variant="secondary">
                      {dayjs(room.createdAt).toNow()}
                    </Badge>
                  </div>
                </div>

                <span className="flex items-center gap-1 text-sm ">
                  Entrar
                  <ArrowRight className="size-3" />
                </span>
              </Link>
            );
          })}
        </CardContent>
      </CardHeader>
    </Card>
  );
}
