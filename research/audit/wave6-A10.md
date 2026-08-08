# Wave 6 — A10 rundown and owner pause

Published-page retro-audit of dependency level 6. **A0 through A10 are
complete and every gate is green.** The owner cleared the sole A10 pause on
2026-08-08 by instructing the orchestrator to conclude Wave 6. Nothing in this
workflow changed a publication status, renamed an id, removed an item, or
changed reading order.

**126 items, 106 proof-bearing, 1,393 relationships, 3 batches, 9 pages.**

## 1. Gate results

| step | gates | result |
|---|---|---|
| A8 | `step8-guard`, `impact-audit`, targeted `level-coverage --verify-current-context` | **CLEAR** |
| A9 | `prosecheck`, `prosecheck --warnings` | **CLEAR** |
| A10 | `precheck`, `depcheck`, `fwdcheck`, `extcheck`, `rendercheck`, `prosecheck`, `citecheck`, `depsource`, `level-coverage` | **CLEAR (9/9)** |

A8 reports exactly two changed items, both licensed by hash-bound
`confirmed_fatal` rows. Its impact receipt covers two interfaces and 25
required consumers, all `still-licensed`. Targeted coverage is 30/30 repaired
items with a current complete DeepSeek/Terra pair. The eight warnings are the
designed durable outcomes for six confirmed-nonfatal and two false-positive
rejections; no rejection is unadjudicated.

## 2. Provenance census

All 126 scoped items entered as legacy-unclassified and leave tagged on both
components.

| label | statement (before -> after) | proof (before -> after) |
|---|---:|---:|
| *(untagged)* | 126 -> **0** | 126 -> **0** |
| `literature-derived` | 0 -> **43** | 0 -> 0 |
| `ai-altered` | 0 -> **72** | 0 -> **27** |
| `ai-generated` | 0 -> **11** | 0 -> **79** |
| `not-applicable` | 0 -> 0 | 0 -> **20** |

Statement evidence is 61 `semantic-source`, 43 `exact-source`, 11
`established-knowledge`, eight `trivial`, and three `none`. The final theorem
scope repair moved `thm-hausdorff-iff-the-diagonal-is-closed` from
`literature-derived`/`exact-source` to `ai-altered`/`semantic-source`; its core
biconditional remains source-backed, while the repaired library-local page
scope is a material restatement.

## 3. Generated-statement report

Eleven of the cumulative generated-risk seeds are in Wave 6.

| disposition | count |
|---|---:|
| `verified-generated` | 7 |
| `narrow` | 1 |
| `pending` with zero cone | 3 |

The largest cones are six for `cex-laurent-nested-intervals-empty` and
`rem-r-native-topology-scope`; both were counterexample-searched by Alpha and
read CLEAN by the independent DeepSeek refuter. The repaired
`cex-zero-times-infinity-indeterminate` has cone three and is `narrow`. The
three pending zero-cone seeds are
`cex-two-maps-into-an-indiscrete-space-agreeing-on-a-dense-set`,
`ex-open-set-decomposed-into-components`, and
`rem-what-the-diagonal-criterion-gives-and-what-it-costs`. No pending seed is
load-bearing, and the generated-risk gate passes.

## 4. Fatal-error and repair report

**Seven mathematical defects were repaired: five at A4 and two at A8.**

| class | count | items / disposition |
|---|---:|---|
| incorrect or insufficient dependency citation | 4 | three Laurent-field items gained the exact natural-order or Archimedean dependency they use; `cex-limsup-infinite-not-attained-in-r` lost an unused duplicate Fact and stale local citations |
| false or overstrong mathematical prose | 3 | `cex-zero-times-infinity-indeterminate` now states the exact extended limit; the Hausdorff theorem no longer claims every page consequence is a diagonal pullback; the closed-graph example now says “compact Hausdorff codomain” |

The A8 rule was fatal-only. Of the six newly exposed rejections, Alpha
classified two `confirmed_fatal`, two `confirmed_nonfatal`, and two
`false_positive`. **Only the two fatal items changed.** Both final texts were
independently certified by GPT 5.6 Terra and rejudged by DeepSeek V4 Pro and
GPT 5.6 Terra; both pairs passed. Nonfatal and false-positive decisions caused
no item, page, contract, impact, or judge mutation at A8.

A9 found one page sentence made stale by the theorem repair and narrowed it to
the exact diagonal-pullback consequences. That was page consistency work, not
an item repair, and caused no rejudge.

## 5. Source and URL report

The exact paired target contained 30 unique repaired items: five mathematical
A4 repairs and 25 unique source-corrected items. The source corrections comprise
19 topology items whose legacy Munkres/Steen-Seebach references pointed to a
biography or an article about a book, plus eight A6 URL corrections with two
items overlapping the A4 set.

The liveness sweep covered 92 scoped URLs: 89 live and three unsuccessful.
The official Padua homotopy PDF was retained as a transient timeout; the dead
redundant MIT copy was removed from six items in favour of their existing live
UC Riverside source; and the dead legacy UCL host was replaced by the live
official UCL host on two items. Every source-only final item received an
independent final-text reading.

## 6. Independent readers and judge comparison

