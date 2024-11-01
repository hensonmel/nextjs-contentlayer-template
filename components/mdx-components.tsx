import Image from "next/image"
import { useMDXComponent } from "next-contentlayer2/hooks"

const components = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Image: (props: any) => {
    const { alt, ...otherProps } = props

    return <Image alt={alt} {...otherProps} />
  },
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}
