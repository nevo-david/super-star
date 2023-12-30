import { makeid } from "@github20k/helpers/makeid";

export class TrackingHelper {
  static getUniqueId() {
    if (!process.env.G_TAG_ANALYTICS || typeof window === "undefined") {
      return "";
    }

    const load = localStorage.getItem("uid");
    if (load) {
      return load;
    }

    const newId = makeid(10);
    localStorage.setItem("uId", newId);

    return newId;
  }

  static gtag(name: string, value: any) {
    if (!process.env.G_TAG_ANALYTICS || typeof window === "undefined") {
      return;
    }

    // @ts-ignore
    window?.gtag("event", name, value);
  }

  static facebook(name: string, value: any) {
    if (!process.env.FACEBOOK_PIXEL || typeof window === "undefined") {
      return;
    }

    // @ts-ignore
    window?.fbq("track", name, value);
  }

  static twitter(name: string, value: any) {
    if (!process.env.TWITTER_PIXEL || typeof window === "undefined") {
      return;
    }

    // @ts-ignore
    window?.twq("event", name, value);
  }

  static segment(name: string, value: any) {
    if (!process.env.SEGMENT_ID || typeof window === "undefined") {
      return;
    }

    // @ts-ignore
    window?.analytics?.track(name, value);
  }

  static reddit(name: string, value?: any) {
    if (!process.env.REDDIT_PIXEL || typeof window === "undefined") {
      return;
    }

    // @ts-ignore
    window?.rdt('track', ...[name, value].filter(f => f));
  }
}
