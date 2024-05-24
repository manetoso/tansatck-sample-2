import { useQuery } from '@tanstack/react-query';
import { githubAPI } from '../../api/githubApi';
import { Issue } from '../interfaces';
import { sleep } from '../../helpers/sleep';

const fetchIssueInfo = async (issueNumber: number): Promise<Issue> => {
  await sleep(2000);
  const { data } = await githubAPI.get<Issue>(`/issues/${issueNumber}`);
  return data;
};

const fetchIssueComments = async (issueNumber: number): Promise<Issue[]> => {
  await sleep(2000);
  const { data } = await githubAPI.get<Issue[]>(
    `/issues/${issueNumber}/comments`
  );
  return data;
};

export const useIssue = (issueNumber: number) => {
  const issueQuery = useQuery({
    queryKey: ['issue', issueNumber],
    queryFn: () => fetchIssueInfo(issueNumber),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60,
  });

  const commentsQuery = useQuery({
    queryKey: ['issue', issueNumber, 'comments'],
    queryFn: () => fetchIssueComments(issueQuery.data!.number),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60,
    enabled: !!issueQuery.data,
  });

  return {
    issueQuery,
    commentsQuery,
  };
};
