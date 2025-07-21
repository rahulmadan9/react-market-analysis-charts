# React Market Analysis Charts

Interactive React charts for auto parts e-commerce market analysis, built with Recharts and deployed on GitHub Pages.

## Features

- **Market Growth Chart**: Line chart showing market growth from 2024-2028
- **Competition Analysis**: Bar chart comparing competitors by SKUs and market strength
- **Revenue Mix Evolution**: Stacked bar chart showing revenue stream evolution across phases
- **Investment vs Returns**: Bar chart comparing investment and revenue projections

## Live Demo

Visit the live demo at: `https://rahulmadan9.github.io/react-market-analysis-charts/`

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Deployment

The app automatically deploys to GitHub Pages via GitHub Actions when pushing to the main branch.

### Manual Setup for GitHub Pages:

1. Create a new repository on GitHub named `react-chart`
2. Update the `homepage` field in `package.json` with your GitHub username
3. Update the `base` field in `vite.config.js` with your repository name
4. Push your code to the main branch
5. Enable GitHub Pages in your repository settings (source: GitHub Actions)

## Technologies Used

- React 18
- Recharts for charts
- Vite for build tooling
- CSS3 for styling
- GitHub Actions for CI/CD