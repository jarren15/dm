import React from "react";
import { Container } from "../Container";
import classNames from "classnames";
import _ from "lodash";
import { List, ListItem, ListItemText } from "@mui/material";

const SkillSection = ({ skills }) => {
  const componentClasses = classNames("bg-customBackground-1", "py-6", "sm:py-12");

  const renderSkillItem =
    skills.length > 0
      ? skills.map((skill) => {
          return (
            <ListItem disableGutters key={_.uniqueId("skill_")}>
              <ListItemText primary={skill.title} />
            </ListItem>
          );
        })
      : null;

  return (
    <section className={componentClasses} style={{ backgroundColor: "#f4f4f4" }}>
      <Container>
        <h3 className="text-3xl sm:text-4xl font-extrabold mb-4">Skills</h3>

        <List className="grid sm:grid-cols-3 grid-cols-2 gap-4">{renderSkillItem}</List>
      </Container>
    </section>
  );
};

export default SkillSection;
