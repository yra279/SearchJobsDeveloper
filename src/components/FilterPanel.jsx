import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';
import { useDispatch } from 'react-redux';


const FilterPanel = ({ state }) => {
  const dispatch = useDispatch();
  
  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {
            state.map(tag => (
              <Badge variant="clearable" onClear={() => dispatch({type: "DELETE_TAG", tag: tag})}>{tag}</Badge>
            ))
          }
        </Stack>

        <button className='link' onClick={() => dispatch({type: "DELETED_STATE"})}>Clear</button>
      </div>
    </Card>
  )
}

export { FilterPanel };