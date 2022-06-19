import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const Dio = () => {
  const bolinhas = (props) => {
    const Ar = [];

    for (let index = 1; index <= props.quantidade; index++) {

      if (props.posicao.includes(index))
        Ar.push({ valor: <View style={style.bolinhaVerde} order={index}></View> });

      else
        Ar.push({ valor: <View style={style.bolinhaBranca} order={index}></View> });
    }

    return Ar;
  };

  const Linha = (props) => {
    return (
      <View style={style.linha}>
        <FlatList
          data={bolinhas({
            posicao: [...props.acenderBolinhasNaPosicao],
            quantidade: props.quantidade,
          })}
          renderItem={({ item }) => item.valor} numColumns={props.quantidade}
        />
      </View>
    );
  };

  return (
    <View>
      <Linha acenderBolinhasNaPosicao={[]} quantidade="13" />
      <Linha acenderBolinhasNaPosicao={[2, 3, 7, 11]} quantidade="13" />
      <Linha acenderBolinhasNaPosicao={[2, 4, 7, 10, 12]} quantidade="13" />
      <Linha acenderBolinhasNaPosicao={[2, 4, 7, 10, 12]} quantidade="13" />
      <Linha acenderBolinhasNaPosicao={[2, 3, 7, 11]} quantidade="13" />
      <Linha acenderBolinhasNaPosicao={[]} quantidade="13" />
    </View>
  );
};

export default Dio;

const style = StyleSheet.create({
  bolinhaVerde: {
    backgroundColor: "#39D353",
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  bolinhaBranca: {
    backgroundColor: "#161B22",
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  linha: {
    flexDirection: "row"
  },
});