import { FlatList, Keyboard, Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import globlaStyles from '../styles/global'
import { useState } from "react";
import FlatButton from "@/shared/FlatButton";
import ReviewForm from "./reviewForm";
import { MaterialIcons } from "@expo/vector-icons";

const Home = ({ navigation, route }) => {

    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
    ])

    const addReview = (values) => {
        setReviews((currentReviews) => {
            return [{...values, key: Math.random.toString()}, ...currentReviews];
        });
        setModalOpen(false)
    }

    const [modalOpen, setModalOpen] = useState(false);

    return (
        <View>
            <FlatButton title='Add review' onPress={() => {
                setModalOpen(true);
            }} />
            <FlatList 
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate({name: 'ReviewDetails', params: {item}})}>
                        <View style={globlaStyles.container}>
                            <Text style={globlaStyles.titleText}>{ item.title }</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons 
                            name='close'
                            size={24} 
                            style={{...styles.modalToggle, ...styles.modalClose}} 
                            onPress={() => setModalOpen(false)} 
                        />
                        <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    modalToggle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    },
    modalContent: {
        flex: 1,
    }
});

export default Home;