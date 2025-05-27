import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover opacity-50" 
            src="/GOWITHPORTO LOGO.jpg" 
            alt="Background" 
          />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-6">Let's GOWITHPORTO</h1>
          <p className="text-xl mb-8">Your journey starts here</p>
          <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Innovation', 'Quality', 'Support'].map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <h3 className="text-xl font-semibold mb-4">{feature}</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Web Development',
                description: 'Custom web solutions tailored to your needs',
                icon: '🌐'
              },
              {
                title: 'Mobile Apps',
                description: 'Native and cross-platform mobile applications',
                icon: '📱'
              },
              {
                title: 'UI/UX Design',
                description: 'Beautiful and intuitive user interfaces',
                icon: '🎨'
              },
              {
                title: 'Digital Marketing',
                description: 'Strategic online presence and growth',
                icon: '📈'
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="p-8 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Working with GOWITHPORTO was a game-changer for our business.",
                author: "John Doe",
                role: "CEO, TechCorp"
              },
              {
                quote: "Their attention to detail and professionalism is unmatched.",
                author: "Jane Smith",
                role: "Marketing Director"
              },
              {
                quote: "The results exceeded our expectations in every way.",
                author: "Mike Johnson",
                role: "Founder, StartupX"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg border border-gray-200"
              >
                <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Johnson",
                role: "Lead Developer",
                image: "👨‍💻"
              },
              {
                name: "Sarah Williams",
                role: "UI/UX Designer",
                image: "👩‍🎨"
              },
              {
                name: "David Chen",
                role: "Project Manager",
                image: "👨‍💼"
              },
              {
                name: "Emily Brown",
                role: "Marketing Specialist",
                image: "👩‍💼"
              }
            ].map((member, index) => (
              <div 
                key={index}
                className="text-center"
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
