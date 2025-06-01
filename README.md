# Rails 8 + React + Inertia Starter Kit

A modern, production-ready starter kit for building full-stack web applications with Rails 8, React, TypeScript, and Inertia.js.

## 🚀 What's Included

### Backend (Rails 8)
- **Authentication System**: Rails 8 native authentication (no Devise)
- **Session Management**: Database-backed sessions with security features
- **User Management**: Complete user model with roles and categories
- **Database**: PostgreSQL with enum support
- **Security**: Rate limiting, CSRF protection, signed cookies

### Frontend (React + TypeScript)
- **React 18**: Latest React with TypeScript
- **Inertia.js**: Seamless Rails-React integration (no API needed)
- **Vite**: Lightning-fast build tool and dev server
- **Tailwind CSS**: Modern utility-first styling
- **shadcn/ui**: Beautiful, accessible component library
- **Form Handling**: react-hook-form with Zod validation

### Developer Experience
- **Testing**: RSpec (backend) + Playwright (E2E)
- **Code Quality**: ESLint, Prettier, RuboCop
- **Type Safety**: TypeScript throughout
- **Hot Reload**: Instant feedback during development

## 🛠 Tech Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| **Backend** | Rails 8.0 | API and server-side logic |
| **Database** | PostgreSQL | Primary database with enum support |
| **Frontend** | React 18 + TypeScript | Interactive user interface |
| **Styling** | Tailwind CSS + shadcn/ui | Beautiful, accessible design |
| **Integration** | Inertia.js | Rails-React bridge (no API needed) |
| **Build Tool** | Vite | Fast development and production builds |
| **Testing** | RSpec + Playwright | Backend and E2E testing |

## 🚀 Quick Start

### Prerequisites
- Ruby 3.2+
- Node.js 18+
- PostgreSQL
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/rails-8-react-starter.git
   cd rails-8-react-starter
   ```

2. **Install dependencies**
   ```bash
   # Install Ruby gems
   bundle install
   
   # Install Node packages
   npm install
   # or
   yarn install
   ```

3. **Setup database**
   ```bash
   # Create and migrate database
   bin/rails db:create
   bin/rails db:migrate
   
   # Optional: Seed with sample data
   bin/rails db:seed
   ```

4. **Start development servers**
   ```bash
   # Start Rails server
   bin/rails server
   
   # In another terminal, start Vite dev server
   npm run dev
   ```

5. **Visit your application**
   Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
app/
├── controllers/           # Rails controllers
│   ├── application_controller.rb
│   ├── sessions_controller.rb
│   └── concerns/
│       └── authentication.rb
├── models/               # Rails models
│   ├── user.rb
│   ├── session.rb
│   └── current.rb
├── frontend/             # React frontend
│   ├── components/       # Reusable components
│   │   └── ui/          # shadcn/ui components
│   ├── pages/           # Inertia pages
│   │   ├── Auth/        # Authentication pages
│   │   └── Layout.tsx   # Main layout
│   ├── lib/             # Utilities and schemas
│   └── entrypoints/     # Vite entry points
└── views/               # Rails views (minimal)
```

## 🔐 Authentication Features

- **Secure Password Handling**: bcrypt with proper salting
- **Session Management**: Database-backed sessions
- **Rate Limiting**: Brute force protection
- **CSRF Protection**: Built-in Rails security
- **User Roles**: Admin, Mentor, Mentee roles
- **Categories**: Pre-health, Graduate categories
- **Password Reset**: Email-based password recovery

## 🎨 UI Components

Built with **shadcn/ui** for beautiful, accessible components:
- Forms with validation
- Buttons and inputs
- Select dropdowns
- Navigation components
- Dark mode support

## 🧪 Testing

### Backend Tests (RSpec)
```bash
# Run all tests
bundle exec rspec

# Run specific test file
bundle exec rspec spec/models/user_spec.rb
```

### Frontend Tests (Playwright)
```bash
# Run E2E tests
npx playwright test

# Run with UI
npx playwright test --ui
```

### Environment Variables
```bash
# Required for production
DATABASE_URL=postgresql://...
SECRET_KEY_BASE=your_secret_key
RAILS_ENV=production
```

## 🔧 Development Commands

```bash
# Rails commands
bin/rails server                # Start Rails server
bin/rails console              # Rails console
bin/rails db:migrate           # Run migrations
bundle exec rspec              # Run tests

# Frontend commands
npm run dev                    # Start Vite dev server
npm run build                  # Build for production
npm run lint                   # Run ESLint
npm run typecheck             # TypeScript checking

# Code quality
bundle exec rubocop            # Ruby linting
bundle exec rubocop -a         # Auto-fix Ruby issues
```

## 🎯 What to Build Next

This starter kit gives you a solid foundation to build:
- **SaaS Applications**: User management and authentication ready
- **Marketplaces**: Multi-user platforms with roles
- **Social Platforms**: User profiles and interactions
- **Admin Dashboards**: Role-based access control
- **E-commerce**: User accounts and order management

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Rails team for the amazing framework
- React team for the excellent frontend library
- Inertia.js for seamless Rails-React integration
- shadcn for the beautiful UI components
- All the open source contributors who made this possible

---

**Happy coding!** 🎉