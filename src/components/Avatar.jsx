import styles from './Avatar.module.css'
// aplicação do conceito de desestruturação assim aplicando propriedades
export function Avatar({hasBorder=true, src}){
     return(
          <img className={hasBorder ? styles.avatarWithBorder : styles.avatar } src={src} alt="" />
     )
}