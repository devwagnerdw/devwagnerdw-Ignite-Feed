import {format , formatDistanceToNow} from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import { useState } from 'react';


import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';



export function Post({author ,publishedAt, content}) {
const [comments,setComments] = useState([
  'Post muito legal!'
])

const [newCommentText, setNewCommentText] = useState('');

console.log(newCommentText)

 const publisheDateFormatted=format(publishedAt, "d 'de' LLL 'ás' HH:mm'h' ", {locale:ptBr})

 const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
  locale: ptBr,
  addSuffix: true
});

function handleCrateNewComment(){
  event.preventDefault()


 setComments([...comments, newCommentText]);
 setNewCommentText('');

}


function handleNewCommentChange(){
  event.target.setCustomValidity('')
  setNewCommentText(event.target.value)

}


function handleNewCommentInvalid(){
  event.target.setCustomValidity('Esse campo é obrigatório!')
}


function deleteComment(commentToDelete){
  //imutabilidade > as variaveis não sofrem mutação, nos criamos um novo valor (um novo espaço na memoria)

  const commentsWithoutDeletedOne = comments.filter(comment => {
    return comment !== commentToDelete
  })
  setComments(commentsWithoutDeletedOne);

}


const isNewCommentEmpty= newCommentText.length==0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
<strong>{author.name}</strong>
<span> {author.role}</span>
          </div>
        </div>

        <time title={publisheDateFormatted}
         dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>

      </header>
      <div className={styles.content}>
      {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCrateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
        name='comment'
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
              Publicar
            </button>
        </footer>
      </form>

      <div className={styles.commentList}> 
      {comments.map(comment => {
        return (
          <Comment 
            key={comment} 
            content={comment}
            onDeleteComment={deleteComment}
        />)
      })}
      </div>
    </article>
  )
}