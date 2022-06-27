import SearchBar from "./components/Search Bar/searchBar";
import ImageList from "./components/Image List/imageList";
import React from "react";
import './App.css';

import { TbChevronsDown } from 'react-icons/tb';
import { TbChevronsUp } from 'react-icons/tb';
import { FiImage } from 'react-icons/fi';
import { FiVideo } from 'react-icons/fi';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.sort = this.sort.bind(this); 
    this.searchByType = this.searchByType.bind(this);
    
    this.state = {
      products: [],
      searchQuery: "",
      allProducts: []
    };
     
  }


  // react da componentDidMount methodunu kullanarak db.json daki verilerimizi ("http://localhost:3002/products") buraya taşınması ve fetch fonksiyonu kullanarak artık verilerimizi belirlediğimiz Rest api den alınması
  async componentDidMount() {
      const baseUrl = "http://localhost:3002/products";
      const response = await fetch(baseUrl);
      const data = await response.json();
    
      this.setState({ products: data })
      this.setState({ allProducts: data })
  } 


  searchProduct = (event) => {
    this.setState({searchQuery: event.target.value})
  }

 
  sort(data) {
    let sortedProducts = this.state.products;
    sortedProducts.sort((a, b) => {
      if (data === 'artan') {
        return a.price - b.price
      } else {
        return b.price - a.price
      }
      
    })
 
    this.setState({products:sortedProducts})
    }


 searchByType(searchType) {
 
  let sortedProducts = this.state.allProducts;
   
  const filtered=sortedProducts.filter(singleData => singleData.type === searchType);
  this.setState({ products: filtered })
  

}

  render() {
    let filteredProducts = this.state.products.filter(
      (product) => {
        return product.title.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1 
      }
    )

    return (
      <div className="container ">
          <div className="row">
            <div className="col-sm-12 ">
              <SearchBar searchProductProp={this.searchProduct} />
              <div className="mb-4">

                {/* Selection menu - start */}
                <div className='rounded-4 fiyatMain d-flex justify-content-sm-between align-items-sm-center flex-column gap-3'>
                   <div className="rounded-4 bg-warning rounded-5">
                        <h6 className='text-center text-light border-bottom border-warning'>Fiyata Göre Sırala</h6>
                        <div className='fiyatArtanAzalan d-flex justify-content-between align-items-center'>
                            <button onClick={()=>this.sort("artan")} type='button'
                            style={{backgroundColor: "#000", color: "#fff"}} className='btn btn-sm  rounded-5 fw-bold'>Fiyatı Artan   <TbChevronsUp /></button>
                            <button onClick={()=>this.sort("azalan")} type='button' className='btn btn-sm rounded-5 fw-bold' style={{backgroundColor: "#000", color: "#fff"}} >Fiyatı Azalan
                            <TbChevronsDown /></button>
                        </div>
                    </div>
    
                    <div className="bg-warning rounded-5">
                        <h6 className='text-center text-light border-bottom border-warning'>Türe Göre Sırala</h6>
                        <div className='d-flex justify-content-between align-items-center'>
                            <button onClick={()=>this.searchByType("image")} type='button' className='btn btn-sm fw-bold' style={{backgroundColor: "#000", color: "#fff"}}>Görsel <FiImage/></button>
                            <button onClick={()=>this.searchByType("video")} type='button' className='btn btn-sm fw-bold' style={{backgroundColor: "#000", color: "#fff"}}>Video <FiVideo /></button>
                        </div>
                    </div>
                </div>
                {/* Selection menu - end */}
              </div>
            </div>
          </div>
          <ImageList products={filteredProducts} />
      </div>
    );
  }

  
}

export default App;
