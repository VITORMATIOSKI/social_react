import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({content, onDeleteComment}){

     const [likeCount,setLikeCount]= useState(0)

     function handleDeleteComment(){
          onDeleteComment(content)
     }

     function handleLikeComment(){
          setLikeCount(likeCount +1)
     }
     return(
          <div className={styles.comment}>
               <Avatar hasBorder={false} src="https://github.com/VITORMATIOSKI.png"/>

               <div className={styles.commentBox}>
                    <div className={styles.commentContent}>
                         <header>
                              <div className={styles.authorAndTime}>
                                   <strong>Vitor Matioski</strong>
                                   <time title='22 de Setembro às 11h38' dateTime='2022-09-22 11:39'>Cerca de 1h atrás</time>
                              </div>
                              <button onClick={handleDeleteComment} title='Deletar comentario'>
                                   <Trash size={24}/>
                              </button>
                         </header>

                         <p>{content}</p>
                    </div>
                    <footer>
                         <button onClick={handleLikeComment}>
                              <ThumbsUp/>Aplaudir <span>{likeCount}</span>
                         </button>
                    </footer>
               </div>
          </div>
     )
}