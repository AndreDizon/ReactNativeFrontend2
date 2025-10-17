import {View, Text, FlatList, Alert, Button, TouchableOpacity} from "react-native";
import axios from "axios";
import {useState, useEffect} from "react";
import styles from '../styles';

export default function UserListPage({navigation}){
    const[users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/registration/api/users/")
        .then((res) => {
            setUsers(res.data)
        })
        .catch((err) => {
            console.error(err);
        })
    },[]
    );

    const handleEdit = (user) => {
        navigation.navigate('EditUser', {user});
    }

    const handleDelete = (id) => {
        // Alert.alert(
        //     "Confirm Delete",
        //     "Are you sure you want to delete?",
        //     (
        //         {text: "Cancel", style: "cancel"},
        //         {
        //             text: "Delete",
        //             style: "destructive",
        //             onPress: () => {
        //                 axios.delete(`http://127.0.0.1:8000/registration/api/users/${id}/`)
        //                 .then(() => {
        //                     Alert.alert("Success", "User deleted successfully");

        //         })
        //         .catch((err) => {
        //             console.error(err);
        //             Alert.alert("Error", "Failed to delete user");
        //         });
        //             }
        //         }
        //     )
        // );
        axios.delete(`http://127.0.0.1:8000/registration/api/users/${id}/`)
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registered Users</Text>
            <FlatList
                data={users}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.listItemText}>Firstname: {item.first_name}</Text>
                        <Text style={styles.listItemText}>Lastname: {item.last_name}</Text>
                        <Text style={styles.listItemText}>Email: {item.email}</Text>

                        <View style={styles.listButtonRow}>
                            <TouchableOpacity
                                style={styles.editButton}
                                onPress={() => handleEdit(item)}>
                                <Text style={styles.buttonText}>EDIT</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.deleteButton}
                                onPress={() => handleDelete(item.id)}>
                                <Text style={styles.buttonText}>DELETE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )} />
        </View>
    )
}