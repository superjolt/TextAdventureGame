let currentLevel = 0;
const story = document.getElementById('story');

const paths = [
    {
        text: "You find yourself in a dark forest. There are two paths in front of you.",
        options: {
            left: "You encounter a friendly squirrel who gives you a magic acorn.",
            right: "You fall into a pit and find a treasure chest."
        }
    },
    {
        text: "You continue your journey and reach a river. Do you swim across or build a raft?",
        options: {
            left: "You swim across and find a hidden cave.",
            right: "You build a raft and sail to an island."
        }
    },
    {
        text: "On the island, you see a mountain and a beach. Where do you go?",
        options: {
            left: "You climb the mountain and find a wise old man.",
            right: "You walk along the beach and find a message in a bottle."
        }
    },
    {
        text: "The wise old man offers you a choice between two potions. Which one do you drink?",
        options: {
            left: "You drink the red potion and gain super strength.",
            right: "You drink the blue potion and gain the ability to fly."
        }
    },
    {
        text: "With your new abilities, you face a dragon. Do you fight or flee?",
        options: {
            left: "You fight the dragon and win, finding a treasure hoard.",
            right: "You flee and find a hidden village that welcomes you."
        }
    }
];

function choosePath(direction) {
    if (currentLevel < paths.length) {
        const path = paths[currentLevel];
        story.innerHTML = `<p>${path.options[direction]}</p>`;
        currentLevel++;
        if (currentLevel < paths.length) {
            setTimeout(() => {
                story.innerHTML += `<p>${paths[currentLevel].text}</p>`;
                story.innerHTML += `<button onclick="choosePath('left')">Left</button>`;
                story.innerHTML += `<button onclick="choosePath('right')">Right</button>`;
            }, 2000);
        } else {
            story.innerHTML += '<p>The end.</p>';
        }
    }
}

story.innerHTML = `<p>${paths[0].text}</p>`;
story.innerHTML += `<button onclick="choosePath('left')">Left</button>`;
story.innerHTML += `<button onclick="choosePath('right')">Right</button>`;
