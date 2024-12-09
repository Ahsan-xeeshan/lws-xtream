import { deleteVideo, getVideoById, updateVideo } from "@/lib/video-data";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const videoId = params?.id;
  const data = await getVideoById(videoId);
  return NextResponse.json(data);
}

export async function PATCH(request, { params }) {
  const videoId = params?.id;
  const updates = request.body;
  const data = await updateVideo(videoId, updates);
  return NextResponse.json(data);
}

export async function DELETE(request, { params }) {
  const videoId = params?.id;

  const data = await deleteVideo(videoId);
  return NextResponse.json(data);
}
