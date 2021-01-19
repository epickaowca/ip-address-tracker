import './App.css';
import { Provider } from 'react-redux'
import { store } from './redux/store'
import View from './View'

function App() {
  return (
    <Provider store={store}>
      <View />
    </Provider>
  );
}

export default App;
