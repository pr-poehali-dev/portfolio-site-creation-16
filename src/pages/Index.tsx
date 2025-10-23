import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

type ProjectCategory = 'all' | 'web' | 'branding' | 'photography';

interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Luxury Brand Identity',
    category: 'branding',
    image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80',
    description: 'Complete brand identity for premium fashion house'
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    description: 'Modern online shopping experience'
  },
  {
    id: 3,
    title: 'Editorial Photography',
    category: 'photography',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80',
    description: 'Fashion editorial for international magazine'
  },
  {
    id: 4,
    title: 'Corporate Website',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=800&q=80',
    description: 'Elegant corporate presence'
  },
  {
    id: 5,
    title: 'Product Photography',
    category: 'photography',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    description: 'Premium product photography series'
  },
  {
    id: 6,
    title: 'Restaurant Branding',
    category: 'branding',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    description: 'Fine dining restaurant brand development'
  }
];

function Index() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [activeSection, setActiveSection] = useState<'home' | 'portfolio' | 'contact'>('home');

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-deep-black/95 backdrop-blur-sm border-b border-gold/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-display font-bold bg-gradient-to-r from-gold to-yellow-600 bg-clip-text text-transparent">
              PORTFOLIO
            </h1>
            <div className="flex gap-8">
              <button 
                onClick={() => setActiveSection('home')}
                className={`font-body text-sm tracking-wider transition-colors ${
                  activeSection === 'home' ? 'text-gold' : 'text-gray-300 hover:text-gold'
                }`}
              >
                Главная
              </button>
              <button 
                onClick={() => setActiveSection('portfolio')}
                className={`font-body text-sm tracking-wider transition-colors ${
                  activeSection === 'portfolio' ? 'text-gold' : 'text-gray-300 hover:text-gold'
                }`}
              >
                Портфолио
              </button>
              <button 
                onClick={() => setActiveSection('contact')}
                className={`font-body text-sm tracking-wider transition-colors ${
                  activeSection === 'contact' ? 'text-gold' : 'text-gray-300 hover:text-gold'
                }`}
              >
                Контакты
              </button>
            </div>
          </div>
        </div>
      </nav>

      {activeSection === 'home' && (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-deep-black via-charcoal to-deep-black pt-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
          <div className="container mx-auto px-6 text-center relative z-10 animate-fade-in">
            <div className="inline-block mb-6 px-6 py-2 border border-gold/30 rounded-full">
              <span className="text-gold text-sm tracking-widest font-body">CREATIVE PORTFOLIO</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-display font-bold text-white mb-6 leading-tight">
              Создаю <br />
              <span className="bg-gradient-to-r from-gold via-yellow-500 to-gold bg-clip-text text-transparent">
                Визуальные истории
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 font-body leading-relaxed">
              Профессиональный дизайн и фотография для брендов, которые ценят качество и утонченность
            </p>
            <Button 
              onClick={() => setActiveSection('portfolio')}
              className="bg-gold hover:bg-gold/90 text-deep-black font-body tracking-wider px-8 py-6 text-lg rounded-none transition-all hover:scale-105"
            >
              Смотреть работы
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </section>
      )}

      {activeSection === 'portfolio' && (
        <section className="min-h-screen pt-32 pb-20 animate-fade-in">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">Мои работы</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
                Избранные проекты из различных областей дизайна и фотографии
              </p>
            </div>

            <div className="flex justify-center gap-4 mb-12 flex-wrap">
              {(['all', 'web', 'branding', 'photography'] as ProjectCategory[]).map((category) => (
                <Button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  variant={activeCategory === category ? 'default' : 'outline'}
                  className={`rounded-none tracking-wider transition-all ${
                    activeCategory === category 
                      ? 'bg-gold text-deep-black hover:bg-gold/90' 
                      : 'border-charcoal text-foreground hover:border-gold hover:text-gold'
                  }`}
                >
                  {category === 'all' && 'Все работы'}
                  {category === 'web' && 'Веб-дизайн'}
                  {category === 'branding' && 'Брендинг'}
                  {category === 'photography' && 'Фотография'}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card 
                  key={project.id} 
                  className="group overflow-hidden bg-card border-border rounded-none hover:shadow-2xl transition-all duration-500 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-black/80 via-deep-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <Button className="bg-gold hover:bg-gold/90 text-deep-black rounded-none w-full">
                        Подробнее
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-xs text-gold tracking-widest mb-2 font-body uppercase">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-display font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm font-body leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === 'contact' && (
        <section className="min-h-screen pt-32 pb-20 animate-fade-in">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">Свяжитесь со мной</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
                Готов обсудить ваш проект и воплотить идеи в жизнь
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <Card className="p-8 border-border rounded-none bg-card">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gold/10 flex items-center justify-center">
                    <Icon name="Mail" className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl mb-2">Email</h3>
                    <p className="text-muted-foreground font-body">hello@portfolio.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-border rounded-none bg-card">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gold/10 flex items-center justify-center">
                    <Icon name="Phone" className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl mb-2">Телефон</h3>
                    <p className="text-muted-foreground font-body">+7 (999) 123-45-67</p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-8 border-border rounded-none bg-card">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-body mb-2 tracking-wider">Имя</label>
                    <Input 
                      placeholder="Ваше имя" 
                      className="rounded-none border-charcoal focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-body mb-2 tracking-wider">Email</label>
                    <Input 
                      type="email" 
                      placeholder="your@email.com" 
                      className="rounded-none border-charcoal focus:border-gold"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-body mb-2 tracking-wider">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о вашем проекте..." 
                    rows={6}
                    className="rounded-none border-charcoal focus:border-gold resize-none"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-gold hover:bg-gold/90 text-deep-black font-body tracking-wider py-6 rounded-none transition-all hover:scale-[1.02]"
                >
                  Отправить сообщение
                  <Icon name="Send" className="ml-2" size={18} />
                </Button>
              </form>
            </Card>
          </div>
        </section>
      )}

      <footer className="bg-deep-black border-t border-gold/20 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 font-body text-sm">
              © 2024 Portfolio. Все права защищены.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;
