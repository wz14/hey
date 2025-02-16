import Markup from '@components/Shared/Markup';
import UserPreview from '@components/Shared/UserPreview';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';
import type { NewCommentNotification } from '@hey/lens';
import type { MessageDescriptor } from '@hey/types/misc';
import { formatTime, getTimeFromNow } from '@lib/formatTime';
import { defineMessage } from '@lingui/macro';
import { Trans } from '@lingui/react';
import Link from 'next/link';
import type { FC } from 'react';
import { memo } from 'react';

import { NotificationProfileAvatar, NotificationProfileName } from '../Profile';

const messages: Record<string, MessageDescriptor> = {
  comment: defineMessage({
    id: '<0><1/> commented on your <2>comment</2></0>'
  }),
  mirror: defineMessage({
    id: '<0><1/> commented on your <2>mirror</2></0>'
  }),
  post: defineMessage({
    id: '<0><1/> commented on your <2>post</2></0>'
  })
};

const defaultMessage = (typeName: string): string => {
  return '<0><1/> commented on your <2>' + typeName + '</2></0>';
};

interface CommentNotificationProps {
  notification: NewCommentNotification;
}

const CommentNotification: FC<CommentNotificationProps> = ({
  notification
}) => {
  const typeName =
    notification?.comment?.commentOn?.__typename?.toLowerCase() || '';
  return (
    <div className="flex items-start justify-between">
      <div className="flex-1 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <ChatBubbleLeftRightIcon className="h-6 w-6 text-blue-500/70" />
            <UserPreview profile={notification?.profile}>
              <NotificationProfileAvatar profile={notification?.profile} />
            </UserPreview>
          </div>
          <div
            className="min-w-fit text-[12px] text-gray-400"
            title={formatTime(notification?.createdAt)}
          >
            {getTimeFromNow(notification?.createdAt)}
          </div>
        </div>
        <div className="ml-9">
          <Trans
            id={messages[typeName]?.id || defaultMessage(typeName)}
            components={[
              <span className="text-gray-600 dark:text-gray-400" key="" />,
              <NotificationProfileName
                profile={notification?.profile}
                key=""
              />,
              <Link
                href={`/posts/${notification?.comment?.commentOn?.id}`}
                className="font-bold"
                key=""
              />
            ]}
          />
          <Link
            href={`/posts/${notification?.comment.id}`}
            className="lt-text-gray-500 linkify mt-2 line-clamp-2"
          >
            <Markup>{notification?.comment?.metadata?.content}</Markup>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default memo(CommentNotification);
