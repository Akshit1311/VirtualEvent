import React from 'react';
import { injectIntl } from 'react-intl';
import { Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';

const DashboardAnalytics = ({ intl, match }) => {
  const image1={
    height: "720px", width: "1320px"
   }
    return (
     <img style={image1} src="https://ficci-capam.framez.sg/images/lounge.jpg" />
    );
};
export default injectIntl(DashboardAnalytics);
