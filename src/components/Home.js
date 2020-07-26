import React, { Fragment, useEffect } from 'react';


const Home = () => {
    useEffect(() => {
        fetch('http://localhost:4000')
            .then(res => res.json())
            .then(res => console.log(res))
    }, [])

  return(
    <Fragment>
        <div className="container py-5">
            
        </div>
        
    </Fragment>
    
  )
}

export default Home;
