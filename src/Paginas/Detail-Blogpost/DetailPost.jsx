import {Link, useParams} from "react-router-dom";
import changeDate from "../../Helpers/Date.js";
import "/src/Paginas/Detail-Blogpost/DetailPost.css";
import {useEffect, useState} from "react";
import axios from "axios";



function DetailPost(){
    const { id } = useParams()
    const [posts, setPosts] = useState("")
    const [error, setError] = useState("")


    useEffect( () => {
        async function fetchData() {
            try {
                const response = await axios.get(`http://localhost:3000/posts/${id}`)
                setPosts(response.data)
                setError("")


            }
            catch(e){
                console.error('data is niet opgehaald', e)
                setError("Er is iets mis gegaan met het ophalen van de data!")
            }

        }

        fetchData()
    }, [id])

    if (error) return <p> Er is iets mis gegaan, Probeer het overnieuw!</p>
    return(
        <>



            <div key={posts.id} className='background-details'>
            <h1 className='titles'>{posts.title} </h1>
            <h2 className='subtitles'>{posts.subtitle}  </h2>
            <p className='written'> Geschreven door {posts.author} op <cite>{changeDate(posts.created)}</cite></p>
            <p> {posts.readTime} minuten lezen</p>
            <p>{posts.content} </p>
            <p>{posts.comments} reacties - {posts.shares} gedeeld</p>
                <p className='space'>
                <Link to='/posts' className='goBack'> Ga terug naar posts</Link>
                </p>
            </div>


        </>
    )
}

export default DetailPost;