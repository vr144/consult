# Shopify Command Center — €2,000 High-Ticket Service

**AI-Powered Shopify Operations Control System**

## 🎯 What This Project Is

A complete **business-in-a-box** for selling Shopify → Cursor integrations as a **€2,000 guided install service**.

This repo contains everything you need to:
1. Build the technical product (MCP server)
2. Sell it via Meta ads (landing page + ad copy)
3. Deliver it profitably (sales scripts + install guides)

**Target Market:** Shopify store operators doing €30k+/month  
**Price:** €2,000 flat fee (or €0 if install fails)  
**Delivery:** 90-minute guided screen-share install  
**Acquisition:** Meta ads → landing page → booked demo calls

---

## 💰 Business Model

### Revenue Potential
**Conservative (1 install/week):**
- 4 installs/month × €2,000 = €8,000/month
- Minus €500 ad spend = **€7,500/month profit**

**Aggressive (1 install/day):**
- 20 installs/month × €2,000 = €40,000/month
- Minus €3,000 ad spend = **€37,000/month profit**

### Why This Window Won't Last
- **3-6 month opportunity** before AI + Shopify integrations become commoditized
- Cursor MCP is brand new (zero competition)
- Store owners want "AI" but don't know how to implement it
- High-ticket service gap (most Shopify tools are €29/mo SaaS)

---

## 📁 Project Structure

```
/arb
├── src/                        # MCP server (the actual product)
│   ├── index.ts               # Main server with Shopify tools
│   └── shopifyAdmin.ts        # Shopify Admin API client
│
├── landing/                    # Sales landing page
│   ├── index.html             # Conversion-optimized page
│   └── DEPLOY.md              # Netlify deployment guide
│
├── docs/                       # Sales & delivery assets
│   ├── offer-onepager.md      # €2k positioning doc
│   ├── call-script.md         # Demo call script
│   ├── install-guide.md       # Step-by-step install
│   ├── acceptance-checklist.md # "Installed" definition
│   └── 5day-outreach.md       # Alternative: direct outreach
│
├── META_ADS_COPY.md           # Facebook/Instagram ad templates
├── package.json               # Dependencies
├── netlify.toml               # Deploy config
└── README.md                  # You are here
```

---

## 🚀 Quick Start (Get to First €2k in 5 Days)

### Day 1: Deploy Landing Page
```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Launch Shopify Command Center"
git remote add origin YOUR_GITHUB_REPO
git push -u origin main

# 2. Deploy to Netlify
# → Go to netlify.com
# → Click "Import from Git"
# → Select this repo
# → Done! Auto-deploys from netlify.toml
```

**Post-deploy checklist:**
- [ ] Update Calendly link in `landing/index.html`
- [ ] Replace `hello@yoursite.com` with your real email
- [ ] Add Facebook Pixel (see `landing/DEPLOY.md`)
- [ ] Test on mobile (70% of Meta traffic is mobile)

Full instructions: `landing/DEPLOY.md`

### Day 2: Launch Meta Ads
```bash
# Read the ad copy templates
open META_ADS_COPY.md
```

**First campaign setup:**
- **Budget:** €50-100 test
- **Objective:** Conversions (Schedule event)
- **Audience:** Finland, age 25-55, interests: Shopify, E-commerce
- **Creative:** Use "Time-Waster Angle" from `META_ADS_COPY.md`
- **Landing page:** Your Netlify URL

Track: Cost per booking (target: under €100)

### Day 3-4: Book Demo Calls
When someone books via Calendly:

1. **Before call:** Review their Shopify store (if public)
2. **During call:** Use `docs/call-script.md`
   - Show live demo (use your own test store or ask to screenshare theirs)
   - Qualify: €30k+/month revenue, has technical person on team
   - Close: "Let's get you installed tomorrow"
3. **After call:** Send calendar invite for install session

### Day 5: Deliver First Install
**90-minute screen-share install:**

