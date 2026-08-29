# Alpha

The task file is authoritative for the current cognitive job, scope, artifacts,
schemas, and gates. Read it with [README.md](../README.md),
[SCHEMA.md](../SCHEMA.md), and [WORKFLOW.md](../WORKFLOW.md) before acting.
The engine owns routing, retries, coverage, gates, and stage transitions; do
not take over any of those mechanical duties.

`tools/models.mjs` and `tools/dispatch.mjs` own the active model, runner,
effort, role capacity, sandbox, and configured judge set. Do not name or
override a model or judge lineup in your work. Some Alpha dispatches are
read-only; treat that as an absolute no-write boundary. In every dispatch, do
not request permissions or try to obtain a broader execution mode. Record a
blocker when the assigned work cannot be completed within the provided access.

## Scope and ownership

Use the `# This dispatch` identity and task to determine the work you own. For
group work, `research/frontier-23-alpha-groups.json` is the assignment: it permits at
most four groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol; otherwise
report the issue without changing it.

## Review and repair standard

Check the mathematical claim as written, not a charitable reconstruction.
Trace inferences to stated hypotheses, earlier steps, an exact cited statement,
or an elementary derivation. Preserve domains, quantifiers, hypotheses,
direction, and conclusions when using a citation. Type-check expressions and
test material boundary cases, including empty and zero cases, endpoints,
choice scope, and both directions of an iff. Check titles, definitions,
statements, facts, constructions, proofs, witnesses, computations, and page
prose within the assigned task.

A proof-step gap that a competent reader closes immediately is nonfatal polish.
It never excuses a false or overstrong claim, definition, title, witness,
computation, or citation. Do not manufacture findings, and do not retain a
known defective claim merely because a repair is inconvenient. For a licensed
repair, make the smallest coherent correction, preserve the content contract,
and run the focused validation named by the task. A material rewrite invalidates
its prior `verification.judge` record.

## Judge and evidence discipline

Judge coverage is current only for the model set and exact frozen context that
`tools/models.mjs` resolves; retained rows from a different set are evidence,
not current coverage. In a Step-8 adjudication, only a `confirmed_fatal`
outcome for the exact assigned rejection licenses a content repair.
`confirmed_nonfatal` and `false_positive` close without content, contract,
impact, or judge changes. The task controls the durable cycle limit and any
required rejudge; never initiate an extra cycle.

Write reports, decisions, and structured final responses exactly where and how
the task requires. Use the prescribed append interface for shared JSONL
ledgers. A schema-constrained final response must contain only the required JSON
object. State exact evidence, changes, checks, and blockers; do not claim a gate
passed unless you ran it.


---

# This dispatch

run: frontier-23
role: alpha-adjudicate
label: step8-preflight-a-1

# Exact Step-8 repair envelope — 8-preflight, round 1

The JSON envelope below is the authority for this dispatch. It contains every failing gate from the battery,
the full untruncated output, exact current rejection tuples, and explicit run/published ownership.
Act only on `assigned_items` and `live_tuples`; do not substitute the latest event-log row.

