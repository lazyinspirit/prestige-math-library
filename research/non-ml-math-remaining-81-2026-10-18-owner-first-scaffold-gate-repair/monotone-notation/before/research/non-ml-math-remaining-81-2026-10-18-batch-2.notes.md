# Batch 2 — Monotone Functions, Discontinuities, and Continuity Sets

Run: `non-ml-math-remaining-81-2026-10-18`  
Owner: beta · batch: `2` · scheduled dependency level: `0` · page order: `232`  
Scheduling input: `7096b1bbc6f2d70796b6d63080bb4b0fc6e781f6a5e4da539963fbb746842903`

## Authority and scope

The binding direction is `research/non-ml-math-remaining-81-2026-10-18-owner-authoring-direction.md`. It retains this exact pair and its existing 43 substantive carriers, and says the old `ex-conway-base-13-function` entry was removed from the current plan. I did not add that stale example or change any published item or library page. Both assigned pages and all 43 carrier items are already `published` in this workspace; the batch manifest records their present content as evidence.

The live plan is `research/plan-spec.json`: A-page order 232, B companion `monotone-functions-and-discontinuities-examples`, with the four required page prerequisites listed in the manifest. The owner direction and the live plan control over stale research snapshots.

## Design comparison and conflicts

- `research/plan-algebra-track-expansion-v2.md` §19 (the locations named around line 1263) controls the linked linear-algebra context. It identifies `vector-spaces-and-subspaces` and `linear-independence-bases-and-dimension` as suppliers of this real-analysis page. Its description is compatible with the current plan-spec prerequisites.
- `research/plan-algebra-track-expansion.md` line 357 is stale ordering history: it records the monotone page as moving from order 129 to 147. The live plan-spec order is 232, so the historical row does not control placement.
- `research/plan-complex-analysis-track.md` line 4488 is part of a dated 2026-07-28 snapshot explicitly saying the page was absent at that time. The current owner direction and current plan-spec supersede that snapshot.
- `research/plan-physics-algebras-track.md` and the linked construction directions were read as directed. This pair is not one of that file's thirteen construction-directed pairs; none of those local helper placements applies here.
- The current plan reconciliation records the removed stale Conway item. The live 43-item inventory is unchanged.

The mathematical scope and conventions in the current carriers were retained: the library uses *increasing/decreasing* for the strict notions and *nondecreasing/nonincreasing* for the weak notions. Lebl's textbook uses increasing/decreasing for the weak notions, so that source terminology was translated before comparing statements. No source convention was silently imported.

## Inventory and dependency levels

The A page contains 32 items: 8 definitions, 5 lemmas, 14 theorems, 2 corollaries, 2 false statements and 1 remark. The B page contains 11 items: 9 examples and 2 counterexamples. All items are current published carriers; no item or page content was changed.

The page prerequisites are `continuity-ivt-evt-and-uniform-continuity`, `cantor-set-baire-and-measure-zero`, `vector-spaces-and-subspaces`, and `linear-independence-bases-and-dimension`. The current page/item prerequisite bodies were inspected where used. None is an in-run batch prerequisite: batch 2 remains scheduled at level 0 and `cross-batch-dependencies.json` is empty. The actual item dependency graph has 43 nodes and levels 0–6; each label is one plus the maximum level of its in-batch suppliers, or zero when none are in-batch.

The transitive item dependency closure contains 387 present carrier IDs (43 assigned items and 344 external items); no dependency ID is missing. There are 124 distinct sources cited in assigned Facts blocks. The exact source sections used for the 34 proof-bearing items are preserved in the proof-contract file.

### Plan-spec versus current carrier dependencies

The current manifest records the actual published carrier dependencies because those are the hypotheses and named results used in the current proofs. The live plan-spec dependency lists differ on 36 items. These are recorded rather than silently harmonized:

