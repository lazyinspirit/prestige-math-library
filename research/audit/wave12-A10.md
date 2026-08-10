# Wave 12 — A10 rundown; final 9/9 gates pass

Published-page retro-audit of dependency level 12. Wave 12 mathematical and
page text is frozen after A9. A0 through A9 are complete. This rundown writes
no item, page, stamp, snapshot, shared receipt, commit, or push.

Baseline: `442f831c94882899c1dc5559b36599b0f78a99c8`.

**61 items, 48 proof-bearing items, 890 current relationships, four pages, and
two A/B pairs.**

## 1. Gate status and exact blocker boundary

The authoritative final command

`node tools/gates.mjs --audit --step A10 --run wave12 --json`

reports **9/9 required gates passing, zero failures, and zero gate-level
warnings**. Precheck, dependency, forward-reference, external-reference,
render, prose, advisory citation, dependency-source, and level-coverage gates
all pass.

The earlier A10 run reported 8/9 because global `depcheck.mjs` found four
unstamped items then owned by concurrent later waves:

- Wave 13: `thm-jordan-boundary-criterion` and
  `thm-lebesgue-criterion-in-rn`;
- Wave 14: `thm-e-is-irrational` and
  `thm-normalized-exponential-functional-equation`.

At that earlier run, each was published but had neither
`verification.audited` nor `verification.verified`. None was in Wave 12 scope,
and Wave 12 did not edit or stamp it. The historical blocker split was:

- **Wave 12-local blockers: zero.**
- **External/shared blockers: four later-wave verification stamps, producing
  the one global depcheck failure.**

Waves 13/14 have now independently licensed those items, and final
`depcheck.mjs` passes. The later Wave 14 display repair also makes final
`rendercheck.mjs` pass. The Wave 12 spine receipt was count-only refreshed to
the current high-blast-radius scope SHA-256 while preserving the same 59 ids
and proof hashes; final level coverage passes with its 28 exact adjudication
warnings and zero errors. The historical shared blockers are therefore fully
cleared, with **zero Wave 12-local or external A10 blockers remaining**.

The byte-honest A6 raw impact window also remains preserved rather than
normalized: concurrent Waves 13/14 changed 137 foreign interfaces, so the raw
window contains 198 sources and 458 consumers. The separate Wave12-isolated
receipt passes for exactly 61 Wave 12 interfaces and 364/364 consumers. This is
an honest shared-state limitation of the raw A6 receipt, not a Wave 12-local
mathematical failure. The later stage receipts independently pass for 3/65 A8
and 8/144 A9 interfaces/consumers.

## 2. Provenance census

All 61 scoped items entered at A0 without component provenance and leave fully
tagged. All legacy `origin` values were preserved; no scoped item retained a
legacy `authorship` field.

| label | statement (before -> after) | proof (before -> after) |
|---|---:|---:|
| *(untagged)* | 61 -> **0** | 61 -> **0** |
| `literature-derived` | 0 -> **0** | 0 -> **0** |
| `ai-altered` | 0 -> **60** | 0 -> **0** |
| `ai-generated` | 0 -> **1** | 0 -> **48** |
| `not-applicable` | 0 -> **0** | 0 -> **13** |

The exact label/evidence cross-tab is:

| component label × row evidence | before | after |
|---|---:|---:|
| statement untagged × no audit evidence | 61 | 0 |
| statement `ai-altered` × `semantic-source` | 0 | 60 |
| statement `ai-generated` × `none` | 0 | 1 |
| proof untagged × no audit evidence | 61 | 0 |
| proof `ai-generated` × `semantic-source` | 0 | 48 |
| proof `not-applicable` × `semantic-source` | 0 | 12 |
| proof `not-applicable` × `none` | 0 | 1 |

There are no `exact-source`, `trivial`, or
`established-knowledge` rows and therefore no D2 URL waiver. Alpha read all
61 classifications, evidence classes, rationales, and exact final URL lists.
The sole positive generated determination is
`rem-rn-conventions-and-scope`; it is a site-specific scope and reading-order
ledger, not a default assigned for lack of a source.

## 3. Generated-statement report

The exact-current global receipt has 125 generated Statement seeds, 40 with
nonzero cones, and maximum cone size 10. Wave 12 intersects it in exactly one
seed:

| seed | cone | logical consumers | direct-citation consumers | disposition |
|---|---:|---:|---:|---|
| `rem-rn-conventions-and-scope` | 7 | 1 | 7 | `verified-generated` |

The logical consumer is
`rem-total-derivative-conventions-and-linear-map-seam`. The seven direct
consumers are that item plus
`cex-the-one-norm-comes-from-no-inner-product`,
`def-euclidean-inner-product`, `def-norm-and-normed-space`,
`ex-gamma-and-its-complement-computed-for-a-plane-series`,
`thm-absolute-convergence-in-rn`, and
`thm-rearrangement-sums-lie-in-an-affine-subspace`.

