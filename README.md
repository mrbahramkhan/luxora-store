# Noor & Co. — Premium AI-Powered E-Commerce Platform

A luxurious, modern, mobile-first e-commerce platform built with Next.js 15, designed to feel more premium than Daraz and as smooth as Shopify.

## Features

### Storefront
- Beautiful homepage with hero, categories, featured products, reviews
- Product catalog with filters, sorting, search
- Product detail pages with variants, reviews, recommendations
- Wishlist & shopping cart
- Customer reviews & ratings
- Blog & FAQs
- WhatsApp floating chat integration
- Multilingual (English + Urdu) ready
- Fully responsive & mobile-first

### Admin Panel
- Dashboard with revenue, orders, customers, AI insights
- Product, category, inventory & pricing management
- Order management & fulfillment
- Customer management
- Coupons & discounts
- Shipping & tax settings
- Reports & analytics
- User roles (Customer, Admin, Super Admin, Vendor-ready)

### Payments
- Stripe
- PayPal
- EasyPaisa
- JazzCash
- Bank Transfer
- Cash on Delivery (COD)

### AI Features
- Automatic product descriptions
- SEO meta generation
- Smart search suggestions
- Product recommendations
- Customer support chatbot
- Sales insights on admin dashboard

### Technical
- Next.js 15 App Router + TypeScript
- Tailwind CSS v4 + custom luxury design system
- Prisma + PostgreSQL
- NextAuth.js authentication
- REST APIs under `/api`
- SEO: clean URLs, meta tags, schema-ready, sitemap, robots
- Image optimization (AVIF/WebP)
- Security headers
- Docker & docker-compose ready
- Scalable architecture prepared for multi-vendor marketplace

## Quick Start

```bash
# 1. Clone / enter project
cd noor-and-co

# 2. Install dependencies
npm install

# 3. Configure environment
cp .env.example .env
# Edit .env with your keys (DATABASE_URL, NEXTAUTH_SECRET, etc.)

# 4. Start PostgreSQL (Docker)
docker compose up -d db

# 5. Push schema & generate client
npx prisma db push
npx prisma generate

# 6. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — Store  
Open [http://localhost:3000/admin](http://localhost:3000/admin) — Admin Panel

## Production with Docker

```bash
docker compose up -d --build
```

## Project Structure

```
noor-and-co/
├── prisma/           # Schema & migrations
├── public/           # Static assets
├── src/
│   ├── app/          # App Router pages & API routes
│   │   ├── admin/    # Admin panel
│   │   ├── api/      # REST APIs
│   │   ├── shop/     # Catalog
│   │   └── product/  # Product detail
│   ├── components/   # UI, layout, product, home, ai
│   ├── lib/          # db, utils, ai, payments, seo
│   ├── hooks/
│   └── types/
├── Dockerfile
├── docker-compose.yml
└── README.md
```

## Environment Variables

See `.env.example` for the full list. Required minimum:

- `DATABASE_URL`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`

Optional for full features: Stripe, PayPal, EasyPaisa, JazzCash, OpenAI, GA, WhatsApp number.

## Extending to Multi-Vendor

The schema already includes a `VENDOR` role. Future work:

1. Add `Vendor` / `Store` models linked to User
2. Scope products & orders by vendor
3. Vendor dashboard under `/vendor`
4. Commission & payout logic

## License

Proprietary — built for production use. Customize freely for your business.
