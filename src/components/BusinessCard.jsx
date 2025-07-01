import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe, Linkedin, Twitter, Github, Share2, QrCode, User, Building2, Star, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const BusinessCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { toast } = useToast();
  const [cardData, setCardData] = useState({
    name: 'Shannon Lockett',
    title: 'Retail Professional & Web Developer',
    company: 'Freelance',
    email: 'shanlockett@gmail.com',
    phone: '(+61) 478 606 363',
    location: 'Perth, Western Australia',
    website: 'shannonlockett.dev',
    portfolio: 'https://shannonlockett.dev',
    linkedin: 'linkedin.com/in/shannonlockett',
    twitter: '@shanlockett',
    github: 'github.com/shanlockett',
    about: 'A versatile professional with a strong background in retail, now creating beautiful and functional web experiences as a freelance developer.',
    skills: ['React', 'JavaScript', 'TailwindCSS', 'Customer Service', 'HTML/CSS', 'Web Design']
  });

  useEffect(() => {
    const savedData = localStorage.getItem('businessCardData');
    if (savedData) {
      const parsed = JSON.parse(savedData);
      setCardData(parsed);
    } else {
      localStorage.setItem('businessCardData', JSON.stringify(cardData));
    }
  }, []);

  const handleShare = () => {
    const cardText = `${cardData.name}\n${cardData.title} at ${cardData.company}\n\n📧 ${cardData.email}\n📱 ${cardData.phone}\n📍 ${cardData.location}\n🌐 ${cardData.website}\n\n💼 LinkedIn: ${cardData.linkedin}\n🐦 Twitter: ${cardData.twitter}\n💻 GitHub: ${cardData.github}`;
    if (navigator.share) {
      navigator.share({
        title: `${cardData.name} - Business Card`,
        text: cardText,
      }).catch((error) => console.log('Error sharing', error));
    } else {
      navigator.clipboard.writeText(cardText).then(() => {
        toast({
          title: "Copied to Clipboard! 📋",
          description: "Business card details have been copied to your clipboard."
        });
      });
    }
  };

  const handleFlip = (e) => {
    if (e.target.closest('a, button')) {
      return;
    }
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-8">
      <div className="relative w-96 h-64 perspective-1000">
        <motion.div 
          className="relative w-full h-full preserve-3d cursor-pointer" 
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          onClick={handleFlip}
        >
          <div className="absolute inset-0 w-full h-full backface-hidden">
            <div className="w-full h-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl shadow-2xl p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <User className="w-6 h-6" />
                    </div>
                    <div>
                      <h1 className="text-xl font-bold">{cardData.name}</h1>
                      <p className="text-cyan-100 text-sm">{cardData.title}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Building2 className="w-4 h-4 text-cyan-200" />
                    <span className="text-sm text-cyan-100">{cardData.company}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-cyan-200" />
                    <span className="text-sm">{cardData.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-cyan-200" />
                    <span className="text-sm">{cardData.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-cyan-200" />
                    <span className="text-sm">{cardData.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
            <div className="w-full h-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-2xl shadow-2xl p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-28 h-28 bg-white/10 rounded-full -translate-y-14 -translate-x-14"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-white/10 rounded-full translate-y-10 translate-x-10"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex-1">
                  <h2 className="text-lg font-bold mb-3 flex items-center">
                    <User className="w-5 h-5 mr-2" />
                    About Me
                  </h2>
                  <p className="text-sm text-pink-100 mb-4 leading-relaxed">
                    {cardData.about}
                  </p>
                  <h3 className="text-md font-semibold mb-2 flex items-center">
                    <Star className="w-4 h-4 mr-2" />
                    Skills
                  </h3>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {cardData.skills.slice(0, 4).map((skill, index) => (
                      <span key={index} className="text-xs bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <Globe className="w-3 h-3" />
                      <span className="text-xs">{cardData.website}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Linkedin className="w-3 h-3" />
                      <span className="text-xs">{cardData.linkedin.replace('linkedin.com/in/', '')}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Twitter className="w-3 h-3" />
                      <span className="text-xs">{cardData.twitter}</span>
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <QrCode className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex space-x-4">
        <Button onClick={(e) => { e.stopPropagation(); handleFlip(e); }} className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-2 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200">
          Flip Card
        </Button>

        <a href={cardData.portfolio} target="_blank" rel="noopener noreferrer" className="inline-block">
          <Button as="span" className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-6 py-2 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 w-full">
            <ExternalLink className="w-4 h-4 mr-2" />
            Portfolio
          </Button>
        </a>

        <Button onClick={handleShare} className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white px-6 py-2 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200">
          <Share2 className="w-4 h-4 mr-2" />
          Share
        </Button>
      </div>

      <div className="text-center text-slate-400 max-w-md">
        <p className="text-sm">Want your own pretty online business card? Of course you do, let me create you one. shanlockett@gmail.com</p>
      </div>
    </div>
  );
};

export default BusinessCard;