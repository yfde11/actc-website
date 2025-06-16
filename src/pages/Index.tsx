
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, Facebook, Calendar, Users, Shield, Globe } from 'lucide-react';

const Index = () => {
  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'activities', 'membership', 'contact'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // 當區塊的頂部進入視窗的上半部分時，將其設為當前區塊
          if (rect.top <= window.innerHeight / 2) {
            current = section;
          }
        }
      }
      
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-2xl border-4 border-white/30 bg-white">
                <img 
                  src="/ACTC_LOGO.png" 
                  alt="協會Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              國際資訊安全人才培育與推廣協會
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 font-light">
              推動資安教育，連結產官學界
            </p>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8 py-4">
            {[
              { id: 'about', label: '關於我們', icon: Shield },
              { id: 'activities', label: '最新活動', icon: Calendar },
              { id: 'membership', label: '會員申請', icon: Users },
              { id: 'contact', label: '聯絡我們', icon: Mail }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === id
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'text-orange-600 hover:bg-orange-50'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12 space-y-16">
        {/* About Us Section */}
        <section id="about" className="scroll-mt-20">
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-8">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-orange-100 rounded-full">
                  <Shield className="w-12 h-12 text-orange-600" />
                </div>
              </div>
              <CardTitle className="text-3xl font-bold text-gray-800 mb-4">
                關於我們
              </CardTitle>
            </CardHeader>
            <CardContent className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                本協會為非營利組織，致力於推動資訊安全教育與人才培育，秉持「取之社會，用之社會」的精神，促進產業交流與社會回饋，打造永續的資安人才生態。
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Latest Activities Section */}
        <section id="activities" className="scroll-mt-20">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-red-100 rounded-full">
                <Calendar className="w-12 h-12 text-red-600" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">最新活動</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                date: '2025/03/04',
                title: '人工智慧驅動的資安創新講座',
                type: '講座',
                color: 'bg-orange-500'
              },
              {
                date: '2023/09/26',
                title: '從西遊記學資安的危機管理',
                type: '工作坊',
                color: 'bg-red-500'
              },
              {
                date: '即將推出',
                title: '更多活動即將推出，敬請期待！',
                type: '預告',
                color: 'bg-orange-400'
              }
            ].map((activity, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={`${activity.color} text-white`}>
                      {activity.type}
                    </Badge>
                    <span className="text-sm text-gray-500 font-medium">
                      {activity.date}
                    </span>
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-800">
                    {activity.title}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Membership Section */}
        <section id="membership" className="scroll-mt-20">
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-8">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-red-100 rounded-full">
                  <Users className="w-12 h-12 text-red-600" />
                </div>
              </div>
              <CardTitle className="text-3xl font-bold text-gray-800 mb-4">
                會員申請
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                歡迎加入我們：
              </CardDescription>
            </CardHeader>
            <CardContent className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    type: '學生會員',
                    price: '500元 / 年',
                    description: '在校學生專屬方案',
                    color: 'border-red-200 bg-red-50'
                  },
                  {
                    type: '一般會員',
                    price: '1000元 / 年',
                    description: '個人會員標準方案',
                    color: 'border-orange-200 bg-orange-50'
                  },
                  {
                    type: '企業會員',
                    price: '10,000元 / 年',
                    description: '含技術推廣、人才媒合、共辦活動',
                    color: 'border-red-300 bg-red-50'
                  }
                ].map((plan, index) => (
                  <Card key={index} className={`${plan.color} border-2 hover:shadow-lg transition-all duration-300`}>
                    <CardHeader className="text-center">
                      <CardTitle className="text-xl font-bold text-gray-800">
                        {plan.type}
                      </CardTitle>
                      <div className="text-3xl font-bold text-gray-900 mt-4">
                        {plan.price}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-center text-sm">
                        {plan.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <p className="text-gray-700 mb-4">
                  請來信索取申請表：
                </p>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg">
                  <Mail className="w-5 h-5 mr-2" />
                  info@cybersec.org.tw
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-20">
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-8">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-orange-100 rounded-full">
                  <Globe className="w-12 h-12 text-orange-600" />
                </div>
              </div>
              <CardTitle className="text-3xl font-bold text-gray-800 mb-4">
                聯絡我們
              </CardTitle>
            </CardHeader>
            <CardContent className="max-w-2xl mx-auto">
              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <Facebook className="w-6 h-6 text-orange-600" />
                  <div>
                    <span className="font-medium text-gray-800">Facebook 粉專：</span>
                    <a href="https://www.facebook.com/profile.php?id=61552498365246" className="text-orange-600 hover:text-orange-800 ml-2" target="_blank" rel="noopener noreferrer">
                      點此前往
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300">
            © 2024 國際資訊安全人才培育與推廣協會 版權所有
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
