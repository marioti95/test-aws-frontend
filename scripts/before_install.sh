#!/bin/bash
set -e

echo "Starting BeforeInstall phase..."
echo "Stopping nginx web server..."
systemctl stop nginx || true
echo "BeforeInstall phase completed successfully"
