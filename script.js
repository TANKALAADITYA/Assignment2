const paragraph = `Thank you so much for contacting us. Dreamland guest relations. You're speaking with Ronaldo. May I have your name, please? Yes, sure. My name is robin soleimani. What is your phone number? It is 9876535362 as mentioned in the book Diary. Thank you so much for providing the info!`;


let counter = 1;

for (let sent of sentences){
    if (sent.split(' ').length > 3){
        var masked_sent = `${counter}. ${sent.replace(/[5-9]\d{9}/g, 'XXXXXXXXXX').trim()}`;
        console.log(masked_sent);
        counter++;
    }
}

