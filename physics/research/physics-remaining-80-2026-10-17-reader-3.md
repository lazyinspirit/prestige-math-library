# Step 3a reader report — batch 3

Run: `physics-remaining-80-2026-10-17`  
Role: reader  
Batch: `3`

## Verdict summary

- `emg-mg03`: pass after the local sign-convention supplier and volume-variation citation repairs below. The page summary matches the five mathematical items and accurately limits its claims to conditional smooth-field deductions.
- `emg-mg03-examples`: pass after the example's torus functions and spacetime-chain maps were made explicit. Its summary accurately describes a mathematical model example, not an observation.
- No uneditable defect or blocker remains in the reviewed scope.

## Opened inventory

Assigned pages:

- `library/einstein-maxwell-models-mathematics/emg-mg03.md`
- `library/einstein-maxwell-models-mathematics/emg-mg03-examples.md`

Assigned items, reviewed in assigned dependency order:

1. `lem-emg-scaled-three-torus-smooth`
2. `lem-emg-maxwell-current-forms`
3. `lem-emg-gauss-finite-chain`
4. `ex-emgmath-compact-neutrality`
5. `lem-emg-maxwell-action-variation`
6. `lem-emg-maxwell-observer-stress`

The batch manifest and proof contracts were read as evidence, not as verdicts. The page `emg-mg02` and the fixed-bundle interface carriers were also inspected for the action-variation use.

Proof-critical dependency statements and relevant proof sections opened:

- Lorentzian and EM geometry: `def-gr-smooth-lorentzian-objects`, `def-gr-metric-selected-connection`, `def-emg-lorentzian-forms`, `def-gr-metric-volume-form-and-current-flux`, `lem-emg-lorentz-hodge-calculus`, `thm-gr-density-divergence-and-finite-chain-flux`, `thm-gr-local-geodesics-and-exponential-map`, `thm-gr-local-lorentz-tetrad-existence`, `thm-gr-point-normal-and-exponential-coordinate-charts`, `thm-gr-compact-metric-and-timelike-curve-variation`, `lem-gr-metric-divergence-and-density-formula`, and `lem-emg-observer-field-decomposition`.
- Bundle interface: draft suppliers `def-emg-local-potentials-and-circle-data`, `lem-emg-circle-connection-gluing`, `def-emg-set-size-and-class-schema`, and `lem-emg-positive-square-root-smoothness`, plus `def-principal-g-bundle-and-associated-fiber-bundle`.
- Simplex chains and integration: `def-standard-topological-simplex-and-its-affine-face-maps`, `def-standard-orientation-of-the-affine-simplex`, `def-smooth-singular-simplex`, `def-smooth-singular-chain-and-cochain-complexes`, `def-integral-of-a-form-over-a-smooth-singular-simplex`, `thm-stokes-theorem-for-smooth-singular-chains`, `thm-change-of-variables-for-compact-jordan-sets`, `thm-jordan-boundary-criterion`, `thm-graphs-of-continuous-functions-have-content-zero`, `lem-integral-additivity-over-a-content-zero-almost-partition`, `thm-riemann-fubini-on-product-rectangles`, `thm-continuous-functions-on-compact-jordan-sets-are-integrable`, `thm-continuous-on-a-rectangle-is-riemann-integrable`, `def-multidimensional-darboux-integral`, `def-multidimensional-darboux-sums`, `def-multidimensional-rectangle-and-volume`, `def-null-and-content-zero-in-rn`, `def-darboux-integral`, `def-darboux-sums`, `thm-chain-rule-for-total-derivatives`, `thm-continuous-implies-integrable`, and `thm-ftc-second-part`.
- Trigonometric and compactness prerequisites: `def-sine-and-cosine-by-power-series`, `lem-sine-and-cosine-series-converge-everywhere`, `thm-termwise-differentiation-of-a-real-power-series`, `thm-sine-and-cosine-derivatives`, `thm-sine-cosine-zero-sets-and-fundamental-period`, `thm-heine-borel-rn`, and `thm-compactness-under-continuous-maps`.
- Quotient and countability definitions used by the torus proof: `def-quotient-topology`, `def-topological-space`, `def-continuous-map-top`, `def-homeomorphism-and-open-maps`, `def-hausdorff-space`, `def-second-countable-space`, `def-topological-manifold-without-boundary`, `def-smooth-manifold`, `def-c-r-and-smooth-maps-between-smooth-manifolds`, `def-oriented-smooth-manifold-and-oriented-chart`, `def-exterior-power-bundle-of-the-cotangent-bundle`, `def-smooth-vector-field-as-a-tangent-bundle-section`, `def-smooth-differential-k-form`, `def-wedge-product-of-differential-forms`, `def-countable-choice`, `def-integers`, `def-rationals`, `lem-int-embeds-rat`, `lem-rat-embeds-dense`, `lem-q-and-irrationals-dense-r`, and `thm-rationals-countable`.

