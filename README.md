# Palindrome Checker

## Overview

Welcome to the Palindrome Checker project! This application is designed to check if a given word or phrase is a palindrome. A palindrome is a word or sentence that reads the same backward as forward, ignoring punctuation, case, and spacing.

This project was built as part of the FreeCodeCamp curriculum. It features a clean and interactive user interface where users can input their text, click a button to check, and see the result displayed.

## Features

- **Input Field:** Users can enter any text in the input field.
- **Check Button:** Clicking the "Check" button will evaluate whether the input text is a palindrome.
- **Result Display:** Displays whether the input text is a palindrome or not.
- **Keyboard Interaction:** The "Check" button can also be triggered using the Enter key.

## User Stories

1. **Input and Button Elements:** 
   - An input field with the ID `text-input` for entering text.
   - A button with the ID `check-btn` to initiate the palindrome check.
   - A result display area with the ID `result` to show the outcome.

2. **Functionality:**
   - If the input field is empty, clicking the button will trigger an alert asking the user to input a value.
   - If the input is a palindrome (e.g., "A", "eye", "_eye", "race car", etc.), the result will state that it is a palindrome.
   - If the input is not a palindrome (e.g., "not a palindrome", "nope", "almostomla", etc.), the result will state that it is not a palindrome.

3. **Special Cases:**
   - Handles complex palindromes and phrases while ignoring punctuation, spaces, and case sensitivity.
   - Examples: "A man, a plan, a canal. Panama", "never odd or even", "My age is 0, 0 si ega ym."

## How to Use

1. **Enter Text:** Type your text into the input field.
2. **Check:** Click the "Check" button or press Enter.
3. **View Result:** The result will display below, indicating if the text is a palindrome.

## Design and Implementation

- **HTML**: Structure of the input field, button, and result display.
- **CSS**: Styling to ensure a sophisticated and user-friendly interface.
- **JavaScript**: Logic to check if the input text is a palindrome by:
  - Removing non-alphanumeric characters.
  - Converting the text to lowercase.
  - Comparing the processed text with its reversed version.

## Example

- **Input:** `A man, a plan, a canal. Panama`
- **Output:** `A man, a plan, a canal. Panama is a palindrome`
