#!/bin/bash

source variables.sh
echo "Installing dependencies"

npm install

npm "starting BKBot"

node ./bkbot.js &>> ./log/bkbot.log &
