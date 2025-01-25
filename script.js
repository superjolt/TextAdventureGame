let currentLevel = 0;
const story = document.getElementById('story');

const paths = [
    {
        text: "You find yourself in a dark forest. There are two paths in front of you.",
        options: {
            left: 1,
            right: 2
        }
    },
    {
        text: "You encounter a friendly squirrel who gives you a magic acorn. Do you follow the squirrel or continue on your path?",
        options: {
            left: 3,
            right: 4
        }
    },
    {
        text: "You fall into a pit and find a treasure chest. Do you open the chest or climb out of the pit?",
        options: {
            left: 5,
            right: 6
        }
    },
    {
        text: "The squirrel leads you to a hidden grove. Do you explore the grove or rest?",
        options: {
            left: 7,
            right: 8
        }
    },
    {
        text: "You continue on your path and find a river. Do you swim across or build a raft?",
        options: {
            left: 9,
            right: 10
        }
    },
    {
        text: "You open the chest and find a map. Do you follow the map or ignore it?",
        options: {
            left: 11,
            right: 12
        }
    },
    {
        text: "You climb out of the pit and see a mountain. Do you climb the mountain or walk around it?",
        options: {
            left: 13,
            right: 14
        }
    },
    {
        text: "You explore the grove and find a hidden village. Do you enter the village or stay hidden?",
        options: {
            left: 15,
            right: 16
        }
    },
    {
        text: "You rest and regain your strength. Do you continue your journey or stay and build a shelter?",
        options: {
            left: 17,
            right: 18
        }
    },
    {
        text: "You swim across and find a cave. Do you enter the cave or continue walking?",
        options: {
            left: 19,
            right: 20
        }
    },
    {
        text: "You build a raft and sail to an island. Do you explore the island or stay on the beach?",
        options: {
            left: 21,
            right: 22
        }
    },
    {
        text: "You follow the map and find a hidden treasure. The end.",
        options: {}
    },
    {
        text: "You ignore the map and continue wandering. The end.",
        options: {}
    },
    {
        text: "You climb the mountain and find a wise old man. The end.",
        options: {}
    },
    {
        text: "You walk around the mountain and find a peaceful valley. The end.",
        options: {}
    },
    {
        text: "You enter the village and are welcomed by the villagers. The end.",
        options: {}
    },
    {
        text: "You stay hidden and observe the village from afar. The end.",
        options: {}
    },
    {
        text: "You continue your journey and find a beautiful meadow. The end.",
        options: {}
    },
    {
        text: "You stay and build a shelter, living peacefully in the forest. The end.",
        options: {}
    },
    {
        text: "You enter the cave and find a sleeping dragon. The end.",
        options: {}
    },
    {
        text: "You continue walking and find a hidden waterfall. The end.",
        options: {}
    },
    {
        text: "You explore the island and find ancient ruins. The end.",
        options: {}
    },
    {
        text: "You stay on the beach and enjoy the sunshine. The end.",
        options: {}
    }
];

function choosePath(direction) {
    if (currentLevel < paths.length) {
        const path = paths[currentLevel];
        currentLevel = path.options[direction];
        story.innerHTML = `<p>${paths[currentLevel].text}</p>`;
        if (paths[currentLevel].options.left !== undefined) {
            story.innerHTML += `<button onclick="choosePath('left')">Left</button>`;
            story.innerHTML += `<button onclick="choosePath('right')">Right</button>`;
        } else {
            story.innerHTML += '<p>The end.</p>';
        }
    }
}

story.innerHTML = `<p>${paths[0].text}</p>`;
story.innerHTML += `<button onclick="choosePath('left')">Left</button>`;
story.innerHTML += `<button onclick="choosePath('right')">Right</button>`;
