export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e38548fe9be208231746886',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-cj37pbmi',
                  apiId: 'b33813d4-2910-4f61-b3af-dd31137f7e62'
                },
                {
                  buildHookId: '5e38548e49a8d85e33010382',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-r29oaa9c',
                  apiId: 'fc2947b0-c6df-4a40-a41e-e314f428a041'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dutchakdev/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-r29oaa9c.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
