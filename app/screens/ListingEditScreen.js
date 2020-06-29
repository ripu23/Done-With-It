import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from "yup";

import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton, AppFormPicker } from '../components/forms';
import AppFormImagePicker from '../components/forms/AppFormImagePicker';
import useLocation from '../hooks/useLocation';


const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, 'Please select atleast one image.')
});

const categories = [
    { label: 'Furniture', value: 1, backgroundColor: '#fc5c65', icon: 'floor-lamp' },
    { label: 'Clothing', value: 2, backgroundColor: '#2bcbba', icon: 'shoe-heel' },
    { label: 'Camera', value: 3, backgroundColor: '#fed330', icon: 'camera' },
    { label: 'Cars', value: 4, backgroundColor: '#fd9644', icon: 'car' },
    { label: 'Games', value: 5, backgroundColor: '#26de81', icon: 'cards' },
    { label: 'Sports', value: 6, backgroundColor: '#45aaf2', icon: 'basketball' },
    { label: 'Movies & Music', value: 7, backgroundColor: '#4b7bec', icon: 'headphones' }
];

const ListingEditScreen = () => {
    const location = useLocation();

    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{ title: '', price: '', description: '', category: null, images: [] }}
                onSubmit={(values) => console.log(location)}
                validationSchema={validationSchema}
            >
                <AppFormImagePicker
                    name='images'
                />
                <AppFormField
                    maxLength={255}
                    name='title'
                    placeholder='Title'
                />
                <AppFormField
                    keyboardType='numeric'
                    maxLength={8}
                    name='price'
                    placeholder='Price'
                    width={120}
                />
                <AppFormPicker
                    items={categories}
                    name='category'
                    numberOfColumns={3}
                    placeholder='Category'
                    width='50%' />
                <AppFormField
                    maxLength={8}
                    multilin
                    name='description'
                    numberOfLines={3}
                    placeholder='Description'
                />
                <SubmitButton title='Post' />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
});

export default ListingEditScreen;