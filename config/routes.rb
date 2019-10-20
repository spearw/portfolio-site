Rails.application.routes.draw do
  get '/welcome/index', to: 'welcome#index', as: :welcome_path
  get '/pages/:page' => 'pages#show'
  match 'pages/:action', :controller => "pages", via: :get

  get 'contact-me', to: 'messages#new', as: 'new_message'
  post 'contact-me', to: 'messages#create', as: 'create_message'

  root 'welcome#index'
end
