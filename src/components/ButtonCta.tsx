interface ButtonCtaProps {
  text: string
  href: string
  iconImg: string
  iconImgAlt: string
}

export default function ButtonCta({
  text,
  href,
  iconImg,
  iconImgAlt,
}: ButtonCtaProps) {
  return (
    <div className="inline-block bg-[#D13667] px-3 py-2 my-5 rounded-lg font-bold text-sm hover:opacity-75 transition-all duration-200 ease-in-out">
      <a
        href={href}
        className="flex gap-2"
        target="_blank"
      >
        <img
          src={iconImg}
          alt={iconImgAlt}
          className="w-5 h-5 fill-white"
        />
        {text}
      </a>
    </div>
  )
}
