import React, { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { FiChevronLeft, FiChevronRight, FiRefreshCcw } from 'react-icons/fi';
import ReactCardFlip from 'react-card-flip';

export default function FlashcardModal({ isOpen, onClose, flashcardDeck }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    if (!flashcardDeck || flashcardDeck.flashcards.length === 0) return null;

    const flashcards = flashcardDeck.flashcards;
    const totalCards = flashcards.length;

    const flipCard = () => {
        setIsFlipped(!isFlipped);
    }

    const handleNext = () => {
        setIsFlipped(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
    };

    const handlePrev = () => {
        setIsFlipped(false);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="flex flex-col items-center space-y-6">
                {/* Deck Title */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {flashcardDeck.name}
                </h3>

                {/* Flashcard Container */}
                <div className="relative w-80 h-48 perspective">
                    <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
                        {/*Front/ Question side */}
                        <div
                        className=" h-52 flex items-center justify-center bg-white dark:bg-gray-700 rounded-lg shadow-lg p-4"
                        onClick={flipCard}
                        >
                            <p className="text-lg text-gray-900 dark:text-white">
                                {flashcards[currentIndex].question}
                            </p>
                        </div>
                        {/*Back/ Answer side */}
                        <div 
                        className=" h-52 flex items-center justify-center bg-white dark:bg-gray-700 rounded-lg shadow-lg p-4"
                        onClick={flipCard}
                        >
                            <p className="text-lg text-gray-900 dark:text-white">
                                {flashcards[currentIndex].answer}
                            </p>
                        </div>
                    </ReactCardFlip>
                </div>

                {/* Controls */}
                <div className="flex items-center space-x-4">
                    <Button onClick={handlePrev} disabled={totalCards <= 1}>
                        <FiChevronLeft className="w-5 h-5" />
                    </Button>
                    <Button onClick={flipCard} variant="outline">
                        <FiRefreshCcw className="w-5 h-5" />
                    </Button>
                    <Button onClick={handleNext} disabled={totalCards <= 1}>
                        <FiChevronRight className="w-5 h-5" />
                    </Button>
                </div>

                {/* Card Counter */}
                <p className="text-sm text-gray-500">
                    Card {currentIndex + 1} of {totalCards}
                </p>
            </div>
        </Modal>
    );
}