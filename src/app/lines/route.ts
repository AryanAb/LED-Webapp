import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	const line = await kv.get("led");
	console.log(line);
	return NextResponse.json({ line }, { status: 200 })
}

export async function POST(req: NextRequest) {
	const body = await req.json()
	kv.set("led", body.line);
	return NextResponse.json(null, { status: 200 })
}