import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';

import { Car } from '../../components/Car';

import {
   Container,
   Header,
   TotalCars,
   HeaderContent,
   CarList,
} from './styles';

export function Home(){

  const navigation = useNavigation();

  const carData = {
    brand: 'Audi',
    name: 'RS 5 Couple',
    rent: {
        period: 'Ao Dia',
        price: 120,
    },
    thumbnail: 'https://img2.gratispng.com/20180202/gzw/kisspng-2016-ferrari-488-spider-sports-car-luxury-vehicle-blue-ferrari-488-spider-car-5a740f6e14df79.1923682815175555660855.jpg',
  }

  function handleCarDetails(){
      navigation.navigate('CarDetails')
  }

  return (
    <Container>
        <StatusBar 
          barStyle='light-content'
          backgroundColor="transparent"
          translucent
        />
        <Header>
          <HeaderContent>
            <Logo 
              width={RFValue(108)}
              height={RFValue(12)}
            />
            <TotalCars>
              Total de 12 Carros
            </TotalCars>
          </HeaderContent>
          
        </Header>
        <CarList
          data={[1,2,3,4,5,6,7]}
          keyExtractor={item => String(item)}
          renderItem={({item}) => 
          <Car data={carData} onPress={handleCarDetails} />} 
        />
          
        

    </Container>
  );
}