import React from 'react';
import {AppWrapContainer} from './app-wrap.styles';

export default function AppWrap(props) {
    return <AppWrapContainer>{props.children}</AppWrapContainer>
}