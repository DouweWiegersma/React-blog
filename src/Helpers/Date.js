function changeDate(dateNL) {

    const longOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    const date = new Date(dateNL)
    return date.toLocaleDateString('nl-NL', longOptions)
}
    export default changeDate
