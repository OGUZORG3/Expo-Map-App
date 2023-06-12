import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

const ProfileScreen = () => {
  const data = [
    { id: 1, label: ' Adı', value: 'Esat' },
    { id: 2, label: 'Soyad', value: 'Dönmez' },
    { id: 3, label: 'Gmail Adı', value: 'esatd@gmail.com' },
    { id: 4, label: 'Telefon', value: '0555000000' }
    // Daha fazla öğe eklenebilir
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.label}>{item.label}</Text>
        <Text style={styles.value}>{item.value}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          style={styles.profileImage}
          source={{ uri: 'https://mui.com/static/images/avatar/1.jpg' }}
        />
        <View style={styles.userInfo}>
          <Text style={styles.name}>Esat Dönmez</Text>
          <Text style={styles.email}>esatd@gmail.com</Text>
          
        </View>
      </View>
      <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.listContainer}
          />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  listContainer: {
    paddingBottom: 20,
  },
  itemContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  userInfo: {
    flexDirection: 'column',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default ProfileScreen;