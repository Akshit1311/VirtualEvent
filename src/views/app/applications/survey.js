/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import {
  Row,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  Collapse,
  ButtonDropdown,
  CustomInput,
} from 'reactstrap';

import IntlMessages from '../../../helpers/IntlMessages';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';

import {
  getSurveyList,
  getSurveyListWithOrder,
  getSurveyListSearch,
  selectedSurveyItemsChange,
} from '../../../redux/actions';

import SurveyListItem from '../../../components/applications/SurveyListItem';
import AddNewSurveyModal from '../../../containers/applications/AddNewSurveyModal';
import SurveyApplicationMenu from '../../../containers/applications/SurveyApplicationMenu';

const getIndex = (value, arr, prop) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i][prop] === value) {
      return i;
    }
  }
  return -1;
};

const SurveyApp = ({
  match,
  intl,
  surveyItems,
  searchKeyword,
  loading,
  orderColumn,
  orderColumns,
  selectedItems,

  getSurveyListAction,
  getSurveyListWithOrderAction,
  getSurveyListSearchAction,
  selectedSurveyItemsChangeAction,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [dropdownSplitOpen, setDropdownSplitOpen] = useState(false);
  const [lastChecked, setLastChecked] = useState(null);
  const [displayOptionsIsOpen, setDisplayOptionsIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.add('right-menu');
    getSurveyListAction();

    return () => {
      document.body.classList.remove('right-menu');
    };
  }, [getSurveyListAction]);

  const handleCheckChange = (event, id) => {
    if (lastChecked == null) {
      setLastChecked(id);
    }

    let selectedList = Object.assign([], selectedItems);
    if (selectedList.includes(id)) {
      selectedList = selectedList.filter((x) => x !== id);
    } else {
      selectedList.push(id);
    }
    selectedSurveyItemsChangeAction(selectedList);

    if (event.shiftKey) {
      let items = surveyItems;
      const start = getIndex(id, items, 'id');
      const end = getIndex(lastChecked, items, 'id');
      items = items.slice(Math.min(start, end), Math.max(start, end) + 1);
      selectedList.push(
        ...items.map((item) => {
          return item.id;
        })
      );
      selectedList = Array.from(new Set(selectedList));
      selectedSurveyItemsChangeAction(selectedList);
    }
  };

  const handleChangeSelectAll = () => {
    if (loading) {
      if (selectedItems.length >= surveyItems.length) {
        selectedSurveyItemsChangeAction([]);
      } else {
        selectedSurveyItemsChangeAction(surveyItems.map((x) => x.id));
      }
    }
  };

  const { messages } = intl;

  return (
    <>
      <div style={{
        backgroundImage: `url("https://ficci-capam.framez.sg/images/lobby.jpg")`,
        backgroundRepeat: 'no-repeat',height:'600px', width:'1800px',
        backgroundSize: 'contain',
      }}>
      </div>
   </>
  );
};
