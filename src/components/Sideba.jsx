import styles from './Sidebar.module.css'

import {PencilLine} from 'phosphor-react'
import { Avatar } from './Avatar'

export function Sidebar(){
     return(
          <aside className={styles.sidebar}>
               <img className={styles.cover}
                         src="https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" alt="" />

               <div className={styles.profile}>
                    <Avatar hasBorder src="https://github.com/VITORMATIOSKI.png"/>

                    <strong>Vitor M Matioski</strong>
                    <span>Web Developer</span>
               </div>

               <footer>
                    <a href="">
                         <PencilLine size={18}/>
                         Editar seu Perfil
                    </a>
               </footer>
          </aside>
     )
}
