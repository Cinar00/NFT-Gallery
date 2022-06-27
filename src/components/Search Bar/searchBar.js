import React from 'react'

class searchBar extends React.Component {

 
  handleFormSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className='form-row my-5'>
          <div className='col-8 mx-auto'>
            <input 
              onChange={this.props.searchProductProp} 
              type="text" 
              className='form-control' 
              placeholder='Search'
              style={{backgroundColor: "#e0edee", color: "#000"}}
              
            />
          </div>
        </div>
      </form>
    )
  }
  
}

export default searchBar