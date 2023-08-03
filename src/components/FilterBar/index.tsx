import {FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {FC} from "react";
import {changeActiveFilter, changePage} from "../../features/heroes/heroesSlice";
import {useAppDispatch, useAppSelector} from "../../store";


export const FilterBar: FC = () => {
    const dispatch = useAppDispatch();

    const {gender, status} = useAppSelector(state => state.heroes.activeFilters);

    const handleGenderChange = (e: SelectChangeEvent) => {
        dispatch(changeActiveFilter({
            filterName: "gender",
            value: e.target.value
        }));
        dispatch(changePage(1));
    }

    const handleStatusChange = (e: SelectChangeEvent) => {
        dispatch(changeActiveFilter({
            filterName: "status",
            value: e.target.value
        }));
        dispatch(changePage(1));
    }

    return(
        <Grid container sx={{margin: '0 0 20px'}}>
            <FormControl>
                <InputLabel id="gender-label">Gender</InputLabel>
                <Select
                    labelId="gender-label"
                    label="Gender"
                    value={gender}
                    onChange={handleGenderChange}
                    sx={{width: '150px'}}
                >
                    <MenuItem value=''>All</MenuItem>
                    <MenuItem value='female'>female</MenuItem>
                    <MenuItem value='male'>male</MenuItem>
                    <MenuItem value='genderless'>genderless</MenuItem>
                    <MenuItem value='unknown'>unknown</MenuItem>
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel id="status-label">Status</InputLabel>
                <Select
                    labelId="status-label"
                    label="status"
                    value={status}
                    onChange={handleStatusChange}
                    sx={{width: '150px'}}
                >
                    <MenuItem value=''>All</MenuItem>
                    <MenuItem value='alive'>alive</MenuItem>
                    <MenuItem value='dead'>dead</MenuItem>
                    <MenuItem value='unknown'>unknown</MenuItem>
                </Select>
            </FormControl>
        </Grid>
    )
}