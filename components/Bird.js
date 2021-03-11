import React from 'react';
import { View } from 'react-native';

const Bird = ({ birdBottom, birdLeft }) => {
    const birdWidth = 68
    const birdHeight = 54
    return (
        <View style={{
            position: 'absolute',
            backgroundColor: 'green',
            width: birdWidth,
            height: birdHeight,

            borderRadius: 30,
            left: birdLeft - (birdWidth / 2),
            bottom: birdBottom - (birdHeight / 2),
        }} />
    )
}
export default Bird