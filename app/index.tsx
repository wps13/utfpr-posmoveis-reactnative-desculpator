import { MotiView } from "moti";
import { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { excusesGenerator } from "./services/ai/generator";
import { styles } from "./styles";

export default function Index() {
  const [excuse, setExcuse] = useState('')
  const [answer, setAnswer] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handlePress = async () => {
    if (excuse.length < 5) {
      alert("Mensagem muito curta")
      return
    }

    setIsLoading(true)
    const result = await excusesGenerator(excuse)
    setAnswer(result ?? '')
    setIsLoading(false)
  }

  useEffect(() => {
    if (excuse.length == 0)
      setAnswer('')
  }, [excuse])


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
      {answer &&
        <MotiView
          from={{ opacity: 0, translateY: 200 }}
          animate={{ opacity: 1, translateY: 0 }}
          style={styles.card}>
          <Text style={styles.card_title}>Sua desculpa está pronta</Text>
          <Text style={styles.card_text}>{answer}</Text>
        </MotiView>}
    </View>
  );
}
