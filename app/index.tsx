import { ScrollView, Text, View } from 'react-native';
import { NDKKind, useSubscribe } from '@nostr-dev-kit/ndk-mobile';
import { useMemo } from 'react';

export default function App() {
    const filters = useMemo(
        () => [
            {
                kinds: [1],
                authors: ['fa984bd7dbb282f07e16e7ae87b26a2a7b9b90b7246a44771f0cf5ae58018f52'],
            },
        ],
        []
    );
    const { events } = useSubscribe({ filters });

    return (
        <ScrollView style={{ flex: 1 }}>
            {events.map((e) => (
                <View style={{ padding: 10 }} key={e.id}>
                    <Text>{e.content}</Text>
                </View>
            ))}
        </ScrollView>
    );
}
