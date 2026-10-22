# Step 3a reader report — batch 37

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader  
Batch: `37`

## Opened inventory

Assigned pages:

- `library/general-relativity/gr-fx09-bootstrap-and-stability-boundaries.md`
- `library/general-relativity/gr-fx09-bootstrap-and-stability-boundaries-examples.md`

The A and B page carriers are frontmatter-only and their item/page inventories agree with the batch manifest. I also inspected the four required page carriers named by the A page: `gr-fx03-geometric-cauchy-stability`, `gr-fx08-wave-energy-and-black-hole-perturbations`, `gr-fx04-asymptotic-ends-and-adm`, and `gr-fx06-trapped-surfaces-and-incompleteness`.

Assigned items, read in supplier-before-consumer order:

- `def-gr-fx-bootstrap-continuation-contract`
- `thm-gr-fx-bootstrap-closure`
- `rem-gr-fx-kerr-stability-source-boundary`
- `ex-gr-fx09-1`
- `ex-gr-fx09-2`

Direct mathematical suppliers inspected for these items:

- `thm-gr-fx-finite-slab-stability`
- `def-gr-fx-fixed-gauge-data-topology`
- `def-gr-periodic-symmetric-hyperbolic-system`
- `def-gr-periodic-torus-and-sobolev-spaces`
- `def-infimum`
- `thm-infimum-property`
- `def-gr-fx-kerr-exterior`
- `def-gr-spacelike-initial-data-and-constraints`
- `def-gr-spacelike-hypersurfaces-and-cauchy-sets`
- `def-gr-curvature-tensor-and-derived-tensors`
- `def-gr-fx-adm-end`
- `def-gr-fx-future-null-geodesic-completeness`
- `thm-gronwall-integral-inequality`
- `def-real-power`
- `thm-real-power-continuity-and-derivatives`
- `thm-chain-rule`
- `thm-ftc-second-part`
- `cor-exponential-reciprocal-and-positivity`
- `thm-exponential-is-strictly-increasing`
- `def-real-exponential-function-and-e`
- `thm-logarithm-derivative-and-integral`

I inspected the batch manifest, reader brief, cross-batch dependency record, and relevant batch-37 proof-contract clauses as navigation evidence, not as verdicts.

## Review and edits

No assigned item or page prose was edited. No confirmed defect remained in the assigned carriers.

The bootstrap theorem's first infimum step omits the short observation that a nonempty set contains some element, so its infimum is at most that element and hence at most the slab endpoint. This follows immediately from the stated definition of infimum and nonemptiness; it does not undermine the argument. The threshold-at-endpoint, continuity, improvement, and finite-maximal-endpoint arguments otherwise follow from the stated hypotheses.

The first scalar example applies Gronwall with the continuous, nonnegative integrable-decay kernel and evaluates its integral correctly; its strict improvement is explicitly conditional on the displayed smallness inequality and does not claim a GR decay estimate. The second gives the correct polynomial Gronwall bound and a valid equality example showing failure of the bootstrap implication on a finite slab with `B = A ε² > 1`.

The Kerr source-boundary remark's definitions and qualifications match its cited suppliers. Its local Kerr parameters are length parameters; the Cauchy, constraint, curvature, ADM-end, and affine-completeness conventions match the linked definitions. The remark does not turn the source's theorem into a local proof or make a current open-problem claim.

I checked the primary source `Klainerman–Szeftel, arXiv:2104.11857v1`: the abstract and §1.2.1, the initial-layer Definition 3.4.2, precise Main Theorem in §3.4.3 including estimate (3.4.8), and §3.8.1 on the outgoing `u`-foliation and completeness of the limiting generators. The reported small-angular-momentum hypothesis, source-defined initial-data class, convergence scope, v1 proof-status caveat, and affine-parameter comparison are consistent with those passages.

I checked `Gourgoulhon, arXiv:gr-qc/0703035v1`, §7.2.1 equations (7.1)–(7.4), §7.3.1 equation (7.15), §7.5.1–7.5.2 equations (7.60)–(7.65), and §2.3.4 equation (2.43). The falloff and ADM formula are cited with their scope; equation (7.63)'s sign is translated consistently to the item's `K(V,W)=g(∇_Vn,W)` convention, and the remark accurately retains the coordinate and finiteness qualifications for angular momentum. I also checked the historical source passages in `Jaramillo–Valiente Kroon–Gourgoulhon, arXiv:0712.2332v2`, §§1.2.1 and 2.2; the report treats them as historical context only.

The assigned items contain no TikZ or tikzcd diagrams. The radial end sketch in the inspected ADM supplier correctly shows the excluded compact disk, a representative sphere `S_R`, and its outward Euclidean normal.

## Uneditable findings

None.

## Page verdicts

- `gr-fx09-bootstrap-and-stability-boundaries`: no defect in the page carrier or item inventory. Its fixed-gauge, finite-slab and ADM/null-completeness context matches the required pages and item homes.
- `gr-fx09-bootstrap-and-stability-boundaries-examples`: no defect in the companion page carrier or example inventory. Both examples are scoped scalar analyses and do not assert an Einstein stability result.

## Coverage limitation and blocker

I read the full finite-slab theorem item used as context, but did not independently re-audit every transitive PDE, geometric, and functional-analytic proof in that theorem's extensive supplier closure. The review therefore makes no claim of a full recursive audit of that external theorem's proof chain. No confirmed defect or workflow blocker was found in the assigned claims or page carriers.
