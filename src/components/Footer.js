import React from "react";

const Footer = () => {
  return (
    <footer className="bg-darkblue px-5 py-6 text-center text-white md:px-8">
      <p className="font-medium">Hari Charhan · Data Analyst</p>
      <p className="mt-1 text-sm text-white/75">© {new Date().getFullYear()} · Built with React</p>
    </footer>
  );
};

export default Footer;
