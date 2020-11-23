import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Restaurant.css'


const useStyles = makeStyles({
    root: {
      maxWidth: 320,
      minHeight: 160,
      position: "relative",
    },
    media: {
      height: 160,
    },
    
  });


  export default function Restaurant({ name, address, image}) {
    const classes = useStyles();
  
    return (      
      <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={image}
          />
          <div className="restaurant__details">
            <CardContent>
                <Typography gutterBottom variant="body1" component="p">
                {name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {address}
                </Typography>
            </CardContent>
            <CardActions>
            <Button size="small" color="secondary">
                <p className="restaurant__orderButton">RE-ORDER</p>
            </Button>
            </CardActions>
        </div>
      </Card>
    );
  }  
