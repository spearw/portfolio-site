require 'test_helper'

class MessageMailerTest < ActionMailer::TestCase

  test "contact_me" do
    message = Message.new name: 'katie',
                          email: 'katie@example.org',
                          body: 'hello, how are you doing?'

    email = MessageMailer.contact_me(message)

    assert_emails 1 do
      email.deliver_now
    end

    assert_equal 'Message from Portfolio Website', email.subject
    assert_equal ['spearw@gmail.com'], email.to
    assert_equal ['katie@example.org'], email.from
    assert_match /hello, how are you doing?/, email.body.encoded
  end
end