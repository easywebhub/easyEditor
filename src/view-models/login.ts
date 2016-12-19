declare let firebase;
export class Login {
  public createUser() {
    firebase.auth().signInWithEmailAndPassword("canhlt.dn@gmail.com", "TCX%2810vn").catch(function (error) {
      // Handle Errors here.
      console.log("error", error);
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }
  

}
