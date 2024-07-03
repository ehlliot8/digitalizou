import { Camera, ExternalLink } from '@tamagui/lucide-icons'
import { Anchor, Button, Card, H2, Paragraph, XStack, YStack } from 'tamagui';
import { btnCamCapture } from 'app/components/btnCamCapture';
export default function TabOneScreen() {

  
  return (
    <YStack f={1} ai="center" gap="$8" px="$10" pt="$5">
      <H2>Digitalizou</H2>

      <YStack height={'60%'}>
        {/* map para renderizar cada foto no card a baixo */}
        {/* {(

        )} */}
        <Card height={'20%'}>


        </Card>
      </YStack>

      <Button
        size={'$10'}
        icon={Camera}

      />


    </YStack>
  )
}
