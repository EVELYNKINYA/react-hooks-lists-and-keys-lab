import React from "react";

function ProjectItem({ id, name, description, technologies }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <div>
        {technologies.map((technology, index) => (
          <span key={index}>{technology}</span>
        ))}
      </div>
      {/* Other content of the ProjectItem */}
    </div>
  );
}

export default ProjectItem;

