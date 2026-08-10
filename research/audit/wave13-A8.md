# Wave 13 A8 — Audit-Alpha adjudication

Date: 2026-08-10. Role: sole Audit-Alpha, GPT 5.6 Sol through the Codex subscription at `xhigh`, owner-delegated. A9 was not started.

## Scope and exact result

Alpha recovered the complete durable A6 record and independently verified the exact three-id A7 receipt, all 12 append-only judge rows, the attempt and cost ledgers, all three current target texts, all 32 unique declared dependency targets, the exact contexts, judge hashes, normalized hashes, and the mandatory `pre-a8` touch boundary. Sampling used: none. The first six sandbox transport-null rows remain preserved and were not adjudicated. A7's six substantive rows are geometry keep/keep, Jordan Terra keep plus DeepSeek reject, and Lebesgue Terra/DeepSeek reject.

All three substantive rejections now have one exact `(id, model, context_sha256)` decision in `wave13-judge-adjudications.jsonl`:

| outcome | count |
|---|---:|
| `confirmed_fatal` | 0 |
| `confirmed_nonfatal` | 1 |
| `false_positive` | 2 |

Each decision records the full verification-stripped pre-edit `item_sha256` required by R1 and separately preserves the A7 judge's `verdict_item_sha256`, whose normalization removes only the judge sub-block.

## Three owner decisions

1. `thm-jordan-boundary-criterion` / DeepSeek — **false positive**. The cited boundary definition explicitly gives the every-ball-meets-both-sides characterization. L1 then supplies the entire relative-domain argument: `closure(E)` lies inside `int(Q)`, so sufficiently small ambient balls stay in `Q`; the indicator takes both values at boundary points and is locally constant off the boundary.
2. `thm-lebesgue-criterion-in-rn` / Terra — **confirmed nonfatal**. Terra correctly identifies citation compression: L2 summarizes only compact null implies content zero, while step 3.2 uses the reverse implication. But the already-declared `def-null-and-content-zero-in-rn` states directly that padding a finite cover with degenerate zero-volume cubes proves content zero implies null. This closes immediately under the binding thirty-second rule, so R1 forbids an edit.
3. `thm-lebesgue-criterion-in-rn` / DeepSeek — **false positive**. Step 2.2 explicitly includes the finitely many pieces of `H_P` and calls them degenerate zero-volume rectangles. Step 3.2 applies the finite rectangle-to-cube claim to that finite family, giving a cover below `eta/2`; step 1.3 puts the high-oscillation cells below the other `eta/2`. The partition boundaries are covered and the claimed total follows.

`ex-geometric-power-series-and-an-interior-reexpansion` received two keeps and needed no adjudication.

## Fatal-only mutation, contracts, impact, certification, and stamps

No A8 outcome is `confirmed_fatal`. Therefore Alpha changed no item, page, frontmatter, contract, provenance row, impact disposition, or stamp. Both Wave13 contract copies remain synchronized and validate 62/62 with zero errors and warnings. The A8 public-interface and consumer unions are empty, recorded in `wave13-A8-impact-review.json` and `wave13-A8-impact-audit.json`; the byte-honest A6 raw and isolated impact receipts remain untouched.

No exact-final Terra repair certification was dispatched because Alpha authored no repair. All three A6 `verification.verified` stamps remain untouched, and no `verification.judge` stamp was added. The exact A8 edited-item and rejudge list in `wave13-A8-rejudge-targets.json` is empty. No rejected item, passed item, sibling, page, dependency, or consumer is carried forward without a fatal text repair.

## Guard, coverage, personal audit, and handoff

The live Step-8 guard against `pre-a8` reports 2,859 baseline items, zero changed, zero created or deleted, zero errors, and zero warnings. The A8 gate of record passes 3/3: Step-8 guard, zero-interface impact audit, and current three-target A7 coverage. Coverage is 76 items, 62 proof-bearing items, 488 relationships, and 3/3 paired targets, with only the three expected exact Alpha adjudication warnings. `git diff --check` passes.

Root personally concurred on both combined repair-plus-rejection threshold items. Jordan remains a valid central criterion, and Lebesgue remains a valid load-bearing integrability theorem; dropping either would damage downstream interfaces without curing any mathematical defect. The exact concurrence is in `wave13-A8-personal-audit-receipt.json`.

Exact A8 edited-item and rejudge list: **empty**. Alpha did not run targeted judges, write a judge stamp, start A9, commit, or push.
