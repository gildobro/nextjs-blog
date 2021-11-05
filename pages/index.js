import Head from 'next/head'
import CreatePost from '../components/CreatePost';


const Home = () => {
  return (
    <div>
      <script src="https://www.gstatic.com/firebasejs/4.9.0/firebase.js"></script>
      <script src="https://www.gstatic.com/firebasejs/4.9.0/firebase-firestore.js"></script>

      <Head>
        <title>Blog App</title>
      </Head>
      <h1><u>Blog</u></h1>
      <CreatePost/>
    </div>
  )
}

export default Home;