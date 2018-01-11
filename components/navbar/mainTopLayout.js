
import { Component } from 'react'; 
import TopBar from './topBar'



export default class MainTopLayout extends Component {

    constructor(props){
        super(props);

    }

    render() {

        return(

            <div>
                <TopBar />
                
            </div>

        )
    }



}