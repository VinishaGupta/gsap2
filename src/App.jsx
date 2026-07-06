import { ScrollTrigger,SplitText } from "gsap/all";
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger,SplitText);

const App=()=>{
  return (
    <div className="text-3xl text-blue-400">abc</div>
  )
}

export default App