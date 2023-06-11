/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  variants: {
    extend: {
      animation:['responsive', 'hover', 'group-hover'],
      fontSize:['responsive', 'hover', 'group-hover'],
      transform:['responsive', 'hover', 'group-hover'],
      outline: ['responsive', 'hover', 'group-hover', 'focus'],
      scale: ['responsive', 'hover', 'group-hover','active'],
      margin: ['responsive', 'hover', 'group-hover','active']
    },           
  },
  theme: {
    extend: {
      colors: {
        'principal':'#ea2e38',
        'fondo': 'rgba(0, 0, 0, 0.80)',
      },
      backgroundImage: {
        'login': "url('./src/assets/image/fondo.svg')",
      },
      width: {
        'login': '31.25rem',
        'setting': '20%',
        'info': '60%',
        'wedit': '50rem',
        'contraseña': '34.375rem',
        'weditmovil': '37.5rem',
        'weditsmall': '31.25rem',
        'perfil': '80%',
        'profile': '68.75rem',
        'profilemovil':'56.25rem',
      },
      height: {
        'login': '37.5rem',
        'image': '31.25rem'
      },
      boxShadow: {
        'login': '0px 0px 18px 5px rgba(67,66,66,0.45) inset;',
        'nav': '0px 5px 52px -9px rgb(234, 46, 56,1);',
      },
      gridTemplateColumns: {
        'cuerpo': '20% 60% 20%'
      }
    },
  },
  plugins: [],
}