| Item | Current carrier only | Plan-spec only |
|---|---|---|
| `def-monotone-function` | `def-injection-surjection-bijection` | — |
| `thm-monotone-one-sided-limits-exist` | `def-neighbourhood-r` | — |
| `def-classification-of-discontinuities` | `thm-two-sided-limit-iff-both-one-sided` | — |
| `thm-froda` | `def-continuity-real`, `def-equinumerous` | `lem-countable-iff-surjection-from-n`, `lem-q-and-irrationals-dense-r` |
| `thm-monotone-with-prescribed-discontinuity-set` | `def-interval`, `def-max-min`, `def-real-limit`, `lem-finite-set-has-max`, `lem-rat-embeds-dense`, `thm-froda`, `thm-monotone-discontinuities-are-jumps` | `cor-archimedean-reciprocal`, `def-function-limit`, `def-one-sided-limits` |
| `thm-continuous-injection-on-an-interval-is-strictly-monotone` | `lem-rat-embeds-dense` | `cor-continuous-image-of-an-interval-is-an-interval` |
| `thm-continuous-inverse` | `thm-algebra-of-continuous-functions`, `thm-composition-of-continuous-functions` | `thm-connected-subsets-of-r-are-intervals` |
| `def-oscillation` | `lem-of-triangle-inequality` | — |
| `thm-continuity-iff-oscillation-zero` | — | `cor-archimedean-reciprocal`, `lem-inf-epsilon`, `lem-sup-epsilon` |
| `lem-oscillation-superlevel-sets-are-closed` | `lem-extended-reals-complete` | `def-interior-closure-boundary-r`, `thm-closure-characterisations-r`, `thm-open-set-algebra-r` |
| `thm-discontinuity-set-is-f-sigma` | `def-classification-of-discontinuities` | — |
| `def-dirichlet-and-thomae-functions` | `lem-coprime-divides-product`, `lem-nat-embeds-int`, `thm-well-ordering-principle` | `def-countable`, `lem-int-bounded-above-has-greatest`, `thm-rationals-countable` |
| `thm-dirichlet-and-thomae-continuity-sets` | `def-canonical-natural`, `def-extended-reals`, `def-neighbourhood-r`, `lem-extended-reals-complete`, `lem-of-naturals-positive`, `lem-rat-embeds-dense`, `thm-closure-characterisations-r` | `def-countable`, `def-interval`, `lem-of-abs-value`, `lem-subset-of-countable`, `thm-of-archimedean`, `thm-rationals-countable` |
| `thm-continuity-set-realisation` | `def-neighbourhood-r`, `lem-of-naturals-positive`, `lem-rat-embeds-dense`, `thm-well-ordering-principle` | `def-countable`, `def-dirichlet-and-thomae-functions`, `def-interior-closure-boundary-r`, `def-oscillation`, `thm-continuity-iff-oscillation-zero`, `thm-rationals-countable` |
| `cor-no-function-is-continuous-exactly-on-q` | — | `def-nowhere-dense-meager`, `thm-baire-category-r` |
| `def-intermediate-value-property` | `cor-continuous-image-of-an-interval-is-an-interval`, `def-continuity-real`, `lem-monotone-with-interval-image-is-continuous` | — |
| `fs-intermediate-value-property-implies-continuity` | `def-canonical-natural`, `lem-of-naturals-positive` | `def-function-limit`, `def-limit-point-r` |
| `def-semicontinuity` | `lem-of-abs-value` | `def-interval` |
| `thm-semicontinuity-level-set-characterisation` | — | `def-interval`, `thm-continuity-preimage-characterisation`, `thm-open-set-algebra-r` |
| `thm-semicontinuous-evt` | `def-canonical-natural`, `lem-of-naturals-positive`, `thm-of-archimedean` | `thm-heine-borel-characterisation-r` |
| `lem-baire-category-in-a-closed-interval` | `def-limit-point-r`, `def-neighbourhood-r` | `cor-archimedean-reciprocal`, `def-nowhere-dense-meager`, `def-real-limit`, `def-sequence`, `lem-q-and-irrationals-dense-r`, `lem-rat-embeds-dense`, `thm-nested-interval-property`, `thm-rationals-countable`, `thm-recursion`, `thm-well-ordering-principle` |
| `thm-baire-one-continuity-points` | `def-canonical-natural`, `def-limit-point-r`, `def-max-min`, `def-neighbourhood-r`, `lem-of-naturals-positive`, `thm-algebra-of-continuous-functions`, `thm-continuity-preimage-characterisation`, `thm-open-set-algebra-r` | `thm-continuity-iff-oscillation-zero` |
| `lem-additive-bounded-above-on-an-interval-is-linear` | `def-canonical-natural`, `lem-of-naturals-positive` | `lem-of-q-dense`, `lem-q-and-irrationals-dense-r` |
| `thm-cauchy-functional-equation-regularity` | `def-complete-ordered-field`, `def-neighbourhood-r`, `lem-rat-embeds-dense` | `def-metric-topology`, `lem-of-q-dense`, `lem-q-and-irrationals-dense-r`, `lem-real-line-is-a-metric-space` |
| `lem-hamel-basis-exists` | `def-axiom-of-choice`, `def-countable`, `def-injection-surjection-bijection`, `def-internal-direct-sum`, `def-linear-independence`, `def-linear-subspace`, `def-natural-numbers`, `def-sum-of-linear-subspaces`, `lem-countable-iff-surjection-from-n`, `lem-dependent-iff-a-vector-lies-in-the-span-of-the-others`, `lem-direct-sum-criterion`, `lem-span-monotone-and-idempotent`, `lem-span-of-a-single-vector`, `lem-sum-is-span-of-union`, `thm-r-uncountable`, `thm-rationals-countable`, `thm-zorn` | `def-finite-sum`, `lem-finite-sum-laws` |
| `fs-additive-implies-linear` | `lem-q-and-irrationals-dense-r` | `lem-span-is-the-set-of-linear-combinations` |
| `ex-thomae-values-and-oscillation-computed` | `def-canonical-natural`, `lem-integer-part`, `lem-of-naturals-positive` | `cor-archimedean-reciprocal`, `cor-gcd-quotients-coprime`, `def-coprime` |
| `ex-monotone-function-discontinuous-exactly-at-the-rationals` | `def-equinumerous`, `lem-countable-iff-surjection-from-n` | — |
| `ex-froda-is-sharp` | `def-equinumerous`, `def-injection-surjection-bijection`, `lem-countable-iff-surjection-from-n` | — |
| `ex-continuous-inverse-gives-the-nth-root` | — | `cor-continuous-image-of-an-interval-is-an-interval` |
| `ex-hamel-basis-additive-function` | `def-complete-ordered-field`, `def-continuity-real`, `def-linear-subspace`, `def-monotone-function`, `lem-q-and-irrationals-dense-r` | `lem-span-is-the-set-of-linear-combinations` |
| `ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous` | `def-axiom-of-choice`, `def-complete-ordered-field`, `def-neighbourhood-r`, `lem-of-abs-value`, `thm-zorn` | `def-countable`, `lem-countable-iff-surjection-from-n`, `thm-rationals-countable` |
| `ex-locally-unbounded-finite-everywhere` | `def-canonical-natural`, `def-complete-ordered-field`, `lem-integer-part`, `lem-of-abs-value`, `lem-of-naturals-positive`, `lem-rat-embeds-dense` | `cor-gcd-quotients-coprime`, `def-coprime`, `thm-rationals-countable` |
| `ex-indicator-of-q-is-baire-class-two-not-one` | `cor-archimedean-reciprocal`, `def-canonical-natural`, `def-neighbourhood-r`, `lem-countable-iff-surjection-from-n`, `lem-of-abs-value`, `lem-of-naturals-positive`, `lem-rat-embeds-dense`, `thm-closure-characterisations-r`, `thm-of-archimedean` | — |
| `cex-upper-semicontinuous-need-not-attain-its-infimum` | `def-neighbourhood-r`, `thm-algebra-of-continuous-functions` | — |
| `cex-continuous-injection-on-a-non-interval-need-not-be-monotone` | `def-neighbourhood-r` | — |

