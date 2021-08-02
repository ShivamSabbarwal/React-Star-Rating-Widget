import { Container, Card, CardContent, Typography } from "@material-ui/core";

import StarRating from "./components/StarRating";

import "./App.css";

const App = () => {
  return (
    <Container maxWidth="md" className="container">
      <Typography align="left" component="h2" variant="h5">
        Default - (No Rating)
      </Typography>

      <Card className="card marginBottom">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Product #1
          </Typography>
          <Typography variant="h5" component="h2">
            <StarRating />
          </Typography>
        </CardContent>
      </Card>

      <Typography component="h2" variant="h5">
        Default - (With Rating)
      </Typography>
      <div className="cardGrid marginBottom">
        {[...Array(3)].map((_, index) => (
          <Card className="card">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {`Product #${index + 1}`}
              </Typography>
              <Typography variant="h5" component="h2">
                <StarRating value={Math.floor(Math.random() * 5) + 1} />
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>

      <Typography component="h2" variant="h5">
        Extra - Adjustable Number of Stars
      </Typography>
      <Typography color="textSecondary">Example: Range (Min: 3, Max: 12)</Typography>
      <div className="cardGrid">
        {[...Array(3)].map((_, index) => {
          const numStars = Math.floor(Math.random() * 10) + 3;

          return (
            <Card className="card">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {`Product #${index + 1}: ${numStars} Stars Rating`}
                </Typography>
                <Typography variant="h5" component="h2">
                  <StarRating value={Math.floor(Math.random() * numStars) + 1} totalStars={numStars} />
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Container>
  );
};

export default App;
