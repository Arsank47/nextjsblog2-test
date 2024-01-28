---
title: "Installation of Hardware-based Firewall"
subtitle: "Installing pfSense to add an additonal layer of protection to my home network"
# date: "2023-12-22"
date: "19-01-2022"
---

The motivation behind this project stemmed from my Cyber Security degree, where I delved into the realm of safeguarding networks and infrastructure against cyber threats. While a home network differs from an enterprise setup, the endeavour aimed to comprehend and establish a foundational point for such security measures.

Opting for Proxmox once again, I virtualised my pfsense hardware router/firewall. Virtualisation presented additional benefits, such as consolidating various services/applications onto a single machine, economising on floor space, and reducing electricity consumption compared to maintaining dedicated machines for each service.

For this venture, I procured components to build a second home server dedicated to acting as a hardware firewall. After assembling the system and installing Proxmox VE, I deployed pFSense, ensuring that Proxmox recognised both network adapters—LAN and WAN. These adapters managed the flow of internet traffic from the ISP to the local network and connected devices, a critical aspect for a firewall to distinguish between external and internal data packets.

![images/4pfSenseProxmoxLinuxBridge.png](/images/4pfSenseProxmoxLinuxBridge.png)

Following the creation of the Linux bridge, I initiated the virtual machine, configured it according to Proxmox guidelines, and accessed the pfSense web dashboard. Exploring the plugins tab, I discovered the option to install Snort, an open-source IDS/IPS, enhancing the security posture.

![images/4pfSenseInstallation.png](/images/4pfSenseInstallation.png)


Additionally, I utilised the OpenVPN plugin, establishing a VPN that allows remote network access for managing VMs from anywhere. This comprehensive integration was followed by meticulous configuration of rules tailored to the network's security requirements. 

![images/4pfSenseSnort.png](/images/4pfSenseSnort.png)

The configured rules aimed at enhancing Snort's ability to detect and respond to potential security threats. Subsequent testing involved simulating a scenario where malicious traffic was generated within the network. Snort promptly identified and flagged the simulated threat, highlighting its efficacy in detecting and responding to security incidents.

In conclusion, this project serves as a testament to the amalgamation of theoretical knowledge garnered from my Cyber Security degree with practical application in fortifying home network security. By opting for Proxmox, the virtualisation of the pfsense hardware router/firewall not only optimised resource utilisation but also streamlined the management of diverse services on a singular, energy-efficient platform. The incorporation of a dedicated home server as a hardware firewall further exemplifies the commitment to robust cybersecurity practices. The successful deployment of pFSense, coupled with the seamless integration of Snort and OpenVPN plugins, underscores the project's effectiveness in bolstering network defences. Through meticulous rule configuration, Snort demonstrated its proficiency in swiftly identifying and responding to potential security threats, validating the comprehensive security posture achieved in this endeavour.

















 

<small>Sources:
- 1. https://www.snort.org/
- 2. https://www.pfsense.org/
- 3. https://www.proxmox.com/en/proxmox-virtual-environment/overview
  4. https://docs.netgate.com/pfsense/en/latest/recipes/virtualize-proxmox-ve.html
  5. https://openvpn.net/



</small>
