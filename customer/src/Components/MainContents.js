import React from "react";
import { Route, Switch } from "react-router-dom";
import Menu from "./Pages/Menu";
import Deals from "./Pages/Deals";
import Gallery from "./Pages/Gallery";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Cart from "./Pages/Cart";
import Orders from "./Pages/Orders";
import EditPassword from "./Pages/EditPassword";
import EditAccount from "./Pages/EditAccount";
import Forgot from "./Pages/Forgot";

import Classes from "../Resource/className";

const MainContents = (props) => {
    return (
        <div className={Classes.MainContents}>
            <Switch>
                <Route exact path="/">
                    <Menu orders={props.orders} addOrders={props.addOrders}/>
                </Route>
                <Route path="/deals">
                    <Deals orders={props.orders} addOrders={props.addOrders}/>
                </Route>
                <Route path="/gallery">
                    <Gallery />
                </Route>
                <Route exact path="/about">
                    <AboutUs />
                </Route>
                <Route path="/contact">
                    <ContactUs />
                </Route>
                <Route path="/login">
                    <Login login={props.login}/>
                </Route>
                <Route exact path="/signup">
                    <SignUp login={props.login}/>
                </Route>
                <Route path="/cart">
                    <Cart info={props.info} orders={props.orders} addOrders={props.addOrders} deleteOrder={props.deleteOrder} changeQuantity={props.changeQuantity} resetOrders={props.resetOrders}/>
                </Route>
                <Route path="/orders">
                    <Orders addOrders={props.addOrders}/>
                </Route>
                <Route path="/editpassword" info={props.info}>
                    <EditPassword />
                </Route>
                <Route path="/editaccount">
                    <EditAccount info={props.info} setInfo={props.setInfo}/>
                </Route>
                <Route path="/forgot">
                    <Forgot/>
                </Route>
            </Switch>
        </div>
    )
}

export default MainContents;
