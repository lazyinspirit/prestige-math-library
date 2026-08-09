# Wave 10 A8 — Audit-Alpha adjudication

Date: 2026-08-09. Role: sole Audit-Alpha, GPT 5.6 Sol through the Codex subscription at `xhigh`, owner-delegated. A9 was not started.

## Scope and exact result

Alpha recovered the complete durable A6 record and independently verified the current four-id A7 receipt, all eight verdict rows, attempt/cost ledgers, cited items, current target text, contexts, judge hashes, normalized hashes, and the mandatory `pre-a8` touch boundary. A7 contains exactly four targets. DeepSeek passed all four; Terra passed `thm-monotonicity-from-the-derivative` and rejected the other three.

All three current rejections now have one exact `(id, model, context_sha256)` decision in `wave10-judge-adjudications.jsonl`:

| outcome | count |
|---|---:|
| `confirmed_fatal` | 0 |
| `confirmed_nonfatal` | 1 |
| `false_positive` | 2 |

Each decision records the full verification-stripped pre-edit `item_sha256` required by R1 and separately preserves the A7 judge's `verdict_item_sha256`, whose normalization removes only the judge sub-block.

## Three owner decisions

1. `cex-differentiable-with-unbounded-derivative-is-not-lipschitz` — **false positive**. Terra alleged that `lem-of-abs-value` does not supply `$|u|=u$ for $u\ge0$`. Its exact Fact L1 says verbatim: “`$|u| = u$ if $u \ge 0$, and `$|u| = -u$ if $u < 0$`.” Step 2.2 first proves both differences positive, so L1 gives the two displayed distances exactly. No gap or edit exists.
2. `lem-integral-elementary-bounds` — **false positive**. With `$C=\max\{|m|,|M|\}$`, the cited maximum definition gives `$|m|,|M|\le C$`, while the cited absolute-value lemma gives `$-|m|\le m$` and `$M\le|M|$`. Thus `$-C\le x\le C$`; the zero case is immediate and the positive case gives `$|x|\le C$` from the cited absolute-value equivalence plus equality cases. This is a direct ordered-field derivation from the declared inputs, not a missing theorem.
3. `ex-integral-of-the-floor-function` — **confirmed nonfatal**. Terra correctly notes that the discontinuity-classification definition supplies vocabulary, not the floor function's continuity set. The opening claim is nevertheless true and closes under the binding thirty-second rule from the cited integer-part uniqueness and continuity definition: floor is locally constant off `1,2,3` in the relative domain `[0,3]`; at each `$k=1,2,3$`, epsilon `$1/2$` and `$x=k-\min\{\delta/2,1/2\}$` witness a jump of one. This is a genuine non-load-bearing citation compression, so R1 forbids an edit.

`thm-monotonicity-from-the-derivative` received two passes and needed no adjudication.

## Fatal-only mutation, impact, certification, and stamps

No A8 outcome is `confirmed_fatal`. Therefore Alpha changed no item, page, frontmatter, contract, impact receipt, or stamp. The edited-item list is empty. The computed A8 public-interface and consumer unions are both empty, recorded in `wave10-A8-impact-review.json`. The orchestrator's combined `wave10-impact-audit.json` and Alpha's isolated A6 receipt were preserved unchanged.

No exact-final Terra certification was dispatched because Alpha authored no repair. All four A6 `verification.verified` stamps remain untouched; no `verification.judge` stamp was added. The A8 rejudge set in `wave10-A8-rejudge-targets.json` is exactly empty—no A7 target, sibling, page, or consumer is carried forward merely because a judge rejected old text.

## Guard, escalations, and handoff

The live Step-8 guard against `pre-a8` reports 2,859 baseline items, zero changed, zero created/deleted, zero errors, and zero warnings. Its exact receipt is `wave10-A8-step8-guard.json`. The A8 gate of record passes 3/3: Step-8 guard, zero-interface impact audit, and current four-target A7 coverage. Coverage is 57 items, 49 proof-bearing items, 888 relationships, and 4/4 paired targets, with only the three expected exact Alpha adjudication warnings. `wave10-A8-gate-receipt.json` and `wave10-coverage.json` preserve those results. `git diff --check` passes.

The combined repair-plus-rejection threshold escalates the three rejected targets for orchestrator personal audit:

- `cex-differentiable-with-unbounded-derivative-is-not-lipschitz`
- `ex-integral-of-the-floor-function`
- `lem-integral-elementary-bounds`

The square-root item already has an A6 orchestrator personal audit; its A8 false-positive decision adds no mathematical or source concern. The other two require the orchestrator's threshold review. Dropping either would remove a useful but non-foundational integration lemma/example; their current claims and proofs remain correct, so Alpha recommends retention unchanged.

Exact A8 edited-item and rejudge list: **empty**. Alpha did not run paired judges, A9, commit, or push. Root/orchestrator may now verify current A7 coverage against the adjudication ledger, record the no-change `post-a8` boundary if desired, and advance to A9 without a targeted judge spend.
