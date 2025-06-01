class ApplicationController < ActionController::Base
  include Authentication
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern
  inertia_share flash: lambda {
    {
      success: flash[:notice],
      error: flash[:alert]
    }
  }, current_user: -> { Current.user if Current.user }
end
