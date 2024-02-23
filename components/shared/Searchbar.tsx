'use client'

import { useState } from 'react'

// TODO: use a tooltip when pressing the search button without entering a URL or an invalid URL
const Searchbar = () => {
  const [searchPrompt, setSearchPrompt] = useState('')
  // const [isLoading, setIsLoading] = useState(false)

  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={() => {}}>
      <input className="searchbar-input" type="text" value={searchPrompt} placeholder="Enter Amazon product URL" onChange={e => setSearchPrompt(e.target.value)} />
      <button className="searchbar-btn" type="submit">
        <span>Search</span>
      </button>
    </form>
  )
}

export default Searchbar