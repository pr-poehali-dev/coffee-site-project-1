
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="top" className="relative h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-coffee-dark overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1482350325005-eda5e677279b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-coffee-dark/90 via-coffee-dark/70 to-coffee-dark/90"></div>
      </div>
      
      <div className="container relative z-10 max-w-5xl mx-auto text-center md:text-left">
        <div className="md:max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold text-coffee-cream mb-4 animate-fade-in">
            Откройте для себя настоящий вкус кофе
          </h1>
          <p className="text-lg md:text-xl text-coffee-light/90 mb-8 animate-fade-in">
            От зерна до чашки – мы создаем неповторимые кофейные впечатления, которые наполнят ваш день энергией и вдохновением
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button 
              className="bg-coffee-light text-coffee-dark hover:bg-coffee-cream"
              onClick={() => scrollToSection('menu')}
              size="lg"
            >
              Наше меню
              <Icon name="Coffee" className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              className="border-coffee-light text-coffee-light hover:bg-coffee-medium"
              onClick={() => scrollToSection('contact')}
              size="lg"
            >
              Найти нас
              <Icon name="MapPin" className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <Button 
          variant="ghost" 
          className="text-coffee-cream animate-bounce rounded-full"
          onClick={() => scrollToSection('about')}
        >
          <Icon name="ChevronDown" className="h-8 w-8" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
