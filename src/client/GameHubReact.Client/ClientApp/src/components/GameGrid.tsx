import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames.ts";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import {GameQuery} from "../App.tsx";

interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({gameQuery}: Props) => {
    const {data, error, isLoading} = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6];

    if (error) return <Text>{error}</Text>

    return (
        <SimpleGrid columns={{
            sm: 1, md: 2, lg: 3, xl: 4
        }} padding={'10px'} spacing={6}>
            {isLoading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton}/>)}
            {data.map(game => (
                <GameCard key={game.id} game={game}></GameCard>
            ))}
        </SimpleGrid>
    )
}

export default GameGrid;