import './App.css';
import { doGetNoAuth } from './services/api';

function App() {
  const [{ data, loading, error }, refetch] = doGetNoAuth('api/hello');
  
  console.log(data)
  console.log(loading)
  console.log(error)

  if(error) return <div>ERROR</div>
  if(loading)return <div>loading</div>
  return (
    <div>
      
      <div> data :</div>
      <div>
        <button onClick={()=>refetch()}>click me</button>
      </div>
    </div>
  );
}

export default App;
