import { ReactNode } from "react";
import Header from "@/components/Header/Navbar";

const BaseLayout = ({children}: {children : ReactNode }) => {
  return (
    <div className="relative flex flex-col h-screen">
            <Header />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
                  
            </footer>
          </div>
  );
}

export default BaseLayout;