```json
{
  "version": 1,
  "run": "frontier-23",
  "stage": "8-preflight",
  "round": 1,
  "mode": "preflight",
  "group": "a",
  "failures": [
    {
      "id": "proof-contract",
      "stage": "8-preflight",
      "why": "ERROR citation-use-not-supported [cex-enumerating-relator-consequences-does-not-decide-nontriviality]: L1 is not cited by declared use 1.1",
      "output": "proof-contract: 132 error(s), 2 warning(s), 389/389 item(s) checked\nERROR citation-use-not-supported [cex-enumerating-relator-consequences-does-not-decide-nontriviality]: L1 is not cited by declared use 1.1\nERROR citation-use-unmapped [cex-enumerating-relator-consequences-does-not-decide-nontriviality]: L1 is cited by 2.1 but the contract omits it\nERROR citation-fact-uncontracted [cex-enumerating-relator-consequences-does-not-decide-nontriviality]: L2 -> thm-word-problem-for-free-groups needs an exact citation contract\nERROR step-entry-input-omitted [cex-enumerating-relator-consequences-does-not-decide-nontriviality]: step-1-1 omits L2, cited by 1.1\nERROR step-entry-input-omitted [cex-enumerating-relator-consequences-does-not-decide-nontriviality]: step-2-1 omits L1, cited by 2.1\nERROR citation-quote-mismatch [thm-fundamental-groups-from-different-maximal-trees-are-isomorphic]: L2 quote does not occur in def-bass-serre-tree-of-a-graph-of-groups's Definition\nERROR citation-quote-mismatch [thm-fundamental-groups-from-different-maximal-trees-are-isomorphic]: L3 quote does not occur in def-quotient-graph-of-groups-from-a-tree-action's Definition\nERROR citation-quote-mismatch [thm-normal-form-for-fundamental-groups-of-graphs-of-groups]: L3 quote does not occur in def-reduced-graph-of-groups-word's Definition\nERROR citation-quote-mismatch [lem-the-bass-serre-coset-graph-is-a-tree]: L1 quote does not occur in def-bass-serre-tree-of-a-graph-of-groups's Definition\nERROR citation-quote-mismatch [thm-fundamental-group-acts-on-its-bass-serre-tree]: L1 quote does not occur in def-bass-serre-tree-of-a-graph-of-groups's Definition\nERROR citation-quote-mismatch [lem-boundary-monomorphisms-from-stabilizers-are-well-defined]: L1 quote does not occur in def-quotient-graph-of-groups-from-a-tree-action's Definition\nERROR citation-quote-mismatch [thm-bass-serre-structure-theorem]: L1 quote does not occur in def-quotient-graph-of-groups-from-a-tree-action's Definition\nERROR citation-quote-mismatch [thm-bass-serre-structure-theorem]: L4 quote does not occur in def-bass-serre-tree-of-a-graph-of-groups's Definition\nERROR citation-fact-uncontracted [fs-vertex-stabilizers-are-literally-the-chosen-vertex-groups-without-conjugacy]: L2 -> thm-one-segment-graph-of-groups-is-an-amalgamated-free-product needs an exact citation contract\nERROR citation-fact-uncontracted [fs-vertex-stabilizers-are-literally-the-chosen-vertex-groups-without-conjugacy]: L3 -> thm-normal-form-for-free-products-with-amalgamation needs an exact citation contract\nERROR step-entry-input-omitted [fs-vertex-stabilizers-are-literally-the-chosen-vertex-groups-without-conjugacy]: step-1-1 omits L2, cited by 1.1\nERROR step-entry-input-omitted [fs-vertex-stabilizers-are-literally-the-chosen-vertex-groups-without-conjugacy]: step-2-1 omits L3, cited by 2.1\nERROR citation-fact-uncontracted [fs-the-quotient-graph-determines-the-acting-group-without-stabilizer-data]: L2 -> thm-one-loop-graph-of-groups-is-an-hnn-extension needs an exact citation contract\nERROR citation-fact-uncontracted [fs-the-quotient-graph-determines-the-acting-group-without-stabilizer-data]: L3 -> thm-fundamental-group-acts-on-its-bass-serre-tree needs an exact citation contract\nERROR citation-fact-uncontracted [fs-the-quotient-graph-determines-the-acting-group-without-stabilizer-data]: L4 -> thm-free-groups-are-torsion-free needs an exact citation contract\nERROR citation-fact-uncontracted [fs-the-quotient-graph-determines-the-acting-group-without-stabilizer-data]: L5 -> cor-vertex-groups-embed-in-the-graph-of-groups-fundamental-group needs an exact citation contract\nERROR step-entry-input-omitted [fs-the-quotient-graph-determines-the-acting-group-without-stabilizer-data]: step-1-1 omits L2, cited by 1.1\nERROR step-entry-input-omitted [fs-the-quotient-graph-determines-the-acting-group-without-stabilizer-data]: step-1-1 omits L3, cited by 1.1\nERROR step-entry-input-omitted [fs-the-quotient-graph-determines-the-acting-group-without-stabilizer-data]: step-2-1 omits L4, cited by 2.1\nERROR step-entry-input-omitted [fs-the-quotient-graph-determines-the-acting-group-without-stabilizer-data]: step-2-1 omits L5, cited by 2.1\nERROR citation-fact-uncontracted [fs-kurosh-says-every-subgroup-of-a-free-product-is-free]: L2 -> cor-factors-embed-in-a-free-product-with-amalgamation needs an exact citation contract\nERROR citation-fact-uncontracted [fs-kurosh-says-every-subgroup-of-a-free-product-is-free]: L3 -> thm-free-groups-are-torsion-free needs an exact citation contract\nERROR step-entry-input-omitted [fs-kurosh-says-every-subgroup-of-a-free-product-is-free]: step-1-1 omits L2, cited by 1.1\nERROR step-entry-input-omitted [fs-kurosh-says-every-subgroup-of-a-free-product-is-free]: step-2-1 omits L3, cited by 2.1\nERROR citation-quote-mismatch [ex-bass-serre-tree-of-a-free-product]: L1 quote does not occur in def-bass-serre-tree-of-a-graph-of-groups's Definition\nERROR citation-quote-mismatch [ex-bass-serre-tree-of-an-amalgamated-free-product]: L2 quote does not occur in def-bass-serre-tree-of-a-graph-of-groups's Definition\nERROR citation-quote-mismatch [ex-bass-serre-tree-of-a-baumslag-solitar-group]: L2 quote does not occur in def-bass-serre-tree-of-a-graph-of-groups's Definition\nERROR citation-source-not-in-fact [fs-every-complex-vector-space-has-a-preferred-real-form]: L1 does not link [[ex-distinct-conjugations-on-c-two-give-distinct-fixed-real-forms]]\nERROR citation-undeclared-dependency [fs-every-complex-vector-space-has-a-preferred-real-form]: L1 cites ex-distinct-conjugations-on-c-two-give-distinct-fixed-real-forms, which is absent from deps/justified_by/forward_refs\nERROR citation-use-not-supported [fs-every-complex-vector-space-has-a-preferred-real-form]: L1 is not cited by declared use 1.1\nERROR citation-fact-uncontracted [fs-every-complex-vector-space-has-a-preferred-real-form]: L1 -> cor-real-forms-correspond-to-conjugations needs an exact citation contract\nERROR citation-fact-uncontracted [fs-every-complex-vector-space-has-a-preferred-real-form]: L1 -> thm-fixed-points-of-a-conjugation-form-a-real-space-and-its-complexification-recovers-the-ambient-space needs an exact citation contract\nERROR citation-quote-mismatch [thm-exterior-algebra-laws]: L1 quote does not occur in def-exterior-algebra-of-a-vector-space's Definition\nERROR citation-quote-mismatch [lem-averaging-operator-projects-onto-the-fixed-subspace]: F1 quote does not occur in def-g-fixed-subspace-of-a-representation's Definition\nERROR citation-quote-mismatch [lem-g-equivariant-maps-are-the-fixed-points-of-the-dual-tensor-representation]: F3 quote does not occur in def-g-fixed-subspace-of-a-representation's Definition\nERROR citation-quote-mismatch [thm-complex-representations-are-determined-by-their-characters]: F2 quote does not occur in cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product's Statement\nERROR citation-quote-mismatch [cor-a-complex-character-is-irreducible-iff-its-self-inner-product-is-one]: F1 quote does not occur in cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product's Statement\nERROR citation-quote-mismatch [cor-the-regular-character-gives-the-sum-of-squares-formula]: F2 quote does not occur in cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product's Statement\nERROR citation-quote-mismatch [ex-decomposing-the-square-of-the-two-dimensional-s-three-character]: F3 quote does not occur in cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product's Statement\nERROR citation-quote-mismatch [thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized]: L2 quote does not occur in def-induced-matrix-p-norm's Definition\nERROR citation-quote-mismatch [thm-induced-one-and-infinity-matrix-norms-are-max-column-and-row-sums]: L2 quote does not occur in def-induced-matrix-p-norm's Definition\nERROR citation-quote-mismatch [thm-right-hand-side-perturbation-bound-for-ax-equals-b]: L3 quote does not occur in def-condition-number-of-a-nonsingular-linear-system's Definition\nERROR citation-quote-mismatch [thm-matrix-perturbation-bound-for-ax-equals-b]: L3 quote does not occur in def-condition-number-of-a-nonsingular-linear-system's Definition\nERROR citation-quote-mismatch [thm-residual-to-forward-error-bounds-for-linear-systems]: L3 quote does not occur in def-condition-number-of-a-nonsingular-linear-system's Definition\nERROR citation-quote-mismatch [lem-product-of-one-plus-deltas-gives-theta-n]: L1 quote does not occur in def-standard-relative-floating-point-model-and-unit-roundoff's Definition\nERROR citation-quote-mismatch [thm-floating-point-dot-product-componentwise-and-normwise-error-bounds]: L1 quote does not occur in def-standard-relative-floating-point-model-and-unit-roundoff's Definition\nERROR citation-quote-mismatch [thm-local-conditioning-times-backward-error-controls-forward-error-to-first-order]: L1 quote does not occur in def-absolute-and-relative-local-condition-numbers-of-a-problem-map's Definition\nERROR citation-quote-mismatch [prop-spectral-numerical-rank-counts-singular-values-above-the-declared-threshold]: L1 quote does not occur in def-numerical-rank-relative-to-a-norm-scale-and-tolerance's Definition\nERROR citation-quote-mismatch [ex-two-by-two-systems-with-contrasting-condition-numbers]: L1 quote does not occur in def-condition-number-of-a-nonsingular-linear-system's Definition\nERROR citation-quote-mismatch [ex-low-order-hilbert-matrices-have-large-condition-numbers]: L1 quote does not occur in def-condition-number-of-a-nonsingular-linear-system's Definition\nERROR citation-quote-mismatch [ex-vandermonde-conditioning-improves-after-centering-and-scaling]: L1 quote does not occur in def-condition-number-of-a-nonsingular-linear-system's Definition\nERROR citation-quote-mismatch [cex-a-tiny-residual-does-not-force-a-small-forward-error]: L2 quote does not occur in def-condition-number-of-a-nonsingular-linear-system's Definition\nERROR citation-quote-mismatch [ex-a-backward-stable-solution-of-an-ill-conditioned-system]: L2 quote does not occur in def-forward-and-backward-stability-for-a-problem-family's Definition\nERROR citation-quote-mismatch [ex-catastrophic-cancellation-and-a-stable-reformulation]: L1 quote does not occur in def-standard-relative-floating-point-model-and-unit-roundoff's Definition\nERROR citation-quote-mismatch [cex-condition-number-depends-on-the-chosen-norm-and-scaling]: L1 quote does not occur in def-condition-number-of-a-nonsingular-linear-system's Definition\nERROR citation-quote-mismatch [cex-the-relative-floating-point-model-excludes-overflow-underflow-and-invalid-operations]: L1 quote does not occur in def-standard-relative-floating-point-model-and-unit-roundoff's Definition\nERROR citation-quote-mismatch [lem-finite-rectangle-unions-form-a-generating-algebra]: L2 quote does not occur in def-product-sigma-algebra-and-finite-product-sigma-algebras's Definition\nERROR citation-quote-mismatch [thm-sections-of-product-measurable-sets-are-measurable]: L1 quote does not occur in def-product-sigma-algebra-and-finite-product-sigma-algebras's Definition\nERROR citation-quote-mismatch [thm-tonelli-and-fubini-for-completed-product-measures]: L2 quote does not occur in thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces's Statement\nERROR citation-quote-mismatch [fs-completed-product-sections-are-measurable-for-every-parameter]: L1 quote does not occur in thm-tonelli-and-fubini-for-completed-product-measures's Statement\nERROR citation-use-unmapped [thm-polar-coordinates-formula-for-lebesgue-measure]: L1 is cited by 3.1 but the contract omits it\nERROR citation-use-not-supported [thm-polar-coordinates-formula-for-lebesgue-measure]: L2 is not cited by declared use 1.1\nERROR citation-use-unmapped [thm-polar-coordinates-formula-for-lebesgue-measure]: L2 is cited by 2.1 but the contract omits it\nERROR citation-use-not-supported [thm-polar-coordinates-formula-for-lebesgue-measure]: L3 is not cited by declared use 2.1\nERROR citation-use-unmapped [thm-polar-coordinates-formula-for-lebesgue-measure]: L3 is cited by 3.1 but the contract omits it\nERROR citation-use-not-supported [thm-polar-coordinates-formula-for-lebesgue-measure]: L4 is not cited by declared use 2.1\nERROR citation-use-unmapped [thm-polar-coordinates-formula-for-lebesgue-measure]: L4 is cited by 3.1 but the contract omits it\nERROR citation-fact-uncontracted [thm-polar-coordinates-formula-for-lebesgue-measure]: L5 -> prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets needs an exact citation contract\nERROR step-entry-input-omitted [thm-polar-coordinates-formula-for-lebesgue-measure]: step-1-1 omits L5, cited by 1.1\nERROR step-entry-input-omitted [thm-polar-coordinates-formula-for-lebesgue-measure]: step-2-1 omits L2, cited by 2.1\nERROR step-entry-input-omitted [thm-polar-coordinates-formula-for-lebesgue-measure]: step-2-1 omits A1, cited by 2.1\nERROR step-unmapped [thm-polar-coordinates-formula-for-lebesgue-measure]: 3.1 has no derivation or routine-step contract\nERROR citation-fact-uncontracted [cex-product-of-complete-measures-need-not-be-complete]: L2 -> cor-graph-of-a-measurable-function-is-lebesgue-null needs an exact citation contract\nERROR citation-fact-uncontracted [cex-product-of-complete-measures-need-not-be-complete]: L3 -> lem-c-one-diffeomorphisms-map-lebesgue-null-sets-to-null-sets needs an exact citation contract\nERROR step-entry-input-omitted [cex-product-of-complete-measures-need-not-be-complete]: step-1-1 omits L2, cited by 1.1\nERROR step-entry-input-omitted [cex-product-of-complete-measures-need-not-be-complete]: step-1-1 omits L3, cited by 1.1\nERROR citation-quote-mismatch [cex-completed-product-sections-need-not-be-pointwise-measurable]: L1 quote does not occur in cex-product-of-complete-measures-need-not-be-complete's Statement refuted\nERROR citation-quote-mismatch [thm-poincare-distance-formula-and-disc-automorphism-invariance]: F1 quote does not occur in def-poincare-metric-and-distance-on-the-disc's Definition\nERROR citation-quote-mismatch [thm-absolute-convergence-criterion-for-complex-infinite-products]: F1 quote does not occur in rem-complex-infinite-product-dictionary's Remark\nERROR citation-quote-mismatch [thm-canonical-product-convergence-from-exponent-sum]: F2 quote does not occur in def-weierstrass-products-canonical-products-and-genus's Definition\nERROR citation-quote-mismatch [thm-weierstrass-product-theorem-on-the-complex-plane]: F1 quote does not occur in def-weierstrass-products-canonical-products-and-genus's Definition\nERROR citation-fact-uncontracted [thm-weierstrass-factorization-for-entire-functions]: F5 -> def-weierstrass-elementary-factor needs an exact citation contract\nERROR step-entry-input-omitted [thm-weierstrass-factorization-for-entire-functions]: step-1-1 omits F5, cited by 1.1\nERROR step-entry-input-omitted [thm-zero-exponent-is-bounded-by-entire-order]: step-2-1 omits 1.2, cited by 2.1\nERROR step-unmapped [thm-zero-exponent-is-bounded-by-entire-order]: 1.2 has no derivation or routine-step contract\nERROR citation-quote-mismatch [thm-hadamard-factorization-for-finite-order-entire-functions]: F2 quote does not occur in thm-zero-exponent-is-bounded-by-entire-order's Statement\nERROR citation-quote-mismatch [thm-hadamard-factorization-for-finite-order-entire-functions]: F5 quote does not occur in thm-weierstrass-factorization-for-entire-functions's Statement\nERROR citation-quote-mismatch [fs-weierstrass-factorization-is-unique]: F1 quote does not occur in thm-weierstrass-factorization-for-entire-functions's Statement\nERROR citation-quote-mismatch [fs-entire-order-equals-canonical-genus]: F1 quote does not occur in thm-weierstrass-factorization-for-entire-functions's Statement\nERROR citation-quote-mismatch [thm-members-modulo-equivalence-correspond-to-subobjects]: L4 quote does not occur in thm-member-equivalence-is-transitive's Statement\nERROR citation-use-not-supported [thm-ab5-is-equivalent-to-exactness-of-filtered-colimits]: L2 is not cited by declared use 1.1\nERROR citation-use-not-supported [thm-ab5-is-equivalent-to-exactness-of-filtered-colimits]: L2 is not cited by declared use 1.1\nERROR citation-use-not-supported [thm-ab5-is-equivalent-to-exactness-of-filtered-colimits]: L2 is not cited by declared use 1.1\nERROR step-entry-input-omitted [thm-ab5-is-equivalent-to-exactness-of-filtered-colimits]: step-1-1 omits L5, cited by 1.1\nERROR citation-source-not-in-fact [fs-exactness-can-be-defined-without-first-producing-a-canonical-monomorphism]: L2 does not link [[thm-the-subobject-inequalities-underlying-exactness]]\nERROR citation-undeclared-dependency [fs-exactness-can-be-defined-without-first-producing-a-canonical-monomorphism]: L2 cites thm-the-subobject-inequalities-underlying-exactness, which is absent from deps/justified_by/forward_refs\nERROR citation-fact-uncontracted [fs-exactness-can-be-defined-without-first-producing-a-canonical-monomorphism]: L2 -> def-subobject-and-quotient-object needs an exact citation contract\nERROR citation-fact-uncontracted [fs-exactness-can-be-defined-without-first-producing-a-canonical-monomorphism]: L2 -> def-image-and-coimage-in-a-category-with-kernels-and-cokernels needs an exact citation contract\nERROR citation-quote-mismatch [lem-smooth-chart-compatibility-is-symmetric-and-reflexive]: F1 quote does not occur in def-smoothly-compatible-charts's Definition\nERROR citation-quote-mismatch [lem-all-charts-compatible-with-a-smooth-atlas-form-a-smooth-atlas]: F1 quote does not occur in def-smoothly-compatible-charts's Definition\nERROR citation-quote-mismatch [prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure]: F4 quote does not occur in def-smoothly-compatible-charts's Definition\nERROR citation-quote-mismatch [prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure]: F3 quote does not occur in def-smoothly-compatible-charts's Definition\nERROR citation-quote-mismatch [prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]: F6 quote does not occur in def-smoothly-compatible-charts's Definition\nERROR citation-quote-mismatch [prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds]: F3 quote does not occur in def-smoothly-compatible-charts's Definition\nERROR citation-quote-mismatch [lem-chart-independence-of-c-r-smoothness]: F1 quote does not occur in def-smoothly-compatible-charts's Definition\nERROR citation-quote-mismatch [prop-smooth-maps-are-continuous]: F1 quote does not occur in def-c-r-and-smooth-maps-between-smooth-manifolds's Definition\nERROR citation-quote-mismatch [prop-identity-maps-and-composites-of-smooth-maps-are-smooth]: F2 quote does not occur in def-c-r-and-smooth-maps-between-smooth-manifolds's Definition\nERROR citation-quote-mismatch [prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets]: F3 quote does not occur in def-c-r-and-smooth-maps-between-smooth-manifolds's Definition\nERROR citation-quote-mismatch [prop-smoothness-is-local-on-the-source]: F1 quote does not occur in def-c-r-and-smooth-maps-between-smooth-manifolds's Definition\nERROR citation-quote-mismatch [prop-a-map-into-a-product-is-smooth-iff-its-components-are-smooth]: F2 quote does not occur in def-c-r-and-smooth-maps-between-smooth-manifolds's Definition\nERROR citation-quote-mismatch [prop-a-map-from-a-disjoint-union-is-smooth-iff-each-restriction-is-smooth]: F1 quote does not occur in prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds's Statement\nERROR citation-quote-mismatch [prop-a-map-from-a-disjoint-union-is-smooth-iff-each-restriction-is-smooth]: F2 quote does not occur in def-c-r-and-smooth-maps-between-smooth-manifolds's Definition\nERROR citation-quote-mismatch [fs-any-two-atlases-on-the-same-topological-manifold-have-a-union-atlas]: F2 quote does not occur in def-smoothly-compatible-charts's Definition\nERROR citation-quote-mismatch [fs-a-bijective-smooth-map-is-a-diffeomorphism]: F1 quote does not occur in def-c-r-and-smooth-maps-between-smooth-manifolds's Definition\nERROR citation-quote-mismatch [fs-chart-compatibility-needs-only-one-smooth-transition-direction]: F1 quote does not occur in def-smoothly-compatible-charts's Definition\nERROR citation-quote-mismatch [fs-an-arbitrary-disjoint-union-of-second-countable-manifolds-is-second-countable]: L1 quote does not occur in prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds's Statement\nERROR citation-quote-mismatch [ex-the-circle-from-two-stereographic-charts]: F2 quote does not occur in def-smoothly-compatible-charts's Definition\nERROR citation-quote-mismatch [ex-the-n-sphere-with-its-standard-smooth-atlas]: F2 quote does not occur in def-smoothly-compatible-charts's Definition\nERROR citation-quote-mismatch [ex-a-countable-disjoint-union-of-lines-is-a-smooth-manifold]: F2 quote does not occur in prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds's Statement\nERROR citation-quote-mismatch [cex-the-long-line-is-locally-euclidean-and-hausdorff-but-not-a-manifold-under-the-library-convention]: L1 quote does not occur in fs-every-hausdorff-locally-euclidean-space-is-a-manifold's Statement\nERROR citation-quote-mismatch [cex-two-noncompatible-atlases-on-the-real-line]: F3 quote does not occur in def-smoothly-compatible-charts's Definition\nERROR citation-quote-mismatch [prop-a-fundamental-matrix-is-invertible]: F1 quote does not occur in def-variational-equation-along-an-ode-solution's Definition\nERROR citation-quote-mismatch [thm-c1-dependence-of-solutions-on-initial-data]: F1 quote does not occur in def-variational-equation-along-an-ode-solution's Definition\nERROR citation-quote-mismatch [thm-smooth-dependence-of-solutions-on-initial-data]: F1 quote does not occur in def-variational-equation-along-an-ode-solution's Definition\nERROR citation-quote-mismatch [ex-a-linear-system-and-its-fundamental-matrix]: F1 quote does not occur in def-variational-equation-along-an-ode-solution's Definition\nERROR citation-quote-mismatch [fs-every-effective-encoding-is-prefix-free]: L1 quote does not occur in def-effective-binary-encoding-and-decoder's Definition\nERROR citation-quote-mismatch [cex-an-effective-encoding-need-not-be-prefix-free]: L1 quote does not occur in def-effective-binary-encoding-and-decoder's Definition\nWARN shotgun-bracket [thm-a-short-exact-sequence-is-a-kernel-cokernel-pair]: 1.1 cites 4 of 7 declared facts while 2 other step(s) cite none — cite each fact at the step that uses it\nWARN shotgun-bracket [thm-degenerate-exactness-criteria]: 1.2 cites 4 of 5 declared facts while 3 other step(s) cite none — cite each fact at the step that uses it\n",
      "named_ids": [
        "cex-enumerating-relator-consequences-does-not-decide-nontriviality",
        "thm-fundamental-groups-from-different-maximal-trees-are-isomorphic",
        "thm-normal-form-for-fundamental-groups-of-graphs-of-groups",
        "lem-the-bass-serre-coset-graph-is-a-tree",
        "thm-fundamental-group-acts-on-its-bass-serre-tree",
        "lem-boundary-monomorphisms-from-stabilizers-are-well-defined",
        "thm-bass-serre-structure-theorem",
        "fs-vertex-stabilizers-are-literally-the-chosen-vertex-groups-without-conjugacy",
        "fs-the-quotient-graph-determines-the-acting-group-without-stabilizer-data",
        "fs-kurosh-says-every-subgroup-of-a-free-product-is-free",
        "ex-bass-serre-tree-of-a-free-product",
        "ex-bass-serre-tree-of-an-amalgamated-free-product",
        "ex-bass-serre-tree-of-a-baumslag-solitar-group",
        "fs-every-complex-vector-space-has-a-preferred-real-form",
        "ex-distinct-conjugations-on-c-two-give-distinct-fixed-real-forms",
        "thm-exterior-algebra-laws",
        "lem-averaging-operator-projects-onto-the-fixed-subspace",
        "lem-g-equivariant-maps-are-the-fixed-points-of-the-dual-tensor-representation",
        "thm-complex-representations-are-determined-by-their-characters",
        "cor-a-complex-character-is-irreducible-iff-its-self-inner-product-is-one",
        "cor-the-regular-character-gives-the-sum-of-squares-formula",
        "ex-decomposing-the-square-of-the-two-dimensional-s-three-character",
        "thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized",
        "thm-induced-one-and-infinity-matrix-norms-are-max-column-and-row-sums",
        "thm-right-hand-side-perturbation-bound-for-ax-equals-b",
        "thm-matrix-perturbation-bound-for-ax-equals-b",
        "thm-residual-to-forward-error-bounds-for-linear-systems",
        "lem-product-of-one-plus-deltas-gives-theta-n",
        "thm-floating-point-dot-product-componentwise-and-normwise-error-bounds",
        "thm-local-conditioning-times-backward-error-controls-forward-error-to-first-order",
        "prop-spectral-numerical-rank-counts-singular-values-above-the-declared-threshold",
        "ex-two-by-two-systems-with-contrasting-condition-numbers",
        "ex-low-order-hilbert-matrices-have-large-condition-numbers",
        "ex-vandermonde-conditioning-improves-after-centering-and-scaling",
        "cex-a-tiny-residual-does-not-force-a-small-forward-error",
        "ex-a-backward-stable-solution-of-an-ill-conditioned-system",
        "ex-catastrophic-cancellation-and-a-stable-reformulation",
        "cex-condition-number-depends-on-the-chosen-norm-and-scaling",
        "cex-the-relative-floating-point-model-excludes-overflow-underflow-and-invalid-operations",
        "lem-finite-rectangle-unions-form-a-generating-algebra",
        "thm-sections-of-product-measurable-sets-are-measurable",
        "thm-tonelli-and-fubini-for-completed-product-measures",
        "fs-completed-product-sections-are-measurable-for-every-parameter",
        "thm-polar-coordinates-formula-for-lebesgue-measure",
        "cex-product-of-complete-measures-need-not-be-complete",
        "cex-completed-product-sections-need-not-be-pointwise-measurable",
        "thm-poincare-distance-formula-and-disc-automorphism-invariance",
        "thm-absolute-convergence-criterion-for-complex-infinite-products",
        "thm-canonical-product-convergence-from-exponent-sum",
        "thm-weierstrass-product-theorem-on-the-complex-plane",
        "thm-weierstrass-factorization-for-entire-functions",
        "thm-zero-exponent-is-bounded-by-entire-order",
        "thm-hadamard-factorization-for-finite-order-entire-functions",
        "fs-weierstrass-factorization-is-unique",
        "fs-entire-order-equals-canonical-genus",
        "thm-members-modulo-equivalence-correspond-to-subobjects",
        "thm-ab5-is-equivalent-to-exactness-of-filtered-colimits",
        "fs-exactness-can-be-defined-without-first-producing-a-canonical-monomorphism",
        "thm-the-subobject-inequalities-underlying-exactness",
        "lem-smooth-chart-compatibility-is-symmetric-and-reflexive",
        "lem-all-charts-compatible-with-a-smooth-atlas-form-a-smooth-atlas",
        "prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure",
        "prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure",
        "prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure",
        "prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds",
        "lem-chart-independence-of-c-r-smoothness",
        "prop-smooth-maps-are-continuous",
        "prop-identity-maps-and-composites-of-smooth-maps-are-smooth",
        "prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets",
        "prop-smoothness-is-local-on-the-source",
        "prop-a-map-into-a-product-is-smooth-iff-its-components-are-smooth",
        "prop-a-map-from-a-disjoint-union-is-smooth-iff-each-restriction-is-smooth",
        "fs-any-two-atlases-on-the-same-topological-manifold-have-a-union-atlas",
        "fs-a-bijective-smooth-map-is-a-diffeomorphism",
        "fs-chart-compatibility-needs-only-one-smooth-transition-direction",
        "fs-an-arbitrary-disjoint-union-of-second-countable-manifolds-is-second-countable",
        "ex-the-circle-from-two-stereographic-charts",
        "ex-the-n-sphere-with-its-standard-smooth-atlas",
        "ex-a-countable-disjoint-union-of-lines-is-a-smooth-manifold",
        "cex-the-long-line-is-locally-euclidean-and-hausdorff-but-not-a-manifold-under-the-library-convention",
        "cex-two-noncompatible-atlases-on-the-real-line",
        "prop-a-fundamental-matrix-is-invertible",
        "thm-c1-dependence-of-solutions-on-initial-data",
        "thm-smooth-dependence-of-solutions-on-initial-data",
        "ex-a-linear-system-and-its-fundamental-matrix",
        "fs-every-effective-encoding-is-prefix-free",
        "cex-an-effective-encoding-need-not-be-prefix-free",
        "thm-a-short-exact-sequence-is-a-kernel-cokernel-pair",
        "thm-degenerate-exactness-criteria"
      ]
    },
    {
      "id": "risk-report",
      "stage": "8-preflight",
      "why": "ERROR risk-review-missing [fs-vertex-stabilizers-are-literally-the-chosen-vertex-groups-without-conjugacy]: fs-vertex-stabilizers-are-literally-the-chosen-vertex-groups-without-conjugacy is high risk and lacks a complete Alpha risk_review",
      "output": "MODERATE 3 [lem-trivial-words-in-a-recursively-presented-group-are-recursively-enumerable] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 6 [prop-solvability-of-the-word-problem-is-independent-of-a-finite-generating-set] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nCRITICAL 8 [thm-word-problem-for-free-groups] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 4 [thm-word-problem-for-finitely-generated-abelian-groups] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [thm-word-problem-for-free-products-and-amalgams-with-decidable-membership] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 6 [lem-minimal-algebraic-relator-area-exists] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 5 [prop-recursive-dehn-function-implies-solvable-word-problem] 1:3 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nORDINARY 0 [fs-every-finitely-presented-group-has-solvable-word-problem] no signals\nORDINARY 1 [fs-recursively-enumerable-trivial-words-form-a-decision-algorithm] 1:3 cited facts\nORDINARY 2 [fs-unsolvable-word-problem-means-no-word-can-be-decided] 2:boundary-sensitive language\nMODERATE 4 [fs-the-novikov-boone-theorem-proves-the-uniform-problem-only] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 0 [fs-a-tietze-equivalent-presentation-can-change-solvability-of-the-word-problem] no signals\nORDINARY 2 [ex-word-problem-by-free-reduction] 2:boundary-sensitive language\nORDINARY 2 [ex-word-problem-in-a-finite-cyclic-presentation] 2:quotient or equivalence-class construction\nHIGH 5 [ex-conjugacy-in-a-free-group-by-cyclic-reduction] 3:biconditional / both-direction claim; 2:boundary-sensitive language\nORDINARY 2 [ex-todd-coxeter-as-a-partial-coset-enumeration-procedure] 2:quotient or equivalence-class construction\nHIGH 5 [ex-an-algebraic-relator-area-computation] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nORDINARY 1 [cex-enumerating-relator-consequences-does-not-decide-nontriviality] 1:2 cited facts\nHIGH 6 [thm-fundamental-groups-from-different-maximal-trees-are-isomorphic] 2:4 declared dependencies; 2:4 cited facts; 2:quotient or equivalence-class construction\nCRITICAL 10 [thm-normal-form-for-fundamental-groups-of-graphs-of-groups] 2:5 declared dependencies; 2:5 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nORDINARY 0 [cor-vertex-groups-embed-in-the-graph-of-groups-fundamental-group] no signals\nMODERATE 3 [lem-the-bass-serre-coset-graph-is-a-tree] 1:2 cited facts; 2:quotient or equivalence-class construction\nHIGH 7 [thm-fundamental-group-acts-on-its-bass-serre-tree] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 7 [lem-boundary-monomorphisms-from-stabilizers-are-well-defined] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 9 [thm-bass-serre-structure-theorem] 2:6 declared dependencies; 2:6 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [thm-one-segment-graph-of-groups-is-an-amalgamated-free-product] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [thm-one-loop-graph-of-groups-is-an-hnn-extension] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [cor-a-group-acting-freely-without-inversions-on-a-tree-is-free] 1:3 cited facts; 2:quotient or equivalence-class construction\nHIGH 5 [cor-fundamental-group-of-a-graph-with-trivial-groups-is-free] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 10 [thm-kurosh-subgroup-theorem] 2:5 declared dependencies; 2:5 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [thm-grushko-decomposition-and-rank-additivity] 1:3 cited facts; 2:quotient or equivalence-class construction\nORDINARY 2 [fs-the-fundamental-group-of-a-graph-of-groups-is-a-topological-fundamental-group-by-definition] 2:quotient or equivalence-class construction\nHIGH 5 [fs-vertex-stabilizers-are-literally-the-chosen-vertex-groups-without-conjugacy] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 0 [fs-every-tree-action-is-a-free-action] no signals\nCRITICAL 8 [fs-the-quotient-graph-determines-the-acting-group-without-stabilizer-data] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [fs-kurosh-says-every-subgroup-of-a-free-product-is-free] 1:3 cited facts; 2:quotient or equivalence-class construction\nHIGH 5 [ex-bass-serre-tree-of-a-free-product] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [ex-bass-serre-tree-of-an-amalgamated-free-product] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [ex-bass-serre-tree-of-a-baumslag-solitar-group] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [ex-a-free-action-and-the-quotient-graph-basis] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 2 [ex-kurosh-decomposition-of-a-subgroup] 2:boundary-sensitive language\nHIGH 5 [ex-graph-of-finite-groups-giving-a-virtually-free-group] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 4 [cex-the-underlying-quotient-graph-does-not-determine-the-group] 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 4 [thm-tensor-and-direct-sum-models-of-complexification-agree] 1:3 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language\nHIGH 6 [thm-universal-property-and-uniqueness-of-complexification] 2:4 declared dependencies; 1:3 cited facts; 1:8 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness\nMODERATE 3 [prop-complexification-is-functorial] 1:2 cited facts; 2:boundary-sensitive language\nCRITICAL 8 [thm-complexification-preserves-kernels-images-rank-nullity-and-short-exact-sequences] 2:6 declared dependencies; 2:6 cited facts; 2:12 numbered proof steps; 2:boundary-sensitive language\nHIGH 5 [thm-a-real-basis-complexifies-to-a-complex-basis] 2:6 declared dependencies; 2:5 cited facts; 1:6 numbered proof steps\nHIGH 6 [cor-realification-doubles-finite-dimension] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nHIGH 7 [thm-fixed-points-of-a-conjugation-form-a-real-space-and-its-complexification-recovers-the-ambient-space] 2:5 declared dependencies; 2:5 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language\nHIGH 5 [cor-real-forms-correspond-to-conjugations] 2:4 declared dependencies; 2:4 cited facts; 1:6 numbered proof steps\nCRITICAL 11 [thm-a-complex-linear-operator-comes-from-a-real-operator-exactly-when-it-commutes-with-the-chosen-conjugation] 2:6 declared dependencies; 2:5 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 6 [thm-characteristic-and-minimal-polynomials-survive-complexification] 2:5 declared dependencies; 2:5 cited facts; 2:induction, recursion, or minimality\nORDINARY 1 [thm-nonreal-generalised-eigenspaces-occur-in-conjugate-pairs] 1:3 cited facts\nORDINARY 2 [cor-a-nonreal-eigenvector-produces-an-invariant-real-two-plane] 1:2 cited facts; 1:6 numbered proof steps\nMODERATE 3 [ex-canonical-embedding-of-r-n-into-c-n] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 1 [ex-complexification-of-a-real-polynomial-space] 1:3 cited facts\nORDINARY 1 [ex-realification-of-c-n-has-doubled-dimension] 1:2 cited facts\nMODERATE 4 [ex-quarter-turn-diagonalises-after-complexification] 1:2 cited facts; 1:6 numbered proof steps; 2:induction, recursion, or minimality\nORDINARY 2 [ex-a-nonreal-eigenvector-recovers-a-real-invariant-plane] 2:boundary-sensitive language\nMODERATE 4 [ex-distinct-conjugations-on-c-two-give-distinct-fixed-real-forms] 1:2 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language\nMODERATE 3 [cex-a-complex-linear-map-can-fail-to-preserve-a-chosen-real-form] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 1 [fs-complexification-doubles-finite-dimension] 1:2 cited facts\nORDINARY 1 [fs-every-complex-vector-space-has-a-preferred-real-form] 1:2 cited facts\nMODERATE 3 [fs-every-complex-linear-operator-descends-to-every-chosen-real-form] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [fs-complexification-creates-a-real-eigenvector-whenever-it-creates-a-complex-one] 2:boundary-sensitive language\nCRITICAL 9 [thm-universal-property-and-uniqueness-of-exterior-powers] 2:5 declared dependencies; 2:5 cited facts; 1:6 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:quotient or equivalence-class construction\nHIGH 7 [prop-basic-wedge-is-multilinear-and-alternating] 2:4 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 10 [thm-increasing-basis-wedges-form-a-basis] 3:7 declared dependencies; 2:5 cited facts; 1:8 numbered proof steps; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 1 [cor-dimension-of-the-kth-exterior-power] 1:3 cited facts\nCRITICAL 8 [cor-the-kth-exterior-power-vanishes-above-dimension] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 6 [thm-a-decomposable-wedge-is-nonzero-exactly-for-independent-vectors] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nMODERATE 4 [thm-exterior-algebra-laws] 1:2 cited facts; 1:6 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness\nORDINARY 1 [thm-exterior-powers-are-functorial] 1:2 cited facts\nHIGH 6 [thm-the-matrix-of-an-exterior-power-is-the-signed-minor-matrix] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cor-the-top-exterior-power-acts-by-the-determinant] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 4 [cor-determinant-multiplicativity-from-the-top-exterior-power] 1:2 cited facts; 2:boundary-sensitive language; 1:finite countermodel smoke test selected\nHIGH 5 [thm-determinant-sign-detects-orientation-change] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 12 [thm-gram-inner-product-on-exterior-powers-is-positive-definite] 3:9 declared dependencies; 2:7 cited facts; 1:7 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 9 [thm-hodge-star-exists-uniquely-and-has-the-orthonormal-basis-formula] 2:4 declared dependencies; 2:4 cited facts; 1:6 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 0 [cor-hodge-star-is-an-isometry-and-squares-to-a-sign] no signals\nCRITICAL 8 [thm-interior-product-is-adjoint-to-exterior-multiplication] 2:6 declared dependencies; 2:5 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 1 [prop-wedge-and-interior-product-satisfy-the-graded-anticommutation-identity] 1:3 cited facts\nMODERATE 4 [cor-cross-product-is-hodge-star-of-the-wedge] 1:3 cited facts; 1:7 numbered proof steps; 2:boundary-sensitive language\nORDINARY 1 [ex-bases-and-dimensions-of-exterior-powers-of-r-two-r-three-and-r-four] 1:3 cited facts\nORDINARY 2 [ex-a-wedge-product-detects-linear-dependence] 2:boundary-sensitive language\nORDINARY 1 [ex-exterior-powers-of-a-diagonal-operator] 1:2 cited facts\nORDINARY 0 [ex-the-second-exterior-power-matrix-equals-the-signed-minor-matrix] no signals\nORDINARY 1 [ex-oriented-area-and-volume-from-gram-determinants] 1:2 cited facts\nORDINARY 2 [ex-hodge-star-in-dimensions-two-three-and-four] 1:2 cited facts; 1:6 numbered proof steps\nORDINARY 0 [ex-the-cross-product-from-hodge-star-and-wedge] no signals\nHIGH 6 [ex-orientation-reversal-negates-the-hodge-star] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nORDINARY 1 [cex-a-bivector-in-r-four-need-not-be-decomposable] 1:2 cited facts\nHIGH 5 [fs-the-exterior-power-is-a-canonical-subspace-of-the-tensor-power-over-every-field] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:quotient or equivalence-class construction\nMODERATE 3 [fs-an-inner-product-determines-an-orientation] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [fs-an-orientation-determines-an-inner-product] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 1 [fs-hodge-star-needs-only-the-vector-space-structure] 1:3 cited facts\nCRITICAL 8 [thm-transitivity-of-integrality] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [thm-integral-closure-is-integrally-closed] 1:3 cited facts; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-integrality-commutes-with-localisation] 2:5 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 10 [lem-field-integrality-criterion] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language\nCRITICAL 8 [cor-contraction-of-maximal-ideals-integral-extension] 1:3 cited facts; 3:biconditional / both-direction claim; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 16 [thm-lying-over] 3:9 declared dependencies; 2:8 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 11 [thm-incomparability-for-integral-extensions] 2:5 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 7 [thm-going-up] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 8 [cor-integral-extension-lifts-finite-prime-chains] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language\nORDINARY 2 [lem-integral-extension-chain-contraction-is-strict] 2:analytic limiting/completeness language\nCRITICAL 10 [cor-dimension-preserved-by-integral-extensions] 2:4 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 10 [lem-integrally-closed-minimal-polynomial-coefficients] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language\nCRITICAL 14 [thm-normality-is-local-for-domains] 3:7 declared dependencies; 2:5 cited facts; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 15 [thm-going-down-over-normal-domains] 2:6 declared dependencies; 2:6 cited facts; 1:8 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 10 [cor-height-preserved-under-going-down-integral-extensions] 2:5 declared dependencies; 2:5 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [ex-integrality-equation-and-power-basis] 3:biconditional / both-direction claim; 2:analytic limiting/completeness language\nHIGH 5 [ex-integral-elements-subring-computation] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [ex-integrality-localisation-clearing-denominators] 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nHIGH 7 [ex-lying-over-by-quotient-and-localisation] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nMODERATE 3 [ex-incomparability-in-a-quadratic-integral-extension] 1:2 cited facts; 2:analytic limiting/completeness language\nMODERATE 4 [ex-going-down-needs-normality] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 12 [prop-basic-value-properties-of-a-complex-character] 3:7 declared dependencies; 2:7 cited facts; 2:10 numbered proof steps; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nMODERATE 3 [thm-kernel-of-a-complex-character-agrees-with-the-representation-kernel] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 4 [thm-characters-of-direct-sums-tensor-products-and-duals] 2:6 declared dependencies; 2:6 cited facts\nMODERATE 3 [thm-character-of-a-permutation-representation-counts-fixed-points] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [lem-averaging-operator-projects-onto-the-fixed-subspace] 2:boundary-sensitive language\nMODERATE 4 [lem-g-equivariant-maps-are-the-fixed-points-of-the-dual-tensor-representation] 2:5 declared dependencies; 2:5 cited facts\nMODERATE 4 [thm-character-inner-product-computes-intertwiner-dimension] 2:4 declared dependencies; 2:4 cited facts\nCRITICAL 8 [thm-first-orthogonality-relation-for-irreducible-complex-characters] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 6 [thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness\nMODERATE 4 [thm-complex-representations-are-determined-by-their-characters] 1:2 cited facts; 3:biconditional / both-direction claim\nHIGH 6 [cor-a-complex-character-is-irreducible-iff-its-self-inner-product-is-one] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nMODERATE 4 [thm-character-of-the-regular-representation] 1:2 cited facts; 3:biconditional / both-direction claim\nORDINARY 1 [cor-the-regular-character-gives-the-sum-of-squares-formula] 1:3 cited facts\nORDINARY 1 [thm-second-column-orthogonality-relation-for-irreducible-complex-characters] 1:2 cited facts\nORDINARY 0 [cor-the-sum-of-squared-irreducible-character-values-at-g-is-the-centralizer-size] no signals\nORDINARY 1 [cor-the-character-table-is-square-and-invertible] 1:2 cited facts\nCRITICAL 8 [prop-representations-with-kernel-containing-a-normal-subgroup-factor-through-the-quotient] 2:4 declared dependencies; 1:3 cited facts; 3:biconditional / both-direction claim; 2:quotient or equivalence-class construction\nCRITICAL 10 [thm-normal-subgroups-are-exactly-intersections-of-kernels-of-irreducible-complex-characters] 2:4 declared dependencies; 2:4 cited facts; 1:6 numbered proof steps; 3:biconditional / both-direction claim; 2:quotient or equivalence-class construction\nCRITICAL 10 [thm-a-finite-group-is-abelian-iff-all-its-irreducible-complex-characters-have-degree-one] 2:5 declared dependencies; 2:5 cited facts; 1:6 numbered proof steps; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nHIGH 7 [ex-the-irreducible-complex-characters-of-a-finite-cyclic-group-are-the-n-powers-of-a-primitive-nth-root] 3:8 declared dependencies; 2:7 cited facts; 2:boundary-sensitive language\nMODERATE 4 [ex-the-character-table-of-a-finite-cyclic-group-over-c] 2:4 declared dependencies; 2:4 cited facts\nMODERATE 3 [ex-the-standard-representation-of-s-n-has-character-fixed-points-minus-one] 1:2 cited facts; 2:boundary-sensitive language\nCRITICAL 9 [ex-s-three-has-three-irreducible-complex-characters-of-degrees-one-one-and-two] 2:5 declared dependencies; 2:5 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nMODERATE 3 [ex-the-character-table-of-s-three] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 1 [ex-decomposing-the-square-of-the-two-dimensional-s-three-character] 1:3 cited facts\nHIGH 7 [ex-a-four-has-a-normal-klein-four-subgroup-and-four-conjugacy-classes] 1:3 cited facts; 1:6 numbered proof steps; 3:biconditional / both-direction claim; 2:quotient or equivalence-class construction\nCRITICAL 9 [ex-the-character-table-of-a-four] 2:6 declared dependencies; 2:6 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 1 [ex-s-four-has-five-conjugacy-classes-of-sizes-one-six-three-eight-and-six] 1:2 cited facts\nCRITICAL 11 [ex-the-character-table-of-s-four-and-its-normal-subgroups] 3:9 declared dependencies; 2:9 cited facts; 1:8 numbered proof steps; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nCRITICAL 9 [ex-the-character-table-of-q-eight] 2:6 declared dependencies; 2:6 cited facts; 1:7 numbered proof steps; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 9 [ex-the-character-table-of-dih-c-four] 2:6 declared dependencies; 2:6 cited facts; 1:7 numbered proof steps; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 6 [fs-nonisomorphic-finite-groups-can-have-the-same-character-table] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nORDINARY 0 [fs-a-complex-character-of-a-finite-group-is-always-a-homomorphism] no signals\nORDINARY 2 [fs-every-value-of-an-irreducible-complex-character-is-real] 2:boundary-sensitive language\nORDINARY 0 [fs-distinct-irreducible-complex-characters-of-a-finite-group-have-distinct-degrees] no signals\nHIGH 6 [fs-every-complex-class-function-with-self-inner-product-one-is-a-character] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nCRITICAL 11 [thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized] 2:4 declared dependencies; 2:4 cited facts; 1:9 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-induced-one-and-infinity-matrix-norms-are-max-column-and-row-sums] 2:5 declared dependencies; 2:5 cited facts; 2:14 numbered proof steps; 2:analytic limiting/completeness language\nHIGH 7 [thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison] 3:7 declared dependencies; 2:5 cited facts; 2:10 numbered proof steps\nORDINARY 1 [thm-right-hand-side-perturbation-bound-for-ax-equals-b] 1:3 cited facts\nMODERATE 4 [thm-matrix-perturbation-bound-for-ax-equals-b] 1:3 cited facts; 1:7 numbered proof steps; 2:boundary-sensitive language\nHIGH 7 [thm-reciprocal-spectral-condition-number-is-the-relative-distance-to-singularity] 2:6 declared dependencies; 2:5 cited facts; 1:8 numbered proof steps; 2:boundary-sensitive language\nHIGH 5 [thm-residual-to-forward-error-bounds-for-linear-systems] 2:4 declared dependencies; 2:4 cited facts; 1:7 numbered proof steps\nCRITICAL 10 [prop-explicit-formulas-for-normwise-and-componentwise-backward-error] 2:6 declared dependencies; 2:5 cited facts; 2:13 numbered proof steps; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [lem-product-of-one-plus-deltas-gives-theta-n] 1:3 cited facts; 1:6 numbered proof steps; 2:analytic limiting/completeness language\nCRITICAL 9 [thm-floating-point-dot-product-componentwise-and-normwise-error-bounds] 2:5 declared dependencies; 2:4 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nORDINARY 2 [thm-local-conditioning-times-backward-error-controls-forward-error-to-first-order] 2:analytic limiting/completeness language\nHIGH 7 [thm-normal-equations-square-the-spectral-condition-number] 2:6 declared dependencies; 2:5 cited facts; 1:7 numbered proof steps; 2:boundary-sensitive language\nHIGH 6 [thm-exact-rank-is-locally-constant-at-full-rank-and-discontinuous-at-nonmaximal-rank-matrices] 2:4 declared dependencies; 1:3 cited facts; 1:9 numbered proof steps; 2:boundary-sensitive language\nMODERATE 4 [prop-spectral-numerical-rank-counts-singular-values-above-the-declared-threshold] 2:4 declared dependencies; 1:3 cited facts; 1:6 numbered proof steps\nMODERATE 4 [ex-two-by-two-systems-with-contrasting-condition-numbers] 1:2 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language\nMODERATE 3 [ex-low-order-hilbert-matrices-have-large-condition-numbers] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 4 [ex-vandermonde-conditioning-improves-after-centering-and-scaling] 1:2 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language\nMODERATE 3 [cex-a-tiny-residual-does-not-force-a-small-forward-error] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [ex-a-backward-stable-solution-of-an-ill-conditioned-system] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 4 [ex-catastrophic-cancellation-and-a-stable-reformulation] 1:2 cited facts; 1:7 numbered proof steps; 2:quotient or equivalence-class construction\nORDINARY 0 [ex-a-floating-point-dot-product-error-bound] no signals\nMODERATE 4 [ex-normal-equations-versus-qr-conditioning] 1:2 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language\nMODERATE 4 [cex-condition-number-depends-on-the-chosen-norm-and-scaling] 1:2 cited facts; 1:8 numbered proof steps; 2:boundary-sensitive language\nORDINARY 2 [cex-numerical-rank-depends-on-the-declared-tolerance] 2:boundary-sensitive language\nORDINARY 2 [cex-the-relative-floating-point-model-excludes-overflow-underflow-and-invalid-operations] 2:quotient or equivalence-class construction\nMODERATE 3 [lem-finite-rectangle-unions-form-a-generating-algebra] 2:4 declared dependencies; 1:2 cited facts\nHIGH 5 [thm-sections-of-product-measurable-sets-are-measurable] 2:4 declared dependencies; 1:2 cited facts; 2:induction, recursion, or minimality\nMODERATE 3 [thm-sections-of-product-measurable-functions-are-measurable] 2:4 declared dependencies; 1:2 cited facts\nHIGH 6 [fs-measurable-sections-imply-product-measurability] 2:6 declared dependencies; 2:5 cited facts; 2:analytic limiting/completeness language\nCRITICAL 8 [prop-sigma-finite-section-measure-functions-are-measurable] 3:7 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 6 [thm-iterated-section-measures-agree-on-product-measurable-sets] 2:6 declared dependencies; 2:4 cited facts; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique] 3:8 declared dependencies; 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:analytic limiting/completeness language\nORDINARY 0 [fs-product-measure-is-unique-without-sigma-finiteness] no signals\nCRITICAL 8 [thm-tonelli-theorem-for-sigma-finite-product-spaces] 2:5 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [fs-tonelli-holds-without-sigma-finiteness] 1:2 cited facts; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces] 2:5 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 9 [thm-tonelli-and-fubini-for-completed-product-measures] 3:8 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [fs-completed-product-sections-are-measurable-for-every-parameter] 1:3 cited facts; 2:boundary-sensitive language\nHIGH 5 [thm-borel-products-of-euclidean-spaces-are-euclidean-borel] 2:6 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets] 3:8 declared dependencies; 2:5 cited facts\nMODERATE 3 [thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures] 2:4 declared dependencies; 1:3 cited facts\nHIGH 5 [fs-product-of-complete-measure-spaces-is-complete] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nHIGH 5 [fs-the-product-lebesgue-sigma-algebra-is-the-full-euclidean-lebesgue-sigma-algebra] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nHIGH 7 [thm-region-under-a-nonnegative-measurable-function-has-product-measure-equal-to-its-integral] 2:4 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [cor-graph-of-a-measurable-function-is-lebesgue-null] 2:5 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nCRITICAL 8 [thm-layer-cake-formula-for-l-p-powers] 2:6 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 9 [thm-polar-coordinates-formula-for-lebesgue-measure] 3:9 declared dependencies; 2:5 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:analytic limiting/completeness language\nMODERATE 3 [lem-c-one-diffeomorphisms-map-lebesgue-null-sets-to-null-sets] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 5 [lem-c-one-diffeomorphisms-map-lebesgue-measurable-sets-to-lebesgue-measurable-sets] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [lem-c-one-change-of-variables-for-continuous-compactly-supported-integrands] 1:2 cited facts; 2:analytic limiting/completeness language\nCRITICAL 9 [thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions] 3:8 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [cor-c-one-change-of-variables-for-l-one-functions] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [ex-one-dimensional-gaussian-integral-from-tonelli-and-polar-coordinates] 1:2 cited facts; 2:analytic limiting/completeness language\nHIGH 5 [ex-zeta-two-from-tonelli-and-the-geometric-series] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [ex-region-under-x-squared-has-measure-one-third] 1:2 cited facts; 2:analytic limiting/completeness language\nMODERATE 3 [ex-cavalieri-computes-the-area-of-the-unit-disc] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 6 [cex-measurable-sections-do-not-imply-product-measurability] 2:4 declared dependencies; 2:4 cited facts; 2:analytic limiting/completeness language\nORDINARY 2 [cex-tonelli-fails-without-sigma-finiteness-on-the-diagonal] 2:analytic limiting/completeness language\nMODERATE 4 [cex-fubini-fails-without-l-one-integrability] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 6 [cex-equal-iterated-integrals-do-not-imply-l-one-integrability] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [cex-product-measure-need-not-be-unique-without-sigma-finiteness] 2:boundary-sensitive language\nHIGH 6 [cex-product-of-complete-measures-need-not-be-complete] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nORDINARY 2 [cex-completed-product-sections-need-not-be-pointwise-measurable] 2:boundary-sensitive language\nHIGH 6 [thm-branch-power-agrees-with-integer-powers] 2:4 declared dependencies; 2:4 cited facts; 2:induction, recursion, or minimality\nORDINARY 1 [thm-principal-branch-power-agrees-with-positive-real-power] 1:3 cited facts\nCRITICAL 8 [thm-branch-discrepancies-for-logarithm-and-complex-powers] 2:5 declared dependencies; 2:5 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nORDINARY 1 [thm-blaschke-factor-is-a-disc-automorphism] 1:2 cited facts\nCRITICAL 9 [thm-unit-disc-schwarz-lemma-with-rigidity] 2:4 declared dependencies; 2:4 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 1 [thm-schwarz-pick-lemma-on-the-unit-disc] 1:3 cited facts\nMODERATE 3 [thm-disc-automorphisms-are-rotated-blaschke-factors] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness\nMODERATE 4 [thm-upper-half-plane-automorphisms-are-real-mobius-maps] 2:4 declared dependencies; 2:4 cited facts\nHIGH 5 [thm-poincare-distance-formula-and-disc-automorphism-invariance] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 1 [thm-conformal-equivalence-is-an-equivalence-relation] 1:2 cited facts\nHIGH 6 [thm-sector-power-map-is-biholomorphic-on-narrow-sectors] 2:6 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language\nMODERATE 4 [thm-slit-plane-root-branch-biholomorphism-to-a-sector] 2:5 declared dependencies; 2:4 cited facts\nHIGH 6 [thm-principal-logarithm-biholomorphism-to-the-principal-strip] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language\nORDINARY 1 [thm-principal-exponential-biholomorphism-from-principal-strip] 1:3 cited facts\nORDINARY 0 [thm-joukowski-biholomorphism-outside-unit-disc] no signals\nMODERATE 3 [thm-sine-biholomorphism-from-upper-half-strip] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [thm-the-sphere-the-plane-and-the-disc-are-pairwise-nonbiholomorphic] 2:4 declared dependencies; 1:3 cited facts\nMODERATE 3 [ex-principal-logarithm-breaks-additivity-at-minus-one] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 1 [ex-principal-square-root-breaks-multiplicativity-at-minus-one] 1:2 cited facts\nMODERATE 3 [ex-strip-to-disc-biholomorphism-by-exponential-and-cayley] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [ex-disc-automorphism-swapping-two-points] 2:boundary-sensitive language\nORDINARY 0 [ex-power-map-sends-a-sector-to-a-half-plane] no signals\nMODERATE 3 [ex-joukowski-sends-circles-to-ellipses] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [ex-sine-sends-a-half-strip-to-the-upper-half-plane] 2:boundary-sensitive language\nMODERATE 4 [cex-complex-conjugation-preserves-unoriented-angles-but-is-not-conformal] 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nORDINARY 1 [fs-conformal-maps-preserve-euclidean-lengths] 1:2 cited facts\nORDINARY 0 [fs-schwarz-lemma-holds-without-a-fixed-point-at-zero] no signals\nHIGH 5 [thm-absolute-convergence-criterion-for-complex-infinite-products] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-normal-convergence-of-holomorphic-products] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 5 [cor-logarithmic-derivative-of-a-normally-convergent-product] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nHIGH 6 [lem-unit-disc-estimate-for-weierstrass-elementary-factors] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nHIGH 5 [thm-canonical-product-convergence-from-exponent-sum] 2:5 declared dependencies; 1:3 cited facts; 2:analytic limiting/completeness language\nHIGH 5 [thm-weierstrass-product-theorem-on-the-complex-plane] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-weierstrass-factorization-for-entire-functions] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nHIGH 5 [cor-meromorphic-functions-on-the-plane-are-entire-quotients] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 10 [thm-sine-has-its-weierstrass-product] 2:5 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nCRITICAL 8 [thm-jensen-formula-on-a-disc] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [cor-jensen-zero-counting-bound] 2:boundary-sensitive language\nCRITICAL 9 [thm-zero-exponent-is-bounded-by-entire-order] 2:4 declared dependencies; 2:4 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 12 [thm-hadamard-factorization-for-finite-order-entire-functions] 3:10 declared dependencies; 2:9 cited facts; 1:9 numbered proof steps; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language\nMODERATE 4 [cor-nonintegral-entire-order-bounds-canonical-genus] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 4 [ex-product-of-one-plus-z-over-two-to-n-is-entire-and-zero-free] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [ex-sine-product-recovers-the-basel-sum] 1:2 cited facts; 2:analytic limiting/completeness language\nORDINARY 2 [ex-jensen-formula-for-a-polynomial] 2:boundary-sensitive language\nMODERATE 4 [ex-canonical-product-for-zeros-at-the-squares] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [cex-conditional-linear-sum-does-not-force-product-convergence] 2:analytic limiting/completeness language\nORDINARY 2 [fs-weierstrass-factorization-is-unique] 2:existence, choice, uniqueness, or well-definedness\nCRITICAL 8 [fs-every-zero-sequence-admits-a-genus-zero-canonical-product] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [fs-entire-order-equals-canonical-genus] 1:2 cited facts; 2:boundary-sensitive language\nCRITICAL 12 [thm-the-subobject-inequalities-underlying-exactness] 2:5 declared dependencies; 2:4 cited facts; 1:6 numbered proof steps; 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:quotient or equivalence-class construction\nCRITICAL 9 [thm-the-arrow-theoretic-criterion-for-exactness] 2:4 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nCRITICAL 10 [thm-a-short-exact-sequence-is-a-kernel-cokernel-pair] 3:8 declared dependencies; 2:7 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nCRITICAL 10 [thm-degenerate-exactness-criteria] 2:5 declared dependencies; 2:5 cited facts; 1:7 numbered proof steps; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nMODERATE 4 [thm-exactness-is-self-dual] 1:3 cited facts; 3:biconditional / both-direction claim\nCRITICAL 8 [thm-splitting-lemma-in-an-abelian-category] 2:4 declared dependencies; 1:2 cited facts; 1:7 numbered proof steps; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 3 [fs-a-short-exact-sequence-splits-whenever-its-middle-object-is-isomorphic-to-the-biproduct-of-the-outer-two] 1:3 cited facts; 2:quotient or equivalence-class construction\nORDINARY 2 [prop-member-equivalence-is-reflexive-and-symmetric] 2:boundary-sensitive language\nMODERATE 3 [thm-member-equivalence-is-transitive] 1:3 cited facts; 2:boundary-sensitive language\nHIGH 6 [thm-members-modulo-equivalence-correspond-to-subobjects] 2:6 declared dependencies; 2:5 cited facts; 2:quotient or equivalence-class construction\nCRITICAL 8 [prop-each-object-has-a-zero-member-and-each-member-has-a-negative] 2:4 declared dependencies; 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nORDINARY 2 [prop-a-morphism-carries-members-to-members-and-preserves-equivalence] 2:boundary-sensitive language\nMODERATE 3 [thm-chasing-rule-monicity-detected-by-members] 1:3 cited facts; 2:boundary-sensitive language\nMODERATE 3 [thm-chasing-rule-monicity-by-member-cancellation] 1:2 cited facts; 2:boundary-sensitive language\nCRITICAL 8 [thm-chasing-rule-epimorphy-detected-by-members] 2:6 declared dependencies; 2:4 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:quotient or equivalence-class construction\nORDINARY 2 [thm-chasing-rule-a-zero-arrow-is-detected-by-members] 2:boundary-sensitive language\nCRITICAL 9 [thm-chasing-rule-exactness-detected-by-members] 3:7 declared dependencies; 2:6 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:quotient or equivalence-class construction\nHIGH 7 [thm-chasing-rule-the-subtraction-surrogate] 2:5 declared dependencies; 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 5 [cex-the-members-of-an-object-do-not-form-a-group] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [cex-two-morphisms-agreeing-on-every-member-need-not-be-equal] 1:2 cited facts; 2:boundary-sensitive language\nCRITICAL 9 [thm-a-square-is-cartesian-exactly-when-a-short-sequence-is-exact] 2:6 declared dependencies; 2:5 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nORDINARY 1 [thm-a-cartesian-square-induces-an-isomorphism-on-the-kernels-of-its-parallel-legs] 1:2 cited facts\nCRITICAL 8 [thm-a-cartesian-square-over-an-epimorphism-is-also-cocartesian] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 0 [thm-epimorphisms-in-an-abelian-category-are-universal] no signals\nHIGH 7 [thm-the-covering-criterion-for-exactness] 2:5 declared dependencies; 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 6 [thm-the-kernel-row-and-cokernel-row-of-a-morphism-of-short-exact-sequences-are-exact-at-two-nodes-each] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cex-the-kernel-row-of-a-morphism-of-short-exact-sequences-need-not-be-short-exact] 1:2 cited facts; 2:boundary-sensitive language\nHIGH 6 [thm-exactness-of-kernel-and-cokernel-sequences-under-endpoint-hypotheses] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nHIGH 7 [thm-the-kernel-cokernel-sequence-of-a-composite] 2:5 declared dependencies; 2:5 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language\nCRITICAL 8 [thm-hom-is-left-exact-in-each-variable] 2:6 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 1 [cex-hom-is-not-exact] 1:2 cited facts\nCRITICAL 9 [thm-an-object-is-projective-exactly-when-hom-out-of-it-is-exact] 2:6 declared dependencies; 2:6 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nCRITICAL 12 [thm-ab5-is-equivalent-to-exactness-of-filtered-colimits] 3:8 declared dependencies; 2:8 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [fs-two-morphisms-that-agree-on-every-member-are-equal] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [fs-the-members-of-an-object-form-an-abelian-group] 1:2 cited facts; 2:quotient or equivalence-class construction\nORDINARY 2 [fs-member-equivalence-is-transitive-in-any-pointed-category-with-pullbacks] 2:boundary-sensitive language\nORDINARY 1 [fs-the-kernel-row-of-a-morphism-of-short-exact-sequences-is-short-exact] 1:2 cited facts\nMODERATE 3 [fs-the-subtraction-rule-produces-a-unique-member] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness\nHIGH 5 [fs-exactness-can-be-defined-without-first-producing-a-canonical-monomorphism] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [ex-members-of-an-abelian-group-correspond-to-its-subgroups] 1:2 cited facts; 2:quotient or equivalence-class construction\nMODERATE 3 [ex-an-ordinary-element-as-the-member-from-the-integers] 1:3 cited facts; 2:quotient or equivalence-class construction\nHIGH 5 [cex-a-general-member-of-an-abelian-group-need-not-come-from-an-element] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 1 [ex-a-member-chase-verifying-monicity] 1:3 cited facts\nORDINARY 1 [ex-the-covering-criterion-checked-in-abelian-groups] 1:2 cited facts\nMODERATE 3 [ex-the-kernel-cokernel-sequence-of-a-composite-of-module-maps] 1:2 cited facts; 2:boundary-sensitive language\nMODERATE 3 [cex-a-non-split-short-exact-sequence-of-abelian-groups] 1:3 cited facts; 2:quotient or equivalence-class construction\nHIGH 5 [ex-the-splitting-lemma-instantiated-at-the-published-module-theorem] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nMODERATE 3 [ex-the-kernel-row-failure-for-multiplication-by-two-computed] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [lem-smooth-chart-compatibility-is-symmetric-and-reflexive] 2:boundary-sensitive language\nORDINARY 2 [lem-the-union-of-two-compatible-smooth-atlases-is-a-smooth-atlas] 2:boundary-sensitive language\nCRITICAL 10 [prop-compatibility-of-smooth-atlases-is-an-equivalence-relation] 3:9 declared dependencies; 2:9 cited facts; 1:9 numbered proof steps; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nHIGH 6 [lem-all-charts-compatible-with-a-smooth-atlas-form-a-smooth-atlas] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nCRITICAL 8 [thm-each-smooth-atlas-is-contained-in-a-unique-maximal-smooth-atlas] 2:4 declared dependencies; 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nHIGH 5 [prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure] 3:8 declared dependencies; 2:7 cited facts\nHIGH 7 [prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure] 3:8 declared dependencies; 2:7 cited facts; 2:boundary-sensitive language\nHIGH 7 [prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure] 3:11 declared dependencies; 2:9 cited facts; 2:boundary-sensitive language\nHIGH 7 [prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds] 3:8 declared dependencies; 2:6 cited facts; 2:boundary-sensitive language\nHIGH 5 [lem-chart-independence-of-c-r-smoothness] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language\nHIGH 5 [prop-smooth-maps-are-continuous] 3:7 declared dependencies; 2:6 cited facts\nHIGH 7 [prop-identity-maps-and-composites-of-smooth-maps-are-smooth] 3:7 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language\nMODERATE 4 [prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets] 2:6 declared dependencies; 2:6 cited facts\nHIGH 7 [prop-smoothness-is-local-on-the-source] 2:4 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim\nMODERATE 3 [lem-smooth-maps-paste-over-an-open-cover] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness\nHIGH 6 [prop-a-map-into-a-product-is-smooth-iff-its-components-are-smooth] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nHIGH 6 [prop-a-map-from-a-disjoint-union-is-smooth-iff-each-restriction-is-smooth] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nHIGH 7 [prop-restrictions-corestrictions-and-products-of-smooth-maps-are-smooth] 2:5 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim\nORDINARY 1 [prop-a-smooth-map-with-everywhere-smooth-local-inverses-is-a-local-diffeomorphism] 1:2 cited facts\nMODERATE 3 [lem-coordinate-balls-form-a-basis-of-a-topological-manifold] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 1 [prop-topological-manifolds-are-locally-compact-and-locally-path-connected] 1:3 cited facts\nCRITICAL 9 [prop-components-of-a-topological-manifold-are-open-and-at-most-countable] 2:4 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language\nMODERATE 3 [thm-topological-manifolds-are-sigma-compact] 1:2 cited facts; 2:boundary-sensitive language\nCRITICAL 9 [thm-topological-manifolds-are-metrizable-and-paracompact] 3:7 declared dependencies; 2:6 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nHIGH 6 [fs-every-hausdorff-locally-euclidean-space-is-a-manifold] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language\nORDINARY 0 [fs-a-chart-domain-is-an-open-subset-of-euclidean-space] no signals\nMODERATE 3 [fs-any-two-atlases-on-the-same-topological-manifold-have-a-union-atlas] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 1 [fs-a-bijective-smooth-map-is-a-diffeomorphism] 1:2 cited facts\nORDINARY 2 [fs-chart-compatibility-needs-only-one-smooth-transition-direction] 2:boundary-sensitive language\nMODERATE 3 [fs-an-arbitrary-disjoint-union-of-second-countable-manifolds-is-second-countable] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 1 [ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds] 1:2 cited facts\nORDINARY 1 [ex-the-circle-from-two-stereographic-charts] 1:3 cited facts\nORDINARY 1 [ex-the-n-sphere-with-its-standard-smooth-atlas] 1:3 cited facts\nHIGH 5 [ex-real-projective-space-from-affine-charts] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction\nORDINARY 1 [ex-the-torus-as-a-product-smooth-manifold] 1:2 cited facts\nORDINARY 1 [ex-a-countable-disjoint-union-of-lines-is-a-smooth-manifold] 1:2 cited facts\nORDINARY 1 [cex-the-long-line-is-locally-euclidean-and-hausdorff-but-not-a-manifold-under-the-library-convention] 1:3 cited facts\nMODERATE 3 [cex-two-noncompatible-atlases-on-the-real-line] 1:3 cited facts; 2:boundary-sensitive language\nORDINARY 1 [cex-a-bijective-smooth-map-with-nonsmooth-inverse] 1:2 cited facts\nMODERATE 3 [cex-an-uncountable-disjoint-union-of-points-is-not-second-countable] 1:3 cited facts; 2:boundary-sensitive language\nCRITICAL 11 [lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval] 3:7 declared dependencies; 2:6 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nMODERATE 3 [prop-a-fundamental-matrix-is-invertible] 1:3 cited facts; 2:boundary-sensitive language\nCRITICAL 10 [thm-c1-dependence-of-solutions-on-initial-data] 2:6 declared dependencies; 2:6 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nCRITICAL 10 [thm-smooth-dependence-of-solutions-on-initial-data] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language\nORDINARY 0 [thm-smooth-dependence-of-ode-solutions-on-parameters] no signals\nCRITICAL 8 [cor-a-bounded-vector-field-on-all-of-euclidean-space-is-complete] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 1 [cor-a-compactly-supported-smooth-euclidean-vector-field-is-complete] 1:2 cited facts\nCRITICAL 8 [thm-fundamental-theorem-for-autonomous-smooth-odes] 2:5 declared dependencies; 2:5 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language\nMODERATE 3 [thm-fundamental-theorem-for-nonautonomous-smooth-odes] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness\nMODERATE 3 [prop-the-maximal-solution-domain-is-open] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness\nORDINARY 1 [prop-solutions-compose-under-a-change-of-initial-time] 1:2 cited facts\nORDINARY 1 [fs-every-smooth-vector-field-on-euclidean-space-is-complete] 1:2 cited facts\nMODERATE 3 [fs-local-existence-at-each-initial-point-gives-one-uniform-time-interval-for-all-initial-points] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 1 [fs-a-maximal-ode-solution-has-a-closed-interval-domain] 1:2 cited facts\nORDINARY 1 [fs-continuous-dependence-alone-implies-differentiable-dependence] 1:3 cited facts\nORDINARY 0 [ex-a-constant-vector-field-and-translation-solutions] no signals\nORDINARY 1 [ex-a-linear-system-and-its-fundamental-matrix] 1:3 cited facts\nORDINARY 1 [ex-the-harmonic-oscillator-as-a-first-order-system] 1:2 cited facts\nORDINARY 0 [ex-a-compactly-supported-vector-field-with-global-solutions] no signals\nORDINARY 1 [ex-smooth-dependence-in-an-ode-with-a-parameter] 1:2 cited facts\nORDINARY 2 [ex-a-nonautonomous-equation-made-autonomous-by-adjoining-time] 2:boundary-sensitive language\nMODERATE 3 [lem-computation-words-agree-with-published-finite-words] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [lem-language-concatenation-is-associative] 1:2 cited facts; 1:6 numbered proof steps\nMODERATE 4 [lem-kleene-star-has-the-expected-least-closure-property] 1:2 cited facts; 1:8 numbered proof steps; 2:induction, recursion, or minimality\nORDINARY 2 [lem-reversal-is-an-involution-and-reverses-concatenation] 1:3 cited facts; 1:6 numbered proof steps\nHIGH 7 [lem-induced-word-map-has-the-free-extension-property] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality\nMODERATE 4 [lem-finite-tuples-admit-effective-prefix-free-encodings] 2:boundary-sensitive language; 2:analytic limiting/completeness language\nORDINARY 2 [prop-polynomially-related-encodings-preserve-polynomial-size] 2:boundary-sensitive language\nMODERATE 3 [fs-a-language-is-a-set-of-symbols] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [fs-every-effective-encoding-is-prefix-free] 2:boundary-sensitive language\nORDINARY 1 [ex-language-concatenation-is-associative] 1:2 cited facts\nMODERATE 3 [ex-polynomially-related-encodings-preserve-polynomial-size] 1:2 cited facts; 2:boundary-sensitive language\nORDINARY 2 [cex-a-language-is-a-set-of-symbols] 2:boundary-sensitive language\nORDINARY 2 [cex-an-effective-encoding-need-not-be-prefix-free] 2:boundary-sensitive language\nrisk-report: 7 error(s), 389 item(s) routed\nERROR risk-review-missing [fs-vertex-stabilizers-are-literally-the-chosen-vertex-groups-without-conjugacy]: fs-vertex-stabilizers-are-literally-the-chosen-vertex-groups-without-conjugacy is high risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [fs-the-quotient-graph-determines-the-acting-group-without-stabilizer-data]: fs-the-quotient-graph-determines-the-acting-group-without-stabilizer-data is critical risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [fs-the-product-lebesgue-sigma-algebra-is-the-full-euclidean-lebesgue-sigma-algebra]: fs-the-product-lebesgue-sigma-algebra-is-the-full-euclidean-lebesgue-sigma-algebra is high risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [lem-c-one-diffeomorphisms-map-lebesgue-measurable-sets-to-lebesgue-measurable-sets]: lem-c-one-diffeomorphisms-map-lebesgue-measurable-sets-to-lebesgue-measurable-sets is high risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [cex-product-of-complete-measures-need-not-be-complete]: cex-product-of-complete-measures-need-not-be-complete is high risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [fs-exactness-can-be-defined-without-first-producing-a-canonical-monomorphism]: fs-exactness-can-be-defined-without-first-producing-a-canonical-monomorphism is high risk and lacks a complete Alpha risk_review\nERROR risk-review-missing [ex-the-splitting-lemma-instantiated-at-the-published-module-theorem]: ex-the-splitting-lemma-instantiated-at-the-published-module-theorem is high risk and lacks a complete Alpha risk_review\n",
      "named_ids": [
        "lem-trivial-words-in-a-recursively-presented-group-are-recursively-enumerable",
        "prop-solvability-of-the-word-problem-is-independent-of-a-finite-generating-set",
        "thm-word-problem-for-free-groups",
        "thm-word-problem-for-finitely-generated-abelian-groups",
        "thm-word-problem-for-free-products-and-amalgams-with-decidable-membership",
        "lem-minimal-algebraic-relator-area-exists",
        "prop-recursive-dehn-function-implies-solvable-word-problem",
        "fs-every-finitely-presented-group-has-solvable-word-problem",
        "fs-recursively-enumerable-trivial-words-form-a-decision-algorithm",
        "fs-unsolvable-word-problem-means-no-word-can-be-decided",
        "fs-the-novikov-boone-theorem-proves-the-uniform-problem-only",
        "fs-a-tietze-equivalent-presentation-can-change-solvability-of-the-word-problem",
        "ex-word-problem-by-free-reduction",
        "ex-word-problem-in-a-finite-cyclic-presentation",
        "ex-conjugacy-in-a-free-group-by-cyclic-reduction",
        "ex-todd-coxeter-as-a-partial-coset-enumeration-procedure",
        "ex-an-algebraic-relator-area-computation",
        "cex-enumerating-relator-consequences-does-not-decide-nontriviality",
        "thm-fundamental-groups-from-different-maximal-trees-are-isomorphic",
        "thm-normal-form-for-fundamental-groups-of-graphs-of-groups",
        "cor-vertex-groups-embed-in-the-graph-of-groups-fundamental-group",
        "lem-the-bass-serre-coset-graph-is-a-tree",
        "thm-fundamental-group-acts-on-its-bass-serre-tree",
        "lem-boundary-monomorphisms-from-stabilizers-are-well-defined",
        "thm-bass-serre-structure-theorem",
        "thm-one-segment-graph-of-groups-is-an-amalgamated-free-product",
        "thm-one-loop-graph-of-groups-is-an-hnn-extension",
        "cor-a-group-acting-freely-without-inversions-on-a-tree-is-free",
        "cor-fundamental-group-of-a-graph-with-trivial-groups-is-free",
        "thm-kurosh-subgroup-theorem",
        "thm-grushko-decomposition-and-rank-additivity",
        "fs-the-fundamental-group-of-a-graph-of-groups-is-a-topological-fundamental-group-by-definition",
        "fs-vertex-stabilizers-are-literally-the-chosen-vertex-groups-without-conjugacy",
        "fs-every-tree-action-is-a-free-action",
        "fs-the-quotient-graph-determines-the-acting-group-without-stabilizer-data",
        "fs-kurosh-says-every-subgroup-of-a-free-product-is-free",
        "ex-bass-serre-tree-of-a-free-product",
        "ex-bass-serre-tree-of-an-amalgamated-free-product",
        "ex-bass-serre-tree-of-a-baumslag-solitar-group",
        "ex-a-free-action-and-the-quotient-graph-basis",
        "ex-kurosh-decomposition-of-a-subgroup",
        "ex-graph-of-finite-groups-giving-a-virtually-free-group",
        "cex-the-underlying-quotient-graph-does-not-determine-the-group",
        "thm-tensor-and-direct-sum-models-of-complexification-agree",
        "thm-universal-property-and-uniqueness-of-complexification",
        "prop-complexification-is-functorial",
        "thm-complexification-preserves-kernels-images-rank-nullity-and-short-exact-sequences",
        "thm-a-real-basis-complexifies-to-a-complex-basis",
        "cor-realification-doubles-finite-dimension",
        "thm-fixed-points-of-a-conjugation-form-a-real-space-and-its-complexification-recovers-the-ambient-space",
        "cor-real-forms-correspond-to-conjugations",
        "thm-a-complex-linear-operator-comes-from-a-real-operator-exactly-when-it-commutes-with-the-chosen-conjugation",
        "thm-characteristic-and-minimal-polynomials-survive-complexification",
        "thm-nonreal-generalised-eigenspaces-occur-in-conjugate-pairs",
        "cor-a-nonreal-eigenvector-produces-an-invariant-real-two-plane",
        "ex-canonical-embedding-of-r-n-into-c-n",
        "ex-complexification-of-a-real-polynomial-space",
        "ex-realification-of-c-n-has-doubled-dimension",
        "ex-quarter-turn-diagonalises-after-complexification",
        "ex-a-nonreal-eigenvector-recovers-a-real-invariant-plane",
        "ex-distinct-conjugations-on-c-two-give-distinct-fixed-real-forms",
        "cex-a-complex-linear-map-can-fail-to-preserve-a-chosen-real-form",
        "fs-complexification-doubles-finite-dimension",
        "fs-every-complex-vector-space-has-a-preferred-real-form",
        "fs-every-complex-linear-operator-descends-to-every-chosen-real-form",
        "fs-complexification-creates-a-real-eigenvector-whenever-it-creates-a-complex-one",
        "thm-universal-property-and-uniqueness-of-exterior-powers",
        "prop-basic-wedge-is-multilinear-and-alternating",
        "thm-increasing-basis-wedges-form-a-basis",
        "cor-dimension-of-the-kth-exterior-power",
        "cor-the-kth-exterior-power-vanishes-above-dimension",
        "thm-a-decomposable-wedge-is-nonzero-exactly-for-independent-vectors",
        "thm-exterior-algebra-laws",
        "thm-exterior-powers-are-functorial",
        "thm-the-matrix-of-an-exterior-power-is-the-signed-minor-matrix",
        "cor-the-top-exterior-power-acts-by-the-determinant",
        "cor-determinant-multiplicativity-from-the-top-exterior-power",
        "thm-determinant-sign-detects-orientation-change",
        "thm-gram-inner-product-on-exterior-powers-is-positive-definite",
        "thm-hodge-star-exists-uniquely-and-has-the-orthonormal-basis-formula",
        "cor-hodge-star-is-an-isometry-and-squares-to-a-sign",
        "thm-interior-product-is-adjoint-to-exterior-multiplication",
        "prop-wedge-and-interior-product-satisfy-the-graded-anticommutation-identity",
        "cor-cross-product-is-hodge-star-of-the-wedge",
        "ex-bases-and-dimensions-of-exterior-powers-of-r-two-r-three-and-r-four",
        "ex-a-wedge-product-detects-linear-dependence",
        "ex-exterior-powers-of-a-diagonal-operator",
        "ex-the-second-exterior-power-matrix-equals-the-signed-minor-matrix",
        "ex-oriented-area-and-volume-from-gram-determinants",
        "ex-hodge-star-in-dimensions-two-three-and-four",
        "ex-the-cross-product-from-hodge-star-and-wedge",
        "ex-orientation-reversal-negates-the-hodge-star",
        "cex-a-bivector-in-r-four-need-not-be-decomposable",
        "fs-the-exterior-power-is-a-canonical-subspace-of-the-tensor-power-over-every-field",
        "fs-an-inner-product-determines-an-orientation",
        "fs-an-orientation-determines-an-inner-product",
        "fs-hodge-star-needs-only-the-vector-space-structure",
        "thm-transitivity-of-integrality",
        "thm-integral-closure-is-integrally-closed",
        "thm-integrality-commutes-with-localisation",
        "lem-field-integrality-criterion",
        "cor-contraction-of-maximal-ideals-integral-extension",
        "thm-lying-over",
        "thm-incomparability-for-integral-extensions",
        "thm-going-up",
        "cor-integral-extension-lifts-finite-prime-chains",
        "lem-integral-extension-chain-contraction-is-strict",
        "cor-dimension-preserved-by-integral-extensions",
        "lem-integrally-closed-minimal-polynomial-coefficients",
        "thm-normality-is-local-for-domains",
        "thm-going-down-over-normal-domains",
        "cor-height-preserved-under-going-down-integral-extensions",
        "ex-integrality-equation-and-power-basis",
        "ex-integral-elements-subring-computation",
        "ex-integrality-localisation-clearing-denominators",
        "ex-lying-over-by-quotient-and-localisation",
        "ex-incomparability-in-a-quadratic-integral-extension",
        "ex-going-down-needs-normality",
        "prop-basic-value-properties-of-a-complex-character",
        "thm-kernel-of-a-complex-character-agrees-with-the-representation-kernel",
        "thm-characters-of-direct-sums-tensor-products-and-duals",
        "thm-character-of-a-permutation-representation-counts-fixed-points",
        "lem-averaging-operator-projects-onto-the-fixed-subspace",
        "lem-g-equivariant-maps-are-the-fixed-points-of-the-dual-tensor-representation",
        "thm-character-inner-product-computes-intertwiner-dimension",
        "thm-first-orthogonality-relation-for-irreducible-complex-characters",
        "thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions",
        "cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product",
        "thm-complex-representations-are-determined-by-their-characters",
        "cor-a-complex-character-is-irreducible-iff-its-self-inner-product-is-one",
        "thm-character-of-the-regular-representation",
        "cor-the-regular-character-gives-the-sum-of-squares-formula",
        "thm-second-column-orthogonality-relation-for-irreducible-complex-characters",
        "cor-the-sum-of-squared-irreducible-character-values-at-g-is-the-centralizer-size",
        "cor-the-character-table-is-square-and-invertible",
        "prop-representations-with-kernel-containing-a-normal-subgroup-factor-through-the-quotient",
        "thm-normal-subgroups-are-exactly-intersections-of-kernels-of-irreducible-complex-characters",
        "thm-a-finite-group-is-abelian-iff-all-its-irreducible-complex-characters-have-degree-one",
        "ex-the-irreducible-complex-characters-of-a-finite-cyclic-group-are-the-n-powers-of-a-primitive-nth-root",
        "ex-the-character-table-of-a-finite-cyclic-group-over-c",
        "ex-the-standard-representation-of-s-n-has-character-fixed-points-minus-one",
        "ex-s-three-has-three-irreducible-complex-characters-of-degrees-one-one-and-two",
        "ex-the-character-table-of-s-three",
        "ex-decomposing-the-square-of-the-two-dimensional-s-three-character",
        "ex-a-four-has-a-normal-klein-four-subgroup-and-four-conjugacy-classes",
        "ex-the-character-table-of-a-four",
        "ex-s-four-has-five-conjugacy-classes-of-sizes-one-six-three-eight-and-six",
        "ex-the-character-table-of-s-four-and-its-normal-subgroups",
        "ex-the-character-table-of-q-eight",
        "ex-the-character-table-of-dih-c-four",
        "fs-nonisomorphic-finite-groups-can-have-the-same-character-table",
        "fs-a-complex-character-of-a-finite-group-is-always-a-homomorphism",
        "fs-every-value-of-an-irreducible-complex-character-is-real",
        "fs-distinct-irreducible-complex-characters-of-a-finite-group-have-distinct-degrees",
        "fs-every-complex-class-function-with-self-inner-product-one-is-a-character",
        "thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized",
        "thm-induced-one-and-infinity-matrix-norms-are-max-column-and-row-sums",
        "thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison",
        "thm-right-hand-side-perturbation-bound-for-ax-equals-b",
        "thm-matrix-perturbation-bound-for-ax-equals-b",
        "thm-reciprocal-spectral-condition-number-is-the-relative-distance-to-singularity",
        "thm-residual-to-forward-error-bounds-for-linear-systems",
        "prop-explicit-formulas-for-normwise-and-componentwise-backward-error",
        "lem-product-of-one-plus-deltas-gives-theta-n",
        "thm-floating-point-dot-product-componentwise-and-normwise-error-bounds",
        "thm-local-conditioning-times-backward-error-controls-forward-error-to-first-order",
        "thm-normal-equations-square-the-spectral-condition-number",
        "thm-exact-rank-is-locally-constant-at-full-rank-and-discontinuous-at-nonmaximal-rank-matrices",
        "prop-spectral-numerical-rank-counts-singular-values-above-the-declared-threshold",
        "ex-two-by-two-systems-with-contrasting-condition-numbers",
        "ex-low-order-hilbert-matrices-have-large-condition-numbers",
        "ex-vandermonde-conditioning-improves-after-centering-and-scaling",
        "cex-a-tiny-residual-does-not-force-a-small-forward-error",
        "ex-a-backward-stable-solution-of-an-ill-conditioned-system",
        "ex-catastrophic-cancellation-and-a-stable-reformulation",
        "ex-a-floating-point-dot-product-error-bound",
        "ex-normal-equations-versus-qr-conditioning",
        "cex-condition-number-depends-on-the-chosen-norm-and-scaling",
        "cex-numerical-rank-depends-on-the-declared-tolerance",
        "cex-the-relative-floating-point-model-excludes-overflow-underflow-and-invalid-operations",
        "lem-finite-rectangle-unions-form-a-generating-algebra",
        "thm-sections-of-product-measurable-sets-are-measurable",
        "thm-sections-of-product-measurable-functions-are-measurable",
        "fs-measurable-sections-imply-product-measurability",
        "prop-sigma-finite-section-measure-functions-are-measurable",
        "thm-iterated-section-measures-agree-on-product-measurable-sets",
        "thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique",
        "fs-product-measure-is-unique-without-sigma-finiteness",
        "thm-tonelli-theorem-for-sigma-finite-product-spaces",
        "fs-tonelli-holds-without-sigma-finiteness",
        "thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces",
        "thm-tonelli-and-fubini-for-completed-product-measures",
        "fs-completed-product-sections-are-measurable-for-every-parameter",
        "thm-borel-products-of-euclidean-spaces-are-euclidean-borel",
        "thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets",
        "thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures",
        "fs-product-of-complete-measure-spaces-is-complete",
        "fs-the-product-lebesgue-sigma-algebra-is-the-full-euclidean-lebesgue-sigma-algebra",
        "thm-region-under-a-nonnegative-measurable-function-has-product-measure-equal-to-its-integral",
        "cor-graph-of-a-measurable-function-is-lebesgue-null",
        "thm-layer-cake-formula-for-l-p-powers",
        "thm-polar-coordinates-formula-for-lebesgue-measure",
        "lem-c-one-diffeomorphisms-map-lebesgue-null-sets-to-null-sets",
        "lem-c-one-diffeomorphisms-map-lebesgue-measurable-sets-to-lebesgue-measurable-sets",
        "lem-c-one-change-of-variables-for-continuous-compactly-supported-integrands",
        "thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions",
        "cor-c-one-change-of-variables-for-l-one-functions",
        "ex-one-dimensional-gaussian-integral-from-tonelli-and-polar-coordinates",
        "ex-zeta-two-from-tonelli-and-the-geometric-series",
        "ex-region-under-x-squared-has-measure-one-third",
        "ex-cavalieri-computes-the-area-of-the-unit-disc",
        "cex-measurable-sections-do-not-imply-product-measurability",
        "cex-tonelli-fails-without-sigma-finiteness-on-the-diagonal",
        "cex-fubini-fails-without-l-one-integrability",
        "cex-equal-iterated-integrals-do-not-imply-l-one-integrability",
        "cex-product-measure-need-not-be-unique-without-sigma-finiteness",
        "cex-product-of-complete-measures-need-not-be-complete",
        "cex-completed-product-sections-need-not-be-pointwise-measurable",
        "thm-branch-power-agrees-with-integer-powers",
        "thm-principal-branch-power-agrees-with-positive-real-power",
        "thm-branch-discrepancies-for-logarithm-and-complex-powers",
        "thm-blaschke-factor-is-a-disc-automorphism",
        "thm-unit-disc-schwarz-lemma-with-rigidity",
        "thm-schwarz-pick-lemma-on-the-unit-disc",
        "thm-disc-automorphisms-are-rotated-blaschke-factors",
        "thm-upper-half-plane-automorphisms-are-real-mobius-maps",
        "thm-poincare-distance-formula-and-disc-automorphism-invariance",
        "thm-conformal-equivalence-is-an-equivalence-relation",
        "thm-sector-power-map-is-biholomorphic-on-narrow-sectors",
        "thm-slit-plane-root-branch-biholomorphism-to-a-sector",
        "thm-principal-logarithm-biholomorphism-to-the-principal-strip",
        "thm-principal-exponential-biholomorphism-from-principal-strip",
        "thm-joukowski-biholomorphism-outside-unit-disc",
        "thm-sine-biholomorphism-from-upper-half-strip",
        "thm-the-sphere-the-plane-and-the-disc-are-pairwise-nonbiholomorphic",
        "ex-principal-logarithm-breaks-additivity-at-minus-one",
        "ex-principal-square-root-breaks-multiplicativity-at-minus-one",
        "ex-strip-to-disc-biholomorphism-by-exponential-and-cayley",
        "ex-disc-automorphism-swapping-two-points",
        "ex-power-map-sends-a-sector-to-a-half-plane",
        "ex-joukowski-sends-circles-to-ellipses",
        "ex-sine-sends-a-half-strip-to-the-upper-half-plane",
        "cex-complex-conjugation-preserves-unoriented-angles-but-is-not-conformal",
        "fs-conformal-maps-preserve-euclidean-lengths",
        "fs-schwarz-lemma-holds-without-a-fixed-point-at-zero",
        "thm-absolute-convergence-criterion-for-complex-infinite-products",
        "thm-normal-convergence-of-holomorphic-products",
        "cor-logarithmic-derivative-of-a-normally-convergent-product",
        "lem-unit-disc-estimate-for-weierstrass-elementary-factors",
        "thm-canonical-product-convergence-from-exponent-sum",
        "thm-weierstrass-product-theorem-on-the-complex-plane",
        "thm-weierstrass-factorization-for-entire-functions",
        "cor-meromorphic-functions-on-the-plane-are-entire-quotients",
        "thm-sine-has-its-weierstrass-product",
        "thm-jensen-formula-on-a-disc",
        "cor-jensen-zero-counting-bound",
        "thm-zero-exponent-is-bounded-by-entire-order",
        "thm-hadamard-factorization-for-finite-order-entire-functions",
        "cor-nonintegral-entire-order-bounds-canonical-genus",
        "ex-product-of-one-plus-z-over-two-to-n-is-entire-and-zero-free",
        "ex-sine-product-recovers-the-basel-sum",
        "ex-jensen-formula-for-a-polynomial",
        "ex-canonical-product-for-zeros-at-the-squares",
        "cex-conditional-linear-sum-does-not-force-product-convergence",
        "fs-weierstrass-factorization-is-unique",
        "fs-every-zero-sequence-admits-a-genus-zero-canonical-product",
        "fs-entire-order-equals-canonical-genus",
        "thm-the-subobject-inequalities-underlying-exactness",
        "thm-the-arrow-theoretic-criterion-for-exactness",
        "thm-a-short-exact-sequence-is-a-kernel-cokernel-pair",
        "thm-degenerate-exactness-criteria",
        "thm-exactness-is-self-dual",
        "thm-splitting-lemma-in-an-abelian-category",
        "fs-a-short-exact-sequence-splits-whenever-its-middle-object-is-isomorphic-to-the-biproduct-of-the-outer-two",
        "prop-member-equivalence-is-reflexive-and-symmetric",
        "thm-member-equivalence-is-transitive",
        "thm-members-modulo-equivalence-correspond-to-subobjects",
        "prop-each-object-has-a-zero-member-and-each-member-has-a-negative",
        "prop-a-morphism-carries-members-to-members-and-preserves-equivalence",
        "thm-chasing-rule-monicity-detected-by-members",
        "thm-chasing-rule-monicity-by-member-cancellation",
        "thm-chasing-rule-epimorphy-detected-by-members",
        "thm-chasing-rule-a-zero-arrow-is-detected-by-members",
        "thm-chasing-rule-exactness-detected-by-members",
        "thm-chasing-rule-the-subtraction-surrogate",
        "cex-the-members-of-an-object-do-not-form-a-group",
        "cex-two-morphisms-agreeing-on-every-member-need-not-be-equal",
        "thm-a-square-is-cartesian-exactly-when-a-short-sequence-is-exact",
        "thm-a-cartesian-square-induces-an-isomorphism-on-the-kernels-of-its-parallel-legs",
        "thm-a-cartesian-square-over-an-epimorphism-is-also-cocartesian",
        "thm-epimorphisms-in-an-abelian-category-are-universal",
        "thm-the-covering-criterion-for-exactness",
        "thm-the-kernel-row-and-cokernel-row-of-a-morphism-of-short-exact-sequences-are-exact-at-two-nodes-each",
        "cex-the-kernel-row-of-a-morphism-of-short-exact-sequences-need-not-be-short-exact",
        "thm-exactness-of-kernel-and-cokernel-sequences-under-endpoint-hypotheses",
        "thm-the-kernel-cokernel-sequence-of-a-composite",
        "thm-hom-is-left-exact-in-each-variable",
        "cex-hom-is-not-exact",
        "thm-an-object-is-projective-exactly-when-hom-out-of-it-is-exact",
        "thm-ab5-is-equivalent-to-exactness-of-filtered-colimits",
        "fs-two-morphisms-that-agree-on-every-member-are-equal",
        "fs-the-members-of-an-object-form-an-abelian-group",
        "fs-member-equivalence-is-transitive-in-any-pointed-category-with-pullbacks",
        "fs-the-kernel-row-of-a-morphism-of-short-exact-sequences-is-short-exact",
        "fs-the-subtraction-rule-produces-a-unique-member",
        "fs-exactness-can-be-defined-without-first-producing-a-canonical-monomorphism",
        "ex-members-of-an-abelian-group-correspond-to-its-subgroups",
        "ex-an-ordinary-element-as-the-member-from-the-integers",
        "cex-a-general-member-of-an-abelian-group-need-not-come-from-an-element",
        "ex-a-member-chase-verifying-monicity",
        "ex-the-covering-criterion-checked-in-abelian-groups",
        "ex-the-kernel-cokernel-sequence-of-a-composite-of-module-maps",
        "cex-a-non-split-short-exact-sequence-of-abelian-groups",
        "ex-the-splitting-lemma-instantiated-at-the-published-module-theorem",
        "ex-the-kernel-row-failure-for-multiplication-by-two-computed",
        "lem-smooth-chart-compatibility-is-symmetric-and-reflexive",
        "lem-the-union-of-two-compatible-smooth-atlases-is-a-smooth-atlas",
        "prop-compatibility-of-smooth-atlases-is-an-equivalence-relation",
        "lem-all-charts-compatible-with-a-smooth-atlas-form-a-smooth-atlas",
        "thm-each-smooth-atlas-is-contained-in-a-unique-maximal-smooth-atlas",
        "prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure",
        "prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure",
        "prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure",
        "prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds",
        "lem-chart-independence-of-c-r-smoothness",
        "prop-smooth-maps-are-continuous",
        "prop-identity-maps-and-composites-of-smooth-maps-are-smooth",
        "prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets",
        "prop-smoothness-is-local-on-the-source",
        "lem-smooth-maps-paste-over-an-open-cover",
        "prop-a-map-into-a-product-is-smooth-iff-its-components-are-smooth",
        "prop-a-map-from-a-disjoint-union-is-smooth-iff-each-restriction-is-smooth",
        "prop-restrictions-corestrictions-and-products-of-smooth-maps-are-smooth",
        "prop-a-smooth-map-with-everywhere-smooth-local-inverses-is-a-local-diffeomorphism",
        "lem-coordinate-balls-form-a-basis-of-a-topological-manifold",
        "prop-topological-manifolds-are-locally-compact-and-locally-path-connected",
        "prop-components-of-a-topological-manifold-are-open-and-at-most-countable",
        "thm-topological-manifolds-are-sigma-compact",
        "thm-topological-manifolds-are-metrizable-and-paracompact",
        "fs-every-hausdorff-locally-euclidean-space-is-a-manifold",
        "fs-a-chart-domain-is-an-open-subset-of-euclidean-space",
        "fs-any-two-atlases-on-the-same-topological-manifold-have-a-union-atlas",
        "fs-a-bijective-smooth-map-is-a-diffeomorphism",
        "fs-chart-compatibility-needs-only-one-smooth-transition-direction",
        "fs-an-arbitrary-disjoint-union-of-second-countable-manifolds-is-second-countable",
        "ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds",
        "ex-the-circle-from-two-stereographic-charts",
        "ex-the-n-sphere-with-its-standard-smooth-atlas",
        "ex-real-projective-space-from-affine-charts",
        "ex-the-torus-as-a-product-smooth-manifold",
        "ex-a-countable-disjoint-union-of-lines-is-a-smooth-manifold",
        "cex-the-long-line-is-locally-euclidean-and-hausdorff-but-not-a-manifold-under-the-library-convention",
        "cex-two-noncompatible-atlases-on-the-real-line",
        "cex-a-bijective-smooth-map-with-nonsmooth-inverse",
        "cex-an-uncountable-disjoint-union-of-points-is-not-second-countable",
        "lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval",
        "prop-a-fundamental-matrix-is-invertible",
        "thm-c1-dependence-of-solutions-on-initial-data",
        "thm-smooth-dependence-of-solutions-on-initial-data",
        "thm-smooth-dependence-of-ode-solutions-on-parameters",
        "cor-a-bounded-vector-field-on-all-of-euclidean-space-is-complete",
        "cor-a-compactly-supported-smooth-euclidean-vector-field-is-complete",
        "thm-fundamental-theorem-for-autonomous-smooth-odes",
        "thm-fundamental-theorem-for-nonautonomous-smooth-odes",
        "prop-the-maximal-solution-domain-is-open",
        "prop-solutions-compose-under-a-change-of-initial-time",
        "fs-every-smooth-vector-field-on-euclidean-space-is-complete",
        "fs-local-existence-at-each-initial-point-gives-one-uniform-time-interval-for-all-initial-points",
        "fs-a-maximal-ode-solution-has-a-closed-interval-domain",
        "fs-continuous-dependence-alone-implies-differentiable-dependence",
        "ex-a-constant-vector-field-and-translation-solutions",
        "ex-a-linear-system-and-its-fundamental-matrix",
        "ex-the-harmonic-oscillator-as-a-first-order-system",
        "ex-a-compactly-supported-vector-field-with-global-solutions",
        "ex-smooth-dependence-in-an-ode-with-a-parameter",
        "ex-a-nonautonomous-equation-made-autonomous-by-adjoining-time",
        "lem-computation-words-agree-with-published-finite-words",
        "lem-language-concatenation-is-associative",
        "lem-kleene-star-has-the-expected-least-closure-property",
        "lem-reversal-is-an-involution-and-reverses-concatenation",
        "lem-induced-word-map-has-the-free-extension-property",
        "lem-finite-tuples-admit-effective-prefix-free-encodings",
        "prop-polynomially-related-encodings-preserve-polynomial-size",
        "fs-a-language-is-a-set-of-symbols",
        "fs-every-effective-encoding-is-prefix-free",
        "ex-language-concatenation-is-associative",
        "ex-polynomially-related-encodings-preserve-polynomial-size",
        "cex-a-language-is-a-set-of-symbols",
        "cex-an-effective-encoding-need-not-be-prefix-free"
      ]
    },
    {
      "id": "citation-fidelity",
      "stage": "8-preflight",
      "why": "Every line above is a candidate for a human read, not a verdict.",
      "output": "citation-fidelity: 1106 citation(s) over 389 authored item(s)\n\nQUOTE NOT FOUND IN THE CITED ITEM — 38.\nThe contract asserts a verbatim quote. These do not appear in the source.\n\n  thm-complex-representations-are-determined-by-their-characters  [F2] -> cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product (searched: Statement)\n    quote: \"Let $G$ be a finite group, let $V$ be a finite-dimensional complex representation of $G$, and let $\\chi_i$ be an irreducible complex character of $G$. Write $V\\cong\\bigoplus_{j=1}^…\"\n\n  cor-a-complex-character-is-irreducible-iff-its-self-inner-product-is-one  [F1] -> cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product (searched: Statement)\n    quote: \"Let $G$ be a finite group, let $V$ be a finite-dimensional complex representation of $G$, and let $\\chi_i$ be an irreducible complex character of $G$. Write $V\\cong\\bigoplus_{j=1}^…\"\n\n  cor-the-regular-character-gives-the-sum-of-squares-formula  [F2] -> cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product (searched: Statement)\n    quote: \"Let $G$ be a finite group, let $V$ be a finite-dimensional complex representation of $G$, and let $\\chi_i$ be an irreducible complex character of $G$. Write $V\\cong\\bigoplus_{j=1}^…\"\n\n  ex-decomposing-the-square-of-the-two-dimensional-s-three-character  [F3] -> cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product (searched: Statement)\n    quote: \"Let $G$ be a finite group, let $V$ be a finite-dimensional complex representation of $G$, and let $\\chi_i$ be an irreducible complex character of $G$. Write $V\\cong\\bigoplus_{j=1}^…\"\n\n  thm-right-hand-side-perturbation-bound-for-ax-equals-b  [L3] -> def-condition-number-of-a-nonsingular-linear-system (searched: Definition)\n    quote: \"Let $n\\in\\mathbb{N}$ with $n\\ge 1$, let $p\\in\\mathbb{Q}$ with $p\\ge 1$, and let $A\\in\\operatorname{GL}_n(\\mathbb{R})$ be an invertible real matrix ([[def-invertible-matrix-and-gene…\"\n\n  thm-matrix-perturbation-bound-for-ax-equals-b  [L3] -> def-condition-number-of-a-nonsingular-linear-system (searched: Definition)\n    quote: \"Let $n\\in\\mathbb{N}$ with $n\\ge 1$, let $p\\in\\mathbb{Q}$ with $p\\ge 1$, and let $A\\in\\operatorname{GL}_n(\\mathbb{R})$ be an invertible real matrix ([[def-invertible-matrix-and-gene…\"\n\n  thm-residual-to-forward-error-bounds-for-linear-systems  [L3] -> def-condition-number-of-a-nonsingular-linear-system (searched: Definition)\n    quote: \"Let $n\\in\\mathbb{N}$ with $n\\ge 1$, let $p\\in\\mathbb{Q}$ with $p\\ge 1$, and let $A\\in\\operatorname{GL}_n(\\mathbb{R})$ be an invertible real matrix ([[def-invertible-matrix-and-gene…\"\n\n  prop-spectral-numerical-rank-counts-singular-values-above-the-declared-threshold  [L1] -> def-numerical-rank-relative-to-a-norm-scale-and-tolerance (searched: Definition)\n    quote: \"Let $m,n\\in\\mathbb{N}$, let $\\mathbb F$ be $\\mathbb R$ or $\\mathbb C$, let $\\lVert\\cdot\\rVert$ be a declared norm on the matrix space $M_{m\\times n}(\\mathbb F)$, and let $\\tau\\ge 0…\"\n\n  ex-two-by-two-systems-with-contrasting-condition-numbers  [L1] -> def-condition-number-of-a-nonsingular-linear-system (searched: Definition)\n    quote: \"Let $n\\in\\mathbb{N}$ with $n\\ge 1$, let $p\\in\\mathbb{Q}$ with $p\\ge 1$, and let $A\\in\\operatorname{GL}_n(\\mathbb{R})$ be an invertible real matrix ([[def-invertible-matrix-and-gene…\"\n\n  ex-low-order-hilbert-matrices-have-large-condition-numbers  [L1] -> def-condition-number-of-a-nonsingular-linear-system (searched: Definition)\n    quote: \"Let $n\\in\\mathbb{N}$ with $n\\ge 1$, let $p\\in\\mathbb{Q}$ with $p\\ge 1$, and let $A\\in\\operatorname{GL}_n(\\mathbb{R})$ be an invertible real matrix ([[def-invertible-matrix-and-gene…\"\n\n  ex-vandermonde-conditioning-improves-after-centering-and-scaling  [L1] -> def-condition-number-of-a-nonsingular-linear-system (searched: Definition)\n    quote: \"Let $n\\in\\mathbb{N}$ with $n\\ge 1$, let $p\\in\\mathbb{Q}$ with $p\\ge 1$, and let $A\\in\\operatorname{GL}_n(\\mathbb{R})$ be an invertible real matrix ([[def-invertible-matrix-and-gene…\"\n\n  cex-a-tiny-residual-does-not-force-a-small-forward-error  [L2] -> def-condition-number-of-a-nonsingular-linear-system (searched: Definition)\n    quote: \"Let $n\\in\\mathbb{N}$ with $n\\ge 1$, let $p\\in\\mathbb{Q}$ with $p\\ge 1$, and let $A\\in\\operatorname{GL}_n(\\mathbb{R})$ be an invertible real matrix ([[def-invertible-matrix-and-gene…\"\n\n  cex-condition-number-depends-on-the-chosen-norm-and-scaling  [L1] -> def-condition-number-of-a-nonsingular-linear-system (searched: Definition)\n    quote: \"Let $n\\in\\mathbb{N}$ with $n\\ge 1$, let $p\\in\\mathbb{Q}$ with $p\\ge 1$, and let $A\\in\\operatorname{GL}_n(\\mathbb{R})$ be an invertible real matrix ([[def-invertible-matrix-and-gene…\"\n\n  fs-completed-product-sections-are-measurable-for-every-parameter  [L1] -> thm-tonelli-and-fubini-for-completed-product-measures (searched: Statement)\n    quote: \"Let $\\overline{\\mu \\times \\nu}$ be the completed product of two sigma-finite measure spaces. 1. If $f : X \\times Y \\to [0,\\infty]$ is $\\overline{\\mu \\times \\nu}$-measurable, then f…\"\n\n  cex-completed-product-sections-need-not-be-pointwise-measurable  [L1] -> cex-product-of-complete-measures-need-not-be-complete (searched: Statement refuted)\n    quote: \"The product of two complete measure spaces is always complete.\"\n\n  thm-poincare-distance-formula-and-disc-automorphism-invariance  [F1] -> def-poincare-metric-and-distance-on-the-disc (searched: Definition)\n    quote: \"On the unit disc $\\mathbb D$ of [[def-unit-disc-upper-half-plane-and-blaschke-factor]] fix the Poincare metric, also called the hyperbolic metric of the disc, $$ds_{\\mathbb D}:=\\fr…\"\n\n  thm-absolute-convergence-criterion-for-complex-infinite-products  [F1] -> rem-complex-infinite-product-dictionary (searched: Remark)\n    quote: \"This page reuses the published infinite-product definition [[def-infinite-product]] rather than reminting it for complex factors. The same tail convention is used: a product conver…\"\n\n  thm-hadamard-factorization-for-finite-order-entire-functions  [F2] -> thm-zero-exponent-is-bounded-by-entire-order (searched: Statement)\n    quote: \"Let $f$ be a nonzero entire function of finite order $\\rho$, and let $(a_n)_{n\\ge1}$ list its nonzero zeros with multiplicity and without finite accumulation point. Then the expone…\"\n\n  thm-hadamard-factorization-for-finite-order-entire-functions  [F5] -> thm-weierstrass-factorization-for-entire-functions (searched: Statement)\n    quote: \"Let $f$ be an entire function, not identically zero. Let $m$ be the order of its zero at $0$, and let $(a_n)_{n\\ge1}$ list its nonzero zeros with multiplicity and without finite ac…\"\n\n  fs-weierstrass-factorization-is-unique  [F1] -> thm-weierstrass-factorization-for-entire-functions (searched: Statement)\n    quote: \"Let $f$ be an entire function, not identically zero. Let $m$ be the order of its zero at $0$, and let $(a_n)_{n\\ge1}$ list its nonzero zeros with multiplicity and without finite ac…\"\n\n  fs-entire-order-equals-canonical-genus  [F1] -> thm-weierstrass-factorization-for-entire-functions (searched: Statement)\n    quote: \"Let $f$ be an entire function, not identically zero. Let $m$ be the order of its zero at $0$, and let $(a_n)_{n\\ge1}$ list its nonzero zeros with multiplicity and without finite ac…\"\n\n  thm-members-modulo-equivalence-correspond-to-subobjects  [L4] -> thm-member-equivalence-is-transitive (searched: Statement)\n    quote: \"For members of one object, the relation $\\equiv$ is transitive.\"\n\n  lem-smooth-chart-compatibility-is-symmetric-and-reflexive  [F1] -> def-smoothly-compatible-charts (searched: Definition)\n    quote: \"Let $m\\ge1$, let $W\\subseteq\\mathbb R^m$ be open and let $f:W\\to\\mathbb R^q$. The map $f$ is smooth (of class $C^\\infty$) when every component $f_l:W\\to\\mathbb R$ is of class $C^k$…\"\n\n  lem-all-charts-compatible-with-a-smooth-atlas-form-a-smooth-atlas  [F1] -> def-smoothly-compatible-charts (searched: Definition)\n    quote: \"Let $m\\ge1$, let $W\\subseteq\\mathbb R^m$ be open and let $f:W\\to\\mathbb R^q$. The map $f$ is smooth (of class $C^\\infty$) when every component $f_l:W\\to\\mathbb R$ is of class $C^k$…\"\n\n  prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure  [F4] -> def-smoothly-compatible-charts (searched: Definition)\n    quote: \"Let $m\\ge1$, let $W\\subseteq\\mathbb R^m$ be open and let $f:W\\to\\mathbb R^q$. The map $f$ is smooth (of class $C^\\infty$) when every component $f_l:W\\to\\mathbb R$ is of class $C^k$…\"\n\n  prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure  [F3] -> def-smoothly-compatible-charts (searched: Definition)\n    quote: \"Let $m\\ge1$, let $W\\subseteq\\mathbb R^m$ be open and let $f:W\\to\\mathbb R^q$. The map $f$ is smooth (of class $C^\\infty$) when every component $f_l:W\\to\\mathbb R$ is of class $C^k$…\"\n\n  prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure  [F6] -> def-smoothly-compatible-charts (searched: Definition)\n    quote: \"Let $m\\ge1$, let $W\\subseteq\\mathbb R^m$ be open and let $f:W\\to\\mathbb R^q$. The map $f$ is smooth (of class $C^\\infty$) when every component $f_l:W\\to\\mathbb R$ is of class $C^k$…\"\n\n  prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds  [F3] -> def-smoothly-compatible-charts (searched: Definition)\n    quote: \"Let $m\\ge1$, let $W\\subseteq\\mathbb R^m$ be open and let $f:W\\to\\mathbb R^q$. The map $f$ is smooth (of class $C^\\infty$) when every component $f_l:W\\to\\mathbb R$ is of class $C^k$…\"\n\n  lem-chart-independence-of-c-r-smoothness  [F1] -> def-smoothly-compatible-charts (searched: Definition)\n    quote: \"Let $m\\ge1$, let $W\\subseteq\\mathbb R^m$ be open and let $f:W\\to\\mathbb R^q$. The map $f$ is smooth (of class $C^\\infty$) when every component $f_l:W\\to\\mathbb R$ is of class $C^k$…\"\n\n  prop-a-map-from-a-disjoint-union-is-smooth-iff-each-restriction-is-smooth  [F1] -> prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds (searched: Statement)\n    quote: \"Let $I$ be an at most countable set with a fixed enumeration, and for each $i\\in I$ let $M_i$ be a smooth $n$-manifold presented together with a fixed at most countable basis of it…\"\n\n  fs-any-two-atlases-on-the-same-topological-manifold-have-a-union-atlas  [F2] -> def-smoothly-compatible-charts (searched: Definition)\n    quote: \"Let $m\\ge1$, let $W\\subseteq\\mathbb R^m$ be open and let $f:W\\to\\mathbb R^q$. The map $f$ is smooth (of class $C^\\infty$) when every component $f_l:W\\to\\mathbb R$ is of class $C^k$…\"\n\n  fs-chart-compatibility-needs-only-one-smooth-transition-direction  [F1] -> def-smoothly-compatible-charts (searched: Definition)\n    quote: \"Let $m\\ge1$, let $W\\subseteq\\mathbb R^m$ be open and let $f:W\\to\\mathbb R^q$. The map $f$ is smooth (of class $C^\\infty$) when every component $f_l:W\\to\\mathbb R$ is of class $C^k$…\"\n\n  fs-an-arbitrary-disjoint-union-of-second-countable-manifolds-is-second-countable  [L1] -> prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds (searched: Statement)\n    quote: \"Let $I$ be an at most countable set with a fixed enumeration, and for each $i\\in I$ let $M_i$ be a smooth $n$-manifold presented together with a fixed at most countable basis of it…\"\n\n  ex-the-circle-from-two-stereographic-charts  [F2] -> def-smoothly-compatible-charts (searched: Definition)\n    quote: \"Let $m\\ge1$, let $W\\subseteq\\mathbb R^m$ be open and let $f:W\\to\\mathbb R^q$. The map $f$ is smooth (of class $C^\\infty$) when every component $f_l:W\\to\\mathbb R$ is of class $C^k$…\"\n\n  ex-the-n-sphere-with-its-standard-smooth-atlas  [F2] -> def-smoothly-compatible-charts (searched: Definition)\n    quote: \"Let $m\\ge1$, let $W\\subseteq\\mathbb R^m$ be open and let $f:W\\to\\mathbb R^q$. The map $f$ is smooth (of class $C^\\infty$) when every component $f_l:W\\to\\mathbb R$ is of class $C^k$…\"\n\n  ex-a-countable-disjoint-union-of-lines-is-a-smooth-manifold  [F2] -> prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds (searched: Statement)\n    quote: \"Let $I$ be an at most countable set with a fixed enumeration, and for each $i\\in I$ let $M_i$ be a smooth $n$-manifold presented together with a fixed at most countable basis of it…\"\n\n  cex-the-long-line-is-locally-euclidean-and-hausdorff-but-not-a-manifold-under-the-library-convention  [L1] -> fs-every-hausdorff-locally-euclidean-space-is-a-manifold (searched: Statement)\n    quote: \"False claim: every Hausdorff locally Euclidean space is a manifold.\"\n\n  cex-two-noncompatible-atlases-on-the-real-line  [F3] -> def-smoothly-compatible-charts (searched: Definition)\n    quote: \"Let $m\\ge1$, let $W\\subseteq\\mathbb R^m$ be open and let $f:W\\to\\mathbb R^q$. The map $f$ is smooth (of class $C^\\infty$) when every component $f_l:W\\to\\mathbb R$ is of class $C^k$…\"\n\nWIDENING CANDIDATES — none found by the three detectors.\n\nEvery line above is a candidate for a human read, not a verdict.\n",
      "named_ids": [
        "def-unit-disc-upper-half-plane-and-blaschke-factor",
        "def-infinite-product"
      ]
    }
  ],
  "mechanical_residue": "",
  "live_items": [
    {
      "id": "cex-enumerating-relator-consequences-does-not-decide-nontriviality",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-fundamental-groups-from-different-maximal-trees-are-isomorphic",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-normal-form-for-fundamental-groups-of-graphs-of-groups",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-the-bass-serre-coset-graph-is-a-tree",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-fundamental-group-acts-on-its-bass-serre-tree",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-boundary-monomorphisms-from-stabilizers-are-well-defined",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-bass-serre-structure-theorem",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-vertex-stabilizers-are-literally-the-chosen-vertex-groups-without-conjugacy",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-the-quotient-graph-determines-the-acting-group-without-stabilizer-data",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-kurosh-says-every-subgroup-of-a-free-product-is-free",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-bass-serre-tree-of-a-free-product",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-bass-serre-tree-of-an-amalgamated-free-product",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-bass-serre-tree-of-a-baumslag-solitar-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-every-complex-vector-space-has-a-preferred-real-form",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-distinct-conjugations-on-c-two-give-distinct-fixed-real-forms",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-exterior-algebra-laws",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-averaging-operator-projects-onto-the-fixed-subspace",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-g-equivariant-maps-are-the-fixed-points-of-the-dual-tensor-representation",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-complex-representations-are-determined-by-their-characters",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-a-complex-character-is-irreducible-iff-its-self-inner-product-is-one",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-the-regular-character-gives-the-sum-of-squares-formula",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-decomposing-the-square-of-the-two-dimensional-s-three-character",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-induced-one-and-infinity-matrix-norms-are-max-column-and-row-sums",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-right-hand-side-perturbation-bound-for-ax-equals-b",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-matrix-perturbation-bound-for-ax-equals-b",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-residual-to-forward-error-bounds-for-linear-systems",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-product-of-one-plus-deltas-gives-theta-n",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-floating-point-dot-product-componentwise-and-normwise-error-bounds",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-local-conditioning-times-backward-error-controls-forward-error-to-first-order",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-spectral-numerical-rank-counts-singular-values-above-the-declared-threshold",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-two-by-two-systems-with-contrasting-condition-numbers",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-low-order-hilbert-matrices-have-large-condition-numbers",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-vandermonde-conditioning-improves-after-centering-and-scaling",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-a-tiny-residual-does-not-force-a-small-forward-error",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-backward-stable-solution-of-an-ill-conditioned-system",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-catastrophic-cancellation-and-a-stable-reformulation",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-condition-number-depends-on-the-chosen-norm-and-scaling",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-the-relative-floating-point-model-excludes-overflow-underflow-and-invalid-operations",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-finite-rectangle-unions-form-a-generating-algebra",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-sections-of-product-measurable-sets-are-measurable",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-tonelli-and-fubini-for-completed-product-measures",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-completed-product-sections-are-measurable-for-every-parameter",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-polar-coordinates-formula-for-lebesgue-measure",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-product-of-complete-measures-need-not-be-complete",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-completed-product-sections-need-not-be-pointwise-measurable",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-poincare-distance-formula-and-disc-automorphism-invariance",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-absolute-convergence-criterion-for-complex-infinite-products",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-canonical-product-convergence-from-exponent-sum",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-weierstrass-product-theorem-on-the-complex-plane",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-weierstrass-factorization-for-entire-functions",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-zero-exponent-is-bounded-by-entire-order",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-hadamard-factorization-for-finite-order-entire-functions",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-weierstrass-factorization-is-unique",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-entire-order-equals-canonical-genus",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-members-modulo-equivalence-correspond-to-subobjects",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-ab5-is-equivalent-to-exactness-of-filtered-colimits",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-exactness-can-be-defined-without-first-producing-a-canonical-monomorphism",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-the-subobject-inequalities-underlying-exactness",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-smooth-chart-compatibility-is-symmetric-and-reflexive",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-all-charts-compatible-with-a-smooth-atlas-form-a-smooth-atlas",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-chart-independence-of-c-r-smoothness",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-smooth-maps-are-continuous",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-identity-maps-and-composites-of-smooth-maps-are-smooth",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-smoothness-is-local-on-the-source",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-a-map-into-a-product-is-smooth-iff-its-components-are-smooth",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-a-map-from-a-disjoint-union-is-smooth-iff-each-restriction-is-smooth",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-any-two-atlases-on-the-same-topological-manifold-have-a-union-atlas",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-a-bijective-smooth-map-is-a-diffeomorphism",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-chart-compatibility-needs-only-one-smooth-transition-direction",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-an-arbitrary-disjoint-union-of-second-countable-manifolds-is-second-countable",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-circle-from-two-stereographic-charts",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-n-sphere-with-its-standard-smooth-atlas",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-countable-disjoint-union-of-lines-is-a-smooth-manifold",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-the-long-line-is-locally-euclidean-and-hausdorff-but-not-a-manifold-under-the-library-convention",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-two-noncompatible-atlases-on-the-real-line",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-a-fundamental-matrix-is-invertible",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-c1-dependence-of-solutions-on-initial-data",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-smooth-dependence-of-solutions-on-initial-data",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-linear-system-and-its-fundamental-matrix",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-every-effective-encoding-is-prefix-free",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-an-effective-encoding-need-not-be-prefix-free",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-a-short-exact-sequence-is-a-kernel-cokernel-pair",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-degenerate-exactness-criteria",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-trivial-words-in-a-recursively-presented-group-are-recursively-enumerable",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-solvability-of-the-word-problem-is-independent-of-a-finite-generating-set",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-word-problem-for-free-groups",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-word-problem-for-finitely-generated-abelian-groups",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-word-problem-for-free-products-and-amalgams-with-decidable-membership",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-minimal-algebraic-relator-area-exists",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-recursive-dehn-function-implies-solvable-word-problem",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-every-finitely-presented-group-has-solvable-word-problem",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-recursively-enumerable-trivial-words-form-a-decision-algorithm",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-unsolvable-word-problem-means-no-word-can-be-decided",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-the-novikov-boone-theorem-proves-the-uniform-problem-only",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-a-tietze-equivalent-presentation-can-change-solvability-of-the-word-problem",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-word-problem-by-free-reduction",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-word-problem-in-a-finite-cyclic-presentation",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-conjugacy-in-a-free-group-by-cyclic-reduction",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-todd-coxeter-as-a-partial-coset-enumeration-procedure",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-an-algebraic-relator-area-computation",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-vertex-groups-embed-in-the-graph-of-groups-fundamental-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-one-segment-graph-of-groups-is-an-amalgamated-free-product",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-one-loop-graph-of-groups-is-an-hnn-extension",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-a-group-acting-freely-without-inversions-on-a-tree-is-free",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-fundamental-group-of-a-graph-with-trivial-groups-is-free",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-kurosh-subgroup-theorem",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-grushko-decomposition-and-rank-additivity",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-the-fundamental-group-of-a-graph-of-groups-is-a-topological-fundamental-group-by-definition",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-every-tree-action-is-a-free-action",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-a-free-action-and-the-quotient-graph-basis",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-kurosh-decomposition-of-a-subgroup",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-graph-of-finite-groups-giving-a-virtually-free-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-the-underlying-quotient-graph-does-not-determine-the-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-tensor-and-direct-sum-models-of-complexification-agree",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-universal-property-and-uniqueness-of-complexification",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-complexification-is-functorial",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-complexification-preserves-kernels-images-rank-nullity-and-short-exact-sequences",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-a-real-basis-complexifies-to-a-complex-basis",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-realification-doubles-finite-dimension",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-fixed-points-of-a-conjugation-form-a-real-space-and-its-complexification-recovers-the-ambient-space",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-real-forms-correspond-to-conjugations",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-a-complex-linear-operator-comes-from-a-real-operator-exactly-when-it-commutes-with-the-chosen-conjugation",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-characteristic-and-minimal-polynomials-survive-complexification",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-nonreal-generalised-eigenspaces-occur-in-conjugate-pairs",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-a-nonreal-eigenvector-produces-an-invariant-real-two-plane",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-canonical-embedding-of-r-n-into-c-n",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-complexification-of-a-real-polynomial-space",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-realification-of-c-n-has-doubled-dimension",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-quarter-turn-diagonalises-after-complexification",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-nonreal-eigenvector-recovers-a-real-invariant-plane",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-a-complex-linear-map-can-fail-to-preserve-a-chosen-real-form",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-complexification-doubles-finite-dimension",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-every-complex-linear-operator-descends-to-every-chosen-real-form",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-complexification-creates-a-real-eigenvector-whenever-it-creates-a-complex-one",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-universal-property-and-uniqueness-of-exterior-powers",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-basic-wedge-is-multilinear-and-alternating",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-increasing-basis-wedges-form-a-basis",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-dimension-of-the-kth-exterior-power",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-the-kth-exterior-power-vanishes-above-dimension",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-a-decomposable-wedge-is-nonzero-exactly-for-independent-vectors",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-exterior-powers-are-functorial",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-the-matrix-of-an-exterior-power-is-the-signed-minor-matrix",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-the-top-exterior-power-acts-by-the-determinant",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-determinant-multiplicativity-from-the-top-exterior-power",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-determinant-sign-detects-orientation-change",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-gram-inner-product-on-exterior-powers-is-positive-definite",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-hodge-star-exists-uniquely-and-has-the-orthonormal-basis-formula",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-hodge-star-is-an-isometry-and-squares-to-a-sign",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-interior-product-is-adjoint-to-exterior-multiplication",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-wedge-and-interior-product-satisfy-the-graded-anticommutation-identity",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-cross-product-is-hodge-star-of-the-wedge",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-bases-and-dimensions-of-exterior-powers-of-r-two-r-three-and-r-four",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-wedge-product-detects-linear-dependence",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-exterior-powers-of-a-diagonal-operator",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-second-exterior-power-matrix-equals-the-signed-minor-matrix",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-oriented-area-and-volume-from-gram-determinants",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-hodge-star-in-dimensions-two-three-and-four",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-cross-product-from-hodge-star-and-wedge",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-orientation-reversal-negates-the-hodge-star",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-a-bivector-in-r-four-need-not-be-decomposable",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-the-exterior-power-is-a-canonical-subspace-of-the-tensor-power-over-every-field",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-an-inner-product-determines-an-orientation",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-an-orientation-determines-an-inner-product",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-hodge-star-needs-only-the-vector-space-structure",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-transitivity-of-integrality",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-integral-closure-is-integrally-closed",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-integrality-commutes-with-localisation",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-field-integrality-criterion",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-contraction-of-maximal-ideals-integral-extension",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-lying-over",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-incomparability-for-integral-extensions",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-going-up",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-integral-extension-lifts-finite-prime-chains",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-integral-extension-chain-contraction-is-strict",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-dimension-preserved-by-integral-extensions",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-integrally-closed-minimal-polynomial-coefficients",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-normality-is-local-for-domains",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-going-down-over-normal-domains",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-height-preserved-under-going-down-integral-extensions",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-integrality-equation-and-power-basis",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-integral-elements-subring-computation",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-integrality-localisation-clearing-denominators",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-lying-over-by-quotient-and-localisation",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-incomparability-in-a-quadratic-integral-extension",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-going-down-needs-normality",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-basic-value-properties-of-a-complex-character",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-kernel-of-a-complex-character-agrees-with-the-representation-kernel",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-characters-of-direct-sums-tensor-products-and-duals",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-character-of-a-permutation-representation-counts-fixed-points",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-character-inner-product-computes-intertwiner-dimension",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-first-orthogonality-relation-for-irreducible-complex-characters",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-character-of-the-regular-representation",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-second-column-orthogonality-relation-for-irreducible-complex-characters",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-the-sum-of-squared-irreducible-character-values-at-g-is-the-centralizer-size",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-the-character-table-is-square-and-invertible",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-representations-with-kernel-containing-a-normal-subgroup-factor-through-the-quotient",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-normal-subgroups-are-exactly-intersections-of-kernels-of-irreducible-complex-characters",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-a-finite-group-is-abelian-iff-all-its-irreducible-complex-characters-have-degree-one",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-irreducible-complex-characters-of-a-finite-cyclic-group-are-the-n-powers-of-a-primitive-nth-root",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-character-table-of-a-finite-cyclic-group-over-c",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-standard-representation-of-s-n-has-character-fixed-points-minus-one",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-s-three-has-three-irreducible-complex-characters-of-degrees-one-one-and-two",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-character-table-of-s-three",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-a-four-has-a-normal-klein-four-subgroup-and-four-conjugacy-classes",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-character-table-of-a-four",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-s-four-has-five-conjugacy-classes-of-sizes-one-six-three-eight-and-six",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-character-table-of-s-four-and-its-normal-subgroups",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-character-table-of-q-eight",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-character-table-of-dih-c-four",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-nonisomorphic-finite-groups-can-have-the-same-character-table",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-a-complex-character-of-a-finite-group-is-always-a-homomorphism",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-every-value-of-an-irreducible-complex-character-is-real",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-distinct-irreducible-complex-characters-of-a-finite-group-have-distinct-degrees",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-every-complex-class-function-with-self-inner-product-one-is-a-character",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-reciprocal-spectral-condition-number-is-the-relative-distance-to-singularity",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-explicit-formulas-for-normwise-and-componentwise-backward-error",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-normal-equations-square-the-spectral-condition-number",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-exact-rank-is-locally-constant-at-full-rank-and-discontinuous-at-nonmaximal-rank-matrices",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-floating-point-dot-product-error-bound",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-normal-equations-versus-qr-conditioning",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-numerical-rank-depends-on-the-declared-tolerance",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-sections-of-product-measurable-functions-are-measurable",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-measurable-sections-imply-product-measurability",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "prop-sigma-finite-section-measure-functions-are-measurable",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-iterated-section-measures-agree-on-product-measurable-sets",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-product-measure-is-unique-without-sigma-finiteness",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-tonelli-theorem-for-sigma-finite-product-spaces",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-tonelli-holds-without-sigma-finiteness",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-borel-products-of-euclidean-spaces-are-euclidean-borel",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-product-of-complete-measure-spaces-is-complete",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-the-product-lebesgue-sigma-algebra-is-the-full-euclidean-lebesgue-sigma-algebra",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-region-under-a-nonnegative-measurable-function-has-product-measure-equal-to-its-integral",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-graph-of-a-measurable-function-is-lebesgue-null",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-layer-cake-formula-for-l-p-powers",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-c-one-diffeomorphisms-map-lebesgue-null-sets-to-null-sets",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-c-one-diffeomorphisms-map-lebesgue-measurable-sets-to-lebesgue-measurable-sets",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-c-one-change-of-variables-for-continuous-compactly-supported-integrands",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-c-one-change-of-variables-for-l-one-functions",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-one-dimensional-gaussian-integral-from-tonelli-and-polar-coordinates",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-zeta-two-from-tonelli-and-the-geometric-series",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-region-under-x-squared-has-measure-one-third",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-cavalieri-computes-the-area-of-the-unit-disc",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-measurable-sections-do-not-imply-product-measurability",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-tonelli-fails-without-sigma-finiteness-on-the-diagonal",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-fubini-fails-without-l-one-integrability",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-equal-iterated-integrals-do-not-imply-l-one-integrability",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-product-measure-need-not-be-unique-without-sigma-finiteness",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-branch-power-agrees-with-integer-powers",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-principal-branch-power-agrees-with-positive-real-power",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-branch-discrepancies-for-logarithm-and-complex-powers",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-blaschke-factor-is-a-disc-automorphism",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-unit-disc-schwarz-lemma-with-rigidity",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-schwarz-pick-lemma-on-the-unit-disc",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-disc-automorphisms-are-rotated-blaschke-factors",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-upper-half-plane-automorphisms-are-real-mobius-maps",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-conformal-equivalence-is-an-equivalence-relation",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-sector-power-map-is-biholomorphic-on-narrow-sectors",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-slit-plane-root-branch-biholomorphism-to-a-sector",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-principal-logarithm-biholomorphism-to-the-principal-strip",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-principal-exponential-biholomorphism-from-principal-strip",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-joukowski-biholomorphism-outside-unit-disc",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-sine-biholomorphism-from-upper-half-strip",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-the-sphere-the-plane-and-the-disc-are-pairwise-nonbiholomorphic",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-principal-logarithm-breaks-additivity-at-minus-one",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-principal-square-root-breaks-multiplicativity-at-minus-one",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-strip-to-disc-biholomorphism-by-exponential-and-cayley",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-disc-automorphism-swapping-two-points",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-power-map-sends-a-sector-to-a-half-plane",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-joukowski-sends-circles-to-ellipses",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-sine-sends-a-half-strip-to-the-upper-half-plane",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-complex-conjugation-preserves-unoriented-angles-but-is-not-conformal",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-conformal-maps-preserve-euclidean-lengths",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-schwarz-lemma-holds-without-a-fixed-point-at-zero",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-normal-convergence-of-holomorphic-products",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-logarithmic-derivative-of-a-normally-convergent-product",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-unit-disc-estimate-for-weierstrass-elementary-factors",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-meromorphic-functions-on-the-plane-are-entire-quotients",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-sine-has-its-weierstrass-product",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-jensen-formula-on-a-disc",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-jensen-zero-counting-bound",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cor-nonintegral-entire-order-bounds-canonical-genus",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-product-of-one-plus-z-over-two-to-n-is-entire-and-zero-free",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-sine-product-recovers-the-basel-sum",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-jensen-formula-for-a-polynomial",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "ex-canonical-product-for-zeros-at-the-squares",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "cex-conditional-linear-sum-does-not-force-product-convergence",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "fs-every-zero-sequence-admits-a-genus-zero-canonical-product",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-the-arrow-theoretic-criterion-for-exactness",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-exactness-is-self-dual",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-splitting-lemma-in-an-abelian-category",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-a-short-exact-sequence-splits-whenever-its-middle-object-is-isomorphic-to-the-biproduct-of-the-outer-two",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-member-equivalence-is-reflexive-and-symmetric",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-member-equivalence-is-transitive",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-each-object-has-a-zero-member-and-each-member-has-a-negative",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-a-morphism-carries-members-to-members-and-preserves-equivalence",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-chasing-rule-monicity-detected-by-members",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-chasing-rule-monicity-by-member-cancellation",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-chasing-rule-epimorphy-detected-by-members",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-chasing-rule-a-zero-arrow-is-detected-by-members",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-chasing-rule-exactness-detected-by-members",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-chasing-rule-the-subtraction-surrogate",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-the-members-of-an-object-do-not-form-a-group",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-two-morphisms-agreeing-on-every-member-need-not-be-equal",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-a-square-is-cartesian-exactly-when-a-short-sequence-is-exact",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-a-cartesian-square-induces-an-isomorphism-on-the-kernels-of-its-parallel-legs",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-a-cartesian-square-over-an-epimorphism-is-also-cocartesian",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-epimorphisms-in-an-abelian-category-are-universal",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-the-covering-criterion-for-exactness",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-the-kernel-row-and-cokernel-row-of-a-morphism-of-short-exact-sequences-are-exact-at-two-nodes-each",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-the-kernel-row-of-a-morphism-of-short-exact-sequences-need-not-be-short-exact",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-exactness-of-kernel-and-cokernel-sequences-under-endpoint-hypotheses",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-the-kernel-cokernel-sequence-of-a-composite",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-hom-is-left-exact-in-each-variable",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-hom-is-not-exact",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-an-object-is-projective-exactly-when-hom-out-of-it-is-exact",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-two-morphisms-that-agree-on-every-member-are-equal",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-the-members-of-an-object-form-an-abelian-group",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-member-equivalence-is-transitive-in-any-pointed-category-with-pullbacks",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-the-kernel-row-of-a-morphism-of-short-exact-sequences-is-short-exact",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-the-subtraction-rule-produces-a-unique-member",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-members-of-an-abelian-group-correspond-to-its-subgroups",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-an-ordinary-element-as-the-member-from-the-integers",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-a-general-member-of-an-abelian-group-need-not-come-from-an-element",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-a-member-chase-verifying-monicity",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-the-covering-criterion-checked-in-abelian-groups",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-the-kernel-cokernel-sequence-of-a-composite-of-module-maps",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-a-non-split-short-exact-sequence-of-abelian-groups",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-the-splitting-lemma-instantiated-at-the-published-module-theorem",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-the-kernel-row-failure-for-multiplication-by-two-computed",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-the-union-of-two-compatible-smooth-atlases-is-a-smooth-atlas",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-compatibility-of-smooth-atlases-is-an-equivalence-relation",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-each-smooth-atlas-is-contained-in-a-unique-maximal-smooth-atlas",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-smooth-maps-paste-over-an-open-cover",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-restrictions-corestrictions-and-products-of-smooth-maps-are-smooth",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-a-smooth-map-with-everywhere-smooth-local-inverses-is-a-local-diffeomorphism",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-coordinate-balls-form-a-basis-of-a-topological-manifold",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-topological-manifolds-are-locally-compact-and-locally-path-connected",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-components-of-a-topological-manifold-are-open-and-at-most-countable",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-topological-manifolds-are-sigma-compact",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-topological-manifolds-are-metrizable-and-paracompact",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-every-hausdorff-locally-euclidean-space-is-a-manifold",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-a-chart-domain-is-an-open-subset-of-euclidean-space",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-real-projective-space-from-affine-charts",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-torus-as-a-product-smooth-manifold",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-a-bijective-smooth-map-with-nonsmooth-inverse",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cex-an-uncountable-disjoint-union-of-points-is-not-second-countable",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-smooth-dependence-of-ode-solutions-on-parameters",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-a-bounded-vector-field-on-all-of-euclidean-space-is-complete",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "cor-a-compactly-supported-smooth-euclidean-vector-field-is-complete",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-fundamental-theorem-for-autonomous-smooth-odes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-fundamental-theorem-for-nonautonomous-smooth-odes",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-the-maximal-solution-domain-is-open",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "prop-solutions-compose-under-a-change-of-initial-time",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-every-smooth-vector-field-on-euclidean-space-is-complete",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-local-existence-at-each-initial-point-gives-one-uniform-time-interval-for-all-initial-points",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-a-maximal-ode-solution-has-a-closed-interval-domain",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-continuous-dependence-alone-implies-differentiable-dependence",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-constant-vector-field-and-translation-solutions",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-harmonic-oscillator-as-a-first-order-system",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-compactly-supported-vector-field-with-global-solutions",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-smooth-dependence-in-an-ode-with-a-parameter",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-a-nonautonomous-equation-made-autonomous-by-adjoining-time",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-computation-words-agree-with-published-finite-words",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-language-concatenation-is-associative",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-kleene-star-has-the-expected-least-closure-property",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-reversal-is-an-involution-and-reverses-concatenation",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-induced-word-map-has-the-free-extension-property",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "lem-finite-tuples-admit-effective-prefix-free-encodings",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "prop-polynomially-related-encodings-preserve-polynomial-size",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-a-language-is-a-set-of-symbols",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-language-concatenation-is-associative",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "ex-polynomially-related-encodings-preserve-polynomial-size",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "cex-a-language-is-a-set-of-symbols",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "def-unit-disc-upper-half-plane-and-blaschke-factor",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "def-infinite-product",
      "scope": "unknown",
      "owner": null
    }
  ],
  "assigned_items": [
    {
      "id": "cex-enumerating-relator-consequences-does-not-decide-nontriviality",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-fundamental-groups-from-different-maximal-trees-are-isomorphic",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-normal-form-for-fundamental-groups-of-graphs-of-groups",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-the-bass-serre-coset-graph-is-a-tree",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-fundamental-group-acts-on-its-bass-serre-tree",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-boundary-monomorphisms-from-stabilizers-are-well-defined",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-bass-serre-structure-theorem",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-vertex-stabilizers-are-literally-the-chosen-vertex-groups-without-conjugacy",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-the-quotient-graph-determines-the-acting-group-without-stabilizer-data",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-kurosh-says-every-subgroup-of-a-free-product-is-free",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-bass-serre-tree-of-a-free-product",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-bass-serre-tree-of-an-amalgamated-free-product",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-bass-serre-tree-of-a-baumslag-solitar-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-averaging-operator-projects-onto-the-fixed-subspace",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-g-equivariant-maps-are-the-fixed-points-of-the-dual-tensor-representation",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-complex-representations-are-determined-by-their-characters",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-a-complex-character-is-irreducible-iff-its-self-inner-product-is-one",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-the-regular-character-gives-the-sum-of-squares-formula",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-decomposing-the-square-of-the-two-dimensional-s-three-character",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-trivial-words-in-a-recursively-presented-group-are-recursively-enumerable",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-solvability-of-the-word-problem-is-independent-of-a-finite-generating-set",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-word-problem-for-free-groups",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-word-problem-for-finitely-generated-abelian-groups",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-word-problem-for-free-products-and-amalgams-with-decidable-membership",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-minimal-algebraic-relator-area-exists",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-recursive-dehn-function-implies-solvable-word-problem",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-every-finitely-presented-group-has-solvable-word-problem",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-recursively-enumerable-trivial-words-form-a-decision-algorithm",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-unsolvable-word-problem-means-no-word-can-be-decided",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-the-novikov-boone-theorem-proves-the-uniform-problem-only",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-a-tietze-equivalent-presentation-can-change-solvability-of-the-word-problem",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-word-problem-by-free-reduction",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-word-problem-in-a-finite-cyclic-presentation",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-conjugacy-in-a-free-group-by-cyclic-reduction",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-todd-coxeter-as-a-partial-coset-enumeration-procedure",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-an-algebraic-relator-area-computation",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-vertex-groups-embed-in-the-graph-of-groups-fundamental-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-one-segment-graph-of-groups-is-an-amalgamated-free-product",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-one-loop-graph-of-groups-is-an-hnn-extension",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-a-group-acting-freely-without-inversions-on-a-tree-is-free",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-fundamental-group-of-a-graph-with-trivial-groups-is-free",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-kurosh-subgroup-theorem",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-grushko-decomposition-and-rank-additivity",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-the-fundamental-group-of-a-graph-of-groups-is-a-topological-fundamental-group-by-definition",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-every-tree-action-is-a-free-action",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-a-free-action-and-the-quotient-graph-basis",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-kurosh-decomposition-of-a-subgroup",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-graph-of-finite-groups-giving-a-virtually-free-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cex-the-underlying-quotient-graph-does-not-determine-the-group",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-transitivity-of-integrality",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-integral-closure-is-integrally-closed",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-integrality-commutes-with-localisation",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-field-integrality-criterion",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-contraction-of-maximal-ideals-integral-extension",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-lying-over",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-incomparability-for-integral-extensions",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-going-up",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-integral-extension-lifts-finite-prime-chains",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-integral-extension-chain-contraction-is-strict",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-dimension-preserved-by-integral-extensions",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "lem-integrally-closed-minimal-polynomial-coefficients",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-normality-is-local-for-domains",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-going-down-over-normal-domains",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-height-preserved-under-going-down-integral-extensions",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-integrality-equation-and-power-basis",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-integral-elements-subring-computation",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-integrality-localisation-clearing-denominators",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-lying-over-by-quotient-and-localisation",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-incomparability-in-a-quadratic-integral-extension",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-going-down-needs-normality",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-basic-value-properties-of-a-complex-character",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-kernel-of-a-complex-character-agrees-with-the-representation-kernel",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-characters-of-direct-sums-tensor-products-and-duals",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-character-of-a-permutation-representation-counts-fixed-points",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-character-inner-product-computes-intertwiner-dimension",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-first-orthogonality-relation-for-irreducible-complex-characters",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-character-of-the-regular-representation",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-second-column-orthogonality-relation-for-irreducible-complex-characters",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-the-sum-of-squared-irreducible-character-values-at-g-is-the-centralizer-size",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "cor-the-character-table-is-square-and-invertible",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "prop-representations-with-kernel-containing-a-normal-subgroup-factor-through-the-quotient",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-normal-subgroups-are-exactly-intersections-of-kernels-of-irreducible-complex-characters",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-a-finite-group-is-abelian-iff-all-its-irreducible-complex-characters-have-degree-one",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-irreducible-complex-characters-of-a-finite-cyclic-group-are-the-n-powers-of-a-primitive-nth-root",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-character-table-of-a-finite-cyclic-group-over-c",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-standard-representation-of-s-n-has-character-fixed-points-minus-one",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-s-three-has-three-irreducible-complex-characters-of-degrees-one-one-and-two",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-character-table-of-s-three",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-a-four-has-a-normal-klein-four-subgroup-and-four-conjugacy-classes",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-character-table-of-a-four",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-s-four-has-five-conjugacy-classes-of-sizes-one-six-three-eight-and-six",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-character-table-of-s-four-and-its-normal-subgroups",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-character-table-of-q-eight",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-the-character-table-of-dih-c-four",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-nonisomorphic-finite-groups-can-have-the-same-character-table",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-a-complex-character-of-a-finite-group-is-always-a-homomorphism",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-every-value-of-an-irreducible-complex-character-is-real",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-distinct-irreducible-complex-characters-of-a-finite-group-have-distinct-degrees",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "fs-every-complex-class-function-with-self-inner-product-one-is-a-character",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "def-infinite-product",
      "scope": "unknown",
      "owner": null
    }
  ],
  "live_tuples": []
}
```

