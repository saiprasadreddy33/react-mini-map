# Mini-Map System for Game

## Overview

This project implements a mini-map system in React that overlays on top of a larger game map. The mini-map displays sections of the game map and scrolls dynamically as the user navigates the game environment.

## Features

- **Mini-Map Display**: A circular mini-map overlay (400x400 pixels) that reflects the current view of the larger game map.
- **Dynamic Scrolling**: The mini-map updates in real-time as the player moves around the game map.
- **Player Position Indicator**: A visually distinctive player position marker on the mini-map.

## Requirements

1. **Mini-Map Display**:
   - Circular overlay of 400x400 pixels.
   - Positioned within an HTML DIV on top of the game interface.

2. **Game Map**:
   - Hand-drawn image of 2048x2048 pixels or a snapshot from Google Maps.
   - Divided into 64x64 pixel sections (PNG files).

3. **Functionality**:
   - Display the necessary sections to fill the mini-map with 64x64 pixel tiles.
   - Implement scrolling functionality for the mini-map as the user moves around the game map.
