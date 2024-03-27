import tracer from 'dd-trace';

// https://docs.datadoghq.com/tracing/setup/nodejs/#configuration

tracer.init(); // initialized in a different file to avoid hoisting.
tracer.use('express', {
  blacklist: ['/ping'],
});

export default tracer;
