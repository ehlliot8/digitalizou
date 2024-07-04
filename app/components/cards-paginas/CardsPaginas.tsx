
import { TextoCapturado } from "db/database";
import { Card, Paragraph, YStack } from "tamagui";

interface ICardsPaginaProps {
    textosCapturados: TextoCapturado[]
}

export default function CardsPagina({ textosCapturados }: ICardsPaginaProps) {
    return (

        <YStack>
            {textosCapturados.map((texto, index) => (
                <YStack key={index}>

                    <Card>
                        <Paragraph>
                            {texto.conteudo}
                        </Paragraph>
                    </Card>
                </YStack>
            ))}

        </YStack>


    )
}