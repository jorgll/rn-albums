import * as React from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
import Album from '../model/Album.model';

export interface Props {
}

interface State {
    albums: Album[];
}

export default class AlbumList extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = { 
            albums: new Array()
        };
    }
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => {
            this.setState({ albums: response.data });
        });
    }

    renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
        console.log(this.state.albums);
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}
