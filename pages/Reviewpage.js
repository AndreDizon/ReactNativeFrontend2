import { View, Text, Button, Alert, TouchableOpacity } from 'react-native';
import styles from '../styles'; 
import axios from 'axios';


export default function ReviewPage({route, navigation}){
    const{formData} = route.params;

    const handleSubmit = async () => {
        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/registration/api/register/",
                formData
            );
            Alert.alert("Success", "User registered successfully");
            navigation.goBack();

        }catch (error) {
            Alert.alert("Error", JSON.stringify(error.response?.data || "Something went wrong"));
        }
    };
    
    const { first_name, last_name, email, password, gender } = formData;

    return(
        // The mainContainer centers the form on the screen
        <View style={styles.mainContainer}>
            {/* The reviewCard creates the centered white box */}
            <View style={styles.reviewCard}>
                <Text style={styles.title}>Review Information</Text>

                {/* Data rows must be used to structure the text */}
                <View style={styles.dataRow}>
                    <Text style={styles.dataLabel}>First name:</Text>
                    <Text style={styles.dataValue}>{first_name}</Text>
                </View>

                <View style={styles.dataRow}>
                    <Text style={styles.dataLabel}>Last name:</Text>
                    <Text style={styles.dataValue}>{last_name}</Text>
                </View>

                <View style={styles.dataRow}>
                    <Text style={styles.dataLabel}>Email:</Text>
                    <Text style={styles.dataValue}>{email}</Text>
                </View>

                <View style={styles.dataRow}>
                    <Text style={styles.dataLabel}>Password:</Text>
                    <Text style={styles.dataValue}>{'*'.repeat(password.length)}</Text>
                </View>

                <View style={styles.dataRow}>
                    <Text style={styles.dataLabel}>Gender:</Text>
                    <Text style={styles.dataValue}>{gender}</Text>
                </View>

                {/* Buttons Container to place buttons side-by-side */}
                <View style={styles.buttonsContainer}>
                    
                    {/* 👇 FIX APPLIED HERE: Replaced <View><Button> with <TouchableOpacity> */}
                    <TouchableOpacity 
                        style={styles.editButton} 
                        onPress={() => navigation.goBack()}
                        activeOpacity={0.8}
                    >
                        {/* Use the custom text style */}
                        <Text style={styles.secondaryButtonText}>GO BACK TO EDIT</Text>
                    </TouchableOpacity>

                    {/* Submit Button (Blue) */}
                    <View style={styles.submitButtonWrapper}>
                        <TouchableOpacity 
                            style={styles.submitButton} 
                            onPress={handleSubmit}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.submitButtonText}>SUBMIT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}