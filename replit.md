# RMC Rate Calculator

## Overview

The RMC Rate Calculator is a Progressive Web Application (PWA) designed for calculating Ready Mix Concrete (RMC) rates for various mix designs. Built for the construction industry, it provides both standard PROCON mix designs and a custom calculator for tailored concrete specifications. The application offers real-time pricing calculations based on cement, flyash, and GGBS quantities with configurable material rates.

## Recent Changes (November 22, 2025)

**Vercel Deployment Configuration**
- Restructured backend for Vercel serverless deployment compatibility
- Created `api/index.ts` serverless function that exports a Vercel-compliant request handler
- Refactored `server/routes.ts` to separate route registration from HTTP server creation
  - `attachRoutes(app)`: Pure function for registering routes (used by both Replit and Vercel)
  - `registerRoutes(app)`: Creates HTTP server for Replit development (calls attachRoutes internally)
- Updated `vercel.json` with proper build configuration and output directory
- Simplified `package.json` build script to `vite build` for Vercel static asset compilation
- Both Replit development and Vercel production now share the same route registration logic

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18+ with TypeScript for type-safe component development
- Vite as the build tool and development server with hot module replacement
- Single Page Application (SPA) with Wouter for client-side routing
- Progressive Web App capabilities with service worker for offline functionality

**UI Component System**
- Shadcn/ui component library based on Radix UI primitives
- Tailwind CSS for utility-first styling with custom design tokens
- Component library follows the "New York" style variant
- Enterprise-grade design inspired by Carbon Design and industrial dashboards
- Consistent spacing system using Tailwind units (2, 4, 6, 8)
- Custom color system with HSL values supporting light/dark themes

**State Management**
- TanStack Query (React Query) for server state management and caching
- Local React state for form inputs and UI interactions
- LocalStorage for theme persistence (light/dark mode)

**Application Structure**
- Two-tab interface: "Standard Mix Designs" and "Custom Calculator"
- Standard tab: Searchable data table displaying all predefined concrete grades
- Custom tab: Split layout with input forms (left) and live calculation results (right)
- Responsive design with mobile-first approach (single column on mobile, two columns on desktop)

### Backend Architecture

**Server Framework**
- Express.js as the HTTP server framework
- Vite middleware integration for development with HMR
- Custom logging middleware for API request tracking

**Current Implementation**
- Minimal backend with placeholder storage interface
- Static data served from shared schema (standardMixDesigns array)
- All calculations currently performed client-side
- Session management infrastructure prepared (connect-pg-simple dependency)

**Data Layer Preparation**
- Drizzle ORM configured for PostgreSQL integration
- Database schema defined in shared/schema.ts for future use
- Neon serverless database client ready for deployment
- Migration system configured via drizzle-kit

### Data Storage Solutions

**Current State**
- In-memory storage using JavaScript arrays for standard mix designs
- No persistent database currently connected
- Client-side calculation logic without backend validation

**Planned Architecture**
- PostgreSQL database via Neon serverless platform
- Drizzle ORM for type-safe database queries
- Schema includes mix design specifications with zod validation
- Future endpoints for CRUD operations on mix designs and rates

**Data Model**
- MixDesign schema: grade, cementQty, flyashQty, basicRate, cementRate, flyashRate, total
- 20 predefined standard mix designs (M7.5 through M50, with/without flyash)
- Custom calculations support GGBS as optional third material component

### Authentication & Authorization

**Current State**
- No authentication system implemented
- Public access to all calculator features
- Infrastructure prepared for future session-based auth (connect-pg-simple dependency)

**Design Considerations**
- Application designed for open access to rate calculations
- Future user management may track custom mix designs per user
- Session storage configuration ready for multi-user scenarios

### External Dependencies

**Core Libraries**
- @tanstack/react-query: Client-side data fetching and caching
- @radix-ui/*: Headless UI components for accessibility
- drizzle-orm & drizzle-kit: Database ORM and migration tools
- @neondatabase/serverless: PostgreSQL database client
- wouter: Lightweight client-side routing
- zod & drizzle-zod: Runtime validation and schema generation

**UI & Styling**
- tailwindcss & autoprefixer: Utility-first CSS framework
- class-variance-authority: Type-safe component variants
- lucide-react: Icon library
- cmdk: Command palette component
- embla-carousel-react: Carousel functionality

**Development Tools**
- vite & @vitejs/plugin-react: Build tooling
- tsx: TypeScript execution for development
- esbuild: Production bundling for server code
- @replit/* plugins: Replit-specific development enhancements

**PWA & Offline Support**
- Custom service worker (sw.js) for asset caching
- Manifest.json with app metadata and shortcuts
- Icons for various device sizes (192x192, 512x512, Apple touch icon)

### Design System

**Typography**
- Google Fonts: Inter and Roboto
- Hierarchical scale: 3xl/4xl (titles), 2xl (sections), lg (cards), base (body), sm (labels)

**Layout Constraints**
- Maximum width containers: 6xl for calculator, 7xl for header
- Grid system: 2 columns on desktop (md breakpoint), single column on mobile
- Padding: px-4 on mobile, px-8 on desktop

**Color Theming**
- Light and dark mode support via CSS custom properties
- HSL-based color system for smooth theme transitions
- Separate border colors for cards, popovers, and buttons
- Elevation system using transparent black/white overlays