import { makeStyles } from "@material-ui/core";

export default makeStyles({
    media: {
        height: 250,
    },
    border: {
        border: 'solid',
      },
      fullHeightCard: {
        height: '100%',
      },
      card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderWidth: '6px',
        borderStyle: 'inset',
        borderColor: 'coral',
        width: '95%',
        height: '98%',
      },
      activeCard: {
        borderBottom: '10px solid #22289a',
      },
      grid: {
        display: 'flex',
      },
      details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px',
      },
      title: {
        padding: '0 5px',
        fontSize: '18px',
        fontWeight: 'bold',
      },
      cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
      },
});