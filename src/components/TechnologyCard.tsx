import { FaStar } from "react-icons/fa";

import type { Technology } from "../types/type";
import "./TechnologyCard.css";

interface TechnologyCardProps {
  technology: Technology;
  onAdd: (technology: Technology) => void;
  isSelected: boolean;
}

function TechnologyCard({
  technology,
  onAdd,
  isSelected,
}: TechnologyCardProps) {
  return (
    <article className="technology-card">
 
      <div className="technology-card-top">

       
        <div className="technology-icon">
          <img
            src={technology.icon}
            alt={`${technology.name} icon`}
          />
        </div>

        
        <span className="technology-badge">
          {technology.badge}
        </span>

      </div>

       
      <h3>{technology.name}</h3>

     
      <p className="technology-description">
        {technology.description}
      </p>

       
      <div className="technology-meta">

        <span>{technology.category}</span>

        <span>{technology.difficulty}</span>

        <span className="technology-rating">
          <FaStar />
          {technology.rating}
        </span>

      </div>

     
      <button
        className={`add-stack-btn ${
          isSelected ? "added-stack-btn" : ""
        }`}
        onClick={() => onAdd(technology)}
        disabled={isSelected}
      >
        {isSelected ? "Added to Stack" : "Add to Stack"}
      </button>

    </article>
  );
}

export default TechnologyCard; 