import { Header } from "../components/header";
import {
  GameField,
  GameInfo,
  GameSymbol,
  GameTitle,
  useGameState,
} from "../components/game";
import { useState } from "react";
import { UiModal } from "../components/uikit/ui-modal";
import { UiButton } from "../components/uikit/ui-button";

export default function HomePage() {
  const [playersCount] = useState(2);
  const {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
    handlePlayerTimeOver,
    winnerSequence,
    winnerSymbol,
  } = useGameState(playersCount);
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle playersCount={playersCount} />

        <GameInfo
          playersCount={playersCount}
          className="mt-4"
          currentMove={currentMove}
          isWinner={!!winnerSymbol}
          onPlayerTimeOver={handlePlayerTimeOver}
        />

        {/*{winnerSymbol && (*/}
        {/*  <div className="mt-4">*/}
        {/*    <GameSymbol symbol={winnerSymbol} />*/}
        {/*  </div>*/}
        {/*)}*/}

        {/*<UiModal*/}
        {/*  width="md"*/}
        {/*  isOpen={winnerSymbol}*/}
        {/*  onClose={() => console.log("close")}*/}
        {/*>*/}
        {/*  <UiModal.Header>Игра завершена</UiModal.Header>*/}

        {/*  <UiModal.Body>*/}
        {/*    <div className="text-sm">*/}
        {/*      Победитель: <span className="text-teal-600">Ussehh</span>*/}
        {/*    </div>*/}
        {/*  </UiModal.Body>*/}

        {/*  <UiModal.Footer>*/}
        {/*    <UiButton size="md" variant="outline">*/}
        {/*      Вернуться*/}
        {/*    </UiButton>*/}

        {/*    <UiButton size="md" variant="primary">*/}
        {/*      Играть снова*/}
        {/*    </UiButton>*/}
        {/*  </UiModal.Footer>*/}
        {/*</UiModal>*/}

        <GameField
          className="mt-6"
          cells={cells}
          currentMove={currentMove}
          nextMove={nextMove}
          handleCellClick={handleCellClick}
          winnerSequence={winnerSequence}
          winnerSymbol={winnerSymbol}
        />
      </main>
    </div>
  );
}
