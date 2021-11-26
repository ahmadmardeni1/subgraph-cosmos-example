// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ERC20DeployedEvent extends ethereum.Event {
  get params(): ERC20DeployedEvent__Params {
    return new ERC20DeployedEvent__Params(this);
  }
}

export class ERC20DeployedEvent__Params {
  _event: ERC20DeployedEvent;

  constructor(event: ERC20DeployedEvent) {
    this._event = event;
  }

  get _cosmosDenom(): string {
    return this._event.parameters[0].value.toString();
  }

  get _tokenContract(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _name(): string {
    return this._event.parameters[2].value.toString();
  }

  get _symbol(): string {
    return this._event.parameters[3].value.toString();
  }

  get _decimals(): i32 {
    return this._event.parameters[4].value.toI32();
  }

  get _eventNonce(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class LogicCallEvent extends ethereum.Event {
  get params(): LogicCallEvent__Params {
    return new LogicCallEvent__Params(this);
  }
}

export class LogicCallEvent__Params {
  _event: LogicCallEvent;

  constructor(event: LogicCallEvent) {
    this._event = event;
  }

  get _invalidationId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get _invalidationNonce(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get _returnData(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get _eventNonce(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class SendToCosmosEvent extends ethereum.Event {
  get params(): SendToCosmosEvent__Params {
    return new SendToCosmosEvent__Params(this);
  }
}

export class SendToCosmosEvent__Params {
  _event: SendToCosmosEvent;

  constructor(event: SendToCosmosEvent) {
    this._event = event;
  }

  get _tokenContract(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _sender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _destination(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get _amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get _eventNonce(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class TransactionBatchExecutedEvent extends ethereum.Event {
  get params(): TransactionBatchExecutedEvent__Params {
    return new TransactionBatchExecutedEvent__Params(this);
  }
}

export class TransactionBatchExecutedEvent__Params {
  _event: TransactionBatchExecutedEvent;

  constructor(event: TransactionBatchExecutedEvent) {
    this._event = event;
  }

  get _batchNonce(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _token(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _eventNonce(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ValsetUpdatedEvent extends ethereum.Event {
  get params(): ValsetUpdatedEvent__Params {
    return new ValsetUpdatedEvent__Params(this);
  }
}

export class ValsetUpdatedEvent__Params {
  _event: ValsetUpdatedEvent;

  constructor(event: ValsetUpdatedEvent) {
    this._event = event;
  }

  get _newValsetNonce(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _eventNonce(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get _validators(): Array<Address> {
    return this._event.parameters[2].value.toAddressArray();
  }

  get _powers(): Array<BigInt> {
    return this._event.parameters[3].value.toBigIntArray();
  }
}

export class Gravity extends ethereum.SmartContract {
  static bind(address: Address): Gravity {
    return new Gravity("Gravity", address);
  }

  lastBatchNonce(_erc20Address: Address): BigInt {
    let result = super.call(
      "lastBatchNonce",
      "lastBatchNonce(address):(uint256)",
      [ethereum.Value.fromAddress(_erc20Address)]
    );

    return result[0].toBigInt();
  }

  try_lastBatchNonce(_erc20Address: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "lastBatchNonce",
      "lastBatchNonce(address):(uint256)",
      [ethereum.Value.fromAddress(_erc20Address)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  lastLogicCallNonce(_invalidation_id: Bytes): BigInt {
    let result = super.call(
      "lastLogicCallNonce",
      "lastLogicCallNonce(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(_invalidation_id)]
    );

    return result[0].toBigInt();
  }

  try_lastLogicCallNonce(_invalidation_id: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "lastLogicCallNonce",
      "lastLogicCallNonce(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(_invalidation_id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  state_gravityId(): Bytes {
    let result = super.call(
      "state_gravityId",
      "state_gravityId():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_state_gravityId(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "state_gravityId",
      "state_gravityId():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  state_invalidationMapping(param0: Bytes): BigInt {
    let result = super.call(
      "state_invalidationMapping",
      "state_invalidationMapping(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(param0)]
    );

    return result[0].toBigInt();
  }

  try_state_invalidationMapping(param0: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "state_invalidationMapping",
      "state_invalidationMapping(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  state_lastBatchNonces(param0: Address): BigInt {
    let result = super.call(
      "state_lastBatchNonces",
      "state_lastBatchNonces(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_state_lastBatchNonces(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "state_lastBatchNonces",
      "state_lastBatchNonces(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  state_lastEventNonce(): BigInt {
    let result = super.call(
      "state_lastEventNonce",
      "state_lastEventNonce():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_state_lastEventNonce(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "state_lastEventNonce",
      "state_lastEventNonce():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  state_lastValsetCheckpoint(): Bytes {
    let result = super.call(
      "state_lastValsetCheckpoint",
      "state_lastValsetCheckpoint():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_state_lastValsetCheckpoint(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "state_lastValsetCheckpoint",
      "state_lastValsetCheckpoint():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  state_lastValsetNonce(): BigInt {
    let result = super.call(
      "state_lastValsetNonce",
      "state_lastValsetNonce():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_state_lastValsetNonce(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "state_lastValsetNonce",
      "state_lastValsetNonce():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  state_powerThreshold(): BigInt {
    let result = super.call(
      "state_powerThreshold",
      "state_powerThreshold():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_state_powerThreshold(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "state_powerThreshold",
      "state_powerThreshold():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _gravityId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get _powerThreshold(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _validators(): Array<Address> {
    return this._call.inputValues[2].value.toAddressArray();
  }

  get _powers(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DeployERC20Call extends ethereum.Call {
  get inputs(): DeployERC20Call__Inputs {
    return new DeployERC20Call__Inputs(this);
  }

  get outputs(): DeployERC20Call__Outputs {
    return new DeployERC20Call__Outputs(this);
  }
}

export class DeployERC20Call__Inputs {
  _call: DeployERC20Call;

  constructor(call: DeployERC20Call) {
    this._call = call;
  }

  get _cosmosDenom(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _name(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _symbol(): string {
    return this._call.inputValues[2].value.toString();
  }

  get _decimals(): i32 {
    return this._call.inputValues[3].value.toI32();
  }
}

export class DeployERC20Call__Outputs {
  _call: DeployERC20Call;

  constructor(call: DeployERC20Call) {
    this._call = call;
  }
}

export class SendToCosmosCall extends ethereum.Call {
  get inputs(): SendToCosmosCall__Inputs {
    return new SendToCosmosCall__Inputs(this);
  }

  get outputs(): SendToCosmosCall__Outputs {
    return new SendToCosmosCall__Outputs(this);
  }
}

export class SendToCosmosCall__Inputs {
  _call: SendToCosmosCall;

  constructor(call: SendToCosmosCall) {
    this._call = call;
  }

  get _tokenContract(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _destination(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get _amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SendToCosmosCall__Outputs {
  _call: SendToCosmosCall;

  constructor(call: SendToCosmosCall) {
    this._call = call;
  }
}

export class SubmitBatchCall extends ethereum.Call {
  get inputs(): SubmitBatchCall__Inputs {
    return new SubmitBatchCall__Inputs(this);
  }

  get outputs(): SubmitBatchCall__Outputs {
    return new SubmitBatchCall__Outputs(this);
  }
}

export class SubmitBatchCall__Inputs {
  _call: SubmitBatchCall;

  constructor(call: SubmitBatchCall) {
    this._call = call;
  }

  get _currentValidators(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _currentPowers(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get _currentValsetNonce(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _v(): Array<i32> {
    return this._call.inputValues[3].value.toI32Array();
  }

  get _r(): Array<Bytes> {
    return this._call.inputValues[4].value.toBytesArray();
  }

  get _s(): Array<Bytes> {
    return this._call.inputValues[5].value.toBytesArray();
  }

  get _amounts(): Array<BigInt> {
    return this._call.inputValues[6].value.toBigIntArray();
  }

  get _destinations(): Array<Address> {
    return this._call.inputValues[7].value.toAddressArray();
  }

  get _fees(): Array<BigInt> {
    return this._call.inputValues[8].value.toBigIntArray();
  }

  get _batchNonce(): BigInt {
    return this._call.inputValues[9].value.toBigInt();
  }

  get _tokenContract(): Address {
    return this._call.inputValues[10].value.toAddress();
  }

  get _batchTimeout(): BigInt {
    return this._call.inputValues[11].value.toBigInt();
  }
}

export class SubmitBatchCall__Outputs {
  _call: SubmitBatchCall;

  constructor(call: SubmitBatchCall) {
    this._call = call;
  }
}

export class SubmitLogicCallCall extends ethereum.Call {
  get inputs(): SubmitLogicCallCall__Inputs {
    return new SubmitLogicCallCall__Inputs(this);
  }

  get outputs(): SubmitLogicCallCall__Outputs {
    return new SubmitLogicCallCall__Outputs(this);
  }
}

export class SubmitLogicCallCall__Inputs {
  _call: SubmitLogicCallCall;

  constructor(call: SubmitLogicCallCall) {
    this._call = call;
  }

  get _currentValidators(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _currentPowers(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get _currentValsetNonce(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _v(): Array<i32> {
    return this._call.inputValues[3].value.toI32Array();
  }

  get _r(): Array<Bytes> {
    return this._call.inputValues[4].value.toBytesArray();
  }

  get _s(): Array<Bytes> {
    return this._call.inputValues[5].value.toBytesArray();
  }

  get _args(): SubmitLogicCallCall_argsStruct {
    return changetype<SubmitLogicCallCall_argsStruct>(
      this._call.inputValues[6].value.toTuple()
    );
  }
}

export class SubmitLogicCallCall__Outputs {
  _call: SubmitLogicCallCall;

  constructor(call: SubmitLogicCallCall) {
    this._call = call;
  }
}

export class SubmitLogicCallCall_argsStruct extends ethereum.Tuple {
  get transferAmounts(): Array<BigInt> {
    return this[0].toBigIntArray();
  }

  get transferTokenContracts(): Array<Address> {
    return this[1].toAddressArray();
  }

  get feeAmounts(): Array<BigInt> {
    return this[2].toBigIntArray();
  }

  get feeTokenContracts(): Array<Address> {
    return this[3].toAddressArray();
  }

  get logicContractAddress(): Address {
    return this[4].toAddress();
  }

  get payload(): Bytes {
    return this[5].toBytes();
  }

  get timeOut(): BigInt {
    return this[6].toBigInt();
  }

  get invalidationId(): Bytes {
    return this[7].toBytes();
  }

  get invalidationNonce(): BigInt {
    return this[8].toBigInt();
  }
}

export class UpdateValsetCall extends ethereum.Call {
  get inputs(): UpdateValsetCall__Inputs {
    return new UpdateValsetCall__Inputs(this);
  }

  get outputs(): UpdateValsetCall__Outputs {
    return new UpdateValsetCall__Outputs(this);
  }
}

export class UpdateValsetCall__Inputs {
  _call: UpdateValsetCall;

  constructor(call: UpdateValsetCall) {
    this._call = call;
  }

  get _newValidators(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _newPowers(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get _newValsetNonce(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _currentValidators(): Array<Address> {
    return this._call.inputValues[3].value.toAddressArray();
  }

  get _currentPowers(): Array<BigInt> {
    return this._call.inputValues[4].value.toBigIntArray();
  }

  get _currentValsetNonce(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get _v(): Array<i32> {
    return this._call.inputValues[6].value.toI32Array();
  }

  get _r(): Array<Bytes> {
    return this._call.inputValues[7].value.toBytesArray();
  }

  get _s(): Array<Bytes> {
    return this._call.inputValues[8].value.toBytesArray();
  }
}

export class UpdateValsetCall__Outputs {
  _call: UpdateValsetCall;

  constructor(call: UpdateValsetCall) {
    this._call = call;
  }
}
