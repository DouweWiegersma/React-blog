import '/src/Paginas/NewPost/NewPost.css'
import {useState} from "react";
import axios from "axios";
import Reading from "../../Helpers/ReadTime.js";
import {Link} from "react-router-dom";



const time = new Date().toISOString()
function NewPosts() {
    const [error, setError] = useState("")
    const [succes, setSucces] = useState(false)
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        title: "",
        subtitle: "",
        author: "",
        content: "",
    })

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setError("")
        console.log(formData)
        try {
            const allData = {
                ...formData,
                readTime: Reading(formData.content),
                created: time,
                shares: 0,
                comments: 0,
            }
            const response = await axios.post('http://localhost:3000/posts', allData)

            if (response.status === 201) {
                setSucces(true);
                setFormData({ title: "", subtitle: "", author: "", content: "",})
            } else {
                setError("Post maken is mislukt")
            }
        } catch (e) {
            console.error("fout bij maken van een post", e)
            setError("fout bij maken van een post, probeer het opnieuw!")
        } finally {
            setLoading(false)
        }
    }

    return (
        <>

            <div className="outer-container">
            <h1 className="title-newpost"> Post toevoegen</h1>
                <form className="form-layout" onSubmit={handleSubmit}>


                <label className="labels">Titel:</label>
                <input type="text" className="input-fields"
                name="title" value={formData?.title} required onChange={handleChange} />


                <label className="labels"> SubTitel:</label>
                <input type="text" className="input-fields"
                name="subtitle" value={formData?.subtitle} onChange={handleChange} required/>



                <label className="labels">Naam en achternaam:</label>
                <input type="text" className="input-fields"
                name="author" value={formData?.author} onChange={handleChange} required/>


                <label className="label-textfield">Blogpost:</label>
                <textarea className="text-fields" rows={20} maxLength={1000} minLength={300} required
                name="content" value={formData?.content} onChange={handleChange}/>


                <button type="submit" className="send-button" disabled={loading}>
                    {loading ? 'versturen...' : 'post maken'} </button>
                    {error && <p className='wrong' style={{ color: 'red' }}>{error}</p> }
                    {succes && <Link to='/posts' className='succesfull'> Check your post here!</Link>}

                </form>
            </div>
        </>
    );
}
export default NewPosts;

