import { Store } from "../core"

interface State {
  photo: string
  name: string
  email: string
  blog: string
  github: string
  repository: string
}

export default new Store<State>({
  photo: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  name: "JHREE333 / JHREE",
  email: "jhree333@gmail.com",
  blog: "https://velog.io/@jhree333/posts",
  github: "https://github.com/jhree333",
  repository: "https://github.com/jhree333/vanillajs-movie-app",
})
