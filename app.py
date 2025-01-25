from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Hardcoded responses for the game
responses = {
    "look around": "You see tall trees all around you, their leaves rustling in the wind.",
    "walk forward": "You walk cautiously forward and stumble upon a hidden path.",
    "climb tree": "You climb the nearest tree and spot a distant cabin with smoke rising from its chimney.",
    "shout for help": "Your voice echoes through the forest, but no one replies. It’s eerily silent.",
    "open door": "The door creaks open, revealing a dusty old room filled with cobwebs.",
    "pick up stick": "You pick up a sturdy stick from the ground. It might come in handy!",
    "start fire": "You use the stick to start a small fire, providing warmth and light.",
    "explore cave": "You find a dark cave and carefully venture inside. It smells damp and earthy.",
    "drink water": "You drink from a nearby stream. The cold water refreshes you.",
    "run away": "You run as fast as you can, escaping the unknown danger."
}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/action', methods=['POST'])
def action():
    user_input = request.json.get('input', '').lower()
    response = responses.get(user_input, "Error: Invalid action. Please choose a valid option!")
    return jsonify({"response": response})

if __name__ == '__main__':
    app.run(debug=True)
