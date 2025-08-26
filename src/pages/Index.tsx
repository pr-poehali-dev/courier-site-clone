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
      <header className="bg-primary text-secondary py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="font-heading font-bold text-2xl">
              🍔 Яндекс Еда
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <span className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                8 (800) 700-06-00
              </span>
              <span>Бесплатно по России</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b-2 border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="font-heading font-bold text-xl text-secondary">
              Работа курьером
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#hero" className="font-body text-gray-700 hover:text-primary transition-colors font-medium">
                Главная
              </a>
              <a href="#about" className="font-body text-gray-700 hover:text-primary transition-colors font-medium">
                О работе
              </a>
              <a href="#requirements" className="font-body text-gray-700 hover:text-primary transition-colors font-medium">
                Требования
              </a>
              <a href="#faq" className="font-body text-gray-700 hover:text-primary transition-colors font-medium">
                Вопросы
              </a>
              <a href="#contacts" className="font-body text-gray-700 hover:text-primary transition-colors font-medium">
                Контакты
              </a>
            </div>
            <Button className="bg-primary text-secondary hover:bg-primary/90 font-bold px-6">
              Стать курьером
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="bg-gradient-to-r from-primary/10 via-primary/5 to-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6 text-secondary leading-tight">
                Яндекс Еда
                <span className="block text-primary">работа курьером</span>
              </h1>
              <p className="font-body text-xl mb-8 text-gray-700 leading-relaxed">
                Доход до <span className="font-bold text-primary">260 000 рублей в месяц</span>. 
                Стань курьером в сервисе Яндекс Еда или Лавка и получай ежедневные выплаты!
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-white" />
                  </div>
                  <span className="font-body text-lg">Ежедневные выплаты на карту</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-white" />
                  </div>
                  <span className="font-body text-lg">Гибкий график работы</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-white" />
                  </div>
                  <span className="font-body text-lg">Без опыта работы</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-white" />
                  </div>
                  <span className="font-body text-lg">Предоставляем форму и оборудование</span>
                </div>
              </div>

              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-secondary font-bold px-8 py-4 text-xl"
              >
                Подать заявку на работу
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-2xl border">
              <h3 className="font-heading text-2xl font-bold mb-6 text-secondary">
                Заявка на работу курьером
              </h3>
              <p className="font-body text-gray-600 mb-6">
                Заполните форму, и мы свяжемся с вами в течение 24 часов
              </p>
              
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Имя и фамилия</Label>
                  <Input 
                    id="name" 
                    placeholder="Введите ваше имя и фамилию"
                    className="h-12" 
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input 
                    id="phone" 
                    placeholder="+7 (999) 123-45-67"
                    className="h-12" 
                  />
                </div>
                <div>
                  <Label htmlFor="city">Город</Label>
                  <Select value={selectedCity} onValueChange={setSelectedCity}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Выберите ваш город" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="moscow">Москва</SelectItem>
                      <SelectItem value="spb">Санкт-Петербург</SelectItem>
                      <SelectItem value="ekb">Екатеринбург</SelectItem>
                      <SelectItem value="nsk">Новосибирск</SelectItem>
                      <SelectItem value="kzn">Казань</SelectItem>
                      <SelectItem value="nnn">Нижний Новгород</SelectItem>
                      <SelectItem value="chel">Челябинск</SelectItem>
                      <SelectItem value="omsk">Омск</SelectItem>
                      <SelectItem value="samara">Самара</SelectItem>
                      <SelectItem value="rostov">Ростов-на-Дону</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="transport">Транспорт</Label>
                  <Select>
                    <SelectTrigger className="h-12">
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
                <Button className="w-full bg-primary hover:bg-primary/90 text-secondary font-bold py-4 h-12 text-lg">
                  Отправить заявку
                </Button>
                
                <p className="text-sm text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-4 text-secondary">
              Почему выбирают работу в Яндекс Еде?
            </h2>
            <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
              Яндекс.Еда — это лидер рынка доставки еды в России. 
              Мы предлагаем стабильную работу с честными условиями и поддержкой.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="DollarSign" size={40} className="text-primary" />
                </div>
                <CardTitle className="font-heading text-2xl text-secondary">Высокий доход</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="font-body text-base text-gray-600 leading-relaxed">
                  Зарабатывайте до <span className="font-bold text-primary">260 000 ₽</span> в месяц. 
                  Ваш доход зависит от количества выполненных заказов и времени работы.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={40} className="text-primary" />
                </div>
                <CardTitle className="font-heading text-2xl text-secondary">Ежедневные выплаты</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="font-body text-base text-gray-600 leading-relaxed">
                  Получайте заработанные деньги каждый день на вашу банковскую карту. 
                  Никаких задержек и комиссий.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Calendar" size={40} className="text-primary" />
                </div>
                <CardTitle className="font-heading text-2xl text-secondary">Гибкий график</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="font-body text-base text-gray-600 leading-relaxed">
                  Работайте когда хотите: утром, днём, вечером или ночью. 
                  Вы сами планируете своё время.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={40} className="text-primary" />
                </div>
                <CardTitle className="font-heading text-2xl text-secondary">Без опыта</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="font-body text-base text-gray-600 leading-relaxed">
                  Опыт работы курьером не требуется. Мы обучим всему необходимому 
                  и поможем начать зарабатывать с первого дня.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={40} className="text-primary" />
                </div>
                <CardTitle className="font-heading text-2xl text-secondary">Страхование</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="font-body text-base text-gray-600 leading-relaxed">
                  Полная страховка от несчастных случаев на весь период работы. 
                  Ваша безопасность — наш приоритет.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Headphones" size={40} className="text-primary" />
                </div>
                <CardTitle className="font-heading text-2xl text-secondary">Поддержка 24/7</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="font-body text-base text-gray-600 leading-relaxed">
                  Наша служба поддержки работает круглосуточно. 
                  Поможем решить любые вопросы в рабочем процессе.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section id="requirements" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-4 text-secondary">
              Требования к курьерам
            </h2>
            <p className="font-body text-xl text-gray-600">
              Простые требования для начала работы курьером
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="User" size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold mb-2 text-secondary">
                      Возраст от 18 лет
                    </h3>
                    <p className="font-body text-gray-600">
                      Мы принимаем на работу совершеннолетних граждан РФ
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="FileText" size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold mb-2 text-secondary">
                      Документы
                    </h3>
                    <p className="font-body text-gray-600">
                      Паспорт РФ, справка об отсутствии судимости, медицинская книжка (при необходимости)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Smartphone" size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold mb-2 text-secondary">
                      Смартфон с интернетом
                    </h3>
                    <p className="font-body text-gray-600">
                      Android или iOS с доступом в интернет для работы с мобильным приложением
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Car" size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold mb-2 text-secondary">
                      Транспорт
                    </h3>
                    <p className="font-body text-gray-600">
                      Велосипед, скутер, автомобиль или работа пешком. 
                      Водительские права для скутера/авто.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                <h3 className="font-heading text-xl font-semibold mb-3 text-secondary">
                  Дополнительные бонусы:
                </h3>
                <ul className="space-y-2 font-body text-gray-600">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    Предоставляем термосумку и форму
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    Компенсация ГСМ для автомобилистов
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    Премии за высокие рейтинги
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8">
              <h3 className="font-heading text-2xl font-bold mb-6 text-secondary">
                Начните зарабатывать уже сегодня!
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary text-secondary rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <span className="font-body">Подайте заявку на сайте</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary text-secondary rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <span className="font-body">Пройдите регистрацию в офисе</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary text-secondary rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <span className="font-body">Получите оборудование и начинайте работать</span>
                </div>
              </div>
              <Button 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-secondary font-bold py-4"
              >
                Подать заявку сейчас
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-4 text-secondary">
              Часто задаваемые вопросы
            </h2>
            <p className="font-body text-xl text-gray-600">
              Ответы на самые популярные вопросы о работе курьером
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg border-0 shadow-sm">
                <AccordionTrigger className="px-6 py-4 font-heading text-left text-lg font-semibold hover:no-underline">
                  Сколько можно заработать курьером в Яндекс Еде?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 font-body text-gray-600">
                  Доход курьера зависит от количества выполненных заказов, времени работы и города. 
                  В среднем курьеры зарабатывают от 80 000 до 260 000 рублей в месяц. 
                  Наиболее активные курьеры в крупных городах могут зарабатывать и больше.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg border-0 shadow-sm">
                <AccordionTrigger className="px-6 py-4 font-heading text-left text-lg font-semibold hover:no-underline">
                  Как происходят выплаты?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 font-body text-gray-600">
                  Выплаты производятся ежедневно автоматически на привязанную банковскую карту. 
                  Деньги поступают в течение нескольких часов после окончания рабочего дня. 
                  Комиссия за перевод не взимается.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg border-0 shadow-sm">
                <AccordionTrigger className="px-6 py-4 font-heading text-left text-lg font-semibold hover:no-underline">
                  Какой график работы у курьеров?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 font-body text-gray-600">
                  График работы полностью гибкий. Вы можете работать в любое время: 
                  утром с 8:00, днём с 12:00, вечером с 18:00 или ночью с 22:00. 
                  Можете выбрать любое количество часов - от 2 до 12 часов в день.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg border-0 shadow-sm">
                <AccordionTrigger className="px-6 py-4 font-heading text-left text-lg font-semibold hover:no-underline">
                  Нужен ли опыт работы курьером?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 font-body text-gray-600">
                  Нет, опыт работы курьером не требуется. Мы проведём полное обучение: 
                  расскажем как пользоваться приложением, объясним особенности работы, 
                  покажем лучшие маршруты в вашем городе.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-lg border-0 shadow-sm">
                <AccordionTrigger className="px-6 py-4 font-heading text-left text-lg font-semibold hover:no-underline">
                  Предоставляете ли вы транспорт?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 font-body text-gray-600">
                  В некоторых городах мы предлагаем аренду скутеров на выгодных условиях. 
                  Также вы можете работать на собственном транспорте: велосипеде, скутере, 
                  автомобиле или пешком. Для автомобилистов предусмотрена компенсация ГСМ.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-lg border-0 shadow-sm">
                <AccordionTrigger className="px-6 py-4 font-heading text-left text-lg font-semibold hover:no-underline">
                  Что нужно для начала работы?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 font-body text-gray-600">
                  Для начала работы нужно: быть гражданином РФ от 18 лет, иметь смартфон с интернетом, 
                  предоставить необходимые документы (паспорт, справку об отсутствии судимости), 
                  пройти регистрацию в офисе и получить оборудование.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold mb-6 text-secondary">
            Готовы начать зарабатывать?
          </h2>
          <p className="font-body text-xl mb-8 text-secondary/90 max-w-2xl mx-auto">
            Присоединяйтесь к команде Яндекс.Еда уже сегодня и начните получать стабильный доход
          </p>
          <Button 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-white font-bold px-12 py-4 text-xl"
          >
            Стать курьером Яндекс.Еда
            <Icon name="ArrowRight" size={24} className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-4 text-secondary">
              Контакты для связи
            </h2>
            <p className="font-body text-xl text-gray-600">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-8 bg-gray-50 border-0">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={32} className="text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2 text-secondary">
                Телефон
              </h3>
              <p className="font-body text-lg text-primary font-bold mb-2">
                8 (800) 700-06-00
              </p>
              <p className="font-body text-sm text-gray-600">
                Бесплатно по России
              </p>
            </Card>

            <Card className="text-center p-8 bg-gray-50 border-0">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={32} className="text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2 text-secondary">
                Email
              </h3>
              <p className="font-body text-lg text-primary font-bold mb-2">
                work@yandex-eda.ru
              </p>
              <p className="font-body text-sm text-gray-600">
                Ответим в течение часа
              </p>
            </Card>

            <Card className="text-center p-8 bg-gray-50 border-0">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2 text-secondary">
                Режим работы
              </h3>
              <p className="font-body text-lg text-secondary font-bold mb-2">
                Круглосуточно
              </p>
              <p className="font-body text-sm text-gray-600">
                7 дней в неделю
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-heading text-xl font-semibold mb-4">
                🍔 Яндекс Еда
              </h3>
              <p className="font-body text-white/80 mb-4">
                Работа курьером в крупнейшем сервисе доставки еды в России. 
                Стабильный доход и честные условия.
              </p>
              <p className="font-body text-white/60 text-sm">
                © 2024 Все права защищены
              </p>
            </div>
            
            <div>
              <h3 className="font-heading text-lg font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 font-body text-white/80">
                <li><a href="#about" className="hover:text-primary transition-colors">О работе</a></li>
                <li><a href="#requirements" className="hover:text-primary transition-colors">Требования</a></li>
                <li><a href="#faq" className="hover:text-primary transition-colors">Вопросы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Условия работы</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-heading text-lg font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 font-body text-white/80">
                <li><a href="#contacts" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Техподдержка</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Обучение</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Помощь курьерам</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-heading text-lg font-semibold mb-4">Контакты</h3>
              <div className="space-y-3 font-body text-white/80">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>8 (800) 700-06-00</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>work@yandex-eda.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, Россия</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="font-body text-white/60">
              Сайт не является официальным сайтом Яндекс.Еда. 
              Информация носит ознакомительный характер.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;