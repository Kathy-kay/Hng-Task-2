import searchIcon from "../assets/searchIcon.png" 

const Search = () => {
  return (
    <div className="search">
      <input type="text"
      placeholder="What do you want to watch?"
       />
        <img src={searchIcon} alt="search icon" />

    </div>
  )
}

export default Search