Alpha tried the required disposition order. The item cannot be retagged
because its site-local inventory has no literature counterpart; restatement,
unfolding, and narrowing do not remove the honest generated core. Alpha
corrected the inherited false absent-linear-map sentence against
`def-linear-map`, read the complete seed and all seven consumers, obtained
an exact-final DeepSeek clean result, and recorded every consumer
`still-licensed`. A8 then corrected the rational-power domain and A9
corrected the mean-value attribution. At current normalized hash
`3bc0109017578e0e21d3ddf0272d820c14a743fee977e67139f3897c0ea06255`,
the independent A9 Terra reader certified the item and the stamp-current
DeepSeek/Terra pair both kept it at context
`67135d00762e11f79bd1855a2f1545ff2a1a054c86b09cd5ca17c79d2649dfb3`.

The `verified-generated` disposition therefore remains exact-current. The
raw genrisk note preserves its earlier A6 hash as history; the A8/A9 receipts
supply the later exact-hash closure. Future batches remain forbidden from
adding new dependency edges to the seed.

## 4. Fatal-error and major-repair report

This table uses the build's defect groups and locations. It includes every
material fatal/major correction, while source-only changes and adjudicated
nonfatal compressions are reported separately. No item was deleted, renamed,
removed, or reordered.

| defect type | location | item/page and disposition |
|---|---|---|
| invalid inference | proof | `thm-norm-inequality-for-the-vector-valued-integral`: moved the square-root continuity construction after the definition of its bound `K`; the old order used `K` before it existed |
| incorrect/missing dependency citation | Facts/deps | A4 repaired `thm-cauchy-schwarz-and-the-euclidean-norm`, `lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric`, `cor-bolzano-weierstrass-in-rn`, `cor-vector-valued-ftc-and-lipschitz-bound`, `cex-the-one-norm-comes-from-no-inner-product`, `fs-the-rearrangement-sums-of-a-non-absolutely-convergent-series-fill-the-space`, `fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension`, and `lem-p-norms-are-norms-and-induce-the-published-metrics`: deleted eight unused Facts and 13 Fact links, relocated the two live Bolzano links, removed four stale dependencies, and added the exact `def-ordered-field` licence |
| incorrect/missing dependency citation | Remark/deps | `cor-bolzano-weierstrass-in-rn`: replaced the unsupported componentwise-convergence citation for coordinatewise boundedness with the exact finite norm comparison and removed the stale dependency |
| incorrect/missing dependency citation | Facts/deps | `cex-the-one-norm-comes-from-no-inner-product`: added `lem-p-norms-are-norms-and-induce-the-published-metrics`, the missing load-bearing result that proves the displayed one-norm is a norm |
| incorrect/missing dependency citation | Remark | `rem-rn-conventions-and-scope`: stopped calling `thm-mean-value-inequality` a theorem with the equality form refuted by the witness; the text now names the scalar mean-value equality generalisation and the surviving inequality separately |
| false/overstrong statement | Remark | `rem-rn-conventions-and-scope` and `def-norm-and-normed-space`: replaced the false claim that no linear-map definition/page existed with exact links to `def-linear-map` and narrowed only the genuinely absent operator-norm/dual-space interfaces |
| false/overstrong statement | Remark | `rem-rn-conventions-and-scope`: replaced “nonnegative base and rational exponent,” which wrongly included negative powers of zero, with the exact positive-base/all-rational and zero-base/positive-rational domains |
| false/overstrong statement | item prose | `ex-componentwise-convergence-and-a-vector-valued-integral-computed`: corrected the opening and closing claim from differentiation plus integration to the componentwise sequence-convergence and integration tools actually exercised |
| false/overstrong statement | Remark | `def-the-space-of-summing-directions`: replaced its second stale absent-linear-map claim with the exact published definition and the still-absent dual-space/representation boundary |
| false/overstrong statement | Remark | `fs-heine-borel-holds-in-every-normed-space`, `thm-all-norms-on-rn-are-equivalent`, and `fs-all-norms-on-any-real-vector-space-are-equivalent`: narrowed broad “general normed-space theory is absent” denials to the precise classification or compact-unit-ball converse not proved by these items |
| missing hypothesis/choice scope | proof | `ex-componentwise-convergence-and-a-vector-valued-integral-computed`: changed the convergence proof's positive rational epsilon to the required arbitrary positive real epsilon |
| missing hypothesis/choice scope | Statement | `def-vector-valued-derivative-and-integral`: restricted the subinterval-integrability clause to nondegenerate `[c,d]` with `c<d` |
| missing hypothesis/choice scope | Statement | `thm-norm-inequality-for-the-vector-valued-integral`: made vector integrability conditional on `a<b`, retaining only the oriented `0<=0` value at `a=b` |
| missing hypothesis/choice scope | title | `def-vector-valued-derivative-and-integral`: distinguished the arbitrary-domain intrinsic derivative from the interval-based componentwise Riemann integral |
| missing hypothesis/choice scope | title | `thm-norm-inequality-for-the-vector-valued-integral`: conditioned norm-integrability on `a<b` while retaining the oriented inequality for `a<=b` |
| missing hypothesis/choice scope | page prose | `library/real-analysis/rn-as-a-normed-space.md`: made the summary use the same `a<b` integrability and `a<=b` oriented-inequality boundary |
| invalid witness | — | none |

