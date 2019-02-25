import React, { Component } from 'react'
import {
    View, Text, Alert, StyleSheet
} from 'react-native'
import { connect } from 'react-redux';
/* import { mapStatetoProps } from './Accountcontainer' */



class Calallcontainer extends Component {


    keepbalance = {
        balance: 0
    }

    onPressButton() {
        Alert.alert('You balance is ฿')
    }

    sumall = (payment, saving, income) => {
        const pay = parseInt(payment)
        const save = parseInt(saving)
        const inc = parseInt(income)
        if ((pay >= 0) && (save >= 0)) {
            save1 = -Math.abs(save)
            pay1 = -Math.abs(pay)

            if (pay1 <= 0 || save1 <= 0) {
                const balance = save1 + pay1 + parseInt(this.keepbalance.balance)
                return this.keepbalance.balance = balance + inc

            } else {
                return this.keepbalance.balance + '---ERROR!!---'
            }
        }

    }

    componentWillMount() {

        this.keepbalance.balance = this.sumall(this.props.payment || 0, this.props.saving || 0, this.props.income || 0)
    }

    render() {
        return (
            <View style={styles.card}>
                <Text style={styles.text}>
                    {this.keepbalance.balance} ฿
                    {console.log(this.keepbalance.balance)}
                </Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    card: {
        paddingLeft: 31,
    },
    text: {
        paddingTop: 5,
        paddingBottom: 5,
        fontSize: 20,
    }
})
const mapStateToProps = (state) => {
    return {

        payment: state.payment,
        saving: state.saving,
        income: state.income,
    }
}
export default connect(mapStateToProps)(Calallcontainer)

