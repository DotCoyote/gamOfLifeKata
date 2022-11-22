ENV["LC_ALL"] = "en_US.UTF-8"

Vagrant.configure("2") do |config|
  config.vm.box = "generic/debian10"
  config.ssh.forward_agent = true

  config.vm.synced_folder ".", '/vagrant', disabled:true
  config.vm.synced_folder "./provision", '/provision'
  config.vm.synced_folder ".", '/app'

  config.vm.define "phptestvm" do |phptestvm|
    phptestvm.vm.network "private_network", ip: "192.168.56.10"

    phptestvm.vm.provider "virtualbox" do |v|
      v.cpus = "2"
      v.memory = "1024"
    end

    phptestvm.vm.provision :shell,
      keep_color: true,
      inline: 'cd /provision/ && ./vagrant-up.sh'

  end # config phptestvm

  unless Vagrant.has_plugin?("vagrant-vbguest")
    puts 'Installing vagrant-vbguest Plugin...'
    system('vagrant plugin install vagrant-vbguest')
  end

end # config vagrant
