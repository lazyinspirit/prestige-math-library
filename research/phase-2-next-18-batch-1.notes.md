# Phase 2 next 18 — batch 1 Step-1 construction notes

## Scope and outcome

This batch owns only these two assigned functional-analysis pairs:

- `schauder-bases-approximation-and-banach-space-pathologies` and `schauder-bases-approximation-and-banach-space-pathologies-examples`;
- `banach-valued-integration-and-the-radon-nikodym-property` and `banach-valued-integration-and-the-radon-nikodym-property-examples`.

The manifest contains 29+7 items for the Schauder/AP pair and 29+8 items for the Bochner/RNP pair, 73 items total. Every ID was unused when selected. Every item has an explicit `deps` array, statement contract, proof strategy, provenance, and source references. Local suppliers precede their consumers, no B-page item is consumed, and every item received exactly one readiness outcome in prerequisite order.

Seventy-two items are `ready`. The sole escalation is the non-load-bearing Recorded remark `rem-subspaces-of-classical-spaces-can-fail-ap`: the accessible evidence verifies Szankowski's construction for `1<p<2`, but not the stated `p=1` endpoint. No later item depends on this remark. No published content, shared plan, engine-state file, verdict, or canonical defect ledger was edited.

## Controlling design and current-plan conflicts

I read the complete FA-11 and FA-12 design sections in `research/plan-functional-analysis-track.md`, the FA-12 mention and surrounding interface in `research/plan-representation-theory-groups-track.md`, and compared them with `research/plan-spec.json`. The functional-analysis FA-12 section controls the mathematical inventory, conventions, warnings, and proof route: it is the complete page design and expressly governs the FA-1–FA-25 sequence. The representation-theory location is a downstream interface note saying that later representation pages consume this analytic foundation; it does not provide a competing FA-12 inventory.

The current plan controls the following differences:

1. The four current plan objects have empty item arrays. They therefore do not supply a competing inventory; the complete design inventories were materialized into this pre-splice scaffold. This is a staging difference, not evidence that the pages should be empty.
2. The FA-11 design lists FA-4 and FA-6–FA-10 as direct prerequisite context. The current plan gives the A page only `reflexivity-and-eberlein-smulian` as its direct `requires` entry. The plan entry was preserved. Its published prerequisite closure supplies the earlier functional-analysis foundations actually used by the item graph.
3. The FA-12 design lists FA-1, FA-7, FA-9, FA-10 and measure-theory pages MT-2, MT-7, MT-8, MT-10, and MT-12–MT-16 as direct context. The current plan gives it only the preceding FA-11 page as a direct `requires` entry. That exact plan edge was preserved; the current prerequisite closure and explicit published item dependencies supply the needed measure and functional-analysis statements.
4. FA-11's prose route invokes uniform boundedness on the canonical partial sums after noting their pointwise convergence. That presentation is circular unless each partial-sum operator is already known to be continuous. The manifest records and repairs the conflict by proving `lem-schauder-coefficient-space-is-banach`, applying the bounded inverse theorem to the coefficient map, and only then obtaining bounded coordinate functionals and bounded `P_N`. The resulting use of dependent choice is explicit.
5. FA-12's design schedules the Hilbert-space Riesz representation input on the later FA-13 page. A forward dependency is not permitted. The local, choice-free `thm-hilbert-spaces-are-reflexive-by-riesz-representation` is placed before the Hilbert RNP consumer instead. This closes the designed example without treating the future page as published.

These are item-order and proof-closure repairs inside the selected pairs. No selected pair, page split, new prerequisite pair, or cross-batch change is required.

## Full-source reading and dispositions

Ten source records were investigated and all 58 harvested results have an `included`, `inline`, `deferred` with destination, or specifically reasoned `out-of-scope` disposition in the coverage file. Nine sources were fetched in full, stamped, and inspected at the exact locators:

