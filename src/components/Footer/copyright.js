import React, { useState, useEffect } from 'react';

const Copyright = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update the current year when the component mounts
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div>
      <p>&copy; {currentYear} Divyam Goyal. All rights reserved.</p>
    </div>
  );
};

export default Copyright;
