import { Header } from "./components/Header"
import {Post} from "./Post"
import './global.css'
import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";

export function App (){
  return (
 <div> 
  <Header/>
   <div className={styles.wrapper}>
   <Sidebar />
    <main>
    <Post
       author="vagne alves" 
       content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, porro iure. Officia eveniet magnam facilis vero doloremque. Fuga nulla, pariatur cum cumque molestias aliquam iusto commodi odio perferendis, adipisci consequuntur."  
     />

     <Post 
     author=" vagner sena"
     content="alvesdesousa"
     />
    </main>
   </div>
 </div>)
}



