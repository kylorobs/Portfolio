import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import { Colors } from '../../../../constants/colors';

const useStyles = makeStyles(() => ({
    chip: {
        margin: '0.5em',
        backgroundColor: Colors.dark,
        padding: '1em',
        // borderColor: Colors.primary,
        fontSize: '18px',
        color: 'white'
    },
  }));

const ChipText = props => {
    const styles = useStyles();
    return  <Chip className={styles.chip} variant='outlined' label={props.label} /> 

}

export default ChipText;