- Thomas Schlumprecht, *Course Notes in Functional Analysis*, for Schauder bases, coordinate maps, canonical projections, and Auerbach bases;
- Michael Müger, *Introduction to Functional Analysis*, for unconditional convergence, the Dvoretzky–Rogers route, and the `ba` representation of `ell-infinity` dual;
- A. Dvoretzky and C. A. Rogers, “Absolute and Unconditional Convergence in Normed Linear Spaces,” the complete seven-page original paper, especially Lemmas 1–2 and Theorem 2;
- Theo Bühler and Dietmar Salamon, *Functional Analysis*, for approximation properties, compact-uniform approximation, tensor formulations, and James's theorem context;
- Per Enflo, “A counterexample to the approximation problem in Banach spaces,” the complete primary paper for the existence result retained as a Recorded leaf;
- Gerald Teschl, *Topics in Real and Functional Analysis*, for Bochner measurability, integration, convergence, differentiation, and vector measures;
- Gilles Pisier, *Martingales in Banach Spaces*, especially Corollaries 2.6 and 2.8–2.11 and the intervening remarks, for RNP, dentability, martingales, dyadic interval testing, and Lipschitz differentiation;
- Haim Brezis, *Functional Analysis, Sobolev Spaces and Partial Differential Equations*, including Problem 23 and its solution, for Dunford–Pettis and the uniform-integrability compactness route;
- Jeff Cheeger and Bruce Kleiner, the complete relevant paper argument giving the explicit Lipschitz curve witnessing failure of the RNP in `L^1[0,1]`.

The official PNAS endpoint for Dvoretzky–Rogers returned HTTP 403, but the first alternate university-hosted scan succeeded and was stamped (`7` pages, `655755` bytes, SHA-256 prefix `d09dacfdb12e5fce`). The author-hosted Bühler–Salamon URL likewise returned HTTP 403; its first complete alternate book copy succeeded. These were successful recoveries, not source drops.

The tenth source, A. Szankowski's “Subspaces without the approximation property,” remains an owner source escalation. The institutional record supplied the exact abstract but not the proof. Three Springer endpoints returned access HTML rather than a PDF; the recovered 52-page Canadian thesis gives a complete reconstruction only for `1<p<2` and explicitly excludes `p=1`; the DSpace handle and one subsequently discovered direct endpoint timed out. The direct endpoint was an inadvertent extra attempt beyond the allowed initial-plus-five retry budget and is retained transparently in the evidence; no retry allowance was restarted and no further retrieval was attempted. The exact uncertainty is whether the original argument establishes the claimed `ell^1` endpoint. No outage or metadata record is treated as a proof, and no alternative argument is claimed with invented confidence. The coverage record therefore has `source_resolution.status: owner-escalation`, the full attempt/search history, and the affected item is escalated.

## Mathematical and dependency audit

The actual statements and required portions of published proofs were inspected for every load-bearing prerequisite. Page membership and publication status were not treated as proof checks. Hypotheses, directions, scalar-field conventions, well-definedness, and choice strength were checked along the transitive paths.

For the Schauder/AP pair:

- The coefficient space is complete in the supremum partial-sum norm. The coefficient-to-vector map is a continuous bijection and its inverse is continuous by the bounded inverse theorem; this supplies bounded coordinate functionals and canonical projections without circularly applying uniform boundedness to operators not yet known continuous.
- Basis projections give finite-rank approximation uniformly on compact sets. Conversely, approximation on compact sets is formulated with the correct compact-uniform topology. The finite-dimensional Auerbach lemma supplies the bounded finite-coordinate constructions without an arbitrary-index choice.
- The unconditional convergence equivalences use finite signed/subset sums and a convex layer-cake argument. They deliberately avoid the published unqualified norming-functional item identified below.
- The Dvoretzky–Rogers block supplier uses the original finite-dimensional form: in dimension at least `r(r-1)` there are positive `d_i` and vectors with `||x_i||^2=d_i` such that every subset sum has squared norm at most `3 sum d_i`. Countably selecting the blocks and concatenating them yields the prescribed-norm unconditional series and then the finite-dimensional characterization of universal absolute convergence.
- James's dual/nonreflexive examples use the exact published `ell^2` duality and counting-measure formulation; they do not anticipate a later Hilbert page. The finitely additive integral is defined first for finite-range functions and extended by fixed dyadic quantizers, so well-definedness and the isometric `ba` representation do not conceal a choice of approximating sequence.
- Enflo and Szankowski are Recorded, non-load-bearing leaves. No result is proved from either. Enflo's full source supports the ZFC existence statement and the local implication from “no AP” to “no Schauder basis”; the Szankowski endpoint remains escalated as above.

