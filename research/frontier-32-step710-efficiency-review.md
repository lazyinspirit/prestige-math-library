# Frontier 32: Steps 7–10 efficiency and quality review

Frontier 32 finished at 2026-09-06T15:00:43.619Z, closing in commit
`08bd4dff`. Terminal obligations, report integrity, publication readiness and
clean-tree gates passed. The controller exited normally. Publication remains
an owner decision. The later Foundations planning merge is outside this run's
sealed tree; the readiness receipt attests the close-out commit, not later work.

## Recorded comparison

Source: each run's `.autopilot/<run>/events.jsonl`, attempt-specific dispatch
results, and `research/<run>-judge-cost.jsonl`. Count each attempt once; input
includes cached input, and total tokens are input plus output. These are observed
usage counters, not billing figures. Wall boundaries are first stage entry to
the next conceptual step, or engine finish for Step 10. Failed work and actual
intervention time are retained.

| Step | 31a wall min | 32 wall min | 31a total tokens | 32 total tokens | 32 tokens/item versus 31a |
|---|---:|---:|---:|---:|---:|
| 7 | 61.06 | 30.11 | 33.300M | 27.151M | 3.5% higher |
| 8 | 235.53 | 182.45 | 311.259M | 236.651M | 3.5% lower |
| 9 | 22.50 | 80.54 | 7.199M | 18.365M | 223.8% higher |
| 10 | 39.63 | 25.12 | 2.528M | 1.469M | 26.3% lower |

Volumes: 31a had 27 pairs, 54 pages and 910 items; 32 had 23 pairs, 46 pages
and 717 items. Per-item normalization is descriptive, not a complexity model.
Step 9 reviewed 208 versus 202 pending declines, and Step 10 rewrote six versus
five pathway briefs. Step 32's Lead Alpha changed to Astra medium and additionally
repaired a mathematical theorem; other Step-9/10 agents remained Terra high.

Step 7 includes a pause from 09:49:49.877 to 10:05:12.949 UTC, during which
in-flight work continued. Subtracting the entire pause would falsely remove
productive time. Its initial sweep/readers predate the optimization cutover;
only reduced boundary latency (about 30 seconds to under 3 seconds) is directly
observed as a scheduler improvement. Step 9 includes the requested restart and
real metadata/contract recovery delays; neither is hidden as an adjusted saving.

## What improved, and what did not

- Step 8 overall gains are modest after normalization: 3.5% fewer tokens and
  1.7% less wall time per item. Closure improved from 49.3 to 24.2 minutes,
  17 to 8 agents, and 11 to 3 gate batteries. Accounting for 76 versus 48
  final-adjudication cases still gives about 40% less closure input per case.
  Preflight regressed from 19.3 to 52.7 minutes through missing repair licences
  and overly broad risk routing. Those verified defects were repaired during
  the run; already-spent overhead is retained above.
- Step 9 did not demonstrate an efficiency gain. Three additional receipt
  repair dispatches and a metadata synchronization were required. The receipt
  prompt did not authorize recovery of missing contracts and omitted terminal
  resolution flags. Correcting it restored 54 contracts in batches 2, 4 and 12
  in one 6.97-minute pass; all 533 proof-bearing items then passed full coverage.
- Step 10 was faster despite a readiness hold for 38 already-published reused
  files. The corrected gate requires identical historical identity and published
  status at a pinned pre-run ancestor, without publishing new content or weakening
  mathematical checks. Five focused tests passed; independent Sol/high audit
  found no remaining high-impact issues after fixing its valid findings.
  Pathway work itself fell from 8.07 to 4.78 minutes and 2.211M to 1.100M tokens
  across six versus five briefs (about 29% less time and 40% fewer tokens/brief).

## Mathematical and scope evidence

The final report records 717 items, 533 proof contracts, 669 current configured
judge verdict sets and 48 exact-hash terminal adjudicator resolutions; no pending
rejudge, unadjudicated finding or open fatal remains. The late local-partition
theorem repair preserved its statement, passed independent Terra judgment on
SHA256 `174e2bf582c435297f40e7409e5ad8f100ee1bc6809b24f716dcc91c51e236d9`,
and cleared impact and stamp checks before its obligation was closed.
These are quality safeguards and evidence, not a proof that every mathematical
claim is correct. No review gate or required scope was waived for efficiency.

The Step-9 review retains three owner decisions: orientation coverage for the
double, an inaccurate future category-O extension-closure contract, and stale
basis-sheaf deferral coverage. See `frontier-32-alpha-step9-review.md`.
After close-out, full-plan validation also exposed an existing undeclared
permutation-statistics prerequisite on the Verma-module examples page. It was
reproduced against the close-out plan before the Foundations merge, so is not
caused by that addition. The terminal workflow battery did not detect this plan
error. It remains a reported planning issue, not a hidden passing check.

## Recommendations

Retain bounded hash batching, completion wakeups and the improved Step-8 closure.
Keep exact owner routing, original repair authority and complete receipt evidence
in prompts. Compare a clean future run before further concurrency tuning. Do not
infer mathematical-quality preservation from token savings. Step-5/6 effectiveness
remains deferred to a future frontier as requested.
