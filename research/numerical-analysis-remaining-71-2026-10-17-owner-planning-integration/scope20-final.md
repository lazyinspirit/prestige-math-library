# Batch 20 owner escalation resolution

Run: numerical-analysis-remaining-71-2026-10-17. Scope: the actual held batch-20 state, its full original review-0 and repair-1 reports, all 28 prepared.consumer_scope IDs, and the two assigned pages. Source review completed 2026-10-18. This is focused owner evidence, not a native report, gate receipt, or fresh native review.

## Actual starting state and before-images

The native repair had already written the canonical mathematical corrections before its incomplete consumer report was held. Runtime events record scope-repair-20-1 dispatched at 2026-10-17T22:22:11.533Z, successful exit at 22:27:14.299Z, and the explicit omitted-consumers hold at 22:27:15.979Z. repair-1.json reports both the cap correction and the operator-norm supplier addition. The scope state retains repairs: [] because collection rejected that report, not because the mathematical source remained untouched. No source writes were performed by this owner resolution; the genuine native corrections were preserved.

Exact actual owner-entry carriers are archived in scope20-before/: all 30 distinct inventory/consumer items plus the two assigned pages. These are the observed post-native, pre-owner images, not reconstructed pre-native files. native-before-interfaces.json preserves the actual original interface strings from prepared.before_interfaces. A full pre-native source carrier is not claimed or manufactured. Native records remain untouched. Root owns hash binding and metadata reconciliation.

## Confirmed defect and current repair acceptance

The original algorithm admitted L>=0 without an integer restriction, but stopped only at ell=L. Thus a noninteger cap could be crossed. For example, take A_0=tridiag(-1,2,-1) of size 4, any 0<theta<1, n_min=1 and L=1.5. The original procedure aggregates {1,2},{3,4}, then the two coarse vertices, making two successful attempts without ever satisfying ell=L. Restricting L to integers would discard originally admitted real inputs. The existing repair correctly retains all real L>=0 and stops before an aggregation attempt when ell+1>L.

At the start of attempt number k, every preceding attempt succeeded (a stalled attempt returns), so ell=k-1. The guard permits that attempt exactly when k<=L. Thus at most floor(L) attempts occur; this is equivalent to the original at-most-L claim for the integer attempt count. For 0<=L<1 there are no attempts. The coarse-size success check still precedes the cap check; a stalled last allowed attempt returns immediately. Each finite aggregate pass removes at least its selected vertex. A successful pass increments ell, and the finite cap bounds all such passes. The current theorem's Facts and step 2.2 faithfully express this reasoning; partition, rank, SPD, and off-diagonal-sign arguments remain valid. No integer-only convention or further source rewrite is needed.

The native repair also added thm-operator-norm-is-the-largest-singular-value to the joint-contraction theorem's deps and F6, and cites its attainment assertion at the final maximum. I read that published supplier and the norm definition fully: it applies to this nonzero finite-dimensional real energy inner-product space. The original contraction Statement is unchanged; the eigenbasis proof bounds every unit vector and hence the attained maximum. This addition does not alter any consumer's hypotheses or conclusion.

Exact comparison against all prepared original Statement/Definition strings shows only the AMG algorithm and its termination theorem changed interfaces. All other nonempty recorded interfaces are unchanged. Both changed items have no alias entries. A source/link search over items/ and library/ finds no additional AMG-algorithm or termination-theorem use beyond their mutual definition/discharge relation and the assigned A-page. The old prepared graph and current actual uses are both considered below. The broad prepared consumer set arises from all batch interfaces, including unchanged Galerkin suppliers; it does not imply the cap changed Schwarz or FAS data.

## All prepared consumer dispositions

Each following carrier was read in full. “Accept unchanged” concerns the actual affected supplier use, not an unrelated whole-item audit. Supplier interfaces were checked before concluding downstream uses remain valid. No outside-batch source edits are necessary.