For the Bochner/RNP pair:

- Strong measurability, simple-function integration, almost-everywhere separable range, the Bochner norm estimate, convergence theorems, and indefinite vector measures are introduced before use. The variation of an absolutely continuous vector measure is separately proved to be a finite positive measure before scalar Radon–Nikodym arguments consume it.
- RNP is stated for finite measures and bounded-variation vector measures absolutely continuous with respect to the scalar measure. Its equivalence with dentability, uniformly integrable martingales, dyadic interval tests, and almost-everywhere differentiability of Lipschitz curves keeps the directions and separable reductions explicit. The separable-determination proof uses the dentability/tree route; the interval characterization uses Pisier's dyadic tree approximation rather than assuming a density.
- A Lipschitz curve defines its vector measure first on the countable interval algebra and then on the Lebesgue completion. Conversely, the interval measure and dyadic martingale reconstruct the curve and derivative with the correct null-set handling.
- For `X=Y*` with separable `Y`, scalar Radon–Nikodym derivatives are chosen for a countable dense set in `Y`, a common null set is removed, pointwise bounds extend the scalar data to elements of `Y*`, and separability supplies strong measurability. This gives the separable-dual RNP directly and avoids an unproved weak-star slicing step.
- Hilbert reflexivity is supplied locally by the Riesz representation argument. Reflexive spaces then have the RNP. The `c0` counterexample uses its `ell^1` dual interface, and the `L^1[0,1]` counterexample uses the explicit Cheeger–Kleiner Lipschitz curve.
- The Dunford–Pettis proof uses uniform-integrability truncations into reflexive `L^2`, weak compactness in the bidual/Banach–Alaoglu framework, and the Baire-category necessity argument from Brezis. It does not infer compactness merely from boundedness or page membership.

The 73-item graph has no missing, circular, forward, or B-page dependency. No owned item consumes a Recorded result to prove its replacement, and no batch item rests on either Recorded leaf. The owned pages are outside Foundations, and a direct/transitive scan found no path to `deferred-set-theory-beyond-choice`; the Foundations bootstrapping boundary is preserved.

## Axiom-of-choice accounting

Choice-free branches are preserved for the elementary Schauder definitions, compact-uniform finite-dimensional lemmas, fixed-quantizer `ba` integration and duality, finite-dimensional Auerbach lemma, the core Bochner integral and vector-variation construction, and Hilbert reflexivity by Riesz representation.

Dependent choice is declared for the coefficient-space/bounded-inverse route that supplies continuous coordinates, uniformly bounded partial sums, and the basis-to-BAP conclusion. Countable choice is declared where James's sequence arguments, countable Dvoretzky–Rogers block selection, and extension of interval vector measures require countably many witnesses.

Full AC is declared, with `def-axiom-of-choice` in the relevant dependency paths, for Hahn–Banach applications in Banach means and properness of the countably additive part of `ba`; Pettis measurability; the dentability/RNP tree equivalences and their interval/Lipschitz consumers; simultaneous scalar Radon–Nikodym representatives in the separable-dual proof; the reflexive, `c0`, and `L^1` consequences that use those RNP results; and the Banach–Alaoglu, duality, and Baire inputs in Dunford–Pettis. These assumptions are propagated to consumers. No full-choice conclusion is imported into a choice-free branch, and incompatible axiom branches are not combined.

## Published defect for canonical reconciliation

The audit found one published defect that is not an actual prerequisite of this batch:

