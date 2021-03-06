import React, {useState, useEffect} from 'react';
import ImageCard from './components/imageCard';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_API}
    &q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits);
      setIsLoading(false);
    })
    .catch(err => console.log(err));
  }, []);
  return (
    <div className="container mx-auto">
     <div className="grid grid-cols-3 gap-4">
       { isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> :
         images.map(image => (
           <ImageCard key={image.id} image={image} />
         ))
       }
     </div>
    </div>
    
  );
}

export default App;
