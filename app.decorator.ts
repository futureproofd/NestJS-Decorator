import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { tracer, Span } from 'dd-trace';

export const GetRequestHeaders = createParamDecorator(
  async (property: string | number, context: ExecutionContext) => {
    const headers = context.switchToHttp().getRequest().headers;

    tracer.trace('some tracing happening here', async (span: Span) => {
      span.addTags({ appId: headers['X-Correlation-Id'] });
      console.log(
        '🚀 ~ tracer.trace ~ span:',
        span.log({ correlationId: headers['X-Correlation-Id'] }),
      );
    });

    if (typeof property === 'string' || typeof property === 'number') {
      return headers[property];
    }
    return headers;
  },
);
