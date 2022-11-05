import { useEffect } from "react";

interface Props{
  callback: () => void,
  miliSec: number
}

export default function useTimer({ callback, miliSec }:Props) {

  useEffect(() => {
    const timer = setInterval(callback, miliSec);
    return () => clearInterval(timer);
  }, [miliSec]);
  

  return [];
}
