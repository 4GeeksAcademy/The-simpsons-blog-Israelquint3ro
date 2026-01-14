import React from 'react'

function Jumbotron() {
  return (
    <div className='container-fluid'>
      <div className="jumbotron w-100%">
	<img className="w-100%"  src="https://thesimpsonsapi.com/clouds-bg.jpg"></img>
  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr className="my-4"/>
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p className="lead">
    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </p>
</div>
    </div>
  )
}

export default Jumbotron
