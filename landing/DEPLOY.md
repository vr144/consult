# 🚀 Deploy Landing Page to Netlify

## Quick Deploy (5 minutes)

### Option 1: Deploy from GitHub (Recommended)

1. **Push this repo to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Shopify Command Center"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" and select your repo
   - Build settings are auto-detected from `netlify.toml`
   - Click "Deploy site"

3. **Done!** Your site will be live at `random-name-123.netlify.app`

### Option 2: Drag & Drop Deploy

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the `landing` folder onto the page
3. Done! Site is live instantly

## After Deploy: Essential Setup

### 1. Add Your Calendly Link
Edit `landing/index.html` and replace:
```html
<a href="https://calendly.com/your-link-here" target="_blank">
```
With your actual Calendly booking link.

### 2. Update Email Address
Replace `hello@yoursite.com` with your real email address.

### 3. Custom Domain (Optional)
In Netlify dashboard:
- Go to "Domain settings"
- Click "Add custom domain"
- Follow DNS setup instructions

### 4. Add Facebook Pixel (For Meta Ads)
Add this code before the closing `</head>` tag in `index.html`:

```html
<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
/></noscript>
<!-- End Facebook Pixel Code -->
```

Replace `YOUR_PIXEL_ID` with your actual Facebook Pixel ID.

### 5. Add Conversion Tracking
Add this to track demo bookings (right after the Calendly link):

```html
<script>
  // Track when user clicks booking button
  document.querySelectorAll('a[href*="calendly"]').forEach(function(link) {
    link.addEventListener('click', function() {
      if (typeof fbq !== 'undefined') {
        fbq('track', 'Schedule');
      }
    });
  });
</script>
```

## Testing Before Ads

1. **Mobile Test:** Open on your phone - 70% of Meta ads traffic is mobile
2. **Load Speed:** Use [PageSpeed Insights](https://pagespeed.web.dev/) - should be 90+
3. **Links Test:** Click every button and link
4. **Calendly Test:** Make sure booking flow works

## Meta Ads Setup Checklist

- [ ] Facebook Pixel installed and verified
- [ ] Conversion events firing (use Facebook Pixel Helper Chrome extension)
- [ ] Custom domain connected (builds trust)
- [ ] Calendly link working
- [ ] Mobile-responsive (test on real device)
- [ ] Page loads in < 3 seconds
- [ ] All CTAs lead to booking

## Recommended Meta Ads Strategy

### Week 1: Testing (Budget: €50-100)
- Target: Finland, Shopify store owners, e-commerce managers
- Age: 25-55
- Interests: Shopify, E-commerce, Online Business
- Ad format: Single image + video (if you have one)
- Objective: Conversions (Schedule event)

### Week 2+: Scale Winners
- Duplicate winning ads
- Expand to lookalike audiences
- Increase budget by 20% every 3 days if CPA < €100

## Support

If you need help with deployment:
1. Check Netlify docs: https://docs.netlify.com
2. Email support: hello@yoursite.com
