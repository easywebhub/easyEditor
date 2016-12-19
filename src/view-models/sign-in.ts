declare let firebase;
export class Signin {
  public createUser(user) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function (error) {
      // Handle Errors here.
      console.log("error", error);
      alert(`error: ${error.code} : ${error.message}`);
      // ...
    });
  }
}