- DeepSeek V4 Pro independently read all 126 scoped items from self-contained,
  tool-less tasks: **126/126 CLEAN**.
- All 93 high/critical proof contracts carry complete item-specific Alpha risk
  reviews; strict contract validation is 106/106.
- The spine receipt validates 59/59 current attestations.
- The exact target judge ledger contains 64 calls: the initial 60 calls for 30
  pairs plus four calls rejudging only the two fatal repairs.

Latest usable target verdicts:

| outcome | count |
|---|---:|
| both pass | 22 |
| DeepSeek-only reject | 1 |
| Terra-only reject | 7 |
| both reject | 0 |
| incomplete/null | 0 |

DeepSeek's latest target results are 29 pass / 1 reject; Terra's are 23 pass /
7 reject. The live DeepSeek-only rejection is a false positive. The seven live
Terra-only rejections are six confirmed nonfatal and one false positive. The
two earlier Terra fatal rejections are historical pre-repair rows; their exact
repaired contexts now pass both lanes.

The append-only judge ledger also retains 67 rows for 44 ids from a stopped
partial full-wave attempt. They are attempt evidence only. They are outside the
30-item repair receipt, are ignored by target-scoped coverage, and did not
cause any rejudging.

## 7. Twice-touched escalations

The orchestrator personally re-read the ten items escalated by combined touch
and judge history. Eight are sound: four judge objections are confirmed
nonfatal and two are false positives, while the two earlier nonfatal Laurent
and homotopy findings also close within the binding threshold. The two genuine
fatal items are the Hausdorff theorem scope sentence and the closed-graph
example's missing Hausdorff hypothesis; both were repaired, certified, impact-
audited, and rejudged. Full per-item dispositions are in `wave6-A9.md`.

## 8. Mechanism changes made during this wave

- Replaced the audit-role GPT 5.6 Opus/Sonnet placeholders with the owner-set
  lineup: GPT 5.6 Sol for author/Beta/Alpha and GPT 5.6 Terra for certifiers
  and the Codex judge lane. Every Codex lane is
  explicitly `xhigh` with `model_context_window=1000000`.
- The paired judge is DeepSeek V4 Pro with thinking enabled at API `max` plus a
  fresh read-only GPT 5.6 Terra process at `xhigh`/1M. The DeepSeek API smoke
  test passed HTTP 200 using the key in the companion project's `.env` without
  exposing it.
- Published-audit A7 now derives its sweep only from the exact repaired-item
  receipt. A8 rejudges and stamps only items materially repaired there; no page
  sibling or unchanged consumer is swept.
- `level-coverage` accepts current-item hash coverage while preserving the
  frozen pair context, and requires exact Alpha adjudication for every live
  rejection. `step8-guard` mechanically enforces fatal-only A8 item edits.
- The driver now has URL-sweep and DeepSeek refuter orchestration, local
  TypeScript-loader fallbacks, lineup-aware comparison/stamping, and passing
  property tests for the targeted workflow.

## 9. Owner queue

Policy or owner-only choices remain:

1. Decide the standing Fact-fidelity convention: whether a `[F#]`/`[L#]` may
   state a one-line consequence of its cited target or must co-cite the exact
   definition supplying that consequence.
2. Decide whether the three zero-cone `pending` generated seeds in §3 should be
   driven to a concrete disposition even though none is load-bearing.
3. Decide whether to schedule nonfatal page polish recorded at A3/A6: the long
   nine-section Laurent overview, legacy count/position prose on the limits and
   real-topology A pages, and the grouping ambiguity in
   `rem-r-native-topology-scope`.
4. Decide whether to remove eight harmless declared-but-unlinked extra
   dependencies. They are not proof defects and no current consumer relies on
   their presence.
5. Decide repository retention for tracked dispatcher artifacts. Wave 4 is
   about 154 MB, Wave 5 about 6.9 MB, and Wave 6 about 51 MB on disk.
6. The earlier owner-only queue remains open where still applicable:
   `thm-konig`/`def-cofinality` Remark decisions and the
   `lem-of-naturals-positive` title/id issue. Wave 4 also remains at its own
   uncleared owner pause.

The Munkres biography/book-page source problem is closed in this wave. Link
liveness is now a workflow mechanism rather than a carried reminder.

## 10. Recorded against the orchestrator

- The first A7 receipt named only 13 repairs because it omitted 17 A4 topology
  source corrections. The omission was caught before final closure; the receipt
  was expanded to the exact 30 unique targets and only the missing 17 pairs
  were run.
- The first A10 run and commit occurred before that correction. Commit
  `b7b542a` is therefore an intermediate, unpushed Wave 6 checkpoint; the final
  corrective state is committed separately after this rundown.
- The stopped broad-sweep attempts remain append-only evidence. They are not
  silently presented as target coverage, and no item outside the 30-repair set
  was rejudged after the owner clarified the rule.

## 11. What clearing this pause does

Nothing publishes: the corpus was already published. Clearing the pause accepts
the provenance tags, seven fatal mathematical repairs, 25 unique source
corrections, one A9 page-consistency correction, and their evidence. It then
licenses computing and starting the next auditable wave.
