
import { Button, Paragraph, YStack } from 'tamagui';
import { useEffect, useState } from 'react';
import { getTextosCapturados, setupDatabase, setupDatabaseTextoCapturado, TextoCapturado } from 'db/database';
import { useFocusEffect } from 'expo-router';
import React from 'react';
import HeaderIndex from 'app/components/header-Index.tsx/HeaderIndex';
import CardsPagina from 'app/components/cards-paginas/CardsPaginas';
import BtnCamCapture from 'app/components/btn-cam-capture/BtnCamCapture';


export default function TabOneScreen() {

  const [texoCapturado, setTextoCapturado] = useState<TextoCapturado[]>([])
  
  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        await setupDatabase();
        await setupDatabaseTextoCapturado();
      })()
    }, [])
  );


  useEffect(() => {
    const handleTexto = async () => {
      const result = await getTextosCapturados();
      console.log(result);
      setTextoCapturado(result);
    }
    handleTexto();
  }, [])
  return (
    <YStack f={1} ai="center" gap="$8" px="$10" pt="$5">
      <HeaderIndex />
      <CardsPagina textosCapturados={texoCapturado} />
      <BtnCamCapture />

    </YStack>
  )
}
