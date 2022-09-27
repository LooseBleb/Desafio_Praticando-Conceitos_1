import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/colors";

type TextProps = {
  text: string;
  color: string;
  quantity: number | null;
};

export function TextTarefas({ text, color, quantity }: TextProps) {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
    },
    textStatus: {
      fontSize: 20,
      color: color,
      fontWeight: "bold",
    },
    quantity: {
        marginLeft:10,
        backgroundColor: colors.gray400,
        borderRadius: 10,
        width: 25,
        height: 20,
        justifyContent:'center',
        alignItems: 'center'
    }
  });
  return (
    <View style={styles.container}>
      <Text style={styles.textStatus}>{text}</Text>
      <View style={styles.quantity}>
        <Text style={{color: colors.gray100, fontSize: 13}}>{quantity}</Text>
      </View>
    </View>
  );
}
