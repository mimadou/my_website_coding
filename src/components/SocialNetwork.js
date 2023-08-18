import React from "react";

const SocialNetwork = () => {
  const anim = () => {
    const icons = document.querySelectorAll(".social-network a");

    icons.forEach((link) => {
      link.addEventListener("mouseover", (e) => {
        link.style.transform = `translate(${e.offsetX - 20}px, ${
          e.offsetY - 13
        }px)`;
      });

      link.addEventListener("mouseleave", () => {
        link.style.transform = "";
      });
    });
  };

  return (
    <div className="social-network">
      <ul className="content">
        <a
          href="https://www.linkedin.com/in/mamadou-diop-57b29423a/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li>
          <i className="fa-brands fa-linkedin fa-lg"></i>
          </li>
        </a>
        <a
          href="https://github.com/mimadou?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li>
          <i className="fa-brands fa-square-github fa-lg"></i>
          </li>
        </a>
        <a
          href="mailto:mimadou97@yahoo.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li>
          <i className="fa-solid fa-square-envelope fa-lg" ></i>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default SocialNetwork;
