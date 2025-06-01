class User < ApplicationRecord
  has_secure_password
  has_many :sessions, dependent: :destroy

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :role, presence: true
  validates :category, presence: true

  normalizes :email_address, with: ->(e) { e.strip.downcase }
end
