import PropTypes from 'prop-types';
import { getContext } from 'recompose';

const contextTypes = {
    translate: PropTypes.func.isRequired,
    locale: PropTypes.string.isRequired,
};

const translate = (BaseComponent) => {
    const TranslatedComponent = getContext(contextTypes)(BaseComponent);

    TranslatedComponent.defaultProps = BaseComponent.defaultProps;

    return TranslatedComponent;
};

export default translate;
