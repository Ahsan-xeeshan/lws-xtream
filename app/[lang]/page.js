import VideoList from "@/components/VideoList";
import { videos } from "@/lib/video-data";
import { getDictionary } from "./dictionaries";

export default async function Home({ params: { lang } }) {
  const dictionary = await getDictionary(lang);

  return <VideoList videos={videos} dictionary={dictionary} />;
}
