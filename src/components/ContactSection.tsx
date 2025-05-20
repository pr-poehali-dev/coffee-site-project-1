import React from "react";
import QrCode from "./QrCode";
import { Card, CardContent } from "./ui/card";
import Icon from "./ui/icon";

const ContactSection: React.FC = () => {
  return (
    <section id="contacts" className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Свяжитесь с нами
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="fade-in-scroll">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-amber-800 text-white flex items-center justify-center mb-4">
                  <Icon name="MapPin" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Адрес</h3>
                <p className="text-gray-600">
                  ул. Кофейная, 42
                  <br />
                  Москва, Россия
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="fade-in-scroll" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-amber-800 text-white flex items-center justify-center mb-4">
                  <Icon name="Phone" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Телефон</h3>
                <p className="text-gray-600">+7 (999) 123-45-67</p>
                <p className="text-gray-600 mt-1">Пн-Вс: 8:00 - 20:00</p>
              </div>
            </CardContent>
          </Card>

          <Card className="fade-in-scroll" style={{ animationDelay: "0.4s" }}>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-amber-800 text-white flex items-center justify-center mb-4">
                  <Icon name="Mail" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600">info@coffeelovers.ru</p>
                <p className="text-gray-600 mt-1">
                  Мы ответим в течение 24 часов
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="fade-in-scroll">
            <h3 className="text-2xl font-semibold mb-6">
              Отправьте нам сообщение
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-1"
                >
                  Тема
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Сообщение
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-amber-800 text-white rounded-md hover:bg-amber-900 transition duration-300"
              >
                Отправить
              </button>
            </form>
          </div>

          <div
            className="flex flex-col space-y-6 fade-in-scroll"
            style={{ animationDelay: "0.3s" }}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Наше расположение</h3>
              <div className="relative h-[300px] overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.3444532236283!2d37.61776761595675!3d55.75496798055638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2sThe%20Kremlin!5e0!3m2!1sen!2sru!4v1629882721279!5m2!1sen!2sru"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Карта расположения"
                ></iframe>
              </div>
            </div>

            <QrCode
              url={window.location.origin}
              size={160}
              className="mt-6 mx-auto max-w-xs"
              title="Сохраните наш сайт"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
