import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import clsx from 'clsx';
import {Link} from 'react-router-dom';
import {Grid, Paper, IconButton, Button} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Icon from '@material-ui/core/Icon';

import {useStyles} from '../styles';
import {db} from '../firebase';

function StoreItem() {
  const {sid} = useParams();
  const [store, setStore] = useState('');

  // useEffect =>runs a piece of code base on specific condition
  useEffect(() => {
    db.collection('stores')
      .doc(sid)
      .get()
      .then(doc => {
        setStore({...doc.data(), id: sid});
      })
      .catch(error => {
        console.log('Error getting document:', error);
      });
  }, []);

  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
            <h2>Store Name: {store?.name}</h2>
            <h3>Store Description: {store?.description}</h3>
            <Link to={`/stores/${sid}/create-category`}>
              <Button
                variant='contained'
                color='primary'
                className={classes.button}
              >
                Add Category
              </Button>
            </Link>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <h3>No. of Categories 12</h3>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default StoreItem;
