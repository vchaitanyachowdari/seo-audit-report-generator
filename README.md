# 🚀 SEO Audit & Conversion Rate Optimizer

A modern, AI-powered SaaS platform that provides comprehensive SEO audits and conversion rate optimization insights for landing pages and websites.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/v-chaitanya-chowdaris-projects/v0-conversion-rate-optimizer)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/JQlE2d4u8Tb)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

## 🌟 Features

### 🔍 **SEO Analysis**
- **Technical SEO Audit** - Meta tags, headers, schema markup analysis
- **Performance Metrics** - Core Web Vitals, page speed optimization
- **Content Analysis** - Keyword density, readability scores
- **Mobile Optimization** - Responsive design and mobile-first indexing
- **Security Checks** - HTTPS, security headers validation

### 📈 **Conversion Rate Optimization**
- **UX/UI Analysis** - Design patterns and user experience evaluation
- **Form Optimization** - Conversion funnel analysis
- **Call-to-Action Review** - Button placement and effectiveness
- **Trust Signals** - Social proof and credibility indicators
- **A/B Testing Recommendations** - Data-driven improvement suggestions

### 🤖 **AI-Powered Insights**
- **Automated Report Generation** - Comprehensive PDF reports
- **Smart Recommendations** - Prioritized action items
- **Competitive Analysis** - Industry benchmarking
- **Trend Analysis** - Performance tracking over time

## 🛠️ Tech Stack

### **Frontend**
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Modern component library
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icon library

### **Backend**
- **Next.js API Routes** - Serverless API endpoints
- **n8n Webhook Integration** - Automated workflow processing
- **Server Actions** - Form handling and data processing

### **Styling & UI**
- **Glassmorphism Design** - Modern, translucent UI elements
- **Dark/Light Mode** - Theme switching capability
- **Responsive Design** - Mobile-first approach
- **Accessibility** - WCAG 2.1 compliant

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/vchaitanyachowdari/seo-audits-generator.git
   cd seo-audits-generator
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`
   
   Add your environment variables:
   \`\`\`env
   N8N_WEBHOOK_URL=your_n8n_webhook_url_here
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   \`\`\`

4. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Usage

### **Basic Audit**
1. Enter your landing page URL
2. Provide your email address
3. Click "Start Free Audit"
4. Receive comprehensive report via email

### **API Integration**
\`\`\`javascript
// Example API call
const response = await fetch('/api/audit', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    url: 'https://example.com',
    email: 'user@example.com'
  })
});

const result = await response.json();
\`\`\`

## 📁 Project Structure

\`\`\`
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── (pages)/           # Page components
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/               # Shadcn/ui components
│   └── ...               # Custom components
├── lib/                  # Utility functions
├── hooks/                # Custom React hooks
├── public/               # Static assets
└── styles/               # Additional styles
\`\`\`

## 🔧 Configuration

### **Environment Variables**
- `N8N_WEBHOOK_URL` - n8n webhook endpoint for processing audits
- `NEXT_PUBLIC_APP_URL` - Application base URL

### **Customization**
- **Colors**: Modify `tailwind.config.ts` for theme colors
- **Components**: Extend Shadcn/ui components in `components/ui/`
- **Animations**: Customize Framer Motion animations in component files

## 📊 Features Overview

| Feature | Status | Description |
|---------|--------|-------------|
| ✅ SEO Audit | Live | Technical SEO analysis |
| ✅ Performance Check | Live | Core Web Vitals monitoring |
| ✅ Mobile Optimization | Live | Responsive design analysis |
| ✅ Content Analysis | Live | Keyword and readability check |
| ✅ Security Scan | Live | HTTPS and security headers |
| ✅ UX/UI Review | Live | Conversion optimization insights |
| ✅ PDF Reports | Live | Downloadable audit reports |
| 🔄 A/B Testing | Coming Soon | Split testing recommendations |
| 🔄 Competitor Analysis | Coming Soon | Industry benchmarking |

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### **Development Workflow**
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Live Demo**: [https://vercel.com/v-chaitanya-chowdaris-projects/v0-conversion-rate-optimizer](https://vercel.com/v-chaitanya-chowdaris-projects/v0-conversion-rate-optimizer)
- **v0.dev Project**: [https://v0.dev/chat/projects/JQlE2d4u8Tb](https://v0.dev/chat/projects/JQlE2d4u8Tb)
- **Documentation**: [/docs](./docs)
- **API Reference**: [/api-docs](./api-docs)

## 📞 Support

- **Email**: support@seoaudit.com
- **Documentation**: [/docs](/docs)
- **Issues**: [GitHub Issues](https://github.com/vchaitanyachowdari/seo-audits-generator/issues)

## 🙏 Acknowledgments

- Built with [v0.dev](https://v0.dev) - AI-powered development platform
- UI components from [Shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

**Made with ❤️ by [V Chaitanya Chowdari](https://github.com/vchaitanyachowdari)**
