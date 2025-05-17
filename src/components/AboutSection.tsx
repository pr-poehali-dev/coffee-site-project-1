
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import ScrollAnimation from './ui/scroll-animation';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-coffee-cream">
      <div className="container max-w-6xl mx-auto">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-dark text-center mb-12">
            О нашей кофейне
          </h2>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <ScrollAnimation delay={200}>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1511081692775-05d0f180a065?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Наша кофейня" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-coffee-dark p-4 rounded-lg shadow-lg hidden md:block">
                <p className="text-coffee-cream text-lg font-montserrat">
                  <span className="text-4xl font-bold">10+</span><br />
                  лет опыта
                </p>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={400}>
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-coffee-dark mb-4">
                Наша история и философия
              </h3>
              <p className="text-coffee-medium text-lg">
                С 2013 года «Кофейный Дом» является местом, где ценители кофе могут насладиться превосходным вкусом и ароматом свежеобжаренных зерен из разных уголков мира.
              </p>
              <p className="text-coffee-medium text-lg">
                Мы верим, что каждая чашка кофе — это не просто напиток, а целое приключение. Наши бариста стремятся к совершенству в каждой порции, а уютная атмосфера нашей кофейни располагает к приятным беседам и отдыху.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <Card className="bg-white/50 border-coffee-medium/20">
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className="bg-coffee-medium rounded-full p-3 text-coffee-cream">
                      <Icon name="Coffee" className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-coffee-dark mb-1">Отборные зерна</h4>
                      <p className="text-coffee-medium">Мы работаем только с лучшими поставщиками кофе</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/50 border-coffee-medium/20">
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className="bg-coffee-medium rounded-full p-3 text-coffee-cream">
                      <Icon name="Award" className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-coffee-dark mb-1">Мастерство бариста</h4>
                      <p className="text-coffee-medium">Профессионалы своего дела</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
