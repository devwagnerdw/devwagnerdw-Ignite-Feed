import styles from './Post.module.css';


export function Post (){
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/devwagnerdw.png" />
          <div className={styles.authorInfo}>
<strong>Vagne Alves</strong>
<span> Web Developer</span>
          </div>
        </div>

        <time title='14 de Janeiro ás 08:13h' dateTime='2023-01-14 08:13:00'>Publicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p> 👉<a href=""> jane.design/doctorcare</a></p>
        <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
      </div>
    </article>
  )
}