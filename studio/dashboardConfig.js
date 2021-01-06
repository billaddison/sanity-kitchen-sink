export default {
  widgets: [
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
                  buildHookId: '5ff614f91b2c7b26621ba378',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-cci6huog',
                  apiId: '0fbf889c-0c62-4c9e-b43a-30c8133df251'
                },
                {
                  buildHookId: '5ff614f93580472a183fb1c9',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-vyxkq6gt',
                  apiId: 'd640009f-b2c9-40b9-8060-4d85dbf6e5f0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/billaddison/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-vyxkq6gt.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
