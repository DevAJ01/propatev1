#!/bin/bash
# Propate v1 - Setup Script
# Run this after cloning to install dependencies

echo "Setting up Propate v1..."

# Install dependencies
pnpm install

# Add shadcn/ui components (if not already present)
# npx shadcn@latest init
# npx shadcn@latest add button card dialog dropdown-menu input label select tabs tooltip

echo "Setup complete! Run 'pnpm dev' to start the development server."
