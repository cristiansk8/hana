import React from 'react';

const Navbar = () => {
  return (
    React.createElement('nav', {className: 'banner'},
      React.createElement('div', { className: 'logo' },
        React.createElement('a', { href: '/' },
          React.createElement('img', { src: '/logo-hana.png', alt: 'Logo' })
        )
      ),
      React.createElement('div', { className: 'social-links' },
        React.createElement('a', { href: 'https://www.instagram.com/hanapaints_/', target: '_blank', rel: 'noopener noreferrer' },
          React.createElement('img', { src: '/fb.png', alt: 'instagram' })
        ),
        React.createElement('a', { href: 'https://www.instagram.com/hanapaints_/', target: '_blank', rel: 'noopener noreferrer' },
          React.createElement('img', { src: '/ig.png', alt: 'instagram' })
        ),
        React.createElement('a', { href: 'https://www.instagram.com/hanapaints_/', target: '_blank', rel: 'noopener noreferrer' },
        React.createElement('img', { src: '/wa.png', alt: 'whatsapp' })
      )
        // Agrega más enlaces a otras redes sociales si es necesario
      )
    )
  );
}

export default Navbar;

