import '/src/Paginas/NewPost/NewPost.css'
import {useState} from "react";

function NewPosts(){

    const [formData, setFormData] = useState({
        title: "",
        subtitle: "",
        author: "",
        message: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
                [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted', formData)
    }

    return(
        <>
            <div className="outer-container">
            <h1 className="title-newpost"> Post toevoegen </h1>
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
                <textarea className="text-fields" rows={20} maxLength={1000} minLength={300}
                name="message" value={formData.message} onChange={handleChange}/>

                <button type="submit" className="send-button"> Toevoegen </button>

            </form>
            </div>
        </>
    )
}
export default NewPosts;


// Titel
// Subtitel
// Auteur
// Bericht
// Alle velden moeten verplicht worden ingevuld. De blogpost moet minimaal 300 en maximaal 2000 karakters lang zijn. Als er niet aan deze voorwaarden is voldaan, kan de post niet worden verzonden.