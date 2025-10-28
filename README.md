# Mood Tracker

A comprehensive mood tracking and journaling application built with Next.js, designed to help users monitor their emotional well-being through daily journal entries with AI-powered mood analysis.

## 🚀 Features Completed

### ✅ Core Infrastructure
- **Next.js 14** application with TypeScript
- **Clerk Authentication** for secure user management
- **Prisma ORM** with PostgreSQL database
- **Tailwind CSS** for modern styling
- **ESLint & Prettier** for code quality

### ✅ Database Schema
- **User Management**: Complete user model with Clerk integration
- **Journal Entries**: Full CRUD operations for user journal entries
- **AI Analysis**: Entry analysis model for mood tracking with sentiment scores
- **Relational Data**: Proper relationships between users, entries, and analysis

### ✅ Authentication & User Management
- Clerk authentication integration
- User registration and sign-in flows
- Protected routes and middleware
- Automatic user creation and management

### ✅ Journal System
- **Dashboard Layout**: Clean, organized journal interface
- **Entry Creation**: Simple "New Entry" card for quick journal creation
- **Entry Display**: Grid layout showing all user entries
- **Entry Cards**: Preview cards for each journal entry
- **Navigation**: Seamless routing between journal views

### ✅ API Infrastructure
- RESTful API endpoints for journal operations
- Server-side data fetching with proper error handling
- Database queries optimized for performance

## 🛠 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Authentication**: Clerk
- **Database**: PostgreSQL with Prisma ORM
- **Styling**: Tailwind CSS
- **Deployment**: Vercel-ready configuration

## 📋 Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- Clerk account for authentication

### Installation

1. Clone the repository:
```bash
git clone https://github.com/pauxiel/mood.git
cd mood-tracker
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```
Add your database URL and Clerk keys to `.env`

4. Set up the database:
```bash
npx prisma migrate dev
npx prisma generate
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🔮 Coming Soon

### 🔄 In Development
- **Rich Text Editor**: Enhanced journal writing experience with formatting options
- **AI Mood Analysis**: Automatic sentiment analysis and mood detection for entries
- **Mood Visualization**: Charts and graphs showing mood trends over time
- **Entry Search & Filtering**: Find specific entries by date, mood, or content

### 🎯 Planned Features
- **Mood Analytics Dashboard**: Comprehensive mood tracking with insights
- **Export Functionality**: PDF/CSV export of journal entries and analysis
- **Reminder System**: Customizable notifications for daily journaling
- **Themes & Customization**: Personalized interface options
- **Mobile App**: React Native companion app
- **Social Features**: Optional mood sharing with friends/family
- **Advanced AI Features**: 
  - Mood prediction based on patterns
  - Personalized journaling prompts
  - Mental health insights and recommendations

### 🚀 Future Enhancements
- **Integration with Health Apps**: Sync with fitness trackers and health data
- **Meditation Timer**: Built-in mindfulness features
- **Goal Tracking**: Set and monitor emotional wellness goals
- **Professional Integration**: Share reports with therapists/counselors
- **Offline Support**: Progressive Web App capabilities

## 📱 Current UI

The application features a clean, dark-themed interface with:
- Landing page with call-to-action
- Protected dashboard for authenticated users
- Grid-based journal entry layout
- Responsive design for all devices

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private and proprietary.
