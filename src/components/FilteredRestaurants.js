import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './FilteredRestaurants.css'
import StarRateIcon from '@material-ui/icons/StarRate';




const useStyles = makeStyles({
    root: {
      maxWidth: 340,
      minWidth: 280,
      minHeight: 160,
    },
    media: {
      height: 160,
    },
    
  });


  export default function Restaurant({ name, image, rating}) {
    const classes = useStyles();
    const ratingColor = (rating) => {
        if(rating > 4.0) {
            return "#48C479"
        }
        else if(rating > 3.0 && rating <= 4.0) {
            return "#1167B1"
        }
        else if(rating > 2.0 && rating <= 3.0) {
            return "#EF9B0F"
        } else {
            return "#F7121A"
        }
    }
  
    return ( 
        <div className="restaurant">     
            <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={image}
            />
            <div className="restaurant__details">
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h6">
                    {name}
                    </Typography>
                    <Typography variant="caption" color="textSecondary" component="p">
                        <b className="restaurant__price">₹199/-</b> per head • 10 dishes
                    </Typography>
                    <div className="restaurant__rating">
                        <div className="rating" style={{backgroundColor: ratingColor(rating)}}>
                            <StarRateIcon style={{color: "white", fontSize: "medium"}}/>
                            <p>{rating.toFixed(1)}</p>
                        </div>
                        <Typography variant="caption" color="textSecondary" component="p">
                                213 ratings
                        </Typography>
                    </div>
                </CardContent>
            </div>
        </Card>
      </div>
    );
  }  
