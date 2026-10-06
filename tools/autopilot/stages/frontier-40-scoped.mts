// Owner directive: items outside this frontier are not subjects of its gates.
import { existsSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { loadStep3 } from '../../step3-decisions.mjs';

// The executor reloads this table when its sibling stage modules change.
// Version the canonical import by every composed stage module so Node's ESM
// cache cannot keep the former Step-7 closures behind the freshly loaded table.
const canonicalUrl = new URL('./mathlib.mts', import.meta.url);
const revision = ['./mathlib.mts', './mathlib.step5.mts', './mathlib.step7.mts'].map(path => {
  const stat = statSync(new URL(path, import.meta.url));
  return `${stat.mtimeMs}:${stat.size}`;
}).join(':');
const { stages: original } = await import(`${canonicalUrl.href}?v=${revision}`);
const RUN = 'frontier-40-geometry-braids-rep-27';
export const stages = original.map(stage => ({ ...stage,
  // Keep the Step-6 reader recovery cap; the owner restored the native
  // judge pool to 27 calls without changing model, effort or evidence.
  ...(stage.id === '6-judge' ? {
    concurrency: 3,
    plan: (ctx: any, pending: any[]) => {
      const plans = stage.plan!(ctx, pending);
      if (ctx.run !== RUN) return plans;
      return plans.map((plan: any) => plan.role === 'tool' && plan.label === 'judge-sweep'
        ? { ...plan, argv: ['env', 'JUDGE_CONCURRENCY_GPT_6_1_SOL=27', ...plan.argv] }
        : plan);
    },
  } : {}),
  gates: stage.gates ? (ctx: any) => {
    const gates = stage.gates!(ctx);
    if (ctx.run !== RUN) return gates;
    const scope = loadStep3(ctx.repo, ctx.run);
    const ids = [...scope.items.keys()].sort();
    const selector = `research/${RUN}-gate-item-scope.json`;
    const bytes = JSON.stringify(ids, null, 2) + '\n';
    const path = join(ctx.repo, selector);
    if (!existsSync(path) || readFileSync(path, 'utf8') !== bytes) writeFileSync(path, bytes);
    const items = ids.map(id => `items/${id}.md`);
    const pages = scope.pages.map((p: any) => `library/${p.category}/${p.id}.md`)
      .filter((p: string) => existsSync(join(ctx.repo, p)));
    return gates.map((gate: any) => {
      const argv = typeof gate.argv === 'function' ? gate.argv() : gate.argv;
      if (!Array.isArray(argv)) return gate;
      const tool = argv.find((x: string) => /^tools\/(?:precheck|depcheck|fwdcheck|extcheck|rendercheck|prosecheck|depsource|pathcheck|impact-audit)\.(?:mjs|mts)$/.test(x));
      if (!tool) return gate;
      let next = [...argv];
      if (tool.endsWith('/precheck.mts')) next.push(...items);
      else if (tool.endsWith('/rendercheck.mjs') || tool.endsWith('/prosecheck.mjs')) next.push(...items, ...pages);
      else if (tool.endsWith('/pathcheck.mjs')) next.push(...scope.pages.map((p: any) => p.id));
      else { next.push('--items-file', selector); if (tool.endsWith('/depsource.mjs')) next.push('--run', RUN); }
      return { ...gate, argv: next };
    });
  } : undefined,
}));
