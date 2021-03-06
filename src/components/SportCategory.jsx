import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { getSports } from '../redux/sportActions';
import Loader from './Loader';
import SportEventsList from './SportEventsList';
import SportSubCategory from './SportSubCategory';

const SportCategory = ({ sports: { sports, loading, btn }, getSports }) => {
  useEffect(() => {
    getSports();
  }, [getSports]);

  if (loading || sports === null) {
    return <Loader />;
  }
  return (
    <>
      <Container fluid>
        <Row>
          <Col style={{ margin: '1.5rem' }}>
            {!loading && sports.length === 0 ? (
              <Loader />
            ) : (
              sports.map((category) => (
                <div key={category.id} style={{ paddingTop: '1.2rem' }}>
                  <h4 className="text-center">
                    Sport Category :{category.name}
                  </h4>
                  {category.subcat.map((subSport) => (
                    <div key={subSport.id}>
                      <SportSubCategory subSport={subSport} />
                      {subSport.event.map((sportEvent) => (
                        <div key={sportEvent.id}>
                          <SportEventsList sportEvent={sportEvent} btn={btn} />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({
  sports: state.sports,
});

export default connect(mapStateToProps, { getSports })(SportCategory);
