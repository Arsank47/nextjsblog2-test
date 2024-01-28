---
title: "Installation of Hardware-based Firewall"
subtitle: "Installing pfSense to add an additonal layer of protection to my home network"
# date: "2023-12-22"
date: "19-01-2022"
---

The motivation behind this project stemmed from my Cyber Security degree, when learning about protecting networks and infrastrucuture from cyber-attacks. Of course the average home network is not the same as an enterprise network, however gaining an understanding and setting up a starting point felt like a great project to undertake at the time.

I decided to use Proxmox again to virtualise my pfsense hardware router/firewall, because of the additonal benefits that virtualisation brings such as the ability to provision multiple services/applications under one machine, save on floor space & electricity bills as opposed to having a dedicated machine for each intended service, as this is not feasible at all.

I needed to purchase a whole new server, because my main homeserver will not have the remaining resources and also needs another Ethernet Nic for it to be considered for this project. Therefore, I did some research and decided to purchase some parts and build a second homeserver to act as a hardware firewall, and also be used for other projects in the future.

![images/5RPi-in-action-with-router.png](/images/5RPi-in-action-with-router.png)

ONce I had finished building the system, and installing Proxmox VE onto it, I then also installed pFSense which was a simple task. However the main task was to ensure the Proxmox server was able to see all of the network adapters, in this case I had two Ethernet network adapters, that would operate as the LAN & WAN on the system. This can be understood as one Ethernet cable being responsible from receiving the internet from the ISP, and the other Ethernet cable being responsible from transfering the internet and data to the local network and all connected devices.

This is important, as a device like a firewall must be able to differentiate the input of data from the ISP & the local network otherwise it will not be able to understand where the data is coming from. It needs to be able to control the flow of internal and external packets of data, and this would not be possible with one link.

Once I created the Linux bridge, i was then able to boot up the virtual machine and perform the standard steps of setting up the Proxmox virtual machine, following all the relevant steps in the official documentation. I was then able to load up the pfSense web dashboard and log in using the credentials that I had created doing the installation.

I then decided to checkout the plugins tab, I then noticed that it was possible to install Snort an open-source IDS/IPS. Similarly I was able to install OpenVPN, and create my own VPN that allows me to connect to the network from anywhere, if needed to access any of my VMs at all.


![images/5RPi3-top-down-view.png](/images/5RPi3-top-down-view.png)





![images/5RPi3-Grafana-overview-full.png](/images/5RPi3-Grafana-overview-full.png)



![images/5pirogue-ctl-status.png](/images/5pirogue-ctl-status.png)











 

<small>Sources:
- 1. https://www.snort.org/
- 2. https://www.pfsense.org/
- 3. https://www.proxmox.com/en/proxmox-virtual-environment/overview
  4. https://docs.netgate.com/pfsense/en/latest/recipes/virtualize-proxmox-ve.html
  5. https://openvpn.net/



</small>
