import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCity, setSelectedCity] = useState('');

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-heading font-bold text-2xl text-primary">
              CourierJobs
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="font-body text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#jobs" className="font-body text-foreground hover:text-primary transition-colors">Вакансии</a>
              <a href="#couriers" className="font-body text-foreground hover:text-primary transition-colors">Курьерам</a>
              <a href="#partners" className="font-body text-foreground hover:text-primary transition-colors">Партнёрам</a>
              <a href="#faq" className="font-body text-foreground hover:text-primary transition-colors">FAQ</a>
              <a href="#contacts" className="font-body text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button variant="outline" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-primary via-primary to-secondary py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="font-heading text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Работа курьером 
                <span className="block text-white/90">в сфере доставки еды</span>
              </h1>
              <p className="font-body text-xl mb-8 text-white/90">
                Зарабатывайте до 80 000 рублей в месяц, работая курьером в ведущих сервисах доставки. 
                Гибкий график, ежедневные выплаты, поддержка 24/7.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-white/90">
                  <Icon name="CheckCircle" size={20} />
                  <span className="font-body">Ежедневные выплаты</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <Icon name="Clock" size={20} />
                  <span className="font-body">Гибкий график</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <Icon name="Headphones" size={20} />
                  <span className="font-body">Поддержка 24/7</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="font-heading text-2xl font-semibold mb-6 text-foreground">
                Быстрая регистрация курьера
              </h3>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input id="name" placeholder="Введите ваше имя" />
                </div>
                <div>
                  <Label htmlFor="phone">Номер телефона</Label>
                  <Input id="phone" placeholder="+7 (999) 123-45-67" />
                </div>
                <div>
                  <Label htmlFor="city">Город</Label>
                  <Select value={selectedCity} onValueChange={setSelectedCity}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите город" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="moscow">Москва</SelectItem>
                      <SelectItem value="spb">Санкт-Петербург</SelectItem>
                      <SelectItem value="ekb">Екатеринбург</SelectItem>
                      <SelectItem value="nsk">Новосибирск</SelectItem>
                      <SelectItem value="kzn">Казань</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="transport">Транспорт</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Способ передвижения" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="scooter">Скутер</SelectItem>
                      <SelectItem value="bike">Велосипед</SelectItem>
                      <SelectItem value="car">Автомобиль</SelectItem>
                      <SelectItem value="foot">Пешком</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-body font-medium py-3">
                  Начать работу курьером
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-4 text-foreground">
              Преимущества работы с нами
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы предлагаем лучшие условия для курьеров в сфере доставки еды
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Banknote" size={32} className="text-primary" />
                </div>
                <CardTitle className="font-heading text-xl">Высокий доход</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="font-body text-base">
                  Зарабатывайте до 80 000 ₽ в месяц с ежедневными выплатами и бонусами за активность
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Calendar" size={32} className="text-primary" />
                </div>
                <CardTitle className="font-heading text-xl">Гибкий график</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="font-body text-base">
                  Работайте когда удобно — утром, днём или вечером. Полная свобода выбора смен
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-primary" />
                </div>
                <CardTitle className="font-heading text-xl">Страхование</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="font-body text-base">
                  Полное страхование курьера и транспорта на весь период работы
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={32} className="text-primary" />
                </div>
                <CardTitle className="font-heading text-xl">Выбор района</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="font-body text-base">
                  Работайте в удобном для вас районе города — мы найдём заказы рядом с домом
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Smartphone" size={32} className="text-primary" />
                </div>
                <CardTitle className="font-heading text-xl">Удобное приложение</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="font-body text-base">
                  Интуитивное мобильное приложение с навигацией и всей необходимой информацией
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-primary" />
                </div>
                <CardTitle className="font-heading text-xl">Команда поддержки</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="font-body text-base">
                  Круглосуточная поддержка курьеров — решаем любые вопросы быстро и эффективно
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Job Vacancies Section */}
      <section id="jobs" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-4 text-foreground">
              Актуальные вакансии
            </h2>
            <p className="font-body text-xl text-muted-foreground">
              Выберите подходящую вакансию в вашем городе
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Job Cards */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="font-heading text-lg">Курьер на скутере</CardTitle>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">Активно</Badge>
                </div>
                <CardDescription className="font-body">Москва • Полный день</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Icon name="Banknote" size={16} className="text-primary" />
                    <span className="font-body text-sm">60 000 - 80 000 ₽</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={16} className="text-primary" />
                    <span className="font-body text-sm">Гибкий график</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="MapPin" size={16} className="text-primary" />
                    <span className="font-body text-sm">Центральный район</span>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="font-heading text-lg">Курьер на велосипеде</CardTitle>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">Активно</Badge>
                </div>
                <CardDescription className="font-body">Санкт-Петербург • Частичная занятость</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Icon name="Banknote" size={16} className="text-primary" />
                    <span className="font-body text-sm">40 000 - 60 000 ₽</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={16} className="text-primary" />
                    <span className="font-body text-sm">4-8 часов в день</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="MapPin" size={16} className="text-primary" />
                    <span className="font-body text-sm">Невский район</span>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="font-heading text-lg">Курьер на автомобиле</CardTitle>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">Срочно</Badge>
                </div>
                <CardDescription className="font-body">Екатеринбург • Полный день</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Icon name="Banknote" size={16} className="text-primary" />
                    <span className="font-body text-sm">70 000 - 90 000 ₽</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={16} className="text-primary" />
                    <span className="font-body text-sm">8-12 часов в день</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="MapPin" size={16} className="text-primary" />
                    <span className="font-body text-sm">Весь город</span>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Посмотреть все вакансии
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-4 text-foreground">
              Часто задаваемые вопросы
            </h2>
            <p className="font-body text-xl text-muted-foreground">
              Ответы на популярные вопросы о работе курьером
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="font-heading text-left">
                  Какие документы нужны для работы курьером?
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground">
                  Для работы курьером необходимы: паспорт РФ, водительские права (для скутера/автомобиля), 
                  справка об отсутствии судимости, медицинская справка. Все документы можно загрузить через наше приложение.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="font-heading text-left">
                  Как происходят выплаты?
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground">
                  Выплаты производятся ежедневно на банковскую карту или электронный кошелек. 
                  Минимальная сумма для вывода — 500 рублей. Комиссия за перевод не взимается.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="font-heading text-left">
                  Можно ли работать без опыта?
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground">
                  Да, опыт работы курьером не требуется. Мы проводим обучение для всех новых сотрудников, 
                  объясняем работу с приложением и особенности доставки в вашем городе.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="font-heading text-left">
                  Предоставляете ли вы транспорт?
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground">
                  В некоторых городах мы предлагаем аренду скутеров и велосипедов на выгодных условиях. 
                  Также можете использовать собственный транспорт — мы предоставим страховку и компенсацию за ГСМ.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="font-heading text-left">
                  Какой график работы?
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground">
                  График работы полностью гибкий — вы сами выбираете дни и часы работы. 
                  Можете работать полный день, несколько часов в день или только в выходные. Никаких обязательств.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-4 text-foreground">
              Свяжитесь с нами
            </h2>
            <p className="font-body text-xl text-muted-foreground">
              Есть вопросы? Мы всегда готовы помочь
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="font-heading text-2xl font-semibold mb-6 text-foreground">
                Контактная информация
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-body font-medium text-foreground">Телефон поддержки</p>
                    <p className="font-body text-muted-foreground">8 (800) 555-0123</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-body font-medium text-foreground">Email</p>
                    <p className="font-body text-muted-foreground">support@courierjobs.ru</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-body font-medium text-foreground">Офис</p>
                    <p className="font-body text-muted-foreground">г. Москва, ул. Тверская, 15</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-body font-medium text-foreground">Время работы</p>
                    <p className="font-body text-muted-foreground">Круглосуточно</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <h3 className="font-heading text-2xl font-semibold mb-6 text-foreground">
                Напишите нам
              </h3>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="contact-name">Имя</Label>
                  <Input id="contact-name" placeholder="Ваше имя" />
                </div>
                <div>
                  <Label htmlFor="contact-email">Email</Label>
                  <Input id="contact-email" type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <Label htmlFor="contact-phone">Телефон</Label>
                  <Input id="contact-phone" placeholder="+7 (999) 123-45-67" />
                </div>
                <div>
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea id="message" placeholder="Ваше сообщение..." rows={4} />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Отправить сообщение
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-heading text-xl font-semibold mb-4">CourierJobs</h3>
              <p className="font-body text-white/80">
                Лучшие вакансии для курьеров в сфере доставки еды. 
                Высокий доход, гибкий график, поддержка 24/7.
              </p>
            </div>
            
            <div>
              <h3 className="font-heading text-lg font-semibold mb-4">Разделы</h3>
              <ul className="space-y-2 font-body text-white/80">
                <li><a href="#home" className="hover:text-white transition-colors">Главная</a></li>
                <li><a href="#jobs" className="hover:text-white transition-colors">Вакансии</a></li>
                <li><a href="#couriers" className="hover:text-white transition-colors">Курьерам</a></li>
                <li><a href="#partners" className="hover:text-white transition-colors">Партнёрам</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-heading text-lg font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 font-body text-white/80">
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#contacts" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Правила</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-heading text-lg font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 font-body text-white/80">
                <p>8 (800) 555-0123</p>
                <p>support@courierjobs.ru</p>
                <div className="flex gap-4 mt-4">
                  <Button variant="ghost" size="sm" className="text-white/80 hover:text-white p-2">
                    <Icon name="MessageCircle" size={20} />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-white/80 hover:text-white p-2">
                    <Icon name="Phone" size={20} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="font-body text-white/60">
              © 2024 CourierJobs. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;