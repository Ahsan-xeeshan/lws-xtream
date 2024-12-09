import { videos } from "@/lib/video-data";
import Hero from "./Hero";
import VideoCard from "./VideoCard";

const VideoList = async ({ dictionary }) => {
  return (
    <>
      <Hero />
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">
            {dictionary.StreamsOfTheDay}
          </h2>
          <a
            href="#"
            className="bg-color-gray hover:bg-opacity-80 text-sm px-4 py-2 rounded-full"
          >
            {dictionary.ViewAll}
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {videos.map((video) => (
            <VideoCard key={video.videoId} video={video} />
          ))}
        </div>
      </section>
    </>
  );
};

export default VideoList;
