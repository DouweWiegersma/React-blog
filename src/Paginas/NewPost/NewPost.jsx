import '/src/Paginas/NewPost/NewPost.css'
import {useState} from "react";
// import readTime from "../../Helpers/ReadTime.js";
import changeDate from "../../Helpers/Date.js";
import axios from "axios";


function NewPosts(){
    const [formData, setFormData] = useState({
        title: "",
        subtitle: "",
        author: "",
        content: "",
    })

    let created = new Date().toISOString()
    const newDate = changeDate(created)
    // const leestijd = readTime(formData.message)

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/posts',
                formData
                )
            console.log('inzending succesvol', response);
        } catch (e) {
            console.error('fout bij het posten', e)
        }
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(formData, leestijd)}
    //


    return(
        <>
            <div className="outer-container">
            <h1 className="title-newpost"> Post toevoegen {newDate}</h1>
                <form className="form-layout" onSubmit={handleSubmit}>


                <label className="labels">Titel:</label>
                <input type="text" className="input-fields"
                name="title" value={formData.name} required onChange={handleChange} />


                <label className="labels"> SubTitel:</label>
                <input type="text" className="input-fields"
                name="subtitle" value={formData.subtitle} onChange={handleChange} required/>


                <label className="labels">Auteur:</label>
                <input type="text" className="input-fields"
                name="author" value={formData.author} onChange={handleChange} required/>


                <label className="label-textfield">Bericht:</label>
                <textarea className="text-fields" rows={20} maxLength={1000}
                name="content" value={formData.content} onChange={handleChange}/>

                <button type="submit" className="send-button"> Toevoegen </button>
            </form>
            </div>
        </>
    )
}
export default NewPosts;

