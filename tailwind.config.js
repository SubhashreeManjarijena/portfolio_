export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)', fg: 'var(--fg)', muted: 'var(--muted)',
        card: 'var(--card)', line: 'var(--line)', a1: 'var(--a1)', a2: 'var(--a2)',
      },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'], display: ['Sora', 'Inter', 'sans-serif'] },
    },
  },
}
