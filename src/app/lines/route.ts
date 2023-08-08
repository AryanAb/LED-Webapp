import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	const text = await kv.hget("led", "text");
	const color = await kv.hget("led", "color");
	return NextResponse.json({ text, color }, { status: 200 })
}

export async function POST(req: NextRequest) {
	const body = await req.json()
	kv.hset("led", { text: body.text });
	kv.hset("led", { color: body.color });
	return NextResponse.json(null, { status: 200 })
}