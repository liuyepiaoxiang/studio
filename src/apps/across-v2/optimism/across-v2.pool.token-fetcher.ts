import { Inject } from '@nestjs/common';

import { IAppToolkit, APP_TOOLKIT } from '~app-toolkit/app-toolkit.interface';
import { Register } from '~app-toolkit/decorators';
import { PositionFetcher } from '~position/position-fetcher.interface';
import { AppTokenPosition } from '~position/position.interface';
import { Network, NETWORK_IDS } from '~types/network.interface';

import { ACROSS_V2_DEFINITION } from '../across-v2.definition';
import { ACROSS_V2_OPT_POOL_DEFINITIONS } from './across.pool.definitions';
import { AcrossPoolTokenHelper } from '../helpers/across.v2.pool.token-helper';

const appId = ACROSS_V2_DEFINITION.id;
const groupId = ACROSS_V2_DEFINITION.groups.pool.id;
const network = Network.OPTIMISM_MAINNET;


@Register.TokenPositionFetcher({ appId, groupId, network, options: { includeInTvl: true } })
export class OptimismAcrossV2PoolTokenFetcher implements PositionFetcher<AppTokenPosition> {
  constructor(
    @Inject(AcrossPoolTokenHelper) private readonly acrossPoolTokenHelper: AcrossPoolTokenHelper,
    @Inject(APP_TOOLKIT) private readonly appToolkit: IAppToolkit,
  ) {}

  async getPositions() {
    const definition = ACROSS_V2_OPT_POOL_DEFINITIONS;
    return this.acrossPoolTokenHelper.getPosition({network,definition});
  }
} 