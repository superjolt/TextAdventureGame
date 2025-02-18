from flask import Flask, render_template, request, jsonify
import openai
import os
from dotenv import load_dotenv

app = Flask(__name__)

# Load the OpenAI API key from the .env file
load_dotenv()
openai.api_key = os.getenv("OPEN_AI_KEY")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/action', methods=['POST'])
def action():
    user_input = request.json.get('input', '').lower()
    
    # Call OpenAI GPT-3.5-turbo to generate a response
    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are in a text adventure game."},
                {"role": "user", "content": user_input}
            ],
            max_tokens=50
        )
        gpt_response = response.choices[0].message['content'].strip()
    except Exception as e:
        gpt_response = f"Error: {str(e)}"
    
    return jsonify({"response": gpt_response})

if __name__ == '__main__':
    app.run(debug=True)