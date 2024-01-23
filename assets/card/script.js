// Fetch GitHub data using the GitHub API
fetch('https://api.github.com/users/manuemmanuel')
    .then(response => response.json())
    .then(data => {
        // Update profile information
        document.querySelector('.profile-image').src = data.avatar_url;
        document.querySelector('.username').textContent = data.login;
        document.querySelector('.bio').textContent = data.bio;

        // Fetch repository data
        return fetch('https://api.github.com/users/manuemmanuel/repos');
    })
    .then(response => response.json())
    .then(data => {
        // Update repository information (using the first repository as an example)
        const firstRepo = data[0];
        document.querySelector('.repo-title').textContent = firstRepo.name;
        document.querySelector('.repo-description').textContent = firstRepo.description;
        document.querySelector('.repo-link').href = firstRepo.html_url;
    })
    .catch(error => console.error(error));
