#!/bin/bash

# Build the application
echo "Building the application..."
cd frontend
npm run build

# Go back to root directory
cd ..

# Create a temporary directory for deployment
echo "Preparing for deployment..."
rm -rf deploy
mkdir deploy
cp -r frontend/dist/* deploy/

# Create a simple index.html redirect for GitHub Pages
echo "Creating deployment files..."
cd deploy

# Add .nojekyll file to bypass GitHub Pages Jekyll processing
touch .nojekyll

echo "Deployment files ready in ./deploy directory"
echo "You can now push the contents of ./deploy to the gh-pages branch"
echo ""
echo "To deploy manually:"
echo "1. git checkout -b gh-pages"
echo "2. git add ."
echo "3. git commit -m 'Deploy to GitHub Pages'"
echo "4. git push origin gh-pages"
echo ""
echo "Or use the GitHub Actions workflow for automatic deployment!" 