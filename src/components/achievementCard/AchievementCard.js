import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({ cardInfo, isDark }) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      <div className="certificate-image-div">
        {cardInfo.certificateLink ? (
          <a
            href={cardInfo.certificateLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={cardInfo.image}
              alt={cardInfo.imageAlt || "Certificate Thumbnail"}
              className="card-image"
            />
          </a>
        ) : (
          <img
            src={cardInfo.image}
            alt={cardInfo.imageAlt || "Certificate Thumbnail"}
            className="card-image"
          />
        )}
      </div>

      <div className="certificate-detail-div">
        {cardInfo.certificateLink ? (
          <a
            href={cardInfo.certificateLink}
            target="_blank"
            rel="noopener noreferrer"
            className={
              isDark
                ? "dark-mode card-title card-title-link"
                : "card-title card-title-link"
            }
          >
            {cardInfo.title}
          </a>
        ) : (
          <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
            {cardInfo.title}
          </h5>
        )}
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.description}
        </p>
      </div>

      {cardInfo.footer && (
        <div className="certificate-card-footer">
          {cardInfo.footer.map((v, i) => (
            <span
              key={i}
              className={
                isDark ? "dark-mode certificate-tag" : "certificate-tag"
              }
              onClick={() => openUrlInNewTab(v.url, v.name)}
            >
              {v.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
