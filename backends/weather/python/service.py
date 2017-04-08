from flask import Flask, jsonify
app = Flask(__name__)

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
    app.run()
