import React from 'react'

const Routes = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Store} />
                    <Route path="/item-description" component={ItemDescription} />
                    <Route path="/my-tickets" component={MyTickets} />
                    <Route path="/profile" component={Profile} />
                </Switch>
            </div>
        </Router>
    )
}

export default Routes