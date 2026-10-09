import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { results } from '../src/coverage.mts';
import { step5bReviewCoverage } from '../../step5b-review-coverage.mjs';

/** Continue unfinished review, never a mathematical repair or gate retry. */
export function withStep5bReviewContinuation(original: any, { physics = false, inspect = step5bReviewCoverage }: any = {}) {
  if (original.id !== '5b-cross') return original;
  const pattern = (ctx: any) => {
    const base = typeof original.pattern === 'function' ? original.pattern(ctx) : original.pattern;
    return new RegExp(`(?:${base.source}|^alpha-5b-review-[a-f0-9]{16}\\.result\\.json$)`, base.flags);
  };
  return { ...original, pattern,
    reviewCoverage: (ctx: any) => {
      try { return inspect({ repo: ctx.repo, run: ctx.run, physics }); }
      catch (error: any) { return { complete: false, why: `review coverage unavailable: ${error.message}` }; }
    },
    onProgress: ({ ctx, executor, stage }: any) => {
      if ([...executor.inflight.values()].some((row: any) => row.meta.stage === stage.id)
        || executor.adoptedUnits(stage).size) return;
      const successful = results(ctx.dispatchDir).filter(row => pattern(ctx).test(row.file) && row.run === ctx.run
        && row.role === 'alpha' && row.covers?.includes('all'));
      if (!successful.length) return; // Ordinary first dispatch retains its normal policy.
      const progress = inspect({ repo: ctx.repo, run: ctx.run, physics });
      if (progress.complete) return;
      if (progress.errors.length) throw Error(`Step5b current review evidence needs owner resolution: ${progress.errors[0].code}: ${progress.errors[0].message}`);
      const prior = Object.values(executor.state.data.dispatches ?? {}).filter((row: any) => row.stage === stage.id && /^5b-review-/.test(row.label))
        .sort((a: any, b: any) => Date.parse(a.startedAt) - Date.parse(b.startedAt)).at(-1) as any;
      if (prior) {
        const checkpoint = prior.reviewCheckpoint;
        if (!checkpoint || !Number.isInteger(checkpoint.completed) || prior.lastExitOk !== true
          || progress.counts.completed <= checkpoint.completed
          || !existsSync(join(ctx.repo, checkpoint.task))
          || createHash('sha256').update(readFileSync(join(ctx.repo, checkpoint.task))).digest('hex') !== checkpoint.taskSha256)
          throw Error(`Step5b unfinished review made no further completed-obligation progress; owner resolution required (${progress.why})`);
      }
      const label = `5b-review-${progress.progress.slice(0, 16)}`;
      // A content-addressed remaining-work checkpoint can be launched once.
      // An unchanged partial handoff or failed continuation holds, never spins.
      if (!progress.counts.completed || executor.state.dispatch(`${stage.id}:${label}`)
        || existsSync(join(ctx.dispatchDir, `alpha-${label}.result.json`)))
        throw Error(`Step5b unfinished review made no further progress; owner resolution required (${progress.why})`);
      const plan = original.plan(ctx, ['all'])[0];
      const originalTask = [plan.task].flat().find(path => path && existsSync(join(ctx.repo, path)));
      if (!originalTask) throw Error('Step5b continuation lacks the original live task');
      const task = `research/${ctx.run}-${label}.task.md`;
      const checkpoint = { completed: progress.counts.completed, progress: progress.progress };
      const report = `research/${ctx.run}-alpha-${label}.md`;
      const text = readFileSync(join(ctx.repo, originalTask), 'utf8') + '\n\n'
        + readFileSync(join(ctx.repo, 'briefs/tasks/alpha-5b-unfinished-review.md'), 'utf8')
        + `\n\n## Immutable launch checkpoint\n\n${JSON.stringify(checkpoint)}\n\n`
        + `Write this continuation's concise checkpoint report ONLY to ${report}. `
        + `Do not alter research/${ctx.run}-alpha-5b.md or any earlier review report: completed forward-verdict evidence binds those exact bytes.\n`;
      if (existsSync(join(ctx.repo, task))) {
        if (readFileSync(join(ctx.repo, task), 'utf8') !== text) throw Error('Step5b continuation checkpoint task changed');
      } else writeFileSync(join(ctx.repo, task), text, { flag: 'wx' });
      executor.start(stage, { ...plan, label, job: 'audit', task,
        reviewCheckpoint: { ...checkpoint, task, taskSha256: createHash('sha256').update(text).digest('hex') },
      });
    },
  };
}
