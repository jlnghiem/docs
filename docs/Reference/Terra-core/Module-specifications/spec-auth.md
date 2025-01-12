# Auth

::: warning NOTE
Terra's Auth module inherits from Cosmos SDK's [`auth`](https://docs.cosmos.network/master/modules/auth/) module. This document is a stub, and covers mainly important Terra-specific notes about how it is used.
:::

Terra's Auth module extends the functionality from Cosmos SDK's `auth` module with a modified ante handler, which applies the [stability fee](/Concepts/glossary.md#fees) alongside all basic transaction validity checks, such as signatures, nonces, and auxiliary fields. This module also defines a special vesting account type which handles the logic for token vesting from the Luna presale.

## Fees

The Auth module reads the current effective `TaxRate` and `TaxCap` parameters from the [`Treasury`](./spec-treasury.md) module to enforce a stability fee.

### Gas Fee

Like all transactions on the Terra blockchain, [`MsgSend`](./spec-bank.md#msgsend) and [`MsgMultiSend`](./spec-bank.md#msgmultisend) incur gas fees. These fees are determined by a validator's minimum gas price and the complexity of the transaction. More complex transactions incur higher fees. Gas fees are specified by the sender when a transaction is outbound. For more information on how gas is calculated, see [fees](/Reference/terrad/#fees).

### Stability Fee

In addition to the gas fee, the ante handler charges a stability fee that is a percentage of the transaction's value only for the **Stable Coins** except **LUNA**. It reads the Tax Rate and Tax Cap parameters from the [`Treasury`](./spec-treasury.md) module to compute the amount of stability tax that needs to be charged.

The **Tax Rate** is a parameter agreed upon by the network that specifies the percentage of payment transactions that will be collected as Tax Proceeds in the block reward, which will be distributed among the validators. For more information about the distribution model, see [How are block provisions distributed](../../../How-to/Manage-a-Terra-validator/faq.md#how-are-block-provisions-distributed). The taxes collected per transaction cannot exceed the specific **Tax Cap** defined for that transaction's denomination. Every epoch, the Tax Rate and Tax Caps are recalibrated automatically by the network; see [here](spec-treasury.md#monetary-policy-levers) for more details.

For an example `MsgSend` transaction of µSDR tokens,

```text
stability fee = min(1000 * tax_rate, tax_cap(usdr))
```

For a `MsgMultiSend` transaction, a stability fee is charged from every outbound transaction.

## Parameters

The subspace for the Auth module is `auth`.

```go
type Params struct {
	MaxMemoCharacters      uint64 `json:"max_memo_characters" yaml:"max_memo_characters"`
	TxSigLimit             uint64 `json:"tx_sig_limit" yaml:"tx_sig_limit"`
	TxSizeCostPerByte      uint64 `json:"tx_size_cost_per_byte" yaml:"tx_size_cost_per_byte"`
	SigVerifyCostED25519   uint64 `json:"sig_verify_cost_ed25519" yaml:"sig_verify_cost_ed25519"`
	SigVerifyCostSecp256k1 uint64 `json:"sig_verify_cost_secp256k1" yaml:"sig_verify_cost_secp256k1"`
}
```

### MaxMemoCharacters

Maximum permitted number of characters in the memo of a transaction.

- type: `uint64`
- default: `256`

### TxSigLimit

The maximum number of signers in a transaction. A single transaction can have multiple messages and multiple signers. The sig verification cost is much higher than other operations, so we limit this to 100.

- type: `uint64`
- default: `100`

### TxSizeCostPerByte

Used to compute gas consumption of the transaction, `TxSizeCostPerByte * txsize`.

- type: `uint64`
- default: `10`

### SigVerifyCostED25519

The gas cost for verifying ED25519 signatures.

- type: `uint64`
- default: `590`

### SigVerifyCostSecp256k1

The gas cost for verifying Secp256k1 signatures.

- type: `uint64`
- default: `1000`
