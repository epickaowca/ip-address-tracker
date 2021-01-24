import './App.css';
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { ThemeProvider } from 'styled-components'
import  * as theme from './style'
import View from './View'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <View />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
