import './Post.css';
export default function Post() {
  return (
    <div className={'post'}>
      <h1>This is the post title</h1>
      <hr style={{ width: '95%', border: '0.1px solid black' }} />      <p>this is the post body</p>
    </div>
  );
}
