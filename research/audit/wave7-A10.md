# Wave 7 — A10 rundown and owner pause

Published-page retro-audit of dependency level 7. **A0 through A10 are
complete and every required gate is green.** Nothing changed publication
status, removed or renamed an id, or changed reading order.

**214 items, 179 proof-bearing, 1,827 relationships, 4 batches, 12 pages and
6 A/B pairs.** Baseline: `d38db82b23d6096da654a0d62836918ceb6e08fb`.

## 1. Gate results

| step | gates | result |
|---|---|---|
| A4 | 13 provenance, contract, source, render and structural gates | **CLEAR (13/13)** |
| A6 | strict contracts, risk, manifest, URL, generated-risk, spine and 812-consumer impact checks | **CLEAR (14/14)** |
| A8 | fatal-only guard, 31-consumer impact audit, current-context targeted coverage | **CLEAR (3/3)** |
| A9 | decidable prose check plus reviewed warning entry points | **CLEAR (2/2)** |
| A10 | `precheck`, `depcheck`, `fwdcheck`, `extcheck`, `rendercheck`, `prosecheck`, `citecheck`, `depsource`, `level-coverage` | **CLEAR (9/9)** |

The final coverage receipt checks all 214 items, all 179 proof-bearing items,
all 1,827 relationships, 21 explicitly reconciled authored-plan drifts, the
59-item dependency spine, and the exact 48-item repair target. It has 48/48
current usable DeepSeek/Terra pairs. Its 35 warnings are durable Alpha outcomes
for current nonfatal or false-positive rejections; there is no unadjudicated
current fatal rejection.

## 2. Provenance census

All 214 scoped items entered without component provenance and leave fully
tagged.

| label | statement (before -> after) | proof (before -> after) |
|---|---:|---:|
| *(untagged)* | 214 -> **0** | 214 -> **0** |
| `literature-derived` | 0 -> **41** | 0 -> **0** |
| `ai-altered` | 0 -> **154** | 0 -> **72** |
| `ai-generated` | 0 -> **19** | 0 -> **107** |
| `not-applicable` | 0 -> **0** | 0 -> **31** |
| `not-supplied` | 0 -> **0** | 0 -> **4** |

Statement evidence is 41 `exact-source`, 130 `semantic-source`, 24
`established-knowledge`, 14 `trivial`, and five `none`. Alpha independently
concurred with every D2 established-knowledge disposition. The one A8
provenance transition was `ex-harmonic-series-diverges`, whose repaired
library-local statement moved from `literature-derived`/`exact-source` to
`ai-altered`/`semantic-source`.

## 3. Generated-statement report

Wave 7 contains 19 generated-statement seeds. None has a logical consumer.

| seed | cone | logical | disposition |
|---|---:|---:|---|
| `cex-psi-of-one-over-x-has-no-limit-at-zero` | 4 | 0 | `verified-generated` |
| `ex-x-times-psi-tends-to-zero` | 4 | 0 | `verified-generated` |
| `cex-irregular-summability-matrix` | 3 | 0 | `verified-generated` |
| `rem-classical-oscillator-is-sine-of-one-over-x` | 2 | 0 | `verified-generated` |
| `rem-where-the-archimedean-hypothesis-is-needed` | 2 | 0 | `verified-generated` |
| `cex-stolz-cesaro-converse-fails` | 1 | 0 | `verified-generated` |
| `ex-cauchy-complete-not-complete-field` | 1 | 0 | `verified-generated` |
| `cex-a-continuous-function-on-a-non-closed-subspace-with-no-extension` | 0 | 0 | `pending` |
| `cex-limit-not-unique-at-an-isolated-point` | 0 | 0 | `pending` |
| `cex-rolle-fails-over-a-non-complete-field` | 0 | 0 | `pending` |
| `cex-tietze-fails-in-a-t1-space-that-is-not-normal` | 0 | 0 | `pending` |
| `cor-complete-normality-is-hereditary` | 0 | 0 | `pending` |
| `ex-a-urysohn-function-on-the-real-line` | 0 | 0 | `pending` |
| `ex-every-closed-subset-of-the-line-is-a-zero-set` | 0 | 0 | `pending` |
| `ex-limit-at-infinity-of-a-rational-function` | 0 | 0 | `pending` |
| `ex-the-first-dyadic-levels-of-the-urysohn-construction` | 0 | 0 | `pending` |
| `ex-tietze-extension-from-a-closed-interval-of-the-line` | 0 | 0 | `pending` |
| `rem-hereditary-and-productive-separation-ledger` | 0 | 0 | `pending` |
| `rem-the-choice-cost-of-urysohns-lemma-and-of-tietzes-theorem` | 0 | 0 | `pending` |

