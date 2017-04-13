import { Children } from 'react';
import PropTypes from 'prop-types';
import Polyglot from 'node-polyglot';
import { withContext } from 'recompose';

const contextTypes = {
    translate: PropTypes.func.isRequired,
    locale: PropTypes.string.isRequired,
};

const getContextTypes = ({ locale, messages = {} }) => {
    const userMessages = messages[locale] || {};
    const polyglot = new Polyglot({
        locale,
        phrases: userMessages
    });

    return {
        locale,
        translate: polyglot.t.bind(polyglot),
    };
};

const withI18nContext = withContext(contextTypes, getContextTypes);

const TranslationProvider = ({ children }) => Children.only(children);

TranslationProvider.propTypes = {
    locale: PropTypes.string.isRequired,
    messages: PropTypes.object,
    children: PropTypes.element,
};

export default withI18nContext(TranslationProvider);
