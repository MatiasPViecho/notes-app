import { AddTrack } from '@/src/sections/AddTrack/AddTrack';
import { girassol } from '@/utils/fonts';
export default function Home() {
  return (
    <main
      className={`container my-12 text-base p-2 mx-auto ${girassol.className}`}
    >
      <AddTrack />
    </main>
  );
}
