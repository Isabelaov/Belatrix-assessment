import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export const SearchButton = () => {
    return (
        <TouchableOpacity style={ styles.container }>
            <View style={ styles.iconWrapper }>
                <Icon 
                    name="account-search" 
                    size={30} 
                    color="green" 
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        marginRight: 10,
    },
    iconWrapper: {
        padding: 5,
        borderRadius: 8,
    }
});