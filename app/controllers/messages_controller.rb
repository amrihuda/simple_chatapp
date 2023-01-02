class MessagesController < ApplicationController
    def new
        @message = Message.new
    end

    def create
        @message = Message.create(msg_params)
        if @message.save
            # redirect_to "/"
            ActionCable.server.broadcast("chat_channel", { message: @message.body })
        else
            
        end
    end

    private
    
    def msg_params
        params.require(:message).permit(:body)
    end
end
