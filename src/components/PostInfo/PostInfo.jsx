import { UserInfo } from '../UserInfo/UserInfo';
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
        <div className="CommentList">
          {postComments.map(comment => (
            <div key={comment.id} className="CommentInfo">
              <div className="CommentInfo__title">
                <strong className="CommentInfo__name">{comment.name}</strong>

                {' by '}

                <a
                  className="CommentInfo__email"
                  href={`mailto:${comment.email}`}
                >
                  {comment.email}
                </a>
              </div>

              <div className="CommentInfo__body">{comment.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
