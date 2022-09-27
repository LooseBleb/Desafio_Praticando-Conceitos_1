import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { Card } from "../../components/Card/Card";
import { TextTarefas } from "../../components/TextHeaderTarefas/TextTarefas";
import { TarefasProps } from "../../interfaces/tarefas";
import { colors } from "../../styles/colors";
import { styles } from "./styles";

const logo = require("../../../assets/Logo.png");
const add = require("../../../assets/plus.png");

export function Home() {
  const [focus, setFocus] = useState(false);
  const [tarefaName, setTarefaName] = useState("");
  const [tarefas, setTarefas] = useState<TarefasProps[]>([]);
  const [allTarefas, setAllTarefas] = useState(0);
  const [allTarefasCompleted, setAllTarefasCompleted] = useState(0);

  useEffect(() => {
    setAllTarefas(tarefas.length)
  }, [tarefas])
  

  function handleAddTarefa() {
    const lastElement = tarefas[tarefas.length - 1];

    if(tarefaName == '')
    {
        return
    }

    var newTarefa: TarefasProps;
    if (lastElement == null) {
      newTarefa = {
        id: 1,
        name: tarefaName,
        completed: false,
      };
    } else {
      newTarefa = {
        id: lastElement.id + 1,
        name: tarefaName,
        completed: false,
      };
    }

    var Exist: boolean = false;

    tarefas.map((tarefa) => {
      if (tarefa.name.toLowerCase() == newTarefa.name.toLowerCase()) {
        Exist = true;
      }
    });

    if (!Exist) {
      setTarefas((prevState) => [...prevState, newTarefa]);
      setTarefaName("");
    } else {
      return Alert.alert(
        "Tarefa já existe.",
        "Essa tarefa já foi adicionada a lista."
      );
    }
  }

  function handleDeleteTarefa(tarefa: TarefasProps) {
    setTarefas((prevState) => prevState.filter((t) => t.id != tarefa.id));
  }

  function handleCompletedTarefa(tarefa: TarefasProps) {
    if (tarefa.completed == true) {
      return;
    }
    tarefa.completed = true;

    setTarefas((prevState) => prevState.filter((t) => t.id != tarefa.id));

    setTarefas((prevState) => [...prevState, tarefa]);

    setAllTarefasCompleted(allTarefasCompleted + 1)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
      </View>
      <View style={styles.tarefas}>
        <View style={styles.form}>
          <TextInput
            placeholderTextColor={"#808080"}
            style={focus ? styles.input_focused : styles.input}
            onFocus={() => setFocus(true)}
            placeholder="Adicione uma nova tarefa"
            onChangeText={setTarefaName}
            value={tarefaName}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleAddTarefa()}
          >
            <Image source={add} style={{ width: 17 }} />
          </TouchableOpacity>
        </View>
        <View style={styles.status}>
          <TextTarefas text="Criadas" color={colors.blue} quantity={allTarefas} />
          <TextTarefas
            text="Concluidas"
            color={colors.purpleBlue}
            quantity={allTarefasCompleted}
          />
        </View>
        <View style={styles.list}>
          <FlatList
            style={styles.item}
            data={tarefas}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Card
                key={item.id}
                tarefas={item}
                onRemove={() => handleDeleteTarefa(item)}
                onCompleted={() => handleCompletedTarefa(item)}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
}
