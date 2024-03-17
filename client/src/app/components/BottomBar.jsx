import React, { useState } from "react";

export default function BottomBar({ item }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.createRef();

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  return (
    <div className="flex items-center justify-between pt-5">
      {item.audio && (
        <div>
          <audio
            ref={audioRef}
            src={item?.audio}
            onEnded={() => setIsPlaying(false)}
          />
          <button onClick={togglePlay}>
            <img
              src={
                isPlaying
                  ? "https://duaruqyah.com/assets/others/pause.svg"
                  : "https://duaruqyah.com/assets/others/audiobtn.svg"
              }
              alt=""
            />
          </button>
        </div>
      )}
      <div className="flex gap-5">
        <img
          className="cursor-pointer"
          src="https://duaruqyah.com/assets/others/copy.svg"
          alt=""
        />
        <img
          className="cursor-pointer"
          src="https://duaruqyah.com/assets/others/bookmark.svg"
          alt=""
        />
        <img
          className="cursor-pointer"
          src="https://duaruqyah.com/assets/others/plan.svg"
          alt=""
        />
        <img
          className="cursor-pointer"
          src="https://duaruqyah.com/assets/others/share.svg"
          alt=""
        />
        <img
          className="cursor-pointer"
          src="https://duaruqyah.com/assets/others/report.svg"
          alt=""
        />
      </div>
    </div>
  );
}
