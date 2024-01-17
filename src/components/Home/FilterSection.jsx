import React from 'react';
import '../Home/FIlterSection.css'; // Corrected typo in the import statement
import { IoIosStar } from 'react-icons/io';

const FilterSection = () => {
  return (
    <div className='filterMain'>
      <h2>Filter items by category</h2>
      <IoIosStar style={{ color: 'green' }} size={'2rem'} />
    </div>
  );
};

export default FilterSection;
