import { FunctionalComponent } from 'preact';
import { definePage } from 'microsite/page';
import { Head, seo } from 'microsite/head';
import GlobalState from '@/components/GlobalState';

interface IndexProps {}

const Index: FunctionalComponent<IndexProps> = () => {
  return (
    <>
      <Head>
        <seo.title>Global state repro</seo.title>
      </Head>

      <main>
        <GlobalState />
      </main>
    </>
  );
};

export default definePage(Index);
