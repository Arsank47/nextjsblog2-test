---
title: "Home Server with Proxmox"
subtitle: "I Repurposed an Old Computer into a Homelab Using Proxmox"
# date: "2023-12-22"
date: "03-11-2020"
---

<!-- As I started my BSc Hons Cyber Security Degree in 2020, I learnt and realised just how important the Linux ecosystem was especially after my Applied Operating Systems module in Year 1. After researching about building a server at home, I uncovered the open-source virtualisation solution known as Proxmox, a type 2 hypervisor that empowers IT enthusiasts to breathe new life into an old computer or laptop open-source virtualisation solution called Proxmox, A type 2 hypervisor allowing IT enthusiasts to use an old computer or laptop to be repurposed into a full on homeserver that can be spin up multiple Virtual Machines on the local network for a variety of different services.

The construction of the homelab  -->

<!-- In the process of turning an extra computer into a home server, I decided to utilise Proxmox as the type 2 hypervisor, with its suite of capabilities, it allowed me to adeptly manage virtual machines (VMs) and containers on this server. 

The spare computer specifications are:
- CPU: i5 2300 (Upgraded to Intel Xeon E3-1275)
- GPU: Palit Geforce 760
- RAM: 2 x 4 GB DDR3 (Upgraded to 4X 8GB DDR3)
- MOBO: INTEL DQ67SW
- PSU: 500W -->

<!-- I implemented Proxmox on a budget-friendly spare computer, amounting to approximately £200. The objective was to establish and manage multiple virtual machines, each designed for specific purposes—ranging from website hosting and backup management to running diverse applications.

This home server configuration has proven to be a prudent and economical solution, providing adaptability for various requirements such as file storage, media streaming, and web hosting. Proxmox's standout feature is its accessible web-based interface, significantly simplifying the oversight of virtual environments. This seamless integration has become a valuable and integral enhancement to my home network, enabling efficient and streamlined management of the entire setup.

I installed Proxmox on a spare computer that cost roughly £200. to run multiple virtual machines, each tailored for distinct purposes—ranging from hosting websites to managing backups and running various applications.

This home server setup proved to be a judicious and cost-effective solution, offering versatility for an array of needs such as file storage, media streaming, and web hosting. Proxmox's distinguishing feature lies in its user-friendly web-based interface, which significantly simplified the administration of virtual environments. This integration seamlessly became a valuable and integral addition to my home network, facilitating efficient and streamlined management of the entire setup. -->

The idea behind this project was to use this opportunity to understand more about networking & the Linux ecosystem.  This hands-on experience allowed me to delve deeper into the intricacies of networking protocols, security measures, and system administration within the Linux environment. 

 As I researched the best way to transform my spare computer into a home server, I discovered Proxmox VE, a type 2 hypervisor.
 This is a comprehensible solution for all IT enthusiasts as it is renowned for its robust capabilities. Proxmox empowers users to efficiently manage and deploy virtual machines (VMs) and containers, making it an ideal choice for various home server applications. Its versatility allows for the creation of VMs tailored to specific purposes, such as hosting websites, managing backups, or running diverse applications. 

 Here are the specifications of the computer:

- CPU: i5 2300 (Upgraded to Intel Xeon E3-1275)
- GPU: Palit Geforce 760
- RAM: 2 x 4 GB DDR3 (Upgraded to 4X 8GB DDR3)
- MOBO: INTEL DQ67SW
- PSU: 500W 

Once I installed the open-source software Proxmox on my £200 spare computer and completed the initial configuration settings, I gained access to the web-based interface. This interface allowed me to execute various tasks, including uploading VM images, deploying VMs with custom vCPU and RAM allocations, and monitoring the current statistics of both the root node and its associated VMs.

![images/1proxmox-dashboard-omitted](/images/1proxmox-dashboard-omitted.png)


I systematically set up several virtual machines, each running on different operating systems, including Ubuntu, Windows, and Debian. The main goal was to fully grasp the ins and outs of deploying and configuring various operating systems within a server environment. 

It was quite simple setting up the virtual machines however learning about the different architectures such as x86 & ARM64 helped me to understand to why certain operating systems that run typically are used for the Raspberry Pi werent compatible with the Proxmox VE. This is a small downside with using this hypervisor however this does not take away anything away from it, as I was able to deploy my VMs with ease.

Setting up the VMs was quite simple, however there was one limitation that was disovered regarding the arhcitecture of OSs that Proxmox at the time can support. While trying to deploy images that are used on Raspberry Pi or Linux OSs using ARM64 even though Proxmox VE does have some experimental support for ARM64, it is not yet fully stable or supported. This means that it is not recommended to use Proxmox VE to run ARM64 VMs in production environments. 


![images/1proxmox-vm-hardware-tab](/images/1proxmox-vm-hardware-tab.png)

Having successfully established my Proxmox home server, I delved into the realm of virtualisation, leveraging Proxmox's capabilities to create a range of dedicated virtual machines for mulitple use cases. 

I started by allocating vCPU & RAM resources to my VMs. Because I had upgraded my CPU from the i5-2300 to a Xeon E3-1275, I was able to get 4 more threads, as it has Hyper-Threading technology, so although it is a quad-core chip, it is able to have double the virtual cores or threads that could be allocated to my VMs. 

I opted to install the Docker engine on my Ubuntu virtual machines. Choosing Ubuntu as the primary operating system for my VMs was a deliberate decision, given its widespread usage and strong support in business server environments.

After configuring the Docker engine, my next step was to install Portainer. Portainer serves as a user-friendly Docker management tool, offering a graphical interface that streamlines the deployment and supervision of containerised applications. This proved invaluable for monitoring the status of installed containers, identifying issues such as online or offline status, and overall enhanced visibility of networks and containers through the dashboard at a specific port.

![images/3Portainer-containeroverview-v2](/images/3Portainer-containeroverview-v2.png)

<small>Sources:
- 1. https://www.proxmox.com/en/proxmox-virtual-environment/overview
- 2. https://www.docker.com/
- 3. https://www.portainer.io/



</small>