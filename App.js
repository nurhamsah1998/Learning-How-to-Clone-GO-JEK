import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  ScrollView,
  Alert,
} from 'react-native';
import React, {Component} from 'react';

function App() {
  return (
    <View style={{flex: 1, justifyContent: 'space-between'}}>
      <ScrollView>
        <View
          style={{
            backgroundColor: 'white',
            flex: 1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 15,
              paddingTop: 15,
            }}>
            <View
              style={{
                position: 'relative',
                flex: 1,
                justifyContent: 'center',
              }}>
              <Image
                style={{position: 'absolute', left: 12, zIndex: 2}}
                source={require('./icon/search.png')}
              />
              <TextInput
                placeholder="What do you want to eat?"
                style={{
                  backgroundColor: 'white',
                  borderWidth: 1,
                  borderRadius: 25,
                  borderColor: '#E8E8E8',
                  height: 40,
                  paddingLeft: 45,
                  paddingRight: 20,
                  fontSize: 13,
                }}
              />
            </View>
            <View
              style={{
                width: 35,
                alignItems: 'flex-end',
                marginLeft: 18,
                justifyContent: 'center',
              }}>
              <Image source={require('./icon/promo.png')} />
            </View>
          </View>
          {/* header start */}

          <View
            style={{
              marginHorizontal: 15,
              marginTop: 20,
              backgroundColor: '#2C5FB8',
              borderRadius: 4,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#2C5FB8',
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4,
                padding: 14,
              }}>
              <Image source={require('./icon/gopay.png')} />
              <Text style={{color: 'white', fontSize: 17, fontWeight: 'bold'}}>
                Rp500.000.000
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                paddingTop: 20,
                paddingBottom: 14,
                backgroundColor: '#2F65BD',
                borderBottomRightRadius: 4,
                borderBottomLeftRadius: 4,
              }}>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image source={require('./icon/pay.png')} />
                <Text
                  style={{
                    color: 'white',
                    fontSize: 13,
                    marginTop: 15,
                    fontWeight: 'bold',
                  }}>
                  Pay
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                }}>
                <Image source={require('./icon/nearby.png')} />
                <Text
                  style={{
                    color: 'white',
                    fontSize: 13,
                    marginTop: 15,
                    fontWeight: 'bold',
                  }}>
                  Nearby
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                }}>
                <Image source={require('./icon/topup.png')} />
                <Text
                  style={{
                    color: 'white',
                    fontSize: 13,
                    marginTop: 15,
                    fontWeight: 'bold',
                  }}>
                  Topup
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                }}>
                <Image source={require('./icon/more.png')} />
                <Text
                  style={{
                    color: 'white',
                    fontSize: 13,
                    marginTop: 15,
                    fontWeight: 'bold',
                  }}>
                  More
                </Text>
              </View>
            </View>
          </View>
          {/* header end */}

          {/* menu icon start */}
          <View style={{marginHorizontal: 15, marginTop: 20}}>
            <View style={{width: '100%', padding: 20}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <View
                    style={{
                      width: 58,
                      height: 58,
                      borderRadius: 18,
                      borderWidth: 1,
                      borderColor: '#e7e7e7',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image source={require('./icon/go-send.png')} />
                  </View>
                  <Text
                    style={{
                      textAlign: 'center',
                      marginTop: 8,
                      fontSize: 13,
                      fontWeight: 'bold',
                    }}>
                    GO-SEND
                  </Text>
                </View>
                <View>
                  <View
                    style={{
                      width: 58,
                      height: 58,
                      borderRadius: 18,
                      borderWidth: 1,
                      borderColor: '#e7e7e7',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image source={require('./icon/go-ride.png')} />
                  </View>
                  <Text
                    style={{
                      marginTop: 8,
                      textAlign: 'center',
                      fontSize: 13,
                      fontWeight: 'bold',
                    }}>
                    GO-RIDE
                  </Text>
                </View>
                <View>
                  <View
                    style={{
                      width: 58,
                      height: 58,
                      borderRadius: 18,
                      borderWidth: 1,
                      borderColor: '#e7e7e7',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image source={require('./icon/go-pulsa.png')} />
                  </View>
                  <Text
                    style={{
                      marginTop: 8,
                      textAlign: 'center',
                      fontSize: 13,
                      fontWeight: 'bold',
                    }}>
                    GO-PULSA
                  </Text>
                </View>
                <View>
                  <View
                    style={{
                      width: 58,
                      height: 58,
                      borderRadius: 18,
                      borderWidth: 1,
                      borderColor: '#e7e7e7',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image source={require('./icon/go-more.png')} />
                  </View>
                  <Text
                    style={{
                      marginTop: 8,
                      textAlign: 'center',
                      fontSize: 13,
                      fontWeight: 'bold',
                    }}>
                    GO-MORE
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 20,
                  justifyContent: 'space-between',
                }}>
                <View>
                  <View
                    style={{
                      width: 58,
                      height: 58,
                      borderRadius: 18,
                      borderWidth: 1,
                      borderColor: '#e7e7e7',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image source={require('./icon/go-food.png')} />
                  </View>
                  <Text
                    style={{
                      marginTop: 8,
                      textAlign: 'center',
                      fontSize: 13,
                      fontWeight: 'bold',
                    }}>
                    GO-FOOD
                  </Text>
                </View>
                <View>
                  <View
                    style={{
                      width: 58,
                      height: 58,
                      borderRadius: 18,
                      borderWidth: 1,
                      borderColor: '#e7e7e7',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image source={require('./icon/go-deals.png')} />
                  </View>
                  <Text
                    style={{
                      marginTop: 8,
                      textAlign: 'center',
                      fontSize: 13,
                      fontWeight: 'bold',
                    }}>
                    GO-DEALS
                  </Text>
                </View>
                <View>
                  <View
                    style={{
                      width: 58,
                      height: 58,
                      borderRadius: 18,
                      borderWidth: 1,
                      borderColor: '#e7e7e7',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image source={require('./icon/go-car.png')} />
                  </View>
                  <Text
                    style={{
                      marginTop: 8,
                      textAlign: 'center',
                      fontSize: 13,
                      fontWeight: 'bold',
                    }}>
                    GO-CAR
                  </Text>
                </View>
                <View>
                  <View
                    style={{
                      width: 58,
                      height: 58,
                      borderRadius: 18,
                      borderWidth: 1,
                      borderColor: '#e7e7e7',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image source={require('./icon/go-bluebird.png')} />
                  </View>
                  <Text
                    style={{
                      marginTop: 8,
                      textAlign: 'center',
                      fontSize: 13,
                      fontWeight: 'bold',
                    }}>
                    BLU BIRD
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{marginHorizontal: 15, marginTop: 20}}>
            <View style={{width: '100%', padding: 20}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <View
                    style={{
                      width: 58,
                      height: 58,
                      borderRadius: 18,
                      borderWidth: 1,
                      borderColor: '#e7e7e7',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image source={require('./icon/go-send.png')} />
                  </View>
                  <Text
                    style={{
                      textAlign: 'center',
                      marginTop: 8,
                      fontSize: 13,
                      fontWeight: 'bold',
                    }}>
                    GO-SEND
                  </Text>
                </View>
                <View>
                  <View
                    style={{
                      width: 58,
                      height: 58,
                      borderRadius: 18,
                      borderWidth: 1,
                      borderColor: '#e7e7e7',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image source={require('./icon/go-ride.png')} />
                  </View>
                  <Text
                    style={{
                      marginTop: 8,
                      textAlign: 'center',
                      fontSize: 13,
                      fontWeight: 'bold',
                    }}>
                    GO-RIDE
                  </Text>
                </View>
                <View>
                  <View
                    style={{
                      width: 58,
                      height: 58,
                      borderRadius: 18,
                      borderWidth: 1,
                      borderColor: '#e7e7e7',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image source={require('./icon/go-pulsa.png')} />
                  </View>
                  <Text
                    style={{
                      marginTop: 8,
                      textAlign: 'center',
                      fontSize: 13,
                      fontWeight: 'bold',
                    }}>
                    GO-PULSA
                  </Text>
                </View>
                <View>
                  <View
                    style={{
                      width: 58,
                      height: 58,
                      borderRadius: 18,
                      borderWidth: 1,
                      borderColor: '#e7e7e7',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image source={require('./icon/go-more.png')} />
                  </View>
                  <Text
                    style={{
                      marginTop: 8,
                      textAlign: 'center',
                      fontSize: 13,
                      fontWeight: 'bold',
                    }}>
                    GO-MORE
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 20,
                  justifyContent: 'space-between',
                }}>
                <View>
                  <View
                    style={{
                      width: 58,
                      height: 58,
                      borderRadius: 18,
                      borderWidth: 1,
                      borderColor: '#e7e7e7',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image source={require('./icon/go-food.png')} />
                  </View>
                  <Text
                    style={{
                      marginTop: 8,
                      textAlign: 'center',
                      fontSize: 13,
                      fontWeight: 'bold',
                    }}>
                    GO-FOOD
                  </Text>
                </View>
                <View>
                  <View
                    style={{
                      width: 58,
                      height: 58,
                      borderRadius: 18,
                      borderWidth: 1,
                      borderColor: '#e7e7e7',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image source={require('./icon/go-deals.png')} />
                  </View>
                  <Text
                    style={{
                      marginTop: 8,
                      textAlign: 'center',
                      fontSize: 13,
                      fontWeight: 'bold',
                    }}>
                    GO-DEALS
                  </Text>
                </View>
                <View>
                  <View
                    style={{
                      width: 58,
                      height: 58,
                      borderRadius: 18,
                      borderWidth: 1,
                      borderColor: '#e7e7e7',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image source={require('./icon/go-car.png')} />
                  </View>
                  <Text
                    style={{
                      marginTop: 8,
                      textAlign: 'center',
                      fontSize: 13,
                      fontWeight: 'bold',
                    }}>
                    GO-CAR
                  </Text>
                </View>
                <View>
                  <View
                    style={{
                      width: 58,
                      height: 58,
                      borderRadius: 18,
                      borderWidth: 1,
                      borderColor: '#e7e7e7',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Image source={require('./icon/go-bluebird.png')} />
                  </View>
                  <Text
                    style={{
                      marginTop: 8,
                      textAlign: 'center',
                      fontSize: 13,
                      fontWeight: 'bold',
                    }}>
                    BLU BIRD
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/* menu icon end */}
        </View>
      </ScrollView>
      <View
        style={{
          height: 56,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View>
            <Image
              style={{fontSize: 10, marginTop: 3}}
              source={require('./icon/home-active.png')}
            />
          </View>
          <Text style={{color: '#43AB4A', fontSize: 10, marginTop: 3}}>
            Home
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View>
            <Image
              style={{height: 26, width: 26}}
              source={require('./icon/order.png')}
            />
          </View>
          <Text style={{fontSize: 10, marginTop: 3}}>Orders</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View>
            <Image
              style={{fontSize: 10, marginTop: 3}}
              source={require('./icon/help.png')}
            />
          </View>
          <Text style={{fontSize: 10, marginTop: 3}}>Help</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View>
            <Image
              style={{fontSize: 10, marginTop: 3}}
              source={require('./icon/inbox.png')}
            />
          </View>
          <Text style={{fontSize: 10, marginTop: 3}}>Inbox</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View>
            <Image
              style={{fontSize: 10, marginTop: 3}}
              source={require('./icon/account.png')}
            />
          </View>
          <Text style={{fontSize: 10, marginTop: 3}}>Account</Text>
        </View>
      </View>
    </View>
  );
}

export default App;
