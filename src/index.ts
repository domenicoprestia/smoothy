// Reexport the native module. On web, it will be resolved to SmoothyModule.web.ts
// and on native platforms to SmoothyModule.ts
export { default } from './SmoothyModule';
export { default as SmoothyView } from './SmoothyView';
export * from './Smoothy.types';
