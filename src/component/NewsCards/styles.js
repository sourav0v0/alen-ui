import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
    container: {
        padding: '0 5%',
        width: '100%',
        margin: 0,
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '95%',
        height: '53vh',
        padding: '5%',
        borderRadius: 20,
        color: 'white'
    },
    infoCard: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center'
    }
});

export default styles;