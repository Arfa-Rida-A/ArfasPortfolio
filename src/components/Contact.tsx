import { useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { toast } from 'sonner@2.0.3';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success('Message sent successfully!', {
      description: "I'll get back to you as soon as possible.",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:arfa.rida@example.com',
      color: 'text-red-600',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/arfarida',
      color: 'text-gray-900',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/arfarida',
      color: 'text-blue-600',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-indigo-50 via-slate-100 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl text-center mb-4 text-gray-900">
          Get In Touch
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 bg-white/90 backdrop-blur-sm shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-slate-200">
              <h3 className="text-2xl mb-4 text-gray-900">Let's Connect</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                I'm always interested in hearing about new projects and
                opportunities. Whether you have a question or just want to say
                hi, feel free to drop me a message!
              </p>
              <p className="text-gray-700 leading-relaxed">
                I typically respond within 24-48 hours. Looking forward to
                hearing from you!
              </p>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 shadow-sm border border-blue-200">
              <h4 className="text-gray-700 mb-4">Find me on</h4>
              <div className="space-y-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      <div className={`p-2 rounded-lg bg-gray-100 ${social.color}`}>
                        <Icon size={20} />
                      </div>
                      <span>{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}