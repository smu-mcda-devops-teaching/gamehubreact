import {Game} from "../hooks/useGames";
import {Card, CardBody, HStack, Heading, Image} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList.tsx";
import CriticScore from "./CriticScore.tsx";
import getCroppedImageUrl from "../services/image-url.ts";
import GameCardContainer from "./GameCardContainer.tsx";

interface Props {
    game: Game;
}

const GameCard = ({game}: Props) => {
    return (
        <GameCardContainer>
            <Card>
                <Image src={getCroppedImageUrl(game.background_image)}></Image>
                <CardBody>
                    <Heading fontSize={'2xl'}>{game.name}</Heading>
                    <HStack justifyContent={'space-between'}>
                        <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
                        <CriticScore score={game.metacritic} />
                    </HStack>
                </CardBody>
            </Card>
        </GameCardContainer>
    );
}

export default GameCard;