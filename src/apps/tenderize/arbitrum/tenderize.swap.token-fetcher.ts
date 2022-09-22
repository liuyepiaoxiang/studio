import { PositionTemplate } from '~app-toolkit/decorators/position-template.decorator';

import { SwapTokenFetcher } from '../common/tenderize.swap.token-fetcher';

@PositionTemplate()
export class ArbitrumTenderizeSwapTokenFetcher extends SwapTokenFetcher {
  groupLabel = 'Swap';
}
