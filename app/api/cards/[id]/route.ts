import dbConnect from '@/lib/mongodb';
import Card from '@/models/Card';

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> } 
) {
  const { id } = await context.params; 
  await dbConnect();

  try {
    const deleted = await Card.findByIdAndDelete(id);
    if (!deleted) {
      return new Response(JSON.stringify({ error: 'Card not found' }), { status: 404 });
    }
    return Response.json({ success: true });
  } catch (err) {
    console.error('Delete error:', err);
    return new Response(
      JSON.stringify({ error: 'Failed to delete card' }),
      { status: 500 }
    );
  }
}
