import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "./ui/icon";
import QrCode from "./QrCode";

const Footer: React.FC = () => {
  return (
    <footer className="bg-amber-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Кофейный дом</h3>
            <p className="mb-4 text-amber-100">
              Мы делаем лучший кофе в городе уже более 10 лет. Приходите и
              убедитесь сами!
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-amber-200 transition duration-300"
              >
                <Icon name="Instagram" />
              </a>
              <a
                href="#"
                className="text-white hover:text-amber-200 transition duration-300"
              >
                <Icon name="Facebook" />
              </a>
              <a
                href="#"
                className="text-white hover:text-amber-200 transition duration-300"
              >
                <Icon name="Twitter" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-amber-100 hover:text-white transition duration-300"
                >
                  Главная
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-amber-100 hover:text-white transition duration-300"
                >
                  О нас
                </a>
              </li>
              <li>
                <a
                  href="#coffee"
                  className="text-amber-100 hover:text-white transition duration-300"
                >
                  Наш кофе
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="text-amber-100 hover:text-white transition duration-300"
                >
                  Меню
                </a>
              </li>
              <li>
                <a
                  href="#contacts"
                  className="text-amber-100 hover:text-white transition duration-300"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Часы работы</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Понедельник - Пятница</span>
                <span>8:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>Суббота</span>
                <span>9:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Воскресенье</span>
                <span>10:00 - 20:00</span>
              </li>
            </ul>
          </div>

          <div className="qr-code-container">
            <QrCode
              size={150}
              className="bg-white rounded-md"
              title="Отсканируйте, чтобы посетить сайт"
            />
          </div>
        </div>

        <div className="border-t border-amber-800 pt-6 text-center">
          <p>
            &copy; {new Date().getFullYear()} Кофейный дом. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