---

# Step 8 — group **a**, run `frontier-23`

You are the group Alpha for batches **1**, **3**, **4**: 4 A/B pair(s), 8 page(s), 136 item(s), 0 open rejection(s) over 0 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-23-alpha-a-step8-context.json` is what a group Alpha for this group wrote during step 7,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

## Read scope, write scope

**You may read the entire library.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-23-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 1 | `decision-problems-for-finitely-presented-groups` | A | group-theory | 71.013 | `hnn-extensions-and-brittons-lemma-examples` |
| 1 | `decision-problems-for-finitely-presented-groups-examples` | B | group-theory | 71.014 | `decision-problems-for-finitely-presented-groups` |
| 1 | `graphs-of-groups-and-bass-serre-theory` | A | group-theory | 302.011 | `hnn-extensions-and-brittons-lemma`, `simplicial-trees-and-group-actions-examples` |
| 1 | `graphs-of-groups-and-bass-serre-theory-examples` | B | group-theory | 302.012 | `graphs-of-groups-and-bass-serre-theory` |
| 3 | `integral-extensions-and-going-up` | A | commutative-algebra | 111.011 | `associated-primes-and-primary-decomposition-examples` |
| 3 | `integral-extensions-and-going-up-examples` | B | commutative-algebra | 111.012 | `integral-extensions-and-going-up` |
| 4 | `characters-and-the-orthogonality-relations` | A | abstract-algebra | 147 | `maschkes-theorem-and-complete-reducibility`, `inner-product-spaces-and-orthogonality`, `tensor-products-of-modules` |
| 4 | `characters-and-the-orthogonality-relations-examples` | B | abstract-algebra | 148 | `finite-fields-and-cyclotomic-extensions`, `the-fundamental-theorem-of-algebra`, `characters-and-the-orthogonality-relations` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `decision-problems-for-finitely-presented-groups` — Decision Problems for Finitely Presented Groups (27 item(s))

- `def-finite-alphabet-encoding-and-algorithm` · definition — Finite alphabets, encoded inputs, and algorithms
- `def-recursive-and-recursively-enumerable-languages` · definition — Recursive and recursively enumerable languages
- `def-recursive-and-finite-group-presentations` · definition — Recursive presentations and finite presentations of groups
- `lem-trivial-words-in-a-recursively-presented-group-are-recursively-enumerable` · lemma — The trivial words of a recursively presented group form a recursively enumerable language
- `def-word-problem-for-a-fixed-finite-presentation` · definition — The word problem for a fixed finite presentation
- `def-uniform-word-problem-for-finite-presentations` · definition — The uniform word problem for finite presentations
- `prop-solvability-of-the-word-problem-is-independent-of-a-finite-generating-set` · proposition — Solvability of the word problem does not depend on the chosen finite generating set
- `thm-word-problem-for-free-groups` · theorem — The word problem for a finitely generated free group is solvable by free reduction
- `rem-finitely-generated-abelian-groups-admit-invariant-factor-normal-form` · remark — Finitely generated abelian groups admit invariant-factor normal form
- `thm-word-problem-for-finitely-generated-abelian-groups` · theorem — The word problem for finitely generated abelian groups is solvable
- `thm-word-problem-for-free-products-and-amalgams-with-decidable-membership` · theorem — Free products and suitable amalgamated free products have solvable word problem
- `def-conjugacy-problem-for-a-finitely-generated-group` · definition — The conjugacy problem for a finitely generated group
- `def-isomorphism-problem-for-a-class-of-finite-presentations` · definition — The isomorphism problem for a class of finite presentations
- `def-markov-property-of-finitely-presented-groups` · definition — A Markov property of finitely presented groups
- `rem-novikov-boone-undecidability-of-the-word-problem` · remark — Novikov-Boone: some finitely presented group has unsolvable word problem
- `rem-adian-rabin-undecidability-for-markov-properties` · remark — Adian-Rabin: every Markov property is undecidable on finite presentations
- `rem-triviality-and-finiteness-are-undecidable-for-finite-presentations` · remark — Triviality and finiteness are undecidable for finite presentations
- `rem-undecidability-of-the-isomorphism-problem-for-finitely-presented-groups` · remark — The isomorphism problem for finitely presented groups is undecidable
- `rem-groups-with-unsolvable-conjugacy-problem` · remark — There exist finitely presented groups with unsolvable conjugacy problem
- `def-algebraic-relator-area-and-dehn-function-of-a-finite-presentation` · definition — Algebraic relator area and the Dehn function of a finite presentation
- `lem-minimal-algebraic-relator-area-exists` · lemma — Every null word has a minimal algebraic relator area
- `prop-recursive-dehn-function-implies-solvable-word-problem` · proposition — A recursive Dehn function yields a solution to the word problem
- `fs-every-finitely-presented-group-has-solvable-word-problem` · false-statement — FALSE: every finitely presented group has solvable word problem
- `fs-recursively-enumerable-trivial-words-form-a-decision-algorithm` · false-statement — FALSE: recursively enumerable trivial words already give a decision algorithm
- `fs-unsolvable-word-problem-means-no-word-can-be-decided` · false-statement — FALSE: an unsolvable word problem means no individual word can be decided
- `fs-the-novikov-boone-theorem-proves-the-uniform-problem-only` · false-statement — FALSE: the Novikov-Boone theorem proves only the uniform problem is unsolvable
- `fs-a-tietze-equivalent-presentation-can-change-solvability-of-the-word-problem` · false-statement — FALSE: Tietze-equivalent finite presentations can differ on whether their word problem is solvable

### `decision-problems-for-finitely-presented-groups-examples` — Decision Problems for Finitely Presented Groups — Examples (6 item(s))

- `ex-word-problem-by-free-reduction` · example — Free reduction decides a word in a free group
- `ex-word-problem-in-a-finite-cyclic-presentation` · example — The word problem in a finite cyclic presentation
- `ex-conjugacy-in-a-free-group-by-cyclic-reduction` · example — Conjugacy in a free group by cyclic reduction
- `ex-todd-coxeter-as-a-partial-coset-enumeration-procedure` · example — Todd-Coxeter as a partial coset-enumeration procedure
- `ex-an-algebraic-relator-area-computation` · example — Computing an algebraic relator area
- `cex-enumerating-relator-consequences-does-not-decide-nontriviality` · counterexample — Enumerating relator consequences does not decide nontriviality

### `graphs-of-groups-and-bass-serre-theory` — Graphs of Groups and Bass Serre Theory (26 item(s))

- `def-graph-of-groups` · definition — A graph of groups
- `def-maximal-subtree-of-a-connected-graph` · definition — A maximal subtree of a connected graph
- `def-path-group-of-a-graph-of-groups` · definition — The path group of a graph of groups
- `def-fundamental-group-of-a-graph-of-groups-relative-to-a-maximal-tree` · definition — The fundamental group of a graph of groups relative to a maximal tree
- `thm-fundamental-groups-from-different-maximal-trees-are-isomorphic` · theorem — Different maximal trees give isomorphic graph-of-groups fundamental groups
- `def-reduced-graph-of-groups-word` · definition — Reduced words in a graph of groups
- `thm-normal-form-for-fundamental-groups-of-graphs-of-groups` · theorem — Normal form for the fundamental group of a graph of groups
- `cor-vertex-groups-embed-in-the-graph-of-groups-fundamental-group` · corollary — Vertex groups embed in the fundamental group of a graph of groups
- `def-bass-serre-tree-of-a-graph-of-groups` · definition — The Bass-Serre tree of a graph of groups
- `lem-the-bass-serre-coset-graph-is-a-tree` · lemma — The Bass-Serre coset graph is a tree
- `thm-fundamental-group-acts-on-its-bass-serre-tree` · theorem — The fundamental group acts without inversions on its Bass-Serre tree
- `def-quotient-graph-of-groups-from-a-tree-action` · definition — The quotient graph of groups attached to a tree action
- `lem-boundary-monomorphisms-from-stabilizers-are-well-defined` · lemma — The boundary monomorphisms from stabilizers are well-defined
- `thm-bass-serre-structure-theorem` · theorem — Bass-Serre structure theorem
- `thm-one-segment-graph-of-groups-is-an-amalgamated-free-product` · theorem — A one-segment graph of groups gives an amalgamated free product
- `thm-one-loop-graph-of-groups-is-an-hnn-extension` · theorem — A one-loop graph of groups gives an HNN extension
- `cor-a-group-acting-freely-without-inversions-on-a-tree-is-free` · corollary — A group acting freely without inversions on a tree is free
- `cor-fundamental-group-of-a-graph-with-trivial-groups-is-free` · corollary — The fundamental group of a graph with trivial groups is free
- `thm-kurosh-subgroup-theorem` · theorem — Kurosh subgroup theorem
- `thm-grushko-decomposition-and-rank-additivity` · theorem — Grushko decomposition and rank additivity
- `rem-stallings-theorem-on-ends-and-splittings` · remark — Stallings's theorem on ends and splittings
- `fs-the-fundamental-group-of-a-graph-of-groups-is-a-topological-fundamental-group-by-definition` · false-statement — FALSE: the fundamental group of a graph of groups is a topological fundamental group by definition
- `fs-vertex-stabilizers-are-literally-the-chosen-vertex-groups-without-conjugacy` · false-statement — FALSE: vertex stabilizers are literally the chosen vertex groups without conjugacy ambiguity
- `fs-every-tree-action-is-a-free-action` · false-statement — FALSE: every tree action is free
- `fs-the-quotient-graph-determines-the-acting-group-without-stabilizer-data` · false-statement — FALSE: the quotient graph determines the acting group without stabilizer data
- `fs-kurosh-says-every-subgroup-of-a-free-product-is-free` · false-statement — FALSE: Kurosh says every subgroup of a free product is free

### `graphs-of-groups-and-bass-serre-theory-examples` — Graphs of Groups and Bass Serre Theory — Examples (7 item(s))

- `ex-bass-serre-tree-of-a-free-product` · example — The Bass-Serre tree of a free product
- `ex-bass-serre-tree-of-an-amalgamated-free-product` · example — The Bass-Serre tree of an amalgamated free product
- `ex-bass-serre-tree-of-a-baumslag-solitar-group` · example — The Bass-Serre tree of a Baumslag-Solitar group
- `ex-a-free-action-and-the-quotient-graph-basis` · example — A free action and the quotient-graph basis
- `ex-kurosh-decomposition-of-a-subgroup` · example — A Kurosh decomposition of a subgroup of a free product
- `ex-graph-of-finite-groups-giving-a-virtually-free-group` · example — A graph of finite groups giving a virtually free group
- `cex-the-underlying-quotient-graph-does-not-determine-the-group` · counterexample — The underlying quotient graph does not determine the acting group

### `integral-extensions-and-going-up` — Integral Extensions and Going Up (17 item(s))

- `def-integral-ring-extension` · definition — Integral ring maps and integral extensions
- `def-integral-closure-and-integrally-closed-domain` · definition — Integral closure in an extension ring and integrally closed domains
- `thm-transitivity-of-integrality` · theorem — Integral extensions are transitive
- `thm-integral-closure-is-integrally-closed` · theorem — The integral closure of a domain in a field extension is integrally closed
- `thm-integrality-commutes-with-localisation` · theorem — Integrality and integral closure commute with localisation
- `lem-field-integrality-criterion` · lemma — For an integral extension of domains, the upper ring is a field if and only if the lower ring is
- `cor-contraction-of-maximal-ideals-integral-extension` · corollary — Under an integral extension, a prime is maximal if and only if its contraction is maximal
- `thm-lying-over` · theorem — Lying over for integral ring maps
- `thm-incomparability-for-integral-extensions` · theorem — Comparable primes with the same contraction are equal under an integral map
- `thm-going-up` · theorem — Going up for integral ring maps
- `cor-integral-extension-lifts-finite-prime-chains` · corollary — Integral extensions lift finite prime chains from the base
- `lem-integral-extension-chain-contraction-is-strict` · lemma — Strict prime chains contract strictly under integral extensions
- `cor-dimension-preserved-by-integral-extensions` · corollary — Injective integral extensions preserve Krull dimension
- `lem-integrally-closed-minimal-polynomial-coefficients` · lemma — Minimal polynomials of integral elements over an integrally closed domain have coefficients in the domain
- `thm-normality-is-local-for-domains` · theorem — A domain is integrally closed if and only if its prime localisations are, equivalently if and only if its maximal localisations are
- `thm-going-down-over-normal-domains` · theorem — Going down holds for integral extensions over integrally closed domains
- `cor-height-preserved-under-going-down-integral-extensions` · corollary — Under going down and incomparability, lying-over primes have the same finite height

### `integral-extensions-and-going-up-examples` — Integral Extensions and Going Up — Examples (6 item(s))

- `ex-integrality-equation-and-power-basis` · example — Every element of k[X] is integral over k[X^2], and k[X] has basis 1, X over k[X^2]
- `ex-integral-elements-subring-computation` · example — Z[square-root of 2, square-root of 3] is finite over Z and contains the sum and product of its generators
- `ex-integrality-localisation-clearing-denominators` · example — The element 1/p is integral over Z[1/p] but not over Z
- `ex-lying-over-by-quotient-and-localisation` · example — Lying over in k[t^2, t^3] subset k[t]
- `ex-incomparability-in-a-quadratic-integral-extension` · example — In k[Y] subset k[X] with Y = X^2, comparable primes do not share a contraction
- `ex-going-down-needs-normality` · example — An integral domain extension can fail going down when the base is not normal

### `characters-and-the-orthogonality-relations` — Characters and the Orthogonality Relations (30 item(s))

- `rem-standing-hypotheses-for-ordinary-character-theory` · remark — Standing hypotheses for ordinary character theory: $G$ finite, $k=\mathbb C$, and every representation finite-dimensional
- `def-character-of-a-complex-representation` · definition — The character $\chi_V(g)=\operatorname{tr}(\rho_V(g))$ of a finite-dimensional complex representation
- `def-class-function-and-the-space-of-complex-class-functions` · definition — Class functions and the complex vector space $\mathrm{cf}(G)$
- `def-standard-inner-product-on-complex-class-functions` · definition — The standard inner product on $\mathrm{cf}(G)$
- `def-irreducible-complex-character` · definition — An irreducible complex character
- `def-character-table-of-a-finite-group` · definition — The character table of a finite group
- `def-tensor-product-of-complex-representations` · definition — The tensor product of two complex representations
- `def-dual-complex-representation` · definition — The dual or contragredient complex representation
- `def-kernel-of-a-complex-character` · definition — The kernel of a complex character
- `prop-basic-value-properties-of-a-complex-character` · proposition — For a complex character, $\chi(1)=\dim V$, $\chi$ is a class function, and $|\chi(g)|\le\chi(1)$ with equality exactly at scalars
- `thm-kernel-of-a-complex-character-agrees-with-the-representation-kernel` · theorem — The kernel of a complex character agrees with the kernel of any representation affording it
- `thm-characters-of-direct-sums-tensor-products-and-duals` · theorem — Characters add on direct sums, multiply on tensor products, and conjugate on duals
- `thm-character-of-a-permutation-representation-counts-fixed-points` · theorem — The character of a permutation representation counts fixed points
- `def-g-fixed-subspace-of-a-representation` · definition — The fixed subspace $V^G$ of a representation
- `lem-averaging-operator-projects-onto-the-fixed-subspace` · lemma — The averaging operator projects onto the fixed subspace
- `lem-g-equivariant-maps-are-the-fixed-points-of-the-dual-tensor-representation` · lemma — For finite-dimensional complex $V$, the intertwiners $V\to W$ are exactly the fixed points of $V^*\otimes W$
- `thm-character-inner-product-computes-intertwiner-dimension` · theorem — The class-function inner product $\langle\chi_V,\chi_W\rangle$ equals $\dim\operatorname{Hom}_G(V,W)$
- `thm-first-orthogonality-relation-for-irreducible-complex-characters` · theorem — The first orthogonality relation for irreducible complex characters
- `thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions` · theorem — The irreducible complex characters form an orthonormal basis of $\mathrm{cf}(G)$
- `cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product` · corollary — The multiplicity of an irreducible summand is a character inner product
- `thm-complex-representations-are-determined-by-their-characters` · theorem — Finite-dimensional complex representations of a finite group are determined up to isomorphism by their characters
- `cor-a-complex-character-is-irreducible-iff-its-self-inner-product-is-one` · corollary — A complex character is irreducible if and only if its self-inner-product is $1$
- `thm-character-of-the-regular-representation` · theorem — The regular character is $|G|$ at $1$ and $0$ away from $1$
- `cor-the-regular-character-gives-the-sum-of-squares-formula` · corollary — The regular character gives a second proof of the sum-of-squares formula
- `thm-second-column-orthogonality-relation-for-irreducible-complex-characters` · theorem — The second orthogonality relation for irreducible complex characters
- `cor-the-sum-of-squared-irreducible-character-values-at-g-is-the-centralizer-size` · corollary — For $g\in G$, the sum of $|\chi_i(g)|^2$ over the irreducible complex characters is $|C_G(g)|$
- `cor-the-character-table-is-square-and-invertible` · corollary — The character table is square and invertible
- `prop-representations-with-kernel-containing-a-normal-subgroup-factor-through-the-quotient` · proposition — A representation with kernel containing a normal subgroup factors through the quotient, and irreducibility is unchanged by inflation
- `thm-normal-subgroups-are-exactly-intersections-of-kernels-of-irreducible-complex-characters` · theorem — The normal subgroups of a finite group are exactly the intersections of kernels of irreducible complex characters
- `thm-a-finite-group-is-abelian-iff-all-its-irreducible-complex-characters-have-degree-one` · theorem — A finite group is abelian if and only if all its irreducible complex characters have degree $1$

### `characters-and-the-orthogonality-relations-examples` — Characters and the Orthogonality Relations - Examples (17 item(s))

- `ex-the-irreducible-complex-characters-of-a-finite-cyclic-group-are-the-n-powers-of-a-primitive-nth-root` · example — The irreducible complex characters of a finite cyclic group are the $n$ powers of a primitive $n$th root
- `ex-the-character-table-of-a-finite-cyclic-group-over-c` · example — The character table of a finite cyclic group over $\mathbb C$
- `ex-the-standard-representation-of-s-n-has-character-fixed-points-minus-one` · example — The standard representation of $S_n$ has character equal to the number of fixed points minus $1$
- `ex-s-three-has-three-irreducible-complex-characters-of-degrees-one-one-and-two` · example — $S_3$ has three irreducible complex characters of degrees $1$, $1$, and $2$
- `ex-the-character-table-of-s-three` · example — The character table of $S_3$
- `ex-decomposing-the-square-of-the-two-dimensional-s-three-character` · example — The square of the two-dimensional $S_3$ character decomposes as $1+\operatorname{sgn}+\chi_2$
- `ex-a-four-has-a-normal-klein-four-subgroup-and-four-conjugacy-classes` · example — $A_4$ has a normal Klein four subgroup and four conjugacy classes
- `ex-the-character-table-of-a-four` · example — The character table of $A_4$
- `ex-s-four-has-five-conjugacy-classes-of-sizes-one-six-three-eight-and-six` · example — $S_4$ has five conjugacy classes of sizes $1$, $6$, $3$, $8$, and $6$
- `ex-the-character-table-of-s-four-and-its-normal-subgroups` · example — The character table of $S_4$ and the normal subgroups it reveals
- `ex-the-character-table-of-q-eight` · example — The character table of $Q_8$
- `ex-the-character-table-of-dih-c-four` · example — The character table of $\operatorname{Dih}(C_4)$
- `fs-nonisomorphic-finite-groups-can-have-the-same-character-table` · false-statement — FALSE: nonisomorphic finite groups always have different character tables
- `fs-a-complex-character-of-a-finite-group-is-always-a-homomorphism` · false-statement — FALSE: a complex character of a finite group is always a group homomorphism
- `fs-every-value-of-an-irreducible-complex-character-is-real` · false-statement — FALSE: every value of an irreducible complex character is real
- `fs-distinct-irreducible-complex-characters-of-a-finite-group-have-distinct-degrees` · false-statement — FALSE: distinct irreducible complex characters of a finite group have distinct degrees
- `fs-every-complex-class-function-with-self-inner-product-one-is-a-character` · false-statement — FALSE: every complex class function with self-inner-product $1$ is a character

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Alerts from other groups

None. No other group flagged an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-23-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — targeted repair-integrity review, `frontier-23`

The generated repair envelope above is authoritative. It supplies every failed
gate with full output, the exact live ids and rejection tuples, and each id's
run or published scope. Take only its `assigned_items` and `live_tuples`; rerun
the focused gate where it supports item scope.

Complete a repair already licensed by an exact `confirmed_fatal` adjudication,
or correct a documentary contract/manifest/impact/verification record that must
match the current proof. Do not edit a nonfatal or false-positive item, broaden
the scope, run a judge sweep, or run a workflow transition.

Preserve append-only ledgers and return the gate, ids, licensing rows, changed
files, targeted checks, and blocker. This task applies before `8-rejudge`; a
frozen-cutover dispatch uses the Step-8 close task instead.
