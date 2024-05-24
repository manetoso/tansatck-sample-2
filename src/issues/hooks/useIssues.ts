import { useQuery } from '@tanstack/react-query';
import { githubAPI } from '../../api/githubApi';
import { Issue } from '../interfaces';

const fetchIssues = async (): Promise<Issue[]> => {
  const { data } = await githubAPI.get<Issue[]>('/issues');
  return data;
};

export const useIssues = () => {
  const issuesQuery = useQuery({
    queryKey: ['issues'],
    queryFn: fetchIssues,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60,
  });

  return issuesQuery;
};
