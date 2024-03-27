import React from "react";
import { Container } from "../Container";
import { ButtonGroup } from "../ButtonGroup";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Button } from '@mui/material';

const CarouselSection = () => {
  return (
    <section id="carouselSection" className="relative">
      <Container>
        <div className="flex gap-8">
          <div className="flex-1 py-6 sm:py-12">
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-4">Carousel Contents</h3>
            <p>
              As a carousel content creator, I specialize in crafting seamless and visually appealing experiences. Each slide is meticulously designed with a hooked title on slide 1, capturing
              attention from the start. My expertise lies in creating engaging carousels that tell a compelling story, ensuring a seamless flow from one slide to the next. Let's collaborate to elevate
              your content strategy with captivating carousel creations that leave a lasting impact.
            </p>
            <ButtonGroup>
                <Button component={Link} to="/carousel/" variant="contained" disableElevation>View carousels</Button>
            </ButtonGroup>
          </div>
          <div className="basis-7/12">
            <StaticImage className="h-full" src="../../images/carousel/carousel_sample-min.jpg" alt="Carousel Overview" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CarouselSection;
