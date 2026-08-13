import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer Intern</h4>
                <h5>QuantMaster AI Research & Trading Pvt. Ltd.</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed frontend solutions for internal analytics dashboards and trading tools using React.js. Coordinated with backend teams on API integrations and CI/CD pipelines, reducing deployment time by 25%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Engineer</h4>
                <h5>Aquanode</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Led frontend architecture for a GPU infrastructure platform, building 15+ production screens with React.js, Next.js and TypeScript. Engineered reusable components and improved rendering performance by 40% through code splitting and memoization.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Building & Shipping</h4>
                <h5>Open Source & Web3</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Shipping full stack projects from API to interface. Exploring LLM pipelines, multi agent systems, and Web3 platforms. Focused on clean architecture, performance optimization, and products that solve real problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;