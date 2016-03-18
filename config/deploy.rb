# config valid only for current version of Capistrano
lock '3.4.0'

set :application, 'skynet'
set :repo_url, 'git@github.com:BirdcageSleet/skynet.git'
set :user, 'ec2-user'

namespace :deploy do

  desc "Stop Forever"
  task :started do
    on roles(:app) do
      execute "forever stopall" 
    end
  end

  desc "Install node modules non-globally"
  task :npm_install do
    on roles(:app) do
      execute "cd #{current_path} && npm install --production"
    end
  end
  
  desc "Build /dist with webpack"
  task :webpack_build do
    on roles(:app) do
      execute "cd #{current_path} && webpack"
    end
  end

  desc "Restart application"
  task :restart do
    on roles(:app), in: :sequence, wait: 5 do
      # This assumes you are using upstart to startup your application 
      # - be sure that your upstart script runs as the 'deploy' user
      execute "sudo start node-upstart-script", raise_on_non_zero_exit: false
    end
  end

  before :restart, 'deploy:npm_install', 'deploy:webpack_build'

end
