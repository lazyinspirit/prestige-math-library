# Phase 2 Next 21 — Batch 7 scaffold notes

Run `phase-2-next-21`, role `beta`, batch 7. This batch owns only the A/B pairs at orders 483–484 and 491–492. The owned manifest contains 123 items: 53+12 on curvature/submanifolds and 46+12 on Lie groups.

## Controlling design and plan comparison

- For `riemann-curvature-and-riemannian-submanifolds`, the complete DG21 design section begins at `research/plan-differential-geometry-track.md:5454` and ends before the next design at line 5704. The dispatched locator at line 5633 is the B-page subheading, not the start of the design. I read the entire section. `research/plan-spec.json` controls the run and agrees on page IDs, title, category, orders 483–484, companion relation, and the six selected prerequisites.
- For `lie-groups-invariant-fields-and-the-exponential-map`, line 6446 begins the complete controlling DG25 design. Line 6585 is its B-page subheading, not a competing design. Thus the section beginning at 6446 controls both A and B; I read through the end of DG25. The current plan agrees on page IDs, title, category, orders 491–492, companion relation, and the twelve selected prerequisites.
- The plan carries no item inventories for these new pages, so it supplies no competing item order. There is one internal design-order conflict: DG21 lists the full Riemann-tensor symmetries before first Bianchi, while its own stated proof route derives pair interchange using first Bianchi. The manifest therefore places `thm-first-bianchi-identity` before `thm-algebraic-symmetries-of-the-riemann-tensor`. This preserves every designed claim while obeying the controlling dependency policy; no result is weakened.
- The alpha drift report classifies both pairs as no-drift at page level. That is mechanical evidence only and was not treated as mathematical review.
- No selected pair was changed and no page split is required. The two missing published prerequisite edges below require owner reconciliation in the shared plan; I did not edit the plan.

## Mathematical construction and dependency audit

Every owned item has an explicit `deps` array, a proof strategy (or well-definedness strategy), sources, and exact source locators. Items are in prerequisite order; B items are consumers of A material and do not supply A proofs. Definitions with deferred well-definedness use `justified_by`. The first Bianchi identity precedes the pair-interchange proof. Curvature uses

`R(X,Y)Z = nabla_X nabla_Y Z - nabla_Y nabla_X Z - nabla_[X,Y] Z`,

the round sphere consequently has positive sectional curvature, the shape operator is `S_nu X = -(bar nabla_X nu)^top`, and mean curvature is the normalized trace. Lie brackets come from left-invariant fields; the left Maurer–Cartan equation is `d theta + (1/2)[theta wedge theta] = 0`; matrix groups use the commutator bracket.

The final item-to-page transitive closure audit found exactly two undeclared published suppliers:

1. `def-principal-curvatures-gaussian-curvature-and-mean-curvature-of-an-oriented-hypersurface`
   -> `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`
   -> published A page `the-spectral-theorem-and-singular-value-decomposition` (order 141).
2. `def-real-and-complex-lie-groups`
   -> `def-holomorphic-map-and-complex-jacobian` and `thm-chain-rule-for-holomorphic-maps-in-several-variables`
   -> published A page `holomorphic-functions-of-several-variables` (order 349).

No other local or external dependency is missing, circular, forward, or supplied only by page membership. In particular, the general/special-linear example proves `d(det)_I = trace` directly from the Leibniz determinant formula instead of importing undeclared matrix-differentiation material, and the unitary example defines conjugate transpose from the available scalar conjugation interface. The flat-frame proof explicitly uses parameter-smooth ODE dependence; the first-volume-variation claim is stated on a compact domain containing the compact support, so it does not differentiate an infinite total volume; Theorema Egregium is proved directly from Gauss and `det S`, without consuming the unresolved general spectral theorem.

