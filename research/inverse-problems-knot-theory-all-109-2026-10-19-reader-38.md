# Reader report — batch 38

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader  
Batch: `38`

## Opened inventory

**Pages.** Opened [A page](../library/inverse-problems/geodesic-x-ray-transforms-on-simple-manifolds.md) and [B page](../library/inverse-problems/geodesic-x-ray-transforms-on-simple-manifolds-examples.md). Both contain YAML frontmatter only, retain `page_layout: compact-v1`, and have no summary body. The A page lists its seven assigned results and the B page lists the assigned example; these inventories agree with the batch manifest.

**Assigned items.** Opened all eight items: `def-ip-simple-surface-and-geodesic-xray-transform`, `def-ip-tangent-orientation-double-cover`, `op-ip-geodesic-xray-injectivity-with-conjugate-points`, `lem-ip-surface-geodesic-flow-index-form-and-transport`, `lem-ip-orientation-cover-preserves-simplicity`, `lem-ip-pestov-identity-for-geodesic-data`, `thm-ip-2d-simple-surface-xray-injectivity`, and `ex-ip-38-scope-and-boundary-cases`.

**Published direct dependencies.** Opened the relevant definition or statement sections for `def-riemannian-metric-and-riemannian-manifold`, `def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary`, `def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space`, `def-covering-map-and-evenly-covered-neighbourhoods`, `def-levi-civita-connection`, `thm-fundamental-theorem-of-riemannian-geometry`, `def-jacobi-field`, `def-curvature-of-an-affine-connection`, `def-riemann-curvature-four-tensor`, `def-riemannian-volume-density`, `def-riemannian-speed-and-length`, `def-riemannian-distance-on-a-connected-manifold`, `thm-riemannian-distance-is-a-metric`, `thm-the-riemannian-distance-topology-is-the-manifold-topology`, `prop-length-dominates-endpoint-distance`, `thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves`, `thm-parametrized-implicit-function-theorem-with-higher-regularity`, `thm-tangent-and-cotangent-bundles-extend-over-a-manifold-boundary`, `thm-compactness-is-invariant-under-finite-sheeted-coverings`, `thm-path-lifting-for-covering-maps`, `thm-connected-and-locally-path-connected-implies-path-connected`, and `lem-covariant-derivatives-commute-up-to-curvature-in-a-two-parameter-variation`.

**External sources checked.** Independently checked the relevant passages in Paternain–Salo–Uhlmann, *Geometric inverse problems, with emphasis on two dimensions* (Ch. 2 §2.5; Ch. 3 §3.7; Ch. 4 §4.4; Ch. 15 §§15.1–15.2), Ilmavirta, *Geometry of geodesics* (Ch. 13 §§13.1–13.4), Salo, *On geometric inverse problems and microlocal analysis* (§2.2 Question 2.1 and §§2.4.1–2.4.2), Salo, *Minicourse on Geometric Inverse Problems* (§1.2 Question 1.1), Holman–Krishnan (2025), *Ray transform of symmetric tensor fields on Riemannian manifolds with conjugate points* (Introduction), and Hatcher, *Algebraic Topology* (Ch. 3 §3.3, printed pp. 234–235). The Hatcher citation is used only for the two local orientations and topological cover; the item's smooth determinant-line construction supplies its boundary-chart details.

## Mathematical review

