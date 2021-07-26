class Github {
    constructor() {
        this.client_id = '03a52d8eab8e5e57e010';
        this.client_secret = 'c2929a2f3db6480a542df9b17b66342128983fea';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();
        const repoData = await repoResponse.json();


        return {
            profile: profileData,
            repos: repoData
        }
    }
}