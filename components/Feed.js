import Stories from "../components/Stories";
import Posts from "../components/Posts";
import MiniProfile from "../components/MiniProfile";
import Suggestion from "./suggestion.js";
function Feed() {
  return (
    <main className='grid grid-cols-1 md:grid-cols-2 md:max-w-6xl xl:grid-cols-3 mx-auto'>
      <section className='col-span-2'>
        <Stories />
        <Posts />
      </section>

      {/*  */}
      <section className='hidden xl:inline-grid md:col-span-1 '>
        <div className='top-20 fixed'>
          <MiniProfile />
          <Suggestion />
        </div>
      </section>
    </main>
  );
}

export default Feed;
