'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';

export default function CreateCardPage() {
  const [title, setTitle] = useState('');
  const [description, setDesc] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [shake, setShake] = useState(false);
  const router = useRouter();

  const toBase64 = (file: File) =>
    new Promise<string>((res, rej) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => res(reader.result as string);
      reader.onerror = rej;
    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageFile) {
      setShake(true);
      setTimeout(() => setShake(false), 500); 
      return;
    }

    const image = await toBase64(imageFile);

    await fetch('/api/cards', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, image }),
    });

    router.push('/');
  };

  return (
    <div className="max-w-[90%] sm:max-w-[600px] mx-auto mt-10 p-6 border border-gray-600 rounded shadow">
      <h2 className="text-xl text-white font-bold mb-4">Create Card</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          placeholder="Title"
          className="border text-white p-2 w-full"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          className="border p-2 w-full text-white"
          value={description}
          required
          onChange={(e) => setDesc(e.target.value)}
        />
        <div className="flex items-center space-x-2 text-white">
          <label className="cursor-pointer text-2xl flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={clsx("w-6 h-6 text-white", shake && "shake")}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12V4m0 0L8 8m4-4l4 4"
              />
            </svg>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files?.[0] || null)}
              className="hidden"
            />
          </label>
          {imageFile && (
            <span className="text-sm text-white truncate max-w-[200px]">
              {imageFile.name}
            </span>
          )}
        </div>
        <button className="border text-white px-4 py-2 cursor-pointer">
          Add Card
        </button>
      </form>
    </div>
  );
}
