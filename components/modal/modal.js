// components/Modal.js

import React from 'react';
import { 
  View, 
  StyleSheet, 
  ScrollView, 
  KeyboardAvoidingView, 
  Platform, 
  Alert 
} from 'react-native';
import { color } from '../../styles/color';
import { IconButton, Portal } from 'react-native-paper';
import ButtonOriginal from '../buttons/buttonOriginal';

const Modal = ({ visible, onClose, children }) => {
    if (!visible)

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={0}
      enabled={true}
      style={styles.container}
    >
      <Portal>
          <ButtonOriginal 
            buttonStyle={{ flex: 1, activeOpacity: 1 }}
            onPress={onClose}
          >
            <View style={styles.overlay}>
              <ScrollView 
                style={styles.modal} 
                contentContainerStyle={{ flexGrow: 1 }}
              >
                <ButtonOriginal 
                  buttonStyle={{ flex: 1, activeOpacity: 1 }}  
                  onPress={() => {}}
                >
                    <IconButton
                        icon="close-circle"
                        style={{ alignSelf:"flex-end" }}
                        iconColor={color.danger}
                        size={40}
                        onPress={onClose}
                    />
                    {children}
                </ButtonOriginal>
                <ButtonOriginal 
                  buttonStyle={{ 
                    backgroundColor: color.mainColor, 
                    marginVertical: 10 
                  }} 
                  title="Kaydet" 
                  onPress={() => Alert.alert("Bilgiler kaydedildi.")} 
                />
              </ScrollView>
            </View>
          </ButtonOriginal>
      </Portal>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    paddingVertical: 30,
    paddingHorizontal: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    flex: 1,
    backgroundColor: color.mainColor,
    paddingHorizontal: 10,
  },
  modal: {
    flex: 1,
    backgroundColor: color.white,
    padding: 20,
    borderRadius: 8,
  },
  closeButton: {
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  closeButtonText: {
    color: color.white,
    fontSize: 16,
  },
});

export default Modal;


