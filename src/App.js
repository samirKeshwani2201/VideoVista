
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Demo from './components/Demo';
import Demo2 from './components/Demo2';
import Head from './components/Head';
import MainContainer from './components/MainContainer';
import VideoListKeyword from './components/VideoListKeyword';
import WatchPage from './components/WatchPage';
import store from './utils/store';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <div> <Head /><Body /></div>,
    children: [
      // This children will be rendered wherever there is Outlet component 
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "watch",
        element: <WatchPage />
      },    
      {
        path: "Demo",
        element: <><Demo /><Demo2 /> </>,
      },
      {
        path: "list",
        element: <VideoListKeyword query={'India'} />,
      }
    ]
  }
])

// 67
function App() {
 
  return (
    <Provider store={store}>
      <div >
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
//       {/*
//   -Head 
//   -Body 
//     -Sidebar 
//       -MenuItems
//     -MainContainer
//       -ButtonsList 
//       -VideoContainer
//         -VideoCard
//  */}