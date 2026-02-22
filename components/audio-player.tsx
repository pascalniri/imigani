"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, RotateCcw } from "lucide-react";

interface AudioPlayerProps {
  src: string;
}

export default function AudioPlayer({ src }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const setAudioData = () => {
      setDuration(audio.duration);
    };

    const setAudioTime = () => {
      setProgress(audio.currentTime);
    };

    audio.addEventListener("loadeddata", setAudioData);
    audio.addEventListener("timeupdate", setAudioTime);
    audio.addEventListener("ended", () => setIsPlaying(false));

    return () => {
      audio.removeEventListener("loadeddata", setAudioData);
      audio.removeEventListener("timeupdate", setAudioTime);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    const time = Number(e.target.value);
    audioRef.current.currentTime = time;
    setProgress(time);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="w-full p-6 border border-dashed border-gray-300 dark:border-[#faf7f0]/20 bg-muted/20 mt-8">
      <audio ref={audioRef} src={src} />

      <div className="flex items-center gap-4 mb-4 w-full">
        <button
          onClick={togglePlay}
          className="w-8 h-8 flex items-center justify-center bg-[#683d21] text-white rounded-full hover:bg-[#683d21]/90 transition-colors"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <Pause size={10} fill="currentColor" />
          ) : (
            <Play size={10} fill="currentColor" className="ml-0.5" />
          )}
        </button>

        <div className="flex-1">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
            Listen to this story
          </p>
          <div className="flex justify-between text-xs font-medium tabular-nums">
            <span>{formatTime(progress)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>

      <input
        type="range"
        min="0"
        max={duration || 0}
        value={progress}
        onChange={handleProgressChange}
        className="w-full h-1 bg-gray-300 dark:bg-[#faf7f0]/20 rounded-lg appearance-none cursor-pointer accent-[#683d21]"
      />
    </div>
  );
}
