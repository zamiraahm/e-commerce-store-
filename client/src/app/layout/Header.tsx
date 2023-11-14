import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../store/configureStore";
import SignedInMenu from "./SignedInMenu";
import { Avatar } from "@mui/material";




const midLinks=[
    
        {title:'catalog', path:'/catalog'}, 
        {title:'about', path:'/about'},
        {title:'contact', path:'/contact'}

]
const rightLinks=[
    
    {title:'login', path:'/login'},
    {title:'register', path:'/register'}

]


const navStyles={
    
        color:'inherit',
        textDecoration:'none',
        typography:'h6',
        fontFamily: 'Lustria',
        '&:hover':{
            color:'grey.500'
        } ,
        '&.active':{
            color:'text.secondary'
        }   
    
}

interface Props{
    darkMode:boolean;
    handleThemeChange: () =>void;
}
export default function Header({darkMode, handleThemeChange}:Props){
    const{basket} = useAppSelector(state => state.basket);
    const {user} = useAppSelector(state => state.account);
    const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity,0)
    return(
        <AppBar position='static' sx={{backgroundColor: '#345457'}}>
            <Toolbar sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <Box display='flex' alignItems='center'>
                    <Avatar component={NavLink}
                        to="/"
                        src="/images/online-library.png"
                        alt="Bookify Logo"
                        sx={{ width: 30, height: 30, marginRight: 1 }}/>
                <Typography variant='h6' component={NavLink}
                to='/'
                sx={navStyles}>
                    EBook
                </Typography>
                <Switch
                        checked={darkMode}
                        onChange={handleThemeChange}
                        sx={{
                        marginLeft: 1,
                        '& .MuiSwitch-thumb': {
                            color: darkMode ? '#fff' : '#000',
                        },
                        '& .MuiSwitch-track': {
                            backgroundColor: darkMode ? '#000' : '#fff',
                        },
                        }}
                    />
            </Box>
                
                <List sx={{display:'flex'}}>
                    {midLinks.map(({title,path})=>(
                        <ListItem
                        component={NavLink}
                        to={path}
                        key={path}
                        sx={navStyles}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>

                <Box display='flex' alignItems='center'>
                <IconButton  component={Link} to='/basket' size='large' edge='start' color='inherit' sx={{mr:2}}>
                        <Badge badgeContent={itemCount} color='primary' >
                            <ShoppingCart/>
                        </Badge>
                </IconButton> 
                {user ? (
                    <SignedInMenu/>
                ) : (
                    <List sx={{display:'flex'}}>
                    {rightLinks.map(({title,path})=>(
                        <ListItem
                        component={NavLink}
                        to={path}
                        key={path}
                        sx={navStyles}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
                )}      
                </Box>
            </Toolbar>
        </AppBar>
    )
}