
import Cube from '@/components/cube';
import Finder from '@/components/finder';
import Sorteo from '@/components/winers';
import Image from "next/image"

export default function Home() {
  return (
    <div className='flex justify-center items-center'>
      <p style={{position: 'fixed', writingMode: 'vertical-rl', textOrientation: 'mixed', left: '20px', top: '20px'}}>Celebrating all our beautiful bodies</p>

      <div className='castor container-find-email'>
        <h2>Art by Hanna</h2>
      </div>
      <div className='cubo'>
        <Cube />
      </div>


    </div>



  )
}
