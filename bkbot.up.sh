#!/bin/bash

source variables.sh

node ./bkbot.js &>> ./log/bkbot.log &
