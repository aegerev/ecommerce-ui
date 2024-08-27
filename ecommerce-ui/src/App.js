import React, { useState } from "react";
import {Navbar, Container, Nav, Badge, Card, Button} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const products = [
    { id: 1, name: "My Best Friend is Ariel", price: 8.16},
    { id: 2, name: "Funko Disney Little Mermaid Ariel Blue Dress Pop Vinyl Figure", price: 14.95},
    { id: 3, name: "Freewrite Smart Typewriter", price: 669.00 },
    { id: 4, name: "JrTrack 3 Smart Watch for Kids by Cosmo", price: 129.99 },
    { id: 5, name: "Fitbit Google Ace LTE", price: 222.00},
    { id: 6, name: "Nokia C3-00 Unlocked Cell Phone", price: 76.00 },
    { id: 7, name: "Mad Money with Jim Cramer - Back to Basics DVD", price: 17.99 },
    { id: 8, name: "Tonies Ariel Audio Play Character from Disney's The Little Mermaid", price: 17.99 },
    { id: 9, name: "Punkt. MP02 4G LTE Minimalist Mobile Phone", price: 229.00 },
    { id: 10, name: "reMarkable Bundle 2 Notetaking Tablet", price: 429.00 },
    { id: 11, name: "ecobee3 Lite Smart Thermostat", price: 129.00 },
    { id: 12, name: "Apple iPad (10th Generation)", price: 122.00 },
];

  return (
    <div>
      <Navbar bg="primary" variant="primary">
         <Container>
          <Navbar.Brand href="#home">E-Commerce UI</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#card"> Cart 
              <Badge variant="light">{cart.length}</Badge>
            </Nav.Link>
          </Nav>
         </Container>
      </Navbar>

      <Container>
        <h2 className="mt-4 mb-4">Products</h2>
        <div className = "row">
        {products.map((product) => (
                        <div key={product.id} className="col-md-4 mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>${product.price}</Card.Text>
                                    <Button
                                        onClick={() => addToCart(product)}
                                        variant="primary"
                                    >
                                        Add to Cart
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
        </div>
      </Container>
    </div>
  );

}



export default App;
