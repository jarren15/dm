import React from "react";
import * as heroStyles from "./hero.module.scss";
import { Container } from "../Container";
import classNames from "classnames";
import heroImg from "../../images/hero/hero.svg";
import { AnchorButton } from "../AnchorButton";
import { ButtonGroup } from "../ButtonGroup";

export const Hero = () => {
  const componentClasses = classNames(heroStyles.hero, "bg-customBackground-2", "py-6", "sm:py-12");
  return (
    <div className={componentClasses}>
      <Container>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center">
          <div className="sm:flex-1">
            <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl">Elevate Your Brand with Creative Excellence</h1>
            <ButtonGroup>
              <AnchorButton to="/#section1" variant="primary">
                About me
              </AnchorButton>
            </ButtonGroup>
          </div>

          <div className="sm:flex-1">
            <img src={heroImg} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};
