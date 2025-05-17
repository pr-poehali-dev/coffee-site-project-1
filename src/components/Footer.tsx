
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-coffee-dark text-coffee-cream py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Кофейный Дом</h3>
            <p className="mb-4">Мы стремимся предоставить лучший кофейный опыт, используя только свежеобжаренные зерна высшего качества.</p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-coffee-medium">
                <Icon name="Instagram" className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-coffee-medium">
                <Icon name="Facebook" className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-coffee-medium">
                <Icon name="Twitter" className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Icon name="MapPin" className="h-5 w-5" />
                <span>ул. Кофейная, 42, Москва</span>
              </p>
              <p className="flex items-center gap-2">
                <Icon name="Phone" className="h-5 w-5" />
                <span>+7 (999) 123-45-67</span>
              </p>
              <p className="flex items-center gap-2">
                <Icon name="Mail" className="h-5 w-5" />
                <span>info@coffee-house.ru</span>
              </p>
              <p className="flex items-center gap-2">
                <Icon name="Clock" className="h-5 w-5" />
                <span>Пн-Вс: 8:00 - 22:00</span>
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Подписка</h3>
            <p className="mb-4">Подпишитесь на нашу рассылку, чтобы получать новости о специальных предложениях и новинках.</p>
            <div className="flex gap-2">
              <Input placeholder="Ваш email" className="bg-coffee-medium border-coffee-medium text-coffee-cream placeholder:text-coffee-cream/60" />
              <Button className="bg-coffee-light text-coffee-dark hover:bg-coffee-cream">
                <Icon name="Send" className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-coffee-medium text-center text-sm text-coffee-cream/70">
          <p>© {new Date().getFullYear()} Кофейный Дом. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
