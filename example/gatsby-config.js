module.exports = {
  siteMetadata: {
    title: `Gatsby DFDS Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@dfds`,
  },
  __experimentalThemes: [
    {
      resolve: require.resolve('../'),
      options: { root: __dirname, data: { apiUrl: 'asd' } },
    },
  ],
  plugins: [],
}
