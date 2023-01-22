import styles from './Comment.module.css';

import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Comment({content,onDeleteComment}) {
  function handleDeleteComment(){
    onDeleteComment(content)

  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/franciscovinicios.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Vinicius</strong>
              <time title="11 de Maio às 08:13h" dateTime="2023-01-16 08:13:00">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>24</span>
          </button>
        </footer>
      </div>
    </div>
  )
}