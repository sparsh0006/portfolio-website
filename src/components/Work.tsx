import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projectsData = [
  {
    id: 1,
    title: "Treno.fun",
    category: "Web3 / Fitness",
    tools: "Next.js, React, TypeScript, Strava OAuth, Solana",
    image: "/images/treno.png",
    liveLink: "https://www.treno.fun/",
    githubLink: "https://github.com/sparsh0006/treno",
    description: "Group fitness-staking dApp with Strava integration"
  },
  {
    id: 2,
    title: "NutriLens AI",
    category: "AI / LLM",
    tools: "Next.js, GPT-4o Vision, Opik Tracing, TypeScript",
    image: "/images/nutrilens.png",
    liveLink: "https://nutrilens-ai-brown.vercel.app/",
    githubLink: "https://github.com/sparsh0006/Nutrilens-Ai",
    description: "Multi-agent nutrition analysis with vision AI"
  },
  {
    id: 3,
    title: "AeroLink",
    category: "Data Viz / Web3",
    tools: "React, D3.js, Node.js, Hedera, MongoDB",
    image: "/images/aerolink.png",
    liveLink: "https://aero-link-4d3x.vercel.app/",
    githubLink: "https://github.com/sparsh0006/AeroLink",
    description: "Environmental monitoring platform with data visualization"
  },
  {
    id: 4,
    title: "MoltCourt",
    category: "Full Stack",
    tools: "Next.js, TypeScript, PostgreSQL, Prisma",
    image: "/images/moltcourt.png",
    liveLink: "https://moltcourt-azure.vercel.app/",
    githubLink: "https://github.com/sparsh0006/moltcourt",
    description: "Court management and case tracking system"
  },
  {
    id: 5,
    title: "Frames402",
    category: "Frontend",
    tools: "React, TypeScript, Tailwind CSS, Vite",
    image: "/images/frames402.png",
    liveLink: "https://frames402.vercel.app/",
    githubLink: "https://github.com/sparsh0006/Frames402",
    description: "Interactive design showcase and component library"
  }
];

const Work = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    // Horizontal pin/scrub scroll-jack only runs on desktop.
    // Below this width the CSS stacks .work-box vertically, so GSAP
    // shouldn't be pinning or translating the row at all on mobile.
    mm.add("(min-width: 1026px)", () => {
      function getTranslateX() {
        const box = document.getElementsByClassName("work-box");
        const rectLeft = document
          .querySelector(".work-container")!
          .getBoundingClientRect().left;
        const rect = box[0].getBoundingClientRect();
        const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
        const padding = parseInt(window.getComputedStyle(box[0]).padding) / 2;
        return rect.width * box.length - (rectLeft + parentWidth) + padding;
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".work-section",
          start: "top top",
          end: () => `+=${getTranslateX()}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          id: "work",
        },
      });

      timeline.to(".work-flex", {
        x: () => -getTranslateX(),
        ease: "none",
      });

      return () => {
        timeline.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projectsData.map((project) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{project.id}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tech Stack</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage
                {...({
                  image: project.image,
                  alt: project.title,
                  link: project.liveLink,
                  githubLink: project.githubLink,
                } as any)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;