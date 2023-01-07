import React from 'react'
import {useSearchUsersQuery} from "../store/github/github.api";

export function HomePage() {
  const {isLoading, isError, data} = useSearchUsersQuery('gregory')

  return (
    <div>home</div>
  )
}

