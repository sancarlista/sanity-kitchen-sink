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
                  buildHookId: '60b1d3f0ebf3cadd4ef89991',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-xvenyb9v',
                  apiId: '6ade70a6-f11b-446b-8bb9-f57621086b8e'
                },
                {
                  buildHookId: '60b1d3ef2cd90dd45c1ea0ee',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-pzjfgwqd',
                  apiId: 'b478a20d-6414-4bf3-a4e9-1309a5529c65'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sancarlista/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-pzjfgwqd.netlify.app', category: 'apps'}
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
