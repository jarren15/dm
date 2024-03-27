import React from "react";
import { graphql } from "gatsby";
import { ImageCarousel } from "../components/ImageCarousel";
import { Container } from "../components/Container";
import { Pagination, PaginationItem } from "@mui/material";
import { Link } from "gatsby";
import _ from "lodash";

export default class CarouselList extends React.Component {
  render() {
    const { data, pageContext } = this.props;

    const carouselNodes = data.allSanityCarousels.nodes;

    const allCarousels = carouselNodes.map((carousel) => {
      return (
        <div key={_.uniqueId("carousel_")}>
          <ImageCarousel {...carousel} />
        </div>
      );
    });

    const renderPagination =
      pageContext.numPages > 1 ? (
        <Pagination
          className="flex justify-center mt-4"
          count={pageContext.numPages}
          page={pageContext.currentPage}
          siblingCount={0}
          boundaryCount={2}
          renderItem={(item) => <PaginationItem component={Link} to={`/carousel/${item.page === 1 ? "" : item.page}`} {...item} />}
        />
      ) : null;

    return (
      <section>
        <Container>
          template
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">{allCarousels}</div>
          {renderPagination}
        </Container>
      </section>
    );
  }
}

export const carouselListQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
    allSanityCarousels(limit: $limit, skip: $skip, sort: { _createdAt: DESC }) {
      nodes {
        items {
          image {
            asset {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR)
            }
          }
        }
        title
      }
    }
  }
`;
