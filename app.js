// import axios from "axios/dist/browser/axios.cjs";

let GithubProfilsUserComponent = {
  template: "#github-profils-user-card",
};

Vue.createApp({})

  .component("github-profils", {
    template: "#github-profils-template",

    components: { "github-profils-user-card": GithubProfilsUserComponent },

    data() {
      return {
        githubUsers: [],
      };
    },

    created() {
      this.getGithubUser();
    },

    methods: {
      getGithubUser() {
        axios
          .get("https://api.github.com/users")
          .then((res) => {
            this.githubUsers = res.data;
          })
          .catch()
          .finally();
      },
    },
  })

  .mount("#app");
