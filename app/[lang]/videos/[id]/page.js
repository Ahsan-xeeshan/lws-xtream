import VideoDetails from "@/components/VideoDetails";

const VideoDetailsPage = ({ params: { id, lang } }) => {
  return <VideoDetails id={id} lang={lang} />;
};

export default VideoDetailsPage;
