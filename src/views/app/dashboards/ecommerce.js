import React from 'react';
import { Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';

const EcommerceDashboard = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.ecommerce" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
    </>
  );
};
export default EcommerceDashboard;
