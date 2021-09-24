import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const myStorage = window.localStorage;

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})`
    display: flex;
    justify-content: end;
`

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})`

margin-right: 20px;
`

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    constructor(props) {
        super();
        this.state = {
            email: null,
            password: null,
            SigninError: null,
            isFetching: null,
        };
    }

    handleLogout = () => {
        myStorage.removeItem("user");
        window.location.href = '/login';
    };

    render() {
        const user = myStorage.getItem("user");
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    Application Name
                </Link>
                <Collapse>
                    <List>
                        {user? (
                        <>
                        <Item>
                            <Link to="/home" className="nav-link">
                                Home
                            </Link>
                        </Item>
                        </>
                        ) : (<p></p>)}
                        <Item>
                            <Link to="/hello-world" className="nav-link">
                                Hello World
                            </Link>
                        </Item>

                        {user?
                            (<Item>
                                <Link to="/" className="nav-link" onClick={this.handleLogout}>
                                    Sign Out
                                </Link>
                            </Item>)
                            :
                            (<Item>
                                <Link to="/login" className="nav-link">
                                    {/* Sign In / Sign Up */}
                                    Login / Register
                                </Link>
                            </Item>)
                        }
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links