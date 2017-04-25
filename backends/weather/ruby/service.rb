require 'sinatra'

# Default file paths
# set :root, File.dirname(__FILE__)
# set :public_folder, settings.root + "public"
# set :views, settings.root + "views"

get '/' do
  erb :index
end
