import { Formik } from "formik";
import { StyleSheet, Text, TextInput, View } from "react-native";
import * as yup from 'yup';
import FlatButton from "@/shared/FlatButton";

const ReviewForm = ({ addReview }) => {

    const reviewValidation = yup.object({
        title: yup.string()
            .required()
            .min(4),
        body: yup.string()
            .required()
            .min(10),
        rating: yup.string()
            .required()
            .test('is-num-1-5', 'Rating should be a number between 1 and 5', (val) => {
                return parseInt(val) > 0 && parseInt(val) < 6;
            })
    });

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{title: '', body: '', rating: ''}}
                validationSchema={reviewValidation}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    addReview(values);
                }}
            >
                {props => (
                    <View>
                        <TextInput 
                            style={styles.input}
                            placeholder={"Title"}
                            onChangeText={props.handleChange('title')}
                            onBlur={props.handleBlur('title')}
                            value={props.values.title}
                        />
                        <Text style={styles.errorMessage}>{ props.touched.title && props.errors.title }</Text>
                        
                        <TextInput 
                            style={styles.input}
                            multiline
                            placeholder={"Body"}
                            onChangeText={props.handleChange('body')}
                            onBlur={props.handleBlur('body')}
                            value={props.values.body}
                        />
                        <Text style={styles.errorMessage}>{ props.touched.body && props.errors.body }</Text>
                        
                        <TextInput 
                            style={styles.input}
                            placeholder={"Rating"}
                            onChangeText={props.handleChange('rating')}
                            onBlur={props.handleBlur('rating')}
                            value={props.values.rating}
                            keyboardType="decimal-pad"
                        />
                        <Text style={styles.errorMessage}>{ props.touched.rating && props.errors.rating }</Text>

                        <FlatButton title='Submit' onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        marginHorizontal: 20
    },
    input: {
        marginHorizontal: 10,
        paddingVertical: 6,
        borderBottomColor: '#444',
        borderBottomWidth: 1
    },
    errorMessage: {
        marginBottom: 10,
        marginTop: 6,
        marginHorizontal: 10,
        color: 'red',
        fontFamily: 'Montserrat',
        fontSize: 12
    }
})
 
export default ReviewForm;