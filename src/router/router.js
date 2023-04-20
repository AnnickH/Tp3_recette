import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AllRecipes from '../pages/AllRecipes';
import AddRecipe from '../pages/AddRecipe';
import SeeRecipe from '../pages/SeeRecipe';
import Layout from '../Layout/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <AllRecipes />
      </Layout>
    ),
  },
  {
    path: '/All',
    element: (
      <Layout>
        <AllRecipes />
      </Layout>
    ),
  },
  {
    path: '/Add',
    element: (
      <Layout>
        <AddRecipe />
      </Layout>
    ),
  },
  {
    path: `/Recipe/:id`,
    element: (
      <Layout>
        <SeeRecipe />
      </Layout>
    ),
  },
  // on ne met pas de route pour app car app est un root pour utiliser cette page de rooting
]);

export default router;
