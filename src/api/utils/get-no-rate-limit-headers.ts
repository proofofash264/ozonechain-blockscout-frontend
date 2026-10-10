// SPDX-License-Identifier: LicenseRef-Blockscout

import type { ApiName } from '../types';

import config from 'src/config';

export default function getNoRateLimitHeaders(apiName: ApiName): Record<string, string> {
  const apiKey = apiName === 'core' ? config.apis.core?.noRateLimitApiKey : undefined;

  if (!apiKey) {
    return {};
  }

  return { 'x-api-key': apiKey };
}
