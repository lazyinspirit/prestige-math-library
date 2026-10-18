// Fresh compact physics runs only; independent native stages, content and model policy.
import { statSync } from 'node:fs';
import { compactStages } from '../../autopilot/src/page-layout.mts';
const url = new URL('./mathlib.mts', import.meta.url);
const v = new URL(import.meta.url).searchParams.get('v') ?? String(statSync(url).mtimeMs);
const native = await import(url.href + '?v=' + encodeURIComponent(v));
export const workflowRevision = 'physics-six-step-v1-compact';
export const stagesForRun = (ctx: any) => compactStages(ctx, native.stagesForRun(ctx), 'physics');
export default {stagesForRun, workflowRevision};
