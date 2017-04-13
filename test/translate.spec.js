import assert from 'assert';
import React from 'react';

import { translate } from '../src/index';

describe('translate HOC', () => {
    it('should conserve base component default props', () => {
        const Component = () => <div />;
        Component.defaultProps = { foo: 'bar' };

        const TranslatedComponent = translate(Component);
        assert.deepEqual(TranslatedComponent.defaultProps, { foo: 'bar' });
    });
});
