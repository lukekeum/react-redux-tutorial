type MiddlewareFunction = (
  store: any
) => (next: any) => (action: any) => AnalyserNode;

export default MiddlewareFunction;
