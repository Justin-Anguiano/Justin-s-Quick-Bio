var topics = ['About', 'Work Experience', 'Contact Info', 'Interests'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
    for (var x = 0; x < topics.length; x++) {
        console.log(topics[x]);
    }
}

function selectTopic() {
    if (randomTopic === 'About') {
    console.log("Let's look at my About!");
    } else if (randomTopic === 'Work Experience!') {
    console.log("Let's look at my Work Experience!");
    } else if (randomTopic=== 'Contact Info') {
    console.log("Let's look at my Contact Info!");
    } else if (randomTopic === 'Interests') {
    console.log("Let's look at my Interests!");
    } else {
    console.log("Would you mind trying again please?");
    }
}
console.log("Here is what I'd like to share!");
listTopics();

console.log('Which topic should we look at first?');
selectTopic();



