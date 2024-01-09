import { roboto } from '@/utils/fonts';
export const TextInput = () => {
  return (
    <input
      className={`max-w-80 p-2 rounded text-black ${roboto.className}`}
      type="text"
      placeholder="texto"
    />
  );
};
