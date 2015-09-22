#!/bin/bash

source variables.sh

echo "Installing dependencies..."
npm install

echo "Building"
npm run build

echo "starting BKBot"
npm run start &>> ./log/bkbot.log &
