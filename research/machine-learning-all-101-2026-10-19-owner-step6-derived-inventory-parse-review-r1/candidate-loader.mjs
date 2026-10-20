import { readFileSync, existsSync } from 'node:fs';
import { resolve, relative, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = process.env.REVIEW_ROOT;
const proposal = process.env.REVIEW_PROPOSAL;
export async function load(url, context, next) {
  if (url.startsWith('file:') && root && proposal) {
    const file = fileURLToPath(url), rel = relative(root, file);
    if (rel.startsWith('tools/') && !rel.includes('..') && existsSync(join(proposal, rel))) {
      let source = readFileSync(join(proposal, rel), 'utf8');
      if (rel === 'tools/run-commit-scope.mjs' && process.env.REVIEW_EXPOSE_CLOSURE === '1')
        source += '\nexport { nativeProtectedPathClosure as reviewNativeClosure };\n';
      return { format: 'module', source, shortCircuit: true };
    }
  }
  return next(url, context);
}
