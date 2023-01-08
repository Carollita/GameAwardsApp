import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {VotesScreen} from '../screens/VotesScreen'
import {WinnerScreen} from '../screens/WinnerScreen'

import {MaterialCommunityIcons} from '@expo/vector-icons'

const {Screen, Navigator} = createBottomTabNavigator()

export function StackRoutes() {
    return(
        <Navigator  screenOptions={({route}) => ({
            headerShown: false,
            tabBarStyle: {
              height: 70,
              paddingHorizontal: 2,
              paddingTop: 0,
              backgroundColor: 'rgba(34,36,40,1)',
              position: 'absolute',
              borderTopWidth: 0,
            },
          })}>
            <Screen name='Votes' component={VotesScreen}  options={{
          tabBarLabel: 'Vote',
          tabBarActiveTintColor:'#fff',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons 
              name="cursor-default-click" 
              color="#5D3FD3" 
              size={size} 
            />
          ),
        }}></Screen>
            <Screen name='Winner' component={WinnerScreen}         options={{
          tabBarLabel: 'Winner',
          tabBarActiveTintColor:'#fff',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons 
              name="trophy" 
              color="#5D3FD3"
              size={size} 
            />
          ),
        }}></Screen>
        </Navigator>
    );
}