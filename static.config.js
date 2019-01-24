import axios from 'axios'

export default {
  getSiteData: () => ({
    title: 'Chord Analytics | Data Science Consulting',
  }),
  getRoutes: async () => {
    const { data: posts } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    return [
      {
        path: '/',
        component: 'src/pages/index',
      },
      {
        path: '/about',
        component: 'src/pages/about',
      },
      {
        path: '/case-studies',
        component: 'src/pages/case_studies',
      },
      // {
      //   path: '/blog',
      //   component: 'src/containers/blog',
      // },
    ]
  },
  siteRoot: 'https://chordanalytics.ca',
}
