import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function Result(props) {
    const { name, salary, deductions, total, errorMessage } = props;
    return (
        <View style={styles.content}>
            {total &&
                (
                    <View style={styles.boxResult}>
                        <Text style={styles.title}>Resumen</Text>
                        <Text style={styles.subTitle}>{name}</Text>
                        <DataResult title="Salario base:" value={`${salary} $`} />
                        <Text style={styles.title}>Deducciones</Text>
                        <DataResult title="ISSS (-3%):" value={`${deductions.isss} $`} />
                        <DataResult title="AFP (-4%):" value={`${deductions.afp} $`} />
                        <DataResult title="Renta (-5%):" value={`${deductions.rent} $`} />
                        <DataResult title="Salario neto:" value={`${total} $`} customStyle={{fontWeight: 'bold', fontSize: 17}}/>
                    </View>
                )
            }
            <View>
                <Text style={styles.error}>{errorMessage}</Text>
            </View>
        </View>
    );
}
function DataResult(props) {
    const { title, value, customStyle} = props;
    return (
        <View style={styles.value}>
            <Text style={customStyle}>{title}</Text>
            <Text style={customStyle}>{value}</Text>
        </View>);
}
const styles = StyleSheet.create({
    content: {
        marginHorizontal: 40,
    },
    boxResult: {
        padding: 30,
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subTitle: {
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    value: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    error: {
        textAlign: 'center',
        color: '#f00',
        fontWeight: 'bold',
        fontSize: 20,
    },
});