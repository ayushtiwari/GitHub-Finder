const searchUser = document.getElementById('searchUser');
const ui = new UI();

searchUser.addEventListener('keyup', (evt) => {

  github = new GitHub();

  const userText = evt.target.value;

  if(userText!='') {
    github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found') {
        ui.clearAlert();
        ui.showAlert('User Not Found!', 'alert alert-danger');
      } else {
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    })
    .catch(err => console.log(err));
  } else {
    ui.clearProfile();
  }

  evt.preventDefault();
});
