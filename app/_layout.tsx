import '../global.css';
import 'expo-dev-client';
import '@bacons/text-decoder/install';
import 'react-native-get-random-values';
import { PortalHost } from '@rn-primitives/portal';
import { NDKCacheAdapterSqlite } from '@nostr-dev-kit/ndk-mobile';
import { Stack } from 'expo-router';

import { NDKProvider } from '@nostr-dev-kit/ndk-mobile';

export default function RootLayout() {
    return (
        <NDKProvider explicitRelayUrls={['wss://f7z.io', 'wss://relay.primal.net']} cacheAdapter={new NDKCacheAdapterSqlite('olas')}>
            <PortalHost />
            <Stack>
                <Stack.Screen name="index" options={{ headerShown: true }} />
            </Stack>
        </NDKProvider>
    );
}
