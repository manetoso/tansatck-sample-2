import { FiInfo, FiMessageSquare, FiCheckCircle } from 'react-icons/fi';
import { Issue } from '../interfaces';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props extends Issue {}

const daysSince = (date: Date) => {
  const now = new Date();
  const created = new Date(date);
  const diff = now.getTime() - created.getTime();

  return Math.floor(diff / (1000 * 60 * 60 * 24));
};

export const IssueItem: FC<Props> = ({
  title,
  user,
  comments,
  created_at,
  number,
  state,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className='card mb-2 issue'
      onClick={() => navigate(`/issues/issue/${number}`)}>
      <div className='card-body d-flex align-items-center'>
        {state === 'open' ? (
          <FiCheckCircle size={30} color='green' />
        ) : (
          <FiInfo size={30} color='red' />
        )}

        <div className='d-flex flex-column flex-fill px-2'>
          <span>{title}</span>
          <span className='issue-subinfo'>
            #{number} opened {daysSince(created_at)} by{' '}
            <span className='fw-bold'>{user.login}</span>
          </span>
        </div>

        <div className='d-flex align-items-center'>
          <img src={user.avatar_url} alt='User Avatar' className='avatar' />
          <span className='px-2'>{comments}</span>
          <FiMessageSquare />
        </div>
      </div>
    </div>
  );
};
