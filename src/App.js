import logo from './logo.png';
import './App.css';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import WorkIcon from '@material-ui/icons/Work';
import ExploreRoundedIcon from '@material-ui/icons/ExploreRounded';
import VpnKeyRoundedIcon from '@material-ui/icons/VpnKeyRounded';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import WifiRoundedIcon from '@material-ui/icons/WifiRounded';
import LocalParkingRoundedIcon from '@material-ui/icons/LocalParkingRounded';
import LocalMallRoundedIcon from '@material-ui/icons/LocalMallRounded';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import {Component} from "react";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo}/>
                </header>
                <div className="row">
                    <h2 className="center white-text flat-text"> How it works</h2>
                    <div className="col s12 m6 l6 center-align">
                        <div className="card">
                            <div className="card-content">
                                <i className="material-icons large">flight_land</i>
                                <h5>Check-In</h5>
                                <List>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <ExploreRoundedIcon/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Address" secondary="2004 lodestar drive mammoth lakes"/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <VpnKeyRoundedIcon/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Key"
                                                      secondary="There is a lock box in front of front door."/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <WifiRoundedIcon/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Wifi"
                                                      secondary="You can find wifi user and pass in the ceramic bowl in the living room"/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <LocalMallRoundedIcon/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Loading Zone"
                                                      secondary="There is a loading zone in front of the condo, you can use it to unload ur car. "/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <LocalParkingRoundedIcon/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Parking" secondary="Parking located under the building, use the code to park in the dedicated area. "/>
                                    </ListItem>
                                </List>
                            </div>
                        </div>

                    </div>
                    <div className="col s12 m6 l6 center-align">
                        <div className="card">
                            <div className="card-content">
                                <i className="material-icons large">flight_takeoff</i>
                                <h5>Check-Out</h5>
                                <List>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <WorkIcon/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            secondary="Check under the bed for any belongings you might have left behind"/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <WorkIcon/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText secondary="Turn off all the lights and the AC."/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <WorkIcon/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText secondary="Please strip the bed and put it in washing machine."/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <WorkIcon/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText secondary="Make sure all the windows are shut."/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <WorkIcon/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText secondary="Put all the dishes in the dishwasher."/>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <WorkIcon/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText secondary="Put all trash in trash area in the garage."/>
                                    </ListItem>
                                </List>
                                <Divider/>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default App;
