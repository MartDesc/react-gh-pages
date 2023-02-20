import { Layout } from 'antd';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Header from './components/header/header';
import { Routes } from './models/enums/routes.enum';
import AboutEpilepsy from './pages/about-epilepsy/about-epilepsy';
import About from './pages/about/about';
import BeWitness from './pages/be-witness/be-witness';
import Home from './pages/home/home';
import Impacts from './pages/impacts/impacts';
import Kit from './pages/kit/kit';
import MythsAndFacts from './pages/myths-and-facts/myths-and-facts';
import Resources from './pages/resources/resources';
import Tools from './pages/tools/tools';
import Treatments from './pages/treatments/treatments';

const getElement = (content) => (
  <>
    <Header />
    <Layout.Content>{content}</Layout.Content>
  </>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={Routes.Home} replace />
  },
  {
    path: Routes.Home,
    element: getElement(<Home />)
  },
  {
    path: Routes.About,
    element: getElement(<About />)
  },
  {
    path: Routes.Resources,
    element: getElement(<Resources />)
  },
  {
    path: Routes.Kit,
    element: getElement(<Kit />)
  },
  {
    path: Routes.AboutEpilepsy,
    element: getElement(<AboutEpilepsy />)
  },
  {
    path: Routes.BeWitness,
    element: getElement(<BeWitness />)
  },
  {
    path: Routes.Impacts,
    element: getElement(<Impacts />)
  },
  {
    path: Routes.MythsAndFacts,
    element: getElement(<MythsAndFacts />)
  },
  {
    path: Routes.Tools,
    element: getElement(<Tools />)
  },
  {
    path: Routes.Treatments,
    element: getElement(<Treatments />)
  }
]);
