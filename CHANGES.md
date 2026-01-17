# Counting Button - Branch Changes

## Overview
This branch implements functionality for a counting button application where:
- Clicking the button increments a counter
- The button color changes based on the count value (even, odd, prime, magic numbers (the magic numbers never really happen))
- An info message displays the count and describes the number type

---

## Component Structure Changes

### 1. **State Management** 
- Added `useState` hook to manage the `count` state (initialized to 0)
- Added `useEffect` hook to log count whenever it changes

### 2.  **Button Color Logic**
- Created `getButtonColor(count)` function that:
  - Uses `determineButtonColor()` utility function to identify number type
  - Returns appropriate color: `'purple'` (odd non-prime), `'blue'` (even), `'teal'` (prime), `'green'` (default)
  - This color is passed as a prop to the `DynamicButton` component

### 3.  **Click Handler**
- Created `handleClick()` function that increments count by 1
- Passed to `DynamicButton` component via `onClick` prop

### 4.  **Component Integration**
- Imported `InfoMessage` component to App.js to display count information
- Passed `count` prop to `InfoMessage` so it updates when count changes

### 5. **DynamicButton Component** 
#### Props
- Accepts `onClick` handler from parent
- Accepts `color` prop that dynamically sets button background color using CSS custom property `--btn-color`

### 6. **InfoMessage Component** 
#### Message Logic
- Created `getNumberType(count)` function that:
  - Uses `determineNumberType()` utility to identify number type
  - Returns descriptive strings: `'an even'`, `'an odd'`, `'a prime'`, `'a magic'`
  
#### Display
- Renders message: "You clicked the button {count} times. {count} is {numberType} number."
- Message updates reactively whenever count changes

### 7. **InfoMessage Styling** 
- Created dedicated CSS file for component
- Styled text with teal color (`#61dafb`) to match logo styling
- Set `font-size: large` for visibility

---

## Utility Functions Used

### `determineButtonColor(count)` - from `src/utils/doMath.js`
Returns button color based on number properties:
- **'blue'** - Even numbers
- **'purple'** - Odd non-prime numbers
- **'teal'** - Prime numbers
- **'green'** - Default/magic numbers

### `determineNumberType(count)` - from `src/utils/doMath.js`
Returns number type based on mathematical properties:
- **'even'** - Divisible by 2
- **'odd'** - Not divisible by 2 (non-prime)
- **'prime'** - Prime numbers
- **'magic'** - Default category

---
#### CSS Updates (RELIED HEAVILY ON COPILOT FOR HELP HERE)

- **Typography**:
  - Updated font to use Poppins (modern, friendly) as primary with fallbacks
  
- **Enhanced Interactivity**:
  - Added `border-radius: 8px` for rounded corners
  - Added `box-shadow` for depth
  - Added `cursor: pointer` to indicate clickability
  - Added `transition: all 0.3s ease` for smooth animations
  
- **Hover Effect**:
  - `.jagos-button:hover` - Button lifts up slightly (`translateY(-2px)`) with enhanced shadow
  
- **Active State**:
  - `.jagos-button:active` - Button presses down when clicked with reduced shadow

## Global Styling Changes

### App Background (`src/App.css`)
- Added `background-color: #282c34` to `.App` class
- Added `min-height: 100vh` to ensure background covers full viewport
- This creates a dark theme throughout the application

---

## Data Flow Diagram

```
User clicks button
    ↓
handleClick() runs → setCount(count + 1)
    ↓
count state updates
    ↓
┌─────────────────────────────┐
│  App component re-renders   │
└─────────────────────────────┘
    ↓
    ├─→ getButtonColor(count) → DynamicButton (with new color)
    │
    └─→ InfoMessage (with new count) → getNumberType(count) → displays message
```

---

## Key Features Implemented

✅ **Dynamic Button Color** - Changes based on number type (even/odd/prime)  
✅ **Click Counter** - Increments on each button click  
✅ **Message Updates** - Displays count and describes number properties  
✅ **Smooth Interactions** - Hover and active states on button  
✅ **Dark Theme** - Consistent dark background with teal accents  
✅ **Component Organization** - Separated styles into component-specific CSS files  

---

## Files Modified/Created

| File | Change |
|------|--------|
| `src/App.js` | Added useState, useEffect, color logic, click handler |
| `src/components/DynamicButton/dynamicButton.jsx` | Updated to accept color and onClick props |
| `src/components/DynamicButton/dynamicButton.css` | Fixed syntax, added hover/active effects |
| `src/components/InfoMessage/infoMessage.jsx` | Fixed props destructuring, added number type logic |
| `src/components/InfoMessage/infoMessage.css` | Created new file with teal styling |
| `src/App.css` | Added background color to .App |
| `src/components/button/index.js` | Fixed import path for dynamicButton |

