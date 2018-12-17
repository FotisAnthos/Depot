require 'test_helper'

class AdminControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    post login_url
    get admin_url
    assert_redirected_to login_url
  end

end
