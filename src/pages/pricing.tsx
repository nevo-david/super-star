import { getGithubStars } from "@github20k/helpers/get.github.stars";
import PricingPage from "@github20k/components/pricing/pricing";

export default function Pricing(props: { stargazers_count: number }) {
  return <PricingPage stars={props.stargazers_count} />;
}

export async function getStaticProps() {
  return {
    props: {
      ...(await getGithubStars()),
    }, // will be passed to the page component as props
    revalidate: 3600
  };
}
