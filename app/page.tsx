'use client';
import { useEffect, useState } from 'react';
import { ThreeDCard } from './components/ThreeDCard';
import Preloader from './components/Preloader';

type CardType = {
  _id: string;
  title: string;
  description: string;
  image: string;
  createdAt: string
};

export default function Home() {
  const [cards, setCards] = useState<CardType[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCards = async () => {
    const res = await fetch('/api/cards');
    const data = await res.json();
    setCards(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCards();
  }, []);

  const handleDelete = async (id: string) => {
    setLoading(true);
    await fetch(`/api/cards/${id}`, { method: 'DELETE' });
    setCards((prev) => prev.filter((card) => card._id !== id));
    setLoading(false);
  };
  if (loading) return <Preloader />;

  return (
    <div className="gap-6 w-full flex flex-wrap justify-around ">
      {cards.map((card) => (
          <ThreeDCard key={card._id} title={card.title} description={card.description} date={card.createdAt.slice(0, 10)} imgsrc={card.image} delete={() => { handleDelete(card._id) }} />
      ))}
      {cards.length === 0 && <div className='text-white top-[50%] absolute'>No cards to show.</div>}
    </div>
  );
}
