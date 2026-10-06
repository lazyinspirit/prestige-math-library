// Run-local recovery after the recorded 2026-10-06 HTTP 429 failures.
// Select only in frontier-39-analysis-30's state-directory config.json.
import { stages as original } from './mathlib.mts';

const RUN = 'frontier-39-analysis-30';

export const stages = original.map(stage => stage.id !== '6-judge' ? stage : {
  ...stage,
  concurrency: 3,
  plan: (ctx: any, pending: any[]) => {
    if (ctx.run !== RUN) throw new Error(`This Step-6 recovery table is restricted to ${RUN}`);
    const plans = stage.plan!(ctx, pending);
    return plans.map((plan: any) => plan.role === 'tool' && plan.label === 'judge-sweep'
      ? { ...plan, argv: ['env', 'JUDGE_CONCURRENCY_GPT_6_1_SOL=3', ...plan.argv] }
      : plan);
  },
});
