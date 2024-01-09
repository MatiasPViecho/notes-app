'use client';
import { TextInput } from '@/src/components/Inputs/Text/TextInput';
import { useForm } from 'react-hook-form';

export const AddTrack = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('data:', data);
  };
  //TODO add functionality to use register via input
  return (
    <div className="text-slate-100 flex flex-col gap-4">
      <h1 className="text-5xl flex justify-center">Agregar Ducha 🚿</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput />
        <input
          defaultValue="test"
          {...register('example')}
        />
        <button>CLICK</button>
      </form>
    </div>
  );
};
