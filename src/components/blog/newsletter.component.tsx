import { FC, useState } from "react";
import { useFormik } from "formik";
import newsletterValidation from "@github20k/helpers/newsletter.validation";
import axios from "axios";
import { useReferrer } from "@github20k/helpers/use.referrer";
import {TrackingHelper} from "@github20k/helpers/tracking.helper";

const NewsletterComponent: FC<{ showText: boolean, hideBottom?: boolean, magnet?: boolean }> = (props) => {
  const { magnet, hideBottom, showText } = props;
  const referrer = useReferrer();
  const [submitted, setSubmitted] = useState(false);
  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      validationSchema: newsletterValidation,
      validateOnChange: true,
      initialValues: {
        email: "",
      },
      onSubmit: (values) => {
        localStorage.setItem('once', 'true');
        // @ts-ignore
        TrackingHelper.reddit('SignUp');
        axios.post("/api/newsletter", { ...values, referrer: referrer(), magnet });
        setSubmitted(true);
      },
    });
  return (
    <div
      className={
        showText
          ? "text-white max-w-sm flex flex-col lg:max-w-3xl w-full text-center overflow-hidden relative mb-12 md:mb-16"
          : "relative z-50"
      }
    >
      {showText ? (
        <strong>
          Do you want to get more tips and tricks? register to our newsletter
        </strong>
      ) : (
        <></>
      )}
      {submitted ? (
        <div className="mt-10">Thank you!</div>
      ) : (
        <form className="max-lg:flex-col flex mt-10" onSubmit={handleSubmit}>
          <input
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`flex-1 bg-[#182769]/70 border-2 border-white/10 rounded-2xl rounded-r-none max-lg:mb-3 max-lg:rounded-2xl outline-0 p-2 ${
              touched.email &&
              errors.email &&
              `border-solid border-2 border-rose-500`
            }`}
            type="text"
            name="email"
            placeholder="Email"
          />
          <button
            className="bg-purchase-btn flex min-w-[200px] items-center justify-center rounded-2xl rounded-l-none max-lg:rounded-2xl p-2"
            type="submit"
            placeholder="Register"
          >
            Subscribe
          </button>
        </form>
      )}
        <div className="text-sm rounded-xl px-3 mt-[10px] font-extrabold text-black bg-white/80 animate-pulse"><span className="text-rose-700">*</span> Add your email, a video of getting the first 1,000 stars will be sent to your email</div>
      {!hideBottom && (<div className="text-sm mt-[10px]">Or invite your friend to learn <a href="https://howtogetgithubstars.com" className="underline cursor-pointer" target="_blank">How to get GitHub stars</a></div>)}
    </div>
  );
};

export default NewsletterComponent;
