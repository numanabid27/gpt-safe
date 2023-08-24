import React from 'react'
import { Hero } from '../../Components/home/hero/Hero'
import { TextPlagirism } from '../../Components/global/text-plag/TextPlagirism'
import { EasySteps } from '../../Components/home/easy-steps/EasySteps'
import { PlansPricing } from '../../Components/home/plans-pricing/PlansPricing'
import { Numbers } from '../../Components/global/numbers/Numbers'
import { OurCustomer } from '../../Components/global/our-customer/OurCustomer'


export const Home = () => {
  const data = [
    {
      title : "2M+",
      desc : "Tickets Delivered This Month"
    },
    {
      title : "46K+",
      desc : "Active Customers Rate"
    },
    {
      title : "99%",
      desc : "Customer Satisfaction Rate"
    },
  ]
  const data2 = [
    {
        img:"./images/benift.png",
        title:"What is Gptsafe, and the benefits?",
        desc:"Enhance content integrity, prevent AI-generated deception, and assure accurate information. Bolster trustworthiness in digital content with our 95% accurate AI plagiarism detection system, countering misinformation effectively."
    },
    {
        img:"./images/accurate.png",
        title:"95% accurate",
        desc:"Experience a remarkable 95% accuracy rate. Our AI plagiarism detection system ensures reliable content assessment, safeguarding against misleading information and reinforcing credibility in digital content."
    },
    {
        img:"./images/time.png",
        title:"Save your time",
        desc:"Reclaim valuable time. Our AI plagiarism detection system swiftly analyzes content, sparing you from manual checks. Focus on what matters while ensuring accuracy and credibility."
    },
  ]
  const data3 = [
    {
        img:"./images/benift.png",
        title:"Ai detection",
        desc:"An Ai detector that helps people see if their text has written by Ai, if the text has been written by aiThe Ai have an 95% (True,positive) and a ( 5% False, Positive ) It is the most accurate in the world"
    },
    {     img:"./images/accurate.png",
        title:"Make Ai text sound like human",
        desc:"Experience next-level AI capabilities. Our service seamlessly transforms AI-generated text into a human-like tone, enhancing communication authenticity and engagement. Elevate your content with unparalleled naturalness."
    }
  ]
  return (
    <>
      <Hero />
      <TextPlagirism 
        data2={data2}
        heading={<>Simple And Credible open AI to <span className='color-green'>heck Ai Generated</span> Text Plagiarism</>}
        para="See What Sets GPTSAFE apart"
        styling={true}
        styling2={false}
      />
      <EasySteps />
      <PlansPricing />
      <Numbers 
        heading={<>Numbers Are <span className='color-green'>Telling</span> Our Story</>} 
        para="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
        data={data}
      />
       <TextPlagirism 
        data2={data3}
        heading="Gptsafe's Services"
        para="An all-inclusive service offering AI-generated text detection, safeguarding against deceptive content. Elevate your content with the ability to transform AI text into a natural, human-like tone, ensuring authenticity and credibility."
        styling={false}
        styling2={true}
      />
      <OurCustomer />
    </>
  )
}
