import React, { useEffect, useState } from 'react';

export const Right = () => {
  const [response, setResponse] = useState(null);
  const API = 'https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json';
  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedResponse = await fetch(API);
        const jsonRes = await fetchedResponse.json();
        setResponse(jsonRes);
      } catch (error) {
        window.alert("Something is wrong");
      }
    }

    fetchData();
  }, [API]);

  const Image = (props) => {
    return (
      <img className='h-10 w-10 flex ' src={props.imageURL} alt="Product" />
    );
  };
  //console.log(response);
  return (
    <div className='grid grid-cols-1 gap-x-6 gap-y-10'>
      <div className='flex gap-5'>
        {response && response.map((item, index) => (
            <Image key={index} imageURL={item.imageURL} />
        ))}
      </div>
    </div>
  );
};
