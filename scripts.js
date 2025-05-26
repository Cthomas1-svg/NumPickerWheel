const animateurs = ["Antoine", "Isabelle", "Steve", "Kemodjan", "Manuel", "Veronique", "Marie", "Constant", "Beatrice", "Hanae", "Tristan"];
let animateursRestants = [...animateurs];

function choisirAnimateur() {
    if (animateursRestants.length === 0) {
        document.getElementById('animateur').innerText = 'Tous les animateurs ont été choisis!';
        return;
    }
    const index = Math.floor(Math.random() * animateursRestants.length);
    const animateurChoisi = animateursRestants.splice(index, 1)[0];
    document.getElementById('animateur').innerText = `Prochain animateur: ${animateurChoisi}`;
    
    // Mettre à jour l'iframe Picker Wheel avec les animateurs restants
    const baseUrl = "https://pickerwheel.com/emb/?choices=";
    const choicesStr = animateursRestants.join(',');
    const iframeUrl = baseUrl + choicesStr;
    document.getElementById('pickerWheel').src = iframeUrl;
}
