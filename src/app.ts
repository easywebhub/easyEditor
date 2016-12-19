import {
  Router,
  RouterConfiguration
} from 'aurelia-router';

export class App {
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'EasyApp';
    config.map([{
      route: ['', 'login'],
      name: 'login',
      moduleId: './view-models/login',
      nav: true,
      title: 'Login'
    }, {
      route: 'welcome',
      name: 'welcome',
      moduleId: 'welcome',
      nav: false,
      title: 'Welcome'
    }, {
      route: 'users',
      name: 'users',
      moduleId: 'users',
      nav: false,
      title: 'Github Users'
    }, {
      route: 'child-router',
      name: 'child-router',
      moduleId: 'child-router',
      nav: false,
      title: 'Child Router'
    }]);

    this.router = router;
  }
}
