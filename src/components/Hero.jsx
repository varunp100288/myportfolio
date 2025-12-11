import { useEffect, useState } from "react";

export default function Hero() {
  const [banner, setBanner] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://folio.ddev.site/api/menu-api-module-banner?_format=json")
      .then((res) => res.json())
      .then((data) => {
        setBanner(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Banner API Error:", error);
        setLoading(false);
      });
  }, []);

  if (loading || !banner) {
    return <p className="loading-banner">Loading Banner...</p>;
  }

  return (
    <section id="home" className="hero">
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
        <div className="shape shape-6"></div>
      </div>

      <div className="hero-content">
        <div className="hero-subtitle">{banner.hero_subtitle}</div>
        <h1>{banner.title}</h1>

        {/* Subtitle from Drupal */}
        {banner.subtitle && <p className="subtitle">{banner.subtitle}</p>}

        {/* Description if exists */}
        {banner.description && (
          <p className="subtitle">{banner.description}</p>
        )}

        {/* Button */}
        {banner.button_text && (
          <a href={banner.button_link} className="cta-button">
            {banner.button_text}
          </a>
        )}
      </div>
    </section>
  );
}
