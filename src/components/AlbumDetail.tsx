import React from 'react';
import { Text, View, StyleSheet, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Album from '../model/Album.model';
import Button from './Button';

export interface Props {
    album: Album;
}

export default class AlbumDetail extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }
    
    render() {
        const album = this.props.album;
        return (
            <Card>
            <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                    <Image 
                        source={{ uri: album.thumbnail_image }} 
                        style={styles.thumbnailStyle}
                    />
                </View>
                <View style={styles.headerContentStyle}>
                    <Text style={styles.headerTextStyle}>{album.title}</Text>
                    <Text>{this.props.album.artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image 
                    source={{ uri: album.image }} 
                    style={styles.imageStyle}
                />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(album.url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
        );
    }
}

const styles = StyleSheet.create({
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    headerTextStyle: {
        fontSize: 18,
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    imageStyle: {
        height: 300,
        flex: 1,
    },    
});
