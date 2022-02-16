import NextHead from 'next/head';
import HeadProps from './Head.type';

const Head = ({ title }: HeadProps) => {
  return (
    <NextHead>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
    </NextHead>
  )
}

export default Head;