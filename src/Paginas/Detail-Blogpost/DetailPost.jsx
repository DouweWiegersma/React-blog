import { useParams } from "react-router-dom";
import changeDate from "../../Helpers/Date.js";
import "/src/Paginas/Detail-Blogpost/DetailPost.css";
import {useEffect, useState} from "react";
import axios from "axios";



function DetailPost(){
    const { id } = useParams()
    const [posts, setPosts] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect( () => {
        async function fetchData() {
            try {
                const response = await axios.get(`http://localhost:3000/posts/${id}`)
                setPosts(response.data)
                setLoading(false)
            }
            catch(e){
                console.error('data is niet opgehaald', e)
                setLoading(true)
            }

        }

        fetchData()
    }, [id])
    if (loading) return <p> bezig met laden....</p>
    return(
        <>



            <div key={posts.id} className='background-details'>
            <h1 className='titles'>{posts.title} </h1>
            <h2 className='subtitles'>{posts.subtitle}  </h2>
            <p className='written'> Geschreven door {posts.author} op <cite>{changeDate(posts.created)}</cite></p>
            <p>{posts.content} </p>
            <p>{posts.comments} reacties - {posts.shares} gedeeld</p>
            </div>
        </>
    )
}

export default DetailPost;