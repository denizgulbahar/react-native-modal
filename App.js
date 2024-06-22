import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { 
  Alert, 
  Text, 
  View, 
  KeyboardAvoidingView, 
  SafeAreaView, 
  Platform,
  StyleSheet 
} from 'react-native';
import { PaperProvider } from 'react-native-paper';
import ButtonOriginal from './components/buttons/buttonOriginal';
import CustomModal from './components/modal/customModal';
import { color } from './styles/color';

export default function App() {

  const[ modalVisible, setModalVisible] = useState(false)
  const orderData = [ 
    "Sipariş Numarası: 2131232131", 
    "Sipariş Tarihi: 01.07.2024", 
    "Sipariş Ürünü: AirFryer ", 
    "Ödeme Miktarı: 2300 TL", 
    "Teslimat Adresi: Atatürk Caddesi, No 23, Ankara", 
    "Teslimat Ad Soyad : Furkan Özçetin", 
    "Teslimat Telefon: 0502 238 23 32", 
    "Ödeme Tipi: Kredi Kartı",
    "Gönderici Adresi: İstiklal Caddesi, No 23, Ankara", 
    "Gönderici Ad Soyad : Berat Kırbayır", 
    "Teslimat Telefon: 0542 238 23 33", 
  ]
  const behavior = Platform.OS === 'ios' ? 'padding' : 'height';

  const handleOpenModal = () => setModalVisible(true);
  const handleCloseModal = () => setModalVisible(false);

  function handleAddProduct() {
    Alert.alert("Ürünler Eklendi")
    handleCloseModal()
  }

  return (
    <PaperProvider>
      {/* When the keyboard is opened, scrolled screen content smoothly */}
      <KeyboardAvoidingView 
        behavior={behavior} 
        keyboardVerticalOffset={0} 
        style={{ flex: 1 }}
      >
        {/* Prevented notches on some phones from conflicting with screen content */}
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.container}>
            <StatusBar style="auto" />
            {/* Application header */}
            <Text style={styles.header}>Custom Modal</Text>
            {/* Button to open modal */}
            <ButtonOriginal 
              buttonStyle={{ margin: 60 }}  
              title="Modalı Aç" 
              onPress={handleOpenModal} 
            />
            {/* Modal component displaying order details */}
            <CustomModal visible={modalVisible} onClose={handleCloseModal} >
              <View style={styles.content}>
                {/* Display order details */}
                <View style={{ flex: 1 }}>
                  {orderData.map((item, index) => (
                  <Text style={styles.userText} key={index}>
                    {item}
                  </Text>
                  ))}
                </View>
                {/* Button to add products */}
                <ButtonOriginal
                  buttonStyle={styles.addButton}
                  title="Ürünleri Ekle" 
                  onPress={handleAddProduct} 
                />
              </View>
            </CustomModal>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </PaperProvider>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#3AA6B9", 
    padding: 10
  },
  userText: {
    padding: 10,
    fontSize: 16,
    lineHeight: 24, // Using lineHeight to increase line spacing
    textAlign: "left",
    color: color.black,
  },
  addButton: {
    alignSelf: "flex-end", 
    backgroundColor: color.apricot,
    margin: 10,
    marginTop: 20,
    marginRight: 0,
  },
  header: { 
    fontSize: 32,
    fontWeight: "500", 
    textAlign: "center",
    color: color.black,
    marginHorizontal: 10,
    marginVertical: 30,
  },
  content: {
    flex: 1, 
    justifyContent: "space-between", 
    width: "100%" 
  }
})
