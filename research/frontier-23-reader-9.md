# frontier-23 reader-9 report

Date: Saturday, August 29, 2026.
Batch: `9`.
Pages: `smooth-manifolds-and-smooth-maps`, `smooth-manifolds-and-smooth-maps-examples`,
`euclidean-ordinary-differential-equations-with-smooth-dependence`,
`euclidean-ordinary-differential-equations-with-smooth-dependence-examples`.

## Opened scope

- Opened the assigned batch artifacts:
  `research/frontier-23-batch-9.pages.json`,
  `research/frontier-23-batch-9.coverage.json`,
  `research/frontier-23-batch-9.proof-contracts.json`,
  `research/frontier-23-batch-9.notes.md`.
- Opened all four assigned page files in
  `library/real-analysis/differential-geometry/`.
- Opened every assigned item file on the two A pages and two B pages.
- Opened the current dependency items needed to verify the repaired arguments,
  including the manifold-definition chain, the restricted/product/disjoint-union
  topology items, the smooth-map and diffeomorphism definitions, and the
  published ODE dependencies used by the smooth-dependence page:
  `thm-picard-lindelof-local-existence-and-uniqueness`,
  `cor-uniform-picard-lindelof-for-nearby-initial-values`,
  `prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation`,
  `thm-gronwall-integral-inequality`,
  `lem-ode-extension-from-a-compact-interior-region`,
  `thm-continuous-dependence-of-odes-on-initial-data-and-parameters`,
  `thm-existence-and-uniqueness-of-a-maximal-ode-solution`,
  `lem-locally-unique-ode-solutions-agree-and-glue-on-overlaps`,
  `thm-algebra-of-derivatives`,
  `prop-second-countability-is-hereditary`,
  `lem-t0-t1-and-hausdorff-are-hereditary`,
  `def-subspace-topology-top`,
  `def-product-topology`,
  `thm-product-universal-property`,
  `thm-coproduct-universal-property`,
  `lem-product-topology-on-rn`,
  `lem-finite-powers-of-countable-sets-are-countable`,
  `cor-rn-is-polygonally-connected-and-locally-path-connected`,
  `cor-rn-is-locally-compact-and-sigma-compact`,
  `thm-locally-compact-hausdorff-basics`,
  `thm-second-countable-implies-lindelof`,
  `lem-regular-lindelof-spaces-are-paracompact`,
  `cor-urysohn-metrization`.

## Confirmed defects repaired

- Repaired repeated proof corruption across the batch's in-flight items:
  duplicated QED lines, broken final summary steps, and step lines whose content
  had been split or interleaved incorrectly.
- Repaired substantive proof-body corruption in:
  `prop-compatibility-of-smooth-atlases-is-an-equivalence-relation`,
  `prop-a-map-into-a-product-is-smooth-iff-its-components-are-smooth`,
  `prop-a-map-from-a-disjoint-union-is-smooth-iff-each-restriction-is-smooth`,
  `prop-restrictions-corestrictions-and-products-of-smooth-maps-are-smooth`.
- Repaired smaller proof-format defects in the remaining edited in-flight items:
  `lem-smooth-chart-compatibility-is-symmetric-and-reflexive`,
  `lem-the-union-of-two-compatible-smooth-atlases-is-a-smooth-atlas`,
  `lem-all-charts-compatible-with-a-smooth-atlas-form-a-smooth-atlas`,
  `prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure`,
  `prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure`,
  `prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds`,
  `lem-chart-independence-of-c-r-smoothness`,
  `prop-smooth-maps-are-continuous`,
  `prop-identity-maps-and-composites-of-smooth-maps-are-smooth`,
  `prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets`,
  `prop-smoothness-is-local-on-the-source`,
  `lem-smooth-maps-paste-over-an-open-cover`,
  `prop-a-smooth-map-with-everywhere-smooth-local-inverses-is-a-local-diffeomorphism`,
  `lem-coordinate-balls-form-a-basis-of-a-topological-manifold`,
  `prop-topological-manifolds-are-locally-compact-and-locally-path-connected`,
  `prop-components-of-a-topological-manifold-are-open-and-at-most-countable`,
  `thm-topological-manifolds-are-sigma-compact`,
  `thm-topological-manifolds-are-metrizable-and-paracompact`,
  `lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval`,
  `prop-a-fundamental-matrix-is-invertible`,
  `thm-c1-dependence-of-solutions-on-initial-data`,
  `thm-smooth-dependence-of-solutions-on-initial-data`,
  `thm-smooth-dependence-of-ode-solutions-on-parameters`,
  `cor-a-bounded-vector-field-on-all-of-euclidean-space-is-complete`,
  `cor-a-compactly-supported-smooth-euclidean-vector-field-is-complete`,
  `thm-fundamental-theorem-for-autonomous-smooth-odes`,
  `thm-fundamental-theorem-for-nonautonomous-smooth-odes`,
  `prop-the-maximal-solution-domain-is-open`,
  `prop-solutions-compose-under-a-change-of-initial-time`,
  `fs-any-two-atlases-on-the-same-topological-manifold-have-a-union-atlas`,
  `fs-a-bijective-smooth-map-is-a-diffeomorphism`,
  `fs-local-existence-at-each-initial-point-gives-one-uniform-time-interval-for-all-initial-points`,
  `fs-a-maximal-ode-solution-has-a-closed-interval-domain`,
  `fs-continuous-dependence-alone-implies-differentiable-dependence`,
  `ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds`,
  `ex-the-circle-from-two-stereographic-charts`,
  `ex-real-projective-space-from-affine-charts`,
  `ex-the-torus-as-a-product-smooth-manifold`,
  `ex-a-countable-disjoint-union-of-lines-is-a-smooth-manifold`,
  `ex-a-constant-vector-field-and-translation-solutions`,
  `ex-a-linear-system-and-its-fundamental-matrix`,
  `ex-the-harmonic-oscillator-as-a-first-order-system`,
  `ex-a-compactly-supported-vector-field-with-global-solutions`,
  `ex-smooth-dependence-in-an-ode-with-a-parameter`,
  `ex-a-nonautonomous-equation-made-autonomous-by-adjoining-time`,
  `cex-two-noncompatible-atlases-on-the-real-line`.

