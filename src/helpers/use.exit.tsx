import {useState, useEffect} from 'react';
import NewsletterComponent from "@github20k/components/blog/newsletter.component";

function useExit() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseLeave = (event: any) => {
            if (event.clientY <= 0 && !localStorage.getItem('once')) {
                localStorage.setItem('once', 'true');
                setIsVisible(true);
            }
        };

        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return [isVisible, setIsVisible];
}

const ExitComponent = () => {
    return <></>;
    // const [exit, setExit] = useExit();
    // if (!exit) {
    //     return <></>
    // }
    // return (
    //     <div className="fixed w-full h-full top-0 left-0 z-[100] bg-brand-main/70">
    //         <div className="w-full max-w-[1000px] mx-auto mt-[120px] relative">
    //             <div className="w-[30px] h-[30px] bg-white absolute right-[-15px] top-[-15px] z-[100] rounded-full text-black flex justify-center items-center cursor-pointer border-2 border-[#e0ae91]" onClick={() => {
    //                 // @ts-ignore
    //                 setExit(false)
    //             }}>X</div>
    //             <div className="rounded-xl flex flex-col overflow-hidden border border-[#e0ae91] mb-[30px]">
    //                 <div className="p-[20px] bg-[#06021f]/90 border-t border-t-[#e0ae91] relative z-20">
    //                     <strong className="leading-[180%] text-2xl">Before you go, add your email address and<br />I will send you a video of getting your first 1000 stars.</strong>
    //                     <NewsletterComponent magnet={true} showText={false} hideBottom={true} />
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );
}

export default ExitComponent;