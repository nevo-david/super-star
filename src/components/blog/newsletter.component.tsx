import { FC, useState } from "react";
import { useFormik } from "formik";
import newsletterValidation from "@github20k/helpers/newsletter.validation";
import axios from "axios";
import { useReferrer } from "@github20k/helpers/use.referrer";

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
        if (window?.gtag) {
          // @ts-ignore
          window.gtag("event", "conversion");
        }
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
        <div className="text-lg mt-[10px] font-extrabold"><span className="text-rose-700">*</span> Add your email and I will send you a video of getting your first 1000 stars.</div>
      {!hideBottom && (<div className="text-sm mt-[10px]">Or invite your friend to learn <a href="https://howtogetgithubstars.com" className="underline cursor-pointer" target="_blank">How to get GitHub stars</a></div>)}
    </div>
  );
};

export default NewsletterComponent;
