import posts from '/src/constants/data.json'
import '/src/Paginas/Posts/Posts.css'
import {Link} from "react-router-dom";

function Posts(){


    return(
        <>
        {posts.map((post, id) => (
            <div key={id} className='blogpost'>
                <p className='author'> <Link to={`/DetailPost/${post.id}`} className='post'> {post.title}</Link> ({post.author})</p> <br/>
                {post.comments} reacties - {post.shares} gedeeld

            </div>
        ))}

        </>
    )
}
export default Posts;