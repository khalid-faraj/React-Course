import './Post.css';
import { HRTrimmed } from 'flowbite-react';
export default function Post() {
  return (
    <div className={'post'}>
      <h1>This is the post title</h1>
      <HRTrimmed />
      <p>this is the post body</p>
    </div>
  );
}
