import React, { useEffect } from 'react';

export default function RepositoryList({ history }) {

  return <>
    <h1>Repository List</h1>
    <button type="button" onClick={() => history.push('/yourRepositoryNameHERE') }>navigate to details</button>  
  </>;
}