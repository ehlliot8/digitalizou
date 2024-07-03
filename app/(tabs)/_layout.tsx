import { Link, Tabs } from 'expo-router'
import { Button, useTheme } from 'tamagui'
import { Atom } from '@tamagui/lucide-icons'

export default function TabLayout() {
  const theme = useTheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.red10.val,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Bem-vindo',
        }}
      />
   
    </Tabs>
  )
}
