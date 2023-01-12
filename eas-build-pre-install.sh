#!/usr/bin/env bash

# set -xeuo pipefail

ROOT_DIR="$(pwd)"
echo "RUN preinstall HOOK"

if ! [ -d "$ROOT_DIR/.git" ]; then
  echo "Initialize git"
  git init
fi

if ! [ -f "$ROOT_DIR/.gitmodules" ]; then
cat << EOF > $ROOT_DIR/.gitmodules
[submodule "app"]
  path = app
  url = git@github.com:bluecollardev/mediashare-source.git
EOF
fi

ls -la $ROOT_DIR/.git

if ! [ -d "$ROOT_DIR/.git/modules" ]; then
  if [ -d "$ROOT_DIR/app" ]; then
    echo "Remove app dir"
    rm -rf $ROOT_DIR/app
  fi
  echo "Create submodule"
  git submodule add git@github.com:bluecollardev/mediashare-source.git $ROOT_DIR/app \
    && cd $ROOT_DIR/app && git checkout feature/v0.2-ui-updates-2 \
    && cd $ROOT_DIR || exit

else
  echo "Re-initialize submodules"
  git submodule update --init --recursive \
   && cd $ROOT_DIR/app && git checkout feature/v0.2-ui-updates-2 \
   && cd $ROOT_DIR || exit
fi
echo "RUN preinstall HOOK COMPLETE"
