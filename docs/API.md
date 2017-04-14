## Usage

You have to import the TranslationProvider provided by the package. 

```javascript
import { TranslationProvider, resolveBrowserLocale } from 'react-i18n-polyglot';
import PropTypes from 'prop-types';

import AppContainer from './AppContainer';

const App = ({ locale = resolveBrowserLocale(), messages }) => (
  <TranslationProvider locale={locale} messages={messages}>
    <AppContainer/>
  </TranslationProvider>
);

App.propTypes = {
  locale: PropTypes.string.isRequired,
  messages: PropTypes.object.isRequired
};

export default App;
```

Then in your components, when you want to access to a translation, you have to do the following:

```javascript
import { translate } from 'react-i18n-polyglot';
import PropTypes from 'prop-types';

const TranslatedText = ({ path, translate, className = '', style = {} }) => (
  <span className={className} style={style}>
    {translate(path)}
  </span>
);

TranslatedText.propTypes = {
  className: PropTypes.string,
  path: PropTypes.string.isRequired,
  style: PropTypes.object,
  translate: PropTypes.func.isRequired
};

export default translate(TranslatedText);
```
