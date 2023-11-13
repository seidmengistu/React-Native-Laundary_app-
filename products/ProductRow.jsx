import { FlatList, Text, View } from 'react-native'
import React from 'react'
import styles from './produtcRow.style'
import { SIZES } from '../constants'
import ProductCardView from './ProductCardView'

const ProductRow = () => {
    const products=[1,2,3,4,5,6,7,8,9,10,11]
  return (
    <View style={{marginTop:SIZES.small}}>
        <FlatList
    data={products}
    renderItem={({item})=><ProductCardView/>}
    horizontal
    contentContainerStyle={{columnGap:SIZES.medium}}
    
    
    />
    </View>
    
  )
}

export default ProductRow

