require 'sinatra'
require 'json'

# Default file paths
# set :root, File.dirname(__FILE__)
# set :public_folder, settings.root + "public"
# set :views, settings.root + "views"

before do
  response.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000'
end


get '/weather/london' do
  weather_in_london = {
     "location": "London",
     "temperature": 30,
     "temperatureUnits": "Celsius",
     "forecast": "Cloudy"
   }
   JSON.generate(weather_in_london)
end
