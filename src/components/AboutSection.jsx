import { useEffect, useState } from "react";

export default function AboutSection() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    fetch("https://folio.ddev.site/api/menu-api-module-about?_format=json")
      .then((res) => res.json())
      .then((data) => {
        setAboutData(data);
        console.log("ABOUT DATA =>", data);
      })
      .catch((err) => console.error("API Error:", err));
  }, []);

  if (!aboutData) {
    return <p>Loading...</p>;
  }

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title fade-in">{aboutData.title}</h2>

        <div className="about-content">
          
          {/* Profile Image */}
          <div className="about-image slide-in-left">
            {aboutData.image_url && (
              <img
                src={aboutData.image_url}
                alt="About"
                className="profile-img"
              />
            )}
          </div>

          {/* Text */}
          <div className="about-text slide-in-right">
            <h3>{aboutData.heading}</h3>

            {/* Render formatted HTML Body */}
            <div
              dangerouslySetInnerHTML={{ __html: aboutData.body }}
            ></div>

            {/* Skills */}
            <div className="skills">
              {aboutData.skills?.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>

          </div>
        </div>
      </div>
      {/* <h3>sadhdashjas</h3> */}
    </section>
    
  );
}
