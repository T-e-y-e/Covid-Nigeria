import { useEffect } from 'react';
import { getData } from '../features/covidDataSlice'; 
import { useDispatch, useSelector } from 'react-redux';

const GeneralData = () => {

  const { covidData, loading} = useSelector((state) => state.data)  

  const dispatch = useDispatch()
  

  useEffect(() => {
     dispatch(getData())
  }, [dispatch])

  const data = covidData.data
  const states = covidData.data.states

  if(loading) {
    return (
      <h1>loading...</h1>
    )
  }

  return (
    <div className="App">
      <div className='flex justify-between py-3 px-20 mb-10'>
        <div className='flex flex-col text-center gap-2'>
            <span >Total samples tested</span>
            <span>{data.totalSamplesTested}</span>
        </div>
        <div className='flex flex-col text-center gap-2'>
            <span>Total confirmed cases</span>
            <span>{data.totalConfirmedCases}</span>
        </div>
        <div className='flex flex-col text-center gap-2'>
            <span>Total active cases</span>
            <span>{data.totalActiveCases}</span>
        </div>
        <div className='flex flex-col text-center gap-2'>
            <span>Total discharged</span>
            <span>{data.discharged}</span>
        </div>
        <div className='flex flex-col text-center gap-2'>
            <span>Total death</span>
            <span>{data.death}</span>
        </div>
      </div>

      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3  xl:grid-cols-4  justify-center px-20'>
      {states.map((state) => {
        return (
            <div key={state._id}>
                <div className="coin-card block p-6 max-w-sm rounded-lg shadow-md">
                    <h2>{state.state}</h2>
                    <div>
                        <span>Confirmed cases</span>
                        <span>{state.confirmedCases}</span>
                    </div>
                    <div>
                        <span>Death</span>
                        <span>{state.death}</span>
                    </div>
                </div>
            </div>
        )
      })}
      </div>
    </div>
  );
}

export default GeneralData