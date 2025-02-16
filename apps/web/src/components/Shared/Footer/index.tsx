import { APP_NAME } from '@hey/data/constants';
import { MISCELLANEOUS } from '@hey/data/tracking';
import { Leafwatch } from '@lib/leafwatch';
import { Trans } from '@lingui/macro';
import Link from 'next/link';
import type { FC } from 'react';
import { usePreferencesStore } from 'src/store/preferences';
import urlcat from 'urlcat';

import Locale from './Locale';

const Footer: FC = () => {
  const staffMode = usePreferencesStore((state) => state.staffMode);

  return (
    <footer
      className={`sticky text-sm leading-7 ${staffMode ? 'top-28' : 'top-20'}`}
      data-testid="footer"
    >
      <div className={'mt-4 flex flex-wrap gap-x-[12px] px-3 lg:px-0'}>
        <span className="lt-text-gray-500 font-bold">
          &copy; {new Date().getFullYear()} {APP_NAME}.xyz
        </span>
        <Link href="/terms">
          <Trans>Terms</Trans>
        </Link>
        <Link href="/privacy">
          <Trans>Privacy</Trans>
        </Link>
        <Link
          href="https://hey.xyz/discord"
          target="_blank"
          rel="noreferrer noopener"
          onClick={() => Leafwatch.track(MISCELLANEOUS.FOOTER.OPEN_DISCORD)}
        >
          <Trans>Discord</Trans>
        </Link>
        <Link
          href="https://hey.xyz/donate"
          target="_blank"
          rel="noreferrer noopener"
          onClick={() => Leafwatch.track(MISCELLANEOUS.FOOTER.OPEN_DONATE)}
        >
          <Trans>Donate</Trans>
        </Link>
        <Link
          href="https://status.hey.xyz"
          target="_blank"
          rel="noreferrer noopener"
          onClick={() => Leafwatch.track(MISCELLANEOUS.FOOTER.OPEN_STATUS)}
        >
          <Trans>Status</Trans>
        </Link>
        <Link
          href="https://feedback.hey.xyz"
          target="_blank"
          rel="noreferrer noopener"
          onClick={() => Leafwatch.track(MISCELLANEOUS.FOOTER.OPEN_FEEDBACK)}
        >
          <Trans>Feedback</Trans>
        </Link>
        <Link href="/thanks">
          <Trans>Thanks</Trans>
        </Link>
        <Link
          href="https://github.com/heyxyz/hey"
          target="_blank"
          rel="noreferrer noopener"
          onClick={() => Leafwatch.track(MISCELLANEOUS.FOOTER.OPEN_GITHUB)}
        >
          <Trans>GitHub</Trans>
        </Link>
        <Link
          href="https://translate.hey.xyz"
          target="_blank"
          rel="noreferrer noopener"
          onClick={() => Leafwatch.track(MISCELLANEOUS.FOOTER.OPEN_TRANSLATE)}
        >
          <Trans>Translate</Trans>
        </Link>
      </div>
      <div className="mt-2 flex space-x-4">
        <Locale />
        <Link
          className="hover:font-bold"
          href={urlcat('https://vercel.com', {
            utm_source: APP_NAME,
            utm_campaign: 'oss'
          })}
          target="_blank"
          rel="noreferrer noopener"
          onClick={() => Leafwatch.track(MISCELLANEOUS.FOOTER.OPEN_VERCEL)}
        >
          <Trans>▲ Powered by Vercel</Trans>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
