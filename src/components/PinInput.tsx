import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const PinInput = () => {
  const [pin, setPin] = useState('');
  const maxLength = 6;

  const handleNumberClick = (number: string) => {
    if (pin.length < maxLength) {
      setPin(prev => prev + number);
    }
  };

  const handleDelete = () => {
    setPin(prev => prev.slice(0, -1));
  };

  const handleClose = () => {
    // Handle close action
    console.log('Close PIN input');
  };

  const handleForgotPassword = () => {
    // Handle forgot password action
    console.log('Forgot password clicked');
  };

  const renderPinIndicators = () => {
    return (
      <div className="flex gap-3 justify-center mb-12">
        {Array.from({ length: maxLength }).map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index < pin.length ? 'bg-pin-active' : 'bg-pin-inactive'
            }`}
          />
        ))}
      </div>
    );
  };

  const renderNumberButton = (number: string) => {
    return (
      <Button
        key={number}
        variant="ghost"
        className="w-16 h-16 rounded-full border-2 border-pin-button-border bg-background hover:bg-gray-50 text-pin-text text-2xl font-normal p-0"
        onClick={() => handleNumberClick(number)}
      >
        {number}
      </Button>
    );
  };

  const renderDeleteButton = () => {
    return (
      <Button
        variant="ghost"
        className="w-16 h-16 rounded-full bg-transparent hover:bg-gray-50 border-none p-0 flex items-center justify-center"
        onClick={handleDelete}
      >
        <img 
          src="https://i.showdown.space/e01/delete-icon.svg" 
          alt="Delete" 
          className="w-6 h-6"
        />
      </Button>
    );
  };

  const renderCloseButton = () => {
    return (
      <Button
        variant="ghost"
        className="absolute top-6 right-6 w-8 h-8 p-0 hover:bg-gray-100 rounded-full"
        onClick={handleClose}
      >
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path d="M18 6L6 18" />
          <path d="M6 6l12 12" />
        </svg>
      </Button>
    );
  };

  return (
    <div className="min-h-screen bg-pin-background flex items-center justify-center p-6 relative">
      {renderCloseButton()}
      
      <div className="w-full max-w-sm">
        {/* Title */}
        <h1 className="text-xl text-pin-text text-center mb-8 font-normal">
          กรุณาใส่รหัสผ่าน
        </h1>

        {/* PIN Indicators */}
        {renderPinIndicators()}

        {/* Number Pad */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {/* Row 1: 1, 2, 3 */}
          {['1', '2', '3'].map(renderNumberButton)}
          
          {/* Row 2: 4, 5, 6 */}
          {['4', '5', '6'].map(renderNumberButton)}
          
          {/* Row 3: 7, 8, 9 */}
          {['7', '8', '9'].map(renderNumberButton)}
          
          {/* Row 4: empty, 0, delete */}
          <div></div>
          {renderNumberButton('0')}
          {renderDeleteButton()}
        </div>

        {/* Forgot Password Link */}
        <div className="text-center">
          <button
            onClick={handleForgotPassword}
            className="text-pin-link underline text-base font-normal hover:opacity-80 transition-opacity"
          >
            ลืมรหัสผ่าน
          </button>
        </div>
      </div>
    </div>
  );
};

export default PinInput;