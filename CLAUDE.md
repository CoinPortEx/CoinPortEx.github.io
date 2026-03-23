# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CoinPort Exchange documentation and blog site. A Jekyll-based GitHub Pages site served at `blog.coinport.com.au` (CNAME). The main CoinPort exchange app lives at `www.coinport.com.au` — this repo is the public-facing docs, blog, FAQ, policies, API documentation, and crypto research pages.

## Build & Serve

```bash
# Install dependencies (requires Ruby with Bundler)
bundle install

# Local development server (auto-rebuilds on changes, but NOT _config.yml)
bundle exec jekyll serve

# Build only (outputs to _site/)
bundle exec jekyll build
```

Jekyll 3.9.5 with `github-pages` gem. Must restart the server after editing `_config.yml`.

## Architecture

### Layouts

- `_layouts/default.html` — Main layout for content pages (FAQ, policies, learn, etc.). Includes iframe height postMessage script for embedding in the main CoinPort app.
- `_layouts/post.html` — Blog post layout. Has its own dark/light theme toggling via `?theme=dark-mode` query parameter. Adds "Return to Blog" link and CoinPort sign-off.
- `_layouts/head-custom.html` — Empty placeholder for custom head content.

Both layouts load `/style.css` directly (not through Sass pipeline) and use Poppins font from Google Fonts.

### Theme System

Dark/light mode is controlled by a `?theme=dark-mode` query parameter, not a toggle — the parent app (coinport.com.au) passes the theme state. CSS custom properties in `style.css` define all colors (see `COLOR_SYSTEM.md` for the full reference). Dark mode applies via `body.dark-mode` class.

### Content Sections

- `_posts/` — Blog posts (news, listings, market updates). Use `layout: post` with front matter: title, description, author, date, categories.
- `faq/` — FAQ pages covering KYC, blockchains, orders, transfers, risks, etc.
- `policies/` — Compliance and regulatory policy documents.
- `research/` — ~570 cryptocurrency research reports. Follow `research/_template.md` for new entries.
- `api/` — API documentation using Swagger UI, backed by `api/swagger.json` (Peatio API v2). Standalone HTML pages with their own CSS (not using Jekyll layouts).
- `charts/` — TradingView widget embeds (advanced chart, market overview, ticker, economic calendar).
- `learn/`, `getting-started/`, `fraud/`, `loyalty/`, `otc/`, `links/`, `team/`, `jobs/` — Static content pages.

### Iframe Embedding

The `default` layout includes a `sendHeight` postMessage script (marked `data-cfasync="false"` to exempt from Cloudflare Rocket Loader). Pages using this layout are designed to be embedded as iframes within the main coinport.com.au app.

### Blog Post Front Matter

```yaml
---
title: Post Title
layout: post
description: Brief description for listing page
author: CoinPort Exchange
date: 2025-06-12 11:25:15 +1000
categories: news
---
```

### Plugins

jekyll-feed, jekyll-seo-tag, jekyll-sitemap, jekyll-titles-from-headings, jekyll-redirect-from, jekyll-include-cache.

## Key Files

- `style.css` — Root-level CSS with all design system variables (light + dark mode). Not in `_sass/`.
- `_config.yml` — Jekyll config. URL is `https://doc.coinport.com.au`, theme is `minima`.
- `sitemap.xml` — Hand-maintained sitemap (not auto-generated despite sitemap plugin).
- `footer.md` — Reusable social media links footer content.
- `api/swagger.json` — OpenAPI spec for the CoinPort Peatio API.
