# KICKVAULT - Premium Sneaker Marketplace

A full-featured sneaker and streetwear marketplace website inspired by platforms like Jnkie.com, StockX, and GOAT. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

![KickVault](https://img.shields.io/badge/React-18.2-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-4.1-purple)

## 🚀 Features

- **Product Browsing** - Browse sneakers and apparel with filtering by brand, category, and sorting
- **Product Detail Pages** - View detailed product info, select sizes, see price history
- **Shopping Cart** - Add items, update quantities, remove items (persisted in localStorage)
- **User Authentication** - Sign up / Login system (simulated with localStorage)
- **Sell Page** - Form to list products for sale
- **Search** - Full-text search across products
- **Responsive Design** - Mobile-first, works on all screen sizes
- **Animations** - Smooth transitions with Framer Motion
- **Dark Theme** - Modern dark UI design

## 🛠️ Tech Stack

- **Frontend:** React 18, TypeScript, Tailwind CSS 4
- **Routing:** React Router DOM 6 (HashRouter for static hosting)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Build Tool:** Vite 6
- **State Management:** React Context API + localStorage

## 📦 How to Deploy on GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and create a new repository
2. Name it something like `kickvault` (or any name you prefer)
3. Don't initialize with README (we already have one)

### Step 2: Push Your Code

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - KickVault marketplace"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/kickvault.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Deploy to GitHub Pages

#### Option A: Using GitHub Actions (Recommended)

1. Create a file at `.github/workflows/deploy.yml` in your repo:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ['main']

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

2. Go to your repository **Settings** → **Pages**
3. Under "Build and deployment" → Source, select **GitHub Actions**
4. Push the workflow file and it will auto-deploy

#### Option B: Using gh-pages Package

```bash
# Install gh-pages
npm install -D gh-pages
```

Add to `package.json` scripts:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

Then run:
```bash
npm run deploy
```

### Step 4: Access Your Site

Your site will be available at:
- `https://YOUR_USERNAME.github.io/kickvault/`

## 🌐 Alternative Hosting Options

### Vercel (Easiest - Free)
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project" → Import your repository
4. Click "Deploy" - Done!
5. URL: `https://kickvault.vercel.app`

### Netlify (Free)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `dist` folder, or connect GitHub repo
3. Auto-deploys on push
4. URL: `https://kickvault.netlify.app`

### Cloudflare Pages (Free)
1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect your GitHub repository
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy!

## 🏗️ Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
kickvault/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx        # Navigation bar with search & cart
│   │   ├── Hero.tsx          # Landing page hero section
│   │   ├── ProductCard.tsx   # Product card component
│   │   └── Footer.tsx        # Site footer
│   ├── context/
│   │   ├── CartContext.tsx   # Shopping cart state management
│   │   └── AuthContext.tsx   # Authentication state management
│   ├── data/
│   │   └── products.ts      # Mock product data
│   ├── pages/
│   │   ├── HomePage.tsx     # Landing page
│   │   ├── ProductPage.tsx  # Product listing with filters
│   │   ├── ProductDetailPage.tsx # Individual product page
│   │   ├── CartPage.tsx     # Shopping cart
│   │   ├── LoginPage.tsx    # Login/Signup
│   │   ├── SellPage.tsx     # Sell listing form
│   │   └── SearchPage.tsx   # Search results
│   ├── App.tsx              # Main app with routing
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.js
└── README.md
```

## 🔧 Making It Production-Ready

To turn this into a real production marketplace, you'd need:

### Backend (Required)
1. **Database** - PostgreSQL/MySQL for products, users, orders
2. **API** - Node.js/Express or Next.js API routes
3. **Authentication** - Real auth with JWT/OAuth (e.g., Supabase, Firebase Auth)
4. **File Storage** - AWS S3 or Cloudinary for product images
5. **Payment Processing** - Stripe or PayPal integration
6. **Authentication Service** - Real sneaker authentication workflow

### Recommended Backend Stack
- **Supabase** (PostgreSQL + Auth + Storage) - Easiest to integrate
- **Firebase** (Firestore + Auth + Storage)
- **Custom Node.js + MongoDB/PostgreSQL**

### Additional Features to Add
- Real-time price tracking
- User profiles and order history
- Wishlist/favorites functionality
- Notifications system
- Admin dashboard
- Review/rating system
- Price charts and analytics

## 📝 License

MIT License - feel free to use this project however you like!
