import React, { useState, useEffect, useRef  } from 'react'
import firstImage from './assets/firstImage.png';
import secondImage from './assets/secondImage.jpg'





const contentData = [
    {
        image: secondImage,
        verticalDivHeight: '92vh',
        content: (
            <>
              <div className='firstPart section' id='firstPart'>
            {/* <div className='absolute w-1.5 rounded-full bg-[#9747FF] h-[92vh] vertical-div'></div> */}
            <div className='px-8'>
                <div className='bg-[#f5f5f5] p-4 rounded-lg'>
                    <h2 className='font-semibold text-xl w-96'>What is the <span className='text-[#9747FF]'>DeepDefend exposure management platform</span></h2>
                    <p className='pt-6'>The DeepDefend platform facilitates every phase of your enterprise's ongoing exposure management program, enabling the mapping of your attack surface and contextualization with data, evaluation and prioritization of vulnerabilities, and mitigation of threats through final remediation actions. Unified solutions for managing attack surfaces, vulnerabilities, and security policies streamline exposure management and enhance your security team's efficiency.</p>
                </div>
                <div className='mt-12'>
                <h2 className='font-semibold text-xl'>The DeepDefend Platform drives exposure management programs</h2>
                    <p className='pt-6'>Utilizing DeepDefend enables the establishment of uniform exposure management initiatives spanning across your enterprise, persistently mapping your attack surface, contextualizing findings, prioritizing threats, and automating remedial actions. The potency of our platform stems from the amalgamation of security, policy, and infrastructure data amassed from both your on-premises and cloud environments. With DeepDefend, you can attain deeper insights, make more informed decisions, bolster business resilience, and optimize your valuable technical assets according to your organization's priorities.</p>
                </div>
            </div>
        </div>
            </>
        )
    },
    {

        image: firstImage,
        verticalDivHeight: '58vh',
        content: (
            <>
             <div className="secondPart mt-24 section" id='secondPart'>
            {/* <div className='absolute w-1.5 rounded-full bg-[#f5f5f5] h-[58vh] vertical-div'/> */}
            <div className='px-8'>
                <div className='flex gap-4 items-center'>
                    <div className='w-6 h-6 bg-[#00477b] rounded-full'></div>
                <h1 className='text-2xl font-bold'>Solutions</h1>
                </div>
                <div className='mt-12'>
                    <h2 className='font-semibold text-xl'>Attack surface visibility and management</h2>
                    <p className='pt-6'>The DeepDefend platform carefully constructs a strong network model and catalogues assets, networks, clouds, and users to manage cyber risks across your organization's hybrid attack surface.</p>
                    <p className='pt-6'>Utilizing advanced methods such as attack path analysis and simulation, we identify, prioritize, and counter internet-accessible threats. We highlight potential exploit paths by examining firewall and network configurations to pinpoint vulnerabilities.</p>
                    <p className='pt-6'>This leads to strategic visualization and comprehensive reports of your hybrid attack surface, enabling your organization to proactively oversee, monitor changes, and promptly address emerging threats.</p>
                </div>
            </div>
        </div>
            </>
        )
    },
    {

        image: secondImage,
        verticalDivHeight: '60vh',
        content: (
            <>
             <div className="thirdPart mt-24 section" id='thirdPart'>
            {/* <div className='absolute w-1.5 rounded-full bg-[#f5f5f5] h-[62vh] vertical-div'/> */}
            <div className='px-8'>
            <div>
                    <h2 className='font-semibold text-xl'>Vulnerability management</h2>
                    <p className='pt-6'>DeepDefend utilizes a variety of external threat intelligence sources, alongside our proprietary DeepDefend Threat Intelligence, to enhance your attack surface map and present a comprehensive overview of your vulnerability and threat exposure. Our multifaceted risk assessment and prioritization take into account severity, significance, exploitability, and network exposure, allowing you to allocate resources to vulnerabilities posing the greatest risk to your organization.</p>
                    <p className='pt-6'>In addition to prioritization, DeepDefend offers proactive, automated suggestions for remediation and controls for each vulnerability. We facilitate efficient responses through integration with IT Service Management systems, recommendations for network segmentation, and automated adjustments to firewalls. Even in the absence of immediate patching, DeepDefend Vulnerability Control offers effective alternatives for risk mitigation.</p>    
                </div>
            </div>
        </div>
            </>
        )
    },
    {

        image: firstImage,
        verticalDivHeight: '54vh',
        content: (
            <>
             <div className="fourthPart mt-24 section" id='fourthPart'>
            {/* <div className='absolute w-1.5 rounded-full bg-[#f5f5f5] h-[60vh] vertical-div'/> */}
            <div className='px-8'>
            <div>
                    <h2 className='font-semibold text-xl'>Security policy management</h2>
                    <p className='pt-6'>Obtain thorough insights into your network by examining configurations, pathways, connectivity, and access. DeepDefend Network Assurance ensures meticulous adherence to your network zoning, bridging any gaps between your official segmentation policy and its actual implementation in your hybrid network setup.</p>
                    <p className='pt-6'>DeepDefend Firewall Assurance enhances performance by identifying and removing redundant or unnecessary firewall rules and managing multiple firewalls through a centralized interface. DeepDefend Change Manager automates firewall adjustments, conducting risk assessments prior to implementing new rules. Easily revalidate firewall rules and produce crucial reports essential for compliance audits. Harness the efficiency of network management to strengthen your cybersecurity posture while upholding compliance standards.</p>
                </div>
            </div>
        </div>
            </>
        )
    },
    {

        image: secondImage,
        verticalDivHeight: '68vh',
        content: (
            <>
              <div className="fifthPart mt-24 section" id='fifthPart'>
            {/* <div className='absolute w-1.5 rounded-full bg-[#f5f5f5] h-[72vh] vertical-div'/> */}
            <div className='px-8'>
                <div className='flex gap-4 items-center'>
                    <div className='w-6 h-6 bg-[#7a2982] rounded-full'></div>
                <h1 className='text-2xl font-bold'>DeepDefend Dynamic Security Model</h1>
                </div>
                <div className='mt-12'>
                    <h2 className='font-semibold text-xl'>Exposure Management starts with a robust model</h2>
                    <p className='pt-6'>DeepDefend's dynamic security framework offers a comprehensive 360-degree hybrid attack surface map, drawing from an in-depth understanding of firewall and network security policies. It is augmented with threat intelligence and risk data to bolster cybersecurity measures and automate remedial actions. This model integrates asset details, vulnerability and threat insights, network and security protocols, and insights into applications and users, providing a panoramic perspective of your entire attack surface.</p>
                    <p className='pt-6'>Utilize this model to examine potential attack routes, refine security protocols, and prioritize defensive strategies. Insights derived from DeepDefend Threat Intelligence regarding vulnerability severity, asset significance, and exploitability facilitate targeted risk management efforts. Continuously updated, the model offers actionable remedial actions and automated controls to reinforce your security posture.</p>
                    
                </div>
            </div>
        </div>

            </>
        )
    },
    {

        image: firstImage,
        verticalDivHeight: '88vh',
        content: (
            <>
               <div className="sixthPart mt-24 section" id='sixthPart'>
            {/* <div className='absolute w-1.5 rounded-full bg-[#f5f5f5] h-[90vh] vertical-div'/> */}
            <div className='px-8'>
                <div className='flex gap-4'>
                    <div className='w-6 h-6 mt-2 bg-[#008cc1] rounded-full'></div>
                <h1 className='text-2xl font-bold'>Threat Intelligence & Prioritized Exposure</h1>
                </div>
                <div className='mt-12'>
                    <h2 className='font-semibold text-xl'>Exposure Management starts with a robust model</h2>
                    <p className='pt-6'>DeepDefend consolidates over 35 intelligence feeds into our Threat Intelligence Service, encompassing vulnerability scanners, vendor advisories, IPS signature updates, public databases like NIST NVD, exploitability notifications, and expert advisories such as MITRE CVE, CISA, CERT, and ICS CERT.</p>
                    <p className='pt-6'>Evaluate and prioritize vulnerabilities not only based on CVE severity but also considering the asset's significance to the business, evidence of exploitability in real-world scenarios, and the potential compromise of the asset across the hybrid network.</p>
                </div>
            </div>
            <div className='px-8 mt-16'>
                <div className='flex gap-4 items-center'>
                    <div className='w-6 h-6 bg-[#d9e146] rounded-full'></div>
                <h1 className='text-2xl font-semibold'>Attack surface map</h1>
                </div>
                <div className='mt-2'>
                    <p className='pt-4'>To safeguard effectively, visibility is paramount. To fully understand your organization's exposure, a comprehensive attack surface map is essential. This map must encompass all assets, networks, clouds, applications, and users, along with the routes and attack paths connecting them.</p>
                </div>
            </div>
        </div>
            </>
        )
    },
    {

        image: secondImage,
        verticalDivHeight: '50vh',
        content: (
            <>
              <div className="seventhPart mt-24 section" id='seventhPart'>
            {/* <div className='absolute w-1.5 rounded-full bg-[#f5f5f5] h-[52vh] vertical-div'/> */}
            <div className='px-8'>
                <div className='flex gap-4 items-center'>
                    <div className='w-6 h-6 bg-[#54ab49] rounded-full'></div>
                <h1 className='text-2xl font-bold'>Firewall & network policies</h1>
                </div>
                <div className='mt-4'>
                    
                    <p className='pt-6'>Not all of the organization's most significant exposures and risks stem from vulnerabilities.</p>
                    <p className='pt-6'>Gaining a thorough understanding of the underlying infrastructure, network setup, and security policies allows for analysis of network segmentation and zoning. It also facilitates examination of firewall configurations and rule sets to identify potential security weaknesses.</p>
                    <p className='pt-6'>Streamline policy management, oversee numerous firewalls from various vendors through a unified interface, evaluate firewall change requests, and implement automated changes aimed at minimizing exposure.</p>
                </div>
            </div>
        </div>

            </>
        )
    },
    {
        image: firstImage,
        verticalDivHeight: '86vh',
        content: (
            <>
               <div className="eightPart mt-24 section" id='eightPart'>
            {/* <div className='absolute w-1.5 rounded-full bg-[#f5f5f5] h-[94vh] vertical-div'/> */}
            <div className='px-8'>
                <div className='flex gap-4'>
                    <div className='w-6 h-6 mt-2 bg-[#3fbdac] rounded-full'></div>
                <h1 className='text-2xl font-bold'>150+ vendor integration</h1>
                </div>
                <div className='mt-12'>
                    <h2 className='font-semibold text-xl'>Broad ecosystem integration and data aggregation</h2>
                    <p className='pt-6'>DeepDefend’s hybrid attack surface model aggregates data from over 150 integrations, including leading network platforms, asset databases, and security technologies. The model holds information on the devices, applications, and users in the organization, as well as:</p>
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
            </>
        )
    },
    {
        image: secondImage,
        verticalDivHeight: '58vh',
        content: (
            <>
              <div className="ninthPart mt-24 section" id='ninthPart'>
            {/* <div className='absolute w-1.5 rounded-full bg-[#f5f5f5] h-[58vh] vertical-div'/> */}
            <div className='px-8'>
                <div className='flex gap-4 items-center'>
                    <div className='w-6 h-6 bg-[#3fbdac] rounded-full'></div>
                <h1 className='text-2xl font-bold'>Remediation and change automation</h1>
                </div>
                <div className='mt-4'>
                    <p className='pt-6'>Quickly mitigate risks and trigger remediation processes, leverage seamless automation with your ITSM system to speed up ticketing, inform patch cycles, and maintain accountability with comprehensive audit trails.</p>
                    <p className='pt-6'>When the cadence between patching cycles exposes a vulnerable asset to compromise for too long, DeepDefend automatically suggests alternative compensating controls, such as changes to network segmentation, the application of IPS signature updates, or modifications to firewall rule tables.</p>
                    <p className='pt-6'>Use change automation workflows to automatically maintain security policy compliance. Manage firewall rule recertification, change verification, and de-provisioning.</p>
                </div>
            </div>
        </div>
            </>
        )
    },
]

const Animation = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sectionRefs = useRef([]);
    const verticalDivRefs = useRef([]);
    const iconRef = useRef(null);


     useEffect(() => {
    const icon = iconRef.current;

    if (currentIndex === 0 || currentIndex === 7) {
      icon.classList.add('bounce');
    } else {
      icon.classList.remove('bounce');
    }
  }, [currentIndex]);


      useEffect(() => {
        const setInitialStyles = () => {
          verticalDivRefs.current.forEach((div, index) => {
            div.style.backgroundColor = index === currentIndex ? '#9747FF' : '#f5f5f5';
            div.style.height = contentData[index].verticalDivHeight;
          });     
        };
    
        setInitialStyles();
      }, [currentIndex]);

    const handleIntersection = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.25) {
            console.log('Current Section ID:', entry.target.id);
            const sectionId = entry.target.id;
            const index = parseInt(sectionId.split('-')[1]);
            setCurrentIndex(index);
          }
        });
      };

      useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.7, // Adjust threshold as needed
          });
   
        // observer.disconnect();
        sectionRefs.current.forEach((section) => {
            if (section) { // Check if section exists before observing
                observer.observe(section);
              }
        });

        return () => {
          observer.disconnect(); // Cleanup on component unmount
        };
      });

    
  return (
    <div className='container flex justify-center items-start w-full h-[99.9vh]'>
    <div className='flex w-full h-[88vh] px-8'>
      <div className="left w-[60%] flex justify-center items-center overflow-x-hidden">
     
      <svg id="ctem-svg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="800" height="650" viewBox="0 0 710 550">

      <defs>
        <clipPath id="clip-vendor">
            <path d="m273.78,487.78L13.58,423.41c-2.12-.53-1.98-3.59.18-3.92l260.2-39.64c.2-.03.4-.03.6,0l260.2,39.64c2.16.33,2.3,3.39.18,3.92l-260.2,64.37c-.32.08-.65.08-.96,0Z" style={{fill: 'none', strokeWidth: 0}}></path>
        </clipPath>
        <clipPath id="clip-firewall">
            <path d="m273.76,423.65L13.56,359.28c-2.12-.53-1.98-3.59.18-3.92l260.2-39.64c.2-.03.4-.03.6,0l260.2,39.64c2.16.33,2.3,3.39.18,3.92l-260.2,64.37c-.32.08-.65.08-.96,0Z" style={{fill: 'none', strokeWidth: 0}}></path>
        </clipPath>
        <clipPath id="clip-remediation">
            <path d="m372.4,324.29l-177.35.2c-1.66,0-3-1.34-3-3l-.04-41.62c0-1.66,1.34-3,3-3l177.35-.2c1.66,0,3,1.34,3,3l.04,41.62c0,1.66-1.34,3-3,3Z" style={{fill: 'none', strokeWidth: 0}}></path>
        </clipPath>
        <linearGradient id="firewall-fill" gradientTransform="rotate(-40)" className="firewall-fill">
            <stop offset="74%" stop-color={currentIndex === 4 || currentIndex === 6  || currentIndex === 0 ? '#d23953' : '#ababab'}></stop>
            <stop offset="74.01%" stop-color="#9747FF"></stop>
            <stop offset="75%" stop-color="#9747FF"></stop>
            <stop offset="75.01%" stop-color={currentIndex === 4 || currentIndex === 6  || currentIndex === 0 ? '#d23953' : '#ababab'}></stop>
        </linearGradient>
        <clipPath id="clip-attack">
            <path d="m296.42,284.77l5.61.91-6.32.48c-.27-.1-.61-.16-.99-.16-.27,0-.52.03-.73.08l-5.52-.93,6.26-.45c.45.16,1.18.19,1.7.07Zm46.66-1.69l-5.86,2.06,5.78-.88.09-1.18Zm-19.42,3.32c.21.01.4.05.57.1l5.37-.59-6.07-.57.14,1.06Zm10.16.21c-.46.11-1.11.09-1.55-.03l-5.98.66,4.39,1.02,9.28-.68-6.14-.96Zm27.64,9.22l.04,1.24c.17.01.32.04.46.08l5.81-.94-5.7-.5c-.18.06-.38.1-.6.13Zm-29.22-7.22l1.27.3c.17-.03.35-.05.55-.05s.4.02.58.05l3.29-.71-5.69.41Zm-8.22-.33c.15-.02.31-.03.48-.03.54,0,1.01.12,1.28.3l.42.03.58-.04-4.99-.86,2.23.6Zm-11.91-3.56c-.53,0-.97-.11-1.24-.28l-2.01-.11,4.39,1.07c.17-.03.34-.04.53-.04.59,0,1.09.15,1.35.36l2,.22-4.58-1.24c-.14.02-.29.03-.44.03Zm11.25-.61l.09.75,4.75.45-4.8-1.2h-.04Zm19.45,2.8l.14-2.15-7.47,1.13,6.91,1.09c.13-.03.27-.06.42-.07Zm17.42,8.84l-6.84.97,6.72.5c.19-.07.41-.12.66-.15l-.04-1.24c-.18-.01-.35-.05-.5-.08Zm.58,2.75l-5.91,2.03,15.85-1.56-8.54-.62c-.37.13-.91.19-1.4.15Zm6.55-4.82l-4.3.24,5.11.54-.81-.78Zm-17.18-1.62l7.38,1.2-1.4-1.41-5.97.21Zm3.83-1.71l-4.41,1.26,6.1-.21-1.02-1.03c-.22.01-.46,0-.67-.02Zm-18.58-.51l4.91.94h.08s-4.98-.96-4.98-.96c0,0,0,.01-.01.02Zm6.7.78l7.61-.72-11.75-.08,4.13.8Zm3.71.71c.32-.07.73-.08,1.09-.04l3.41-.98-6.55.62,2.05.4Zm-13.23-5.96c.23-.04.5-.05.75-.03l7.38-2.59-15.31.82,7.19,1.8Zm-71.11-9.3l-6.32,2.57s.09.04.12.06l6.38-2.59-.19-.04Zm-7.22,3.72l-1.35,4.04,8.54-2.64-6.79-1.44c-.12.02-.26.04-.4.04Zm7.94,5.06c.18-.07.4-.11.64-.13l.24-2.92-8.11,2.5,7.23.55Zm.83,1.79s.05,0,.08.01l5.11-.92-3.9.09c-.26.14-.64.24-1.07.25l-.22.57Zm-18.84-11.77l-5.18,1.51,4.75.67,1.13-.31-.53-1.86c-.06,0-.12,0-.17-.01Zm19.61,6.91l-.23,2.89,1.46-.38,5.79-1.71-6.55-.88c-.14.04-.3.07-.47.08Zm42.12,26.08l.91-1.13c-.25-.07-.44-.17-.58-.28l-7.44-.76,6.53,2.19c.19-.01.39-.02.58-.01Zm-70.04-27.71l5.4,1.45c.14-.02.28-.03.42-.03.17,0,.32,0,.47.03l9.44-2.38-5.37-.83c-.37.09-.89.09-1.29.02l-9.07,1.74Zm10.75-3.36l-.93.25.03.1.9-.35Zm26.76,4.96c.06,0,.12,0,.18.01l4.86-1.52-5.37.41.33,1.1Zm8.04-1.33l-5.11,1.6,6.19-.35-.72-1.24c-.11,0-.24,0-.35-.01Zm1.52,2.37c.06-.02.12-.04.18-.05l-.36-.61-4.53.25,4.71.41Zm.3-1.16l5.57-.31-6.31-.96.74,1.27Zm5.04-1.37l3.29.5c.22-.05.46-.08.73-.08.35,0,.68.05.94.14l3.12-.23-8.07-.33Zm-21.34.85l5.51.74c.06-.02.14-.03.22-.05l-.32-1.09-5.4.41Zm-.87-.41l6.13-.46-.53-1.79-5.6,2.25Zm26.85,1.29c-.34.07-.78.08-1.14.01l-4.68,1.1,7.58.54c.52-.19,1.4-.19,1.92,0l3.36-.25-7.04-1.4Zm-25.75,2.78l12.85-1.28-5.89-.5c-.35.11-.85.16-1.28.11l-5.68,1.67Zm101.74,9.62c.09,0,.19,0,.28,0,.17,0,.34,0,.49.03l3.95-1.06-5.47.31.75.73Zm-.55,16.5c-.3.06-.65.08-.98.06l-8.92,3.63,19.53-1.76-9.64-1.93Zm10.39-4.06c-.32.08-.73.11-1.11.08l-7.27,2.85,18.48-1.29-10.1-1.65Zm-11.91,2.69l-.76-1.31-7.32,1.12,7.66.32c.12-.05.26-.09.41-.13Zm-3.49,1l-7.22-.3c-.4.17-1.06.25-1.63.18l-7.25,2.24,16.09-2.12Zm38.74-5.99l-5.65-.63,6.45,1.6-.8-.97Zm-48.36,4.61c.32-.15.81-.23,1.32-.23l6.3-3.06-16.06,3.08,8.43.21Zm37.85-1.39l-.36-1.26-8.41-.06,8.49,1.38c.09-.02.18-.04.28-.06Zm9.9-4.96l1.07,1.3,4.82.54-5.89-1.84Zm-.79,3.28l-.61-.16-8.7-1.45.44,1.55,8.87.06Zm-71.28,1.37l6.79-1.83h-.24l.47-.07-8.11-.84c-.11.03-.22.06-.34.08l.99,2.63c.15,0,.3.01.44.04Zm-2.37-4.07l.18-2.56-8,.63,7.58,1.95c.07,0,.15-.02.24-.02Zm-9.62-1.29s-.05,0-.08,0l.19,1.34,6.14.26-6.25-1.61Zm.32,5.23l-3.72-.36,3.96.88-.24-.52Zm-3.6.75l-5.74-1.27c-.25.05-.55.07-.84.05l-.91,1.14c.13.04.25.08.35.14l7.13-.06Zm46.23-2.52l-6.6.1c-.35.19-.97.31-1.56.26l-5.93,2.33,14.09-2.7Zm-8.44-1.08l-.21-.83-7.37,1.15,6.82-.08c.19-.1.45-.18.76-.23Zm-5.86,1.27l-5.52.07c-.13.07-.29.13-.47.17l.31.48,5.68-.72Zm57.91-.17c.35,0,.66.04.93.12l3.51-.46-5.43-.6.79.95c.06,0,.14,0,.21,0Zm-31.02-10.96l5.32-.33-.71-.68c-.25.02-.53,0-.76-.02l-3.85,1.03Zm34.32-9.75c-.37.13-.92.17-1.38.11l-5.37,1.46,5.07.72,1.51.08c.4-.16,1.06-.22,1.58-.13l6.45-1.54-1.58-.18-6.28-.51Zm11.5,1.11c-.3.03-.63.02-.91-.02l-4.21,1-1.53.45,13.82-.37-2.94-.58-4.23-.48Zm11.09,1.83l-6.68,1.06,8.04.44-.33-1.29-1.03-.2Zm-31.18,2.43l-1.27-1.29-6.55.58,7.82.71Zm-162.08-14.36h.02c.12,0,.24,0,.35.02l4.72-1.37-5.87.09.78,1.26Zm188.01,13.53l6.9,1.44s.07,0,.1-.02l-.27-1.05-6.73-.37Zm-51.65,7.85l-.53-.52c-.37.03-.78,0-1.09-.08l-4.72.77,6.35-.17Zm4.51-5.04c.05,0,.09,0,.14,0l6.2-2.11-6.76.52.41,1.58Zm7.73-7.01l-6.86,2.55,3.01.58,4.77.71c.36-.09.84-.12,1.24-.06l6.63-1.84-8.03-1.96c-.24.03-.5.05-.76.03Zm26.58,20.87c-.42.03-.86-.01-1.2-.11l-4.26.57,13.26,2.54-7.8-3Zm17.62-12.59l4.49.62c.24-.07.53-.1.84-.1.33,0,.64.04.89.12l3.68-.44-9.9-.2Zm.4,6.87l-8.1.14,9.66,2.48-1.56-2.62Zm-.7,3.37l-8.23-.67.97,1.6h.06c.3,0,.58.03.83.09l6.37-1.03Zm-23.15-.72l5.11,1.59c.14-.01.29-.02.43-.02.53,0,1,.1,1.3.27l4.47.03-11.32-1.87Zm15.93,3.14c-.51,0-.96-.1-1.26-.26l-4.54-.03,6.15,1.03-.35-.74Zm7.71-7.45l.7,1.18,7.66-.13-8.24-1.08s-.08.02-.12.03Zm5.78-3.33c-.5.1-1.18.07-1.61-.08l-2.29.21,4.78.33-.88-.47Zm-13.2,1.5l5.68.59c.48-.16,1.21-.18,1.73-.06l3.81-.67-11.22.14Zm-168.75-18.33c.24-.06.55-.09.84-.08l5.59-2.27-11.73,1.53,5.3.82Zm-139.18,23.09l7.68-2.5-14.56,1.8,5.63.79c.35-.09.84-.13,1.25-.09Zm31.13,2.15l-9.34,1.2,7.13.54,2.21-1.74Zm-39.55-6.57l-5.31,1.83,4.8-.67.5-1.17Zm-2.11,3.2c.23-.06.49-.1.78-.1l.61-1.41-6.01.83,4.62.68Zm16.19,3.27l-5.16-.7c-.3.08-.67.12-1.04.1l-1.12,1.46,7.32-.86Zm4.37-1.81l-.61,1,6.95-1.43-6.34.44Zm8.09,2.31c.35,0,.66.05.93.12l10.39-1.33-6.8-1.48c-.41.08-.94.08-1.35,0l-9.68,2,5.64.81c.25-.07.55-.11.88-.11Zm-9.45-1.36l.55-.9-5.96.41,4.44.6c.28-.08.61-.12.97-.11Zm2.17-3.55l-8.01,2.62,6.69-.46,1.32-2.16Zm-19.18-.5l-.61,1.41,6.53-2.23-5.93.82Zm-8.85-10.35l5.83-.58-4.02-.27c-.31.12-.75.17-1.18.15l-.63.7Zm-.27-1.87c.35-.16.93-.24,1.45-.19l.42-.35-4.36.5,2.48.04Zm18.46,1.02l.27-1.08-5.42.92,4.34.31c.22-.08.5-.13.81-.15Zm-24.01-2.58l-1.06,1.09,6.51-1.54-5.45.45Zm5.59,14.13l6.22-2.15-13.89,1.5,6.42.75c.35-.1.82-.15,1.25-.11Zm9.83-10.78l-9.74,2.65,4.73.44c.37-.13.92-.17,1.39-.11l9.57-2.77-4.49-.33c-.38.14-.97.19-1.46.13Zm-18.98,6.71c.34-.08.78-.1,1.16-.06l3.82-3-10.75,2.08,5.77.98Zm5.78-4.48c.27-.06.58-.08.89-.06l1.33-1.47-7.26.72,4.29.71.76.1Zm-8.18,9.04h5.06s-3.52-.42-3.52-.42c-.34.1-.8.15-1.22.11l-.33.31Zm111.58,16.8c.42,0,.79.06,1.09.16l5.36-.5-11.8-.28-.19.02,4.62.71c.27-.07.58-.11.91-.11Zm8.64,3.57l-8.02-2.05c-.22.03-.45.05-.69.05l-1.09,1.9,9.8.1Zm-17.22-3.57l-1.66-.2-1.82.16-.59.69,7.89-.07-3.82-.59Zm-.04-2.63c.45,0,.85.07,1.15.19l5.01-.31-4.3-.64c-.61.16-1.51.12-2.03-.09l-5.8.28,5.03.68c.27-.08.59-.12.94-.12Zm18.86,9.16l1.02-1.97s-.08-.01-.12-.02l-10.37,1.78,9.46.22Zm22.95,3.47l-8.28-2.16c-.4.07-.89.06-1.29,0l-11.39,2.74,20.95-.56Zm2.67-.64l.26-1.45-7.89-.39,7.24,1.88c.12-.02.26-.03.4-.04Zm-14.68-2.11l-10.43-.24-1.6,3.11,12.03-2.88Zm-75.83-17.39l.41-.33-4.84-.37,3.29.73c.35-.07.77-.08,1.14-.03Zm41.86,5.87l-6.5-.62-.24.76c.22.03.41.09.57.16l6.18-.3Zm-40.6-6.13l-.55.44s.05.02.07.04l5.48-.1-5-.38Zm33.88,3.88c-.15-.02-.3-.06-.42-.1l-6.26.6,6.32.6.35-1.1Zm-24.26-.53l7.84.38-7.61-.99-.53.3c.15.09.26.19.31.31Zm58.98,1.39l.1-1.58-7.78.35,7.21,1.3c.14-.03.3-.06.47-.07Zm-46.58,0c-.18-.09-.3-.21-.36-.33l-8.33-.41,8.09,1.11.6-.37Zm5.01,5.92l2.19-1.66s-.04-.01-.06-.02l-9,.19,5.75,1.5c.35-.06.76-.06,1.12-.01Zm-7.71-4.68c.22,0,.43.02.63.05l.84-.52-7.26-1,5.27,1.5c.17-.02.34-.03.52-.03Zm5.11,2.09l-5.71-.59-1.1.74,6.81-.15Zm56.85-33.36c.12.01.24.03.36.06l5.09-.7-5.39-.38-.06,1.02Zm-23.64.5c.19-.04.43-.07.66-.07.42,0,.8.07,1.07.19l2.72-.08-6.09-.35,1.63.3Zm3.78,2.58l4.16.87c.15-.03.32-.05.5-.06l.27-.75c-.19-.03-.35-.08-.5-.15l-4.44.09Zm-1.29-5.65l-4.24-.31,3.97.76c.08-.01.17-.03.27-.04v-.42Zm12.55,6.74l-5.1-1.04c-.15.03-.32.05-.5.06l-.27.75c.23.04.43.1.59.19l5.28.04Zm-7.13,4.03l-9.05,1.83,5.35.56c.45-.14,1.14-.17,1.65-.06l8.74-1.65-5.21-.73c-.42.11-1.03.13-1.48.04Zm-17.14-7.29h4.12s1.47-.08,1.47-.08l-3.28-.59c-.36.08-.84.08-1.21.02l-1.1.65Zm4.75-4.47l6.99.52.03-1.34c-.14-.01-.26-.04-.37-.07l-6.64.89Zm-6.77,6.65c.1.02.2.05.29.08l5.11-.46-5.13-.22-.27.6Zm3.73-6.02l.22,1.89c.21.01.4.05.57.1l6.3-.67-6.93-1.34c-.05,0-.11.02-.17.03Zm40.32-4.18l-3.05.61,3.93-.06-.32-.51c-.17,0-.38-.01-.55-.04Zm-44.66,11.54l-.42.88,6.78.26-5.77-1.2c-.18.03-.38.06-.59.06Zm46.3-11l3.86-.07-4.22-.52.36.58Zm-10.67,4.51l-.04.57,4.03.28-3.81-.87c-.06,0-.12.02-.18.02Zm6.01-3.97l2.15.6,2.79.58-.76-1.24-4.18.07Zm-12.39,13.32v-.32c-.14-.02-.29-.05-.42-.08l-2.99.41h3.41Zm-8.46-.43c.17.01.33.04.48.08l5.29-.73-5.43-1c-.1.02-.22.04-.33.05v1.59Zm10.44-2.82c.29-.06.64-.07.95-.04l.14-.13c-.09-.04-.18-.08-.25-.13l-3.57-.25,2.72.56Zm-2.28,1.61c.27-.06.62-.08.94-.06l-2.29-.18,1.35.25Zm-31.82,3.32l-7.47,1.58,14.5-.49-5.71-1.1c-.4.08-.91.09-1.32,0Zm-57.12,2.99l9.47-1.34-2-.52-4.77-.93-2.7,2.79Zm14.66-1.08l7.71,1.08.63-2.23c-.09-.01-.17-.03-.26-.05l-8.07,1.19Zm43.78-3.2s.02,0,.04,0l8.91-1.6-8.04-.31-.91,1.91Zm-35.37,4.39l6.01.84.87-.12-6.25-2.97-.63,2.25Zm-20.92-4.26c.23-.07.5-.1.8-.11l.44-1.02-5.94.53,4.7.6Zm-19.45,2.35l4.03-1.23-3.07.59-.97.63Zm5.5.82c.36-.19.99-.29,1.56-.24l2.72-2.43-8.86,2.69,4.58-.02Zm5.58-3.02l-2.97,2.66,8.96-2-1.92-.38-2.89-.37c-.33.09-.78.13-1.18.09Zm28.92,5.45c.22.04.42.09.59.17l1.11-.03,2.93-.4-4.39-.62-.24.88Zm22.12-1.8l-7.92,1.86,15.34-.24-6.3-1.61c-.35.05-.77.05-1.12,0Zm-15.88,1.81h.23s-.09-.02-.09-.02l-.14.02Zm22.1-1.57l3.53.9c.33-.05.73-.05,1.05,0l8.41-2.19-15.39.52,2.39.77Zm-67.74-2.73l.45-.3-2.15.62,1.69-.33Zm50.02,3.93h.09c.21,0,.4.02.58.05l3.64-.85-4.69.64.37.17Zm-8.25,1.44l6.97,2.35c.06,0,.12,0,.19,0l.64-2.39c-.22-.04-.43-.09-.59-.17l-7.21.21Zm8.31,2.47l7.45-.74-6.88-1.78c-.12.01-.23.03-.35.03l-.64,2.38c.15.02.3.06.42.1Zm-1.37,1.3l-3.28,2.71,10.6-.97-6.42-1.75c-.28.04-.61.04-.9,0Zm-10.16-3.45l-2.82,2.69s.08.03.12.05l10.39-.37-7.02-2.37c-.21.02-.45.02-.66,0Zm142.34-.29c.09.02.17.04.25.06l8.64-1.17-7.41-2.12c-.11.01-.22.02-.34.02l-1.15,3.21Zm1.43-4.6c.16.01.31.05.45.08l7.86-1.04-2.85-.8-5.3-1.21-.16,2.97Zm10.34-1.47c.14-.02.3-.03.45-.03.4,0,.76.06,1.03.17l5.73-.33-13.1-1.47,5.89,1.66Zm-46.45-2.16l2.42-.11c.26-.16.68-.27,1.15-.28l.21-.54-4.12.92h.34Zm3.67,1c-.3,0-.57-.04-.8-.1l-3.74.53,3.46.08c.47-.22,1.34-.27,1.92-.12l3.64-.54-3.36-.06c-.28.13-.67.21-1.12.21Zm46.44,2.17l2.58.71,4.42.99.26-2c-.22-.03-.41-.08-.57-.14l-5.25.31-1.43.14Zm-90.91-1.23c.15-.04.32-.08.51-.09v-.36s-3.65,0-3.65,0l3.14.44Zm53.61-1.94c.3-.15.76-.23,1.25-.21l.27-.36-4.88.51,3.37.06Zm1.45,1.17l-.02.37,4.34-.09-3.74-.39c-.17.05-.37.09-.58.11Zm12.63.48l8.25,1.99c.08,0,.16-.02.24-.03l.17-3.12-.55-.13-8.1,1.28Zm51.5,3.57l.32.29,2.38.18-2.59-.47h-.11Zm-3.12-1.96c-.54,0-1-.12-1.27-.3l-2-.13,4.47.99c.19-.03.39-.05.6-.05.53,0,.99.11,1.27.29l.36.02,1.17-.11-3.95-.76c-.19.04-.41.07-.64.07Zm11.21,2.12l-2.06-.1,3.03.54c.05,0,.1-.02.15-.03l-.04-.14c-.45-.02-.84-.12-1.09-.28Zm-3.23-1.26l1.18.23h.15s-1.26-.23-1.26-.23h-.07Zm-29.28-4.54l-1.61-.11-1.52-.04,6.61,2.08c.12-.01.23-.02.35-.02.44,0,.82.08,1.1.2l3.45-.1-6.89-1.86c-.5.07-1.12,0-1.5-.15Zm4.11,3.3l-.27,2.14c.19.02.35.06.5.11l.12.03,7.19-.43-7.29-1.87c-.08,0-.16.02-.24.03Zm6.55-.42l-2,.06,7.07.83-3.39-.75c-.55.1-1.26.04-1.67-.15Zm3.64,1.88c.16-.02.34-.04.52-.04.39,0,.74.06,1.02.17l3.37-.22-9.77-1.16,4.87,1.25Zm10.52,3.69s.02,0,.03,0l5.13-.67-4.73.06-.43.6Zm-99.33-9.02l-4.26-1.27c-.53.06-1.14-.02-1.49-.19h-4.78l10.53,1.46Zm-10.08,3.6c.12-.05.26-.09.41-.12l-.23-.57c-.28,0-.53-.04-.76-.1l-3.82.53,4.4.26Zm-.61-2c.13-.04.27-.07.42-.08h-1.15s.72.08.72.08Zm-5.81-1.58l.68.06-.54-.08s-.09.02-.14.03Zm.56-1.29l-.14.12c.14.06.26.13.35.21l3.06.35-2.53-.7c-.23.03-.5.03-.74.01Zm-3.63,5.97l5.24-.4-4.06-.24c-.27.1-.61.17-.99.17l-.19.47Zm-.79,1.86l7.12-1.87-6.54.5-.58,1.37Zm2.19-6.06s.02.01.04.02h2.13s-2-.15-2-.15l-.17.13Zm-.88,2.33c.16.02.31.05.45.08l3.36-.46h-3.8s-.01.38-.01.38Zm14.02-5.43s.02,0,.04,0l.02-1.35-5.67-.29,5.61,1.65Zm8-.53l-4.62,1.03,5.35.15-.35-1.14c-.14,0-.26-.02-.38-.04Zm1.48,1.2l5.76.16-6.14-1.35.37,1.19Zm-6.19.31l6.12,1.82-.53-1.67-5.6-.15Zm15.37.84l-5.7,1.47.81.07,4.5.08,8.41-1.23-6.62-.5c-.37.13-.93.17-1.39.11Zm-7.92-3.01l7.83,1.73c.13-.02.27-.04.41-.05l1.36-4.1-9.6,2.42Zm-10.67-.64v-.85c-.12-.01-.24-.04-.35-.07l-4.75.66,5.1.26Zm.73-.85v.89s4.19.21,4.19.21l-4.12-1.11s-.05,0-.07,0Zm-.04,2.68c.06,0,.12.01.18.02l4.86-1.09-5.02-.25-.02,1.32Zm37.82,6.68c.13-.03.27-.05.41-.06l.06-1.02-5.99.13,5.52.95Zm12.72,15.88c-.28.02-.59,0-.85-.04l-8.49,2.14,17.58,1.13-8.25-3.23Zm-17.66,1.67l-5.42-.7-1.35,4.67,10.29-3.34-3.52-.64Zm6.38-.21l7.25-1.83-15.67.61,7.02,1.26c.41-.09.96-.11,1.4-.04Zm-13.9,4.23l1.38-4.74-9.46,3.08,7.56,1.72c.16-.03.34-.05.52-.05Zm-9.77-2.33l8.61-2.8-3.16-.41-4.18-.33c-.39.14-.97.2-1.47.15l-9.65,3.16,8.27.41c.4-.17,1.04-.24,1.59-.18Zm33.64-5.91l2.74.26-2.98-.57.24.31Zm.85,1.05c.06,0,.13,0,.19,0,.45,0,.86.08,1.16.2l3.73-.2-5.52-.53.43.54Zm-.33-3.08l-.58.45c.2.09.35.2.44.32l.29.06,7.92.28-8.07-1.11Zm10.19,4.05c-.38-.01-.73-.08-.99-.19l-5.16.28,6.47,1.02-.32-1.11Zm-69.89,2.21l.79-2.48-9.48.96,8.09,1.58c.18-.04.38-.06.6-.07Zm-11.1,1.48l-.11,1.61c.06,0,.11,0,.16.02l7.51-1.97-7.56.33Zm5.39,3.52l-4.92-.55c-.31.09-.7.15-1.1.13l-.51.76,6.53-.34Zm-6.88.84l.26-.02h-.25s0,.02,0,.02Zm2.04-6.66c-.13.03-.27.05-.41.06l-.11,1.77,8-.35-7.48-1.47Zm83-4.67c.54,0,1.02.11,1.32.29l4.08.11-5.94-1.84c-.13.02-.27.02-.42.02-.53,0-.99-.11-1.29-.28l-4.8-.12,6.55,1.85c.16-.02.32-.03.5-.03Zm-59.86,6.53l1.05-4.32-10.9,3.74,8.96.74c.25-.09.55-.15.89-.16Zm1.34,1.31c-.31.13-.71.21-1.19.2l-.48.9,7.9-.78-6.23-.32Zm-12.37-4.9l-.79,2.47,9.93-3.4-9.14.92Zm80.75-.45l-3.62-.55,4.05,1.15-.42-.59Zm42.07-7.07l-4.62,1.44,5.68-.48-.59-.94c-.16,0-.32,0-.48-.02Zm-7.33,2.6c-.18.05-.39.08-.61.1l-.68,4.28,9.41-3.25-8.13-1.13Zm9.54.31s.05,0,.08-.02l-.93-1.48-6.22.52,7.07.98Zm-10.39-1.66c.14,0,.28,0,.41.02l5.43-1.69-7.44.13,1.37,1.54c.08,0,.15,0,.23,0Zm-35.29,2.03l-6.07-.39,6.32,1.95-.24-1.56Zm42.15-8.24l.04.13c.46.02.86.13,1.11.28l2.46.1-3.42-.56c-.06.01-.12.03-.18.04Zm2.82,2.01c-.18.06-.4.1-.63.13l-.06,1.42c.17.02.32.05.47.08l7.15-1.01-6.93-.62Zm-21.92,6.13l-.18,2.58,9.37-3.31-9.19.72Zm21.65-3.24l.61.97,6.37-.54-6.73-.5c-.07.03-.16.05-.24.08Zm2.02,5.65l-.33-1.31c-.06,0-.11,0-.17,0l-7.37,2.55,7.87-1.23Zm-3.77-6.87c.18-.06.4-.1.62-.12l.06-1.42c-.17-.02-.33-.05-.48-.09l-7.09.92,6.89.71Zm-20,.23c.27,0,.51.03.73.08l3.26-.59-4.37.12.27.4s.06,0,.1,0Zm-18.43,8.12l-2.82-.7.22.31,2.59.4Zm-3.66-.76c-.58.02-1.11-.09-1.43-.28l-2.1-.06,3.7.57-.17-.23Zm3.28,1.74h3.68s-5.5-.83-5.5-.83l.41.58c.54-.02,1.08.08,1.41.25Zm17.68-10.69s-.04.01-.06.02l.5.73,4.66-.13-5.09-.61Zm.71,3.09l-7.69,2.91,7.52-.59.17-2.32Zm-2.34-.34l-17.43,1.21,8.58,1.83c.28-.05.62-.07.93-.05l7.92-2.99Zm-52.24,11.25l-.63,3.43,8.63.11-8-3.54Zm-83.76,2.69l1.23-4.33c-.05,0-.09-.02-.14-.03l-9.92,1.99,8.48,2.41c.12-.02.23-.03.35-.03Zm9.8-2.23l-7.5-2.1c-.12.01-.23.02-.35.03l-1.23,4.34h.02l9.06-2.27Zm12.66,2.77l-6.37,1.16,5.78-.3.59-.87Zm-33.08-2.27c-.12.01-.24.03-.37.03l-.36,1.12,7.2.68-6.47-1.83Zm6.21-2.6l3.82-.93-6.16-2.15c-.39.04-.82,0-1.15-.08l-10.93,1.74,7.21,2.52,7.21-1.09Zm24.36,10.31l.18-.88c-.21-.03-.4-.07-.57-.13l-6.67.63,7.06.38Zm8.69,5.57l-8.26-2.18c-.19.03-.4.04-.63.04l-.98,1.92,9.87.22Zm3.1-.47l.12-3.42c-.21-.02-.4-.05-.57-.1l-8.71,1.21,8.89,2.35c.09-.01.18-.02.27-.03Zm-12.59-3.21c.14-.02.27-.03.42-.04l.27-1.38-7.99-.43,7.29,1.85Zm-72.11-19.43l1.4-3.81-9.2,2.12,7.29,1.74c.16-.02.33-.04.5-.05Zm87.68,13.23c-.53.15-1.3.16-1.84.02l-7.2,1.07,5.53.47c.52-.18,1.35-.22,1.94-.08l2.46-.19,5.1-.54-5.99-.75Zm-78.68-14.65l-6.66-2.34c-.07,0-.15,0-.22,0l-1.4,3.81s.08.02.12.03l8.15-1.5Zm1.65.84c-.1-.01-.2-.03-.3-.05l-7.29,1.35,7.37.53.22-1.83Zm15.91,9.99l-5.99-2.01c-.34.03-.73.02-1.04-.04l-1.64.93,8.67,1.13Zm-29.01-8.74l-7.07-1.69c-.2.04-.42.05-.66.05l-1.38,2.26,9.1-.63Zm22.65,5.24c.4,0,.76.06,1.04.16l5.67-.5,1.26-.16-14.2-1.75,5.94,2.25c.09,0,.19,0,.28,0Zm-2.85.3l-6.48-2.47c-.23.02-.49.01-.72-.01l-2.25,1.77,9.45.71Zm-7.04-3.93l.07-.57-4.96-.35,4.49.98c.12-.02.25-.04.39-.05Zm-20.47-4.71l.42-1-6.61.47,5.32.65c.25-.07.54-.11.86-.12Zm136.27,15.06l8.46,2.67c.08,0,.15-.01.22-.02l.47-2.53-9.15-.12Zm-3.28.46s-.02,0-.04,0l-10.78,2.99.79.24.46.08h-.21s8.38,2.48,8.38,2.48c.09-.01.19-.02.28-.03l1.11-5.74Zm13.15-4.24l-10.15,3.3,9.52.13.63-3.43Zm-46.93.07c-.42.15-1.07.2-1.61.12l-8.32,2.19,6.6.74c.45-.14,1.12-.17,1.64-.08l9.9-2.28-8.22-.68Zm45.8,13.2l-.06-1.99-9.23-.21,9.05,2.23c.09-.01.17-.03.25-.03Zm1.13-9.36l-.47,2.55s0,0,.02,0l8.56-2.44-8.11-.11Zm22.24-5.76l-6.32-1,6.79,2.66-.47-1.66Zm-11.37,4.91c.22,0,.42.01.61.05l9.31-2.33-17.84-1.15,7.76,3.43h.17Zm18.82-6.99l-4.86-1.38c-.16.02-.32.03-.49.03-.79,0-1.44-.24-1.61-.56l-7.94-.28,6.4,1.22c.22-.05.48-.08.75-.08.66,0,1.22.16,1.5.4l6.26.64Zm-43.1,15.42c-.12.02-.24.03-.37.04l-.12.92,7.51.77-7.02-1.73Zm-24.62-3.74c.2.02.38.07.54.12l5.65-.58-6.06-.17-.13.62Zm1.34-3.15l10.83-2.93-10.27,1.01-.97,1.79c.15.03.29.08.41.12Zm-1.11,2.06l6.45.17-5.68-.98c-.19.04-.4.08-.62.08l-.15.72Zm1.68-5.4l-7.14,1.65,6.6-.65.54-1Zm-1.92,11.06c.24.02.46.06.66.11l8.42-1.12-5.74-1.35-3.46-.68.12,3.04Zm23.31.93l.05-.41-4.7-.48,4.2.94c.14-.02.3-.04.45-.05Zm.22-1.75c-.27-.03-.52-.09-.72-.17l-6.07.36,6.68.68.11-.86Zm-10.77.67c-.52.09-1.2.07-1.67-.06l-6.96.92,15.09.59-6.46-1.46Zm-130.87-24.69l1.84-3.36-8.73,3.02,5.86.5c.28-.1.64-.16,1.03-.16Zm35.97,5.76l-4.72-.34-.06.54c.23.02.44.07.61.14l4.17-.33Zm4.83-.63c.14,0,.28,0,.41.02l3.35-2.77s-.02,0-.04,0l-10.55.38,6.52,2.39c.1,0,.2-.01.3-.01Zm-27.95-7.54c-.17.03-.36.05-.56.05l-.89,2.04,8.16-.58-6.71-1.52Zm18.71,4.05l2.82-2.69s-.03,0-.04-.01l-9.53.56,6.1,2.15c.21-.02.44-.02.65,0Zm9.67,4.94c-.5.06-1.09,0-1.48-.14l-5.4.43,13.16,1.62-6.29-1.91Zm-18.91-8.14l2.14-2.75-9.43,1.33,6.5,1.47c.24-.05.52-.06.79-.05Zm10.34-.38l-6.95-2.3c-.17.02-.35.02-.51.01l-2.16,2.77c.07.02.14.04.2.07l9.42-.55Zm84.6,28.31c-.19-.02-.37-.06-.53-.11l-6.94.81,7.28.36.19-1.06Zm-82.22-28.69c.06,0,.14,0,.2-.01l.27-.94-5.83-.82,5.36,1.77Zm-3.53,5.4l-.22,1.86,6.61.47-6.37-2.33h-.02Zm36.35-4.69l-7.32,1.93,14.09-.61.27-.08-5.89-1.26c-.35.07-.79.08-1.15.02Zm22.11-2.2l-9.14,3.24,3.08.49,3.94.42c.37-.12.88-.16,1.33-.12l9.64-3.14-7.66-.99c-.34.09-.79.14-1.19.1Zm-33.53,3.83c.33-.05.73-.05,1.06,0l7.71-2.03-15.7.25,6.92,1.79Zm-49.41,2.05l-6.15-.75c-.35.1-.83.14-1.25.1l-7.2,2.46,14.61-1.81Zm45.16,6.47l1.32-1.84-9.53-.46,7.64,2.32c.18-.02.37-.03.58-.02Zm1.64-2.3l.79-1.11c-.05-.01-.1-.03-.14-.04l-8.45.78,7.8.37Zm1.13-2.43c.14-.02.28-.03.43-.03l.56-1.41-7.04-.2,6.05,1.65Zm1.17-1.91l.21-.52c-.12-.02-.22-.05-.32-.08l-4.67.47,4.79.14Zm44.19-5.62c.23-.07.51-.11.81-.11l.56-1.32-7.84.6,6.46.83Zm-117.85,2.51l1.34-1.17-7.58,1.25,4.74.12c.37-.17.97-.25,1.51-.2Zm-4.72-3.33l-4.19,3.29s.09.04.12.06l10.82-1.79,1.05-.92c-.13-.05-.24-.11-.32-.17l-6.15-.58c-.36.12-.89.17-1.33.12Zm9.96.62c-.36.16-.94.23-1.45.18l-.66.57,4.16-.69-2.06-.07Zm-15.9,5.15l6.2-1.36-.83-.02-4.28.1-1.09,1.28Zm18.87-2.02l.8-1.18-6.27,1.15,4.28.22c.3-.12.74-.19,1.19-.18Zm-7.49.82c-.43.17-1.15.23-1.7.13l-4.67,1.03,9.26-1-2.89-.15Zm8.39.47c-.26.09-.58.15-.94.15l-.51,1.19,6.55-.91-5.1-.43Zm-7.69-2.17l4.47-1.47-3.44.57-1.03.9Zm19.69-1.99c-.25.08-.55.11-.9.12l-1.87,3.42,8.94-2.78-6.17-.76Zm7.6,3.83l-.48,1.08,6.6-1.52-6.12.43Zm-18.79-3.47l-4.64,1.52,4.11-.75.53-.77Zm19.1,1.01l-8.15,2.53,7.28-.51.88-2.02Zm90.4-3.35l.25-.58s-.04,0-.05,0l-5.14.98,4.94-.38Zm-89.41,1.84l2.61-2.7-9.45,2.11,5.68.7c.32-.1.76-.14,1.17-.11Zm-20.2-.92c.38-.17,1-.24,1.54-.17l.24-.08,1.42-.92-5.68,1.1,2.49.08Zm.1,2.59l-.76,1.11,5.96-2.06-5.19.95Zm.38-.56l5.86-1.07-4.01.02c-.3.16-.78.25-1.3.25l-.55.81Zm37.95,15.12l-4.39-1.14c-.38.06-.85.05-1.22-.01l-.97.58,6.58.58Zm86.99,15.5l-.25,1.44c.17.02.34.05.49.09l8.21-1.12-8.45-.42Zm-25.61,3.12l9.44,2.51c.37-.06.81-.06,1.19,0l10.92-3.08-21.54.58Zm25.62-.17c-.4.08-.91.09-1.33.03l-10.49,2.97,20.62-1.15-8.79-1.85Zm-17.05,8.8l10.07-2.5-9.36.36-.75,2.14s.02,0,.04,0Zm.89-2.62l9.72-.38-8.31-1.63c-.22.05-.48.08-.74.08l-.68,1.93Zm43-1.07c-.19.03-.4.05-.62.06l-1.02,2.66,10.47-.54-8.83-2.18Zm-1.59-1.48c.17-.04.35-.07.53-.08l-.09-3.33c-.19-.01-.37-.04-.53-.08l-10.06,1.76,10.16,1.73Zm-11.7-5.52c-.55.15-1.38.14-1.92,0l-6.97.96,15.9.1-7.01-1.05Zm11.27-.18l-6.08-.13,1.28.19,5.14.55-.34-.61Zm-66.28-7.77l-8.43.07-1.44,1.69,9.88-1.76Zm3.82.43s-.03,0-.04,0l-10.53,1.89,9.44.09,1.14-1.97Zm-12.14-1.45l-7.53.66-.23.03,7.22-.06.53-.63Zm87.99,17.43l.5-5.49s-.04,0-.06,0l-10.27,3.22,9.43,2.32c.13-.02.26-.04.4-.05Zm-96.88-18.81c-.42.15-1.07.21-1.61.14l-2,1.5,8.98-1.19-5.37-.45Zm42.48,16.45h0l-9.12,2.33,8.42-.33.71-2Zm-2.63-.52h-9.67l-.25,2.45c.07,0,.14.02.21.03l9.71-2.48Zm-9.36-2.88l-.25,2.41h9.74l-9.16-2.44c-.11.02-.22.03-.33.04Zm-11.05-5.94l10.08-1.73-9.13-.09-1.04,1.8s.05.01.08.02Zm145.93-8.54l-8.53-1.6c-.48.1-1.15.09-1.62-.02l-10,1.55,4.39,1.33,6.3,1.59,6.83-1.9,2.64-.94Zm-56.3,9.71l8,.39-8.49-2.7.49,2.32Zm33.5-9.18c-.24-.01-.46-.04-.66-.09l-7.15,1.13,8.9,3.85-1.09-4.89Zm-9.66,1.59c-.28.01-.56,0-.81-.04l-9.95,2.43,19.53,1.41-8.77-3.8Zm-12.98,3.2c-.39.03-.81,0-1.15-.08l-8,1.42,18.14,1.96-8.99-3.31Zm12.38,3.14c.22,0,.44.02.63.05l8.73-2.12-19.1-1.38,9.41,3.46c.11,0,.22-.01.33-.01Zm12.65-2.82l3.32-.68,5.03-1.4-10.02-3.03,1.12,5.05c.19,0,.37.03.54.07Zm11.73,3.39l-.36-2.43h-9.02s9.27,2.45,9.27,2.45c.04,0,.07,0,.11-.01Zm-164.04-5.25l-7.3-1.91c-.17.02-.35.04-.53.04l-1.66,4.14,9.49-2.28Zm163.6,2.35l-.22-1.51c-.17,0-.33-.03-.48-.06l-7.55,1.56h8.25Zm-46.03,4.26l1.63-.07-2.26-.11c.24.04.46.1.63.17Zm-11.46,2.89l4.51-.7-7-.36c-.56.23-1.56.28-2.21.1l-4.04.58.97.11,5.58.36c.57-.22,1.53-.26,2.19-.09Zm11.41-1.28l3.39-.18h-3.63c.09.07.17.12.24.18Zm-.7,1.01c-.08.02-.15.04-.24.06l.4.77,6.02.05-6.18-.88Zm55.51-6.86l-7.96-1.59c-.09.02-.18.03-.27.04l.22,1.53h8.01Zm-55.31,9.3l-.58-1.14-6.52-.05,6.95,1.22s.09-.02.14-.03Zm.76-.07c.32,0,.62.03.88.09l5.99-1.09-7.44-.06.53,1.06h.04Zm3.92-2.76l6.17.87c.29-.08.66-.12,1.01-.12l.33-.69-7.51-.06Zm7.13,2.38c-.31,0-.59-.04-.84-.09l-5.64,1.03,6.84-.05-.37-.89Zm-1.61-3.05l-3.88.21,5.74.05c-.18-.05-.33-.12-.45-.2l-1.41-.06Zm-210.03-26.38l-4.92.44h4.46s.46-.44.46-.44Zm-.09.91l-1.76,1.66,9.28-1.67h-7.52Zm12.55.37c-.45.12-1.09.13-1.57.02l-7.48,1.35,12.79-.82-3.74-.56Zm-18.04.82l2.21.49c.09,0,.19,0,.3,0s.22,0,.32.01l1.79-1.68h-9.13s4.51,1.19,4.51,1.19Zm6.17-3.37l1.28-1.48-3.46.08-2.48.17,4.63,1.23s.02,0,.04,0Zm21.21,9.62l-.79.14c.09.02.17.04.24.06l.55-.2Zm3.95-5.14l-5.18-.73c-.4.11-.97.14-1.42.06l-7.53,1.9,14.13-1.23Zm-4.61,4.21l-2.33-.09c-.45.2-1.25.26-1.84.15l-.8.17-2.85,1.12,7.82-1.34Zm-4.34-1.27c.36-.09.83-.12,1.25-.07l7.4-2.36-15.54,1.35,6.89,1.08Zm-31.74-13.04c-.07-.03-.14-.06-.21-.1l-3.56-.07,3.46.47.31-.3Zm-2.09,1.41c.2-.02.42-.02.61,0l.73-.69-5.41-.73,4.07,1.42Zm-2.1,1.99l-2.67,1.12s.01.02.02.02l10.83-.48-8.18-.67Zm47.02,7.61l-6.12,1.95,5.09-.6,1.04-1.35Zm-42.11-10.86l-.27.25,3.6.49-2.61-.75c-.23.03-.49.03-.73.01Zm-5.09,2.77l.79-.33h-4.86l4.07.33Zm13.58-1.8c.24,0,.48.02.68.07l11.53-2.22-4.96-.83c-.47.11-1.12.1-1.56-.02l-11.43,1.51,5.3,1.52c.14-.02.29-.03.44-.03Zm-1.38,2.31l.61-.98c-.12-.03-.24-.07-.35-.12l-5.7.15,4.74,1c.21-.04.45-.06.7-.06Zm6.56-.22l-4.44-.75c-.23.05-.5.08-.79.08l-.61.98c.09.02.18.05.26.08l5.58-.38Zm39.42,8.72c-.27.07-.6.11-.94.1l-.63,1.03,6.58-.41-5-.72Zm14.97,5.67c-.22.04-.48.05-.73.04l-.88,1.27,8.07.33-6.46-1.64Zm-2.38,1.28l.93-1.33s-.04,0-.07-.02l-7.74,1.07,6.89.28Zm3.94-3.58l-5.29.25,4.24.38,1.06-.62Zm-2.43-.89l-4.78-1.06c-.31.06-.69.08-1.03.04l-1.43,1.31s.06.02.09.04l7.15-.33Zm11.72,5.95c-.19.03-.4.05-.63.04l-.96,1.69,8.56.12-6.98-1.85Zm6.67,2.32l-8.52-.11-1.22,2.15,9.74-2.03Zm-26.35-8.13l1.29-1.18-6.2.96,3.51.35c.37-.13.92-.18,1.4-.13Zm19.1,4.3c.63,0,1.17.14,1.48.36l7.45.47-5.97-1.71c-.16.02-.33.03-.51.03-.56,0-1.06-.12-1.37-.3l-7.2-.19,5.51,1.39c.19-.03.39-.05.6-.05Zm-1.77,3.23l.99-1.76s-.04,0-.05-.01l-9.54,1.66,8.59.12Zm-30.08-6.74l-1.64.17,1.21-.04.43-.13Zm-4.93-2.55l-.34.44,3.75-.85-3.41.41Zm9.83-.77l-6.37,1.45,5.7-.36.67-1.09Zm-10.99,1.24l.28-.36-4.09.48,2.46.09c.34-.15.84-.23,1.35-.21Zm1,1.29c-.5.21-1.36.26-1.97.12l-.55.09-1.35.49,5.92-.62-2.05-.08Zm11.44.65l-1.53-.16c-.56.18-1.46.18-2.02,0l-.22.02-1.11.34,3.31-.11,1.57-.1Zm-1.61-1.64l-.13.21s.04,0,.06.01l2.38-.37-2.3.15Zm-.86.12l.05-.08-3.21.2,1.9.08c.32-.14.77-.22,1.25-.21Zm38.79,8.03c.22,0,.42.01.61.04l.94-.62-5.66-.58-1.31-.08,4.85,1.28c.18-.03.37-.04.58-.04Zm152.8-43.17c.32,0,.62.04.86.12l1.44-.11-2.64-.19.17.19h.17Zm79,10.64l-8.05-1.72c-.25.05-.56.06-.84.04l-5.41,1.87,14.3-.18Zm-9.62-4.25l3.38.09-3.68-.5.3.41Zm1.01,1.22c.26,0,.5.03.72.08l4.31-.65-5.68-.17.54.74h.11Zm8.3-1.28c.09-.02.17-.04.26-.05l-.28-1.39c-.22-.01-.41-.05-.58-.1l-5.93.65,6.53.89Zm-5.57,2.04l8.6,1.83c.18-.03.37-.05.58-.05s.4.01.58.05l6.16-1.3-8.9-1.38c-.42.1-.99.1-1.41,0l-5.61.85Zm-38.13,2.98l.53.06,4.08.26c.15-.06.34-.1.54-.13l-.08-.78-5.07.59Zm27.63.42c-.21.02-.45.02-.66,0l-8.08,2.69,4.67,1.09,5.09.98s.04,0,.06,0l7.38-2.74-6.75-1.67-1.71-.37Zm-22.72-2.49l-5.04,1.6,5.16-.6-.1-1s-.01,0-.01,0Zm11.92,5.94l-7.4,3.2h.03l-.07.02-.6.26,8.19,1.21c.33-.08.78-.11,1.16-.07l8.34-2.56-8.97-2.09c-.21.03-.45.05-.68.04Zm27.56-10.36l.28,1.39c.17,0,.34.03.48.07l5.41-.83-5.88-.69c-.09.02-.19.04-.29.06Zm6.4-3.07c.26,0,.5.03.7.08l2-.29-2.77.09.07.12Zm1.56,1.66l3.8-.25-4.33-.22.53.47Zm-.33.5l-4.19.27,5.17.61-.99-.88Zm-52.88,4.87l-3.45-.15c-.4.15-1.04.2-1.54.11l-2.97.61,7.97-.57Zm53.72-4.93l.99.89c.1,0,.19-.01.3-.01.13,0,.24,0,.36.02l4.33-1.28-5.98.39Zm-2.74-3.24l.33.56,4.13-.14-4.39-.44s-.04.01-.07.02Zm5.35,5.97l4.39-.03-4.86-.57.47.6Zm-7.58-2.88l3.64-.24-.45-.39c-.06,0-.14,0-.22,0l-2.44.48-.54.14Zm-.24-1.96l2.25.15c.06-.02.12-.03.17-.05l-.1-.18-2.32.08Zm-79.6-6.8l4.51.67c.12-.03.26-.05.4-.06l.14-.67-5.06.06Zm4.49,4.54s.08.01.12.02l6.75-1-6.5-.2-.37,1.17Zm5.45-2.77l4.98,1.07s.06,0,.09-.01l-.06-.76-5.01-.29Zm-2.18,3.3l7.27.3v-1.29c-.09,0-.18-.03-.27-.05l-7.01,1.04Zm18.9,7.43c.12,0,.24,0,.35.02l5.14-1.53-1.31-.04-5.05.09.86,1.47h0Zm-273.49,16.76c-.44.08-1.02.07-1.44-.04l-.66.28,5.24.42-3.14-.67Zm243-24.93l3.31.25-3.95-.97.65.72Zm18.22,4.28l-2.4.08,3.45.35-.14-.27c-.36,0-.68-.07-.91-.16Zm-10.11-5.74l.32-1.02s-.07,0-.1-.02l-5.97.87,5.76.17Zm-.76,1.64c.08,0,.17-.02.26-.02l.36-1.15-6.19-.19,5.58,1.36Zm12.53,5.74l-.35-.69-3.91-.41,4.26,1.1Zm-.06,1.28l-3.88.42,9.73.66-4.54-1.01c-.42.07-.95.04-1.32-.07Zm1.3,2.85c.09,0,.19-.01.3-.01.2,0,.4.02.58.05l5.79-1.19-12.83-.86,6.17,2.02Zm-1.03-5.24l2.5.26-2.67-.6.17.34Zm.25.5l.33.66c.31,0,.59.05.82.12l3.54-.3-4.69-.48Zm-.72-5.56v1.32s6.41.27,6.41.27l-6.35-1.6s-.04,0-.06,0Zm-.09-1.99l.06.71c.16.01.3.04.43.08l4.43-.5-4.92-.29Zm.05,5.38c.06,0,.12.01.18.02l6.81-1.33-6.97-.29-.02,1.6Zm104.7,36.72l.52.82,6.67.44-7.19-1.26Zm-19.33,4.01l-8.23-1.14,8.78,3.18-.55-2.04Zm-.6-2.22c-.34-.01-.65-.07-.89-.16l-7.36.67,8.72,1.21-.46-1.72Zm-22.5.87l.65,2.49c.06,0,.11,0,.17,0l7.54-2.76-8.36.26Zm10.62-33.68s.08,0,.12,0c.18,0,.36.01.52.04l5-1.17-6.47.05.83,1.08Zm21.65,27.02l8.88,2.6c.15-.02.31-.03.48-.03.29,0,.56.03.79.08l6.92-1.19-17.07-1.47Zm-93.16,16.68l8.41-2.42h-9.04s.36,2.4.36,2.4c.09,0,.18.01.27.02Zm92.63-7.97l-8.48-2.88.47,1.77,8.01,1.11Zm10.72-3.47l-8.01-.54,9.31,2.6-1.3-2.06Zm-11.33-.31c-.51.07-1.12.02-1.53-.11l-3.83.4,12.94,1.83-7.58-2.12Zm-20.15.37c.4,0,.78.06,1.07.16l6.8-.61-15.79-1.66,7.4,2.14c.17-.02.33-.03.51-.03Zm-47.12,9.92l-.89-2.49-9.62,1.16,10.19,1.4c.09-.03.2-.05.32-.07Zm14.02-3.75c-.34.1-.79.15-1.22.13l-8.77,3.63,18.79-2.7-8.8-1.06Zm-13.15,3.71l9.05-3.74-10.09,1.21.89,2.52c.05,0,.1,0,.14,0Zm-19.86-2.82l4.76.95c.29-.06.63-.08.97-.07l9.26-3.92-9.95-1.2c-.36.11-.86.16-1.31.12l-8.33,2.97,4.6,1.16Zm44.02-.74l-.45-1.01-6.77.26,6.91.83c.09-.03.19-.05.31-.08Zm11.76-.95c-.29,0-.58,0-.83-.06l-6.97,1.56,8.98.18-1.18-1.68Zm-10.37.95l5.9-1.32-7,.27.43.99c.24,0,.46.02.67.06Zm7.27-1.84l-9.72-2.26,1.15,2.59,8.58-.33Zm1.58-6.56l.76,2.95,8.51-.26-9.27-2.68Zm42.79-29.84l.93,1.19s.09,0,.13,0c.17,0,.32.01.47.03l5.28-1.38-6.81.16Zm-10.58.67l-6.3,1.91,7.69.78c.4-.12.99-.16,1.46-.07l6.19-1.36-7.97-1.32c-.31.07-.71.09-1.05.06Zm4.23-.52l6.5,1.08-.95-1.21-5.55.13Zm17.64,28.55c-.49.14-1.2.15-1.71.03l-5.39.94,14.13-.05-7.03-.92Zm-39.17-28.25l7.64,1.66-1.09-1.73-6.55.08Zm8.43,1.66h.04c.13,0,.25,0,.37.02l6.12-1.86-7.64.09,1.1,1.75Zm-3.36-3.28l-4.93,1.15,6.12-.08-.65-1.03c-.19,0-.37-.01-.54-.04Zm27.7,3.13l7.76,1.16-1.2-1.42-6.57.26Zm-3.16.53l.53,1.12,6.75-.05-7.2-1.08s-.05,0-.08.01Zm13.36,14.6h.27c.36,0,.69.05.96.14l1.78-.19-3.01.05Zm-2.1-12.69l-7.84,1.64,8.36,2.34s.03,0,.04,0l-.27-3.93c-.1,0-.19-.02-.29-.04Zm3.12,14.61l-6.09,1.24-.42.15,9.72,1.85-3.21-3.24Zm-6.97,4.87l1.31,3.44,7.9-3.97-9.21.53Zm7.22-5.48l.05.05.19-.04-.22-.02s-.01,0-.02,0Zm-6.31-7.71l.46.03h-.12s4.76.31,4.76.31l-1.05-1.3c-.2,0-.41,0-.6-.03l-3.46.99Zm3.94-6.27l.27,3.93c.07,0,.14.02.22.03l8.92-2.18-9.18-1.82c-.07.01-.15.03-.23.04Zm11.6,6.84l-.19-4.43c-.06,0-.13-.01-.19-.02l-9.1,2.23,9.33,2.25c.05,0,.1-.01.16-.02Zm-345.45-4.66l.12-.49-3.16,1,3.04-.51Zm324.19.28l3.18,3.23c.08,0,.17,0,.24,0,.16,0,.31.01.45.03l3.84-1.09-7.71-2.16Zm11.32,11.66c-.2.01-.43.01-.63,0l-1.45.5,2.14-.43-.06-.06Zm-8.76-7.15l-6.76.8.11.02,14.32,1.34-6.43-2.07c-.41.05-.89,0-1.23-.09Zm3-7.37l-7.4.06.57,1.2c.2,0,.4.02.57.06l6.27-1.31Zm-12.2,3.73l8.81,2.21-3.24-3.31c-.27.02-.55,0-.79-.03l-4.78,1.13Zm-2.1-3.61l6.74,1.21h0l-.6-1.26-6.15.05Zm-.31,2.91c.09,0,.17,0,.27,0,.14,0,.27,0,.4.02l1.27-.24,3.36-.8-4.23-.76-3.36-.48,2.29,2.26Zm-12.48-1.83h.12c.2,0,.4.01.58.05l3.97-.9-5.11.25.45.6Zm17.71-2.71l-5.27,1.16,6.29-.05-.5-1.06c-.18,0-.35-.02-.51-.05Zm-8.75,2.11c-.22,0-.43,0-.63-.04l-5.5,1.24,8.84,1.28-2.48-2.44-.23-.03Zm-4.18,23.03l5.6.94-5.99-1.76.39.82Zm9.67-2.58c-.42.06-.94.04-1.33-.06l-6.43,1.04,16.58,1.42-8.82-2.41Zm11.17-1.14l-9.26.53,10.56,2.88-1.3-3.41Zm-21.41,4.11l-6.91-1.16,7.77,2.98-.86-1.82Zm21.21-6.86s-.06.01-.09.02l.85,2.23,8.44-.49-9.2-1.76Zm6.17-3.94l-.12-.13-2.19.03,2.21.13s.06-.02.1-.04Zm-10.34.41l-5.9.7-1.49.26,9.93,1.29c.35-.1.83-.14,1.25-.1l4.83-1.65-8.61-.51Zm10.54-2.21l-2.89-.4.82.35,2.07.05Zm-107.56-6.57l-5.14,1.12,12.94.08-6.55-1.22c-.37.08-.86.08-1.25.01Zm34.88-.68l6.94-2.57s-.07-.04-.1-.06l-7,2.6.17.03Zm-19,5.7c.15,0,.32,0,.47,0l4.13-1.64-6.01.21,1.41,1.42Zm9.32-.05l5.78-.33-7.09-.95,1.31,1.27Zm8.85-4.54l.39,1.5,6.76-.52-6.91-1.03c-.07.02-.15.04-.23.05Zm-11.46,3.33l-3.98,1.58,5.77-.33-1.3-1.26c-.16,0-.32.01-.48,0Zm51.16,18.24c.38,0,.74.06,1.02.15l4.34-.44-12.97-2.48,7.32,2.79c.09,0,.19-.01.3-.01Zm-72.6-25.57l-.15,2.09,6.74-3.09-6.59,1Zm1.97,2.91l8.12,1.5c.24-.05.53-.08.81-.06l7.32-3.16-16.24,1.72Zm10.88,3.81l4.83-.17-5.86-.86,1.03,1.03Zm47.24-11.11l-4.83,1.02-.76.2,13.99.36-7.26-1.57c-.35.06-.79.06-1.14,0Zm-18.81,3.6c.27-.04.6-.05.88-.01l6.35-1.95-14.41.19,7.18,1.77Zm32-1.13s-.02,0-.03,0l.58.78,4.85-.23-.28-.04-5.12-.52Zm-1.43.07l-4.78,1.04,5.99-.28-.53-.71c-.24,0-.47,0-.68-.05Zm1.95,1.92s.07-.02.11-.03l-.5-.67-5.23.25,5.63.46Zm-11.65-1.08c.17-.03.35-.04.54-.04.21,0,.4.02.58.05l6.08-1.33-14.49-.37,7.3,1.69Zm-14.08-.51l-4.32,1.33.8.2,7.16,1.01-.71-3.29-2.93.75Zm3.64-.86l.75,3.5,1.82.26,6.32-1.72-8.86-2.05s-.02,0-.03,0Zm.14,4.16s.01,0,.02,0l-.06-.26-2.54-.36,2.58.63Zm-39.11,31.82l-.87-2.44s-.07,0-.11,0l-8.43,3.57,9.41-1.13Zm-86.36,6.18c.5,0,.94.08,1.26.22l6.75-.33-5.68-.73c-.28.08-.62.13-.99.13-.55,0-1.03-.1-1.35-.27h-6.61s5.78,1.07,5.78,1.07c.24-.06.53-.08.84-.08Zm13.85,3l-.35-.7c-.35,0-.69-.04-.97-.11l-4.91.76,6.23.05Zm-1.02-6.44c-.17,0-.32-.02-.47-.05l-7.99,1.86.63.08,8.31.4-.48-2.29Zm9.82-3.02l-9.58-4.48c-.22,0-.44,0-.64-.03l-9.39,2.68,9.62,3.32c.12,0,.24-.02.37-.02.3,0,.59.03.84.09l8.79-1.56Zm15.05-3.76c.32,0,.61.03.87.1l7.06-1.12-9.67-3.84c-.46.03-.94-.02-1.28-.14l-7.04.68,9.88,4.32c.06,0,.12,0,.18,0Zm-13.09-8.72l.33,1.17,5.98.94-6.31-2.12Zm118.43,4.92l-8.8-3.35c-.61.04-1.25-.07-1.61-.26l-8.74,1.58.13.03,19.02,2Zm-118.06-.07c-.06,0-.12-.01-.17-.02l-9.5,2.38,9.36.85.31-3.21Zm-.35,3.68l-9.17-.83,8.85,4.14.32-3.31Zm-11.2,9.78v-.04s-2.5-.12-2.5-.12l2.02.25c.14-.04.3-.08.48-.09Zm-48.98-1.07c-.16.03-.33.05-.51.06l-.19,1.07,7.69.38-6.99-1.51Zm.7-11.06l-8.96.88,7.07.89c.28-.08.63-.13,1-.13l.89-1.64Zm-1.43,3.14c-.19-.02-.36-.06-.51-.11l-6.2.67,6.55.17.16-.73Zm-.25,1.2l-6.31-.17,5.5.88c.2-.05.43-.08.68-.09l.13-.61Zm24.66,5.82l-.04.35c.37.04.68.13.91.25h5.04l-5.91-.6Zm-12.35,2.12c.16-.02.33-.03.5-.03.35,0,.66.04.93.11l6.43-1-15.36-.6,4.88,1.05,2.63.48Zm13.22.81l6.14.13-6.7-1.24s-.04,0-.05,0l.61,1.1Zm-1.33-1.02c-.35,0-.69-.03-.97-.1l-6.04.94,7.56.17-.55-1Zm47.63-8.74l-9.96-.9-.32,3.33c.07,0,.14.02.2.03l10.08-2.46Zm61.95,1.96l-10.67-1.26c-.12.03-.24.06-.36.08l.85,2.4,10.18-1.22Zm-22.87-34.06c-.19.07-.4.11-.64.14l-.08,1.13,5.22-.79-2.49-.35-2.02-.13Zm10.24,31.52c.34-.1.79-.15,1.22-.13l8.49-3.45-18.68,2.46,1.19.18,7.79.94Zm-11.67-1.68l8.48-2.61-8.99.63.3,1.96c.07,0,.14,0,.21.02Zm27.77,3.3l7.01-2.75-18.5,1.67,10.22,1.2c.35-.1.83-.16,1.27-.13Zm30.68-9.51l-9.47-.06.35,1.22c.48.02.91.12,1.19.28l7.94-1.44Zm-83.87,6.1l.45-2.47-9.21-.99,8.72,3.46h.03Zm63.11.93c-.08,0-.16,0-.23,0l-7.45,2.92,8.82-.34-1.14-2.57Zm-10.15-3.35l9.44,1.89c.31-.07.7-.09,1.05-.06l8.28-3.14-18.77,1.31Zm-42.34,1.05l-9.46-1.01-.45,2.41c.13.02.26.04.37.07l9.53-1.47Zm-8.64-4.26l-1.21-.22s-.05.01-.07.02l.04.08,1.25.12Zm4.76-2.81l-6.7-.29.22,1.5c.14.01.29.03.42.06l6.05-1.26Zm23.03,5.77l-4.25-.11c-.19.09-.45.16-.73.2l.04.26,4.95-.35Zm-29.15-.72c-.3-.04-.56-.11-.76-.22l-5.3.04,5.98.64.09-.47Zm23.69-.67c.09,0,.17,0,.26,0l7.04-2.76-8.49,1.07,1.09,1.68h.09Zm.14,4.18s.02,0,.04,0l-.3-1.92-7.66.54,5.22.98,2.71.41Zm-10.92-2.17c.28,0,.54.03.77.08l6.3-1.17-8.25-.75c-.62.21-1.64.18-2.2-.06l-5.09.19,7.82,1.78c.2-.04.43-.06.66-.06Zm-252.18-24.34l-6.97.67,4.62.92c.19-.04.41-.06.63-.06.3,0,.58.03.81.1l7.33-1-4.75-.62c-.49.13-1.21.12-1.67-.02Zm69.6.5l-.99.16,5.11,2.17c.06,0,.12,0,.17,0,.32,0,.61.04.84.1l8.7-1.18-13.84-1.25Zm.2-2.26c-.4.11-.96.14-1.4.06l-1.61.97,6.86-.53-3.85-.5Zm-.24,1.78h.09s-.13,0-.13,0h.04Zm12.94,6.94l10.34-1.4.51-.12-17.13-1.46,6.28,2.98Zm-22.39-8.47l4.4.75c.39-.09.91-.1,1.32-.04l1.71-1.03-7.39.3s-.03.01-.04.02Zm197.39-3.92l2.56.39,4.52.49c.1,0,.19,0,.29.01l5.77-1.83-13.14.94Zm-188.51,2.03c.42-.17,1.12-.21,1.65-.1l.38-.2-3.78.21,1.75.09Zm3.05-.83l.3-.16-1.87.25,1.57-.09Zm.05.58l1.21-.17-.98.06-.23.12Zm41.91-2.88c.06,0,.12-.02.18-.03l-.22-1.88c-.14-.01-.26-.03-.38-.06l-5.15.88,5.58,1.09Zm-6.95-4.65l6.65,1.44c.14-.02.3-.04.47-.04l1.04-2.33-1.53-.28-6.63,1.2Zm8.37-1.38l.06-.15-.45.08.38.07Zm4.32-.21l5.04,1.56c.14,0,.29-.02.43-.01l.75-.99-6.22-.56Zm-59.73,9.97l-1.15.13h.09c.27,0,.51.03.73.08l3.43-.19-1.26-.07c-.48.18-1.3.21-1.84.05Zm49.16,2.55l.44-.92c-.08-.02-.15-.04-.22-.06l-6.75.73,6.53.25Zm-1.47,2.35c.12,0,.24-.02.36-.02l.89-1.87-8.31-.32,7.06,2.21Zm-9.85-1.85l-1.5,4.43.14.05,9.53-2.02-7.92-2.48c-.08,0-.17.01-.26.02Zm14.02-4.87l1.04-.61-5.32.62h4.27Zm42.56,39.62l-.12-3.07c-.28-.02-.54-.08-.76-.15l-8.15.74,7.38,2.08,1.63.41s.01,0,.02,0Zm-134.04-35.8l.81-.68-4.88,1.15,4.06-.47Zm-6.43-2.15l-1.14,1.17,6.73-.55-4.63-.69c-.27.07-.63.1-.97.08Zm6.47,2.89l2.39-.54-2.03.23-.36.31Zm-8.54-1.64l1.09-1.13-7.02,1.62,5.92-.49Zm-11.1,4.81l-1.76-.27c-.55.14-1.35.09-1.8-.09l-3.44.14,7,.23Zm53.25-.95l6.47-1.64-6,.54-.47,1.1Zm-66.65.99l-.45.02,4.73,1.63c.11,0,.21-.01.32-.01.31,0,.59.04.84.1l9.49-1.25-14.94-.49Zm34.97-4.83l-.91.76,4.95-.57-2.84-.3c-.33.1-.79.14-1.2.1Zm-31.36,8.53l-.77.74s.08.03.12.05l5.42-.14-4.77-.64Zm18.24-6.8c.3-.08.68-.12,1.04-.09l1.1-1.14-7.12.58,4.97.65Zm41.61-3.1l-.1.27c.09.02.17.04.24.06l3.15-.36-3.29.03Zm-8.21.42c-.46.12-1.14.13-1.6,0h0l-1.33.52,1.64-.04,3.54-.19-2.25-.29Zm11.3,3.27l.71-1.65-6.76,2.19,6.05-.54Zm-16.87.58l5.37-1.97-5.09.86-.28,1.1Zm-11.52-3.75l3.23.34c.31-.09.72-.14,1.1-.12l1.59-1.67-5.92,1.45Zm3.54,1.55l-6.77,1.52,4.88.33c.36-.14.9-.19,1.37-.14l5.73-1.81-3.55-.07c-.4.19-1.12.25-1.66.16Zm6.97,3.67l-.16.05-.84.55,4.76-.92-2.06.08c-.29.17-.74.28-1.26.28-.15,0-.3,0-.44-.03Zm89.37-12.6l-.03,1.39,6.53.49-6.48-1.88s-.01,0-.02,0Zm-36.91,11.84l2.96,1.17,4.19,1.35,1.44-4.26s-.04,0-.06-.01l-8.54,1.75Zm145.73-9.49h.12c.25,0,.48.02.68.07l7.61-1.24-6.95-2.56c-.41.02-.84-.03-1.14-.14l-2.3.13-5.19.67,7.17,3.07Zm-8.41-2.91l7.37,3.15s.08-.04.13-.07l-7.28-3.11-.22.03Zm9.32-2.13c.11,0,.22-.02.34-.02.41,0,.78.07,1.04.19l2.93-.05-8.38-1.35,4.08,1.23Zm16.51-.41l.02-1.63-7.58-.32,7.51,1.96s.03,0,.05,0Zm-30.89,11.1l.32.05,4.47.46-.67-.6c-.44.04-.92-.01-1.25-.13l-2.87.22Zm1.92-3.21l-5.73.42.68.14,6.24.85-.42-1.27c-.29-.01-.55-.06-.77-.14Zm17.06-9.68l-2.74.21,9,1.19-5.02-1.31c-.42.05-.91,0-1.24-.09Zm-15.1,11.2l4.83.66-5.24-1.91.41,1.25Zm5.37-.32l3.08.96,5.97-.03,2.61-.14-7.22-3.1c-.32,0-.66-.03-.91-.1l-7.71.89,4.19,1.52Zm13.8.47s.08,0,.12,0c.16,0,.31,0,.45.03l7.51-1.95-15.13-1.11,7.05,3.03Zm.17-4.52l-6.55,1.06,13.62,1-6.11-2c-.32.03-.68,0-.97-.06Zm-.93-4.76c.12-.01.25-.02.38-.02.39,0,.73.06.99.16l3.27-.1-8.65-1.14,4.01,1.1Zm.95,3.33l-.42-1.21-4.54-.62,4.96,1.83Zm9.75,4.6l-6.11,1.58,13.32-.71-6.05-.92c-.34.08-.79.1-1.16.05Zm-39.9-3.81l-8.32,1.98,15.65.64-6.65-2.58c-.23,0-.48,0-.68-.03Zm28.57-2.99l-2.33.04,3.31.45-.11-.31c-.34-.01-.64-.08-.87-.18Zm1.93,1.1l.44,1.27c.25,0,.48.04.68.1l5-.54-6.12-.83Zm-.31-.9l.14.39,2.92.4-3.05-.79Zm-98.64,2.48c.07,0,.15,0,.23,0l.99-1.5-6.66-.57,5.43,2.07Zm-16.88,2.19l5.93,1.36c.09-.01.19-.03.3-.03l.29-1.49c-.18-.02-.35-.07-.48-.12l-6.04.29Zm14.28-7.35l4.86,1.34,5.38-.54-11.38-1.2,1.14.4Zm5.99-1.52l6.3,1.7c.12-.01.24-.02.37-.02.16,0,.31.01.45.03l7.32-1.76-14.43.06Zm53.42,8.48c.34-.07.76-.07,1.1-.02l7.3-1.74-14.59.52,6.19,1.24Zm-55.28-3.75l.19-.3c-.08-.02-.15-.05-.22-.08l-3.38.08,3.41.29Zm-12.99,6.63l-5.96.16,2.75.44c.22-.05.47-.08.74-.08.54,0,1.02.12,1.28.31l6.35.45-3.73-1.1c-.5.06-1.08,0-1.43-.17Zm3.31-6.56l-1.09,2.65c.1.02.2.05.29.08l6.79-.49-5.9-2.25s-.05,0-.08,0Zm-1.48,3.93l-.29,1.49c.23.03.43.09.6.17l5.78-.08-5.9-1.59c-.06,0-.12.01-.19.02Zm9.43-8.4l-3.37.33,8.95.94-4.42-1.19c-.39.04-.84.01-1.16-.08Zm41.11,4.62l6.11,1.53c.15-.02.31-.03.47-.03.35,0,.66.05.91.14l9.54-2.96-17.03,1.33Zm-21.47-1.93c.32-.08.74-.11,1.1-.07l6.36-1.8-13.38,1.13,5.91.74Zm10.98.12l5.08-1.35-4.86.65-.22.7Zm17.63,4.61l.53,1.78,6.14-.46-6.64-1.33s-.02,0-.04,0Zm-16.47.6l7.01,1.49c.22-.04.48-.06.72-.04l6.45-2.59-2.71-.68-4.79-.89-6.68,2.71Zm.27-7.3c-.22.09-.51.16-.84.17l-.22.7,5.88-.78-4.83-.09Zm-6.43,1.59l4.6-.61.22-.7-1.51.37-3.31.94Zm-.94,3.84l10.79-1.4-1.77-.33-2.9-.36c-.27.07-.61.11-.94.09l-5.19,2Zm147.93,9.23l-.55-.08.02.13c.09,0,.17.01.24.02l.28-.08Zm-11.66-16.91l.5.57h.15c.14,0,.29,0,.42.02l3.7-.9-4.54.21c-.07.04-.14.07-.23.1Zm143.66,18.9l3.23-1.01-10.11-2.51c-.3.05-.67.05-.99,0l-5.31,1.46,2.49.77,8.1,1.95,2.58-.66Zm-366.94-14.31l-1.51-.12-.33.06,1.7.35s.09,0,.14-.02v-.28Zm-4.29.45h-.05s-.03,0-.03,0h.08Zm-2.95,2.19l-.63.02-2.43.16,2.45.26c.42-.13,1.06-.14,1.51-.04l3.03-.5-2.02.03c-.47.21-1.37.24-1.91.07Zm43.11-13.5l-3.72-.42c-.28.07-.65.09-.98.07l-1.29,1.08,5.99-.73Zm-7.41,1.99l-1.76.58,3.11-.67-.3-.02c-.28.09-.68.14-1.05.11Zm-22.29,11.59l-1.17-.07-1.41-.04c-.42.12-1.05.14-1.51.04l-2.54.42,6.62-.34Zm18.51-5.02l-.14.04s.06,0,.09,0l.06-.05Zm-23.96,1.25l2.79-.56-2.79.22v.33Zm-20.01,1.65l.73.03-.44-.07c-.09.01-.19.03-.3.04Zm12.92-.24l.82-.17-2.36-.49c-.42.07-.94.04-1.3-.07l-4.72.36,7.55.36Zm-1.66-3.35l-5.27.34,4.52,1.12c.09,0,.17-.01.25-.02l.5-1.44Zm-13.77,3.19l1.23.24c-.09-.04-.17-.08-.23-.13l-1-.11Zm22.52-.06l.14-.06h-.14s0,.06,0,.06Zm2.74.15h-.13s-.04,0-.04,0h.17Zm-2.74-.7l1.09.09,1.95-.83-3.04.6v.14Zm31.03-12.22l-2.5.26,1.33.05c.27-.1.63-.15,1.02-.13l.15-.18Zm53.8.37l.33-1.28-4.91.96,4.08.4c.14-.04.32-.07.5-.08Zm72.63.7l.69.03c.08-.02.17-.05.25-.07l-.94.04Zm.74,2.77l.32-1.58-6.71,1.65,6.39-.07Zm-126.38-3.78l-.2.23,2.54-.16-1.51-.15c-.24.06-.54.09-.84.08Zm116.22,6.53s.04.01.07.02l6.78-.99-4.34-.65-1.5-.17c-.12.02-.23.03-.35.03l-.66,1.76Zm96.38.96s-.03,0-.04,0l.7,2.31c.35.01.67.09.9.2l6.05-1.17-.42-.08-1.14-.08.5-.03-6.55-1.15Zm12.68,3.88c-.24,0-.46-.02-.66-.06l-3.2.55,4.03-.2-.17-.29Zm-16.47.21l5.68.29c.42-.16,1.09-.2,1.59-.09l4.16-.71-6.14-.12c-.42.18-1.16.23-1.69.1l-3.6.53Zm13.4-2.23c-.43,0-.81-.08-1.07-.21l-4.73.92,7.6.15-1.35-.89c-.14.02-.29.03-.45.03Zm-121.97-.08s.01,0,.03.01h.14-.17Zm16.67-5.78c.08,0,.16,0,.23.02l.69-.17-.92.15Zm-65.73-.88l-.91.05.66.03c.08-.03.17-.05.25-.08Zm-.37,1.8c.15-.02.32-.04.5-.04.27,0,.51.03.71.08l4.1-.49-.99-.07-2.87-.09c-.33.04-.74.03-1.05-.04l-2.7-.08h-1.15s3.46.73,3.46.73Zm-101.38,12.92c.16-.02.34-.04.52-.04.25,0,.49.02.69.07l6.21-1.02-4.44-.47c-.52.15-1.31.13-1.77-.05l-6.45.3,5.24,1.21Zm121.76-17.6c-.06,0-.12-.02-.17-.04l-4.72.41,1.05.24,3.49.56.35-1.16Zm34.94,13.39l-6.81-2.71c-.17,0-.35,0-.51-.01l-6.51,1.91,13.84.82Zm-7.71-3.99h.09s.01,0,.02,0h-.12Zm-30.74-5.04l2.46.18c.14-.02.3-.03.45-.03.29,0,.55.04.78.1l4.46-.43-1.81-.31-1.44-.18-7.22.42,2.32.25Zm2.32-1l-.58-.07-1.04.17,1.62-.09Zm-104.11,8.91l1.56-.31v-.42l-5.4.42,3.83.31Zm360.54,22.48l.54-.07-.94-.02c.14.02.28.05.4.09Zm-89.5-23.74l2.72-.57-4.47.24.61.33c.35-.06.79-.07,1.14,0Zm1.2,4.19c.29-.06.66-.08.99-.06l5.43-1.79-13.99.63,7.56,1.22Zm84.89,15.74l-4.94,1.7h.79s8.09-.38,8.09-.38l-2.89-1.38c-.31.07-.7.09-1.04.06Zm4.84,1.75l-1.56.08,1.76.02-.21-.1Zm-125.92,27.36l-8.49,1.84h.1s-.09.01-.09.01l10.68,1.48c.08-.02.17-.04.26-.06l-1.45-3.07-1.02-.21Zm111.42-25.56l-1.07-.12c-.06.02-.14.04-.21.06l1.28.07Zm11.21.27c.17-.05.37-.09.59-.11l-1.52-.04.29.08.64.07Zm-11.76-3.76l-7.36.35,8.71,1.11-1.35-1.46Zm-78.85-23.2l-3.36-.25.09.22c.31,0,.59.06.81.14l2.45-.12Zm-28.73,57.31l-.08-.17-.48-.08-3.14,1.08,3.7-.83Zm37.9-52.16l-5.97-.74c-.35.09-.84.12-1.24.06l-5.04,1.23,12.25-.55Zm-17.13-1.39l.21.33,3.63-.18-3.65-.21c-.06.02-.12.04-.19.06Zm5.16-2.5l-.04-.02s-.06,0-.1.01h.14Zm-1.43-.1l-.45.03.3.02h.38c-.09,0-.16-.02-.23-.05Zm4.56,1.24l.1.05.71-.04h-.81Zm-315.89,5.46c-.15,0-.31,0-.45,0l-6.81,2.23,12.27-.15-.25-.06h.22s-4.97-2.01-4.97-2.01Zm314.15-5.31c-.13,0-.26-.02-.38-.05l-.62.11,1-.06Zm1.61.39l-2.63.14,3.24.19-.61-.33Zm-402.41,19.06l-2.61.34-2.51,2.74,9.89-1.79-4.78-1.3Zm-13.31,2.25c-.31.04-.68.03-.98-.01l-5.46,3.5,11.31-2.06-4.87-1.43Zm-7.73,3.65l5.32-3.41-11.69,2.46,5.11.98c.37-.08.86-.09,1.26-.03Zm1.76-3.7l-6.95.5-1.98,1.37,8.93-1.88Zm101.09-19.11l1.12.37,3.03-.51-4.15.14Zm-3.02,1.07l1.1-.19-.96-.21-.14.4Zm-95.23,17.36l-5.36-1.12c-.34.07-.77.08-1.13.03l-2.53,1.75,9.02-.66Zm93.94-13.95l7.26-2.38-1.25-.42-2.37-.52-2.55.43-1.09,2.89Zm-79.61,12.23l.91-.12-.09-.02c-.22.03-.48.04-.72.02l-.1.12Zm241.71,51.48l-20.55-.13,9.2,2.72c.27-.03.58-.04.86-.02l3.8-.84,6.69-1.73ZM-.41,293.22l2.16-1.5-7.76,1.91,5.6-.41Zm68.89,12.5l7.69,1.82c.35-.06.79-.07,1.15-.01l10.68-2.84-19.51,1.04Zm183.01,39.91l.74-.17-4.07-1.21-5.65-1.35-.11,3.33,9.08-.6Zm-175.98-36.82l-2.98.22,2.64.02.34-.25Zm.79.12l-.18.14,3.7.04-2.12-.27c-.39.11-.94.15-1.4.09Zm-26.64-10.52l-.12-.06-.03.08.14-.02Zm2.34-.31l-.19-.02.07.03h.12Zm1.12-3.05c-.58.07-1.23-.02-1.61-.21l-7.33.05,5.04,2c.08,0,.15,0,.23,0,.44,0,.84.08,1.12.2l8.05-.34-5.49-1.68Zm108.73-22.84v-1.29l-5.18,1.7,5.18-.41Zm324.38,21.54l-.21.06.27.02-.06-.08Zm-.8.02l.76-.07-.2-.25-1.3.1c.17.05.33.12.45.2l.3.02Zm-11.72-2.6l.81,2.22c.06,0,.12,0,.18.01l6.94-2.47-7.92.24Zm-4.71-8.56l1.21,1.84,6.91-.62-1.17-.21-6.96-1.01Zm22.63,4.27c-.06-.02-.12-.05-.18-.07l-6.37,3.25c.06.02.13.05.19.08l6.36-3.25Zm-28.09-1.34l7.84,1.89-1.61-2.45-6.23.57Zm17.12-1.08c-.1,0-.19.01-.3.01l-6.49,3.52,9.64,1.99c.2-.04.43-.06.67-.06l6.73-3.44-6.84-1.42-3.41-.6Zm-8.48,3.01h.06l6.02-3.26-7.76.7,1.68,2.56Zm.96.12c.07.02.14.05.2.08l6.12-3.32c-.07-.02-.14-.05-.19-.07l-6.12,3.31Zm-6.66,10.14l5.38-1.17-8.71-.04c-.3.15-.73.24-1.22.24-.36,0-.69-.05-.96-.14l-1.54.17-2.14.43,7.49.62c.45-.16,1.15-.2,1.69-.1Zm13.18-3.78l2.73-.19s.04-.03.06-.04l-2.91.22h.12Zm1.17,3.48l3.81-.19-5.53-.44,1.72.63Zm3.47-6.1c-.15,0-.3,0-.45,0l-6.5,2.31,8.28-.63-1.33-1.67Zm4.49,2.66l3.36-1-5.4.41.39.49,1.65.1Zm-12.3,2.84c-.25,0-.49-.02-.71-.06l-5.37,1.17,6.55-.33-.47-.79Zm-2.7-3.39l-.81-2.25-8.43.25,9.24,2h0Zm-.91-4.64s-.02,0-.03,0l.68,1.9,7.45-.22-8.1-1.68Zm12.18,2.46l1.33,1.67,6.2-.47-7.53-1.2Zm-13.24-2.43l-7.33,2.14,8.32-.25-.68-1.86c-.11,0-.22,0-.31-.02Zm-3.64-6.13l-4.72,2.37,6.01-.54-1.2-1.83h-.09Zm-287.17,40.41v-2.4s-.04,0-.05,0l-7.87,2.73,7.92-.33Zm-52.03-39.73l.08-.22-3.05.02,2.27.29c.2-.06.44-.09.7-.1Zm-8.26,1.72l-3.18.08c-.24.14-.61.23-1.02.25l-.1.4,4.29-.73Zm4.62.1l-6.63,2.44,3.41-.13c.29-.17.74-.28,1.27-.28.12,0,.25,0,.37.02l7.22-2.33-4.18.05c-.33.18-.92.28-1.47.24Zm52.58-2.18l-5.24.48,11.53.47-4.67-.88c-.5.1-1.17.08-1.61-.07Zm-40.7.59l-1.1.12h.14s.62-.03.62-.03c.1-.04.22-.07.34-.09Zm49.67-13.16l-2.46.55,1.61-.22.76-.21s.05-.08.09-.12Zm2.28,13.25l.25-.57-5.5-.23,4.63.87c.19-.04.4-.07.62-.07Zm-72.01.43l.71-.28-1.36.18c.24.01.46.05.65.1h0Zm337.81,10.03l-.56-.09s-.09.02-.13.03l.69.06Zm-285.61,23.95l-9.52,2.29,9.78,2.62c.3-.04.66-.05.99-.02l8.29-2.86h-.09s.18-.03.18-.03l.24-.08-8.53-1.92c-.41.08-.94.08-1.35,0Zm297.37-23.82l4.87-.31-9.48-2.06c-.33.06-.73.07-1.07.02l-5.01,1.39,1.17.18,9.53.77Zm-5.09-8.12l.19,4.42s.06,0,.1.01l8.31-2.42-8.46-2.04c-.05,0-.1.01-.15.02Zm-9.69,4.75l1.5,1.84c.06,0,.11,0,.17,0,.17,0,.32,0,.47.03l5.12-1.41-7.25-.45Zm-247.39,39.55l.25-2.42s-.07,0-.11-.01l-8.46,2.43h8.31Zm69.18-2.2c-.18.04-.38.07-.6.08l-.5,5.45,10.31-3.79h-.22l.46-.09-9.46-1.66Zm-68.45-1.81l1.59-3.1-10.75-.25,8.81,3.36c.12,0,.24-.01.35-.01Zm141.12-47.84l5.42.24c.07-.03.14-.05.22-.07l-.54-.82-5.1.65Zm-188.66,5.75c.11.01.22.04.31.06l3.87-.6-4.1.07-.08.47Zm.84-.95h.25s-.2-.01-.2-.01c-.02,0-.04,0-.05.01Zm-2.1.04h.3s-.04-.01-.06-.02l-.24.02Zm-.06,1c.17-.05.38-.08.6-.1l.07-.43-4.24.08,3.57.46Zm23.67-12.31l1.17-.25-1.15.16s-.01.06-.02.08Zm18.58-5.29l.06-.73-5.12,1.08,4.27-.15c.19-.11.47-.18.79-.21Zm-9.02,1.62l-.46.95,5.92-1.33-4.44.16c-.24.13-.61.21-1.02.22Zm-7.12,5.96c.41-.14,1.06-.17,1.53-.07l3.98-.72-8.02.61,2.5.18Zm-122.19,10.33s.06,0,.09.01h.02s-.11-.01-.11-.01Zm127.52-13.42l-.32.26.12-.02,2.67-.52-1.02.05c-.26.15-.66.24-1.13.24-.11,0-.22,0-.32-.01Zm183.68,52.01c-.3.04-.66.04-.97,0l-5.52,1.66,7.55-.82-1.05-.84Zm-9.66-1.77l7.97.43c.4-.16,1.02-.24,1.57-.19l7.61-2.71-17.15,2.46Zm-59.25,6.37l7.58.95c.58-.17,1.47-.18,2.07-.01l6.89-.99-16.55.05Zm-240.27-39.91l2.38.02,2.27-.95-7.56-.33,2.9,1.25Zm473.51,1.64l-1.7-1.75c-.21.01-.42,0-.62-.01l-5.07,1.6.6.15,6.79.02Zm-445.24,20.35l-.5.4,5.12-.16-3.16-.35c-.4.13-.98.17-1.47.11Zm5.04-1.72l2.25-.89-5.65,1.21.86-.04c.31-.19.81-.32,1.39-.32.3,0,.57.03.81.09l.35-.06Zm214.64,21.98l-7.64,1.2,17.5.35-8.05-1.52c-.55.12-1.29.11-1.82-.02Zm-35.71-60.02l-.03-.19c-.08,0-.17-.01-.24-.03l-2.15.45,2.42-.23Zm29.91,1.61l-.24.61,4.97.74-4.53-1.36c-.06,0-.14,0-.2.01Zm.91-1.14s.05.02.08.03h.25s-.33-.03-.33-.03Zm-1.57-.15c.07,0,.14-.02.21-.03l-.88-.11.67.14Zm.09,3.78l7.04-.41-6.89-1.02-.5,1.33c.13.02.24.06.35.09Zm-39.21-5.97c.11-.04.23-.07.35-.08l-.16-.69-5.24.42,5.05.36Zm267.49,16.39l-7.16-.3,8.1,2.01-.94-1.71Zm-186.62,2.24l16.54-1.75-1.67-.34-7.9-1.11-6.97,3.2Zm-43.33-11.48l.23-.03s-.04,0-.05,0l-.18.04Zm49.61,1.25c-.09.04-.19.07-.29.1l.32.5,4.47-.57-4.5-.03Zm-85.77-10.03l-.46.07c-.06.01-.11.02-.17.03l.05.23,2.98-.24-2.41-.09Zm29.06,10.28l7.2,2.8c.06,0,.12,0,.19,0,.3,0,.58.04.81.1l7.9-.91-7.5-3.21-7.23.92-1.37.29Zm64.1,3.65l-5.92.69.09.85s.09,0,.14.01l5.7-1.56Zm-97.24-13.33l2.79-.22-.04-.18-2.75.4Zm3.07,2.17l-3.93.84,8.68-.76-3.34-.17c-.37.13-.96.17-1.42.1Zm18.63.66l-4.79,1.08,5.01-.13-.04-.92c-.06,0-.12-.01-.18-.02Zm-9.28-1.5l-2.09.11,1.58.08c.15-.06.32-.09.52-.12v-.07Zm9.51,4.45s.07,0,.11-.01l-.08-1.53-5.94.16,5.91,1.38Zm-88.32-7.89l-2.2-.14-5.8,1.24,8-1.1Zm-85.12,4.96l-4.48.03,3.03.64c.16-.03.34-.04.53-.04.44,0,.82.08,1.09.21l4.93.07-3.57-.76c-.51.08-1.15.02-1.52-.15Zm2.25-.82l1.91.2c-.17-.06-.3-.13-.4-.21l-.94-.12-.87-.02c.12.04.22.1.3.16Zm7.97,3.45h.19s-.1,0-.1,0l2.79.4-2.86-.94c-.49.04-1.01-.04-1.32-.2l-4.31-.06,5.6.79Zm-93.78,8.72l.51.03.1-.03h-.61Zm1.79.12l.34.02c-.09-.02-.17-.04-.24-.06l-.1.03Zm98.89-8.23c.55-.04,1.15.07,1.45.26l3.07.21-6.49-1.12,1.97.65Zm2.61-.34h.01s0,0,0,0h0Zm-3.27-4.07c.27,0,.53.03.73.09l.34-.13-2.69-.23,1.22.3c.12-.01.26-.02.4-.02Zm-3.1,1.42c.14-.02.3-.03.45-.03.5,0,.92.1,1.17.27l2.2.17h1.28s-1.77-.56-1.77-.56c-.5.04-1.04-.05-1.34-.22l-4.7-.25,2.7.61Zm-8.11-.74l.55.06-.35-.08c-.06,0-.14.02-.2.02Zm-122.91,12.11l-1.09-.11.76.16c.11-.02.22-.04.33-.05Zm14.3,1.92l-1.09-.2c-.53.11-1.27.07-1.71-.1l-1.63.42,4.43-.11Zm23.5-1.46l-3.05-.2-.97.34,4.02-.15Zm-47.62-1.12l-2.18-.02,1.85.17.33-.15Zm13.04,2.75l-2.52-.74c-.51.07-1.11,0-1.48-.16l-5.78.21,9.79.69Zm9.02-1.67l-1.07-.07.68.12c.12-.03.25-.05.39-.06Zm-.66,3.59l-3.64-.7-7.55.56,11.19.14Zm-6.23-2.39l1.14.26c.09,0,.17,0,.26,0,.4,0,.77.07,1.04.18l2.25-.58-5.86-.2,1.16.34Zm-21.25-3.61l1.48.12-.88-.17c-.18.03-.38.05-.6.05Zm284.59-26.46l-3.46-.83s-.04,0-.05,0l-.12.52,3.63.3Zm12.99,2.15l-.04-1.22-4.93-.03,4.96,1.25Zm-.05-1.69l-.02-.67s-.06,0-.08,0l-3.84.66,3.94.02Zm-.13-1.82s.06,0,.09-.01v-1.17s-5.21.37-5.21.37l5.12.82Zm-106.88,10.52l1.44-.24-1.2.07-.24.17Zm132.8-6.38l.07,1.01c.14.01.26.04.37.07l5.94-2.2-6.38,1.12Zm3.07,2.44l-2.86.51.03.43,2.83-.94Zm-20-8.04h0l.26,2.89,5.24-1.85-1.28-.02.97-.11-5.17-.9Zm17.66,7.64c-.16.08-.35.13-.58.16l.02.27,2.98-.53-2.42.1Zm-26.54-9.01l-4.99,1.51,4.98-.35v-1.16Zm-110.74,20.67l.36-.02-.5.17,5.35,1.2c.14-.02.29-.03.45-.03.28,0,.55.03.76.09l9.59-3.51-.83-.12-.41-.02.16-.02-5.73-.85c-.4.09-.94.08-1.33-.02l-7.87,3.13Zm8.97-6.88l-.65.05h.42c.06,0,.14-.03.22-.05Zm85.7-11.55l2.18-.21-2.53-.09.03.25c.12,0,.22.03.32.05Zm-89.94,10.41h.23c-.06-.01-.13-.02-.19-.03l-.04.03Zm-1.92,1.99l-.23.41,2.82-.38-2.4-.08c-.06.02-.12.04-.19.06Zm91.44-13.34v.17s1.62.06,1.62.06l-1.57-.23s-.04,0-.05,0Zm-.65.9s.01,0,.02,0l-.03-.28-2.15-.08,2.15.36Zm-.39-.94l-1.4.12,1.73.06v-.13c-.13,0-.24-.03-.33-.05Zm97.18,88.58h0s-.03,0-.03,0h.03Zm22.99-6.14l.37,4.17,8.96-.94.85-.17-10.1-3.07s-.06,0-.08,0Zm-163.31,11.91s-.03,0-.04,0l-12.59,1.98,10.96.2,1.67-2.16Zm263.34-33.48c.3-.04.65-.04.95,0l3.59-1.11-5.07.72.53.4Zm-2.59-1.96l1.53,1.16,6.35-.9-7.86-.26s0,0-.01,0Zm33.24-5.46c.07,0,.14,0,.21,0,.33,0,.63.04.89.11l4.83-.7-6.68-.31.75.91Zm-198.8-47.11l5.96-1.33h0s-5.06-.6-5.06-.6c-.39.09-.93.08-1.3-.02l-6.32,2.34,5.35-.23c.32-.16.89-.23,1.37-.17Zm43.47,78.92s-.06,0-.09.01l.69,2.43c.49.01.93.1,1.25.25l7.77-.3-9.62-2.4Zm13.4,1.95c.67-.03,1.33.1,1.71.32h.99s1.48-.14,1.48-.14l-4.55-.66.35.49Zm-.74-1.03l6.66.97-7.64-2.33.98,1.36Zm12.44,1.2c.17,0,.35.03.5.06l3.91-.83-4.44.47.03.3Zm129.09-35.34l7.27.34-8.9-2.32,1.64,1.97Zm46.99-8.43c-.47.19-1.26.23-1.82.09l-.48.08,3.63.25h.89s-1.91-.41-1.91-.41l-.32-.02Zm-.37-1.18l4.34-.83-9.75-1.53c-.36.09-.84.11-1.23.06l-5.09,1.41,10.08.97c.45-.15,1.14-.17,1.64-.07Zm7.13,1.58h.22s-.33-.03-.33-.03c.04,0,.08.02.12.03Zm-598.01-10.06l-.92-.32-3.46-.51-1.49.28-3.94,2.88,9.82-2.33Zm247.61,63.64c.39-.12.91-.18,1.4-.15l.37-.49-7.87-.14,6.09.77Zm-251.73-66.17c.06,0,.13.02.19.03l.1-.06-.3.02Zm1.58-.09l.47-.06-.4.03-.06.03Zm19.46.5c.12,0,.23-.02.35-.02.26,0,.51.03.73.08l1.43-.66-6.01-.55,3.5,1.15Zm-32.58,2.5l3.82-.95-2.94.42-.89.53Zm26.33-4.83c.2.04.38.1.52.18h1.76s-2.28-.18-2.28-.18Zm-8.21,3.69c.36,0,.68.05.94.14l11.39-1.06-4.42-1.45c-.4.04-.84,0-1.17-.08l-3.48.47-6.73,1.28,2.95.75c.16-.02.34-.04.52-.04Zm7.48-3.75l-1.45-.12.89.18c.17-.03.35-.06.55-.06Zm-15.44,2.09l-.47.03.33.02c.05-.02.09-.04.14-.05Zm96.33,25.55l-6.67.48,12.84.64-4.45-1c-.55.1-1.27.05-1.71-.11Zm71.87,23.2c.27-.07.57-.11.9-.12l.28-.8-6.59.1,5.41.82Zm1.98-3.3l-8.46,2.02,7.83-.12.68-1.9s-.03,0-.04,0Zm-178.05-42.16l-2.67.67,3.94,1.06c.3-.04.64-.04.94,0l3.97-2.9-6.17,1.17Zm105.3,23.66l.86-.03-.99-.05c.05.03.09.05.14.08Zm-5.24-.07h.45c.37-.06.83-.06,1.2,0h.79c.09-.05.19-.09.31-.13l-4.99-.25,2.23.38Zm-9.65-.34l-1.22.09-.75.14,3.59.09c.17-.08.39-.15.63-.18l-.39-.07c-.57.13-1.37.1-1.87-.08Zm.97-1.33h.09c.42,0,.8.06,1.09.17l10.2-.72-.32-.07h.27s-4.51-1.76-4.51-1.76c-.45.03-.92-.03-1.26-.14l-11.64,1.03,3.09.84,2.99.66Zm328.26-38.17l-.69-.1c.15.03.3.06.42.11h.27Zm-110.63-11.19l-.07.25c.1.02.19.04.28.08l2.52-.1-2.73-.23Zm30.63,3.61l2.42.08c.13-.05.28-.08.44-.1v-.24s-2.86.25-2.86.25Zm5.06,5.82s.06,0,.1.01l.21-.05-.31.03Zm-10.49-9.36l.24,1.36,4.98-1.5h-.05s-5.17.14-5.17.14Zm8.92.03c-.27.09-.64.13-.99.11l-3.39,1.02,7.89-1.01-3.52-.12Zm-2.68,11.8l9.07.73-3.98-.83c-.47.08-1.07.04-1.46-.1l-3.64.19Zm3.83-6.58l2.23-.51-2.73.26.12.23c.13,0,.25,0,.37.02Zm-1.07-1.73s.04,0,.06,0l2.28-.51-2.37.21.02.29Zm-.93,5.6l1.14-.11-.78-1.52c-.17,0-.33-.02-.48-.04l-4.42.83,4.54.84Zm.71-3.75c.06-.02.12-.04.19-.06l-.14-.24-2.48.24,2.43.06Zm-91.41,1.03l2.07-.31-1.79.1-.28.21Zm.5-1.79c.13-.03.28-.06.44-.07h-1.19s.75.07.75.07Zm-1.74,4.32s.04,0,.06,0l4.35-.97-2.88-.24-1.45.31-.08.9Zm2.46-5.84c.25-.07.58-.09.89-.08l.22-.23-2.58.17,1.47.14Zm55.97-1.73l.02.68,3.96.16-3.97-.84h-.01Zm-.71-5.8l-2.59-.21,2.43.54s.06,0,.09,0l.07-.32Zm.36,3.86l.22-.74c-.06,0-.12-.02-.17-.03l-4.8.38,4.75.4Zm-8.45-1.96l-5.75-.56,4.85,1.4c.09,0,.18,0,.27,0l.62-.83Zm-5.35,2.6l9.42.33-4.34-.89c-.31.04-.69.03-.98-.03l-3.05.4-1.04.2Zm147.51,13.19l-4.42-.08c-.32.13-.83.2-1.29.15l-2.74.81,8.45-.88Zm-23.04.9s.09,0,.13.01l.31-.08-.23-.02-.22.03v.06Zm-.06-.58l.25.02,4.85-.64-5.03-.72c-.06.01-.14.02-.21.04l.14,1.3Zm-26.35-11.38l.29.07s-.07-.04-.11-.06h-.18Zm31.97,9.87l.76.11-.15-.12c-.19.02-.41.02-.6,0Zm-8.65-1.41l1.95.4c.15-.02.32-.04.5-.04s.32.01.47.03l-2.82-.41s-.06.01-.1.02Zm-26.03-4.34c.48-.04.99.04,1.3.2l2.45.08-6.92-1.29,3.18,1Zm37.2,7.17c-.26.03-.55.03-.81,0l-1.54.38,2.46-.29-.12-.08Zm-8.87.02l-.14-1.21c-.14-.01-.27-.03-.38-.06l-5.47.7,5.99.57Zm-47.09-11.08l.81-.08h-1.17s-.06,0-.1.02c.17,0,.32.03.45.06Zm-1.76-5.55c.05,0,.1.02.15.03l.34-.02h-.49Zm7.48,4.59h.73c-.13,0-.24-.02-.36-.04l-.37.04Zm-7.38-2.35l4.23-.06.5-.04-2.95-.59-1.52-.24-.41.06.16.87Zm-15.24,6.89l.57-.13-.42.05s-.09.06-.14.08Zm16.17-5.54l.19.6,3.26-.2-3.45-.41Zm8.29-.1l1.81.15.74.03-3.1-.71c-.37.04-.79.01-1.09-.08l-2.82.2,1.31.16,1.92.16c.41-.06.9-.01,1.23.09Zm-26.45,7.58l1.96-.17,1.12-.18-2.68-.09-.4.44Zm22.71-4.07l-3.66-.33c-.34.1-.83.12-1.22.06l-2.71.55,7.58-.27Zm59.12,6.66c.32-.17.89-.26,1.41-.21l4.17-1.16-4.04.36c-.24.17-.66.27-1.15.27-.14,0-.27,0-.4-.02l-4.03.95,4.03-.18Zm145.85,26.39l.55-.09h-.08s-.88.02-.88.02c.14.01.28.04.4.07Zm1.88-1.08s-.06-.01-.09-.02l-.14.02h.23Zm-79.37,19.68l1.12,2.07h.04c.15,0,.3,0,.43.02l8.59-2.74-10.18.65Zm80.9-20.93l1.91-.23-8.08-.33,4.43.56c.25-.07.54-.11.86-.11s.63.04.88.12Zm-329.93-30.04l-.02.05s.08.02.12.03l.82-.07h-.92Zm341.58,31.14l-1.5-.03.18.08,1.32-.05Zm-291.3,58.58l-.86-.29-2.88.3h3.75Zm199.73-30.86l-8.15-1.62c-.05,0-.09.02-.14.02l.52,1.5,7.77.1Zm-11.6-5.24l2.32,2.16c.12,0,.24-.01.37-.01.17,0,.33,0,.49.03l6.12-1.84-9.3-.33Zm20.9.94l-7.88-.22c-.1.05-.22.08-.35.12l.63.83,7.6-.73Zm-80.29-52.43l1.7,1.68.68-.02,5.25-2.44-7.43.68c-.06.04-.13.08-.21.11Zm15.26,1.01l6.81-.08c.09-.04.19-.07.3-.1l-1.06-1.69-1.43-.06-4.62,1.93Zm-62.49-4.87l2.56.58-.23-.27c-.46.02-.92-.07-1.19-.23l-1.14-.08Zm1.15-1l.21.04-.02-.03c-.06,0-.13,0-.19,0Zm102.85,11.93l-2.9.6,8.54-.41-4.19-.29c-.38.13-.98.17-1.45.09Zm4.76-2.33h-4.3s5.03.82,5.03.82l-.73-.82Zm-40.6-6.11h-.03s.1.01.1.01h-.01s-.04-.01-.06-.01Zm138.96,29.84l1.56.03-1.9-.18.35.15Zm-274.93,56.77l-11.02-3.45c-.47.06-1.02.03-1.45-.07l-9.59,1.74,9.49,3.15,11.92-1.22.65-.15Zm-92.36-85.77l-.19.48,3.44-.4-3.14-.11s-.07.02-.12.04Zm-.39.98l-.11.28,2.15-.51-2.05.24Zm.94-2.21l.31-.05-.27.02-.04.03Zm-1.15.07s.09,0,.13,0l.03-.02h-.16Zm-45.76,63.01c.31,0,.6.03.86.09l8.15-1.47,4.77-1.02-7.78-1.92c-.41.07-.93.07-1.34,0l-11.71,2.71,6.43,1.67c.19-.03.4-.05.63-.05Zm54.51-62.7l.86-.73-4.82.75,2.79.1c.3-.11.76-.16,1.17-.13Zm-.81,3.62l5.59-1.81-11.71,1.09,5.27.78c.25-.05.56-.08.86-.06Zm4.77-2.21l-3.44-.25c-.32.1-.79.14-1.19.08l-4.08.98,8.7-.81Zm-9.83-2.42l.53-.04h-.39s-.09.03-.14.04Zm-13.53,7.41s.03,0,.04.01l7.19-2.86-6.31,1.03-.92,1.82Zm-28.37,6.94c.23-.04.5-.05.75-.03l.3-.3c-.09-.03-.17-.07-.24-.11l-3.66-.2,2.86.65Zm-95.23,9.03l-3.61-.78c-.49.09-1.14.06-1.55-.09l-7.08.58,12.24.28Zm89.17,41.88c-.19.03-.38.05-.59.05l-.65,1.84,8.48-.13-7.24-1.77Zm-101.12-43.56h1.16s-.77-.08-.77-.08c-.12.03-.25.06-.39.08Zm138.59-18.94l1.52-.4-1.4.18-.12.22Zm-1.47,1.57l-.37.73,4.64-.76-3.43-.11c-.23.08-.52.14-.84.14Zm-30.78,5.9c-.48,0-.9-.1-1.15-.26l-.5-.04c.3.05.53.15.69.26l2.32.25-.97-.24c-.12.01-.26.02-.4.02Zm208.02,37.84l-.04-.29c-.19,0-.35-.03-.51-.07l-3.43.64,3.98-.28Zm-4.85-15.44l.35-.49-5.86.07,4.48.54c.29-.08.65-.13,1.02-.12Zm.94,2.39l-6.26.11,7.63,1.42-1.37-1.53Zm-4.05-5.09l2.76.21-.24-.21h-2.52Zm-54.89,3.43l-5.46-1.65c-.56.07-1.22-.02-1.61-.2l-4.93.06,12,1.79Zm54.72-2.29l-5.21-.76c-.55.14-1.35.11-1.82-.07l-5.01.3-.86.09.54.12,3.87.65c.22-.05.48-.08.76-.08.4,0,.76.06,1.04.17l6.69-.42Zm4.1,2.86h0l.54.6,4.57-.08-5.11-.52Zm-65.18-3.6l-.04-.25-3.35-.27,3.13.56c.08-.02.17-.03.26-.04Zm64.45,3.73c-.32.02-.67,0-.94-.07l-3.58.65,4.96-.09-.44-.49Zm-8.78,1.61l-.17,2.32,9.36-.74-8.79-1.65c-.13.03-.27.05-.41.06Zm-133.93-1.02l-.32.89,6.66-.43-5.5-.59c-.24.08-.53.12-.84.13Zm130.97-1.96l-4.06.85,5.24-.15-.45-.65c-.26,0-.52-.02-.74-.06Zm-87.46-3.69c.12-.03.25-.05.39-.06l.06-1.03c-.24-.03-.45-.08-.63-.14l-4.54.32,4.71.91Zm34.18-3.21l-3.69.55,4.07-.08.02-.39c-.14-.01-.27-.04-.4-.07Zm-78.84,12.01l8.04-2.26-7.39.49-.65,1.78Zm44.83-11.24h-.64s.45.05.45.05c.06-.02.12-.03.19-.05Zm29.21,2.62l5.25.42-.08-.46c-.32-.02-.6-.08-.82-.17l-4.35.22Zm-26.36-4.13l-1.59-.04,2.82.44c.22-.05.48-.08.76-.08.38,0,.73.06.99.16l1.81-.11.48-.07-.93-.08-1.04-.05c-.58.17-1.47.13-1.94-.1l-1.35-.07Zm2.93-1.06l5.96-1.54-6.81-.18.53,1.69c.11,0,.22.01.32.03Zm69.01,8.73l3.5.55c.09-.02.17-.04.26-.05l-.52-2.11-4.69.47-2.33.33,3.77.82Zm-8.72-.13l-6.19.84,6.72.08-.03-.83c-.18-.02-.35-.05-.5-.09Zm.41,3.28c.06-.01.12-.02.19-.03l-.05-1.86-8.33-.1,8.2,1.99Zm22.63-1.54l-.32-.47-3.94.11,4.13.4s.09-.03.14-.04Zm-31.5,2.66c.34,0,.64.04.9.12l5.72-.71-8.74-2.13c-.5.08-1.13.04-1.54-.1l-4.96.46,8.16,2.39c.14-.02.3-.03.45-.03Zm-68.38,2.73c-.19.04-.39.06-.61.07l-.81,2.53,9.85-1-8.43-1.6Zm86.47-9.47l-7.48-2.05c-.27.04-.59.04-.86,0l-3.93.38-4.39.58,1.89.54,7.3,1.58,7.47-1.04Zm-87.7,8.09c.06,0,.12-.01.17-.02l.13-2.45-7.36.48,7.06,2Zm-.94,4.05l.8-2.51-9.64,3.41,8.85-.9Zm1.38-9l-6.89,2.44,6.79-.44.11-2Zm78.37,3.86c-.24-.01-.45-.05-.64-.11l-4.67.58,5.44.35-.13-.83Zm1.17,2.87c.21,0,.4.04.57.08l7.06-1.1-7.87-.5.24,1.52Zm-94.95,12.98s.02,0,.03.01h.18s-.21-.01-.21-.01Zm106.7-19.87l5.5-1.16-6.26-1.06c-.07.02-.14.03-.22.04l.52,2.11c.17,0,.32.03.46.06Zm-.99,6.58c-.2-.01-.39-.05-.55-.08l-6.71,1.05,7.45.32-.19-1.28Zm1.3-5.34c-.43.14-1.08.17-1.58.08l-6.33,1.4,13.47-.93-5.55-.55Zm-6.03-.88l-6.31-1c-.12.03-.26.06-.4.07l.03.84,6.68.08Zm-6.67.39l.05,1.85c.11,0,.2.02.3.04l8.11-1.79-8.46-.1Zm.19,3.25l.14.89,6.22.4-6.18-1.32c-.06,0-.12.02-.17.03Zm-59.64,20.07v-.83s-6.55-.6-6.55-.6l6.25,1.47c.09-.02.19-.03.3-.04Zm153.65-29.5c.08,0,.17,0,.25,0,.1,0,.19,0,.28,0l5.16-1.86-6.92.62,1.22,1.24Zm21.35-.49l1.48,1.8,6.6-.11-8.08-1.69Zm-7.01-1.8l5.09.51c.46-.15,1.17-.17,1.68-.04l4.94-.78-11.7.31Zm-14.54,3.65l-6.33,1.78,7.25-.66-.52-1.1c-.14,0-.27-.01-.4-.03Zm9.78-3.15c-.06.01-.12.03-.19.04l-4.26,1.25-2.54.92,8,.75c.35-.11.84-.17,1.28-.12l6.05-2.03-7.35-.74-.99-.08Zm-29.29,7.31l-.95-.92-5.09.32,6.04.59Zm28.1,4.29l-6.45-.36,7.04,1.6-.59-1.24Zm-28.7-5.7l4.76-.3-5.55-.46.79.76Zm7.48-3.91l-6.81,2.32,8.04.67c.38-.13.95-.18,1.43-.12l7.69-2.16-9.08-.83c-.34.11-.82.17-1.25.12Zm39.97,5.81c-.51.19-1.38.21-1.94.04l-1.79.21,6.29-.08-2.56-.18Zm-6.49,6.86l-6.84-.55,7.81,2.16-.97-1.6Zm-.38-1.91l.89,1.48,7.12.58-8.01-2.06Zm-209.77,15.68l-.18.89,6.71.36-6.01-1.31c-.16.03-.33.05-.51.06Zm213.33-24.36c.25,0,.5.03.71.08l3.71-.67-5.03.08.42.52c.06,0,.12,0,.18,0Zm-11.06,5.35l8.56.03-6.17-.38-2.39.35Zm12.38-2.76l-1.09-1.17c-.3.01-.63,0-.89-.06l-4.96,1,6.79.29c.05-.02.1-.04.15-.06Zm-.31-1.25l1.03,1.11c.08,0,.16,0,.24,0,.37,0,.71.05.97.14l4.02-.38-6.26-.87Zm-50.31,4.49s.02,0,.03,0l-.53-.51-4.93.13,5.42.39Zm35.67,4.33c-.16.02-.33.03-.5.03-.52,0-.97-.1-1.27-.25h-3s9.77,1.6,9.77,1.6l-5-1.38Zm-154.03,9.53l-5.79-1.33c-.59.11-1.35.05-1.82-.14l-11.94,3.23,9.21,1.58c.4-.1.94-.12,1.38-.06l10.44-2.89-1.48-.41Zm-28.54-16.44l-.1,1.99,7.74-.5-7.3-1.53c-.11.02-.22.03-.35.05Zm43.77,21.21c-.08,0-.15-.01-.22-.02l-9.72,2.65,10.04.23-.09-2.85Zm-24.23,0s-.08,0-.12.01l.02,1.48,7.48.69-7.38-2.19Zm-.09,2.73c.32.03.61.09.85.19l5.75-.33-6.61-.61v.76Zm-29.17-1.07l-7.67-.42-.27,1.36c.16.02.31.05.45.09l7.5-1.04Zm-8.62-3.19h-.07s.06,0,.06,0t.01,0Zm1.91-1.82l-4.61.24,1.58.09,3-.28.04-.05Zm34.44,3.23l-7.6.78,8.31.77v-1.41c-.27-.02-.5-.07-.71-.14Zm72.07-11.32l-.23-1.55-7.46-.33,7.57,1.89s.07,0,.12-.01Zm34.88-3.6l.31,1.23,8.14-1.27-7.79-.15c-.18.08-.4.15-.66.19Zm-22.24,2.02l8.54.89c.22-.07.46-.12.73-.13l.68-4.26-9.95,3.51Zm20.72-4.91l.91,1.46s.05,0,.07,0c.12,0,.24,0,.35.02l6.11-2.09-7.45.62Zm-90.79,14.29l-1.1,5.71s.04,0,.06,0l10.49-2.85-6.45-2.04-2.99-.83Zm103.72-12.36c.3-.14.73-.23,1.21-.23.21,0,.4.01.58.04l4.52-1.11-12.09,1.19,5.78.11Zm-46.85,5.85c-.09-.03-.17-.07-.24-.1h-.81s1.05.1,1.05.1Zm17.89.49l5.24-.66-.31-.48c-.21,0-.42,0-.61-.03l-4.32,1.17Zm41.97-5.83c.07-.03.15-.06.24-.08l-1.45-1.75c-.07,0-.15,0-.22,0l-3.88.78-2.89.71,8.19.33Zm-2.59-4.13l5.24-.14-3.52-.3-2.34-.16.61.6Zm-132.78-8.14l.94.03-.63-.09c-.1.02-.2.05-.31.06Zm-7.1-2.86l3.05.08-7.77-1.08,4.72,1Zm4.02,10.26c.06,0,.12.01.17.03l8.18-1.79h-.16s.5-.08.5-.08l-7.76-2.02c-.08,0-.16.02-.24.02l-.69,3.84Zm.86-5.26c.22.03.42.07.6.13l5.93-.52-5.91-.75c-.17.05-.35.08-.55.1l-.06,1.03Zm-9.78-2.37l.24.57c.37,0,.7.07.97.17l3.36-.24-4.35-.55c-.07.02-.14.04-.22.05Zm-12.88,10.41l-11.22,3.76,7.4,2.4c.23-.02.49-.02.73,0l11.47-4.04-7.52-2.13c-.27.04-.58.04-.85.01Zm1.3-5.24l-.48,3.76,7.61-2.7-6.64-1.14c-.15.04-.32.06-.5.08Zm12.17-6.27l3.8.07-.89-.14c-.23.06-.49.09-.78.09-.48,0-.89-.09-1.17-.24h-1.72c.3.03.57.11.76.22Zm-9.99,5.46l6.32,1.08c.39-.09.91-.11,1.33-.04l8.68-2.22-.71-.05.48-.04-5.83-1.14c-.36.08-.83.09-1.21.03l-9.05,2.38Zm53.27-3.18c.09,0,.17.02.26.04l5.86-1.2-6.06.13-.06,1.04Zm-23.94,1.47l-5.7.5,13.64.85-6.27-1.26c-.52.1-1.22.07-1.66-.08Zm35.84,5.94l.61,1.58c.5,0,.94.12,1.22.28l4.96.13-6.79-1.99Zm1,3.02c-.29.04-.63.04-.93,0l-.66.51,6.66.91-5.08-1.43Zm-1.76-3.06c-.45-.01-.84-.1-1.12-.25h-4.69s6.42,1.84,6.42,1.84l-.61-1.59Zm8.65-2.24l1.15-3.21c-.08-.01-.16-.03-.23-.05l-8.69,1.18,7.42,2.11c.12-.01.23-.02.35-.03Zm-31.23-5.64l-4.59.34,10.11.4-3.8-.66c-.53.12-1.27.08-1.72-.08Zm20.95-.33l-7.49,1.54,6.88,1.53c.19-.03.4-.05.61-.05.32,0,.61.04.85.1l8.46-1.14-8.12-1.96c-.37.06-.84.05-1.2-.02Zm-70.11,17.69s-.06,0-.09-.01l-7.78,2.16,7.76-.34.12-1.81Zm-15-4.51l-4.23-.87c-.16.03-.33.05-.51.06l-.4,1.47,7.09-.15-1.95-.51Zm-26-.71l-.75,1.04,7.38.35-5.93-1.44c-.22.04-.46.05-.71.05Zm11.22,1.13l7.46-1.9-7.25-1.4c-.42.08-.99.09-1.41,0l-7.46,1.48,7.51,1.82c.36-.06.8-.06,1.15,0Zm-4.19.76l-8.1-.39-1.23,1.73,4.47-.57,4.87-.77Zm-5.31-5.7l-.19.49,4.47.13-3.64-.68c-.19.04-.4.07-.63.07Zm-.37.95l-.58,1.45s.04,0,.06.01l6.53-1.29-6.01-.17Zm27.46,4.54l-8.07.17-.57,2.12,4.59-1.12,4.05-1.17Zm.76,5.33l1.64-4.88-9.64,2.79,7.61,2.13c.12-.02.25-.03.39-.03Zm-9.03-7.15l-6.49,1.66,6.09-.13.4-1.53Zm-1.33,4.33h.02l.17-.04.61-2.29-7.07.15,6.27,2.18Zm20.28.27l-3.44-1.12-4.14-1.08-1.6,4.76,9.18-2.55Zm-5.86-8.05l-1.21,4.17,10.29-3.45-8.28-.85c-.23.07-.5.12-.81.13Zm1.1-1.19s.09.05.12.08l9.76-3.18s-.08-.05-.12-.08l-9.77,3.18Zm9.5,1.08c.2-.07.45-.11.71-.13l.48-3.79-9.42,3.08,8.24.84Zm-12.56,4.35l1.22-4.24-9.56,2.69,7.79,1.6c.17-.03.35-.06.54-.06Zm-15.91-4.04l6.05-.4.36-.99s-.01,0-.02,0l-6.39,1.39Zm-4.39-.1l3.33-.73,2.65-.75-12.45.54,5.1.96c.41-.09.95-.09,1.37-.01Zm101.49,2.12c-.06-.02-.12-.06-.17-.08l-7.04-.22,6.47.89.75-.58Zm-91.86-.19l.63-1.74-7.97.52,6.71,1.29c.19-.04.4-.07.62-.07Zm34.47.47l7.92-2.95-7.79.5-.13,2.45Zm55.6-6.93c-.41,0-.79-.08-1.05-.19l-5.33.21,7.4,2.23-1.02-2.25Zm-8.33-.86l2.38-.09-3.28-.26.03.17c.34.02.63.09.86.19Zm-.93-1.4s-.09.01-.14.02l.09.54,4.01.32-3.97-.88Zm-11.47,1.38c.21-.04.44-.07.68-.07.48,0,.9.09,1.2.23l3.15-.03-9-.93,3.97.8Zm23.1,3.24l2.75-.12,2.54-.24-6.89-1.96,1.04,2.27c.2,0,.39.02.56.05Zm-24.32-4.23c-.05-.02-.09-.04-.13-.07l-.71-.02.84.09Zm14.63,5.62c-.57.08-1.25,0-1.64-.18l-9.26.23,5.25,1.16c.2-.03.43-.06.66-.06.55,0,1.03.11,1.33.3l9.77.31-6.11-1.75Zm-5.64,2.58l-4.85,1.08,8.08,1.05-2.25-2.08c-.32.03-.69.01-.99-.04Zm4.39,2.03c.46,0,.87.08,1.17.2l3.52-.16-6.98-1.83,1.93,1.79c.12,0,.24-.01.35-.01Zm-36.57-5.53l.69-3.84s-.04,0-.06,0l-8.84,2.27,7.76,1.63c.14-.02.29-.04.44-.05Zm10.11,8.91l-8.27-1.16c-.2.06-.44.09-.7.1l-1.06,4.34,10.03-3.28Zm1.61-3.15l-.32-2.31-7.56,3.13,7.89-.82Zm-10.54.61l8.36-3.45h-.35s.35-.07.35-.07l-8-1.38-7.79,2.3-2.58.96,9.03,1.71c.28-.06.63-.08.97-.07Zm20.86-5.13l-6.49,1.24,7.59.04-.46-1.2c-.23,0-.45-.03-.64-.07Zm2.82-5.77l.99.1-.79-.14c-.06.01-.13.03-.2.04Zm-3.32-1.53l1.93.25c.25-.07.55-.11.86-.11.42,0,.8.07,1.08.18l1.87-.09-5.75-.23Zm-2.91,6.9l-14.17.09,6.41,1.1c.45-.1,1.07-.11,1.52,0l6.24-1.18Zm-6.59,7.16l-.25-1.77-7.74.8,5.88.82,1.82.2c.09-.02.19-.04.29-.05Zm32.87-1.34c-.5.02-1.01-.06-1.35-.2l-1.77.08,3.28.32-.16-.2Zm-11.05-.22l-8.59-1.12c-.18.05-.38.08-.61.1l-.21,3.48s.09,0,.14.02l9.26-2.48Zm-16.47-7.54l4.72,1c.22-.04.48-.07.75-.06l.31-.49-5.78-.45Zm6.03,2.35s0,0-.01,0l.48,1.26,5.37.03-5.83-1.29Zm-10.55,6.74l7.92-2.69-8.29.85.26,1.83s.07,0,.11,0Zm11.08-2.56l-8.77,2.99.34.04,7.46.58c.22-.08.48-.13.77-.16l.21-3.46Zm13.26,1.54c-.36.07-.8.07-1.17.01l-8.47,2.27,16.56-.64-6.92-1.65Zm6.97-1.77c.31-.05.68-.06,1-.01l.5-.39-6.39-.88,4.89,1.28Zm1.32,2.16l-3.28-.31,3.73.88-.45-.57Zm-20.48-3.37l4.42-.98-5.35-.03.36.95c.21,0,.4.02.58.06Zm6.87-5.8l4.96,1.32c.17-.02.34-.04.52-.04.5,0,.94.09,1.24.25h3.52s-10.23-1.53-10.23-1.53Zm-7.58-.62c-.06-.02-.12-.03-.18-.05l-8.22.78,7.56.58.84-1.31Zm6,2.32l-6.39-.5-.34.52c.14.04.27.08.38.13l6.35-.16Zm-6.59,4.09l-.39-1.01-6.73-.04,6.91,1.09c.06-.02.13-.03.2-.04Zm1.31-6.32l-.82,1.28,8.97.69-7.55-2.01c-.19.03-.4.04-.6.04Zm-12.54,5.66c-.12.03-.24.05-.37.07l.32,2.28,9.02-.93-8.97-1.41Zm-7.51-2.88l14.29-.09-6.93-1.47c-.4.08-.9.08-1.3,0l-2.98.65-3.08.91Zm6.17-2.93c.17-.03.35-.04.53-.04.37,0,.71.05.99.14l7.79-.74-15.35-.95,6.04,1.58Zm-48.99-7.96c.12-.02.26-.04.4-.05l.35-1.92c-.17-.02-.32-.06-.45-.1l-7.19.65,6.88,1.43Zm233.65,4.85l6.03-.71-6.98-.39.25.98c.26.01.5.05.7.11Zm-6.14,2.05l12.59.26-6.58-1.1c-.42.1-1.02.11-1.45,0l-4.56.83Zm-27.77-6.16l1.07.06-.84-.12-.23.06Zm38.88,2.6l-6.35-1.25.31,1.18,7.38.4-1.33-.33Zm7.29,4.77c-.49.13-1.2.12-1.67-.02l-3.52.42.73.05,5.77.12-1.31-.56Zm-13.14,8.83h.05c.12,0,.22,0,.32,0l7.95-2.84-9.91.17,1.58,2.66Zm12.04-10.14l-1.97-.18,1.53.25c.14-.03.29-.06.45-.07Zm-6.23,2.85c.4,0,.76.06,1.04.16l3.12-.23-5.74-.35.91.48c.2-.04.43-.06.68-.06Zm7.45-2.74c.1.03.19.07.26.1h.79s-1.04-.1-1.04-.1Zm-48.43-5.33l.77.78,5.41-.48-6.13-.32s-.04.01-.05.02Zm-84.35.86l-6.2-1.96c-.46.05-.99,0-1.35-.13l-6.61.5,14.15,1.59Zm-4.37-3.25l-3.33-.81.58.52,2.75.29Zm134.62,15.38c-.08,0-.16,0-.23-.01l-7.61,2.73,8.69-.5-.84-2.21Zm-125.96-15.8l5.98,1.61h0l-.15-1.14-6.19-.58.36.11Zm-62.89-11.01l.19-.62-5.21.69,4.17.1c.22-.09.52-.16.84-.17Zm67.89,10.19l-5.02.27,5.8.54-.09-.67c-.26-.02-.5-.07-.69-.15Zm-10.39-13.23l-.2-.22-1.63-.12,1.83.34Zm79.49,18.26l5.95-.53-.71-.71c-.22.01-.48,0-.69-.02l-4.55,1.26Zm-190.73,23.15l-.38.98c.05,0,.09.02.14.03l6.97-1.27-6.73.26Zm44.79-37.33l.49,1.72,5.59-1.52.43-.17-6.06-.15c-.13.06-.29.1-.45.13Zm-45.54,37.36l-6.28.24,5.13.76c.24-.06.51-.1.81-.1l.35-.9Zm1.49,3.33l-.51-.06c-.05.01-.1.03-.15.04l.66.02Zm20.51,7.17c.24.02.46.07.66.13l8.72-1.01-9.05-2.56c-.06,0-.14.01-.21.02l-.12,3.42Zm119.51-14.05l-1.09-1.68-7.67.97,8.55.78c.07-.02.14-.05.22-.07Zm-112.1,8.54l-3.58-.58-3.47-.43c-.59.08-1.3,0-1.72-.18l-6.39.29,6.81,1.48c.22-.04.46-.06.72-.06.42,0,.81.06,1.1.17l6.88-.62-.35-.07Zm-64.83-4.95s.02.01.04.02l6.44.11-5.48-.75-.99.62Zm33.04,3.19l1.31.03c-.07-.02-.14-.05-.19-.08l-1.12.04Zm3.19-5.3l-7.38,1.85,6.76-.26.62-1.59Zm-33.03.83c-.36.05-.79.05-1.14,0l-.44.27,5.03.69-3.45-.95Zm104.73,11.25l7.87-1.83-8.28-.19.06,1.97c.12,0,.24.02.35.04Zm46.48-14.85l.18.39c.45,0,.86.08,1.15.21l3.54-.13-4.88-.47Zm-116.75,2.71c-.21.05-.45.08-.69.08l-.6,1.53,8.41-.33-7.12-1.29Zm126.47-2.64l-.99-2.63c-.21,0-.4-.03-.58-.06l-6.37,1.33,7.81,1.39s.09-.02.14-.03Zm-9.44,2.33l5.7.61-5.19-1.18c-.14.02-.27.04-.42.05l-.09.52Zm-47.28,7.09l.09,2.87,8.77.2-8.86-3.07Zm33.54-2.37l-9.35-4.08-.3,3.21,9.65.88Zm-9.95-7.32l.48,1.67c.33.01.64.07.89.15l6.32-.61-7.68-1.21Zm80.52-18.5l-6.89,2.11,7.48-.58-.4-1.52c-.07,0-.14,0-.2-.01Zm59.66,21.36c-.42,0-.84-.05-1.15-.17l-4.96.41,6.54.44-.43-.68Zm11.05-19.44l6.06,1.94-1.35-1.65-4.72-.29Zm6.07,3.36h-.11s.14.01.14.01c0,0-.01,0-.03-.01Zm-1.94-4.78l1.04,1.27,5.7.35-6.73-1.62Zm-26.28,20.24c.41,0,.77.07,1.06.17l6.96-.56-8.91-1.49.89,1.89Zm-164.01,21.41c.05,0,.11,0,.16.01l9.4-2.94-8.82-.58c-.23.09-.51.16-.84.18l.09,3.32Zm131.65-21.62l-8.61,3.26,9.51-.3-.77-2.96s-.09,0-.13,0Zm-132.56,16.03l.37.68c.37,0,.73.04,1.02.11h.03s4.62-.66,4.62-.66l-6.04-.13Zm134.23-10.09l-.65-2.5-9.13.28,9.67,2.24s.07,0,.11-.02Zm-131.36-40.2c.24-.06.52-.1.83-.09l1.79-2.68-7.97,2.12,5.36.66Zm-67.05-1.38l-.1.23,2.72.5-2.37-.73c-.08,0-.16,0-.24,0Zm71.11-2.79l2.52-.53-6.96.61,2.88.06c.38-.17,1.04-.22,1.56-.14Zm134.78,6.03l-4.06.62,5.27-.04-.4-.51c-.29,0-.58-.02-.81-.07Zm-207.21-.3s.07.01.11.02l7.76-1.04-.09-.03-6.76-1.23-1.02,2.27Zm-22.5,34.39l4.89,1.34c.13-.02.27-.03.41-.03l.25-.78-5.55-.52Zm232.15-31.92l-.87-1.12-6.09.04,6.97,1.08Zm-228.43,29.76l-6.65-2.33c-.48.04-1-.01-1.36-.14l-8.07.71,7.48,2.52c.12-.01.24-.02.37-.02.39,0,.75.06,1.03.15l3.67-.35,3.52-.54Zm201.46-16.45c.09-.03.19-.05.29-.06l-.4-1.56-7.62.59,7.74,1.03Zm-233.6-5.14l-.35-.1-1.71.43,2.05-.33Zm65.84-8.65l-4.38-.32v.36c.22.03.43.08.61.15l3.77-.18Zm15.22,2.19s.07,0,.11-.01l.06-1.07-5.69-.41,5.52,1.49Zm-20.82-.93l-5.25.57,11.7.67-5.09-1.17c-.44.07-.98.04-1.36-.07Zm-58.02,7.51l1.15.33-.89-.37-.27.04Zm80.24-9.87l7.82-.95-6.81-.58-1.02,1.53Zm-80.8,9.48l-.19-.08c-.24.01-.49,0-.71-.03l-.17.04.54.16.52-.08Zm79.62-8.25c-.19-.02-.36-.06-.51-.11l-4.18.3,4.66.33.04-.52Zm-1.95,4.76c.54-.06,1.16.02,1.52.2h6.4l-5.4-1.58c-.51.06-1.1-.01-1.46-.17l-6.06.09,4.98,1.47Zm-87.82,5.72l6.42,1.66c.17-.03.35-.04.53-.04.3,0,.58.04.82.1l8.67-1.27-.79-.34-6.08-1.75-8.43,1.36-1.13.29Zm17.03,19.62c.24,0,.48.02.69.06l.32-.18-4.42-.58,2.84.74c.18-.03.37-.04.58-.04Zm3.44-1.49l-8.15.15,6.4.83,1.74-.98Zm20.59,6.7h1.17s-1.04-.07-1.04-.07l-.13.07Zm-87.24-26.01l-1.16,1.01,5.99-1.34-4.83.33Zm85.08,25.78l-.47-.03.4.04s.04,0,.07,0Zm53.55-38.55l-.18.27,3.86.33-3.1-.64c-.18.03-.37.05-.58.04Zm-140.85,13.93l1.25-1.08-6.28.44-.39.05,4.32.67c.32-.08.73-.11,1.1-.08Zm55.15-2.96h.19s-.63-.12-.63-.12l.43.12Zm270.75,6.28c-.4.13-.99.16-1.46.08l-5.19,1.28,13.33-.68-6.68-.68Zm-3.52,7.05l5.24.3-5.64-1.14.4.84Zm-20.95,3.76l-.91-.08.73.12.18-.04Zm21.73-2.12c.3,0,.56.03.8.09l5.43-.87-6.78-.38.55,1.16Zm9.76-.08c-.32,0-.62-.03-.87-.09l-5.79.93,7.54.61-.88-1.45Zm-29.23,1.33l-1.48-1.77c-.32.02-.65,0-.92-.07l-6.01,1.18,8.28.69s.08-.03.12-.04Zm-23.84,5.39l-1.18-2.03c-.05,0-.1,0-.14,0l-6.68,3.25,8.01-1.22Zm21.12-8.48s.06-.02.09-.03l-1.2-1.36c-.35.02-.73-.01-1.04-.09l-5.45.87,7.59.62Zm15.37-4.5c-.43.16-1.14.2-1.66.1l-4.39.92,11.52-.64-5.47-.37Zm-6.51,2.47s-.03,0-.05.02l.04.03.78.03-.76-.08Zm-2.88,1.67l-6.29-1.07,1.12,1.28c.07,0,.15,0,.23,0,.39,0,.74.05,1.02.15l3.91-.35Zm27.01-9.32c-.17,0-.34,0-.5-.01l-5.92,1.99,7.94-.14-1.52-1.84Zm-3.26,6.08l-1.86-.08.2.14,1.66-.07Zm-50.9,6.24c-.22.09-.49.16-.79.18v1.21s8.32-1.08,8.32-1.08l-7.53-.31Zm-.81,1.88v.45c.09,0,.17.02.25.03l4.91-1.16-5.16.67Zm13.56,1.65l7.53-1.87-5.4-.9-2.02-.17c-.44.16-1.13.2-1.67.11l-9.12,2.16,9.02.79c.44-.15,1.12-.2,1.66-.11Zm43.84-12.92l-.51-.62-4.88.08,5.36.55s.02,0,.03,0Zm-15.05,1.64l5.24.35c.44-.17,1.16-.21,1.69-.1l4.03-.82-10.97.56Zm-8.88,5.81l.91.73,3.89.37-4.8-1.09Zm2.67-6.99l.26.54c.17,0,.35.02.5.04l4.17-1.02-4.93.44Zm-20.62,2.54c.09,0,.19,0,.3,0,.15,0,.3,0,.43.02l4.19-1.23-5.8.36.89.85Zm7.89-.98l-3.58,1.05,4.86-.47-.58-.57c-.23.02-.48,0-.7-.01Zm1.74,1.28c.05-.03.11-.05.17-.08l-.19-.19-2.54.25,2.56.02Zm-.32-1.41l.65.64,5.24-.51-5.78-.17s-.07.03-.12.04Zm-12.2,6.76c.26,0,.51.02.73.07l5.99-1.18-8.25-.67s-.08.02-.12.04l1.45,1.75c.06,0,.13,0,.2,0Zm13.04,3.17l-1.09-.18-5.88,1.14-2.61.65,10.04.06-.47-1.67Zm-15.92-6.25c.1,0,.2-.01.31-.01.3,0,.58.04.83.1l3.98-.62-5.51.15.4.39Zm25.79,4.48c-.4.02-.83-.02-1.15-.12l-2.72.33-2.15.42,7.18.8-1.17-1.43Zm-5.15-4.8l-4.08-.15,4.58.78-.5-.63Zm4.84-4.04c.12-.06.27-.1.43-.14l-.25-.54-5.67.51,5.49.16Zm.42-2.36c-.08.03-.17.05-.25.07l.52,1.1,6.19-.56-6.46-.61Zm-4.43,6.43l.44.54c.06,0,.12,0,.19,0,.37,0,.7.05.97.14l4.34-.46-5.94-.22Zm2.1,2.8l-1.04-.82c-.49.06-1.06,0-1.44-.13l-3.75.34.25.04,5.97.56Zm-4.43-3.36s-.05-.02-.07-.03h-.29s.36.03.36.03Zm-2.97-1.75l.13.12c.09,0,.19,0,.28,0,.24,0,.45.02.66.06l2.51-.52-3.57.34Zm21.84.19l-1.72.22,3.1-.12-.04-.02c-.44.06-.97.03-1.34-.08Zm-2.96,1.43l-.99-.07-4.64-.09c-.14.07-.3.11-.48.15l2.66.28c.5-.16,1.27-.17,1.8-.03l1.64-.24Zm-2.51,1.6c-.35,0-.67-.05-.93-.14l-4.95.52,6.22.35-.35-.74Zm-311.09-10.18l.65-.72-5.16,1.16,4.51-.44Zm106.61,3.51l-5.1-.54c-.4.12-.98.16-1.45.09l-6.95,1.82,13.5-1.37Zm-13.37,2.66l4.06.64,7.84-2.24,1.69-.6-16.19,1.64,2.61.56Zm29.84-6.67h3.63s-3.09-.41-3.09-.41c-.16.04-.34.08-.53.09v.31Zm-23.19,2.25c.25-.06.55-.08.84-.07l1.02-1.28-7.57.25,5.71,1.09Zm37.11-10.81c.16-.02.32-.04.51-.04.22,0,.42.02.6.06l2.41-.46,3.34-.91-12.29.11,5.42,1.24Zm4.21-2.32c-.43.1-1.05.1-1.48-.01l-4.9.59,9.82-.09-3.44-.49Zm-18.1,9.19s.07,0,.11.01h0s-.12-.01-.12-.01Zm-20.98,2.11l.83-1.06-7.02,1.26,6.19-.21Zm21.71-2.55s-.02-.01-.03-.02h-.57s.57.04.57.04l.03-.02Zm-22.29,4.32l7.55-1.53-6.52.22-1.03,1.31Zm166.54,14.05v-.36s-5.32.69-5.32.69l4.35-.07c.24-.13.58-.23.97-.26Zm-163.36-20.14l-.35,1.92c.12.02.22.04.32.07l6.01-.86-5.6-1.18c-.12.02-.25.04-.38.05Zm-.08,3.22c-.27.06-.59.09-.91.08l-.79,1,6.85-.23-5.16-.84Zm-98.15,1.03l-6.06.59-1.25,1.39,7.31-1.99Zm99.03-5.82l-.05.08,2.54.11-1.66-.26c-.24.06-.54.09-.83.08Zm71.78,3.37l.08-.1-1.24.22,1.16-.12Zm-75.15-3.44l2.54.11.11-.15c-.07-.02-.14-.05-.2-.07l-2.45.1Zm11.01,5.13v-1.59c-.15-.02-.3-.04-.43-.08l-5.63.81,5.66.92c.13-.03.26-.05.4-.07Zm-20.58-14.42l-.86-.16-.81-.04c-.4.15-1.05.18-1.53.09l-3.33.61,6.55-.5Zm202.46,30.66l.04.13,2.87.48-2.63-.66-.27.05Zm-2.25-3.29l1.43,1.72c.07,0,.14,0,.22,0,.35,0,.68.05.95.13l5.08-.62-7.68-1.22Zm-23.32,5.04c-.09.03-.17.05-.27.08l1.17,2,8.28-1.26-9.18-.81Zm52.5-5.94c.4-.08.92-.08,1.33,0l5.99-1.35-14.36-.05,7.03,1.41Zm10.74-.85c-.23,0-.47-.02-.68-.06l-5.66,1.28,7-.12-.66-1.1Zm-76.22,5.65c.09,0,.17,0,.24.02l6.42-2-6.89,1.08.23.91Zm14.98,4.99c.09,0,.18,0,.27,0l6.3-2.47-7.4,1.13.78,1.33h.06Zm-3.38-7.32s-.04,0-.06,0l-7.19,2.24,7.23-.94v-1.3Zm-79.42-18.22c-.12.04-.24.08-.38.1l.1.32c.32.01.61.07.84.15l3.71-.27-4.26-.3Zm-11.22,2.89l3.79-.8-3.46.36-.32.44Zm-1.21-2.05l.82-.02c.06-.03.11-.05.17-.08l-.99.1Zm4.14.85h-.94c-.08.06-.17.09-.27.13l1.2-.13Zm5.61,2.41c.47-.15,1.19-.17,1.69-.04l7.33-1.15-.65-.15-8.38-.66-6.32,1.34,6.33.66Zm-7.08-3.47l.65-.12-.86.08c.07.01.15.02.22.04Zm4.86.08l3.27-.05c.17-.09.37-.16.62-.2l-.1-.32c-.17,0-.34-.03-.49-.06l-3.3.63Zm4.54,1.09l2.09.17-1.43-.24c-.19.04-.42.07-.66.08Zm-.94-3.6l.33.57h.01c.19,0,.37.01.53.04l3.67-.86-4.55.25Zm-149.16,3.05l-.73,1.68,6.12-.55-3.41-.99-1.31-.22c-.2.04-.43.07-.67.08Zm162.36-31.69l2.92-.53.09-.54-3.01,1.07Zm-6.14,3.58c.22-.07.49-.11.79-.1l5.36-2.08-3.85.15c-.28.13-.73.2-1.16.17l-5.93,1.63,4.79.24Zm.98-5.02l.55,1.91,5.3-1.88-5.58-.1c-.09.03-.18.05-.27.07Zm8,1.41l-2.64.48,1.9-.07c.18-.08.42-.15.69-.17l.04-.24Zm.15,5.08l-2.28.74,2.31-.41-.02-.33Zm-19.48-4.09l-5.01-.03.04,1.23,4.98-1.19Zm1.88,2.14c.24-.05.55-.08.83-.05l4.65-1.28-9.27.9,3.8.43Zm.52-5.84l-5.71,1.83,5.97,1.08-.26-2.91Zm-7.45,2.51l.02.68,3.93.02-3.92-.71s-.02,0-.03,0Zm24.35,2.64l-.06-.89-4.18,1.63,4.24-.74Zm-73.85.9l-.97.27,6.94,2.47h.11c.09,0,.17,0,.24,0l4.38-1.24h-.45s.94-.14.94-.14l.22-.07-6.12-2.2-5.3.9Zm75.14,5.81l-2.85.65,2.44-.08,1.07-.2-.24-.34c-.14,0-.29,0-.42-.02Zm-17.81-7.79l-2.81.67,6.67-.65-2.82-.12c-.28.08-.68.12-1.04.09Zm13.98,10.55l2.86.54c.22-.04.47-.05.71-.04l.34-.37-3.49-.13h-.42Zm4.96-2.83l.21.3,2.87-.55-2.8.13c-.08.04-.17.08-.28.11Zm-9.5,3.05l.71,1.39,4.65-.45-5.07-.95c-.09,0-.19.01-.28.01Zm7.17-8.3l-.06-.9-4.82.84,4.47.15c.12-.04.26-.07.42-.09Zm-8.59,2.73c.25-.08.6-.12.92-.1l3.95-1.27-8.9,1.14,4.03.24Zm-24.4-4.82l3.23.32-3.15-.79-.08.47Zm-9.45-2.08l.11-.49c-.06-.01-.13-.03-.19-.04l-3.4.24,3.48.29Zm-6.74,1.48l-.38.52,3.87.38-3.21-.9c-.09,0-.18,0-.27,0Zm7.51.95c.45-.03.92.04,1.2.18l.71.04-2.72-.44.81.23Zm-.22-1.61c.09.02.19.04.27.07l2.73-.11-2.95-.25-.06.29Zm-19.3.88l-1.95.16-3.31.56,5.57,2.01h.09c.22,0,.42.02.59.06l6.43-.83-6.52-1.88c-.31.02-.65,0-.9-.08Zm-6.45.92l5.73,2.07s.06-.04.09-.06l-5.65-2.04-.17.03Zm26.38,1.02l-.22.76,4.37.36-4.1-1.13s-.04,0-.05,0Zm-9.74-4.63c.14-.03.3-.04.48-.04.25,0,.48.03.68.08l1.15-.08-3.2-.1.89.14Zm.68,2.91l.41-.55c-.17-.05-.3-.12-.4-.21l-.12-.02-6.25.17,6.35.62Zm24.47,2.44c.13-.02.27-.03.42-.03.22,0,.44.02.62.07l2.95-.32-6.84-.25,2.85.54Zm34.77,1.91l-.19-1.22-4.65,1.55,4.29-.17c.15-.07.34-.13.55-.16Zm-33.39-7.38l4.55-1.45-4.54.33v1.13Zm3.04-3.26l4.31.78c.2-.03.43-.03.64-.02l4.37-1.11-9.32.35Zm-3.02.47v1.19s4.8-.34,4.8-.34l-4.76-.86s-.03,0-.04,0Zm-8.85,8.64c.08,0,.17,0,.24,0,.3,0,.55.04.77.1l2.7-.14-6.85-.82,3.13.86Zm.17-1.89c.13.02.24.05.35.08l2.63-.08-2.92-.29-.05.29Zm-.72-.02l.06-.34-2.82-.28,2.72.62s.04,0,.05,0Zm-3.49-1.16l3.62.36.07-.43c-.12-.01-.22-.04-.3-.07l-3.39.14Zm37.59,9.63h1c.35-.16.94-.22,1.42-.15l.14-.03c-.28.01-.58,0-.81-.06l-1.75.24Zm17.43-11.27l-5.06,1.16,5.17.12-.09-1.28h-.02Zm45.2,13.23l-3.1.04,4.38,1-.42-.89c-.33,0-.62-.06-.85-.16Zm-4.54,1.95l.35,1.94c.16,0,.31.03.45.07l5.69-.74-6.27-1.27h-.22Zm6.11-1.86l.48.99c.22,0,.41.03.58.07l3.72-.48-4.78-.59h0Zm-8.25.29l-.18-.15c-.12.01-.22.02-.35.02l.53.13Zm4.73-2.32l-1.78-.06,3.46.75-.5-.5c-.44.03-.9-.05-1.18-.18Zm7.66,3.71l5.01.73-.48-.94-4.54.21Zm-10.63-1.12l-.66-.16.21.17c.14-.01.3-.02.45-.01Zm-2.5-1.81l.44.12,3.47.14h.14l-4.67-1.01.62.75Zm39.55,1.64l.35,1c.09,0,.18,0,.26.02l5.07-1.24-1.65.02-4.03.2Zm-3.1,2.97l3.67-.42-.23-.26c-.19,0-.38,0-.55-.02l-2.89.7Zm2.05-2.91l-5.06,1.41,5.2-.24c.14-.08.32-.14.53-.18l-.35-1.01-.32.02Zm-41.15,1.48l5.14,1.76-.34-1.84h-3.1l-1.69.08Zm50.84-4.98l1.09.05-1.16-.15.07.1Zm-30.5,6.55l.51.08c-.1-.02-.2-.05-.29-.08h-.22Zm-3.03,4.29l-2.07.28-.89.16,1.17.1,2.16.03c.45-.19,1.25-.24,1.78-.1l3.21-.42-4.05-.17c-.34.13-.86.18-1.3.13Zm16.34-5.82h.23s5.01-1.41,5.01-1.41h-.24s-5.01,1.41-5.01,1.41Zm-12.14.39c.12,0,.24.01.35.02l5.21-1.23-6.02.28.46.92Zm-15.4-1.57s.02,0,.03.01h.04-.07Zm-31.21-6.69l-3.29.41,4.8.42c.21-.06.46-.09.74-.09.42,0,.79.08,1.04.2h.04s2.05.07,2.05.07l-4.32-.97c-.35.05-.76.03-1.06-.04Zm-1.92-5.18l-2.23.17-1.12.17,8.54.98-4.26-1.24c-.32.02-.66,0-.92-.08Zm-4.07-2.36l4.1,1.11-.38-.88-3.72-.24Zm12.79,4.87l-2.59-.06,3.45.79-.14-.57c-.28-.02-.53-.08-.72-.16Zm-21.77-.69l.76.03,4.65-.07-.14-.77-5.27.81Zm5.75-2.77l4.91.11-4.99-1.35.09,1.24Zm-1.3.44l.4.05c.06-.01.12-.02.18-.03h-.58Zm18.92,3.77c.35.03.66.11.86.23l1.79.15-2.77-.85.12.48Zm-18.05,2.04l.86-.08c.06-.03.14-.07.22-.09-.12,0-.22-.01-.32-.03l-1.15.22.4-.02Zm16.83-1h-.33s.5.08.5.08c-.06-.02-.12-.05-.17-.08Zm12.61,4.93c.53-.04,1.09.07,1.38.26l.92.08-3.76-.82,1.45.47Zm-.83,1.06l-.89-.03,3.76.55-1.43-.34c-.5.07-1.1-.01-1.44-.18Zm-.48-2.11l-1.12-.12,3.58.77-1.12-.37c-.54.03-1.07-.08-1.34-.28Zm7.74.8c-.49.01-.94-.08-1.2-.24l-1.25-.1,1.61.54,1.3.36-.46-.56Zm-15.85-2.8c.54-.02,1.04.09,1.3.28l.88.1-2.36-.59.17.21Zm11.79,5.87c.1,0,.19,0,.3,0,.34,0,.64.05.88.13l3.25-.17-9.28-1.37,4.86,1.42Zm-12.49-4.72l-1.91-.14-.89-.03,7.12,1.32-3.28-1.04c-.37.02-.76-.02-1.04-.11Zm5.71-3.48c.43-.02.86.04,1.15.17l2.19.05-5.5-.89,2.17.67Zm-113.52.62l-6.09-2.17-.5,1.97,6.59.21Zm-199.42,22.03l1.21.08-.75-.13c-.14.03-.3.05-.46.05Zm1.07-1.47l5.81-1.36-4.57.1-1.24,1.26Zm-15.17,5.89l7.49.3-2.25-.45c-.53.11-1.23.06-1.66-.1l-3.1.19-.48.06Zm24.08-6.94l-7.22,1.69,13.39.33-5.49-1.99c-.22.01-.47,0-.68-.03Zm-14.15,4.66h.69c-.14-.02-.29-.05-.41-.09l-.28.09Zm-1.84-1.56c.15-.02.32-.04.49-.04.31,0,.6.04.84.11l1.18-.42-5.36-.35,2.85.69Zm-4.27,2.44c.23-.06.49-.09.78-.09.35,0,.66.05.92.13l1.4-.46-5.97-.02,2.87.44Zm4.15-.88h.37l.08-.03-.45.03Zm24.5-3c.08,0,.16,0,.25,0l1.42-2.2-7.41.12,5.74,2.08Zm-24.86,3.77l3.48-.29h-2.58s-.9.29-.9.29Zm60.66-16.49l1.04-1.18-6.66,1.06,5.62.13Zm-1.79,1.39c.19-.02.4-.03.6-.02l.79-.9-5.76-.13,4.37,1.05Zm-32.03,8.65l1.13-1.75-7.66,1.86,6.53-.1Zm24.08-9.37l-7.78,3.16,2.43.73,2.38.53.59.11c.19-.03.41-.03.62-.02l8.33-3.07-6.03-1.45c-.17.02-.36.03-.55.02Zm11.6-1.85l-1.05,1.2,5.51.13-4.07-1.33c-.12,0-.26.01-.39,0Zm-33.72,9.4l-1.17,1.81,7.09-.11-5.58-1.71c-.11,0-.22.02-.35.01Zm1.42-1.08l.09.03,9.55-2.73s-.04-.03-.06-.04l-9.58,2.74Zm10.5-2.43l-9.66,2.76,2.37.92,8.36,1.96,4.49.46,8.34-3.71-4.94-.68c-.21.05-.45.08-.71.08-.5,0-.91-.1-1.17-.26l-1.02.14.82-.31s-.01-.01-.02-.02l-6.04-1.34c-.25.04-.55.04-.82.01Zm-52.82,52.99l1.12,6.31,6.94,1,8.18-33.28-16.23,25.97Zm-25.33-26.72l4.06,1.08c.17-.02.34-.04.53-.04.21,0,.4.01.58.05l8.82-2.14-13.99,1.06Zm4.09-4.33c-.27.04-.61.05-.89.02l-3.93,3.3,8.85-2.25-4.03-1.06Zm-11.17,2.26l4.33,1.31c.26-.03.55-.03.81,0l4.03-3.38-9.17,2.08Zm13.82,3.92l5.53,1.7c.14-.02.28-.03.43-.03.17,0,.32,0,.47.03l9.82-2.86-16.25,1.16Zm30.94,2.11c-.5.03-1.02-.04-1.37-6.18l-12.11,28.52,19.26-26.1-5.78,3.77Zm-44.05-8.59l-1.61,1.7,7.94-1.79-6.33.09Zm113.18-26.55c.08,0,.16,0,.24,0,.12,0,.24,0,.35.01l1.06-.82-5.24-.36,3.59,1.18Zm-82.24,29.17l-1.74,27.97c.12,6.03.22,6.07.31.1l12.09-28.51-10.67.44Zm-9.62,6.4l3.53-4.84,3.64,26.29,1.64-27.81-8.81,6.37Zm-21.62-19.88l-5.48.36-4.33.41,15.53,1-4.96-1.75c-.24.02-.52.01-.76-.01Zm37.12,3.62c.19-.04.4-.06.62-.06.35,0,.68.05.94.14l4.66-.44-9.7-.39,3.47.75Zm-20.62.3c.14-.02.29-.03.45-.03.27,0,.52.03.73.08l7.71-1.33-13.98-.18,5.09,1.46Zm-24.53,7.06l5.16,1.66c.2-.02.42-.02.63,0l1.67-1.77-7.46.11Zm29.86-6.72l-.19.03,12.84-.21-3.98-.86-8.68,1.04Zm-18.47-4.49l4.88,1.72c.09,0,.2,0,.3,0,.32,0,.61.04.86.11l7.24-.89-13.26-.93h-.02Zm-19.34,1.29l-11.09,2.63s.04.03.05.04l11.11-2.64-.08-.03Zm5.32,1.85l-4.38-1.52-11.6,2.75,6.63,2.64c.08,0,.15,0,.23,0,.2,0,.4.02.58.05l11.43-2.67-2.89-1.23Zm195.61-22.06l.16-.28-1.8.5,1.64-.22Zm32.85-6.6l2.56-.45.48-.12-2.77.13-.27.44Zm-.24-.89l.64-1.07-5.27,1.29,4.63-.22Zm7.82,2.6s.03,0,.05.01l7.04-.44-3.15-1-2.6-.68-1.34,2.11Zm.38-3.5l.71-.18.27-3.31-5.92,2.46,4.94,1.02Zm-1.52,3.44c.13-.02.25-.04.42-.03l1.3-2.06-6.32,1.11,4.6.98Zm-19.98,1.75c.27-.11.68-.17,1.08-.15l.66-.69-4.53.79,2.79.04Zm1.97-2.02c.27-.09.63-.14,1-.12l.73-.76-3.79.81,2.06.08Zm.68,1.12l-.76.8,4.78-.5-2.33-.27-.99-.08c-.21.04-.46.06-.7.04Zm-90.92,6.79l-1.07.83,5.93-.49-4.86-.33Zm118.97-12.56l-6.45,2.17,6.5,2.05c.06,0,.12,0,.18,0,.07,0,.14,0,.21,0l6.57-1.99-6.73-2.23c-.09,0-.19,0-.27,0Zm-7.74,1.1l4.18-1.05,1.88-.63-5.79-1.61-.27,3.29Zm10.77-1.32l5.35,1.77-.06-1.49-5.29-.28Zm4.99,6.86l6.15-1.13-5.82-.18-.33,1.32Zm1-7.01l4.74.26-4.82-2.16.08,1.9Zm180.42,9.48l.98,1.58h.01c.12,0,.23,0,.35.02l4.91-1.32-.2-.03-6.04-.25Zm-189.59-10.34l.18-1.47-5.17.08,4.99,1.39Zm2.54.5l5.91.32-.08-2.03-5.83,1.71Zm-37.61,6.2l-5.79.9,1.71.12c.35-.1.87-.13,1.27-.06l5.6-.99-1.44-.05c-.36.13-.93.16-1.36.08Zm9.22-1.85l-.87.91,4.92-.61-3.26-.37c-.23.06-.52.08-.79.07Zm-55.57,12.62l2.61.02,1.15-.45-5.76-.2,2,.63Zm1.75-1.96l4.47-.3.73-.92-6.73.97,1.53.25Zm-2.91,3.15l-.8-.06.39.09c.13-.02.27-.03.41-.03Zm7.61-2.71l2.33-.43-2.1.14-.23.3Zm-34.54-.3l3.61.22h.2s-.48-.16-.48-.16l-3.33-.07Zm24.25.18l.49.02h.09c-.15-.02-.29-.05-.42-.08l-.17.06Zm-27.85,1.13l-2.56.4-2.23.52,10.01-.03-4.05-.86c-.37.06-.83.05-1.17-.03Zm39.45-2.66l-.67.85,4.75-.32-3.44-.58c-.19.04-.41.05-.64.05Zm16.44-1.42l-6.51,1.77,3.84.38c.27-.07.62-.1.94-.08l6.41-2.1-3.49-.09c-.31.12-.78.17-1.2.13Zm1.47-3.05l-.56,1.73,5.36-1.48-4.21-.34c-.17.05-.37.08-.58.09Zm64.96-8.5l.06,1.5,4.55-1.25-4.6-.25Zm-58.09,7.98c.32-.09.76-.12,1.14-.08l.37-.26-3.33.19,1.82.15Zm6.29,2.92s.09-.03.14-.05l.13-.33-2.57.3,2.3.07Zm.48-.88l.14-.37-2.41.64,2.26-.26Zm-22.08.39l-1.37,2.26,1.94-.45,4.12-1.12h-.39s.47-.07.47-.07l-4.23-.67c-.17.03-.35.05-.55.05Zm-2.82,2.54c.14-.02.28-.04.44-.05l.12-.03,1.4-2.33-6.19,1.69,4.22.71Zm9.54-2.59c.12-.02.26-.04.4-.05l.58-1.78-5.11,1.17,4.12.66Zm-5.71,67.89c-.09,0-.19.01-.28.02l-.42,1.6,7.6.71-6.9-2.33Zm147.73,7.59c-.34.06-.75.08-1.12.04l-11.55,4.17,22.79-1.76-10.13-2.45Zm12.61,1.63l1.25-6.41-12.32,3.94,8.39,2.02,2.34.49c.11-.01.22-.02.34-.03Zm-68.08-1.18l11.01-1.95-9.77-2.26c-.47.08-1.06.08-1.51,0l-11.19,2.44,9.64,1.78c.27-.06.57-.1.9-.1s.65.04.92.1Zm107.55-8.27l-7.86-1.12,8.34,2.46-.48-1.34Zm-23.94,4.27l-1.71-4-5.55,1.01-3.77.9,10.87,2.13c.05-.01.1-.02.16-.03Zm11.62-.75c-.24,0-.46-.03-.66-.07l-7.06,1.52,8.24.38-.52-1.83Zm9.99-1.75l-10.65-3.15.91,3.23c.49.01.92.1,1.24.25l8.49-.33Zm-64.89,11.53c-.37.07-.84.09-1.25.05l-10.16,3.41,22.1-1.05-10.7-2.41Zm44.8-9.01l7.63-1.64-10.16-2.49,1.73,4.05c.29,0,.55.03.8.08Zm-2.6,1.09s-.06-.07-.08-.1l-11.75-2.31c-.2.04-.43.07-.66.08l-1.25,6.43c.26.03.5.08.71.16l13.03-4.25Zm-70.6,13.42l.94.31c.15-.01.32-.02.48-.02.29,0,.55.02.8.07l4.73-1.07-6.95.71Zm1.51,4.34l-.2,2.33c.37.04.71.11.97.22l9.9-.55-10.67-2.01Zm.04-.48l9.26,1.74-9.06-3.59h-.04l-.16,1.85Zm-8.85-9.14l-5.35.36v.42c.19.01.37.04.54.08l4.81-.87Zm9.99-.51l10.6,3.31c.32-.04.68-.04,1.01,0l10.52-3.52-22.14.22Zm10.35,4.92l-8.58,1.94,20.87,1.12-10.87-3.03c-.45.06-.99.05-1.42-.03Zm47.54-77.95l-2.65-.73c-.12.01-.24.02-.37.02-.45,0-.84-.08-1.1-.22l-1.93-.04,6.05.97Zm-44.63,86.39c-.65.07-1.38-.02-1.84-.21l-9,.5,19.35,2.6-8.51-2.89Zm25.23-18.88l-12.24,4.41c.13.05.24.11.33.18l12.23-4.42c-.12-.05-.24-.11-.32-.17Zm108.09-15.1h.03s.04,0,.04,0h-.07Zm-45.73,8.27l-7.94-2.73.61,1.67,7.33,1.05Zm46.07-10.63l-6.45-1.29,1.33,2.83c.4,0,.78.06,1.07.15l7.53-.82-3.49-.88Zm5.98,5.43l-4.2-.95-5.17-.94-.75.17.84,1.91,9.28-.19Zm.69-3.57c-.43,0-.83-.05-1.15-.15l-1.4.15-2.62.58,5.7.3-.53-.89Zm8.82-4.37l.9,1.66h.04c.37,0,.72.05,1,.13l7.2-.9-9.14-.9Zm-2.63,2.33l-14.8-1.48,7.89,1.98c.19-.03.41-.05.63-.05.4,0,.76.05,1.04.14l5.23-.6Zm3.82.9c-.45.03-.92-.02-1.27-.13l-4.84.56,6.92.54-.81-.97Zm-2.64,2.39l-6.64-1.31.6,1,6.04.32Zm-18.86.75l-8,1.78-.55.19,9.34-.19-.79-1.77Zm-36.56,8.47c-.54.02-1.09-.06-1.46-.21l-6.14.34,8.6,1.25-1-1.39Zm-.48-5.89c-.06,0-.12.02-.17.02l.69,4.24c.26.01.5.05.71.1l9.9-1.6-11.14-2.76Zm-.89.05c-.32-.02-.6-.07-.85-.15l-8.46.92,10,3.43-.68-4.21Zm34.74-3.78l-5.1-.92-5.83-.81s-.08.02-.12.03l2.83,4.32h.13c.14,0,.28,0,.41.02l7.68-2.63Zm-20.32,5.81l-.21-3.68c-.27-.02-.52-.07-.73-.13l-10.14,1.16,10.83,2.68c.09-.01.17-.03.26-.03Zm12.31.38l-.31-1.97c-.13,0-.25-.02-.37-.04l-7.92,2.14,8.59-.13Zm-6.67-8.05l-7.99.86,1.96,1.57c.22-.02.45-.03.67-.02l5.36-2.41Zm5.73,4.57l-2.82-4.32c-.1,0-.2,0-.3,0l-6.11,2.75,9.2,1.58s.02,0,.03,0Zm-198.18,11.56l1.48-2.68c-.07-.01-.14-.03-.2-.05l-11.12,1.64,8.71,1.22c.32-.09.71-.14,1.13-.13Zm-92.08-22.49c-.09,0-.18,0-.27,0h0l-1.19,2.48,8.99.5-7.53-2.99Zm20.89,6.2l1.04-2.49-9.09-.07,7.67,2.58c.12,0,.24-.02.37-.02Zm-21.1-7.76l1.33-2.36-9.18-.24,7.43,2.61c.14,0,.28-.02.43-.01Zm-1.99,4l1.2-2.5s-.06-.01-.09-.02l-10.77,1.98,9.66.54Zm146.45,26.51l.12-3.55-.66-.16-10.02,1.58,7.89,2.3,2.67-.18Zm-96.5-21.79c-.28.04-.61.05-.91.02l-4.13,4.15,11.85-2.28-6.8-1.89Zm-1.22-1.5c.14-.02.28-.04.43-.05l.37-2.05-8.56.18,7.76,1.91Zm-27.76,4.2l1.23-2.01-8.7,2.44,7.47-.42Zm2.77-2.12c-.22.04-.48.05-.72.05l-1.24,2.03,8.15-.46-6.19-1.61Zm-11.34-5.16c.24,0,.46.02.66.05l10.92-2.63-8.63-3.09c-.33.03-.71.01-1.02-.04l-10.44,2.46,8.23,3.26c.09,0,.18,0,.27,0Zm-35.25-9.59c.32-.06.71-.08,1.04-.04h.12s1.02-.76,1.02-.76l-6.62-.07,4.33.87h.12Zm-6.74-2.45l-.37.71,5.76-.43-5.39-.28Zm12.77,3.91c-.23.05-.49.08-.76.08-.56,0-1.05-.11-1.37-.28l-2.02-.03c-.06.03-.13.05-.2.08l5.93.47-1.58-.31Zm-12.74-5.42c-.19,0-.37-.02-.53-.05l-.55,1.04.55.03.53-1.01Zm20.95,2.32l1.26-1.2-7.61.67,5.09.64c.35-.1.83-.15,1.27-.11Zm.55,3.43l1.42-1.13-5.64.18c-.4.09-.95.11-1.39.04h-.46s4.82.96,4.82.96c.37-.08.85-.1,1.25-.05Zm6.57,3.87l-6.68-2.35c-.51.04-1.07-.01-1.46-.15l-9.1.83,17.24,1.67Zm-18.24-6.44l-.95.71.9-.03,5.17-.63-5.12-.05Zm75.09,21.92l1.42-2.02-9.97.21,7.69,1.86c.26-.05.57-.06.86-.05Zm72.71,15.78l-7.89-2.29c-.26.03-.56.05-.85.03l-1.59,2.08,10.33.18Zm-8.18-4.91c-.22-.03-.41-.08-.58-.15l-7.01.56,7.3.36.29-.77Zm-16.27,2.24l1.24-1.09-8.45,1.4,7.21-.31Zm27.79,2.1l.98-1.87c-.27-.05-.5-.13-.69-.23l-8.1.07,7.13,2.07c.22-.03.45-.05.68-.04Zm3.21.41l5.57-.37-6.42-1.88c-.2.03-.42.04-.65.04l-.99,1.87c.33.06.62.17.82.29l1.66.05Zm11.07,4.88l.56-3.15c-.45-.05-.83-.17-1.09-.33l-10.08-.29,10.4,3.78c.06,0,.14-.01.2-.01Zm.76-5.19l-1.33.09,1.06.31c.09,0,.17-.02.26-.02v-.37Zm-4.23.54l-.71-.21-1.94.13,2.66.08Zm-34.83-3.95c-.45.14-1.09.2-1.65.14l-1.17,1.03,9.77-.41-6.95-.76Zm-36.96-13.68l-11.68,2.44,9.75.2,1.94-2.64Zm-134.84-23.42l-8.64,27.4.27.04,12.47-25.71,2.58-.2-5.56-1.51c-.35.05-.78.05-1.12-.01Zm145.04,31.67l2.43-4.32s-.06,0-.09-.02l-13.69,2.43,10.4,2c.28-.06.61-.09.94-.09Zm-.82-4.91l-10.87-.22-1.81,2.47,12.68-2.25Zm-22.22-3.59l-1.46,2.08,10.94-2.29-9.49.2Zm280.48-7.31c-.5.07-1.13.03-1.56-.09l-6.94.87,16.39,1.35-7.89-2.12Zm-232.98,17.02l-7.85-1.96c-.23.04-.49.06-.75.05l-1.48,2.67c.14.03.28.07.4.11l9.68-.88Zm1.32,2.69l.35-.5-6.48-.22,4.98.83c.33-.08.74-.12,1.15-.11Zm-12.61-5.57l-9.36-2.62c-.21.03-.43.04-.66.04l-2.43,4.32c.07.01.14.03.2.05l12.25-1.8Zm349.8-44.67c.17,0,.32,0,.48.03l5.05-1.4-7.13-.02,1.35,1.4c.08,0,.17,0,.25,0Zm-33.98-13.49l-2.53.36,8.89.25-4.8-.61c-.45.12-1.1.13-1.56,0Zm11.73-.2l-4.64-.07,5.32.68-.68-.61Zm-2.48-1.42l-4.71.84,6.66.09-.99-.89c-.32.03-.68,0-.95-.05Zm-20.82,3.98l8.94,1.97c.32-.06.71-.07,1.04-.02l4.69-1.29-5.82-1.19-3.79-.66-3.2.67-1.87.53Zm16.23-.04c.35-.07.81-.07,1.17,0l4.82-1.11-13.26-.37,7.27,1.49Zm-13.13-2.56l-.71-.44-3.19-.11,3.9.55Zm-3.49-1.43l-2.67.33,4.66.16-.69-.43c-.42.07-.93.04-1.3-.06Zm61.18,9.97l1.78.23,5.65-.75-8.9-1.87,1.47,2.39Zm-58.09-9.44l2.85.09-3.48-.49.63.39Zm20.98.48l5.13.07-6.12-.96.99.89Zm21.44,3.24l-4.88,1.08,6.32.46-.87-1.5c-.21,0-.4-.01-.58-.04Zm3.31,3.42l1.12.27,5.96-1.01-7.86-.58.77,1.33Zm-1.06-1.82l6.98.51-7.85-2.02.87,1.5Zm10.44,1.67l-4.04.69-1.58.35,2.57.61,5.2.68-1.4-2.26c-.27,0-.53-.02-.75-.07Zm-28.23-4.38l7.53,1.59c.36-.07.81-.07,1.17,0l4.57-1.01-13.28-.57Zm-4.73-1.1c.09,0,.19,0,.3,0,.27,0,.53.03.74.08l3.65-.55-5.32-.08.63.55Zm-30.89-3.74l5.42.54-.68-.66-4.73.11Zm39.24,3.69l-4.31.65,11.71.5-6.03-1.13c-.42.08-.98.08-1.38-.02Zm-27.65-.44l2.64-.37-4.68-.16.76.47c.16-.02.33-.04.51-.04.28,0,.55.03.77.09Zm-74-9.73l4.96.35-5.36-1.28.4.93Zm8.57,1.43l-2.79.13,3.67.45c.21-.06.46-.08.73-.08.42,0,.79.08,1.05.2l2.69.02-3.85-.63c-.48.09-1.12.06-1.51-.08Zm16.26,2.86l-4.8,1.33,12.72-.27-6.84-1.1c-.31.07-.72.08-1.07.05Zm-8.64,1.05c.33-.09.8-.12,1.2-.08l4.44-1.23-11.66.56,6.02.75Zm-13.84-6.65l6.27,1.5-.88-1.41-5.4-.1Zm-13.25.11c.22,0,.43.04.61.09l6.3-.67-7.77-1.84.86,2.41Zm9.09.15l-5.21.55,6.24.45-.39-.91c-.24,0-.45-.04-.64-.09Zm-1.8,1.27l3.18.54-.14-.32-3.04-.22Zm.24,5.95h.02c.17,0,.33.01.48.03l4.96-1.21-6,.29.54.88Zm32.35.76c.33-.09.79-.12,1.18-.08l3.66-1.06-11.9.26,7.06.87Zm18.67-.34l-.56-.39-3.1-.14,3.66.53Zm8.2.38l-2.57.31,6.79.76c.47-.13,1.16-.14,1.63,0l2.93-.37-7.13-.71c-.46.14-1.17.15-1.65.02Zm-8.44-1.23l2.74.12-3.31-.52.57.4Zm4.44,2.85l3.8-.09-4.85-.54,1.06.64Zm-3.13-1.95c.14-.01.28-.02.44-.02.3,0,.57.03.8.1l2.36-.28-4.18-.19.58.4Zm-4.26-1.47l-1.97.21-.62.11,4.47.2-.63-.44c-.42.05-.91.02-1.26-.08Zm-11.89,2.07l6.14-.07-1.27-.86-4.74.89-.14.04Zm7.14-.08l4.8-.05-6.22-.9,1.41.95Zm18.12,31.55c-.32.05-.68.05-1.01.01l-4.31,1.32,6.41-.6-1.09-.73Zm9.62-5.42c.43-.11,1.02-.12,1.48-.04l6.66-1.49-12.45.03,3.9,1.42.41.07Zm2.66-3.99l8.27,1.55c.39-.08.9-.1,1.31-.03l4.72-1.2-14.3-.32Zm9.21,2.96c-.29.01-.59,0-.85-.05l-7.31,1.63,9.85.46-1.69-2.04Zm20.49-2.67l-4.23-.59c-.43.06-.94.03-1.32-.07l-3.41.5,12.5.75-3.54-.59Zm-12.55-.87c.31,0,.61.03.85.1l3.03-.44-.56-.08-10.65-.56,6.53,1.08c.24-.06.51-.09.81-.09Zm15.59-2.1l-2.26.05c-.05.03-.1.05-.16.08l1.82.04c.17-.08.37-.14.6-.17Zm-2.02-1.16l-1.23.06c.17,0,.33.03.48.07l.75-.13Zm-5.65-1.5l2.49,1.18,4.94-.24-7.43-.94Zm3.39,1.61l.04.02s.09-.02.13-.03h-.17Zm-42.25,9.94l.92,1.74h.02c.36,0,.69.05.96.13l8.07-2.97-9.98,1.1Zm-7.25,5.88c-.22.03-.46.04-.7.02l-4.9,2.06,7.03-1-1.43-1.09Zm-21,7.49c-.22,0-.45,0-.66-.02l-4.54,1.36,5.79-.55-.6-.79Zm13.5-4.23c-.32.17-.81.29-1.36.29-.15,0-.29,0-.42-.02l-6.28,2,14.3-2.41-6.23.13Zm66.04-19.11s-.04,0-.05.01h.14s-.09-.01-.09-.01Zm-88.91,26.08c-.22,0-.43-.03-.62-.07l-6.63,1.4,7.75.1-.5-1.44Zm47.41-12.85l-7.54-.23,1.22.83,6.32-.59Zm-59.45,11.27l1.22,2.32h.02c.27,0,.52.02.73.07l7.5-1.58-9.47-.81Zm37.57-12.72c-.3.1-.68.16-1.09.15l-5.98,2.96,10.08-.24c.3-.18.79-.29,1.35-.29.15,0,.31,0,.45.03l5.47-1.67-10.28-.94Zm-56.94-40.96l-5.16,1.38,6.23,1.11-.88-2.48c-.06,0-.13,0-.19-.01Zm126.1,30.4l-3.03-.06-2.77.44,7.04.13-1.25-.51Zm22.36-3.6l.25-.13-1.02-.08.3.23c.15-.02.3-.03.47-.02Zm-20.96,1.52c-.49.12-1.19.11-1.65-.02l-1.29.16,3.41.07-.47-.2Zm18.45-2.33l-2.9-2.2-5.59,1.3-.39.15,1.09.17,7.78.58Zm-10.66-1.27l4.91-1.84-9.77-1.82c-.08.02-.17.03-.25.04l-3.78.84-2.39.69,10.39,2.14c.27-.05.6-.07.9-.05Zm5.7-.95l1.5-.35c-.19.02-.39.02-.58,0l-.91.34Zm8.36,4.32c-.44.14-1.12.17-1.61.07l-1.35.26,3.29-.21-.33-.11Zm-2.71-1.57l-2.65-.2,3.01.47-.36-.27Zm-23.89-13.64l-.82-.12c-.18,0-.35-.03-.5-.07l-2.97.49,5.09.27-.8-.57Zm-312.09-26.42c.35,0,.65.05.89.15h3.36l-7.3-1.02,2.87.88c.06,0,.12,0,.18,0Zm-7.53-1.14l-.21,1.64,5.29-.08-5.08-1.56Zm-.27,2.11l-.18,1.43,5.14-1.5-4.96.08Zm15.21,2.32l1.13-2.02-.28-.08-2.77-.12h-3.03s4.96,2.22,4.96,2.22Zm-31.13-1.09l-.25,1.23,4.44-1.85-4.2.62Zm.65-1.68c-.1.02-.21.04-.33.05l-.22,1.14,4.62-.67-4.07-.51Zm31.2,2.89l5.9-.49-1.45-.53-3.38-.94-1.09,1.95s.01,0,.02,0Zm-22.39-5.15c-.17.05-.37.08-.6.08l-.76,1.75,5.09-1.59-3.73-.25Zm5.79,2.26l.19-1.6-5.39,1.68,5.19-.08Zm-7.97-.25l.79-1.83-5.35,1.37,4.08.51c.14-.03.31-.05.48-.06Zm54.71-3.9h-1.25c-.19.08-.43.13-.71.14l-.73,1.62,4.62-1.56-1.94-.2Zm-3.54,2l.76-1.7-4.59,1.3,3.42.44c.12-.02.26-.04.4-.04Zm8.6-3.74l-2.27.58,2.36-.23-.09-.35Zm-6.31,4.16l5.84.86c.06-.01.14-.02.21-.03l.4-2.71-.68-.07-5.78,1.95Zm-9.65,1.41c-.32.05-.71.04-1-.03l-2.09.23,5.34.17-2.25-.37Zm-10.97,2.39c.55,0,.99.14,1.2.34l6.53-.17-4.39-.77c-.14.02-.29.03-.44.03-.42,0-.79-.08-1.03-.22l-5.22-.42,3.28,1.19h.08Zm14.02-3.73l-1.48-.19c-.19.04-.42.05-.66.04l-.31.32,1.13-.05,1.32-.11Zm-3.32.18l.22-.22-1.77.32.81-.04c.22-.05.48-.07.74-.06Zm-58.76,3.83l7.01-2.51s-.06-.03-.09-.05l-7.25,2.59s.01,0,.02.01l.32-.05Zm-21.03,6.15l-.37.6,4.4-.68-4.03.08Zm-.06,1.76l-.34-.02c-.06.02-.14.04-.22.05l.56-.03Zm1.12-2.4c-.21.06-.45.08-.71.08l-.05.08,2.2-.05-1.44-.12Zm7.53-2.35l-.22.02-6.51,1.45h.11s6.63-1.47,6.63-1.47Zm-20.54,5.02c.12,0,.23,0,.34.02l2-1.48-5.94.65,3.27.83c.11,0,.22-.01.33-.01Zm7.64-.88l-3.5-.62c-.24.04-.55.05-.81.02l-1.94,1.44,6.26-.84Zm13.02-2.12c.15-.04.32-.07.5-.08l.39-1.66-6,1.33,5.11.41Zm-9.92,1.56h.06l.36-.57-3.82.08,1.2.21,2.2.28Zm.8-1.18l-1.19.15,1.11-.02.08-.13Zm20.7-4.57c-.15.03-.32.06-.5.06l-.32.79,4.96-.39-4.13-.46Zm7.25,2.17l4.81-.23.37-.09h-.02s-4.11-.86-4.11-.86c-.12.01-.24.02-.37.02l-.68,1.15Zm67.9-5.3l-4.7.44,5.38,1.28c.09,0,.19-.01.29-.01.16,0,.3.01.44.03l4.96-.86-5.32-.85c-.33.05-.75.04-1.05-.03Zm-67.12,1.08l.21-1.08-4.96,1.77,4.75-.69Zm-.37,1.85l.27-1.35-5.75.84,5.11.57c.12-.03.24-.05.37-.06Zm-9.8,2.42l.35-.82-4.84.38,4.02.5c.14-.03.3-.05.48-.06Zm-7.44.15c-.12.02-.24.04-.37.05l-.4,1.68,5.4-1.16-4.63-.58Zm8.31-2.23l-4.39,1.08,4.08-.32.32-.77Zm4.62.86l-4.37.34-.34.81,4.7-1.15Zm105.88-5.92s-.02,0-.03,0l-1.96.46,2.03-.24-.04-.22Zm18.1,1.87l.22.02,3.18-.97-3.86.24.45.72Zm7.15.65l-.61-1.42h-.06l-3.46,1.05,4.13.37Zm-15.42-.54l-6.35,1.88,5.4.08c.31-.12.79-.17,1.19-.12l5.32-1.21-4.83-.67c-.22.04-.48.06-.72.04Zm11.5-1.52l-4.56-.69.59.93,3.97-.24Zm5.4,3.74c.09,0,.19.01.27.02l3.33-.7-4-.25.4.93Zm-16.67-3.43l1.95-.72-6.03.98,3.1-.09c.24-.11.61-.17.97-.17Zm-.77-.87c-.27.13-.71.19-1.12.17l-1.02.29,3.01-.49-.88.04Zm6.7-.13h-.04l-3.28,1.22,3.93-.24-.62-.98Zm.91,1.43l-3.26.2,1.44.2,2.2.2-.37-.6Zm13.09,1.75l-4.49-1.61.54,1.25,3.95.36Zm29.43,10.19l2.01.26c.18-.04.38-.06.6-.06.26,0,.49.03.69.08l2.62-.26-6.4-.13.48.1Zm.14-1.21h.14s-5.67-1.36-5.67-1.36l.36.12,5.17,1.24Zm-24.21-5.13c.37-.02.76.02,1.04.11l4.53-.15c-2.59-.89-5.19-1.77-7.78-2.66-.02,0-.03-.02-.05-.03-.01,0-.03,0-.04,0-.13,0-.25,0-.37-.02l-3.95.83,6.62,1.91Zm19.39,5.3l2.99-.1-5.58-1.33.15.9,2.43.54Zm8.97,3.14c.06,0,.12,0,.19,0,.13,0,.24,0,.36.02l2.99-.73-4.31-.08.78.79Zm-12.07-3.3v-.03l-.29-.07.29.09Zm-4.45-2.88l-3.77-1.3c-.33,0-.66-.03-.91-.12l-3.33.11,8,1.3Zm4.36,2.33l-.13-.76c-.27-.02-.5-.08-.68-.16l-3.73-.09,4.54,1.01Zm-59.61-12.81s-.06,0-.09,0v2.29s5.84-1.38,5.84-1.38l-5.76-.92Zm-.89,2.33s.04,0,.07,0v-2.27s-5.36,1.36-5.36,1.36l5.29.92Zm-2.66-3.02l-4.03-.81-.83-.14c-.13.01-.27.01-.41,0l-4.66,1.32,9.93-.37Zm-13.44.15c.16-.02.34-.02.5-.01l4.69-1.32-9.92.35,4.73.99Zm14.82,5.96h2.08s-.55-1.88-.55-1.88l-4.91,1.74,3.38.15Zm-17.04-5.41l-5.37-.55-.37,2.53,6.22-1.88-.48-.1Zm-2.51-2.91l-2.77-.09c-.07.02-.14.04-.22.05l.08.33,2.91-.29Zm-2.79,1.88l.78.08-.72-.15s-.03,0-.05,0v.06Zm1.42-.94l4-.72-.22.02-3.9.7h.12Zm9.96-.35l-.48-.06-3.18-.24-2.94.53,6.59-.23Zm21.94,7.02l-.05.28,2.38-.7-2.33.42Zm.19-1.07l-.1.57,4.55-.83-3.79.11c-.18.08-.4.13-.66.15Zm-148.46,9.51c-.09,0-.19.01-.28.02l-.45.82,3.87-.04-3.14-.8Zm-88.48,46.07l-4.73-.25,4.34.97.38-.72Zm241.99-52.97l-4.93-.08c-.13.05-.28.08-.44.1l.06.9,5.31-.92Zm-3.23-4.93h-1.68c-.11.02-.22.06-.35.08l.03.16,2-.24Zm-2.89,1.26c.1-.04.22-.07.34-.09l-.07-.39-3.49.42,3.23.06Zm-.19,8.7c.15-.07.35-.12.56-.16l-.02-.38-3.36.6,2.82-.07Zm1,1.67c.32-.14.83-.21,1.29-.16l2.97-.77-3.29.13c-.32.16-.89.23-1.38.17l-3.13.69,3.54-.06Zm-169.99,6.65l7.56-1.08-6.37-1.53c-.07,0-.15.01-.23.02l-.99,2.59s.01,0,.02,0Zm-139.59,11.18c.43,0,.79.09,1.04.22h.92s1.74-.17,1.74-.17l-5.33-.52h.05s1.58.47,1.58.47Zm15.04,1.42c-.17.03-.35.04-.53.04-.45,0-.84-.08-1.11-.22l-3.61-.03,6.7.53-1.45-.33Zm-11.42,1.34l.2-.04-.4-.04c.07.02.14.05.2.08Zm4.74-.92l3.62.02-6.81-.53,1.51.33c.57-.1,1.3-.02,1.69.18Zm-17.56,1.35l6.14-.22-4.72-.43-1.42.65Zm-5.66-2.85l-1.78-.02,2.35.2c-.22-.04-.41-.1-.57-.18Zm1.15-1.15c.53,0,.98.11,1.25.29l3.19.19-5.83-.8,1.04.33c.12-.01.23-.02.35-.02Zm-5.44-.49c-.41.04-.86,0-1.19-.1l-.52.06-2.54.67,6.38.05-2.13-.68Zm13.8.65c-.55.03-1.11-.07-1.42-.26l-4.88-.22,7.94,1.08-1.65-.6Zm-1.37,2.71l-.19.08,3.18.29-1.67-.35c-.4.08-.92.07-1.31-.02Zm36.3-1.67l-3.74.25,2.47.18,1.27-.43Zm-3.57.8c.32,0,.62.04.86.11l.29-.09-2.26-.17.67.17c.14-.02.29-.03.45-.03Zm2.18.2h1.4s-1.15-.08-1.15-.08l-.26.08Zm4.42-1c-.4.04-.84,0-1.15-.1l-1.85.62,6.08.44-3.08-.96Zm-12.02,2.46h-.29l.32.02s-.02-.01-.04-.02Zm18.65-1.68l1.37-1.38-5.93.14,4.03,1.25c.17-.02.36-.02.53,0Zm-23.37,2.01h2s-2.44-.15-2.44-.15c.17.04.32.09.45.15Zm5.27.95c.4,0,.75.06,1.02.17l1.38-.08.71-.11h-.73s-3.57,0-3.57,0l.51.09c.2-.04.43-.07.68-.07Zm-1.09,1.19l-3.7.09-2.38.17,3.31.63c.2-.04.43-.07.68-.07.39,0,.75.06,1.02.17l6.23-.39-3.28-.5c-.57.15-1.4.09-1.86-.11Zm-44.04-6.33l-1.45.15c.17.03.31.07.44.12l1.01-.27Zm288.18,85.32c.06,0,.14-.01.2-.02l.19-1.66-9.96-1.67,9.57,3.35ZM-56.71,285.48c.4-.16,1.04-.21,1.56-.13h.07s1.32-.81,1.32-.81l-5.49.79,2.54.15Zm301.62,74.24l10.39,1.74.17-1.43c-.45-.04-.84-.15-1.12-.3h-9.43Zm.37-5.87l10.35,4.43.2-2.44-10.55-1.99ZM-52.9,282.63h-.31c-.38.14-.99.2-1.5.14l-1.37.37-.89.36,2.49-.48,1.57-.39Zm308.68,80.99c.42.04.78.13,1.06.26l8.47-.26-9.35-1.56-.18,1.56ZM-46.11,280.4l-1.48.41.94-.15.54-.26Zm5.78,1l2.18-1.13-6.38,1.44,4.21-.31Zm1.48-2.01l-2.2-.12c-.37.14-.94.2-1.43.14l-.76.21-1.58.76,5.45-.87.53-.12Zm7.16,1.37l1.2-.16-4.23-.85c-.36.07-.82.08-1.19,0l-.17.04-2.9,1.51,7.29-.54Zm-17.22.91l.31-.07.44-.21-1.49.24c.06,0,.12,0,.17,0,.21,0,.4.02.58.05Zm-3.78,2.25l.8-.48-3.5.87,2.7-.39Zm5.41-1.03l-1.15-.05c-.4.16-1.05.22-1.58.14h-.06s-1.22.74-1.22.74l4.88-.7-.88-.13Zm-3.06-1.15l-.38.06h.19c.06-.01.13-.04.19-.06Zm145.26-14.95l.53-.42-3.65.2,3.13.22Zm24.05,1.65c-.5,0-.91-.11-1.16-.28l-5.17-.49,1.74.55,1.03.28c.5-.02.96.08,1.24.23l5.13.27-2.42-.59c-.12.01-.25.02-.39.02Zm-9.45-2.77l-3.07-.16,2.56.42.51-.26Zm1.61.23c-.27.02-.56,0-.8-.04l-.43.22,3.72.6-2.49-.78Zm8.99,1.52l5.68.5-4.26-1.54c-.14,0-.28,0-.41,0l-1.17.97c.06.03.11.06.15.08Zm-1.15-.27c.1,0,.2,0,.3.01l1.16-.97s-.04-.02-.05-.03l-5.64-.25,4,1.25c.08,0,.16,0,.24,0Zm-18.56-1.82c-.12,0-.23.01-.35.01-.44,0-.81-.08-1.07-.21l-2.33-.09,5.29.69-1.55-.4Zm5.21,1.83l3.97.69.19.02-1.58-.5c-.54.04-1.11-.07-1.4-.25l-2.56-.21.71.13c.24.01.48.05.66.11Zm-2.74,1.48l.53-.36-3.6.3,3.07.07Zm-5.83-2.19c-.24.03-.53.04-.79.01l-.48.37,4.23.29-2.97-.67Zm7.98,1.88c-.22.02-.47.01-.68-.01l-.5.34,2.39.05-1.21-.38Zm36.63-4.86c-.06,0-.12.01-.19.02l-.18,1.03,5.14-.09-4.77-.96Zm-12.13,4.62l.99-2.59c-.05,0-.1-.02-.15-.03l-6.58.56,5.73,2.07h0Zm11.68-3.1l-.27,1.51,5.88-1.61-5.61.09Zm9.82-3.27l-5.21.88,4.75-.05.45-.83Zm-1.23,2.26l.52-.96-5.58.05,4.65.94c.13-.02.27-.03.42-.03Zm219.97-.38h-.09s.06,0,.06,0c0,0,.02,0,.03,0Zm-229.01-.12l-5.65,1.15,5.47-.09.18-1.05Zm-.54,3.08l.27-1.55-6.42.11,6.04,1.45s.08,0,.12-.01Zm-52.42-1.86h-.32s.37.03.37.03c-.02,0-.04-.02-.06-.03Zm-23.5,6.71l.62-2.25-6.13.43,2.35.88,3.16.94Zm-1.59.83l-5.62-2.12c-.09,0-.17,0-.24,0l-3.62,4.83,9.48-2.72Zm2.91-5.63l-6.12,2.44,5.56-.39.56-2.05Zm-13.17,8.32l3.46-4.63-8.54,2.42,2.12,1.06,2.96,1.15Zm102.25-11.95l-3.6.03-.5.91,4.1-.94Zm-116.4,15.5l-3.72-1.46c-.12,0-.24,0-.36,0l-1.58,1.59,5.65-.13Zm33.57-9.81l-6.2.43-.65,2.34,6.85-2.78Zm-26.08,4.61c-.08,0-.15,0-.23,0l-8.42,2.77,13.35-.43-4.7-2.33Zm-5.47,4.73c.17,0,.32,0,.46.03l7.82-1.89-12.17.39,3.75,1.47h.14Zm45.73-12.25c.35,0,.65.05.89.13l5.09-.27-7.97-.8-1.27.08,2.95.87c.09,0,.2-.01.31-.01Zm-52.83,11.42l-6.67,1.58,5.23-.12,1.44-1.45Zm33.31-10.77s-.07,0-.1,0l-.61,2.19,6.48-.45-5.77-1.75Zm22.83-1.55s-.02,0-.03,0h.09s-.06,0-.06,0Zm-11.44-.3c-.12,0-.25.02-.38.01l-.15.21,1.05-.07-.52-.15Zm-3.43,3.03l1.68-2.25-7.24.48-.45.08,5.63,1.71c.12-.01.25-.02.38-.01Zm2.26-3.04l-2.82.46,2.61-.17.21-.28Zm7,1.72l-4-1.17-2.74.18-1.74,2.33,8.48-1.34Zm216.78-15.28l2.67-.75-2.75.33.08.43Zm38.66,85.32s-.07,0-.11.01l.53,1.9,9.1.42-9.52-2.33Zm-12.96,2.25l-12.98,4.24,24.35-1.4-9.56-2.7c-.61.08-1.34.03-1.82-.14Zm4.91-.25l8.43,2.37h.01l-.57-2.01-7.87-.36Zm-15.67,4.97l9.69,1.7c.44-.11,1.03-.14,1.53-.07l9.85-2.96-21.55,1.24.49.1Zm35.01-7.67l-7.96.31,9.74,2.38s.08-.01.12-.02l-.68-2.43c-.48-.01-.9-.1-1.21-.24Zm116.13-19.38c.35-.16.85-.25,1.39-.24l6.53-3.07-18.01,3.03,10.08.28Zm-113.49,18.19l6.08-.34-7.75-1.11.45,1.23c.48,0,.91.09,1.22.22Zm6.9,2.04l5.06,1.26-.42-.58-4.65-.67Zm-19.72,4.19c.29,0,.55.04.79.09l8.39-1.58-9.72-.45.55,1.93Zm-28.04,10.38c.15.06.29.12.4.19l12.2-4.82c-.14-.05-.28-.12-.38-.19l-12.22,4.82Zm-27.83,11.07c.05,0,.1,0,.14.01l10.02-3.21-10.07-.12-.09,3.32Zm10.08-3.67l-9.76-3.3s-.08,0-.12,0l-.09,3.17,9.97.12Zm2.38-8.87l-9.67,4.21,9.7-.94-.03-3.27Zm-10.49,4.76l10.46,3.53s.07,0,.11,0l-.04-4.54-10.53,1.02Zm11.65-4.89c-.14.03-.28.05-.43.06l.03,3.26,10.69-1.03-10.29-2.29Zm72.15-86.95h-.18.14s.03,0,.04,0Zm-84.74,82.91l11,2.47c.34-.07.76-.09,1.13-.06l10.76-4.18-22.89,1.77Zm26.89-1.5c-.37.09-.85.12-1.28.09l-11.65,4.53,10.77,2.39c.35-.07.76-.09,1.15-.07l12.5-4.93-11.48-2.02Zm101.51-16.22s.06,0,.09,0c.3,0,.58.03.82.08l6.15-1.18-7.97-.42.9,1.51Zm15.37-2.56l-7.06-1.5.86,1.02,6.2.49Zm5.19-.02c.22-.05.48-.07.74-.07.42,0,.81.06,1.11.17l5.01-.47-14.05-1.16,7.19,1.53Zm-10.49.62c.08,0,.17,0,.25,0,.47,0,.89.08,1.21.2l4.39-.27-6.34-.5.48.58Zm-6.01-1l5.2,1.02-.55-.67-4.65-.36Zm-41.48,8.27c-.23-.02-.45-.05-.64-.1l-10.17,1.65,9.41,2.87,1.77-.18-.37-4.24Zm59.5-11.33l9.04,2.43-.8-2.32-8.24-.11Zm10.36-2.59l9.51,1.88-1.98-2.6-7.53.72Zm-151.6,29.94l-23.14,1.1,12.09,3.36c.27-.04.58-.05.87-.04l10.18-4.42Zm151.01-24.95c.16,0,.3.01.44.03l7.82-2.2-9.04-.12.79,2.29Zm10.88-3.15c.12,0,.24,0,.36,0l8.25-3.66-10.62,1.01,2.01,2.64Zm-70.65,8.19l-8.62-1.48c-.14.03-.3.06-.48.08l.21,3.68c.1,0,.2.02.3.03l8.59-2.31Zm-6.49,3.27l9.73,2.95h.03l-.49-3.08-9.27.14Zm-3.23,5.39l.58.17s.06,0,.09,0l-.02-.24-.65.07Zm13.14-8.04c-.1.02-.2.04-.31.05l.32,1.98,9.36-.14-9.37-1.89Zm2.83-.57l9.46,1.9s.06-.01.1-.02l-.91-2.06-8.65.18Zm10.28,1.83c.19,0,.37,0,.54.03l7.77-2.24-9.2.19.89,2.02Zm1.98-5.27l-.09.02,8.74,1.97-.94-1.59-7.71-.4Zm-14.52,9.58c.07,0,.14,0,.2.01l9.59-3.24-10.28.15.49,3.08Zm-34.96,3.64h.07s-.14.03-.14.03c.01.04.01.08.02.11l9.32-.36-.46-.12-8.81.34Zm-225.63-7.36l7.69,1.48c.21-.05.44-.08.69-.08l.65-2.7c-.14-.02-.26-.04-.38-.07l-8.65,1.38Zm9.95-2.88l4.16-4.17-12.92,2.33,7.72,1.88c.32-.05.7-.07,1.04-.04Zm-22.55-1.04l-.86,1.4,7.42-1.77-6.56.37Zm22.87,2.59c-.16.03-.33.05-.51.05l-.65,2.7c.19.02.37.06.53.11l8.32-1-7.69-1.87Zm-12.53-.34l-.3.86c.11.02.21.04.3.06l6.37-1.01-6.37.09Zm22.97,5.27l-.46,1.77c.17.02.32.06.46.09l7.99-1.12-7.99-.75Zm-.68-2.21l-7.8.94,7.89.74.41-1.57c-.19-.03-.35-.06-.5-.11Zm11.05,3.74l-8.41,1.18,9.09,2.26c.09-.02.18-.03.27-.04l-.24-3.29c-.27-.02-.5-.06-.72-.12Zm-11.8.23c.08,0,.17,0,.25-.01l.47-1.81-7.97-.75,7.25,2.57Zm-83.99-27.04c-.61.12-1.43.06-1.89-.15l-1.3.05.41.04,3.71.25-.92-.18Zm43.76,18.25l5.73,1c.29-.07.63-.1.99-.09l.82-1.34-7.54.43Zm-39.35-16.42c-.53.08-1.18.02-1.61-.13l-1.5-.12h-.4s6.46,1.95,6.46,1.95c.16-.02.32-.03.49-.03.42,0,.81.06,1.1.17l8.69-.79-13.25-1.05Zm5.81,2.93l7.4,3.86h.04c.3,0,.59.03.84.09l11.24-2.06-19.52-1.89Zm78.38,17.94l7.76,2.61c.21-.02.43-.02.65-.01l1.76-2.4-10.16-.2Zm-68.6-12.91l8.59,4.03h.14l1.66-3.45-10.4-.58Zm23.43,1.83c-.11,0-.22.02-.32.02l-2.1,5.79,10.73-3-8.31-2.81Zm-12.58,3.04l9.02,2.79c.13-.01.27-.02.4-.03l2.1-5.81-11.52,3.05Zm.29-4.24l-1.64,3.41,10.95-2.89-9.31-.52Zm177.67,37.88l10.39.13.09-3.16c-.07,0-.14-.01-.2-.02l-10.28,3.06Zm-17.38-4.53c-.44-.04-.82-.15-1.09-.29l-9.63.03,10.58,1.99.14-1.73Zm-14.66.06h-.04l-.75,4.6c.44.05.82.16,1.09.3h11.16s-11.47-4.9-11.47-4.9Zm2.9-1.43l6.55-.67-8.36-2.78c-.09,0-.18.01-.27.02l-.57,3.15c.42.05.78.15,1.04.29h1.61Zm-4.65,1.15l-11.47.22,11.6,4.65s.07,0,.12,0l.75-4.61c-.39-.04-.73-.13-.99-.26Zm16.72,6.63c-.05,0-.1,0-.15,0l-.18,1.53,8.49,1.42-8.15-2.96Zm27.22,2.06s.09,0,.14-.01l.09-3.33-10.45-.13,10.22,3.47Zm-67.2-12.31l8.12,2.5c.18-.02.37-.04.58-.04.61,0,1.15.11,1.52.3l9.28-.17-19.49-2.58Zm52.59,13.41c.14-.01.28-.02.42-.02.52,0,.99.08,1.34.22l9.49-.72-20.12-2.7,8.87,3.22Zm-92.83-20.08l8,1.51c.37-.08.84-.11,1.27-.08l2.94-3.16-12.2,1.73Zm-13.87-6.38c-.14.03-.28.05-.43.07l.24,3.29c.26.01.49.05.7.11l9.71-1.5-10.21-1.97Zm14.54,2.73c-.35.09-.8.14-1.23.12l-1.98,2.72s.08.02.12.03l11.73-1.66-8.63-1.21Zm13.58,1.94c-.37.09-.86.13-1.3.09l-2.91,3.12,11.81-1.95-7.6-1.27Zm36.58,6.99c-.58.05-1.23-.02-1.67-.18l-10.44.9,22.17,2.94-10.06-3.66Zm-52.17-8.92l-9.72,1.5,6.71,1.31c.32-.07.71-.1,1.09-.08l1.98-2.72s-.04,0-.05-.01Zm37.82,8.06l-.45.58c.11.02.2.05.3.08l6.43-.55-6.27-.11Zm-23.14-2.09l5.98.83c.45-.12,1.06-.17,1.59-.11l1.25-1.09-8.82.37Zm9.75-.41l-1.34,1.18,9.83-1.54-8.49.36Zm98.45,12.66l10.75-5.51-10.79,1.05.04,4.46Zm161.58-85.62s-.07,0-.1,0h.12s-.01,0-.01,0Zm2,1c.09,0,.19-.01.29-.01.31,0,.6.04.84.11l3.01-.32-4.62-.22.49.44Zm-.16-.89l-.98-.13.09.08.89.04Zm-3.08-.24l-.91.05,1.35.07c-.16-.03-.31-.07-.44-.11Zm2.31,1.11l-.51-.46-3.32-.16,3.83.62Zm-3.62-2.53l-3.06-.42,1.14.44,1.92-.02Zm-9.28-1.56l-5.02-1.21,1.07,1.2h3.95Zm-2.79,1.28c.06,0,.12,0,.17,0,.12,0,.22,0,.32.02l2.82-.83h-4.04s.73.81.73.81Zm-2-1.3l-1.21-1.35c-.14,0-.28,0-.41,0l-4.26,1.34h5.88Zm10.75,1.61l-1.95-.75-.17-.02c-.28.07-.66.09-.99.06l-2.33.68,2.53.07,2.9-.03Zm38.06,3.6l-.92-.88c-.25.02-.53,0-.76-.03l-4.63,1.06,6.32-.15Zm-10.21-.19c.06,0,.13,0,.19,0,.19,0,.36.01.53.04l4.84-1.1-6.48.07.91,1Zm16.71.03l-6.6-.77.95.91,5.65-.14Zm-4.55,1.18c.08,0,.17,0,.26,0,.23,0,.45.02.63.06l4.16-.77-5.68.14.62.58Zm-14.59-2.93c-.3.02-.63,0-.89-.07l-2.54.38,3.67-.04-.25-.26Zm.68.73l-5.09.06,6.01.94-.92-1Zm3.7-.51l-3.62-.32.33.36,3.29-.04Zm-12.4-.21l2.88-.42-5.38-.25c-.5.19-1.38.19-1.89,0l-1.84.08,4.77.61c.42-.11,1.04-.11,1.47-.01Zm-77.56-8.69c-.24.13-.61.21-1.03.21l-5.26,2.44,2.65-.1,3.36-.3c.26-.17.73-.28,1.22-.27l4.55-1.91-3.86-.16-1.64.08Zm41.01,4.95h.02c.09,0,.17,0,.26,0l4.37-1.38-5.56-.1.91,1.47Zm-42.07-6.01c.06,0,.13,0,.19,0l3.21-1.07-3.59.47c-.09.07-.19.12-.32.17l.37.43c.05,0,.09,0,.14,0Zm110.24,12.22l-5.7,1.06,8.13,1.14c.41-.1.99-.12,1.42-.02l5.5-.99-8.02-1.2c-.39.09-.92.1-1.33.02Zm-125.16-8.15l5.14-.19-1.58-1.57c-.11,0-.22,0-.34,0l-4.88,1.73,1.66.02Zm3.69-2.99l4.01-1.03-4.08.51.05.52h.02Zm-9.01,2.81l-1.23-1.66c-.14,0-.28,0-.41-.02l-4.05.99,5.69.7Zm.83-.05h.14l4.83-1.71-6.18-.06s-.09.03-.13.05l1.27,1.72h.06Zm7.44-2.75l-.04-.44-4.26.53,3.8.04c.14-.06.32-.1.51-.13Zm-8.51-1.11h-.14s.02,0,.03,0h.11Zm99.48,49.31l5.13-.11c.05-.03.1-.06.17-.08l-.62-.47-4.67.67Zm-38.92-45.23l-1.31-2.1s-.08,0-.12,0l-5.06,1.98,6.48.12Zm-9.27-.61l-2.11-3.97-.87-.18-5.73,2.1,8.71,2.06Zm.86.05l5.39-2.11-2.33-.66-5.17-1.08,2.04,3.84h.07Zm14.68.68l-6.68-2.03,1.2,1.93,5.48.1Zm-36.79-4.53l-.91-1.22c-.09,0-.17,0-.25,0l-4.79,1.59,5.67-.26c.08-.04.17-.08.28-.11Zm.79-.1h.12l4.55-1.73-4.39.31-1.01.1c-.07.03-.15.07-.24.09l.91,1.22h.07Zm14.13-.94l-2.82-.59-2.56-.34c-.22.05-.48.07-.75.06l-5.07,1.93,11.2-1.07Zm-4.88,2.31c.24-.06.53-.08.81-.07l5.08-1.86-11.94,1.14,6.04.79Zm-20.46-.76l-.37-.43c-.16,0-.32,0-.47-.01l-3.79.97,4.35-.4c.08-.05.17-.09.28-.13Zm166.95,31.99c.17-.08.4-.14.64-.18l-1.93-.11,1.29.29Zm-30.94,1.52l-3.87.46,10.97,1.83c.41-.1.97-.12,1.4-.04l4.93-1.16-11.55-1.1c-.52.17-1.35.18-1.89.02Zm17.12-.55c-.1,0-.2-.03-.3-.05l-4.23-.51h-.3s1.24.5,1.24.5l3.58.06Zm-1.42.82c.25-.07.54-.1.86-.1s.61.04.86.1l2.16-.3-4.83-.09.95.39Zm-5.42-.47l3.8.36-.76-.31-3.04-.06Zm-21.85,2.21l10.4,2.88,4.8-1.17,2-.64-.36-.06-16.85-1.01Zm-20.16,8c.31-.14.73-.22,1.22-.22.3,0,.57.03.81.08l3.82-.66-11.06.64,5.22.16Zm-16.43,2.44l6.21.21-1.04-.69-5.17.49Zm12.97-5.78l-8.14,2.99,1.02.03,19.69-1.14-10.82-1.84c-.53.12-1.27.11-1.75-.04Zm-6.01,5.81c.17-.03.37-.04.57-.04s.4.01.58.04l4.73-1.24-6.77.64.89.6Zm13.12-5.9l7.82,1.33-.83-1-6.99-.33Zm3.79-29.27c.3,0,.57.04.8.1l1.48-.17-6.4-.22,3.34.39c.23-.06.5-.1.79-.1Zm8.76,24.98l-1.99.41-3.71.94,11.04,2.86c.17-.02.36-.04.56-.04.29,0,.56.03.8.09l2.91-.49,2.57-.63-11.41-3.16c-.24.04-.52.04-.78.02Zm1.7-.34s-.04.03-.06.04l11.54,3.2.21-.05-11.59-3.21-.09.02Zm7.17-22.28l-.55.05.98.04c-.16-.02-.3-.05-.42-.09Zm5.81,1.41c.42-.1,1-.1,1.43,0l2.5-.41-.51-.08-8.84-.36,5.42.85Zm-12.3-1.97c.18-.03.37-.05.58-.05.32,0,.63.05.87.12l1.26-.11-3.15-.19.43.24Zm-449.28,32.61l-.55-.03-.34.63c.19,0,.37.02.55.06l.35-.66Zm445.74-33.94c-.42.08-.98.06-1.36-.05l-2.22.26,4.46.27-.88-.49Zm4.21.69l-2.67-.46.6.33,2.07.13Zm-2.36.33l-1.26-.08,1.54.23-.28-.16Zm9.87.89c-.19.06-.41.09-.66.1l2.44.1-1.79-.2Zm29.44,6.82c.17,0,.35.01.5.04l3.89-.98-9.03-2.01,4.21,2.98c.14-.02.28-.03.44-.03Zm-19.14-4.3l4.68.88-.97-.68-3.72-.2Zm17.2,3.96l-4.04-2.87c-.34.04-.73.03-1.06-.03l-3.52.68,8.61,2.22Zm-9.89-4.05l-.89-.17-2.98-.44.61.44,3.26.17Zm-1.45,1.11c.14-.01.29-.02.44-.02.22,0,.44.02.63.06l2.8-.54-4.96-.26,1.09.77Zm-279.24,73.82l10.93,4.33c.11,0,.22-.01.33-.01.2,0,.4.01.58.04l10.62-3.16-22.47-1.2Zm177.37-76.17l8.02,1.25-1.31-1.64-6.71.39Zm-55.59-2.37l.09.88c.19.02.36.05.51.09l5.14-.56-5.34-.49c-.12.03-.25.06-.39.08Zm9.61-.18c.35-.11.86-.14,1.27-.09l2.89-.74-8.97.38,4.8.45Zm-13.33,2.59l3.84.11-.23-.31c-.31,0-.64-.03-.9-.1l-2.71.31Zm2.22-3.77c-.41.16-1.1.19-1.59.08l-.56.03,2.28.1c.4-.16,1.06-.2,1.54-.1l1.25-.24-1.19.02-1.74.1Zm2.56,5.15l-.58-.78-4.44-.12,5.02.91Zm-18.27,2.17l-8.49,2.32,8.61,1.77c.27-.05.62-.07.92-.04l7.87-2.63-.74-.16-7.12-1.3c-.32.07-.72.08-1.07.03Zm3.64-.56l6.67,1.22-.83-1.49-5.84.27Zm7.4,1.16c.1,0,.19,0,.28,0l5.12-1.77-6.22.29.81,1.47Zm49.71-2.42c.32-.08.73-.1,1.09-.07l4.68-1.41-13.09.38,7.31,1.1Zm-71.34,1.27l.09.93,6.61-.77-6.14-.3c-.16.06-.35.11-.56.14Zm79.64-2.42l-4.75,1.44,6.24-.15-1-1.28c-.17,0-.33,0-.48-.02Zm-18.2,1.63l6.15-.07-6.84-1.02.69,1.09Zm20.48-.35l6.37-.15-7.39-1.16,1.02,1.31Zm-25.68-4.43l-4.44,1.31,12.09-.7-6.5-.7c-.32.09-.77.13-1.15.08Zm-3.65,1.74l6.59.77c.33-.09.77-.12,1.15-.08l4.66-1.41-12.4.72Zm-.35-7.38l-6.51,1.74,7.71.77c.08-.02.16-.04.24-.06l-.69-2.31c-.29-.01-.55-.07-.76-.15Zm-8.65,1.37c.05,0,.1,0,.15,0,.37,0,.69.06.94.15l5.3-1.41-6.81.77.42.5Zm-.4,1.26l-3.56.7,4.41-.15-.3-.5c-.2,0-.38-.02-.55-.05Zm-65.15-4.08l5.78.33-5.89-1.7.11,1.37Zm-4.5-3.58l3.6.92c.12-.01.25-.02.37-.02.34,0,.64.05.89.13l3.19-.17-8.05-.87Zm9.19,2.51l3.83,1.11-.22-.61-3.62-.5Zm-5.42,1.03l-.11-1.36c-.09,0-.19-.02-.28-.04l-6.13,1.03,6.52.38Zm9.14,1.37l-5.87.67,7.09,1.78-.66-2.36c-.2-.01-.39-.04-.55-.08Zm-36.66.33c.05,0,.09,0,.14,0,.22,0,.44.02.63.06l2.57-.42-3.76-.14.42.5Zm6.38.12l-3.17.52,4.67.34-.73-.81c-.27,0-.55,0-.78-.06Zm-7.21-1.11l3.77.14-4.49-1,.72.86Zm18.75-.4l-.31,1,6.35.19-5.73-1.22c-.1.01-.2.02-.31.03Zm30.21,4.11l.48,1.11c.3,0,.56.05.78.12l3.58-.26-4.83-.97Zm-1.28,4.11c.21-.08.48-.14.78-.16l.37-1.55-6.67,1.52,5.52.19Zm-16.46-1.98l6.7,1.5c.08-.01.17-.02.26-.03l.6-2.94s-.04,0-.06,0l-7.5,1.47Zm18.82,4l.53.82h.05c.09,0,.19,0,.29.01l4.62-1.54-5.49.7Zm-.04-3.77c-.14.03-.29.05-.45.06l-.37,1.57c.09.01.17.03.25.05l6.27-.77-5.7-.9Zm-1.68,2.9l-3.57,1.06,4.27-.55-.32-.5c-.13,0-.26,0-.38-.02Zm-8.82-4.57l-.6,2.93,7.91-1.8-6.93-1.18c-.12.02-.25.04-.38.05Zm-5.69,4.43l-.37.03,5.88,1.32-.84-1.43-4.67.09Zm4.99-8.03l.65,2.3c.25.01.48.05.67.11l5.45-.41-6.77-2Zm-19.73-2.47s.07.01.11.02l4.7-.78-4.65.05-.15.71Zm157.39,32.68c.23,0,.45.02.65.06l2.92-.66-1.55-.56-2.68.13.61,1.03s.04,0,.05,0Zm-.78.08l-.63-1.08-6.79.33,7.23.79c.06-.02.12-.04.19-.05Zm-14.93-.37l.41-.09-9.5-.78-1.51.31,3.36,3.4c.17,0,.36-.01.53,0l7.11-2.85-.4.02Zm3.84.23c-.32.1-.76.15-1.19.13l-6.55,2.63,16.28-1.83-8.54-.93Zm10.6-2.31c-.05.02-.11.03-.16.04l.5.84,1.82-.09-2.15-.79Zm13.53-.2l3.26-.77-11.27.38,6.36.5c.43-.16,1.12-.2,1.65-.11Zm-6.86,2.64l-1.89.43h3.04s-1.15-.43-1.15-.43Zm12.45-6.05c-.35.08-.81.11-1.2.07l-2.82.84c.23.05.44.12.59.21l6.33.12-2.9-1.24Zm-14.53,4.75l1.16.42,2.74-.62-3.9.19Zm-36.87-18.3l-5.06,1.32,6.54-.25-.87-1.03c-.21,0-.42,0-.61-.03Zm69.47,11.78l-8.77-1.62,1.79,1.96,6.97-.34Zm-77.69,19.94l1.31,2.08h.09c.29,0,.56.03.79.08l8.13-1.48-10.33-.69Zm19.06-8.17l-7.61,3.83,9.05-1.02-1.4-2.81h-.05Zm-20.18,10.89l-15.12-2.15,8.61,2.91c.13,0,.26-.02.39-.02.32,0,.61.04.86.1l5.27-.85Zm2.89.86c-.4.04-.86,0-1.2-.08l-3.93.64,5.96.21-.83-.77Zm10.32-7.52l9.52,1.25c.06-.02.13-.04.2-.05l-1.08-2.17-8.64.98Zm7.66,2.12l-17.11.06,9.98,1.75c.37-.09.86-.11,1.27-.06l5.86-1.75Zm3.44.45c-.34.07-.76.08-1.13.03l-3.68,1.1,5.52-.73-.71-.41Zm-9.75,2.78c-.32,0-.57-.03-.81-.08l-4.7.85,5.73-.37-.22-.41Zm9.74-32.24l7.36.99c.07-.02.15-.04.23-.05l-.42-1.46-7.17.52Zm7.3-2.51l.44,1.48,7.89-.57-8.06-.97c-.09.02-.17.04-.27.06Zm-.91.03l-6.54,2.02,7.17-.51-.45-1.49c-.06,0-.12,0-.19-.01Zm1.92,3.38c.3.01.58.07.81.15l7.93-2.28-9.18.66.44,1.47Zm-19.44,1.1c.06,0,.11,0,.17,0,.09,0,.18,0,.27,0l4.63-1.66-6.25.25,1.18,1.41Zm39.36-3.51l-4.28.06,5.57.8-1.29-.86Zm-27.27,5.91c.08,0,.17,0,.25,0l5.11-2.57-8.84-1.19,3.47,3.76Zm-13.66-4.26l5.19-.2-6.09-.86.89,1.06Zm8.94.55l-5.26,1.88,9.1,1.8-3.39-3.67c-.15,0-.32,0-.46,0Zm22.14-1.79l-8.52,2.44,9.63,1.41c.34-.09.79-.12,1.17-.07l8.1-2.47-8.67-1.25c-.51.14-1.27.11-1.72-.06Zm26.5,10.37c-.15,0-.31,0-.46,0l-6.28,2.41,8.57-.41-1.83-2Zm8.78-4.16c.17,0,.32,0,.47.03l4.85-1.33-6.58-.39,1.18,1.68h.09Zm.39,1.38c-.24.02-.53.03-.78,0l-6.35,1.95,15.57.68-8.44-2.63Zm-8.99,1.41l6-1.84-15.23.06,8.23,1.81c.3-.05.68-.07,1-.03Zm1.02-4.84l6.61,1.92-1.12-1.6-5.49-.32Zm-10.21,8.28l6.94-2.66-9.72-2.15c-.19.04-.4.06-.63.05l-6.63,3.39,9.04,1.44c.29-.07.66-.1,1.01-.08Zm-5.17-10.61l-7.53,2.29,8.2-.26-.48-2.01c-.06,0-.12,0-.18-.02Zm-7.34,2.76l8.5,1.77s.07-.01.1-.02l-.48-2.01-8.12.26Zm-401.73-9.09l3.46.41c.3-.08.68-.11,1.04-.08l2.02-1.95-4.97,1.15-1.54.48Zm73.19,3.52l-.95,2.12,6.71-1.29-5.22-.89c-.17.03-.35.05-.53.06Zm11.42,4.61h-.45s.36.03.36.03c.03,0,.06-.02.09-.03Zm-5.1-2.26l.88-.78-4.49.86,3.61-.08Zm5.05,4.47l.36-.99c-.06,0-.11-.02-.17-.03l-5.37.83,5.18.18Zm-12.73-10.4l-5.32-.25,2.28.39c.18-.04.38-.06.6-.06.35,0,.66.05.9.14l.6-.03.94-.19Zm-34.03,4.99l-5.06,1.42,12.32-.08-6.3-1.37c-.29.05-.65.06-.96.02Zm11.67,1.06c.06.03.12.06.17.09l9.75-1.31-8.31-.1-1.6,1.32Zm-31.58-4.79l4.55-.77.25-.69-.18-.04-4.62,1.5Zm34.21,1.61l-10.36,1.27,8.98.11,1.56-1.28c-.06-.03-.12-.06-.18-.09Zm39.6-1.51c.23-.08.53-.14.86-.15l.09-.22-3.66.21,2.71.16Zm1.58-.09s0,0,0,0l2.54-.46-2.41.14-.14.32Zm-.64,1.29l-.76,1.31,7.6-.21-6.2-1.16c-.19.04-.39.05-.63.06Zm.98-2.1l2.68-.15-1.82-.13c-.22.07-.49.12-.79.13l-.06.16Zm-3.4.19l2.63-.15.11-.25s-.03,0-.05-.01l-2.69.42Zm-8.84,4.4l-.95.85,6.2-.13-4.3-.77c-.28.06-.63.08-.95.05Zm-66.66-2.68l6.08,1.52c.12-.01.24-.02.36-.03l1.07-2.86-7.04,1.19-.47.17Zm74.92,2.94c.2-.05.44-.06.68-.07l.5-.87-5.58.15,4.39.79Zm1.46-1.42l.76-1.31-6.43,1.47,5.67-.16Zm-111.65,5.67l.35-.23-2.1.22h1.75Zm116.55-12.78c.43-.18,1.21-.21,1.72-.08l7.35-2.82-14.09,2.8,5.02.09Zm-118.53,13.32c.13-.04.27-.06.43-.08h-1.04s.61.08.61.08Zm2.16,0l.91-.07h-.8s-.12.07-.12.07Zm-3.06.95l-.44-.05s.04.02.06.03h.38Zm4.22-1.72l-.34.23h3.49s-1.97-.27-1.97-.27c-.34.08-.81.1-1.19.05Zm29.31-5.27l-4.24,1.77,13.23-1.32-4.03-1.01-2.2-.45-2.75,1.01Zm-36.13,4.42l-.21.12,2.51-.05-.99-.12c-.37.1-.89.12-1.31.05Zm-1.15.05l-1.02.12.84-.02.17-.1Zm-2.92-1.76l3.85.5c.35-.09.86-.11,1.25-.05l6.67-1.56-11.77,1.11Zm3.07,2.33h-.04s.04,0,.04,0Zm34.69-10.94l-1.9,1.83,6.59-2.09-2.18-.33-2.51.58Zm-19.37,11.07c.34-.08.79-.1,1.18-.05l4.84-3.34-11.14,2.64,5.11.75Zm359.65,32.26c-.38,0-.73-.05-1.02-.14l-7,.81,8.77.75-.75-1.42Zm-341.49-40.6l5.52.88c.18-.04.37-.07.59-.08l1.33-3.17-7.44,2.36Zm-8.76,0l-.58,1.49,5.01-1.13-3.78-.45c-.19.05-.41.08-.66.09Zm-5.99,3.74l2.95.13c.23-.09.53-.15.87-.16l.58-1.49-5.99,1.35,1.6.16Zm3.49,1.29l-4.83,3.32,10.9-2.69-4.9-.69c-.34.08-.79.1-1.17.06Zm1.22-1.7l4.41-2.17-3.91.88-.5,1.29Zm206.68-5.82s.02,0,.04,0l5.79-1.7-5.91.16.08,1.54Zm-18.97-4.86c.07,0,.14,0,.19.02l4.3-1.1-4.66.36.17.72Zm-10.06-2.41l-.04.23,3.13-.02-2.61-.28c-.14.04-.3.06-.48.08Zm-.3,1.68s.06,0,.09.01l5.41-1.03-5.32.04-.17.98Zm.21-3.75l-1.55.21,4.08-.17-1.08-.08c-.4.13-1,.15-1.45.04Zm-.99.91c.39-.12.99-.15,1.44-.06l2.15-.34-5.81.25,2.21.16Zm2.65-6.89l-2.87-.24,2.57.53c.07,0,.14-.02.22-.02l.07-.26Zm-.21,2.13l-.02-.65c-.09,0-.18-.02-.27-.04l-4.18.51,4.47.18Zm-.83,2.15l.22-.22-2.66.28,1.4.07c.27-.09.66-.14,1.03-.12Zm.84-1.67l-2.71-.11,2.56.41c.05,0,.11-.02.16-.02v-.27Zm45.73,13.81h.04l.53-1.39-6.46-.96,5.89,2.35Zm-19.02-5.68l-3.34.51h.71s2.24-.03,2.24-.03c.42-.12,1.04-.14,1.49-.03l2.42-.04,1.07-.06-3.2-.37c-.4.11-.98.12-1.4.02Zm.81,1.68l.04.91,5.09-.14-4.89-.81c-.08.02-.16.03-.24.04Zm18.95,2.16l.21-.56c-.18-.03-.35-.08-.48-.15l-4.76-.04,5.03.75Zm-55.13-11.95l-.35,1.31c.06,0,.11.02.17.04l5.56-.59-5.06-.8c-.11.02-.22.03-.32.04Zm26.59,6.82l.09.95,5.5-.28-5.3-.72c-.09.02-.18.04-.28.05Zm-.63.99l-.09-.98s-.06,0-.09,0l-4.88,1.25,5.05-.26Zm-1.92-2.23h.81c-.09-.02-.17-.04-.24-.06l-.58.06Zm2.05-1.26c-.42,0-.79-.08-1.04-.2l-1.53-.05-.4.02,1.69.29c.17-.03.37-.05.57-.05.26,0,.5.03.7.08l1.69-.21-.76-.02c-.24.09-.55.14-.9.14Zm-67.98,1.55l-4.75,1.06,5.35.68c.06-.01.12-.03.17-.04l-.5-1.68c-.09,0-.19-.01-.28-.03Zm.35,6.07l-.93,1.21,6.83.61-5.54-1.83c-.12,0-.24,0-.36,0Zm1.15-4.41c.2.01.38.04.55.08l4.54-.58-5.58-1.16.49,1.66Zm3.62-2.45l5.8.08.94-1.03-6.74.95Zm3.91,1.44c.21-.03.45-.04.68-.03l.79-.86-6.18-.08,4.72.98Zm-7.65,4.24l2.18-.12-2.53-.1-.04.13c.14.02.27.06.38.09Zm-8.08-7l-2.68.15-.35.08,1.51.1c.32-.11.81-.15,1.21-.1l.31-.23Zm-1.18,3.93l-6.44,1.92,3.56-.17c.26-.15.67-.25,1.15-.25.24,0,.48.02.67.07l6.38-.97-1.69-.33-2.62-.33c-.29.07-.67.1-1.01.07Zm-10-.81c.32-.12.79-.17,1.22-.13l4.13-1.19-8.74,1.19,3.39.13Zm48.44.49s.01,0,.01,0l5.53-1.23-5.34-.13-.2,1.35Zm.37-2.5l-.1.68,4.24.1-3.92-.81c-.06,0-.14.02-.22.03Zm-20.41,1.66l5.94-.8-5.14-.07-.8.87Zm19.43-3.81l.67.04c.12-.04.26-.08.41-.09l-1.08.06Zm.16,2.82l.1-.68c-.07,0-.14-.02-.2-.03l-4.36.61,4.46.11Zm1.72-3.39l.27-.38-2.98.52,2.72-.14Zm-2.07,5.22s.05,0,.08,0l.2-1.35-5.7-.14,5.42,1.5Zm-10.03-.03l.77-1.19-6.89.93,6.12.25Zm1.52-1.13l-.76,1.16,6.32.26-5.2-1.44c-.12,0-.24.02-.37.01Zm-37.14,56.06l-8.64-2.05c-.1.02-.21.03-.31.04v2.37s8.95-.37,8.95-.37Zm-58.06-41.51l6.46,1.03c.32-.08.75-.1,1.12-.06l3.07-2.32s-.09-.04-.12-.07l-10.52,1.41Zm-2.37.77l-.27.71,5.48-.04-4.62-.74c-.18.04-.38.07-.6.08Zm13.72-1.93l-2.82,2.14,9.08-1.18-5.24-1c-.3.06-.68.07-1.02.03Zm-20.38-.67l5.98,1.29c.27-.05.62-.06.91-.03l1.4-1.16-8.3-.1Zm47.62,1.89l-.11.04h.28c-.06,0-.12-.02-.17-.04Zm-65.26-1.76l4.33,1.07.96.2c.13-.02.26-.02.4-.02.14,0,.29,0,.42.02l4.99-1.41-11.09.14Zm-3.24.47l-7.38,2.47,5.58.83c.37-.09.86-.11,1.25-.05l7.34-1.8-6.01-1.48c-.24.03-.53.04-.79.02Zm8.71,2.13l-1.79,1.89,7.95-1.04-5.26-.91c-.27.06-.6.08-.9.06Zm8.69.29c.4-.09.94-.09,1.35,0l4.48-.82-10.21.07,4.38.75Zm9.13.31l.29-.77s-.04,0-.05,0l-4.46.81,4.22-.03Zm37.02,4.67l7.28-1.48-6.7-.25-.63,1.72s.03,0,.04,0Zm.43-4.9l2.14-.04c-.21-.02-.4-.06-.57-.11l-1.57.16Zm259.95,32.85l-9.16-1.27.54,2.02c.32,0,.61.06.86.14l7.76-.89Zm-259.27-31.1l-.35.96,5.88.21-5.09-1.22c-.14.02-.29.04-.45.04Zm-2.07,3.1c.06,0,.13,0,.19-.01l.63-1.69-6.26-.23,5.44,1.93Zm-.53,1.3l-8.63,1.17,15.8,1.35-6.12-2.43c-.37.02-.76-.01-1.06-.1Zm-8.48-3l-1.84.15-4.01.65,12.04,1.08-4.9-1.74c-.45.04-.94-.01-1.29-.14Zm-114.51,8.1l.26-.23-3.62-.38,2.48.63c.27-.04.59-.05.88-.02Zm112.38-15.45l-7,1.16,5.5,1.04c.17-.03.36-.05.57-.06l.95-2.14s-.01,0-.02,0Zm-110.41,13.06c.12,0,.24-.01.36-.01.21,0,.4.01.58.05l1.43-.85-6.62-.58,4.24,1.39Zm6.43-3.83c.14-.01.28-.02.42-.02.56,0,1.04.12,1.32.32l2.79.19h.03l-6.05-.93,1.48.44Zm.73,1.37c-.29.03-.61.01-.87-.03l-2.28,1.34,9.08.79-5.94-2.1Zm41.56-6.88c.28-.06.63-.08.96-.05l6.12-2.05-12.04,1.2,4.96.9Zm-45.41,8.61l-1.53.91,8.56-.3-7.03-.61Zm-4.55,2.47l.55-.5s-.06-.02-.08-.03l-4.32.12,3.85.4Zm-3.72-1.36l-4.06-.43-.49.5c.05.02.11.04.15.06l4.39-.12Zm8.02-1.6l2.53-1.5s-.07-.05-.11-.07l-10.34.88,7.92.69Zm-10.94,0l-.71.73,5.28.57-3.95-1.3c-.2.02-.42.02-.62,0Zm23.75.67c.57-.05,1.19.06,1.53.25l6.53.14-4.21-1.45c-.1,0-.21.01-.32.01-.55,0-1.03-.13-1.3-.32l-7.56-.51,5.32,1.88Zm31.64-13.64l-4.63-.74c-.14.03-.3.05-.45.06l-.77,3.8,6.94-2.9-1.09-.23Zm-12.29,7.95c.32-.09.74-.13,1.12-.09l3.77-3.38h0l-11.12,2.74,6.24.73Zm5.15-4.57c.16-.04.33-.07.52-.08l.75-3.69-6.24,3.08,4.97.7Zm.45,1.25l-3.41,3.06,9.47-2.18-5.14-.93c-.27.06-.62.08-.93.05Zm-14.96,4.4l.45-.04h-.41s-.04.04-.04.04Zm-4.24-.4l3.88-.09.51-.53-5.59.44,1.2.18Zm2.5,1.57l-1.81.76,6.66.07.45-.02-3.9-.78c-.42.08-.99.07-1.39-.03Zm2.62-2.07l-.37.39,4.6-.11-3.18-.37c-.3.08-.68.12-1.04.09Zm82.17-3.56l-.4.2,3.18-.17-1.25-.1c-.41.14-1.06.17-1.53.08Zm93.34-14.64l-.08,1.02,5.43-.08-5.13-.97c-.07,0-.15.02-.22.03Zm6.06-.92l2.92-.02.04-.26c-.08-.01-.16-.03-.24-.05l-2.73.33Zm2.38,1.44c.09-.02.19-.03.3-.04l.17-.95-5.47.04,5.01.95Zm11.22,4.45l-1.74,2.59,8.25-2.6-5.47-.16c-.27.11-.63.17-1.04.17Zm-11.14-3.23l-5.91,1.3,3.27.29,2.85.15c.15-.02.32-.04.5-.04s.35.01.51.04l6.44-1.38-6.33-.46c-.35.12-.89.15-1.33.08Zm-14.28-.66l4.97-.07.08-1.04s-.04,0-.06,0l-4.99,1.11Zm5.58,1.51s.05,0,.08,0l5.47-1.2-5.47.08-.08,1.12Zm-.91.01c.06,0,.12-.02.19-.02l.07-1.1-5.21.07,4.95,1.05Zm.06,1.25l-5.65,1.36,11.83-1-4.91-.44c-.35.1-.85.14-1.26.08Zm29.17.23c.16-.07.35-.12.57-.15l-.03-.25-3.31.32,2.77.08Zm-.46,6.27l17.56-.62-3.06-1.08-4.62-1.35-9.88,3.06Zm-37.63-8.4l-6.58,1.09,12.5-.05-4.82-1.02c-.35.05-.78.04-1.1-.02Zm39.38,1.96c.09,0,.17.01.24.02l2.76-.62-3.03.29.04.31Zm17.65,5.31c.08,0,.17,0,.24,0,.2,0,.39.02.56.05l6.36-1.35-13.02-.77,5.86,2.08Zm-17.77-6.22l.02.14,2.66-.25-2.1-.04c-.16.07-.35.12-.58.15Zm-105.69,12.32l1.64-.03-1.15-.08c-.14.05-.31.09-.5.12Zm105.56-13.6c.13,0,.25.03.37.06l1.73-.26-2.11.11v.1Zm-8.87,6.21l15.32-1.2-2.1-.62-3.88-.91c-.24.04-.54.05-.8.02l-8.54,2.7Zm8.8-8.98h.31l-.79-.06s-.08.02-.12.03h.12c.17,0,.32,0,.48.03Zm-91.13,11.9c.19-.04.4-.06.63-.06.24,0,.47.03.67.07l5.28-.9-6.59-1.43c-.36.06-.82.05-1.17-.02l-5.74,1.04,6.92,1.3Zm-2.07-6.88l6.42-1.43.58-1.21s-.05-.01-.08-.02l-6.93,2.66Zm-2.4,10.21c.22-.06.48-.09.77-.09.31,0,.6.04.84.11l9.28-1.09-5.17-1.01c-.4.08-.91.07-1.29-.02l-8.78,1.48,4.35.62Zm46.26-11.5l7.37-1.23-6.4-.26-.97,1.49Zm-29.4,1.16l-6.3,1.22,4.03.22c.47-.17,1.28-.19,1.79-.04l7.06-.67-5.32-.75c-.37.08-.87.09-1.26.02Zm-20.28,14.17c.17-.03.37-.04.56-.04.34,0,.66.04.91.12l6.81-.73-13.27-.54,4.99,1.19Zm-3.34-5.03l6.68-1.12-6.12.17-.56.96Zm.32,1.25l-.3-.04c-.06.01-.12.03-.18.04h.48Zm34.24-11.9l-.53-.11-6.08.93,6.3.26.3-1.08Zm8.09-1.25l-4.93.63,6.45,1.71c.12-.01.25-.02.39-.02.3,0,.57.04.79.1l4.38-.43-6.11-1.92c-.33.02-.7,0-.97-.07Zm-7.67,2.35l6.16.25-.85-.23-5.03-1-.28.97Zm-.89.56l.04-.12-2.74-.11,2.18.31c.16-.04.33-.06.52-.07Zm17.86-1.33c.1,0,.22-.01.31-.01l.97-1.5-6.97-.29,5.69,1.8Zm-8.82,4.35c.09,0,.17-.01.27-.01.4,0,.75.07,1.01.17l2.11-.05,4.04-.4-4.13-1.44-1.84-.56c-.38,0-.68-.05-.94-.14l-6.71.39,6.19,2.05Zm-16.94-1.11l6.31.56.95-1.25-7.26.69Zm5.94,2.1s.05.01.08.02l6.84-.51-6.14-.54-.79,1.03Zm9.28,2.94c.09-.01.19-.02.28-.02l1.09-2.65c-.1-.02-.19-.05-.27-.07l-8.42.62,7.31,2.12Zm-45.95,4.91l.64-.06h-.79c.05.03.1.04.14.06Zm131.66,42.86l-.88-.07c-.05.02-.12.04-.18.06h1.06Zm8.48-.76c.44,0,.84.07,1.15.18l4-.31-10.65-.36,4.52.61c.28-.08.61-.12.98-.12Zm-3.75,1.27l-6.94-.06-.35.74c.12.02.24.06.35.09l6.94-.77Zm-7.11,4.57l-.4-.95-6.5.04,6.59.98c.09-.03.19-.05.3-.07Zm-10.33-10.01l7.66,2.44c.14-.02.3-.03.45-.03.4,0,.77.06,1.07.16l7.43-.76-16.6-1.8Zm24.95,5.92c-.6.19-1.56.19-2.15,0l-6.25.7,13.52-.04-1.47-.25-3.64-.41Zm7.73-6.14c-.37.06-.83.05-1.2,0l-8.25,2.01,18.45.4-9.01-2.4Zm19.02,3.83l-5.56-.5c-.56.19-1.47.21-2.06.04l-4.57.59,12.19-.13Zm-2.84,1.73c.11,0,.21-.01.32-.01l-1.49-.11c-.13.05-.27.08-.43.12h1.61Zm-29.71-2.76l-5.5.57,13.4.45-5.99-.97c-.58.15-1.4.12-1.92-.05Zm-61.31,6.49h-.02l-10.31,2.77,9.69-.51.64-2.25Zm1.49-.06c-.23.06-.49.09-.76.1l-.62,2.17,11.22-.6-9.83-1.67Zm38.64,6.47l10.8-4.49-.25-.04h-.2s.09-.02.09-.02l-9.09-1.35c-.38.1-.89.14-1.35.11l-10.7,3.93,9.59,1.92c.33-.07.73-.1,1.11-.08Zm-53.77-3.98l10.27-2.75-20.25,1.13,8.53,1.66c.43-.09.99-.11,1.45-.04Zm15.12-3.92l8.92-1.56-18.46-.11,7.88,1.65c.23-.05.5-.07.78-.07.32,0,.63.03.89.09Zm23.06,12.73l12.9-3.91-9.39-1.89c-.4.08-.92.1-1.36.05l-12.37,3.7,8.93,2.08c.39-.07.88-.08,1.29-.03Zm-.83-6.13l-9.95.51-1.07,2.78,11.02-3.29Zm-10.53.07l1.04-2.72-11.81,3.27,10.77-.55Zm101.12-12.65c-.47.19-1.25.25-1.85.15l-5.7,1.35,13.89-1.15-6.33-.35Zm-129.17,11.46s-.04,0-.06,0l-10.3,2.57,9.62-.25.74-2.31Zm158.78-14.24l-4.8-.72c-.36.09-.84.13-1.27.09l-8.52,3.04,18.78-1.58-4.18-.84Zm-33.74,2.33l-10.24-1.41c-.4.11-.97.15-1.44.08l-8.34,2.41,8.1.73,11.2-1.64.73-.17Zm-7.56,3.23c-.12.04-.24.08-.39.11v.02s2.28.02,2.28.02l-1.89-.15Zm59.23-7.24c.3,0,.58.03.84.09l8.01-1.41-10.76-3.91c-.21.02-.45.02-.66,0l-8.14,2.99,10.03,2.31c.2-.04.43-.06.68-.06Zm11.06-.4c-.27,0-.54-.02-.78-.07l-.99.14-6.47,1.15,9.4.93-1.17-2.15Zm-21.49,2.11l-.65-.93-6.61-.14,7.22,1.08s.03,0,.04-.01Zm-47.4,6.14h-.42s.04.01.06.02l.37-.02Zm46.04-9.23l1.18,1.69,6.77.14-7.95-1.83Zm-48.75,9.2h-.51s.44.02.44.02c.02,0,.05-.01.07-.02Zm1.8,2.09l-6.37-.38,7.22,1.52-.86-1.14Zm.28-.78s-.04,0-.05.01l.24.32,3.82.23-4.01-.56Zm-2.9-3.16l-.19.03h.08s.07-.02.12-.03Zm-8.33,3.74c-.64.13-1.5.07-2-.14l-5.02.29,13.23,1.16-6.21-1.31Zm8.58-2.37c-.16-.03-.31-.08-.44-.13l-1.58.1,2.02.02Zm3.29-1.89l-2.67.39s.07,0,.11,0c.24,0,.46.02.67.06l1.89-.44Zm-16.1,2.73c-.14-.03-.27-.07-.39-.11l-1.26.1h1.65Zm14.8,1.24l-.12-.17c-.54.02-1.08-.06-1.45-.22l-2.67.13,4.24.25Zm-283.35-21.15l-5.85.73,5.31.28.54-1Zm51.18,2.94c-.29.05-.63.07-.95.05l-1.07,1.13,7.82.17-5.81-1.35Zm-1.7-.06l-8.2,1.06,7.05.16,1.15-1.22Zm-14.41-3.21l-6.92-1.09c-.33.08-.76.11-1.15.08l-2,1.91,10.07-.89Zm25.72,4.16c.35,0,.67.04.94.12l8.71-1.2-4.52-.83c-.59.13-1.41.09-1.91-.1l-9.93.67,6.04,1.4c.2-.04.43-.06.67-.06Zm-23.58-.42l5.35-.69-8.68.29-1.49.11,2.83.31c.55-.17,1.42-.18,1.99-.01Zm35.19,1.89l-1.45,2.08,10.02-1.74-8.57-.34Zm8.98,5.28l1.19-2.1-9.49-.13,7.73,2.26c.18-.02.38-.03.58-.03Zm-11.58-3.28c.14,0,.28,0,.42,0l1.4-2.03-8.2-.33,5.99,2.24.38.13Zm12.2,4.79c-.14.03-.3.05-.46.05l-.35,1.95,8.73-.18-7.92-1.82Zm82.25,20.13l.58-1.8-9.57.25,8.25,1.63c.22-.05.48-.08.74-.08Zm-175.93-44.89c.31,0,.6.04.84.1l4.33-1.72-10.42.36,4.75,1.29c.16-.02.32-.03.5-.03Zm7.54-1.47c-.39.03-.81,0-1.14-.09l-4.52,1.8h10.54s-4.88-1.71-4.88-1.71Zm-15.65.53c-.25.04-.55.04-.82.02l-.47.42,4.69.49-3.4-.92Zm17.03,3.66c.3,0,.58.04.82.1l2.17-.91-8.34-.67,4.93,1.51c.14-.01.27-.02.42-.02Zm5.51,2.76l-5.01-1.35c-.55.08-1.22.01-1.62-.16l-1.65.07-2.69.35,10.96,1.09Zm.13,6.17l21.2-1.13-5.91-1.07c-.22.05-.48.08-.75.08-.82,0-1.48-.25-1.61-.6l-7.87-2.06c-.26.04-.56.05-.84.03l-4.68,4.49c.19.07.35.16.46.26Zm4.52-6.19c.38,0,.72.06.99.15l10.24-.92-4.8-1.27c-.16.02-.33.03-.51.03-.66,0-1.2-.17-1.46-.42l-12.12.54,7.15,1.93c.16-.02.33-.04.5-.04Zm20.48,4.43l8.12-2.04-15.47.99.17.04,5.84,1.05c.4-.08.91-.1,1.33-.03Zm40.18,10.73l-6.97-2.61c-.13,0-.26,0-.39,0l-3.01,4.98,10.37-2.38Zm71.81,19.12l.25-2.44h-8.43s7.95,2.46,7.95,2.46c.07,0,.14-.01.22-.02Zm-11.45-3.46c.05,0,.1,0,.15-.01l.24-6.31h-.02l-9.31,3.13h.73s-1.27.18-1.27.18l9.47,3.01Zm1.87-9.63l-9.74-.1,7.98,1.89c.23-.04.49-.06.76-.06l1-1.73Zm18.63,16.5l-8.05-1.86c-.16.03-.32.05-.5.06l-.58,3.54c.12.01.22.03.32.05l8.8-1.79Zm-9.98-9.59l-9.41-3.59-.24,6.3c.05,0,.11.01.16.02l9.49-2.73Zm-157.13-33.3l-3.36-.35-.34.31c.05.02.1.04.14.07l3.56-.02Zm177.73,45.68h-7.7l-.06,1.11c.2.01.39.05.56.09l7.2-1.2Zm-8-3.57l.72-2.06-9.05.36,7.68,1.76c.2-.04.42-.06.66-.06Zm.32,3.1h8.36l-7.78-1.54c-.16.03-.33.06-.51.07l-.07,1.47Zm-48.61-10.92l8.52-1.11-7.79-.14-.86,1.22s.09.02.12.03Zm1.68-3.7l-10.64,1.81,9.24.16,1.4-1.97Zm-13.96,1.27l12.24-2.08-9.48-2.55c-.19.03-.4.04-.61.04l-2.3,4.56c.05,0,.1.02.14.03Zm15.41-1.21c-.22.03-.48.04-.72.03l-1.34,1.9,9.5.17-7.44-2.09Zm11.06,1.6l8.82-2.96-8.91.36.02,2.59s.04,0,.06,0Zm-129.5-42.24h-.52s.35.05.35.05c.05-.02.11-.03.17-.05Zm128.71,42.24l-.02-2.57-8.2.33,8.02,2.25c.06,0,.13-.02.2-.02Zm.58-7l1.39-1.64-9.54.08,7.18,1.61c.3-.05.64-.08.97-.05Zm-24.13.44l1.66-4.15s-.05,0-.07-.01l-10.79,2.26,8.56,1.96c.19-.03.41-.06.64-.06Zm91.67-63.27l5.06-.4-4.44-.43-.62.83Zm24.34,2.17l-3.47.17,4.4,1.06-.35-1.14c-.22-.01-.41-.05-.58-.1Zm-2.55,4.69l2.69.28c.2-.05.44-.08.7-.08.32,0,.61.05.84.13l3.28-.15-2.73-.36c-.41.09-.99.07-1.36-.04l-3.41.23Zm13.04,2.23l1.25-.14-1.31.05.06.09Zm-8.59-4.42l.05.84c.14.01.28.04.4.08l3.36-.28-3.74-.65s-.05,0-.08.01Zm-18.37,1.28s.08.04.12.06l3.05.11-2.28-.51c-.17.02-.37.03-.55.01l-.32.33Zm9.29-1.08l-.37,1.24.66.1,4.93-.33-5-1.03c-.07.01-.15.02-.23.02Zm-8.07-.41l2.3-.2-2.68-.11v.24c.14.01.27.04.38.07Zm3.11-1.74l4.38.93c.06,0,.12,0,.17-.01l.23-1.01c-.12-.02-.22-.05-.31-.08l-4.47.17Zm12.79,1.83l-3.72.08,4.27.88h.03l-.05-.84c-.2-.02-.38-.06-.53-.11Zm5.92,4.58l2.02.16,1.17-.13-.09-.14-3.1.11Zm-.07,1.44l3.82.51c.2-.05.44-.08.69-.08.4,0,.76.07,1.02.19h1.4s.64-.07.64-.07l-5.14-.67-2.44.11Zm3.44-5.7s.07.01.11.02l3.59-.54h-3.62s-.08.52-.08.52Zm-.89-3.2l-5.26.15,5.5,1.2-.24-1.34Zm-.47,6.92h.17s-.03,0-.04-.01h-.14Zm-6.9-5.13c.22.01.42.05.6.1l3.87-.21-4.83-1.05.36,1.16Zm4.65,2.8l3.35.44-.22-.51-3.13.07Zm2.69-1.37c.06,0,.14-.02.21-.03l.07-.51h-3.49s3.21.54,3.21.54Zm-15.65-2.22l-.23,1.01c.14.02.26.05.37.09l4.21-.08-4.26-1.03s-.06,0-.09,0Zm-52.45,1.17l-.53.78,4.38.43-3.66-1.21c-.06,0-.13,0-.19,0Zm2.38-.78l5.16.17.48-1.88-5.64,1.71Zm-20.58-.16l-.86,1.05,4.98-.31-3.63-.76c-.16.02-.33.03-.5.02Zm17.1,2.54s.06.02.09.03l3.09-.11-2.93-.29-.25.37Zm-9.18,3.24l2.1.17c.4-.12,1.02-.14,1.47-.04l7.14-1.01-3.38-.23c-.4.13-1.01.15-1.46.06l-3.1.46-2.77.59Zm-.39-4.17l-.27.27c.07.03.14.06.19.09l3.07.22-2.48-.6c-.17.02-.35.02-.52.02Zm4.58-.43l4.81.47.55-.81h-.01l-5.35.34Zm13.52-.39l-4.72-.15,4.39,1.45.33-1.3Zm-9.25,1.65l.24-.34-3.61-.35,2.97.72c.12-.01.26-.02.4-.02Zm16.68,1.03c.32-.06.73-.06,1.04,0l4.45-.78-9.11.19,3.62.59Zm13.58-.32l-2.64-.26c-.21.06-.45.08-.73.08l-.26.36,3.63-.18Zm-23.59,2.24l-.94,1.03,6.2.08-4.69-1.14c-.18.02-.38.03-.58.02Zm15.93-4.93l-1.18.33,3.27.63,1.76.25-.35-1.9-3.5.68Zm4.2-.82l.38,2.1c.07,0,.14,0,.2.02l5.68-1.11-5.82-1.09-.45.08Zm-.55,4.26l.74-.1-.69.03-.05.07Zm-7.5-2.44l-5.1.94,9.82-.21-3.8-.73c-.29.04-.64.04-.92,0Zm-8.15,3.68l4.24,1.03c.13-.02.27-.03.42-.03.24,0,.47.03.66.07l4.76-.67-1.76-.18-2.49-.06c-.24.09-.55.15-.9.15-.48,0-.88-.09-1.12-.25l-1.36-.11-2.45.05Zm24.63-5.09c.14-.02.3-.03.45-.03.22,0,.43.02.62.06l4-.49-9.21-.32,4.13.78Zm-26.94,3.18l-.66.02s.06.02.1.03l2.68.15-.76-.12c-.43.08-.99.04-1.36-.08Zm63.02.52c.14,0,.27.02.39.04l3.16-.58-3.76.08.21.47Zm82.04,8.9l.3-.04-.93-.09.63.13Zm-5.32,4.11c.15-.07.34-.12.55-.16l-.02-.08c-.2,0-.38-.04-.55-.08l-2.44.3h2.46Zm-.16-2.51s-.03,0-.04.01l.53.62,2.12.18,2.93-.51-5.54-.31Zm-4.47.21l4.06.35-.36-.43c-.37.01-.72-.03-.99-.12l-2.71.2Zm1.25-2.35l-2.69.11,4.16.83-.53-.8c-.36,0-.69-.05-.94-.14Zm-6.5-.84c.27.01.5.07.7.14l3.98-.16-5.03-1.72.35,1.75Zm10.65,6.62l-5.85,1.95,7.72.37c.32-.13.8-.19,1.25-.16l5.21-1.83-7.11-.46c-.32.11-.79.17-1.22.13Zm-1.88-4.82h.04c.39,0,.73.06.98.17l1.11-.03,1.24-.16-3.9-.77.53.8Zm12.53,3.77l2.06-.03-2.14-.12.08.15Zm8.36-.54l-.09-.88c-.15-.01-.3-.04-.42-.08l-4.49.59,4.58.45c.13-.04.27-.07.42-.09Zm-6.61,3.74l5.94-.27-6.77-1.22.84,1.5Zm3.64-6.96l-.53-.37-2.06.24,1.32.13h1.27Zm-4.57,4.23c.06,0,.12.02.18.04l.46-.05h-.64Zm.18,2.77l-.82-1.48c-.09,0-.17,0-.25,0l-5.06,1.78,6.13-.29Zm-1.75-2.69c.06-.02.14-.04.21-.06h-.95s.74.06.74.06Zm-25.92-4.62l5.52.94-.49-1.15c-.28,0-.53-.05-.74-.12l-4.29.33Zm25.19,3.85h-.2s-2.33.28-2.33.28l3.24-.05-.09-.17c-.23,0-.44-.02-.63-.07Zm-8.72-.13l.02.08c.2.01.4.04.56.08l2.12-.27-2.19-.03c-.14.06-.32.11-.51.14Zm-44.26-17.22l-4.02.91,4.23-.25-.21-.66Zm-8.49-.45l.2,1.26s.08,0,.12,0l5.18-1.17-5.13-.18c-.11.04-.23.07-.37.08Zm-.37,2.49l-2.81.73,3.06-.15c.09-.05.2-.09.32-.12l-.27-.45c-.11,0-.21,0-.3-.01Zm.97,1.62l-.82.21,1.92-.2c.15-.11.37-.19.63-.24l-.33.02c-.25.14-.63.23-1.07.23-.12,0-.23,0-.33-.02Zm-.17,5.81c.12-.01.23-.03.35-.03l.66-1.76c-.07-.01-.14-.03-.21-.05l-6.65.55,5.86,1.29Zm-9.59-.88l-3.62.78,5.01.18-.78-.92c-.21,0-.42,0-.61-.03Zm8.64-2.19l9.65-1.58-5.4-.28c-.34.12-.86.16-1.28.1l-6.46,1.47,3.49.29Zm40.31,3.6l-5.23.08,6.32,1.87-.37-1.8c-.28-.02-.53-.08-.73-.16Zm-36.08-6.65l-.66.04c.11,0,.21.01.31.03l.35-.07Zm-10.64,7.19l-.43-.51-3.15-.11,3.58.63Zm37.2-2.72l-.27-.76c-.27-.01-.52-.06-.72-.13l-3.93.2,4.92.68Zm.78.11l4.56.63-4.83-1.41.27.78Zm2.53-6.02l1.04.25s.08,0,.12-.01l-.72-.23c-.15,0-.3,0-.45,0Zm-32.7-.01c-.06.03-.14.06-.23.08l.27.44h0c.17,0,.33.01.48.04l3.13-.6-3.66.04Zm30.57,7.13c.32.01.61.07.84.17l3.89-.06-4.93-.68.21.58Zm-11.53-5.06l-4.52.64,10.92,1.17-5.54-1.75c-.3.02-.61,0-.86-.06Zm-7.04-.06c.09,0,.17.02.25.04l.5-.07-.75.03Zm-.17,1.25l-.32,1.58,6.38-.07-5.92-1.52s-.09,0-.14.01ZM-3.43,289.01c-.32.04-.68.02-.98-.03l-9.55,2.16,15.39-.59-4.86-1.54Zm16.46,2.85l8.98-1.94-.79-.08.61-.03-4-1.05-8.6,1.33-3.03.62,5.53,1.16c.4-.08.89-.08,1.29,0Zm-8.67-1.81l8.62-1.76-14.38.23,4.72,1.49c.12-.01.25-.02.39-.02.23,0,.45.02.66.06Zm370.65-20.22l.46.35c.11-.01.22-.02.35-.02.16,0,.31,0,.45.03l2.48-.56-3.7.17s-.03.01-.04.02Zm-395.88,24.28l1.69-1.79-8.38,1.89,6.69-.1Zm42.81-5.99l10.65.79-4.27-1.27c-.45.06-.99.01-1.36-.11l-3.03.29-1.99.31Zm-48.7-.84c.3,0,.58.04.81.1l10.24-1.46-17.01-1.1,5.78,2.47c.06,0,.12,0,.17,0Zm6.55,3.98l-6.35-2.57c-.27.01-.55,0-.79-.04l-10.11,2.37,17.24.25Zm7.2-4.75l-9.13,1.31,15.44.23-5.07-1.46c-.4.05-.89.02-1.25-.07Zm-5.21,4.31c.06,0,.14,0,.21,0,.21,0,.42.01.6.05l10.44-2.35-17.6-.25,6.35,2.57Zm48.33-1.62l-9-.67,2.74.72c.17-.02.34-.04.52-.04.42,0,.81.07,1.09.19l4.65-.2Zm30.01-10.22l-7.3,1.97,13.14-1.24-4.78-.77c-.31.07-.71.08-1.05.04Zm-17.55,6.35c.19-.04.39-.06.61-.06.4,0,.76.07,1.04.17l1.73-.45-2.77-.14-3.06-.06,2.46.53Zm4.99-3.17l-2.22.19,5.22.02-1.4-.18c-.47.12-1.16.11-1.6-.03Zm148.09-24.1c.19-.05.4-.07.63-.07l.24-.42-3.67.17,2.8.32Zm-146.34,22.77l8.18-2.21-6.81.11-1.36,2.1Zm-12.32,1.12c.19-.04.4-.06.63-.06.33,0,.63.04.86.12l3.63-.32-7.65-.18,2.52.45Zm-.64,1.12l-.47.09,1.4.05h.12c-.3-.02-.57-.08-.78-.16h-.27Zm1.4.16h1.2s-.62-.08-.62-.08c-.17.04-.37.07-.58.08Zm7.56-.01c.21-.05.45-.08.72-.08.3,0,.58.04.81.1l3.41-.4-7.64-.03,2.7.4Zm1.59,20.22l1.64-4.4-7.64.99-1.4.31,7.31,3.1s.06,0,.09,0Zm3.52-4.65l-1.1.15-1.69,4.53,8.2-2.01-5.4-2.67Zm-19.03,6.02c.14,0,.27,0,.4.02l1.66-1.41-7.35-.54,5.03,1.94c.09,0,.18,0,.27,0Zm2.89-1.33l-1.73,1.48,9.91-.87-8.18-.6Zm5.4-1.75l-2.09-.78c-.11,0-.22,0-.32-.02l-2.48,2.12,9.67.71-4.78-2.03Zm22.4,3.86l-6.24-.49-.75,1.29c.05.01.1.03.15.04l6.84-.85Zm-3.95-17.55h1.01s-4.4-1.38-4.4-1.38l-6.31-.11,9.7,1.49Zm-3.77,18.28l.74-1.27-5.34-.42,4.31,1.69c.09,0,.19,0,.3,0Zm1.01-1.72l1.31-2.24-7.22,1.77.48.03h-.08s5.51.43,5.51.43Zm-73.08-12.35c-.17.01-.37.01-.55,0l-1.76,1.86,7.26-.11-4.96-1.75Zm27.7,7.1l-4.83-1.11c-.36.07-.81.07-1.19,0l-8.92,2.17,14.93-1.07Zm23.97,3.65l2.41-2.06-9.77,1.52,7.35.54Zm-32.23-5.45l-4.88-.94c-.37.08-.86.09-1.25.03l-7.64,1.95,13.76-1.04Zm-12.24-4.06c.2,0,.39.01.56.04L-.01,291.08l-15.88-5.4,51.72,35.73c-9.48.45-37.31-27.94-46.33-27.94Zm7.15,1.78l2.17-1.5-6.99.51,3.8,1c.32-.05.7-.05,1.02,0Zm26.69,6.45c.3,0,.58.03.83.09l8.31-1.29,2.65-.49-.71-.27-5.54-1.77c-.42.05-.91,0-1.27-.09l-12.48,1.66,7.72,2.19c.16-.02.32-.03.49-.03Zm-10.29-1.62c-.18.02-.37.04-.57.03l-1.69,2.6,10.08-.42-7.82-2.22Zm-3.06,2.67l1.64-2.52-9.78,2.86,8.15-.33Zm17.25-16.44c.19-.04.42-.06.66-.06.62,0,1.14.15,1.4.38l8.49-.55-13.24-.31,2.69.54Zm134.39-16.66c.17-.03.35-.05.54-.06l.82-1.61-5.83.96,4.47.71Zm-7.52,2.68l5.06-1.66-4.58.3-.48,1.36Zm.92-2.63l-.27.78,4.22-.28-3.51-.56c-.14.03-.28.05-.44.05Zm8.23-2.25l.35-.68-3.79,1.24,3.44-.56Zm-17.76,3.25c.17-.04.35-.06.55-.06l.82-1.66-5.78,1.08,4.41.65Zm-4.76,2.36l1.28.27c.08,0,.17,0,.25,0,.31,0,.59.04.82.11l7.3-.57-3.9-.97c-.43.05-.93,0-1.26-.11l-8.16.37,3.66.91Zm22.77-7.61c.06-.03.14-.05.23-.07l.17-.3-2.38.32,1.98.05Zm-101.33,17.42c.36-.1.86-.12,1.27-.07l3.3-2.14-7.74,1.81,3.16.39Zm91.82-12.34l.27-.78-4.08,1.03,3.81-.25Zm8.58.32v1.3l4.37-.34-4.29-.96s-.05,0-.08,0Zm27.15-6.87c.3-.09.73-.13,1.1-.1l1.22-1.02-5.74.87,3.42.25Zm-52.32,6.68l-.81.32,4.34.03-2.2-.32c-.4.08-.94.07-1.33-.03Zm46.75-8.19l-.88.75,4.98-.75-2.96-.11c-.3.1-.75.15-1.14.12Zm9.71-2.23c.22-.05.49-.08.76-.07l.79-.98-5.1.64,3.55.41Zm-7.28,7.95l-4.42-.17c-.44.16-1.18.18-1.66.04l-7.98,2.92,14.07-2.8Zm-20.46,5.69l1.64.13,2.08-.43-.5-1.08-3.23,1.38Zm3.95-1.45l.46,1.01,4.96-1.01-5.11-.1c-.09.04-.2.07-.32.1Zm-7.33,6.1c.35-.08.82-.09,1.2-.03l6.16-1.41-12.01.63,4.65.81Zm-15.1-9.55l-.79,1.59,5.18-1.31-3.73-.37c-.19.05-.42.08-.66.09Zm-53.97.25c-.4.09-.94.09-1.34,0l-4.19.64,8.92-.17-3.39-.47Zm-7.35,1.16l3.39.62c.18-.04.38-.06.6-.06.24,0,.46.02.66.07l5.29-.83-9.94.2Zm51.25-.88c.2-.04.43-.06.66-.05l.22-.28-2.02.14,1.15.19Zm-40.5,3.58c-.19.05-.41.08-.65.08l-1.33,3.17,7.08-2.29-3.26-.73-1.84-.24Zm-1.44-1.17c.21-.05.45-.08.7-.08.33,0,.64.05.89.13l2.1-.15h-4.24s.55.1.55.1Zm-27.28,8.39l-3.95,2.56,10.4-2.47-5.01-.22c-.37.14-.97.19-1.44.13Zm9.68-2.97l.67-1.73s-.06-.01-.08-.02l-7.36,3.27,6.77-1.53Zm4.47-6.46l-6.61,2.43,12.08-1.63-4.7-.85c-.23.04-.5.06-.77.05Zm-3.9,3.53c.3-.07.68-.09,1.03-.06l6.09-1.88-10.72,1.44,3.59.5Zm5.06-4.82l5.19-.79-4.42-.1-.78.9Zm41.84,6.21l-4.39,2.85s.04.03.06.04l11.73-1.43-6.43-1.46c-.3.05-.67.05-.97,0Zm9.23,2.09l-1.36,1.12,7.56.09-5.35-1.24c-.26.04-.58.05-.85.02Zm-30.35-4.81c.41-.1,1-.11,1.43-.02l1.91-.9-6.67.48,3.33.44Zm31.64,3.63s.02,0,.03,0l3.65-.17-2.35-.24c-.29.08-.68.12-1.04.1l-.3.3Zm-16.24,1.7c.05,0,.11,0,.16,0,.17,0,.33.01.48.04l4.16-2.7-9.65.7,4.85,1.97Zm-1.87-4.53c-.31.05-.7.05-1.02,0l-2.75,1.68,8.51-.62-4.74-1.06Zm-8.94-1.72l-2.1.99,6.63-.23-3.36-.73c-.37.06-.82.05-1.17-.03Zm3.39,3.32c.09,0,.19,0,.3,0,.19,0,.36.01.52.04l2.85-1.74h-.29s-5.65.97-5.65.97l2.28.75Zm318.32,42.71l-8.95-.77,10.16,3.08-1.21-2.31Zm-215.06,19.46c-.14-.01-.28-.03-.41-.06l-7.5,1.54h7.84l.07-1.48Zm-.15,3.05l.06-1.1h-7.3l6.64,1.19c.19-.04.39-.08.6-.09Zm-10.86-.6c-.31.07-.69.11-1.07.09l-.46.68,7.17.24-5.63-1.01Zm12.04,2.18c-.24.05-.51.08-.8.08l-.28.76,7.22.36-6.14-1.21Zm-7.87-.75l-6.03-.2-.39.58c.12.03.25.06.35.1l6.06-.48Zm21.2-4.82l-.6,1.86c.05,0,.11.01.16.03l9.78-2.13-9.34.24Zm1.5-2.78c-.19.03-.4.06-.63.06l-.72,2.25,10.25-.26-8.9-2.04Zm-3.06,9.23c.37,0,.71.05,1,.12l8.02-1.26-17.19-.21,7.3,1.43c.26-.06.55-.09.87-.09Zm6.32-2.12l-5.09-.94c-.54.12-1.29.12-1.82-.01l-7.52,1.26,16.52.2-2.09-.5Zm-55.69-9.01l1.71-4.33c-.12-.02-.24-.05-.35-.08l-11.15,1.46,9.36,2.97c.14-.01.28-.02.43-.02Zm64.45,3.27l.74-2.6-10.55.56,9.21,2.1c.19-.03.39-.05.61-.06Zm-52.71-4.75l-8.9-2.83c-.13.01-.27.02-.41.03l-1.71,4.33c.11.02.21.04.31.07l10.7-1.59Zm-14.61,2l-9.05-2.89c-.21.02-.44.03-.67.02l-1.92,2.63,11.65.24Zm-9.36-4.48l.81-1.13-8.69-.15,6.89,1.36c.3-.06.65-.09.99-.08Zm24.84,7.5l1.09-4.07c-.14-.02-.27-.04-.39-.08l-10.53,1.57,9.39,2.62c.14-.02.3-.03.45-.04Zm11.83,2.97l.58-3.55c-.14-.02-.28-.04-.41-.07l-9.08,1.56,8.46,2.1c.14-.02.3-.04.46-.05Zm-1.18,2.31l.51-.75c-.11-.02-.2-.05-.3-.08l-6.76.62,6.55.22Zm-.23-6.78l-8.27-2.56c-.11.01-.22.02-.35.03l-1.09,4.07c.12.02.24.04.35.07l9.36-1.6Zm110.84-10.87l6.5,1.05c.26-.06.56-.1.89-.1.36,0,.7.05.98.13l5.89-.76-14.26-.31Zm.79,11.08l8.06-1.91-19.58-.39,10.04,2.3c.45-.08,1.03-.08,1.48,0Zm10.93-2.89l-.1-2.66-.86-.15-4.45.46-4.5.65,9.44,1.78c.15-.03.31-.06.48-.08Zm-25.69,1.05c-.13.02-.27.04-.41.05l-.14,3.44,11.84-.91-11.29-2.59Zm10.37,3.14l-10.93.83-.11,2.64s.08,0,.12.01l10.93-3.49Zm-154.02-8.37c-.29.06-.63.09-.97.08l-1.16,1.66,9.81-.21-7.68-1.52Zm170.79,4.31l7.94-1.01-1.93-.47-6.84-1.18.1,2.53c.27.02.52.07.73.13Zm18.68-1.85l-14.56-1.27,6.21,1.5c.21-.04.45-.06.69-.06.5,0,.94.08,1.27.21l6.39-.39Zm5.12,1.03c-.45,0-.86-.08-1.17-.21l-7.82.48,9.58,1.37-.6-1.64Zm-11.99,4.04l-.92-3.25c-.34-.01-.65-.06-.91-.14l-4.56.58-2.97.54,9.26,2.28s.07-.01.11-.02Zm-80.95,3.66l1.06-2.75-11.43.58,9.68,2.23c.22-.04.45-.06.69-.06Zm12.77,4.42c-.42.07-.96.08-1.38,0l-9.9,2.56,20.9-.21-9.62-2.35Zm-4.41-1.05l-7.57-1.77c-.51.09-1.17.08-1.65-.04l-9.48,1.69,18.7.12Zm92.24-13.24l-8.6-.51.81,1.07c.06,0,.14,0,.2,0,.42,0,.79.06,1.09.16l6.5-.71Zm19.65-57.09l1.64-.19-1.88.03.24.17Zm-121.11,60.65l-11.11.59-.76,2.68h0s11.86-3.27,11.86-3.27Zm41.54-3.62c-.12.03-.23.06-.36.08l.39.94,7.73-.05-7.76-.97Zm-.09,10.59l.11-2.58-9.85.75,9.23,1.89c.17-.03.33-.06.51-.07Zm.26-6.49l-10.11,4.2,9.97-.76.14-3.44Zm-14.73,11.98l12.55-4.53-9.92-2.04c-.4.08-.92.1-1.37.05l-13.04,3.96,10.65,2.6c.35-.06.76-.08,1.12-.04Zm-245.08-45.04l3.32-.61,4.91-1.08-15.03-.25,6.09,1.94c.23-.02.48-.02.71,0Zm1.2-5.09l-5.37-1.38c-.24.04-.53.05-.8.03l-3.02,3.1,5.4-.93,3.79-.83Zm8,2.94l-5.51-2.19c-.3.02-.6,0-.86-.05l-9.08,1.99,15.45.25Zm-18.22-1.01l3.19-3.27-9.92,1.8,5.63,1.66,1.1-.19Zm19.87,1.96s0,0-.01,0l-2.6.57,2.53-.33.09-.24Zm-36.88.42c.19-.03.4-.05.62-.05.32,0,.63.04.88.11l5.83-.77,2.37-.41-13.88.17,4.18.96Zm45.65,3.62s-.08,0-.12,0l-1.35,2.32,7.39.58-5.91-2.89Zm8.85,4l-.57,1.09,6.64.35-6.07-1.44Zm-8.93-5.47c.34,0,.66.04.91.12l10.06-1.23-14.38-1.44-1.44.19,4.78,2.36h.07Zm8.26,4.03c.11,0,.22,0,.32.01l4.62-4.43-11.24,1.38,6.23,3.04h.08Zm-30.06-16.16c.14-.02.28-.03.43-.03.6,0,1.11.14,1.38.36l9.67-.82-16.04-.86,4.57,1.35Zm-.55,1.25s-.06-.02-.1-.04l-1.63.07-2.74.36,3.7.4.77-.79Zm8.01-3.3c-.61,0-1.12-.15-1.38-.37l-9.9.64,15.47.83-3.77-1.12c-.13.01-.27.02-.42.02Zm4.84-1.56l-.12-.02h-.32s-1.81.45-1.81.45l5.73.11-2.97-.46c-.18-.01-.35-.04-.51-.08Zm-22.59,11.81l-5.01-1.49c-.38.04-.83.02-1.18-.05l-10.26,1.87,15.61-.18.84-.15Zm-5.22-2.9l2.38-2.61-6.86.9-1.2.26,5,1.47c.22-.02.46-.03.68-.02Zm2.88-3.16l.17-.18-1.89.41,1.73-.23Zm10.45.75l.43-.44-4.8-.51,3.6.98c.24-.03.52-.04.77-.02Zm61.82,19.14l-5.81.18-1.39,1.1,7.2-1.28Zm15.53,9.73l8.66.07,1-2.4-9.66,2.33Zm-20.61-15.31l-9.03,2.41,7.16-.64,1.87-1.77Zm42.85,14.94c.22,0,.43.01.62.04l9.79-2.51-8.57-2.51c-.33.04-.72.04-1.05,0l-1.75.35-8.69,2,9.13,2.67c.17-.02.34-.03.52-.03Zm-14.09,3.47l10.7-2.47-9.64-.08-1.07,2.54h.01Zm26.15-5.15s-.07,0-.11-.01l-8.47,2.18,8.23-.17.35-1.99Zm-23.88-1.8l3.05-5.04s-.02,0-.04,0l-11.88,2.05,8.42,3.01c.14,0,.3-.01.45-.01Zm32.72,9.06c.14-.01.3-.02.45-.02l2.26-4.49-9.91,2.57,5.81,1.62,1.38.32Zm.03-4.99l-8.58.18-.35,1.92,4.72-1.01,4.21-1.09Zm-32.31-2.52c-.15.02-.31.03-.48.03l-.99,2.36,9.89.08-8.43-2.47Zm-32.56-7.69l.44-.35-4.06.46,3.62-.11Zm10.66.58s-.03,0-.04,0l-9.33,1.67,8.31.22,1.06-1.88Zm52.47,17.89l1.22-1.74-9.98,1.92,8.76-.18Zm-56.03-22.22l-7.47.66-1.27,1.21,8.74-1.87Zm4.75,4.39c-.15.01-.32.02-.48.02l-1.03,1.82,7.81.2-6.3-2.05Zm6.08,2.51l-7.84-.21-1.33,2.36,9.18-2.16Zm3.39-.92l1.74-1.85-8.82-.2,6.34,2.06c.24-.03.5-.03.74-.01Zm2.57-1.83l-1.76,1.87,9.84-1.69-8.07-.17Zm186.05,20.07l6.84-1.07-8.16.06.37.9c.35,0,.67.04.94.11Zm188.1-53.42l1.36.91,4.67-.06h-.1s-5.94-.84-5.94-.84Zm-1.9-.04l-3.28,1.03,5.55-.08-1.46-.97c-.25.03-.55.04-.81.01Zm5.34,2.33c.29-.04.63-.04.91,0l3.54-1-5.83.08,1.38.92Zm2.09,5.8c.05,0,.11,0,.17,0l7.08-2.26-7.74.25.49,2Zm-1.09-4.49l.49,2.02,7.66-.25-8.09-1.78s-.04,0-.06,0Zm-25.33-4.51c.14-.02.3-.03.46-.03.17,0,.34,0,.5.03l3.43-.85-5.55.06,1.16.78Zm7.12-.47l-3.26.81,5.41-.13-1.15-.69c-.31.05-.7.06-1.01,0Zm-1.69,1.24l5.97.72-1.38-.83-4.6.11Zm7.1.76c.27-.05.61-.06.89-.03l3.18-1-5.55.13,1.48.89Zm33.25,5.21l5.68.33-6.76-1.86,1.07,1.53Zm18.31-.93l-6.43,1.58,7.96.33-1.02-1.88c-.18,0-.35-.01-.51-.04Zm-9.52,1.05c.14-.02.3-.03.46-.03.18,0,.36.01.52.04l6.36-1.57-14.94-.54,7.6,2.1Zm19.17-.79l-5.62-.42,1.52.45,4.78,1.14-.68-1.17Zm-7.35,1.69l5.99.25-6.98-2.07.99,1.82Zm-14.9-4.62l-4.91,1.13,13.77.5-7.72-1.63c-.35.06-.79.07-1.14,0Zm-15.42,3.96l-7.34,2.35,16-.07-7.87-2.29c-.25.03-.53.03-.79,0Zm7.22-2.03l-4.55,1.25,6.2.37-1.12-1.59c-.18,0-.37,0-.53-.03Zm-49.89-5.79l5.55.7-1.12-.75-4.44.05Zm-18.28-1.1l-5.31,1.75,6.8-.39-1.07-1.34c-.14,0-.29,0-.42,0Zm-49.51-1.54l-2.8-.19c-.39.13-.99.17-1.46.08l-2.02.38,6.29-.27Zm3.79-4.32l.26.3,3.58-.41-3.67.04c-.05.02-.11.05-.17.07Zm-4.57,1.33l4.78.08s.09-.03.13-.05l-.45-.53-4.45.5Zm13.03-3.61l-5.13,1.25,6.27-.06c.06-.03.13-.06.21-.08l-.86-1.1c-.17,0-.34,0-.5-.02Zm2.07,1h.1c.3,0,.58.04.81.11l2.9-.26-4.57-.81.76.96Zm-28.11,4.46c.22-.03.49-.03.72,0l2.42-.71-3.57.42.43.3Zm5.64-2.6l-3.31.74,4.2-.07c.06-.03.12-.06.19-.08l-.5-.58c-.19,0-.4,0-.58-.02Zm3.34,2.58h.03s-.03,0-.03,0Zm1.66-.17s0,0,0,0h.03s-.04,0-.04,0Zm56.59,6.28c.05,0,.09,0,.14,0,.09,0,.18,0,.27,0l5.96-2.09-7.66.44,1.3,1.65Zm87.6,6.65l.92,1.7c.15,0,.3,0,.44.03l5.08-1.46-6.44-.27Zm-111.93-9.15l-5,1.51,13.31-.4-7.28-1.17c-.3.07-.68.09-1.03.05Zm-8.15-7.51l-2.89.26,5.24.92-1.27-1.09c-.37.03-.79,0-1.09-.09Zm41.35,8.19l-6.58,2.31,8.1,1.14c.32-.08.75-.11,1.12-.07l7.5-2.32-9.08-1.16c-.3.08-.69.11-1.05.09Zm-10.55-.28l6.85-.4-7.95-.99,1.1,1.38Zm-27.45-6.64c.09,0,.19-.01.3-.01.34,0,.64.05.89.13l3.39-.22-5.84-1,1.27,1.09Zm-1.92,4.35l6.24.67s.04-.01.07-.02l-.58-.93-5.74.28Zm4.81-2.33c.14-.02.3-.03.45-.03.24,0,.45.02.64.06l2.87-.49-5.19-.36,1.23.82Zm90.34,22.02c.12,0,.22,0,.33.01l5.11-1.75-6.97.34,1.3,1.41c.07,0,.15,0,.22,0Zm-79.12,22.76l.78,1.49,7.61.65-8.38-2.14Zm-11.71,1.44l1.16,2.14,8.72.86-9.88-3Zm21.29-1.6l-6.68-.24,8.83,2.25-2.15-2Zm-32.63,3.44c-.45.06-.99.04-1.39-.06l-5.8.99,16.29,1.62-9.1-2.56Zm11.96.73l-7.92-.78,8.85,2.49-.92-1.7Zm20.16-5.46l.9.83,5.88.21-6.78-1.05Zm12.02-2.36c-.13.06-.29.1-.46.14l.24.43,6.07-.39-5.85-.19Zm91.93-22.72l-8.33-1.72,1.64,1.7,6.69.02Zm-91.5,25.9l-1.14-2.1-9.02.58,10.03,1.55s.08-.02.12-.03Zm-88.55,10.85l-1.58-.11c-.09.03-.18.06-.29.09l1.87.02Zm7.05.57l-8.8-.12.43.81h.04c.4,0,.77.05,1.07.15l7.26-.83Zm-19.25-2.54l8.3.64c.43-.16,1.09-.22,1.66-.15l6.05-1.81-16,1.32Zm45.38-5.68l.57.82c.05,0,.1,0,.15,0,.32,0,.61.04.86.1l4.6-.78-6.19-.13Zm-38.28,7.58l1.37.02c-.09-.02-.17-.05-.24-.08l-1.13.06Zm26.44-4.05c.26,0,.51.02.73.07l5.8-1.26-14.05,1.18,6.25.24c.32-.14.77-.23,1.27-.23Zm-11.59,2.29l-8.28.9,10.34.74-2.05-1.64Zm-.8-1.46s-.04.02-.06.03l1.15.92,6.17-.67-7.26-.28Zm89.14-12.5l-6.67.88,8.69.28-2.02-1.16Zm-100.35,17.18c.07-.02.14-.04.22-.05l-.48-.89-7.26-.1,7.52,1.05Zm137.16-34.58l2.36,1.01c.24-.06.5-.09.8-.09.37,0,.72.06.99.15l2.53-.21-6.68-.85Zm6.29,2.19h.14s-.02,0-.04,0h-.11Zm-5.76.54c-.41.1-.97.11-1.4.04l-4.1.97,13.46.3-7.97-1.31Zm27.45-5.47c-.42.09-.97.09-1.39,0l-3.93.75,12.48.52-7.15-1.28Zm11.44,1.03l-1.35-1.4h-5.26s3.7.88,3.7.88l2.91.51Zm-15.46-1.57l-12.25-.53,7.05,1.3c.42-.09.97-.09,1.38,0l3.27-.63.54-.14Zm-57.03,21.63l5.02-2.1-7.88,1.04,1.97,1.12c.27-.05.59-.07.89-.06Zm25.82-13.78c-.41.09-.95.1-1.38.02l-4.7,1.06,1.7.62,13.25-.03-8.87-1.66Zm-7.84,2.18l5.96.98-2.69-.98h-3.28Zm-24.87,6.24l1.08,2.18s.05,0,.07,0l6.04-2.99-7.2.81Zm9.68-2.08c.28,0,.54.03.77.08l8.43-4.06-18.85,2.11,8.97,1.93c.21-.04.43-.06.68-.06Zm10.65-3.64c-.27,0-.55-.03-.78-.08l-8.44,4.07,10.72-1.19-1.5-2.8Zm-16.99,9.63l4.93-.65-5.84.14.91.51Zm-4.95-7.14l1.38,2.77,7.53-.85-8.91-1.92Zm22.74-2.58s-.05,0-.07.01l1.49,2.8,9.42-1.04-10.84-1.77Zm1.86,5.08l-.92-1.74-8.72.97,9.35.85c.09-.03.19-.06.3-.08Z" style={{fill: 'none', strokeWidth: 0}}></path>
        </clipPath>
        <filter id="filter-real-env" x="0" y="0">
            <feColorMatrix type="saturate" values="1"></feColorMatrix>
            <feComponentTransfer>
                <feFuncR type="linear" slope="1"></feFuncR>
                <feFuncG type="linear" slope="1"></feFuncG>
                <feFuncB type="linear" slope="1"></feFuncB>
            </feComponentTransfer>
        </filter>

        <filter id="filter-real-env-icons" x="0" y="0">
            <feColorMatrix type="saturate" values="1"></feColorMatrix>
            <feComponentTransfer>
                <feFuncR type="linear" slope="1"></feFuncR>
                <feFuncG type="linear" slope="1"></feFuncG>
                <feFuncB type="linear" slope="1"></feFuncB>
            </feComponentTransfer>
        </filter>

        <filter id="filter-data-layer" x="0" y="0">
            <feColorMatrix type="saturate" values="1"></feColorMatrix>
            <feComponentTransfer>
                <feFuncR type="linear" slope="1"></feFuncR>
                <feFuncG type="linear" slope="1"></feFuncG>
                <feFuncB type="linear" slope="1"></feFuncB>
            </feComponentTransfer>
        </filter>

        <filter id="filter-vendor-arrows" x="0" y="0">
            <feColorMatrix type="saturate" values="1"></feColorMatrix>
            <feComponentTransfer>
                <feFuncR type="linear" slope="1"></feFuncR>
                <feFuncG type="linear" slope="1"></feFuncG>
                <feFuncB type="linear" slope="1"></feFuncB>
            </feComponentTransfer>
        </filter>

        <filter id="filter-vendor-layer" x="0" y="0">
            <feColorMatrix type="saturate" values="1"></feColorMatrix>
            <feComponentTransfer>
                <feFuncR type="linear" slope="1"></feFuncR>
                <feFuncG type="linear" slope="1"></feFuncG>
                <feFuncB type="linear" slope="1"></feFuncB>
            </feComponentTransfer>
        </filter>

        <filter id="filter-firewall-layer" x="0" y="0">
            <feColorMatrix type="saturate" values="1"></feColorMatrix>
            <feComponentTransfer>
                <feFuncR type="linear" slope="1"></feFuncR>
                <feFuncG type="linear" slope="1"></feFuncG>
                <feFuncB type="linear" slope="1"></feFuncB>
            </feComponentTransfer>
        </filter>

        <filter id="filter-attack-layer" x="0" y="0">
            <feColorMatrix type="saturate" values="1"></feColorMatrix>
            <feComponentTransfer>
                <feFuncR type="linear" slope="1"></feFuncR>
                <feFuncG type="linear" slope="1"></feFuncG>
                <feFuncB type="linear" slope="1"></feFuncB>
            </feComponentTransfer>
        </filter>

        <filter id="filter-exposures-layer" x="0" y="0">
            <feColorMatrix type="saturate" values="1"></feColorMatrix>
            <feComponentTransfer>
                <feFuncR type="linear" slope="1"></feFuncR>
                <feFuncG type="linear" slope="1"></feFuncG>
                <feFuncB type="linear" slope="1"></feFuncB>
            </feComponentTransfer>
        </filter>

        <filter id="filter-solution-1" x="0" y="0">
            <feColorMatrix type="saturate" values="1"></feColorMatrix>
            <feComponentTransfer>
                <feFuncR type="linear" slope="1"></feFuncR>
                <feFuncG type="linear" slope="1"></feFuncG>
                <feFuncB type="linear" slope="1"></feFuncB>
            </feComponentTransfer>
        </filter>

        <filter id="filter-solution-2" x="0" y="0">
            <feColorMatrix type="saturate" values="1"></feColorMatrix>
            <feComponentTransfer>
                <feFuncR type="linear" slope="1"></feFuncR>
                <feFuncG type="linear" slope="1"></feFuncG>
                <feFuncB type="linear" slope="1"></feFuncB>
            </feComponentTransfer>
        </filter>

        <filter id="filter-solution-3" x="0" y="0">
            <feColorMatrix type="saturate" values="1"></feColorMatrix>
            <feComponentTransfer>
                <feFuncR type="linear" slope="1"></feFuncR>
                <feFuncG type="linear" slope="1"></feFuncG>
                <feFuncB type="linear" slope="1"></feFuncB>
            </feComponentTransfer>
        </filter>

        <filter id="filter-security-line" x="0" y="0">
            <feColorMatrix type="saturate" values="1"></feColorMatrix>
            <feComponentTransfer>
                <feFuncR type="linear" slope="1"></feFuncR>
                <feFuncG type="linear" slope="1"></feFuncG>
                <feFuncB type="linear" slope="1"></feFuncB>
            </feComponentTransfer>
        </filter>
    </defs>

        <g transform="translate(-10 -15)">


        <g class="real-env"  filter="url(#filter-real-env)">
            <path d="m297.62,515.22l-5.05.37,4.46.76c.17-.04.38-.07.59-.07.3,0,.58.05.8.13l5.1-.39-4.53-.75c-.42.1-1.01.08-1.37-.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="336.65 513.89 331.92 515.57 336.58 514.86 336.65 513.89" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m320.98,516.61c.17.01.32.04.46.08l4.33-.48-4.9-.46.11.86Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m329.18,516.78c-.37.09-.9.08-1.25-.03l-4.83.54,3.54.83,7.49-.56-4.95-.79Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m351.49,524.32l.03,1.01c.13.01.26.03.37.06l4.69-.77-4.6-.41c-.15.05-.31.08-.49.1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m327.9,518.41l1.02.24c.13-.02.28-.04.44-.04s.33.02.47.04l2.66-.58-4.59.34Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m321.27,518.14c.12-.02.25-.02.38-.02.44,0,.81.1,1.03.25l.34.02.47-.03-4.03-.71,1.8.49Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m311.66,515.23c-.42,0-.78-.09-1-.23l-1.62-.09,3.55.87c.13-.02.27-.03.42-.03.48,0,.88.12,1.09.29l1.62.18-3.7-1.01c-.11.02-.23.02-.35.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m320.74,514.73l.08.61,3.83.37-3.88-.98h-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m336.43,517.02l.12-1.76-6.03.93,5.57.89c.1-.03.22-.05.34-.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m350.5,524.26l-5.52.79,5.42.41c.15-.06.33-.1.53-.12l-.03-1.01c-.15-.01-.28-.04-.41-.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m346.2,528.17l12.8-1.28-6.89-.51c-.3.11-.73.16-1.13.12l-4.77,1.66Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="356.26 522.56 352.79 522.76 356.92 523.2 356.26 522.56" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="342.39 521.23 348.35 522.22 347.21 521.06 342.39 521.23" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m345.49,519.83l-3.56,1.03,4.92-.17-.83-.84c-.17.01-.37,0-.54-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m330.49,519.41l3.96.77h.06s-4.02-.79-4.02-.79c0,0,0,.01-.01.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="335.9 520.05 342.04 519.46 332.56 519.4 335.9 520.05" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m338.89,520.63c.26-.06.59-.07.88-.03l2.76-.8-5.28.51,1.65.32Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m328.22,515.75c.19-.03.41-.04.6-.02l5.95-2.12-12.36.67,5.8,1.47Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m270.83,508.14l-5.1,2.1s.07.03.1.05l5.15-2.12-.15-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m265,511.19l-1.09,3.3,6.89-2.16-5.48-1.18c-.1.02-.21.03-.33.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m271.41,515.33c.15-.05.32-.09.52-.11l.19-2.39-6.55,2.05,5.84.45Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m272.08,516.79s.04,0,.06.01l4.13-.75-3.15.07c-.21.12-.52.19-.87.2l-.18.46Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m256.87,507.16l-4.18,1.24,3.84.55.91-.25-.43-1.52s-.09,0-.14-.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m272.7,512.81l-.19,2.37,1.18-.31,4.67-1.4-5.29-.72c-.12.03-.24.05-.38.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m306.69,534.16l.73-.93c-.2-.06-.35-.14-.47-.23l-6.01-.63,5.27,1.79c.15-.01.31-.02.47-.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m250.17,511.48l4.36,1.19c.11-.02.23-.02.34-.02.13,0,.26,0,.38.03l7.62-1.95-4.34-.68c-.3.07-.72.08-1.04.02l-7.32,1.42Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="258.85 508.72 258.1 508.93 258.12 509.01 258.85 508.72" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m280.44,512.78s.1,0,.15.01l3.92-1.25-4.34.33.27.9Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m286.93,511.7l-4.13,1.31,4.99-.29-.58-1.01c-.09,0-.19,0-.28-.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m288.16,513.63s.09-.03.15-.04l-.29-.5-3.66.21,3.8.33Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="288.4 512.68 292.89 512.43 287.8 511.65 288.4 512.68" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m292.46,511.56l2.66.41c.17-.04.37-.07.59-.07.28,0,.55.04.76.12l2.52-.19-6.52-.27Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m275.24,512.26l4.45.6c.05-.02.11-.03.17-.04l-.26-.9-4.36.33Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="274.54 511.92 279.48 511.54 279.05 510.07 274.54 511.92" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m296.2,512.97c-.27.05-.63.06-.92.01l-3.78.9,6.12.44c.42-.15,1.13-.15,1.55,0l2.71-.21-5.69-1.14Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m275.42,515.25l10.37-1.05-4.76-.41c-.28.09-.69.13-1.03.09l-4.58,1.37Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m357.53,523.12c.08,0,.15,0,.23,0,.14,0,.27,0,.4.03l3.19-.87-4.42.25.6.6Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m364.86,538.2l-7.78-1.58c-.24.05-.52.07-.79.05l-7.2,2.97,15.77-1.44Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m365.47,533.3c-.26.07-.59.09-.9.07l-5.87,2.34,14.91-1.06-8.15-1.35Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m355.85,535.5l-.61-1.07-5.91.91,6.19.26c.1-.04.21-.08.33-.1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m353.03,536.32l-5.82-.25c-.33.14-.85.2-1.31.15l-5.85,1.83,12.99-1.73Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="384.3 531.42 379.73 530.9 384.94 532.21 384.3 531.42" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m345.27,535.19c.26-.12.65-.19,1.06-.19l5.09-2.51-12.96,2.52,6.81.17Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m375.81,534.06l-.29-1.03-6.79-.05,6.85,1.13c.07-.02.15-.03.23-.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="383.81 530 384.67 531.07 388.56 531.51 383.81 530" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="383.17 532.69 382.67 532.56 375.65 531.37 376.01 532.64 383.17 532.69" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m325.64,533.81l5.48-1.5h-.19l.38-.06-6.55-.69c-.09.03-.17.05-.27.07l.8,2.15c.12,0,.24.01.35.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m323.73,530.48l.15-2.09-6.46.51,6.12,1.6c.06,0,.12-.02.19-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m315.97,529.42s-.04,0-.06,0l.16,1.1,4.95.22-5.05-1.32Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="316.23 533.7 313.22 533.41 316.42 534.12 316.23 533.7" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m313.32,534.32l-4.63-1.04c-.2.04-.45.05-.67.04l-.73.93c.1.03.2.07.28.11l5.76-.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m350.63,532.25l-5.33.08c-.28.16-.78.25-1.26.22l-4.78,1.91,11.37-2.21Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m343.82,531.37l-.17-.68-5.95.94,5.51-.07c.16-.08.37-.15.61-.19Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m334.64,532.47c-.1.06-.23.1-.38.14l.25.39,4.58-.59-4.45.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m385.82,532.27c.28,0,.53.03.75.1l2.83-.38-4.38-.49.63.78c.05,0,.11,0,.17,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m360.79,523.3l4.3-.27-.57-.56c-.2.02-.42,0-.62-.02l-3.11.85Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m388.49,515.32c-.3.1-.74.14-1.11.09l-4.33,1.19,4.09.59,1.22.07c.33-.13.85-.18,1.27-.11l5.2-1.26-1.28-.15-5.07-.42Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m397.77,516.23c-.24.03-.51.02-.74-.02l-3.39.82-1.23.37,11.15-.3-2.37-.47-3.41-.39Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="406.72 517.73 401.33 518.59 407.82 518.95 407.55 517.89 406.72 517.73" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="381.55 519.72 380.52 518.66 375.24 519.14 381.55 519.72" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m250.75,507.97h.02c.1,0,.2,0,.28.02l3.81-1.12-4.74.08.63,1.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m402.49,519.05l5.57,1.18s.06,0,.08-.02l-.22-.86-5.43-.3Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m360.8,525.47l-.43-.43c-.3.03-.63,0-.88-.06l-3.81.63,5.12-.14Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m364.44,521.35s.08,0,.12,0l5.01-1.73-5.45.43.33,1.29Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m370.68,515.61l-5.53,2.08,2.43.47,3.85.58c.29-.07.67-.1,1-.05l5.35-1.51-6.48-1.6c-.19.03-.41.04-.61.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m392.13,532.69c-.34.02-.69-.01-.97-.09l-3.44.46,10.7,2.08-6.3-2.46Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m406.35,522.38l3.62.51c.19-.05.42-.08.67-.08.27,0,.52.03.72.1l2.97-.36-7.99-.17Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="406.67 528.01 400.14 528.12 407.93 530.15 406.67 528.01" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m406.11,530.77l-6.64-.54.78,1.31h.05c.24,0,.47.03.67.08l5.14-.84Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m387.42,530.18l4.13,1.3c.11-.01.23-.02.35-.02.43,0,.81.08,1.05.22l3.6.03-9.13-1.53Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m400.28,532.75c-.41,0-.77-.08-1.02-.22l-3.66-.02,4.96.84-.28-.6Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m406.5,526.65l.56.97,6.18-.11-6.65-.88s-.06.02-.09.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m411.17,523.92c-.41.08-.95.06-1.3-.06l-1.85.17,3.86.27-.71-.38Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m400.51,525.15l4.58.48c.38-.13.98-.15,1.4-.05l3.08-.55-9.05.11Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m264.32,510.15c.2-.05.44-.07.68-.06l4.51-1.86-9.47,1.25,4.28.67Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m152,529.04l6.2-2.05-11.75,1.47,4.54.65c.28-.08.67-.11,1.01-.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="177.12 530.8 169.58 531.78 175.34 532.22 177.12 530.8" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="145.2 525.43 140.92 526.93 144.79 526.38 145.2 525.43" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m143.5,528.04c.19-.05.4-.08.63-.08l.49-1.15-4.85.68,3.73.56Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m156.56,530.72l-4.16-.58c-.24.07-.54.1-.84.08l-.9,1.2,5.91-.71Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="160.09 529.24 159.6 530.06 165.2 528.89 160.09 529.24" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m166.62,531.14c.28,0,.53.04.75.1l8.38-1.09-5.49-1.21c-.33.07-.76.06-1.09,0l-7.81,1.63,4.55.66c.2-.05.45-.09.71-.09Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m158.99,530.02l.44-.74-4.81.34,3.59.49c.23-.06.49-.1.78-.09Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="160.74 527.12 154.28 529.26 159.68 528.88 160.74 527.12" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="145.26 526.71 144.77 527.87 150.04 526.04 145.26 526.71" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m138.63,517.67l-.51.57,4.7-.47-3.24-.22c-.25.1-.6.14-.95.12Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m137.9,516.71c.28-.13.75-.2,1.17-.15l.34-.29-3.52.41,2.01.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m152.8,517.54l.22-.88-4.37.75,3.51.25c.18-.07.4-.11.65-.12Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="133.42 515.43 132.57 516.32 137.82 515.07 133.42 515.43" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m137.93,527l5.02-1.76-11.21,1.23,5.18.61c.28-.08.66-.12,1.01-.09Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m145.87,518.17l-7.86,2.17,3.81.36c.3-.1.74-.14,1.12-.09l7.72-2.27-3.62-.27c-.31.12-.78.16-1.17.1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m130.55,523.67c.27-.07.63-.08.94-.05l3.08-2.46-8.67,1.7,4.66.8Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m135.21,520c.22-.05.47-.07.72-.05l1.07-1.2-5.86.59,3.46.58.62.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m128.61,527.4h4.09s-2.84-.34-2.84-.34c-.27.08-.65.12-.98.09l-.27.25Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m218.66,541.15c.34,0,.64.05.88.13l4.33-.41-9.52-.23-.16.02,3.73.58c.22-.06.47-.09.74-.09Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m225.63,544.07l-6.48-1.68c-.17.03-.36.04-.56.04l-.88,1.56,7.91.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="211.74 541.15 210.4 540.98 208.93 541.11 208.46 541.68 214.82 541.63 211.74 541.15" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m211.71,539c.36,0,.69.06.93.16l4.04-.25-3.47-.52c-.49.13-1.22.1-1.64-.08l-4.68.23,4.06.56c.22-.06.48-.1.76-.1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m226.92,546.49l.82-1.61s-.06-.01-.09-.02l-8.37,1.46,7.64.18Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m238.77,547.56c-.33.05-.72.05-1.04,0l-9.19,2.24,16.91-.46-6.68-1.77Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m247.6,548.81l.21-1.19-6.37-.32,5.84,1.54c.1-.02.21-.03.32-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="235.75 547.08 227.34 546.89 226.05 549.44 235.75 547.08" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m174.56,532.85l.33-.27-3.91-.3,2.66.59c.28-.05.62-.06.92-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m208.35,537.65l-5.25-.51-.2.62c.17.03.33.07.46.13l4.99-.24Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m175.58,532.63l-.45.36s.04.02.06.03l4.42-.08-4.03-.31Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m202.93,535.81c-.12-.02-.24-.05-.34-.08l-5.05.49,5.1.49.28-.9Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m183.35,535.37l6.32.31-6.14-.81-.43.24c.12.07.21.16.25.25Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m230.95,536.51l.08-1.29-6.28.29,5.82,1.06c.12-.03.24-.05.38-.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m193.35,536.51c-.15-.08-.24-.17-.29-.27l-6.72-.34,6.53.91.48-.3Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m197.4,541.36l1.77-1.35s-.03-.01-.05-.02l-7.27.16,4.64,1.23c.28-.05.62-.05.91-.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m191.17,537.53c.18,0,.35.02.51.04l.68-.43-5.86-.82,4.26,1.23c.13-.02.27-.03.42-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="195.3 539.24 190.69 538.76 189.8 539.36 195.3 539.24" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m241.18,511.93c.1.01.2.03.29.05l4.1-.58-4.35-.31-.05.84Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m222.1,512.35c.16-.03.34-.05.53-.05.34,0,.65.06.87.16l2.19-.06-4.91-.29,1.32.24Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m225.15,514.46l3.36.71c.12-.03.26-.04.41-.05l.22-.62c-.15-.03-.28-.07-.4-.12l-3.58.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m224.11,509.83l-3.42-.25,3.2.63c.06-.01.14-.02.22-.03v-.34Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m234.24,515.35l-4.12-.85c-.12.03-.26.04-.4.05l-.22.62c.19.03.35.08.48.15l4.26.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m228.48,518.65l-7.3,1.5,4.32.46c.37-.12.92-.14,1.33-.05l7.05-1.35-4.2-.59c-.34.09-.83.1-1.2.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m214.65,512.68h3.33s1.19-.06,1.19-.06l-2.65-.49c-.29.06-.67.07-.98.02l-.89.53Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m218.48,509.02l5.64.42.02-1.1c-.11-.01-.21-.03-.3-.05l-5.36.73Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m213.01,514.46c.08.02.16.04.23.06l4.12-.37-4.14-.18-.22.49Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m216.02,509.54l.18,1.54c.17.01.33.04.46.08l5.09-.55-5.59-1.1s-.09.02-.13.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m248.56,506.11l-2.46.5,3.17-.05-.26-.42c-.13,0-.31-.01-.45-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m212.52,515.56l-.34.72,5.47.22-4.66-.98c-.15.03-.31.05-.48.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="249.89 506.56 253 506.5 249.6 506.08 249.89 506.56" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m241.28,510.25l-.03.46,3.25.23-3.08-.71s-.09.02-.15.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="246.13 507 247.86 507.49 250.11 507.96 249.5 506.95 246.13 507" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m236.13,517.91v-.26c-.11-.02-.23-.04-.34-.07l-2.41.34h2.75Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m229.3,517.56c.14.01.27.03.38.07l4.27-.59-4.38-.82c-.08.02-.17.03-.27.04v1.3Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m237.73,515.25c.23-.05.52-.06.77-.03l.12-.1c-.08-.03-.15-.07-.2-.11l-2.88-.21,2.2.46Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m235.89,516.56c.22-.05.5-.07.76-.05l-1.85-.15,1.09.2Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m210.21,519.28l-6.03,1.3,11.7-.4-4.61-.9c-.32.07-.74.07-1.06,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="164.11 521.73 171.75 520.63 170.13 520.21 166.29 519.45 164.11 521.73" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m175.94,520.84l6.22.89.51-1.82c-.07-.01-.14-.03-.21-.04l-6.52.98Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m211.27,518.22s.02,0,.03,0l7.19-1.31-6.49-.25-.73,1.56Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="182.73 521.81 187.57 522.5 188.28 522.4 183.24 519.97 182.73 521.81" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m165.84,518.32c.19-.05.41-.08.65-.09l.35-.84-4.8.43,3.8.49Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="150.15 520.25 153.4 519.24 150.93 519.73 150.15 520.25" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m154.58,520.92c.29-.16.8-.24,1.26-.19l2.19-1.99-7.15,2.2,3.7-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m159.08,518.44l-2.4,2.17,7.23-1.64-1.55-.31-2.33-.3c-.27.08-.63.11-.95.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m182.42,522.91c.18.03.34.08.48.14l.9-.03,2.37-.32-3.54-.51-.2.72Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m200.28,521.43l-6.39,1.52,12.38-.2-5.09-1.32c-.28.04-.62.04-.9,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="187.46 522.91 187.64 522.9 187.57 522.89 187.46 522.91" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m205.29,521.62l2.85.74c.27-.04.59-.04.85,0l6.79-1.8-12.42.43,1.93.63Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="150.62 519.39 150.99 519.15 149.25 519.66 150.62 519.39" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m190.99,522.6h.08c.17,0,.33.02.47.04l2.94-.7-3.78.52.3.14Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m184.32,523.79l5.63,1.92c.05,0,.1,0,.15,0l.52-1.95c-.18-.03-.34-.08-.48-.14l-5.82.17Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m191.03,525.81l6.01-.6-5.55-1.46c-.09.01-.19.02-.28.03l-.52,1.95c.12.02.24.05.34.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m189.92,526.87l-2.65,2.22,8.56-.8-5.18-1.43c-.23.03-.49.03-.73,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m181.72,524.05l-2.28,2.2s.06.02.09.04l8.38-.3-5.66-1.94c-.17.02-.36.02-.53,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m296.6,523.81c.07.02.14.03.2.05l6.98-.96-5.98-1.74c-.09.01-.18.02-.27.02l-.92,2.63Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m297.75,520.04c.13.01.25.04.36.07l6.34-.85-2.3-.66-4.28-.99-.13,2.43Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m306.1,518.84c.11-.02.24-.02.37-.02.32,0,.61.05.83.14l4.62-.27-10.57-1.2,4.76,1.36Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m268.61,517.07l1.95-.09c.21-.13.55-.22.93-.23l.17-.44-3.33.76h.27Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m271.58,517.89c-.24,0-.46-.03-.65-.08l-3.02.43,2.79.06c.38-.18,1.08-.22,1.55-.1l2.94-.44-2.71-.05c-.23.11-.54.17-.91.17Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m309.05,519.67l2.08.58,3.56.81.21-1.64c-.17-.02-.33-.06-.46-.12l-4.24.25-1.16.11Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m235.69,518.66c.12-.03.26-.06.41-.07v-.29s-2.95,0-2.95,0l2.53.36Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m278.95,517.07c.24-.12.62-.19,1.01-.17l.22-.29-3.94.42,2.72.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m280.12,518.03l-.02.3,3.51-.07-3.02-.32c-.14.04-.3.08-.47.09Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m290.32,518.42l6.66,1.63c.06,0,.13-.02.19-.02l.13-2.55-.44-.1-6.54,1.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="331.88 521.35 332.14 521.59 334.06 521.73 331.97 521.35 331.88 521.35" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m329.37,519.75c-.44,0-.81-.1-1.03-.25l-1.61-.1,3.6.81c.15-.03.31-.04.48-.04.43,0,.8.09,1.02.24l.29.02.95-.09-3.19-.63c-.16.03-.33.05-.52.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m338.41,521.48l-1.66-.08,2.45.44s.08-.02.12-.02l-.03-.11c-.37-.02-.67-.1-.88-.23Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="335.8 520.45 336.75 520.63 336.88 520.64 335.86 520.44 335.8 520.45" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m312.17,516.73l-1.3-.09-1.23-.03,5.34,1.7c.09-.01.19-.02.28-.02.35,0,.66.06.89.17l2.78-.08-5.56-1.52c-.41.05-.9,0-1.21-.12Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m315.49,519.43l-.22,1.75c.15.02.28.05.4.09l.1.02,5.8-.36-5.88-1.53c-.06,0-.13.02-.2.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m320.77,519.09l-1.62.05,5.7.68-2.74-.61c-.44.08-1.02.03-1.35-.12Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m323.72,520.62c.13-.02.27-.03.42-.03.31,0,.6.05.82.14l2.72-.18-7.89-.95,3.93,1.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m332.21,523.65s.02,0,.02,0l4.14-.54-3.81.05-.35.49Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m252.04,516.27l-3.44-1.04c-.42.05-.92-.02-1.2-.16h-3.86l8.5,1.2Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m243.91,519.22c.1-.04.21-.07.33-.1l-.19-.47c-.23,0-.43-.03-.61-.08l-3.09.43,3.55.21Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m243.42,517.58c.1-.03.22-.05.34-.07h-.92s.58.07.58.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m238.74,516.29l.55.05-.44-.07s-.08.02-.12.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m239.19,515.24l-.11.1c.11.05.21.1.28.17l2.47.29-2.04-.57c-.19.02-.4.03-.6.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m236.26,520.13l4.23-.33-3.27-.2c-.22.08-.49.14-.8.14l-.16.38Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="235.62 521.65 241.37 520.12 236.09 520.53 235.62 521.65" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m237.39,516.69s.02.01.03.02h1.72s-1.61-.12-1.61-.12l-.14.1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m236.68,518.59c.13.02.25.04.36.07l2.71-.38h-3.06s-.01.31-.01.31Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m247.99,514.15s.02,0,.03,0l.02-1.11-4.58-.24,4.53,1.35Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m254.44,513.71l-3.73.85,4.32.12-.28-.93c-.11,0-.21-.02-.31-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="255.64 514.69 260.29 514.82 255.33 513.72 255.64 514.69" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="250.64 514.95 255.58 516.44 255.16 515.07 250.64 514.95" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m263.05,515.63l-4.6,1.2.65.05,3.63.07,6.78-1.01-5.34-.41c-.3.1-.75.14-1.12.09Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m256.65,513.17l6.32,1.41c.1-.02.22-.03.33-.04l1.1-3.35-7.75,1.98Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m248.04,512.65v-.7c-.09-.01-.19-.03-.28-.05l-3.83.54,4.12.21Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m248.64,511.95v.73s3.38.17,3.38.17l-3.33-.91s-.04,0-.06,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m248.6,514.15s.1.01.15.02l3.92-.89-4.05-.21-.02,1.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m279.13,519.61c.1-.02.22-.04.33-.05l.05-.83-4.83.1,4.45.78Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m289.39,532.61c-.23.02-.48,0-.69-.03l-6.85,1.75,14.19.92-6.66-2.64Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="275.14 533.98 270.76 533.41 269.68 537.23 277.98 534.5 275.14 533.98" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m280.29,533.8l5.85-1.49-12.64.5,5.66,1.03c.33-.08.77-.09,1.13-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m269.07,537.26l1.11-3.88-7.63,2.52,6.1,1.41c.13-.02.27-.04.42-.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m261.19,535.36l6.95-2.29-2.55-.34-3.38-.27c-.31.12-.78.16-1.19.12l-7.79,2.59,6.67.34c.33-.14.84-.2,1.28-.15Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="288.34 530.52 290.54 530.73 288.14 530.27 288.34 530.52" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m289.02,531.38c.05,0,.1,0,.16,0,.37,0,.69.06.94.16l3.01-.16-4.45-.44.35.44Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m288.75,528.86l-.47.37c.16.07.28.16.35.26l.23.05,6.39.23-6.51-.91Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m296.98,532.18c-.31-.01-.59-.07-.8-.15l-4.17.23,5.22.83-.26-.91Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m240.57,533.98l.64-2.03-7.65.79,6.53,1.29c.15-.03.31-.05.48-.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m231.62,535.2l-.09,1.32s.09,0,.13.02l6.06-1.61-6.1.27Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m231.99,537.63c-.25.08-.56.12-.89.11l-.41.62,5.27-.28-3.97-.45Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="230.41 538.76 230.62 538.74 230.42 538.76 230.41 538.76" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m232.06,533.31c-.1.02-.22.04-.33.05l-.09,1.45,6.46-.29-6.04-1.2Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m299.04,529.49c.44,0,.82.09,1.06.24l3.3.09-4.79-1.51c-.1.02-.22.02-.34.02-.42,0-.8-.09-1.04-.23l-3.88-.1,5.28,1.51c.13-.02.26-.03.4-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m250.73,534.84l.85-3.53-8.8,3.06,7.23.61c.2-.07.44-.12.72-.13Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m251.81,535.91c-.25.1-.58.17-.96.16l-.39.73,6.38-.64-5.03-.26Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="241.82 531.9 241.19 533.92 249.2 531.14 241.82 531.9" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="307 531.53 304.07 531.07 307.34 532.01 307 531.53" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m340.95,525.74l-3.73,1.18,4.59-.39-.48-.77c-.13,0-.26,0-.38-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m335.03,527.87c-.15.04-.31.07-.49.08l-.55,3.5,7.6-2.66-6.56-.92Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m342.73,528.12s.04,0,.06-.02l-.75-1.21-5.02.42,5.7.8Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m334.34,526.76c.12,0,.23,0,.33.02l4.38-1.38-6.01.11,1.1,1.26c.06,0,.12,0,.19,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="305.86 528.42 300.96 528.1 306.05 529.7 305.86 528.42" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m339.87,521.68l.03.11c.37.02.69.1.9.23l1.98.08-2.76-.46s-.09.02-.15.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m342.14,523.32c-.15.05-.32.08-.51.1l-.05,1.16c.14.02.26.04.38.07l5.77-.83-5.59-.51Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="324.45 528.34 324.31 530.46 331.87 527.75 324.45 528.34" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m341.92,525.69l.49.79,5.14-.44-5.44-.41c-.06.02-.13.04-.19.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m343.29,529.24s-.09,0-.13,0l-5.95,2.08,6.35-1-.27-1.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m340.51,524.69c.15-.05.32-.08.5-.1l.05-1.16c-.14-.02-.27-.04-.38-.07l-5.73.76,5.56.58Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m324.37,524.87c.22,0,.41.02.59.07l2.63-.49-3.52.1.22.32s.05,0,.08,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="309.5 531.52 307.22 530.94 307.4 531.19 309.5 531.52" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m306.54,530.89c-.47.02-.9-.08-1.15-.23l-1.7-.05,2.98.46-.13-.19Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m309.19,532.32h2.97s-4.44-.68-4.44-.68l.33.47c.44-.02.87.07,1.14.21Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m323.45,523.57s-.03.01-.05.02l.4.59,3.76-.11-4.11-.5Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="324.03 526.1 317.83 528.48 323.9 528 324.03 526.1" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m322.14,525.82l-14.07.99,6.92,1.5c.23-.04.5-.06.75-.04l6.39-2.45Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="279.98 535.03 279.47 537.84 286.43 537.93 279.98 535.03" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m212.38,537.24l.99-3.55s-.08-.02-.12-.02l-8,1.63,6.84,1.97c.09-.02.19-.02.28-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m220.29,535.41l-6.05-1.72c-.09.01-.19.02-.28.02l-.99,3.55h.02l7.31-1.86Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="230.51 537.68 225.36 538.63 230.03 538.39 230.51 537.68" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m203.81,535.82c-.1.01-.2.02-.3.03l-.29.92,5.81.56-5.22-1.5Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m208.82,533.69l3.08-.76-4.97-1.76c-.31.03-.66,0-.93-.07l-8.82,1.42,5.82,2.06,5.82-.9Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m228.48,542.13l.15-.72c-.17-.02-.32-.06-.46-.1l-5.38.51,5.7.31Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m235.5,546.69l-6.67-1.79c-.16.02-.33.03-.51.03l-.79,1.57,7.96.18Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m238,546.3l.09-2.8c-.17-.02-.32-.04-.46-.08l-7.03.99,7.17,1.92c.07-.01.15-.02.22-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m227.84,543.68c.11-.02.22-.03.34-.03l.22-1.13-6.45-.35,5.88,1.51Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m169.65,527.77l1.13-3.12-7.42,1.73,5.88,1.42c.13-.02.27-.03.41-.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m240.41,538.6c-.42.12-1.05.13-1.48.02l-5.81.88,4.46.38c.42-.15,1.09-.18,1.57-.06l1.98-.15,4.12-.44-4.84-.62Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m176.91,526.61l-5.37-1.92c-.06,0-.12,0-.18,0l-1.13,3.12s.06.02.1.02l6.58-1.23Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m178.24,527.3c-.08-.01-.16-.03-.24-.04l-5.88,1.1,5.95.43.17-1.49Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m191.09,535.48l-4.83-1.65c-.27.03-.59.02-.84-.03l-1.33.76,7,.92Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m167.68,528.33l-5.7-1.38c-.16.03-.34.04-.53.04l-1.11,1.85,7.34-.51Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m185.95,532.62c.32,0,.61.05.84.13l4.58-.41,1.02-.13-11.46-1.43,4.8,1.85c.08,0,.15,0,.23,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m183.65,532.86l-5.23-2.02c-.19.02-.4.01-.58-.01l-1.81,1.45,7.63.58Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m177.97,529.64l.06-.47-4-.29,3.63.8c.1-.02.2-.03.31-.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m161.45,525.79l.34-.81-5.34.38,4.3.53c.2-.06.44-.09.7-.1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m271.43,538.11l6.82,2.19c.06,0,.12-.01.18-.02l.38-2.07-7.38-.1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m268.79,538.49s-.02,0-.03,0l-8.7,2.44.63.19.37.06h-.17s6.77,2.03,6.77,2.03c.08-.01.15-.02.23-.02l.9-4.7Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="279.4 535.02 271.21 537.72 278.89 537.83 279.4 535.02" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m241.53,535.08c-.34.12-.87.16-1.3.1l-6.71,1.79,5.32.61c.36-.12.91-.14,1.33-.07l7.99-1.87-6.63-.56Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m278.49,545.88l-.05-1.63-7.45-.17,7.3,1.83c.07-.01.13-.02.2-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m279.4,538.22l-.38,2.08s0,0,.02,0l6.91-2-6.55-.09Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="297.35 533.5 292.25 532.69 297.73 534.86 297.35 533.5" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m288.17,537.52c.17,0,.34.01.49.04l7.51-1.91-14.4-.94,6.26,2.81h.14Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m303.36,531.8l-3.92-1.13c-.13.02-.26.03-.4.03-.64,0-1.16-.19-1.3-.46l-6.41-.23,5.17,1c.18-.04.38-.06.6-.06.53,0,.99.13,1.21.33l5.05.53Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m268.58,544.42c-.09.02-.2.03-.3.03l-.09.75,6.06.63-5.67-1.42Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m248.71,541.36c.16.02.31.05.44.1l4.56-.47-4.89-.14-.1.51Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m249.79,538.78l8.74-2.4-8.29.83-.78,1.47c.12.03.23.06.33.1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m248.89,540.47l5.2.14-4.58-.8c-.15.03-.32.06-.5.07l-.12.59Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="250.25 536.05 244.49 537.4 249.81 536.87 250.25 536.05" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m248.7,545.11c.19.02.37.05.53.09l6.8-.91-4.63-1.11-2.79-.56.1,2.49Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m267.51,545.87l.04-.34-3.8-.39,3.39.77c.12-.02.24-.03.37-.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m267.69,544.44c-.22-.03-.42-.08-.58-.14l-4.89.29,5.39.56.09-.71Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m259,544.99c-.42.08-.97.06-1.35-.05l-5.62.76,12.18.49-5.21-1.19Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m152.55,524.91c.23-.08.52-.13.83-.13l1.49-2.75-7.05,2.47,4.73.41Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m182.41,529.5l-3.81-.28-.05.44c.19.02.35.06.49.11l3.37-.27Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m189.32,526.72l-8.51.31,5.26,1.96c.08,0,.16-.01.24-.01.12,0,.23,0,.33.02l2.7-2.27s-.02,0-.03,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m163.3,522.86l-.72,1.67,6.59-.47-5.42-1.24c-.14.02-.29.04-.45.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m181.1,523.91l-7.69.46,4.92,1.76c.17-.02.35-.02.52,0l2.28-2.2s-.02,0-.03-.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m185.48,530.06l-4.35.36,10.62,1.32-5.08-1.57c-.41.05-.88,0-1.19-.11Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m170.77,523.55c.19-.04.42-.05.63-.04l1.73-2.25-7.61,1.09,5.25,1.2Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m173.73,521.33l-1.74,2.27c.06.02.11.03.16.05l7.6-.45-5.61-1.88c-.13.02-.28.02-.41.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m248.03,546.37c-.16-.02-.3-.05-.43-.09l-5.6.66,5.88.29.15-.86Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m181.67,522.89c.05,0,.11,0,.16-.01l.22-.77-4.7-.67,4.33,1.45Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m178.65,528.84l5.33.39-5.14-1.91h-.02l-.17,1.52Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m208.16,523.47l-5.91,1.58,11.37-.5.22-.07-4.76-1.03c-.28.05-.64.06-.93.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m226.01,521.67l-7.38,2.65,2.49.4,3.18.34c.3-.1.71-.13,1.08-.1l7.78-2.57-6.19-.81c-.27.08-.63.11-.96.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m198.95,524.81c.27-.04.59-.04.85,0l6.23-1.66-12.67.2,5.59,1.46Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m159.07,526.49l-4.96-.61c-.28.08-.67.12-1.01.08l-5.81,2.01,11.79-1.48Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m195.04,531.8c.15-.02.3-.03.47-.02l1.06-1.51-7.69-.37,6.16,1.9Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m196.83,529.9l.64-.91s-.08-.02-.12-.03l-6.82.64,6.3.3Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m197.75,527.91c.11-.02.23-.03.35-.03l.45-1.16-5.69-.17,4.88,1.35Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m198.7,526.35l.17-.43c-.09-.02-.18-.04-.26-.07l-3.77.38,3.87.11Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m234.36,521.74c.19-.05.41-.09.66-.09l.45-1.08-6.32.49,5.21.68Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m139.25,523.8l1.08-.96-6.12,1.03,3.83.1c.3-.14.78-.2,1.21-.16Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m136.52,520.98c-.29.1-.72.14-1.08.1l-3.38,2.69s.07.03.1.05l8.73-1.47.85-.75c-.1-.04-.19-.09-.26-.14l-4.96-.47Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m143.48,521.58c-.29.13-.76.19-1.17.15l-.53.47,3.36-.56-1.66-.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="130.64 525.8 135.65 524.69 134.98 524.67 131.53 524.75 130.64 525.8" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m145.88,524.14l.65-.97-5.06.94,3.45.18c.24-.1.6-.16.96-.15Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m139.83,524.81c-.35.14-.93.19-1.37.1l-3.77.84,7.48-.82-2.33-.12Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m146.6,525.2c-.21.07-.47.12-.76.12l-.41.97,5.28-.74-4.12-.36Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="140.4 523.42 144 522.22 141.23 522.69 140.4 523.42" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m155.56,521.89l-1.51,2.8,7.21-2.27-4.98-.63c-.2.06-.44.09-.73.1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="162.42 524.93 162.04 525.82 167.36 524.57 162.42 524.93" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="146.83 522.72 147.26 522.09 143.52 523.33 146.83 522.72" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="156.1 524.99 161.97 524.57 162.68 522.92 156.1 524.99" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m235.63,520.17l.2-.48s-.03,0-.04,0l-4.15.8,3.99-.31Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m157.95,521.2l4.58.57c.26-.08.62-.11.94-.09l2.1-2.21-7.63,1.73Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m147.17,520.92c.31-.14.81-.2,1.24-.14l.19-.06,1.15-.76-4.59.9,2.01.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="146.64 523.95 151.44 522.26 147.25 523.04 146.64 523.95" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m148,521.93l-.44.66,4.73-.88-3.24.02c-.24.13-.63.21-1.05.2Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m178.19,534.96l-3.54-.93c-.31.05-.69.04-.98-.01l-.78.47,5.31.47Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m248.39,547.65l-.2,1.18c.14.02.27.04.4.08l6.63-.92-6.82-.34Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m227.73,550.2l7.62,2.05c.3-.05.66-.05.96,0l8.81-2.52-17.39.47Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m248.4,550.06c-.33.06-.73.07-1.08.03l-8.47,2.43,16.64-.94-7.1-1.52Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m234.64,557.27l8.13-2.05-7.55.3-.6,1.75s.02,0,.03,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m236.5,553.48c-.18.04-.38.06-.6.07l-.55,1.58,7.85-.31-6.7-1.33Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m277.19,556.03l-7.13-1.78c-.16.03-.33.04-.5.05l-.82,2.18,8.45-.44Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m268.77,553.04c.13-.03.28-.06.43-.07l-.08-2.72c-.15-.01-.3-.03-.43-.07l-8.12,1.44,8.2,1.41Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m259.33,548.52c-.45.12-1.11.12-1.55,0l-5.63.78,12.84.08-5.66-.86Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="268.43 548.37 263.52 548.26 264.55 548.42 268.7 548.87 268.43 548.37" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="214.94 542.01 208.13 542.07 206.97 543.46 214.94 542.01" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m218.02,542.37s-.02,0-.03,0l-8.5,1.54,7.62.08.92-1.61Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="208.22 541.18 202.14 541.71 201.96 541.74 207.79 541.69 208.22 541.18" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m279.23,555.44l.4-4.49s-.03,0-.05,0l-8.29,2.64,7.61,1.9c.1-.02.21-.03.33-.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m201.04,540.04c-.34.12-.86.17-1.3.11l-1.61,1.23,7.24-.97-4.34-.37Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="235.32 553.51 235.32 553.51 227.96 555.42 234.75 555.15 235.32 553.51" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m233.2,553.08h-7.8l-.2,2c.06,0,.12.02.17.02l7.84-2.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m225.44,552.69h7.86l-7.39-2c-.09.02-.17.02-.27.03l-.2,1.97Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m216.73,545.86l8.14-1.41-7.37-.08-.84,1.47s.04.01.06.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m334.5,538.87l-6.88-1.31c-.39.08-.93.08-1.31-.02l-8.07,1.27,3.54,1.08,5.09,1.3,5.51-1.56,2.13-.77Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="289.06 546.82 295.52 547.13 288.67 544.92 289.06 546.82" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m316.1,539.3c-.19-.01-.37-.03-.53-.08l-5.77.93,7.18,3.15-.88-4Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m308.3,540.61c-.23.01-.45,0-.66-.03l-8.03,1.99,15.76,1.15-7.07-3.11Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m297.83,543.23c-.31.03-.65,0-.92-.06l-6.46,1.17,14.64,1.61-7.25-2.71Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m307.82,545.8c.18,0,.35.02.51.04l7.05-1.73-15.42-1.13,7.59,2.83c.09,0,.17-.01.27-.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m318.03,543.49l2.68-.56,4.06-1.15-8.09-2.48.91,4.13c.15,0,.3.03.44.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m327.49,546.26l-.29-1.99h-7.28s7.48,2,7.48,2c.03,0,.06,0,.09-.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m195.11,541.96l-5.89-1.56c-.13.02-.28.03-.43.03l-1.34,3.39,7.66-1.86Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m327.15,543.88l-.18-1.24c-.14,0-.27-.03-.38-.05l-6.09,1.28h6.66Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m289.99,547.37l1.31-.05-1.83-.09c.2.03.37.08.51.14Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m280.74,549.73l3.64-.57-5.65-.3c-.45.19-1.26.23-1.78.08l-3.26.47.78.09,4.51.3c.46-.18,1.24-.21,1.77-.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m289.95,548.68l2.74-.15h-2.93c.08.05.14.1.19.15Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m289.39,549.51c-.06.02-.12.03-.19.05l.32.63,4.86.04-4.99-.72Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m334.19,543.89l-6.42-1.3c-.07.02-.15.03-.22.03l.18,1.25h6.46Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m289.56,551.5l-.47-.93-5.26-.04,5.61,1s.08-.02.12-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m290.17,551.45c.26,0,.5.03.71.08l4.84-.89-6.01-.05.43.86h.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m293.33,549.19l4.98.71c.23-.07.53-.1.81-.1l.27-.56-6.06-.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m299.08,551.14c-.25,0-.48-.03-.67-.08l-4.55.84,5.52-.04-.3-.73Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m297.78,548.64l-3.13.17,4.63.04c-.15-.04-.27-.1-.36-.16l-1.14-.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="128.27 527.04 124.3 527.41 127.9 527.4 128.27 527.04" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="128.2 527.79 126.78 529.14 134.27 527.78 128.2 527.79" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m138.33,528.09c-.37.1-.88.1-1.27.02l-6.04,1.1,10.32-.67-3.02-.46Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m123.77,528.76l1.78.4c.08,0,.16,0,.24,0s.17,0,.26.01l1.44-1.37h-7.37s3.64.97,3.64.97Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m128.74,526l1.03-1.21-2.8.07-2.01.14,3.74,1s.02,0,.03,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m145.86,533.88l-.64.11c.07.02.13.03.2.05l.44-.16Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m149.05,529.67l-4.18-.6c-.33.09-.78.11-1.15.05l-6.08,1.55,11.41-1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m145.33,533.11l-1.88-.07c-.37.16-1.01.22-1.49.12l-.65.14-2.3.91,6.31-1.1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m141.83,532.07c.29-.07.67-.1,1.01-.06l5.98-1.93-12.55,1.1,5.56.88Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m115.96,521.64l.25-.24c-.06-.03-.12-.05-.17-.08l-2.87-.06,2.79.38Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m114.52,522.55c.16-.02.34-.02.49,0l.59-.57-4.37-.6,3.28,1.17Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m110.69,525.11l8.74-.39-6.6-.54-2.15.91s.01.02.02.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="150.78 530.41 145.84 532 149.94 531.51 150.78 530.41" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m116.79,521.52l-.22.2,2.91.4-2.1-.61c-.19.02-.4.03-.59.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="109.4 523.51 112.69 523.78 113.33 523.51 109.4 523.51" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m123.65,522.31c.2,0,.38.02.55.05l9.31-1.82-4.01-.68c-.38.09-.9.08-1.26-.02l-9.23,1.24,4.28,1.25c.11-.02.23-.02.35-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m122.54,524.2l.49-.8c-.1-.03-.2-.06-.28-.1l-4.6.12,3.83.82c.17-.03.36-.05.56-.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m127.83,524.02l-3.59-.62c-.19.04-.41.07-.63.07l-.49.8c.08.02.15.04.21.07l4.51-.31Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m159.64,531.16c-.22.06-.48.09-.76.08l-.51.84,5.31-.34-4.03-.59Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m171.72,535.8c-.18.03-.39.04-.59.03l-.71,1.04,6.52.27-5.21-1.34Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m169.8,536.84l.75-1.09s-.03,0-.06-.02l-6.25.88,5.56.23Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="172.98 533.91 168.7 534.11 172.12 534.42 172.98 533.91" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m171.02,533.18l-3.86-.86c-.25.05-.56.06-.83.03l-1.16,1.07s.05.02.08.03l5.77-.27Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m180.48,538.05c-.16.02-.33.04-.51.03l-.77,1.39,6.91.1-5.63-1.51Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="185.86 539.95 178.98 539.86 178 541.61 185.86 539.95" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m164.59,533.3l1.04-.97-5.01.79,2.83.29c.3-.1.74-.15,1.13-.11Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m180.01,536.82c.51,0,.95.12,1.2.29l6.01.38-4.82-1.4c-.13.02-.27.03-.41.03-.45,0-.85-.1-1.1-.25l-5.81-.15,4.45,1.13c.15-.02.31-.04.49-.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m178.58,539.46l.8-1.44s-.03,0-.04-.01l-7.7,1.35,6.94.1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="154.3 533.95 152.98 534.09 153.96 534.05 154.3 533.95" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="150.33 531.86 150.06 532.22 153.08 531.53 150.33 531.86" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="158.26 531.23 153.11 532.42 157.72 532.12 158.26 531.23" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m149.39,532.24l.23-.3-3.3.39,1.99.08c.27-.12.67-.19,1.09-.17Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m150.2,533.3c-.4.17-1.1.21-1.59.1l-.45.08-1.09.4,4.78-.51-1.65-.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m159.43,533.83l-1.23-.13c-.45.15-1.18.15-1.63,0l-.17.02-.9.28,2.67-.09,1.27-.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m158.12,532.49l-.1.17s.03,0,.05.01l1.92-.3-1.86.12Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m157.43,532.59l.04-.06-2.59.17,1.53.07c.26-.11.62-.18,1.01-.17Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m188.74,539.16c.17,0,.34.01.49.03l.76-.51-4.57-.47-1.06-.07,3.91,1.05c.15-.02.3-.03.47-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m312.05,503.82c.26,0,.5.03.69.1l1.16-.09-2.13-.16.14.15h.14Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m375.81,512.53l-6.5-1.41c-.2.04-.45.05-.67.03l-4.37,1.53,11.54-.15Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="368.04 509.05 370.77 509.13 367.8 508.72 368.04 509.05" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m368.86,510.05c.21,0,.41.02.58.07l3.48-.53-4.58-.14.44.6h.09Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m375.06,507.74l-4.78.53,5.27.73c.07-.02.14-.03.21-.04l-.23-1.13c-.17-.01-.33-.04-.47-.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m371.06,510.67l6.94,1.5c.15-.03.3-.04.47-.04s.33.01.47.04l4.97-1.07-7.18-1.13c-.34.08-.8.08-1.14,0l-4.53.7Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m340.29,513.1l.43.05,3.29.21c.12-.05.27-.08.44-.1l-.06-.64-4.09.49Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m362.59,513.45c-.17.02-.36.02-.53,0l-6.52,2.2,3.77.9,4.1.8s.03,0,.05,0l5.95-2.24-5.45-1.37-1.38-.3Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m344.25,511.41l-4.07,1.31,4.16-.49-.08-.82s-.01,0-.01,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m353.87,516.27l-5.98,2.62h.02l-.06.02-.48.21,6.61.99c.27-.07.63-.09.94-.06l6.73-2.1-7.24-1.71c-.17.03-.36.04-.55.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m376.12,507.8l.23,1.14c.14,0,.27.03.39.06l4.37-.68-4.75-.56c-.07.02-.15.03-.23.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m381.28,505.28c.21,0,.4.02.56.06l1.61-.24-2.23.08.06.1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="382.54 506.64 385.61 506.44 382.12 506.26 382.54 506.64" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="378.9 507.26 383.07 507.76 382.27 507.04 378.9 507.26" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m339.59,511.03l-2.78-.12c-.32.12-.84.16-1.24.09l-2.4.5,6.43-.47Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m382.95,507l.8.73c.08,0,.16-.01.24-.01.1,0,.2,0,.29.02l3.49-1.05-4.83.32Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m380.73,504.35l.27.46,3.33-.12-3.54-.36s-.03.01-.06.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="385.05 509.23 388.6 509.21 384.67 508.74 385.05 509.23" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m378.93,506.87l2.94-.19-.36-.32c-.05,0-.11,0-.17,0l-1.97.39-.44.11Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m378.74,505.27l1.81.12s.09-.03.14-.04l-.08-.15-1.87.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m314.5,499.7l3.64.55c.1-.02.21-.04.33-.05l.12-.55-4.08.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m318.12,503.42s.06.01.09.02l5.45-.81-5.24-.16-.3.96Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m322.52,501.15l4.02.87s.05,0,.07-.01l-.05-.63-4.04-.24Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m320.76,503.85l5.87.25v-1.06c-.07,0-.15-.02-.22-.04l-5.66.85Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m336.02,509.94c.1,0,.19,0,.28.02l4.15-1.25-1.06-.03-4.08.07.69,1.2h0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m114.13,523.63l-.53.23,4.23.35-2.53-.54c-.35.07-.83.06-1.16-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="311.41 503.25 314.08 503.45 310.89 502.66 311.41 503.25" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m326.11,506.76l-1.94.07,2.78.29-.11-.22c-.29,0-.55-.05-.74-.13Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m317.95,502.06l.26-.84s-.06,0-.08-.02l-4.82.71,4.64.14Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m317.33,503.4c.06,0,.14-.02.21-.02l.29-.94-5-.15,4.5,1.11Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="327.44 508.09 327.16 507.53 324.01 507.19 327.44 508.09" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m327.39,509.14l-3.13.34,7.85.54-3.66-.83c-.34.05-.77.03-1.06-.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m328.44,511.48c.08,0,.16-.01.24-.01.16,0,.32.02.47.04l4.67-.98-10.35-.71,4.98,1.65Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="327.6 507.18 329.62 507.39 327.47 506.9 327.6 507.18" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m327.81,507.6l.27.54c.25,0,.48.04.66.1l2.85-.25-3.78-.39Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m327.23,503.05v1.08s5.17.22,5.17.22l-5.13-1.31s-.03,0-.05,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m327.15,501.42l.05.58c.13.01.24.03.35.06l3.58-.41-3.97-.24Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m327.19,505.83s.1.01.15.02l5.5-1.09-5.63-.24-.02,1.31Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="411.69 535.88 412.11 536.55 417.49 536.91 411.69 535.88" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="396.09 539.16 389.44 538.23 396.53 540.83 396.09 539.16" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m395.6,537.35c-.27-.01-.52-.06-.72-.13l-5.94.54,7.03.99-.37-1.41Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m377.44,538.06l.52,2.04s.09,0,.13,0l6.09-2.26-6.74.21Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m386.01,510.5s.06,0,.1,0c.15,0,.29.01.42.03l4.03-.95-5.22.04.67.88Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m403.48,532.61l7.17,2.13c.12-.02.25-.02.39-.02.23,0,.45.03.64.07l5.58-.98-13.78-1.2Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m328.29,546.26l6.79-1.98h-7.3s.29,1.96.29,1.96c.08,0,.15.01.22.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="403.05 539.74 396.21 537.39 396.58 538.84 403.05 539.74" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="411.7 536.91 405.24 536.47 412.75 538.59 411.7 536.91" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m402.56,536.66c-.41.06-.9.02-1.24-.09l-3.09.32,10.45,1.5-6.12-1.73Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m386.29,536.96c.33,0,.63.05.87.13l5.49-.5-12.74-1.35,5.98,1.75c.13-.02.27-.02.41-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m348.27,545.08l-.72-2.03-7.77.95,8.23,1.15c.08-.02.16-.04.26-.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m359.58,542.01c-.27.08-.63.12-.98.1l-7.08,2.97,15.16-2.21-7.1-.86Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m348.96,545.05l7.31-3.06-8.14.99.72,2.07s.08,0,.12,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m337.56,543.47l7.48-3.21-8.03-.98c-.29.09-.69.13-1.06.1l-6.72,2.43,3.71.95,3.84.78c.23-.05.51-.07.78-.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m368.46,542.14l-.37-.83-5.46.22,5.58.68c.08-.02.16-.04.25-.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m377.95,541.37c-.23,0-.47,0-.67-.05l-5.62,1.27,7.24.15-.95-1.38Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m369.58,542.15l4.76-1.08-5.65.22.35.81c.19,0,.37.02.54.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="375.45 540.64 367.6 538.79 368.52 540.91 375.45 540.64" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="376.73 535.27 377.34 537.68 384.21 537.46 376.73 535.27" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m411.26,510.85l.75.97s.07,0,.1,0c.13,0,.26.01.38.03l4.26-1.13-5.49.13Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m402.72,511.39l-5.09,1.56,6.2.64c.33-.1.8-.13,1.17-.06l4.99-1.11-6.44-1.08c-.25.06-.57.08-.85.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="406.13 510.97 411.38 511.85 410.61 510.86 406.13 510.97" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m420.37,534.34c-.4.11-.97.12-1.38.02l-4.35.77,11.4-.04-5.67-.75Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="388.75 511.21 394.92 512.57 394.04 511.15 388.75 511.21" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m395.56,512.57h.03c.1,0,.2,0,.3.02l4.94-1.52-6.16.08.89,1.43Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m392.85,509.89l-3.98.94,4.94-.06-.52-.85c-.15,0-.3-.01-.44-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="415.2 512.45 421.47 513.4 420.5 512.24 415.2 512.45" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m412.65,512.88l.43.92,5.45-.04-5.81-.89s-.04,0-.06.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m423.44,524.83h.22c.29,0,.56.04.77.11l1.44-.15-2.43.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m421.74,514.44l-6.32,1.34,6.74,1.91s.02,0,.03,0l-.22-3.22c-.08,0-.16-.02-.23-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="424.26 526.4 419.34 527.41 419 527.53 426.84 529.05 424.26 526.4" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="418.63 530.39 419.69 533.2 426.07 529.95 418.63 530.39" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m424.47,525.9l.04.04.15-.03-.17-.02s-.01,0-.02,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m419.37,519.59l.37.02h-.09s3.84.25,3.84.25l-.85-1.06c-.16,0-.33,0-.48-.02l-2.79.81Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m422.55,514.46l.22,3.22c.06,0,.12.02.17.02l7.2-1.79-7.41-1.49c-.06.01-.12.02-.19.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m431.6,516.42l-7.34,1.82,7.53,1.84s.08-.01.13-.02l-.16-3.62c-.05,0-.1-.01-.16-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="153.11 516.25 153.21 515.85 150.66 516.67 153.11 516.25" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m414.75,516.47l2.56,2.64c.06,0,.13,0,.2,0,.13,0,.25.01.36.02l3.1-.89-6.22-1.77Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m423.88,526.02c-.16.01-.35.01-.51,0l-1.17.41,1.73-.36-.05-.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m416.82,520.16l-5.46.65.09.02,11.56,1.1-5.19-1.69c-.33.04-.72,0-.99-.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m419.24,514.14l-5.98.05.46.98c.16,0,.32.02.46.05l5.06-1.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m409.39,517.18l7.11,1.81-2.62-2.71c-.22.02-.44,0-.64-.03l-3.85.92Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="407.69 514.23 413.14 515.22 413.14 515.22 412.66 514.19 407.69 514.23" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m407.44,516.61c.07,0,.14,0,.22,0,.11,0,.22,0,.32.02l1.03-.2,2.71-.65-3.41-.62-2.71-.39,1.85,1.85Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m397.37,515.11h.09c.16,0,.32.01.47.04l3.2-.73-4.13.2.37.49Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m411.66,512.9l-4.26.95,5.08-.04-.41-.87c-.15,0-.28-.02-.41-.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m404.6,514.62c-.17,0-.35,0-.51-.03l-4.44,1.01,7.13,1.05-2-2-.19-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="401.22 533.47 405.75 534.24 400.91 532.8 401.22 533.47" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m409.03,531.36c-.34.05-.76.03-1.08-.05l-5.19.85,13.38,1.17-7.12-1.97Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="418.05 530.42 410.58 530.86 419.1 533.21 418.05 530.42" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="400.76 533.79 395.19 532.84 401.46 535.28 400.76 533.79" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m417.88,528.17s-.05.01-.08.02l.69,1.82,6.81-.4-7.42-1.44Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m422.86,524.94l-.1-.1-1.77.03,1.78.11s.05-.02.08-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m414.52,525.28l-4.76.57-1.2.22,8.02,1.06c.28-.08.67-.11,1.01-.08l3.89-1.35-6.95-.42Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="423.02 523.47 420.69 523.14 421.36 523.43 423.02 523.47" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m336.21,518.09l-4.15.91,10.45.07-5.29-1c-.3.06-.7.07-1.01.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m364.36,517.54l5.6-2.1s-.06-.03-.08-.05l-5.65,2.13.13.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m349.03,522.2c.12,0,.26,0,.38,0l3.33-1.34-4.85.17,1.14,1.17Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="356.55 522.16 361.21 521.89 355.49 521.12 356.55 522.16" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m363.69,518.45l.31,1.23,5.45-.43-5.58-.84c-.06.02-.12.03-.19.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m354.44,521.17l-3.21,1.29,4.66-.27-1.05-1.03c-.13,0-.26.01-.39,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m395.74,536.1c.31,0,.6.05.83.12l3.5-.36-10.47-2.03,5.91,2.28c.08,0,.16-.01.24-.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="337.14 515.17 337.02 516.88 342.46 514.35 337.14 515.17" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m338.74,517.55l6.55,1.23c.2-.04.42-.06.65-.05l5.91-2.59-13.11,1.41Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="347.52 520.66 351.42 520.52 346.69 519.82 347.52 520.66" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m385.64,511.57l-3.89.83-.62.16,11.29.29-5.86-1.29c-.28.05-.64.05-.92,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m370.46,514.52c.22-.03.48-.04.71-.01l5.13-1.59-11.63.15,5.8,1.45Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m396.28,513.59s-.02,0-.02,0l.47.64,3.91-.19-.23-.03-4.13-.43Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m395.13,513.65l-3.85.85,4.83-.23-.43-.58c-.19,0-.38,0-.55-.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m396.7,515.23s.06-.02.09-.03l-.41-.55-4.22.2,4.54.38Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m387.3,514.34c.13-.02.28-.03.44-.03.17,0,.33.02.47.04l4.91-1.09-11.7-.3,5.89,1.39Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="375.94 513.93 372.45 515.01 373.09 515.17 378.87 516 378.3 513.31 375.94 513.93" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m378.87,513.22l.6,2.87,1.47.21,5.1-1.41-7.15-1.68s-.02,0-.02,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m378.98,516.63s.01,0,.02,0l-.05-.22-2.05-.29,2.08.51Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m347.42,542.67l-.7-2s-.06,0-.09,0l-6.81,2.92,7.6-.92Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m277.72,547.73c.4,0,.76.07,1.02.18l5.45-.27-4.59-.6c-.23.07-.5.1-.8.1-.44,0-.83-.08-1.09-.22h-5.33s4.67.88,4.67.88c.2-.05.43-.07.67-.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m288.9,550.19l-.28-.58c-.28,0-.56-.03-.78-.09l-3.96.62,5.03.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m288.08,544.91c-.13,0-.26-.02-.38-.04l-6.45,1.52.51.07,6.71.33-.39-1.88Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m296,542.44l-7.73-3.67c-.17,0-.35,0-.52-.03l-7.58,2.2,7.76,2.71c.1,0,.2-.02.3-.02.24,0,.48.03.67.07l7.09-1.27Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m308.15,539.36c.26,0,.49.03.7.08l5.7-.91-7.8-3.14c-.37.02-.76-.02-1.03-.12l-5.69.56,7.98,3.54s.1,0,.15,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="297.58 532.22 297.85 533.19 302.68 533.96 297.58 532.22" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m393.16,536.25l-7.1-2.74c-.49.03-1.01-.05-1.3-.22l-7.05,1.3.1.03,15.35,1.64Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m297.88,536.2s-.09-.01-.13-.02l-7.67,1.95,7.55.7.25-2.63Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="297.6 539.21 290.2 538.53 297.34 541.92 297.6 539.21" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m288.56,547.21v-.03s-2.02-.1-2.02-.1l1.63.21c.12-.03.24-.06.38-.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m249.03,546.34c-.13.02-.27.04-.41.05l-.15.88,6.21.31-5.64-1.24Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m249.59,537.28l-7.23.72,5.71.73c.23-.07.51-.11.81-.1l.72-1.34Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m248.43,539.85c-.15-.02-.29-.05-.41-.09l-5.01.54,5.29.14.13-.59Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m248.23,540.83l-5.09-.14,4.44.72c.16-.04.35-.07.55-.08l.1-.5Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m272.9,546.09l-4.77-.49-.03.29c.3.03.55.11.74.21h4.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m258.17,547.33c.13-.02.27-.02.41-.02.28,0,.53.03.75.09l5.19-.82-12.4-.49,3.94.86,2.12.39Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m273.8,548.11l-5.41-1.02s-.03,0-.04,0l.49.9,4.96.11Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m267.77,547.16c-.28,0-.56-.03-.78-.08l-4.87.77,6.1.14-.45-.82Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m306.21,540l-8.04-.74-.26,2.73c.06,0,.11.02.16.02l8.13-2.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m356.21,541.61l-8.61-1.03c-.09.03-.19.05-.29.07l.69,1.96,8.21-1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m337.75,513.73c-.15.05-.32.09-.52.11l-.06.93,4.21-.65-2.01-.29-1.63-.1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m346.01,539.53c.27-.08.64-.12.98-.1l6.85-2.82-15.08,2.01.96.15,6.28.77Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m336.59,538.16l6.84-2.13-7.26.52.24,1.6c.06,0,.11,0,.17.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m359,540.86l5.66-2.25-14.93,1.37,8.25.98c.28-.08.67-.13,1.03-.1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m383.76,533.07l-7.64-.05.28,1c.39.02.73.1.96.23l6.41-1.18Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m316.08,538.07l.37-2.02-7.43-.81,7.04,2.83h.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m367.01,538.83c-.06,0-.13,0-.19,0l-6.01,2.39,7.12-.28-.92-2.1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m358.82,536.08l7.62,1.54c.25-.05.56-.07.85-.05l6.69-2.57-15.15,1.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m324.65,536.94l-7.63-.83-.36,1.98c.1.02.21.03.3.06l7.69-1.2Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m317.68,533.45l-.98-.18s-.04.01-.06.02l.03.07,1.01.1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m321.52,531.15l-5.41-.24.18,1.22c.12.01.23.02.34.05l4.88-1.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m340.11,535.87l-3.43-.09c-.16.08-.37.13-.59.16l.03.22,3.99-.29Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m316.58,535.28c-.24-.03-.45-.09-.62-.18l-4.28.03,4.83.53.07-.38Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m341.59,532.49l-6.85.88.88,1.37h.08c.07,0,.14,0,.21,0l5.68-2.26Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m335.81,538.16s.02,0,.03,0l-.24-1.58-6.19.44,4.21.8,2.19.34Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m327,536.39c.23,0,.44.02.62.06l5.08-.96-6.66-.62c-.5.17-1.33.15-1.77-.05l-4.1.15,6.31,1.46c.16-.03.34-.05.53-.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m123.48,516.47l-5.63.55,3.73.76c.16-.03.33-.05.51-.05.24,0,.47.03.65.08l5.91-.81-3.83-.51c-.4.11-.98.1-1.35-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m179.65,516.87l-.8.13,4.12,1.78s.09,0,.14,0c.26,0,.49.03.68.08l7.02-.97-11.17-1.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m179.81,515.02c-.32.09-.77.11-1.13.05l-1.3.79,5.54-.44-3.11-.41Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="179.62 516.48 179.69 516.47 179.58 516.47 179.62 516.48" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="190.06 522.16 198.4 521.01 198.81 520.91 184.99 519.72 190.06 522.16" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m171.99,515.23l3.55.61c.31-.07.73-.08,1.06-.03l1.38-.85-5.96.24s-.02.01-.03.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m331.3,512.02l2.06.32,3.65.4c.08,0,.16,0,.23.01l4.66-1.5-10.6.77Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m179.16,513.68c.34-.14.91-.17,1.33-.08l.31-.16-3.05.17,1.41.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="181.62 513 181.86 512.87 180.35 513.07 181.62 513" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="181.66 513.47 182.63 513.33 181.84 513.38 181.66 513.47" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m215.48,511.12s.1-.02.15-.02l-.18-1.54c-.11-.01-.21-.03-.31-.05l-4.16.72,4.5.89Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m209.87,507.31l5.37,1.18c.12-.02.24-.03.38-.03l.84-1.9-1.23-.23-5.35.98Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="216.62 506.18 216.68 506.06 216.32 506.12 216.62 506.18" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m220.11,506.01l4.07,1.27c.11,0,.23-.02.35-.01l.6-.81-5.02-.46Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m171.91,514.17l-.93.11h.08c.22,0,.41.02.59.07l2.77-.16-1.02-.06c-.39.15-1.05.17-1.48.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m211.58,516.26l.35-.75c-.06-.02-.12-.03-.17-.05l-5.45.59,5.27.2Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m210.4,518.18c.09,0,.19-.02.29-.02l.72-1.53-6.7-.26,5.7,1.81Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m202.45,516.67l-1.21,3.62.12.04,7.69-1.65-6.39-2.03c-.06,0-.13.01-.21.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="213.77 512.68 214.61 512.19 210.32 512.7 213.77 512.68" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m248.12,545.11l-.1-2.51c-.23-.02-.44-.06-.61-.12l-6.58.6,5.96,1.71,1.31.33s.01,0,.02,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="139.94 515.81 140.6 515.25 136.66 516.2 139.94 515.81" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m134.75,514.05l-.92.96,5.44-.45-3.74-.57c-.22.06-.51.08-.78.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="139.97 516.42 141.9 515.98 140.26 516.17 139.97 516.42" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="133.08 515.07 133.96 514.15 128.3 515.47 133.08 515.07" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m124.12,519.01l-1.42-.22c-.44.11-1.09.08-1.45-.08l-2.78.12,5.65.19Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="167.09 518.23 172.31 516.9 167.47 517.34 167.09 518.23" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m112.94,519.06l3.82,1.33c.09,0,.17-.01.26-.01.25,0,.48.03.67.08l7.66-1.02-12.06-.4-.36.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m141.53,515.09l-.73.63,3.99-.47-2.29-.24c-.27.08-.64.12-.97.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m116.22,522.07l-.62.6s.06.03.09.04l4.38-.12-3.85-.53Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m130.94,516.5c.24-.07.55-.1.84-.08l.89-.93-5.74.48,4.01.53Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m164.52,513.96l-.08.22c.07.02.13.03.2.05l2.54-.29-2.66.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m157.9,514.31c-.37.1-.92.1-1.29,0h0l-1.07.42,1.33-.03,2.86-.15-1.82-.24Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="167.02 516.99 167.59 515.64 162.14 517.43 167.02 516.99" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="153.4 517.46 157.73 515.85 153.63 516.56 153.4 517.46" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m144.11,514.39l2.6.28c.25-.08.58-.12.89-.1l1.28-1.37-4.78,1.19Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m146.97,515.66l-5.46,1.25,3.94.27c.29-.11.73-.15,1.1-.12l4.63-1.48-2.87-.05c-.33.15-.9.21-1.34.13Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m152.6,518.67l-.13.04-.68.45,3.84-.76-1.66.07c-.23.14-.6.23-1.02.23-.12,0-.24,0-.35-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m224.72,508.36l-.02,1.13,5.27.4-5.23-1.54s-.01,0-.02,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m194.93,518.05l2.39.96,3.38,1.11,1.16-3.49s-.03,0-.05-.01l-6.89,1.43Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m312.55,510.28h.09c.2,0,.39.02.55.06l6.14-1.01-5.61-2.09c-.33.02-.68-.03-.92-.12l-1.85.11-4.19.54,5.79,2.51Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m305.76,507.9l5.95,2.58s.06-.03.1-.05l-5.88-2.55-.17.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m313.29,506.16c.09,0,.18-.02.27-.02.33,0,.63.06.84.15l2.37-.04-6.77-1.1,3.29,1.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m326.61,505.82l.02-1.34-6.12-.26,6.06,1.6s.02,0,.04,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m301.68,514.91l.26.04,3.6.38-.54-.49c-.35.03-.74-.01-1.01-.11l-2.31.18Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m303.22,512.28l-4.62.35.55.11,5.03.69-.34-1.04c-.23-.01-.45-.05-.62-.11Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m317,504.36l-2.21.17,7.26.97-4.05-1.07c-.34.04-.73,0-1-.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="304.81 513.53 308.71 514.07 304.48 512.51 304.81 513.53" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m309.15,513.27l2.48.79,4.82-.03,2.1-.11-5.82-2.54c-.26,0-.53-.02-.74-.08l-6.23.73,3.38,1.24Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m320.29,513.65s.06,0,.1,0c.13,0,.25,0,.36.03l6.06-1.6-12.21-.91,5.69,2.48Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m320.43,509.95l-5.28.87,10.99.81-4.93-1.64c-.26.02-.55,0-.78-.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m319.68,506.05c.1-.01.2-.02.31-.02.31,0,.59.05.8.13l2.64-.08-6.98-.93,3.24.9Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="320.44 508.78 320.1 507.79 316.44 507.28 320.44 508.78" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m328.31,512.54l-4.93,1.3,10.75-.58-4.88-.75c-.27.06-.63.08-.94.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m296.11,509.43l-6.71,1.62,12.63.52-5.37-2.12c-.19,0-.38,0-.55-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m319.17,506.97l-1.88.03,2.67.37-.09-.25c-.27-.01-.52-.07-.7-.15Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m320.73,507.87l.35,1.04c.2,0,.38.03.55.08l4.03-.44-4.94-.68Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="320.48 507.14 320.59 507.46 322.94 507.78 320.48 507.14" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m240.87,509.17c.06,0,.12,0,.19,0l.8-1.22-5.37-.46,4.38,1.69Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m227.25,510.96l4.78,1.11c.08-.01.16-.02.24-.03l.23-1.22c-.15-.02-.28-.05-.39-.1l-4.87.24Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="238.77 504.94 242.7 506.04 247.04 505.6 237.85 504.62 238.77 504.94" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m243.61,503.7l5.08,1.39c.09-.01.2-.02.3-.02.13,0,.25.01.36.03l5.91-1.44-11.65.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m286.72,510.64c.27-.05.62-.06.89-.02l5.89-1.42-11.77.42,4.99,1.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m242.1,507.57l.16-.24c-.06-.02-.12-.04-.18-.07l-2.73.07,2.75.24Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m231.62,513l-4.81.13,2.22.36c.18-.04.38-.07.6-.07.44,0,.82.1,1.03.25l5.13.37-3.01-.9c-.4.05-.87,0-1.16-.14Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m234.29,507.63l-.88,2.17c.08.02.16.04.23.06l5.48-.4-4.76-1.84s-.04,0-.06,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m233.09,510.85l-.23,1.22c.19.03.35.07.48.14l4.66-.07-4.76-1.3c-.05,0-.1.01-.15.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m240.7,503.97l-2.72.27,7.22.77-3.56-.98c-.31.03-.68.01-.94-.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m273.88,507.75l4.93,1.25c.12-.02.25-.03.38-.03.28,0,.53.04.73.11l7.7-2.42-13.74,1.09Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m256.55,506.16c.26-.07.6-.09.89-.06l5.13-1.47-10.8.93,4.77.6Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="265.41 506.26 269.51 505.16 265.58 505.69 265.41 506.26" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m279.63,510.04l.43,1.46,4.96-.37-5.36-1.09s-.02,0-.03,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m266.34,510.53l5.66,1.22c.17-.03.38-.05.58-.03l5.2-2.12-2.19-.56-3.87-.73-5.39,2.22Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m266.57,504.56c-.17.08-.41.13-.68.14l-.17.57,4.75-.64-3.89-.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="261.38 505.86 265.09 505.36 265.27 504.79 264.05 505.09 261.38 505.86" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m260.62,509l8.71-1.15-1.43-.27-2.34-.29c-.22.06-.49.09-.76.07l-4.19,1.64Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m380.01,516.56l-.44-.07.02.11c.07,0,.13.01.2.02l.23-.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m371.12,503.18c.12,0,.23,0,.34.02l2.99-.74-3.66.17c-.06.03-.12.06-.19.08l.4.47h.12Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m480.19,515.3l-4.28,1.19,2.01.63,6.54,1.6,2.08-.54,2.61-.83-8.16-2.06c-.24.04-.54.04-.8,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m190.39,506.48l-1.21-.1-.27.05,1.37.29s.07,0,.11-.02v-.23Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="186.93 506.85 186.89 506.84 186.87 506.84 186.93 506.85" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m184.55,508.64l-.51.02-1.96.13,1.98.21c.34-.1.85-.12,1.22-.03l2.44-.41-1.63.02c-.38.17-1.1.2-1.54.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m219.34,497.59l-3-.34c-.23.06-.52.08-.79.05l-1.04.88,4.83-.6Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m213.36,499.21l-1.42.47,2.51-.54-.24-.02c-.23.07-.55.11-.85.09Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m195.38,508.7l-.94-.06-1.14-.03c-.34.1-.85.11-1.21.03l-2.05.34,5.34-.28Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m210.32,504.6l-.12.03s.05,0,.07,0l.05-.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="190.98 505.62 193.23 505.16 190.98 505.34 190.98 505.62" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m174.83,506.96l.59.03-.35-.06c-.08.01-.16.02-.24.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m185.25,506.77l.66-.14-1.9-.4c-.34.05-.76.03-1.05-.06l-3.81.3,6.09.3Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m183.91,504.02l-4.26.28,3.64.91c.07,0,.13-.01.2-.02l.41-1.18Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m172.8,506.63l.99.2c-.08-.03-.13-.07-.19-.1l-.81-.09Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="190.98 506.58 191.09 506.53 190.98 506.52 190.98 506.58" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="193.18 506.7 193.08 506.7 193.04 506.71 193.18 506.7" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="190.98 506.13 191.85 506.21 193.43 505.53 190.98 506.02 190.98 506.13" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m216.02,496.13l-2.02.21,1.08.04c.22-.08.51-.12.82-.11l.12-.15Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m259.44,496.43l.27-1.05-3.96.79,3.29.33c.12-.03.26-.05.4-.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m318.05,497l.56.03c.06-.02.13-.04.2-.06l-.76.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="318.65 499.27 318.91 497.98 313.5 499.33 318.65 499.27" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m216.65,496.17l-.16.19,2.05-.13-1.21-.12c-.19.05-.44.07-.67.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m310.45,501.52s.03.01.06.02l5.47-.81-3.51-.53-1.21-.14c-.09.02-.19.02-.28.03l-.53,1.44Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m388.24,502.3s-.02,0-.03,0l.56,1.89c.28.01.54.07.73.17l4.88-.96-.34-.06-.92-.07.41-.03-5.28-.94Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m398.47,505.48c-.2,0-.37-.02-.53-.05l-2.58.45,3.25-.16-.14-.24Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m385.17,505.65l4.58.24c.34-.13.88-.16,1.28-.07l3.35-.58-4.95-.1c-.34.15-.94.19-1.36.08l-2.91.43Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m395.99,503.82c-.35,0-.65-.07-.86-.17l-3.82.75,6.13.12-1.09-.73c-.12.02-.23.02-.36.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m297.56,503.76s.01,0,.02.01h.12-.14Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m311.01,499.03c.06,0,.13,0,.19.02l.56-.14-.74.12Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m257.96,498.3l-.73.04.53.02c.06-.02.13-.04.2-.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m257.67,499.77c.12-.02.26-.03.4-.03.22,0,.41.02.58.07l3.31-.4-.8-.06-2.32-.07c-.27.03-.6.02-.85-.03l-2.18-.07h-.93s2.8.59,2.8.59Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m175.85,510.35c.13-.02.27-.03.42-.03.2,0,.4.02.56.06l5.01-.84-3.58-.39c-.42.12-1.06.11-1.43-.04l-5.2.24,4.23.99Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m274.12,495.95s-.09-.02-.14-.03l-3.81.33.85.2,2.82.46.28-.95Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m302.32,506.91l-5.5-2.22c-.14,0-.28,0-.41-.01l-5.26,1.56,11.17.67Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m296.09,503.64h.08s.01,0,.02,0h-.09Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m271.29,499.51l1.98.15c.12-.02.24-.03.37-.03.23,0,.45.03.63.08l3.6-.36-1.46-.25-1.16-.15-5.82.35,1.87.21Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="273.16 498.69 272.69 498.64 271.85 498.77 273.16 498.69" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="189.13 505.99 190.39 505.73 190.39 505.39 186.04 505.73 189.13 505.99" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m480.11,524.39l.44-.05-.76-.02c.12.02.23.04.33.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m407.88,504.96l2.19-.46-3.6.2.49.27c.28-.05.64-.05.92,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m408.85,508.39c.23-.05.53-.07.8-.05l4.38-1.47-11.29.52,6.1,1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m477.36,521.27l-3.99,1.39h.63s6.53-.31,6.53-.31l-2.33-1.13c-.25.05-.56.07-.84.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="481.27 522.7 480.01 522.76 481.44 522.78 481.27 522.7" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m379.64,545.09l-6.85,1.51h.08s-.07.01-.07.01l8.62,1.21c.06-.02.13-.03.21-.05l-1.17-2.51-.83-.17Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m469.56,524.17l-.87-.1c-.05.02-.11.03-.17.05l1.03.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m478.61,524.39c.14-.04.3-.08.48-.09l-1.23-.03.23.07.52.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="469.12 521.32 463.18 521.6 470.2 522.51 469.12 521.32" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m405.48,502.33l-2.71-.2.08.18c.25,0,.48.05.66.12l1.98-.1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="382.29 549.24 382.23 549.1 381.84 549.03 379.31 549.91 382.29 549.24" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m412.87,506.54l-4.82-.6c-.28.08-.68.1-1,.05l-4.07,1,9.89-.45Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m399.05,505.41l.17.27,2.93-.15-2.95-.17s-.1.03-.15.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m403.21,503.36l-.03-.02s-.05,0-.08.01h.11Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m402.06,503.28l-.36.02.24.02h.31c-.07,0-.13-.02-.19-.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="405.74 504.29 405.82 504.33 406.4 504.3 405.74 504.29" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m150.8,508.76c-.12,0-.25,0-.37,0l-5.49,1.83,9.9-.12-.2-.05h.17s-4.01-1.65-4.01-1.65Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m404.34,504.41c-.1,0-.21-.02-.31-.04l-.5.09.81-.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="405.64 504.73 403.51 504.85 406.13 505.01 405.64 504.73" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="76.74 522.86 84.73 521.4 80.87 520.33 78.77 520.62 76.74 522.86" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m70.13,522.18c-.25.03-.55.03-.79-.01l-4.41,2.87,9.13-1.68-3.93-1.17Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m63.89,525.17l4.29-2.79-9.43,2.01,4.13.8c.3-.07.7-.08,1.02-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="65.32 522.14 59.71 522.55 58.11 523.67 65.32 522.14" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="146.9 506.5 147.81 506.8 150.25 506.38 146.9 506.5" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="144.46 507.37 145.35 507.22 144.58 507.05 144.46 507.37" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m63.28,520.66c-.27.05-.62.07-.91.02l-2.04,1.44,7.28-.54-4.33-.92Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="143.42 510.16 149.28 508.21 148.27 507.87 146.36 507.45 144.3 507.8 143.42 510.16" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m79.26,520.07l-.08.1.73-.1-.07-.02c-.18.02-.39.03-.58.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m265.78,564.4l3.06-.69,5.4-1.41-16.59-.11,7.42,2.23c.22-.03.47-.03.7-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="59.43 522.18 61.18 520.96 54.91 522.52 59.43 522.18" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m115.03,532.42l6.2,1.49c.28-.05.63-.05.92-.01l8.62-2.33-15.74.85Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="255.4 565.58 262.73 565.09 263.33 564.95 260.04 563.96 255.49 562.86 255.4 565.58" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="120.7 534.95 118.3 535.14 120.43 535.15 120.7 534.95" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m121.34,535.05l-.15.12,2.98.03-1.71-.22c-.31.09-.76.12-1.13.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="99.85 526.44 99.75 526.39 99.73 526.45 99.85 526.44" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="101.74 526.19 101.58 526.17 101.64 526.2 101.74 526.19" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m102.64,523.69c-.47.05-.99-.02-1.3-.17l-5.92.04,4.06,1.64c.06,0,.12,0,.19,0,.35,0,.67.06.91.16l6.49-.28-4.43-1.38Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="190.39 505 190.39 503.94 186.21 505.33 190.39 505" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="452.19 522.62 452.02 522.67 452.24 522.69 452.19 522.62" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m451.54,522.64l.62-.05-.16-.21-1.05.08c.14.04.27.1.36.17l.24.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m442.09,520.51l.65,1.81s.1,0,.15.01l5.6-2.02-6.39.19Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="438.28 513.51 439.26 515.02 444.84 514.51 443.9 514.34 438.28 513.51" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m456.4,516.95l-5.14,2.66c.05.02.1.04.15.06l5.13-2.66c-.05-.02-.1-.04-.15-.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="433.88 515.91 440.2 517.45 438.91 515.44 433.88 515.91" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m447.7,515.02c-.08,0-.16.01-.24.01l-5.24,2.88,7.78,1.63c.16-.03.35-.05.54-.05l5.43-2.81-5.52-1.17-2.76-.49Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m440.85,517.48h.05l4.86-2.67-6.26.58,1.35,2.09Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m441.63,517.58c.06.02.11.04.16.06l4.94-2.71c-.06-.02-.11-.04-.16-.06l-4.94,2.71Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m432.58,525.08c-.29,0-.56-.04-.77-.11l-1.24.14-1.73.35,6.05.51c.36-.13.93-.17,1.37-.08l4.34-.96-7.03-.03c-.24.12-.59.2-.98.2Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m446.89,522.78l2.2-.15s.03-.02.05-.03l-2.35.18h.09Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="447.83 525.63 450.9 525.48 446.44 525.11 447.83 525.63" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m450.63,520.64c-.12,0-.24,0-.36,0l-5.25,1.89,6.69-.51-1.08-1.37Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="454.26 522.81 456.97 521.99 452.61 522.33 452.93 522.73 454.26 522.81" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m444.33,525.14c-.2,0-.4-.02-.57-.05l-4.34.96,5.28-.27-.38-.64Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m442.15,522.37l-.66-1.84-6.81.2,7.46,1.64h0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m447.96,519.95l-6.54-1.37s-.02,0-.02,0l.55,1.55,6.01-.18Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="451.25 520.59 452.32 521.96 457.33 521.57 451.25 520.59" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m440.56,518.6l-5.92,1.75,6.71-.2-.55-1.52c-.09,0-.17,0-.25-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m437.62,513.58l-3.81,1.94,4.85-.44-.97-1.49h-.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m205.86,546.66v-1.96s-.03,0-.04,0l-6.35,2.24,6.39-.27Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m163.86,514.14l.06-.18-2.46.02,1.83.24c.16-.05.35-.07.56-.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m157.19,515.55l-2.56.06c-.2.11-.49.19-.82.21l-.08.32,3.46-.59Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m160.92,515.63l-5.35,2,2.76-.11c.23-.14.6-.23,1.03-.23.1,0,.2,0,.3.02l5.83-1.91-3.37.04c-.27.15-.74.23-1.19.19Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m203.35,513.85l-4.23.39,9.31.39-3.77-.72c-.4.08-.95.06-1.3-.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m170.51,514.34l-.89.1h.12s.5-.02.5-.02c.08-.03.17-.06.27-.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m210.59,503.57l-1.99.45,1.3-.18.62-.17s.04-.07.07-.1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m212.43,514.41l.2-.46-4.44-.19,3.74.71c.15-.03.32-.05.5-.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m154.32,514.76l.57-.23-1.1.15c.19.01.37.04.52.08h0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m426.95,522.98l-.45-.07s-.07.02-.1.02l.56.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m196.45,542.57l-7.68,1.88,7.89,2.15c.24-.03.53-.04.8-.02l6.69-2.34h-.07s.15-.03.15-.03l.2-.07-6.88-1.57c-.33.06-.76.07-1.09,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m431.85,521.16l-4.05,1.14.94.15,7.69.63,3.93-.25-7.65-1.68c-.27.05-.59.05-.87.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m432.34,516.43l.16,3.62s.05,0,.08.01l6.71-1.98-6.82-1.67s-.08.01-.12.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m424.52,520.32l1.21,1.51s.09,0,.13,0c.13,0,.26,0,.38.02l4.13-1.16-5.85-.37Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m224.86,552.69l.2-1.98s-.06,0-.09-.01l-6.82,1.99h6.71Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m280.69,550.89c-.15.03-.31.06-.48.07l-.4,4.46,8.32-3.1h-.18l.37-.07-7.63-1.36Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m225.45,549.41l1.28-2.54-8.68-.2,7.11,2.75c.09,0,.19-.01.28-.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m339.34,510.26l4.38.2c.06-.02.11-.04.17-.06l-.44-.67-4.12.53Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m187.07,514.96c.09.01.17.03.25.05l3.12-.49-3.31.06-.06.38Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m187.75,514.19h.2s-.16-.01-.16-.01c-.02,0-.03,0-.04.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m186.06,514.22h.24s-.03-.01-.05-.02l-.19.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m186.01,515.03c.14-.04.31-.07.48-.08l.06-.35-3.42.06,2.88.37Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m205.11,504.96l.94-.2-.92.13s-.01.05-.02.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m220.11,500.63l.05-.59-4.13.89,3.45-.12c.16-.09.38-.15.63-.17Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m212.83,501.96l-.37.78,4.78-1.09-3.59.13c-.2.11-.49.17-.82.18Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m207.09,506.84c.33-.11.85-.14,1.24-.06l3.21-.59-6.47.5,2.02.15Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m108.48,515.29s.05,0,.07.01h.02s-.09-.01-.09-.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m211.4,504.31l-.26.22.1-.02,2.15-.42-.83.04c-.21.12-.53.2-.91.2-.09,0-.17,0-.26-.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m358.85,546.88l-4.46,1.36,6.09-.67-.85-.69c-.24.03-.53.03-.78,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m351.84,545.43l6.44.36c.32-.13.82-.19,1.27-.15l6.14-2.22-13.84,2.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m304.03,550.64l6.12.78c.47-.14,1.19-.15,1.67-.01l5.56-.81-13.35.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="110.12 517.97 112.04 517.99 113.87 517.22 107.78 516.95 110.12 517.97" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m486.78,519.3l5.48.02-1.37-1.43c-.17.01-.34,0-.5-.01l-4.09,1.31.48.12Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m132.94,535.97l-.4.32,4.13-.13-2.55-.29c-.33.1-.79.14-1.19.09Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m137,534.56l1.82-.73-4.56.99.69-.03c.25-.16.66-.26,1.12-.26.24,0,.46.03.65.07l.28-.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m310.23,552.56l-6.16.98,14.13.29-6.49-1.25c-.44.1-1.04.09-1.47-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m281.41,503.43l-.02-.16c-.06,0-.13-.01-.2-.02l-1.73.37,1.95-.19Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m305.55,504.75l-.19.5,4.01.61-3.66-1.12c-.05,0-.11,0-.16.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m306.28,503.82s.04.02.06.03h.2s-.27-.03-.27-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m305.01,503.7c.06,0,.11-.02.17-.02l-.71-.09.54.11Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m305.09,506.8l5.69-.33-5.56-.84-.41,1.09c.1.02.2.05.28.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m273.44,501.91c.09-.03.19-.05.28-.07l-.13-.57-4.23.34,4.08.3Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="489.32 515.33 483.54 515.08 490.07 516.73 489.32 515.33" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="338.7 517.16 352.05 515.73 350.7 515.44 344.32 514.54 338.7 517.16" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m303.74,507.77l.19-.02s-.03,0-.04,0l-.15.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m343.78,508.79c-.07.03-.15.06-.23.08l.26.41,3.6-.47-3.63-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m274.55,500.58l-.37.05s-.09.02-.13.03l.04.19,2.41-.19-1.94-.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m298,509l5.81,2.29c.05,0,.1,0,.15,0,.24,0,.47.03.66.08l6.38-.74-6.05-2.62-5.84.76-1.1.24Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m349.74,511.98l-4.78.56.07.7s.08,0,.11.01l4.6-1.27Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="271.26 501.07 273.51 500.89 273.48 500.74 271.26 501.07" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m273.73,502.85l-3.17.69,7.01-.63-2.69-.14c-.3.11-.77.14-1.15.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m288.77,503.39l-3.87.88,4.05-.11-.03-.75c-.05,0-.1-.01-.15-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m281.28,502.16l-1.69.09,1.27.07c.12-.05.26-.08.42-.1v-.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m288.95,505.81s.06,0,.09-.01l-.06-1.25-4.79.13,4.77,1.13Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="217.67 499.35 215.89 499.23 211.21 500.25 217.67 499.35" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m148.97,503.41l-3.62.02,2.44.52c.13-.02.27-.03.42-.03.35,0,.66.07.88.17l3.98.05-2.88-.62c-.41.07-.93.02-1.23-.12Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m152.01,502.73l-.76-.1-.7-.02c.09.03.17.08.24.13l1.54.16c-.13-.05-.24-.1-.32-.17Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m157.22,505.56h.15s-.08,0-.08,0l2.26.32-2.31-.77c-.4.03-.81-.03-1.06-.16l-3.48-.05,4.52.65Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="81.53 512.7 81.95 512.72 82.03 512.7 81.53 512.7" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m82.98,512.79l.27.02c-.07-.02-.13-.03-.19-.05l-.08.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m162.79,506.05c.45-.03.92.05,1.17.22l2.48.17-5.24-.92,1.59.53Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m164.9,505.77h.01s0,0,0,0h0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m162.26,502.44c.22,0,.42.03.59.07l.27-.11-2.17-.19.99.24c.1-.01.21-.02.32-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m159.76,503.6c.12-.02.24-.03.37-.03.4,0,.74.08.95.22l1.77.14h1.03s-1.43-.46-1.43-.46c-.41.03-.84-.04-1.08-.18l-3.79-.2,2.18.5Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m153.21,502.99l.44.05-.28-.07c-.05,0-.11.02-.16.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m54.02,512.9l-.88-.09.61.13c.09-.02.17-.03.27-.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m65.56,514.47l-.88-.17c-.43.09-1.03.06-1.38-.08l-1.31.34,3.58-.09Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="84.52 513.28 82.06 513.12 81.28 513.4 84.52 513.28" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="46.09 512.37 44.33 512.35 45.82 512.49 46.09 512.37" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m56.62,514.62l-2.03-.61c-.41.05-.9,0-1.2-.13l-4.67.17,7.9.57Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m63.9,513.25l-.86-.05.55.1c.1-.02.2-.04.31-.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="63.37 516.18 60.43 515.61 54.34 516.07 63.37 516.18" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m58.34,514.23l.92.22c.07,0,.14,0,.21,0,.33,0,.62.06.84.15l1.82-.47-4.73-.16.94.28Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m41.19,511.27l1.19.1-.71-.14c-.15.03-.31.04-.48.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m270.87,489.61l-2.8-.68s-.03,0-.04,0l-.09.42,2.93.25Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="281.35 491.37 281.33 490.37 277.35 490.35 281.35 491.37" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m281.31,489.99l-.02-.55s-.05,0-.06,0l-3.1.54,3.18.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m281.21,488.5s.05,0,.08-.01v-.96s-4.21.3-4.21.3l4.13.67Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="194.95 497.11 196.11 496.91 195.15 496.97 194.95 497.11" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m302.13,491.89l.06.83c.11.01.21.03.3.06l4.79-1.8-5.15.91Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="304.61 493.89 302.3 494.31 302.32 494.66 304.61 493.89" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m288.47,487.31h0l.21,2.36,4.23-1.52-1.03-.02.78-.09-4.17-.73Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m302.72,493.56c-.13.06-.28.11-.47.13l.02.22,2.41-.44-1.95.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="281.31 486.19 277.28 487.43 281.3 487.14 281.31 486.19" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m191.93,503.1l.29-.02-.4.14,4.32.98c.11-.02.23-.02.36-.02.23,0,.44.03.62.08l7.74-2.87-.67-.1-.33-.02.13-.02-4.63-.69c-.32.07-.76.07-1.07-.02l-6.35,2.56Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m199.17,497.47l-.52.04h.34c.05,0,.12-.03.18-.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m268.34,488.02l1.76-.17-2.04-.07.02.2c.09,0,.17.02.26.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m195.75,496.54h.19c-.05-.01-.1-.02-.15-.02l-.03.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m194.21,498.18l-.19.33,2.28-.31-1.94-.07s-.1.03-.16.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m268.01,487.26v.14s1.31.05,1.31.05l-1.27-.19s-.03,0-.04,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m267.48,488s.01,0,.02,0l-.02-.23-1.73-.06,1.74.3Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m267.17,487.23l-1.13.1,1.4.05v-.1c-.1,0-.19-.02-.27-.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="345.6 559.73 345.57 559.74 345.6 559.73 345.6 559.73" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m372.36,557.22l-8.15-2.51s-.05,0-.06,0l.3,3.42,7.23-.77.69-.14Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m232.35,564.46s-.02,0-.03,0l-10.16,1.62,8.84.16,1.35-1.77Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m445.64,537.05l2.9-.91-4.09.59.43.33c.24-.03.52-.03.77,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m442.79,535.44s0,0-.01,0l1.23.95,5.12-.74-6.34-.22Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m469.78,530.98c.27,0,.51.03.72.09l3.89-.57-5.39-.25.6.74c.06,0,.11,0,.17,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m309.16,492.42l4.81-1.08h0s-4.08-.49-4.08-.49c-.31.07-.75.07-1.05-.02l-5.1,1.92,4.32-.19c.26-.13.72-.19,1.1-.14Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m352.01,558.99l-7.76-1.96s-.05,0-.08.01l.56,1.99c.4.01.75.08,1.01.2l6.27-.24Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m356.44,558.88h.8s1.2-.12,1.2-.12l-3.67-.54.28.4c.54-.03,1.08.08,1.38.26Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="353.67 556.66 354.46 557.78 359.83 558.58 353.67 556.66" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m364.91,558.81l3.16-.68-3.59.38.02.24c.14,0,.28.03.41.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m536.28,516.56l-.72-.06.49.13c.07-.03.15-.05.23-.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m533.3,516.32l-.2-.02c-.35.12-.9.15-1.3.07l-2.69.53,5.76-.17-1.57-.41Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="514.11 522.15 510.53 522.38 515.66 522.67 514.11 522.15" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="467.36 528.23 468.68 529.84 474.55 530.12 467.36 528.23" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m505.13,523.02l-.38.07,2.93.21h.72s-1.54-.34-1.54-.34l-.26-.02c-.38.15-1.02.19-1.47.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m501.94,520.04c-.29.07-.67.09-.99.05l-4.11,1.15,8.14.79c.36-.12.92-.14,1.33-.06l3.51-.68-7.87-1.25Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m512.23,523.26l-.27-.02s.06.02.09.03h.17Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="29.44 515.04 28.69 514.78 25.9 514.36 24.69 514.59 21.51 516.95 29.44 515.04" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m230.41,567.01l.3-.4-6.35-.12,4.92.63c.31-.1.73-.15,1.13-.12Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m26.12,512.97c.05,0,.1.02.16.03l.08-.05-.24.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="27.4 512.9 27.77 512.85 27.45 512.87 27.4 512.9" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m43.1,513.31c.09,0,.19-.02.28-.02.21,0,.41.02.59.07l1.16-.54-4.85-.45,2.83.94Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="17.52 514.92 16.8 515.35 19.89 514.58 17.52 514.92" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m38.06,511.4c.16.03.31.08.42.15h1.42s-1.84-.15-1.84-.15Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m28.63,513.83l2.38.61c.13-.02.27-.03.42-.03.29,0,.55.04.76.11l9.19-.87-3.57-1.19c-.32.03-.67,0-.94-.07l-2.81.38-5.43,1.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m37.46,511.35l-1.17-.1.72.15c.13-.03.28-.05.45-.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m25,513.06l-.38.03.27.02s.08-.03.11-.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m104.13,534.06c-.44.08-1.02.04-1.38-.09l-5.38.39,10.36.52-3.59-.82Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m161.48,552.87l.23-.65-5.32.08,4.37.67c.22-.06.46-.09.73-.1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m162.39,550.27s-.02,0-.03,0l-6.83,1.66,6.32-.1.55-1.56Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m19.68,517.17c.24-.03.52-.03.76,0l3.2-2.37-4.98.96-2.16.54,3.18.87Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m104.33,535.1l-.8-.04s.08.04.11.07l.69-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m99.77,535.07c.3-.05.67-.05.97,0h.64c.08-.04.16-.08.25-.1l-4.03-.2,1.8.31h.37Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m91.61,534.78l-.98.08-.6.12,2.9.07c.14-.07.31-.12.51-.15l-.31-.05c-.46.11-1.1.08-1.51-.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m101.32,533.19h.22s-3.64-1.44-3.64-1.44c-.36.02-.74-.02-1.02-.12l-9.39.84,2.49.69,2.41.54h.07c.34,0,.65.05.88.14l8.23-.59-.26-.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m357.32,502.45l-.56-.08c.12.02.24.05.34.09h.22Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m268.04,493.29l-.06.2c.08.02.16.03.23.06l2.03-.08-2.2-.19Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m292.75,496.25l1.95.07c.1-.04.23-.07.35-.08v-.19s-2.31.21-2.31.21Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m296.83,501.01s.05,0,.08.01l.17-.04-.25.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="288.37 493.34 288.56 494.46 292.59 493.23 292.54 493.22 288.37 493.34" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m295.57,493.37c-.22.07-.52.1-.8.09l-2.73.83,6.37-.83-2.84-.1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m293.41,503.03l7.32.6-3.21-.68c-.38.07-.87.03-1.17-.08l-2.94.16Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m296.5,497.64l1.8-.42-2.2.21.1.19c.1,0,.2,0,.3.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m295.64,496.22s.03,0,.05,0l1.84-.42-1.91.17.02.24Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m294.89,500.81l.92-.09-.63-1.25c-.14,0-.27-.02-.39-.03l-3.56.68,3.66.69Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m295.47,497.74s.1-.03.15-.05l-.11-.19-2,.19,1.96.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="221.69 498.58 223.36 498.33 221.92 498.41 221.69 498.58" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m222.1,497.11c.1-.03.23-.05.35-.06h-.96s.6.06.6.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m220.69,500.64s.03,0,.05,0l3.51-.8-2.33-.2-1.17.25-.06.73Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m222.68,495.86c.2-.05.47-.08.72-.07l.18-.19-2.08.14,1.19.12Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m267.85,494.45l.02.56,3.2.13-3.2-.69h-.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m267.27,489.7l-2.09-.17,1.96.44s.05,0,.08,0l.06-.26Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m267.57,492.86l.17-.61s-.09-.02-.13-.03l-3.88.31,3.84.32Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m260.75,491.25l-4.64-.46,3.92,1.14c.07,0,.15,0,.22,0l.5-.68Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m256.43,493.38l7.6.27-3.51-.73c-.25.03-.56.02-.79-.03l-2.46.32-.84.17Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m375.48,504.18l-3.57-.06c-.26.11-.67.16-1.04.12l-2.21.66,6.82-.72Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m356.88,504.91s.07,0,.1.01l.25-.06-.19-.02-.17.02v.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m356.83,504.43l.2.02,3.91-.52-4.06-.59c-.05.01-.11.02-.17.03l.12,1.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m335.56,495.12l.23.06s-.06-.03-.09-.05h-.15Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m361.37,503.2l.61.09-.12-.1c-.15.02-.33.02-.49,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m354.39,502.04l1.58.32c.12-.02.26-.03.4-.03s.26.01.38.03l-2.27-.34s-.05.01-.08.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m333.38,498.49c.39-.03.8.03,1.05.16l1.98.07-5.59-1.05,2.56.82Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m363.4,504.36c-.21.02-.45.02-.65,0l-1.24.31,1.99-.24-.09-.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m356.24,504.38l-.11-.99c-.11-.01-.22-.03-.31-.05l-4.41.58,4.83.47Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m318.23,495.31l.66-.06h-.94s-.05,0-.08.02c.13,0,.26.02.37.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m316.8,490.77s.08.02.12.03l.27-.02h-.4Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m322.84,494.53h.59c-.1,0-.2-.02-.29-.03l-.3.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="316.88 492.6 320.29 492.55 320.69 492.52 318.31 492.04 317.08 491.84 316.75 491.89 316.88 492.6" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m304.58,498.24l.46-.11-.34.04s-.08.05-.12.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="317.63 493.71 317.79 494.2 320.41 494.04 317.63 493.71" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m324.32,493.62l1.46.12.6.02-2.5-.58c-.3.03-.64.01-.88-.06l-2.27.17,1.06.13,1.55.13c.33-.05.73-.01.99.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="302.97 499.83 304.55 499.69 305.46 499.54 303.29 499.47 302.97 499.83" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m321.3,496.5l-2.95-.27c-.27.08-.67.1-.98.05l-2.19.45,6.12-.22Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m369.02,501.95c.26-.14.72-.22,1.14-.17l3.37-.95-3.26.29c-.2.14-.53.22-.92.22-.11,0-.22,0-.32-.02l-3.25.78,3.25-.15Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m486.73,523.55l.45-.07h-.06s-.71.02-.71.02c.12.01.23.03.33.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m488.24,522.67s-.05-.01-.07-.02l-.12.02h.19Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m424.19,538.78l.9,1.69h.03c.12,0,.24,0,.35.02l6.94-2.25-8.21.53Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m489.48,521.65l1.54-.19-6.52-.27,3.58.46c.2-.06.44-.09.7-.09s.51.03.71.1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m223.2,497.06l-.02.04s.06.02.1.03l.66-.06h-.74Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="498.88 522.55 497.67 522.52 497.81 522.59 498.88 522.55" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="263.78 570.5 263.08 570.26 260.76 570.5 263.78 570.5" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m424.97,545.24l-6.57-1.32s-.08.02-.12.02l.42,1.22,6.27.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m415.61,540.95l1.87,1.77c.09,0,.2-.01.3-.01.14,0,.27,0,.4.02l4.94-1.51-7.5-.27Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m432.48,541.72l-6.36-.18c-.08.04-.17.07-.28.1l.51.68,6.13-.59Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m373.84,498.16l-5.99.56s-.1.06-.17.09l1.37,1.37.55-.02,4.24-2Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m380,499.64l5.5-.07c.07-.03.15-.06.24-.08l-.85-1.39-1.15-.05-3.73,1.58Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m329.57,495.66l2.06.47-.19-.22c-.37.02-.74-.06-.96-.19l-.92-.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m330.5,494.83l.17.03-.02-.03c-.05,0-.1,0-.15,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m413.51,504.6l-2.34.49,6.89-.33-3.38-.24c-.31.11-.79.14-1.17.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="417.35 502.69 413.88 502.69 417.94 503.36 417.35 502.69" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m384.59,497.69h-.02s.08.01.08.01h-.01s-.03-.01-.05-.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="496.74 522.11 497.99 522.14 496.46 521.99 496.74 522.11" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m274.33,568.7l.52-.12-8.89-2.82c-.38.05-.83.03-1.17-.05l-7.74,1.42,7.66,2.57,9.62-1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m200.31,498.38l-.15.39,2.78-.33-2.53-.09s-.06.02-.09.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="200 499.18 199.91 499.4 201.65 498.98 200 499.18" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="200.76 497.37 201.01 497.33 200.79 497.34 200.76 497.37" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m199.83,497.42s.07,0,.1,0l.02-.02h-.13Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m174.02,547.03l-6.28-1.57c-.33.05-.75.05-1.08,0l-9.45,2.22,5.19,1.37c.16-.03.33-.04.51-.04.25,0,.49.03.69.07l6.57-1.2,3.85-.84Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m207.59,497.08l-3.89.62,2.25.08c.24-.09.61-.13.94-.1l.7-.59Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m206.23,500.64l4.51-1.48-9.45.89,4.25.64c.2-.04.45-.06.69-.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m210.08,498.83l-2.77-.2c-.26.08-.64.11-.96.07l-3.29.8,7.02-.66Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m202.15,496.84l.43-.03h-.31s-.08.02-.12.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m191.23,502.91s.02,0,.03.01l5.8-2.34-5.09.85-.74,1.49Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m168.34,508.6c.19-.03.4-.04.6-.03l.24-.25c-.08-.03-.14-.06-.2-.09l-2.95-.17,2.31.53Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m91.48,515.99l-2.91-.64c-.4.08-.92.05-1.25-.07l-5.71.48,9.88.23Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m162.44,551.82l6.84-.1-5.84-1.45c-.15.03-.31.04-.48.04l-.52,1.51Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m81.83,514.61h.94s-.62-.07-.62-.07c-.1.03-.2.05-.31.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="193.68 499.11 194.91 498.78 193.78 498.93 193.68 499.11" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m192.5,500.4l-.3.6,3.74-.62-2.77-.09c-.19.07-.42.11-.67.12Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m167.66,505.23c-.39,0-.73-.08-.93-.22l-.4-.03c.24.04.43.12.56.22l1.87.21-.78-.2c-.1.01-.21.02-.32.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m335.54,536.2l-.03-.24c-.15,0-.28-.03-.41-.05l-2.77.53,3.21-.23Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m330.8,523.66c.23-.07.52-.11.83-.1l.28-.4-4.73.06,3.62.44Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="333.49 526.77 332.39 525.52 327.34 525.61 333.49 526.77" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="329.12 521.35 331.35 521.52 331.16 521.35 329.12 521.35" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m284.82,524.16l-4.41-1.35c-.45.05-.99-.02-1.3-.17l-3.98.05,9.68,1.47Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m323.31,521.61l-4.04.25-.7.07.44.1,3.12.53c.18-.04.39-.07.61-.07.33,0,.62.05.84.14l5.4-.34-4.2-.62c-.44.12-1.09.09-1.47-.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="336.41 525.06 332.29 524.63 332.28 524.63 332.72 525.13 336.41 525.06" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m279.69,521.68l-.03-.2-2.7-.22,2.53.46c.06-.02.13-.03.21-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m330.94,524.68l-2.89.53,4.01-.07-.35-.4c-.26.02-.54,0-.76-.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m324.62,526.05l-.13,1.9,7.56-.6-7.09-1.35c-.1.02-.22.04-.33.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m216.52,525.21l-.26.73,5.37-.36-4.44-.48c-.19.06-.42.1-.67.11Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m322.22,523.61l-3.27.7,4.23-.12-.36-.53c-.21,0-.42-.02-.6-.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m251.64,520.59c.1-.02.2-.04.31-.05l.05-.85c-.19-.02-.36-.06-.51-.12l-3.66.26,3.8.75Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m279.22,517.96l-2.98.45,3.28-.07.02-.32c-.11-.01-.22-.03-.32-.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="215.59 527.8 222.08 525.94 216.12 526.34 215.59 527.8" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m251.78,518.6h-.52s.37.04.37.04c.05-.02.1-.03.15-.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m275.35,520.74l4.24.34-.06-.38c-.26-.02-.48-.07-.66-.14l-3.51.18Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m254.08,517.36l-1.28-.03,2.28.36c.18-.04.39-.07.61-.07.31,0,.59.05.8.13l1.46-.09.39-.06-.75-.06-.84-.04c-.47.14-1.19.1-1.57-.08l-1.09-.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m256.44,516.49l4.81-1.26-5.49-.15.43,1.39c.09,0,.17.01.26.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m310.97,522.7l-1.88.27,3.05.67,2.83.45c.07-.02.14-.03.21-.04l-.42-1.73-3.78.38Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m305.53,524.28l-.02-.68c-.15-.02-.28-.04-.41-.07l-4.99.69,5.42.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m305.43,526.21s.1-.02.15-.02l-.04-1.52-6.73-.08,6.62,1.63Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m323.7,524.96l-.26-.38-3.18.09,3.33.33s.07-.02.11-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m295.32,524.83l-4,.37,6.59,1.96c.12-.02.24-.02.37-.02.27,0,.52.03.73.1l4.62-.58-7.05-1.74c-.4.07-.91.03-1.24-.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m243.09,529.37c-.15.03-.31.05-.49.06l-.65,2.07,7.95-.82-6.81-1.31Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m306.15,519.95l-3.17.31-3.54.47,1.52.44,5.89,1.3,6.03-.85-6.03-1.68c-.22.03-.48.03-.7,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m242.1,528.24s.09-.01.14-.02l.1-2.01-5.94.39,5.7,1.63Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="241.34 531.56 241.98 529.5 234.2 532.29 241.34 531.56" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="242.45 524.19 236.88 526.19 242.36 525.83 242.45 524.19" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m301.41,527.74l4.39.29-.1-.68c-.19-.01-.37-.04-.52-.09l-3.77.48Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m306.64,529.7c.17,0,.32.03.46.07l5.7-.9-6.35-.41.19,1.24Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m230.01,540.33s.02,0,.02.01h.15s-.17-.01-.17-.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m315.33,522.28l.42,1.73c.13,0,.26.02.37.05l4.44-.95-5.05-.86c-.06.02-.12.03-.17.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m315.32,529.45c-.16-.01-.31-.04-.45-.07l-5.41.86,6.01.26-.15-1.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m309.98,526.29l10.87-.76-4.48-.45c-.35.12-.87.14-1.28.07l-5.11,1.14Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m306.09,523.6l.02.69,5.39.07-5.09-.82c-.1.03-.21.05-.33.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m306.12,524.67l.04,1.51c.09,0,.16.02.24.03l6.55-1.46-6.82-.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m306.28,527.34l.11.73,5.02.33-4.99-1.08s-.09.02-.14.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m258.14,543.76v-.68s-5.29-.49-5.29-.49l5.05,1.2c.08-.02.16-.03.24-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m382.14,519.62c.06,0,.13,0,.2,0,.08,0,.16,0,.23,0l4.17-1.52-5.59.51.99,1.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="399.38 519.22 400.57 520.7 405.9 520.6 399.38 519.22" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m393.72,517.75l4.1.42c.37-.12.95-.14,1.35-.03l3.99-.64-9.45.25Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m382.73,521.66l-.42-.9c-.11,0-.22-.01-.33-.02l-5.11,1.46,5.85-.54Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m389.88,518.16c-.05.01-.1.02-.15.03l-3.44,1.03-2.05.75,6.46.61c.28-.09.68-.14,1.03-.1l4.88-1.66-5.94-.6-.8-.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="366.23 524.14 365.47 523.4 361.36 523.66 366.23 524.14" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="388.91 527.65 383.7 527.36 389.39 528.67 388.91 527.65" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="365.75 522.99 369.59 522.75 365.11 522.37 365.75 522.99" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m371.79,519.79l-5.5,1.9,6.49.54c.31-.11.77-.15,1.15-.1l6.2-1.77-7.33-.68c-.27.09-.66.14-1.01.1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m404.05,524.55c-.41.16-1.12.17-1.57.03l-1.44.17,5.08-.06-2.06-.15Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="398.81 530.16 393.29 529.71 399.59 531.48 398.81 530.16" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="398.5 528.6 399.22 529.81 404.97 530.28 398.5 528.6" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m229.21,541.44l-.15.73,5.41.3-4.85-1.07c-.13.02-.27.04-.41.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m400.89,521.08l.34.42s.09,0,.15,0c.2,0,.4.02.58.06l2.99-.55-4.06.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="392.45 525.88 399.35 525.9 394.38 525.59 392.45 525.88" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m402.44,523.62l-.88-.96c-.24.01-.51,0-.72-.05l-4,.82,5.48.24s.08-.03.12-.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m402.19,522.6l.83.91c.06,0,.13,0,.19,0,.3,0,.57.04.78.12l3.24-.31-5.05-.71Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m361.58,526.28s.02,0,.02,0l-.42-.42-3.98.1,4.38.32Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m390.37,529.82c-.13.02-.27.03-.41.03-.42,0-.78-.08-1.03-.21h-2.42s7.89,1.31,7.89,1.31l-4.03-1.13Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m266.06,537.62l-4.67-1.08c-.48.09-1.09.04-1.46-.11l-9.63,2.64,7.44,1.3c.32-.08.76-.1,1.11-.05l8.42-2.36-1.2-.33Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m243.03,524.17l-.08,1.63,6.25-.41-5.89-1.25c-.09.02-.18.03-.28.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m278.35,541.53c-.06,0-.12-.01-.18-.02l-7.85,2.17,8.1.19-.08-2.34Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m258.79,541.53s-.06,0-.1.01l.02,1.21,6.04.57-5.96-1.79Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m258.72,543.76c.26.02.49.08.69.15l4.64-.27-5.34-.5v.62Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m235.18,542.89l-6.19-.34-.22,1.12c.13.02.25.04.36.07l6.05-.85Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m228.22,540.28h-.06s.05,0,.05,0t.01,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="229.76 538.79 226.04 538.98 227.31 539.06 229.73 538.83 229.76 538.79" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m257.55,541.43l-6.13.64,6.7.63v-1.16c-.22-.02-.41-.06-.57-.11Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m315.72,532.16l-.19-1.27-6.02-.27,6.11,1.55s.06,0,.09-.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m343.87,529.21l.25,1.01,6.57-1.04-6.29-.12c-.15.07-.33.12-.53.15Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m325.92,530.87l6.89.73c.17-.06.37-.1.59-.11l.55-3.49-8.03,2.87Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m342.64,526.85l.74,1.19s.04,0,.06,0c.1,0,.19,0,.28.02l4.93-1.71-6.01.51Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m269.36,538.54l-.89,4.67s.03,0,.05,0l8.46-2.33-5.21-1.67-2.41-.68Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m353.07,528.43c.24-.12.59-.19.98-.19.17,0,.33.01.47.03l3.64-.91-9.75.97,4.66.09Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m315.26,533.22c-.07-.03-.13-.05-.19-.08h-.66s.85.08.85.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m329.7,533.61l4.23-.54-.25-.39c-.17,0-.34,0-.49-.03l-3.49.96Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m363.57,528.84c.06-.02.12-.05.19-.07l-1.17-1.43c-.06,0-.12,0-.17,0l-3.13.64-2.33.58,6.61.27Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="361.48 525.46 365.72 525.34 362.88 525.1 360.99 524.97 361.48 525.46" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m254.32,518.8l.76.02-.51-.07c-.08.02-.16.04-.25.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="248.6 516.46 251.06 516.52 244.79 515.64 248.6 516.46" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m251.84,524.86s.09.01.13.02l6.6-1.47h-.13s.41-.06.41-.06l-6.27-1.66c-.06,0-.13.02-.19.02l-.56,3.14Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m252.53,520.55c.18.02.34.06.48.11l4.78-.42-4.77-.61c-.13.04-.28.07-.45.08l-.05.85Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m244.64,518.61l.19.47c.3,0,.56.05.78.14l2.71-.19-3.51-.45c-.06.02-.12.03-.17.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m225.19,530.21l5.97,1.96c.19-.02.4-.02.59,0l9.25-3.31-6.07-1.74c-.22.03-.47.03-.69.01l-9.06,3.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m235.29,522.83l-.38,3.08,6.14-2.21-5.36-.93c-.12.03-.26.05-.4.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m245.11,517.7l3.07.06-.72-.11c-.19.05-.4.07-.63.07-.38,0-.72-.07-.95-.2h-1.39c.24.03.46.09.61.18Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m237.05,522.17l5.1.88c.31-.07.73-.09,1.07-.03l7.01-1.82-.57-.04.39-.03-4.71-.93c-.29.07-.67.07-.98.03l-7.31,1.95Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m280.04,519.57c.07,0,.14.02.21.03l4.73-.98-4.89.1-.05.85Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m260.72,520.77l-4.6.41,11.01.69-5.06-1.03c-.42.08-.98.05-1.34-.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m289.64,525.63l.49,1.3c.4,0,.76.1.98.23l4.01.1-5.48-1.63Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m290.45,528.1c-.23.03-.51.03-.75,0l-.53.42,5.38.75-4.1-1.17Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m289.03,525.6c-.36-.01-.68-.08-.9-.2h-3.78s5.18,1.51,5.18,1.51l-.49-1.3Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m296.75,521.1l-7.01.97,5.99,1.73c.09-.01.19-.02.28-.02l.92-2.63c-.06-.01-.13-.03-.19-.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m270.81,519.15l-3.7.28,8.16.33-3.07-.54c-.43.1-1.02.07-1.39-.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m287.73,518.88l-6.05,1.26,5.55,1.25c.15-.03.32-.04.49-.04.26,0,.49.03.69.08l6.83-.93-6.55-1.61c-.3.05-.67.04-.97-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m231.14,533.36s-.05,0-.08-.01l-6.28,1.77,6.26-.28.09-1.48Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m219.04,529.67l-3.41-.71c-.13.02-.27.04-.41.05l-.32,1.2,5.72-.12-1.58-.42Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m198.06,529.08l-.6.85,5.96.29-4.78-1.18c-.17.03-.37.04-.57.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m207.11,530l6.02-1.55-5.85-1.14c-.34.07-.8.07-1.14,0l-6.02,1.21,6.06,1.49c.29-.05.65-.05.93,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="196.2 531.72 199.8 531.26 203.73 530.63 197.19 530.31 196.2 531.72" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m199.45,525.96l-.16.4,3.6.1-2.94-.56c-.16.03-.33.05-.51.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m198.68,527.93s.03,0,.05.01l5.27-1.05-4.85-.14-.47,1.19Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="221.3 530.46 214.79 530.6 214.33 532.33 218.04 531.41 221.3 530.46" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m221.91,534.82l1.32-4-7.78,2.28,6.14,1.74c.1-.02.2-.02.31-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="214.63 528.97 209.39 530.33 214.3 530.22 214.63 528.97" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m213.55,532.52h.02l.13-.03.49-1.88-5.7.12,5.06,1.79Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="223.8 530.93 222.51 534.83 229.92 532.74 227.14 531.82 223.8 530.93" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m225.19,526.15l-.98,3.41,8.31-2.83-6.68-.69c-.19.06-.41.1-.65.11Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m226.08,525.17s.07.04.1.06l7.88-2.61s-.06-.04-.09-.06l-7.88,2.61Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m233.75,526.05c.16-.05.36-.09.57-.1l.38-3.1-7.6,2.52,6.65.69Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m223.17,529.66c.14-.03.28-.05.44-.05l.99-3.47-7.71,2.2,6.29,1.31Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m210.77,526.31l4.88-.32.29-.81s-.01,0-.02,0l-5.16,1.14Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m206.12,526.23c.33-.07.77-.08,1.1-.01l2.69-.59,2.14-.62-10.05.44,4.12.78Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m289.13,527.96c-.05-.02-.1-.05-.14-.07l-5.69-.18,5.22.73.6-.48Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m209.08,526.81l5.42,1.05c.15-.03.32-.05.5-.06l.51-1.42-6.43.43Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="242.82 528.19 249.21 525.77 242.92 526.18 242.82 528.19" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m287.69,522.52c-.33,0-.63-.06-.85-.16l-4.3.17,5.98,1.83-.83-1.84Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m280.96,521.82l1.92-.08-2.65-.22.02.14c.27.02.51.07.7.15Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m280.21,520.67s-.08.01-.11.02l.08.44,3.24.26-3.2-.72Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m270.96,521.8c.17-.03.35-.05.55-.05.38,0,.73.07.96.19l2.54-.03-7.26-.76,3.2.65Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m289.6,524.45l2.22-.1,2.05-.19-5.56-1.61.84,1.86c.16,0,.31.02.45.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m269.98,520.99s-.08-.03-.1-.05l-.58-.02.68.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m281.78,525.59c-.46.06-1.01,0-1.33-.15l-7.47.19,4.24.95c.16-.03.34-.05.53-.05.45,0,.83.09,1.08.24l7.88.25-4.93-1.43Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m277.23,527.7l-3.91.88,6.52.86-1.81-1.71c-.26.03-.56.01-.8-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m280.77,529.36c.37,0,.7.06.95.17l2.84-.13-5.63-1.49,1.56,1.47c.09,0,.19-.01.28-.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m251.26,524.84l.56-3.14s-.03,0-.05,0l-7.13,1.86,6.27,1.34c.11-.02.23-.03.35-.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m259.41,532.13l-6.67-.95c-.16.05-.35.08-.56.08l-.85,3.55,8.09-2.68Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="260.71 529.55 260.45 527.66 254.35 530.22 260.71 529.55" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m252.21,530.05l6.75-2.83h-.28s.28-.06.28-.06l-6.45-1.13-6.28,1.88-2.08.79,7.29,1.4c.23-.05.51-.07.78-.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m269.93,526.9l-.37-.98c-.19,0-.36-.02-.52-.06l-5.24,1.01,6.13.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m271.31,521.13l.8.08-.64-.12c-.05.01-.1.02-.16.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m268.63,519.88l1.56.2c.2-.06.44-.09.7-.09.34,0,.65.06.87.15l1.51-.08-4.64-.19Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m266.29,525.53l-11.43.08,5.17.9c.36-.08.86-.09,1.23,0l5.03-.97Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m260.97,531.39l-.2-1.45-6.24.66,4.74.67,1.47.17c.08-.02.15-.03.23-.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m287.5,530.29c-.41.02-.81-.05-1.09-.16l-1.43.07,2.65.26-.13-.16Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m278.58,530.11l-6.94-.91c-.15.04-.31.07-.49.08l-.17,2.85s.08,0,.12.02l7.48-2.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m269.95,524.31l-4.66-.37,3.81.82c.18-.03.38-.05.6-.05l.25-.4Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m270.15,525.87s0,0-.01,0l.39,1.03,4.33.02-4.71-1.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m261.64,531.38l6.39-2.2-6.69.7.21,1.5s.06,0,.09,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m269.79,532.24c.17-.06.38-.11.62-.13l.17-2.83-7.08,2.45.27.03,6.02.48Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m281.28,530.55c-.29.05-.65.06-.94.01l-6.84,1.86,13.36-.52-5.59-1.35Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m286.9,529.1c.25-.04.55-.05.81-.01l.4-.32-5.16-.72,3.95,1.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="287.96 530.87 285.32 530.61 288.33 531.34 287.96 530.87" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m271.44,528.11l3.56-.8-4.32-.03.29.78c.17,0,.32.02.47.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m276.98,523.37l4,1.08c.13-.02.27-.03.42-.03.41,0,.76.08,1,.2h2.84s-8.25-1.25-8.25-1.25Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m270.87,522.86c-.05-.02-.1-.03-.15-.04l-6.63.64,6.1.48.68-1.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m275.71,524.76l-5.16-.41-.27.42c.12.03.22.07.31.11l5.12-.13Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m270.39,528.11l-.31-.83-5.43-.03,5.58.89c.05-.02.1-.03.16-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m271.45,522.94l-.66,1.05,7.24.57-6.09-1.65c-.15.02-.32.03-.48.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m268.56,528.73l-7.24-1.16c-.09.02-.19.04-.3.06l.26,1.86,7.28-.76Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m255.26,525.21l11.53-.08-5.59-1.2c-.32.06-.73.06-1.05,0l-2.41.53-2.48.75Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m260.25,522.82c.13-.02.28-.03.43-.03.3,0,.58.04.8.12l6.29-.6-12.39-.78,4.87,1.3Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m220.71,516.3c.1-.02.21-.03.33-.04l.28-1.58c-.13-.02-.26-.05-.36-.08l-5.8.53,5.55,1.17Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m409.28,520.27l4.87-.58-5.63-.32.2.8c.21.01.4.04.56.09Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m404.32,521.95l10.16.21-5.31-.9c-.34.08-.82.09-1.17,0l-3.68.68Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="381.91 516.91 382.77 516.96 382.1 516.86 381.91 516.91" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="413.29 519.04 408.17 518.02 408.42 518.99 414.37 519.32 413.29 519.04" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m415.58,523.31l4.66.1-1.06-.46c-.4.1-.97.1-1.35-.02l-2.84.34.59.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m408.57,530.17h.04c.09,0,.18,0,.26,0l6.42-2.32-8,.14,1.28,2.18Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m418.29,521.87l-1.59-.15,1.23.21c.11-.03.23-.05.36-.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m412.72,524.26c.16-.03.35-.05.55-.05.32,0,.61.05.84.13l2.52-.19-4.63-.29.73.39Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m419.27,521.97c.08.02.15.05.21.08h.63s-.84-.08-.84-.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m380.19,517.61l.62.64,4.37-.39-4.95-.26s-.03.01-.04.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m312.11,518.31l-5.01-1.61c-.37.04-.8,0-1.09-.11l-5.33.41,11.42,1.3Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="308.58 515.65 305.89 514.99 306.36 515.41 308.58 515.65" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m417.22,528.23c-.06,0-.13,0-.19-.01l-6.14,2.23,7.01-.41-.68-1.81Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m315.57,515.3l4.83,1.32h0l-.12-.93-5-.47.29.09Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m264.81,506.28l.16-.51-4.2.57,3.37.08c.18-.08.42-.13.68-.14Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m319.6,514.63l-4.05.22,4.68.44-.07-.54c-.21-.02-.4-.06-.56-.12Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="311.22 503.8 311.05 503.62 309.74 503.52 311.22 503.8" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m375.37,518.74l4.8-.44-.57-.58c-.18.01-.38,0-.56-.02l-3.67,1.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m221.44,537.69l-.31.8s.08.02.12.02l5.63-1.04-5.44.21Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m257.59,507.14l.4,1.41,4.51-1.25.35-.14-4.89-.12c-.1.05-.23.08-.37.1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m220.83,537.72l-5.07.2,4.14.62c.19-.05.41-.08.65-.08l.28-.73Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m222.04,540.44l-.41-.05s-.08.02-.12.03l.53.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m238.59,546.31c.19.02.37.05.53.1l7.03-.83-7.3-2.09c-.05,0-.11.01-.17.02l-.09,2.8Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m327.97,534.23l6.9.64c.06-.02.12-.04.17-.05l-.88-1.37-6.19.79Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m244.57,541.8l-2.89-.47-2.8-.35c-.48.06-1.05,0-1.39-.15l-5.16.24,5.5,1.21c.17-.03.37-.05.58-.05.34,0,.65.05.89.14l5.55-.51-.28-.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m192.24,537.75s.02.01.03.02l5.2.09-4.42-.62-.8.51Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m218.91,540.36l1.06.03c-.06-.02-.11-.04-.16-.06l-.9.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="221.48 536.02 215.53 537.54 220.98 537.32 221.48 536.02" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m194.83,536.7c-.29.04-.64.04-.92,0l-.35.22,4.06.57-2.78-.78Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m279.35,545.91l6.35-1.49-6.68-.15.05,1.61c.1,0,.19.02.28.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m316.86,533.76l.15.32c.37,0,.69.07.93.17l2.86-.11-3.94-.39Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m222.63,535.98c-.17.04-.36.06-.56.07l-.48,1.25,6.79-.27-5.75-1.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m324.7,533.82l-.8-2.15c-.17,0-.33-.02-.47-.05l-5.14,1.09,6.3,1.13s.08-.02.12-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m317.09,535.73l4.6.5-4.19-.97c-.11.02-.22.03-.34.04l-.08.42Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="278.93 541.53 279.01 543.88 286.08 544.04 278.93 541.53" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="306 539.59 298.46 536.25 298.21 538.88 306 539.59" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m297.97,533.6l.38,1.37c.27.01.52.05.72.12l5.1-.5-6.2-.99Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m362.95,518.46l-5.56,1.73,6.04-.47-.32-1.25c-.06,0-.11,0-.16-.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m411.1,535.95c-.34,0-.67-.04-.92-.14l-4.01.33,5.28.36-.35-.56Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="424.91 521.63 423.83 520.28 420.02 520.04 424.91 521.63" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m424.92,522.79h-.09s.11.01.11.01c0,0-.01,0-.02-.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="423.36 518.88 424.19 519.91 428.79 520.2 423.36 518.88" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m402.15,535.44c.33,0,.62.05.85.14l5.62-.46-7.19-1.22.72,1.54Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m269.79,552.97s.09,0,.13.01l7.59-2.4-7.12-.47c-.19.07-.41.13-.67.15l.08,2.72Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m376.04,535.27l-6.95,2.67,7.67-.24-.62-2.42s-.07,0-.1,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m269.05,548.39l.3.56c.3,0,.59.03.82.09h.02s3.73-.54,3.73-.54l-4.88-.11Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m377.38,540.13l-.52-2.05-7.37.23,7.81,1.83s.06,0,.09-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m271.37,507.23c.19-.05.42-.08.67-.08l1.44-2.19-6.44,1.73,4.33.54Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m217.26,506.1l-.08.19,2.19.41-1.91-.6c-.06,0-.13,0-.2,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m274.65,503.82l2.03-.44-5.62.5,2.33.05c.31-.14.84-.18,1.26-.11Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m383.42,508.75l-3.27.51,4.25-.03-.32-.42c-.23,0-.47-.02-.66-.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m216.19,508.51s.06.01.09.02l6.27-.85-.07-.02-5.46-1-.83,1.86Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m198.04,536.66l3.95,1.1c.1-.02.22-.02.33-.03l.2-.64-4.48-.43Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="385.39 510.54 384.69 509.62 379.77 509.65 385.39 510.54" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m201.04,534.89l-5.37-1.91c-.38.03-.81-.01-1.1-.12l-6.52.58,6.04,2.06c.1-.01.2-.02.3-.02.31,0,.6.05.83.12l2.96-.29,2.84-.44Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m363.62,521.43c.08-.02.15-.04.23-.05l-.33-1.28-6.15.48,6.24.85Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="175.09 517.22 174.81 517.13 173.44 517.49 175.09 517.22" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m228.23,510.14l-3.53-.26v.29c.18.02.35.06.49.12l3.05-.15Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m240.51,511.94s.06,0,.09-.01l.05-.87-4.59-.33,4.45,1.22Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m223.71,511.18l-4.24.46,9.45.55-4.11-.96c-.35.06-.79.03-1.1-.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="176.88 517.32 177.81 517.59 177.1 517.29 176.88 517.32" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="241.64 509.24 247.96 508.47 242.46 507.99 241.64 509.24" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m176.44,517l-.15-.07c-.19.01-.4,0-.57-.03l-.13.03.44.13.42-.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m240.7,510.24c-.15-.02-.29-.05-.41-.09l-3.38.25,3.76.27.03-.42Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m239.12,514.14c.44-.05.94.02,1.23.16h5.17l-4.35-1.3c-.41.05-.89-.01-1.17-.14l-4.89.07,4.02,1.2Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m168.25,518.82l5.18,1.36c.13-.02.28-.03.43-.03.24,0,.47.03.66.08l6.99-1.04-.64-.28-4.91-1.44-6.81,1.11-.91.24Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m181.99,534.88c.2,0,.39.02.56.05l.26-.15-3.57-.47,2.29.61c.15-.02.3-.03.47-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="184.77 533.66 178.19 533.78 183.36 534.46 184.77 533.66" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="201.38 539.14 202.33 539.15 201.49 539.09 201.38 539.14" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="130.97 517.86 130.03 518.68 134.87 517.58 130.97 517.86" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m199.63,538.96l-.38-.03.32.03s.03,0,.06,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m242.85,507.4l-.15.22,3.12.27-2.5-.52c-.15.03-.3.04-.47.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m124.8,518.32l3.49.55c.26-.07.59-.09.89-.06l1.01-.89-5.07.36-.31.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="173.69 516.38 173.84 516.37 173.34 516.28 173.69 516.38" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m391.02,521.59l-4.19,1.05,10.75-.56-5.39-.56c-.32.1-.8.13-1.18.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="389.35 527.29 393.58 527.53 389.03 526.6 389.35 527.29" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="372.44 530.37 371.71 530.31 372.3 530.4 372.44 530.37" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m389.98,528.63c.24,0,.45.03.65.08l4.38-.71-5.47-.31.44.95Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m397.86,528.57c-.26,0-.5-.02-.7-.07l-4.67.76,6.09.5-.71-1.19Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m374.27,529.66l-1.19-1.45c-.26.02-.52,0-.74-.05l-4.85.97,6.69.57s.06-.02.1-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m355.03,534.07l-.95-1.66s-.08,0-.12,0l-5.39,2.66,6.46-1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m370.34,525.92l-4.39.71,6.13.51s.05-.02.08-.03l-.97-1.12c-.28.02-.59-.01-.84-.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m383.13,523.53l-3.55.75,9.3-.53-4.41-.3c-.35.13-.92.17-1.34.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m379.18,525.48l.03.03.63.02-.62-.07s-.02,0-.04.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m376.9,526.84l-5.07-.88.91,1.05c.06,0,.12,0,.19,0,.31,0,.6.04.83.12l3.16-.29Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m398.29,519.19l-4.78,1.63,6.41-.11-1.23-1.51c-.13,0-.27,0-.41-.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="396.06 524.18 394.56 524.12 394.72 524.23 396.06 524.18" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m354.98,529.29c-.17.07-.4.13-.64.15v.99s6.71-.88,6.71-.88l-6.07-.25Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m354.32,531.19c.08,0,.15.02.21.03l3.96-.95-4.17.55v.37Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m365.27,532.17l6.08-1.53-4.35-.74-1.63-.14c-.35.13-.91.17-1.35.09l-7.36,1.76,7.28.65c.35-.12.9-.16,1.34-.09Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m400.65,521.6l-.41-.51-3.94.07,4.33.45s.02,0,.02,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m388.5,522.94l4.23.29c.35-.14.94-.17,1.37-.08l3.26-.67-8.85.46Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="381.33 527.7 382.07 528.29 385.21 528.59 381.33 527.7" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m387.46,521.61l-3.98.36.21.44c.14,0,.28.02.41.03l3.37-.84Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m366.84,524.05c.08,0,.16,0,.24,0,.12,0,.24,0,.35.02l3.38-1-4.68.3.72.69Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m373.22,523.25l-2.89.86,3.92-.39-.47-.46c-.19.02-.38,0-.56-.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m374.62,524.3s.09-.04.14-.06l-.16-.16-2.05.2,2.06.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m374.36,523.14l.52.52,4.23-.42-4.66-.14s-.06.02-.09.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m364.51,528.67c.21,0,.41.02.59.06l4.84-.97-6.66-.55s-.06.02-.09.03l1.17,1.43c.05,0,.1,0,.16,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="375.04 531.27 374.16 531.12 369.41 532.05 367.31 532.58 375.41 532.63 375.04 531.27" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m362.19,526.15c.08,0,.16-.01.25-.01.24,0,.47.03.67.08l3.21-.51-4.45.12.32.32Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m383.01,529.82c-.33.02-.67-.02-.92-.1l-2.19.27-1.74.34,5.8.65-.94-1.17Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="375.56 525.76 379.26 526.4 378.85 525.89 375.56 525.76" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m382.76,522.58c.1-.05.22-.08.35-.11l-.2-.44-4.58.42,4.43.13Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m382.89,520.71l.42.9,5-.46-5.21-.5c-.06.02-.13.04-.2.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m379.52,525.91l.35.44c.05,0,.1,0,.15,0,.3,0,.56.04.78.11l3.5-.37-4.79-.18Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m381.21,528.21l-.84-.67c-.4.05-.85,0-1.16-.1l-3.02.28.2.03,4.82.46Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m377.35,525.44h.29s-.04,0-.06-.01h-.23Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m375.34,524.12c.08,0,.15,0,.23,0,.19,0,.37.02.53.05l2.02-.42-2.88.28.1.1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m392.86,524.18l-1.39.18,2.5-.1-.03-.02c-.35.05-.78.02-1.08-.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m390.48,525.35l-.8-.05-3.74-.08c-.11.05-.24.09-.38.12l2.15.23c.4-.13,1.03-.14,1.45-.03l1.33-.2Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m388.45,526.65c-.28,0-.54-.04-.75-.11l-3.99.43,5.02.29-.28-.6Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="133.74 518.68 137.38 518.32 137.9 517.73 133.74 518.68" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m223.42,521.19l-4.12-.44c-.32.1-.79.13-1.17.07l-5.61,1.49,10.89-1.12Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="212.63 523.37 215.9 523.89 222.23 522.06 223.59 521.57 210.53 522.91 212.63 523.37" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m236.71,517.9h2.93s-2.49-.33-2.49-.33c-.13.03-.27.06-.42.08v.25Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m218,519.74c.2-.05.44-.07.68-.05l.82-1.05-6.11.21,4.61.9Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m247.95,510.9c.13-.02.26-.03.41-.03.17,0,.34.02.48.05l1.95-.38,2.7-.75-9.92.09,4.38,1.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m251.34,509c-.35.08-.85.08-1.19-.01l-3.95.49,7.92-.08-2.78-.4Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m236.73,516.52s.06,0,.09.01h0s-.09-.01-.09-.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="219.8 518.24 220.47 517.38 214.81 518.41 219.8 518.24" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m237.32,516.16s-.02-.01-.02-.02h-.46s.46.03.46.03l.02-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="219.33 519.69 225.42 518.44 220.16 518.62 219.33 519.69" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m353.74,531.19v-.29s-4.3.57-4.3.57l3.51-.06c.19-.11.47-.19.78-.22Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m221.9,514.71l-.28,1.57c.09.02.18.03.26.05l4.85-.7-4.52-.97c-.09.02-.2.03-.31.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m221.84,517.34c-.22.05-.48.08-.73.07l-.63.81,5.53-.19-4.16-.69Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="142.63 518.18 137.74 518.67 136.73 519.81 142.63 518.18" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m222.55,513.42l-.04.06,2.05.09-1.34-.22c-.19.05-.44.07-.67.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="280.48 516.18 280.55 516.1 279.55 516.28 280.48 516.18" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m219.83,513.36l2.05.09.09-.12c-.06-.02-.12-.04-.16-.06l-1.98.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m228.72,517.56v-1.3c-.12-.02-.24-.03-.35-.07l-4.55.66,4.57.76c.1-.02.21-.04.33-.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m212.11,505.75l-.7-.13-.66-.03c-.32.12-.85.15-1.24.07l-2.69.5,5.28-.41Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="375.51 530.85 375.54 530.95 377.85 531.34 375.73 530.81 375.51 530.85" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m373.69,528.16l1.16,1.41c.06,0,.12,0,.17,0,.28,0,.55.04.77.1l4.1-.51-6.2-1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m354.87,532.28c-.07.02-.14.04-.22.06l.95,1.64,6.68-1.03-7.41-.66Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m397.25,527.42c.33-.07.74-.07,1.08,0l4.84-1.11-11.59-.04,5.67,1.16Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m405.92,526.72c-.19,0-.38-.02-.55-.05l-4.57,1.05,5.65-.1-.53-.9Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m344.4,531.34c.07,0,.13,0,.2.02l5.18-1.64-5.56.88.19.75Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m356.48,535.43c.08,0,.15,0,.22,0l5.09-2.02-5.98.92.63,1.09h.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m353.76,529.44s-.03,0-.05,0l-5.8,1.84,5.84-.77v-1.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m289.66,514.52c-.09.03-.19.06-.31.08l.08.26c.26.01.49.05.67.12l2.99-.22-3.44-.25Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="280.61 516.89 283.67 516.23 280.87 516.52 280.61 516.89" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m279.63,515.21l.66-.02s.09-.04.14-.07l-.8.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m282.98,515.91h-.76c-.06.05-.13.08-.22.1l.97-.1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m287.5,517.88c.38-.12.96-.14,1.37-.03l5.92-.94-.52-.12-6.77-.54-5.1,1.1,5.11.54Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m281.79,515.04l.52-.1-.7.07c.06.01.12.02.17.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m285.71,515.11l2.64-.04c.13-.07.3-.13.5-.17l-.08-.26c-.14,0-.27-.02-.4-.05l-2.66.51Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m289.38,516l1.69.14-1.16-.2c-.16.03-.34.06-.53.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m288.61,513.06l.27.46h.01c.15,0,.3.01.43.03l2.96-.71-3.67.21Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m168.23,515.56l-.59,1.37,4.94-.45-2.76-.81-1.06-.18c-.16.03-.35.06-.54.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="299.27 489.61 301.63 489.18 301.7 488.74 299.27 489.61" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m294.31,492.55c.17-.05.4-.09.63-.08l4.33-1.71-3.1.12c-.23.11-.59.16-.94.14l-4.78,1.34,3.87.2Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m295.1,488.44l.45,1.56,4.28-1.54-4.51-.08c-.07.02-.15.04-.22.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m301.56,489.59l-2.13.39,1.53-.06c.15-.07.34-.12.56-.14l.03-.19Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="301.68 493.75 299.83 494.35 301.69 494.02 301.68 493.75" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="285.95 490.41 281.91 490.38 281.94 491.38 285.95 490.41" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m287.47,492.16c.2-.04.44-.06.67-.04l3.75-1.05-7.48.74,3.06.36Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="287.89 487.38 283.28 488.87 288.1 489.76 287.89 487.38" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m281.88,489.43l.02.56,3.17.02-3.16-.58s-.02,0-.02,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="301.53 491.59 301.48 490.87 298.1 492.2 301.53 491.59" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m241.93,492.33l-.78.22,5.6,2.02h.09c.07,0,.13,0,.2,0l3.53-1.01h-.36s.76-.11.76-.11l.18-.05-4.94-1.8-4.28.73Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m302.57,497.08l-2.3.53,1.97-.07.86-.17-.19-.28c-.12,0-.23,0-.34-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m288.2,490.71l-2.27.55,5.38-.53-2.28-.1c-.23.07-.55.1-.84.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m299.49,499.34l2.31.44c.17-.03.38-.04.58-.03l.27-.3-2.81-.1h-.34Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m303.49,497.02l.17.25,2.32-.45-2.26.11c-.06.03-.14.07-.23.09Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m295.82,499.52l.57,1.14,3.75-.37-4.09-.78c-.08,0-.15.01-.23.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m301.61,492.73l-.05-.74-3.89.69,3.6.12c.1-.03.21-.06.34-.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m294.68,494.96c.2-.07.48-.1.74-.08l3.19-1.04-7.18.93,3.25.19Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="274.99 491.02 277.59 491.27 275.05 490.63 274.99 491.02" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m267.36,489.32l.09-.4c-.05-.01-.1-.02-.15-.03l-2.74.2,2.81.24Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m261.92,490.53l-.31.42,3.12.31-2.59-.74c-.07,0-.15,0-.22,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m267.98,491.3c.36-.03.74.03.97.15l.58.03-2.2-.36.65.19Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m267.8,489.98c.08.02.15.03.22.05l2.2-.09-2.38-.2-.05.24Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m252.23,490.7l-1.58.13-2.67.46,4.49,1.64h.07c.17,0,.34.02.48.05l5.19-.68-5.26-1.54c-.25.02-.52,0-.73-.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m247.03,491.46l4.63,1.69s.05-.03.08-.05l-4.56-1.67-.14.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m268.32,492.29l-.18.62,3.53.3-3.31-.92s-.03,0-.04,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m260.46,488.5c.12-.02.24-.03.38-.03.2,0,.39.02.55.07l.93-.07-2.58-.08.72.12Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m261.01,490.89l.33-.45c-.13-.04-.24-.1-.32-.17l-.1-.02-5.04.14,5.13.51Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m280.76,492.88c.1-.02.22-.03.34-.03.18,0,.35.02.5.05l2.38-.26-5.52-.21,2.3.44Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m308.82,494.44l-.16-1-3.75,1.27,3.46-.14c.12-.06.27-.1.45-.13Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="281.87 488.41 285.54 487.22 281.88 487.48 281.87 488.41" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m284.32,485.73l3.48.64c.16-.02.35-.03.52-.02l3.52-.91-7.52.29Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m281.89,486.12v.98s3.88-.28,3.88-.28l-3.84-.7s-.02,0-.03,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m274.75,493.19c.06,0,.13,0,.2,0,.24,0,.45.03.62.08l2.18-.11-5.53-.67,2.53.7Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m274.89,491.64c.1.02.2.04.28.07l2.12-.07-2.36-.24-.04.24Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m274.31,491.62l.05-.28-2.28-.23,2.19.51s.03,0,.04,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m271.49,490.66l2.92.29.06-.35c-.09-.01-.17-.03-.24-.05l-2.73.11Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m301.83,498.54h.81c.28-.13.76-.18,1.15-.12l.12-.03c-.23.01-.47,0-.66-.05l-1.41.2Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m315.9,489.32l-4.09.95,4.17.1-.07-1.05h-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m352.38,500.15l-2.51.03,3.53.82-.34-.73c-.27,0-.5-.05-.69-.13Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m348.72,501.74l.28,1.59c.13,0,.25.03.36.05l4.59-.6-5.06-1.04h-.17Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m353.65,500.22l.38.81c.17,0,.33.03.47.06l3-.39-3.85-.48h0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m346.99,500.46l-.15-.12c-.09.01-.17.02-.28.02l.42.1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m350.81,498.57l-1.44-.05,2.79.61-.4-.41c-.35.02-.73-.04-.95-.15Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="357 501.6 361.04 502.2 360.66 501.43 357 501.6" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m348.42,500.69l-.53-.13.17.14c.12-.01.24-.02.36-.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="346.4 499.21 346.75 499.31 349.56 499.42 349.67 499.42 345.9 498.59 346.4 499.21" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m378.6,501.37c.07,0,.15,0,.21.02l4.09-1.02-1.33.02-3.25.17.28.82Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m375.82,502.98l2.96-.34-.19-.22c-.15,0-.31,0-.44-.02l-2.33.58Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m377.47,500.6l-4.08,1.15,4.2-.19c.12-.06.26-.11.43-.15l-.28-.83-.26.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="344.26 501.81 348.4 503.25 348.13 501.74 345.63 501.74 344.26 501.81" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="385.29 497.73 386.17 497.77 385.23 497.65 385.29 497.73" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m360.68,503.09l.41.06c-.08-.02-.16-.04-.23-.07h-.18Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m358.23,506.61l-1.67.23-.72.13.94.08,1.74.03c.36-.16,1.01-.19,1.44-.08l2.59-.35-3.27-.14c-.27.1-.69.15-1.05.11Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="371.43 501.84 371.61 501.83 375.66 500.69 375.47 500.7 371.43 501.84" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m361.63,502.16c.1,0,.19.01.28.02l4.2-1.01-4.86.23.37.76Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m349.2,500.87s.02,0,.02.01h.03-.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m324.01,495.39l-2.66.33,3.87.35c.17-.05.37-.07.6-.07.34,0,.64.06.84.17h.03s1.65.06,1.65.06l-3.49-.8c-.28.04-.61.02-.85-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m322.47,491.15l-1.8.14-.91.14,6.89.8-3.44-1.01c-.26.02-.53,0-.74-.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="319.18 489.22 322.49 490.13 322.18 489.41 319.18 489.22" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m329.51,493.21l-2.09-.05,2.78.64-.11-.47c-.23-.02-.43-.06-.58-.13Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="311.93 492.64 312.54 492.66 316.29 492.61 316.18 491.98 311.93 492.64" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="316.57 490.37 320.53 490.47 316.5 489.36 316.57 490.37" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m315.52,490.74l.32.04s.1-.02.15-.03h-.47Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m330.79,493.82c.28.02.53.09.69.19l1.45.12-2.23-.7.09.39Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m316.22,495.49l.69-.06c.05-.03.11-.05.17-.07-.09,0-.18-.01-.26-.03l-.92.18.32-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m329.8,494.68h-.27s.41.06.41.06c-.05-.02-.09-.04-.14-.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m339.98,498.71c.43-.03.88.06,1.12.22l.74.07-3.03-.67,1.17.38Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m339.31,499.58l-.72-.02,3.03.45-1.15-.28c-.41.05-.89-.01-1.16-.15Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m338.92,497.86l-.9-.1,2.89.63-.91-.3c-.44.02-.86-.07-1.08-.23Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m345.17,498.51c-.4.01-.76-.07-.97-.2l-1.01-.08,1.3.44,1.05.3-.37-.46Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m332.37,496.22c.44-.02.84.08,1.05.23l.71.08-1.9-.49.14.17Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m341.89,501.02c.08,0,.16,0,.24,0,.27,0,.52.04.71.1l2.62-.14-7.49-1.12,3.92,1.16Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m331.81,497.16l-1.54-.11-.72-.02,5.74,1.08-2.65-.85c-.3.02-.61-.02-.84-.09Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m336.42,494.31c.34-.02.7.03.92.14l1.77.04-4.44-.73,1.75.54Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="244.8 494.82 239.88 493.04 239.48 494.65 244.8 494.82" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m83.86,512.85l.98.07-.6-.11c-.12.02-.24.04-.37.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="84.72 511.65 89.41 510.53 85.72 510.62 84.72 511.65" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m72.48,516.47l6.05.25-1.81-.37c-.42.09-.99.05-1.34-.08l-2.51.16-.38.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m91.91,510.79l-5.83,1.39,10.81.27-4.43-1.63c-.18.01-.38,0-.55-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m80.49,514.61h.56c-.12-.02-.23-.04-.33-.07l-.23.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m79.01,513.33c.12-.02.26-.03.4-.03.25,0,.48.03.67.09l.95-.34-4.33-.29,2.3.57Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m75.56,515.32c.19-.05.4-.07.63-.07.28,0,.53.04.74.11l1.13-.37-4.82-.02,2.32.36Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="78.91 514.6 79.21 514.6 79.27 514.58 78.91 514.6" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m98.68,512.14c.06,0,.13,0,.2,0l1.15-1.8-5.98.1,4.63,1.71Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="78.62 515.23 81.42 515 79.34 514.99 78.62 515.23" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="127.57 501.73 128.41 500.76 123.04 501.63 127.57 501.73" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m126.13,502.87c.15-.02.32-.03.48-.02l.63-.74-4.64-.1,3.53.86Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="100.28 509.95 101.19 508.51 95 510.04 100.28 509.95" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m119.71,502.28l-6.28,2.58,1.96.59,1.92.43.48.09c.16-.02.33-.03.5-.02l6.73-2.51-4.87-1.19c-.14.02-.29.03-.44.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m129.08,500.77l-.85.98,4.45.1-3.28-1.09c-.1,0-.21.01-.31,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m101.86,508.46l-.94,1.48,5.72-.09-4.5-1.4c-.09,0-.18.02-.28.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m103,507.57l.07.03,7.71-2.24s-.03-.02-.05-.03l-7.73,2.24Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m111.48,505.58l-7.8,2.26,1.91.76,6.74,1.6,3.63.37,6.73-3.04-3.99-.56c-.17.04-.36.06-.57.06-.4,0-.74-.08-.95-.21l-.82.11.66-.25s-.01-.01-.02-.02l-4.88-1.1c-.2.03-.45.03-.66.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="75.35 534.22 81.95 532.61 68.85 533.15 69.75 533.4 75.35 534.22" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m52.11,527.93c.17,0,.33.01.47.04l7.12-1.75-11.29.86,3.28.88c.13-.02.27-.03.42-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m51.71,523.53c-.22.03-.49.04-.72.02l-3.17,2.7,7.14-1.85-3.26-.87Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m46.84,526.45l3.25-2.76-7.4,1.7,3.49,1.07c.21-.02.45-.03.66,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m58.65,529.96c.13,0,.26,0,.38.02l7.92-2.34-13.11.95,4.46,1.39c.11-.02.23-.02.35-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m78.81,530.33c-.4.03-.82-.03-1.1-.15l-9.77,2.63,15.54-.65-4.67-1.83Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="43.25 523.3 41.96 524.69 48.36 523.22 43.25 523.3" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m134.6,501.57c.06,0,.13,0,.2,0,.1,0,.19,0,.28.01l.85-.67-4.23-.3,2.9.97Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m76.83,530l-8.61.36-1.4,2.18c.09.02.17.05.25.08l9.76-2.62Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="66.25 532.44 67.57 530.39 60.46 530.68 63.31 531.63 66.25 532.44" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m43.01,514.41l-4.42.29-3.49.33,12.53.82-4.01-1.43c-.2.02-.42.01-.61-.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m72.97,517.37c.15-.03.32-.05.5-.05.28,0,.55.04.76.11l3.76-.36-7.82-.32,2.8.61Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m56.33,517.62c.12-.02.23-.02.36-.02.22,0,.42.02.59.07l6.23-1.09-11.28-.15,4.1,1.19Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m41.21,524.75l1.35-1.45-6.02.09,4.16,1.36c.16-.02.34-.02.51,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="60.64 517.9 60.49 517.93 70.86 517.76 67.65 517.05 60.64 517.9" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m45.74,514.23l3.94,1.41c.08,0,.16,0,.24,0,.26,0,.49.03.69.09l5.84-.73-10.7-.76h-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m34.6,522.65c.17,0,.34.02.49.04l7.58-1.73-13.64-.2,5.31,1.9c.08,0,.16-.01.25-.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m30.19,515.31l-.06-.02-8.95,2.15s.03.02.04.03l8.97-2.16Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m27.06,519.96c.16,0,.32.02.47.04l9.23-2.18-2.33-1.01-3.53-1.25-9.37,2.25,5.35,2.16c.06,0,.12,0,.19,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="192.29 498.74 192.42 498.51 190.96 498.92 192.29 498.74" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="218.8 493.34 220.87 492.97 221.26 492.88 219.02 492.98 218.8 493.34" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="218.61 492.61 219.12 491.74 214.87 492.79 218.61 492.61" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m224.92,494.74s.02,0,.04.01l5.68-.36-2.54-.81-2.1-.56-1.08,1.73Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="225.23 491.87 225.8 491.73 226.02 489.02 221.24 491.03 225.23 491.87" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m224,494.69c.1-.02.2-.03.34-.02l1.05-1.69-5.1.91,3.71.8Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m207.87,496.13c.22-.09.55-.14.87-.12l.53-.56-3.66.65,2.26.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m209.46,494.47c.22-.08.51-.12.81-.1l.59-.63-3.06.66,1.66.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m210.01,495.39l-.62.66,3.86-.41-1.88-.22-.8-.06c-.17.03-.37.05-.56.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="136.63 500.95 135.77 501.62 140.55 501.22 136.63 500.95" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m232.64,490.67l-5.21,1.78,5.25,1.68s.1,0,.15,0c.06,0,.12,0,.17,0l5.3-1.63-5.44-1.83c-.08,0-.15,0-.22,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="226.4 491.58 229.77 490.72 231.28 490.2 226.61 488.88 226.4 491.58" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="235.09 490.49 239.41 491.94 239.35 490.73 235.09 490.49" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="239.11 496.11 244.08 495.18 239.38 495.03 239.11 496.11" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="239.92 490.37 243.75 490.58 239.86 488.82 239.92 490.37" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m385.53,498.13l.79,1.29h.01c.09,0,.19,0,.28.02l3.96-1.08-.16-.02-4.88-.2Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="232.52 489.66 232.66 488.46 228.49 488.53 232.52 489.66" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="234.56 490.08 239.34 490.34 239.27 488.68 234.56 490.08" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m204.21,495.15l-4.67.74,1.38.1c.28-.08.7-.11,1.03-.05l4.52-.81-1.16-.04c-.29.1-.75.13-1.1.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m211.65,493.64l-.7.75,3.97-.5-2.63-.3c-.19.05-.42.07-.64.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="166.8 503.97 168.9 503.98 169.83 503.61 165.19 503.45 166.8 503.97" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="168.21 502.36 171.82 502.12 172.41 501.37 166.97 502.16 168.21 502.36" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m165.86,504.94l-.65-.05.31.08c.1-.02.22-.02.33-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="172 502.73 173.88 502.37 172.19 502.48 172 502.73" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="144.13 502.48 147.04 502.66 147.2 502.66 146.81 502.53 144.13 502.48" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m163.69,502.63l.4.02h.08c-.12-.02-.23-.04-.34-.07l-.13.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m141.21,503.56l-2.06.33-1.8.42,8.08-.03-3.27-.7c-.3.05-.67.04-.95-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m173.05,501.38l-.54.69,3.84-.26-2.78-.47c-.16.03-.33.04-.52.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m181.07,501.67l3.1.31c.22-.06.5-.08.76-.07l5.17-1.72-2.81-.08c-.25.1-.63.14-.97.1l-5.26,1.45Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m187.51,497.72l-.45,1.42,4.33-1.21-3.4-.28c-.14.04-.3.06-.47.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="239.94 490.76 239.99 491.99 243.66 490.97 239.94 490.76" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m193.06,497.29c.26-.08.62-.1.92-.06l.3-.21-2.69.15,1.47.12Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m198.13,499.68s.08-.03.12-.04l.1-.27-2.08.25,1.85.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="198.51 498.96 198.63 498.66 196.69 499.18 198.51 498.96" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m180.7,499.28l-1.1,1.85,1.57-.37,3.33-.92h-.31s.38-.06.38-.06l-3.41-.55c-.13.03-.28.04-.44.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m178.42,501.36c.11-.02.23-.03.35-.04l.1-.02,1.13-1.9-4.99,1.39,3.41.58Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m186.12,499.24c.1-.02.21-.03.33-.04l.47-1.46-4.12.96,3.33.54Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m181.51,554.8c-.08,0-.15.01-.23.02l-.34,1.31,6.13.58-5.57-1.91Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m300.74,561.01c-.27.05-.6.06-.9.03l-9.32,3.41,18.39-1.44-8.17-2Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m310.91,562.35l1.01-5.25-9.94,3.22,6.77,1.65,1.89.4c.09-.01.18-.02.27-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m255.97,561.38l8.89-1.6-7.89-1.85c-.38.07-.85.07-1.22,0l-9.03,2,7.78,1.46c.22-.05.46-.08.73-.08s.52.03.74.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="342.77 554.61 336.42 553.7 343.16 555.71 342.77 554.61" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m323.45,558.11l-1.38-3.28-4.48.83-3.04.73,8.77,1.74s.08-.02.13-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m332.82,557.49c-.19,0-.37-.03-.53-.06l-5.7,1.24,6.65.31-.42-1.5Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m340.89,556.06l-8.59-2.58.74,2.64c.4.01.74.08,1,.2l6.85-.27Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m288.52,565.5c-.3.06-.68.07-1.01.04l-8.2,2.79,17.84-.86-8.63-1.97Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m324.67,558.12l6.16-1.34-8.2-2.04,1.4,3.32c.23,0,.45.02.65.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m322.58,559.02s-.05-.05-.06-.08l-9.48-1.89c-.16.03-.34.06-.53.07l-1.01,5.26c.21.02.41.07.57.13l10.52-3.48Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m266.75,570.23c.23,0,.45.02.65.06l3.82-.87-5.61.58.76.25c.12-.01.26-.02.39-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m275.43,575.19l-8.61-1.64-.16,1.91c.3.03.57.09.78.18l7.99-.45Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m266.85,573.16l7.47,1.42-7.31-2.94h-.03l-.13,1.52Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m259.71,565.68l-4.32.29v.35c.15.01.3.03.44.07l3.88-.71Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m267.77,565.26l8.56,2.71c.26-.03.55-.03.81,0l8.49-2.88-17.86.18Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m276.12,569.29l-6.92,1.59,16.84.91-8.77-2.48c-.36.05-.8.04-1.15-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m314.49,505.48l-2.14-.6c-.09.01-.19.02-.3.02-.36,0-.67-.07-.89-.18l-1.56-.03,4.88.8Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m278.47,576.19c-.52.05-1.12-.02-1.49-.17l-7.27.41,15.62,2.13-6.87-2.37Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m298.83,560.74l-9.88,3.61c.1.04.19.09.27.15l9.87-3.62c-.1-.04-.19-.09-.26-.14Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="386.06 548.38 386.09 548.38 386.12 548.38 386.06 548.38" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="349.16 555.15 342.75 552.92 343.24 554.29 349.16 555.15" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m386.34,546.45l-5.2-1.06,1.08,2.32c.33,0,.63.05.87.12l6.08-.67-2.82-.72Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="391.17 550.9 387.78 550.12 383.6 549.35 383 549.48 383.68 551.05 391.17 550.9" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m391.73,547.98c-.35,0-.67-.04-.92-.12l-1.13.12-2.12.48,4.6.24-.42-.73Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m398.84,544.4l.73,1.36h.03c.3,0,.58.04.81.11l5.81-.73-7.38-.74Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m396.72,546.31l-11.95-1.21,6.37,1.62c.16-.02.33-.04.51-.04.32,0,.61.04.84.12l4.22-.49Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m399.8,547.04c-.36.02-.74-.02-1.03-.11l-3.91.46,5.59.44-.65-.79Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="397.67 548.99 392.31 547.92 392.79 548.74 397.67 548.99" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="382.45 549.61 375.99 551.07 375.55 551.22 383.08 551.06 382.45 549.61" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m353.75,557.68l-.81-1.13c-.44.02-.88-.05-1.18-.17l-4.95.28,6.94,1.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m352.55,551.72s-.09.02-.14.02l.56,3.47c.21.01.4.04.58.08l7.99-1.31-8.99-2.26Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m351.83,551.76c-.26-.02-.49-.06-.69-.12l-6.83.76,8.07,2.81-.55-3.44Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m379.87,548.66l-4.12-.76-4.7-.66s-.06.02-.1.02l2.28,3.53h.1c.12,0,.23,0,.33.02l6.2-2.15Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m363.47,553.42l-.17-3.01c-.22-.02-.42-.05-.59-.11l-8.19.95,8.74,2.2c.07-.01.14-.02.21-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m373.4,553.73l-.25-1.61c-.1,0-.2-.02-.3-.03l-6.39,1.75,6.94-.1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m368.02,547.14l-6.45.71,1.58,1.29c.17-.02.36-.03.54-.02l4.33-1.97Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m372.65,550.87l-2.28-3.53c-.08,0-.16,0-.24,0l-4.93,2.25,7.42,1.29s.02,0,.02,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m212.71,560.33l1.2-2.19c-.06-.01-.11-.02-.16-.04l-8.98,1.34,7.03,1c.26-.07.58-.12.91-.1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m138.39,541.92c-.07,0-.15,0-.22,0h0l-.96,2.03,7.26.41-6.07-2.44Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m155.25,546.99l.84-2.04-7.34-.06,6.19,2.12c.09,0,.2-.02.3-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m138.23,540.64l1.07-1.93-7.41-.2,5.99,2.14c.11,0,.23-.02.35-.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m136.62,543.92l.97-2.05s-.05-.01-.08-.02l-8.69,1.62,7.8.44Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="254.91 562.72 254.37 562.59 246.29 563.88 252.66 565.77 254.82 565.62 254.91 562.72" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m182.42,549.34l-5.49-1.55c-.23.03-.49.04-.74.02l-3.34,3.4,9.56-1.87Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m176.3,546.52l.3-1.68-6.91.15,6.27,1.57c.11-.02.23-.03.35-.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="153.55 550 154.54 548.35 147.52 550.34 153.55 550" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m155.78,548.26c-.18.03-.38.04-.58.04l-1,1.66,6.58-.38-5-1.32Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m146.63,544.04c.19,0,.37.02.53.04l8.81-2.15-6.96-2.53c-.27.02-.57.01-.82-.03l-8.43,2.01,6.64,2.67c.07,0,.15,0,.22,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m118.18,536.19c.26-.05.57-.06.84-.03h.09s.82-.62.82-.62l-5.34-.05,3.49.71h.09Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="112.73 534.18 112.43 534.76 117.08 534.41 112.73 534.18" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m123.04,537.38c-.19.04-.4.06-.62.06-.45,0-.85-.09-1.1-.23l-1.63-.02c-.05.02-.1.04-.16.06l4.78.39-1.27-.25Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m112.76,532.94c-.15,0-.3-.02-.43-.04l-.45.85.45.02.43-.83Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m129.67,534.84l1.02-.98-6.14.55,4.1.52c.28-.08.67-.12,1.02-.09Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m130.11,537.65l1.15-.93-4.55.15c-.33.08-.77.09-1.12.03h-.37s3.89.79,3.89.79c.3-.07.69-.08,1.01-.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m135.41,540.82l-5.39-1.93c-.41.03-.86-.01-1.17-.12l-7.35.68,13.91,1.37Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="120.69 535.54 119.93 536.13 120.65 536.1 124.83 535.59 120.69 535.54" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m181.3,553.48l1.15-1.66-8.05.17,6.2,1.52c.21-.04.46-.05.7-.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m239.98,566.4l-6.37-1.87c-.21.03-.45.04-.69.02l-1.28,1.7,8.34.15Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m233.38,562.38c-.17-.03-.33-.07-.47-.12l-5.66.46,5.89.3.23-.63Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="220.24 564.21 221.24 563.31 214.43 564.46 220.24 564.21" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m242.67,565.93l.79-1.53c-.22-.04-.41-.1-.56-.19l-6.54.06,5.76,1.69c.17-.03.36-.04.55-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m245.26,566.26l4.49-.3-5.18-1.54c-.16.02-.34.03-.52.03l-.8,1.53c.27.05.5.14.66.24l1.34.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m254.19,570.26l.45-2.57c-.36-.04-.67-.14-.88-.27l-8.13-.24,8.39,3.09c.05,0,.11-.01.16-.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m254.8,566.01l-1.08.07.85.25c.07,0,.14-.02.21-.02v-.3Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="250.82 566.28 249.25 566.38 251.39 566.45 250.82 566.28" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m223.28,563.22c-.36.12-.88.17-1.33.12l-.95.85,7.89-.34-5.61-.63Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="193.45 552.02 184.02 554.02 191.89 554.18 193.45 552.02" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m87.94,534.26l2.08-.17-4.49-1.24c-.28.04-.63.04-.91-.01l-6.97,1.71.22.03,10.06-.33Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m201.68,558.77l1.96-3.54s-.05,0-.07-.02l-11.05,1.99,8.39,1.64c.23-.05.49-.08.76-.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="201.02 554.75 192.25 554.57 190.79 556.59 201.02 554.75" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="183.09 551.81 181.91 553.52 190.74 551.65 183.09 551.81" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m409.45,545.83c-.41.06-.91.03-1.26-.08l-5.6.71,13.23,1.1-6.37-1.74Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m221.43,559.76l-6.34-1.6c-.19.03-.4.05-.6.04l-1.2,2.19c.12.03.23.05.33.09l7.81-.72Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m222.49,561.96l.28-.41-5.23-.18,4.02.68c.27-.07.6-.1.93-.09Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m212.32,557.4l-7.55-2.14c-.17.02-.35.03-.53.03l-1.96,3.54c.06.01.11.03.16.04l9.88-1.47Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m493.32,519.71l1.09,1.14c.06,0,.13,0,.2,0,.13,0,.26,0,.38.03l4.08-1.14-5.76-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m467.2,509.8l-2.04.29,7.17.2-3.88-.5c-.37.1-.89.1-1.26,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="472.92 509.58 477.22 510.14 476.67 509.64 472.92 509.58" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m474.67,508.48l-3.8.69,5.37.08-.8-.73c-.26.02-.55,0-.77-.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m461.95,510.75l-2.58.54-1.51.43,7.21,1.61c.26-.05.58-.05.84-.02l3.78-1.06-4.7-.98-3.06-.54Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m470.96,511.7c.28-.05.65-.06.95,0l3.89-.91-10.7-.3,5.87,1.22Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="460.36 509.6 459.79 509.24 457.22 509.15 460.36 509.6" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m457.55,508.43l-2.16.27,3.76.13-.56-.36c-.34.05-.75.03-1.05-.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="506.92 516.59 508.36 516.78 512.91 516.17 505.74 514.64 506.92 516.59" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="460.04 508.86 462.34 508.94 459.54 508.54 460.04 508.86" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="476.97 509.26 481.11 509.31 476.17 508.53 476.97 509.26" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m494.27,511.9l-3.94.88,5.1.38-.7-1.23c-.17,0-.33-.01-.47-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="496.94 514.71 497.85 514.93 502.66 514.1 496.32 513.62 496.94 514.71" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="496.09 513.22 501.72 513.64 495.38 511.98 496.09 513.22" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m504.51,514.59l-3.26.56-1.28.29,2.08.5,4.2.56-1.13-1.85c-.22,0-.42-.02-.6-.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m487.8,512.31c.29-.06.66-.06.95,0l3.69-.83-10.71-.47,6.07,1.3Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m477.91,510.1c.08,0,.16,0,.24,0,.22,0,.42.02.6.07l2.95-.45-4.3-.06.51.45Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="452.97 507.04 457.35 507.48 456.79 506.94 452.97 507.04" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m484.64,510.06l-3.48.53,9.45.41-4.87-.93c-.34.07-.79.06-1.11-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m461.29,509.66c.13-.02.27-.03.41-.03.23,0,.44.03.62.07l2.13-.3-3.78-.13.61.39Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="402.6 501.73 406.6 502.02 402.28 500.97 402.6 501.73" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m409.52,502.9l-2.26.11,2.96.37c.17-.05.37-.07.59-.07.34,0,.64.06.85.16l2.17.02-3.1-.52c-.38.08-.9.05-1.21-.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m422.65,505.24l-3.88,1.08,10.27-.22-5.52-.9c-.25.05-.58.07-.87.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m415.68,506.11c.27-.08.65-.1.97-.06l3.59-1-9.41.46,4.86.61Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="404.5 500.66 409.57 501.89 408.86 500.74 404.5 500.66" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m393.81,500.75c.18,0,.35.03.49.07l5.09-.54-6.27-1.51.69,1.98Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m401.14,500.87l-4.2.45,5.03.37-.31-.74c-.19,0-.37-.03-.52-.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="399.69 501.91 402.26 502.35 402.14 502.09 399.69 501.91" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m399.88,506.78h.02c.14,0,.27.01.39.03l4-.99-4.84.24.44.72Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m425.99,507.4c.27-.08.64-.1.95-.06l2.95-.86-9.6.21,5.7.71Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="441.06 507.12 440.6 506.8 438.1 506.68 441.06 507.12" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m447.68,507.43l-2.08.25,5.48.62c.38-.11.94-.11,1.32,0l2.37-.3-5.76-.58c-.37.12-.95.12-1.33.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="440.86 506.43 443.08 506.53 440.41 506.1 440.86 506.43" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="444.45 508.76 447.52 508.68 443.6 508.24 444.45 508.76" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m441.92,507.16c.11-.01.23-.02.35-.02.24,0,.46.03.65.08l1.91-.23-3.37-.15.47.32Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m438.49,505.96l-1.59.17-.5.09,3.61.17-.51-.36c-.34.04-.74.02-1.02-.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="429.01 507.62 428.9 507.65 433.85 507.6 432.83 506.9 429.01 507.62" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="434.66 507.59 438.53 507.55 433.52 506.81 434.66 507.59" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m449.28,533.41c-.26.04-.55.04-.81.01l-3.48,1.08,5.17-.49-.88-.6Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m457.04,528.98c.35-.09.83-.1,1.2-.03l5.38-1.22-10.05.03,3.14,1.16.33.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m459.19,525.72l6.67,1.27c.31-.07.73-.08,1.06-.03l3.81-.98-11.54-.26Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m466.62,528.14c-.23.01-.48,0-.69-.04l-5.9,1.34,7.95.38-1.37-1.67Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m483.16,525.95l-3.41-.49c-.35.05-.76.02-1.06-.06l-2.76.41,10.09.61-2.86-.48Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m473.04,525.23c.25,0,.49.03.69.08l2.44-.36-.45-.07-8.6-.46,5.27.88c.19-.05.41-.07.65-.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m485.62,523.52l-1.83.04s-.08.04-.13.07l1.47.03c.13-.07.3-.11.48-.14Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m483.99,522.57l-.99.05c.14,0,.27.03.39.05l.6-.1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="479.43 521.33 481.44 522.3 485.42 522.11 479.43 521.33" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m482.16,522.65l.03.02s.07-.02.1-.02h-.13Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m448.06,530.79l.74,1.42h.02c.29,0,.56.04.77.1l6.52-2.43-8.05.9Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m442.21,535.6c-.17.02-.37.03-.56.02l-3.95,1.69,5.67-.81-1.16-.89Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m425.26,541.73c-.17,0-.37,0-.53-.02l-3.66,1.12,4.67-.45-.48-.64Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m436.16,538.27c-.26.14-.65.24-1.1.24-.12,0-.23,0-.34-.02l-5.07,1.64,11.54-1.97-5.03.11Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m489.45,522.63s-.03,0-.04.01h.11s-.07-.01-.07-.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m417.7,543.97c-.18,0-.35-.02-.5-.05l-5.35,1.15,6.26.08-.4-1.18Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="455.96 533.46 449.88 533.27 450.86 533.94 455.96 533.46" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m407.98,542.68l.98,1.9h.02c.22,0,.42.02.59.06l6.05-1.29-7.64-.66Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m438.31,532.27c-.24.08-.55.13-.88.12l-4.83,2.42,8.13-.19c.24-.15.64-.24,1.09-.24.12,0,.25,0,.37.02l4.41-1.37-8.3-.77Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m392.35,498.74l-4.16,1.13,5.03.91-.71-2.03c-.05,0-.1,0-.16-.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="509.08 517.91 508.39 518.07 510.98 520.08 513.03 520.23 516.37 518.52 509.08 517.91" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="494.12 523.63 491.67 523.58 489.44 523.94 495.13 524.04 494.12 523.63" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m527.28,519.28l-8.52-.58c-.23.08-.5.14-.84.13l-3,1.54,1.83.14,10.53-1.24Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="514.75 520.76 514.27 520.72 514.03 520.84 514.75 520.76" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="515.68 521.65 513.93 521.65 514.22 521.75 515.68 521.65" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="516.93 517.79 516.66 517.59 514.41 517.58 516.93 517.79" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="516.92 517.2 519.68 517.22 516.36 516.78 516.92 517.2" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="522.68 516.27 519.12 516.35 523.41 516.91 522.68 516.27" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m517.6,517.71c.11-.01.23-.02.35-.02.25,0,.49.03.68.09l1.36-.18h-2.55s.16.11.16.11Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m512.16,520.68l.2-.11-.83-.06.24.19c.12-.02.24-.02.38-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m514.59,516.73l-1.24.17-1.2.28,3.98.02-.55-.41c-.33.04-.72.02-1-.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m495.25,521.93c-.4.1-.96.09-1.33-.02l-1.04.13,2.75.06-.38-.17Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="510.14 520.01 507.8 518.21 503.29 519.28 502.97 519.4 503.86 519.54 510.14 520.01" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m501.53,518.97l3.96-1.51-7.89-1.49c-.06.02-.13.03-.2.03l-3.05.69-1.93.56,8.38,1.75c.22-.04.48-.06.73-.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m506.13,518.2l1.21-.29c-.15.02-.31.02-.47,0l-.74.28Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m512.88,521.73c-.35.12-.9.14-1.3.05l-1.09.21,2.66-.17-.27-.09Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="510.69 520.45 508.55 520.28 510.98 520.67 510.69 520.45" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m491.42,509.28l-.66-.1c-.15,0-.28-.03-.4-.05l-2.4.4,4.1.22-.65-.46Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m239.54,487.65c.28,0,.52.04.72.12h2.71l-5.89-.83,2.31.72s.09,0,.15,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="233.46 486.72 233.3 488.06 237.56 487.99 233.46 486.72" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="233.25 488.45 233.1 489.62 237.25 488.39 233.25 488.45" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="245.53 490.35 246.44 488.69 246.21 488.63 243.97 488.53 241.53 488.54 245.53 490.35" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="220.4 489.45 220.2 490.46 223.79 488.95 220.4 489.45" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m220.93,488.07c-.08.02-.17.03-.27.04l-.17.93,3.73-.55-3.28-.42Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m246.11,490.44l4.76-.4-1.17-.43-2.73-.77-.88,1.59s.01,0,.02,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m228.04,486.22c-.14.04-.3.07-.48.07l-.62,1.44,4.11-1.3-3.01-.2Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="232.71 488.07 232.87 486.77 228.52 488.14 232.71 488.07" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m226.28,487.87l.64-1.49-4.32,1.12,3.29.42c.12-.03.25-.04.39-.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m270.44,484.68h-1.01c-.15.07-.35.11-.57.12l-.59,1.33,3.73-1.28-1.56-.17Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m267.58,486.31l.62-1.39-3.7,1.06,2.76.36c.1-.02.21-.03.33-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="274.52 483.25 272.69 483.73 274.59 483.54 274.52 483.25" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m269.43,486.66l4.71.7c.05-.01.11-.02.17-.02l.33-2.22-.55-.06-4.66,1.6Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m261.64,487.82c-.26.04-.57.03-.81-.02l-1.69.19,4.31.14-1.81-.3Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m252.79,489.77c.44,0,.8.11.97.28l5.27-.14-3.55-.63c-.11.02-.23.03-.35.03-.34,0-.63-.07-.83-.18l-4.21-.34,2.65.98h.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m264.1,486.72l-1.2-.16c-.16.03-.34.04-.53.03l-.25.26.91-.04,1.06-.09Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m261.42,486.87l.18-.18-1.43.26.65-.03c.17-.04.39-.06.6-.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m214,490l5.66-2.05s-.05-.03-.08-.04l-5.85,2.12s.01,0,.02.01l.26-.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="197.02 495.04 196.72 495.53 200.27 494.97 197.02 495.04" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m196.97,496.48l-.27-.02c-.05.02-.12.03-.18.04l.45-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m197.88,494.51c-.17.05-.36.07-.58.07l-.04.07,1.78-.04-1.16-.1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="203.96 492.59 203.78 492.61 198.52 493.79 198.61 493.8 203.96 492.59" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m187.38,496.7c.09,0,.19,0,.27.02l1.62-1.21-4.8.53,2.64.68c.09,0,.17-.01.27-.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m193.55,495.98l-2.83-.51c-.2.03-.45.04-.66.02l-1.57,1.18,5.05-.69Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m204.05,494.24c.12-.03.26-.05.41-.07l.31-1.36-4.84,1.09,4.12.34Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m196.05,495.52h.05l.29-.47-3.08.07.97.17,1.77.23Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="196.7 494.56 195.74 494.68 196.63 494.66 196.7 494.56" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m213.4,490.81c-.12.03-.26.05-.4.05l-.26.64,4-.32-3.34-.38Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m219.25,492.59l3.88-.19.3-.07h-.02s-3.31-.7-3.31-.7c-.09.01-.2.02-.3.02l-.55.94Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m274.05,488.25l-3.79.36,4.34,1.05c.08,0,.15-.01.23-.01.13,0,.24.01.35.03l4-.7-4.29-.69c-.27.04-.6.03-.85-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="219.88 489.13 220.05 488.25 216.04 489.7 219.88 489.13" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m219.58,490.65l.22-1.11-4.64.69,4.12.47c.09-.02.19-.04.3-.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m211.68,492.63l.28-.67-3.91.31,3.24.41c.12-.02.24-.04.38-.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m205.67,492.75c-.09.02-.19.03-.3.04l-.32,1.38,4.36-.95-3.74-.47Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="212.37 490.93 208.83 491.81 212.12 491.56 212.37 490.93" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="216.1 491.63 212.58 491.91 212.3 492.57 216.1 491.63" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m301.56,486.78s-.02,0-.02,0l-1.58.38,1.64-.2-.03-.18Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="316.16 488.31 316.34 488.33 318.91 487.53 315.8 487.73 316.16 488.31" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m321.94,488.84l-.49-1.17h-.05l-2.8.86,3.34.3Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m308.72,490.01c.25-.1.63-.14.96-.1l4.3-.99-3.9-.55c-.17.03-.38.05-.58.03l-5.13,1.54,4.35.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="318.77 487.16 315.09 486.59 315.57 487.35 318.77 487.16" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m323.13,490.22c.08,0,.15.01.22.02l2.69-.58-3.23-.21.33.76Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m309.68,487.41l1.58-.59-4.87.8,2.51-.07c.2-.09.49-.14.78-.14Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m309.05,486.7c-.22.1-.57.15-.9.14l-.82.24,2.43-.4-.71.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m314.46,486.59h-.03l-2.65,1,3.17-.19-.5-.8Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="313.72 488.09 315.5 488.25 315.19 487.76 312.56 487.92 313.72 488.09" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="325.76 489.19 322.13 487.88 322.56 488.9 325.76 489.19" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m349.51,497.53l1.62.22c.15-.03.31-.05.48-.05.21,0,.4.02.56.06l2.12-.21-5.16-.1.38.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="349.63 496.54 349.74 496.54 345.16 495.43 345.45 495.53 349.63 496.54" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m330.09,492.34c.3-.02.62.02.84.09l3.65-.13c-2.09-.73-4.18-1.45-6.28-2.18-.02,0-.03-.02-.04-.02-.01,0-.02,0-.03,0-.1,0-.2,0-.3-.02l-3.19.68,5.34,1.57Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="345.74 496.68 348.15 496.59 343.65 495.5 343.77 496.24 345.74 496.68" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m352.97,499.25c.05,0,.1,0,.15,0,.1,0,.2,0,.29.02l2.41-.59-3.48-.06.63.64Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="343.24 496.55 343.24 496.52 343 496.47 343.24 496.55" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m339.64,494.19l-3.04-1.06c-.27,0-.53-.03-.73-.1l-2.69.09,6.46,1.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m343.16,496.1l-.1-.62c-.22-.02-.41-.07-.55-.13l-3.01-.08,3.67.83Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m295.05,485.61s-.05,0-.07,0v1.88s4.71-1.13,4.71-1.13l-4.64-.76Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m294.33,487.52s.03,0,.06,0v-1.86s-4.33,1.12-4.33,1.12l4.27.75Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m292.18,485.05l-3.25-.66-.67-.11c-.1.01-.22.01-.33,0l-3.76,1.08,8.01-.3Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m281.34,485.17c.13-.02.27-.02.41-.01l3.78-1.08-8,.29,3.81.81Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="293.29 490.05 294.97 490.06 294.53 488.51 290.57 489.93 293.29 490.05" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="279.54 485.63 275.21 485.17 274.91 487.25 279.93 485.71 279.54 485.63" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m277.52,483.25l-2.23-.07c-.06.02-.12.03-.18.04l.06.27,2.35-.24Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m275.27,484.79l.63.07-.58-.12s-.02,0-.04,0v.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="276.41 484.02 279.64 483.43 279.46 483.45 276.31 484.02 276.41 484.02" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="284.45 483.73 284.07 483.68 281.51 483.49 279.13 483.92 284.45 483.73" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="302.16 489.48 302.12 489.71 304.04 489.14 302.16 489.48" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m302.31,488.61l-.08.46,3.67-.68-3.06.09c-.15.06-.33.11-.53.12Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m182.5,496.39c-.08,0-.15.01-.23.02l-.36.67,3.12-.03-2.53-.65Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="111.09 534.09 107.28 533.89 110.78 534.68 111.09 534.09" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m306.39,490.73l-3.98-.06c-.1.04-.23.07-.35.08l.05.73,4.28-.76Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m303.78,486.7h-1.35c-.09.02-.18.05-.28.06l.02.13,1.62-.19Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m301.44,487.73c.08-.03.17-.05.27-.07l-.06-.32-2.82.34,2.6.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m301.29,494.85c.12-.06.28-.1.45-.13l-.02-.31-2.71.49,2.28-.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m302.1,496.22c.26-.12.67-.17,1.04-.13l2.4-.63-2.66.1c-.26.13-.72.19-1.11.14l-2.52.57,2.85-.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m164.91,501.66l6.1-.89-5.14-1.25c-.06,0-.12.01-.19.02l-.8,2.12s.01,0,.02,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m52.25,510.82c.34,0,.63.08.84.18h.74s1.4-.14,1.4-.14l-4.3-.42h.04s1.28.38,1.28.38Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m64.39,511.98c-.13.02-.28.03-.43.03-.36,0-.68-.07-.9-.18l-2.91-.02,5.41.43-1.17-.27Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m55.17,513.08l.16-.03-.33-.03c.06.02.11.04.16.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m59,512.32l2.92.02-5.5-.44,1.22.27c.46-.08,1.05-.02,1.37.15Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="44.82 513.42 49.78 513.25 45.97 512.89 44.82 513.42" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m40.25,511.09l-1.44-.02,1.9.16c-.18-.03-.33-.08-.46-.15Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m41.18,510.15c.42,0,.79.09,1.01.24l2.58.15-4.71-.65.84.27c.09-.01.19-.02.28-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m36.79,509.75c-.33.03-.7,0-.96-.08l-.42.05-2.05.55,5.15.04-1.72-.56Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m47.93,510.28c-.44.03-.9-.06-1.15-.21l-3.94-.18,6.41.89-1.33-.49Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m46.82,512.5l-.16.07,2.56.24-1.35-.29c-.33.06-.74.05-1.06-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="76.12 511.13 73.1 511.34 75.09 511.48 76.12 511.13" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m73.23,511.79c.26,0,.5.03.69.09l.23-.08-1.83-.14.54.14c.11-.02.23-.02.36-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="74.99 511.95 76.13 511.95 75.2 511.88 74.99 511.95" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m78.56,511.13c-.32.03-.67,0-.92-.08l-1.49.51,4.91.36-2.49-.79Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m68.86,513.15h-.23l.26.02s-.02-.01-.03-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m83.91,511.77l1.1-1.13-4.78.11,3.25,1.03c.14-.02.29-.02.43,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m65.04,513.42h1.61s-1.97-.12-1.97-.12c.14.03.26.07.36.12Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m69.3,514.19c.32,0,.6.05.82.14l1.11-.06.58-.09h-.59s-2.88,0-2.88,0l.41.08c.16-.03.35-.05.55-.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m63.5,515.39l2.67.52c.16-.03.35-.05.55-.05.31,0,.6.05.82.14l5.03-.32-2.65-.41c-.46.12-1.13.08-1.5-.09l-2.99.08-1.92.14Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m32.87,509.98l-1.17.12c.13.03.25.06.35.1l.81-.22Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m265.61,579.8l.15-1.36-8.04-1.37,7.73,2.74c.05,0,.11-.01.16-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m15.26,515.74h.06s1.06-.66,1.06-.66l-4.43.64,2.05.12c.33-.13.84-.17,1.26-.11Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m257.43,576.62l8.38,1.42.13-1.17c-.37-.03-.68-.12-.91-.25h-7.61Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="257.73 571.82 266.08 575.44 266.25 573.44 257.73 571.82" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m17.07,513.52h-.25c-.31.12-.8.17-1.21.11l-1.1.3-.72.3,2.01-.39,1.27-.32Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m273.88,579.81l-7.55-1.28-.15,1.28c.34.03.63.11.85.22l6.84-.22Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="22.55 511.69 21.36 512.02 22.12 511.9 22.55 511.69" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="27.22 512.5 28.97 511.58 23.82 512.76 27.22 512.5" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m28.41,510.86l-1.78-.1c-.3.12-.76.16-1.16.11l-.62.17-1.27.62,4.4-.71.42-.1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m34.19,511.98l.96-.13-3.41-.7c-.29.06-.66.06-.96,0l-.14.03-2.34,1.24,5.88-.44Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m20.3,512.72l.25-.05.35-.17-1.2.19s.09,0,.13,0c.17,0,.33.02.47.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="17.25 514.56 17.89 514.17 15.07 514.88 17.25 514.56" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m21.61,513.72l-.93-.04c-.32.13-.85.18-1.27.12h-.05s-.98.61-.98.61l3.94-.58-.71-.1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m19.14,512.78l-.31.05h.15c.05-.01.1-.03.16-.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="136.38 500.54 136.8 500.2 133.85 500.37 136.38 500.54" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m152.08,501.72l.83.23c.4-.02.77.06,1,.19l4.14.22-1.95-.48c-.1.01-.2.02-.31.02-.4,0-.74-.09-.94-.23l-4.17-.4,1.41.45Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="148.16 499.63 145.68 499.5 147.75 499.84 148.16 499.63" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m149.46,499.82c-.22.02-.45,0-.65-.03l-.35.18,3.01.49-2.01-.64Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m156.72,501.06l4.59.41-3.44-1.26c-.11,0-.23,0-.33,0l-.94.8s.09.05.12.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m155.79,500.84c.08,0,.16,0,.24.01l.94-.8s-.03-.02-.04-.02l-4.55-.21,3.23,1.02c.06,0,.13,0,.19,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m140.81,499.35c-.09,0-.19.01-.28.01-.35,0-.66-.07-.86-.17l-1.88-.08,4.27.56-1.25-.32Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m145.01,500.86l3.2.57.15.02-1.27-.41c-.44.03-.9-.05-1.13-.21l-2.06-.17.58.1c.2.01.38.04.53.09Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="142.79 502.07 143.22 501.77 140.32 502.01 142.79 502.07" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m138.09,500.28c-.2.03-.43.03-.63.01l-.38.3,3.41.24-2.4-.55Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m144.53,501.81c-.18.02-.38.01-.55-.01l-.41.28,1.93.04-.98-.31Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m174.1,497.83c-.05,0-.1.01-.15.02l-.15.84,4.14-.07-3.85-.78Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m164.31,501.61l.8-2.12s-.08-.02-.12-.03l-5.31.46,4.63,1.69h0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="173.73 499.08 173.52 500.32 178.26 499 173.73 499.08" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="181.66 496.4 177.45 497.11 181.29 497.08 181.66 496.4" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m180.66,498.25l.42-.78-4.51.04,3.75.77c.1-.02.22-.03.34-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m358.19,497.94h-.07s.05,0,.05,0c0,0,.02,0,.02,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="173.36 497.84 168.8 498.77 173.22 498.7 173.36 497.84" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m172.92,500.35l.22-1.27-5.19.09,4.87,1.19s.06,0,.09-.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m130.62,498.83h-.26s.3.02.3.02c-.02,0-.03-.02-.05-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="111.65 504.33 112.15 502.48 107.21 502.83 109.1 503.55 111.65 504.33" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m110.37,505.01l-4.53-1.73c-.07,0-.13,0-.2,0l-2.92,3.96,7.65-2.22Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="112.72 500.4 107.78 502.4 112.26 502.08 112.72 500.4" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="102.09 507.21 104.88 503.42 97.99 505.4 99.7 506.27 102.09 507.21" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="184.61 497.43 181.7 497.46 181.3 498.2 184.61 497.43" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m90.67,510.12l-3-1.19c-.09,0-.2,0-.29,0l-1.27,1.3,4.56-.11Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="117.76 502.08 112.76 502.44 112.23 504.36 117.76 502.08" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m96.71,505.86c-.06,0-.12,0-.19,0l-6.8,2.27,10.78-.35-3.8-1.91Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m92.29,509.73c.13,0,.26,0,.37.02l6.31-1.55-9.82.32,3.03,1.2h.12Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m129.2,499.7c.28,0,.52.04.72.11l4.1-.22-6.44-.66-1.02.07,2.38.71c.08,0,.16-.01.25-.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="86.56 509.05 81.17 510.34 85.39 510.24 86.56 509.05" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m113.44,500.24s-.06,0-.08,0l-.49,1.8,5.23-.37-4.66-1.44Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m131.87,498.97s-.02,0-.02,0h.08s-.05,0-.05,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m122.63,498.73c-.1,0-.2.02-.31.01l-.12.17.85-.06-.42-.12Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m119.87,501.21l1.35-1.85-5.84.39-.37.06,4.55,1.4c.1-.01.2-.02.31-.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="121.69 498.72 119.42 499.1 121.52 498.96 121.69 498.72" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="127.34 500.13 124.11 499.17 121.9 499.32 120.5 501.23 127.34 500.13" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="302.3 487.62 304.46 487 302.24 487.27 302.3 487.62" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m341.18,559.36l-7.69-1.91s-.06,0-.09.01l.43,1.56,7.34.34Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m324.51,559.41c-.49.07-1.08.02-1.46-.12l-10.48,3.47,19.65-1.14-7.71-2.21Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m333.81,561.03l-.46-1.64-6.35-.3,6.8,1.94h.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m323.41,564.48l7.95-2.42-17.39,1.01.4.08,7.82,1.39c.35-.09.83-.11,1.23-.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m344.14,559.06l-.55-1.99c-.38-.01-.73-.08-.98-.2l-6.42.25,7.86,1.95s.06-.01.09-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m437.46,540.81l5.27-2.51-14.53,2.48,8.14.23c.28-.13.69-.21,1.12-.19Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m349.65,555.61l-6.26-.91.36,1c.38,0,.73.07.99.18l4.91-.28Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="354.06 558.12 350.31 557.56 354.4 558.59 354.06 558.12" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m335.03,561.07l6.77-1.29-7.85-.37.44,1.58c.23,0,.44.03.63.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m321.93,565.7c-.12-.04-.23-.1-.31-.15l-9.86,3.95c.12.05.23.1.32.16l9.85-3.95Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m297.51,575.93l-8.13-.1-.08,2.72s.08,0,.12.01l8.09-2.63Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m297.44,575.54l-7.88-2.7s-.06,0-.1,0l-.07,2.6,8.05.1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="299.36 568.28 291.56 571.73 299.39 570.96 299.36 568.28" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m299.42,575.07l-.03-3.72-8.5.83,8.44,2.89s.06,0,.09,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m308.6,570.06l-8.3-1.88c-.11.02-.23.04-.35.05l.02,2.67,8.63-.85Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m358.52,497.02h-.15.11s.02,0,.03,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m299.92,566.85l8.68-3.42-18.47,1.45,8.88,2.02c.27-.05.61-.07.91-.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m311.01,569.34l10.09-4.03-9.27-1.65c-.3.07-.69.1-1.03.07l-9.41,3.71,8.69,1.96c.28-.05.62-.08.92-.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m393.84,550.37c.24,0,.47.03.66.07l4.96-.97-6.43-.34.73,1.24s.05,0,.08,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="400.47 547.05 401.16 547.89 406.17 548.28 400.47 547.05" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m410.96,548.21c.34,0,.65.05.9.14l4.05-.38-11.34-.95,5.8,1.25c.18-.04.38-.06.6-.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m402.1,548.77c.38,0,.72.06.98.17l3.55-.22-5.12-.41.39.47c.06,0,.13,0,.2,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="400.79 548.24 397.04 547.95 401.24 548.79 400.79 548.24" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m363.87,558.19l-.3-3.47c-.19-.02-.36-.04-.52-.08l-8.21,1.35,7.6,2.35,1.43-.15Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="418.23 545.53 411.58 545.45 418.88 547.43 418.23 545.53" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="426.02 542.74 419.94 543.33 427.62 544.87 426.02 542.74" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m297.6,567.84l-18.67.9,9.75,2.75c.22-.03.47-.04.7-.03l8.21-3.62Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m419.82,547.44l6.31-1.8-7.3-.1.63,1.87c.13,0,.24.01.35.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m428.53,544.84l6.66-2.99-8.57.83,1.62,2.16c.09,0,.2,0,.29,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m364.29,553.44l6.94-1.89-6.96-1.21c-.12.03-.24.05-.38.07l.17,3.01c.08,0,.16.02.24.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m373.86,556.64l-.4-2.52-7.48.11,7.85,2.41h.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m363.92,558.77l-.02-.19-.52.06.47.14s.05,0,.08,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m381.55,553.6l-7.56-1.55c-.08.02-.16.03-.25.04l.26,1.62,7.56-.11Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m383.98,553.13l-.73-1.69-6.98.15,7.63,1.56s.05-.01.08-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m385,553.11l6.27-1.83-7.42.15.72,1.65c.15,0,.3,0,.44.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="392.39 549.1 386.16 548.77 386.09 548.79 393.15 550.4 392.39 549.1" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m374.6,556.63l7.74-2.65-8.3.12.4,2.52c.06,0,.11,0,.16.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m346.18,559.71l7.52-.29-.37-.1-7.11.28h.06s-.12.02-.12.02c.01.03.01.06.02.09Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m170.9,554.71l.52-2.21c-.11-.02-.21-.03-.31-.06l-6.98,1.13,6.21,1.21c.17-.04.35-.06.56-.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m172.16,551.21l3.35-3.42-10.43,1.91,6.23,1.54c.26-.04.56-.05.84-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="153.96 550.36 153.26 551.51 159.25 550.06 153.96 550.36" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m178.62,554.01l-6.2-1.53c-.13.02-.27.04-.41.04l-.52,2.21c.15.02.3.05.42.09l6.71-.82Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m167.44,552.12l-5.14.08-.24.7c.09.02.17.03.24.05l5.14-.83Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m187.29,557.12l-6.45-.61-.37,1.45c.13.02.26.05.37.08l6.45-.91Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m180.7,554.79c-.15-.02-.28-.05-.41-.09l-6.3.77,6.37.61.33-1.29Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m189.98,560.55l-.19-2.69c-.22-.02-.41-.05-.58-.1l-6.78.97,7.34,1.85c.07-.02.15-.02.22-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m179.69,557.95c.06,0,.13,0,.2-.01l.38-1.48-6.44-.61,5.85,2.1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m112.65,535.96l-.74-.15c-.49.1-1.15.05-1.53-.12l-1.05.04.33.03,2.99.2Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m152.64,551.5l.66-1.1-6.09.35,4.63.82c.23-.05.51-.08.8-.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m118.25,538.68c.34,0,.65.05.89.14l7.02-.65-10.69-.86c-.43.06-.95.02-1.3-.1l-1.21-.1h-.32s5.21,1.6,5.21,1.6c.13-.02.26-.02.4-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m126.16,542.87c.24,0,.48.03.67.07l9.07-1.69-15.75-1.55,5.98,3.16h.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m191.61,554.56l-8.2-.17,6.26,2.14c.17-.02.35-.02.52-.01l1.42-1.96Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m135.1,547.12l1.34-2.82-8.39-.48,6.94,3.3h.12Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m146.96,545.31c-.09,0-.17.02-.26.02l-1.69,4.74,8.66-2.46-6.7-2.3Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m144.4,550.06l1.7-4.75-9.3,2.49,7.28,2.28c.1-.01.22-.02.33-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="137.03 544.33 135.71 547.12 144.54 544.76 137.03 544.33" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m288.88,572.85c-.06,0-.11-.01-.16-.02l-8.3,2.51,8.39.1.07-2.59Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m266.4,571.63c-.35-.03-.66-.12-.88-.24l-7.77.02,8.54,1.63.12-1.41Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m263.82,575.71l-9.25-4.03h-.03l-.6,3.77c.35.04.66.13.88.25h9.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m255.45,567.69c-.07,0-.15.01-.22.02l-.46,2.57c.34.04.63.12.84.24h1.3s5.29-.55,5.29-.55l-6.75-2.27Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m253.35,575.43l.6-3.77c-.31-.03-.59-.11-.8-.21l-9.26.18,9.37,3.81s.06,0,.09,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m266.65,576.87s-.08,0-.12,0l-.15,1.25,6.85,1.16-6.58-2.42Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m288.73,578.55l.08-2.72-8.44-.1,8.25,2.84s.08,0,.11-.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m241.4,570.5c.49,0,.93.09,1.23.24l7.49-.14-15.73-2.12,6.55,2.05c.15-.02.3-.03.47-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m277.17,579.44c.42,0,.8.07,1.08.18l7.66-.59-16.24-2.21,7.16,2.64c.11-.01.23-.02.34-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m209.39,564.19l2.37-2.58-9.85,1.41,6.45,1.24c.3-.07.67-.09,1.02-.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m191.13,560.63l7.84-1.22-8.24-1.61c-.11.02-.23.04-.35.05l.19,2.69c.21.01.4.04.56.09Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m209.41,561.02l-6.96-.99c-.28.08-.65.12-.99.1l-1.6,2.22s.06.02.09.02l9.46-1.35Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m213.41,561.62c-.3.07-.7.1-1.05.08l-2.35,2.56,9.53-1.59-6.13-1.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m242.93,567.33c-.47.04-.99-.02-1.35-.15l-8.42.74,17.89,2.4-8.12-3Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m199.27,562.27l1.6-2.22s-.03,0-.04-.01l-7.85,1.23,5.41,1.07c.26-.05.58-.08.88-.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m236.42,566.72l-5.06-.09-.36.47c.09.02.16.04.24.07l5.19-.45Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m218.79,565.51l1.01-.9-7.12.3,4.83.68c.36-.1.85-.14,1.28-.09Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="220.55 564.58 219.47 565.55 227.4 564.29 220.55 564.58" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="308.68 570.44 299.97 571.29 300 574.95 308.68 570.44" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m430.41,504.87s-.06,0-.08,0h.09s-.01,0-.01,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m432.02,505.68c.08,0,.16-.01.23-.01.25,0,.48.03.67.09l2.43-.26-3.73-.18.4.36Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="431.89 504.96 431.1 504.85 431.18 504.92 431.89 504.96" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m429.41,504.76l-.73.04,1.09.05c-.13-.02-.25-.05-.35-.09Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="431.28 505.67 430.87 505.29 428.19 505.16 431.28 505.67" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="428.35 503.59 425.88 503.25 426.8 503.61 428.35 503.59" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="420.87 502.32 416.82 501.33 417.68 502.31 420.87 502.32" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m418.62,503.37s.09,0,.13,0c.09,0,.17,0,.26.02l2.28-.68h-3.26s.59.66.59.66Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m417.01,502.31l-.98-1.1c-.11,0-.23,0-.33,0l-3.44,1.1h4.74Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m425.69,503.62l-1.58-.61-.13-.02c-.23.05-.53.07-.8.05l-1.88.56,2.04.06,2.34-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m456.4,506.57l-.74-.72c-.2.02-.42,0-.62-.02l-3.74.86,5.1-.12Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m448.16,506.41c.05,0,.1,0,.16,0,.15,0,.29.01.42.03l3.91-.9-5.23.06.74.81Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="461.65 506.44 456.32 505.8 457.09 506.55 461.65 506.44" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m457.98,507.41c.06,0,.14,0,.21,0,.19,0,.36.02.51.05l3.36-.63-4.58.11.5.48Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m446.2,505.01c-.24.02-.51,0-.72-.06l-2.05.31,2.96-.03-.2-.22Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="446.75 505.6 442.64 505.65 447.49 506.43 446.75 505.6" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="449.73 505.18 446.81 504.92 447.07 505.21 449.73 505.18" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m439.73,505.01l2.33-.35-4.34-.2c-.41.15-1.12.16-1.53,0l-1.49.06,3.85.5c.34-.09.84-.09,1.19-.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m374.19,499.99l2.71-.25c.21-.14.59-.23.98-.22l3.67-1.56-3.12-.13-1.32.06c-.2.1-.49.17-.83.17l-4.24,2,2.14-.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m410.23,501.95h.02c.07,0,.14,0,.21,0l3.52-1.13-4.49-.08.74,1.2Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m376.27,497.03c.05,0,.1,0,.15,0l2.59-.87-2.9.38c-.07.05-.16.1-.26.14l.3.35s.08,0,.12,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m467.2,508.83c.33-.08.8-.1,1.15-.02l4.44-.81-6.47-.98c-.31.08-.74.08-1.07.02l-4.6.86,6.56.93Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m364.23,500.37l4.15-.15-1.28-1.28c-.09,0-.18,0-.27,0l-3.94,1.41,1.34.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m367.2,497.91l3.24-.84-3.3.42.04.42h.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m359.93,500.21l-.99-1.36c-.11,0-.23,0-.33-.02l-3.27.81,4.59.57Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m360.6,500.18h.12l3.9-1.4-4.99-.05s-.07.03-.1.04l1.02,1.41h.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m366.61,497.92l-.03-.36-3.44.44,3.06.03c.12-.05.26-.08.41-.11Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m359.74,497.01h-.11s.02,0,.02,0h.09Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m444.3,537.21l-.5-.39-3.77.54,4.14-.09s.08-.05.13-.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m408.62,500.35l-1.06-1.72s-.06,0-.09,0l-4.08,1.62,5.23.1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="401.14 499.84 399.43 496.59 398.73 496.44 394.11 498.16 401.14 499.84" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m401.83,499.89l4.35-1.73-1.88-.54-4.17-.88,1.65,3.15h.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="413.68 500.44 408.28 498.78 409.25 500.36 413.68 500.44" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m383.99,496.73l-.73-1c-.07,0-.14,0-.2,0l-3.87,1.3,4.58-.21c.06-.03.14-.07.23-.09Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m384.63,496.65h.09l3.67-1.42-3.54.25-.81.08c-.06.03-.12.05-.2.08l.73,1h.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m396.03,495.88l-2.28-.48-2.06-.28c-.18.04-.39.06-.6.05l-4.09,1.58,9.04-.87Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m392.09,497.76c.19-.05.43-.07.66-.06l4.1-1.52-9.63.93,4.88.65Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m375.58,497.14l-.3-.35c-.13,0-.26,0-.38-.01l-3.06.8,3.51-.32c.06-.04.14-.08.23-.11Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m510.83,523.18l-1.56-.09,1.04.24c.14-.07.32-.12.52-.15Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m492.21,526.41l3.98-.95-9.32-.9c-.42.14-1.09.15-1.52.02l-3.12.38,8.85,1.49c.33-.08.78-.1,1.13-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m498.93,524.08l-3.41-.42h-.24s1,.41,1,.41l2.89.05c-.08,0-.16-.02-.24-.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m524.11,516.87c.09-.01.18-.02.28-.02.19,0,.37.02.53.05l3.95-.78-5.47.12.71.62Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m498.71,524.7c.26,0,.49.03.7.08l1.74-.24-3.9-.07.77.32c.2-.05.44-.08.69-.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m529.63,518.67c.29-.11.74-.16,1.13-.12l3.21-1.02-7.66.23,3.27.91h.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m518.18,522.62l3.2-.95h-.03l-6.17.41,1.88.63c.3-.1.74-.14,1.12-.09Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m525.2,517.86c-.39.15-1.05.17-1.49.05l-1.78.24,5.67.38-2.4-.66Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m523.23,520.89c.28-.15.78-.22,1.23-.18l3.06-1.06-8.74,1.02,2.81.22h1.64Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="496.1 524.45 493.65 524.4 496.71 524.7 496.1 524.45" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="488.28 527.61 489.9 527.09 489.61 527.04 476.01 526.21 484.41 528.57 488.28 527.61" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m460.72,532.58c.24,0,.46.03.65.07l3.08-.54-8.93.53,4.21.13c.25-.11.59-.18.98-.18Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="450.65 534.36 446.48 534.75 451.49 534.92 450.65 534.36" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m458.36,530.05c-.42.1-1.02.09-1.41-.03l-6.57,2.45.82.02,15.89-.93-8.73-1.51Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m452.55,534.74c.16,0,.32.01.47.03l3.82-1.01-5.46.52.72.49c.14-.02.3-.03.46-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="468.32 530.21 462.68 529.94 468.99 531.03 468.32 530.21" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m465.74,505.98c.24,0,.46.03.65.08l1.19-.14-5.17-.18,2.69.32c.19-.05.4-.08.64-.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m477.58,529.84c.23,0,.45.03.65.07l2.35-.4,2.08-.51-9.21-2.59c-.19.03-.42.03-.63.02l-1.6.33-2.99.77,8.91,2.34c.14-.02.29-.03.45-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m483.61,528.77l-9.35-2.63-.08.02s-.03.02-.05.03l9.31,2.62.17-.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m479.96,507.92l-.45.04.79.03c-.13-.02-.24-.04-.34-.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m484.65,509.07c.34-.08.81-.08,1.15,0l2.02-.33-.41-.06-7.13-.3,4.38.69Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m474.73,507.46c.15-.03.3-.04.47-.04.26,0,.51.04.7.1l1.02-.09-2.54-.16.35.19Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m112.14,534.15l-.45-.02-.27.52c.16,0,.3.02.44.05l.28-.54Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="527.62 515.77 522.2 515.22 522.96 515.88 527.62 515.77" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m471.87,506.37c-.34.07-.79.05-1.1-.04l-1.79.21,3.6.22-.71-.4Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="475.27 506.94 473.12 506.56 473.6 506.83 475.27 506.94" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="473.59 507.33 473.36 507.2 472.34 507.14 473.59 507.33" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m481.33,507.93c-.15.05-.33.07-.53.08l1.97.08-1.44-.17Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m513.88,515.54l-3.13-2.27c-.24.03-.51.03-.74,0l-3.1.79,6.98,1.49Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m515.25,515.68c.15,0,.29.01.42.03l3.68-.92-7.67-1.42,3.21,2.33c.11-.02.23-.02.35-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m522.24,515.9l-.69-.6c-.22.02-.48.01-.69-.02l-2.88.71,4.26-.09Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m505.08,513.52c.14,0,.28.01.4.03l3.14-.8-7.29-1.64,3.39,2.44c.11-.02.23-.02.35-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="493.42 510.72 492.64 510.16 489.64 510 493.42 510.72" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m503.52,513.24l-3.26-2.35c-.27.03-.59.03-.85-.03l-2.84.56,6.95,1.81Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="495.54 509.93 494.82 509.79 492.42 509.43 492.91 509.79 495.54 509.93" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m494.37,510.84c.11-.01.23-.02.35-.02.18,0,.35.02.51.05l2.26-.44-4-.22.88.63Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m269.01,571.26l8.82,3.54c.09,0,.17-.01.27-.01.16,0,.33.01.47.03l8.57-2.58-18.13-.98Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="412.15 508.92 418.63 509.94 417.57 508.6 412.15 508.92" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m367.29,506.97l.07.72c.15.02.29.04.41.08l4.14-.46-4.31-.4c-.1.03-.2.05-.31.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m375.04,506.83c.28-.09.69-.12,1.03-.07l2.33-.61-7.24.31,3.88.37Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m364.28,508.95l3.1.09-.19-.25c-.25,0-.52-.02-.73-.08l-2.19.25Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m366.07,505.86c-.33.13-.89.16-1.28.07l-.45.03,1.84.08c.33-.13.85-.16,1.24-.08l1.01-.19-.96.02-1.4.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="368.13 510.07 367.67 509.43 364.08 509.33 368.13 510.07" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m353.39,511.85l-6.85,1.9,6.95,1.45c.22-.04.5-.05.74-.03l6.35-2.15-.6-.13-5.74-1.06c-.26.05-.58.07-.86.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="356.33 511.39 361.71 512.39 361.04 511.17 356.33 511.39" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m362.3,512.34c.08,0,.16,0,.23,0l4.13-1.45-5.02.24.66,1.2Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m402.42,510.36c.26-.07.59-.08.88-.05l3.78-1.16-10.56.31,5.9.9Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m344.85,511.4l.08.76,5.34-.63-4.96-.24c-.13.05-.28.09-.45.11Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m409.12,509.42l-3.84,1.18,5.03-.12-.81-1.05c-.13,0-.27,0-.39-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="394.43 510.76 399.4 510.7 393.88 509.86 394.43 510.76" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="410.96 510.47 416.1 510.34 410.14 509.4 410.96 510.47" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m390.24,506.84l-3.58,1.07,9.75-.57-5.24-.57c-.26.08-.62.1-.93.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m387.29,508.26l5.32.63c.27-.07.62-.1.93-.07l3.76-1.15-10.01.59Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m387.01,502.22l-5.26,1.42,6.23.63c.06-.02.13-.03.2-.05l-.56-1.89c-.23-.01-.44-.05-.61-.12Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m380.03,503.34s.08,0,.12,0c.3,0,.56.05.76.12l4.28-1.16-5.5.63.34.41Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m380.39,504.82l-.24-.41c-.16,0-.31-.02-.45-.04l-2.87.57,3.56-.12Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="327.12 501.03 331.78 501.31 327.03 499.91 327.12 501.03" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m323.49,498.1l2.91.75c.1-.01.2-.02.3-.02.27,0,.52.04.72.11l2.58-.14-6.5-.71Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="330.91 500.16 334 501.07 333.82 500.57 330.91 500.16" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m326.53,501l-.09-1.12c-.08,0-.15-.02-.23-.03l-4.95.84,5.26.31Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m333.91,502.12l-4.74.54,5.72,1.46-.53-1.93c-.16-.01-.31-.03-.45-.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m304.32,502.39s.08,0,.12,0c.18,0,.35.02.51.05l2.08-.34-3.03-.11.34.41Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m309.47,502.49l-2.56.42,3.77.28-.59-.66c-.22,0-.44,0-.63-.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="303.65 501.59 306.7 501.7 303.07 500.88 303.65 501.59" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m318.79,501.26l-.25.81,5.12.16-4.62-1c-.08.01-.16.02-.25.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m343.17,504.63l.38.91c.24,0,.45.04.63.1l2.89-.21-3.9-.8Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m342.13,507.99c.17-.07.38-.12.63-.13l.3-1.27-5.38,1.25,4.46.15Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m328.85,506.37l5.41,1.23c.06-.01.13-.02.21-.02l.48-2.4s-.03,0-.05,0l-6.05,1.2Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m344.04,509.65l.43.67h.04c.08,0,.16,0,.23.01l3.73-1.26-4.43.58Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m344,506.56c-.11.02-.23.04-.36.05l-.3,1.28c.07.01.14.03.2.04l5.06-.63-4.6-.74Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m342.65,508.94l-2.88.87,3.45-.45-.26-.41c-.1,0-.21,0-.31-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m335.53,505.2l-.48,2.4,6.38-1.47-5.59-.97c-.1.02-.2.03-.31.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="330.94 508.82 330.63 508.85 335.38 509.92 334.7 508.75 330.94 508.82" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m334.96,502.25l.52,1.88c.2.01.39.04.54.09l4.4-.34-5.46-1.64Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m319.04,500.23s.06.01.09.02l3.79-.64-3.76.04-.12.58Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m446.07,526.97c.19,0,.36.02.52.05l2.35-.54-1.25-.46-2.16.11.49.85s.03,0,.04,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m445.44,527.04l-.51-.88-5.48.27,5.84.65c.05-.02.1-.03.15-.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m433.39,526.74l.33-.07-7.67-.64-1.21.25,2.71,2.78c.14,0,.29-.01.43,0l5.74-2.33-.33.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m436.49,526.93c-.26.08-.62.12-.96.1l-5.29,2.15,13.14-1.49-6.89-.76Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m445.04,525.04s-.09.02-.13.03l.4.69,1.46-.08-1.74-.64Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m455.96,524.87l2.63-.63-9.1.31,5.13.41c.35-.13.9-.17,1.33-.09Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="450.42 527.03 448.89 527.38 451.35 527.38 450.42 527.03" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m460.47,522.08c-.28.07-.65.09-.97.05l-2.28.69c.19.04.35.1.48.17l5.11.1-2.34-1.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="448.75 525.97 449.68 526.32 451.89 525.81 448.75 525.97" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m419,510.99l-4.08,1.08,5.28-.21-.7-.85c-.17,0-.34,0-.49-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="475.06 520.64 467.98 519.31 469.43 520.91 475.06 520.64" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m412.36,536.95l1.06,1.7h.08c.23,0,.45.02.64.07l6.56-1.21-8.34-.56Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m427.74,530.27l-6.14,3.13,7.31-.83-1.13-2.3h-.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m411.45,539.18l-12.2-1.76,6.95,2.39c.1,0,.21-.02.31-.02.26,0,.49.03.69.08l4.25-.69Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m413.78,539.89c-.33.03-.69,0-.97-.07l-3.17.52,4.81.17-.67-.63Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m422.11,533.73l7.69,1.02c.05-.02.1-.03.16-.04l-.87-1.78-6.98.8Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m428.3,535.47l-13.81.05,8.06,1.43c.3-.07.69-.09,1.03-.05l4.73-1.43Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m431.08,535.83c-.27.05-.62.06-.91.03l-2.97.9,4.45-.59-.57-.33Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m423.21,538.11c-.26,0-.46-.02-.65-.07l-3.79.7,4.62-.3-.18-.33Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m431.07,511.72l5.94.81c.06-.02.12-.03.19-.04l-.34-1.19-5.78.42Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m436.96,509.66l.35,1.21,6.37-.46-6.51-.8c-.07.02-.14.03-.22.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m436.23,509.69l-5.28,1.65,5.79-.42-.36-1.22c-.05,0-.1,0-.15-.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m437.78,512.46c.24.01.47.06.65.12l6.4-1.86-7.41.54.35,1.2Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m422.09,513.36s.09,0,.13,0c.08,0,.15,0,.22,0l3.74-1.35-5.04.2.95,1.15Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="453.86 510.48 450.41 510.53 454.9 511.19 453.86 510.48" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m431.85,515.32c.06,0,.13,0,.2,0l4.13-2.1-7.13-.97,2.8,3.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="420.83 511.83 425.02 511.67 420.11 510.97 420.83 511.83" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m428.05,512.29l-4.24,1.54,7.35,1.47-2.73-3c-.12,0-.26,0-.37,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m445.92,510.82l-6.88,2,7.77,1.15c.27-.07.63-.1.95-.06l6.54-2.02-6.99-1.02c-.41.11-1.02.09-1.39-.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m466.93,519.31l-5.07,1.97,6.92-.34-1.48-1.64c-.12,0-.25,0-.37,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m474.32,515.9h.07c.13,0,.26,0,.38.03l3.91-1.08-5.31-.32.95,1.37Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m474.08,517.03l-5.12,1.6,12.56.56-6.81-2.15c-.2.02-.42.02-.63,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m466.64,518.21c.24-.04.55-.05.81-.02l4.84-1.51-12.29.05,6.64,1.48Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="468.27 514.22 473.61 515.79 472.7 514.49 468.27 514.22" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m457.28,517.12l-5.35,2.78,7.3,1.18c.23-.06.53-.08.81-.07l5.6-2.17-7.85-1.76c-.16.03-.33.05-.51.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m455.86,512.32l-6.08,1.88,6.62-.22-.39-1.64c-.05,0-.1,0-.15-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m449.94,514.58l6.86,1.45s.06-.01.08-.02l-.39-1.65-6.55.22Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m125.72,507.13l2.79.34c.24-.07.55-.09.84-.07l1.63-1.6-4.01.94-1.24.39Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m184.79,510.01l-.77,1.74,5.41-1.06-4.21-.73c-.13.03-.28.04-.43.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m194.01,513.78h-.36s.29.03.29.03c.02,0,.05-.02.07-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="189.89 511.93 190.6 511.29 186.98 512 189.89 511.93" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m193.97,515.59l.29-.81s-.09-.02-.13-.03l-4.34.68,4.18.15Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m183.69,507.07l-4.29-.2,1.84.32c.15-.03.31-.05.48-.05.28,0,.53.04.73.12l.48-.03.76-.15Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m156.22,511.16l-4.09,1.17,9.95-.07-5.09-1.12c-.23.04-.52.05-.77.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m165.64,512.03s.09.05.13.07l7.87-1.07-6.71-.08-1.29,1.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="140.16 508.11 143.82 507.48 144.03 506.92 143.88 506.89 140.16 508.11" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m167.76,509.43l-8.36,1.04,7.25.09,1.26-1.05c-.05-.02-.1-.05-.15-.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m199.72,508.19c.19-.07.43-.11.7-.12l.07-.18-2.95.17,2.19.13Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="201 508.12 201.01 508.12 203.06 507.75 201.11 507.86 201 508.12" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m200.49,509.18l-.62,1.07,6.13-.17-5.01-.95c-.15.03-.31.04-.51.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m201.28,507.46l2.16-.12-1.47-.11c-.17.06-.4.1-.64.1l-.05.13Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m198.53,507.62l2.12-.12.09-.21s-.02,0-.04-.01l-2.17.34Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m191.4,511.22l-.77.69,5.01-.11-3.47-.63c-.23.05-.51.07-.77.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m137.6,509.03l4.91,1.24c.09-.01.19-.02.29-.02l.87-2.34-5.69.98-.38.14Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m198.06,511.43c.16-.04.35-.05.55-.06l.41-.71-4.5.12,3.55.64Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="199.24 510.27 199.86 509.2 194.67 510.4 199.24 510.27" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="109.14 514.91 109.41 514.72 107.72 514.9 109.14 514.91" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m203.19,504.45c.35-.15.98-.17,1.39-.06l5.93-2.31-11.37,2.29,4.05.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m107.54,515.35c.1-.03.22-.05.35-.07h-.84s.49.07.49.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="109.28 515.36 110.02 515.3 109.37 515.3 109.28 515.36" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m106.81,516.13l-.35-.04s.03.02.05.03h.31Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m110.22,514.73l-.27.19h2.82s-1.59-.22-1.59-.22c-.27.07-.65.08-.96.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="133.87 510.41 130.45 511.87 141.13 510.78 137.87 509.96 136.09 509.59 133.87 510.41" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m104.71,514.03l-.17.1,2.03-.04-.8-.1c-.3.08-.72.1-1.06.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="103.78 514.07 102.96 514.17 103.64 514.15 103.78 514.07" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m101.43,512.63l3.1.41c.28-.07.69-.09,1.01-.04l5.38-1.28-9.5.91Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="103.9 514.54 103.87 514.54 103.87 514.54 103.9 514.54" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="131.9 505.58 130.37 507.09 135.69 505.38 133.93 505.11 131.9 505.58" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m116.27,514.65c.27-.07.64-.08.95-.04l3.91-2.73-8.99,2.16,4.13.61Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m406.53,541.06c-.31,0-.59-.04-.82-.11l-5.65.66,7.07.61-.6-1.16Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m130.92,507.82l4.46.72c.15-.03.3-.05.48-.06l1.07-2.59-6.01,1.93Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m123.86,507.83l-.47,1.22,4.05-.93-3.05-.37c-.15.04-.33.07-.53.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m119.02,510.89l2.38.11c.19-.08.43-.12.7-.13l.47-1.22-4.84,1.11,1.29.13Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m121.84,511.94l-3.89,2.72,8.8-2.2-3.95-.56c-.27.07-.64.08-.95.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="122.82 510.55 126.38 508.78 123.22 509.5 122.82 510.55" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m289.62,505.79s.02,0,.03,0l4.67-1.39-4.77.13.06,1.26Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m274.31,501.81c.06,0,.11,0,.16.02l3.47-.9-3.76.3.13.59Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m266.19,499.84l-.03.19,2.52-.02-2.1-.23c-.12.03-.24.05-.39.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m265.95,501.21s.05,0,.07.01l4.37-.85-4.3.03-.14.8Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m266.12,498.14l-1.25.17,3.29-.14-.87-.06c-.32.1-.81.12-1.17.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m265.32,498.88c.31-.1.8-.12,1.16-.05l1.74-.28-4.69.2,1.78.13Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m267.45,493.24l-2.31-.2,2.08.43c.06,0,.12-.02.18-.02l.06-.22Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m267.29,494.98l-.02-.53c-.08,0-.15-.02-.22-.03l-3.37.42,3.6.15Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m266.62,496.74l.18-.18-2.15.23,1.13.05c.22-.08.53-.12.83-.1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m267.29,495.37l-2.19-.09,2.06.33s.09-.02.13-.02v-.22Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m304.19,506.68h.03l.42-1.13-5.21-.79,4.76,1.92Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m288.85,502.03l-2.69.42h.57s1.81-.02,1.81-.02c.34-.1.84-.11,1.2-.03l1.95-.03.87-.05-2.58-.3c-.33.09-.79.1-1.13.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m289.5,503.4l.03.74,4.11-.11-3.95-.66c-.06.02-.13.03-.2.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m304.79,505.17l.17-.46c-.15-.03-.28-.07-.38-.12l-3.84-.03,4.06.61Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m260.3,495.39l-.28,1.07s.09.02.13.03l4.49-.48-4.08-.66c-.09.02-.17.03-.26.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m281.76,500.97l.07.78,4.44-.23-4.28-.59c-.07.02-.15.03-.23.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m281.24,501.78l-.07-.8s-.05,0-.07,0l-3.94,1.02,4.08-.22Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m279.69,499.96h.66c-.07-.02-.13-.03-.19-.05l-.47.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m281.35,498.92c-.34,0-.63-.06-.84-.17l-1.24-.04-.33.02,1.36.24c.14-.03.3-.04.46-.04.21,0,.4.02.56.07l1.36-.17-.62-.02c-.19.07-.44.12-.73.12Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m226.48,500.19l-3.83.87,4.32.56s.09-.02.14-.03l-.4-1.37c-.08,0-.15-.01-.23-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m226.77,505.16l-.75.99,5.51.5-4.47-1.5c-.09,0-.19,0-.29,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m227.69,501.55c.16.01.31.03.44.07l3.66-.48-4.5-.95.4,1.36Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="230.61 499.54 235.29 499.61 236.05 498.76 230.61 499.54" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m233.77,500.72c.17-.03.37-.03.55-.03l.63-.7-4.99-.07,3.81.8Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m227.59,504.19l1.76-.1-2.04-.08-.03.11c.11.02.22.05.31.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m221.07,498.46l-2.16.12-.28.06,1.21.08c.26-.09.65-.12.98-.08l.25-.19Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m220.12,501.68l-5.2,1.57,2.87-.14c.21-.12.54-.2.92-.2.2,0,.38.02.54.05l5.15-.8-1.36-.27-2.12-.27c-.23.06-.54.08-.81.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m212.04,501.01c.26-.1.64-.14.98-.11l3.34-.98-7.05.98,2.73.11Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m251.14,501.41s.01,0,.01,0l4.46-1.01-4.31-.1-.16,1.11Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m251.44,499.36l-.08.56,3.42.08-3.16-.66c-.05,0-.12.02-.17.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="234.97 500.72 239.76 500.06 235.62 500 234.97 500.72" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m250.65,497.6l.54.03c.1-.03.21-.06.33-.08l-.87.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m250.78,499.9l.08-.56c-.06,0-.11-.02-.16-.03l-3.52.5,3.6.09Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="252.17 497.13 252.38 496.82 249.97 497.25 252.17 497.13" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m250.49,501.4s.04,0,.06,0l.16-1.11-4.6-.11,4.37,1.23Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="242.39 501.38 243.02 500.4 237.46 501.17 242.39 501.38" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m243.62,500.45l-.61.95,5.1.21-4.2-1.18c-.09,0-.2.02-.3.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m213.65,546.34l-6.97-1.68c-.08.02-.17.03-.25.03v1.94s7.22-.3,7.22-.3Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m166.79,512.36l5.21.84c.26-.06.6-.08.9-.05l2.48-1.9s-.07-.03-.1-.05l-8.49,1.15Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m164.88,512.99l-.22.58,4.42-.03-3.73-.61c-.15.03-.31.06-.48.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m175.95,511.41l-2.28,1.75,7.33-.97-4.23-.81c-.24.05-.55.06-.82.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m159.5,510.86l4.83,1.06c.22-.04.5-.05.74-.02l1.13-.95-6.7-.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m197.93,512.41l-.09.03h.23s-.09-.02-.14-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m145.27,510.96l3.49.87.77.17c.1-.02.21-.02.32-.02.12,0,.23,0,.34.02l4.03-1.15-8.95.11Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m142.65,511.34l-5.95,2.02,4.5.68c.3-.08.69-.09,1.01-.04l5.92-1.47-4.85-1.21c-.2.03-.42.03-.63.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m149.68,513.09l-1.44,1.54,6.41-.85-4.24-.74c-.22.05-.48.07-.73.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m156.69,513.32c.33-.07.76-.07,1.09,0l3.62-.67-8.24.05,3.53.62Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m164.07,513.58l.23-.63s-.03,0-.04,0l-3.6.66,3.41-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m193.95,517.4l5.88-1.21-5.41-.2-.51,1.41s.02,0,.03,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m194.29,513.39l1.73-.03c-.17-.02-.33-.05-.46-.09l-1.27.13Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m404.09,540.28l-7.39-1.04.44,1.66c.26,0,.49.05.69.11l6.27-.73Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m194.84,514.83l-.28.79,4.75.17-4.1-1c-.11.02-.23.03-.36.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m193.17,517.37c.05,0,.1,0,.16-.01l.51-1.38-5.05-.19,4.39,1.58Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m192.74,518.43l-6.96.96,12.75,1.11-4.94-1.99c-.3.02-.62-.01-.85-.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m185.9,515.97l-1.49.12-3.24.53,9.72.89-3.95-1.42c-.37.03-.76-.01-1.04-.11Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m92.78,522.62c.22-.03.48-.04.71-.02l.21-.19-2.92-.31,2,.52Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m184.19,509.95l-5.65.95,4.44.85c.14-.03.29-.04.46-.05l.77-1.75s-.01,0-.02,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m95.08,520.64c.09,0,.19-.01.29-.01.17,0,.33.01.47.04l1.16-.69-5.34-.47,3.42,1.14Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m100.27,517.51c.11-.01.23-.02.34-.02.45,0,.84.1,1.06.26l2.26.16h.02l-4.88-.76,1.2.36Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m100.86,518.63c-.23.02-.49.01-.7-.03l-1.84,1.1,7.33.65-4.79-1.72Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m134.4,513c.23-.05.51-.07.77-.04l4.94-1.68-9.72.98,4.01.74Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="97.75 520.04 96.52 520.79 103.43 520.54 97.75 520.04" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m94.53,521.65s-.05-.02-.06-.02l-3.49.1,3.11.33.44-.41Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m87.42,521s.09.03.12.05l3.55-.1-3.27-.36-.4.41Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m97.56,519.64l2.04-1.22s-.06-.04-.09-.06l-8.34.72,6.39.56Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m88.73,519.64l-.58.59,4.26.46-3.19-1.07c-.16.02-.34.02-.5,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m107.9,520.2c.46-.04.96.05,1.24.2l5.27.11-3.39-1.19c-.08,0-.17.01-.26.01-.45,0-.83-.1-1.05-.26l-6.1-.42,4.29,1.54Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m133.44,509.03l-3.74-.6c-.12.02-.24.04-.37.05l-.62,3.11,5.6-2.37-.88-.19Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m123.52,515.54c.26-.07.6-.1.91-.08l3.04-2.77h0l-8.98,2.25,5.03.6Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m127.67,511.8c.13-.03.27-.05.42-.07l.6-3.02-5.03,2.52,4.01.57Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m128.04,512.82l-2.75,2.5,7.64-1.78-4.14-.76c-.22.05-.5.07-.75.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="115.97 516.42 116.33 516.39 116 516.4 115.97 516.42" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="112.54 516.1 115.67 516.02 116.08 515.59 111.57 515.95 112.54 516.1" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m114.56,517.38l-1.46.62,5.37.06.36-.02-3.15-.64c-.34.07-.8.06-1.12-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m116.68,515.69l-.3.32,3.71-.09-2.56-.3c-.24.07-.55.1-.84.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m182.99,512.78l-.32.17,2.56-.14-1.01-.08c-.33.11-.85.14-1.24.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m258.32,500.79l-.06.83,4.38-.06-4.14-.8c-.06,0-.12.02-.18.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m263.21,500.04l2.36-.02.03-.21c-.06-.01-.13-.02-.19-.04l-2.2.27Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m265.13,501.23c.08-.02.16-.03.24-.03l.14-.78-4.42.03,4.04.78Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m274.18,504.87l-1.4,2.12,6.66-2.13-4.42-.13c-.22.09-.51.14-.84.14Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m265.19,502.23l-4.77,1.07,2.64.24,2.3.12c.12-.02.26-.03.4-.03s.28.01.41.03l5.2-1.13-5.11-.37c-.28.1-.72.12-1.07.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m253.67,501.69l4.01-.05.06-.85s-.03,0-.05,0l-4.03.91Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m258.17,502.93s.04,0,.06,0l4.41-.98-4.41.06-.06.91Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m257.43,502.94c.05,0,.1-.02.16-.02l.06-.9-4.21.06,3.99.86Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m257.48,503.96l-4.56,1.12,9.55-.82-3.96-.36c-.28.08-.69.11-1.02.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m281.02,504.14c.13-.05.28-.1.46-.12l-.02-.2-2.67.26,2.24.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="280.65 509.28 294.82 508.77 292.35 507.88 288.62 506.77 280.65 509.28" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m250.28,502.41l-5.31.9,10.09-.04-3.89-.84c-.28.04-.63.03-.89-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m282.06,504.01c.07,0,.13.01.19.02l2.23-.51-2.45.24.03.25Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m296.31,508.36c.06,0,.13,0,.2,0,.16,0,.31.02.45.04l5.13-1.1-10.51-.63,4.73,1.7Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m281.97,503.26l.02.11,2.15-.2-1.7-.03c-.13.05-.28.1-.47.12Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m196.67,513.35l1.33-.03-.92-.07c-.12.04-.25.07-.4.1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m281.87,502.21c.1,0,.2.02.3.05l1.4-.22-1.7.09v.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m274.7,507.29l12.36-.98-1.7-.51-3.13-.74c-.2.03-.44.04-.65.02l-6.89,2.21Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m281.81,499.95h.25l-.63-.05s-.06.02-.09.02h.09c.13,0,.26,0,.38.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m208.26,509.69c.16-.03.33-.05.51-.05.2,0,.38.02.54.06l4.26-.73-5.32-1.17c-.29.05-.66.04-.94-.02l-4.63.85,5.58,1.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m206.59,504.06l5.19-1.17.47-.99s-.04-.01-.06-.02l-5.59,2.18Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m204.65,512.41c.18-.05.39-.08.62-.08.25,0,.48.03.67.09l7.49-.89-4.17-.83c-.32.06-.73.06-1.04-.02l-7.09,1.21,3.51.51Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="241.99 503 247.93 501.99 242.77 501.78 241.99 503" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m218.26,503.95l-5.08,1,3.26.18c.38-.14,1.03-.15,1.44-.03l5.7-.55-4.3-.61c-.3.07-.7.08-1.02.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m201.89,515.55c.14-.02.3-.03.45-.03.27,0,.53.03.73.1l5.49-.59-10.71-.44,4.03.97Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="199.2 511.43 204.59 510.51 199.65 510.65 199.2 511.43" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m199.45,512.46l-.24-.03s-.09.02-.15.03h.39Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="227.08 502.71 226.66 502.62 221.75 503.38 226.84 503.6 227.08 502.71" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m233.61,501.69l-3.98.52,5.2,1.4c.1-.01.2-.02.31-.02.24,0,.46.03.64.08l3.53-.35-4.93-1.58c-.27.02-.56,0-.78-.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="227.42 503.62 232.39 503.82 231.7 503.64 227.65 502.82 227.42 503.62" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m226.7,504.08l.03-.1-2.21-.09,1.76.25c.13-.03.27-.05.42-.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m241.11,502.99c.08,0,.17-.01.25-.01l.78-1.22-5.63-.24,4.59,1.47Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m233.99,506.55c.07,0,.14-.01.22-.01.33,0,.6.05.81.14l1.7-.04,3.26-.32-3.34-1.18-1.48-.46c-.31,0-.55-.04-.76-.12l-5.41.32,4.99,1.68Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="220.32 505.64 225.41 506.1 226.18 505.07 220.32 505.64" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m225.11,507.36s.04.01.06.02l5.52-.42-4.95-.44-.63.84Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m232.6,509.77c.08-.01.15-.02.23-.02l.88-2.17c-.08-.02-.15-.04-.22-.06l-6.8.51,5.9,1.73Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m195.52,513.79l.52-.05h-.63s.08.03.12.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m301.78,548.87l-.71-.05s-.09.03-.15.05h.85Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m308.62,548.25c.35,0,.68.05.93.15l3.23-.25-8.6-.29,3.65.5c.23-.07.49-.1.79-.1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m305.6,549.29l-5.6-.05-.28.61c.1.02.2.05.28.07l5.6-.63Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m299.86,553.03l-.32-.78-5.24.03,5.32.8c.08-.02.16-.04.24-.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m291.52,544.84l6.18,2c.12-.02.24-.02.36-.02.33,0,.62.05.86.13l6-.63-13.4-1.47Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m311.66,549.68c-.48.15-1.26.16-1.74,0l-5.05.58,10.91-.03-1.19-.21-2.94-.33Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m317.9,544.66c-.3.05-.67.04-.96,0l-6.66,1.64,14.89.33-7.27-1.96Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m333.24,547.79l-4.49-.41c-.45.16-1.19.17-1.66.03l-3.69.49,9.84-.1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m330.95,549.21c.09,0,.17-.01.26-.01l-1.2-.09c-.1.04-.22.07-.35.1h1.3Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m306.97,546.95l-4.44.46,10.82.37-4.83-.79c-.47.12-1.13.1-1.55-.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m257.49,552.26h-.02l-8.32,2.27,7.82-.42.52-1.85Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m258.69,552.22c-.19.05-.4.07-.62.08l-.5,1.78,9.05-.49-7.94-1.37Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m289.88,557.51l8.72-3.67-.2-.03h-.16s.07-.02.07-.02l-7.34-1.1c-.31.08-.72.12-1.09.09l-8.63,3.22,7.74,1.58c.27-.06.59-.08.9-.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m246.48,554.26l8.29-2.25-16.34.92,6.88,1.36c.35-.08.8-.09,1.17-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m258.68,551.05l7.2-1.28-14.9-.09,6.36,1.35c.19-.04.4-.06.63-.06.26,0,.51.03.72.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m277.29,561.47l10.41-3.2-7.58-1.55c-.33.07-.74.08-1.1.04l-9.98,3.03,7.21,1.7c.31-.06.71-.07,1.04-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="276.62 556.45 268.59 556.87 267.73 559.14 276.62 556.45" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="268.12 556.51 268.97 554.28 259.43 556.96 268.12 556.51" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m349.74,546.15c-.38.15-1.01.21-1.49.12l-4.6,1.1,11.21-.94-5.11-.29Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m245.49,555.53s-.03,0-.05,0l-8.31,2.1,7.76-.2.6-1.89Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m373.63,543.87l-3.88-.59c-.29.08-.68.11-1.03.08l-6.88,2.49,15.16-1.29-3.37-.69Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m346.4,545.78l-8.27-1.15c-.33.09-.78.12-1.16.07l-6.73,1.97,6.53.59,9.04-1.34.59-.14Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m339.99,548.51v.02s1.84.02,1.84.02l-1.53-.12c-.09.03-.2.07-.31.09Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m388.1,542.49c.24,0,.47.03.67.07l6.46-1.16-8.69-3.2c-.17.02-.36.02-.53,0l-6.57,2.44,8.1,1.89c.16-.03.35-.05.55-.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m397.03,542.17c-.22,0-.44-.02-.63-.06l-.8.12-5.22.94,7.59.76-.94-1.76Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m379.69,543.9l-.52-.76-5.34-.11,5.82.88s.02,0,.03-.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m341.09,548.92s.03.02.05.02l.3-.02h-.34Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="378.59 541.37 379.55 542.76 385.01 542.88 378.59 541.37" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m339.25,548.9h-.41s.35.02.35.02c.02,0,.04-.01.06-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="340.7 550.62 335.56 550.31 341.39 551.55 340.7 550.62" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m340.93,549.98s-.03,0-.04.01l.19.26,3.09.19-3.24-.46Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m338.59,547.39l-.16.02h.06s.06-.02.09-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m331.87,550.45c-.52.1-1.21.05-1.62-.11l-4.05.24,10.68.95-5.01-1.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m338.79,548.52c-.13-.03-.25-.06-.35-.1l-1.28.08,1.63.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m341.45,546.97l-2.15.32s.06,0,.09,0c.19,0,.37.02.54.05l1.52-.36Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m328.45,549.2c-.12-.02-.22-.05-.31-.09l-1.02.08h1.33Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m340.4,550.21l-.1-.14c-.44.02-.87-.05-1.17-.18l-2.16.1,3.42.21Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="111.72 532.9 107 533.49 111.29 533.72 111.72 532.9" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m153.03,535.3c-.23.04-.51.06-.77.04l-.86.92,6.31.14-4.69-1.1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="151.66 535.25 145.04 536.12 150.74 536.25 151.66 535.25" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m140.03,532.63l-5.59-.9c-.27.07-.61.09-.92.07l-1.62,1.56,8.13-.73Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m160.79,536.03c.28,0,.54.03.76.1l7.03-.98-3.65-.68c-.48.11-1.14.07-1.54-.08l-8.01.55,4.88,1.15c.16-.03.35-.05.54-.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m141.77,535.69l4.32-.56-7.01.24-1.2.09,2.28.25c.45-.14,1.15-.15,1.6-.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="170.16 537.24 169 538.95 177.08 537.52 170.16 537.24" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m177.41,541.57l.96-1.72-7.66-.1,6.24,1.85c.15-.02.31-.03.47-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m168.06,538.88c.11,0,.23,0,.34,0l1.13-1.66-6.62-.27,4.83,1.83.31.1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m177.91,542.8c-.12.02-.24.04-.37.04l-.28,1.6,7.05-.15-6.39-1.49Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m244.29,559.28l.47-1.47-7.73.2,6.66,1.33c.18-.04.38-.06.6-.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m102.31,522.54c.25,0,.48.03.68.08l3.49-1.41-8.41.3,3.84,1.05c.13-.02.26-.03.4-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m108.39,521.33c-.31.03-.66,0-.92-.07l-3.64,1.47h8.5s-3.94-1.4-3.94-1.4Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m95.77,521.77c-.2.03-.45.03-.66.02l-.38.34,3.78.4-2.74-.76Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m109.51,524.77c.24,0,.47.03.66.08l1.75-.75-6.73-.55,3.98,1.24c.11-.01.22-.02.34-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m113.96,527.03l-4.04-1.11c-.44.07-.98.01-1.31-.13l-1.33.06-2.17.29,8.85.9Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m114.06,532.08l17.11-.93-4.77-.87c-.18.04-.39.07-.6.07-.66,0-1.19-.21-1.3-.49l-6.35-1.69c-.21.03-.45.04-.67.02l-3.78,3.68c.16.06.28.13.37.21Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m117.71,527.01c.31,0,.58.05.8.12l8.27-.75-3.88-1.04c-.13.02-.27.03-.41.03-.53,0-.97-.14-1.17-.34l-9.78.44,5.77,1.58c.13-.02.27-.03.41-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m134.24,530.64l6.56-1.67-12.48.81.14.03,4.71.86c.32-.07.73-.08,1.07-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m166.66,539.43l-5.62-2.13c-.1,0-.21,0-.31,0l-2.43,4.07,8.37-1.95Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m224.62,555.07l.2-2h-6.8s6.42,2.01,6.42,2.01c.06,0,.12-.01.18-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m215.38,552.24s.08,0,.12-.01l.2-5.16h-.02l-7.52,2.56h.59s-1.02.15-1.02.15l7.64,2.46Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m216.88,544.37l-7.86-.08,6.44,1.54c.19-.03.4-.05.61-.05l.81-1.42Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m231.92,557.87l-6.5-1.52c-.13.02-.26.04-.4.05l-.47,2.9c.09.01.18.03.26.04l7.1-1.47Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m223.87,550.02l-7.59-2.94-.2,5.15s.09.01.13.02l7.66-2.23Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m97.06,522.76l-2.71-.29-.27.25s.08.03.12.05l2.87-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m240.49,560.15h-6.21l-.05.91c.16.01.31.04.45.07l5.81-.98Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m234.03,557.22l.58-1.69-7.31.29,6.2,1.44c.16-.03.34-.05.53-.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m234.77,558.5c-.13.03-.27.05-.41.06l-.06,1.2h6.75l-6.28-1.26Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m195.06,550.82l6.88-.91-6.28-.11-.69,1s.07.02.1.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="196.42 547.79 187.83 549.28 195.29 549.41 196.42 547.79" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m185.15,548.83l9.88-1.7-7.65-2.08c-.15.02-.32.03-.49.03l-1.85,3.73s.08.02.12.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m197.58,547.84c-.18.03-.38.03-.58.03l-1.08,1.55,7.67.14-6.01-1.71Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m206.51,549.15l7.12-2.42-7.19.3.02,2.12s.03,0,.05,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m102,514.58h-.42s.28.04.28.04c.04-.02.09-.03.14-.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m205.87,549.15l-.02-2.1-6.62.27,6.47,1.85c.05,0,.1-.02.16-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m206.34,543.42l1.12-1.34-7.7.07,5.8,1.32c.24-.04.52-.06.78-.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m186.87,543.78l1.34-3.39s-.04,0-.06-.01l-8.71,1.85,6.91,1.6c.16-.03.33-.05.52-.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="260.84 492 264.93 491.67 261.34 491.31 260.84 492" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m280.49,493.78l-2.8.14,3.55.87-.28-.93c-.17-.01-.33-.04-.47-.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m278.43,497.61l2.17.23c.16-.04.35-.07.56-.07.26,0,.49.04.68.1l2.65-.12-2.2-.3c-.33.07-.8.06-1.1-.03l-2.76.19Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="288.95 499.43 289.96 499.32 288.91 499.36 288.95 499.43" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m282.02,495.81l.04.69c.12.01.23.03.33.06l2.71-.23-3.02-.53s-.04,0-.06.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m267.2,496.86s.06.03.09.05l2.46.09-1.84-.42c-.14.02-.3.02-.45.01l-.26.27Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m274.7,495.98l-.3,1.01.53.08,3.98-.27-4.03-.85c-.06.01-.12.02-.19.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m268.18,495.65l1.85-.16-2.16-.09v.19c.12.01.22.03.31.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m270.69,494.22l3.53.76s.09,0,.14-.01l.19-.83c-.09-.02-.17-.04-.25-.07l-3.61.14Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m281.01,495.73l-3,.06,3.45.72h.02l-.04-.69c-.16-.02-.31-.05-.43-.09Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="285.79 499.47 287.42 499.6 288.36 499.5 288.29 499.38 285.79 499.47" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m285.73,500.65l3.08.42c.16-.04.35-.07.56-.07.33,0,.62.06.83.15h1.13s.52-.05.52-.05l-4.14-.54-1.97.09Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m288.51,495.98s.06.01.09.02l2.9-.44h-2.92s-.06.42-.06.42Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="287.79 493.36 283.55 493.48 287.98 494.46 287.79 493.36" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m287.41,499.03h.14s-.02,0-.03-.01h-.11Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m281.84,494.83c.18.01.34.04.48.08l3.12-.17-3.89-.86.29.95Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="285.59 497.11 288.3 497.48 288.12 497.06 285.59 497.11" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m287.76,495.99c.05,0,.11-.02.17-.02l.06-.42h-2.81s2.59.44,2.59.44Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m275.13,494.18l-.19.83c.11.02.21.04.3.08l3.39-.07-3.44-.84s-.05,0-.07,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m232.8,495.14l-.43.64,3.53.35-2.95-.99s-.1,0-.15,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="234.73 494.5 238.89 494.63 239.28 493.1 234.73 494.5" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m218.12,494.37l-.69.86,4.02-.25-2.93-.63c-.13.02-.27.02-.4.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m231.92,496.45s.05.02.08.02l2.49-.09-2.37-.24-.2.3Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m224.51,499.1l1.7.14c.33-.1.83-.12,1.19-.03l5.76-.83-2.73-.19c-.32.1-.81.12-1.17.05l-2.51.37-2.24.48Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m224.19,495.69l-.22.22c.06.02.11.05.16.07l2.48.18-2-.49c-.13.02-.28.02-.42.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m227.89,495.34l3.88.38.45-.66h-.01l-4.32.28Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="238.8 495.01 234.99 494.9 238.53 496.08 238.8 495.01" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m231.34,496.37l.19-.28-2.91-.29,2.4.59c.1-.01.21-.02.32-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m244.79,497.21c.26-.05.59-.05.84,0l3.59-.64-7.35.16,2.92.49Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m255.75,496.94l-2.13-.21c-.17.05-.37.07-.59.07l-.21.3,2.93-.15Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m236.71,498.78l-.76.84,5.01.07-3.78-.93c-.15.02-.31.03-.47.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="249.57 494.74 248.61 495.01 251.25 495.52 252.67 495.73 252.39 494.18 249.57 494.74" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m252.96,494.07l.31,1.72c.06,0,.11,0,.16.02l4.59-.91-4.7-.89-.36.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="252.51 497.55 253.11 497.47 252.55 497.5 252.51 497.55" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m246.46,495.56l-4.12.77,7.92-.17-3.06-.59c-.23.03-.52.03-.74,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m239.88,498.57l3.42.84c.1-.02.22-.02.34-.02.2,0,.38.02.53.06l3.84-.55-1.42-.15-2.01-.05c-.19.08-.44.12-.73.12-.38,0-.71-.08-.91-.2l-1.1-.09-1.98.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m259.76,494.4c.11-.02.24-.03.37-.03.18,0,.35.02.5.05l3.23-.4-7.43-.26,3.34.64Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m238.02,497.01l-.53.02s.05.02.08.02l2.16.12-.61-.1c-.35.06-.8.03-1.1-.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m288.88,497.43c.11,0,.22.02.31.03l2.55-.47-3.03.06.17.38Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="355.1 504.71 355.33 504.68 354.58 504.61 355.1 504.71" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m350.8,508.07c.12-.06.27-.1.44-.13l-.02-.06c-.16,0-.31-.03-.44-.07l-1.97.25h1.99Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m350.67,506.02s-.02,0-.03.01l.42.51,1.71.15,2.37-.42-4.47-.25Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m347.07,506.19l3.28.29-.29-.35c-.3.01-.58-.03-.8-.1l-2.19.16Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m348.07,504.27l-2.17.09,3.36.68-.43-.66c-.29,0-.56-.04-.76-.12Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m342.83,503.58c.22.01.41.05.56.11l3.21-.13-4.06-1.41.28,1.43Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m351.43,509l-4.72,1.59,6.23.3c.26-.1.65-.15,1.01-.13l4.2-1.49-5.74-.38c-.26.09-.63.14-.98.1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m349.91,505.06h.03c.31,0,.59.05.79.14l.9-.02,1-.13-3.15-.63.42.65Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="360.03 508.14 361.69 508.12 359.96 508.02 360.03 508.14" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m366.77,507.7l-.07-.72c-.12-.01-.24-.03-.34-.06l-3.62.49,3.7.37c.1-.03.22-.06.34-.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="361.44 510.76 366.23 510.54 360.77 509.54 361.44 510.76" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="364.39 505.06 363.96 504.76 362.3 504.96 363.36 505.06 364.39 505.06" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m360.69,508.52c.05,0,.1.02.15.03l.37-.04h-.52Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m360.84,510.79l-.66-1.21c-.07,0-.14,0-.2,0l-4.08,1.46,4.95-.24Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m359.43,508.59c.05-.02.11-.03.17-.05h-.77s.6.05.6.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m338.51,504.81l4.45.77-.4-.94c-.23,0-.43-.04-.6-.1l-3.46.27Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m358.84,507.96h-.16s-1.88.23-1.88.23l2.62-.04-.07-.14c-.19,0-.35-.02-.51-.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m351.81,507.85l.02.06c.16.01.32.03.45.07l1.71-.22-1.77-.03c-.12.05-.26.09-.41.12Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="316.09 493.76 312.84 494.51 316.26 494.3 316.09 493.76" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m309.23,493.39l.16,1.03s.06,0,.09,0l4.18-.96-4.14-.15c-.09.03-.19.05-.3.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m308.94,495.42l-2.27.6,2.47-.12c.08-.04.16-.07.26-.1l-.22-.37c-.09,0-.17,0-.24-.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m309.72,496.75l-.66.17,1.55-.16c.12-.09.3-.16.51-.2l-.27.02c-.2.12-.51.19-.87.19-.09,0-.19,0-.27-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m309.58,501.5c.09-.01.19-.02.28-.02l.53-1.44c-.06-.01-.12-.03-.17-.04l-5.37.45,4.73,1.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m301.85,500.78l-2.92.64,4.04.15-.63-.76c-.17,0-.34,0-.49-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m308.82,498.99l7.79-1.29-4.35-.23c-.27.1-.69.13-1.03.08l-5.21,1.2,2.81.24Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m341.35,501.94l-4.22.07,5.1,1.53-.3-1.47c-.23-.02-.43-.06-.59-.13Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m312.23,496.5l-.53.03c.09,0,.17.01.25.03l.28-.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="303.65 502.38 303.3 501.96 300.76 501.87 303.65 502.38" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m333.67,500.15l-.22-.62c-.22-.01-.42-.05-.58-.1l-3.17.17,3.97.56Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="334.3 500.24 337.98 500.76 334.08 499.6 334.3 500.24" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m336.34,495.31l.84.21s.06,0,.1-.01l-.58-.19c-.12,0-.24,0-.36,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m309.95,495.3c-.05.02-.12.05-.19.07l.22.36h0c.13,0,.27.01.39.03l2.52-.49-2.95.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m334.62,501.13c.26.01.49.06.67.14l3.14-.05-3.98-.56.17.47Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m325.31,496.99l-3.64.52,8.81.96-4.47-1.44c-.24.02-.49,0-.7-.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m319.63,496.94c.07,0,.14.02.2.03l.4-.06-.6.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m319.5,497.97l-.26,1.29,5.15-.06-4.78-1.24s-.07,0-.11.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m56.21,518.72l-7.71,1.77,12.42-.48-3.92-1.26c-.26.03-.55.02-.79-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m67.22,519.62l-2.44.51,4.46.95c.32-.07.72-.07,1.04,0l7.25-1.59-.64-.07.49-.02-3.23-.86-6.94,1.09Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m62.45,519.56c.1-.01.2-.02.31-.02.19,0,.37.02.53.05l6.96-1.44-11.61.19,3.81,1.22Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m362.43,503.04l.37.29c.09-.01.18-.02.28-.02.13,0,.25,0,.37.03l2-.46-2.98.14s-.02.01-.03.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="42.93 522.91 44.29 521.45 37.53 523 42.93 522.91" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m77.48,518.01l8.59.64-3.45-1.04c-.37.05-.8.01-1.1-.09l-2.44.24-1.6.25Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m38.03,517.33s.09,0,.14,0c.24,0,.47.03.66.08l8.26-1.2-13.73-.9,4.67,2.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m43.46,520.59l-5.12-2.1c-.22.01-.44,0-.63-.03l-8.16,1.94,13.92.2Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m49.27,516.7l-7.37,1.07,12.46.19-4.09-1.2c-.33.04-.72.02-1.01-.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m45.07,520.23c.05,0,.11,0,.17,0,.17,0,.34.01.48.04l8.43-1.93-14.21-.21,5.13,2.1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m79.02,518.94c.13-.02.27-.03.42-.03.34,0,.65.06.88.15l3.76-.17-7.27-.55,2.21.59Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m108.29,510.53l-5.89,1.61,10.6-1.02-3.86-.63c-.25.05-.58.07-.85.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m94.13,515.73c.15-.03.31-.05.49-.05.33,0,.62.05.84.14l1.4-.37-2.23-.11-2.47-.05,1.98.43Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m98.15,513.14l-1.79.16,4.21.02-1.13-.15c-.38.1-.94.09-1.29-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m217.67,493.41c.15-.04.32-.06.51-.06l.2-.34-2.96.14,2.26.26Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="99.57 512.05 106.17 510.24 100.67 510.33 99.57 512.05" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m89.62,512.97c.16-.03.33-.05.51-.05.27,0,.51.03.7.1l2.93-.26-6.17-.15,2.03.37Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m89.1,513.88l-.38.08,1.13.04h.1c-.24-.02-.46-.06-.63-.13h-.22Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m90.24,514.01h.97s-.5-.06-.5-.06c-.14.03-.3.05-.47.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m96.34,514c.17-.04.37-.07.58-.07.24,0,.47.03.65.08l2.75-.32-6.16-.02,2.18.33Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m97.63,530.55l1.32-3.6-6.16.81-1.13.25,5.9,2.54s.05,0,.08,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="100.47 526.75 99.58 526.87 98.21 530.58 104.83 528.93 100.47 526.75" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m85.11,531.67c.11,0,.22,0,.32.02l1.34-1.16-5.94-.44,4.06,1.59c.07,0,.15,0,.22,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="87.44 530.58 86.05 531.79 94.04 531.07 87.44 530.58" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m91.8,529.14l-1.69-.64c-.09,0-.17,0-.26-.02l-2,1.73,7.81.58-3.86-1.66Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m109.88,532.3l-5.04-.4-.6,1.06s.08.02.12.03l5.52-.69Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="106.69 517.94 107.5 517.95 103.95 516.81 98.86 516.72 106.69 517.94" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m103.65,532.9l.6-1.04-4.31-.34,3.48,1.38c.08,0,.16,0,.24,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="100.01 531.14 104.46 531.49 105.52 529.65 99.69 531.1 100.08 531.13 100.01 531.14" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m45.48,521.38c-.14.01-.3.01-.44,0l-1.42,1.52,5.86-.09-4-1.44Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m67.83,527.19l-3.89-.91c-.29.05-.66.05-.96,0l-7.2,1.78,12.05-.88Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="87.18 530.17 89.13 528.49 81.24 529.73 87.18 530.17" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m61.16,525.71l-3.94-.77c-.3.07-.69.07-1.01.02l-6.16,1.59,11.1-.85Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m51.29,522.39c.16,0,.31.01.45.03l8.02-1.99-12.82.5,4.1,1.47c.08,0,.17-.01.25-.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m57.06,523.85l1.75-1.23-5.64.42,3.06.82c.26-.04.56-.04.83,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m78.6,529.13c.24,0,.47.03.67.08l6.7-1.06,2.14-.4-.58-.22-4.47-1.45c-.34.04-.74,0-1.02-.07l-10.07,1.36,6.23,1.79c.13-.02.26-.03.4-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m70.3,527.8c-.15.02-.3.03-.46.03l-1.37,2.13,8.13-.34-6.31-1.82Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="67.83 529.99 69.15 527.92 61.25 530.26 67.83 529.99" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m81.75,516.54c.16-.03.34-.05.53-.05.5,0,.92.12,1.13.31l6.85-.45-10.68-.25,2.17.44Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m190.21,502.9c.13-.03.28-.04.44-.05l.66-1.32-4.7.78,3.6.58Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="184.14 505.1 188.22 503.74 184.52 503.98 184.14 505.1" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m184.88,502.95l-.22.64,3.41-.23-2.83-.46c-.11.02-.23.04-.35.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="191.53 501.11 191.81 500.55 188.75 501.57 191.53 501.11" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m177.19,503.77c.13-.03.28-.05.45-.05l.66-1.36-4.67.88,3.56.53Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m173.35,505.7l1.03.22c.06,0,.13,0,.2,0,.25,0,.48.03.66.09l5.89-.46-3.15-.79c-.35.04-.75,0-1.02-.09l-6.59.3,2.95.74Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m191.73,499.47c.05-.02.12-.04.19-.06l.14-.25-1.92.26,1.6.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m109.95,513.73c.29-.08.7-.1,1.03-.05l2.66-1.75-6.24,1.48,2.55.32Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="184.05 503.63 184.27 502.99 180.98 503.83 184.05 503.63" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m190.98,503.89v1.06l3.52-.28-3.46-.79s-.04,0-.06,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m212.89,498.27c.24-.08.59-.11.89-.08l.98-.84-4.63.71,2.76.2Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m170.66,503.73l-.65.26,3.5.03-1.78-.26c-.32.07-.76.06-1.07-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m208.39,497.03l-.71.61,4.02-.62-2.39-.09c-.24.08-.6.12-.92.1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m216.23,495.2c.18-.04.4-.06.61-.06l.64-.8-4.12.52,2.87.34Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m210.35,501.71l-3.57-.14c-.35.13-.95.15-1.34.03l-6.44,2.39,11.35-2.29Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="193.84 506.37 195.16 506.48 196.84 506.12 196.44 505.24 193.84 506.37" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m197.02,505.18l.37.83,4.01-.83-4.12-.08c-.08.03-.16.06-.26.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m191.1,510.17c.28-.06.66-.07.97-.02l4.97-1.15-9.69.51,3.76.66Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m178.91,502.36l-.63,1.3,4.18-1.07-3.01-.3c-.16.04-.34.07-.53.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m135.35,502.57c-.32.07-.76.08-1.08,0l-3.38.52,7.2-.14-2.73-.39Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m129.42,503.52l2.74.51c.15-.03.31-.05.48-.05.19,0,.37.02.53.05l4.27-.68-8.02.16Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m170.79,502.8c.16-.03.35-.05.53-.04l.17-.23-1.63.11.92.15Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m138.1,505.72c-.15.04-.33.07-.52.07l-1.07,2.59,5.71-1.87-2.63-.59-1.49-.2Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m136.93,504.77c.17-.04.36-.07.56-.07.27,0,.52.04.72.11l1.7-.12h-3.42s.44.08.44.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m114.92,511.63l-3.19,2.09,8.39-2.02-4.05-.18c-.3.12-.78.16-1.16.1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m122.73,509.2l.54-1.41s-.05-.01-.06-.02l-5.94,2.68,5.46-1.25Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m126.34,503.92l-5.33,1.99,9.75-1.33-3.8-.7c-.19.03-.41.05-.62.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m123.19,506.81c.24-.06.55-.08.83-.05l4.92-1.54-8.65,1.18,2.9.41Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="127.27 502.86 131.46 502.21 127.9 502.13 127.27 502.86" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m161.04,507.94l-3.54,2.33s.03.02.05.03l9.46-1.17-5.19-1.19c-.24.04-.54.04-.78,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m168.48,509.65l-1.1.91,6.1.08-4.32-1.01c-.21.03-.47.04-.69.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m143.99,505.72c.33-.08.81-.09,1.15-.02l1.54-.73-5.38.39,2.69.36Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m169.52,508.68s.02,0,.02,0l2.95-.14-1.9-.2c-.23.07-.55.1-.84.08l-.24.25Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m156.42,510.07s.09,0,.13,0c.13,0,.27.01.39.03l3.35-2.21-7.79.58,3.92,1.61Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m154.09,506.36l-2.22,1.37,6.87-.51-3.83-.87c-.25.04-.56.04-.82,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m147.7,504.96l-1.69.81,5.35-.19-2.71-.6c-.3.05-.66.04-.94-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m148.6,507.06l1.84.61c.08,0,.16,0,.24,0,.15,0,.29.01.42.03l2.3-1.42h-.23s-4.56.79-4.56.79Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="407.34 542.63 400.12 542 408.32 544.52 407.34 542.63" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m233.77,558.56c-.12-.01-.23-.03-.33-.05l-6.05,1.26h6.32l.06-1.21Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m233.65,561.05l.05-.9h-5.89l5.36.97c.15-.03.31-.06.48-.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m224.88,560.56c-.25.06-.56.09-.87.08l-.37.56,5.78.19-4.55-.83Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m234.6,562.35c-.19.04-.41.07-.65.07l-.23.63,5.82.3-4.95-.99Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m228.26,561.73l-4.87-.16-.31.47c.1.02.2.05.28.08l4.89-.39Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m245.36,557.79l-.48,1.52s.09.01.13.02l7.89-1.74-7.54.2Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m246.57,555.51c-.16.03-.33.05-.51.05l-.58,1.84,8.27-.22-7.19-1.67Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m244.1,563.06c.3,0,.58.04.81.1l6.47-1.03-13.88-.17,5.89,1.17c.21-.05.45-.07.7-.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m245.09,560.56c-.44.1-1.04.1-1.47-.01l-6.07,1.03,13.34.16-1.69-.41-4.11-.77Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m204.25,553.95l1.38-3.55c-.1-.02-.19-.04-.28-.06l-9,1.2,7.55,2.43c.11-.01.23-.02.35-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m256.26,556.63l.6-2.13-8.52.46,7.43,1.72c.15-.03.31-.04.49-.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m213.72,552.75l-7.18-2.32c-.1.01-.22.02-.33.02l-1.38,3.54c.09.02.17.03.25.05l8.64-1.3Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m201.93,554.38l-7.31-2.36c-.17.02-.35.03-.54.02l-1.55,2.15,9.4.19Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m194.38,550.72l.65-.93-7.01-.12,5.56,1.12c.24-.05.52-.08.8-.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m214.43,556.85l.88-3.34c-.11-.02-.22-.03-.31-.06l-8.5,1.29,7.57,2.14c.12-.02.24-.03.36-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m223.98,559.28l.47-2.9c-.12-.02-.23-.03-.33-.06l-7.33,1.28,6.82,1.72c.12-.02.24-.03.37-.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m223.02,561.17l.41-.61c-.09-.02-.16-.04-.24-.07l-5.46.51,5.28.18Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m222.84,555.62l-6.67-2.1c-.09.01-.18.02-.28.02l-.88,3.33c.1.02.19.03.28.05l7.55-1.31Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m312.29,546.72l5.25.86c.21-.05.45-.08.72-.08.29,0,.56.04.79.1l4.76-.63-11.51-.25Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m312.93,555.79l6.51-1.56-15.81-.32,8.1,1.88c.37-.07.83-.07,1.2,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m321.74,553.43l-.08-2.18-.7-.12-3.59.38-3.63.53,7.62,1.46c.12-.03.25-.05.39-.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m301.01,554.29c-.1.02-.22.03-.33.04l-.11,2.82,9.56-.74-9.12-2.12Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m309.38,556.85l-8.82.68-.09,2.16s.06,0,.09.01l8.82-2.85Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m185.08,550c-.23.05-.51.07-.78.06l-.94,1.36,7.92-.17-6.2-1.25Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m322.92,553.53l6.41-.83-1.56-.38-5.52-.97.08,2.07c.22.02.42.05.59.11Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m338,552.01l-11.75-1.04,5.01,1.23c.17-.03.36-.05.56-.05.4,0,.76.07,1.02.17l5.16-.32Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m342.13,552.85c-.37,0-.7-.07-.94-.17l-6.31.39,7.73,1.12-.48-1.34Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m332.45,556.16l-.74-2.66c-.27-.01-.52-.05-.74-.11l-3.68.48-2.4.44,7.47,1.87s.06-.01.09-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m267.12,559.15l.85-2.25-9.23.48,7.81,1.83c.17-.03.36-.05.56-.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m277.43,562.77c-.34.06-.77.06-1.12,0l-7.99,2.1,16.86-.17-7.76-1.93Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m273.87,561.91l-6.11-1.45c-.41.07-.94.06-1.33-.03l-7.65,1.38,15.09.1Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m348.32,551.07l-6.94-.42.65.88c.05,0,.11,0,.16,0,.34,0,.64.05.88.13l5.24-.58Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="364.18 504.35 365.5 504.19 363.98 504.21 364.18 504.35" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="266.43 553.99 257.47 554.47 256.85 556.66 256.86 556.67 266.43 553.99" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m299.96,551.02c-.09.03-.19.05-.29.07l.31.77,6.24-.04-6.26-.8Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m299.89,559.69l.09-2.11-7.95.62,7.45,1.55c.13-.03.27-.05.41-.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="300.1 554.38 291.94 557.82 299.99 557.19 300.1 554.38" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m288.21,564.18l10.13-3.71-8-1.67c-.33.07-.74.08-1.1.04l-10.52,3.24,8.6,2.13c.28-.05.61-.06.91-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m89.84,527.32c.19-.02.39-.02.58,0l2.68-.5,3.96-.88-12.13-.2,4.92,1.59Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m91.39,523.15l-4.34-1.13c-.2.03-.43.04-.65.03l-2.44,2.54,4.36-.76,3.06-.68Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m93.4,523.77c-.24.02-.49,0-.7-.04l-7.32,1.63,12.47.21-4.45-1.8Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="83.14 524.73 85.71 522.05 77.71 523.52 82.25 524.89 83.14 524.73" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m99.17,526.34s0,0-.01,0l-2.1.47,2.04-.27.07-.2Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m69.41,526.68c.15-.03.32-.04.5-.04.26,0,.51.03.71.09l4.7-.63,1.91-.33-11.2.14,3.38.78Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m111.02,532l-4.77-2.37s-.06,0-.1,0l-1.09,1.9,5.96.47Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="113.39 532.92 112.93 533.81 118.29 534.09 113.39 532.92" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m106.18,528.44c.27,0,.53.03.74.1l8.12-1-11.61-1.18-1.16.15,3.86,1.93h.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m112.85,531.74c.09,0,.17,0,.26.01l3.73-3.62-9.07,1.13,5.03,2.49h.06Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m88.59,518.51c.11-.02.23-.02.35-.02.48,0,.9.12,1.11.29l7.8-.67-12.95-.71,3.69,1.11Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m87.53,520.17l.62-.64s-.05-.02-.08-.03l-1.31.06-2.21.29,2.99.32Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m94.61,516.83c-.49,0-.91-.12-1.11-.3l-7.99.52,12.49.68-3.05-.92c-.1.01-.22.02-.34.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m98.52,515.56l-.1-.02h-.26s-1.46.37-1.46.37l4.63.09-2.4-.38c-.15-.01-.28-.03-.41-.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m80.29,525.23l-4.05-1.22c-.31.03-.67.02-.95-.04l-8.28,1.53,12.6-.15.68-.12Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m71.49,521.67l4.03,1.2c.17-.02.37-.03.55-.02l1.92-2.13-5.54.74-.97.21Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="78.4 520.27 78.53 520.12 77.01 520.45 78.4 520.27" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m86.21,520.91c.19-.03.42-.03.62-.02l.35-.36-3.88-.42,2.91.8Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="136.73 536.55 132.04 536.7 130.92 537.6 136.73 536.55" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="149.26 544.51 156.25 544.57 157.06 542.6 149.26 544.51" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="132.63 531.98 125.35 533.95 131.13 533.43 132.63 531.98" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m167.22,544.2c.18,0,.35.01.5.03l7.9-2.05-6.92-2.06c-.27.03-.58.03-.85,0l-1.41.29-7.01,1.63,7.37,2.18c.13-.02.27-.02.42-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m155.85,547.04l8.63-2.02-7.78-.06-.86,2.08h.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m176.95,542.82h-.09s-6.84,1.77-6.84,1.77l6.64-.14.28-1.63Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m157.68,541.35l2.46-4.12s-.02,0-.03,0l-9.59,1.68,6.8,2.46c.12,0,.24-.01.36-.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m184.09,548.77c.12-.01.24-.02.37-.02l1.83-3.67-8,2.1,4.69,1.32,1.12.26Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="184.11 544.68 177.19 544.83 176.91 546.4 180.71 545.57 184.11 544.68" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m158.03,542.62c-.12.02-.25.02-.38.03l-.8,1.93,7.98.07-6.8-2.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="131.76 536.32 132.11 536.03 128.84 536.41 131.76 536.32" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m140.36,536.8s-.02,0-.03,0l-7.53,1.37,6.71.18.85-1.54Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="182.71 551.44 183.69 550.01 175.64 551.59 182.71 551.44" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="137.49 533.25 131.46 533.79 130.44 534.78 137.49 533.25" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m141.33,536.84c-.12.01-.26.02-.38.02l-.83,1.49,6.3.17-5.09-1.68Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="146.24 538.9 139.91 538.73 138.83 540.66 146.24 538.9" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m148.97,538.14l1.41-1.51-7.12-.16,5.12,1.69c.19-.02.4-.03.6-.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="151.05 536.64 149.63 538.17 157.57 536.79 151.05 536.64" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m301.2,553.07l5.52-.88-6.59.05.3.74c.28,0,.54.03.76.09Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="453.01 509.35 454.11 510.09 457.88 510.04 457.8 510.03 453.01 509.35" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m451.47,509.32l-2.65.85,4.48-.06-1.17-.8c-.2.03-.44.03-.66.01Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m454.67,510.48l1.12.76c.23-.03.51-.03.74,0l2.85-.82-4.71.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m457.47,515.98s.09,0,.13,0l5.71-1.85-6.24.2.4,1.64Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m456.59,512.3l.4,1.66,6.18-.2-6.53-1.46s-.03,0-.05,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m436.14,508.61c.12-.02.24-.02.37-.02.14,0,.27,0,.4.03l2.77-.69-4.48.05.94.64Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m441.89,508.22l-2.63.66,4.37-.1-.92-.56c-.25.04-.56.05-.81,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="440.53 509.24 445.35 509.83 444.24 509.15 440.53 509.24" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m446.26,509.86c.22-.04.49-.05.72-.02l2.56-.81-4.48.11,1.2.73Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="473.09 514.12 477.68 514.4 472.23 512.87 473.09 514.12" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m487.87,513.36l-5.19,1.3,6.42.27-.83-1.54c-.15,0-.28-.01-.41-.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m480.19,514.22c.12-.02.24-.02.37-.02.15,0,.29.01.42.03l5.13-1.29-12.06-.44,6.13,1.72Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="495.67 513.58 491.13 513.24 492.36 513.6 496.22 514.53 495.67 513.58" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="489.74 514.96 494.57 515.17 488.94 513.47 489.74 514.96" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m477.71,511.18l-3.96.93,11.11.41-6.23-1.34c-.28.05-.63.05-.92,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m465.26,514.42l-5.92,1.92,12.91-.05-6.35-1.88c-.2.03-.43.03-.63,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m471.09,512.76l-3.67,1.03,5.01.3-.9-1.3c-.15,0-.3,0-.43-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="430.83 508.02 435.31 508.6 434.41 507.98 430.83 508.02" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m416.08,507.12l-4.28,1.43,5.49-.32-.87-1.1c-.12,0-.23,0-.34,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m372.67,505.77l-1.63.31,5.08-.22-2.26-.15c-.31.11-.8.14-1.18.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m379.17,502.33l.21.25,2.89-.33-2.96.03s-.09.04-.14.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m375.49,503.41l3.85.07s.07-.03.1-.04l-.37-.44-3.59.41Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m386,500.46l-4.14,1.03,5.06-.05c.05-.03.1-.05.17-.07l-.69-.9c-.13,0-.27,0-.4-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m387.68,501.28h.08c.24,0,.47.03.65.09l2.34-.21-3.69-.66.61.79Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m364.99,504.93c.18-.02.4-.02.58,0l1.95-.58-2.88.34.35.25Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m369.54,502.8l-2.67.61,3.39-.05s.1-.05.15-.06l-.4-.47c-.16,0-.33,0-.47-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="372.24 504.91 372.26 504.91 372.26 504.9 372.24 504.91" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="373.58 504.77 373.59 504.77 373.61 504.76 373.58 504.77" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m419.25,509.91s.08,0,.11,0c.08,0,.15,0,.22,0l4.81-1.71-6.19.36,1.05,1.35Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m489.95,515.35l.74,1.39c.12,0,.24,0,.35.02l4.1-1.19-5.2-.22Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m399.62,507.87l-4.03,1.24,10.74-.32-5.88-.96c-.24.05-.55.07-.83.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m393.04,501.72l-2.33.21,4.23.76-1.02-.89c-.3.03-.63,0-.88-.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m426.42,508.42l-5.31,1.89,6.53.93c.26-.07.6-.09.91-.06l6.05-1.9-7.33-.95c-.24.07-.56.09-.85.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="417.91 508.19 423.44 507.87 417.02 507.06 417.91 508.19" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m395.75,502.75c.08,0,.16-.01.24-.01.27,0,.52.04.72.11l2.73-.18-4.71-.81,1.03.9Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m394.2,506.32l5.04.55s.03-.01.06-.02l-.47-.76-4.63.23Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m398.08,504.41c.12-.02.24-.02.37-.02.19,0,.37.02.52.05l2.31-.4-4.19-.3.99.67Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m470.99,522.43c.09,0,.18,0,.27.01l4.13-1.44-5.62.28,1.05,1.15c.06,0,.12,0,.18,0Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="407.14 541.06 407.77 542.28 413.91 542.81 407.14 541.06" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="397.69 542.24 398.63 543.99 405.67 544.69 397.69 542.24" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="414.87 540.93 409.48 540.73 416.61 542.57 414.87 540.93" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m388.54,543.74c-.36.05-.8.03-1.12-.05l-4.68.81,13.15,1.33-7.35-2.09Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="398.19 544.33 391.79 543.69 398.93 545.73 398.19 544.33" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="414.46 539.86 415.19 540.55 419.93 540.72 414.46 539.86" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m424.16,537.93c-.1.05-.23.08-.37.12l.19.36,4.9-.32-4.72-.15Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="491.63 517.93 492.95 519.32 498.35 519.33 491.63 517.93" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m424.51,540.54l-.92-1.72-7.28.47,8.1,1.27s.06-.02.1-.02Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m351.76,549.32c-.07.03-.15.05-.23.07l1.51.02-1.28-.09Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m352.01,550.45c.33,0,.62.04.86.12l5.86-.68-7.1-.1.35.66h.03Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m343.2,547.8l6.7.53c.35-.13.88-.18,1.34-.12l4.88-1.48-12.92,1.08Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m379.82,543.15l.46.67s.08,0,.12,0c.26,0,.49.03.7.08l3.71-.64-4.99-.11Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m348.93,549.36l1.1.02c-.07-.02-.13-.04-.19-.07l-.91.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m370.26,546.04c.21,0,.41.02.59.06l4.68-1.03-11.34.97,5.04.2c.26-.12.62-.19,1.02-.19Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="360.91 547.92 354.22 548.65 362.57 549.26 360.91 547.92" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m360.26,546.72s-.03.02-.05.02l.93.76,4.98-.55-5.86-.23Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="432.2 536.49 426.82 537.2 433.84 537.43 432.2 536.49" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m351.39,550.5l-.38-.73-5.86-.08,6.07.86c.06-.02.12-.03.17-.04Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m461.91,522.24l1.91.83c.19-.05.41-.08.65-.08.3,0,.58.05.8.12l2.04-.17-5.39-.69Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m466.99,524.03h.12s-.02,0-.03,0h-.09Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m462.34,524.47c-.33.08-.78.09-1.13.03l-3.31.8,10.87.24-6.43-1.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m484.49,520c-.34.07-.78.08-1.12,0l-3.17.62,10.07.42-5.77-1.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="493.72 520.84 492.63 519.7 488.39 519.69 491.38 520.42 493.72 520.84" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m481.25,519.56l-9.88-.44,5.69,1.06c.34-.07.78-.07,1.12,0l2.64-.51.44-.11Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m435.23,537.26l4.05-1.72-6.36.85,1.59.92c.22-.04.48-.06.72-.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m456.07,525.98c-.33.07-.77.08-1.11.02l-3.8.87,1.37.51,10.7-.03-7.16-1.36Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="449.74 527.77 454.55 528.56 452.39 527.76 449.74 527.77" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m429.67,532.87l.87,1.78s.04,0,.06,0l4.88-2.45-5.81.66Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m437.48,531.17c.23,0,.44.02.62.07l6.81-3.32-15.21,1.73,7.24,1.58c.17-.03.35-.05.55-.05Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m446.08,528.19c-.22,0-.44-.02-.63-.07l-6.81,3.33,8.65-.97-1.21-2.29Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <polygon points="432.37 536.07 436.35 535.54 431.63 535.65 432.37 536.07" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <polygon points="428.37 530.23 429.48 532.5 435.56 531.8 428.37 530.23" style={{fill: '#c0cbce', strokeWidth: 0,}}></polygon>
            <path d="m446.72,528.12s-.04,0-.06.01l1.2,2.29,7.6-.85-8.75-1.45Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
            <path d="m448.22,532.27l-.74-1.42-7.04.79,7.55.69c.08-.03.15-.05.24-.07Z" style={{fill: '#c0cbce', strokeWidth: 0,}}></path>
        </g>


        <g className="data-layer">
            <path className="data-layer-line-1" d="m273.77,521.99L13.57,457.63c-2.12-.53-1.98-3.59.18-3.92l260.2-39.64c.2-.03.4-.03.6,0l260.2,39.64c2.16.33,2.3,3.39.18,3.92l-260.2,64.37c-.32.08-.65.08-.96,0Z" 
            style={{fill: 'none', stroke: '#e6e6e6', strokeMiterlimit: 10,}} />

            <path className="data-layer-line-2" d="m273.77,542.95L13.57,478.58c-2.12-.53-1.98-3.59.18-3.92l260.2-39.64c.2-.03.4-.03.6,0l260.2,39.64c2.16.33,2.3,3.39.18,3.92l-260.2,64.37c-.32.08-.65.08-.96,0Z" 
            style={{fill: 'none', stroke: '#e6e6e6', strokeMiterlimit: 10,}} />

            <path className="data-layer-line-3" d="m273.77,563.53L13.57,499.16c-2.12-.53-1.98-3.59.18-3.92l260.2-39.64c.2-.03.4-.03.6,0l260.2,39.64c2.16.33,2.3,3.39.18,3.92l-260.2,64.37c-.32.08-.65.08-.96,0Z" 
            style={{fill: 'none' ,stroke: '#e6e6e6', strokeMiterlimit: 10,}} />

            <circle className="data-layer-circle-1" cx="536.44" cy="455.33" r="4.19" style={{fill: '#f37e47', stroke: '#fff', strokeMiterlimit: 10}} />

            <circle className="data-layer-circle-2" cx="536.44" cy="476.24" r="4.19" style={{fill: '#f37e47', stroke: '#fff', strokeMiterlimit: 10}} />

            <circle className="data-layer-circle-3" cx="536.44" cy="496.68" r="4.19" style={{fill: '#f37e47', stroke: '#fff', strokeMiterlimit: 10}} />
        </g>

        <g className="vendor-arrows vendor-arrows-bottom" style={{
    opacity: currentIndex === 8 ? 0.25 : 1,
    transition: 'opacity 0.5s ease-in-out' // Add a transition for smooth animation
  }} >

            <line x1="60.52" y1="444.41" x2="60.52" y2="508" style={{fill: 'none', stroke: currentIndex === 0 || currentIndex === 7 ? 'rgb(243, 126, 71)' : '#9b9b9b', strokeDasharray: '0, 0, 3.11, 3.11', strokeLinecap: 'round', strokeMiterlimit: 10, strokeDashoffset: "17px",
               animation: currentIndex === 0 || currentIndex === 7 ? 'upwardAnimation 1s linear infinite' : 'none',}}></line>
            <line x1="121.64" y1="459.66" x2="121.64" y2="524" style={{fill: 'none', stroke: currentIndex === 0 || currentIndex === 7 ? 'rgb(243, 126, 71)' : '#9b9b9b', strokeDasharray: '0, 0, 3.11, 3.11', strokeLinecap: 'round', strokeMiterlimit: 10, strokeDashoffset: "17px",
               animation: currentIndex === 0 || currentIndex === 7 ? 'upwardAnimation 1s linear infinite' : 'none',}}></line>
            <line x1="183.3" y1="475.11" x2="183.3" y2="539" style={{fill: 'none', stroke: currentIndex === 0 || currentIndex === 7 ? 'rgb(243, 126, 71)' : '#9b9b9b', strokeDasharray: '0, 0, 3.11, 3.11', strokeLinecap: 'round', strokeMiterlimit: 10, strokeDashoffset: "17px",
               animation: currentIndex === 0 || currentIndex === 7 ? 'upwardAnimation 1s linear infinite' : 'none',}}></line>
            <line x1="244" y1="489.62" x2="244" y2="554" style={{fill: 'none', stroke: currentIndex === 0 || currentIndex === 7 ? 'rgb(243, 126, 71)' : '#9b9b9b', strokeDasharray: '0, 0, 3.11, 3.11', strokeLinecap: 'round', strokeMiterlimit: 10, strokeDashoffset: "17px",
               animation: currentIndex === 0 || currentIndex === 7 ? 'upwardAnimation 1s linear infinite' : 'none',}}></line>
            <line x1="304.99" y1="489.62" x2="304.99" y2="554" style={{fill: 'none', stroke: currentIndex === 0 || currentIndex === 7 ? 'rgb(243, 126, 71)' : '#9b9b9b', strokeDasharray: '0, 0, 3.11, 3.11', strokeLinecap: 'round', strokeMiterlimit: 10, strokeDashoffset: "17px",
               animation: currentIndex === 0 || currentIndex === 7 ? 'upwardAnimation 1s linear infinite' : 'none',}}></line>
            <line x1="366.1" y1="475.11" x2="366.1" y2="539" style={{fill: 'none', stroke: currentIndex === 0 || currentIndex === 7 ? 'rgb(243, 126, 71)' : '#9b9b9b', strokeDasharray: '0, 0, 3.11, 3.11', strokeLinecap: 'round', strokeMiterlimit: 10, strokeDashoffset: "17px",
               animation: currentIndex === 0 || currentIndex === 7 ? 'upwardAnimation 1s linear infinite' : 'none',}}></line>
            <line x1="427.22" y1="461.15" x2="427.22" y2="525" style={{fill: 'none', stroke: currentIndex === 0 || currentIndex === 7 ? 'rgb(243, 126, 71)' : '#9b9b9b', strokeDasharray: '0, 0, 3.11, 3.11', strokeLinecap: 'round', strokeMiterlimit: 10, strokeDashoffset: "17px",
               animation: currentIndex === 0 || currentIndex === 7 ? 'upwardAnimation 1s linear infinite' : 'none',}}></line>
            <line x1="488.34" y1="447.2" x2="488.34" y2="510" style={{fill: 'none', stroke: currentIndex === 0 || currentIndex === 7 ? 'rgb(243, 126, 71)' : '#9b9b9b', strokeDasharray: '0, 0, 3.11, 3.11', strokeLinecap: 'round', strokeMiterlimit: 10, strokeDashoffset: "17px",
               animation: currentIndex === 0 || currentIndex === 7 ? 'upwardAnimation 1s linear infinite' : 'none',}}></line>
            
            <polyline points="485.02 516.69 488.37 513.33 491.73 516.69" style={{fill: 'none',stroke: currentIndex === 0 || currentIndex === 7 ? '#f37e47' : '#9b9b9b', strokeLinecap: 'round', strokeMiterlimit: 10,
               animation: currentIndex === 0 || currentIndex === 7 ? 'upwardAnimation 1s linear infinite' : 'none',}}></polyline>
            <polyline points="423.71 530.64 427.07 527.28 430.42 530.64" style={{fill: 'none',stroke: currentIndex === 0 || currentIndex === 7 ? '#f37e47' : '#9b9b9b', strokeLinecap: 'round', strokeMiterlimit: 10,
               animation: currentIndex === 0 || currentIndex === 7 ? 'upwardAnimation 1s linear infinite' : 'none',}}></polyline>
            <polyline points="362.69 544.59 366.05 541.24 369.4 544.59" style={{fill: 'none',stroke: currentIndex === 0 || currentIndex === 7 ? '#f37e47' : '#9b9b9b', strokeLinecap: 'round', strokeMiterlimit: 10,
               animation: currentIndex === 0 || currentIndex === 7 ? 'upwardAnimation 1s linear infinite' : 'none',}}></polyline>
            <polyline points="301.57 558.83 304.93 555.47 308.28 558.83" style={{fill: 'none',stroke: currentIndex === 0 || currentIndex === 7 ? '#f37e47' : '#9b9b9b', strokeLinecap: 'round', strokeMiterlimit: 10,
               animation: currentIndex === 0 || currentIndex === 7 ? 'upwardAnimation 1s linear infinite' : 'none',}}></polyline>
            <polyline points="240.46 559.01 243.81 555.66 247.17 559.01" style={{fill: 'none',stroke: currentIndex === 0 || currentIndex === 7 ? '#f37e47' : '#9b9b9b', strokeLinecap: 'round', strokeMiterlimit: 10,
               animation: currentIndex === 0 || currentIndex === 7 ? 'upwardAnimation 1s linear infinite' : 'none',}}></polyline>
            <polyline points="179.34 544.97 182.7 541.61 186.05 544.97" style={{fill: 'none',stroke: currentIndex === 0 || currentIndex === 7 ? '#f37e47' : '#9b9b9b', strokeLinecap: 'round', strokeMiterlimit: 10,
               animation: currentIndex === 0 || currentIndex === 7 ? 'upwardAnimation 1s linear infinite' : 'none',}}></polyline>
            <polyline points="118.23 529.34 121.58 525.98 124.94 529.34" style={{fill: 'none',stroke: currentIndex === 0 || currentIndex === 7 ? '#f37e47' : '#9b9b9b', strokeLinecap: 'round', strokeMiterlimit: 10,
               animation: currentIndex === 0 || currentIndex === 7 ? 'upwardAnimation 1s linear infinite' : 'none',}}></polyline>
            <polyline points="57.02 513.99 60.37 510.63 63.73 513.99" style={{fill: 'none',stroke: currentIndex === 0 || currentIndex === 7 ? '#f37e47' : '#9b9b9b', strokeLinecap: 'round', strokeMiterlimit: 10,
               animation: currentIndex === 0 || currentIndex === 7 ? 'upwardAnimation 1s linear infinite' : 'none',}}></polyline>
        </g>

        <g class="labels" style={{opacity: 1, visibility: 'inherit',}} className={currentIndex === 0 ? 'solution-path-labels-active' : 'solution-path-labels-inactive'}>
            <text transform="translate(544.85 458.07)" style={{fill: '#454d51', fontSize: '9px'}}>
                <tspan x="0" y="0" style={{letterSpacing: 0}}>Asset Inventory &amp; Metadata</tspan>
            </text>
            <text transform="translate(544.85 478.86)" style={{fill: '#454d51', fontSize: '9px',}}>
                <tspan x="0" y="0">Security Control, Patch &amp; XDR Data</tspan>
            </text>
            <text transform="translate(544.85 499.46)" style={{fill: '#454d51', fontSize: '9px',}}>
                <tspan x="0" y="0">Vulnerability &amp; Threat Scanner Data</tspan>
            </text>
            <text transform="translate(544.85 520.83)" style={{fill: '#454d51', fontSize: '12px', fontWeight: 500,}}>
                <tspan x="0" y="0">Real Environment</tspan>
            </text>
            <text transform="translate(545.47 432.5)" style={{fill: '#454d51', fontSize: '12px', fontWeight: 500,}}>
                <tspan x="0" y="0">150+ Vendor Integrations</tspan>
            </text>
            <text transform="translate(544.2 187.62)" style={{fill: '#454d51', fontSize: '12px', fontWeight: 500,}}>
                <tspan x="0" y="0">Threat Intelligence</tspan>
            </text>
            <text transform="translate(550 221)" style={{fill: '#454d51', fontSize: '12px', fontWeight: 700,}}>
                <tspan x="0" y="0">Dynamic Security Model</tspan>
            </text>
            <text transform="translate(549 235)" style={{fill: '#454d51', fontSize: '12px', fontWeight: 500,}}>
                <tspan x="0" y="0">Prioritized Exposures</tspan>
            </text>
            <text transform="translate(549 303.35)" style={{fill: '#454d51', fontSize: '12px', fontWeight: 500,}}>
                <tspan x="0" y="0">Attack Surface Map</tspan>
            </text>
            <text transform="translate(549 368.47)" style={{fill: '#454d51', fontSize: '12px', fontWeight: 500,}}>
                <tspan x="0" y="0">Firewall &amp; Network Policies</tspan>
            </text>
            <text transform="translate(544 124.41)" style={{fill: '#454d51', fontSize: '12px', fontWeight: 500,}}>
                <tspan x="0" y="0">Solutions</tspan>
            </text>
        </g>

        <g class="real-env-icons" filter="url(#filter-real-env-icons)">
            <circle class="real-env-circle" cx="536.37" cy="517.32" r="4.19" style={{fill: '#454d51', stroke: '#fff', strokeMiterlimit: 10}}></circle>
            <g class="real-env-icon-group">
                <g class="real-env-icon" data-svg-origin="383.45001220703125 510.8100280761719" transform="matrix(1,0,0,1,0,0)" style={{translate: 'none', rotate: 'none', scale: 'none', transformOrigin: '0px 0px', animationDuration: '3s', animationIterationCount: 'infinite',}} ref={iconRef} className={`real-env-icon ${currentIndex === 0 || currentIndex === 7 || currentIndex === 8 ? 'bounce' : ''}`}>
                    <circle cx="394.28" cy="521.64" r="10.83" style={{fill:currentIndex === 0 || currentIndex === 7 || currentIndex === 8 ? '#454d51' : '#9b9b9b', opacity: .85, stroke: '#fff', strokeMiterlimit: 10, strokeWidth: '.5px'}}></circle>
                    <path d="m397.07,523.66h.3c1.25,0,2.26-1.01,2.26-2.26h0c0-1.08-.77-1.99-1.78-2.21-.03-1.61-1.35-2.9-2.97-2.9-1.02,0-1.94.52-2.47,1.32-.19-.08-.39-.13-.62-.13-.86,0-1.54.67-1.54,1.48,0,.13.02.25.05.37-.8.35-1.35,1.14-1.35,2.07h0c0,1.25,1.01,2.26,2.26,2.26h.3v1.67h-.27c-.11-.35-.42-.59-.8-.59-.46,0-.83.37-.83.83s.37.83.83.83c.38,0,.69-.25.8-.59h.51c.13,0,.24-.11.24-.24v-1.9h.95v1.7c-.34.11-.59.42-.59.8,0,.46.37.83.83.83s.83-.37.83-.83c0-.38-.25-.69-.59-.8v-1.7h1.78v1.7c-.35.11-.59.42-.59.8,0,.46.37.83.83.83s.83-.37.83-.83c0-.38-.25-.69-.59-.8v-1.7h.95v1.9c0,.13.11.24.24.24h.51c.11.35.42.59.8.59.46,0,.83-.37.83-.83s-.37-.83-.83-.83c-.38,0-.69.25-.8.59h-.27v-1.67h0Zm-6.65,2.26c-.2,0-.36-.16-.36-.36s.16-.36.36-.36.36.16.36.36c0,.2-.16.36-.36.36Zm3.09.24c0,.2-.16.36-.36.36s-.36-.16-.36-.36.16-.36.36-.36c.2,0,.36.16.36.36Zm2.26,0c0,.2-.16.36-.36.36s-.36-.16-.36-.36.16-.36.36-.36.36.16.36.36Zm-6.36-4.75c0-.7.42-1.34,1.07-1.63l.37-.16-.11-.39c-.02-.08-.03-.16-.03-.25,0-.56.48-1.01,1.07-1.01.16,0,.3.03.44.08l.36.16.21-.32c.49-.69,1.26-1.11,2.09-1.11,1.34,0,2.46,1.09,2.5,2.44v.38s.38.08.38.08c.81.16,1.4.9,1.4,1.74,0,.99-.8,1.78-1.78,1.78h-6.18c-.99,0-1.78-.8-1.78-1.79Zm8.74,3.8c.2,0,.36.16.36.36s-.16.36-.36.36-.36-.16-.36-.36c0-.21.16-.36.36-.36Z" style={{fill: '#fff', strokeWidth: 0}}></path>
                </g>
                <ellipse class="real-env-icon-shadow" cx="394.43" cy="537.79" rx="12.01" ry="2.08" style={{fill: currentIndex === 8 ? 'rgb(243, 126, 71)' : 'rgb(110, 124, 124)' , opacity: 0.75, strokeWidth: 0, transformOrigin: '0px 0px', translate: 'none', rotate: 'none', scale: 'none',}}data-svg-origin="394.4299831390381 537.789960861206" transform="matrix(1,0,0,1,0,0)"></ellipse>
            </g>
            <g class="real-env-icon-group">
                <g class="real-env-icon" data-svg-origin="201.97000122070312 520.5999755859375" transform="matrix(1,0,0,1,0,0)" style={{translate: 'none', rotate: 'none', scale: 'none', transformOrigin: '0px 0px', animationDuration: '3s', animationIterationCount: 'infinite',}} ref={iconRef} className={`real-env-icon ${currentIndex === 0 || currentIndex === 7 || currentIndex === 8 ? 'bounce' : ''}`}>
                    <circle cx="212.8" cy="531.43" r="10.83" style={{fill: currentIndex === 0 || currentIndex === 7 || currentIndex === 8 ? '#454d51' : '#9b9b9b', opacity: .85, stroke: '#fff', strokeMiterlimit: 10, strokeWidth: '.5px'}}></circle>
                    <g>
                        <path d="m212.8,538.32s-.09-.01-.12-.04c-1.51-.96-2.78-2.18-3.77-3.64-1.8-2.67-2.19-5.4-2.2-7.22,0-.12.09-.22.21-.23,1.29-.12,2.5-.48,3.62-1.09.73-.4,1.4-.9,2-1.49.09-.09.24-.09.33,0,.62.6,1.31,1.11,2.06,1.51,1.15.62,2.4.97,3.73,1.06.12,0,.22.12.22.24-.06,1.86-.51,4.65-2.37,7.34-.95,1.38-2.16,2.57-3.58,3.51-.04.03-.08.04-.13.04Zm-5.62-10.69c.04,1.75.45,4.28,2.11,6.75.92,1.37,2.1,2.52,3.5,3.43,1.32-.9,2.44-2.01,3.33-3.31,1.72-2.49,2.2-5.07,2.28-6.87-1.31-.12-2.55-.49-3.69-1.1-.72-.39-1.4-.87-2.01-1.44-.59.55-1.24,1.02-1.94,1.41-1.1.61-2.31.99-3.58,1.13Z" style={{fill: '#fff', strokeWidth: 0}}></path>
                        <path d="m212,534.71l-1.56-2.31c-.07-.11-.04-.25.06-.32s.25-.04.32.06l1.02,1.5c.29-.85.66-1.67,1.11-2.45.48-.84,1.05-1.63,1.7-2.35.09-.1.23-.1.33-.02.1.09.1.23.02.33-.63.7-1.18,1.46-1.65,2.27-.51.89-.92,1.83-1.22,2.81l-.14.47Z" style={{fill: '#fff', strokeWidth: 0}}></path>
                    </g>
                </g>
                <path class="real-env-icon-shadow" d="m225.05,546.72c0,1.15-5.38,2.08-12.01,2.08-6.63,0-12.01-.93-12.01-2.08s5.38-2.08,12.01-2.08,12.01.93,12.01,2.08Z" style={{fill:  currentIndex === 8 ? 'rgb(243, 126, 71)' : 'rgb(110, 124, 124)', opacity: 0.75, strokeWidth: 0, transformOrigin: '0px 0px', translate: 'none', rotate: 'none', scale: 'none',}} data-svg-origin="213.04000854492188 546.719970703125" transform="matrix(1,0,0,1,0,0)"></path>
            </g>
            <g class="real-env-icon-group">
                <g class="real-env-icon-position" style={{transform:'translate(323px, 519px)'}}>
                    <g class="real-env-icon" data-svg-origin="2.3199996948242188 2.4700002670288086" transform="matrix(1,0,0,1,0,0)" style={{translate: 'none', rotate: 'none', scale: 'none', transformOrigin: '0px 0px',animationDuration: '3s', animationIterationCount: 'infinite',}} ref={iconRef} className={`real-env-icon ${currentIndex === 0 || currentIndex === 7 || currentIndex === 8 ? 'bounce' : ''}`}>
                        <circle style={{ opacity:0.85,fill: currentIndex === 0 || currentIndex === 7 || currentIndex === 8 ? '#454d51' : '#9b9b9b',stroke:'#FFFFFF',strokeWidth:0.5,strokeMiterlimit:10}} cx="13.04" cy="13.19" r="10.72"></circle>
                        <g>
                            <g>
                                <path style={{fillRule:'evenodd',clipRule:'evenodd',fill:'#FFFFFF',}} d="M8.19,13.9c0.07,0.44,0.24,0.84,0.73,1.08
				c-0.57-0.99-0.31-2.01,0.42-2.43c-0.07,0.13-0.15,0.42,0.04,0.55c0.6-0.64,0.75-1.66,0.62-2.48c0.75,0.73,1.17,1.75,0.69,2.65
				c-0.33,0.64,0.2,1.26,0.49,0c1.33,1.26,1.28,3.47-0.75,3.96c0.18-0.22,1.26-1.24,0.18-2.39c0.13,0.91-0.6,0.91-0.49,1.79
				c-0.57-0.97,0.66-1.02-0.4-2.43c0.27,1.17-1.46,1.64-0.24,3.01C7.66,16.84,7.5,15.16,8.19,13.9z"></path>
                            </g>
                            <circle style={{fill:'#FFFFFF',}} cx="18.12" cy="11.65" r="0.5"></circle>
                            <circle style={{fill:'#FFFFFF',}} cx="16.81" cy="11.65" r="0.5"></circle>
                            <circle style={{fill:'#FFFFFF',}} cx="18.12" cy="14.66" r="0.5"></circle>
                            <circle style={{fill:'#FFFFFF',}} cx="16.81" cy="14.66" r="0.5"></circle>
                            <circle style={{fill:'#FFFFFF',}} cx="18.12" cy="17.68" r="0.5"></circle>
                            <circle style={{fill:'#FFFFFF',}} cx="16.81" cy="17.68" r="0.5"></circle>
                            <g>
                                <path style={{fill:'none',}} d="M15.23,15.88h4.03c0.14,0,0.25-0.11,0.25-0.25v-1.94c0-0.14-0.11-0.25-0.25-0.25h-3.69
				c0.01,0.16,0.03,0.33,0.03,0.49C15.59,14.62,15.46,15.28,15.23,15.88z"></path>
                                <path style={{fill:'none',}} d="M12.41,18.9h6.85c0.14,0,0.25-0.11,0.25-0.25v-1.94c0-0.14-0.11-0.25-0.25-0.25h-4.28
				C14.41,17.53,13.51,18.39,12.41,18.9z"></path>
                                <path style={{fill:'none',}} d="M8.57,16.17c-0.14-0.14-0.23-0.33-0.23-0.54v-1.94c0-0.21,0.09-0.4,0.23-0.54
				c-0.14-0.14-0.23-0.33-0.23-0.54v-1.94c0-0.19,0.08-0.37,0.2-0.5c-0.12-0.13-0.2-0.31-0.2-0.5V9.3
				c-1.86,0.72-3.19,2.52-3.19,4.63s1.33,3.91,3.19,4.63V16.7C8.34,16.5,8.43,16.31,8.57,16.17z"></path>
                                <path style={{fill:'none',}} d="M19.26,12.87c0.14,0,0.25-0.11,0.25-0.25v-1.94c0-0.14-0.11-0.25-0.25-0.25l0,0h-4.94
				c0.58,0.69,0.99,1.53,1.17,2.44C15.49,12.87,19.26,12.87,19.26,12.87z"></path>
                                <path style={{fill:'none',}} d="M13.83,9.92h5.42l0,0c0.14,0,0.25-0.11,0.25-0.25V7.73c0-0.14-0.11-0.25-0.25-0.25H9.09
				c-0.14,0-0.25,0.11-0.25,0.25v0.89c0.41-0.1,0.84-0.16,1.28-0.16C11.55,8.46,12.86,9.02,13.83,9.92z"></path>
                                <path style={{fill:'#FFFFFF'}} d="M10.12,8.96c1.09,0,2.1,0.36,2.92,0.96h0.8c-0.98-0.91-2.28-1.46-3.71-1.46
				c-0.44,0-0.87,0.06-1.28,0.16v0.53C9.25,9.04,9.67,8.96,10.12,8.96z"></path>
                                <path style={{fill:'#FFFFFF'}} d="M10.12,19.41c0.06,0,0.12-0.01,0.17-0.01H9.95C10,19.4,10.06,19.41,10.12,19.41z"></path>
                                <path style={{fill:'#FFFFFF'}} d="M15.09,13.93c0,0.69-0.14,1.35-0.4,1.95h0.53c0.23-0.61,0.37-1.26,0.37-1.95
				c0-0.17-0.01-0.33-0.03-0.49h-0.52C15.06,13.6,15.09,13.76,15.09,13.93z"></path>
                                <path style={{fill:'#FFFFFF'}} d="M8.34,18.57c-1.86-0.72-3.19-2.52-3.19-4.63s1.33-3.91,3.19-4.63V8.76
				c-2.15,0.74-3.69,2.78-3.69,5.17c0,2.48,1.65,4.57,3.91,5.25c-0.14-0.14-0.22-0.32-0.22-0.53V18.57z"></path>
                                <path style={{fill:'#FFFFFF'}} d="M14.97,12.87h0.52c-0.18-0.92-0.59-1.75-1.17-2.44h-0.68C14.3,11.08,14.77,11.93,14.97,12.87z"></path>
                                <path style={{fill:'#FFFFFF'}} d="M9.09,18.9h0.94c-0.4-0.01-0.79-0.07-1.16-0.17C8.91,18.83,8.98,18.9,9.09,18.9z"></path>
                                <path style={{fill:'#FFFFFF'}} d="M10.21,18.9h2.2c1.1-0.51,2.01-1.37,2.56-2.44h-0.59C13.53,17.89,11.99,18.87,10.21,18.9z"></path>
                                <path style={{fill:'#FFFFFF'}} d="M10.12,18.91c0.03,0,0.06-0.01,0.09-0.01h-0.17C10.06,18.9,10.09,18.91,10.12,18.91z"></path>
                                <path style={{fill:'#FFFFFF'}} d="M20.01,7.73c0-0.42-0.34-0.75-0.75-0.75H9.09c-0.42,0-0.75,0.34-0.75,0.75v1.03
				c0.16-0.06,0.33-0.1,0.5-0.15V7.73c0-0.14,0.11-0.25,0.25-0.25h10.17c0.14,0,0.25,0.11,0.25,0.25v1.94
				c0,0.14-0.11,0.25-0.25,0.25l0,0h-5.42c0.17,0.16,0.33,0.32,0.48,0.5h4.94l0,0c0.14,0,0.25,0.11,0.25,0.25v1.94
				c0,0.14-0.11,0.25-0.25,0.25h-3.77c0.04,0.19,0.06,0.38,0.08,0.57h3.69c0.14,0,0.25,0.11,0.25,0.25v1.94
				c0,0.14-0.11,0.25-0.25,0.25h-4.03c-0.08,0.2-0.16,0.39-0.26,0.57h4.28c0.14,0,0.25,0.11,0.25,0.25v1.94
				c0,0.14-0.11,0.25-0.25,0.25H12.4c-0.65,0.3-1.36,0.48-2.12,0.5h8.97c0.42,0,0.75-0.34,0.75-0.75v-1.94
				c0-0.21-0.09-0.4-0.23-0.54c0.14-0.14,0.23-0.33,0.23-0.54v-1.94c0-0.21-0.09-0.4-0.23-0.54C19.91,12.99,20,12.8,20,12.59v-1.94
				c0-0.19-0.08-0.37-0.2-0.5c0.12-0.13,0.2-0.31,0.2-0.5V7.73H20.01z"></path>
                                <path style={{fill:'#FFFFFF'}} d="M9.09,19.4h0.86C9.46,19.39,9,19.31,8.56,19.18C8.69,19.32,8.88,19.4,9.09,19.4z"></path>
                                <path style={{fill:'#FFFFFF'}} d="M13.64,10.42h0.68c-0.15-0.18-0.31-0.34-0.48-0.5h-0.8C13.25,10.08,13.46,10.24,13.64,10.42z"></path>
                                <path style={{fill:'#FFFFFF'}} d="M15.04,13.44h0.52c-0.02-0.19-0.04-0.38-0.08-0.57h-0.52C15.01,13.05,15.03,13.25,15.04,13.44z"></path>
                                <path style={{fill:'#FFFFFF'}} d="M14.38,16.46h0.59c0.1-0.18,0.18-0.38,0.26-0.57H14.7C14.61,16.08,14.49,16.27,14.38,16.46z"></path>
                                <path style={{fill:'#FFFFFF'}} d="M10.21,18.9c-0.03,0-0.06,0.01-0.09,0.01s-0.06-0.01-0.09-0.01H9.09c-0.11,0-0.18-0.08-0.22-0.17
				c-0.18-0.05-0.36-0.1-0.53-0.17v0.08c0,0.21,0.08,0.39,0.22,0.53c0.44,0.14,0.9,0.22,1.39,0.23h0.35c0.75-0.02,1.47-0.2,2.12-0.5
				H10.21z"></path>
                                <path style={{fill:'#FFFFFF'}} d="M8.84,9.15V8.62C8.67,8.66,8.5,8.7,8.34,8.76V9.3C8.5,9.24,8.67,9.19,8.84,9.15z"></path>
                            </g>
                            <circle style={{fill:'#FFFFFF'}} cx="18.12" cy="8.71" r="0.5"></circle>
                            <circle style={{fill:'#FFFFFF'}} cx="16.81" cy="8.71" r="0.5"></circle>
                        </g>
                    </g>
                </g>
                <path class="real-env-icon-shadow" d="m348.95,547.65c0,1.15-5.38,2.08-12.01,2.08-6.63,0-12.01-.93-12.01-2.08s5.38-2.08,12.01-2.08,12.01.93,12.01,2.08Z" style={{fill:  currentIndex === 8 ? 'rgb(243, 126, 71)' : 'rgb(110, 124, 124)', opacity: 0.75, strokeWidth: 0, transformOrigin: '0px 0px', translate: 'none', rotate: 'none', scale: 'none',}} data-svg-origin="336.94000244140625 547.6500244140625" transform="matrix(1,0,0,1,0,0)"></path>
            </g>
            <g class="real-env-icon-group">
                <g class="real-env-icon" data-svg-origin="447.69000244140625 497.2300109863281" transform="matrix(1,0,0,1,0,0)" style={{translate: 'none', rotate: 'none', scale: 'none', transformOrigin: '0px 0px', animationDuration: '3s', animationIterationCount: 'infinite',}} ref={iconRef} className={`real-env-icon ${currentIndex === 0 || currentIndex === 7 || currentIndex === 8 ? 'bounce' : ''}`}>
                    <circle cx="458.56" cy="508.1" r="10.87" style={{fill: currentIndex === 0 || currentIndex === 7 || currentIndex === 8 ? '#454d51' : '#9b9b9b', opacity: .85, stroke: '#fff', strokeMiterlimit: 10, strokeWidth: '.5px'}}></circle>
                    <g>
                        <g>
                            <g>
                                <path d="m462.85,504.73h-8.56c-.47,0-.85-.38-.85-.85v-1.85c0-.47.38-.85.85-.85h8.56c.47,0,.85.38.85.85v1.85c0,.47-.38.85-.85.85Zm-8.56-3.08c-.21,0-.38.17-.38.38v1.85c0,.21.17.38.38.38h8.56c.21,0,.38-.17.38-.38v-1.86c0-.21-.17-.38-.38-.38h-8.56Z" style={{fill: '#fff', strokeWidth: 0}}></path>
                                <path d="m455.51,503.17h-.5c-.13,0-.23-.11-.23-.23s.11-.23.23-.23h.5c.13,0,.23.11.23.23s-.11.23-.23.23Z" style={{fill: '#fff', strokeWidth: 0}}></path>
                                <path d="m456.79,503.17h-.5c-.13,0-.23-.11-.23-.23s.11-.23.23-.23h.5c.13,0,.23.11.23.23s-.11.23-.23.23Z" style={{fill: '#fff', strokeWidth: 0}}></path>
                                <path d="m462.12,503.17h-3.23c-.13,0-.23-.11-.23-.23s.11-.23.23-.23h3.23c.13,0,.23.11.23.23s-.1.23-.23.23Z" style={{fill: '#fff', strokeWidth: 0}}></path>
                            </g>
                            <g>
                                <path d="m462.85,508.41h-8.56c-.47,0-.85-.38-.85-.85v-1.85c0-.47.38-.85.85-.85h8.56c.47,0,.85.38.85.85v1.85c0,.47-.38.85-.85.85Zm-8.56-3.08c-.21,0-.38.17-.38.38v1.85c0,.21.17.38.38.38h8.56c.21,0,.38-.17.38-.38v-1.86c0-.21-.17-.38-.38-.38h-8.56Z" style={{fill: '#fff', strokeWidth: 0}}></path>
                                <path d="m455.51,506.86h-.5c-.13,0-.23-.11-.23-.23s.11-.23.23-.23h.5c.13,0,.23.11.23.23s-.11.23-.23.23Z" style={{fill: '#fff', strokeWidth: 0}}></path>
                                <path d="m456.79,506.86h-.5c-.13,0-.23-.11-.23-.23s.11-.23.23-.23h.5c.13,0,.23.11.23.23s-.11.23-.23.23Z" style={{fill: '#fff', strokeWidth: 0}}></path>
                                <path d="m462.12,506.86h-3.23c-.13,0-.23-.11-.23-.23s.11-.23.23-.23h3.23c.13,0,.23.11.23.23s-.1.23-.23.23Z" style={{fill: '#fff', strokeWidth: 0}}></path>
                            </g>
                            <g>
                                <path d="m462.85,512.1h-8.56c-.47,0-.85-.38-.85-.85v-1.85c0-.47.38-.85.85-.85h8.56c.47,0,.85.38.85.85v1.85c0,.47-.38.85-.85.85Zm-8.56-3.08c-.21,0-.38.17-.38.38v1.85c0,.21.17.38.38.38h8.56c.21,0,.38-.17.38-.38v-1.86c0-.21-.17-.38-.38-.38h-8.56Z" style={{fill: '#fff', strokeWidth: 0}}></path>
                                <path d="m455.51,510.54h-.5c-.13,0-.23-.11-.23-.23s.11-.23.23-.23h.5c.13,0,.23.11.23.23s-.11.23-.23.23Z" style={{fill: '#fff', strokeWidth: 0}}></path>
                                <path d="m456.79,510.54h-.5c-.13,0-.23-.11-.23-.23s.11-.23.23-.23h.5c.13,0,.23.11.23.23s-.11.23-.23.23Z" style={{fill: '#fff', strokeWidth: 0}}></path>
                                <path d="m462.12,510.54h-3.23c-.13,0-.23-.11-.23-.23s.11-.23.23-.23h3.23c.13,0,.23.11.23.23s-.1.23-.23.23Z" style={{fill: '#fff', strokeWidth: 0}}></path>
                            </g>
                        </g>
                        <g>
                            <path d="m458.56,515.02c-.47,0-.84-.38-.84-.84s.38-.84.84-.84.84.38.84.84-.38.84-.84.84Zm0-1.22c-.21,0-.37.17-.37.37s.17.37.37.37.37-.17.37-.37-.17-.37-.37-.37Z" style={{fill: '#fff', strokeWidth: 0}}></path>
                            <rect x="458.33" y="511.87" width=".47" height="1.87" style={{fill: '#fff', strokeWidth: 0}}></rect>
                            <path d="m457.92,514.38h-4c-.13,0-.23-.11-.23-.23s.11-.23.23-.23h4c.13,0,.23.11.23.23s-.11.23-.23.23Z" style={{fill: '#fff', strokeWidth: 0}}></path>
                            <path d="m463.21,514.38h-4c-.13,0-.23-.11-.23-.23s.11-.23.23-.23h4c.13,0,.23.11.23.23s-.1.23-.23.23Z" style={{fill: '#fff', strokeWidth: 0}}></path>
                        </g>
                    </g>
                </g>
                <ellipse class="real-env-icon-shadow" cx="458.43" cy="524.21" rx="12.01" ry="2.08" style={{fill: currentIndex === 8 ? 'rgb(243, 126, 71)' : 'rgb(110, 124, 124)', opacity: 0.75, strokeWidth: 0, transformOrigin: '0px 0px', translate: 'none', rotate: 'none', scale: 'none',}} data-svg-origin="458.4299831390381 524.2100048065186" transform="matrix(1,0,0,1,0,0)"></ellipse>
            </g>
            <g class="real-env-icon-group">
                <g class="real-env-icon" data-svg-origin="263.1600036621094 534.6599731445312" transform="matrix(1,0,0,1,0,0)" style={{translate: 'none', rotate: 'none', scale: 'none', transformOrigin: '0px 0px', animationDuration: '3s', animationIterationCount: 'infinite',}} ref={iconRef} className={`real-env-icon ${currentIndex === 0 || currentIndex === 7 || currentIndex === 8 ? 'bounce' : ''}`}>
                    <circle cx="273.94" cy="545.44" r="10.78" style={{fill: currentIndex === 0 || currentIndex === 7 || currentIndex === 8 ? '#454d51' : '#9b9b9b', opacity: .85, stroke: '#fff', strokeMiterlimit: 10, strokeWidth: '.5px'}}></circle>
                    <g>
                        <path d="m278.27,549.31h-8.76s-.48,0-.93-.27c-.42-.25-.93-.77-.93-1.86,0-.62.28-1.24.8-1.78.24-.25.48-.43.63-.54-.08-.43.08-.99.1-1.07h0s.18-.56.61-1.11c.58-.73,1.36-1.11,2.25-1.11,1.12,0,1.81.5,2.19.92.24.27.39.54.48.72l.32-.1c.1-.03,1.19-.38,2.09.18.73.46,1.09,1.38,1.21,1.76.59.03,1.05.24,1.38.6.58.64.53,1.56.51,1.69,0,.6-.18,1.07-.54,1.42-.53.52-1.27.54-1.42.54Zm-8.64-5.38c-.07.26-.15.74-.06.95.05.11,0,.24-.1.29-.01,0-1.36.8-1.36,2.01,0,.7.24,1.19.7,1.46.34.2.7.2.7.2h8.75s.67.01,1.11-.42c.26-.25.39-.62.39-1.09v-.02s.07-.83-.4-1.35c-.27-.3-.68-.45-1.21-.45-.11,0-.2-.07-.23-.18h0s-.31-1.18-1.06-1.65c-.73-.46-1.69-.14-1.7-.14,0,0,0,0,0,0l-.53.16c-.12.04-.25-.03-.29-.15-.02-.06-.51-1.52-2.31-1.52-.75,0-1.38.31-1.88.93-.36.46-.52.93-.53.97Z" style={{fill: '#fff', strokeWidth: 0}}></path>
                        <path d="m270.3,545.1c-.13,0-.23-.11-.23-.23,0-1.15.93-2.08,2.08-2.08.28,0,.55.06.81.16.12.05.17.19.12.3s-.19.17-.3.12c-.2-.08-.41-.13-.63-.13-.89,0-1.61.72-1.61,1.61,0,.13-.11.23-.24.23Z" style={{fill: '#fff', strokeWidth: 0}}></path>
                        <path d="m277.05,545.46c-.11,0-.2-.07-.23-.18-.05-.25-.26-.49-.56-.66-.32-.18-.68-.24-.91-.15-.12.04-.25-.02-.3-.14s.02-.25.14-.3c.36-.13.86-.06,1.29.19.42.23.7.59.79.97.03.12-.05.25-.18.28-.02,0-.03,0-.05,0Z" style={{fill: '#fff', strokeWidth: 0}}></path>
                    </g>
                </g>
                <path class="real-env-icon-shadow" d="m285.51,561.23c0,1.15-5.38,2.08-12.01,2.08-6.63,0-12.01-.93-12.01-2.08s5.38-2.08,12.01-2.08,12.01.93,12.01,2.08Z" style={{fill: currentIndex === 8 ? 'rgb(243, 126, 71)' : 'rgb(110, 124, 124)', opacity: 0.75, strokeWidth: 0, transformOrigin: '0px 0px', translate: 'none', rotate: 'none', scale: 'none',}} data-svg-origin="273.5 561.22998046875" transform="matrix(1,0,0,1,0,0)"></path>
            </g>
            <g class="real-env-icon-group">
                <g class="real-env-icon" data-svg-origin="78.20999908447266 495.67999267578125" transform="matrix(1,0,0,1,0,0)" style={{translate: 'none', rotate: 'none', scale: 'none', transformOrigin: '0px 0px',animationDuration: '3s', animationIterationCount: 'infinite',}} ref={iconRef} className={`real-env-icon ${currentIndex === 0 || currentIndex === 7 || currentIndex === 8 ? 'bounce' : ''}`}>
                    <circle cx="88.94" cy="506.41" r="10.73" style={{fill: currentIndex === 0 || currentIndex === 7 || currentIndex === 8 ? '#454d51' : '#9b9b9b', opacity: .85, stroke: '#fff', strokeMiterlimit: 10, strokeWidth: '.5px'}}></circle>
                    <g>
                        <path d="m91.2,508.35h-4.52v-3.72h.56v-.07c0-.18,0-.35,0-.52.02-.59.33-1.13.85-1.43.52-.3,1.14-.31,1.65-.02.57.31.88.83.89,1.49,0,.16,0,.33,0,.49v.05h.56v3.73h0Zm-4.16-.36h3.79v-3h-.56v-.9c0-.53-.25-.93-.71-1.18-.41-.22-.89-.22-1.3.02-.41.23-.66.65-.67,1.12,0,.17,0,.34,0,.51v.44h-.56v2.99h0Zm2.45-.46h-1.11l.04-.29c.02-.13.03-.25.05-.37v-.05c.02-.06.02-.13.04-.19.02-.09,0-.11-.04-.16-.1-.1-.15-.23-.15-.37,0-.17.08-.34.21-.46.22-.21.59-.21.82,0,.12.11.2.27.2.43,0,.15-.05.29-.15.39-.04.04-.04.06-.03.18l.12.89Zm-.7-.37h.28l-.06-.47c-.02-.13-.04-.31.13-.48.04-.04.05-.09.05-.13,0-.06-.03-.13-.08-.18-.09-.08-.24-.09-.33,0-.06.05-.09.12-.09.19,0,.04.01.08.04.11.17.17.16.35.14.48-.01.05-.02.11-.03.17v.05c-.02.09-.03.17-.04.25Zm1.21-2.18h-2.15v-.19c.02-.11.02-.22.01-.34,0-.23-.01-.47.06-.71.1-.32.36-.57.7-.67.34-.1.71-.04.97.18.26.22.4.5.41.84,0,.17,0,.33,0,.5v.4h0Zm-1.77-.37h1.41v-.04c0-.16,0-.33,0-.48,0-.24-.09-.42-.27-.56-.17-.14-.41-.18-.63-.11-.22.07-.39.23-.45.43-.06.19-.05.38-.04.59v.18Z" style={{fill: '#fff', strokeWidth: 0}}></path>
                        <path d="m88.95,512.87s-.09-.01-.13-.04c-.1-.07-.2-.14-.3-.21-.1-.07-.2-.14-.3-.21-.45-.32-.9-.63-1.32-.95-.45-.34-.88-.77-1.32-1.32-.45-.56-.82-1.17-1.11-1.8-.32-.69-.54-1.43-.66-2.19-.08-.49-.11-1-.11-1.57v-2.84c0-.1.06-.19.16-.21l3.08-.97c.64-.2,1.29-.4,1.93-.6t0,0s.11-.02.15,0l.25.08c.6.19,1.23.39,1.84.57l2.93.92c.09.03.16.11.16.21v1.55c0,.5,0,1.03,0,1.54,0,1.06-.2,2.09-.58,3.07-.34.88-.83,1.7-1.46,2.43-.49.58-1.1,1.12-1.87,1.64-.28.19-.57.4-.85.6-.12.08-.24.17-.36.25-.04.03-.08.04-.13.04Zm-4.8-10.96v2.67c0,.54.04,1.03.11,1.5.11.72.33,1.42.63,2.07.27.6.63,1.17,1.05,1.71.42.52.82.93,1.24,1.24.41.32.86.63,1.3.94.1.07.2.14.3.21.06.04.11.08.17.12.08-.05.15-.11.23-.16.28-.2.57-.4.86-.6.73-.5,1.31-1.01,1.78-1.57.59-.7,1.06-1.47,1.38-2.31.36-.93.55-1.91.55-2.91,0-.51,0-1.04,0-1.54v-1.39l-2.77-.87c-.62-.19-1.24-.39-1.84-.57l-.19-.06c-.63.19-1.25.39-1.88.59l-2.92.92Zm4.72-1.95s-.04.02-.05.03c.01-.01.03-.02.05-.03Z" style={{fill: '#fff', strokeWidth: 0}}></path>
                    </g>
                </g>
                <ellipse class="real-env-icon-shadow" cx="88.57" cy="521.6" rx="12.01" ry="2.08" style={{fill: currentIndex === 8 ? 'rgb(243, 126, 71)' : 'rgb(110, 124, 124)', opacity: 0.75, strokeWidth: 0, transformOrigin: '0px 0px', translate: 'none', rotate: 'none', scale: 'none',}} data-svg-origin="88.56999778747559 521.5999584197998" transform="matrix(1,0,0,1,0,0)"></ellipse>
            </g>
            <g class="real-env-icon-group">
                <g class="real-env-icon-position" style={{transform:'translate(140px, 504px)'}}>
                    <g class="real-env-icon" data-svg-origin="2.1300010681152344 2.410000801086426" transform="matrix(1,0,0,1,0,0)" style={{translate: 'none', rotate: 'none', scale: 'none', transformOrigin: '0px 0px', animationDuration: '3s', animationIterationCount: 'infinite',}} ref={iconRef} className={`real-env-icon ${currentIndex === 0 || currentIndex === 7 || currentIndex === 8 ? 'bounce' : ''}`}>
                        <circle style={{opacity:0.85,fill: currentIndex === 0 || currentIndex === 7 || currentIndex === 8 ? '#454d51' : '#9b9b9b',stroke:'#FFFFFF',strokeWidth:0.5,enableBackground:'new'}} cx="12.85" cy="13.13" r="10.72"></circle>
                        <ellipse style={{fill:'none',stroke:'#FFFFFF',strokeWidth:0.5}} cx="12.85" cy="8.34" rx="6.16" ry="2.58"></ellipse>
                        <path style={{fill:'none',stroke:'#FFFFFF',strokeWidth:0.5}} d="M19,11.33c0,1.42-2.76,2.58-6.16,2.58s-6.16-1.16-6.16-2.58"></path>
                        <path style={{fill:'none',stroke:'#FFFFFF',strokeWidth:0.5}} d="M19,17.31c0,1.42-2.76,2.58-6.16,2.58s-6.16-1.16-6.16-2.58"></path>
                        <line style={{fill:'none',stroke:'#FFFFFF',strokeWidth:0.5}} x1="6.69" y1="8.34" x2="6.69" y2="17.31"></line>
                        <line style={{fill:'none',stroke:'#FFFFFF',strokeWidth:0.5}} x1="19" y1="8.34" x2="19" y2="17.31"></line>
                        <path style={{fill:'none',stroke:'#FFFFFF',strokeWidth:0.5}} d="M19,14.32c0,1.42-2.76,2.58-6.16,2.58s-6.16-1.16-6.16-2.58"></path>
                        <circle style={{fill:'#FFFFFF'}} cx="17.17" cy="11.64" r="0.5"></circle>
                        <circle style={{fill:'#FFFFFF'}} cx="17.17" cy="14.68" r="0.5"></circle>
                        <circle style={{fill:'#FFFFFF'}} cx="17.17" cy="17.53" r="0.5"></circle>
                    </g>
                </g>
                <ellipse class="real-env-icon-shadow" cx="153.25" cy="532.25" rx="12.01" ry="2.08" style={{fill: currentIndex === 8 ? 'rgb(243, 126, 71)' : 'rgb(110, 124, 124)', opacity: 0.75, strokeWidth: 0, transformOrigin: '0px 0px', translate: 'none', rotate: 'none', scale: 'none',}} data-svg-origin="153.2500057220459 532.2499828338623" transform="matrix(1,0,0,1,0,0)"></ellipse>
            </g>
        </g>
        
        <g class="vendor-layer" style={{ opacity: currentIndex === 8 ? 0.25 : 1, transition: 'opacity 0.5s ease-in-out'}} filter="url(#filter-vendor-layer)">
            <g>
                <g>
                    <path d="m536.54,421.59v13.03l-.02.23c-.1.74-.59,1.43-1.5,1.65l-260.2,64.37c-.19.05-.39.07-.58.06v-12.98c.19.02.39,0,.58-.05l260.2-64.37c1.03-.26,1.52-1.1,1.52-1.94Z" style={{fill: '#fff', strokeWidth: 0}}></path>
                    <path d="m536.54,421.4v.19c0-.06,0-.13-.02-.19h.02Z" style={{fill: '#fff', strokeWidth: 0}}></path>
                    <path d="m274.24,487.95c-.13,0-.26-.02-.38-.05L13.66,423.53c-1.03-.26-1.52-1.1-1.52-1.94,0-.07,0-.14.02-.21l524.36.02c.02.06.02.13.02.19,0,.84-.49,1.68-1.52,1.94l-260.2,64.37c-.19.05-.39.07-.58.05Z" style={{fill: '#c5ebe6', strokeWidth: 0}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-upper-active' : 'solution-path-vendor-upper-inactive'}></path>
                    <path d="m536.52,421.4l-524.36-.02c.07-.83.64-1.61,1.68-1.77l260.2-39.64c.2-.03.4-.03.6,0l260.2,39.64c1.05.16,1.62.96,1.68,1.79Z" style={{fill: '#c5ebe6', strokeWidth: 0}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-upper-active' : 'solution-path-vendor-upper-inactive'}></path>
                    <path d="m274.24,500.81v.12c-.13-.01-.26-.03-.38-.06L13.66,436.5c-.88-.22-1.38-.87-1.5-1.59l-.02-.31v-13.01c0,.84.49,1.68,1.52,1.94l260.2,64.37c.12.03.25.05.38.05v12.86Z" style={{fill: '#3fbdac', strokeWidth: 0}}
                    className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-front-active' : 'solution-path-vendor-front-inactive'}></path>
                    <path d="m12.16,421.38c-.02.07-.02.14-.02.21v-.21h.02Z" style={{fill: '#fff', strokeWidth: 0}}></path>
                </g>
                <g>
                    <path d="m536.54,421.4v13.22l-.02.23c-.1.74-.59,1.43-1.5,1.65l-260.2,64.37c-.19.05-.39.07-.58.06-.13-.01-.26-.03-.38-.06L13.66,436.5c-.88-.22-1.38-.87-1.5-1.59l-.02-.31v-13.22" style={{fill: 'none', stroke: '#3fbdac', strokeMiterlimit: 10}}
                     className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-border-active' : 'solution-path-vendor-border-inactive'}
                     ></path>
                    <line x1="274.24" y1="487.95" x2="274.24" y2="500.81" style={{fill: 'none', stroke: '#3fbdac', strokeMiterlimit: 10}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-border-active' : 'solution-path-vendor-border-inactive'}></line>
                    <path d="m274.24,487.95c-.13,0-.26-.02-.38-.05L13.66,423.53c-1.03-.26-1.52-1.1-1.52-1.94,0-.07,0-.14.02-.21.07-.83.64-1.61,1.68-1.77l260.2-39.64c.2-.03.4-.03.6,0l260.2,39.64c1.05.16,1.62.96,1.68,1.79.02.06.02.13.02.19,0,.84-.49,1.68-1.52,1.94l-260.2,64.37c-.19.05-.39.07-.58.05Z" style={{fill: 'none', stroke: '#3fbdac', strokeMiterlimit: 10}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-border-active' : 'solution-path-vendor-border-inactive'}></path>
                </g>
            </g>
            <circle cx="536.32" cy="429.47" r="4.19" style={{fill: '#3fbdac', stroke: '#fff', strokeMiterlimit: 10}}></circle>
            <g style={{clipPath: 'url(#clip-vendor)'}}>
                <g>
                    <path d="m137.91,405.45l-16.03-3.51,2.93-6.85,18.27-3.31,15.77,3.31-2.26,6.85-18.69,3.51Zm-14.66-3.78l14.87,3.25,17.32-3.25,2.11-6.32-14.64-3.08-16.97,3.08-2.68,6.32Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m171.69,405.45l-16.34-3.51,2.28-6.85,17.94-3.31,16.08,3.31-1.61,6.85-18.36,3.51Zm-15-3.78l15.15,3.25,17.01-3.25,1.51-6.32-14.93-3.08-16.66,3.08-2.08,6.32Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m205.48,405.45l-16.7-3.51,1.63-6.85,17.65-3.31,16.37,3.31-.96,6.85-18,3.51Zm-15.37-3.78l15.48,3.25,16.69-3.25.91-6.32-15.21-3.08-16.39,3.08-1.48,6.32Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m239.26,405.45l-17.03-3.51.98-6.85,17.33-3.31,16.71,3.31-.31,6.85-17.69,3.51Zm-15.74-3.78l15.79,3.25,16.4-3.25.31-6.32-15.51-3.08-16.1,3.08-.89,6.32Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m273.06,405.45l-17.36-3.51.34-6.85,17.03-3.31,17,3.31.34,6.85-17.34,3.51Zm-16.09-3.78l16.09,3.25,16.07-3.25-.29-6.32-15.78-3.08-15.81,3.08-.29,6.32Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m306.83,405.45l-17.69-3.51-.31-6.85,16.71-3.31,17.34,3.31.98,6.85-17.03,3.51Zm-16.45-3.78l16.4,3.25,15.79-3.25-.89-6.32-16.1-3.08-15.51,3.08.31,6.32Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m340.61,405.45l-18-3.51-.96-6.85,16.38-3.31,17.65,3.31,1.63,6.85-16.69,3.51Zm-16.79-3.78l16.69,3.25,15.47-3.25-1.48-6.32-16.38-3.08-15.2,3.08.91,6.32Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m374.4,405.45l-18.36-3.51-1.61-6.85,16.08-3.31,17.97,3.31,2.28,6.85-16.37,3.51Zm-17.17-3.78l17.02,3.25,15.17-3.25-2.08-6.32-16.68-3.08-14.93,3.08,1.51,6.32Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m408.18,405.45l-18.67-3.51-2.26-6.85,15.75-3.31,18.28,3.31,2.93,6.85-16.03,3.51Zm-17.5-3.78l17.3,3.25,14.86-3.25-2.68-6.32-16.97-3.08-14.62,3.08,2.11,6.32Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m81.74,416.02l-15.93-3.73,4.13-7.25,19.34-3.5,15.66,3.5-3.42,7.25-19.78,3.73Zm-14.48-4.01l14.77,3.45,18.33-3.45,3.18-6.69-14.54-3.26-17.96,3.26-3.78,6.68Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m116.51,416.02l-16.28-3.73,3.44-7.25,19.01-3.5,16.02,3.5-2.73,7.25-19.46,3.73Zm-14.86-4.01l15.1,3.45,18.03-3.45,2.54-6.68-14.87-3.26-17.65,3.26-3.15,6.68Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m151.31,416.02l-16.63-3.73,2.76-7.25,18.67-3.5,16.33,3.5-2.05,7.25-19.08,3.73Zm-15.23-4.02l15.42,3.45,17.68-3.45,1.91-6.68-15.16-3.26-17.34,3.26-2.52,6.68Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m186.08,416.02l-16.99-3.73,2.07-7.25,18.34-3.5,16.68,3.5-1.36,7.25-18.75,3.73Zm-15.61-4.01l15.75,3.45,17.38-3.45,1.28-6.68-15.49-3.26-17.03,3.26-1.89,6.68Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m220.86,416.02l-17.32-3.73,1.38-7.25,17.99-3.5,17.02,3.5-.67,7.25-18.4,3.73Zm-15.98-4.02l16.06,3.45,17.05-3.45.64-6.68-15.79-3.26-16.7,3.26-1.25,6.68Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m255.66,416.02l-17.69-3.73.7-7.25,17.68-3.5,17.35,3.5v7.25s-18.03,3.73-18.03,3.73Zm-16.37-4.01l16.4,3.45,16.73-3.45v-6.68s-16.09-3.26-16.09-3.26l-16.41,3.26-.62,6.68Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m290.44,416.02l-18.02-3.73v-7.25s17.34-3.5,17.34-3.5l17.67,3.5.7,7.25-17.69,3.73Zm-16.73-4.01l16.71,3.45,16.4-3.45-.62-6.68-16.41-3.26-16.09,3.26v6.69Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m325.23,416.02l-18.4-3.73-.67-7.25,17.01-3.5,17.99,3.5,1.38,7.25-17.32,3.73Zm-17.14-4.01l17.06,3.45,16.05-3.45-1.25-6.69-16.7-3.26-15.8,3.26.64,6.68Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m360.01,416.02l-18.75-3.73-1.36-7.25,16.68-3.5,18.34,3.5,2.07,7.25-16.99,3.73Zm-17.51-4.01l17.37,3.45,15.75-3.45-1.89-6.68-17.03-3.26-15.48,3.26,1.28,6.68Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m394.81,416.02l-19.11-3.73-2.05-7.25,16.35-3.5,18.65,3.5,2.76,7.25-16.61,3.73Zm-17.89-4.02l17.71,3.45,15.4-3.45-2.52-6.68-17.31-3.26-15.18,3.26,1.91,6.68Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m429.58,416.02l-19.46-3.73-2.73-7.25,16.02-3.5,19,3.5,3.44,7.25-16.28,3.73Zm-18.27-4.01l18.03,3.45,15.09-3.45-3.15-6.68-17.65-3.26-14.87,3.26,2.54,6.68Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m464.36,416.02l-19.79-3.73-3.42-7.25,15.67-3.5,19.33,3.5,4.13,7.25-15.92,3.73Zm-18.63-4.02l18.34,3.45,14.76-3.45-3.78-6.68-17.95-3.26-14.54,3.26,3.18,6.68Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m22.11,427.24l-15.76-3.96,5.47-7.69,20.47-3.72,15.56,3.72-4.72,7.69-21.03,3.96Zm-14.22-4.26l14.62,3.66,19.49-3.66,4.38-7.09-14.45-3.46-19.01,3.46-5.02,7.09Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m57.96,427.24l-16.16-3.96,4.74-7.69,20.14-3.72,15.92,3.72-3.99,7.69-20.66,3.96Zm-14.64-4.26l14.98,3.66,19.14-3.66,3.7-7.09-14.77-3.46-18.7,3.46-4.35,7.09Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m93.8,427.24l-16.52-3.96,4.02-7.69,19.77-3.72,16.26,3.72-3.26,7.69-20.28,3.96Zm-15.03-4.26l15.31,3.66,18.8-3.66,3.03-7.09-15.1-3.46-18.36,3.46-3.68,7.09Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m129.66,427.24l-16.91-3.96,3.29-7.69,19.44-3.72,16.62,3.72-2.53,7.69-19.91,3.96Zm-15.45-4.26l15.68,3.66,18.45-3.66,2.36-7.09-15.43-3.46-18.05,3.46-3.01,7.09Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m165.5,427.24l-17.26-3.96,2.56-7.68,19.07-3.72,16.97,3.72-1.81,7.69-19.53,3.96Zm-15.83-4.26l16,3.66,18.1-3.66,1.69-7.09-15.76-3.46-17.7,3.46-2.34,7.09Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m201.36,427.24l-17.66-3.96,1.83-7.69,18.74-3.72,17.3,3.72-1.08,7.68-19.13,3.96Zm-16.25-4.26l16.37,3.66,17.74-3.66,1.02-7.09-16.07-3.46-17.39,3.46-1.67,7.09Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}
                    ></path>
                    <path d="m237.2,427.24l-18.03-3.96,1.11-7.69,18.38-3.72,17.68,3.72-.35,7.69-18.78,3.96Zm-16.66-4.26l16.72,3.66,17.41-3.66.35-7.09-16.41-3.46-17.07,3.46-.99,7.09Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'} 
                    ></path>
                    <path d="m273.06,427.24l-18.41-3.96.38-7.69,18.03-3.72,18.01,3.72.38,7.69-18.39,3.96Zm-17.06-4.26l17.06,3.66,17.04-3.66-.32-7.09-16.72-3.46-16.74,3.46-.32,7.09Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m308.89,427.24l-18.79-3.96-.35-7.69,17.68-3.72,18.38,3.72,1.11,7.69-18.04,3.96Zm-17.46-4.26l17.41,3.66,16.72-3.66-.99-7.09-17.07-3.46-16.41,3.46.35,7.09Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}
                    ></path>
                    <path d="m344.73,427.24l-19.14-3.96-1.08-7.69,17.31-3.72,18.73,3.72,1.83,7.69-17.65,3.96Zm-17.85-4.26l17.73,3.66,16.37-3.66-1.67-7.09-17.39-3.46-16.06,3.46,1.02,7.09Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m380.59,427.24l-19.53-3.96-1.81-7.69,16.97-3.72,19.09,3.72,2.56,7.69-17.29,3.96Zm-18.27-4.26l18.1,3.66,16.03-3.66-2.34-7.09-17.73-3.46-15.76,3.46,1.69,7.09Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m416.43,427.24l-19.88-3.96-2.53-7.68,16.6-3.72,19.44,3.72,3.29,7.69-16.91,3.96Zm-18.65-4.26l18.43,3.66,15.68-3.66-3.01-7.09-18.05-3.46-15.41,3.46,2.36,7.09Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m452.29,427.24l-20.28-3.96-3.26-7.69,16.27-3.72,19.77,3.72,4.01,7.68-16.51,3.96Zm-19.08-4.26l18.79,3.66,15.31-3.66-3.68-7.09-18.36-3.46-15.1,3.46,3.03,7.09Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m488.13,427.24l-20.65-3.96-3.99-7.69,15.92-3.72,20.14,3.72,4.74,7.69-16.16,3.96Zm-19.48-4.26l19.14,3.66,14.98-3.66-4.35-7.09-18.71-3.46-14.77,3.46,3.7,7.09Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m523.99,427.24l-21.03-3.96-4.72-7.69,15.57-3.72,20.47,3.72,5.47,7.68-15.76,3.96Zm-19.89-4.26l19.5,3.66,14.62-3.66-5.02-7.09-19.01-3.46-14.45,3.46,4.38,7.09Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m191.39,479.89l-19.97-5.13,2.36-9.91,21.35-4.77,19.52,4.77-1.39,9.91-21.88,5.13Zm-18.36-5.52l18.5,4.75,20.28-4.75,1.32-9.15-18.13-4.44-19.83,4.44-2.15,9.15Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m232.21,479.89l-20.45-5.13,1.43-9.91,20.9-4.77,20,4.77-.45,9.91-21.42,5.13Zm-18.89-5.52l18.96,4.75,19.85-4.75.45-9.15-18.57-4.44-19.41,4.44-1.28,9.15Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m273.06,479.89l-20.94-5.13.49-9.91,20.45-4.77,20.43,4.77.49,9.91-20.91,5.13Zm-19.41-5.52l19.41,4.75,19.38-4.75-.42-9.15-18.96-4.44-18.99,4.44-.42,9.15Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m313.88,479.89l-21.43-5.13-.45-9.91,20-4.77,20.9,4.77,1.43,9.91-20.45,5.13Zm-19.93-5.52l19.85,4.75,18.96-4.75-1.28-9.15-19.41-4.44-18.57,4.44.45,9.15Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m354.7,479.89l-21.88-5.13-1.39-9.91,19.52-4.77,21.35,4.77,2.36,9.91-19.96,5.13Zm-20.43-5.52l20.28,4.75,18.5-4.75-2.15-9.15-19.83-4.44-18.12,4.44,1.32,9.15Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m251.9,495.43l-21.42-5.5,1.02-10.62,21.4-5.11,20.92,5.11.02,10.62-21.94,5.5Zm-19.81-5.92l19.85,5.09,20.34-5.09.02-9.8-19.43-4.76-19.87,4.76-.91,9.8Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m294.19,495.43l-21.92-5.5.02-10.62,20.89-5.11,21.39,5.11,1.02,10.62-21.41,5.5Zm-20.35-5.92l20.31,5.09,19.85-5.09-.91-9.8-19.87-4.76-19.4,4.76.02,9.8Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m32.7,439.16l-16.39-4.21,5.43-8.17,21.01-3.95,16.15,3.95-4.62,8.17-21.57,4.21Zm-14.8-4.53l15.2,3.89,19.99-3.89,4.29-7.54-14.99-3.67-19.51,3.67-4.98,7.54Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m69.69,439.16l-16.79-4.21,4.65-8.17,20.64-3.95,16.5,3.95-3.85,8.17-21.15,4.21Zm-15.24-4.53l15.57,3.89,19.6-3.89,3.58-7.54-15.31-3.67-19.16,3.67-4.27,7.54Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m106.65,439.16l-17.19-4.21,3.88-8.17,20.27-3.95,16.9,3.95-3.08,8.17-20.77,4.21Zm-15.67-4.53l15.94,3.89,19.25-3.89,2.87-7.54-15.68-3.67-18.82,3.67-3.55,7.54Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m143.64,439.16l-17.59-4.21,3.11-8.17,19.89-3.95,17.25,3.95-2.3,8.17-20.35,4.21Zm-16.09-4.53l16.3,3.89,18.86-3.89,2.15-7.54-16.01-3.67-18.47,3.67-2.84,7.54Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m180.61,439.16l-17.99-4.21,2.33-8.17,19.52-3.95,17.64,3.95-1.53,8.17-19.97,4.21Zm-16.52-4.53l16.67,3.89,18.52-3.89,1.44-7.54-16.38-3.67-18.12,3.67-2.13,7.54Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m217.57,439.16l-18.36-4.21,1.56-8.17,19.12-3.95,18.02,3.95-.76,8.17-19.58,4.21Zm-16.93-4.53l17.02,3.89,18.14-3.89.73-7.54-16.73-3.67-17.75,3.67-1.41,7.54Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m254.56,439.16l-18.78-4.21.79-8.17,18.77-3.95,18.39,3.95v8.17s-19.17,4.21-19.17,4.21Zm-17.38-4.53l17.41,3.89,17.78-3.89v-7.54s-17.07-3.67-17.07-3.67l-17.42,3.67-.7,7.54Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m291.53,439.16l-19.16-4.21v-8.17s18.39-3.95,18.39-3.95l18.76,3.95.79,8.17-18.78,4.21Zm-17.79-4.53l17.76,3.89,17.41-3.89-.7-7.54-17.42-3.67-17.06,3.67v7.54Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m328.52,439.16l-19.58-4.21-.76-8.17,18.02-3.95,19.13,3.95,1.56,8.17-18.37,4.21Zm-18.24-4.53l18.15,3.89,17.02-3.89-1.41-7.54-17.75-3.67-16.73,3.67.73,7.54Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m365.48,439.16l-19.98-4.21-1.53-8.17,17.64-3.95,19.52,3.95,2.33,8.17-17.99,4.21Zm-18.66-4.53l18.51,3.89,16.67-3.89-2.13-7.54-18.12-3.67-16.37,3.67,1.44,7.54Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m402.47,439.16l-20.38-4.21-2.3-8.17,17.27-3.95,19.86,3.95,3.11,8.17-17.56,4.21Zm-19.1-4.53l18.89,3.89,16.28-3.89-2.84-7.54-18.44-3.67-16.03,3.67,2.15,7.54Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m439.44,439.16l-20.77-4.21-3.08-8.17,16.9-3.95,20.26,3.95,3.88,8.17-17.19,4.21Zm-19.53-4.53l19.25,3.89,15.94-3.89-3.55-7.54-18.82-3.67-15.69,3.67,2.87,7.54Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m476.41,439.16l-21.15-4.21-3.85-8.17,16.5-3.95,20.63,3.95,4.65,8.17-16.79,4.21Zm-19.93-4.53l19.6,3.89,15.56-3.89-4.27-7.54-19.16-3.67-15.32,3.67,3.58,7.54Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m513.39,439.16l-21.57-4.21-4.62-8.17,16.15-3.95,21.01,3.95,5.43,8.17-16.39,4.21Zm-20.38-4.53l19.99,3.89,15.2-3.89-4.98-7.54-19.51-3.67-14.99,3.67,4.29,7.54Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m82.15,451.85l-17.45-4.48,4.54-8.69,21.13-4.2,17.17,4.2-3.69,8.69-21.7,4.48Zm-15.86-4.82l16.18,4.14,20.12-4.14,3.43-8.02-15.94-3.91-19.62,3.91-4.16,8.02Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m120.34,451.85l-17.89-4.48,3.72-8.69,20.75-4.2,17.57,4.2-2.87,8.69-21.29,4.48Zm-16.34-4.82l16.59,4.14,19.73-4.14,2.67-8.02-16.31-3.91-19.28,3.91-3.4,8.02Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m158.51,451.85l-18.3-4.48,2.9-8.69,20.34-4.2,17.97,4.2-2.04,8.69-20.86,4.48Zm-16.77-4.82l16.96,4.14,19.33-4.14,1.91-8.02-16.68-3.91-18.88,3.91-2.64,8.02Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m196.7,451.85l-18.75-4.48,2.07-8.69,19.96-4.2,18.35,4.2-1.22,8.69-20.41,4.48Zm-17.24-4.82l17.37,4.14,18.93-4.14,1.15-8.02-17.04-3.91-18.53,3.91-1.88,8.02Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m234.87,451.85l-19.17-4.48,1.25-8.69,19.56-4.2,18.77,4.2-.4,8.69-20.01,4.48Zm-17.71-4.82l17.77,4.14,18.55-4.14.39-8.02-17.42-3.91-18.17,3.91-1.13,8.02Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m273.06,451.85l-19.59-4.48.43-8.69,19.17-4.2,19.14,4.2.43,8.69-19.57,4.48Zm-18.16-4.82l18.16,4.14,18.13-4.14-.37-8.02-17.77-3.91-17.8,3.91-.37,8.02Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m311.22,451.85l-20.02-4.48-.4-8.69,18.77-4.2,19.56,4.2,1.25,8.69-19.17,4.48Zm-18.61-4.82l18.55,4.14,17.77-4.14-1.13-8.02-18.17-3.91-17.42,3.91.39,8.02Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m349.39,451.85l-20.42-4.48-1.22-8.69,18.35-4.2,19.95,4.2,2.07,8.69-18.74,4.48Zm-19.05-4.82l18.92,4.14,17.37-4.14-1.88-8.02-18.53-3.91-17.03,3.91,1.15,8.02Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m387.58,451.85l-20.86-4.48-2.04-8.69,17.97-4.2,20.36,4.2,2.9,8.69-18.32,4.48Zm-19.53-4.82l19.34,4.14,16.99-4.14-2.64-8.02-18.91-3.91-16.69,3.91,1.91,8.02Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m425.75,451.85l-21.26-4.48-2.87-8.69,17.55-4.2,20.76,4.2,3.72,8.69-17.9,4.48Zm-19.96-4.82l19.7,4.14,16.59-4.14-3.4-8.02-19.27-3.91-16.29,3.91,2.67,8.02Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m463.94,451.85l-21.71-4.48-3.69-8.69,17.18-4.2,21.13,4.2,4.54,8.69-17.45,4.48Zm-20.44-4.82l20.12,4.14,16.18-4.14-4.16-8.02-19.62-3.91-15.94,3.91,3.43,8.02Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m134.95,465.4l-18.66-4.78,3.53-9.28,21.27-4.47,18.28,4.47-2.62,9.28-21.8,4.78Zm-17.05-5.15l17.29,4.42,20.2-4.42,2.45-8.57-16.97-4.15-19.75,4.15-3.23,8.57Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m174.4,465.4l-19.11-4.78,2.65-9.28,20.84-4.47,18.73,4.47-1.74,9.28-21.37,4.78Zm-17.55-5.15l17.72,4.42,19.81-4.42,1.64-8.57-17.39-4.15-19.36,4.15-2.42,8.57Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m213.85,465.4l-19.54-4.78,1.77-9.28,20.4-4.47,19.15,4.47-.86,9.28-20.92,4.78Zm-18.01-5.15l18.11,4.42,19.39-4.42.83-8.57-17.78-4.15-18.94,4.15-1.61,8.57Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m253.32,465.4l-20.02-4.78.9-9.28,20-4.47,19.58,4.47.02,9.28-20.47,4.78Zm-18.52-5.15l18.55,4.42,18.97-4.42v-8.57s-18.16-4.15-18.16-4.15l-18.57,4.15-.8,8.57Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m292.77,465.4l-20.45-4.78.02-9.28,19.55-4.47,19.99,4.47.9,9.28-20.01,4.78Zm-18.98-5.15l18.95,4.42,18.55-4.42-.8-8.57-18.57-4.15-18.15,4.15.02,8.57Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m332.25,465.4l-20.92-4.78-.86-9.28,19.15-4.47,20.4,4.47,1.77,9.28-19.55,4.78Zm-19.5-5.15l19.4,4.42,18.11-4.42-1.61-8.57-18.94-4.15-17.79,4.15.83,8.57Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m371.69,465.4l-21.37-4.78-1.74-9.28,18.73-4.47,20.84,4.47,2.65,9.28-19.11,4.78Zm-19.97-5.15l19.8,4.42,17.72-4.42-2.42-8.57-19.35-4.15-17.38,4.15,1.64,8.57Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                    <path d="m411.17,465.4l-21.83-4.78-2.62-9.28,18.31-4.47,21.24,4.47,3.53,9.28-18.63,4.78Zm-20.47-5.15l20.23,4.42,17.27-4.42-3.23-8.57-19.72-4.15-17,4.15,2.45,8.57Z" style={{fill: '#3fbdac', strokeWidth: 0,}} className={currentIndex === 7 || currentIndex === 0 ? 'solution-path-vendor-hexaborder-active' : 'solution-path-vendor-hexaborder-inactive'}></path>
                </g>
            </g>
        </g>

        <g class="vendor-arrows vendor-arrows-top" filter="url(#filter-vendor-arrows)" style={{
    opacity: currentIndex === 8 ? 0.25 : 1,
    transition: 'opacity 0.5s ease-in-out'}}>
            <line x1="60.61" y1="394" x2="60.61" y2="429" style={{fill: 'none', stroke: currentIndex === 0 || currentIndex === 7 ? 'rgb(243, 126, 71)' : '#9b9b9b', strokeDasharray: '0, 0, 3, 3', strokeLinecap: 'round', strokeDashoffset: '9px', 
               animation: currentIndex === 0 || currentIndex === 7 ? 'upwardAnimation 1s linear infinite' : 'none',}}></line>
            <line x1="121.72" y1="410" x2="121.72" y2="444" style={{fill: 'none', stroke: currentIndex === 0 || currentIndex === 7 ? 'rgb(243, 126, 71)' : '#9b9b9b', strokeDasharray: '0, 0, 3, 3', strokeLinecap: 'round', strokeDashoffset: '9px',
               animation: currentIndex === 0 || currentIndex === 7 ? 'upwardAnimation 1s linear infinite' : 'none',}}></line>
            <line x1="182.84" y1="425" x2="182.84" y2="458" style={{fill: 'none', stroke: currentIndex === 0 || currentIndex === 7 ? 'rgb(243, 126, 71)' : '#9b9b9b', strokeDasharray: '0, 0, 3, 3', strokeLinecap: 'round', strokeDashoffset: '9px',
               animation: currentIndex === 0 || currentIndex === 7 ? 'upwardAnimation 1s linear infinite' : 'none',}}></line>
            <line x1="243.96" y1="440" x2="243.96" y2="471" style={{fill: 'none', stroke: currentIndex === 0 || currentIndex === 7 ? 'rgb(243, 126, 71)' : '#9b9b9b', strokeDasharray: '0, 0, 3, 3', strokeLinecap: 'round', strokeDashoffset: '9px',
               animation: currentIndex === 0 || currentIndex === 7 ? 'upwardAnimation 1s linear infinite' : 'none',}}></line>
            <line x1="305.07" y1="440" x2="305.07" y2="472" style={{fill: 'none', stroke: currentIndex === 0 || currentIndex === 7 ? 'rgb(243, 126, 71)' : '#9b9b9b', strokeDasharray: '0, 0, 3, 3', strokeLinecap: 'round', strokeDashoffset: '9px',
               animation: currentIndex === 0 || currentIndex === 7 ? 'upwardAnimation 1s linear infinite' : 'none',}}></line>
            <line x1="366.19" y1="425" x2="366.19" y2="456" style={{fill: 'none', stroke: currentIndex === 0 || currentIndex === 7 ? 'rgb(243, 126, 71)' : '#9b9b9b', strokeDasharray: '0, 0, 3, 3', strokeLinecap: 'round', strokeDashoffset: '9px',
               animation: currentIndex === 0 || currentIndex === 7 ? 'upwardAnimation 1s linear infinite' : 'none',}}></line>
            <line x1="427.31" y1="412" x2="427.31" y2="442" style={{fill: 'none', stroke: currentIndex === 0 || currentIndex === 7 ? 'rgb(243, 126, 71)' : '#9b9b9b', strokeDasharray: '0, 0, 3, 3', strokeLinecap: 'round', strokeDashoffset: '9px',
               animation: currentIndex === 0 || currentIndex === 7 ? 'upwardAnimation 1s linear infinite' : 'none',}}></line>
            <line x1="488.42" y1="397" x2="488.42" y2="426" style={{fill: 'none', stroke: currentIndex === 0 || currentIndex === 7 ? 'rgb(243, 126, 71)' : '#9b9b9b', strokeDasharray: '0, 0, 3, 3', strokeLinecap: 'round', strokeDashoffset: '9px',
               animation: currentIndex === 0 || currentIndex === 7 ? 'upwardAnimation 1s linear infinite' : 'none',}}></line>

            <polyline points="57.29 394.19 60.64 390.83 64 394.19" style={{fill: 'none', stroke: currentIndex === 0 || currentIndex === 7 ? '#f37e47' : '#9b9b9b', strokeLinecap: 'round', strokeMiterlimit: 10}}></polyline>
            <polyline points="118.4 409.44 121.76 406.09 125.11 409.44" style={{fill: 'none', stroke: currentIndex === 0 || currentIndex === 7 ? '#f37e47' : '#9b9b9b', strokeLinecap: 'round', strokeMiterlimit: 10}}></polyline>
            <polyline points="179.52 424.89 182.87 421.53 186.23 424.89" style={{fill: 'none', stroke: currentIndex === 0 || currentIndex === 7 ? '#f37e47' : '#9b9b9b', strokeLinecap: 'round', strokeMiterlimit: 10}}></polyline>
            <polyline points="240.64 439.4 243.99 436.04 247.35 439.4" style={{fill: 'none', stroke: currentIndex === 0 || currentIndex === 7 ? '#f37e47' : '#9b9b9b', strokeLinecap: 'round', strokeMiterlimit: 10}}></polyline>
            <polyline points="301.75 439.4 305.11 436.04 308.46 439.4" style={{fill: 'none', stroke: currentIndex === 0 || currentIndex === 7 ? '#f37e47' : '#9b9b9b', strokeLinecap: 'round', strokeMiterlimit: 10}}></polyline>
            <polyline points="362.87 424.89 366.22 421.53 369.58 424.89" style={{fill: 'none', stroke: currentIndex === 0 || currentIndex === 7 ? '#f37e47' : '#9b9b9b', strokeLinecap: 'round', strokeMiterlimit: 10}}></polyline>
            <polyline points="423.98 410.93 427.34 407.58 430.69 410.93" style={{fill: 'none', stroke: currentIndex === 0 || currentIndex === 7 ? '#f37e47' : '#9b9b9b', strokeLinecap: 'round', strokeMiterlimit: 10}}></polyline>
            <polyline points="485.1 396.98 488.46 393.62 491.81 396.98" style={{fill: 'none', stroke: currentIndex === 0 || currentIndex === 7 ? '#f37e47' : '#9b9b9b', strokeLinecap: 'round', strokeMiterlimit: 10}}></polyline>
        </g>


        <g class="firewall-layer" style={{
    opacity: currentIndex === 8 ? 0.25 : 1,
    transition: 'opacity 0.5s ease-in-out' // Add a transition for smooth animation
  }} filter="url(#filter-firewall-layer)">
            <g>
                <g>
                    <g>
                        <path d="m536.54,357.41v13.02l-.02.23c-.1.74-.59,1.43-1.5,1.65l-260.2,64.37c-.2.05-.39.07-.59.05v-.11s.01-12.85.01-12.85c.19.01.39-.01.58-.06l260.2-64.37c1.03-.25,1.52-1.09,1.52-1.93Z" style={{fill: '#fff', strokeWidth: 0}}></path>
                        <path d="m536.54,357.21v.2c0-.07,0-.13-.02-.2h.02Z" style={{fill: '#fff', strokeWidth: 0}}></path>
                        <path d="m274.24,423.77c-.13-.01-.26-.03-.38-.06L13.66,359.34c-1.03-.25-1.52-1.09-1.52-1.93,0-.07,0-.15.02-.22l524.36.02c.02.07.02.13.02.2,0,.84-.49,1.68-1.52,1.93l-260.2,64.37c-.19.05-.39.07-.58.06Z" style={{fill: '#4c8cca', strokeWidth: 0, opacity:.45}}
                        className={currentIndex === 4 || currentIndex === 6  || currentIndex === 0 ? 'solution-path-firewall-upper-active' : 'solution-path-firewall-upper-inactive'}>
                        </path>
                        <path d="m536.52,357.21l-524.36-.02c.08-.83.64-1.61,1.68-1.77l260.2-39.64c.2-.03.4-.03.6,0l260.2,39.64c1.05.16,1.61.95,1.68,1.79Z" style={{fill: '#4c8cca', strokeWidth: 0, opacity:.45}}
                        className={currentIndex === 4 || currentIndex === 6  || currentIndex === 0 ? 'solution-path-firewall-upper-active' : 'solution-path-firewall-upper-inactive'}></path>

                        <path d="m274.24,423.77v12.96c-.14,0-.26-.02-.38-.05L13.66,372.31c-.88-.22-1.38-.87-1.5-1.59l-.02-.31v-13c0,.84.49,1.68,1.52,1.93l260.2,64.37c.12.03.25.05.38.06Z" style={{fill: '#4c8cca', strokeWidth: 0}}
                        className={currentIndex === 4 || currentIndex === 6  || currentIndex === 0 ? 'solution-path-firewall-front-active' : 'solution-path-firewall-front-inactive'}
                        ></path>
                        <path d="m12.16,357.19c-.02.07-.02.15-.02.22v-.22h.02Z" style={{fill: '#fff', strokeWidth: 0}}></path>
                    </g>
                    <g>
                        <path d="m536.54,357.21v13.22l-.02.23c-.1.74-.59,1.43-1.5,1.65l-260.2,64.37c-.2.05-.39.07-.59.05-.13,0-.25-.02-.37-.05L13.66,372.31c-.88-.22-1.38-.87-1.5-1.59l-.02-.31v-13.22" style={{fill: 'none', stroke: '#4c8cca', strokeMiterlimit: 10}}
                        className={currentIndex === 4 || currentIndex === 6  || currentIndex === 0 ? 'solution-path-stroke-front-active' : 'solution-path-firewall-stroke-inactive'}></path>

                        <line x1="274.24" y1="423.77" x2="274.24" y2="436.62" style={{fill: 'none', stroke: '#4c8cca', strokeMiterlimit: 10}}
                        className={currentIndex === 4 || currentIndex === 6  || currentIndex === 0 ? 'solution-path-stroke-front-active' : 'solution-path-firewall-stroke-inactive'}
                        ></line>
                        <path d="m274.24,423.77c-.13-.01-.26-.03-.38-.06L13.66,359.34c-1.03-.25-1.52-1.09-1.52-1.93,0-.07,0-.15.02-.22.08-.83.64-1.61,1.68-1.77l260.2-39.64c.2-.03.4-.03.6,0l260.2,39.64c1.05.16,1.61.95,1.68,1.79.02.07.02.13.02.2,0,.84-.49,1.68-1.52,1.93l-260.2,64.37c-.19.05-.39.07-.58.06Z" style={{fill: 'none', stroke: '#4c8cca', strokeMiterlimit: 10}}
                        className={currentIndex === 4 || currentIndex === 6  || currentIndex === 0 ? 'solution-path-firewall-stroke-active' : 'solution-path-firewall-stroke-inactive'}></path>
                    </g>
                </g>
                <circle cx="536.48" cy="365.24" r="4.19" style={{fill: '#4c8cca', stroke: '#fff', strokeMiterlimit: 10}}
                className={currentIndex === 4 || currentIndex === 6  || currentIndex === 0 ? 'solution-path-firewall-stroke-active' : 'solution-path-firewall-stroke-inactive'}></circle>
            </g>
            <g style={{clipPath: 'url(#clip-firewall)'}}>
                <path class="firewall-path" fill="url(#firewall-fill)" d="m327.91,292.9l-30.94-6.29-47.97,9.04-1.28.24-48.84,9.2-1.34.25-51.08,9.62-1.4.26-53.48,10.08-1.46.28-56.04,10.56-1.54.29-58.8,11.08-1.61.3-61.77,11.64-1.69.32-64.97,12.24-1.78.34-70.3,13.25,28.7,8.9-36.73,7.12,30.97,9.91,36.89-7.37,28.91,8.97-37.03,7.6,32.95,10.54,37.17-7.88,30.77,9.55-37.29,8.13,35.13,11.24,37.42-8.44,32.8,10.18-37.51,8.72,37.53,12.01,37.61-9.06,35.05,10.87-37.67,9.37,40.19,12.86,37.73-9.74,37.53,11.64-37.76,10.1,43.13,13.8,74.36-20.69,1.87-.52,67.9-18.89,1.76-.49,63.84-17.76,1.66-.46,60.14-16.73,1.56-.43,56.75-15.79,1.48-.41,53.63-14.92,1.4-.39,50.77-14.12,1.32-.37,48.13-13.39,1.25-.35,46.88-13.04-39.17-8.11,22.74-6.09-39.9-8.11-22.9,5.9-35.12-7.27,23.04-5.74-37.82-7.69-23.17,5.57-33.29-6.89,23.27-5.42-35.9-7.3-23.38,5.26-31.61-6.54,23.46-5.12-34.12-6.93-23.53,4.98-30.04-6.22,23.59-4.85-32.47-6.6-23.65,4.71-28.59-5.92,23.69-4.6Zm-77.39,3.07l46.74-8.82,27.88,5.67-22.47,4.35-24.22,4.69-27.93-5.9Zm-50.12,9.46l48.84-9.22,27.94,5.9-23.48,4.55-1.31.25-24.02,4.65-27.97-6.14Zm137.9,9.6l-23.41,4.81-1.3.27-23.96,4.92-29.42-6.46,23.99-4.79,1.3-.26,23.45-4.68,29.35,6.2Zm64.29,13.58l-23.31,5.08-1.3.28-23.86,5.2-30.99-6.8,23.91-5.07,1.3-.28,23.36-4.95,30.88,6.52Zm67.7,14.3l-23.15,5.38-1.29.3-23.72,5.52-32.68-7.18,23.8-5.37,1.29-.29,23.23-5.24,32.53,6.87Zm71.38,15.08l-22.95,5.71-1.28.32-23.53,5.85-34.52-7.58,23.63-5.69,1.28-.31,23.05-5.55,34.31,7.25Zm75.38,15.93l-22.69,6.07-1.26.34-23.27,6.22-36.51-8.02,23.4-6.04,1.27-.33,22.82-5.89,36.25,7.66Zm-511.73,93.72l33.58-8.37,1.82-.45,32.59-8.12,36.3,10.33-32.59,8.4-1.82.47-33.59,8.66-36.29-10.91Zm-72.92-21.93l33.5-7.8,1.82-.42,32.55-7.58,34.04,9.69-32.58,7.83-1.82.44-33.55,8.06-33.96-10.21Zm-68.35-20.56l33.37-7.29,1.81-.4,32.45-7.09,31.98,9.1-32.51,7.32-1.81.41-33.44,7.53-31.85-9.58Zm-64.2-19.31l33.2-6.82,1.8-.37,32.31-6.64,30.1,8.57-32.38,6.85-1.81.38-33.28,7.04-29.93-9Zm-60.42-18.17l32.98-6.4,1.79-.35,32.13-6.23,28.39,8.08-32.22,6.42-1.8.36-33.09,6.6-28.18-8.48Zm448.86-62.38l-24.52,5.03-1.36.28-25.11,5.15-29.47-6.74,25.13-5.02,1.37-.27,24.55-4.9,29.42,6.47Zm64.5,14.18l-24.44,5.33-1.36.3-25.04,5.46-31.07-7.11,25.08-5.31,1.36-.29,24.48-5.19,30.99,6.81Zm68.01,14.95l-24.31,5.65-1.35.31-24.92,5.8-32.82-7.51,24.98-5.63,1.36-.31,24.38-5.5,32.69,7.18Zm71.8,15.78l-24.13,6-1.34.33-24.75,6.16-34.71-7.94,24.84-5.98,1.35-.32,24.22-5.83,34.52,7.59Zm12.07,14.76l-24.65,6.35-1.37.35-25.3,6.52-35.82-8.38,25.4-6.33,1.38-.34,24.75-6.17,35.62,7.99Zm-329.59,65.29l31.65-7.89,1.72-.43,30.75-7.67,36.25,9.78-30.72,7.92-1.71.44-31.64,8.15-36.3-10.32Zm-73.04-20.76l31.64-7.37,1.72-.4,30.77-7.17,34.05,9.19-30.77,7.4-1.72.41-31.65,7.61-34.04-9.67Zm-68.59-19.5l31.57-6.9,1.71-.37,30.73-6.71,32.05,8.65-30.75,6.92-1.71.39-31.61,7.12-31.98-9.09Zm-64.54-18.35l31.46-6.47,1.71-.35,30.64-6.3,30.21,8.16-30.69,6.49-1.71.36-31.52,6.67-30.11-8.56Zm2.23-15.38l30.58-6.11,1.66-.33,29.81-5.95,29.4,7.74-29.85,6.13-1.66.34-30.64,6.29-29.3-8.11Zm264.76-40.22l-25.71,5.28-1.43.29-26.34,5.41-29.48-7.05,26.34-5.26,1.43-.29,25.72-5.14,29.47,6.75Zm64.66,14.82l-25.66,5.6-1.43.31-26.3,5.74-31.13-7.44,26.33-5.58,1.43-.3,25.69-5.44,31.08,7.12Zm68.26,15.64l-25.56,5.94-1.42.33-26.22,6.1-32.92-7.87,26.26-5.92,1.43-.32,25.61-5.77,32.82,7.52Zm72.17,16.54l-25.4,6.32-1.42.35-26.08,6.49-34.87-8.34,26.15-6.3,1.42-.34,25.48-6.14,34.71,7.95Zm-273.16,31.12l29.93-6.97,1.62-.38,29.13-6.78,34.01,8.73-29.1,7-1.62.39-29.92,7.19-34.05-9.18Zm-68.71-18.52l29.91-6.54,1.62-.35,29.14-6.37,32.06,8.23-29.14,6.56-1.62.37-29.93,6.74-32.05-8.64Zm-64.75-17.46l29.85-6.14,1.62-.33,29.1-5.98,30.28,7.77-29.12,6.16-1.62.34-29.89,6.32-30.22-8.15Zm211.33-15.36l-26.97,5.88-1.5.33-27.66,6.03-31.15-7.8,27.67-5.86,1.5-.32,26.99-5.72,31.13,7.45Zm68.46,16.39l-26.9,6.26-1.5.35-27.61,6.42-33-8.26,27.64-6.23,1.5-.34,26.94-6.07,32.93,7.88Zm7.37,15.36l-27.57,6.63-1.54.37-28.32,6.81-34.01-8.72,28.35-6.6,1.54-.36,27.61-6.43,33.93,8.31Zm-70.53-17.27l-27.65,6.22-1.54.35-28.38,6.39-32.06-8.22,28.38-6.2,1.54-.34,27.66-6.04,32.04,7.85Zm-66.61-16.31l-27.67,5.85-1.54.33-28.38,6-30.28-7.76,28.37-5.83,1.54-.32,27.67-5.69,30.3,7.42Zm-86.61,19.12l29.12-6.17,1.58-.33,28.38-6.01,31.16,7.81-28.39,6.19-1.58.34-29.13,6.35-31.14-8.18Zm66.73,17.54l29.14-6.57,1.58-.36,28.38-6.4,33,8.27-28.36,6.59-1.58.37-29.13,6.77-33.03-8.68Zm70.81,18.61l29.1-7.01,1.58-.38,28.32-6.82,35.01,8.77-28.27,7.03-1.58.39-29.06,7.23-35.09-9.22Zm60.54-14.58l27.57-6.64,1.5-.36,26.85-6.47,34.88,8.35-26.78,6.66-1.49.37-27.51,6.84-35-8.76Zm81.63-20.56l-26.15,6.29-1.46.35-26.85,6.45-33.93-8.3,26.9-6.27,1.46-.34,26.21-6.11,33.82,7.92Zm-70.31-16.46l-26.27,5.91-1.46.33-26.94,6.06-32.04-7.84,26.97-5.89,1.46-.32,26.3-5.75,31.97,7.49Zm-66.5-15.57l-26.33,5.57-1.47.31-26.99,5.71-30.3-7.41,26.99-5.55,1.47-.3,26.34-5.41,30.28,7.09Zm-59.73-1.77l-26.99,5.54-1.5.31-27.67,5.68-29.47-7.38,27.65-5.52,1.5-.3,26.99-5.39,29.48,7.06Zm-57.7,11.84l-28.37,5.82-1.58.32-29.09,5.97-29.41-7.73,29.06-5.8,1.58-.32,28.34-5.66,29.46,7.39Zm-89.33,34.47l30.69-6.5,1.67-.35,29.89-6.33,31.14,8.19-29.91,6.52-1.67.36-30.73,6.7-31.07-8.6Zm66.62,18.43l30.75-6.93,1.67-.38,29.93-6.75,33.03,8.69-29.93,6.96-1.67.39-30.77,7.15-33.01-9.13Zm70.81,19.59l30.77-7.41,1.67-.4,29.92-7.21,35.1,9.24-29.89,7.44-1.67.41-30.75,7.65-35.14-9.72Zm69.52,2.18l29.89-7.45,1.62-.4,29.06-7.24,36.15,9.28-29.01,7.48-1.62.42-29.85,7.69-36.25-9.77Zm62.15-15.49l28.27-7.05,1.53-.38,27.51-6.86,36,8.82-27.43,7.07-1.53.39-28.2,7.27-36.14-9.27Zm58.8-14.66l26.78-6.67,1.45-.36,26.07-6.5,35.82,8.39-25.98,6.7-1.45.37-26.69,6.88-36-8.81Zm68.81-35.35l-24.85,5.97-1.38.33-25.49,6.13-33.81-7.91,25.55-5.95,1.39-.32,24.92-5.8,33.67,7.55Zm-70.03-15.71l-24.99,5.62-1.39.31-25.61,5.77-31.97-7.48,25.66-5.61,1.39-.3,25.04-5.47,31.88,7.15Zm-66.33-14.88l-25.08,5.3-1.4.3-25.69,5.43-30.28-7.08,25.71-5.29,1.4-.29,25.11-5.16,30.23,6.78Zm-62.92-14.12l-25.13,5.01-1.4.28-25.72,5.13-28.71-6.72,25.73-4.99,1.4-.27,25.14-4.88,28.7,6.44Zm-53.68,10.7l-26.34,5.25-1.47.29-26.99,5.38-28.69-7.02,26.97-5.23,1.47-.28,26.34-5.11,28.71,6.72Zm-56.3,11.22l-27.65,5.51-1.54.31-28.34,5.65-28.64-7.34,28.31-5.49,1.54-.3,27.63-5.36,28.69,7.03Zm-59.11,11.78l-29.06,5.79-1.62.32-29.8,5.94-28.54-7.69,29.75-5.77,1.62-.31,29.02-5.63,28.64,7.35ZM.13,369.73l-30.58,6.1-1.7.34-31.38,6.26-28.39-8.07,31.3-6.07,1.7-.33,30.51-5.92L.13,369.73Zm-96.05,19.92l32.22-6.43,1.75-.35,31.39-6.27,29.3,8.12-31.45,6.46-1.75.36-32.3,6.63-29.14-8.52Zm62.47,18.26l32.39-6.86,1.76-.37,31.52-6.68,31.07,8.61-31.57,6.89-1.76.38-32.45,7.08-30.95-9.05Zm66.39,19.4l32.51-7.33,1.76-.4,31.61-7.13,33.01,9.15-31.64,7.36-1.76.41-32.55,7.57-32.94-9.63Zm70.69,20.66l32.58-7.85,1.77-.43,31.65-7.62,35.14,9.74-31.65,7.88-1.77.44-32.59,8.11-35.13-10.27Zm75.42,22.04l32.59-8.42,1.77-.46,31.63-8.17,37.48,10.38-31.6,8.45-1.76.47-32.57,8.71-37.54-10.97Zm67.7-17.49l30.72-7.93,1.67-.43,29.84-7.71,37.36,9.83-29.78,7.96-1.66.44-30.67,8.2-37.48-10.37Zm63.84-16.49l29-7.49,1.57-.41,28.2-7.28,37.2,9.33-28.12,7.52-1.57.42-28.93,7.74-37.36-9.82Zm60.31-15.57l27.43-7.08,1.49-.38,26.69-6.89,37.01,8.86-26.59,7.11-1.48.4-27.34,7.31-37.2-9.31Zm57.05-14.73l25.98-6.71,1.41-.36,25.3-6.53,36.78,8.43-25.18,6.73-1.4.38-25.87,6.92-37-8.85Zm54.06-13.96l24.64-6.36,1.34-.35,24.01-6.2,36.52,8.03-23.89,6.39-1.33.36-24.52,6.56-36.77-8.42Zm72.72-19.72l-23.41,6.03-1.3.34-24.02,6.19-35.61-7.98,24.12-6.01,1.31-.33,23.52-5.86,35.38,7.62Zm-73.59-15.85l-23.63,5.68-1.32.32-24.23,5.82-33.66-7.55,24.31-5.66,1.32-.31,23.72-5.52,33.5,7.22Zm-69.69-15.02l-23.8,5.36-1.32.3-24.38,5.49-31.88-7.14,24.44-5.34,1.33-.29,23.86-5.21,31.76,6.84Zm-66.1-14.24l-23.92,5.06-1.33.28-24.49,5.18-30.23-6.77,24.52-5.04,1.33-.27,23.96-4.93,30.15,6.5Zm-62.77-13.52l-23.99,4.78-1.33.27-24.55,4.89-28.7-6.43,24.57-4.77,1.34-.26,24.01-4.66,28.66,6.17Zm-134.62,1.89l51.08-9.64,27.97,6.15-24.57,4.76-1.37.26-25.14,4.87-27.98-6.4Zm-54.88,10.35l53.48-10.09,27.98,6.41-25.73,4.98-1.43.28-26.34,5.1-27.96-6.69Zm-57.51,10.85l56.05-10.58,27.96,6.69-26.97,5.23-1.5.29-27.63,5.35-27.91-6.99Zm-60.34,11.39l58.81-11.1,27.91,7-28.31,5.48-1.58.31-29.02,5.62-27.82-7.31Zm-63.39,11.96l61.78-11.66,27.81,7.32-29.75,5.76-1.66.32-30.51,5.91-27.68-7.66Zm-66.67,12.58l64.98-12.26,27.67,7.67-31.3,6.06-1.74.34-32.12,6.22-27.48-8.03Zm-70.22,13.25l68.43-12.91,27.48,8.04-32.98,6.39-1.84.36-33.87,6.56-27.23-8.44Zm19.98,24.94l-27.91-8.92,34.8-6.75,35.76-6.94,28.18,8.49-35.89,7.15-34.94,6.96Zm38.4-6.86l34-6.79,1.84-.37,33.09-6.61,29.14,8.53-33.19,6.81-1.85.38-34.11,7-28.92-8.96Zm23.25,26.55l-29.7-9.49,35.08-7.21,36.02-7.41,29.93,9.01-36.13,7.64-35.2,7.45Zm38.78-7.33l34.23-7.25,1.86-.39,33.29-7.05,30.95,9.06-33.37,7.28-1.86.41-34.32,7.49-30.77-9.53Zm26.9,28.31l-31.66-10.11,35.33-7.72,36.25-7.92,31.85,9.59-36.34,8.18-35.43,7.98Zm39.13-7.86l34.42-7.76,1.87-.42,33.44-7.54,32.94,9.64-33.5,7.79-1.87.43-34.49,8.02-32.81-10.16Zm31,30.26l-33.82-10.8,35.53-8.28,36.42-8.48,33.96,10.23-36.49,8.77-35.61,8.56Zm39.44-8.44l34.56-8.32,1.87-.45,33.55-8.08,35.13,10.28-33.58,8.35-1.87.47-34.61,8.61-35.05-10.86Zm35.6,32.41l-36.21-11.57,35.68-8.89,36.54-9.11,36.29,10.93-36.57,9.43-35.73,9.21Zm39.7-9.08l34.64-8.95,1.88-.48,33.59-8.68,37.54,10.99-33.59,8.98-1.88.5-34.65,9.26-37.53-11.63Zm113.14,14.7l-72.36,20.09-38.86-12.41,35.77-9.58,36.59-9.8,38.86,11.71Zm69.78-19.37l-67.9,18.85-38.86-11.69,33.59-9,1.82-.49,32.57-8.72,38.79,11.04Zm65.61-18.22l-63.85,17.73-38.79-11.03,31.6-8.46,1.71-.46,30.67-8.22,38.67,10.44Zm61.81-17.16l-60.15,16.7-38.66-10.42,29.78-7.98,1.61-.43,28.93-7.75,38.49,9.88Zm58.32-16.19l-56.76,15.76-38.48-9.87,28.11-7.53,1.52-.41,27.33-7.32,38.27,9.37Zm55.12-15.3l-53.65,14.89-38.26-9.36,26.59-7.12,1.44-.39,25.87-6.93,38.02,8.9Zm52.18-14.49l-50.79,14.1-38.01-8.89,25.18-6.74,1.37-.37,24.52-6.57,37.74,8.47Zm49.47-13.73l-48.15,13.37-37.73-8.46,23.88-6.4,1.3-.35,23.27-6.23,37.43,8.07Zm46.97-13.04l-45.71,12.69-37.43-8.06,22.68-6.08,1.23-.33,22.11-5.92,37.11,7.69Zm-52.3-21.51l35.95,7.31-21.57,5.77-23.32,6.24-36.24-7.65,23.47-6.06,21.71-5.61Zm-47.15,11.25l-1.24.32-22.83,5.88-35.38-7.61,24.19-6.03,22.39-5.58,35.13,7.28-22.26,5.74Zm-25.78-26.09l34.08,6.93-21.86,5.44h0s-23.61,5.87-23.61,5.87l-34.3-7.24,23.72-5.71h0s21.97-5.29,21.97-5.29Zm-25.05,5.2l-22.51,5.41-24.31,5.85-33.49-7.21,23.15-5.39,1.26-.29,22.6-5.26,33.3,6.9Zm-44.15-19.28l32.35,6.58-22.08,5.13-23.84,5.54-32.52-6.86,23.92-5.39,22.17-5Zm-25.16,4.91l-22.69,5.11-1.26.28-23.24,5.23-31.75-6.83,23.3-5.09,1.27-.28,22.77-4.97,31.61,6.55Zm-40.58-18.28l30.74,6.25-22.25,4.85-24.01,5.24-30.87-6.52,24.07-5.1,22.32-4.73Zm-25.23,4.64l-22.83,4.83-1.27.27-23.37,4.94-30.15-6.49,23.41-4.81,1.27-.26,22.89-4.7,30.05,6.23Zm-37.31-17.37l29.26,5.95-22.38,4.59-24.13,4.95-29.35-6.19,24.18-4.83,22.43-4.48Zm-25.26,4.4l-22.93,4.57-1.28.25-23.45,4.68-28.66-6.17,23.48-4.56,1.28-.25,22.97-4.46,28.59,5.93Z" style={{strokeWidth: 0}}></path>
            </g>
        </g>


        <g class="attack-layer" style={{
    opacity: currentIndex === 8 ? 0.25 : 1,
    transition: 'opacity 0.5s ease-in-out' // Add a transition for smooth animation
  }} filter="url(#filter-attack-layer)">
            <g>
                <g>
                    <g>
                        <path d="m536.54,291.44v14.67l-.02.23c-.1.74-.59,1.43-1.5,1.65l-260.2,64.37c-.19.05-.39.07-.58.06v-14.62c.19.01.39,0,.58-.06l260.2-64.37c1.03-.25,1.52-1.09,1.52-1.93Z" style={{fill: '#fff', strokeWidth: 0}}></path>
                        <path d="m536.54,291.24v.2c0-.07,0-.13-.02-.2h.02Z" style={{fill: '#fff', strokeWidth: 0}}></path>
                        <path d="m274.24,357.8c-.13,0-.26-.03-.38-.06L13.66,293.37c-1.03-.25-1.52-1.09-1.52-1.93,0-.07,0-.14.02-.21h524.36c.02.08.02.14.02.21,0,.84-.49,1.68-1.52,1.93l-260.2,64.37c-.19.05-.39.07-.58.06Z" style={{fill: '#fff', strokeWidth: 0}}></path>
                        <path d="m536.52,291.24H12.16c.07-.85.64-1.63,1.68-1.79l260.2-39.64c.2-.03.4-.03.6,0l260.2,39.64c1.05.16,1.61.95,1.68,1.79Z" style={{fill: '#fff', strokeWidth: 0}}></path>
                        <path d="m274.24,357.8v14.62c-.13-.01-.26-.03-.38-.06L13.66,307.99c-.88-.22-1.38-.87-1.5-1.59l-.02-.31v-14.65c0,.84.49,1.68,1.52,1.93l260.2,64.37c.12.03.25.05.38.06Z" style={{fill: '#d9e146', strokeWidth: 0}} className={currentIndex === 4 || currentIndex === 5 || currentIndex === 6  || currentIndex === 0 ? 'solution-path-attack-front-active' : 'solution-path-attack-front-inactive'}></path>
                        <path d="m12.16,291.23c-.02.07-.02.14-.02.21v-.21h.02Z" style={{fill: '#fff', strokeWidth: 0}}></path>
                    </g>
                    <g>
                        <path d="m536.54,291.24v14.87l-.02.23c-.1.74-.59,1.43-1.5,1.65l-260.2,64.37c-.19.05-.39.07-.58.06-.13-.01-.26-.03-.38-.06L13.66,307.99c-.88-.22-1.38-.87-1.5-1.59l-.02-.31v-14.86" style={{fill: 'none', stroke: '#d9e146', strokeMiterlimit: 10}} className={currentIndex === 4 || currentIndex === 5 || currentIndex === 6  || currentIndex === 0 ? 'solution-path-attack-upper-border-active' : 'solution-path-attack-upper-border-inactive'}></path>
                        <polyline points="274.24 357.8 274.24 372.42 274.24 372.44" style={{fill: 'none', stroke: '#d9e146', strokeMiterlimit: 10}} className={currentIndex === 4 || currentIndex === 5 || currentIndex === 6  || currentIndex === 0 ? 'solution-path-attack-upper-border-active' : 'solution-path-attack-upper-border-inactive'}></polyline>
                        <path d="m274.24,357.8c-.13,0-.26-.03-.38-.06L13.66,293.37c-1.03-.25-1.52-1.09-1.52-1.93,0-.07,0-.14.02-.21.07-.84.64-1.62,1.68-1.78l260.2-39.64c.2-.03.4-.03.6,0l260.2,39.64c1.05.16,1.61.95,1.68,1.79.02.07.02.13.02.2,0,.84-.49,1.68-1.52,1.93l-260.2,64.37c-.19.05-.39.07-.58.06Z" style={{fill: 'none', stroke: '#d9e146', strokeMiterlimit: 10}} className={currentIndex === 4 || currentIndex === 5 || currentIndex === 6  || currentIndex === 0 ? 'solution-path-attack-upper-border-active' : 'solution-path-attack-upper-border-inactive'}></path>
                    </g>
                </g>
                <g style={{clipPath: 'url(#clip-attack)'}}>
                    <path d="m272.79,356.24L15.87,293.57c-2.1-.51-1.96-3.49.18-3.82l256.92-38.6c.2-.03.4-.03.59,0l256.92,38.6c2.14.32,2.27,3.3.18,3.82l-256.92,62.67c-.31.08-.64.08-.95,0Z" style={{fill: '#d9e146', strokeWidth: 0}} 
                    className={currentIndex === 4 || currentIndex === 5 || currentIndex === 6  || currentIndex === 0 ? 'solution-path-attack-upper-active' : 'solution-path-attack-upper-inactive'}></path>
                </g>
                <g>
                    <polyline class="attack-line" points="430.06 317.89 416.9 314.85 402.11 315.53 384.01 308.74 370.26 307.49 343.8 306.53 337.89 305.6 356.13 300.63 326.18 296.68 318.21 293.42 292.18 285.17 273.06 282.3 256.81 287.84 219.39 294.88 208.74 292.8 204.23 290.5 186.6 282.69 163.22 279.02 141.36 271.28" style={{fill: 'none', stroke: 'rgb(243, 126, 71)', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth:' 0.75px', opacity: 1, strokeDashoffset: 0, strokeDasharray: 'none'}}></polyline>
                    <polyline class="attack-line" points="337.5 340.63 298.62 331.7 310.25 329.75 282.04 325.07 298.06 324.07 309.13 322.77 319.55 319.89 307.08 314.86 295.36 309.37 284.85 305.09 319.18 306.12 327.27 303.7 348.2 297 358.52 295.14 365.5 291.14 367.18 291.05 385.69 284.35 396.2 286.77 408.01 287.98 426.06 283.42 415.08 281.93 432.57 277.19 438.43 275.14" style={{fill: 'none', stroke: 'rgb(224, 29, 141)', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '0.75px', opacity: 1, strokeDashoffset: 0, strokeDasharray: 'none'}}></polyline>
                    <polyline class="attack-line" points="53.32 302.82 62.94 300.86 74.67 299.33 85.97 298.21 100.06 295.56 90.57 295.42 114.29 291.09 125.32 287.47 135.36 283.7 153.22 289.84 167.24 287.66 190.1 284.3 200.11 283.34 217.55 286.35 241.83 282.02 253.13 284.26 283.97 273.51 300.85 269.89 290.72 268.59 323.59 258.44" style={{fill: 'none', stroke: 'rgb(63, 189, 172)', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '0.75px', opacity: 1, strokeDashoffset: 0, strokeDasharray: 'none'}}></polyline>
                    <polyline class="attack-line" points="179.3 332.61 193.48 330.72 205.49 327.2 171.44 317.35 200.29 314.66 189.86 312.11 203.73 309.04 225.72 301.46 245.77 294.95 259.16 293.32 281.71 292.88 297.52 290.98 312.42 289.26 323.44 289.08 302.85 280.77 330.12 276.89 352.43 273.28 376.76 265.75" style={{fill: 'none', stroke: 'rgb(0, 93, 161)', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '0.75px', opacity: 1, strokeDashoffset: '2e-05', strokeDasharray: '329.595px, 6.83407px'}}></polyline>
                </g>
            </g>
            <circle cx="536.49" cy="299.97" r="4.19" style={{fill: '#d9e146', stroke: '#fff', strokeMiterlimit: 10}}></circle>
        </g>


        <g class="exposures-layer" filter="url(#filter-exposures-layer)" style={{
    opacity: currentIndex === 8 ? 0.25 : 1,
    transition: 'opacity 0.5s ease-in-out' // Add a transition for smooth animation
  }}>
            <g>
                <path d="m531.79,232.75c-.01-2.46,1.89-4.48,4.31-4.67v-1.17c-.27.19-.57.34-.91.43l-259.87,65.67c-.06.02-.13.01-.2.03l.09,11.96,259.84-65.66c.89-.22,1.08-.94,1.12-1.24l.02-.21v-.51c-1.13-.07-2.18-.52-2.99-1.33-.89-.88-1.38-2.05-1.39-3.31Z" style={{fill: '#fff', strokeWidth: 0,
                }}></path>
                <path d="m536.06,224.76s0-.03,0-.04c-.06-.55-.42-1.17-1.25-1.29l-260.39-38.34c-.15-.02-.3-.02-.45,0L13.95,226.02c-.83.13-1.18.75-1.24,1.29,0,.01,0,.03,0,.04l-.02.15c0,.59.3,1.26,1.14,1.46l260.52,63.07c.09.02.19.04.29.04.15,0,.29-.01.42-.05l259.88-65.67c.84-.21,1.14-.89,1.13-1.45l-.02-.16Z" style={{fill: '#9747FF', opacity: .25, strokeWidth: 0,}}
                className={currentIndex === 4 || currentIndex === 5  || currentIndex === 0 ? 'solution-path-exposure-upper-active' : 'solution-path-exposure-upper-inactive'}></path>
                <path d="m274.11,293.01L13.59,229.94c-.34-.08-.63-.22-.89-.41l.1,11.27c.1.55.52.99,1.12,1.13l260.28,63.01-.09-11.94s0,0,0,0Z" style={{fill: '#9747FF', strokeWidth: 0,}}
                className={currentIndex === 4 || currentIndex === 5  || currentIndex === 0 ? 'solution-path-exposure-front-active' : 'solution-path-exposure-front-inactive'}
                ></path>
                <path d="m11.68,227.32v.2h0c0-.06.01-.13.02-.2h-.02Z" style={{fill: '#9747FF', strokeWidth: 0,}} className={currentIndex === 4 || currentIndex === 5  || currentIndex === 0 ? 'solution-path-exposure-stroke-active' : 'solution-path-exposure-stroke-inactive'}></path>
                <path d="m536.59,226.43v1.63c.18,0,.35.03.51.05l-.02-3.4h-.01c.01.06.02.14.02.2,0,.58-.17,1.1-.49,1.52Z" style={{fill: '#9747FF', strokeWidth: 0,}} className={currentIndex === 4 || currentIndex === 5  || currentIndex === 0 ? 'solution-path-exposure-stroke-active' : 'solution-path-exposure-stroke-inactive'}></path>
                <path d="m536.67,237.93l-.02.23c-.1.74-.58,1.43-1.49,1.66l-259.88,65.67c-.2.05-.4.07-.59.05-.12,0-.25-.02-.37-.05L13.81,242.42c-.88-.21-1.38-.86-1.51-1.58l-.02-.31-.08-11.47c-.32-.41-.51-.93-.51-1.52h0l.1,13.02.03.36c.17.99.89,1.75,1.88,1.98l260.52,63.07c.17.04.34.06.44.06.06,0,.13,0,.2,0,.18,0,.37-.03.57-.08l259.87-65.67c1.02-.25,1.73-1.05,1.87-2.1l.02-.27v-.58c-.17.02-.33.04-.5.05v.53Z"style={{fill: '#9747FF', strokeWidth: 0,}} className={currentIndex === 4 || currentIndex === 5  || currentIndex === 0 ? 'solution-path-exposure-stroke-active' : 'solution-path-exposure-stroke-inactive'}></path>
                <path d="m536.47,237.42c-.1,0-.2-.02-.31-.03v.51s-.01.21-.01.21c-.04.3-.23,1.02-1.12,1.24l-259.84,65.66v.43s-.5,0-.5,0h0s0,.11,0,.11c.19.02.39,0,.59-.05l259.88-65.67c.91-.22,1.4-.92,1.49-1.66l.02-.23v-.53c-.06,0-.11.02-.17.02h-.02Z" style={{fill: '#9747FF', strokeWidth: 0,}} className={currentIndex === 4 || currentIndex === 5  || currentIndex === 0 ? 'solution-path-exposure-stroke-active' : 'solution-path-exposure-stroke-inactive'}></path>
                <path d="m536.09,226.91v1.17c.13,0,.24-.04.36-.04h.02s.08.01.12.01v-1.63c-.15.18-.32.34-.51.48Z" style={{fill: '#9747FF', strokeWidth: 0,}} className={currentIndex === 4 || currentIndex === 5  || currentIndex === 0 ? 'solution-path-exposure-stroke-active' : 'solution-path-exposure-stroke-inactive'}></path>
                <path d="m274.7,305.43h-.5s0-.48,0-.48L13.92,241.93c-.6-.14-1.03-.58-1.12-1.13l-.1-11.27c-.19-.14-.36-.29-.51-.47l.08,11.47.02.31c.12.72.63,1.38,1.51,1.58l260.52,63.07c.12.03.25.05.37.05v-.11s0,0,0,0Z" style={{fill: '#9747FF', strokeWidth: 0,}} className={currentIndex === 4 || currentIndex === 5  || currentIndex === 0 ? 'solution-path-exposure-stroke-active' : 'solution-path-exposure-stroke-inactive'}></path>
                <path d="m274.69,293.08s-.05,0-.08,0l.09,11.96c.17.01.31,0,.46-.04h.04s-.09-11.97-.09-11.97c-.14.02-.28.05-.42.05Z" style={{fill: '#9747FF', strokeWidth: 0,}} className={currentIndex === 4 || currentIndex === 5  || currentIndex === 0 ? 'solution-path-exposure-stroke-active' : 'solution-path-exposure-stroke-inactive'}></path>
                <path d="m274.69,305.04s0,0,.01,0l-.09-11.96s-.02,0-.03,0h-.01c-.16-.01-.32-.04-.46-.07l.09,11.94.24.06c.09.02.18.03.25.03Z" style={{fill: '#9747FF', strokeWidth: 0,}} className={currentIndex === 4 || currentIndex === 5  || currentIndex === 0 ? 'solution-path-exposure-stroke-active' : 'solution-path-exposure-stroke-inactive'}></path>
                <path d="m274.7,305.04v.39s.5,0,.5,0v-.43s-.04.01-.04.01c-.15.04-.29.05-.46.04Z" style={{fill: '#9747FF', strokeWidth: 0,}} className={currentIndex === 4 || currentIndex === 5  || currentIndex === 0 ? 'solution-path-exposure-stroke-active' : 'solution-path-exposure-stroke-inactive'}></path>
                <path d="m13.87,225.53l260-40.94c.2-.03.4-.03.6,0l260.39,38.34c1.05.15,1.61.94,1.69,1.78h.02s0,0,0,0h.49s0-.04,0-.04c-.1-1.18-.93-2.06-2.11-2.23l-260.4-38.34c-.25-.04-.5-.03-.75,0L13.79,225.04c-1.18.19-2,1.07-2.08,2.15-.01.05,0,.09-.01.14h.5c.07-.84.63-1.63,1.67-1.79Z" style={{fill: '#9747FF', strokeWidth: 0,}} ></path>
                <path d="m12.18,227.54v-.02h-.5s0,.02,0,.02h0s.5,0,.5,0h0Z" style={{fill: '#9747FF', strokeWidth: 0,}} className={currentIndex === 4 || currentIndex === 5  || currentIndex === 0 ? 'solution-path-exposure-stroke-active' : 'solution-path-exposure-stroke-inactive'}></path>
                <path d="m275.11,292.58v.45c.07-.01.14,0,.2-.03l259.87-65.67c.34-.08.64-.23.91-.43v-.69c-.25.29-.58.52-1.03.63l-259.88,65.67c-.19.05-.39.07-.58.06h0s.5,0,.5,0Z" style={{fill: '#9747FF', strokeWidth: 0,}} className={currentIndex === 4 || currentIndex === 5  || currentIndex === 0 ? 'solution-path-exposure-stroke-active' : 'solution-path-exposure-stroke-inactive'}></path>
                <polygon points="536.57 224.71 536.57 224.71 536.55 224.71 536.55 224.71 536.57 224.71" style={{fill: '#9747FF', strokeWidth: 0,}} className={currentIndex === 4 || currentIndex === 5  || currentIndex === 0 ? 'solution-path-exposure-stroke-active' : 'solution-path-exposure-stroke-inactive'}></polygon>
                <path d="m12.68,227.54v1.31c.26.28.59.5,1.03.61l260.52,63.07c.12.03.25.05.38.06.19,0,.39-.01.58-.06l259.88-65.67c.45-.11.77-.35,1.02-.63v-1.5s.47,0,.47,0h0s-.51,0-.51,0c0,.01,0,.03,0,.04l.02.16c0,.56-.29,1.24-1.13,1.45l-259.88,65.67c-.14.04-.27.05-.42.05-.1,0-.2-.02-.29-.04L13.83,228.97c-.84-.2-1.14-.87-1.14-1.46l.02-.15s0-.03,0-.04h-.03s0,.2,0,.2h-.5v.02h0s.5,0,.5,0Z" style={{fill: '#9747FF', strokeWidth: 0,}} className={currentIndex === 4 || currentIndex === 5  || currentIndex === 0 ? 'solution-path-exposure-stroke-active' : 'solution-path-exposure-stroke-inactive'}></path>
                <path d="m12.68,227.32h.03c.06-.55.41-1.16,1.24-1.29l260-40.94c.15-.02.3-.02.45,0l260.39,38.34c.84.12,1.19.74,1.25,1.29h.51c-.07-.84-.64-1.63-1.69-1.78l-260.39-38.34c-.2-.03-.4-.03-.6,0L13.87,225.53c-1.04.17-1.61.95-1.67,1.79h.48s0,0,0,0Z" style={{fill: '#9747FF', strokeWidth: 0,}} className={currentIndex === 4 || currentIndex === 5  || currentIndex === 0 ? 'solution-path-exposure-stroke-active' : 'solution-path-exposure-stroke-inactive'}></path>
                <path d="m274.11,293.01s0,0,0,0v-.42s.5,0,.5,0h0c-.13,0-.26-.03-.38-.06L13.71,229.45c-.44-.11-.77-.33-1.02-.61v.69c.27.18.56.33.9.41l260.52,63.07Z" style={{fill: '#9747FF', strokeWidth: 0,}} className={currentIndex === 4 || currentIndex === 5  || currentIndex === 0 ? 'solution-path-exposure-stroke-active' : 'solution-path-exposure-stroke-inactive'}></path>
                <path d="m12.18,227.52v-.2s.02,0,.02,0h0s-.5,0-.5,0c0,.07-.02.14-.02.2h.5Z" style={{fill: '#9747FF', strokeWidth: 0,}} className={currentIndex === 4 || currentIndex === 5  || currentIndex === 0 ? 'solution-path-exposure-stroke-active' : 'solution-path-exposure-stroke-inactive'}></path>
                <path d="m12.68,227.32h-.48c-.02.07-.02.13-.02.2h0s.5,0,.5,0v-.2Z" style={{fill: '#9747FF', strokeWidth: 0,}} className={currentIndex === 4 || currentIndex === 5  || currentIndex === 0 ? 'solution-path-exposure-stroke-active' : 'solution-path-exposure-stroke-inactive'}></path>
                <polygon points="12.68 227.32 12.2 227.32 12.2 227.32 12.68 227.32 12.68 227.32" style={{fill: '#9747FF', strokeWidth: 0,}} className={currentIndex === 4 || currentIndex === 5  || currentIndex === 0 ? 'solution-path-exposure-stroke-active' : 'solution-path-exposure-stroke-inactive'}></polygon>
                <path d="m12.18,227.32v.2c0-.07,0-.13.02-.2h-.02Z" style={{fill: '#9747FF', strokeWidth: 0,}}></path>
                <path d="m536.58,224.91v1.52c.33-.42.5-.94.5-1.52,0-.06,0-.15-.02-.2h-.49s0,.2,0,.2Z" style={{fill: '#9747FF', strokeWidth: 0,}} className={currentIndex === 4 || currentIndex === 5  || currentIndex === 0 ? 'solution-path-exposure-stroke-active' : 'solution-path-exposure-stroke-inactive'}></path>
                <path d="m12.18,227.54h-.5c0,.58.19,1.11.51,1.52v-1.52Z" style={{fill: '#9747FF', strokeWidth: 0,}} className={currentIndex === 4 || currentIndex === 5  || currentIndex === 0 ? 'solution-path-exposure-stroke-active' : 'solution-path-exposure-stroke-inactive'}></path>
                <path d="m536.09,226.22v.69c.19-.14.36-.3.5-.48v-1.52c0,.47-.18.94-.5,1.31Z" style={{fill: '#9747FF', strokeWidth: 0,}} className={currentIndex === 4 || currentIndex === 5  || currentIndex === 0 ? 'solution-path-exposure-stroke-active' : 'solution-path-exposure-stroke-inactive'}></path>
                <path d="m536.58,224.91v-.2s-.02,0-.02,0c.02.07.02.13.02.2Z" style={{fill: '#9747FF', strokeWidth: 0,}} className={currentIndex === 4 || currentIndex === 5  || currentIndex === 0 ? 'solution-path-exposure-stroke-active' : 'solution-path-exposure-stroke-inactive'}></path>
                <path d="m536.07,224.72v1.5c.33-.37.5-.83.5-1.31,0-.07,0-.13-.02-.2h-.48Z" style={{fill: '#9747FF', strokeWidth: 0,}} className={currentIndex === 4 || currentIndex === 5  || currentIndex === 0 ? 'solution-path-exposure-stroke-active' : 'solution-path-exposure-stroke-inactive'}></path>
                <path d="m12.18,227.54c0,.48.18.94.51,1.3v-1.31s-.51,0-.51,0Z" style={{fill: '#9747FF', strokeWidth: 0,}} className={currentIndex === 4 || currentIndex === 5  || currentIndex === 0 ? 'solution-path-exposure-stroke-active' : 'solution-path-exposure-stroke-inactive'}></path>
                <path d="m12.7,229.53v-.69c-.33-.36-.51-.83-.52-1.3h0v1.52c.15.18.33.34.52.47Z" style={{fill: '#9747FF', strokeWidth: 0,}} className={currentIndex === 4 || currentIndex === 5  || currentIndex === 0 ? 'solution-path-exposure-stroke-active' : 'solution-path-exposure-stroke-inactive'}></path>
                <path d="m274.61,292.58v.5s.06,0,.08,0c.14,0,.28-.03.42-.05v-.45s-.5,0-.5,0Z" style={{fill: '#9747FF', strokeWidth: 0,}} className={currentIndex === 4 || currentIndex === 5  || currentIndex === 0 ? 'solution-path-exposure-stroke-active' : 'solution-path-exposure-stroke-inactive'}></path>
                <path d="m274.11,292.58v.42c.15.04.31.06.46.07h.01s.02,0,.03,0v-.5s-.5,0-.5,0Z" style={{fill: '#9747FF', strokeWidth: 0,}} className={currentIndex === 4 || currentIndex === 5  || currentIndex === 0 ? 'solution-path-exposure-stroke-active' : 'solution-path-exposure-stroke-inactive'}></path>
                <path d="m539.1,235.32c.69-.7,1.07-1.63,1.07-2.61,0-1.81-1.33-3.3-3.06-3.6l.05,7.24c.73-.14,1.4-.48,1.94-1.02Z" style={{fill: '#9747FF', strokeWidth: 0,}} className={currentIndex === 4 || currentIndex === 5  || currentIndex === 0 ? 'solution-path-exposure-stroke-active' : 'solution-path-exposure-stroke-inactive'}></path>
                <path d="m532.79,232.75c0,.98.39,1.91,1.09,2.6.62.61,1.42.96,2.28,1.04l-.05-7.3c-1.87.19-3.33,1.75-3.32,3.67Z" style={{fill: '#9747FF', strokeWidth: 0,}} className={currentIndex === 4 || currentIndex === 5  || currentIndex === 0 ? 'solution-path-exposure-stroke-active' : 'solution-path-exposure-stroke-inactive'}></path>
                <path d="m537.16,236.35l-.05-7.24c-.16-.03-.33-.04-.5-.05l.05,7.34c.17,0,.34-.02.5-.05Z" style={{fill: '#9747FF', strokeWidth: 0,}} className={currentIndex === 4 || currentIndex === 5  || currentIndex === 0 ? 'solution-path-exposure-stroke-active' : 'solution-path-exposure-stroke-inactive'}></path>
                <path d="m536.46,229.04c-.12,0-.23.03-.35.04l.05,7.3c.1,0,.21.03.31.03h.02c.06,0,.11-.01.17-.02l-.05-7.34s-.09-.01-.13-.01h-.02Z" style={{fill: '#9747FF', strokeWidth: 0,}} className={currentIndex === 4 || currentIndex === 5  || currentIndex === 0 ? 'solution-path-exposure-stroke-active' : 'solution-path-exposure-stroke-inactive'}></path>
                <path d="m537.1,228.11v.5c2.01.3,3.55,2.01,3.56,4.1.01,2.08-1.51,3.81-3.5,4.14v.5c1-.15,1.92-.59,2.64-1.32.88-.89,1.36-2.07,1.36-3.32-.01-2.36-1.78-4.29-4.06-4.6Z" style={{fill: '#fff', strokeWidth: 0,}}></path>
                <path d="m532.29,232.75c-.01-2.19,1.67-3.98,3.81-4.17v-.5c-2.42.2-4.33,2.21-4.31,4.67,0,1.25.5,2.43,1.39,3.31.81.8,1.86,1.25,2.99,1.33v-.5c-2.16-.16-3.87-1.94-3.88-4.13Z" style={{fill: '#fff', strokeWidth: 0,}}></path>
                <path d="m536.6,228.56c.17,0,.34.02.5.05v-.5c-.17-.02-.33-.05-.5-.05v.5Z" style={{fill: '#fff', strokeWidth: 0,}}></path>
                <path d="m536.66,236.9v.5c.17,0,.34-.03.5-.05v-.5c-.17.03-.33.05-.5.05Z" style={{fill: '#fff', strokeWidth: 0,}}></path>
                <path d="m536.17,236.89v.5c.11,0,.21.03.31.03h.02c.06,0,.11-.01.17-.02v-.5c-.06,0-.11.02-.17.02-.11,0-.22-.02-.33-.03Z" style={{fill: '#fff', strokeWidth: 0,}}></path>
                <path d="m536.45,228.04c-.12,0-.23.03-.35.04v.5c.12-.01.23-.04.36-.04.05,0,.1.01.15.01v-.5s-.08-.01-.13-.01h-.02Z" style={{fill: '#fff', strokeWidth: 0,}}></path>
                <path d="m540.16,232.71c0,.98-.37,1.91-1.07,2.61-.53.54-1.21.89-1.94,1.02v.5c2-.33,3.51-2.05,3.5-4.14-.01-2.09-1.56-3.8-3.56-4.1v.5c1.73.3,3.05,1.79,3.06,3.6Z" style={{fill: '#fff', strokeWidth: 0,}}></path>
                <path d="m532.79,232.75c-.01-1.91,1.45-3.48,3.32-3.67v-.5c-2.15.19-3.83,1.98-3.82,4.17.01,2.2,1.72,3.97,3.88,4.13v-.5c-.86-.07-1.66-.42-2.28-1.04-.7-.69-1.09-1.62-1.09-2.6Z" style={{fill: '#fff', strokeWidth: 0,}}></path>
                <path d="m536.61,229.06c.17,0,.34.02.5.05v-.5c-.17-.02-.33-.04-.5-.05v.5Z" style={{fill: '#fff', strokeWidth: 0,}}></path>
                <path d="m536.66,236.4v.5c.17,0,.34-.03.5-.05v-.5c-.17.03-.33.04-.5.05Z" style={{fill: '#fff', strokeWidth: 0,}}></path>
                <path d="m536.1,228.58v.5c.12-.01.23-.04.35-.04h.02s.09.01.13.01v-.5c-.05,0-.1-.01-.15-.01-.12,0-.23.03-.35.04Z" style={{fill: '#fff', strokeWidth: 0,}}></path>
                <path d="m536.49,236.42h-.02c-.11,0-.21-.02-.31-.03v.5c.12,0,.22.03.34.03.06,0,.11-.02.17-.02v-.5c-.06,0-.11.02-.17.02Z" style={{fill: '#fff', strokeWidth: 0,}}></path>
                <path d="m536.48,188.21h.02c.99,0,1.91-.39,2.6-1.09.69-.7,1.07-1.63,1.07-2.61-.01-2.03-1.66-3.67-3.69-3.67h-.02c-.99,0-1.91.39-2.6,1.09-.69.7-1.07,1.63-1.07,2.61s.39,1.91,1.09,2.6c.7.69,1.62,1.07,2.59,1.07Z" style={{fill: '#9747FF', strokeWidth: 0,}} className={currentIndex === 4 || currentIndex === 5  || currentIndex === 0 ? 'solution-path-exposure-stroke-active' : 'solution-path-exposure-stroke-inactive'}></path>
                <path d="m536.47,189.21h.02c1.25,0,2.43-.5,3.31-1.39.88-.89,1.36-2.07,1.36-3.32-.01-2.58-2.09-4.67-4.71-4.66-1.25,0-2.43.5-3.31,1.39-.88.89-1.36,2.07-1.36,3.32,0,1.25.5,2.43,1.39,3.31.88.88,2.05,1.36,3.29,1.36Zm-.02-8.87c2.31-.01,4.2,1.85,4.21,4.17.01,2.31-1.85,4.2-4.17,4.21-2.31.01-4.2-1.85-4.21-4.17-.01-2.31,1.85-4.2,4.17-4.21Z" style={{fill: '#fff', strokeWidth: 0,}}></path>
                <path d="m536.5,188.71c2.31-.01,4.18-1.9,4.17-4.21-.01-2.31-1.9-4.18-4.21-4.17-2.31.01-4.18,1.9-4.17,4.21.01,2.31,1.9,4.18,4.21,4.17Zm-2.64-6.78c.69-.7,1.62-1.09,2.6-1.09h.02c2.02,0,3.67,1.64,3.69,3.67,0,.98-.37,1.91-1.07,2.61-.69.7-1.62,1.09-2.6,1.09h-.02c-.98,0-1.9-.38-2.59-1.07-.7-.69-1.09-1.62-1.09-2.6s.37-1.91,1.07-2.61Z" style={{fill: '#fff', strokeWidth: 0,}}></path>
            </g>
            <g>
                <line x1="333.1" y1="291.06" x2="333.1" y2="292.56" style={{fill: "none", stroke: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b' : '#9b9b9b', strokeLinecap: "round", strokeMiterlimit: 10, }}></line>
                <line x1="333.1" y1="295.39" x2="333.11" y2="333.63" style={{fill: 'none', stroke: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b' : '#9b9b9b', strokeDasharray: '0 0 2.83 2.83', strokeLinecap: 'round', strokeMiterlimit: 10,}}></line>
                <line x1="333.11" y1="335.04" x2="333.11" y2="336.54" style={{fill: "none", stroke: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b' : '#9b9b9b', strokeLinecap: "round", strokeMiterlimit: 10,}}></line>
            </g>
            <g>
                <line x1="333.1" y1="259.82" x2="333.1" y2="261.32" style={{fill: "none", stroke: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b' : '#9b9b9b', strokeLinecap: "round", strokeMiterlimit: 10,}}></line>
                <line x1="333.1" y1="264.01" x2="333.1" y2="268.04" style={{fill: 'none', stroke: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b' : '#9b9b9b', strokeDasharray: '0 0 2.83 2.83', strokeLinecap: 'round', strokeMiterlimit: 10,}}></line>
                <line x1="333.1" y1="269.39" x2="333.1" y2="270.89" style={{fill: "none", stroke: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b' : '#9b9b9b', strokeLinecap: "round", strokeMiterlimit: 10,}}></line>
            </g>
            <g>
                <line x1="214.03" y1="291.06" x2="214.03" y2="292.56" style={{fill: "none", stroke: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b' : '#9b9b9b', strokeLinecap: "round", strokeMiterlimit: 10,}}></line>
                <line x1="214.03" y1="295.3" x2="214.03" y2="321.39" style={{fill: 'none', stroke: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b' : '#9b9b9b', strokeDasharray: '0 0 2.75 2.75', strokeLinecap: 'round', strokeMiterlimit: 10}}></line>
                <line x1="214.03" y1="322.77" x2="214.03" y2="324.27" style={{fill: "none", stroke: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b' : '#9b9b9b', strokeLinecap: "round", strokeMiterlimit: 10,}}></line>
            </g>
            <g>
                <line x1="214.03" y1="250.98" x2="214.03" y2="252.48" style={{fill: "none", stroke: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b' : '#9b9b9b', strokeLinecap: "round", strokeMiterlimit: 10,}}></line>
                <line x1="214.03" y1="255.17" x2="214.03" y2="259.2" style={{fill: 'none', stroke: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b' : '#9b9b9b', strokeDasharray: '0 0 2.83 2.83', strokeLinecap: 'round', strokeMiterlimit: 10,}}></line>
                <line x1="214.03" y1="260.55" x2="214.03" y2="262.05" style={{fill: "none", stroke: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b' : '#9b9b9b', strokeLinecap: "round", strokeMiterlimit: 10,}}></line>
            </g>
            <g style={{opacity: .3,}}>
                <g style={{opacity: .5,}}>
                    <g>
                        <line x1="214.03" y1="264.93" x2="214.03" y2="266.43" style={{fill: "none", stroke: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b' : '#9b9b9b', strokeLinecap: "round", strokeMiterlimit: 10,}}></line>
                        <line x1="214.03" y1="269.12" x2="214.03" y2="273.16" style={{fill: 'none', stroke: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b' : '#9b9b9b', strokeDasharray: '0 0 2.83 2.83', strokeLinecap: 'round', strokeMiterlimit: 10,}}></line>
                        <line x1="214.03" y1="274.5" x2="214.03" y2="276" style={{fill: "none", stroke: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b' : '#9b9b9b', strokeLinecap: "round", strokeMiterlimit: 10,}}></line>
                    </g>
                </g>
            </g>
            <g style={{opacity: .3}}>
                <g style={{opacity: .5}}>
                    <line x1="333.1" y1="273.86" x2="333.1" y2="276.36" style={{fill: 'none', stroke: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b' : '#9b9b9b', strokeDasharray: '0 2.5', strokeLinecap: 'round', strokeMiterlimit: 10}}></line>
                </g>
            </g>
            <circle cx="150.8" cy="236.05" r="2.31" style={{fill: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b' : '#9b9b9b', strokeWidth: 0,}}></circle>
            <circle cx="170.53" cy="252.47" r="1.67" style={{fill: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b' : '#9b9b9b', strokeWidth: 0,}}></circle>
            <circle cx="232.76" cy="230.7" r="1.12" style={{fill: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b' : '#9b9b9b', strokeWidth: 0,}}></circle>
            <circle cx="234.99" cy="266.42" r="1.12" style={{fill: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b' : '#9b9b9b', strokeWidth: 0,}}></circle>
            <circle cx="340.2" cy="204.73" r="1.12" style={{fill: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b' : '#9b9b9b', strokeWidth: 0,}}></circle>
            <circle cx="382.34" cy="247.44" r="1.12" style={{fill: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b' : '#9b9b9b', strokeWidth: 0,}}></circle>
            <circle cx="102.43" cy="237.68" r="1.12" style={{fill: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b' : '#9b9b9b', strokeWidth: 0,}}></circle>
            <circle cx="188.76" cy="209.94" r="1.12" style={{fill: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b' : '#9b9b9b', strokeWidth: 0,}}></circle>
            <circle cx="188.11" cy="237.4" r="1.12" style={{fill: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b' : '#9b9b9b', strokeWidth: 0,}}></circle>
            <circle cx="222.8" cy="209.38" r="1.12" style={{fill: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b' : '#9b9b9b', strokeWidth: 0,}}></circle>
            <circle cx="399.92" cy="224.28" r="1.12" style={{fill: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b' : '#9b9b9b', strokeWidth: 0,}}></circle>
            <circle cx="470.99" cy="227.8" r="1.12" style={{fill: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b' : '#9b9b9b', strokeWidth: 0,}}></circle>
            <circle cx="252.01" cy="256.93" r="2.31" style={{fill: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b' : '#9b9b9b', strokeWidth: 0,}}></circle>
            <circle cx="308.57" cy="231.26" r="1.86" style={{fill: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b' : '#9b9b9b', strokeWidth: 0,}}></circle>
            <circle cx="360.29" cy="250.98" r="2.31" style={{fill: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b' : '#9b9b9b', strokeWidth: 0,}}></circle>
            <circle cx="418.34" cy="239.44" r="2.31" style={{fill: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b' : '#9b9b9b', strokeWidth: 0,}}></circle>
            <circle cx="255.36" cy="231.63" r="2.31" style={{fill: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b' : '#9b9b9b', strokeWidth: 0,}}></circle>
            <circle cx="282.99" cy="251.07" r="1.4" style={{fill: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b' : '#9b9b9b', strokeWidth: 0,}}></circle>
            <circle cx="456.71" cy="190.76" r="12.84" style={{fill: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b' : '#9b9b9b', stroke: '#fff', strokeMiterlimit: 10, strokeWidth: '.5px'}}></circle>
            <g>
                <g>
                    <line class="threat-arrow" x1="422" y1="218" x2="490" y2="201" style={{fill: 'none', stroke: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b' : '#9b9b9b', strokeDasharray: '0, 0, 3, 3', strokeLinecap: 'round', strokeDashoffset: '16px', animation: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? 'upwardAnimation 1s linear infinite' : 'none'}}></line>
                </g>
                <polyline points="424.93 220.45 420.81 218.09 422.89 213.5" style={{fill: "none", stroke: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b' : '#9b9b9b', strokeLinecap: "round", strokeMiterlimit: 10, animation: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? 'upwardAnimation 1s linear infinite' : 'none'}}></polyline>
            </g>
            <g>
                <g>
                    <line class="threat-arrow" x1="384" y1="210" x2="450.15" y2="194.5" style={{fill: 'none', stroke: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b' : '#9b9b9b', strokeDasharray: '0, 0, 3, 3', strokeLinecap: 'round', strokeDashoffset: '16px',animation: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? 'upwardAnimation 1s linear infinite' : 'none' }}></line>
                </g>
                <polyline points="384.55 213.76 380.44 211.39 382.52 206.8" style={{fill: "none", stroke: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b' : '#9b9b9b', strokeLinecap: "round", strokeMiterlimit: 10, animation: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? 'upwardAnimation 1s linear infinite' : 'none'}}></polyline>
            </g>
            <g>
                <path d="m462.85,193.66c0,.05.02.1.02.15,0,1.72-2.79,3.17-6.09,3.17s-6.09-1.45-6.09-3.17c0-.05.01-.1.02-.15-.23-.19-.43-.39-.61-.6-.08.24-.12.49-.12.75,0,2.18,2.99,3.9,6.81,3.9s6.81-1.71,6.81-3.9c0-.26-.04-.51-.12-.75-.18.21-.38.41-.61.6Z" style={{fill: '#fff', strokeWidth: 0,}}></path>
                <path d="m462.85,190.72c0,.05.02.1.02.15,0,1.72-2.79,3.17-6.09,3.17s-6.09-1.45-6.09-3.17c0-.05.01-.1.02-.15-.23-.19-.43-.39-.61-.6-.08.24-.12.49-.12.75,0,2.18,2.99,3.9,6.81,3.9s6.81-1.71,6.81-3.9c0-.26-.04-.51-.12-.75-.18.21-.38.41-.61.6Z" style={{fill: '#fff', strokeWidth: 0,}}></path>
                <path d="m456.78,191.83c3.82,0,6.81-1.71,6.81-3.9s-2.99-3.9-6.81-3.9-6.81,1.71-6.81,3.9,2.99,3.9,6.81,3.9Zm0-7.07c3.3,0,6.09,1.45,6.09,3.18s-2.79,3.17-6.09,3.17-6.09-1.45-6.09-3.17,2.79-3.18,6.09-3.18Z" style={{fill: '#fff', strokeWidth: 0,}}></path>
            </g>
            <circle cx="496.47" cy="197.04" r="12.84" style={{fill: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b' : '#9b9b9b', stroke: '#fff', strokeMiterlimit: 10, strokeWidth: '.5px'}}></circle>
            <g>
                <circle cx="91.47" cy="190.76" r="12.84" style={{fill: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b' : '#9b9b9b', stroke: '#fff', strokeMiterlimit: 10, strokeWidth: '.5px'}}></circle>
                <g>
                    <g>
                        <line class="threat-arrow" x1="124" y1="217" x2="57.65" y2="201.2" style={{fill: 'none', stroke: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b' : '#9b9b9b', strokeDasharray: '0, 0, 3, 3', strokeLinecap: 'round', strokeDashoffset: '16px', animation: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? 'upwardAnimation 1s linear infinite' : 'none'}}></line>
                    </g>
                    <polyline points="123.25 220.45 127.36 218.09 125.29 213.5" style={{fill: "none", stroke: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b' : '#9b9b9b', strokeLinecap: "round", strokeMiterlimit: 10,}}></polyline>
                </g>
                <g>
                    <g>
                        <line class="threat-arrow" x1="165" y1="210.5" x2="98.02" y2="194.5" style={{fill: 'none', stroke: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b' : '#9b9b9b', strokeDasharray: '0, 0, 3, 3', strokeLinecap: 'round', strokeDashoffset: '16px', animation: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? 'upwardAnimation 1s linear infinite' : 'none'}}></line>
                    </g>
                    <polyline points="163.62 213.76 167.73 211.39 165.66 206.8" style={{fill: "none", stroke: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b' : '#9b9b9b', strokeLinecap: "round", strokeMiterlimit: 10,}}></polyline>
                </g>
                <g>
                    <path d="m85.32,193.66c0,.05-.02.1-.02.15,0,1.72,2.79,3.17,6.09,3.17s6.09-1.45,6.09-3.17c0-.05-.01-.1-.02-.15.23-.19.43-.39.61-.6.08.24.12.49.12.75,0,2.18-2.99,3.9-6.81,3.9s-6.81-1.71-6.81-3.9c0-.26.04-.51.12-.75.18.21.38.41.61.6Z" style={{fill: '#fff', strokeWidth: 0,}}></path>
                    <path d="m85.32,190.72c0,.05-.02.1-.02.15,0,1.72,2.79,3.17,6.09,3.17s6.09-1.45,6.09-3.17c0-.05-.01-.1-.02-.15.23-.19.43-.39.61-.6.08.24.12.49.12.75,0,2.18-2.99,3.9-6.81,3.9s-6.81-1.71-6.81-3.9c0-.26.04-.51.12-.75.18.21.38.41.61.6Z" style={{fill: '#fff', strokeWidth: 0,}}></path>
                    <path d="m98.2,187.93c0-2.18-2.99-3.9-6.81-3.9s-6.81,1.71-6.81,3.9c0,2.18,2.99,3.9,6.81,3.9s6.81-1.71,6.81-3.9Zm-.72,0c0,1.72-2.79,3.17-6.09,3.17s-6.09-1.45-6.09-3.17,2.79-3.18,6.09-3.18,6.09,1.45,6.09,3.18Z" style={{fill: '#fff', strokeWidth: 0,}}></path>
                </g>
                <circle cx="51.7" cy="197.04" r="12.84" style={{fill: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b' : '#9b9b9b', stroke: '#fff', strokeMiterlimit: 10, strokeWidth: '.5px'}}></circle>
                <g>
                    <path d="m45.7,200.08c0,.05-.02.1-.02.15,0,1.72,2.79,3.17,6.09,3.17s6.09-1.45,6.09-3.17c0-.05-.01-.1-.02-.15.23-.19.43-.39.61-.6.08.24.12.49.12.75,0,2.18-2.99,3.9-6.81,3.9s-6.81-1.71-6.81-3.9c0-.26.04-.51.12-.75.18.21.38.41.61.6Z" style={{fill: '#fff', strokeWidth: 0,}}></path>
                    <path d="m45.7,197.14c0,.05-.02.1-.02.15,0,1.72,2.79,3.17,6.09,3.17s6.09-1.45,6.09-3.17c0-.05-.01-.1-.02-.15.23-.19.43-.39.61-.6.08.24.12.49.12.75,0,2.18-2.99,3.9-6.81,3.9s-6.81-1.71-6.81-3.9c0-.26.04-.51.12-.75.18.21.38.41.61.6Z" style={{fill: '#fff', strokeWidth: 0,}}></path>
                    <path d="m58.57,194.35c0-2.18-2.99-3.9-6.81-3.9s-6.81,1.71-6.81,3.9,2.99,3.9,6.81,3.9,6.81-1.71,6.81-3.9Zm-.72,0c0,1.72-2.79,3.17-6.09,3.17s-6.09-1.45-6.09-3.17,2.79-3.18,6.09-3.18,6.09,1.45,6.09,3.18Z" style={{fill: '#fff', strokeWidth: 0,}}></path>
                </g>
            </g>
            <g data-name="icon">
                <g data-name="blue">
                    <polygon points="496.48 193.79 494 195.26 496.15 196.53 496.48 196.35 496.48 193.79" style={{fill: '#fff', strokeWidth: 0,}}></polygon>
                    <path d="m491.99,199.01l.56-.34-2.15-1.28c-.26.12-.45.41-.45.41l2.04,1.2Z" style={{fill: '#fff', strokeWidth: 0,}}></path>
                    <path d="m502.96,197.8l-6.48,3.86v2.39s.09,0,.14-.01c.03,0,.1-.02.11-.02.08-.02.15-.05.23-.08l5.69-3.39c.26-.19.44-.49.44-.84v-1.47c0-.29-.12-.44-.12-.44Z" style={{fill: '#fff', strokeWidth: 0,}}></path>
                    <path d="m496.48,201.66l-6.53-3.86c-.05.09-.08.19-.1.29,0,0,0,.01,0,.02,0,.03,0,.06,0,.1v1.57h0c0,.36.21.67.52.82l5.65,3.35s.06.03.1.04c0,0,0,0,0,0h0s.01,0,.02,0c.02,0,.03,0,.05.01.02,0,.05.01.08.02.01,0,.03,0,.04,0,0,0,0,0,0,0,.01,0,.03,0,.04,0,.06,0,.12,0,.13,0v-2.39Z" style={{fill: '#fff', strokeWidth: 0,}}></path>
                    <path d="m502.96,197.8c-.06-.1-.13-.19-.22-.26,0,0-.08-.06-.11-.08l-6.15-3.67v2.56l4.46,2.66,2.03-1.21Z" style={{fill: '#fff', strokeWidth: 0,}}></path>
                </g>
                <g data-name="green">
                    <path d="m503.1,194.3c0-.26-.11-.42-.11-.42l-2.6,1.52,2.16,1.27c.32-.13.54-.45.55-.81v-1.57Z" style={{fill: '#fff', strokeWidth: 0,}}></path>
                    <polygon points="496.8 197.55 496.48 197.73 496.48 200.29 498.95 198.82 496.8 197.55" style={{fill: '#fff', strokeWidth: 0,}}></polygon>
                    <path d="m496.48,192.42v-2.39s-.1,0-.15.01c-.03,0-.1.02-.11.02-.08.02-.15.05-.23.08l-5.69,3.39c-.13.09-.23.21-.31.34l2.01,1.2,4.47-2.65Z" style={{fill: '#fff', strokeWidth: 0,}}></path>
                    <path d="m492.01,195.07l-2.01-1.2h0s0,0,0,0c-.08.15-.13.32-.14.5v1.46h0c0,.34.19.63.46.79l6.16,3.67v-2.56l-4.47-2.66Z" style={{fill: '#fff', strokeWidth: 0,}}></path>
                    <path d="m503,193.88c-.04-.08-.13-.19-.17-.23-.09-.08-.24-.16-.24-.16l-5.65-3.36s-.05-.03-.11-.04c-.09-.03-.15-.04-.19-.05,0,0,0,0,0,0-.05,0-.11,0-.16-.01v2.39l4.48,2.66,2.04-1.19Z" style={{fill: '#fff', strokeWidth: 0,}}></path>
                </g>
            </g>
            <path d="m132.57,277.86c1.93,0,1.93-3,0-3s-1.93,3,0,3h0Z" style={{fill: '#fff', strokeWidth: 0,}}></path>
            <g class="dsm-circles">
                <g class="dsm-circle-group">
                    <ellipse cx="150" cy="237" rx="30.090667" ry="7.522667" style={{fill: 'none', stroke: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b', strokeMiterlimit: 10, strokeWidth: '0.5px', transformOrigin: '0px 0px', translate: 'none', rotate: 'none', scale: 'none', opacity: '0.1193'}} data-svg-origin="150 237" transform="matrix(1,0,0,1,0,0)"></ellipse>
                    <ellipse cx="150" cy="237" rx="15.045333" ry="3.761333" style={{fill: 'none', stroke: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b', strokeMiterlimit: 10, strokeWidth: '0.5px', transformOrigin: '0px 0px', translate: 'none', rotate: 'none', scale: 'none', }} data-svg-origin="150 237" transform="matrix(1,0,0,1,0,0)"></ellipse>
                    <ellipse cx="150" cy="237" rx="7.522667" ry="1.880667" style={{fill: 'none', stroke: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b', strokeMiterlimit: 10, strokeWidth: '0.5px', transformOrigin: '0px 0px', translate: 'none', rotate: 'none', scale: 'none', opacity: '0.1193'}} data-svg-origin="150 237" transform="matrix(1,0,0,1,0,0)"></ellipse>
                </g>
                <g class="dsm-circle-group">
                    <ellipse cx="197" cy="223" rx="22.568" ry="5.642" style={{fill: 'none', stroke: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b', strokeMiterlimit: 10, strokeWidth: '0.5px', transformOrigin: '0px 0px', translate: 'none', rotate: 'none', scale: 'none', opacity: '0.1193'}} data-svg-origin="197 223" transform="matrix(1,0,0,1,0,0)"></ellipse>
                    <ellipse cx="197" cy="223" rx="11.284" ry="2.821" style={{fill: 'none', stroke: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b', strokeMiterlimit: 10, strokeWidth: '0.5px', transformOrigin: '0px 0px', translate: 'none', rotate: 'none', scale: 'none', opacity: '0.1193'}} data-svg-origin="197 223" transform="matrix(1,0,0,1,0,0)"></ellipse>
                    <ellipse cx="197" cy="223" rx="5.642" ry="1.4105" style={{fill: 'none', stroke: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b', strokeMiterlimit: 10, strokeWidth: '0.5px', transformOrigin: '0px 0px', translate: 'none', rotate: 'none', scale: 'none', opacity: '0.1193'}} data-svg-origin="197 223" transform="matrix(1,0,0,1,0,0)"></ellipse>
                </g>
                <g class="dsm-circle-group">
                    <ellipse cx="281" cy="274" rx="22.568" ry="5.642" style={{fill: 'none', stroke: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b', strokeMiterlimit: 10, strokeWidth: '0.5px', transformOrigin: '0px 0px', translate: 'none', rotate: 'none', scale: 'none', opacity: '0.1193'}} data-svg-origin="281 274" transform="matrix(1,0,0,1,0,0)"></ellipse>
                    <ellipse cx="281" cy="274" rx="11.284" ry="2.821" style={{fill: 'none', stroke: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b', strokeMiterlimit: 10, strokeWidth: '0.5px', transformOrigin: '0px 0px', translate: 'none', rotate: 'none', scale: 'none', opacity: '0.1193'}} data-svg-origin="281 274" transform="matrix(1,0,0,1,0,0)"></ellipse>
                    <ellipse cx="281" cy="274" rx="5.642" ry="1.4105" style={{fill: 'none', stroke: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b', strokeMiterlimit: 10, strokeWidth: '0.5px', transformOrigin: '0px 0px', translate: 'none', rotate: 'none', scale: 'none', opacity: '0.1193'}} data-svg-origin="281 274" transform="matrix(1,0,0,1,0,0)"></ellipse>
                </g>
                <g class="dsm-circle-group">
                    <ellipse cx="213" cy="246" rx="30.090667" ry="7.522667" style={{fill: 'none', stroke: 'rgb(224, 29, 141)', strokeMiterlimit: 10, strokeWidth: '0.5px', transformOrigin: '0px 0px', translate: 'none', rotate: 'none', scale: 'none', opacity: '0.1193'}} data-svg-origin="213 246" transform="matrix(1,0,0,1,0,0)"></ellipse>
                    <ellipse cx="213" cy="246" rx="15.045333" ry="3.761333" style={{fill: 'none', stroke: 'rgb(224, 29, 141)', strokeMiterlimit: 10, strokeWidth: '0.5px', transformOrigin: '0px 0px', translate: 'none', rotate: 'none', scale: 'none',}} data-svg-origin="213 246" transform="matrix(1,0,0,1,0,0)"></ellipse>
                    <ellipse cx="213" cy="246" rx="7.522667" ry="1.880667" style={{fill: 'none', stroke: 'rgb(224, 29, 141)', strokeMiterlimit: 10, strokeWidth: '0.5px', transformOrigin: '0px 0px', translate: 'none', rotate: 'none', scale: 'none',}} data-svg-origin="213 246" transform="matrix(1,0,0,1,0,0)"></ellipse>
                </g>
                <g class="dsm-circle-group">
                    <ellipse cx="332" cy="254" rx="30.090667" ry="7.522667" style={{fill: 'none', stroke: 'rgb(224, 29, 141)', strokeMiterlimit: 10, strokeWidth: '0.5px', transformOrigin: '0px 0px', translate: 'none', rotate: 'none', scale: 'none', opacity: '0.1193'}} data-svg-origin="332 254" transform="matrix(1,0,0,1,0,0)"></ellipse>
                    <ellipse cx="332" cy="254" rx="15.045333" ry="3.761333" style={{fill: 'none', stroke: 'rgb(224, 29, 141)', strokeMiterlimit: 10, strokeWidth: '0.5px', transformOrigin: '0px 0px', translate: 'none', rotate: 'none', scale: 'none',}} data-svg-origin="332 254" transform="matrix(1,0,0,1,0,0)"></ellipse>
                    <ellipse cx="332" cy="254" rx="7.522667" ry="1.880667" style={{fill: 'none', stroke: 'rgb(224, 29, 141)', strokeMiterlimit: 10, strokeWidth: '0.5px', transformOrigin: '0px 0px', translate: 'none', rotate: 'none', scale: 'none',}} data-svg-origin="332 254" transform="matrix(1,0,0,1,0,0)"></ellipse>
                </g>
                <g class="dsm-circle-group">
                    <ellipse cx="311" cy="216" rx="22.568" ry="5.642" style={{fill: 'none', stroke: 'rgb(224, 29, 141)', strokeMiterlimit: 10, strokeWidth: '0.5px', transformOrigin: '0px 0px', translate: 'none', rotate: 'none', scale: 'none', opacity: '0.1193'}} data-svg-origin="311 216" transform="matrix(1,0,0,1,0,0)"></ellipse>
                    <ellipse cx="311" cy="216" rx="11.284" ry="2.821" style={{fill: 'none', stroke: 'rgb(224, 29, 141)', strokeMiterlimit: 10, strokeWidth: '0.5px', transformOrigin: '0px 0px', translate: 'none', rotate: 'none', scale: 'none',}} data-svg-origin="311 216" transform="matrix(1,0,0,1,0,0)"></ellipse>
                    <ellipse cx="311" cy="216" rx="5.642" ry="1.4105" style={{fill: 'none', stroke: 'rgb(224, 29, 141)', strokeMiterlimit: 10, strokeWidth: '0.5px', transformOrigin: '0px 0px', translate: 'none', rotate: 'none', scale: 'none',}} data-svg-origin="311 216" transform="matrix(1,0,0,1,0,0)"></ellipse>
                </g>
                <g class="dsm-circle-group">
                    <ellipse cx="360" cy="222" rx="22.568" ry="5.642" style={{fill: 'none', stroke: 'rgb(224, 29, 141)', strokeMiterlimit: 10, strokeWidth: '0.5px', transformOrigin: '0px 0px', translate: 'none', rotate: 'none', scale: 'none', opacity: '0.1193'}} data-svg-origin="360 222" transform="matrix(1,0,0,1,0,0)"></ellipse>
                    <ellipse cx="360" cy="222" rx="11.284" ry="2.821" style={{fill: 'none', stroke: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b', strokeMiterlimit: 10, strokeWidth: '0.5px', transformOrigin: '0px 0px', translate: 'none', rotate: 'none', scale: 'none', opacity: '0.1193'}} data-svg-origin="360 222" transform="matrix(1,0,0,1,0,0)"></ellipse>
                    <ellipse cx="360" cy="222" rx="5.642" ry="1.4105" style={{fill: 'none', stroke: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b', strokeMiterlimit: 10, strokeWidth: '0.5px', transformOrigin: '0px 0px', translate: 'none', rotate: 'none', scale: 'none', opacity: '0.1193'}} data-svg-origin="360 222" transform="matrix(1,0,0,1,0,0)"></ellipse>
                </g>
                <circle cx="150" cy="236" r="2.5" style={{fill: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b'}}></circle>
                <circle cx="197" cy="222" r="2.5" style={{fill: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b'}}></circle>
                <circle cx="281" cy="273" r="2.5" style={{fill: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b'}}></circle>
                <circle cx="213" cy="245" r="3" style={{fill: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b'}}></circle>
                <circle cx="332" cy="253" r="3" style={{fill: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b'}}></circle>
                <circle cx="311" cy="215" r="2.5" style={{fill: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b'}}></circle>
                <circle cx="360" cy="221" r="2.5" style={{fill: currentIndex === 0 || currentIndex === 4 || currentIndex === 5 ? '#f56682' : '#9b9b9b'}}></circle>
            </g>

        </g>
        

        <g className='solutions'>
        <g class="solution solution-3" className={currentIndex === 3 ? 'solution-active' : 'solution-inactive'} filter="url(#filter-solution-3) ">
        <g
                    className="solution-box"
                    data-svg-origin="536.52001953125 146.89410247802732"
                    transform="matrix(1,0,0,1,0,0)"
                    style={{
                      translate: 'none',
                      rotate: 'none',
                      scale: 'none',
                      transformOrigin: '0px 0px',
                    }}
                    >
                    
                    <path d="m536.32,99.59l.2,41.02v.83c0,.52-.27,1.43-1.61,1.77l-116.46,29.39c-.41.1-.83.15-1.26.15l-.22-43.29c.16,0,.31-.02.47-.06l117.25-27.78c1.06-.27,1.57-1.15,1.57-2.03h.05Z" 
                    style={{fill: '#fff',
                    strokeWidth: 1,
                    stroke: '#9747FF', }} 
                    className={currentIndex === 3 || currentIndex === 0 ? 'solution-path-left-active' : 'solution-path-left-inactive'}
                    />
                                    
                    <path d="m416.98,129.46c-.18,0-.36-.01-.53-.06l-84.61-13.26,204.44-16.56c0,.88-.51,1.76-1.57,2.03l-117.25,27.78c-.15.04-.31.06-.47.06Z" 
                    style={{fill: '#9747FF', opacity: .50}} 
                    className={currentIndex === 3  || currentIndex === 0 ? 'solution-path-upper-active' : 'solution-path-upper-inactive'}
                    />
                     
                    <path d="m536.28,99.59l-204.44,16.56-32.79-5.13c-.95-.23-1.46-.94-1.57-1.71v-.55c.09-.85.68-1.64,1.74-1.81l117.24-26.51c.21-.03.42-.03.63,0l117.41,17.13c1.16.17,1.77,1.1,1.77,2.04Z" style={{fill: '#9747FF', 
                        // stroke:'#b3cee3',
                        opacity: .50
                         }} 
                    className={currentIndex === 3  || currentIndex === 0 ? 'solution-path-upper-active' : 'solution-path-upper-inactive'}
                    />
                    
                    <path d="m416.98,129.46l.22,43.29c-.39,0-.78-.05-1.17-.14l-117.08-17.46c-.4-.1-1.23-.68-1.23-1.2l-.02-1.57-.17-33.45,34.31-2.78,84.61,13.26c.17.04.35.06.53.06Z" style={{fill: '#9747FF',
                        stroke: '#9747FF',
                        strokeWidth: 1,  }} 
                    className={currentIndex === 3  || currentIndex === 0 ? 'solution-path-front-active' : 'solution-path-front-inactive'}
                    />
                    
                    <path d="m331.84,116.15l-34.31,2.78-.05-9.63c.1.77.62,1.48,1.57,1.71l32.79,5.13Z" style={{fill: '#005da1',
                        strokeWidth: 1,}} 
                    className={currentIndex === 3  || currentIndex === 0 ? 'solution-path-active' : 'solution-path-inactive'}
                    />
                    
                    <path d="m297.48,108.75v.55c-.02-.18-.03-.37,0-.55Z" 
                    style={{ fill: '#b3cee3',
                    strokeWidth: 1,}} 
                    className={currentIndex === 3  || currentIndex === 0 ? 'solution-path-active' : 'solution-path-inactive'}
                    />
                    
        </g>
        <g class="solution-textbox solution-3-textbox" data-svg-origin="348.6905517578125 57.92259216308594" transform="matrix(1,0,0,1,0,0)" style={{translate: 'none', rotate: 'none', scale: 'none', transformOrigin: '0px 0px'}}>
                    <rect x="348.72" y="57.99" width="135.79" height="47.62" rx="3" ry="3" transform="translate(-.09 .44) rotate(-.06)" style={{fill: 'rgb(0, 93, 161)', stroke: 'rgb(0, 93, 161)', strokeWidth: 2.5}} 
                    className={currentIndex === 3  || currentIndex === 0 ? 'solution-path-textbox-active' : 'solution-path-textbox-inactive'}
                    ></rect>
                    <text transform="translate(366 78.22) rotate(-.06)" style={{fill: '#fff', fontSize: '14px', fontWeight: 500,}}>
                        <tspan x="0" y="0">Security Policy</tspan>
                        <tspan x="3" y="16.8">Management</tspan>
                    </text>
                </g>
        </g>


        <g class="solution solution-1" className={currentIndex === 1 ? 'solution-active' : 'solution-inactive'} filter="url(#filter-solution-1)" >
        <g 
                  className="solution-box"
                    data-svg-origin="11.791074752807617 148.83690246582032"
                    transform="matrix(1,0,0,1,0,0)"
                    style={{
                      translate: 'none',
                      rotate: 'none',
                      scale: 'none',
                      transformOrigin: '0px 0px',
                    }}
                  >
                    <path d="m250.73,107.9l.23,46.5v.84c0,.52-.27,1.43-1.61,1.77l-116.52,18.22c-.41.1-.83.15-1.26.15l-.23-45.78c.16,0,.31-.02.47-.06l117.29-19.62c1.06-.27,1.58-1.15,1.57-2.03h.05Z" style={{
                        fill: '#fff',
                        strokeWidth: 1,
                        stroke: '#9747FF',
                    }} 
                    className={currentIndex === 1  || currentIndex === 0 ? 'solution-path-left-active' : 'solution-path-left-inactive'}
                    />
                    <path d="m131.35,129.61c-.18,0-.36-.01-.53-.06l-75.63-16.92,195.49-4.74c0,.88-.51,1.76-1.57,2.03l-117.29,19.62c-.15.04-.31.06-.47.06Z"
                     style={{fill: '#9747FF', opacity: .50}} 
                     className={currentIndex === 1  || currentIndex === 0 ? 'solution-path-upper-active' : 'solution-path-upper-inactive'}
                     />
            
                    <path d="m250.69,107.9l-195.49,4.74-41.81-9.35c-.95-.23-1.46-.94-1.57-1.71v-.55c.09-.85.68-1.64,1.74-1.81l117.28-18.63c.21-.03.42-.03.63,0l117.45,25.29c1.16.17,1.76,1.1,1.77,2.04Z" 
                   style={{fill: '#9747FF', opacity: .50}} 
                   className={currentIndex === 1  || currentIndex === 0 ? 'solution-path-upper-active' : 'solution-path-upper-inactive'}
                   />
            
                    <path d="m131.35,129.61l.23,45.78c-.39,0-.78-.05-1.17-.14l-117.14-28.35c-.4-.09-1.23-.67-1.23-1.2l-.02-1.57-.15-30.45,43.32-1.05,75.63,16.92c.17.04.35.06.53.06Z" style={{
                        fill: '#9747FF',
                        stroke: '#9747FF',
                        strokeWidth: 1,
                    }} 
                    className={currentIndex === 1  || currentIndex === 0 ? 'solution-path-front-active' : 'solution-path-front-inactive'}/>
            
                    <path d="m55.19,112.63l-43.32,1.05-.06-12.12c.1.77.62,1.49,1.57,1.71l41.81,9.35Z" style={{
                        fill: '#9747FF',
                        strokeWidth: 1,
                    }} 
                    className={currentIndex === 1  || currentIndex === 0 ? 'solution-path-front-active' : 'solution-path-front-inactive'}/>
            
                    <path d="m11.82,101.02v.55c-.02-.18-.03-.36,0-.55Z" 
                    style={{
                        fill: '#9747FF',
                        strokeWidth: 1,
                    }} 
                    className={currentIndex === 1  || currentIndex === 0 ? 'solution-path-active' : 'solution-path-inactive'}/>
        </g>

        <g class="solution-textbox solution-1-textbox" data-svg-origin="63.150691986083984 57.921607971191406" transform="matrix(1,0,0,1,0,0)" style={{translate: 'none', rotate: 'none', scale: 'none', transformOrigin: '0px 0px'}}>
                    <rect x="63.18" y="57.99" width="135.79" height="47.62" rx="3" ry="3" transform="translate(-.09 .14) rotate(-.06)"style={{fill: '#9747FF', stroke: '#9747FF', strokeWidth: 2.5}}
                    className={currentIndex === 1  || currentIndex === 0 ? 'solution-path-textbox-active' : 'solution-path-textbox-inactive'}
                    ></rect>
                    <text transform="translate(85 78)" style={{fill: '#fff', fontSize: '14px', fontWeight: 500,}}>
                        <tspan x="-5" y="0">Attack Surface</tspan>
                        <tspan x="1.22" y="16.8">Management</tspan>
                    </text>
                </g>
        </g>

        <g class="solution solution-2" className={currentIndex === 2  ? 'solution-active' : 'solution-inactive'} filter="url(#filter-solution-2)" >
        <g  
                  className="solution-box"
                    data-svg-origin="63.150691986083984 57.921607971191406"
                    transform="matrix(1,0,0,1,0,0)"
                    style={{
                      translate: 'none',
                      rotate: 'none',
                      scale: 'none',
                      transformOrigin: '0px 0px',
                    }}
                    >  
                  <path
                  d="m393.65,133.14h0s-205.58,11.17-205.58,11.17l-31.68-7.63c-.95-.23-1.46-.94-1.57-1.71v-.55c.09-.85.68-1.64,1.74-1.81l117.28-19.64c.21-.03.42-.03.63,0l117.41,18.13c1.16.17,1.77,1.1,1.77,2.04Z"
                  style={{fill: 'rgb(151, 71, 255, 0.5)'}} 
                   className={currentIndex === 2  || currentIndex === 0 ? 'solution-path-upper-active' : 'solution-path-upper-inactive'}
                   />
                  <path
                  d="m274.37,165.01c-.18,0-.36-.01-.53-.06l-85.77-20.65,205.58-11.17c0,.87-.51,1.76-1.57,2.03l-117.24,29.78c-.15.04-.31.06-.47.06Z"
                  style={{fill: 'rgb(151, 71, 255, 0.5)'}} 
                   className={currentIndex === 2  || currentIndex === 0 ? 'solution-path-upper-active' : 'solution-path-upper-inactive'}
                   />
                  <path
                  d="m393.7,133.14l.22,44.53v.83c0,.52-.27,1.43-1.61,1.77l-116.46,29.39c-.41.1-.83.15-1.26.15l-.22-44.8c.16,0,.31-.02.47-.06l117.24-29.78c1.06-.27,1.57-1.15,1.57-2.03h0s.05,0,.05,0Z"
                  style={{
                    fill: '#fff',
                    strokeWidth: 1,
                    stroke: '#9747FF'
                  }}
                  className={currentIndex === 2   || currentIndex === 0 ? 'solution-path-left-active' : 'solution-path-left-inactive'}
                  />
                  <path
                  d="m274.37,165.01l.22,44.8c-.39,0-.78-.05-1.17-.14l-117.14-28.35c-.4-.09-1.23-.67-1.23-1.2l-.02-1.57-.16-32.45,33.19-1.8,85.77,20.65c.17.04.35.06.53.06Z"
                  style={{
                    fill: '#9747FF',
                    stroke: '#9747FF',
                    strokeWidth: 1,
                  }}
                  className={currentIndex === 2   || currentIndex === 0 ? 'solution-path-front-active' : 'solution-path-front-inactive'}
                  />
                   <path d="m188.07,144.31l-33.19,1.8-.06-11.14c.1.77.62,1.48,1.57,1.71l31.68,7.63Z" style={{
                        fill: '#9747FF',
                        strokeWidth: 1,
                    }} 
                    className={currentIndex === 2   || currentIndex === 0 ? 'solution-path-front-active' : 'solution-path-front-inactive'}/>
            
                    <path d="m154.82,134.42v.55c-.02-.18-.03-.37,0-.55Z" 
                    style={{
                        fill: '#b3cee3',
                        strokeWidth: 1,
                    }} 
                    className={currentIndex === 2   || currentIndex === 0 ? 'solution-path-active' : 'solution-path-inactive'}/>
        </g>

        <g class="solution-textbox solution-2-textbox" data-svg-origin="205.9194793701172 95.03207397460938" transform="matrix(1,0,0,1,0,0)" style={{translate: 'none', rotate: 'none', scale: 'none', transformOrigin: '0px 0px'}}>
                    <rect x="205.95" y="95.1" width="135.79" height="47.62" rx="3" ry="3" transform="translate(-.13 .29) rotate(-.06)" style={{fill: 'rgb(0, 93, 161)', stroke: 'rgb(0, 93, 161)', strokeWidth: 2.5}}
                    className={currentIndex === 2  || currentIndex === 0 ? 'solution-path-textbox-active' : 'solution-path-textbox-inactive'}></rect>

                    <text transform="translate(228 115.33) rotate(-.06)" style={{fill: '#fff', fontSize: '14px', fontWeight: 500,}}>
                        <tspan x="1.5" y="0">Vulnerability</tspan>
                        <tspan x="0" y="16.8">Management</tspan>
                    </text>
                </g>
        </g>
            
            
                 
            
                  
            
                  <circle cx="536.25" cy="121.73" r="4.19" style={{fill: '#005da1', stroke: '#fff', strokeMiterlimit: 10}} className={currentIndex === 3 ? 'solution-dot-active' : 'solution-dot-inactive'}></circle>
            </g>
                    
            
            




        <g class="security-line" filter="url(#filter-security-line)" style={{
    opacity: currentIndex === 8 ? 0.25 : 1,
    transition: 'opacity 0.5s ease-in-out'}}>
            <path class="dsm-line" d="m517.13,213.89l20.62,2.99c2.95.43,5.14,2.96,5.14,5.94v149.74c0,2.75-1.87,5.15-4.54,5.82l-21.22,5.33" style={{fill: 'none', stroke: '#7a2982', strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '1.5px'}}></path>
            <circle class="dsm-dot" cx="542.59" cy="218.85" r="5.09" style={{fill: '#7a2982', stroke: '#fff', strokeMiterlimit: 10}}></circle>
            <line class="dsm-line" x1="537.59" y1="365.24" x2="542.62" y2="365.24" style={{fill: 'none', stroke: '#7a2982', strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '1.5px'}}></line>
            <line class="dsm-line" x1="537.59" y1="299.94" x2="542.62" y2="299.94" style={{fill: 'none', stroke: '#7a2982', strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '1.5px'}}></line>
            <line class="dsm-line" x1="537.59" y1="232.96" x2="542.62" y2="232.96" style={{fill: 'none', stroke: '#7a2982', strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '1.5px'}}></line>
        </g>

        </g>


        <g class="remediation" data-name="rem" transform="translate(-19, 43)" style={{ strokeDashoffset: '36px', transition: ' 2s ease-in-out' }}>
        <g data-name="Rem-arrows" style={{
    opacity: currentIndex === 8 ? 1 : 0,
    transition: 'opacity 2s ease-in-out' ,
    visibility: currentIndex === 8 ? 'visible' : 'hidden',
  }}>
            <line x1="69.78" y1="114" x2="69.78" y2="454" style={{fill: 'none', stroke: '#f56682', strokeDasharray: '0 0 3 3', strokeLinecap: 'round', animation: currentIndex === 8 ? 'downwardAnimation 1s linear infinite' : 'none'}}></line>
            <line x1="130.9" y1="130" x2="130.9" y2="470" style={{fill: 'none', stroke: '#f56682', strokeDasharray: '0 0 3 3', strokeLinecap: 'round', animation: currentIndex === 8 ? 'downwardAnimation 1s linear infinite' : 'none'}}></line>
            <line x1="192.01" y1="144" x2="192.01" y2="484" style={{fill: 'none', stroke: '#f56682', strokeDasharray: '0 0 3 3', strokeLinecap: 'round', animation: currentIndex === 8 ? 'downwardAnimation 1s linear infinite' : 'none'}}></line>
            <line x1="253.13" y1="158" x2="253.13" y2="498" style={{fill: 'none', stroke:  '#f56682', strokeDasharray: '0 0 3 3', strokeLinecap: 'round', animation: currentIndex === 8 ? 'downwardAnimation 1s linear infinite' : 'none'}}></line>
            <line x1="314.25" y1="158" x2="314.25" y2="498" style={{fill: 'none', stroke:'#f56682' , strokeDasharray: '0 0 3 3', strokeLinecap: 'round', animation: currentIndex === 8 ? 'downwardAnimation 1s linear infinite' : 'none'}}></line>
            <line x1="375.36" y1="144" x2="375.36" y2="483" style={{fill: 'none', stroke: '#f56682', strokeDasharray: '0 0 3 3', strokeLinecap: 'round', animation: currentIndex === 8 ? 'downwardAnimation 1s linear infinite' : 'none'}}></line>
            <line x1="436.48" y1="126" x2="436.48" y2="470" style={{fill: 'none', stroke: '#f56682', strokeDasharray: '0 0 3 3', strokeLinecap: 'round', animation: currentIndex === 8 ? 'downwardAnimation 1s linear infinite' : 'none'}}></line>
            <line x1="497.6" y1="110" x2="497.6" y2="453" style={{fill: 'none', stroke: '#f56682', strokeDasharray: '0 0 3 3', strokeLinecap: 'round', animation: currentIndex === 8 ? 'downwardAnimation 1s linear infinite' : 'none'}}></line>

            <polyline points="500.98 451.96 497.63 455.32 494.27 451.96" style={{fill: 'none', stroke: '#f56682', strokeLinecap: 'round', strokeMiterlimit: 10}}></polyline>
            <polyline points="439.68 469.74 436.33 473.09 432.97 469.74" style={{fill: 'none', stroke: '#f56682', strokeLinecap: 'round', strokeMiterlimit: 10}}></polyline>
            <polyline points="378.66 484.04 375.3 487.39 371.95 484.04" style={{fill: 'none', stroke: '#f56682', strokeLinecap: 'round', strokeMiterlimit: 10}}></polyline>
            <polyline points="317.54 498.34 314.19 501.7 310.83 498.34" style={{fill: 'none', stroke: '#f56682', strokeLinecap: 'round', strokeMiterlimit: 10}}></polyline>
            <polyline points="256.43 498.32 253.07 501.67 249.72 498.32" style={{fill: 'none', stroke:'#f56682', strokeLinecap: 'round', strokeMiterlimit: 10}}></polyline>
            <polyline points="195.31 483.92 191.96 487.28 188.6 483.92" style={{fill: 'none', stroke: '#f56682', strokeLinecap: 'round', strokeMiterlimit: 10}}></polyline>
            <polyline points="134.19 468.5 130.84 471.86 127.48 468.5" style={{fill: 'none', stroke: '#f56682', strokeLinecap: 'round', strokeMiterlimit: 10}}></polyline>
            <polyline points="72.98 453.36 69.63 456.72 66.28 453.36" style={{fill: 'none', stroke:  '#f56682', strokeLinecap: 'round', strokeMiterlimit: 10}}></polyline>

            <g data-name="Rem-arrowTips">
                <polyline points="500.98 103.52 497.63 106.88 494.27 103.52" style={{fill: 'none', stroke: '#f56682', strokeLinecap: 'round', strokeMiterlimit: 10}}></polyline>
                <polyline points="439.68 119.3 436.33 122.65 432.97 119.3" style={{fill: 'none', stroke: '#f56682', strokeLinecap: 'round', strokeMiterlimit: 10}}></polyline>
                <polyline points="378.66 137.6 375.3 140.96 371.95 137.6" style={{fill: 'none', stroke: '#f56682', strokeLinecap: 'round', strokeMiterlimit: 10}}></polyline>
                <polyline points="317.54 151.9 314.19 155.26 310.83 151.9" style={{fill: 'none', stroke: '#f56682', strokeLinecap: 'round', strokeMiterlimit: 10}}></polyline>
                <polyline points="256.43 151.88 253.07 155.24 249.72 151.88" style={{fill: 'none', stroke: '#f56682', strokeLinecap: 'round', strokeMiterlimit: 10}}></polyline>
                <polyline points="195.31 137.49 191.96 140.84 188.6 137.49" style={{fill: 'none', stroke: '#f56682', strokeLinecap: 'round', strokeMiterlimit: 10}}></polyline>
                <polyline points="134.19 122.07 130.84 125.42 127.48 122.07" style={{fill: 'none', stroke:  '#f56682', strokeLinecap: 'round', strokeMiterlimit: 10}}></polyline>
                <polyline points="72.98 106.93 69.63 110.28 66.28 106.93" style={{fill: 'none', stroke: '#f56682', strokeLinecap: 'round', strokeMiterlimit: 10}}></polyline>
            </g>
        </g>

        <g data-name="Rem-textbox" style={{
    opacity: currentIndex === 8 ? 1 : 0,
    transition: 'opacity 2s ease-in-out' ,
    visibility: currentIndex === 8 ? 'visible' : 'hidden',
  }}>
            <g>
                <path d="m372.4,324.29l-177.35.2c-1.66,0-3-1.34-3-3l-.04-41.62c0-1.66,1.34-3,3-3l177.35-.2c1.66,0,3,1.34,3,3l.04,41.62c0,1.66-1.34,3-3,3Z" style={{fill: '#54ab49', strokeWidth: 0}}></path>
                <g style={{clipPath: 'url(#clip-remediation)'}}>
                    <path d="m217.3,287.74c0,13.87-11.24,25.12-25.12,25.12s-25.12-11.24-25.12-25.12,11.24-25.12,25.12-25.12,25.12,11.24,25.12,25.12Zm143.44,7.26c-13.87,0-25.12,11.24-25.12,25.12s11.24,25.12,25.12,25.12,25.12-11.24,25.12-25.12-11.24-25.12-25.12-25.12Z" style={{fill: '#4f9b42', strokeWidth: 0}}></path>
                </g>
                <text transform="translate(231 297)" style={{fill: '#fff', fontSize: '14px', fontWeight: 500}}>
                    <tspan x="0" y="0">Remediation &amp;</tspan>
                    <tspan x="-17.65" y="16.8">Change Automation</tspan>
                </text>
            </g>
            <circle cx="375.27" cy="276.58" r="4.19" style={{fill: '#3fbdac', stroke: '#fff', strokeMiterlimit: 10}}></circle>
            <circle cx="192.02" cy="324.3" r="4.19" style={{fill: '#3fbdac', stroke: '#fff', strokeMiterlimit: 10}}></circle>
        </g>
        </g>


     
    </svg>
      </div>
      <div className="right w-[40%] overflow-y-scroll relative">
        {contentData.map((item, index) => (
          <div className="section" id={`section-${index}`} key={index} ref={(el) => (sectionRefs.current[index] = el)}>
            <div
              className="vertical-div absolute w-1.5 rounded-full"
              ref={(el) => (verticalDivRefs.current[index] = el)}
            ></div>
            <div className="px-4">{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}
export default Animation;