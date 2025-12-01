"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import AboutFeature from '@/components/sections/about/AboutFeature';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Briefcase, Code, Zap, Users, Target, Star, MessageSquare } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="large"
      background="fluid"
      cardStyle="gradient-bordered"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="outline"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Dima Gay"
          navItems={[
            { name: "Work", id: "work" },
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="Dima Gay"
          description="Full-stack web developer specializing in modern web solutions. Crafting beautiful, performant digital experiences with React, Next.js, and cutting-edge technologies."
          buttons={[
            { text: "View My Work", href: "work" },
            { text: "Get In Touch", href: "contact" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764588663513-hjecaqgq.jpg"
          imageAlt="Computer screen displaying lines of code"
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="I create web experiences that connect people with technology. My passion is turning complex problems into elegant, user-friendly solutions through modern development practices."
          features={[
            {
              icon: Code,
              title: "Full Stack Development",
              description: "Building complete web applications from frontend interfaces to backend systems using modern JavaScript frameworks and cloud technologies."
            },
            {
              icon: Zap,
              title: "Performance Optimized",
              description: "Every project is optimized for speed and efficiency. Lightning-fast load times and smooth interactions are not negotiable."
            },
            {
              icon: Users,
              title: "User Focused",
              description: "I design with users in mind. Every interface is intuitive, accessible, and built to provide the best possible experience."
            },
            {
              icon: Target,
              title: "Results Driven",
              description: "Your goals drive my development. I focus on delivering measurable results that impact your business positively."
            }
          ]}
        />
      </div>

      <div id="work" data-section="work">
        <ProductCardOne
          title="Featured Projects"
          description="A selection of recent work showcasing expertise in modern web development and design."
          tag="Portfolio"
          tagIcon={Briefcase}
          products={[
            {
              id: "1",
              name: "E-Commerce Platform",
              price: "React + Next.js",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764589153312-y746fycg.jpg",
              imageAlt: "two scrabble tiles spelling project update on a table"
            },
            {
              id: "2",
              name: "SaaS Dashboard",
              price: "TypeScript + Tailwind",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764588665905-aifd1otk.jpg",
              imageAlt: "close up photo black Android smartphone"
            },
            {
              id: "3",
              name: "Mobile App Interface",
              price: "React Native + Firebase",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764588666994-jukbsvj4.jpg",
              imageAlt: "a tablet and a cell phone sitting on a table"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="blur-reveal"
          textboxLayout="default"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardSeven
          title="Services"
          description="Comprehensive web development services tailored to your needs"
          tag="What I Offer"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          features={[
            {
              id: 1,
              title: "Custom Web Development",
              description: "Bespoke web applications built from scratch using modern frameworks and best practices. Scalable solutions designed for growth and performance.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764588668193-x1od7wpv.jpg",
              imageAlt: "CAPTCHA"
            },
            {
              id: 2,
              title: "Frontend Development",
              description: "Beautiful, responsive user interfaces that work flawlessly across all devices. Accessibility and user experience are core priorities.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764588669459-x0o9mn20.jpg",
              imageAlt: "a white board with writing written on it"
            },
            {
              id: 3,
              title: "Performance & Optimization",
              description: "Fast-loading websites with optimized assets, efficient code, and strategic caching. Every millisecond matters for user satisfaction and SEO.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764588670810-74xfllbq.jpg",
              imageAlt: "a close up of a computer screen with code on it"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="Client Testimonials"
          description="What clients say about working with me"
          tag="Reviews"
          tagIcon={MessageSquare}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Alex Johnson",
              handle: "@alexjohnson",
              testimonial: "Dima delivered an exceptional website that exceeded our expectations. The attention to detail and performance optimization was outstanding. Highly recommended!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764588672043-24y8ne4z.jpg",
              imageAlt: "A man sitting on a chair in the dark"
            },
            {
              id: "2",
              name: "Sarah Chen",
              handle: "@sarahchen",
              testimonial: "Working with Dima was a game-changer for our startup. The custom web app he built is fast, reliable, and our users love it. Great developer!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764588673608-f6kxf56t.jpg",
              imageAlt: "A smiling woman with blonde hair wearing a maroon shirt."
            },
            {
              id: "3",
              name: "Michael Rodriguez",
              handle: "@mrodriguez",
              testimonial: "From concept to launch, Dima was professional, responsive, and delivered clean code. The project came in on time and the results speak for themselves.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764588674638-mrscuzuq.jpg",
              imageAlt: "A man in a white collared shirt smiles."
            },
            {
              id: "4",
              name: "Emma Wilson",
              handle: "@emmawilson",
              testimonial: "Best developer I've worked with. Dima understood our vision immediately and built a website that perfectly represents our brand. Five stars!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764588676034-8w7tnuj2.jpg",
              imageAlt: "a man in an orange and white jacket looking at a cell phone"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Let's Work Together"
          description="Have a project in mind? I'd love to hear about it. Fill out the form below and I'll get back to you within 24 hours."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email", required: true }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell me about your project...",
            rows: 5,
            required: true
          }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1764588677308-ymm4oz80.jpg"
          imageAlt="A wooden table topped with scrabble tiles spelling contact"
          mediaPosition="right"
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Dima Gay"
          copyrightText="© 2025 Dima Gay. All rights reserved."
          columns={[
            {
              title: "Navigation",
              items: [
                { label: "Work", href: "work" },
                { label: "About", href: "about" },
                { label: "Services", href: "services" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "GitHub", href: "https://github.com" },
                { label: "LinkedIn", href: "https://linkedin.com" },
                { label: "Twitter", href: "https://twitter.com" },
                { label: "Email", href: "mailto:hello@dimagay.dev" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}