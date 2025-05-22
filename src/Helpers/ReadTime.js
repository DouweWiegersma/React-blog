function readTime(text, wordMin = 333){
    if (!text || typeof text !== "string") return { words: 0, min: 0, sec: 0 };
    const words = text.trim().split(/\s+/);
    const totalWords = text.trim() === "" ? 0 :words.length;

    const totalMin = totalWords / wordMin;
    const min = Math.round(totalMin);
    const sec = Math.round((totalMin - min) * 60);

    return { time: `${min} Minuten - ${sec} Seconden` }
}

export default readTime

// De readTime in minuten. De leestijd bereken je zelf op basis van het aantal ingevulde woorden: een gemiddelde gebruiker leest 100 woorden in 0.3 minuten. Zorg dat je decimalen altijd afrond naar hele getallen. Zei iemand daar... helperfunctie?