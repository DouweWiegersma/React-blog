function Reading(text){
    if (typeof text !== 'string') return 0;

    const wordsPerMinute = 300;
    const words = text.trim().split(/\s+/).length
    const time = Math.ceil(words/ wordsPerMinute)
    return time
}

export default Reading