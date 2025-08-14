# HASHHAWKS

A luxury decentralized application (DApp) website featuring cutting-edge 3D visual effects, parallax scrolling, and modern UI components.

## Overview

HASHHAWKS is a sophisticated web application that combines blockchain technology with premium visual design. The project showcases interactive 3D elements powered by Spline, smooth parallax animations, and a modern card-based layout featuring team member profiles with 360-degree interactions.

## Tech Stack

- **React** - Modern JavaScript library for building user interfaces
- **TypeScript** - Type-safe JavaScript for better development experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **shadcn/ui** - Modern component library built on Radix UI
- **Spline** - 3D design tool for interactive web experiences
- **PostCSS** - CSS post-processor for enhanced styling capabilities

## Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or bun package manager

### Install Dependencies
```bash
# Using npm
npm install

# Using bun (recommended for better performance)
bun install
```

## Running the Application

### Development Server
```bash
# Using npm
npm run dev

# Using bun
bun run dev
```

The application will start on `http://localhost:5173`

### Production Build
```bash
# Using npm
npm run build

# Using bun
bun run build
```

### Preview Production Build
```bash
# Using npm
npm run preview

# Using bun
bun run preview
```

## Project Structure

```
HASHHAWKS/
├── public/                 # Static assets
├── src/                   # Source code
│   ├── components/        # Reusable UI components
│   ├── lib/              # Utility functions and configurations
│   └── App.tsx           # Main application component
├── index.html            # Main HTML template
├── package.json          # Project dependencies and scripts
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite build configuration
└── components.json       # shadcn/ui components configuration
```

## Key Features

- **Interactive 3D Elements**: Spline-powered 3D graphics and animations
- **Parallax Scrolling**: Smooth scrolling effects for enhanced user experience
- **360° Member Cards**: Interactive team member profiles with rotation effects
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Type Safety**: Full TypeScript support for robust development
- **Modern Component Architecture**: Built with shadcn/ui components
- **Performance Optimized**: Fast loading times with Vite bundling

## Deployment

The project can be deployed to various hosting platforms:

### Vercel (Recommended)
```bash
npm run build
# Deploy the dist/ folder to Vercel
```

### Netlify
```bash
npm run build
# Deploy the dist/ folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy the dist/ folder to GitHub Pages
```

## Development Guidelines

### Code Style
- Use TypeScript for all new components
- Follow the existing component structure
- Use Tailwind CSS for styling
- Implement responsive design patterns

### Component Development
- Place reusable components in `src/components/`
- Use shadcn/ui components when possible
- Follow the existing naming conventions
- Add proper TypeScript types

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions, please open an issue in the GitHub repository.

---

*Built with ❤️ using modern web technologies*
