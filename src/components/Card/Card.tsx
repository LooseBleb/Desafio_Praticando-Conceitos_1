import React from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";
import { TarefasProps } from "../../interfaces/tarefas";
import { styles } from "./styles";

const check = require("../../../assets/Layer.png")
const trash = require("../../../assets/trash.png");

type Props = {
  tarefas : TarefasProps,
  onRemove : () => void,
  onCompleted : () => void
}


export function Card({tarefas, onCompleted, onRemove} : Props)
{
    return(
        <View style={styles.card}>
        <TouchableOpacity style={styles.circle} onPress={onCompleted}>
        {tarefas.completed ? (<View style={styles.checkedCircle}><Image source={check} style={{ width: 20 }}/></View>) : (<View />)}
        </TouchableOpacity>
        <Text style={styles.title}>
          {tarefas.name}
        </Text>
        <TouchableOpacity style={{marginRight:10}} onPress={onRemove}>
          <Image source={trash} style={{ width: 40 }} />
        </TouchableOpacity>
      </View>
    )
}