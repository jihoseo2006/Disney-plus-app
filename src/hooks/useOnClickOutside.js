import { useEffect } from "react"

export default function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listner = (event) => {
      if(!ref || ref.current.contains(event.target)){
        return;
      }
      handler()

    };
    document.addEventListener("mousedown", listner);
    document.addEventListener("touchstart", listner);
    return () => {
      document.removeEventListener("mousedown", listner);
      document.removeEventListener("touchstart", listner);
    }
  }, [ref, handler]);
  
}