import { useRef, useEffect } from "react";
import video from "../../assets/videos/commercial.mp4";
import cls from "./Banner.module.scss";

interface BannerProps {
  menu: boolean;
}

export const Banner = ({ menu }: BannerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      menu ? videoRef.current.pause() : videoRef.current.play();
    }
  }, [menu]);

  return (
    <div className={cls.Wrapper}>
      <video ref={videoRef} className={cls.Video} autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};
