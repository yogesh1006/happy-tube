import { useParams } from "react-router-dom";
import { videos } from "../../data";
import VideoList from "../VideoList/VideoList";
import { useData } from "../../dataContext/DataContext";
// import "./playlist-videos.css";



export default function PlaylistVideos() {
  const { playlistId } = useParams();
  console.log(playlistId);
  const { state, dispatch } = useData();

  let playlist = state.playlists.find((playlist) => playlist.id === playlistId);

  let videosToDisplay = [];
  videosToDisplay = getVideosToDisplay();

  function getVideosToDisplay() {
    videos.forEach((video) => {
      if (playlist.videos.includes(video.id)) {
        videosToDisplay.push(video);
      }
      if (videosToDisplay.length === playlist.videos.length) {
        return videosToDisplay;
      }
    });
    return videosToDisplay;
  }

  const onRemoveHandler = (e, videoId) => {
    e.preventDefault();
    const userConsent = alert("Removing video from playlist, are you sure?");
    if (userConsent) {
      dispatch({
        type: "REMOVE_FROM_PLAYLIST",
        payload: {
          playlistId: playlistId,
          videoId: videoId,
        },
      });
    }
  };

  return (
    <div className="playlist-videos">
      <h2 className="section-heading">{playlist.name}</h2>
      <VideoList
        videos={videosToDisplay}
        onRemove={onRemoveHandler}
      ></VideoList>
    </div>
  );
}
