import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { 
  Alert, 
  Text, 
  View, 
  KeyboardAvoidingView, 
  SafeAreaView, 
  Platform,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
import { PaperProvider } from 'react-native-paper';
import CustomModal from './components/modal/customModal';
import { color } from './styles/color';

const { width } = Dimensions.get("window")
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
    "Gönderici Adresi: İstiklal Caddesi, No 23", 
    "Gönderici Ad Soyad : Berat Kırbayır", 
    "Teslimat Telefon: 0542 238 23 33", 
  ]
  const behavior = Platform.OS === 'ios' ? 'padding' : 'height';

  function handleAddProduct() {
    Alert.alert("Ürünler Eklendi")
  }

  const renderItem = ({ item, index }) => (
    <Text style={styles.userText}>
      {item}
    </Text>
  )
  const numColumns = width >= 500 ? 2 : 1;
  
  return (
    <PaperProvider>
    {/* Optimize performance and manage theme using the theme prop */}
      <StatusBar style="auto" />
      {/* When the keyboard is opened, scrolled screen content smoothly */}
      <KeyboardAvoidingView 
        behavior={behavior} 
        keyboardVerticalOffset={0} 
        style={{ flex: 1 }}
      >
        {/* Prevented notches on some phones from conflicting with screen content */}
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.container}>
            {/* Application header */}
            <Text style={styles.header}>Custom Modal</Text>
          
            {/* Modal component displaying order details */}
            <CustomModal
              visible={modalVisible}
              setModalVisible={setModalVisible}
              onPress={handleAddProduct} 
              actionTitle="Ürün Ekle"
            >
              {/* Display order details */}
              <FlatList
                data={orderData}
                keyExtractor={(item, index) => `${item}${index}`}
                contentContainerStyle={{ padding: 10 }}
                renderItem={renderItem}
                numColumns={numColumns}
              />
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
    justifyContent: "center", 
    backgroundColor: "#3AA6B9", 
    padding: 10
  },
  userText: {
    flex: 1,
    padding: 10,
    margin: 5,
    fontSize: width >= 500 ? 20 : 16, // Responsive fontSize
    lineHeight: 24, // Using lineHeight to increase line spacing
    textAlign: "left",
    color: color.black,
  },
  header: { 
    fontSize:  width >= 500 ? 36 : 32, // Responsive fontSize
    fontWeight: "500", 
    textAlign: "center",
    color: color.black,
    marginHorizontal: 10,
    marginVertical: 30,
  },
})
