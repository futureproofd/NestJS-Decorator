import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { tracer, Span } from 'dd-trace';

export const TraceRequestHeaders = createParamDecorator(
  async (property: string | number, context: ExecutionContext) => {
    const headers = context.switchToHttp().getRequest().headers;
    const methodName = context.getHandler().name;

    tracer.trace('Add a trace.', async (span: Span) => {
      span.addTags({ correlationId: headers[property], methodName });
    });

    if (typeof property === 'string' || typeof property === 'number') {
      return headers[property];
    }
    return headers;
  },
);
