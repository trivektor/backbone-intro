require 'sinatra'
require 'sinatra/static_assets'
require 'haml'

set :root, File.dirname(__FILE__)

get "/" do
  erb :presentation
end