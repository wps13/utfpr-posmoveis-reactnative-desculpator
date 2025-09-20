import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { excusesGenerator } from "./services/ai/generator";
import { styles } from "./styles";

export default function Index() {
  const [excuse, setExcuse] = useState('')
  const [answer, setAnswer] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handlePress = async () => {
    setIsLoading(true)
    setExcuse('')
    const result = await excusesGenerator(excuse)
    setAnswer(result ?? '')
    setIsLoading(false)
  }

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.title}>Desculpator 3000</Text>
      <Text style={styles.subtitle}>Sua máquina professional de desculpas</Text>
      <TextInput value={excuse}
        onChangeText={setExcuse}
        style={styles.input} placeholder="Escreva a sua proposta.." />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.button_text}>{isLoading ? "Carregando..." : "Gerar desculpa infalivel!"}</Text>
      </TouchableOpacity>
      {answer && <View style={styles.card}>
        <Text style={styles.card_title}>Sua desculpa está pronta</Text>
        <Text style={styles.card_text}>{answer}</Text>
      </View>}
    </View>
  );
}
