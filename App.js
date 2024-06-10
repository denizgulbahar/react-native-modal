import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { Modal } from 'react-native-paper';
import ButtonOriginal from './components/buttons/buttonOriginal';

export default function App() {
  const[ modalVisible, setModalVisible] = useState(false)
  const orderData = [ "Sipariş Numarası", "Sipariş Tarihi", "Sipariş Ürünü", 
    "Ödeme Miktarı", "Teslimat Adresi", "Teslimat Ad Soyad", "Teslimat Telefon", 
    "Ödeme Tipi"
  ]

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <ButtonOriginal  title="Modalı Aç" onPress={() => setModalVisible(true)} />
      <Modal visible={modalVisible} onClose={() => setModalVisible(false)}>
        {orderData.map((item,index) =>  (
          <Text key={index}>{item}</Text>
        )) }
        <ButtonOriginal 
          title="Ürünleri Ekle" 
          onPress={() => Alert.alert("Ürünler Eklendi.")} 
        />
      </Modal>
    </View>
  );
}

