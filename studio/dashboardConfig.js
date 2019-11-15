export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dce6233062b0973444ca914',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-76uujras',
                  apiId: '977a33da-3ab5-453d-968b-27affcb63d49'
                },
                {
                  buildHookId: '5dce623388327e8e13848860',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-hb17dwct',
                  apiId: '8c5a4bd1-bebe-498f-89bd-8b10e9fa7f6b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/coolof/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-hb17dwct.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