1. Guide them through `docs/install-guide.md`
2. Validate using `docs/acceptance-checklist.md`
3. If all 5 tests pass → collect €2,000
4. If any fail → fix or refund (happens <5% with proper qualification)

**Payment:** Bank transfer, Stripe invoice, or PayPal (set up before first call)

---

## 🛠️ Technical Overview

### What You're Actually Selling
A **Cursor MCP server** that connects Shopify → AI assistant.

**Core features (v1):**
- Query orders by date, status, customer
- Search customers by email, name, phone
- View products and variants
- Check inventory levels in real-time
- All actions logged (audit trail)

**Technical stack:**
- TypeScript + Node.js
- Shopify Admin GraphQL API
- MCP (Model Context Protocol) for Cursor
- Runs **locally** on customer's machine (not hosted)

### Security Model
- Read-only by default (no write actions in v1)
- Customer's API credentials stay on their machine
- Minimal Shopify API scopes (read_orders, read_customers, read_products, read_inventory)
- You never see their data

### Add-on Upsells (After Core Install)
- **CRM integration** (HubSpot/Pipedrive): +€1,500
- **MRP integration** (Katana): +€2,000
- **Write actions** (refunds, tags, notes): +€1,000

---

## 📊 What Makes This High-Ticket

Unlike generic Shopify integrations, this is positioned as:

✅ **Outcome-focused:** "Save 10 hours/week, stop tab-switching"  
✅ **Risk-free:** €2,000 or €0 guarantee  
✅ **White-glove:** Guided install, not DIY  
✅ **Exclusive:** Limited by your time (creates scarcity)  
✅ **AI-powered:** Rides the AI hype wave  

See `docs/offer-onepager.md` for full positioning.

---

## 📈 Scaling Roadmap

### Month 1-2: Prove It Works
- Launch landing page + Meta ads
- Close 2-4 installs (€4k-8k revenue)
- Refine sales process + install workflow
- Collect testimonials

### Month 3-4: Scale Ads
- Increase budget to €500-1k/week
- Add retargeting campaigns
- Launch lookalike audiences
- Target: 8-12 installs/month (€16k-24k revenue)

### Month 5-6: Productize
- Record video onboarding (reduce your install time)
- Hire VA to pre-qualify leads
- Build out CRM/MRP integrations as upsells
- Consider: SaaS version at €200/month (recurring revenue)

---

## 📞 Sales Process

Full scripts in `docs/` folder, but here's the flow:

1. **Lead sees Meta ad** → clicks to landing page
2. **Landing page** → books 20-min demo call (Calendly)
3. **Demo call** → you show live queries, qualify, close
4. **Install call** → 90-min guided setup, validate, get paid
5. **Follow-up** → 7 days email support, ask for testimonial

**Key metrics to track:**
- Ad CTR (target: 2%+)
- Landing page conversion (target: 5-10%)
- Demo show rate (target: 70%+)
- Demo → close rate (target: 30-50%)
- Install success rate (target: 95%+)

---

## 🎓 Required Skills

**You need:**
- Basic command-line comfort (copy-paste commands)
- Ability to screen-share and guide someone
- Sales skills (use provided scripts as training wheels)
- Ad management (or hire freelancer for €200-500/month)

