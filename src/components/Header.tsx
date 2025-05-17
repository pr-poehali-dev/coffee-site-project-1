
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
      isScrolled ? 'bg-coffee-dark/90 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="container flex items-center justify-between">
        <a href="#top" className="flex items-center">
          <div className="text-xl md:text-2xl font-bold text-coffee-cream font-montserrat">
            Кофейный Дом
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Button 
            variant="ghost" 
            className="text-coffee-cream hover:text-white hover:bg-coffee-medium/50"
            onClick={() => scrollToSection('about')}
          >
            О нас
          </Button>
          <Button 
            variant="ghost" 
            className="text-coffee-cream hover:text-white hover:bg-coffee-medium/50"
            onClick={() => scrollToSection('coffee')}
          >
            Наш кофе
          </Button>
          <Button 
            variant="ghost" 
            className="text-coffee-cream hover:text-white hover:bg-coffee-medium/50"
            onClick={() => scrollToSection('menu')}
          >
            Меню
          </Button>
          <Button 
            variant="ghost" 
            className="text-coffee-cream hover:text-white hover:bg-coffee-medium/50"
            onClick={() => scrollToSection('contact')}
          >
            Контакты
          </Button>
        </nav>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" className="text-coffee-cream p-2">
              <Icon name="Menu" className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-coffee-medium text-coffee-cream">
            <nav className="flex flex-col space-y-6 mt-12">
              <Button 
                variant="ghost" 
                className="text-coffee-cream hover:text-white hover:bg-coffee-dark/50 justify-start"
                onClick={() => scrollToSection('about')}
              >
                О нас
              </Button>
              <Button 
                variant="ghost" 
                className="text-coffee-cream hover:text-white hover:bg-coffee-dark/50 justify-start"
                onClick={() => scrollToSection('coffee')}
              >
                Наш кофе
              </Button>
              <Button 
                variant="ghost" 
                className="text-coffee-cream hover:text-white hover:bg-coffee-dark/50 justify-start"
                onClick={() => scrollToSection('menu')}
              >
                Меню
              </Button>
              <Button 
                variant="ghost" 
                className="text-coffee-cream hover:text-white hover:bg-coffee-dark/50 justify-start"
                onClick={() => scrollToSection('contact')}
              >
                Контакты
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
