import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import AppText from '../AppText';
import colors from '../../config/colors';
import defaultStyles from '../../config/styles';

const ListItem = ({ title, subTitle, image, IconComponent, onPress, renderRightActions, showChevrons }) => {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={colors.light}
                onPress={onPress}
            >
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.detailsContainer}>
                        <AppText numberOfLines={1} style={styles.title}>{title}</AppText>
                        {subTitle && <AppText numberOfLines={2} style={styles.subTitle}>{subTitle}</AppText>}
                    </View>

                    {showChevrons &&
                        <View>
                            <MaterialCommunityIcons
                                name='chevron-right'
                                size={25}
                                color={defaultStyles.colors.medium}
                            />
                        </View>
                    }
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 15,
        backgroundColor: colors.white
    },
    detailsContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    subTitle: {
        color: colors.medium
    },
    title: {
        fontWeight: '500'
    }
});

export default ListItem;