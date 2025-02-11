/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type { SpoolVault, SpoolVaultInterface } from '../SpoolVault';

const _abi = [
  {
    inputs: [
      {
        internalType: 'contract ISpool',
        name: '_spool',
        type: 'address',
      },
      {
        internalType: 'contract IController',
        name: '_controller',
        type: 'address',
      },
      {
        internalType: 'contract IFastWithdraw',
        name: '_fastWithdraw',
        type: 'address',
      },
      {
        internalType: 'contract IFeeHandler',
        name: '_feeHandler',
        type: 'address',
      },
      {
        internalType: 'contract ISpoolOwner',
        name: '_spoolOwner',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'member',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'claimAmount',
        type: 'uint256',
      },
    ],
    name: 'Claimed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'member',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'Deposit',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint16',
        name: 'fee',
        type: 'uint16',
      },
    ],
    name: 'LowerVaultFee',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'contract IERC20',
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint32',
        name: 'periodFinish',
        type: 'uint32',
      },
    ],
    name: 'PeriodFinishUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint24',
        name: 'index',
        type: 'uint24',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newProportions',
        type: 'uint256',
      },
    ],
    name: 'Reallocate',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'contract IERC20',
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'duration',
        type: 'uint256',
      },
    ],
    name: 'RewardAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'contract IERC20',
        name: 'token',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'leftover',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'duration',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint32',
        name: 'periodFinish',
        type: 'uint32',
      },
    ],
    name: 'RewardExtended',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'contract IERC20',
        name: 'token',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'reward',
        type: 'uint256',
      },
    ],
    name: 'RewardPaid',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'contract IERC20',
        name: 'token',
        type: 'address',
      },
    ],
    name: 'RewardRemoved',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'i',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'strategy',
        type: 'address',
      },
    ],
    name: 'StrategyRemoved',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'TransferVaultOwner',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
    ],
    name: 'UpdateName',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'member',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'globalIndex',
        type: 'uint256',
      },
    ],
    name: 'UserRedeem',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'globalIndex',
        type: 'uint256',
      },
    ],
    name: 'VaultRedeem',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'member',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'index',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'shares',
        type: 'uint256',
      },
    ],
    name: 'Withdraw',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'member',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'shares',
        type: 'uint256',
      },
    ],
    name: 'WithdrawFast',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'contract IERC20',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'uint32',
        name: 'rewardsDuration',
        type: 'uint32',
      },
      {
        internalType: 'uint256',
        name: 'reward',
        type: 'uint256',
      },
    ],
    name: 'addToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bool',
        name: 'doRedeemVault',
        type: 'bool',
      },
      {
        internalType: 'address[]',
        name: 'vaultStrategies',
        type: 'address[]',
      },
      {
        internalType: 'bool',
        name: 'doRedeemUser',
        type: 'bool',
      },
    ],
    name: 'claim',
    outputs: [
      {
        internalType: 'uint128',
        name: 'claimAmount',
        type: 'uint128',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IERC20',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'claimFinishedRewards',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'controller',
    outputs: [
      {
        internalType: 'contract IController',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'vaultStrategies',
        type: 'address[]',
      },
      {
        internalType: 'uint128',
        name: 'amount',
        type: 'uint128',
      },
      {
        internalType: 'bool',
        name: 'transferFromVault',
        type: 'bool',
      },
    ],
    name: 'deposit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IERC20',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'earned',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IERC20',
        name: 'token',
        type: 'address',
      },
    ],
    name: 'forceRemoveReward',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'getActiveRewards',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IERC20',
        name: 'token',
        type: 'address',
      },
    ],
    name: 'getRewardForDuration',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IERC20[]',
        name: 'tokens',
        type: 'address[]',
      },
    ],
    name: 'getRewards',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'vaultStrategies',
        type: 'address[]',
      },
    ],
    name: 'getUpdatedUser',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'vaultStrategies',
        type: 'address[]',
      },
    ],
    name: 'getUpdatedVault',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'address',
            name: 'owner',
            type: 'address',
          },
          {
            internalType: 'uint16',
            name: 'fee',
            type: 'uint16',
          },
          {
            internalType: 'address[]',
            name: 'strategies',
            type: 'address[]',
          },
          {
            internalType: 'uint256[]',
            name: 'proportions',
            type: 'uint256[]',
          },
        ],
        internalType: 'struct VaultInitializable',
        name: 'vaultInitializable',
        type: 'tuple',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'lastIndexInteracted',
    outputs: [
      {
        internalType: 'uint128',
        name: 'index1',
        type: 'uint128',
      },
      {
        internalType: 'uint128',
        name: 'index2',
        type: 'uint128',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IERC20',
        name: 'token',
        type: 'address',
      },
    ],
    name: 'lastTimeRewardApplicable',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint16',
        name: '_vaultFee',
        type: 'uint16',
      },
    ],
    name: 'lowerVaultFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IERC20',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'reward',
        type: 'uint256',
      },
      {
        internalType: 'uint32',
        name: 'rewardsDuration',
        type: 'uint32',
      },
    ],
    name: 'notifyRewardAmount',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'vaultStrategies',
        type: 'address[]',
      },
      {
        internalType: 'uint256',
        name: 'i',
        type: 'uint256',
      },
    ],
    name: 'notifyStrategyRemoved',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'profit',
        type: 'uint256',
      },
    ],
    name: 'payFees',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'proportions',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'vaultStrategies',
        type: 'address[]',
      },
      {
        internalType: 'uint256',
        name: 'newVaultProportions',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'finishedIndex',
        type: 'uint256',
      },
      {
        internalType: 'uint24',
        name: 'activeIndex',
        type: 'uint24',
      },
    ],
    name: 'reallocate',
    outputs: [
      {
        internalType: 'uint256[]',
        name: 'withdrawProportionsArray',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256',
        name: 'newDepositProportions',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'reallocationIndex',
    outputs: [
      {
        internalType: 'uint24',
        name: '',
        type: 'uint24',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'redeemUser',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'vaultStrategies',
        type: 'address[]',
      },
    ],
    name: 'redeemVaultAndUser',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'vaultStrategies',
        type: 'address[]',
      },
    ],
    name: 'redeemVaultStrategies',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'redeems',
    outputs: [
      {
        internalType: 'uint128',
        name: 'depositShares',
        type: 'uint128',
      },
      {
        internalType: 'uint128',
        name: 'withdrawnAmount',
        type: 'uint128',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IERC20',
        name: 'token',
        type: 'address',
      },
    ],
    name: 'removeReward',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IERC20',
        name: '',
        type: 'address',
      },
    ],
    name: 'rewardConfiguration',
    outputs: [
      {
        internalType: 'uint32',
        name: 'rewardsDuration',
        type: 'uint32',
      },
      {
        internalType: 'uint32',
        name: 'periodFinish',
        type: 'uint32',
      },
      {
        internalType: 'uint192',
        name: 'rewardRate',
        type: 'uint192',
      },
      {
        internalType: 'uint32',
        name: 'lastUpdateTime',
        type: 'uint32',
      },
      {
        internalType: 'uint224',
        name: 'rewardPerTokenStored',
        type: 'uint224',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IERC20',
        name: 'token',
        type: 'address',
      },
    ],
    name: 'rewardPerToken',
    outputs: [
      {
        internalType: 'uint224',
        name: '',
        type: 'uint224',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'rewardTokens',
    outputs: [
      {
        internalType: 'contract IERC20',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'rewardTokensCount',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'strategiesHash',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IERC20',
        name: '',
        type: 'address',
      },
    ],
    name: 'tokenBlacklist',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalInstantDeposit',
    outputs: [
      {
        internalType: 'uint128',
        name: '',
        type: 'uint128',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalShares',
    outputs: [
      {
        internalType: 'uint128',
        name: '',
        type: 'uint128',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_vaultOwner',
        type: 'address',
      },
    ],
    name: 'transferVaultOwner',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_name',
        type: 'string',
      },
    ],
    name: 'updateName',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IERC20',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'uint32',
        name: 'timestamp',
        type: 'uint32',
      },
    ],
    name: 'updatePeriodFinish',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'userIndexAction',
    outputs: [
      {
        internalType: 'uint128',
        name: 'depositAmount',
        type: 'uint128',
      },
      {
        internalType: 'uint128',
        name: 'withdrawShares',
        type: 'uint128',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'userLastInteractions',
    outputs: [
      {
        internalType: 'uint128',
        name: 'index1',
        type: 'uint128',
      },
      {
        internalType: 'uint128',
        name: 'index2',
        type: 'uint128',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'users',
    outputs: [
      {
        internalType: 'uint128',
        name: 'instantDeposit',
        type: 'uint128',
      },
      {
        internalType: 'uint128',
        name: 'activeDeposit',
        type: 'uint128',
      },
      {
        internalType: 'uint128',
        name: 'owed',
        type: 'uint128',
      },
      {
        internalType: 'uint128',
        name: 'withdrawnDeposits',
        type: 'uint128',
      },
      {
        internalType: 'uint128',
        name: 'shares',
        type: 'uint128',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'vaultFee',
    outputs: [
      {
        internalType: 'uint16',
        name: '',
        type: 'uint16',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'vaultIndexAction',
    outputs: [
      {
        internalType: 'uint128',
        name: 'depositAmount',
        type: 'uint128',
      },
      {
        internalType: 'uint128',
        name: 'withdrawShares',
        type: 'uint128',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'vaultOwner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'vaultStrategies',
        type: 'address[]',
      },
      {
        internalType: 'uint128',
        name: 'sharesToWithdraw',
        type: 'uint128',
      },
      {
        internalType: 'bool',
        name: 'withdrawAll',
        type: 'bool',
      },
    ],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'vaultStrategies',
        type: 'address[]',
      },
      {
        internalType: 'uint128',
        name: 'sharesToWithdraw',
        type: 'uint128',
      },
      {
        internalType: 'bool',
        name: 'withdrawAll',
        type: 'bool',
      },
      {
        components: [
          {
            internalType: 'bool',
            name: 'doExecuteWithdraw',
            type: 'bool',
          },
          {
            internalType: 'uint256[][]',
            name: 'slippages',
            type: 'uint256[][]',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'slippage',
                type: 'uint256',
              },
              {
                internalType: 'bytes',
                name: 'path',
                type: 'bytes',
              },
            ],
            internalType: 'struct SwapData[][]',
            name: 'swapData',
            type: 'tuple[][]',
          },
        ],
        internalType: 'struct FastWithdrawParams',
        name: 'fastWithdrawParams',
        type: 'tuple',
      },
    ],
    name: 'withdrawFast',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

export class SpoolVault__factory {
  static readonly abi = _abi;
  static createInterface(): SpoolVaultInterface {
    return new utils.Interface(_abi) as SpoolVaultInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): SpoolVault {
    return new Contract(address, _abi, signerOrProvider) as SpoolVault;
  }
}
