class RegistrationsController < ApplicationController
  allow_unauthenticated_access

  def new
    render inertia: 'Auth/Signup'
  end

  def create
    @user = User.new(user_params)
    if @user.save
      start_new_session_for @user
      redirect_to root_path, notice: 'Successfully signed up!'
    else
      render inertia: 'Auth/Signup'
    end
  end

  private

  def user_params
    params.permit(:email_address, :password, :first_name, :last_name, :role, :category)
  end
end
