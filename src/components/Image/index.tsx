import type { TImageContainer } from "@typess/containers/imageContainer.type";

export const Image = ({
  customStyles,
  image,
  altText,
  images,
}: TImageContainer) => {
  return (
    <>
      <img
        src={image}
        alt={altText}
        srcSet={images}
        className={`${customStyles}`}
        sizes="(min-width: 640px) 640px, (min-width: 768px) 768px, 1280px"
      />
    </>
  );
};