There is no use of the Axiom of Choice in this batch. Metrics and connections are supplied as hypotheses; the scaffold does not invoke global existence of a metric or connection. Finite choices of bases are ordinary finite constructions. Neither owned prerequisite closure reaches `deferred-set-theory-beyond-choice`, and no Recorded result is used to prove a replacement.

## Owner prerequisite requests and published-supplier inventory

These are existing published pairs, not new pages. The requested repair is to add only their A pages to the corresponding A-page `requires`; their B pages are recorded to make the supplier pairs and inventories exact.

### Spectral supplier, published

Placement: add `the-spectral-theorem-and-singular-value-decomposition` to the `requires` of `riemann-curvature-and-riemannian-submanifolds`, immediately before `riemannian-metrics-length-distance-and-volume`, and therefore before `def-principal-curvatures-gaussian-curvature-and-mean-curvature-of-an-oriented-hypersurface`.

- A order 141, `the-spectral-theorem-and-singular-value-decomposition`, status `published`: `def-self-adjoint-and-normal-endomorphism`, `prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases`, `thm-schur-triangularisation`, `lem-normal-upper-triangular-matrix-is-diagonal`, `thm-complex-spectral-theorem-for-normal-endomorphisms`, `thm-real-normal-endomorphism-classification`, `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`, `thm-spectral-resolution-and-polynomial-spectral-projections`, `def-functional-calculus-for-a-normal-endomorphism`, `prop-functional-calculus-for-normal-endomorphisms`, `def-semisimple-and-nilpotent-endomorphisms`, `thm-additive-jordan-chevalley-decomposition`, `def-non-negative-and-positive-operator`, `prop-operator-positivity-agrees-with-form-positivity-over-the-reals`, `thm-non-negative-operator-characterisations`, `thm-non-negative-square-root-exists-and-is-unique`, `prop-non-negative-square-root-is-a-polynomial-in-the-operator`, `def-singular-values-of-an-endomorphism`, `prop-singular-values-are-well-defined`, `thm-singular-value-decomposition`, `cor-rank-equals-number-of-nonzero-singular-values`, `cor-adjoint-has-the-same-singular-values`, `thm-polar-decomposition`, `def-operator-norm-on-a-finite-dimensional-inner-product-space`, `thm-operator-norm-is-the-largest-singular-value`, `cor-operator-norm-submultiplicative-and-t-star-t-identity`, `thm-eckart-young-best-rank-k-approximation`, `def-rayleigh-quotient`, `thm-courant-fischer-min-max-principle`, `cor-rayleigh-quotient-extreme-eigenvalue-characterisation`, `thm-cauchy-interlacing-for-self-adjoint-compressions`, `thm-weyl-inequalities-for-self-adjoint-sums`, `def-gershgorin-disks`, `thm-gershgorin-disk-theorem`.
- B order 142, `the-spectral-theorem-and-singular-value-decomposition-examples`, status `published`: `ex-real-symmetric-three-by-three-orthogonal-diagonalisation`, `ex-hermitian-two-by-two-unitary-diagonalisation`, `ex-quarter-turn-real-normal-form`, `ex-complex-symmetric-nilpotent-matrix`, `ex-non-negative-square-root-as-a-polynomial-in-a-matrix`, `ex-polar-decomposition-of-an-invertible-matrix`, `ex-polar-decomposition-of-a-singular-matrix`, `ex-singular-value-decomposition-of-a-two-by-three-matrix`, `ex-rank-one-svd-truncation`, `ex-courant-fischer-on-a-three-by-three-symmetric-matrix`, `ex-principal-submatrix-interlacing`, `ex-gershgorin-disks-and-spectrum`, `fs-normal-operators-are-diagonalisable-over-the-base-field`, `fs-complex-symmetric-matrices-are-unitarily-diagonalizable`, `fs-nonnegative-quadratic-values-force-self-adjointness`, `fs-square-roots-of-a-non-negative-operator-are-unique`, `fs-polar-isometry-is-unique-for-singular-operators`, `fs-singular-values-are-absolute-values-of-the-eigenvalues`, `fs-operator-norm-is-the-largest-eigenvalue-modulus`.

