require 'sinatra'
require 'json'

# Default file paths
# set :root, File.dirname(__FILE__)
# set :public_folder, settings.root + "public"
# set :views, settings.root + "views"

before do
  response.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000'
end


get '/events/london' do
  weather_in_london = {
          "id": 2,
          "link": "https://www.meetup.com/Women-Who-Code-London/",
          "location": "ThoughtWorks, 76 - 78 Wardour Street, London",
          "outdoors": false,
          "what": "Women Who Code VR Hackathon",
          "when": "2017-05-06T18:30"
      }
   JSON.generate(weather_in_london)
end
