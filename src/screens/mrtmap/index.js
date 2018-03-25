import React, { Component } from "react";
import { Image, ScrollView, Dimensions } from "react-native";
import PhotoView from 'react-native-photo-view';
import {
  Container,
  Header,
  Left,
  Button,
  Body,
  Title,
  Icon,
  Right,
  Content,
  ActionSheet,
  Text,
  View
} from "native-base";

const map = require("../../../assets/singapore-mrt-map.png");
var {height, width} = Dimensions.get('window');

class MRTMap extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: "#fff" }}>
          <Header>
            <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.navigate("DrawerOpen")}
              >
                <Icon name="ios-menu" />
              </Button>
            </Left>
            <Body>
              <Title>MRT Map</Title>
            </Body>
            <Right />
          </Header>

          <Content>
            <View style={{
              backgroundColor: '#ffffff',
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1 }}>
              <PhotoView
                source={map}
                minimumZoomScale={1.0}
                maximumZoomScale={4.0}
                backgroundColor={'rgb(255, 255, 255)'}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                onLoad={() => console.log("Image loaded!")}
                style={{
                  backgroundColor: '#ffffff',
                  width: width,
                  height: height - 60,
                  justifyContent: 'center',
                  alignItems: 'center' }} />
              </View>
          </Content>
      </Container>
    );
  }
}

export default MRTMap;
