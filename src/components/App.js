import Header from './Header';
import Card from './Card';
import { useDataFetch } from '../hooks/useDataFetch';

function App() {
  //init default value (id, category, data)
  const [id, setId, category, setCategory, data, setData] = useDataFetch(
    1,
    'people',
    ''
  );

  return (
    <div>
      <Header setCategory={setCategory} setId={setId} setData={setData} id={id} />
      <Card data={data} setId={setId} id={id} category={category}></Card>
    </div>
  );
}

export default App;
