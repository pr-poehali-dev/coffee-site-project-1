
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ScrollAnimation from './ui/scroll-animation';

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  popular?: boolean;
  new?: boolean;
  image?: string;
};

type MenuCategory = {
  id: string;
  name: string;
  items: MenuItem[];
};

const MenuSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('coffee');

  const menu: MenuCategory[] = [
    {
      id: 'coffee',
      name: 'Кофе',
      items: [
        {
          id: 1,
          name: 'Эспрессо',
          description: 'Концентрированный кофейный напиток, приготовленный путем прохождения горячей воды под давлением через молотый кофе.',
          price: 120,
          image: 'https://images.unsplash.com/photo-1510707577719-ae7955d09ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        },
        {
          id: 2,
          name: 'Капучино',
          description: 'Кофейный напиток на основе эспрессо с добавлением вспененного молока и молочной пены.',
          price: 180,
          popular: true,
          image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        },
        {
          id: 3,
          name: 'Латте',
          description: 'Кофейный напиток, состоящий из эспрессо и молока с небольшим количеством молочной пены.',
          price: 200,
          image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        },
        {
          id: 4,
          name: 'Фильтр-кофе',
          description: 'Кофе, приготовленный путем медленного прохождения горячей воды через молотый кофе в бумажном фильтре.',
          price: 150,
          new: true,
          image: 'https://images.unsplash.com/photo-1510591509098-cda485d05c72?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        },
      ],
    },
    {
      id: 'desserts',
      name: 'Десерты',
      items: [
        {
          id: 5,
          name: 'Тирамису',
          description: 'Итальянский десерт на основе сыра маскарпоне, печенья савоярди и кофе.',
          price: 280,
          popular: true,
          image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        },
        {
          id: 6,
          name: 'Чизкейк',
          description: 'Сливочный десерт на основе сыра с хрустящей основой из печенья.',
          price: 250,
          image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        },
        {
          id: 7,
          name: 'Брауни',
          description: 'Шоколадный десерт с влажной текстурой и интенсивным шоколадным вкусом.',
          price: 200,
          image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        },
        {
          id: 8,
          name: 'Круассан',
          description: 'Традиционная французская выпечка из слоеного теста с хрустящей корочкой.',
          price: 150,
          new: true,
          image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        },
      ],
    },
    {
      id: 'snacks',
      name: 'Закуски',
      items: [
        {
          id: 9,
          name: 'Сэндвич с курицей',
          description: 'Сэндвич с нежным куриным филе, свежими овощами и соусом.',
          price: 320,
          image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        },
        {
          id: 10,
          name: 'Авокадо-тост',
          description: 'Тост с пюре из спелого авокадо, с добавлением специй и зелени.',
          price: 280,
          popular: true,
          new: true,
          image: 'https://images.unsplash.com/photo-1603046891744-76f2528dc980?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        },
        {
          id: 11,
          name: 'Гранола с йогуртом',
          description: 'Домашняя гранола с натуральным йогуртом и свежими ягодами.',
          price: 240,
          image: 'https://images.unsplash.com/photo-1568625365131-079e026a927d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        },
        {
          id: 12,
          name: 'Салат с киноа',
          description: 'Легкий и питательный салат с киноа, овощами и заправкой.',
          price: 290,
          image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        },
      ],
    },
  ];

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-coffee-cream to-white">
      <div className="container max-w-6xl mx-auto">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-dark text-center mb-4">
            Наше меню
          </h2>
          <p className="text-center text-coffee-medium max-w-2xl mx-auto mb-12">
            Выберите из нашего ассортимента кофейных напитков, десертов и закусок, приготовленных из лучших ингредиентов
          </p>
        </ScrollAnimation>

        <ScrollAnimation delay={300}>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full mb-8 bg-coffee-light/30 grid grid-cols-3">
              {menu.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="text-coffee-dark data-[state=active]:bg-coffee-medium data-[state=active]:text-coffee-cream"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {menu.map((category) => (
              <TabsContent key={category.id} value={category.id} className="animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items.map((item) => (
                    <Card key={item.id} className="border-coffee-medium/20 overflow-hidden">
                      <CardContent className="p-0 flex flex-col md:flex-row">
                        {item.image && (
                          <div className="md:w-1/3 h-48 md:h-auto">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <div className={`p-6 flex flex-col ${item.image ? 'md:w-2/3' : 'w-full'}`}>
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold text-coffee-dark">{item.name}</h3>
                            <span className="font-bold text-coffee-medium">{item.price} ₽</span>
                          </div>
                          <p className="text-coffee-medium mb-4">{item.description}</p>
                          <div className="mt-auto flex gap-2">
                            {item.popular && (
                              <Badge className="bg-coffee-medium text-coffee-cream">Популярное</Badge>
                            )}
                            {item.new && (
                              <Badge className="bg-coffee-light text-coffee-dark">Новинка</Badge>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default MenuSection;
