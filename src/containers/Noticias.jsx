import React from 'react';
import Noticia from '../components/Noticia';
import { Card } from "semantic-ui-react";
import store from '../store';

class Noticias extends React.Component {
    constructor(props) {
        super(props);
        let noticias = store.getState();
    }


    render(){
        return(
            <Card.Group>
                {console.log(noticias)}
            </Card.Group>
        )
    }
}

export default Noticias;