## Checks

- Ran `node tools/tsx-run.mjs tools/reflow.mts ...` on every changed item listed above.
- Ran `node tools/tsx-run.mjs tools/precheck.mts ...` on the changed items.
- Ran `node tools/citation-fidelity.mjs research/frontier-23-batch-9.proof-contracts.json --fail-on-missing-quote`.
  Result: pass.
- Ran `node tools/proof-contract.mjs research/frontier-23-batch-9.proof-contracts.json --strict`.
  Result: fail because the batch proof contract is now stale relative to the
  repaired step numbering and citation use.

## Remaining blockers

- `precheck` is still not green for these changed items:
  `lem-smooth-chart-compatibility-is-symmetric-and-reflexive`,
  `prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure`,
  `prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds`,
  `prop-a-map-into-a-product-is-smooth-iff-its-components-are-smooth`,
  `lem-coordinate-balls-form-a-basis-of-a-topological-manifold`,
  `thm-topological-manifolds-are-sigma-compact`,
  `thm-topological-manifolds-are-metrizable-and-paracompact`,
  `prop-a-fundamental-matrix-is-invertible`,
  `thm-c1-dependence-of-solutions-on-initial-data`,
  `thm-smooth-dependence-of-ode-solutions-on-parameters`,
  `thm-fundamental-theorem-for-nonautonomous-smooth-odes`,
  `fs-any-two-atlases-on-the-same-topological-manifold-have-a-union-atlas`,
  `ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds`.
- `proof-contract --strict` reports stale contract mismatches for the repaired
  items, especially those whose step numbering or citation use changed:
  `lem-smooth-chart-compatibility-is-symmetric-and-reflexive`,
  `prop-compatibility-of-smooth-atlases-is-an-equivalence-relation`,
  `lem-all-charts-compatible-with-a-smooth-atlas-form-a-smooth-atlas`,
  `prop-identity-maps-and-composites-of-smooth-maps-are-smooth`,
  `prop-a-map-into-a-product-is-smooth-iff-its-components-are-smooth`,
  `prop-a-map-from-a-disjoint-union-is-smooth-iff-each-restriction-is-smooth`,
  `prop-restrictions-corestrictions-and-products-of-smooth-maps-are-smooth`,
  `lem-coordinate-balls-form-a-basis-of-a-topological-manifold`,
  `thm-topological-manifolds-are-sigma-compact`,
  `ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds`,
  `lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval`.

## Page verdicts

- `smooth-manifolds-and-smooth-maps`:
  repaired multiple proof-format and proof-logic defects in in-flight items;
  page remains blocked on residual precheck/contract alignment.
- `smooth-manifolds-and-smooth-maps-examples`:
  no B-page prose edit; repaired example/counterexample item formatting; no
  uneditable mathematical defect confirmed.
- `euclidean-ordinary-differential-equations-with-smooth-dependence`:
  repaired multiple proof-format defects in in-flight items; page remains blocked
  on residual precheck/contract alignment.
- `euclidean-ordinary-differential-equations-with-smooth-dependence-examples`:
  no B-page prose edit; repaired example/false-statement item formatting; no
  uneditable mathematical defect confirmed.

## Uneditable defects

- None confirmed in assigned pages or dependencies during this pass.
