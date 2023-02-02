# Helios Grizzlys Tally Light
> A camera tally lights project capable of listening/fetching tally data from multiple sources or video switchers and arbitrating whether an end device is considered to be in Preview or Program. Supports many different switcher types and protocols as well as many types of tally output. 

## Installation
Installation instructions can be found [here](https://josephdadams.github.io/TallyArbiter/docs/installation/desktop-app).

## Documentation
All documentation can be found [here](https://josephdadams.github.io/TallyArbiter/docs/intro).

## Contributing
Contributions are always welcome. Here's a quick guide on how to setup your local development environment:
1. Install [`Node.js`](https://nodejs.org/en/). You need at least version `14.17`.
1. Make sure you have `npm@7`. This can be checked by running `npm -v`. If your version of `npm` is too old, update it using `npm i -g npm@7` 
1. Clone this repository (or your fork): `git clone https://github.com/josephdadams/TallyArbiter`
1. Run `npm install` in the project's root folder
1. Start the main server with `npm start`
1. Make any code changes desired
1. Submit your work as a pull request

### UI
The UI lives in the `UI` folder and is written using Angular.

If you want to make changes to the UI, you need to do the following:
1. Navigate to the `UI` directory with `cd UI`
1. Install its dependencies with `npm install`
1. Start the local UI development server by running `npm start`.
1. Open a browser and navigate to `http://localhost:4200`. 

When you make changes to the source code, the page in your browser will automatically reload. 

The socket&#46;io / REST API requests the UI makes are automatically proxied to `http://localhost:4455`. That's the reason why the main server (see above) needs to be running.

Running `npm install` in the project's root folder (not in the UI directory) the UI is built automatically. As the UI's bundled dist files are excluded from the git repository in the `.gitignore` file, this is needed to ensure users which install TallyArbiter from source also have bundled UI dist. This dist is also served by the main server using `express.static()`.

### Desktop App
The Desktop App is made with Electron. The main file is called [`main.js`](./main.js) (not to be confused with the [`index.js`](./index.js), which is the server's entrypoint.)

The Electron App can be started with `npm run desktop`. It will always show the generated UI dist, so in order to see changes made to the UI in the desktop app, you need to build the UI (see above).

The installer can be generated by running `npm run build-desktop`.

## Maintainers

Releasing a new version of Tally Arbiter:
1. Edit `package.json` and `package-lock.json` and update the version tag to the new version number
2. Open the TallyArbiter repository in Git
3. Run `git tag <new version tag>`
4. Run `git push --tags`
5. Wait for the GitHub build actions to complete
6. Open the releases page and to the the tags area
7. Open the new version and update the description with the added features and patched bugs
8. Press the publish button to publish the new version of TallyAbiter

## License
Tally Arbiter was written by Joseph Adams and is distributed under the MIT License.

It is not sold, authorized, or associated with any other company or product.

To [report a bug](https://github.com/josephdadams/TallyArbiter/issues/new?assignees=JTF4&labels=bug&template=bug.yaml&title=%5BBug%5D%3A+) or open a [feature request](https://github.com/josephdadams/TallyArbiter/issues/new?assignees=JTF4&labels=feature&template=feature.yaml&title=%5BFeature+Request%5D%3A+), please go to our [issues](https://github.com/josephdadams/TallyArbiter/issues/new/choose) page.
If you would like to see more of @josephdadams's projects or send a word of encouragement his way, please visit [techministry.blog](https://techministry.blog/).

