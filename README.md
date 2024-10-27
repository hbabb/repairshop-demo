# Repair Shop Management System

A modern web application for managing repair shop operations, customer information, and ticket tracking. Built with Next.js 15 and React 19.

## 🚀 Features

- **Passwordless Authentication**: Secure employee access with Kinde authentication
- **Real-time Ticket Tracking**: View and manage repair tickets in real-time
- **Customer Management**: Comprehensive customer information storage and retrieval
- **Role-based Access Control**: Different permission levels for employees, managers, and admins
- **Responsive Design**: Optimized for desktop with tablet support
- **Theme Support**: Light and dark mode options
- **Search & Navigation**: Easy-to-use interface for finding customers and tickets

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Frontend**: React 19 (RC), TypeScript, TailwindCSS
- **UI Components**: Shadcn UI
- **Database**: Neon (PostgreSQL)
- **ORM**: Drizzle
- **Authentication**: Kinde
- **Form Handling**: React Hook Form, Zod
- **Data Display**: TanStack Table
- **Error Tracking**: Sentry
- **Security**: next-safe-action
- **Deployment**: Vercel

## 🏗️ Prerequisites

- Node.js (LTS version)
- PostgreSQL database (Neon)
- Kinde account for authentication
- Sentry account for error tracking

## 🚦 Getting Started

1. Clone the repository:

    ```bash
    git clone [repository-url]
    cd repair-shop-app
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:

    ```env
    DATABASE_URL=your_neon_db_url
    KINDE_CLIENT_ID=your_kinde_client_id
    KINDE_CLIENT_SECRET=your_kinde_client_secret
    KINDE_ISSUER_URL=your_kinde_issuer_url
    SENTRY_DSN=your_sentry_dsn
    ```

4. Run the development server:

    ```bash
    npm run dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 👥 User Roles

- **Employee**: Can create tickets, view customers, and edit assigned tickets
- **Manager**: Additional ability to edit and delete all tickets
- **Admin**: Full system access including user management

## 🔐 Security Features

- Weekly login requirement
- Immediate access revocation capability
- Passwordless authentication
- Type-safe API actions
- Real-time error tracking and monitoring

## 📱 Supported Platforms

- Desktop (Primary focus)
- Tablet devices
- Dark/Light mode support

## 🔧 Support

For technical issues or support requests, please contact:

- [Support Email]
- [Support Portal]

## 📄 License

[Your License] - See LICENSE file for details

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

---

Built with ❤️ using Next.js and React
