import React from 'react'

export default function CheckAllAndRemaining({remainingItem, checkAll}) {
  return (
        <div className="check-all-container">
          <div>
            <div className="button" onClick={checkAll}>Check All</div>
          </div>
          <span>{remainingItem} item{remainingItem > 1 ? 's' : ''} remaining</span>
        </div>
  )
}
