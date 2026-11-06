// SPDX-License-Identifier: LicenseRef-Blockscout

// SPDX-License-Identifier: LicenseRef-Blockscout

import { useQuery } from '@tanstack/react-query';

import useFetch from 'src/api/hooks/useFetch';

export type OzoneBalancesTotalsData = {
  circulatingSupply: string;
  protocolTvlBalance: string;
  managementTvlBalance: string;
  promotionAndOffersTvlBalance: string;
  userTvlBalance: string;
  validatorBondedTokens: string;
  validatorNotBondedTokens: string;
  totalSupply: string;
  addressCount: number;
  lastCalculated: string;
  lastSynced: string;
  source: string;
};

export type OzoneBalancesTotalsResponse = {
  success: boolean;
  message: string;
  data: OzoneBalancesTotalsData;
  timestamp: string;
};

const OZONE_BALANCES_TOTALS_URL =
  'https://chain-metrics-backend.ozonescan.com/api/v1/addresses/balances/totals';

export default function useOzoneBalancesTotalsQuery() {
  const fetch = useFetch();

  return useQuery<OzoneBalancesTotalsResponse>({
    queryKey: [ 'ozone_balances_totals' ],
    queryFn: async() =>
      fetch(OZONE_BALANCES_TOTALS_URL) as Promise<OzoneBalancesTotalsResponse>,
    placeholderData: {
      success: true,
      message: 'Total balances retrieved successfully',
      data: {
        circulatingSupply: '-',
        protocolTvlBalance: '-',
        managementTvlBalance: '-',
        promotionAndOffersTvlBalance: '-',
        userTvlBalance: '-',
        validatorBondedTokens: '-',
        validatorNotBondedTokens: '-',
        totalSupply: '-',
        addressCount: 0,
        lastCalculated: '',
        lastSynced: '',
        source: '',
      },
      timestamp: '',
    },
    refetchOnMount: false,
  });
}
