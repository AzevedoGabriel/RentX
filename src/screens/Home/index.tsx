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
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4VqgSombn1o05qyORuawoOTJVE8nw4K6Nyg&usqp=CAU',
  }

  function handleCarDetails(){
      navigation.navigate('SchedullingDetails')
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