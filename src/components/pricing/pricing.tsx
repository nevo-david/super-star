import Accordion from '@github20k/components/Accordion';
import GradientText from '@github20k/components/common/GradientText';
import SwitchButton from '@github20k/components/common/SwitchButton';
import PricingPlan from '@github20k/components/pricing/Plan';
import {useState} from "react";
import {NextSeo} from "next-seo";
import NavigationComponent from "@github20k/components/home/navigation.component";

const PricePlans =  [
  {
    title: 'Free',
    price: '$0 / mo',
    description: 'Perfect for testing and small projects',
    contact: false,
    selfhosted: false,
    content: [
      { title: '3 channels' },
      { title: '30 posts per month' },
      { title: 'Analytics' },
      { title: 'GitHub trending monitor' }
    ],
    defaultAction: true,
    actionTitle: 'Get Started'
  },
  {
    title: 'Basic',
    price: '$10 per channel / mo',
    description: 'Perfect for mid size projects',
    contact: false,
    selfhosted: false,
    content: [
      { title: '400 posts per month' },
      { title: 'Analytics' },
      { title: 'GitHub trending monitor' },
      { title: 'Import content from channels (coming soon)' },
      { title: 'AI auto-complete (coming soon)' }
    ],
    defaultAction: false,
    actionTitle: 'Get Started'
  },
  {
    title: 'Pro',
    price: '$15 per channel / mo',
    description: 'Perfect for large projects',
    contact: false,
    selfhosted: false,
    content: [
      { title: 'Unlimited posts per month' },
      { title: 'Unlimited team members' },
      { title: 'Analytics' },
      { title: 'GitHub trending monitor' },
      { title: 'Import content from channels (coming soon)' },
      { title: 'Community features (coming soon)' },
      { title: 'AI auto-complete (coming soon)' },
      { title: 'Become featured by Gitroom (coming soon)' },
    ],
    defaultAction: false,
    actionTitle: 'Get Started'
  }
];

const PricePlans1 = [
  {
    title: 'Self Hosted',
    description: 'Self hosted version of Gitroom',
    price: '$0',
    actionTitle: 'Get Started Guide',
    contact: false,
    selfhosted: true,
    content: [
      { title: 'Unlimited posts per month' },
      { title: 'Unlimited team members' },
      { title: 'Analytics' },
      { title: 'GitHub trending monitor' },
      { title: 'Import content from channels (coming soon)' },
      { title: 'AI auto-complete (coming soon)' },
    ],
    defaultAction: true,
  },
];

const Faqs = [
{
    title: 'What are channels?',
    description: `Gitroom allows you to schedule your posts between different channels.
A channel is a publishing platform where you can schedule your posts.
For example, you can schedule your posts on Twitter, Linkedin, DEV and Hashnode`,
  },
  {
    title: 'What are team members?',
    description: `If you have a team with multiple members, you can invite them to your workspace to collaborate on your posts and add their personal channels`,
  },
  {
    title: 'What do I need to import content from channels?',
    description: `Gitroom can help you schedule your launch, but you might write your content on other platforms such as Notion, Google Docs, etc.
You may experience problems copy your content with different formats or uploaded images.
That's why we have a feature to import your content from different platforms.
`,
  },
  {
    title: 'What can I find in the community features?',
    description: `Gitroom is all about the community, You can enjoy features such as: exchanging posts with other members,
exchanging links as part of the "Gitroom Friends" and buy social media services from other members`,
  },
  {
    title: 'What is AI auto-complete?',
    description: `We automate ChatGPT to help you write your social posts based on the articles you schedule`,
  },
  {
    title: 'Why would I want to become featured by Gitroom?',
    description: `Gitroom will feature your posts on our social media platforms and our website to help you get more exposure and followers`,
  },
  {
    title: 'Can I get everything for free?',
    description: `Gitroom is 100% open-source, you can deploy it on your own server and use it for free.
However, you might not be able to enjoy the community features Click <a class="underline font-bold" target="_blank" href="https://github.com/gitroomhq/gitroom">here for the open-source</a>
`,
  },
];

export default function PricingPage({stars}: {stars: number}) {
  const [status, setStatus] = useState(true);
  return (
      <>
          <NextSeo
            title={process.env.COURSE_NAME}
            description="Gitroom pricing"
            additionalLinkTags={[{
                rel: 'alternate',
                type: 'application/rss+xml',
                href: 'https://gitroom.com/feed.xml',
            }]}
            canonical={process.env.COURSE_URL}
            openGraph={{
                url: process.env.COURSE_URL, title: process.env.COURSE_NAME, description: "Gitroom pricing", images: [{
                    url: process.env.COURSE_URL + '/og-image.png', width: 1200, height: 630, alt: process.env.COURSE_NAME, type: "image/png",
                }], siteName: process.env.COURSE_NAME,
            }}
            twitter={{
                handle: "@nevodavid", site: "@nevodavid", cardType: "summary_large_image",
            }}
        />
        <NavigationComponent stars={stars} />
        <div className="bg-about -mt-6 pt-8 pb-6">
          <section className='bg-no-repeat mx-auto mt-[40px] flex w-fit flex-col items-center px-5 md:mt-[100px]'>
              <GradientText className='max-w-[950px] bg-gradient-to-t text-center text-[35px] font-[700] leading-[39px] md:text-[71px] md:leading-[79px]'>
                {status ? (<>
                      Flexible pricing
                      <br className='md:hidden'/> for companies
                      <br className='md:hidden'/> and developers
                    </>) : (<>
                      Find a plan
                      <br/>
                      that works for you
                    </>)}
              </GradientText>
              <SwitchButton
                  text1='Cloud'
                  text2='Self-hosted'
                  className='mt-[60px]'
                  value={status}
                  onChange={(v) => setStatus(v)}
              />
            <div className='mx-auto mt-[60px] grid w-full grid-cols-1 items-center justify-center justify-items-center gap-x-[14px] gap-y-6 md:mx-10 md:grid-cols-2 xl:grid-cols-3'>
              {(status ? PricePlans : PricePlans1).map((plan, index) => (
                  <PricingPlan
                      title={plan.title}
                      description={plan.description}
                      selfhosted={plan.selfhosted}
                      contact={plan.contact}
                      price={plan.price}
                      actionTitle={plan.actionTitle}
                      content={plan.content}
                      defaultAction={plan.defaultAction}
                      key={index}
                      className={status ? 'col-span-1' : 'col-span-4'}
                  />
              ))}
            </div>
            <div className='mt-[100px] w-full max-w-[1000px] md:mt-[170px]'>
              <GradientText className='text-center text-[35px] font-[600] leading-[44px] md:text-[44px] md:leading-[57.2px]'>
                Frequently Asked Questions
              </GradientText>
              <div className='mt-[50px] flex flex-col gap-4'>
                {Faqs && Faqs.map((item, index) => (<Accordion
                        key={index}
                        title={item.title}
                        description={item.description}
                    />))}
              </div>
            </div>
          </section>
        </div>
      </>
  );
};