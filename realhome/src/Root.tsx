import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </QueryClientProvider>
  );
}

export default Root;
