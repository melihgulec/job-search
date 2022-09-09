import axios from 'axios';
import React, {useEffect} from 'react';

function useFetch(url) {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState();
  const [loading, setLoading] = React.useState(true);

  const fetchData = async () => {
    try {
      const {data: responseData} = await axios.get(url);
      setData(responseData);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {data, loading, error};
}

export default useFetch;
