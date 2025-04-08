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
  const[ modalVisible2, setModalVisible2] = useState(false)
  const[ modalVisible3, setModalVisible3] = useState(false)
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

  function handleAddProduct(closeModal) {
    Alert.alert("", "Ürünler Eklendi",[
      {
        text: "OK",
        onPress: () => closeModal()
      }
    ])
  }
  function handleSaveProduct(closeModal) {
    Alert.alert("", "Değişiklikler kaydedildi",[
      {
        text: "OK",
        onPress: () => closeModal()
      }
    ])
  }
  function handleSubmitProduct(closeModal) {
    Alert.alert("", "Sepet Onaylandı",[
      {
        text: "OK",
        onPress: () => closeModal()
      }
    ])
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
              modalOpenTitle = "İlk Modalı Aç"
              actionTitle = "Sepete Ekle"
            >
              {/* Display order details */}
              <FlatList
                scrollEnabled={false}
                data={orderData}
                keyExtractor={(item, index) => `${item}${index}`}
                contentContainerStyle={{ padding: 10 }}
                renderItem={renderItem}
                numColumns={numColumns}
              />
            </CustomModal>
            <CustomModal
              visible={modalVisible2}
              setModalVisible={setModalVisible2}
              onPress={handleSaveProduct} 
              backgroundColor={color.green}
              modalOpenTitle = "İkinci Modalı Aç"
              actionTitle = "Sepeti Kaydet"
            >
              {/* Display order details */}
              <FlatList
                scrollEnabled={false}
                data={orderData}
                keyExtractor={(item, index) => `${item}${index}`}
                contentContainerStyle={{ padding: 10 }}
                renderItem={renderItem}
                numColumns={numColumns}
              />
            </CustomModal>
            <CustomModal
              visible={modalVisible3}
              setModalVisible={setModalVisible3}
              onPress={handleSubmitProduct} 
              backgroundColor={color.blue}
              modalOpenTitle = "Son Modalı Aç"
            >
              {/* Display order details */}
              <FlatList
                scrollEnabled={false}
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
    backgroundColor: "#3AA6B9", 
    paddingVertical: 100,
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
    marginBottom: 40,
  },
})
