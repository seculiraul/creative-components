import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const Homepage = () => {
  return (
    <div className="">
      <Parallax pages={4}>
        <ParallaxLayer>
          <div className="flex justify-center">
            <h2 className="text-white">test</h2>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.2}>
          <div className="flex justify-center">
            <h2 className="text-white">test</h2>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default Homepage
