# GameBase

ゲーム開発するのに、
最低限必要なプログラムコードです。

## 環境構築

### 1. 必要なソフトウェアのインストール

以下を実行（nvmは様々なnode.jsのバージョンを管理する）

```zsh
brew install nvm
```

~/.zshrc に以下を書き込む

```zsh
export NVM_DIR="$HOME/.nvm"
[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && . "/opt/homebrew/opt/nvm/nvm.sh"  # This loads nvm
[ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && . "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion
```

以下を実行してNode.jsをインストール

```
nvm install v19.6.0
# 指定したバージョンをdefaultにします。
nvm alias default v19.6.0
```

### 2. パッケージのインストール

以下を実行（package.jsonに記載されたパッケージをインストール）

```
npm install
```

## 起動方法

```
npm run dev
```
