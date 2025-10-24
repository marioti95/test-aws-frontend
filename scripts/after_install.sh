#!/bin/bash
set -e

echo "Starting AfterInstall phase..."
echo "Starting nginx web server..."
systemctl start nginx
echo "AfterInstall phase completed successfully"
