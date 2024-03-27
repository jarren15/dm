const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage, createRedirect } = actions;

  //   Create pages from carousel nodes
  const allCarousel = await graphql(
    `
      {
        allSanityCarousels {
          nodes {
            title
          }
        }
      }
    `
  );

  if (allCarousel.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const carousels = allCarousel.data.allSanityCarousels.nodes;
  const postsPerPage = 3;
  const numPages = Math.ceil(carousels.length / postsPerPage);

//   createRedirect({
//     fromPath: `/carousel/1/`,
//     toPath: `/carousel`,
//     redirectInBrowser: true,
//   });

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/carousel` : `/carousel/${i + 1}`,
      component: path.resolve("./src/templates/carousel-list.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  //   Create pages from carousel nodes end
};
