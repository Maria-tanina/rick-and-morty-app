import {FC} from "react";
import {IHero} from "../../services/heroesApi";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Grid} from "@mui/material";

interface IHeroProps {
    hero: IHero
}

export const Hero: FC<IHeroProps> = ({
    hero
}) => {
    return(
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 180 }}
                    image={hero.image}
                    title={hero.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {hero.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {hero.status}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}