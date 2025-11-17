# TinyFish Developer Website

A modern, developer-focused website built with Next.js 15, TypeScript, Tailwind CSS, and Payload CMS.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS framework
- **Payload CMS** - Headless CMS for content management
- **Framer Motion** - Animation library
- **MongoDB** - Database for Payload CMS

## Brand Colors

- **Warm Grey**: `#E9E9DC`
- **Orange Burst**: `#FF6700`

## Prerequisites

- Node.js 20+
- MongoDB running locally or a MongoDB Atlas connection string

## Getting Started

1. **Install dependencies:**

```bash
npm install
```

2. **Set up environment variables:**

Copy `.env.example` to `.env` and update with your values:

```bash
cp .env.example .env
```

3. **Start MongoDB** (if running locally):

```bash
# macOS with Homebrew
brew services start mongodb-community

# Or use Docker
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

4. **Run the development server:**

```bash
npm run dev
```

5. **Access the application:**

- **Website**: [http://localhost:3000](http://localhost:3000)
- **Payload Admin**: [http://localhost:3000/admin](http://localhost:3000/admin)

## Project Structure

```
├── app/                      # Next.js App Router
│   ├── (payload)/           # Payload CMS routes (grouped route)
│   │   ├── admin/           # Payload admin panel
│   │   └── api/             # Payload API routes
│   ├── globals.css          # Global styles with Tailwind
│   └── page.tsx             # Homepage
├── components/              # React components
├── lib/                     # Utility functions
│   └── utils.ts            # cn() helper for classnames
├── payload/                 # Payload CMS configuration
│   └── collections/        # CMS collections
│       └── Users.ts        # User collection
├── public/                  # Static assets
├── payload.config.ts        # Payload CMS configuration
├── next.config.ts          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── tailwind.config.ts      # Tailwind CSS configuration
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
