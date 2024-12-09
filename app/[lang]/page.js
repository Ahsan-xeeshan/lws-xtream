import VideoList from "@/components/VideoList";
import { getDictionary } from "./dictionaries";

export default async function Home({ params: { lang } }) {
  const dictionary = await getDictionary(lang);

  const response = await fetch(`${process.env.BASE_API_URL}/videos`);
  const videos = await response.json();

  return <VideoList videos={videos} dictionary={dictionary} />;
}