The seven nonzero cones are direct citation mentions only. The twelve pending
seeds have zero cone. The generated-risk gate passes; no generated statement
is load-bearing.

## 4. Fatal-error and repair report

A4/A6 produced **48 exact unique repair targets**: 46 material A4 items plus
two additional pure-class items repaired by Alpha. Their final texts were all
read by Alpha, independently certified by GPT 5.6 Terra, and covered by the
DeepSeek refuter union. The machine-exact list and reasons are in
`wave7-rejudge-targets.json`.

Primary false/overstrong-statement or missing-hypothesis repairs affected 25
items: `cex-composition-of-limits-fails`,
`cex-limit-not-unique-at-an-isolated-point`,
`cor-compact-domain-maps-are-uniformly-continuous`,
`cor-separated-uniformizable-iff-tychonoff`,
`def-completeness-properties`, `def-gauge-of-pseudometrics`,
`def-uniform-cover-space`, `ex-a-urysohn-function-on-the-real-line`,
`ex-abel-dini-pair-for-the-harmonic-series`,
`ex-harmonic-series-diverges`, `ex-rational-function-field-order`,
`fs-nested-intervals-implies-lub`, `fs-nth-term-test-converse`,
`lem-completely-regular-topologies-come-from-continuous-pseudometrics`,
`lem-entourage-and-uniform-cover-dictionary`,
`lem-metric-uniformity-dictionary`,
`rem-strength-order-of-the-nonnegative-tests`,
`rem-the-choice-cost-of-urysohns-lemma-and-of-tietzes-theorem`,
`thm-compact-hausdorff-open-cover-uniformity`,
`thm-compact-hausdorff-space-has-a-unique-compatible-uniformity`,
`thm-completeness-equivalences`, `thm-composition-of-function-limits`,
`thm-hausdorff-completion-of-a-uniform-space`,
`thm-three-definitions-of-uniform-space-are-equivalent`, and
`thm-uniformizable-iff-completely-regular`. This class includes the eleven
empty-carrier qualifications, the Laurent/completeness containment repairs,
false universal or uniqueness prose, and overstrong titles and Remarks.

Primary proof, Fact, dependency, citation, or source-precision repairs affected
the other 23 targets: `cor-perfect-normality-is-hereditary`,
`ex-cauchy-complete-not-complete-field`,
`ex-pointwise-but-not-uniform-convergence-on-a-countable-domain`,
`ex-r-and-open-interval-homeomorphic-not-uniformly-isomorphic`,
`ex-sierpinski-space-is-normal-and-not-completely-regular`,
`ex-the-metric-urysohn-function-costs-no-choice`,
`lem-cauchy-filter-with-a-cluster-point-converges`,
`lem-convergent-filters-are-cauchy`,
`lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity`,
`lem-finite-minima-of-continuous-unit-interval-maps`,
`lem-limit-implies-local-boundedness`,
`lem-minimal-cauchy-filter-associated-to-a-cauchy-filter`,
`lem-point-filters-are-dense-in-the-minimal-cauchy-filter-space`,
`lem-symmetric-entourages-form-a-base`,
`rem-classical-oscillator-is-sine-of-one-over-x`,
`thm-complete-and-totally-bounded-uniform-spaces-are-compact`,
`thm-countably-based-uniformity-is-pseudometrizable`,
`thm-limit-comparison-test`, `thm-ratio-test`, `thm-root-test`,
`thm-sequential-criterion-for-function-limits`,
`thm-tietze-extension-theorem`, and `thm-urysohn-lemma`.

At A8 Alpha adjudicated exactly 40 A7 rejection rows: four
`confirmed_fatal`, 29 `confirmed_nonfatal`, and seven `false_positive`.
**Only the four fatal items changed:** `def-completeness-properties` (Remark
exclusivity), `ex-abel-dini-pair-for-the-harmonic-series` (slowest/last
divergent superlatives), `ex-harmonic-series-diverges` (slowest-divergence
superlative), and `thm-hausdorff-completion-of-a-uniform-space` (categorical
“reflection” title). The fatal-only guard proves exactly four changed hashes
against four fatal licences. All four final texts were independently certified,
impact-audited across 31 consumers, rejudged only on those four ids, and passed
both lanes. The 36 nonfatal/false-positive rows caused no A8 edit.

