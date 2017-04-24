import {Component} from 'react'
import throttle from 'raf-throttle'
import {Motion, spring} from 'react-motion'

const SvgLogo = () => (
  <svg width='100%' viewBox='0 0 512 256'>
    <g fillRule='evenodd' style={{fill: 'currentcolor'}}>
      <path d='M456 1v14.7h5.3c2.6 0 4.8.8 6.7 2.3 1.8 1.6 3.3 3.7 4.4 6.4 1.2 2.7 2 5.7 2.5 9 .4 3.6.7 7 .7 10.8v39c0 7.6.8 14 2.4 19.6 1.7 5.4 3.5 10 5.6 13.5 2 3.6 4.2 6.4 6.2 8.2 2 1.8 3.4 3 4.3 3.6-.8 1.2-2.2 2.4-4.2 4.3-2 1.8-4 4.5-6.2 8-2 3.7-4 8.2-5.5 13.7-1.5 5.4-2.3 12-2.3 19.5v38.8c0 3.7-.3 7.3-.8 10.8-.6 3.6-1.4 6.6-2.6 9.2-1 2.6-2.6 4.7-4.4 6.2-2 1.6-4 2.4-6.7 2.4H456v14.7h13c7.5 0 13.2-3.2 17.2-9.4s6-14.6 6-25v-41c0-5.7.3-11 1-16.5.4-5.3 1.3-10 2.8-14.2 1.4-4.2 3.3-7.5 5.7-10 2.5-2.5 5.6-3.7 9.5-3.7V121c-4 0-7-1.3-9.5-3.8-2.4-2.5-4.3-6-5.7-10-1.5-4.2-2.4-9-3-14.3-.5-5.4-.7-11-.7-16.4v-41c0-10.5-2-19-6-25.2C482.2 4 476.4 1 469 1h-13zM56 255.3v-14.7h-5.3c-2.6 0-4.8-.8-6.7-2.3-1.8-1.6-3.3-3.7-4.4-6.3-1.2-2.6-2-5.6-2.5-9-.5-3.6-.7-7.2-.7-11v-38.7c0-7.5-.8-14-2.4-19.5-1.7-5.4-3.5-10-5.6-13.6-2-3.6-4.2-6.3-6.2-8-2-2-3.5-3.2-4.3-3.7.7-1 2.2-2.3 4.2-4.2 2-1.8 4-4.5 6.2-8 2-3.7 4-8.3 5.5-13.7 1.5-5.5 2.3-12 2.3-19.5V44c0-3.7.2-7.2.8-10.6.6-3.4 1.4-6.5 2.6-9.2 1-2.6 2.6-4.8 4.4-6.3 2-1.7 4-2.5 6.7-2.5H56V.8H42.8c-7.3 0-13 3.2-17 9.4-4 6.3-6 14.7-6 25.2v41.3c0 5.5-.4 11-1 16.3-.4 5.4-1.4 10-2.8 14.3-1.4 4-3.3 7.5-5.7 10-2.5 2.5-5.7 3.7-9.5 3.7v14.7c3.8 0 7 1.2 9.5 3.7 2.4 2.5 4.3 5.8 5.7 10 1.4 4 2.4 9 3 14.2.4 5.4.7 10.8.7 16.4v40.7c0 10.5 2 19 6 25.2 4 6.2 9.8 9.3 17 9.3H56z' />
      <g style={{stroke: 'currentcolor'}}>
        <path d='M255.7 109.4c1.3 0 6.5.3 8.6 1 2.7 1 4.8 3 4.8 3 1 .6 2 2 2.3 3 0 0 6 19.3 11.7 36.2 5.7 17 15 30.2 15 30.2 1.4 2.3 5 4.3 7.6 4.6 0 0 22.7 2.4 50 2 27.6-.6 49.8-4 49.8-4 2.8-.2 6-2.5 7-5 0 0 6.8-13 10.5-31.7 3.6-18.6 4.3-42.6 4.3-42.6V80S395 78.4 363 78.4c-32 0-69 1.2-69 1.2l-2.4.2c-1.6 0-4 1-5.3 2L282 85c-2.2 1.8-6.7 6.5-6.7 6.5s-5-3-8.4-3.8c-2.8-.6-9.7-.6-11.3-.6-1.6 0-8.5 0-11.2.7-3.3.7-8.4 3.8-8.4 3.8s-4.4-4.7-6.7-6.5c-2.4-2-4.2-3.2-4.2-3.2-1.2-1-3.6-2-5.3-2l-2.3-.2s-37-1.2-69-1.2S84 80 84 80v26s.8 24 4.5 42.7c3.7 18.6 10.4 31.7 10.4 31.7 1 2.5 4.2 4.8 7 5 0 0 22.2 3.4 49.6 4 27.5.4 50-2 50-2 3-.3 6.4-2.3 8-4.6 0 0 9-13.2 14.7-30.2 5.7-17 11.8-36 11.8-36 .5-1.2 1.4-2.6 2.3-3.3 0 0 2-2 4.7-3 2-.6 7.3-1 8.7-1zm38.5-10c4.4-2 10.8-2.7 25.5-3.7s21-1 30.2-1.2c8.8 0 30.3.4 42 1.2 15 1 17.6 1.5 17.6 1.5 1 .2 2 1.2 2 2.3V118s-1 15-3.4 27c-2.6 12.4-6 20.4-6 20.4-1 2-3.3 4.3-5.4 4.8 0 0-4.6 2-14.3 2-4.5 0-26 .4-39.7 0-16.3-.7-24.5-2.2-24.5-2.2s-7-1.3-14-10.5c-7.3-9.3-9.6-19.8-9.6-19.8s-6.2-22.4-6.5-28.4c-.3-6 1.5-10 6-12zm-77 0c-4.4-2-10.8-2.7-25.5-3.7s-21-1-30.2-1.2c-9 0-30.4.4-42.3 1.2-14.8 1-17.5 1.5-17.5 1.5-1 .2-2 1.2-2 2.3V114c0 1 0 3 .2 4 0 0 .7 15 3.2 27 2.6 12.4 6 20.4 6 20.4 1 2 3.3 4.3 5.4 4.8 0 0 4.6 2 14.3 2 4.3 0 26 .4 39.6 0 16.3-.7 24.5-2.2 24.5-2.2s7-1.3 14.2-10.5c7-9.3 9.5-19.8 9.5-19.8s6-22.4 6.5-28.4c.3-6-1.6-10-6-12zM424.8 75s-8.8-.5-15.4-.6l-13.6-.3-.7-6.3c-.2-2.3-1-7-1-7s11.7 4 16.5 6.3c5.3 2.5 14.3 8 14.3 8zM86 75s8.8-.5 15.4-.6L115 74l.8-6.3 1-7s-11.6 4-16.5 6.3C95 69.5 86 75 86 75z' />
      </g>
    </g>
  </svg>
)

