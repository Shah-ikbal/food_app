import './App.css';
import Carousal from './components/Carousal';
import styled from 'styled-components';
import FilterSidedebar from './components/FilterSidebar'
import Results from './components/Results'

const AppTop = styled.div`
  padding: 20px;
  background-color: #F6D9AC;
`
const AppBottom = styled.div`
  padding: 10px 90px;
  backgroung-color: white;
`
const FilterBody = styled.div`
  display: flex;
  @media all and (max-width: 500px) {
        flex-direction: column;
}
`

function App() {
  
  return (
    <div className="app">
      <AppTop>
        < Carousal />
      </AppTop>
      <AppBottom>
          <div className="filter__header">
            <div className="header__left">
              <h3>FILTERS</h3>
              <p>Reset all</p>
            </div>
            <h3 className="header__right">RESULTS(14)</h3>
          </div>
          <FilterBody>
              <FilterSidedebar/>
              <Results/>
          </FilterBody>
      </AppBottom>
      
    </div>
  );
}

export default App;
