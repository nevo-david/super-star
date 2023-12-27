import {createPortal} from "react-dom";
import {useMemo} from "react";
import NewsletterComponent from "@github20k/components/blog/newsletter.component";

const NewsletterInlineComponent = () => {
    return (
        <div className="bg-black/20 p-[50px] border-white border border-dashed my-[50px] shadow-2xl">
            <div className="text-xl font-bold">Do you like this blog post so far?</div>
            <div>Make sure you register to the newsletter to read the next one</div>
            <NewsletterComponent showText={false} />
        </div>
    );
}

export default function RegisterNewsletterAfter() {
    const registerNewsletter = useMemo(() => {
        return document.querySelector('#register-newsletter');
    }, []);

    if (!registerNewsletter) {
        return <></>;
    }

    return createPortal(<NewsletterInlineComponent />, registerNewsletter);
}