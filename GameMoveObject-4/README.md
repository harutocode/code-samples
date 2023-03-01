# GameMoveObejct-4

ゲームオブジェクトをマウスの操作で動かすプロブラムコードです。
「GameMoveObejct-3」からマウスで動くように変わりました。
また、Vector2Dクラスにゲームで使えるいくつかのメソッドを追加。

## 実行の仕方

以下を実行（nvmは様々なnode.jsのバージョンを管理する）

Mac OSの場合

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

以下を実行して必要なパッケージをインストール

```
npm install
```

以下を実行して起動

```
npm run dev
```
