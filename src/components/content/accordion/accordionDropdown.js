import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import { linkResolver } from '../../../utils/linkResolver';
import { RichText } from 'prismic-reactjs';
import { makeStyles } from '@material-ui/core/styles';
import classes from './accordionDropdown.module.css';
import ScrollAnimation from 'react-animate-on-scroll';

const useStyles = makeStyles(() => ({
    heading : {
        padding: '0.1em'
    }
  }));

const AccordionDropdown = props => {

    const styles = useStyles();

    
    return (
            <li role="presentation">
                <ScrollAnimation animateIn={classes.Slide} animateOnce offset="110">
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                                <Typography className={styles.heading}>{props.title}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography>
                                {RichText.render(props.content, linkResolver)} 
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </ScrollAnimation>
            </li>
    )
}

export default AccordionDropdown