Repair strategy: add the A-page edge and rerun closure/readiness. Five owned items are blocked by this interface: the definition itself, `prop-euclidean-hypersurface-sectional-curvature-from-principal-curvatures`, `ex-principal-curvatures-of-a-round-sphere`, `ex-the-cylinder-has-zero-gaussian-curvature-but-nonzero-second-fundamental-form`, and `ex-the-catenoid-has-zero-mean-curvature-but-is-not-totally-geodesic`.

### Several-complex-variables supplier, published

Placement: add `holomorphic-functions-of-several-variables` to the `requires` of `lie-groups-invariant-fields-and-the-exponential-map`, immediately after `the-exterior-derivative-and-cartan-calculus`, and therefore before `def-real-and-complex-lie-groups`.

- A order 349, `holomorphic-functions-of-several-variables`, status `published`: `rem-complex-euclidean-space-dictionary`, `def-balls-and-polydiscs-in-complex-euclidean-space`, `def-holomorphic-function-in-several-complex-variables`, `def-separately-holomorphic-function`, `def-wirtinger-operators-in-several-complex-variables`, `lem-complex-linear-real-differential-criterion`, `prop-holomorphic-functions-are-continuous-and-separately-holomorphic`, `def-multivariable-power-series`, `lem-multivariable-geometric-series-on-a-distinguished-boundary`, `thm-cauchy-integral-formula-on-a-polydisc`, `thm-power-series-expansion-in-several-complex-variables`, `thm-power-series-define-holomorphic-functions-in-several-variables`, `thm-osgood-lemma-in-several-complex-variables`, `cor-holomorphic-functions-in-several-complex-variables-are-smooth`, `cor-uniqueness-of-multivariable-power-series-coefficients`, `thm-cauchy-estimates-on-a-polydisc`, `lem-locally-bounded-separately-holomorphic-functions-are-locally-lipschitz`, `thm-locally-bounded-separate-holomorphy`, `thm-cauchy-riemann-characterization-in-several-complex-variables`, `prop-algebra-of-holomorphic-functions-in-several-variables`, `thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables`, `cor-maximum-modulus-on-the-distinguished-boundary-of-a-polydisc`, `def-holomorphic-map-and-complex-jacobian`, `thm-componentwise-holomorphy-in-several-complex-variables`, `thm-chain-rule-for-holomorphic-maps-in-several-variables`, `cor-complex-jacobian-determinant-is-multiplicative`, `thm-identity-theorem-in-several-complex-variables`, `cor-holomorphic-functions-on-a-domain-form-an-integral-domain`, `thm-maximum-modulus-principle-in-several-complex-variables`, `cor-liouville-theorem-in-several-complex-variables`, `thm-open-mapping-theorem-for-scalar-holomorphic-functions-in-several-variables`, `rem-several-variable-conventions-and-the-identity-theorem-gap`.
- B order 350, `holomorphic-functions-of-several-variables-examples`, status `published`: `ex-power-series-expansion-of-the-coordinate-product-on-a-bidisc`, `ex-power-series-expansion-of-an-exponential-of-a-coordinate-sum`, `ex-power-series-expansion-of-a-geometric-quotient-in-two-variables`, `ex-cauchy-integral-formula-computed-on-a-bidisc`, `ex-cauchy-estimates-computed-on-a-bidisc`, `ex-componentwise-holomorphy-of-an-explicit-map-into-complex-three-space`, `ex-complex-jacobian-of-a-quadratic-map-of-the-bidisc`, `ex-maximum-modulus-on-the-distinguished-boundary-of-a-bidisc`, `cex-holomorphic-zero-set-in-two-variables-is-neither-isolated-nor-bounded`, `fs-several-variable-identity-theorem-from-an-accumulation-point`, `fs-separately-real-analytic-functions-are-jointly-continuous`, `rem-separate-regularity-and-joint-continuity-in-the-real-and-complex-cases`.

