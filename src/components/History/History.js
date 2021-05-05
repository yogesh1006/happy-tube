import { useData } from "../../dataContext/DataContext";
import { videos } from "../../data";
import { Link } from "react-router-dom";
import "../videoCard/videocard.css";

export default function History() {
  const { state } = useData();

  let videosToDisplay = [];
  console.log("history",videosToDisplay);
  videosToDisplay = getVideosToDisplay();
  function getVideosToDisplay() {
    // videos.forEach((video) => {
    //   if (state.history.includes(video.id)) {
    //     videosToDisplay.push(video);
    //   }
    //   if (videosToDisplay.length === state.history.length) {
    //     return videosToDisplay;
    //   }
    // });
    // return videosToDisplay;

    state.history.forEach((videoId) => {
      const historyVideo = videos.find(
        (vi) => vi.id === videoId
      );
      videosToDisplay.push(historyVideo);
      if (videosToDisplay.length === state.history.length) {
        return videosToDisplay;
      }
    });
    return videosToDisplay.reverse();
  }
  

  return (
    <>
      <h2 className="section-heading">Recent Videos</h2>
      {videosToDisplay.map((video) => (
        <Link
          to={`/video/${video.id}`}
          className="card video-card"
          key={"suggestion" + video.id}
        >
          <img
            className="card-video-thumbnail"
            alt={video.title}
            src={video.thumbnailImgUrl}
          />
          <div className="card-details">
            <img
              className="card-channel-logo"
              src={video.channelImageUrl}
              alt={video.title}
            />
            <div className="card-channel-details">
              <p className="card-title">{video.title}</p>
              <p className="card-channel-name">{video.channelName}</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
