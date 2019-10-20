class MessageMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.message_mailer.contact_me.subject
  #
  def contact_me(message)
    @name = message.name
    @body = message.body
    @email = message.email

    mail to: "spearw@gmail.com", from: "noreply@portfolio.com"
  end
end
