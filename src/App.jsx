import { Header } from './components/Header'
import {Post} from './components/Post'
import { Sidebar } from './components/Sideba'

import styles from './App.module.css'
import './global.css'

const posts =  [
  {
    id:1,
    author:{
      avatarUrl: 'https://github.com/VITORMATIOSKI.png',
      name: 'Vitor Matioski',
      role: 'Desenvolvedor FullStack'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 😋😋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: '👉 jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-09-26 20:00:00')
  },
  {
    id:2,
    author:{
      avatarUrl: 'https://avatars.githubusercontent.com/u/87811000?v=4',
      name: 'Rafael Leite',
      role: 'Desenvolvedor FullStack'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 😋😋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: '👉 jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-09-26 20:00:00')
  },
  {
    id:3,
    author:{
      avatarUrl: 'https://avatars.githubusercontent.com/u/88065540?v=4',
      name: 'André Matioski',
      role: 'Desenvolvedor FullStack'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 😋😋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: '👉 jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-09-26 20:00:00')
  }
]

function App() {
  
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
