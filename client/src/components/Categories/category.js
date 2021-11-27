import React, { useState, useEffect }from 'react';
import { Typography, Grid, Paper, TextField, Button } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import ChipInput from 'material-ui-chip-input';
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link, useLocation } from "react-router-dom";

import useStyles from "./styles";
import { getItemsBySearch } from '../../Actions/items';

function useQuery() {
    return new URLSearchParams(useLocation().search);
};
function Category() {
    const [search, setSearch] = useState("");
    const [items, setItems] = useState([]);
    const classes= useStyles();
    const history= useHistory();
    const dispatch= useDispatch();
    

    const searchItem = () => {
        if (search.trim()) {
             dispatch(getItemsBySearch({search}));
            // history.push(`/item/search?searchQuery=${search || "none"}`);

        } else {
            history.push("./")
        }
    };

    const handleAddChip = (item) => setItems([...items, item]);
    const handleDeleteChip = (chipDelete) => setItems(items.filter((item) => item !== chipDelete));

    const query = useQuery();
    const page = query.get("page") || 1;
    const searchQuery = query.get("searchQuery")
    return (
        <Paper className={classes.searchBar}>
            <Grid  container spacing={1} margin={2}>
                <Grid item>
                <TextField className={classes.textSearch} value={search} label="search" variant="filled" type="search" onChange={(e) => setSearch(e.target.value)} />
            <ChipInput
                // style={{ margin: '10px 0' }}
                value={items}
                onAdd={(chip) => handleAddChip(chip)}
                onDelete={(chip) => handleDeleteChip(chip)}
                label="Search Tags"
                variant="outlined"
              />
            <Button onClick={searchItem} className={classes.search}
             ><SearchIcon  variant="filled" /></Button>
                </Grid>
                {/* <Grid item xs={3}>
                    <div>
                        <Typography variant="h6">computer Accessories</Typography>

                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div>
                        <Typography variant="h6">Electronics</Typography>

                    </div>

                </Grid>
                <Grid item xs={3}>
                    <div>
                        <Typography variant="h6">Vehicles</Typography>

                    </div>

                </Grid>
                <Grid item xs={3}>
                    <div>
                        <Typography variant="h6">Furnitures</Typography>

                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div>
                        <Typography variant="h6">vegetables</Typography>

                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div>
                        <Typography variant="h6">Food Stuffs</Typography>

                    </div>
                </Grid> */}
            </Grid>

        </Paper>


    )
}

export default Category
