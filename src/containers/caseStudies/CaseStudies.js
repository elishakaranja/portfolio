import React, {useState, useContext} from "react";
import "./CaseStudies.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import {caseStudies} from "../../portfolio";

export default function CaseStudies() {
  const {isDark} = useContext(StyleContext);
  const [expandedIndex, setExpandedIndex] = useState(null);

  if (!caseStudies.display) {
    return null;
  }

  const toggleExpand = index => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="experience">
        <div className="case-studies-header">
          <h1 className={isDark ? "dark-mode heading" : "heading"}>
            {caseStudies.title}
          </h1>
          <p className={isDark ? "dark-mode subTitle" : "subTitle"}>
            {caseStudies.subtitle}
          </p>
        </div>
        <div className="case-studies-body">
          {caseStudies.stories.map((story, index) => (
            <div
              key={index}
              className={isDark ? "dark-mode case-card" : "case-card"}
            >
              <div className="case-content">
                <div className="case-header-row">
                  <h2 className="case-title">{story.title}</h2>
                  <h3 className="case-org">{story.organization}</h3>
                </div>
                <p className="case-overview">{story.overview}</p>

                <button
                  className="expand-btn"
                  onClick={() => toggleExpand(index)}
                  aria-expanded={expandedIndex === index}
                >
                  {expandedIndex === index
                    ? "Hide Case Study ↑"
                    : "View Case Study ↓"}
                </button>

                <div
                  className={`narrative-container ${
                    expandedIndex === index ? "expanded" : ""
                  }`}
                >
                  <div className="narrative-content">
                    {story.narrative.split("\n\n").map((para, i) => {
                      if (para.startsWith("###")) {
                        return <h4 key={i}>{para.replace("### ", "")}</h4>;
                      }
                      if (para.startsWith("-") || para.startsWith(" -")) {
                        return (
                          <ul key={i}>
                            {para.split("\n").map((line, li) => (
                              <li key={li}>{line.replace(/^- |^ - /g, "")}</li>
                            ))}
                          </ul>
                        );
                      }
                      if (/^\d\./.test(para)) {
                        return (
                          <ol key={i}>
                            {para.split("\n").map((line, li) => (
                              <li key={li}>{line.replace(/^\d\. /, "")}</li>
                            ))}
                          </ol>
                        );
                      }
                      return <p key={i}>{para}</p>;
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
}
