Router.configure({
  controller: 'AppController',
  loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});

Router.plugin('loading', {loadingTemplate: 'loading'});
Router.plugin('dataNotFound', {dataNotFoundTemplate: 'notFound'});
