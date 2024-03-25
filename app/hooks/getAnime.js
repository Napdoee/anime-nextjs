"use client"

import { client } from "@/app/lib/axios"
import { useEffect, useState } from "react";

export const getAnime = (url) => {
  let [anime, setAnime] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
  
  const getAnime = async () => {
    setIsLoading(true)
    try {
      const response = await client.get(`${url}`)
      const anime = await response.data;

      setAnime(anime.data);
      setIsLoading(false)
    } catch(err) {
      console.error("getAnime: ", err.message);
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getAnime();
  }, []);

  return {
    anime, 
    isLoading
  }
}
