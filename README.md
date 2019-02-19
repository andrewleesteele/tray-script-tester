# tray-script-tester
Tool to develop/test script steps for the tray.io platform.

### Setup:
1. Download repo.
2. Install Homebrew
```shell
xcode-select --install
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)”
brew doctor
```
3. Install NPM/Node
```shell
brew install node
```
4. Install other dependencies
```shell
npm install mout
npm install lodash 
npm install moment
npm install request
```
### To Run:
1. Open ‘index.js’ and ‘script.js’ in separate text editors. 
2. Paste the literal INPUT from a Script step in the logs into the ‘input’ file.
3. Paste your full Script into the ‘script’ file.
4. Navigate to the tray-script-tester folder in terminal, and type ‘node run.js’. It will execute your code and show you the output that you would expect to see in the Tray builder.

