import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Container from '../components/Container';

export default function Settings() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Container>
        <Text>Settings!</Text>
      </Container>
    </ScrollView>
  );
}