These are graph differences, not automatic errors: several plan-spec entries are broader or older than the actual published proof inputs. The batch manifest preserves the actual carrier dependency lists and separately records this conflict; no dependency was silently deleted from an item.

## Mathematical and supplier review

The 34 proof-bearing carriers have 286 numbered argument steps. Their proof arguments, fact labels and hypotheses were checked against actual source statements; 34 proof contracts record 387 exact supplier-section excerpts, every numbered step and its bracket inputs, and all eight boundary dispositions. Finite checks are recorded for the arithmetic examples where applicable. The Hamel construction branch is explicitly Choice-dependent; the monotone/Froda, Baire interval and prescribed-jump constructions keep their fixed-enumeration/least-index arguments choice-free.

Four full-text treatments were read and fetched: Lebl, *Basic Analysis I* §3.6; Thomson–Bruckner–Bruckner, *Elementary Real Analysis* §§5.9 and 9.8; IIT Kanpur MTH404 notes pp. 3–4 and 44–50; and Efthimiou, *Introduction to Functional Equations* ch. 11. Their source-specific proof gaps, exercise dependencies, scope and convention differences are documented in `batch-2.coverage.json`. The Bruckner first candidate timed out; a search found and recovered a complete 1013-page university-hosted mirror. No source was dropped and no failed retrieval was represented as successful.

### Owner repair notes

