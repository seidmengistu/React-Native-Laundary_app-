import React from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, Text, View } from 'react-native';
import { Ionicons, Fontisto } from '@expo/vector-icons';
import styles from './home.style';
import { Welcome } from '../components';
import Carousel from '../components/home/Carousel';
import Headings from '../components/home/Headings';
import ProductRow from '../components/products/ProductRow';

const Home = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24} />
          <Text style={styles.location}> Addis Ababa Ethiopia</Text>
          <View style={{ alignItems: 'flex-end' }}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>8</Text>
            </View>
            <TouchableOpacity>
              <Fontisto name="shopping-bag" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView style={styles.scrollView}>
        <Welcome />
        <Carousel />
        <Headings />
        <ProductRow />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
