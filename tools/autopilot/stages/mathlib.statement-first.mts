// Fresh mathematics runs only. The legacy native table remains reload-compatible.
import { statSync } from 'node:fs';
import { statementFirstStages } from '../src/statement-first.mts';
const url = new URL('./mathlib.mts', import.meta.url);
const v = new URL(import.meta.url).searchParams.get('v') ?? String(statSync(url).mtimeMs);
const native = await import(url.href + '?v=' + encodeURIComponent(v));
export const workflowRevision = 'six-step-v1-statement-first';
export const stagesForRun = (ctx: any) => statementFirstStages(ctx, native.stagesForRun(ctx), 'math');
export default {stagesForRun, workflowRevision};
