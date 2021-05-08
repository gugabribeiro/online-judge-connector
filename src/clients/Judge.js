const http = require('axios')

class Judge {
  profile(user) {
    return http.get(this.routes.profile(user))
  }

  submissions(user) {
    return http.get(this.routes.submissions(user))
  }

  get routes() {
    return {
      root: () => '',
      profile: (user) => `${this.routes.root()}/`,
      submissions: (user) => `${this.routes.root()}/`,
    }
  }
}

module.exports = Judge
