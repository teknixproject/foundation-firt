import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: '#939393',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        description5: {
          DEFAULT: '#939393',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        descriptionCE: {
          DEFAULT: '#CECECE',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        descriptionB1: {
          DEFAULT: '#B1B1B1',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        primary1: '#1ECC97',
        typo1: '#0C0A09',
        description6D: '#6D6D6D',
        descriptionE6: '#E6E6E6',
        F8: '#F8F8F8',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      spacing: {
        main: '1440px',
        header: '88px',
      },
      screens: {
        main: '1440px',
      },
      fontSize: {
        paragraph1: ['18px', '170%'],
        paragraph2: ['14px', '170%'],
        paragraph3: ['20px', '160%'],
        heading1: ['48px', '140%'],
        heading1_1: ['42px', '140%'],
        heading2: ['32px', '140%'],
        heading2_2: ['36px', '140%'],
        heading3: ['24px', '170%'],
        menu: ['16px', '150%'],
        button: ['16px', '150%'],
        badge: ['16px', '170%'],
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      dropShadow: {
        custom: '0px 0px 32px rgba(30, 204, 151, 0.18)',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('tailwindcss-animated')],
} satisfies Config;
