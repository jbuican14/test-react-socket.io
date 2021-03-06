import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import io from 'socket.io-client';
import { Row, Col } from 'react-bootstrap';
import Loader from './Loader';
import { setSportEvents } from '../redux/sportActions';
import SportEventsListItem from './SportEventsListItem';

const SportEventsList = ({ sportEvent, btn }) => {
  const dispatch = useDispatch();
  const SOCKET_SERVER_URL = 'http://localhost:3001';

  useEffect(() => {
    const socketIoConnection = () => {
      const socket = io(SOCKET_SERVER_URL);
      socket.on('eventStateUpdate', (data) => {
        dispatch(setSportEvents(data));
      });
    };
    socketIoConnection();
  }, [dispatch]);

  const style = {
    padding: '1rem',
    borderBottom: '1px solid grey',
    background: '#27afb1',
    color: '#ffffff',
  };

  return (
    <>
      {sportEvent ? (
        <>
          <Row>
            <Col xs={8} style={style}>
              Sport Events : {sportEvent.name}
            </Col>
            <Col xs={1} style={style}>
              Status
            </Col>
            <Col style={style}>
              Active : {sportEvent.active.toString().toUpperCase()}
            </Col>
          </Row>
          {sportEvent.selection.map((selectionSport) => (
            <SportEventsListItem
              key={selectionSport.id}
              selectionSport={selectionSport}
              active={sportEvent.active}
              btn={btn ? btn[selectionSport.id] : ''}
            />
          ))}
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default SportEventsList;
