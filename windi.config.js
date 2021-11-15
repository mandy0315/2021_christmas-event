import colors from 'windicss/colors'
import plugin from 'windicss/plugin'
// 常用配置
export default {
  darkMode: 'class', // false,'class','media'
  attributify: true,
  theme: {
    colors: {
      ...colors,
      // 新增顏色
      'outside-bg': '#eaf9fd',
      'light-bg': '#96d5e6',
      'dark-bg': '#05537d',
      'light-icon': '#0098ba',
    },
    dropShadow: {
      blue75: '-1px 10px 0 rgba(131,197,208,0.75)',
      blue25: '-1px 10px 0 rgba(131,197,208,0.25)',
    },
    extend: {
      backgroundImage: () => ({
        'tree-img': 'url("./src/assets/images/tree-bg.png")',
        'title-light-img': 'url("./src/assets/images/light-bg.png")',
        'santa-svg': 'url("./src/assets/icons/santa.svg")',
      }),
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'snow-an': 'snow linear forwards',
      },
      keyframes: {
        snow: {
          to: { top: '100%' },
        },
      },
    },
  },
  shortcuts: {
    'card-container': 'max-w-[1200px] w-full mx-auto',
    'btn-green': 'text-white bg-green-500 hover:bg-green-700',
  },
  plugins: [
    // Other plugins
    require('@windicss/plugin-animations')({
      settings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 1000,
      },
    }),
    plugin(({ addUtilities }) => {
      // addUtilities 新增屬性
      addUtilities({
        '.button-none': {
          borderStyle: 'none',
          outline: 'none !important',
        },
      })
    }),
  ],
}
