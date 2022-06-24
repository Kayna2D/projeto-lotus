import React from "react"
import { StyleSheet, Image, Text, View, TouchableOpacity, ImageBackground } from "react-native"
import { Searchbar } from "react-native-paper"

export default function Header() {
  return (
      <View style={styles.Group8100}>
        <View style={styles.Group288}>
          <TouchableOpacity>
          <Image
            style={styles.Ellipse1}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/8hs9kpz0t9-1%3A5?alt=media&token=eff87f84-c695-4d12-9bc3-e4db2a009518",
            }}
          />
          </TouchableOpacity>
          <TouchableOpacity>
          <Image
            style={styles.Menu2}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/8hs9kpz0t9-6%3A167?alt=media&token=1661e63b-54c8-4af8-8efe-188d78246ec8",
            }}
          />
          </TouchableOpacity>
        </View>
        <Text style={styles.Txt881}>Moda Casual</Text>
        <Text style={styles.Txt553}>Lótus</Text>
        <View style={styles.Group234}>
          <View>
            <Searchbar style={styles.pesquisa}
              placeholder="Pesquisar..."
            />
          </View>
        </View>
        </View>
  )}
const styles = StyleSheet.create({
  pesquisa: {
    backgroundColor: "rgba(151,195,111,1)",
    
  },
  Group8100: {
    display: "flex",
    flexDirection: "column",
  },
  Group288: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  Ellipse1: {
    width: 40,
    height: 40,
    marginRight: 271,
  },
  Menu2: {
    width: 24,
    height: 24,
  },

  Txt881: {
    fontSize: 16,
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "400",
    color: "rgba(49,50,52,1)",
    marginBottom: 4,
  },
  Txt553: {
    fontSize: 32,
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "700",
    color: "rgba(49,50,52,1)",
    marginBottom: 29,
  },
  Group234: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 30,
  },
  Loupe2: {
    width: 16,
    height: 16,
    marginRight: 10,
  },
  Line1: {
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "rgba(205,205,205,1)",
    transform: "rotate(-0.19deg);",
    width: 309,
    height: 2,
  },
  Txt10410: {
    fontSize: 14,
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "600",
    color: "rgba(205,205,205,1)",
    textAlign: "left"
  }
})