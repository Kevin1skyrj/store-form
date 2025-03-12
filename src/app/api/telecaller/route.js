import { connectToDatabase } from "@/lib/db";
import Store from "@/models/Store";

export async function POST(req) {
  try {
    await connectToDatabase();
    const data = await req.json();
    const newStore = new Store(data);
    await newStore.save();

    return new Response(JSON.stringify({ message: "Store registered successfully!" }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
