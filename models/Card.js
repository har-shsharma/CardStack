import mongoose from 'mongoose';

const CardSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        description: { type: String , required: true},
        image: {type: String, required: true}, 
    },
    { timestamps: true }
);

export default mongoose.models.Card || mongoose.model('Card', CardSchema);
