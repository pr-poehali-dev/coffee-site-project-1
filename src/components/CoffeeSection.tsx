
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ScrollAnimation from './ui/scroll-animation';

type CoffeeOrigin = {
  id: number;
  name: string;
  description: string;
  characteristics: string[];
  image: string;
};

const CoffeeSection: React.FC = () => {
  const coffeeOrigins: CoffeeOrigin[] = [
    {
      id: 1,
      name: 'Эфиопия',
      description: 'Считается родиной кофе. Эфиопский кофе отличается яркими фруктовыми и цветочными нотами с легкой кислинкой.',
      characteristics: ['Ягодные ноты', 'Цветочный аромат', 'Средняя кислотность'],
      image: 'https://images.unsplash.com/photo-1597481499750-3e6b92ched3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 2,
      name: 'Колумбия',
      description: 'Колумбийский кофе славится сбалансированным вкусом с нотами карамели, орехов и легким цитрусовым оттенком.',
      characteristics: ['Сладкая карамель', 'Ореховый привкус', 'Сбалансированный'],
      image: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 3,
      name: 'Бразилия',
      description: 'Мягкий, с низкой кислотностью кофе с нотами шоколада и орехов. Идеален для эспрессо-смесей.',
      characteristics: ['Шоколадный', 'Ореховые ноты', 'Низкая кислотность'],
      image: 'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section id="coffee" className="py-20 bg-gradient-to-b from-coffee-dark via-coffee-medium to-coffee-dark text-coffee-cream">
      <div className="container max-w-6xl mx-auto">
        <ScrollAnimation>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Наш кофе
          </h2>
          <p className="text-center text-coffee-light/80 max-w-2xl mx-auto mb-12">
            Мы тщательно отбираем кофейные зерна со всего мира, чтобы предложить вам неповторимые вкусовые ощущения
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coffeeOrigins.map((coffee, index) => (
            <ScrollAnimation key={coffee.id} delay={index * 200}>
              <Card className="bg-transparent border-coffee-light/20 overflow-hidden coffee-card">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={coffee.image} 
                    alt={coffee.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-coffee-light">{coffee.name}</h3>
                  <p className="mb-4 text-coffee-cream/80">{coffee.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {coffee.characteristics.map((char, idx) => (
                      <Badge key={idx} className="bg-coffee-light/20 text-coffee-light hover:bg-coffee-light/30">
                        {char}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
        
        <ScrollAnimation delay={600}>
          <div className="mt-16 text-center">
            <p className="text-lg text-coffee-light italic">
              "Кофе должен быть черным, как ночь, сладким, как грех, и горячим, как ад."
            </p>
            <p className="mt-2 text-coffee-light/60">— Турецкая пословица</p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default CoffeeSection;
