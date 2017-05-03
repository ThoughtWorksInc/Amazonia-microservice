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
  file = File.read('/Users/tam/Documents/Amazonia-microservice/data/events.json')
  p file
  p "random"
  file
end
