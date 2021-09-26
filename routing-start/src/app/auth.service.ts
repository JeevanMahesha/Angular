export class AuthService {
  loginStatus: boolean = false;

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loginStatus);
      }, 800);
    });
    return promise;
  }

  login() {
    this.loginStatus = !this.loginStatus;
  }
  logout() {
    this.loginStatus = !this.loginStatus;
  }
}
