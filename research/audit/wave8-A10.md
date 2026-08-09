# Wave 8 — A10 rundown

Published-page retro-audit of dependency level 8. The Wave 8 mathematical text
is frozen after A9. A0 through A10 are complete and the sole owner pause is
open. The formerly concurrent Wave 9/10 repairs now carry their final
independent stamps, so the shared repository gates are clean.

Baseline: `6fb3b6c9d08752db2239a2e0794752f0f69107fc`.

**139 items, 116 proof-bearing items, 1,603 current relationships, three
batches, eight pages, and four A/B pairs.**

## 1. Gate status

| step | result |
|---|---|
| A4 | **clear** on the final namespaced and merged Wave 8 contracts, provenance, source, render, and structural checks |
| A6 | **clear** on strict contracts, risk, manifest, URL disposition, generated-risk, spine, independent-reader, and impact checks |
| A8 | **clear**: one changed hash against one fatal licence; one-interface/ten-consumer impact closure; exact one-item paired rejudge; exact-current coverage |
| A9 | **clear (2/2)**: decidable prose check and reviewed warning entry points; no edit |
| A10 | **clear (9/9)** on the final shared worktree |

The A10 coverage gate itself is green: 139/139 items, 116/116 proof-bearing
items, 1,603/1,603 relationships, eight exact planned-to-actual dependency
drifts, 59/59 spine attestations, and 17/17 required current judge pairs. Its
seven warnings are the durable Alpha dispositions for current nonfatal or
false-positive Terra rejections; there is no unadjudicated current fatal
rejection. Ordinary `depcheck` now passes without the pending-audit allowance,
as do the cycle, page, publication, and reference checks. `git diff --check`
passes.

## 2. Provenance census

All 139 scoped items entered without component provenance and leave fully
tagged.

| label | statement (before -> after) | proof (before -> after) |
|---|---:|---:|
| *(untagged)* | 139 -> **0** | 139 -> **0** |
| `literature-derived` | 0 -> **42** | 0 -> **0** |
| `ai-altered` | 0 -> **87** | 0 -> **71** |
| `ai-generated` | 0 -> **10** | 0 -> **45** |
| `not-applicable` | 0 -> **0** | 0 -> **19** |
| `not-supplied` | 0 -> **0** | 0 -> **4** |

Statement evidence is 42 `exact-source`, 87 `semantic-source`, and ten
`trivial`. There are no `established-knowledge` waivers and no classification
escalations. `wave8-provenance-adjudications.json` records the positive
determinations for all ten generated statements.

## 3. Generated-statement report

All ten generated seeds have an exact-current `verified-generated`
disposition. None has a logical consumer.

| seed | cone | logical | disposition |
|---|---:|---:|---|
| `cex-cantor-point-that-is-not-an-endpoint` | 4 | 0 | `verified-generated` |
| `cex-abel-test-needs-monotonicity` | 2 | 0 | `verified-generated` |
| `ex-cantor-function-values` | 2 | 0 | `verified-generated` |
| `ex-fixed-point-from-the-ivt` | 2 | 0 | `verified-generated` |
| `rem-paracompactness-choice-and-convention-ledger` | 1 | 0 | `verified-generated` |
| `cex-a-non-locally-finite-sum-can-be-discontinuous` | 0 | 0 | `verified-generated` |
| `ex-abel-test-applied` | 0 | 0 | `verified-generated` |
| `ex-dirichlet-test-with-period-three-signs` | 0 | 0 | `verified-generated` |
| `ex-finite-partition-of-unity-on-a-compact-space` | 0 | 0 | `verified-generated` |
| `ex-locally-finite-versus-point-finite-families` | 0 | 0 | `verified-generated` |

The nonzero cones are citation/forward-reference mentions only. DeepSeek read
each routed exact-current item and Alpha independently checked each bespoke
witness, computation, or page-specific synthesis.

## 4. Fatal-error and repair report

A4/A6 produced **17 exact unique item targets**: 15 material A4 items and two
additional source-repair items. Two A-page summaries were also repaired. The
machine-exact item list and reasons are in `wave8-rejudge-targets.json`.

