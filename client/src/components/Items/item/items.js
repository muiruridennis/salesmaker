
import React  from 'react';
import { CircularProgress, Grid } from '@material-ui/core/';
import { useSelector } from "react-redux";

import Item from "./items/Item";




function Items() {
    const items = useSelector((state) => state.items);
    
    
    

    return (
        !items.length ? <CircularProgress /> : (
            <Grid container  alignitems="stretch" spacing={3}>
                {items.map((item) => (
                    <Grid  key={item._id} item xs={12}  sm={4} md={4}>
                        <Item item={item} />
                    </Grid> 
                ))}

            </Grid>
        )


    );

}

export default Items
