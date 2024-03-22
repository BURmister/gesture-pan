import { SafeAreaView } from 'react-native-safe-area-context';
import { RootNavigator } from './src/navigation/Root';
import { View } from 'react-native';

export default function App() {
   return (
      <View style={{ position: 'relative', flex: 1 }}>
         <RootNavigator />
      </View>
   );
}