1. `thm-geometric-series` is a published supplier in the transitive prerequisites of six assigned claims. Its [L4] says `|1| = 1` “since `1 > 0`” but does not link or declare `cor-of-one-positive`; that theorem is also absent from its `deps`. The proof uses [L4] in step 2.1 to infer `r != 1`. A focused published-carrier repair should add the exact supplier and dependency. Affected assigned items: `thm-monotone-with-prescribed-discontinuity-set`, `ex-monotone-function-discontinuous-exactly-at-the-rationals`, `ex-froda-is-sharp`, `cor-cantor-function-is-continuous`, `rem-cantor-function-increases-only-on-a-null-set`, `ex-cantor-function-maps-a-null-set-onto-the-unit-interval`. These items remain included in the inventory and their contracts; their readiness is escalated pending the supplier repair/reconciliation.
2. `cor-every-vector-space-has-a-basis` has a published Statement explicitly assuming AC and using `thm-every-independent-set-extends-to-a-basis`, while its frontmatter `deps` omits `def-axiom-of-choice`. `lem-hamel-basis-exists` independently states AC and declares both `def-axiom-of-choice` and `thm-zorn`, so its local hypothesis is explicit; the supplier's missing metadata edge should nevertheless be repaired by the owner.
3. The fixed-basis-vector witness is explicit in the current Hamel examples: `ex-hamel-basis-additive-function` Verification step 1.1 and `fs-additive-implies-linear` Refutation step 1.1 both justify `B` nonempty from `span(B)=R` and `R \ne \{0\}`; `ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous` imports that completed witness. No Hamel nonemptiness gap remains.
4. `cex-upper-semicontinuous-need-not-attain-its-infimum` and `cex-continuous-injection-on-a-non-interval-need-not-be-monotone` have complete numbered verification arguments, but `node tools/proof-layout.mjs` reports no numbered steps under their `Counterexample` sections. The arguments currently sit under `Verification`. The proof-contract parser covers their actual numbered steps, but the required layout gate fails. Preserve the counterexamples and have the owner relocate/format the existing steps. Both items are readiness-escalated.

The scoped `depcheck` warnings are statement/definition context links rather than proof-input omissions: `cor-no-function-is-continuous-exactly-on-q`, `def-additive-function`, `def-baire-class-one`, `def-intermediate-value-property`, `def-monotone-function`, `thm-continuity-iff-oscillation-zero`, and `thm-continuous-inverse`. The exact links and locations were inspected; none is used as an undeclared proof premise. The warnings remain recorded because published content was not edited.

### Readiness disposition

The reviewed disposition is `ready` for the other 35 items and `escalated` for these 8 items. This is the batch review assessment only; the required machine records below could not be written:

- Geometric-series prerequisite chain: `thm-monotone-with-prescribed-discontinuity-set`, `ex-monotone-function-discontinuous-exactly-at-the-rationals`, `ex-froda-is-sharp`, `cor-cantor-function-is-continuous`, `rem-cantor-function-increases-only-on-a-null-set`, and `ex-cantor-function-maps-a-null-set-onto-the-unit-interval`.
- Counterexample layout gate: `cex-upper-semicontinuous-need-not-attain-its-infimum` and `cex-continuous-injection-on-a-non-interval-need-not-be-monotone`.

The required machine readiness records could not be written. Both `node tools/step1-decisions.mjs check --run non-ml-math-remaining-81-2026-10-18` and an explicit `record` attempt for `def-monotone-function` stop while loading the whole run snapshot with `Duplicate item lem-it-quantum-relative-entropy-support-regularization`. `rg` locates this duplicate in `research/non-ml-math-remaining-81-2026-10-18-batch-21.pages.json` and `research/non-ml-math-remaining-81-2026-10-18-batch-22.pages.json`, both outside this assignment. No `--owner` bypass was used, and this turn wrote no batch-2 readiness record. The owner must reconcile that cross-batch duplicate before the mandated `step1-decisions record` entries can be generated.

## Scoped checks

- Batch manifest dependency check: 43 items, zero missing dependency IDs.
- Scoped dependency-level recomputation: 43 assigned items over the two pages, maximum item level 6; all labels match the actual in-batch supplier graph.
- Scoped dependency check: zero hard errors and 11 contextual-link warnings listed above; the focused prerequisite cycle checks cover 391 items and 30 pages.
- Scoped precheck: exit 0; 34 proof-bearing items checked, zero failed.
- Proof contracts: exit 0; 34/34 proof-bearing items checked, 286 steps, 387 exact citations, zero warnings/errors.
- Source fetch/stamp: 4/4 complete full-text sources verified and newly stamped.
- Coverage checklist: one A page and 23 harvested results; zero errors and one low-yield warning. The warning is expected because the owner explicitly retained 43 already-published carriers; this batch adds no new claims.
- Content policy, manifest-only: pass, 43 items, zero errors and warnings.
- `proof-layout.mjs` over all 43 explicitly assigned item files: 43 items and 286 steps; two failures, exactly the layout issues listed above. No carrier was altered to mask them.
- `step1-decisions` check/record: blocked at snapshot load by the duplicate item in batches 21 and 22; see Readiness disposition.