Repair strategy: add the A-page edge and rerun closure/readiness. Only `def-real-and-complex-lie-groups` is blocked; no later owned item consumes its optional complex branch.

The consumer-owned same-run cross-batch dependency input is therefore `[]`: neither request is a same-run batch edge. `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-next-21 --require-reviewed` passes after incorporating this reviewed empty input.

## Sources and dispositions

Both A pages use five independent, full-length treatments. Curvature/submanifolds uses Datar, Lee, Merry, Terng, and Calegari; Lie groups uses Knapp, Kirillov, Bryant, Mueger, and Gallier. Exact URLs, printed/PDF locators, supported results, and every disposition are in `research/phase-2-next-21-batch-7.coverage.json`. All ten documents were body-downloaded and their complete relevant arguments inspected. `source-fetch-check --stamp` recorded 10/10 full-text stamps. No retrieval exhausted its retry allowance, so there is no dropped source or `source_resolution` alternative.

Disposition totals:

- Curvature/submanifolds: 48 harvested results from five sources — 37 included, 4 inline, 7 out of scope with specific reasons.
- Lie groups: 33 harvested results from five sources — 20 included, 6 inline, 7 out of scope with specific reasons.

## Readiness and gate evidence

- Owned readiness: 117 ready, 6 escalated, 0 missing or stale records. Each record contains the examined dependency IDs and source/strategy evidence. The six escalations are the five spectral consumers named above and `def-real-and-complex-lie-groups`.
- Owned manifest dependencies: `123 item(s), 0 normalized, 0 error(s)`.
- Owned manifest policy: `123 scoped item(s), 0 error(s), 0 warning(s)`.
- Owned coverage: `2 page(s), 81 harvested result(s), 0 error(s), 0 warning(s)` with `--require-destination`.
- Owned source fetch: 10/10 fetch-verified and 10/10 resolved.
- Owned URL rows: 10/10 live with HTTP 200 in the whole-run sweep.
- Owned source backing: 42 authored results, every one backed by an openable source or documented argument.
- Whole-run manifest dependencies: 745 items, 0 errors. Whole-run manifest policy: 745 scoped items, 0 errors or warnings.
- Plan validation passes: declared order is acyclic and consistent, with no item cycles, forward references, B-page dependency violations, or unresolved IDs among pages carrying item lists. Its printed redundant-prerequisite warnings are pre-existing plan hygiene and do not alter this batch.
- External-reference check passes. It reports 55 pre-existing `unproved-on-published` warnings elsewhere, then confirms every recorded-not-proved statement has the required citation/no-proof shape and marked consequences.
- Manifest integrity passes (42 owed pages, 42 present); drift review passes (21 pages reviewed, 2 already-applied spec edits, no blocked edges).
- Reviewed frontier dependency refresh passes.

Whole-run gates remain open for findings outside this batch and for recorded mathematical escalations: Step 1 reports 651/745 ready and 94 escalated (including this batch's six). Batch 2 coverage/source backing/source fetch remains blocked on the suspect DigiZeitschriften endpoint for `reflexivity-and-eberlein-smulian`; the exact affected items reported by the source tools are `def-relative-weak-compactness-and-three-sequential-notions`, `thm-eberlein-smulian`, and `lem-eberlein-smulian-countable-compactness-closes-in-the-bidual`. The URL sweep reports 45/48 live, three Hatcher URLs recoverable from archives, and that one DigiZeitschriften URL returning the site root rather than the document. I did not edit another batch's coverage or resolve its source decision.

No defective published proof prerequisite was found inside the closure after the two missing-edge escalations were isolated. Unrelated published-consumer debt reported by `extcheck` was recorded but did not block the new suppliers.
