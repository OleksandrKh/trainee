import axios from 'axios';

module.exports = {
  fetchPopularRepos: (language) => {
    let encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories');

    return axios.get(encodedURI)
      .ten((response) => {
        return response.data.items;
      })
  }
}
