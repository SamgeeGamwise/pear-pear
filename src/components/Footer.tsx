const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-0 w-full py-6 bg-transparent text-center text-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Navigation Links */}
        <nav className="flex space-x-4 text-sm">
          <a href="/" className="hover:text-white">Home</a>
          <a href="/about" className="hover:text-white">About</a>
          <a href="/contact" className="hover:text-white">Contact</a>
        </nav>

        {/* Legal Links */}
        <nav className="flex space-x-4 text-sm mt-4 md:mt-0">
          <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:text-white">Terms of Service</a>
        </nav>

        {/* Copyright */}
        <p className="text-xs mt-4 md:mt-0">&copy; {new Date().getFullYear()} Pear Pear. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
