# Chic Events - Price Quotation Website

A professional, responsive quotation website for Chic Events featuring detailed pricing for event production services.

## 🚀 View Locally

The Python server is already running! Simply open your browser and go to:

**http://localhost:8000**

(The server is running in the background on port 8000)

## � Features

### Quotation Details
Complete pricing breakdown for event production including:
- **Lighting Equipment** - Par cans, LED lights, blinders, control systems
- **Truss System** - Aluminum box truss structures
- **Audio System** - Complete sound setup for 1000 PAX
- **LED Wall & Video** - Large format displays with VJ services
- **Carpet & Flooring** - Various carpeting options
- **Black Masking & Skirting** - Stage finishing
- **Power Generation** - Genset services (2 days)
- **Logistics** - Transportation services

### Total Package
- **Subtotal**: Rs. 4,18,155
- **CGST (9%)**: Rs. 37,634
- **SGST (9%)**: Rs. 37,634
- **Grand Total**: Rs. 4,93,423

## ✨ Website Features

- **Professional Quotation Layout** - Clean, organized price table
- **Responsive Design** - Works on all devices
- **Terms & Conditions** - Clear payment and service terms
- **Services Overview** - Highlights of all offerings
- **Contact Form** - Easy inquiry submission
- **Print-Ready** - Quotation can be printed directly

## 🎨 Customization

### Update Prices
Edit the table in `index.html` (search for `<table class="quotation-table">`)

### Change Company Info
Update the quotation header section in `index.html`

### Modify Terms
Edit the terms section in `index.html`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🚀 Deploy to GitHub Pages

### Automatic Deployment (Recommended)

This repository includes GitHub Actions for automatic deployment. Simply push to the main branch:

1. **Create a GitHub repository** at https://github.com/new

2. **Initialize and push your code**:
   ```bash
   cd /Users/rohitviswam/Documents/Chic
   git init
   git add .
   git commit -m "Initial commit: Chic Events quotation website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Build and deployment"
   - Source: Select **GitHub Actions**
   - The site will automatically deploy!

4. **Access your live site**:
   - Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`
   - Deployment takes 1-2 minutes
   - Check the **Actions** tab to see deployment status

### Automatic Updates

Every time you push changes to the main branch:
```bash
git add .
git commit -m "Update quotation details"
git push
```
The website will automatically redeploy within 1-2 minutes!

### Manual Deployment (Alternative)

If you prefer manual deployment:
1. Go to Settings → Pages
2. Source: Select "Deploy from a branch"
3. Branch: Select "main" and "/" (root)
4. Save

Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

## � File Structure

```
Chic/
├── index.html          # Main quotation page
├── styles.css          # Professional styling
├── script.js           # Interactive features
├── README.md          # Documentation
└── .gitignore         # Git exclusions
```

## 💼 Payment Terms

- 50% advance at confirmation
- 50% before event
- Material damage charges apply
- Genset diesel costs client-oriented

---

**Built for professional event production services**
