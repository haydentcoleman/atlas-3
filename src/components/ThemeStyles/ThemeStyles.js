import appConfig from 'app.config';

const themes = {
  blue: {
    '--color-black': '#000',
    '--color-primary': '#93c841',
    '--color-secondary': '#f68622',
    '--color-tertiary': '#CCCCCC',
    '--color-white': '#FFFFFF',
  },
  red: {
    '--color-black': '#000',
    '--color-primary': '#93c841',
    '--color-secondary': '#f68622',
    '--color-tertiary': '#CCCCCC',
    '--color-white': '#FFFFFF',
  },
  green: {
    '--color-black': '#000',
    '--color-primary': '#93c841',
    '--color-secondary': '#f68622',
    '--color-tertiary': '#CCCCCC',
    '--color-white': '#FFFFFF',
  },
};

export default function ThemeStyles() {
  const themeColor = appConfig?.themeColor ?? 'green';

  return (
    <style jsx global>{`
      :root {
        --color-black: ${themes[themeColor]['--color-black']};
        --color-primary: ${themes[themeColor]['--color-primary']};
        --color-secondary: ${themes[themeColor]['--color-secondary']};
        --color-tertiary: ${themes[themeColor]['--color-tertiary']};
        --color-white: ${themes[themeColor]['--color-white']};
      }
    `}</style>
  );
}
