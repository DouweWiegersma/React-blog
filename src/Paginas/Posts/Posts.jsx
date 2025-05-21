import posts from '/src/constants/data.json'
import '/src/Paginas/Posts/Posts.css'
import {Link} from "react-router-dom";

function Posts(){


    return(
        <>
            <h1 className='title'>Bekijk alle 17 posts op het platform</h1>
            {posts.map((post, id) => (
                <div key={id} className='blogpost'>

                    <div className='author'><Link to={`/DetailPost/${post.id}`} className='post'> {post.title}</Link> ({post.author}) <br/>
                        {post.comments} reacties - {post.shares} gedeeld
                    </div>
                </div>
            ))}

        </>
    )
}

export default Posts;