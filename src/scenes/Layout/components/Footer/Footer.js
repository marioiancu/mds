import React from 'react';
import { Grid, Header, Divider } from 'semantic-ui-react';
import './footer.css';

export const Footer = (props) => {
    return (
        <footer>
            <p>
                <small>
                    Made with passion and dedication.
                </small>
            </p>

            <Divider horizontal>About Us</Divider>

            <Grid columns={3} divided>
                <Grid.Row>
                    <Grid.Column>
                        <Header size="small">
                            <a href="#about" target="_blank" rel="noopener noreferrer">
                                About Us
                            </a>
                        </Header>
                    </Grid.Column>

                    <Grid.Column>
                        <Header size="small">
                            <a href="#services" target="_blank" rel="noopener noreferrer">
                                Our Services
                            </a>
                        </Header>
                    </Grid.Column>

                    <Grid.Column>
                        <Header size="small">
                            <a href="#contact" target="_blank" rel="noopener noreferrer">
                                Contact
                            </a>
                        </Header>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </footer>
    );
}
