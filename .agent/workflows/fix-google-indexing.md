---
description: Fix Google Search Console Indexing Issues
---

# Fix Google Search Console Indexing Issues

This workflow will help you resolve the "Discovered - currently not indexed" status for your website pages.

## Phase 1: Submit Sitemap to Google Search Console

1. **Open Google Search Console**
   - Go to: https://search.google.com/search-console
   - Select your property: `https://salat-mahenoor-ai-creative-develope.vercel.app`

2. **Navigate to Sitemaps Section**
   - In the left sidebar, click on **"Sitemaps"**

3. **Submit Your Sitemap**
   - In the "Add a new sitemap" field, enter: `sitemap.xml`
   - Click **"Submit"**
   - Wait for confirmation that the sitemap was successfully submitted

4. **Verify Sitemap URLs**
   - After submission, Google will show the number of discovered URLs
   - You should see approximately 18-25 URLs (homepage, about, blog, testimonials, work, individual blog posts, and work projects)

## Phase 2: Request Indexing for Priority Pages

1. **Use URL Inspection Tool**
   - In Google Search Console, click on **"URL Inspection"** at the top
   
2. **Request Indexing for These Pages (in order):**
   - `https://salat-mahenoor-ai-creative-develope.vercel.app/`
   - `https://salat-mahenoor-ai-creative-develope.vercel.app/about`
   - `https://salat-mahenoor-ai-creative-develope.vercel.app/blog`
   - `https://salat-mahenoor-ai-creative-develope.vercel.app/work`
   - `https://salat-mahenoor-ai-creative-develope.vercel.app/testimonials`

3. **For Each URL:**
   - Paste the URL in the inspection tool
   - Click **"Request Indexing"**
   - Wait for the confirmation message
   - **Note:** You can only request indexing for a limited number of URLs per day (typically 10-20)

## Phase 3: Verify Internal Linking

Your site should have clear navigation from the homepage to all major pages. This has already been implemented in your Header component, but verify:

1. **Check Homepage Navigation**
   - Visit: https://salat-mahenoor-ai-creative-develope.vercel.app/
   - Verify the header contains links to: About, Work, Blog, Testimonials

2. **Check Footer Links**
   - Scroll to the bottom of any page
   - Verify footer contains links to all major sections

## Phase 4: Add robots.txt Meta Tag (Already Implemented)

Your pages already have proper meta tags, but verify:

1. **Check Page Source**
   - Right-click on any page → "View Page Source"
   - Look for: `<meta name="robots" content="index, follow">`
   - Verify there's NO `<meta name="robots" content="noindex">`

## Phase 5: Monitor Progress

1. **Check Google Search Console Daily**
   - Go to: **Coverage** → **Excluded** → **Discovered - currently not indexed**
   - Monitor if pages move from "Discovered" to "Indexed"

2. **Expected Timeline:**
   - **Sitemap submission:** Immediate confirmation
   - **First crawl:** 1-3 days after submission
   - **Full indexing:** 3-14 days (can vary)
   - **Validation completion:** The "Validation Started" process shown in your screenshot typically takes 7-28 days

3. **Check Indexing Status:**
   - Use Google search: `site:salat-mahenoor-ai-creative-develope.vercel.app`
   - You should see all your pages listed once indexed

## Phase 6: Additional SEO Improvements (Optional but Recommended)

1. **Add lastmod to Sitemap**
   - Already implemented in your `sitemap.ts` ✅

2. **Ensure Mobile-Friendly**
   - Test at: https://search.google.com/test/mobile-friendly
   - Enter your homepage URL and verify

3. **Check Page Speed**
   - Test at: https://pagespeed.web.dev/
   - Aim for scores above 90 for both mobile and desktop

4. **Build Backlinks**
   - Share your portfolio on:
     - LinkedIn profile
     - GitHub README
     - Dribbble profile
     - Fiverr profile
   - Each external link helps Google discover and prioritize your pages

## Troubleshooting

### If pages are still not indexed after 14 days:

1. **Check for Duplicate Content**
   - Ensure you don't have a custom domain pointing to the same content
   - If you have `mahenoorsalat.com`, make sure it redirects to the Vercel URL or vice versa

2. **Check Vercel Settings**
   - Go to Vercel Dashboard → Your Project → Settings
   - Verify **"Vercel Authentication"** is OFF (should be disabled for public sites)
   - Verify **"Password Protection"** is OFF

3. **Check for Crawl Errors**
   - In Google Search Console → **Settings** → **Crawl Stats**
   - Look for any 4xx or 5xx errors

4. **Verify robots.txt is Accessible**
   - Visit: https://salat-mahenoor-ai-creative-develope.vercel.app/robots.txt
   - Should show your robots configuration with sitemap URL

## Success Criteria

✅ Sitemap submitted and showing "Success" status in GSC
✅ At least 5 priority pages requested for indexing
✅ Homepage appears in Google search within 3-7 days
✅ All pages appear in Google search within 14-28 days
✅ "Discovered - currently not indexed" count decreases to 0

## Notes

- **Be Patient:** Google's indexing is not instant. The "Discovered - currently not indexed" status is normal for new sites.
- **Don't Over-Request:** Requesting indexing too frequently can be counterproductive.
- **Quality Over Speed:** Focus on creating high-quality content while waiting for indexing.
