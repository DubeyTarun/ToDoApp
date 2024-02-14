import { useEffect, useState } from "react";

const useFormattedDate = (dateString) => {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "short", year: "numeric" };
    setFormattedDate(date.toLocaleDateString("en-US", options));
  }, [dateString]);

  return formattedDate;
};

export default useFormattedDate;
