import './Post.css';
export default function Post({postTitle, children}) {
    return (
    <div className={'post'}>
      <h1>{postTitle}</h1>
      <hr style={{ width: '95%', border: '0.1px solid black' }} /> 
      <p>{children}</p>
    </div>
  );
}
