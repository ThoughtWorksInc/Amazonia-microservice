from flask import Flask, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

@app.route("/weather/london")
def hello():
  weather_in_london = {
    "location": "London",
    "temperature": 35,
    "temperatureUnits": "Celsius",
    "forecast": "Sunny"
  }
  return jsonify(weather_in_london)

if __name__ == "__main__":
    app.run(debug=True)