## Repairs

### `lem-emg-maxwell-current-forms`

`Facts & Assumptions [F3]` had said the local tetrad theorem supplies a *positively oriented* tetrad. Its statement supplies a future-directed orthonormal tetrad and makes no orientation assertion. The point-normal theorem accepts any orthonormal basis. I corrected [F3] and proof step 1.1 to reverse one spatial leg when needed, preserving the future timelike leg and orthonormality, then apply the point-normal theorem to that positively oriented basis. This supplies the positively oriented chart needed by the Hodge-component computation without assuming an orientation property absent from the supplier.

### `lem-emg-maxwell-action-variation`

`Facts & Assumptions [F3]` located the pointwise volume-variation identity in clauses (a) and (d) of `thm-gr-compact-metric-and-timelike-curve-variation`. The identity is recorded instead in that supplier's `Facts & Assumptions [L4]` and used in proof step 3.1. I corrected the locator and made clear that the determinant calculation is local and applies to the global compactly supported variation constructed in step 1.1.

Proof step 1.1 previously invoked openness of fixed-signature matrices and a finite subcover in outline. I made the uniform Lorentzian-parameter argument explicit: in coordinates normalized to the metric at each point of the compact support, a small operator-norm perturbation remains nondegenerate and keeps a positive spatial subspace and negative time line; a finite subcover yields one parameter interval. The empty-support case is stated separately.

### `ex-emgmath-compact-neutrality`

The torus has no global real-valued coordinate function $x^1$, and the original formulas used periodic expressions without defining their descent. I defined periodic lifts on $\mathbb R^3$, named their smooth descents to $\mathbb T^3_L$, and stated $\partial_1h=f$ and $dh=f\,dx^1$.

The original simplex construction composed affine maps with $q$ into $\mathbb T^3_L$, while the claimed singular simplices must map into $M=\mathbb R\times\mathbb T^3_L$. I defined the slice inclusion, the affine identification $\theta:T_3\to\Delta^3$, and each simplex $\psi_\sigma=\iota_*\circ q\circ\phi_\sigma\circ\theta^{-1}:\Delta^3\to M$. The integration, field-equation, boundary-cancellation, and endpoint computations now consistently use the descended fields or their lifts.

The assigned proof contract was updated for these repairs and for the corrected source locator. No assigned item carried a stale `verification.judge` record.

## Defects not edited

None confirmed. The two draft bundle suppliers used by the assigned action-variation item were inspected at the exact interface it uses; their local definitions and gluing argument support the conditional fixed-sector variation. No defect was identified in a published dependency used by the reviewed arguments.

## Validation and blocker

- Reflow completed for all three changed items.
- Precheck passed for all three changed items.
- Final proof-layout command: `node tools/physics-support/proof-layout.mjs items/lem-emg-maxwell-current-forms.md items/lem-emg-maxwell-action-variation.md items/ex-emgmath-compact-neutrality.md` — 3 items, 22 steps, 0 defects.
- Blocker: none.

## Coverage limitation

The cited Wirthmüller PDF at `https://kluedo.ub.rptu.de/files/4529/man_skript.pdf` could not be fetched directly (timeout/status failure). The search extract exposed the relevant §1.14(4), printed pp. 12–13, stating the quotient group $\mathbb R^n/\mathbb Z^n$, compact Hausdorff torus, small-cube quotient charts, translation transition maps, smooth atlas, and local-diffeomorphism quotient map. The assigned torus proof was checked independently for the scaled lattice and product metric. Other bibliography entries were not retrieved as full texts because the local conditional proofs supplied the mathematical arguments reviewed here. The opened dependency statements and proof-critical sections were checked; unrelated transitive published proofs were not re-audited.