A9 found two stale-scope defects: the uniform-spaces page repeated the old
“complete Hausdorff reflection” phrase, and the oscillator Remark globally
said later notions were absent from the library. The page now says “Hausdorff
completion”; the Remark now limits unavailability to its earlier reading-order
position and states the counterexample convention explicitly. The one changed
item was independently certified on final hash, its two direct citation
consumers are `still-licensed`, and only that item was rejudged. Intermediate
Terra rejections caught ambiguous wording and remain evidence; the final
DeepSeek/Terra pair passes.

No invalid witness required replacement, and no item was deleted.

## 5. Independent readers, impact and source checks

- Alpha recovered the durable record and read 214/214 items and 1,827/1,827
  relationships.
- The routed DeepSeek V4 Pro independent-reader union is 160/160, including all
  repair targets and risk-selected items.
- All 154 high/critical contracts have current risk reviews; strict proof
  contracts pass 179/179.
- The A4/A6 impact receipt covers 214 changed interfaces and 812 affected
  consumers, all dispositioned. A8 covers four interfaces/31 consumers; A9
  covers one interface/two direct consumers.
- The dependency-spine receipt is current for 59/59 proofs.
- The URL sweep checked 110 scoped URLs; 110/110 returned live HTTP responses.

## 6. Judge comparison

The append-only ledger contains 126 rows: DeepSeek V4 Pro 65 calls (49 pass,
11 reject, five null) and GPT 5.6 Terra 61 calls (25 pass, 35 reject, one null).
Null and superseded contexts remain attempt evidence.

On the final usable context for each of the exact 48 targets:

| outcome | items |
|---|---:|
| both pass | 21 |
| both reject | 8 |
| DeepSeek-only reject | 3 |
| Terra-only reject | 16 |
| incomplete/null | 0 |

Thus current DeepSeek coverage is 37 pass / 11 reject, and current Terra
coverage is 24 pass / 24 reject. The 35 current rejection rows are exactly 29
confirmed-nonfatal and six false-positive durable outcomes. The original four
Terra fatal detections are historical pre-repair contexts whose repaired items
now pass both lanes. Detection adjudication by lane was: DeepSeek 10 nonfatal,
one false positive, zero fatal; Terra 19 nonfatal, six false positives, four
fatal. Three A9 Terra rejection contexts are superseded by the final passing
pair and were never used as clearance.

## 7. Twice-touched personal audit

A9 personally re-read all 48 repaired items, all 11 published home pages that
contain them, and all 32 items escalated by combined touch/refutation history.
Its receipt gives an item-by-item disposition. Twenty-eight escalated items
were sound on current text; the four A8 fatal items were sound after repair.
The separate A9 decay sweep then produced the two narrow scope corrections
described above.

## 8. Workflow configuration and mechanism record

- Audit-Beta, Alpha and independent Sol readers ran as GPT 5.6 Sol at `xhigh`
  with a 1,000,000-token context. Read-only certifiers and the Codex judge lane
  ran GPT 5.6 Terra with the same settings. DeepSeek V4 Pro used API `max`.
- The DeepSeek API smoke test passed HTTP 200 using the companion project's
  `.env` key without exposing it.
- A7 spent only on the machine-recorded 48 repair ids. A8 spent only on the
  four fatal repairs. A9's later item repair spent only on that same one item.
  No page sibling or unchanged consumer was rejudged.
- Failed transports, stale contexts, certifier hash-normalization mismatch, and
  intermediate A9 wording rejections remain append-only evidence and are not
  counted as final coverage.
- Host-side authoritative gates were used where the workspace sandbox blocked
  synchronous child spawning; this changed execution transport, not gate code
  or scope.

## 9. Owner queue

Wave 7 produced **no proposed deletion, id rename/removal, or structural
reading-order change**. The delegated restatement record is complete in A3,
Alpha's report, the 40-row adjudication ledger, and A9.

Optional policy choices remain:

1. Decide whether the twelve zero-cone generated seeds in section 3 should be
   driven beyond `pending` even though none is load-bearing.
2. Decide repository retention policy for the tracked dispatcher prompts,
   logs and result archives.
3. Retain or resolve prior-wave owner queues where still applicable, including
   the standing Fact-fidelity convention and older id/title questions.

## 10. What clearing this pause does

Nothing publishes: every page was already published and no status was flipped.
Clearing the pause accepts the Wave 7 provenance determinations, 48 exact
A4/A6 repair targets, four fatal-only A8 repairs, two A9 stale-scope
corrections, and their final evidence. It then licenses computing the next
auditable wave.
