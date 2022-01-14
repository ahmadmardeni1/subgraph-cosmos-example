"used in Vote"
enum SignedMsgType {
  SIGNED_MSG_TYPE_UNKNOWN
  SIGNED_MSG_TYPE_PREVOTE
  SIGNED_MSG_TYPE_PRECOMMIT
  SIGNED_MSG_TYPE_PROPOSAL
}

"BlockIdFlag indicates which BlockID the signature is for"
enum BlockIDFlag {
  BLOCK_ID_FLAG_UNKNOWN
  BLOCK_ID_FLAG_ABSENT
  BLOCK_ID_FLAG_COMMIT
  BLOCK_ID_FLAG_NIL
}

type Block @entity {
  id: ID!
  header: Header
  data: Data
  evidence: EvidenceList
  last_commit: Commit
}

type BlockID @entity {
  id: ID!
  "bytes hash = 1 [(fig.bytetype) = \"Hash\"];"
  hash: Bytes
  part_set_header: PartSetHeader
}

type BlockParams @entity {
  id: ID!
  "Note: must be greater than 0"
  max_bytes: BigInt
  "Note: must be greater or equal to -1"
  max_gas: BigInt
}

type Commit @entity {
  id: ID!
  "must be > 0"
  height: BigInt
  "must be > 0"
  round: Int
  block_id: BlockID
  "must be > 0"
  signatures: [CommitSig!]
}

type CommitSig @entity {
  id: ID!
  "must match those in the enum above"
  block_id_flag: BlockIDFlag
  "hash 256 20 bytes - this is the first 20 characters of a 32-byte key - SHA256(pubkey)[:20]"
  validator_address: Bytes
  timestamp: Timestamp
  "length should be > 0 and < 64"
  signature: Bytes
}

type Consensus @entity {
  id: ID!
  block: BigInt
  app: BigInt
}

type ConsensusParams @entity {
  id: ID!
  block: BlockParams
  evidence: EvidenceParams
  validator: ValidatorParams
  version: VersionParams
}

type Data @entity {
  id: ID!
  txs: [Bytes!]
}

type Duration @entity {
  id: ID!
  seconds: BigInt
  nanos: Int
}

type DuplicateVoteEvidence @entity {
  id: ID!
  vote_a: EventVote
  vote_b: EventVote
  total_voting_power: BigInt
  validator_power: BigInt
  timestamp: Timestamp
}

type Event @entity {
  id: ID!
  type: String
  attributes: [EventAttribute!]
}

type EventAttribute @entity {
  id: ID!
  key: Bytes
  value: Bytes
  "nondeterministic"
  index: Boolean
}

type EventBlock @entity {
  id: ID!
  block: Block
  "not present in v0.34.13"
  block_id: BlockID
  result_begin_block: ResponseBeginBlock
  result_end_block: ResponseEndBlock
}

"EventData"
type EventData @entity {
  id: ID!
  event: Event
  block: EventList
}

"EventList"
type EventList @entity {
  id: ID!
  new_block: EventBlock
  transaction: [EventTx!]
  validator_set_updates: EventValidatorSetUpdates
}

type EventTx @entity {
  id: ID!
  tx_result: TxResult
}

type EventValidatorSetUpdates @entity {
  id: ID!
  validator_updates: [Validator!]
}

type EventVote @entity {
  id: ID!
  "should be present in the enum at the top of this file"
  event_vote_type: SignedMsgType
  "must be > 0"
  height: BigInt
  "must be > 0"
  round: Int
  block_id: BlockID
  timestamp: Timestamp
  "hash with a length of 20"
  validator_address: Bytes
  validator_index: Int
  "hash length should be >0 and <64"
  signature: Bytes
}

type Evidence @entity {
  id: ID!
  duplicate_vote_evidence: DuplicateVoteEvidence
  light_client_attack_evidence: LightClientAttackEvidence
}

type EvidenceList @entity {
  id: ID!
  evidence: [Evidence!]
}

type EvidenceParams @entity {
  id: ID!
  max_age_num_blocks: BigInt
  max_age_duration: Duration
  "Default is 1048576 or 1MB"
  max_bytes: BigInt
}

"fig"
type fig @entity {
  id: ID!
}

type Header @entity {
  id: ID!
  version: Consensus
  chain_id: String
  height: BigInt
  time: Timestamp
  last_block_id: BlockID
  "hash 256 32 bytes"
  last_commit_hash: Bytes
  "hash 256 32 bytes"
  data_hash: Bytes
  "hash 256 32 bytes"
  validators_hash: Bytes
  "hash 256 32 bytes"
  next_validators_hash: Bytes
  "hash 256 32 bytes"
  consensus_hash: Bytes
  "determined by application, not a fixed length"
  app_hash: Bytes
  "hash 256 32 bytes - first block will be results of an empty hash"
  last_results_hash: Bytes
  "hash sha256 32 bytes"
  eidence_hash: Bytes
  "hash 256 20 bytes - this is the first 20 characters of a 32-byte key - SHA256(pubkey)[:20]"
  proposer_address: Bytes
}

type LightBlock @entity {
  id: ID!
  "cannot be nil"
  signed_header: SignedHeader
  "cannot be nil"
  validator_set: ValidatorSet
}

type LightClientAttackEvidence @entity {
  id: ID!
  conflicting_block: LightBlock
  common_height: BigInt
  byzantine_validators: [Validator!]
  total_voting_power: BigInt
  timestamp: Timestamp
}

type PublicKey @entity {
  id: ID!
  ed25519: Bytes
  secp256k1: Bytes
}

type PartSetHeader @entity {
  id: ID!
  total: BigInt
  "hash 256 32 bytes"
  hash: Bytes
}

type ResponseBeginBlock @entity {
  id: ID!
  events: [Event!]
}

type ResponseEndBlock @entity {
  id: ID!
  validator_updates: [ValidatorUpdate!]
  consensus_param_updates: ConsensusParams
  events: [Event!]
}

type ResponseDeliverTx @entity {
  id: ID!
  code: BigInt
  data: Bytes
  log: String
  info: String
  gas_wanted: BigInt
  gas_used: BigInt
  events: [Event!]
  codespace: String
}

type Reward @entity {
  id: ID!
  amount: String
  validator: String
}

type SignedHeader @entity {
  id: ID!
  header: Header
  commit: Commit
}

type Timestamp @entity {
  id: ID!
  seconds: BigInt
  nanos: Int
}

type Validator @entity {
  id: ID!
  address: Bytes
  "must be >0"
  pub_key: PublicKey
  voting_power: BigInt
  proposer_priority: BigInt
}

type ValidatorUpdate @entity {
  id: ID!
  pub_key: PublicKey
  power: BigInt
}

type ValidatorParams @entity {
  id: ID!
  pub_key_types: [String]
}

type VersionParams @entity {
  id: ID!
  app_version: BigInt
}

type ValidatorSet @entity {
  id: ID!
  "cannot be empty of nil"
  validators: [Validator!]
  "cannot be nil"
  proposer: Validator
  total_voting_power: BigInt
}

type TxResult @entity {
  id: ID!
  height: BigInt
  index: BigInt
  tx: Bytes
  result: ResponseDeliverTx
}