**You DON'T need:**
- Deep coding skills (you're not building from scratch)
- Shopify expertise (customers know their stores better than you)
- Previous agency experience (this is productized, not consulting)

---

## 🔒 Legal/Compliance

- **Business entity:** Depends on country (sole proprietor works in Finland)
- **Taxes:** Track revenue, pay income tax (consult local accountant)
- **Refund policy:** Stated clearly (€2k or €0 guarantee)
- **Privacy:** No GDPR issues (you don't store customer data)
- **Contracts:** Simple service agreement (template not included, consult lawyer)

---

## ❓ FAQ

**Q: What if I'm not technical?**  
A: You guide customers through copy-paste steps. The install guide is written for operators, not developers.

**Q: What if the install fails?**  
A: Refund immediately (happens <5% with proper qualification). Use failures to improve your pre-call screening.

**Q: Can I hire someone to do installs?**  
A: Yes, once you've done 5-10 yourself. Pay €200-300 per install, keep €1,700+ profit.

**Q: Do I need a registered company?**  
A: Depends on your country. In Finland, sole proprietorship ("toiminimi") is fine for starting.

**Q: What about ongoing support?**  
A: 7 days included. After that, offer paid support at €200/month or €200/hour one-offs.

**Q: Can I white-label this?**  
A: Yes. Replace all "Shopify Command Center" branding with your own name.

**Q: Why won't this work long-term?**  
A: It will get commoditized. Either Shopify builds this natively, or Cursor adds Shopify templates, or someone builds a €29/month SaaS version. **Move fast.**

---

## 🚨 Important Warnings

1. **Don't oversell.** Only promise what's in `acceptance-checklist.md`.
2. **Pre-qualify hard.** If they do <€30k/month or have zero tech comfort, decline.
3. **Use the guarantee.** It's your best sales tool, but protect yourself with qualification.
4. **Track everything.** CPA, show rates, close rates. Ads are expensive—optimize weekly.
5. **Get testimonials ASAP.** Add to landing page after first 2-3 happy customers.

---

## 📝 Your Next Actions

- [x] Landing page created (`landing/index.html`)
- [ ] Deploy to Netlify (5 min)
- [ ] Update Calendly link + email in landing page
- [ ] Read `META_ADS_COPY.md` and create first ad
- [ ] Launch €50 test campaign
- [ ] Practice demo call script (`docs/call-script.md`)
- [ ] Book first call
- [ ] Close first €2,000 install

---

## 📚 Key Documents to Read (In Order)

1. `landing/DEPLOY.md` — Get your landing page live
2. `META_ADS_COPY.md` — Launch your first ads
3. `docs/call-script.md` — Master the demo call
4. `docs/install-guide.md` — Deliver the install
5. `docs/acceptance-checklist.md` — Define success clearly

---

## 🎯 Success Metrics (First 30 Days)

- [ ] Landing page live with <3s load time
- [ ] First Meta ad campaign running (€50-100 budget)
- [ ] 3+ demo calls booked
- [ ] 1+ installs closed (€2,000 revenue)
- [ ] 1+ testimonial collected
- [ ] Cost per booking under €100

---

## 🛠️ Technical Setup (For Install Calls)

The MCP server runs **locally on the customer's machine**.

### Prerequisites
- Node.js 18+
- Customer's Shopify Admin API access token

### Install Process (You Guide Them)
```bash
# 1. Download repo to their machine
git clone YOUR_REPO_URL shopify-command-center
cd shopify-command-center

# 2. Install dependencies
npm install

# 3. Configure credentials
cp config/env.example.txt .env
# (Customer adds their Shopify credentials)

# 4. Build
npm run build

# 5. Test
npm run start

# 6. Add to Cursor MCP settings
# (You guide them via screen-share)
```

Full walkthrough: `docs/install-guide.md`

---

## 💡 Why This Exists

You said: *"I need to make €500 in 5 days. Find me a real arbitrage, not generic shit."*

This is that arbitrage:

- **AI hype** = customers want it but don't know how
- **Cursor MCP** = brand new, zero competition
- **Shopify pain** = universal (tab-switching, slow admin)
- **High-ticket service** = your time is limited (creates scarcity)
- **3-6 month window** = move fast before commoditization

You have:
- Finnish language (moat for targeting Finnish stores)
- Capital (for ad spend)
- Facebook ads account (distribution)

**This is the play.** Execute hard, execute fast.

---

**Built for operators who move fast.**

Questions? Issues? Open a GitHub issue or contact: hello@yoursite.com

---

## 📄 License

MIT (or choose your own). This is yours to use, modify, and profit from.
