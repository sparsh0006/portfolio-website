import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const projectsData = [
  {
    id: 1,
    title: "Treno.fun",
    category: "Web3 / Fitness",
    tools: "Next.js, React, TypeScript, Strava OAuth, Solana",
    image: "/images/treno.png",
    liveLink: "https://www.treno.fun/",
    githubLink: "https://github.com/sparsh0006/treno",
    description: "Group fitness-staking dApp with Strava integration",
  },
  {
    id: 2,
    title: "NutriLens AI",
    category: "AI / LLM",
    tools: "Next.js, GPT-4o Vision, Opik Tracing, TypeScript",
    image: "/images/nutrilens.png",
    liveLink: "https://nutrilens-ai-brown.vercel.app/",
    githubLink: "https://github.com/sparsh0006/Nutrilens-Ai",
    description: "Multi-agent nutrition analysis with vision AI",
  },
  {
    id: 3,
    title: "AeroLink",
    category: "Data Viz / Web3",
    tools: "React, D3.js, Node.js, Hedera, MongoDB",
    image: "/images/aerolink.png",
    liveLink: "https://aero-link-4d3x.vercel.app/",
    githubLink: "https://github.com/sparsh0006/AeroLink",
    description: "Environmental monitoring platform with data visualization",
  },
  {
    id: 4,
    title: "MoltCourt",
    category: "Full Stack",
    tools: "Next.js, TypeScript, PostgreSQL, Prisma",
    image: "/images/moltcourt.png",
    liveLink: "https://moltcourt-azure.vercel.app/",
    githubLink: "https://github.com/sparsh0006/moltcourt",
    description: "Court management and case tracking system",
  },
  {
    id: 5,
    title: "Frames402",
    category: "Frontend",
    tools: "React, TypeScript, Tailwind CSS, Vite",
    image: "/images/frames402.png",
    liveLink: "https://frames402.vercel.app/",
    githubLink: "https://github.com/sparsh0006/Frames402",
    description: "Interactive design showcase and component library",
  },
];

const Work = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    // -----------------------------------------
    // DESKTOP
    // -----------------------------------------
    mm.add("(min-width: 1026px)", () => {
      const section = document.querySelector(".work-section");
      const container = document.querySelector(".work-container");
      const flex = document.querySelector(".work-flex");

      if (!section || !container || !flex) return;

      const updateDistance = () => {
        const flexWidth = flex.scrollWidth;
        const containerWidth = container.clientWidth;

        return Math.max(0, flexWidth - containerWidth);
      };

      const getDistance = () => {
        return updateDistance();
      };

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getDistance()}`,
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          id: "work",
        },
      });

      timeline.to(flex, {
        x: () => -getDistance(),
        ease: "none",
      });

      const refresh = () => {
        ScrollTrigger.refresh();
      };

      window.addEventListener("load", refresh);

      return () => {
        window.removeEventListener("load", refresh);
        timeline.kill();
      };
    });

    // -----------------------------------------
    // MOBILE / TABLET
    // -----------------------------------------
    mm.add("(max-width: 1025px)", () => {
      // Completely disable GSAP pinning on mobile.
      // Native touch scrolling is much smoother on iOS/Android.
      gsap.set(".work-flex", {
        clearProps: "transform",
      });
    });

    return () => {
      mm.revert();
    };
  });

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
                image={project.image}
                alt={project.title}
                link={project.liveLink}
                githubLink={project.githubLink}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;