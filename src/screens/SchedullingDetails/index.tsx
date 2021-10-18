import React from 'react';
import {Feather} from '@expo/vector-icons';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Acessory } from '../../components/Acessory';
import { Button } from '../../components/Button';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

import {
   Container,
   Header,
   CarImages,
   Content,
   Details,
   Description,
   Brand,
   Name,
   Rent,
   Period,
   Price,
   Acessories,
   RentalPeriod,
   CalendarIcon,
   DateInfo,
   DateTitle,
   DateValue,
   RentalPrice,
   RentalPriceLabel,
   RentalPriceDetails,
   RentalPriceQuota,
   RentalPriceTotal,
   Footer
} from './styles';


export function SchedullingDetails(){
  const theme = useTheme();

  const navigation = useNavigation();

  function handleConfirmRental(){
      navigation.navigate('SchedullingComplete');
    }

  return (
    <Container>
        <Header>.
            <BackButton onPress={() => {}} />
        </Header>

        <CarImages>
          <ImageSlider 
            imagesUrl={['https://img2.gratispng.com/20180202/gzw/kisspng-2016-ferrari-488-spider-sports-car-luxury-vehicle-blue-ferrari-488-spider-car-5a740f6e14df79.1923682815175555660855.jpg']}
          />
        </CarImages>

        <Content>
          <Details>
            <Description>
              <Brand>Lamborghini</Brand>
              <Name>Huraca</Name>
            </Description>

            <Rent>
              <Period>Ao dia</Period>
              <Price>R$ 580</Price>
            </Rent>
          </Details>

          <Acessories>
            <Acessory name="380Km/h" icon={speedSvg}/>
            <Acessory name="3.2s" icon={accelerationSvg}/>
            <Acessory name="800 HP" icon={forceSvg}/>
            <Acessory name="Gasolina" icon={gasolineSvg}/>
            <Acessory name="Auto" icon={exchangeSvg}/>
            <Acessory name="2 pessoas" icon={peopleSvg}/>
          </Acessories>

          <RentalPeriod>
            <CalendarIcon>
              <Feather 
                name="calendar"
                size={RFValue(24)}
                color={theme.colors.shape}
              />
            </CalendarIcon>

            <DateInfo>
              <DateTitle>DE</DateTitle>
              <DateValue>25/03/1999</DateValue>
            </DateInfo>

            <Feather 
                name="chevron-right"
                size={RFValue(24)}
                color={theme.colors.text}
            />

            <DateInfo>
              <DateTitle>ATÉ</DateTitle>
              <DateValue>25/03/1999</DateValue>
            </DateInfo>

          </RentalPeriod>

          <RentalPrice>
            <RentalPriceLabel>TOTAL</RentalPriceLabel>
            <RentalPriceDetails>
              <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
              <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
            </RentalPriceDetails>
          </RentalPrice>

        </Content>

        <Footer>
          <Button color={theme.colors.sucess} title="Alugar agora" onPress={handleConfirmRental}/>
        </Footer>
        
    </Container>
  );
}
// []