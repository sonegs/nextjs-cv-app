import Head from 'next/head';

const HeadComponent: React.FC = () => {
    return (
        <Head>
        <title>Miguel Cobo Web</title>
        <meta name="description" content="This webapp is used to show the Miguel Cobo story: experience, training, hobbies and more" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    )
}

export default HeadComponent;