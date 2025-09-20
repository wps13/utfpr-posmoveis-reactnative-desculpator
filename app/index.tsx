import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.title}>Desculpator 3000</Text>
      <Text style={styles.subtitle}>Sua máquina professional de desculpas</Text>
      <TextInput style={styles.input} placeholder="Escreva a sua proposta.." />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.button_text}>Gerar desculpa infalivel!</Text>
      </TouchableOpacity>
      <View style={styles.card}>
        <Text style={styles.card_title}>Sua desculpa está pronta</Text>
        <Text style={styles.card_text}> Lorem impsu</Text>
      </View>
    </View>
  );
}
