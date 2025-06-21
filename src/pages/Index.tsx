
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import Dashboard from '@/components/Dashboard';
import SendPayment from '@/components/SendPayment';
import Analytics from '@/components/Analytics';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <Dashboard />
      <SendPayment />
      <Analytics />
      <Footer />
    </div>
  );
};

export default Index;
