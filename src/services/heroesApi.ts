import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export interface IHero {
    id: number;
    name: string;
    status: string;
    image: string;
}

interface IResponseModel {
    "info": {
        "count": number;
        "pages": number;
        "next": string | null;
        "prev": string | null;
    },
    results: IHero[];
}

interface IFiltrationParams {
    page: number;
    gender: string;
    status: string;
}

export const heroesApi = createApi({
    reducerPath: 'heroesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://rickandmortyapi.com/api'
    }),
    endpoints: build => ({
        getHeroes: build.query<IResponseModel, IFiltrationParams>({
            query: ({page = 1, gender, status}) => ({
                url: 'character',
                params: {
                    page,
                    gender,
                    status
                }
            })
        })
    })
})


export const {useGetHeroesQuery} = heroesApi;