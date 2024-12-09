import { getDictionary } from "@/app/[lang]/dictionaries";
import { videos } from "@/lib/video-data";
import { notFound } from "next/navigation";
import PlayVideo from "./PlayVideo";
import RelatatedVideo from "./RelatatedVideo";

const VideoDetails = async ({ id, lang }) => {
  const dictionary = await getDictionary(lang);
  const filteredVideo = videos.filter((video) => video.videoId === id)[0];
  if (!filteredVideo) {
    notFound();
  }

  return (
    <main class="flex flex-col lg:flex-row gap-6">
      <PlayVideo video={filteredVideo} dictionary={dictionary} />
      <RelatatedVideo dictionary={dictionary} />
    </main>
  );
};

export default VideoDetails;
