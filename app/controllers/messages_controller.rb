class MessagesController < ApplicationController
    def new
        @message = Message.new

        respond_to do |format|
          format.html
          format.js
        end
    end

    def create
        @message = Message.new message_params
    
        if @message.valid?
          MessageMailer.contact_me(@message).deliver_now
          redirect_to new_message_url, notice: "Message received, thanks!"
        else
          render :new
        end
    end

    private

    def message_params
        params.require(:message).permit(:name, :email, :body)
    end
end
