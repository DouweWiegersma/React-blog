import posts from '/src/constants/data.json'
import { useParams } from "react-router-dom";
import changeDate from "../../Helpers/Date.js";





function DetailPost(){

         const {id} = useParams()
         const ids = parseInt(id)

    return(
        <>

            <h1>{posts[ids - 1].title} ({posts[ids - 1].readTime} minuten)</h1>
            <p> {posts[ids - 1].subtitle}</p>
            <p>Geschreven door {posts[ids - 1].author}, {changeDate(posts[ids - 1 ].created)} </p>
            <p>{posts[ids - 1].content}</p>
            <p>{posts[ids - 1].comments} reacties - {posts[ids - 1].shares} gedeeld</p>

        </>
    )
}

export default DetailPost;