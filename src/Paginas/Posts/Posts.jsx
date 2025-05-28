import '/src/Paginas/Posts/Posts.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";



function Posts(){
    const [posts, setPosts] = useState([])
    const [error, setError] = useState("")

    useEffect( () => {
        async function fetchData() {
            try {
                const response = await axios.get('http://localhost:3000/posts')
                setPosts(response.data)
                setError("")
            }
            catch(e){
                console.error('data is niet opgehaald', e)
                setError("Kan de data niet vinden. PROBEER HET OVERNIEUW!")
            }

        }
        fetchData();
    }, [])
    if (error) return <p style={{color: 'red'}}> Kan de data niet vinden. Probeer het overnieuw!</p>

    return(
        <>
            <h1 className='title'> Blogposts</h1>
            {posts.map((post) => (
                <div key={post.id} className='blogpost'>
                    <div className='author'>
                        <Link to={`/posts/${post.id}`} className='post'> {post.title}</Link>
                        {" "} ({post.author}) <br/> <p className='space-between'>{post.comments} reacties - {post.shares} gedeeld</p>
                    </div>
                </div>))
             }
                    </>
    )
}

export default Posts;