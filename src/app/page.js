
import Cube from '@/components/cube';
import Finder from '@/components/finder';
import Sorteo from '@/components/winers';
import Image from "next/image"

export default function Home() {
  return (
    <div className='flex justify-center items-center'>
      <div className='castor container-find-email'>
        <h2>Art by Hana</h2>
      </div>
      <div className='cubo'>
        <Cube />
      </div>

    </div>



  )
}
