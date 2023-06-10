import React, { useEffect, useState } from 'react'
import CircleLoader from "react-spinners/CircleLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "#277666",
  
  
};

const Gallery = (props) => {
  
  const [image,setImage]=useState([])
  let [loading, setLoading] = useState(true);
  const [view, setView]=useState("")
  const [currentIndex, setCurrentIndex] = useState(0);
  const [storedImage, setstoredImage] = useState([]);
  
  const {setProgress}=props
  useEffect(()=>{
    
    setProgress(30)
    setLoading(true)
    fetch(`https://pixabay.com/api/?key=36828094-91d34fc96e036e02494134b3e&q=${props.category}`)
    .then((res)=>{
      setProgress(60)
     return res.json()
    })
    .then((data)=>{
      setProgress(80)
      setImage(data.hits)
      setProgress(100)
      setLoading(false)
      setstoredImage(data.hits)
      setView(false)
    })
    
  },[props.category,setProgress])


const handleView = (url, id) => {
  setView(!view);

  const clickedImage = image.filter((pic, index) => {
    return pic.webformatURL === url;
  });

  if (view === false) {
    setImage(clickedImage);
    setCurrentIndex(id);
  } else {
    setImage(storedImage);
  }
};


const handleNext = () => {
  if(currentIndex===storedImage.length-1){
    setCurrentIndex(0)
  }
  else
  {
    setCurrentIndex(currentIndex + 1);
  }
 
};
const handlePrevious = () => {
  if(currentIndex===0){
    setCurrentIndex(storedImage.length-1)
  }
  else{
    setCurrentIndex(currentIndex - 1);
  }
};

  return (
    <div className="">
       {/* eslint-disable-next-line */}
<h1 className='text-center mt-5 mb-3 pt-3'></h1>
{view === false ? (
<div className="row m-2">
{!loading &&
    image.length > 0 &&
    image.map((index, id) => {
      return (
        <div className="col-lg-3 col-md-6 col-sm-12" key={id}>
           <img
                src={index.webformatURL} className='m-1'
                style={{ height: "25rem", width: "22rem" }}
                onClick={() => handleView(index.webformatURL, id)}
                alt="..."
              />
          </div>
      )})}
</div>) :(  <>
                <img
                  src={storedImage[currentIndex]?.webformatURL} className='d-block m-auto'
                  style={{
                    height: "37rem",
                    width: "40rem",
              
                  }}
                  onClick={() => handleView()}
                  alt="..."
                />
                <div className="container d-flex justify-content-between p-4">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="btn btn-dark"
                  >
                    {" "}
                    &larr; Previous
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="btn btn-dark "
                  >
                    Next &rarr;
                  </button>
                </div>
              </>
            )}
            <div className="mt-5">
    <CircleLoader
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  </div>
  </div>
  )
}

export default Gallery





