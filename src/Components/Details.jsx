import { useContext } from 'react'
import { ApiContext } from '../Context/ApiContext'
import { useNavigate } from 'react-router-dom';

function Details() {

  const { data } = useContext(ApiContext);
  const navigate = useNavigate();

  if (!data || !data.current || !data.location) {
    return <p className='text-white text-xl text-center p-10'>Loading weather data...</p>;
  }

  return (
    <div className='w-full min-h-screen bg-gradient-to-r from-gray-500 from-20% via-sky-500 via-50% to-gray-500 to-90% gap-5'>

      <div className='w-50 h-20 p-5'>
        <img className='rounded-full w-20' src="/logo1.png" alt="" />
      </div>

      <div className=' p-4 gap-4 m-5 flex justify-center item-center'>
        <div className='w-250 h-135 bg-white/20 backdrop-blur-xl rounded-xl flex flex-col gap-1 border border-white'>
          {/* This is for header part */}
          <div className='w-100 h-20 flex flex-col justify-center items-center bg-gray-400 gap-2 rounded-2xl p-2 m-3 ml-70'>
            <p className='text-white text-center text-3xl font-semibold'>Cloudy</p>
            <p className='text-white text-center text-md font-light'>{data?.location.name}, <span className='text-blue-700'>{data?.location.country}</span></p>
          </div>

          {/* This is for icon part */}
          <div className='w-full h-30 flex justify-center items-center'>
            <img className='w-30 h-25 rounded-2xl' src={data?.current.condition.icon} alt="icon" />
          </div>

          {/* This is for first row */}
          <div className='w-full h-25 flex justify-around'>
            <div className='w-75 h-20 flex items-center justify-center bg-gray-500 rounded-2xl gap-1.5'>
              <img className='w-8 h-8' src="/temp.png" alt="" />
              <p className='text-md font-medium text-indigo-200'>Tumprature: <span className='text-blue-400'>{data?.current.temp_c} °C</span></p>
            </div>
            <div className='w-75 h-20 flex items-center justify-center bg-gray-500 rounded-2xl gap-1.5'>
              <img className='w-8 h-8' src="/condition.png" alt="" />
              <p className='text-md font-medium text-indigo-200'>Condition: <span className='text-blue-400'>{data?.current.condition.text}</span></p>
            </div>
            <div className='w-75 h-20 flex items-center justify-center bg-gray-500 rounded-2xl gap-1.5'>
              <img className='w-8 h-8' src="/pressure.png" alt="" />
              <p className='text-md font-medium text-indigo-200'>Pressure: <span className='text-blue-400'>{data?.current.pressure_mb} mb</span></p>
            </div>
          </div>
          
          {/* This is for second row */}
          <div className='w-full h-25 flex justify-around'>
            <div className='w-75 h-20 flex items-center justify-center bg-gray-500 rounded-2xl gap-1.5'>
              <img className='w-8 h-8' src="/wind.png" alt="" />
              <p className='text-md font-medium text-indigo-200'>Wind Speed: <span className='text-lime-400'>{data?.current.wind_kph} km/h</span></p>
            </div>
            <div className='w-75 h-20 flex items-center justify-center bg-gray-500 rounded-2xl gap-1.5'>
              <img className='w-8 h-8' src="/direction2.png" alt="" />
              <p className='text-md font-medium text-indigo-200'>Wind Direction: <span className='text-lime-400'>{data?.current.wind_dir}</span></p>
            </div>
            <div className='w-75 h-20 flex items-center justify-center bg-gray-500 rounded-2xl gap-1.5'>
              <img className='w-8 h-8' src="/aqi.png" alt="" />
              <p className='text-md font-medium text-indigo-200'>AIQ (pm2.5): <span className='text-lime-400'>{data?.current.air_quality.pm2_5.toFixed(2)}</span></p>
            </div>
          </div>

          {/* This is for Back button */}
          <div className='w-full h-20 flex items-center justify-center'>
            <img onClick={() => navigate('/')} className='w-20 h-15 p-2 hover:scale-120 cursor-pointer shadow-xl rounded-full hover:shadow-blue-800 duration-400' src="/back.png" alt="Back button" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
