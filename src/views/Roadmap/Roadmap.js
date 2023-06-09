import Phase from '../../components/Phase/Phase';
import phases from '../../data/phases';
import HorizontalScroll from 'react-scroll-horizontal';
import './Roadmap.css';

function Roadmap() {
  return (
    <div className='roadmap-container'>
        <h1 className='title'>Roadmap</h1>
        <h2 className='subtitle'>Roadmap</h2>
        {(window.screen.width < 1440) ? 
          <div className='scroll-container scrollbar-hide'>
            <div className='wheel-container'>
              {phases.map(({id, text}) => {
                return <Phase id={id} text={text} key={id} />
              })}
            </div>
          </div> :
          <HorizontalScroll>{[]}
            <div className='wheel-container'>
              {phases.map(({id, text}) => {
                return <Phase id={id} text={text} key={id} />
              })}
            </div>
          </HorizontalScroll>
        }
    </div>
  );
}

export default Roadmap;