import React from 'react'

function MyFavorites() {
  return (
    <div className="favorites-container">  
    {
      token
       ? movies.map(item=>{
            return <MovieCard  radius={"16px"} cardStyle={"popular-card"} width={"200px"} 
            height={"300px"} imageUrl={item.movie[0].poster_path} key={item.movie[0]._id} data={item.movie[0]}
           />
        }) 
      : <p style={{color:"white"}}>Signin to save movies to your favorites.</p>
    }

</div>
  )
}

export default MyFavorites