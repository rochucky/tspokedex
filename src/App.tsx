import { QueryClient, QueryClientProvider } from 'react-query'
import Header from './Components/Header';

import Home from './Components/Home';

function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Home />
    </QueryClientProvider>
  );
}

export default App;
