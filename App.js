import { SafeAreaView } from 'react-native-safe-area-context';
import { RootNavigator } from './src/navigation/Root';

export default function App() {
   return (
      <SafeAreaView style={{ flex: 1 }}>
         <RootNavigator />
      </SafeAreaView>
   );
}
