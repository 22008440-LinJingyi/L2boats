import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const Boats = ({title,des, icon_name, poster})=> {
    return (
        <View >
            <View style={{ flexDirection: 'row'}}>
                <Icon name={icon_name} size={20} color="#808080"/>
                <Text style={{ fontSize: 20, fontWeight: 'bold',color:'grey' }}>
                    {title}
                </Text>
            </View>

            <Text style={{ color: 'grey'}}>
                {des}
            </Text>
            <Image source={poster} style={{ width: 400, height: 300 }} />
        </View>
    );
};


const Boat = ()=> {
    return (
        <ScrollView >
            <View>
                <Text>
                    GetABoat-For Sale
                </Text>
                <Boats title={"Sea Ray 500 Sundancer"} des={"Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."} icon_name="sailboat" poster={require ('../img/sea_ray.jpg')}/>
                <Boats title={"Four Winns Horizon 180"} des={"A sporty look and refined details truly set the Horizon 180 above all others."} icon_name="sailboat" poster={require ('../img/four_winns.jpg')}/>
                <Boats title={"Flipper 640 ST"} des={"A modern take on the classic, traditional hardtop and perfect for a family picnic."} icon_name="sailboat" poster={require ('../img/flipper.jpg')}/>
                <Boats title={"Princess V48"} des={"There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."} icon_name="sailboat" poster={require ('../img/princess.jpg')}/>
                <Boats title={"Bayliner 175 Bowrider"} des={"Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."} icon_name="sailboat" poster={require ('../img/bayliner.jpg')}/>
                <Boats title={"Fairline Targa 47"} des={"Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."} icon_name="sailboat" poster={require ('../img/fairline.jpg')}/>
            </View>
        </ScrollView>
    );
};
export default Boat;
