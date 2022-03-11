import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url, method, requestData = {}, params = {}) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const config = {
      url,
      method,
    };
    if (Object.keys(requestData).length > 0) config.data = requestData;
    if (Object.keys(params).length > 0) config.params = params;
    axios
      .request(config)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url, method, requestData, params]);

  return { data, loading, error };
};

export default useFetch;
