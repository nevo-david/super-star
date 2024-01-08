import dayjs from "dayjs";
import RSS from "rss";

export async function GET() {
    const {data} = (await (await fetch(`https://api.beehiiv.com/v2/publications/${process.env.BLOG_ID}/posts?page=1&limit=100&status=confirmed`, {
        next: {
            revalidate: 3600
        },
        headers: {
            Authorization: `Bearer ${process.env.BLOG_TOKEN}`
        }
    })).json());

    const filterIt = data.filter((f: any) => dayjs.unix(f.publish_date).isBefore(dayjs()) && f.platform !== 'email');
    const rss = new RSS({
        title: 'Gitroom',
        description: 'Grow your open-source repository',
        feed_url: 'https://gitroom.com/feed.xml',
        site_url: 'https://gitroom.com/',
        image_url: 'https://gitroom.com/og-image.png',
        managingEditor: 'Nevo David',
        webMaster: 'Nevo David',
        language: 'en',
        categories: ['Open Source', 'GitHub', 'Gitroom'],
        pubDate: dayjs().format('YYYY-MM-DD'),
        ttl: 60,
    });

    filterIt.forEach((f: any) => {
        rss.item({
            title: f.title,
            description: f.subtitle,
            url: `https://gitroom.com/blog/${f.slug}`,
            categories: ['Open Source', 'GitHub', 'Gitroom'],
            date: dayjs.unix(f.publish_date).format('YYYY-MM-DD'),
        });
    });

    return new Response(rss.xml(), {
        headers: {
            'content-type': 'application/xml'
        }
    })
}