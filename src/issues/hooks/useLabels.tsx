import { useQuery } from '@tanstack/react-query';
import { githubAPI } from '../../api/githubApi';
import { Label } from '../interfaces/Labels';
import { sleep } from '../../helpers/sleep';

const fetchLabels = async (): Promise<Label[]> => {
  // await sleep(2000);
  const { data } = await githubAPI.get<Label[]>('/labels');
  return data;
};

export const useLabels = () => {
  const labelsQuery = useQuery({
    queryKey: ['labels'],
    queryFn: fetchLabels,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60,
    placeholderData: [
      {
        id: 69105383,
        node_id: 'MDU6TGFiZWw2OTEwNTM4Mw==',
        url: 'https://api.github.com/repos/facebook/react/labels/Browser:%20IE',
        name: 'Browser: IE',
        color: 'c7def8',
        default: false,
        description: null,
      },
      {
        id: 196858374,
        node_id: 'MDU6TGFiZWwxOTY4NTgzNzQ=',
        url: 'https://api.github.com/repos/facebook/react/labels/CLA%20Signed',
        name: 'CLA Signed',
        color: 'e7e7e7',
        default: false,
        description: null,
      },
    ],
  });

  return labelsQuery;
};
