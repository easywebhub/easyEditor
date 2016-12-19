declare let firebase;
import {
  Router,
  RouterConfiguration
} from 'aurelia-router';

export class App {
  public router: Router;
  /**
   *
   */
  constructor() {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        alert(`current user : ${user.email}`);
        // User is signed in.

      } else {
        // No user is signed in.
      }
    });

  }
  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'EasyApp';
    config.map([{
      route: ['', 'login'],
      name: 'login',
      moduleId: './view-models/login',
      nav: true,
      title: 'Login'
    }, {
      route: 'sign-in',
      name: 'sign-in',
      moduleId: './view-models/sign-in',
      nav: false,
      title: 'Sign-in'
    }, {
      route: 'welcome',
      name: 'welcome',
      moduleId: 'welcome',
      nav: true,
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
