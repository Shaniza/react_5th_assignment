import { useState } from "react";
import TechnologyCard from "./TechnologyCard";
import "./Technologies.css";

import type { Technology } from "../types/type";
import technologiesData from "../data/technologies.json";

function Technologies() {
  const technologies: Technology[] = technologiesData;

  const [selectedTechnologies, setSelectedTechnologies] = useState<
    Technology[]
  >([]);

  const handleAddTechnology = (technology: Technology) => {
    const alreadySelected = selectedTechnologies.some(
      (item) => item.id === technology.id
    );

    if (!alreadySelected) {
      setSelectedTechnologies([
        ...selectedTechnologies,
        technology,
      ]);
    }
  };

  // Remove one technology
  const handleRemoveTechnology = (id: string) => {
    setSelectedTechnologies(
      selectedTechnologies.filter(
        (technology) => technology.id !== id
      )
    );
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    setSelectedTechnologies([]);
  };

  return (
    <section className="technologies-section">
      <div className="technologies-container">

        {/* Heading */}
        <div className="technologies-heading">
          <h2>
            Explore the <span>Technologies</span>
          </h2>

          <p>
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

       
        <div className="technologies-content">

         
          <div className="technology-grid">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                onAdd={handleAddTechnology}
                isSelected={selectedTechnologies.some(
                  (item) => item.id === technology.id
                )}
              />
            ))}
          </div>

         
          <aside className="stack-card">

            <div className="stack-header">
              <h3>Your Stack</h3>

              <p>
                {selectedTechnologies.length} Technologies Selected
              </p>
            </div>

            <div className="stack-list">

              {selectedTechnologies.length > 0 ? (
                selectedTechnologies.map((technology) => (
                  <div
                    className="stack-item"
                    key={technology.id}
                  >
                    <div className="stack-item-left">

                      <img
                        className="stack-icon"
                        src={technology.icon}
                        alt={technology.name}
                      />

                      <span>{technology.name}</span>
                    </div>

                    <button
                      className="remove-stack-item"
                      onClick={() =>
                        handleRemoveTechnology(technology.id)
                      }
                      aria-label={`Remove ${technology.name}`}
                    >
                      ×
                    </button>
                  </div>
                ))
              ) : (
                <p className="empty-stack">
                  No technologies selected yet.
                </p>
              )}

            </div>

           
            {selectedTechnologies.length > 0 && (
              <button
                className="remove-all-btn"
                onClick={handleRemoveAll}
              >
                Remove All
              </button>
            )}

          </aside>
        </div>
      </div>
    </section>
  );
}

export default Technologies; 