| Consumer | Disposition and actual use |
| --- | --- |
| alg-aggregation-based-algebraic-multigrid-hierarchy | Accept native repair. Uses unchanged Galerkin matrix/SPD suppliers; its justified_by theorem still proves structural well-definedness and termination for every real admissible cap. |
| alg-finite-galerkin-v-cycle | Accept unchanged. Takes an arbitrary finite SPD Galerkin hierarchy as input; neither constructs it with AMG nor assumes an AMG cap. Its own recursive index decreases. |
| cex-schwarz-naive-coarse-space-misses-conductive-mode | Accept unchanged. Its two coordinate injections and scalar local matrices use Schwarz data, without hierarchy generation or a cap. |
| def-overlapping-schwarz-subspace-correction-data | Accept unchanged. Uses the unchanged Galerkin compression and SPD theorem for its designated coarse solve; no AMG construction assumption. |
| def-symmetric-two-grid-error-operator | Accept unchanged. Uses the unchanged energy-orthogonal Galerkin projector and energy adjoint formula, without a hierarchy cap. |
| ex-fas-linear-cycle-equivalence | Accept unchanged. Explicit 2-by-2 Galerkin matrix and exact FAS difference use the unchanged linear-equivalence theorem and correction-cycle interface. |
| ex-one-dimensional-poisson-coarse-correction-removes-linear-error | Accept unchanged. Explicit P and scalar A_H give Ce=0 directly; the unchanged homogeneous Sobolev lemma and its Countable Choice assumption remain stated. |
| ex-one-dimensional-poisson-two-grid-uniform-contraction | Accept unchanged. Explicit high-frequency mode and unchanged uniform contraction supplier require no AMG setup; the native joint-theorem proof addition changes no input. |
| ex-one-level-overlapping-schwarz-condition-number-growth | Accept unchanged. Fixed point-patch injections yield scalar-diagonal B and an explicit sine spectrum; unchanged Schwarz definition suffices. |
| ex-schwarz-inexact-local-solves-spectral-equivalence-bound | Accept unchanged. Coordinate-space exact/inexact local inverses and comparison constants use unchanged Schwarz bounds. |
| ex-schwarz-overlap-shrinking-decomposition-bound | Accept unchanged. Substitutes H/delta into the unchanged structured stable-decomposition upper bound and disclaims a lower-bound divergence claim. |
| ex-schwarz-two-level-1d-poisson-coarse-plus-odd-corrections | Accept unchanged. Explicit even-node interpolant and odd-node spaces meet unchanged stable/synthesis hypotheses; no AMG attempt count. |
| ex-v-and-w-cycle-costs-in-two-dimensions | Accept unchanged. Its integer L counts prescribed four-to-one levels, independently of the AMG real cap. Uses unchanged cycle-call recurrence. |
| lem-fas-linear-vw-cycle-translation | Accept unchanged. The fixed hierarchy, identical residuals, deterministic recursive calls and matching updates use unchanged finite-cycle instructions. |
| lem-one-dimensional-poisson-smoothing-and-approximation | Accept unchanged. Explicit Poisson matrix and interpolation yield the same Galerkin projector and spectral estimate; no AMG construction. |
| lem-schwarz-additive-inverse-is-local-energy-minimum | Accept unchanged. Concatenated local prolongations and SPD local block matrix use unchanged Schwarz inputs; the constrained quadratic minimum does not depend on AMG. |
| lem-schwarz-local-corrections-are-energy-orthogonal-projections | Accept unchanged. Uses unchanged Galerkin complement for index zero and direct algebra for other injections. |
| lem-schwarz-local-matrices-are-well-defined | Accept unchanged. Full rank and global SPD give local SPD, with the unchanged Galerkin SPD theorem covering index zero. |
| thm-additive-schwarz-stable-decomposition-condition-number | Accept unchanged. Local projections, stable decomposition, synthesis, and SPD comparisons use unchanged Schwarz suppliers and no AMG cap. |
| thm-aggregation-amg-hierarchy-preserves-spd-and-terminates | Accept native repair. The changed guard and real finite cap give floor(L) attempts, equivalent to at most L; all structural claims are retained. |
| thm-fas-linear-cycle-reduces-to-galerkin-correction | Accept unchanged. Fixed SPD Galerkin hierarchy, matching smoothers/counts and translation covariance prove equality, with no assumption about how the hierarchy was generated. |
| thm-galerkin-coarse-correction-is-energy-orthogonal-projector | Accept unchanged. Supplies the same compression SPD and four projector identities; its original Statement matches exactly. |
| thm-galerkin-v-cycle-work-recurrence-master-regimes | Accept unchanged. Conditional prescribed integer-depth recurrence and cycle count use the unchanged finite cycle; no setup cost or AMG cap inference. |
| thm-multiplicative-schwarz-exact-sweep-contraction | Accept unchanged. Ordered exact projection factors and unchanged additive estimates give telescoped energy decrease; no AMG setup dependence. |
| thm-one-dimensional-poisson-two-grid-energy-contraction | Accept unchanged. Applies the unchanged joint-contraction Statement at rho=2/(2nu+1); the native attainment supplier merely completes that supplier's proof context. |
| thm-two-grid-energy-contraction-under-joint-estimate | Accept native proof/dependency repair. Unchanged projector and symmetric-cycle interfaces give nonnegative self-adjoint E; the actual published norm supplier justifies attainment. Statement unchanged. |
| thm-two-level-p1-poisson-additive-and-multiplicative-bounds | Accept unchanged. Structured Poisson family, local overlap counts and unchanged Schwarz constants feed the same estimates; no AMG generation assumption. |
| thm-two-level-p1-poisson-stable-decomposition | Accept unchanged. Its explicitly prescribed nested meshes, Scott–Zhang coarse map, cutoff functions and local interpolation use unchanged Schwarz data; no AMG level cap enters. |

Additional assigned suppliers/pages: def-galerkin-coarse-grid-correction and lem-zero-boundary-piecewise-affine-functions-lie-in-h1zero were read fully and their original interfaces match exactly. multigrid-methods-and-complexity remains accurate: its AMG paragraph reports the three statuses without an attempt-count claim. Its V/W work paragraph remains conditional on fixed coarsening. multigrid-methods-and-complexity-examples summarizes unchanged explicit correction, work, and Poisson contraction examples. Both pages are accepted unchanged. No old/current direct or indirect consumer needs a surgical repair outside batch 20, including batches 45 and 46.

## Verification and handoff

Ran only the explicitly required proof-layout check on the three actual native-changed paths:

`node tools/proof-layout.mjs items/alg-aggregation-based-algebraic-multigrid-hierarchy.md items/thm-aggregation-amg-hierarchy-preserves-spd-and-terminates.md items/thm-two-grid-energy-contraction-under-joint-estimate.md`

Actual result: exit 0; `proof-layout: 3 items, 7 steps, 0 defects`.

No tests, full validators, gates, state/control edits, native report edits, metadata reconciliation, hashing, contract edits, or recertification were performed. The mathematical correction and all omitted consumer dispositions are resolved substantively; root must bind actual evidence and perform native owner resolution after applicable writers drain.
