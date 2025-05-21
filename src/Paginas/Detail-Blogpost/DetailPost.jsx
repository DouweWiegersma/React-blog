import posts from '/src/constants/data.json'
import { useParams } from "react-router-dom";
import changeDate from "../../Helpers/Date.js";
import "/src/Paginas/Detail-Blogpost/DetailPost.css";




function DetailPost(){

         const {id} = useParams()
         const ids = parseInt(id)

    return(
        <>
            <div className="background-details">
            <h1 className="titles">{posts[ids - 1].title} ({posts[ids - 1].readTime} minuten)</h1>
            <p className="subtitles"> {posts[ids - 1].subtitle}</p>
                <cite className='written'>Geschreven door {posts[ids - 1].author}, {changeDate(posts[ids - 1 ].created)} </cite>
            <p className="space">{posts[ids - 1].content}</p>
            <p className="space" c>{posts[ids - 1].comments} reacties - {posts[ids - 1].shares} gedeeld</p>
            </div>
        </>
    )
}

export default DetailPost;