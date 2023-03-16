import React from 'react';
import PropTypes from 'prop-types';
import { Text } from './Filter.styled'

const Filter = ({value, onChange}) => (
    <div>
        <Text>Find contacts by name</Text>
        <input type="text" value={value} onChange={onChange}/>
    </div>
);

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Filter;