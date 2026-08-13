import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { FiGithub } from "react-icons/fi";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
  githubLink?: string;
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");

  const handleMouseEnter = async () => {
    if (props.video) {
      setIsVideo(true);
      const response = await fetch(`src/assets/${props.video}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setVideo(blobUrl);
    }
  };

  return (
    <div className="work-image">
      <div
        className="work-image-in"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVideo(false)}
        data-cursor={"disable"}
      >
        <div className="work-links">
          {props.link && (
            <a 
              href={props.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="work-link live-link"
              title="View Live"
            >
              <MdArrowOutward />
            </a>
          )}
          {props.githubLink && (
            <a 
              href={props.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="work-link github-link"
              title="View Code"
            >
              <FiGithub />
            </a>
          )}
        </div>
        <img src={props.image} alt={props.alt} />
        {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
      </div>
    </div>
  );
};

export default WorkImage;