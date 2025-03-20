# Next.js Authentication Project

A modern authentication system built with Next.js 13+, featuring a secure user authentication flow with email/password login, protected routes, and user profile management.

## 🚀 Features

- 🔐 Secure Authentication System
- 👤 User Profile Management
- 📧 Email/Password Sign Up & Login
- 🛡️ Protected Routes
- 🎨 Modern UI with Tailwind CSS & shadcn/ui
- 📱 Fully Responsive Design
- 🔒 Password Encryption
- 💾 MongoDB Database Integration

## 🛠️ Tech Stack

- **Framework:** Next.js 13+ (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Database:** MongoDB
- **Authentication:** NextAuth.js
- **Form Handling:** React Hook Form
- **Validation:** Zod
- **State Management:** React Context

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18.17 or higher)
- npm or yarn
- MongoDB (local or Atlas URI)

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/next-auth.git
   cd next-auth
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory and add the following:
   ```env
   MONGODB_URI=your_mongodb_uri
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
next-auth/
├── app/
│   ├── api/
│   │   └── auth/
│   ├── login/
│   ├── signup/
│   └── profile/
├── components/
│   ├── ui/
│   └── auth/
├── lib/
│   └── db/
├── models/
│   └── User.ts
└── public/
```

## 🔒 Authentication Flow

1. **Sign Up**
   - User enters email and password
   - Password is hashed
   - User data is stored in MongoDB
   - Verification email is sent (optional)

2. **Login**
   - User provides credentials
   - Server validates credentials
   - JWT token is generated
   - User is redirected to dashboard

3. **Protected Routes**
   - Routes are protected using middleware
   - Token verification on each request
   - Automatic redirect to login if unauthorized

## 🛡️ Security Features

- Password hashing using bcrypt
- JWT token authentication
- Protected API routes
- CSRF protection
- Rate limiting
- Input validation and sanitization

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop screens
- Tablets
- Mobile devices

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)
Project Link: [https://github.com/yourusername/next-auth](https://github.com/yourusername/next-auth)

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [NextAuth.js](https://next-auth.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [MongoDB](https://www.mongodb.com/)
