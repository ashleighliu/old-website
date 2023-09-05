import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/skills.css";

const Skills = () => {
	return (
		<div className="skills">
			<Card
				icon={faBriefcase}
				title="Skill"
				body={
					<div className="skills-body">
						<div className="skill">
							<div className="skill-title">Python</div>
						</div>

			
					</div>
				}
			/>
		</div>

	);
};


export default Skills;


