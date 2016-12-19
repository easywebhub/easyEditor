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
        // User is signed in.
        var user = firebase.auth().currentUser;

        if (user != null) {
          user.providerData.forEach(function (profile) {
            alert(`current user : ${profile.email}`);
            console.log("Sign-in provider: " + profile.providerId);
            console.log("  Provider-specific UID: " + profile.uid);
            console.log("  Name: " + profile.displayName);
            console.log("  Email: " + profile.email);
            console.log("  Photo URL: " + profile.photoURL);
          });
        }
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
      nav: true,
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
