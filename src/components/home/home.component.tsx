import {FC, useEffect, useMemo} from "react";
import HeroComponent from "@github20k/components/home/hero.component";
import AboutComponent from "@github20k/components/home/about.component";
import TestimonialsComponent from "@github20k/components/home/testimonials.component";
import StarsCourseComponent from "@github20k/components/home/stars.course.component";
import RecordingWithCompaniesComponent from "@github20k/components/home/recording.with.companies.component";
import FooterComponent from "@github20k/components/home/footer.component";
import {NextSeo} from "next-seo";
import {mainPageDetails} from "@github20k/helpers/main.page.details";
import {stripHtml} from "string-strip-html";
import ReactDomServer from "react-dom/server";
import {SmartLookLazy} from "@github20k/helpers/smartlook.lazy.component";
import NavigationComponent from "@github20k/components/home/navigation.component";

const HomeComponent: FC<{ stargazers_count: number }> = (props) => {

    const {stargazers_count} = props;
    const description = useMemo(() => {
        return stripHtml(ReactDomServer.renderToString(mainPageDetails.header.description), {
            skipHtmlDecoding: true,
        }).result;
    }, [mainPageDetails.header.description]);

    return (<>
            <NextSeo
                title={process.env.COURSE_NAME}
                description={description}
                canonical={process.env.COURSE_URL}
                openGraph={{
                    url: process.env.COURSE_URL, title: process.env.COURSE_NAME, description: description, images: [{
                        url: process.env.COURSE_URL + '/og-image.png', width: 1200, height: 630, alt: process.env.COURSE_NAME, type: "image/png",
                    }], siteName: process.env.COURSE_NAME,
                }}
                twitter={{
                    handle: "@nevodavid", site: "@nevodavid", cardType: "summary_large_image",
                }}
            />
            <SmartLookLazy />
            <NavigationComponent stars={0} />
            <main>
                <HeroComponent/>
                <div className="relative bg-about-bg bg-cover lg:bg-contain bg-center bg-no-repeat">
                    <AboutComponent/>
                    <TestimonialsComponent/>
                </div>
                <StarsCourseComponent/>
                <RecordingWithCompaniesComponent/>
                {/*<PersonalMeetingComponent />*/}
                {/*<TechnicalContentComponent />*/}
                {/*<GetItNowComponent />*/}
                {/*<FaqComponent />*/}
            </main>
            <FooterComponent hidePurchase={true} newsletter={true}/>
        </>);
};

export default HomeComponent;
