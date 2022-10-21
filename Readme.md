# React-ViteJS-Template

Start clean, new React Projects with this template.

## How to start

Prerequisites:

- NodeJS (Version 16 or higher)
- NPM (Version 8 or higher)
- Git

Steps:

1. Clone the repository
2. Run `npm install`
3. Run `npm start`

## Why this template?

Doing all the configurations for eslint, stylelint, typescript & vitejs can be complicated when you *just* want to start a new project right now.

## Contents

### src folder

This folder contains all the source code that will be bundled as final app.

#### src/app

This folder contains the componens related to the Routing (pages with an own URL) including components that usually are only used once.

#### src/assets

Content-Assets will go here. They should be imported via JS/TS and will get chunked (versioned) for distribution. Don't rely on filenames here. If you want to have a static asset, put it into `src/static` folder.

#### src/lib

This folder contains reusable components. If you're familiar with the Atomic Design Concept, then atoms and molecules will go here. They're also candidates for reusablility in an external (component) library for multiple apps/projects.

#### src/helper

This folder contains helper functions (not components & not related to components) needed to build your app.

#### src/static

This folder is your **public folder**. All contents will be copied into `dist/`. Static assets like your favicon or an `robots.txt` should go here.