import React from "react"
import { StyleSheet, View, Text, Image, ImageBackground, FlatList } from "react-native"
import Categorias from "./src/components/categorias"
import Header from "./src/components/header"
import header from "./src/Components/header"
import CATEGORIAS from "./src/dados/categorias"

export default function App() {
  return (
    <View style={styles.Home}>
    <View>
      <Header></Header>
      <View>
      <FlatList
          horizontal={true}
          data = {CATEGORIAS}
          keyExtractor = {(item) => item.id}
          renderItem = { ({ item }) => (

          <Categorias
          titulo ={item.nome}
          imagem ={item.imagem}
          valor ={item.icone}
          />  
          )}
          />
      </View>
    </View>
    </View>
    )
}

const styles = StyleSheet.create({
  Home: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "relative",
    paddingTop: 59,
    paddingBottom: 0,
    paddingLeft: 19,
    paddingRight: 0,
    backgroundColor: "rgba(151,195,111,1)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,1)",
    shadowColor: "rgba(0,0,0,0.25)",
    elevation: 0,
    shadowOffset: { width: 0, height: 4 },
    width: 375,
    height: 812,
  }
})