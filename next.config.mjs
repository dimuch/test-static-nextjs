// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
// };
//
// export default nextConfig;


  import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
};

export default withNextIntl(nextConfig);
