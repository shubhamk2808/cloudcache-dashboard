import { FaFacebookF, FaInstagram, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa';
import { FaAws, FaDocker, FaGoogle } from 'react-icons/fa'
import { SiKubernetes, SiTerraform, SiMongodb, SiAnsible, SiRedhat } from 'react-icons/si'
import { FaRegStar } from "react-icons/fa6";
import { RxMagicWand } from "react-icons/rx";
import { FaRegSmile } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import { SiAwsorganizations } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

export const services = [
    {
        icon: <FaRegSmile className='h-12 w-12 text-[#64DA8D]' />,
        title: "Salesforce Consulting",
        description: "Our Salesforce Consulting Services are aimed to support your sales, marketing and customer service needs."
    },
    {
        icon: <RxMagicWand className='h-12 w-12 text-[#64DA8D]' />,
        title: "Salesforce Implementation",
        description: "Our Salesforce Consultants will work with you to review your current sales and business processes."
    },
    {
        icon: <FaHandHoldingHeart className='h-12 w-12 text-[#64DA8D]' />,
        title: "Salesforce Support",
        description: "If you are searching for a reliable and cost-effective Salesforce support and maintenance services partner then your search ends here!"
    },
    {
        icon: <FaRegStar className='h-12 w-12 text-[#64DA8D]' />,
        title: "Salesforce Devops",
        description: "Develop your environment strategy for scratch orgs, development sandboxes, testing, integration, and production environments."
    }
];

export const products = [
    {
        id: 1,
        title: "Cloud Infrastructure",
        description: "Analyze infrastructure patterns to identify optimization opportunities.",
        icon: <FaAws className="w-12 h-12 text-[#FF9900]" />,
        brands: ["AWS", "GCP", "Azure"]
    },
    {
        id: 2,
        title: "Container Orchestration",
        description: "Deliver scalable container solutions that drive better performance.",
        icon: <SiKubernetes className="w-12 h-12 text-[#326CE5]" />,
        brands: ["Kubernetes", "Docker", "OpenShift"]
    },
    {
        id: 3,
        title: "Infrastructure as Code",
        description: "Build lasting infrastructure with automated deployments.",
        icon: <SiTerraform className="w-12 h-12 text-[#7B42BC]" />,
        brands: ["Terraform", "CloudFormation", "Ansible"]
    }
]

export const brandLogos = {
    AWS: <FaAws className="w-8 h-8" />,             
    Docker: <FaDocker className="w-8 h-8" />,        
    Kubernetes: <SiKubernetes className="w-8 h-8" />, 
    GCP: <FaGoogle className="w-8 h-8" />,           
    MongoDB: <SiMongodb className="w-8 h-8" />,      
    Terraform: <SiTerraform className="w-8 h-8" />,  
    Ansible: <SiAnsible className="w-8 h-8" />,
    OpenShift: <SiRedhat className="w-8 h-8" />,
    CloudFormation: <SiAwsorganizations className="w-8 h-8" />, 
    Azure: <VscAzure className="w-8 h-8" />
}

export const footerLinks = {
    Solutions: [
        { name: 'Marketing', href: '#' },
        { name: 'Analytics', href: '#' },
        { name: 'Automation', href: '#' },
        { name: 'Commerce', href: '#' },
        { name: 'Insights', href: '#' }
    ],
    Support: [
        { name: 'Submit ticket', href: '#' },
        { name: 'Documentation', href: '#' },
        { name: 'Guides', href: '#' }
    ],
    Company: [
        { name: 'About', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Jobs', href: '#' },
        { name: 'Press', href: '#' }
    ],
    Legal: [
        { name: 'Terms of service', href: '#' },
        { name: 'Privacy policy', href: '#' },
        { name: 'License', href: '#' }
    ]
};

export const socialLinks = [
    { icon: <FaFacebookF />, href: '#' },
    { icon: <FaInstagram />, href: '#' },
    { icon: <FaTwitter />, href: '#' },
    { icon: <FaGithub />, href: '#' },
    { icon: <FaYoutube />, href: '#' }
];

export const handleLogoClick = () => {
    window.location.href = "https://cloudcacheconsulting.com";
  };