// https://math.stackexchange.com/questions/869150/a-function-fx-that-increases-from-0-to-1-when-x-increases-from-0-to-infinity
const limitTo01Range = (x, a) => x / (Math.abs(x) + a)

export default class Logo extends Component {
  constructor (props) {
    super(props)

    this.state = {
      tiltx: 0,
      tilty: 0,
      degree: 0
    }

    this.handleMouseMove = throttle(this.handleMouseMove.bind(this))
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.handleDeviceOrientation = throttle(
      this.handleDeviceOrientation.bind(this)
    )
    this.tilt = this.tilt.bind(this)
  }

  componentDidMount () {
    document.addEventListener('mousemove', this.handleMouseMove)
    document.addEventListener('mouseleave', this.handleMouseLeave)
    window.addEventListener('deviceorientation', this.handleDeviceOrientation)
  }

  componentWillUnmount () {
    document.removeEventListener('mousemove', this.handleMouseMove)
    document.removeEventListener('mouseleave', this.handleMouseLeave)
    window.removeEventListener(
      'deviceorientation',
      this.handleDeviceOrientation
    )
  }

  handleMouseMove (event) {
    const rect = this.$wrapper.getBoundingClientRect()
    const cx = Math.ceil(rect.width / 2.0)
    const cy = Math.ceil(rect.height / 2.0)
    const dx = limitTo01Range(event.pageX - cx - rect.left, 128) * 128
    const dy = limitTo01Range(event.pageY - cy - rect.top, 64) * 64

    const tiltx = -(dy / cy)
    const tilty = dx / cx
    this.tilt(tiltx, tilty)
  }

  handleMouseLeave () {
    this.tilt(0, 0)
  }

  handleDeviceOrientation (event) {
    const tiltx = limitTo01Range(event.beta, 10) * -1
    const tilty = limitTo01Range(event.gamma, 10)
    this.tilt(tiltx, tilty)
  }

  tilt (tiltx, tilty) {
    const radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2))
    const degree = radius * 20
    this.setState({tiltx, tilty, degree})
  }

  render () {
    const {tiltx, tilty, degree} = this.state
    const springParams = {stiffness: 100, damping: 8}

    return (
      <Motion
        defaultStyle={{
          backgroundTransformScale: 1,
          degree: 0,
          tiltx: 0,
          tilty: 0,
          foregroundTranslateZ: 0
        }}
        style={{
          backgroundTransformScale: spring(0.999),
          degree: spring(degree, springParams),
          tiltx: spring(tiltx, springParams),
          tilty: spring(tilty, springParams),
          foregroundTranslateZ: spring(10)
        }}
      >
        {style => (
          <div
            className='wrapper'
            ref={wrapper => {
              this.$wrapper = wrapper
            }}
            role='presentation'
            style={{
              transform: `rotate3d(${style.tiltx}, ${style.tilty}, 0, ${style.degree}deg)`
            }}
          >
            <style jsx>{`
              .wrapper {
                height: 100%;
                transform-style: preserve-3d;
                width: 100%;
              }

              .background, .foreground {
                height: 100%;
                position: absolute;
                width: 100%;
              }

              .foreground {
                color: #fff;
              }
            `}</style>
            <div
              className='background'
              style={{
                transform: `scale(${style.backgroundTransformScale})`
              }}
            >
              <SvgLogo />
            </div>
            <div
              className='foreground'
              style={{
                transform: `translateZ(${style.foregroundTranslateZ}px)`
              }}
            >
              <SvgLogo />
            </div>
          </div>
        )}
      </Motion>
    )
  }
}
