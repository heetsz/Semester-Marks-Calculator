# Credit-Based Marks Calculator

## Overview

The **Credit-Based Marks Calculator** is a React-based web application that calculates a student's total marks using a credit-based evaluation formula. This tool streamlines the process of aggregating marks from different categories (e.g., exams, labs, theory) with specific weights.

## Features
- Input fields for marks in different categories:
  - MSE (30 marks)
  - ISE Lab (50 marks)
  - ISE Theory (20 marks)
  - ESE (50 marks)
- Dynamic calculation of total marks using the formula:
  ```text
  Total Marks = MSE / 2 + (ISE Lab * 20 / 50) + (ISE Theory * 15 / 20) + ESE
