import React from 'react';
import Box from '@material-ui/core/Box';

const defaultProps = {
  borderColor: 'text.primary',
  background: 'linear-gradient(#045f50, rgb(16, 186, 158, 1))',
  m: 1,
  border: 1,
  style: { width: '9rem', height: '9rem' },
  borderRadius: "50%",
};

 function BorderRadius() {
  return (
    <Box display="flex" justifyContent="center">
      <Box borderRadius="50%" {...defaultProps} />
    </Box>
  );
}
export default BorderRadius;