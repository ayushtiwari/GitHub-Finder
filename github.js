class GitHub {
  constructor() {
     this.clientId = 'a60c38c036202c926378';
     this.clientSecret = '3d55ba3e63fda902003073db8cb5c4b098a54140';
     this.reposCount = 5;
     this.reposSort = 'created:asc';
  }

  async getUser(userName) {

    const profileResponse = await fetch(`https://api.github.com/users/${userName}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
    const reposResponse = await fetch(`https://api.github.com/users/${userName}/repos?per_page=${this.reposCount}&sort=${this.reposSort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`)

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile,
      repos
    }

  }

}
