import React from 'react'
import { useSelector } from 'react-redux'

const FetchUser = () => {

    const { users, isLoading, error } = useSelector((store) => store.user);

    if (!isLoading) {
        return (
            <div>
                <h2>Loading...</h2>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <h2>Error</h2>
            </div>
        )
    }

  return (
    <>
        {users.map((item) => {
            return (
                <div key={item.id}>
                    <span>{item.first}</span>
                    <span>{item.last}</span>
                </div>
            );
        })}
    </>
  )
}

export default FetchUser