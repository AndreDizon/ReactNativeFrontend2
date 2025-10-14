import { View, Text, FlatList } from 'react-native';
import axios from 'axios';
import { useState, useEffect } from 'react';
import styles from '../styles';

export default function UserListPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/registration/api/users/')
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>User List Page</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.userListWrapper}
        renderItem={({ item }) => (
          <View style={styles.userCard}>
            <View style={styles.userRow}>
              <Text style={styles.userLabel}>Firstname:</Text>
              <Text style={styles.userValue}>{item.first_name}</Text>
            </View>
            <View style={styles.userRow}>
              <Text style={styles.userLabel}>Lastname:</Text>
              <Text style={styles.userValue}>{item.last_name}</Text>
            </View>
            <View style={styles.userRow}>
              <Text style={styles.userLabel}>Email:</Text>
              <Text style={styles.userValue}>{item.email}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
