
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import ScrollAnimation from './ui/scroll-animation';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-dark text-center mb-4">
            Связаться с нами
          </h2>
          <p className="text-center text-coffee-medium max-w-2xl mx-auto mb-12">
            Есть вопросы или предложения? Отправьте нам сообщение, и мы свяжемся с вами в ближайшее время
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ScrollAnimation delay={200}>
            <div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-coffee-dark font-medium">Имя</label>
                    <Input 
                      id="name" 
                      placeholder="Ваше имя" 
                      className="border-coffee-medium/30 focus-visible:ring-coffee-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-coffee-dark font-medium">Email</label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      className="border-coffee-medium/30 focus-visible:ring-coffee-medium"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-coffee-dark font-medium">Тема</label>
                  <Input 
                    id="subject" 
                    placeholder="Тема сообщения" 
                    className="border-coffee-medium/30 focus-visible:ring-coffee-medium"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-coffee-dark font-medium">Сообщение</label>
                  <Textarea 
                    id="message" 
                    placeholder="Ваше сообщение..." 
                    rows={5}
                    className="border-coffee-medium/30 focus-visible:ring-coffee-medium resize-none"
                  />
                </div>
                
                <Button className="bg-coffee-medium hover:bg-coffee-dark text-coffee-cream w-full">
                  Отправить сообщение
                </Button>
              </form>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation delay={400}>
            <div className="space-y-8">
              <Card className="p-6 bg-coffee-cream border-none shadow-md">
                <h3 className="text-xl font-bold text-coffee-dark mb-4">Наше местоположение</h3>
                
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="bg-coffee-medium rounded-full p-2 text-coffee-cream mt-1">
                      <Icon name="MapPin" className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-coffee-dark">Адрес</p>
                      <p className="text-coffee-medium">ул. Кофейная, 42, Москва, 123456</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="bg-coffee-medium rounded-full p-2 text-coffee-cream mt-1">
                      <Icon name="Phone" className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-coffee-dark">Телефон</p>
                      <p className="text-coffee-medium">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="bg-coffee-medium rounded-full p-2 text-coffee-cream mt-1">
                      <Icon name="Mail" className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-coffee-dark">Email</p>
                      <p className="text-coffee-medium">info@coffee-house.ru</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <div className="bg-coffee-medium rounded-full p-2 text-coffee-cream mt-1">
                      <Icon name="Clock" className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-coffee-dark">Часы работы</p>
                      <p className="text-coffee-medium">Пн-Пт: 8:00 - 22:00</p>
                      <p className="text-coffee-medium">Сб-Вс: 9:00 - 23:00</p>
                    </div>
                  </div>
                </div>
              </Card>
              
              <div className="rounded-lg overflow-hidden shadow-md h-64 w-full">
                <img 
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Карта кофейни" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
