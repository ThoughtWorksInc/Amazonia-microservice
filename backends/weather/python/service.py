from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__)
CORS(app)

@app.route("/weather/london")
def hello():
    with open('/Users/tam/Documents/Amazonia-microservice/data/weather.json') as our_data:
        d = json.load(our_data)
        return jsonify(d["weather"])

if __name__ == "__main__":
    app.run(debug=True)
