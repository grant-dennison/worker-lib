export type WorkerAbstractionFactory<ReceiveMessageType, SendMessageType> =
  () => WorkerAbstraction<ReceiveMessageType, SendMessageType>

export type WorkerAbstraction<ReceiveMessageType, SendMessageType> = {
  readonly onMessage: (
    callback: (data: ReceiveMessageType) => void | PromiseLike<void>
  ) => void
  readonly postMessage: (data: SendMessageType) => void
}
