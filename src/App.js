import { FilterPanel } from 'components/FilterPanel';
import { JobList } from 'components/JobList';
import { TheHeader } from 'components/TheHeader';
import { useSelector } from 'react-redux';

function App() {
  const state = useSelector(state => state.filterTagTodos);

  return (
    <>
      <TheHeader />
      <div className='container'>
        {state.length ? <FilterPanel state={state} /> : null}
        <JobList />
      </div>
    </>
  );
}

export default App;
