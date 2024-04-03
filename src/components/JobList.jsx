import { useSelector } from 'react-redux';
import data from '../mock/data.json';
import { JobPosition } from './JobPosition';

const JobList = () => {
  const state = useSelector(state => state.filterTagTodos);

  return (
    <div className='job-list'>
      {data.filter(item => {
        const {role, level, languages, tools} = item;
        const badges = [].concat(role, level, ...languages, ...tools);
        console.log(badges.filter(badge => state.indexOf(badge) !== -1));
        return state.length === badges.filter(badge => state.indexOf(badge) !== -1).length;
      }).map(item => (
        <JobPosition key={item.id} {...item} />
      ))}
    </div>
  )
}

export {JobList};