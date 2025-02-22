/*
 * Copyright 2019 EPAM Systems
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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, defineMessages } from 'react-intl';
import classNames from 'classnames/bind';
import { FormField } from 'components/fields/formField';
import { FieldErrorHint } from 'components/fields/fieldErrorHint';
import { InputTextArea } from 'components/inputs/inputTextArea';
import styles from './rallyCredentials.scss';

const cx = classNames.bind(styles);

const messages = defineMessages({
  apiKeyLabel: {
    id: 'RallyCredentials.apiKeyLabel',
    defaultMessage: 'ApiKey',
  },
});

@injectIntl
export class RallyCredentials extends Component {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    darkView: PropTypes.bool,
  };

  render() {
    const { intl, darkView } = this.props;
    return (
      <div className={cx('rally-credentials')}>
        <FormField
          name="token"
          containerClassName={cx('text-area-container')}
          fieldWrapperClassName={cx('field-wrapper')}
          label={intl.formatMessage(messages.apiKeyLabel)}
          labelClassName={cx('text-area-label', { 'dark-view': darkView })}
          required
          type="text"
        >
          <FieldErrorHint darkView={darkView}>
            <InputTextArea className={darkView && 'dark-view'} />
          </FieldErrorHint>
        </FormField>
      </div>
    );
  }
}
