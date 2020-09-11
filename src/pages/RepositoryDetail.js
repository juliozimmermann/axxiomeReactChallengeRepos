import React from 'react';

// import api from '../services/api';

import { useParams } from 'react-router-dom'


export default function RepositoryDetail({ history }) {
  const { repositoryName } = useParams();
  
  console.log(`Detail of ${repositoryName}`);

  return <>
    <h1>Repository Detail</h1>
    <button type="button" onClick={ () => history.push('/') }>Back</button>
  </>;
}