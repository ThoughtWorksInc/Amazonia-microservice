require 'sinatra'
require 'json'

# Default file paths
# set :root, File.dirname(__FILE__)
# set :public_folder, settings.root + "public"
# set :views, settings.root + "views"

before do
  response.headers['Access-Control-Allow-Origin'] = 'http://localhost:8000'
end

get '/events/london' do
  file = File.read('./data/events.json')
  json_events = JSON.parse(file)
  events = json_events['events']
  JSON.generate(events)
end
