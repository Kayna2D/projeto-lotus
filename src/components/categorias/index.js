import React from "react";
import {View, TouchableOpacity, StyleSheet, Text, Image} from "react-native";

export default function Categorias({titulo, icone, imagem}) {
    
    return (
        <TouchableOpacity style={estilo.container}>
            
            <Image
                style={estilo.images}
                source={require(`../../imagens/${imagem}`)}
            />

            <Text style={estilo.titulo}>{titulo}</Text>
            <Image 
                style={estilo.icone}
                source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/8hs9kpz0t9-4%3A18?alt=media&token=4b606348-2868-410d-8ac5-80d3359fce2c",
                }}
            />
        </TouchableOpacity>
        
        
       
    );
}

const estilo = StyleSheet.create({
    container: {
        backgroundColor: "#DCDCDC",
        borderRadius: 10,
        marginTop: 8,
        padding: 10,
        margin: 2,
        alignItems: "center",
        justifyContent: "space-between",
        width: 100,
        height: 150,
        marginLeft: 8,
    },
    titulo: {
        fontSize: 14,
        fontWeight: "600",
        color: "rgba(49,50,52,1)",
        marginBottom: 19,
    },
    icone: {
        width: 8,
        height: 8,
    },
    images: {
        width: 21,
        height: 60,
    }, 
    
});