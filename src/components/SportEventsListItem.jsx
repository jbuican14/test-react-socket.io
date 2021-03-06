import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import io from 'socket.io-client';
import { Col, Row } from 'react-bootstrap';
import { updatePrice, setSportSelectionEvents } from '../redux/sportActions';
import SportSelectionCount from './SportSelectionCount';

const SportEventsListItem = ({ selectionSport, active, btn }) => {
  const dispatch = useDispatch();
  const sportEventSelector = useSelector((state) => state.sports.sports);
  const SOCKET_SERVER_URL = 'http://localhost:3001';
  let isSportEventSelector;

  useEffect(() => {
    const socketIoConnection = () => {
      const socket = io(SOCKET_SERVER_URL);
      socket.on('selectionPriceUpdate', (data) => {
        dispatch(updatePrice(data));
      });
      socket.on('SelectionStateUpdate', (data) => {
        dispatch(setSportSelectionEvents(data));
      });
    };
    socketIoConnection();
  }, [dispatch]);

  // TO DO : Create a helper method
  if (sportEventSelector) {
    sportEventSelector.map((cat) => {
      return cat.subcat.map((evt) => {
        return evt.event.map((eventSelect) => {
          return eventSelect.selection.map((select) => {
            if (select.id === selectionSport.id)
              return (isSportEventSelector = select.active);
          });
        });
      });
    });
  }

  return (
    <Row className="rowGap">
      <Col xs={6}>{selectionSport.name}</Col>
      <Col>{selectionSport.price}</Col>
      <Col>
        <SportSelectionCount
          sportStatus={active && isSportEventSelector}
          sportId={selectionSport.id}
          btn={btn}
        />
      </Col>
    </Row>
  );
};

export default SportEventsListItem;
