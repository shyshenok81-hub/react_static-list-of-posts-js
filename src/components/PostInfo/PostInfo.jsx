import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

export const PostInfo = ({ post, comments, users }) => {
  const { id, title, body, userId } = post;

  const user = users.find(u => u.id === userId);

  const postComments = comments.filter(comment => comment.postId === id);

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by '}
          <UserInfo user={user} />
        </p>
      </div>

      <p className="PostInfo__body">{body}</p>

      <hr />

      {postComments.length === 0 ? (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      ) : (
        <CommentList comments={postComments} />
      )}
    </div>
  );
};