The five paired-judge confirmed-fatal tuples are all closed by the A8/A9
repairs named above: three Terra detections and two DeepSeek detections. No
choice-scope defect or invalid witness was found. Retained 30-second
compression findings are not silently promoted into this report.

## 5. Source closure, readers, impact, contracts, spine, and edges

The initial URL sweep found 44/46 direct successes. A6 removed the redundant
Lebl draft 404 from 28 items and the redundant KTH 404 from two items. It
replaced six off-topic semantic routes with exact subject-matter sources:
Toronto/APEX for componentwise limits, Gressman/Semmes for the vector-integral
norm inequality, Abbott for unequal iterated limits, Faris for the shrinking
rectangle, TCD/KSU for the derivative counterexample, and Lebl/APEX for the
worked componentwise example. The final sweep is **52/52 live**; provenance
labels did not change.

- Alpha read all 61 scoped items, all four pages, all 48 proof contracts, 152
  distinct outside dependency targets, 364 A6 impact consumers, and all 59
  current proof-bearing top-100 spine items without sampling.
- Strict contracts pass 48/48 with 398 numbered steps, 667 Fact/source
  citations, and 384 boundary rows, zero errors and zero warnings.
- The proof spine passes 59/59. The A6 risk receipt covered all 48
  proof-bearing items at their then-current hashes: 45 critical, two high,
  zero moderate, and one ordinary; 47 had independent refuter routes and all
  48 were clean or Alpha-clean. Every proof-bearing item changed after that
  receipt is separately bound by the A8/A9 exact-final certification and judge
  records below; the A6 receipt is not misdescribed as an A9 hash snapshot.
- The append-only A6 DeepSeek union has 53/53 exact-final clean routes. The A6
  Terra union certified 39/39 repair/source targets. A8 independently certified
  all three fatal repairs. A9 independently certified all eight edited items
  plus the repaired A page, 9/9 with `FINDINGS: NONE`.
- A6 isolated impact passes 61 interfaces / 364 consumers; A8 passes 3/65; A9
  passes 8/144. Every required consumer is `still-licensed`; no consumer was
  edited.
- The A6 edge audit closed 889/889 relationships, including the mandatory
  frozen 29-edge Wave12-to-Wave11 barrier with zero stale, stronger, or
  misdirected edges. A9 added the one exact
  `def-the-space-of-summing-directions -> def-linear-map` dependency. The
  final manifest therefore contains **890** relationships: 651
  published-backward, 235 same-batch, and four forward.
- Root's no-sampling repeated-touch/rejection escalation covers 38/38 unique
  ids. A9 separately reread all 39 repair/source targets, all four pages, every
  denial-language match, and all 144 affected consumers.

## 6. Judge comparison and append-only adjudications

The append-only ledger has **116 verdict rows**. DeepSeek V4 Pro made 58 calls:
50 pass, eight reject, zero null. GPT 5.6 Terra made 58 calls: 22 pass, 36
reject, zero null. The final 43-item repair-target surface has matching frozen
contexts everywhere and this latest agreement:

| latest exact-item outcome | items |
|---|---:|
| both pass | 18 |
| both reject | 3 |
| DeepSeek-only reject | 1 |
| Terra-only reject | 21 |
| incomplete/null | 0 |

The three both-reject ids are
`cex-powers-on-the-unit-interval-converge-pointwise-not-uniformly`,
`cex-uniform-convergence-does-not-control-derivatives`, and
`thm-mean-value-inequality`. The DeepSeek-only id is
`thm-uniform-derivative-limit-on-a-closed-interval`.

