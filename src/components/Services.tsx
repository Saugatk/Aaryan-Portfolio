import { useState } from "react";
    import {
      Dialog,
      DialogContent,
      DialogDescription,
      DialogHeader,
      DialogTitle,
    } from "./ui/dialog";
    import { ScrollArea } from "./ui/scroll-area";
    import ServiceCard from "./services/ServiceCard";
    import ServiceDetail from "./services/ServiceDetails";

    const Services = () => {
      const [selectedService, setSelectedService] = useState<string | null>(null);

      const services = [
        {
          title: "Web Development",
          description: "Custom websites and web applications built with modern technologies",
          features: ["Responsive Design", "Performance Optimization", "SEO Integration"],
          price: "Starting at रू19999",
          details: [
            {
              name: "Blog/Personal Website",
              description: "Perfect for individuals sharing articles, ideas, or personal branding.",
              features: ["Home, About, Blog posts, Contact", "Simple CMS for blog posts", "SEO optimization", "Mobile responsive design"],
              price: "रू19999 - रू24999",
              delivery: "4-6 days",
              bestFor: "Bloggers, writers, personal brands"
            },
            {
              name: "Portfolio Website",
              description: "Showcase work for professionals like freelancers, designers, developers, or artists.",
              features: ["Interactive project showcase", "Modern animations", "Responsive gallery", "Contact form integration"],
              price: "रू22999 - रू34999",
              delivery: "5-7 days",
              bestFor: "Freelancers, artists, professionals"
            },
            {
              name: "E-commerce Website",
              description: "Full-featured online store with product management and secure payments.",
              features: ["Product catalog with search", "Shopping cart and checkout", "Payment gateway integration", "Admin dashboard"],
              price: "रू45999 - रू79999",
              delivery: "14-21 days",
              bestFor: "Online retailers, small businesses"
            },
            {
              name: "Dynamic Website",
              description: "Interactive websites with real-time updates and data processing.",
              features: ["Database integration", "Real-time updates", "User dashboard", "API integration"],
              price: "रू39999 - रू69999",
              delivery: "10-14 days",
              bestFor: "Data-driven businesses"
            },
            {
              name: "Educational Website",
              description: "Learning platform for schools, training centers, or online courses.",
              features: ["Course management", "Student dashboard", "Video integration", "Progress tracking"],
              price: "रू54999 - रू99999",
              delivery: "14-21 days",
              bestFor: "Schools, training institutes"
            },
            {
              name: "Event/Booking Website",
              description: "Appointment and event booking system with calendar integration.",
              features: ["Online booking system", "Calendar integration", "Payment processing", "Admin dashboard"],
              price: "रू34999 - रू59999",
              delivery: "10-14 days",
              bestFor: "Event planners, service providers"
            },
            {
              name: "Business Website",
              description: "Professional website for companies to showcase services and build trust.",
              features: ["Service showcase", "Team profiles", "Blog integration", "Contact forms"],
              price: "रू24999 - रू44999",
              delivery: "7-10 days",
              bestFor: "Small to medium businesses"
            },
            {
              name: "Real Estate Website",
              description: "Property listing and management platform.",
              features: ["Property listings", "Search filters", "Admin dashboard", "Inquiry system"],
              price: "रू39999 - रू74999",
              delivery: "14-21 days",
              bestFor: "Real estate agencies"
            },
            {
              name: "Custom Web Application",
              description: "Tailored applications for specific client needs.",
              features: ["Custom user interfaces", "Database integration", "API integration", "Real-time updates"],
              price: "रू44999 - रू84999",
              delivery: "14-21 days",
              bestFor: "Businesses needing unique functionalities"
            },
            {
              name: "Multi-Language Website",
              description: "Websites with multiple languages to reach global audiences.",
              features: ["Language switching feature", "Multi-lingual content management", "SEO optimization for different languages"],
              price: "रू34999 - रू59999",
              delivery: "10-15 days",
              bestFor: "International businesses, NGOs"
            },
            {
              name: "Social Media Integration",
              description: "Connect websites with social media accounts and feeds.",
              features: ["Social media feed integration", "Sharing buttons and features", "Custom social media widgets"],
              price: "रू14999 - रू24999",
              delivery: "4-7 days",
              bestFor: "Brands, influencers, businesses"
            },
            {
              name: "Landing Page for Campaigns",
              description: "Optimized landing pages for marketing campaigns or promotions.",
              features: ["High-conversion layout", "Call-to-action buttons", "Form integrations for lead generation"],
              price: "रू11999 - रू19999",
              delivery: "3-5 days",
              bestFor: "Marketers, small businesses"
            },
            {
              name: "Content Management System (CMS) Website",
              description: "Fully managed websites with easy-to-use CMS.",
              features: ["Easy content management", "Custom themes", "SEO tools integration"],
              price: "रू24999 - रू39999",
              delivery: "7-10 days",
              bestFor: "Bloggers, businesses, marketers"
            },
            {
              name: "Mobile App Landing Page",
              description: "Landing page for mobile apps to increase downloads and visibility.",
              features: ["App features showcase", "User testimonials", "App download links integration"],
              price: "रू14999 - रू21999",
              delivery: "5-7 days",
              bestFor: "App developers, startups"
            },
            {
              name: "Job Portal Website",
              description: "Platform for job seekers and employers to connect.",
              features: ["Job listing and application system", "Resume upload feature", "Employer dashboard", "Search filters"],
              price: "रू44999 - रू79999",
              delivery: "14-21 days",
              bestFor: "Recruitment agencies, job boards"
            },
            {
              name: "News Website",
              description: "Content-heavy website for news, media, or blog outlets.",
              features: ["Article publishing", "Comments and ratings system", "User registration", "Media gallery"],
              price: "रू34999 - रू59999",
              delivery: "10-15 days",
              bestFor: "News outlets, bloggers"
            },
            {
              name: "Non-profit Website",
              description: "Website for NGOs and charities to promote their mission.",
              features: ["Donation integration", "Events calendar", "Volunteer registration", "About us and contact pages"],
              price: "रू24999 - रू44999",
              delivery: "7-10 days",
              bestFor: "Charities, NGOs"
            },
            {
              name: "Forum/Community Website",
              description: "Build a space for discussions, forums, or online communities.",
              features: ["User profile management", "Post and comment features", "Moderation tools", "Categories and tags"],
              price: "रू34999 - रू59999",
              delivery: "10-14 days",
              bestFor: "Communities, hobby groups"
            },
            {
              name: "Restaurant/Bar Website",
              description: "Perfect for showcasing menus, reservations, and events.",
              features: ["Menu display with images", "Online reservation system", "Event calendar", "Google Maps integration"],
              price: "रू24999 - रू44999",
              delivery: "7-10 days",
              bestFor: "Restaurants, cafes, bars"
            },
            {
              name: "Subscription-based Website",
              description: "Platform for content creators to monetize via subscriptions.",
              features: ["Subscription management", "Content protection (members-only areas)", "Payment processing", "User profiles"],
              price: "रू39999 - रू74999",
              delivery: "14-21 days",
              bestFor: "Content creators, educational platforms"
            },
          ]
        },
        {
          title: "SaaS Solutions",
          description: "Scalable software solutions for your business needs",
          features: ["Custom Development", "Cloud Integration", "Ongoing Support"],
          price: "Starting at रू44999",
          details: [
            {
              name: "Subscription Management System",
              description: "A scalable system for managing subscriptions, billing, and payments.",
              features: ["Subscription Plans Management", "Automated Billing", "Payment Gateway Integration", "Customer Portal"],
              price: "रू49999 - रू79999",
              delivery: "21-30 days",
              bestFor: "SaaS businesses, content platforms"
            },
            {
              name: "CRM System",
              description: "A platform to manage customer data and interactions.",
              features: ["Contact Management", "Lead Tracking", "Sales Pipeline", "Email Integration"],
              price: "रू69999 - रू99999",
              delivery: "30-45 days",
              bestFor: "Sales teams, marketing agencies"
            },
            {
              name: "Project Management Software",
              description: "Organize projects, tasks, and collaboration in one platform.",
              features: ["Task Management", "Team Collaboration", "File Sharing", "Progress Tracking"],
              price: "रू59999 - रू119999",
              delivery: "30-45 days",
              bestFor: "Teams, businesses, remote workers"
            },
            {
              name: "E-Learning Platform",
              description: "A platform to create and manage online courses.",
              features: ["Course Creation", "Student Management", "Progress Tracking", "Assessment Tools"],
              price: "रू74999 - रू149999",
              delivery: "30-45 days",
              bestFor: "Educational institutions, training centers"
            },
            {
              name: "Team Collaboration Tool",
              description: "Facilitate team communication and task management.",
              features: ["Real-time Chat", "Task Assignment", "File Sharing", "Video Conferencing"],
              price: "रू59999 - रू99999",
              delivery: "21-30 days",
              bestFor: "Startups, remote teams"
            },
            {
              name: "Time Tracking & Billing Software",
              description: "A platform for freelancers and businesses to track time and bill clients.",
              features: ["Time Tracking", "Invoice Generation", "Expense Management", "Client Portal"],
              price: "रू44999 - रू79999",
              delivery: "21-30 days",
              bestFor: "Freelancers, service providers"
            },
            {
              name: "Marketing Automation Software",
              description: "Automate marketing campaigns and lead nurturing.",
              features: ["Email Campaigns", "Lead Scoring", "Analytics Dashboard", "A/B Testing"],
              price: "रू49999 - रू99999",
              delivery: "21-30 days",
              bestFor: "Digital marketers, businesses"
            },
            {
              name: "Inventory Management System",
              description: "Track stock levels, sales, and orders.",
              features: ["Stock Tracking", "Order Management", "Supplier Management", "Reports"],
              price: "रू54999 - रू89999",
              delivery: "30-45 days",
              bestFor: "E-commerce, retail businesses"
            },
            {
              name: "Customer Support & Ticketing System",
              description: "Manage customer queries and support tickets.",
              features: ["Ticket Management", "Knowledge Base", "Customer Portal", "Analytics"],
              price: "रू39999 - रू74999",
              delivery: "21-30 days",
              bestFor: "Businesses with customer support needs"
            },
            {
              name: "Online Booking & Reservation System",
              description: "A system for booking appointments or reservations.",
              features: ["Calendar Management", "Payment Processing", "Automated Reminders", "Admin Dashboard"],
              price: "रू39999 - रू69999",
              delivery: "21-30 days",
              bestFor: "Service providers, event planners"
            },
            {
              name: "Document Management System",
              description: "Organize and manage documents and files.",
              features: ["File Storage", "Version Control", "Access Control", "Search Functionality"],
              price: "रू49999 - रू89999",
              delivery: "21-30 days",
              bestFor: "Legal firms, businesses, teams"
            },
            {
              name: "HRM System",
              description: "Manage employee data, payroll, and performance.",
              features: ["Employee Database", "Payroll Management", "Leave Management", "Performance Reviews"],
              price: "रू64999 - रू119999",
              delivery: "30-45 days",
              bestFor: "Large enterprises, HR departments"
            },
            {
              name: "Cloud Storage Solution",
              description: "Provide secure cloud storage for businesses or individuals.",
              features: ["File Storage", "File Sharing", "Access Control", "Backup System"],
              price: "रू59999 - रू99999",
              delivery: "30-45 days",
              bestFor: "Businesses, individual users"
            },
            {
              name: "SaaS Analytics Dashboard",
              description: "Real-time analytics and insights for SaaS businesses.",
              features: ["Real-time Metrics", "Custom Reports", "Data Visualization", "Export Options"],
              price: "रू54999 - रू94999",
              delivery: "21-30 days",
              bestFor: "SaaS businesses, data-driven companies"
            },
            {
              name: "Subscription Box Management Platform",
              description: "A platform for businesses offering subscription boxes.",
              features: ["Subscription Management", "Inventory Control", "Shipping Integration", "Customer Portal"],
              price: "रू59999 - रू109999",
              delivery: "30-45 days",
              bestFor: "Subscription box businesses, e-commerce"
            }
          ]
        },
        {
          title: "SEO Consulting",
          description: "Improve your search engine rankings and visibility",
          features: ["Keyword Research", "Technical SEO", "Content Strategy"],
          price: "Starting at रू14999",
          details: [
            {
              name: "SEO Website Audit",
              description: "Comprehensive audit to analyze your website’s SEO performance.",
              features: ["On-page analysis", "Backlink analysis", "Site speed testing"],
              price: "रू8999 - रू15999",
              delivery: "3-5 days",
              bestFor: "Businesses seeking to identify SEO issues"
            },
            {
              name: "Keyword Research & Strategy",
              description: "In-depth keyword research to target the right audience.",
              features: ["Competitor keyword analysis", "Long-tail keyword strategy", "Search volume and difficulty analysis"],
              price: "रू11499 - रू19999",
              delivery: "3-5 days",
              bestFor: "Content marketers, SEO beginners"
            },
            {
              name: "On-Page SEO Optimization",
              description: "Optimize website elements to improve search rankings.",
              features: ["Meta tag optimization", "Image alt text and descriptions", "Internal linking strategy"],
              price: "रू13499 - रू22999",
              delivery: "5-7 days",
              bestFor: "Websites looking to improve visibility"
            },
            {
              name: "Technical SEO Optimization",
              description: "Enhance your website’s technical performance for better search indexing.",
              features: ["Mobile optimization", "Crawlability and indexing improvements", "URL structure and site architecture"],
              price: "रू17499 - रू29999",
              delivery: "7-10 days",
              bestFor: "Websites with technical SEO challenges"
            },
            {
              name: "Content Strategy & Development",
              description: "Develop SEO-friendly content for blogs, pages, and product descriptions.",
              features: ["Blog post creation and optimization", "Landing page content", "Content calendar planning"],
              price: "रू16499 - रू28999",
              delivery: "7-14 days",
              bestFor: "Content creators, bloggers, e-commerce sites"
            },
            {
              name: "Link Building Strategy",
              description: "Create a powerful backlink strategy to boost domain authority.",
              features: ["Quality backlinks from high-authority websites", "Outreach campaigns", "Guest post opportunities"],
              price: "रू18499 - रू33999",
              delivery: "14-21 days",
              bestFor: "Businesses with strong content needing backlinks"
            },
            {
              name: "Local SEO Optimization",
              description: "Optimize for local searches and improve local visibility.",
              features: ["Google My Business optimization", "Local citation building", "Local keywords targeting"],
              price: "रू13499 - रू22999",
              delivery: "7-10 days",
              bestFor: "Local businesses, restaurants, service providers"
            },
            {
              name: "E-Commerce SEO Optimization",
              description: "Improve the SEO of e-commerce platforms to drive more sales.",
              features: ["Product page optimization", "Structured data for products", "Review and rating optimization"],
              price: "रू19999 - रू34999",
              delivery: "10-14 days",
              bestFor: "E-commerce websites, online stores"
            },
            {
              name: "SEO Content Optimization",
              description: "Enhance existing content to rank higher on search engines.",
              features: ["Content rewrite for keyword inclusion", "SEO title and meta description improvements", "Image and video optimization"],
              price: "रू11499 - रू19999",
              delivery: "5-7 days",
              bestFor: "Websites with outdated or underperforming content"
            },
            {
              name: "SEO Performance Reporting",
              description: "Track and report SEO performance with key metrics.",
              features: ["Organic traffic tracking", "Keyword ranking analysis", "Competitor performance benchmarking"],
              price: "रू8499 - रू14999",
              delivery: "5-7 days",
              bestFor: "Businesses seeking regular performance updates"
            },
            {
              name: "Mobile SEO Optimization",
              description: "Optimize websites for mobile users to improve rankings.",
              features: ["Mobile responsiveness testing", "Page load time optimization", "Mobile-friendly content"],
              price: "रू13499 - रू22499",
              delivery: "7-10 days",
              bestFor: "Websites with mobile traffic challenges"
            },
            {
              name: "SEO Consultation & Strategy",
              description: "Provide tailored SEO strategies for businesses.",
              features: ["SEO roadmap creation", "Performance goal setting", "Personalized SEO advice"],
              price: "रू15499 - रू27999",
              delivery: "3-5 days",
              bestFor: "New businesses, businesses looking for SEO direction"
            },
            {
              name: "Video SEO Optimization",
              description: "Improve visibility of video content on search engines.",
              features: ["Video title and description optimization", "Transcriptions and captions", "Video schema markup"],
              price: "रू13499 - रू22999",
              delivery: "7-10 days",
              bestFor: "YouTubers, video marketers, businesses with video content"
            },
            {
              name: "International SEO",
              description: "Optimize websites for global markets and multi-language SEO.",
              features: ["Multilingual content optimization", "International keyword research", "Geo-targeting setup"],
              price: "रू22999 - रू42999",
              delivery: "14-21 days",
              bestFor: "International businesses, multilingual websites"
            },
            {
              name: "SEO for Blogs",
              description: "Optimize blog posts to increase traffic and ranking.",
              features: ["Blog post SEO audit", "Keyword targeting for blogs", "Internal linking for blog posts"],
              price: "रू11499 - रू19499",
              delivery: "5-7 days",
              bestFor: "Bloggers, content marketers"
            },
            {
              name: "Voice Search SEO Optimization",
              description: "Prepare your site for voice search queries.",
              features: ["Natural language keyword targeting", "Content restructuring for voice search", "FAQ page optimization"],
              price: "रू13499 - रू22999",
              delivery: "7-10 days",
              bestFor: "Businesses with voice-search traffic"
            },
            {
              name: "SEO for Startups",
              description: "Create an SEO strategy tailored for new businesses and startups.",
              features: ["Market and competitor research", "SEO goal setting and planning", "Local SEO optimization"],
              price: "रू14499 - रू25999",
              delivery: "7-10 days",
              bestFor: "New startups, emerging businesses"
            },
            {
              name: "SEO for Enterprises",
              description: "Large-scale SEO solutions for enterprise-level websites.",
              features: ["Custom SEO strategy for large websites", "Technical SEO fixes for scalability", "Analytics and performance tracking for enterprises"],
              price: "रू29999 - रू49999",
              delivery: "30-45 days",
              bestFor: "Enterprises, large-scale businesses"
            }
          ]
        },
        {
          title: "Translation Services",
          description: "Professional translation and localization services",
          features: ["Multiple Languages", "Technical Translation", "Content Localization"],
          price: "Starting at रू11999",
          details: [
            {
              name: "Document Translation",
              description: "Accurate translation of business, legal, or personal documents.",
              features: ["Certified translation", "Formatting and layout preservation", "Proofreading and quality assurance"],
              price: "रू1999 - रू4499 per page",
              delivery: "1-2 days",
              bestFor: "Legal documents, contracts, personal documents"
            },
            {
              name: "Website Translation",
              description: "Translate your website content to reach a global audience.",
              features: ["Multilingual page translation", "SEO-optimized content for different languages", "Mobile and desktop compatibility"],
              price: "रू8999 - रू16999 per 1,000 words",
              delivery: "3-5 days",
              bestFor: "Businesses expanding internationally"
            },
            {
              name: "Certified Translation",
              description: "Official, certified translation services for documents needed for legal or governmental purposes.",
              features: ["Sworn certification", "Notarization if required", "Accuracy guarantee"],
              price: "रू2999 - रू5499 per page",
              delivery: "1-3 days",
              bestFor: "Legal, immigration, or government paperwork"
            },
            {
              name: "Subtitling & Captioning Services",
              description: "Translate and add subtitles or captions to videos.",
              features: ["Accurate subtitle translation", "Synchronization with video", "Customizable formats (SRT, VTT, etc.)"],
              price: "रू4999 - रू8999 per minute of video",
              delivery: "3-7 days",
              bestFor: "Video content creators, businesses, educational institutions"
            },
            {
              name: "Audio Translation/Transcription",
              description: "Transcription and translation of audio or video content.",
              features: ["Transcription of audio or video", "Translation of transcripts into desired language", "Proofreading and review for accuracy"],
              price: "रू7499 - रू12999 per hour of audio",
              delivery: "5-7 days",
              bestFor: "Podcasts, interviews, conference calls"
            },
            {
              name: "Business/Marketing Translation",
              description: "Translation of marketing materials, brochures, and business documents.",
              features: ["Brand tone adaptation", "Market-specific translation", "SEO-friendly translations for marketing campaigns"],
              price: "रू9999 - रू18999 per 1,000 words",
              delivery: "5-7 days",
              bestFor: "International marketing campaigns, brands expanding globally"
            },
            {
              name: "E-Commerce Product Description Translation",
              description: "Translate product listings, reviews, and descriptions for e-commerce websites.",
              features: ["SEO-friendly product descriptions", "Localization of product features", "Accurate translation for global reach"],
              price: "रू4999 - रू8999 per 1,000 words",
              delivery: "3-5 days",
              bestFor: "E-commerce businesses, Amazon sellers"
            },
            {
              name: "Legal Translation",
              description: "Specialized translation for contracts, patents, and legal documents.",
              features: ["Accuracy and legal terminology focus", "Certified legal translations", "Proofreading and notarization (if required)"],
              price: "रू6999 - रू14999 per page",
              delivery: "3-5 days",
              bestFor: "Law firms, contracts, and legal departments"
            },
            {
              name: "Medical Translation",
              description: "Translation of medical and pharmaceutical documents with high accuracy.",
              features: ["Patient information leaflets", "Research papers and clinical trials", "Medical device manuals"],
              price: "रू8999 - रू18499 per 1,000 words",
              delivery: "5-7 days",
              bestFor: "Healthcare professionals, pharmaceutical companies"
            },
            {
              name: "Technical Translation",
              description: "Translate manuals, instructions, and technical documents for precision.",
              features: ["Engineering, IT, or product manuals", "Instructional guides", "Scientific papers and reports"],
              price: "रू10999 - रू20999 per 1,000 words",
              delivery: "7-10 days",
              bestFor: "Manufacturers, technical businesses"
            },
            {
              name: "Literary Translation",
              description: "Translate books, novels, poems, and other literary works with a focus on creativity.",
              features: ["Translations with preservation of tone, style, and context", "Proofreading and final review", "Localization for cultural context"],
              price: "रू15999 - रू29999 per 1,000 words",
              delivery: "14-21 days",
              bestFor: "Authors, publishers, literary agencies"
            },
            {
              name: "Social Media Translation",
              description: "Translate posts, captions, and content for social media platforms.",
              features: ["Translating posts in the right tone for the target audience", "Localization for culture-specific content", "SEO optimization for social media keywords"],
              price: "रू2999 - रू6499 per post",
              delivery: "1-3 days",
              bestFor: "Social media influencers, brands"
            },
            {
              name: "Multilingual Customer Support Translation",
              description: "Translate customer queries, responses, and FAQs for global support teams.",
              features: ["Live chat translation", "FAQ page translation", "Email and support ticket translations"],
              price: "रू6499 - रू12999 per 1,000 words",
              delivery: "5-7 days",
              bestFor: "International support teams, e-commerce stores"
            },
            {
              name: "Mobile App Translation",
              description: "Localization and translation of mobile applications for different languages.",
              features: ["Interface and content translation", "Cultural adaptation for user experience", "App store description localization"],
              price: "रू12999 - रू22999 per app screen",
              delivery: "7-10 days",
              bestFor: "Mobile app developers, startups"
            },
            {
              name: "Translation for Tourism & Hospitality",
              description: "Translate brochures, travel guides, and tourism-related content.",
              features: ["Tour guides and descriptions", "Localized travel itineraries", "Hotel and restaurant menus"],
              price: "रू5499 - रू9999 per 1,000 words",
              delivery: "3-5 days",
              bestFor: "Travel agencies, tourism websites, hotels"
            },
            {
              name: "Press Release Translation",
              description: "Translate press releases and media kits for international distribution.",
              features: ["Localization of news content", "SEO-friendly translation for media outreach", "High-quality, accurate translation"],
              price: "रू6499 - रू12999 per release",
              delivery: "3-5 days",
              bestFor: "PR agencies, businesses, media"
            },
            {
              name: "Certified Transcription and Translation",
              description: "Certified transcription and translation of official documents.",
              features: ["Legal and governmental certified translations", "Notarization if needed", "Accuracy guaranteed"],
              price: "रू8999 - रू15999 per page",
              delivery: "5-7 days",
              bestFor: "Official documents, immigration agencies"
            },
            {
              name: "Real-Time Translation Services",
              description: "Live translation for meetings, conferences, or online calls.",
              features: ["In-person or virtual real-time translation", "Multilingual support for various events", "Customizable for any industry"],
              price: "रू14999 - रू29999 per day",
              delivery: "On-demand",
              bestFor: "Conferences, meetings, online events"
            }
          ]
        },
      ];

      return (
        <section className="section-padding">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center fade-up">
              Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  price={service.price}
                  index={index}
                  onSelect={setSelectedService}
                />
              ))}
            </div>

            <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
              <DialogContent className="max-w-4xl max-h-[80vh]">
                <DialogHeader>
                  <DialogTitle>
                    {selectedService === "Web Development" ? "Web Development Services" : 
                     selectedService === "SaaS Solutions" ? "SaaS Solutions" : 
                     selectedService}
                  </DialogTitle>
                  <DialogDescription>
                    {selectedService === "Web Development" ? "Choose the perfect web development package for your needs" :
                     selectedService === "SaaS Solutions" ? "Explore our range of software as a service solutions" :
                     "Learn more about our services"}
                  </DialogDescription>
                </DialogHeader>
                <ScrollArea className="h-[60vh] pr-4">
                  <div className="grid grid-cols-1 gap-6">
                    {services
                      .find((s) => s.title === selectedService)
                      ?.details?.map((detail) => (
                        <ServiceDetail
                          key={detail.name}
                          {...detail}
                        />
                      ))}
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>
          </div>
        </section>
      );
    };

    export default Services;
