Rails.application.routes.draw do
  get '/welcome/index', to: 'welcome#index', as: :welcome_path

  
  root 'welcome#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
