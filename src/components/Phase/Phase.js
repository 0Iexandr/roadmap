import './Phase.css';

function Phase({id, text}) {
  return (
    <div className='phase-container'>
    <div className='phase-background'>
      <h3 className='phase-title'>Phase {id}</h3>
      <ul className='phase-list'>
        {text.map((phase) => {
          return <li key={Math.random()}>{phase}</li>
        })}
      </ul>
    </div>
    <div className='phase-border'></div>
    </div>
  );
}

export default Phase;