- `def-ip-simple-surface-and-geodesic-xray-transform`: the strict-convexity sign, Jacobi convention, nontrapping quantifiers, incoming boundary convention, exit integral, and local-extension caveat are coherent and well-defined.
- `def-ip-tangent-orientation-double-cover`: the two determinant-line rays, chart sheet transitions, deck involution, and induced orientation are consistent, including at boundary charts.
- `op-ip-geodesic-xray-injectivity-with-conjugate-points`: the complete question matches Salo's compact strictly convex nontrapping formulation. Salo's RICAM notes state it as Question 2.1 (PDF p. 9); the DTU notes state Question 1.1 (PDF p. 6). The 2025 paper's introduction describes microlocal normal-operator and cancellation results, not a general scalar injectivity resolution.
- `lem-ip-surface-geodesic-flow-index-form-and-transport`: the frame computations give the stated commutator signs and invariant Liouville density; the boundary flux arguments support the integration-by-parts rules and Santaló formula. The scalar Jacobi factorization proves strict positivity of the fixed-endpoint index form. The collar argument uses compact support, distance separation, strict convexity, and zero ray data to justify a smooth compactly supported transport primitive.
- `lem-ip-orientation-cover-preserves-simplicity`: the component-surjectivity argument, lifted geodesics and Jacobi fields, boundary convexity, and equality of the lifted and projected transform are supported by the listed covering and local-isometry facts.
- `lem-ip-pestov-identity-for-geodesic-data`: the commutator and integration-by-parts steps have the correct signs, and the boundary products vanish under the stated trace condition.
- `thm-ip-2d-simple-surface-xray-injectivity`: on each oriented cover component, the primitive gives `VXu=0`; Pestov and the Santaló/index-form estimate leave a nonnegative term plus `||f||²`, which is positive if `f` is nonzero. The projection argument removes any orientability assumption.
- `ex-ip-38-scope-and-boundary-cases`: the disk bump is smooth and detected by the stated chord; the warped annulus has the claimed unit-speed trapped orbit; the sphere function integrates to zero on every great circle and the exhibited nonzero Jacobi field vanishes at the antipodes. All three TikZ diagrams match the text, including direction and endpoints; the proofs do not rely on the diagrams.

No other mathematical, statement-link, or diagram defect was confirmed.

## Repair and validation

Repaired one citation-location defect in `op-ip-geodesic-xray-injectivity-with-conjugate-points`. The source locator and visible reference had attributed the compact nontrapping surface question to PSU §15.2. The full source places that exact question at **Open problem 5 in §15.1, printed p. 339**. PSU §15.2, printed pp. 340–342, is retained as related higher-dimensional convex-foliation context. The item metadata and its `Open problem references` now distinguish these locations. This is supported by the book's §15.1 Open problem 5 and the §15.2 discussion of higher-dimensional foliation results.

Updated the `op-ip-geodesic-xray-injectivity-with-conjugate-points` source evidence in [batch 38 proof contracts](inverse-problems-knot-theory-all-109-2026-10-19-batch-38.proof-contracts.json) to state the exact §15.1/§15.2 roles. The item had no `verification.judge` record to remove.

Validation after the item edit:

- `node tools/tsx-run.mjs tools/reflow.mts items/op-ip-geodesic-xray-injectivity-with-conjugate-points.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/op-ip-geodesic-xray-injectivity-with-conjugate-points.md` — 0 checked, 0 failing.
- `node tools/proof-layout.mjs items/op-ip-geodesic-xray-injectivity-with-conjugate-points.md` — 1 item, 0 steps, 0 defects.

No other item or page was edited. No confirmed defect remains unedited.

## Page verdicts and blocker

- **A — `geodesic-x-ray-transforms-on-simple-manifolds`: pass.** Frontmatter-only presentation and item inventory are correct; its assigned item claims and proofs have no remaining confirmed defect.
- **B — `geodesic-x-ray-transforms-on-simple-manifolds-examples`: pass.** Frontmatter-only presentation and example inventory are correct; the examples and diagrams are mathematically consistent.
- **Blocker:** none for this batch. The recomputed native run status remains `running` at `3a-read` (32/109 covered) and still lists batch 38 as missing; no gate, stage stamp, or acceptance was attempted.

## Coverage limitation

The initial capture of assigned item text preceded reading some published dependency statements, so the strict supplier-first file-opening order was not achieved. Those direct supplier claims were subsequently inspected and used before reaching the mathematical verdicts; no assigned item was reread. No direct dependency claim needed for this review remains unread, and no mathematical uncertainty remains unresolved.
