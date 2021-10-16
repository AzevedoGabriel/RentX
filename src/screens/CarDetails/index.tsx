import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import {
   Container,
   Header,
   CarImages,
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
        
    </Container>
  );
}