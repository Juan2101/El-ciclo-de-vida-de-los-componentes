import React, { Component } from 'react';
import Genre  from './Genre';

class GenresInDb extends Component{
    
    constructor(){
        super()
        this.state = {
            genresList: [],
            style: ""
        }
    }

    componentDidMount(){
        fetch("http://localhost:3001/api/genres")
            .then(respuesta => respuesta.json())
            .then(genres => this.setState({ genresList: genres.data }))
            .catch(e => console.log(e))
    }

    over(){
        this.setState({ style: "bg-secondary" })
    }

    out(){
        this.setState({ style: "" })
    }
    
    render(){
        
        return (
            <React.Fragment>
                    {/*<!-- Categories in DB -->*/}
                    <div className="col-lg-6 mb-4">						
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 onMouseOver={() => this.over()} 
                                    onMouseOut={() => this.out()} 
                                    className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h6>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    {
                                        this.state.genresList.map((genre,i)=>{
                                            return  <Genre  genre={genre.name}  key={i} style={this.state.style} />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
               
            </React.Fragment>
        )
    }

}
export default GenresInDb;