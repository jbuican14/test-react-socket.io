import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button, InputGroup } from 'react-bootstrap';
import { setSportButton } from '../redux/sportActions';

const SportSelectionCount = ({ sportStatus, sportId, btn }) => {
  const dispatch = useDispatch();

  useEffect(() => {}, []);
  const clickHandler = (e) => {
    dispatch(setSportButton({ btnId: e.target.id }));
  };

  return (
    <>
      <Button
        variant="primary"
        className={`justify-content-center ${btn}`}
        disabled={!sportStatus}
        onClick={clickHandler}
        id={sportId}
      >
        Add
      </Button>
      <InputGroup.Prepend xs={1} style={{ paddingTop: '.4rem' }}>
        <InputGroup.Text style={{ backgroundColor: '#ffffff' }}>
          {btn ? '1' : '\u00A0'}
        </InputGroup.Text>
      </InputGroup.Prepend>
    </>
  );
};

export default SportSelectionCount;
