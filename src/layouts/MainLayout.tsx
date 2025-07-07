import Header from "../components/Header";
import Footer from "../components/Footer";

type MainLayoutProps = {
  children:  "lucide-react";

};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
    
  );
}


