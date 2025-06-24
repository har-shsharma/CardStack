import dbConnect from '@/lib/mongodb';
import Card from '@/models/Card';

export async function GET() {
  await dbConnect();
  const cards = await Card.find();
  return Response.json(cards);
}

export async function POST(req) {
  await dbConnect();
  const { title, description ,image  } = await req.json();
  const newCard = await Card.create({ title, description , image });
  return Response.json(newCard);
}



