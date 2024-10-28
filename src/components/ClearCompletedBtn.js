import React from 'react'

export default function ClearCompletedBtn({clearAll}) {
  return (
        <div>
            <button className="button" onClick={clearAll}>Clear completed</button>
        </div>
  )
}
