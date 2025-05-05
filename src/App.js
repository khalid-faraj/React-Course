import './App.css';
import 'flowbite-react'
import Header from './Header/Header';
import Post from './Post/Post';
import Box from './ButtonsBox/ButtonsBox';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="flexboxs">
      <div className='post-in-col'>
      <Post postTitle="Khalid Post">
        <h3 style={{margin: '5px'}}>This is the Post Childern!</h3>
      </Post>
      </div>
      <>
      <Box/>
      </>
      </div>
    
      
    
    </div>
  );
}

export default App;
