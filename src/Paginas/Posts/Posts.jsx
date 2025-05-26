import '/src/Paginas/Posts/Posts.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
// import newPost from "../NewPost/NewPost.jsx";


function Posts(){
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect( () => {
        async function fetchData() {
            try {
                const response = await axios.get('http://localhost:3000/posts')
                setPosts(response.data)
                setLoading(false)
            }
            catch(e){
                console.error('data is niet opgehaald', e)
                setLoading(true)
            }

        }
        fetchData();
    }, [])
    if (loading) return <p> bezig met laden....</p>

    return(
        <>

            {posts.map((post) => (
                <div key={post.id} className='blogpost'>
                    <div className='author'>
                        <Link to={`/posts/${post.id}`} className='post'> {post.title}</Link>
                        ({post.author}) <br/> {post.comments} reacties - gedeeld
                    </div>
                </div>))
             }))


                    </>
    )
}

export default Posts;