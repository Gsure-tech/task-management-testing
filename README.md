# Task Management Testing

## Overview
This repository contains the automated and performance testing scripts for the Task Management application.

## Project Structure
- `cypress/` - Cypress test scripts for automation
- `performance/` - K6 load testing scripts

## How to Run Tests

### 1. Run Cypress Tests
```sh
cd task-management-testing
npx cypress open

### 2. Run K6 Performance Task
```sh
cd performance
k6 run performance_test.js



