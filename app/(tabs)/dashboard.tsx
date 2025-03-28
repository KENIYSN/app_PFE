// app/dashboard.tsx
import { View, Text } from 'react-native';
import { Theme } from './theme';

export default function Dashboard() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ 
        fontSize: Theme.fontSizes.xxl,
        fontFamily: Theme.fonts.bold,
        color: Theme.colors.primary
      }}>
        Bienvenue sur le Dashboard
      </Text>
    </View>
  );
}