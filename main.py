import os
from dotenv import load_dotenv
from flask import Flask, render_template

load_dotenv()

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret_key'

@app.route('/', methods=['GET', 'POST'])
def home():
  API_TOKEN = os.environ.get('API_TOKEN')
  return render_template('index.html', API_TOKEN=API_TOKEN )

if __name__ == '__main__':
    app.run(debug=True)
