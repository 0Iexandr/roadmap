import Phase from '../../components/Phase/Phase';
import phases from '../../data/phases';
import HorizontalScroll from 'react-scroll-horizontal';
import './Roadmap.css';

function Roadmap() {
  return (
    <div className='roadmap-container'>
        <h1 className='title'>Roadmap</h1>
        <h2 className='subtitle'>Roadmap</h2>
        <HorizontalScroll>{[]}
          <div className='scroll-container'>
            {phases.map(({id, text}) => {
              return <Phase id={id} text={text} key={id} />
            })}
          </div>
        </HorizontalScroll>
    </div>
  );
}

export default Roadmap;