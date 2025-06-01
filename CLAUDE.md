# Mentor-Mentee Matching Platform

## Project Overview
A mentor-mentee matching platform for pre-health and pre-graduate students. Users complete questionnaires based on their role (mentor/mentee) and category (pre-health/graduate), then mentors can browse and select mentees to work with.

## Tech Stack
- **Backend**: Ruby on Rails 8.0 + PostgreSQL
- **Frontend**: React + TypeScript + Inertia.js
- **Styling**: Tailwind CSS + shadcn/ui
- **Testing**: RSpec + Playwright

## Development Commands
```bash
# Rails
bin/rails server
bin/rails console
bin/rails db:migrate
bundle exec rspec

# Frontend  
npm run dev
npm run lint
npm run typecheck
npx playwright test
```

## Current Focus: Authentication (Rails 8 Native)

### Learning Goals for Authentication
- **Theory**: Password hashing, sessions, cookies, security
- **Rails**: Models, controllers, concerns, before_action filters
- **React**: Forms, state management, TypeScript
- **Integration**: How Rails + React work together via Inertia

### Next Steps
1. **Generate authentication**: `rails generate authentication User`
2. **Analyze generated code**: Understand every file and pattern
3. **Add role/category**: Customize User model for our platform
4. **Build React forms**: Sign up/login with role selection
5. **Style with shadcn/ui**: Professional, accessible forms

## Learning Log
*Updated after each session*

### Session 1 - [Date TBD]
- **Built**: [To be filled]
- **Learned**: [To be filled]
- **Next**: [To be filled]

## Key Decisions
- Rails 8 native auth (not Devise) for deeper learning
- Step-by-step approach with detailed explanations
- Document patterns and decisions as we go