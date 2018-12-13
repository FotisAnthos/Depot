class StoreController < ApplicationController
  include CurrentCart
  skip_before_action :authorize
  before_action :set_cart

  def index
    if params[:set_locale]
      redirect_to store_index_url(locale: I18n.locale)
    else
      @products = Product.order(:title)
    end
  end
end
