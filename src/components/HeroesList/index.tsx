import {useGetHeroesQuery} from "../../services/heroesApi";
import {Hero} from "../Hero";
import {Alert, CircularProgress, Container, Grid, Pagination} from "@mui/material";
import {ChangeEvent} from "react";
import {useAppDispatch, useAppSelector} from "../../store";
import {FilterBar} from "../FilterBar";
import {changePage} from "../../features/heroes/heroesSlice";


export const HeroesList = () => {
    const dispatch = useAppDispatch();

    const page = useAppSelector(state => state.heroes.page);

    const {gender, status} = useAppSelector(state => state.heroes.activeFilters);

    const {data, isLoading, isError, isFetching} =  useGetHeroesQuery(
        {page,
            gender,
            status
        }
        );

    const totalPages = data?.info.count;

    const handlePageChange = (e: ChangeEvent<unknown>, value: number) => {
        dispatch(changePage(value));
    };

    const spinner = isLoading || isFetching ? <CircularProgress size={80} sx={{margin: '150px auto'}} /> : null;

    const error = isError ? <Alert severity="error">This is an error!</Alert> : null;

    const posts = !isLoading && !isFetching && !isError ?
        data?.results.map(hero => <Hero hero={hero} key={hero.id}/>)
        : null;

    return(
        <section style={{padding: '30px 0'}}>
            <Container sx={{maxWidth: '1030px', padding: '0 15px'}}>
                <FilterBar/>
                <Grid container rowSpacing={2} columnSpacing={2}>
                    {spinner}
                    {error}
                    {posts}
                </Grid>
                {posts ?
                    <Pagination
                        variant="outlined"
                        color="secondary"
                        count={totalPages}
                        page={page}
                        onChange={handlePageChange}
                        disabled={isFetching}
                        sx={{padding: '20px 0'}}
                    />
                    : null
                }
            </Container>
        </section>
    )
}