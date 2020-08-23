import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

export default class PostScreen extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data: []
        }
    }
    componentDidMount = () => {
        this.getData();
    }

    getData = () => {
        
        const url = "https://jsonplaceholder.typicode.com/posts";
        fetch(url).then((response) => response.json()).then((json) => {
            console.log(json);
            this.setState ({
                data: json
            }).catch((error) => console.log(error))
        })
    }
    
    render() {
        return (
            <View style = {styles.container}>
                <FlatList
                    data= {this.state.data}
                    renderItem= {({item}) =>
                    <View style= {styles.view}>
                        <Text style={styles.text}>{item.title}</Text>
                        <Text style={styles.text}>{item.body}</Text>
                    </View>
                }
                keyExtractor={(item) => item.id}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e0e0e0"
    },
    view: {
        backgroundColor: "#fff",
        borderRadius: 2,
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            hight: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 3
    },
    text: {
        margin: 12,
        fontSize: 10
    }
    
});
