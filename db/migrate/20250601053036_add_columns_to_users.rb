class AddColumnsToUsers < ActiveRecord::Migration[8.0]
  def change
    create_enum :user_role, %w[admin mentor mentee]
    create_enum :user_category, %w[pre-health graduate]
    change_table :users, bulk: true do |t|
      t.string :first_name, null: false, default: ''
      t.string :last_name, null: false, default: ''
      t.enum :role, enum_type: :user_role, null: false, default: 'mentee'
      t.enum :category, enum_type: :user_category, null: false, default: 'pre-health'
    end
  end
end