The 21 Terra-only ids are
`cex-dini-needs-a-compact-domain`,
`cex-dini-needs-monotonicity`,
`cex-m-over-m-plus-n-has-noncommuting-iterated-limits`,
`cex-mean-value-equality-fails-for-a-vector-valued-function`,
`cex-the-mean-value-inequality-is-attained`,
`cex-the-one-norm-comes-from-no-inner-product`,
`cor-bolzano-weierstrass-in-rn`,
`cor-uniform-cauchy-criterion-function-series`,
`def-the-space-of-summing-directions`,
`ex-componentwise-convergence-and-a-vector-valued-integral-computed`,
`fs-all-norms-on-any-real-vector-space-are-equivalent`,
`fs-componentwise-boundedness-gives-a-convergent-sequence-in-every-dimension`,
`fs-heine-borel-holds-in-every-normed-space`,
`lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric`,
`lem-p-norms-are-norms-and-induce-the-published-metrics`,
`lem-uniform-convergence-implies-pointwise-convergence-real-functions`,
`lem-uniform-integral-error-bound`,
`thm-all-norms-on-rn-are-equivalent`,
`thm-cauchy-schwarz-and-the-euclidean-norm`,
`thm-componentwise-limits-and-continuity`, and
`thm-norm-inequality-for-the-vector-valued-integral`.

All **44** unique exact `(id, model, context, item)` rejection candidates are
adjudicated: five `confirmed_fatal`, 38 `confirmed_nonfatal`, one
`false_positive`, and zero unadjudicated.

- DeepSeek's eight candidates resolve to two fatal and six nonfatal. Both
  fatal detections are on
  `thm-norm-inequality-for-the-vector-valued-integral`: the pre-A8
  singleton-integrability type error and the post-A8 title overstatement.
- Terra's 36 candidates resolve to three fatal, 32 nonfatal, and one false
  positive. Its fatal detections are the pre-A8 degenerate-subinterval claim in
  `def-vector-valued-derivative-and-integral`, the negative-power-of-zero
  scope in `rem-rn-conventions-and-scope`, and the post-A8 derivative/integral
  title mismatch in `def-vector-valued-derivative-and-integral`.
- Terra's sole false positive is `lem-uniform-integral-error-bound`: its
  direct `def-oriented-integral` citation exactly supplies the challenged
  equal-limit and antisymmetry clauses.

The first A9 eight-item pair was preserved but could not bind the later
independent `verified` metadata. The exact same eight ids were therefore
paired again after certification. On the stamp-current pair DeepSeek kept all
eight; Terra kept `def-vector-valued-derivative-and-integral` and
`rem-rn-conventions-and-scope` and rejected six nonfatal citation/prose
compressions. The pass-only stamp tool stamped those two and honestly skipped
the six rejected items; all eight retain independent certification, and the
adjudication ledger closes every skip.

## 7. Coverage receipt

`research/audit/wave12-coverage.json` binds manifest SHA-256
`32bbde68b3db28eeec295bfa3e8a93168b4e25d23e9967735656705fefd1f0b1`
and attests:

- 61/61 scoped items and 48/48 proof-bearing items;
- 890 final relationships;
- 43/43 exact repair/source/scope-denial judge targets;
- 44/44 exact rejection candidates adjudicated;
- strict contracts 48/48;
- the A6 29-edge frozen Wave12-to-Wave11 barrier;
- A6, A8, and A9 impact closure with no unresolved consumer.

The current A10 `level-coverage.mjs` gate passes. Its output contains 28
warning lines for exact adjudicated nonfatal/false-positive evidence and zero
coverage errors. Historical confirmed-fatal rows point to repaired text and do
not constitute current failures.

## 8. Owner queue and delegated-restatement record

Wave 12 proposes **no deletion, id rename/removal, or structural reading-order
change**. The narrowed structural owner queue is empty.

The complete delegated debatable-restatement record remains inspectable:

- A3 approved the exact order-field restatement in the p-norm proof and
  preserved the two Bolzano citations that the first deletion proposal would
  incorrectly have removed.
- A6 replaced two stale absent-linear-map claims with the exact published
  abstract interface while preserving the genuinely absent operator-norm and
  dual-space seams; it also adjudicated six source-backed semantic
  restatements without laundering their local deltas into exact-source labels.
- A8 narrowed vector integrability to nondegenerate subintervals, corrected
  the zero-base rational-power domain, and conditioned the vector-integral
  theorem's integrability premise on `a<b`.
- A9 corrected the derivative/integral title split, the vector-integral title
  boundary, the mean-value witness attribution, the worked example's two-tool
  description, the second stale linear-map denial, three broad
  normed-space-theory denials, and the A-page's degenerate-interval summary.

All retained judge/refuter compressions are exact-hash nonfatal debt under the
binding 30-second/R1 rule, not structural owner requests. In particular the
current `rem-rn-conventions-and-scope` phrase “Everything downstream”
is overbroad beside its immediately stated clause-level exceptions, but its
intended metric-interface restriction is immediate and was adjudicated
nonfatal; R1 forbade a further A9 edit.

The earlier external/shared four-id depcheck pause condition in section 1 is
now cleared. The final quiescent-worktree A10 suite passes 9/9. No A11, commit,
push, or publication action is authorized here.
