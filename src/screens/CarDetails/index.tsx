import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

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
   About,
} from './styles';

export function CarDetails(){
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

          <About>
            asdsadsadadsadsa
          </About>

        </Content>
        
    </Container>
  );
}
// []