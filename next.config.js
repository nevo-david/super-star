/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    PAYMENT_PUBLIC_KEY: process.env.PAYMENT_PUBLIC_KEY,
    G_TAG_ANALYTICS: process.env.G_TAG_ANALYTICS,
    COURSE_NAME: process.env.COURSE_NAME,
    CURRENCY: process.env.CURRENCY,
    PRICE: process.env.PRICE,
    FACEBOOK_PIXEL: process.env.FACEBOOK_PIXEL,
    LINKEDIN_PIXEL: process.env.LINKEDIN_PIXEL,
    REWARDFUL_ID: process.env.REWARDFUL_ID,
  },
};

module.exports = nextConfig;
