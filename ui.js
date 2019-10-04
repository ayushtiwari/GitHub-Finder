class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  showProfile(user) {
    this.profile.innerHTML = `

      <div class="card-body mb-3">

        <div class="row">

          <div class="col-md-3">
            <img class="img-fluid mb-3" src="${user.avatar_url}">
            <a href = "${user.html_url}" target="_black" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>

          <idv class="col-md-9">
            <span class="badge badge-primary">
              Public Repos : ${user.public_repos}
            </span>
            <span class="badge badge-secondary">
              Public Repos : ${user.public_gists}
            </span>
            <span class="badge badge-success">
              Public Repos : ${user.followers}
            </span>
            <span class="badge badge-info">
              Public Repos : ${user.following}
            </span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company : ${user.company}</li>
              <li class="list-group-item">Blog : <a href="${user.blog}">${user.blog}</a></li>
              <li class="list-group-item">Location : ${user.location}</li>
              <li class="list-group-item">Member Since : ${user.created_at}</li>
            </ul>
            <h3 class="page-heading mt-4 mb-3 border-bottom">Latest Repos</h3>
            <div id="repos"></div>
          </div>

        </div>

      </div>

    `;
  }

  showRepos(repos) {

    console.log(repos);

    let output = '';

    repos.forEach((repo) => {
      output += `

        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}">${repo.name}</a>
            </div>
            <div class="col-md-6">
            <ul class="list-group">
              <li class="list-group-item">Stars : ${repo.stargazers_count}</li>
              <li class="list-group-item">Watchers : ${repo.watchers_count}</li>
              <li class="list-group-item">Forks : ${repo.forks_count}</li>
            </ul>
            </div>
          </div>
        </div>

      `;

      document.getElementById('repos').innerHTML = output;
    });


  }

  clearProfile() {
    this.profile.innerHTML = '';
  }

  showAlert(message, className) {

    // this.clearAlert();

    const div = document.createElement('div');
    div.className = className;
    div.className += ' mt-2';

    div.appendChild(document.createTextNode(message));

    const container = document.querySelector('.searchContainer');
    const search = document.querySelector('.search');

    container.insertBefore(div, search);

    setTimeout(() => this.clearAlert(), 2000);

  }

  clearAlert() {

    // console.log('clearing Alert');
    const alert = document.querySelector('.alert');

    if(alert) {
      alert.remove();
    }

  }

}
