#!/usr/bin/env bash

apt update
if ! hash jq 2>/dev/null; then
  apt install -y jq vim curl wget zip
fi

#install php
apt install -y lsb-release ca-certificates apt-transport-https software-properties-common gnupg2
echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/sury-php.list
wget -qO - https://packages.sury.org/php/apt.gpg | apt-key add -

apt update
apt install -y php8.1 \
php8.1-curl \
php8.1-bcmath \
php8.1-gd \
php8.1-mbstring \
php8.1-xml \
php8.1-zip

# install nvm and node
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
nvm install node --lts
npm install --global yarn
yarn global add typescript

# setting up paths
nvmYarn=$(which yarn)
ln -s "$nvmYarn" /usr/local/bin/yarn

nvmNode=$(which node)
ln -s "$nvmNode" /usr/local/bin/node


# install composer
wget -q -O /tmp/composer-setup.php https://getcomposer.org/installer
php /tmp/composer-setup.php --install-dir=/usr/local/bin --filename=composer
rm /tmp/composer-setup.php




