import { Image } from "@components/Image";
import bannerDesktop from "@assets/images/gt.jpg";
import bannerMobile from "@assets/images/sm.jpg";
import bannerTablet from "@assets/images/md.jpg";

export const HomePage = () => {
  return (
    <>
      <main className=" w-full h-screen">
        <Image
          altText="Banner"
          image={bannerDesktop}
          customStyles="w-screen h-full object-cover"
          images={`${bannerMobile} 640w, ${bannerTablet} 768w, ${bannerDesktop} 1280w`}
        />
      </main>
    </>
  );
};
