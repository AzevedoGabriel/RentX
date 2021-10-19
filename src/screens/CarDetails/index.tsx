import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Acessory } from '../../components/Acessory';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
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
   AboutWrapper,
   About,
   Acessories,
   Footer
} from './styles';

export function CarDetails(){
  const navigation = useNavigation();

  function handleConfirmRental(){
      navigation.navigate('Scheduling');
  }

  return (
    <Container>
        <Header>.
            <BackButton onPress={() => {}} />
        </Header>

        <CarImages>
          <ImageSlider 
            imagesUrl={['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4VqgSombn1o05qyORuawoOTJVE8nw4K6Nyg&usqp=CAU']}
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
          

          <AboutWrapper>
            <About>asdsadsadadsadsa ajnsad j jasof asf aipjf ajfapf ajfisj fjaf async function 
            adsjdsanda asdjuasudhashd auosuhduahsdha auohsduah  
            </About>
          </AboutWrapper>

        </Content>

        <Footer>
          <Button title="Escolher período do alugel" onPress={handleConfirmRental}/>
        </Footer>
        
    </Container>
  );
}
// []