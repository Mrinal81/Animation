import React, { useState, useEffect } from 'react'
import firstImage from './assets/firstImage.png'
import secondImage from './assets/secondImage.jpg'


const Animation = () => {

    
  return (
    <div className='container flex justify-center items-center w-full h-[99.9vh]'>
        <div className='flex w-full h-[88vh] px-8'>
        <div className="left w-[60%] flex justify-center items-center">
            <img src={secondImage} alt='content-img' 
            className="image-transition h-[90%] w-[90%] mix-blend-multiply"/>
        </div>
        <div className="right w-[40%] overflow-y-scroll relative">
        <div className='firstPart' id='firstPart'>
            <div className='absolute w-1.5 rounded-full bg-[#9747FF] h-[84vh]'></div>
            <div className='px-8'>
                <div className='bg-[#f5f5f5] p-4 rounded-lg'>
                    <h2 className='font-semibold text-xl w-96'>What is the <span className='text-[#9747FF]'>DeepDefend exposure management platform</span></h2>
                    <p className='pt-6'>The Skybox platform supports each stage of your enterprise continuous exposure management program to map the attack surface and contextualize with data, assess and prioritize vulnerabilities, and combat the threat through final remediation. Integrated attack surface management, vulnerability management, and security policy management solutions make it easy to manage exposures and maximize the effectiveness of your security team.</p>
                </div>
                <div className='mt-12'>
                <h2 className='font-semibold text-xl'>The DeepDefend Platform drives exposure management programs</h2>
                    <p className='pt-6'>With Skybox, you create consistent, enterprise-wide exposure management programs that continuously map your attack surface, contextualize the results, assess and prioritize the threats, and automate remediations to combat them. The power of our platform is built on the aggregated security, policy, and infrastructure data collected and aggregated from your infrastructure and cloud environments. With Skybox you will achieve greater insight, make smarter decisions, build business resiliency, and maximize your valuable technical resources on what matters most to your organization.</p>
                </div>
            </div>
        </div>

        <div className="secondPart mt-24" id='secondPart'>
            <div className='absolute w-1.5 rounded-full bg-[#f5f5f5] h-[58vh]'/>
            <div className='px-8'>
                <div className='flex gap-4 items-center'>
                    <div className='w-6 h-6 bg-[#00477b] rounded-full'></div>
                <h1 className='text-2xl font-bold'>Solutions</h1>
                </div>
                <div className='mt-12'>
                    <h2 className='font-semibold text-xl'>Attack surface visibility and management</h2>
                    <p className='pt-6'>The Skybox platform meticulously curates a robust network model and inventories your assets, networks, clouds, and users to manage cyber risk across your organization hybrid attack surface.</p>
                    <p className='pt-6'>Through advanced techniques like attack path analysis and simulation, we detect, prioritize, and combat internet-accessible threats. We illuminate potential exploit routes, scrutinizing firewall and network configurations to identify vulnerabilities.</p>
                    <p className='pt-6'>The result is strategic visualization and detailed reports of your hybrid attack surface, empowering your organization to proactively monitor, track changes, and swiftly respond to emerging threats.</p>
                </div>
            </div>
        </div>

        <div className="thirdPart mt-24" id='thirdPart'>
            <div className='absolute w-1.5 rounded-full bg-[#f5f5f5] h-[50vh]'/>
            <div className='px-8'>
            <div>
                    <h2 className='font-semibold text-xl'>Vulnerability management</h2>
                    <p className='pt-6'>Skybox leverages an array of 3rd party threat intelligence sources, and our own Skybox Threat Intelligence, to enrich your attack surface map and provide a holistic view of your vulnerability and threat exposure. Our multi-factor risk assessment and prioritization considers severity, importance, exploitability, and network exposure, enabling you to focus resources on vulnerabilities that represent the most risk to your business.</p>
                    <p className='pt-6'>Beyond prioritization, Skybox offers proactive, automated remediation suggestions and controls for each vulnerability. We facilitate streamlined responses through ITSM system integration, network segmentation recommendations, and automated firewall adjustments. Even without immediate patching, Skybox Vulnerability Control provides effective risk mitigation alternatives.</p>    
                </div>
            </div>
        </div>


        <div className="fourthPart mt-24" id='fourthPart'>
            <div className='absolute w-1.5 rounded-full bg-[#f5f5f5] h-[50vh]'/>
            <div className='px-8'>
            <div>
                    <h2 className='font-semibold text-xl'>Security policy management</h2>
                    <p className='pt-6'>Gain deep insights into your network, analyzing configurations, paths, connectivity, and access. Skybox Network Assurance ensures meticulous adherence to proper network zoning, bridging any gaps that may exist between your official network segmentation policy and the actual implementation within your hybrid network environment.</p>
                    <p className='pt-6'>Skybox Firewall Assurance optimizes performance by identifying and eliminating shadow or redundant firewall rules and managing numerous firewalls through a centralized interface. Skybox Change Manager automates firewall changes, with risk assessments conducted before provisioning new rules. Easily recertify firewall rules and generate reports vital for compliance audits. Harness the power of efficient network management, bolstering your cybersecurity while maintaining compliance.</p>
                </div>
            </div>
        </div>

        <div className="fifthPart mt-24" id='fifthPart'>
            <div className='absolute w-1.5 rounded-full bg-[#f5f5f5] h-[64vh]'/>
            <div className='px-8'>
                <div className='flex gap-4 items-center'>
                    <div className='w-6 h-6 bg-[#7a2982] rounded-full'></div>
                <h1 className='text-2xl font-bold'>Skybox Dynamic Security Model</h1>
                </div>
                <div className='mt-12'>
                    <h2 className='font-semibold text-xl'>Exposure Management starts with a robust model</h2>
                    <p className='pt-6'>Skybox’s dynamic security model provides a 360-degree hybrid attack surface map, built on a comprehensive understanding of firewall and network security policy, and overlayed with threat intelligence and risk data for enhanced cybersecurity and automated remediation. The model integrates asset information, vulnerability and threat data, network and security controls, and insights into applications and users for a panoramic view of your entire attack surface.</p>
                    <p className='pt-6'>Use the model to analyze potential attack paths, fine-tune security policies, and prioritize your defenses. Insights on vulnerability severity, asset importance, and exploitability gleaned from Skybox Threat Intelligence enable prioritized risk management. Continuously updated, the model delivers actionable remediations and automated controls to fortify your security.</p>
                    
                </div>
            </div>
        </div>



        <div className="sixthPart mt-24">
            <div className='absolute w-1.5 rounded-full bg-[#f5f5f5] h-[76vh]'/>
            <div className='px-8'>
                <div className='flex gap-4'>
                    <div className='w-6 h-6 mt-2 bg-[#008cc1] rounded-full'></div>
                <h1 className='text-2xl font-bold'>Threat Intelligence & Prioritized Exposure</h1>
                </div>
                <div className='mt-12'>
                    <h2 className='font-semibold text-xl'>Exposure Management starts with a robust model</h2>
                    <p className='pt-6'>Skybox aggregates 35+ intelligence feeds into our Threat Intelligence Service, including vulnerability scanners, vendor advisories, IPS signature updates, public databases such as NIST NVD, exploitability notifications and expert advisories, including MITRE CVE, CISA, CERT and ICS CERT.</p>
                    <p className='pt-6'>Assess and prioritize exposures based on not only CVE severity, but also the importance of the asset to the business, evidence of exploitability in the wild, and exposure of the asset to potential compromise across the hybrid network.</p>
                </div>
            </div>
            <div className='px-8 mt-16'>
                <div className='flex gap-4 items-center'>
                    <div className='w-6 h-6 bg-[#d9e146] rounded-full'></div>
                <h1 className='text-2xl font-semibold'>Attack surface map</h1>
                </div>
                <div className='mt-2'>
                    <p className='pt-4'>You cannot protect what you cannot see. For a complete picture of your organization exposure, you need a detailed attack surface map showing all the assets, networks, clouds, applications, users — and the routes and attack paths between them.</p>
                </div>
            </div>
        </div>


        <div className="seventhPart mt-24">
            <div className='absolute w-1.5 rounded-full bg-[#f5f5f5] h-[45vh]'/>
            <div className='px-8'>
                <div className='flex gap-4 items-center'>
                    <div className='w-6 h-6 bg-[#54ab49] rounded-full'></div>
                <h1 className='text-2xl font-bold'>Firewall & network policies</h1>
                </div>
                <div className='mt-4'>
                    
                    <p className='pt-6'>Some of the most critical exposures and risks that an organization faces are not caused by vulnerabilities. They are a function of</p>
                    <p className='pt-6'>A detailed insight into the underlying infrastructure, network, and security policy, enables you to understand how the network is segmented and zoned and analyze firewall configuration and rule bases for potential security gaps.</p>
                    <p className='pt-6'>Simplify policy management, control large numbers of firewalls from multiple vendors from a single interfaces, assess firewall change requests, and automate changes that reduce exposure.</p>
                </div>
            </div>
        </div>


        <div className="eightPart mt-24">
            <div className='absolute w-1.5 rounded-full bg-[#f5f5f5] h-[82vh]'/>
            <div className='px-8'>
                <div className='flex gap-4'>
                    <div className='w-6 h-6 mt-2 bg-[#3fbdac] rounded-full'></div>
                <h1 className='text-2xl font-bold'>150+ vendor integration</h1>
                </div>
                <div className='mt-12'>
                    <h2 className='font-semibold text-xl'>Broad ecosystem integration and data aggregation</h2>
                    <p className='pt-6'>Skybox’s hybrid attack surface model aggregates data from over 150 integrations, including leading network platforms, asset databases, and security technologies. The model holds information on the devices, applications, and users in the organization, as well as:</p>
                    <div className='pt-6'>
                    <div className='flex items-center gap-4'>
                        <div className='w-3 h-3 bg-[#f37e47] rounded-full'></div>
                        <p>route, access, and permission metadata</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='w-3 h-3 bg-[#f37e47] rounded-full'></div>
                        <p>security control, patch, and XDR data</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='w-3 h-3 bg-[#f37e47] rounded-full'></div>
                        <p>vulnerability and threat scanner data</p>
                    </div>
                    </div>
                    <p className='pt-6'>These insights empower risk-based and prioritized vulnerability management.</p>
                </div>
            </div>
            <div className='px-8 mt-16'>
                <div className='flex gap-4 items-center'>
                    <div className='w-6 h-6 bg-[#454d51] rounded-full'></div>
                <h1 className='text-2xl font-semibold'>Real Environment</h1>
                </div>
                <div className='mt-2'>
                    <p className='pt-4'>The model draws on data from across the real environment, including Network infrastructure, Firewall and IPS, CMDB, Cloud infrastructure and security, XDR data, Vulnerability scanners, OT security, LDAP, and more.</p>
                </div>
            </div>
        </div>


        <div className="ninthPart mt-24">
            <div className='absolute w-1.5 rounded-full bg-[#f5f5f5] h-[52vh]'/>
            <div className='px-8'>
                <div className='flex gap-4 items-center'>
                    <div className='w-6 h-6 bg-[#3fbdac] rounded-full'></div>
                <h1 className='text-2xl font-bold'>Remediation and change automation</h1>
                </div>
                <div className='mt-4'>
                    <p className='pt-6'>Quickly mitigate risks and trigger remediation processes, leverage seamless automation with your ITSM system to speed up ticketing, inform patch cycles, and maintain accountability with comprehensive audit trails.</p>
                    <p className='pt-6'>When the cadence between patching cycles exposes a vulnerable asset to compromise for too long, Skybox automatically suggests alternative compensating controls, such as changes to network segmentation, the application of IPS signature updates, or modifications to firewall rule tables.</p>
                    <p className='pt-6'>Use change automation workflows to automatically maintain security policy compliance. Manage firewall rule recertification, change verification, and de-provisioning.</p>
                </div>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}
export default Animation;