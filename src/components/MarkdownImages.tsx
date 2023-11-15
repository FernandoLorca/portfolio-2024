interface BlogImagesProps {
  src: string
  alt: string
}

export default function MarkdownImages({ src, alt }: BlogImagesProps) {
  return (
    <div className="flex justify-center items-center py-10">
      <img
        src={src}
        alt={alt}
        className="rounded-lg max-w-[20rem] max-h-[20rem]"
      />
    </div>
  )
}