| defect type | location | item/page and disposition |
|---|---|---|
| invalid inference | Remark | `cex-dense-set-of-measure-zero`: removed the false pairwise-intersection argument; density follows because the cover union contains the rationals |
| incorrect/missing dependency citation | Facts/deps | `cex-cauchy-product-of-convergent-series-diverges`: removed two unused Facts and the unused absolute-value dependency without fabricating uses |
| incorrect/missing dependency citation | Facts/deps/Remark | `cex-irrationals-are-not-f-sigma`: removed an unused Fact/dependency and cited Baire directly; its reversed countability sentence was corrected |
| incorrect/missing dependency citation | Facts/deps/proof | `cex-paracompactness-is-not-productive`: replaced the false statement being refuted as a source with nine true prerequisites and the explicit Sorgenfrey-plane contradiction |
| incorrect/missing dependency citation | Facts/deps | `cor-q-is-meager-and-not-g-delta`, `ex-cantor-set-in-ternary`, `fs-evt-holds-on-every-bounded-domain`, and `thm-composition-of-continuous-functions`: removed unused Facts and exactly the dependencies made obsolete |
| incorrect/missing dependency citation | Facts/proof | `lem-paracompact-hausdorff-cover-shrinking`: added the closed-neighbourhood equivalence that licenses the first shrinking step |
| incorrect/missing dependency citation | Facts | `thm-sequential-criterion-for-continuity`: removed a nonlicensing Remark source from the Fact while retaining the direct prose citation |
| incorrect/missing source | sources | `cex-product-of-uniformly-continuous-functions-need-not-be-uniformly-continuous` and `thm-mertens`: replaced inaccessible JHU support with live exact Rutgers and Gardner sources |
| false/overstrong statement | Remark | `thm-infinite-product-criterion`: removed the false claim that strict `p_k < 1` is essential under the tail definition |
| false/overstrong statement | title/opening/Remark | `rem-sums-proved-to-exist-but-not-evaluated`: narrowed the universal logarithm claim and the false exhaustive inventory |
| false/overstrong statement | page prose | `absolute-convergence-and-rearrangement.md`: separated dichotomy-driven results from summation-by-parts tests and narrowed logarithm necessity |
| false/overstrong statement | page prose | `continuity-ivt-evt-and-uniform-continuity.md`: limited compactness necessity to EVT/uniform continuity rather than IVT |
| missing hypothesis/edge case | Facts/proof | `lem-nondegenerate-interval-is-not-null`, `thm-compact-null-is-content-zero`, and `thm-continuous-image-of-a-compact-set-r`: restored the exact empty-subfamily/nonempty compactness split; the two theorems gained explicit empty-set branches |
| invalid witness | — | none |

At A8 Alpha adjudicated exactly eight Terra rejection rows: one
`confirmed_fatal`, six `confirmed_nonfatal`, and one `false_positive`.
**Only `cor-q-is-meager-and-not-g-delta` changed.** Alpha removed the false,
unused claim that every at-most-countable family has an `N`-indexed
presentation. The first exact-current Terra certification then caught the
remaining false generalisation to every countable space; Alpha narrowed it to
the rationals and real singletons. The final text was freshly certified, all
ten consumers remained licensed, and only that item was rejudged. No nonfatal
error was repaired at A8. A9 found no new claim decay and made no edit.

No invalid witness required replacement, and no item was deleted, renamed, or
reordered.

## 5. Independent readers, impact, contracts, and sources

- Alpha recovered the durable record and read all 139 scoped items, eight home
  pages, 166 distinct out-of-scope cited targets, and all 1,603 current
  relationships.
- Terra independently certified 19/19 required A4/A6 targets: 15 material
  items, two pages, and two additional Alpha source repairs. The final A8 item
  received a separate exact-final certification after the intermediate refusal.
- The routed DeepSeek independent-reader union is 113/113: 112 clean and one
  false-positive finding independently adjudicated by Alpha.
- Strict proof contracts pass 116/116. All 109 high/critical contracts carry
  current risk reviews, and the dependency spine is 59/59.
- The combined concurrent A4 interval impact receipt dispositions 239 changed
  interfaces and 729 consumers with wave ownership recorded. Wave 8 Alpha made
  no Wave 9/10 mathematical edit. The separate A8 receipt covers one changed
  interface and ten consumers, all `still-licensed`.
- The source sweep checked 123 URLs: 120 live and three failed. The two
  load-bearing JHU sources were replaced; the Dartmouth URL is redundant with
  live alternate support on all ten occurrences and has a recorded disposition.

## 6. Judge comparison

The append-only ledger has 36 calls: DeepSeek V4 Pro 18/18 pass; GPT 5.6 Terra
10 pass and eight reject. The extra call in each lane is the exact one-item A8
targeted rejudge.

On the final usable text of the exact 17 targets:

| outcome | items |
|---|---:|
| both pass | 10 |
| both reject | 0 |
| DeepSeek-only reject | 0 |
| Terra-only reject | 7 |
| incomplete/null | 0 |

The seven current Terra-only rejection rows are exactly six
confirmed-nonfatal dispositions and one false positive. The historical Terra
rejection of `cor-q-is-meager-and-not-g-delta` is the sole owner-confirmed
fatal detection; the repaired final text passes both lanes. Detection by lane:
DeepSeek zero rejection candidates and zero fatal detections; Terra eight
adjudicated candidates, one fatal, six nonfatal, and one false positive. There
are no nulls and all latest paired contexts are attested.

## 7. Personal-audit and scope record

The orchestrator personally re-read the repeatedly repaired
`rem-sums-proved-to-exist-but-not-evaluated`, its repeatedly edited home page,
and all eight A7-rejected items. The current surface is one repaired fatal
item, six confirmed nonfatal compressions, and one false positive. A9 then
re-read all 17 repaired items and all eight containing pages in full; it made
no mutation and no judge call.

Audit-Beta, Alpha, and independent readers ran as GPT 5.6 Sol at `xhigh` with
a 1,000,000-token context; Terra used the same `xhigh`/1,000,000-token
settings. DeepSeek V4 Pro used API `max`. The DeepSeek health check passed HTTP
200 using the companion `.env` key without exposing it.

## 8. Owner queue and closure condition

Wave 8 proposes **no deletion, id rename/removal, or structural reading-order
change**. The two long A-page summaries remain optional nonfatal prose debt,
not a structural owner request. All delegated mathematical and citation
restatements are inspectable in A3, the Alpha report, the eight-row A8
adjudication ledger, the personal audit, and A9.

The Wave 8 A10 gate has been rerun 9/9 after final Wave 9/10 certification. The
sole owner pause is open. Nothing is committed or pushed until the owner clears
shipment.
