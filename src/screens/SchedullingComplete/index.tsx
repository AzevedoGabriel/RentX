import React from 'react';
import {useWindowDimensions} from 'react-native';

import LogoSvg from '../../assets/logo_backgorund_gray.svg';
import DoneSvg from '../../assets/done.svg';

import {
   Container,
   Content,
   Title,
   Message,
} from './styles';

export function SchedullingComplete(){
    const { width } = useWindowDimensions();
    return (
        <Container>
            <LogoSvg 
                width={width}
            />

            <Content>
                <DoneSvg width={80} height={80} />
                <Title>Carro Alugado!</Title>

                <Message>
                    Agora você só precisa ir {'\n'}
                    até a concessionária da RENTX {'\n'}
                    pegar o seu automóvel.
                </Message>
            </Content>

        </Container>
    );
}