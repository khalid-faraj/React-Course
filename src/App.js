import './App.css';
import 'flowbite-react'
import Header from './Header/Header';
import Post from './Post/Post';
import Box from './ButtonsBox/ButtonsBox';
import { Children } from 'react';
const posts = [
  {id: 1, postTitle: "Khalid", children:"This is Khalid Child"},
  {id: 2, postTitle: "Tarik", children:"This is Tarik Child"},
  {id: 3, postTitle: "Mahmoud", children:"This is Mahmoud Child"},
];

const PostsList = posts.map((post)=>{
    return( 
      <div className={'post'}>
      <h1>{post.postTitle}</h1>
      <hr style={{ width: '95%', border: '0.1px solid black' }} /> 
      <p>{post.children}</p>
    </div>
    );
});
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="flexboxs">
      <div className='post-in-col'>
      {PostsList}
      </div>
      <>
      <Box/>
      </>
      </div>
    
      
    
    </div>
  );
}

export default App;