| Published item | Exact evidence and defect | Supplier state and repair strategy |
|---|---|---|
| `thm-dual-norms-every-vector` | The published statement unconditionally asserts existence of a norm-one functional attaining `||x||`. Its actual real/complex Hahn–Banach suppliers, `thm-hahn-banach-norm-preserving-extension` and its complex counterpart, transitively use `thm-hahn-banach-dominated-extension`, whose statement explicitly assumes the Axiom of Choice. The consumer omits that hypothesis and its dependency. | All mathematical suppliers are already published; no Phase-2 supplier is needed. The canonical repair should add `def-axiom-of-choice`, prefix the theorem with “Assume AC,” and identify Hahn–Banach extension as the exact use. This batch's unconditional-convergence proof avoids the item through a convex layer-cake argument, so this unrelated published consumer debt does not block any new supplier. |

This finding belongs in the canonical published-consumer ledger during owner/operator reconciliation, but that shared ledger was outside this worker's write scope and was not edited.

## Readiness and consumer-batch dependency input

All 73 owned items have current hash-bound readiness records: 72 `ready`, one `escalated`, and none missing. The escalated Szankowski remark remains open; no escalation was overwritten and no owner flag was used. These records establish construction readiness only, not owner reconciliation or Step-3 mathematical approval.

`research/phase-2-next-18-batch-1.cross-batch-dependencies.json` is `[]`. Every actual item dependency is published or local to this batch; the FA-12-to-FA-11 edge is internal to the assigned construction. There is no new prerequisite pair or load-bearing same-run cross-batch supplier. The required unified frontier ledger was refreshed with `--require-reviewed`: all nine consumer inputs were present, and its 27 open edges belong to other batches.

## Verification snapshot

Whole-run counts are a point-in-time snapshot because sibling batches wrote concurrently.

| Check | Actual result |
|---|---|
| Owned inventory/readiness | 73 items; 72 current `ready`, 1 current `escalated`, 0 missing records. |
| Owned coverage | `coverage-checklist --require-destination`: 2 A pages, 58 harvested results, 4 errors, 0 warnings. All four errors are the same documented Szankowski owner escalation: unresolved source, decision required, and absent certain alternatives. |
| Owned sources | `source-fetch-check`: 9/10 fetch-verified and 9/10 resolved; 0 documented drops. The only failure is the Szankowski owner escalation. |
| Whole-run manifest dependencies | `manifest-deps`: 533 items, 0 normalized, 0 errors. |
| Whole-run manifest policy | `content-policy`: 533 scoped items, 0 errors, 0 warnings. |
| Current plan | `validate-plan research/plan-spec.json`: exit 0; 1,624 pages, declared page order acyclic, no item cycles, forward references, B-page dependencies, or unresolved item IDs. The then-current plan snapshot had 18,189/18,190 new items authored and 521 intentionally empty planned item lists. |
| Run scope/drift | `manifest-integrity`: all 36 owed pages present, 0 missing and 0 added. `drift-review-check`: all 18 A pages reviewed, 0 spec edits, no blocked edge, and all 46 same-category `requires` edges accounted for by published or earlier-run prerequisites. |
| Published external-proof audit | `extcheck`: exit 0; 18,490 published items, 165 Recorded-not-proved remarks, and 55 corpus-existing consumers resting on them. Every Recorded item remains a cited remark with no proof and its consequences are marked. This batch adds no consumer of a Recorded result. |
| Frontier ledger | Refresh with `--require-reviewed` succeeded: batches 1–9 reviewed, 27 deduplicated open edges, all from other consumer batches. |
| Step-1 decisions | The whole run is not closed because several batches retain escalations. For this batch, the only open item is `rem-subspaces-of-classical-spaces-can-fail-ap`. |

Accordingly, the owned scaffold is complete except for the exact, non-load-bearing Szankowski `p=1` source/proof hold. The coverage and source gates correctly remain nonzero rather than concealing that uncertainty; every other owned construction and structural check passes and is ready for independent Step-3 review.
