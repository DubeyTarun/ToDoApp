import { useEffect, useState } from "react";

const useRelativeTime = (dateString) => {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const date = new Date(dateString);
    const systemDate = new Date();

    const timeDifference = systemDate - date;
    const secondsDifference = Math.floor(timeDifference / 1000);
    const minutesDifference = Math.floor(secondsDifference / 60);
    const hoursDifference = Math.floor(minutesDifference / 60);

    const options = { day: "numeric", month: "short", year: "numeric" };

    if (hoursDifference >= 24) {
      setFormattedDate(date.toLocaleDateString("en-US", options));
    } else if (hoursDifference >= 1) {
      setFormattedDate(
        `${hoursDifference} ${hoursDifference === 1 ? "hour" : "hours"} ago`
      );
    } else if (minutesDifference >= 2) {
      setFormattedDate(`${minutesDifference} minutes ago`);
    } else {
      setFormattedDate("Just now");
    }
  }, [dateString]);

  return formattedDate;
};

export default useRelativeTime;
