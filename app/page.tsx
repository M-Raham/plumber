'use client';

import { useState, useEffect, useRef } from 'react';
import { Phone, Mail, Clock, MapPin, Wrench, Droplets, Shield, Zap, ChevronRight, Star, CheckCircle, Users, Award, TrendingUp } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const heroRef = useRef<HTMLDivElement>(null);
  const observedSections = useRef<Set<string>>(new Set());


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !observedSections.current.has(entry.target.id)) {
            observedSections.current.add(entry.target.id);
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Emergency Plumbing",
      description: "24/7 emergency plumbing services for urgent repairs and emergencies.",
      gradient: "from-blue-500 to-cyan-500",
      delay: 0
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Installations",
      description: "Professional installation of fixtures, pipes, and plumbing systems.",
      gradient: "from-orange-500 to-red-500",
      delay: 100
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Preventive Maintenance",
      description: "Regular maintenance to prevent costly plumbing issues before they occur.",
      gradient: "from-green-500 to-emerald-500",
      delay: 200
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Water Heaters",
      description: "Installation, repair, and maintenance of all water heater types.",
      gradient: "from-yellow-500 to-amber-500",
      delay: 300
    }
  ];

  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Availability",
      description: "Round-the-clock service for all your plumbing emergencies."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Licensed & Insured",
      description: "Fully licensed, bonded, and insured for your peace of mind."
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "5-Star Rated",
      description: "Trusted by thousands of satisfied customers with excellent reviews."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      content: "AquaFlow Plumbing saved the day! Their emergency service was fast, professional, and affordable. Highly recommend!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      content: "Outstanding service from start to finish. They handled our commercial plumbing issues with expertise and efficiency.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Property Manager",
      content: "Reliable, professional, and always on time. AquaFlow is our go-to plumbing service for all our properties.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 glass animate-slideDown">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Droplets className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-slate-900">AquaFlow Plumbing</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-slate-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#testimonials" className="text-slate-700 hover:text-blue-600 transition-colors">Testimonials</a>
              <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors">Contact</a>
              <a href="tel:1234567890" className="bg-linear-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full hover:scale-105 transition-transform shadow-lg">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - FIXED */}
      <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 pb-12 sm:pb-16">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-400 rounded-full blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-400 rounded-full blur-3xl opacity-20 animate-pulse" />
          <div className="absolute top-1/2 left-1/2 w-48 sm:w-80 h-48 sm:h-80 bg-blue-300 rounded-full blur-3xl opacity-10 animate-pulse" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-12 items-center justify-center">
            {/* Text Content */}
            <div className={`scroll-animate left-initial ${visibleSections.has('hero') ? 'visible-left' : ''} w-full lg:max-w-3xl text-center sm:text-center lg:text-left order-2 lg:order-1`}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
                Expert <span className="gradient-text">Plumbing Solutions</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
                Professional 24/7 plumbing services for residential and commercial properties. Fast, reliable, and affordable solutions for all your plumbing needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 justify-center sm:justify-center lg:justify-start">
                <a 
                  href="tel:1234567890"
                  className="bg-linear-to-r from-blue-600 to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:scale-105 transition-transform shadow-xl flex items-center justify-center space-x-2 text-sm sm:text-base font-semibold"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Call Now</span>
                </a>
                <a 
                  href="#services"
                  className="border-2 border-blue-600 text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center space-x-2 text-sm sm:text-base font-semibold"
                >
                  <span>Our Services</span>
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-md mx-auto lg:mx-0">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900">15+</div>
                  <div className="text-xs sm:text-sm text-slate-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900">5K+</div>
                  <div className="text-xs sm:text-sm text-slate-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900">100%</div>
                  <div className="text-xs sm:text-sm text-slate-600">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Image Content */}
            <div className={`scroll-animate right-initial ${visibleSections.has('hero') ? 'visible-right' : ''} w-full max-w-md lg:max-w-none order-1 lg:order-2 flex justify-center lg:justify-start`}>
              <div className="relative">
                <div className="bg-white rounded-2xl lg:rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8 animate-float">
                  <Image 
                    src="/plumber.jpg"
                    alt="Professional Plumber"
                    width={600}
                    height={400}
                    className="rounded-xl lg:rounded-2xl w-full h-64 sm:h-80 lg:h-96 object-cover"
                  />
                  <div className="absolute top-6 sm:top-8 right-6 sm:right-8 bg-red-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold animate-bounce">
                    24/7 Emergency
                  </div>
                </div>
                <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white rounded-xl lg:rounded-2xl shadow-xl p-3 sm:p-4 glass hidden sm:block">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                    <div>
                      <div className="font-semibold text-slate-900 text-sm sm:text-base">Licensed & Insured</div>
                      <div className="text-xs sm:text-sm text-slate-600">Fully Certified</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 scroll-animate ${visibleSections.has('services') ? 'visible' : ''}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive plumbing solutions tailored to meet your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 scroll-animate ${
                  visibleSections.has('services') ? 'visible' : ''
                }`}
                style={{ animationDelay: visibleSections.has('services') ? `${service.delay}ms` : '0ms' }}
              >
                <div className={`bg-linear-to-r ${service.gradient} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:rotate-12 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <a href="#contact" className="text-blue-600 font-semibold flex items-center space-x-1 hover:space-x-2 transition-all">
                  <span>Learn More</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 scroll-animate ${visibleSections.has('about') ? 'visible' : ''}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Why Choose AquaFlow</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We&apos;re committed to providing exceptional service and lasting solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`glass rounded-3xl p-8 text-white scroll-animate ${
                  visibleSections.has('about') ? 'visible' : ''
                }`}
                style={{ transitionDelay: visibleSections.has('about') ? `${index * 100}ms` : '0ms' }}
              >
                <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 scroll-animate ${visibleSections.has('testimonials') ? 'visible' : ''}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Customer Testimonials</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Hear what our satisfied customers have to say about our services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl shadow-lg p-8 scroll-animate ${
                  visibleSections.has('testimonials') ? 'visible' : ''
                }`}
                style={{ transitionDelay: visibleSections.has('testimonials') ? `${index * 100}ms` : '0ms' }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section id="process" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 scroll-animate ${visibleSections.has('process') ? 'visible' : ''}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Our Process</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Simple, transparent, and efficient plumbing solutions from start to finish
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Contact Us",
                description: "Reach out via phone or email for immediate assistance",
                icon: <Phone className="w-6 h-6" />,
                delay: 0
              },
              {
                step: "02", 
                title: "Inspection",
                description: "Thorough assessment of your plumbing needs and issues",
                icon: <Shield className="w-6 h-6" />,
                delay: 100
              },
              {
                step: "03",
                title: "Solution",
                description: "Expert implementation of the most effective plumbing solution",
                icon: <Wrench className="w-6 h-6" />,
                delay: 200
              },
              {
                step: "04",
                title: "Follow-up",
                description: "Ensuring complete satisfaction and long-term reliability",
                icon: <CheckCircle className="w-6 h-6" />,
                delay: 300
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`text-center scroll-animate ${visibleSections.has('process') ? 'visible' : ''}`}
                style={{ transitionDelay: visibleSections.has('process') ? `${item.delay}ms` : '0ms' }}
              >
                <div className="bg-linear-to-r from-blue-600 to-cyan-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section - FIXED */}
      <section id="areas" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div className={`scroll-animate left-initial ${visibleSections.has('areas') ? 'visible-left' : ''} order-2 lg:order-1 text-center lg:text-left w-full`}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
                Serving Your <span className="gradient-text">Community</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
                We proudly provide professional plumbing services throughout the greater metropolitan area, ensuring quality and reliability for every customer.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {[
                  { icon: <Users className="w-5 h-5" />, title: "Residential", desc: "Home plumbing solutions" },
                  { icon: <Award className="w-5 h-5" />, title: "Commercial", desc: "Business plumbing services" },
                  { icon: <TrendingUp className="w-5 h-5" />, title: "Industrial", desc: "Large-scale systems" },
                  { icon: <Shield className="w-5 h-5" />, title: "Emergency", desc: "24/7 rapid response" }
                ].map((item, index) => (
                  <div key={index} className={`flex items-start space-x-3 scroll-animate ${
                    visibleSections.has('areas') ? 'visible' : ''
                  }`} style={{ transitionDelay: visibleSections.has('areas') ? `${index * 100}ms` : '0ms' }}>
                    <div className="bg-blue-100 p-2.5 rounded-lg text-blue-600 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-slate-900 text-sm sm:text-base">{item.title}</h4>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={`bg-linear-to-r from-blue-50 to-cyan-50 rounded-xl lg:rounded-2xl p-4 sm:p-6 scroll-animate ${
                visibleSections.has('areas') ? 'visible' : ''
              }`} style={{ transitionDelay: visibleSections.has('areas') ? '400ms' : '0ms' }}>
                <h4 className="font-bold text-slate-900 mb-3 sm:mb-4 text-base sm:text-lg">Service Coverage</h4>
                <ul className="space-y-2 sm:space-y-3 text-slate-600 text-sm sm:text-base">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Metropolitan City Center</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>North and South Suburbs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>East and West Districts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Surrounding Counties</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Image Content */}
            <div className={`scroll-animate right-initial ${visibleSections.has('areas') ? 'visible-right' : ''} order-1 lg:order-2 w-full`}>
              <div className="relative max-w-md mx-auto lg:max-w-none">
                <div className="bg-linear-to-br from-blue-100 to-cyan-100 rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8">
                  <Image 
                    src="/serving.jpg"
                    alt="Service Areas"
                    width={500}
                    height={400}
                    className="rounded-lg lg:rounded-2xl w-full h-64 sm:h-80 lg:h-96 object-cover shadow-xl"
                  />
                  <div className="absolute -bottom-3 sm:-bottom-4 -right-3 sm:-right-4 bg-white rounded-xl lg:rounded-2xl shadow-xl p-3 sm:p-4">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                      <div>
                        <div className="font-bold text-slate-900 text-sm sm:text-base">50+ Mile</div>
                        <div className="text-xs sm:text-sm text-slate-600">Service Radius</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`bg-linear-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-white scroll-animate ${
            visibleSections.has('contact') ? 'visible' : ''
          }`}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Get Started?</h2>
                <p className="text-xl mb-8 text-blue-100">
                  Contact us today for a free consultation and quote. We&apos;re here to help with all your plumbing needs!
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5" />
                    <a href="tel:1234567890" className="hover:text-blue-200 transition-colors">(123) 456-7890</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5" />
                    <a href="mailto:info@aquaflow.com" className="hover:text-blue-200 transition-colors">info@aquaflow.com</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5" />
                    <span>Mon-Fri: 8AM-6PM, 24/7 Emergency Service</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5" />
                    <span>Serving Greater Metropolitan Area</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="tel:1234567890"
                    className="bg-white text-blue-600 px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-xl flex items-center justify-center space-x-2 font-semibold"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Now</span>
                  </a>
                  <a 
                    href="mailto:info@aquaflow.com"
                    className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-all flex items-center justify-center space-x-2 font-semibold"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Email Us</span>
                  </a>
                </div>
              </div>

              <div className="hidden lg:block">
                <Image 
                  src="/contact.jpg"
                  alt="Plumbing Service"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Droplets className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">AquaFlow Plumbing</span>
            </div>
            <p className="text-slate-400 mb-4">Expert Plumbing Solutions for Your Home & Business</p>
            <div className="text-sm text-slate-500">
              © 2024 AquaFlow Plumbing. All rights reserved. | Licensed & Insured
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}