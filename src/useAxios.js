import React, { useState } from "react";
import axios from "axios";
import { v1 as uuid } from "uuid";

const useAxios = (baseURL) => {
  const [data, setData] = useState([]);

  const addData = async (endpoint) => {
    try {
      const response = await axios.get(baseURL + endpoint);
      setData((datas) => [...datas, { ...response.data, id: uuid() }]);
    } catch (e) {
      console.log(e);
    }
  };

  return [data, addData];
};

export default useAxios;
