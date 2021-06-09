/*
 * Copyright 2021 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Parser from 'html-react-parser';
import DoneIcon from 'common/img/done-inline.svg';
import classNames from 'classnames/bind';
import styles from './actionButton.scss';

const cx = classNames.bind(styles);

export const ActionButton = ({ icon, label, hint, isSelected, onClick, disabled }) => (
  <button
    className={cx('button', { selected: isSelected, disabled })}
    onClick={onClick}
    title={hint}
    disabled={disabled}
  >
    <i className={cx('icon', { selected: isSelected })}>
      {isSelected ? Parser(DoneIcon) : icon && Parser(icon)}
    </i>
    <span className={cx('text', { selected: isSelected })}>{label}</span>
  </button>
);

ActionButton.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  hint: PropTypes.string,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
ActionButton.defaultProps = {
  icon: '',
  label: '',
  hint: '',
  isSelected: false,
  onClick: () => {},
  disabled: false,
};