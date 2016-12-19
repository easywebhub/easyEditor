declare let firebase;
export class Login {
  public createUser(user) {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch(function (error) {
      // Handle Errors here.
      alert(`error  ${error.code} : ${error.message}`)
      console.log("error", error);
    });
  }
  

}
