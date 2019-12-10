const Auth = {
  credentials: {
    id: "demo",
    password: "demo"
  },

  accessToken: null,

  get token() {
    if (this.accessToken) {
      return this.accessToken.token;
    } else {
      return null;
    }
  },

  isTokenExpired() {
    return (
      new Date(this.accessToken.expiration).getTime() <= new Date().getTime()
    );
  },

  async fetchToken() {
    if (this.token && !this.isTokenExpired()) {
      return this.accessToken.token;
    }

    const response = await fetch(
      "https://domainservices.dhigroup.com/api/tokens",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.credentials)
      }
    );

    const { accessToken } = await response.json();

    this.accessToken = accessToken;

    return this.accessToken.token;
  }
};

export default Auth;
