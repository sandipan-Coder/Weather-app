import { useContext, useState } from 'react'
import { ApiContext } from '../Context/ApiContext';
import { useNavigate } from 'react-router-dom';

function Search() {

  const [place, setPlace] = useState();
  const { aqureInformation } = useContext(ApiContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await aqureInformation(place);
    navigate('/details');

  }

  return (
    <div className='w-full min-h-screen bg-gradient-to-r from-gray-500 from-20% via-sky-500 via-50% to-gray-500 to-90% gap-5'>

      <div className='w-50 h-20 p-5'>
        <img className='rounded-full w-20' src="/logo1.png" alt="" />
      </div>

      <div className=' p-4 gap-4 m-5 flex justify-center item-center'>
        <div className='w-150 h-80 bg-white/10 backdrop-blur-xl rounded-xl flex flex-col  justify-center item-center p-5 gap-6 border border-white'>
          <p className='text-white text-center text-3xl font-semibold'>Cloudy</p>
          <p className='text-white text-center text-md font-light'>Enter Your <span className='text-blue-700'>Place</span> name</p>
          <div className='gap-2 flex justify-center item-center'>
            <label className='text-white text-md font-medium ml-5' htmlFor="placeName">Enter Place :</label>
            <input 
              className='w-50 h-8 bg-gray-300 rounded-xl text-center ml-5 outline-blue-300'
              type="text" 
              value={place}
              placeholder='Enter place name'
              id='placeName'
              onChange={(e) => setPlace(e.target.value)}
            />
          </div>
          <div className='flex justify-center item-center p-3'>
            <button onClick={handleSubmit} className='w-70 h-10 bg-gradient-to-r from-blue-500 via-sky-400 to-pink-500 rounded-xl cursor-pointer text-gray-600 text-md font-medium border border-indigo-400 shadow-lg hover:shadow-indigo-400/80 transition-shadow duration-600 ease-in-out hover:scale-110'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
