# Step 3a reader report — batch 58

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader  
Batch: `58`

## Scope and opened inventory

I read the required workspace instructions, schema, workflow, physics content model, and reader brief. I opened both assigned pages:

- `library/quantum-field-theory-mathematics/qftx-microlocal-products.md`
- `library/quantum-field-theory-mathematics/qftx-microlocal-products-examples.md`

I opened all nine assigned items in manifest dependency-level order:

1. `def-qftx-distributions-on-smooth-manifolds`
2. `def-qftx-local-wavefront-set`
3. `def-qftx-wavefront-hadamard`
4. `lem-qftx-wavefront-chart-invariance`
5. `def-qftx-polynomial-microcausal-functionals`
6. `thm-qftx-wavefront-product`
7. `lem-qftx-microcausal-star-product`
8. `prop-qftx-hadamard-wick-change`
9. `cex-qftx-square-delta`

The direct mathematical supplier statements used in the review were opened: `def-smooth-manifold`, `def-cotangent-space-and-cotangent-bundle-as-a-disjoint-union`, `def-test-function-space-d-of-an-open-set`, `def-test-function-topology`, `def-distribution`, `def-countable-choice`, `def-dirac-delta-and-its-derivatives`, `def-radial-mollifier-family-in-rn`, `lem-compactly-supported-distributions-extend-to-smooth-functions`, `lem-cotangent-coordinate-changes-use-the-inverse-transpose-jacobian`, `lem-schwartz-parameter-pairing-and-integral-interchange`, `lem-test-function-cutoffs-and-euclidean-localization`, `thm-fourier-inversion-on-schwartz-space`, `thm-fourier-transform-of-a-compactly-supported-distribution-is-a-smooth-polynomially-bounded-multiplier`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-local-finite-order-characterization-of-distributions`, and `thm-tensor-product-distributions-and-iterated-pairings`. I also opened the published regular QFT suppliers `thm-qft-regular-wick-star-associativity` and `lem-qft-regular-normal-order-isomorphism`, plus the dimension-four connection result `thm-gr-nondegenerate-levi-civita-and-tensor-derivative` when checking whether it supplies the general-dimensional connection used by the Hadamard definition.

I opened the assigned pages' required pages `qft-ir03`, `qft-mf02`, and `harmonic-functions-and-mean-values-in-rn`. Their placements and summaries support the declared page requirements. The examples page's harmonic-functions prerequisite contains the radial mollifier supplier used by its counterexample.

Source sections opened:

- Fredenhagen–Rejzner, [*Perturbative algebraic quantum field theory*](https://arxiv.org/html/1208.1428), Appendix A.5–A.7 (local wavefront definition and pullback theorem/proof outline) and Section 5, especially equations (52)–(64) (microcausal wavefront condition, Hadamard relation, and normal-ordering map).
- Brunetti–Fredenhagen, [*Microlocal analysis and interacting quantum field theories: renormalization on physical backgrounds*](https://arxiv.org/pdf/math-ph/9903028), Section 2.1, printed pp. 7–9 (wavefront covariance, multiplication criterion M1, and positive-frequency relation).

The relevant external source passages support the local Fourier criterion, product condition, and normal-ordering convention. Fredenhagen–Rejzner explicitly labels Appendix A.7's pullback proof as an outline and defers details to cited references; the assigned proof still needs its local-to-global construction made explicit.

I searched all assigned item and page files for TikZ/tikzcd environments; none were present. The assigned content is mathematical and contains no empirical claims.

## Findings not repaired

- `def-qftx-distributions-on-smooth-manifolds`, Definition, sentence beginning “Give their space”: the test-density topology is named as the “usual” chart seminorms and LF limit, but the item does not define the fixed-support seminorms on density sections or the inductive-limit topology, nor the local representative $u_x$. The direct dependency `def-test-function-topology` defines the topology for scalar test functions on an open Euclidean set, not for densities on an arbitrary manifold. A definition of the chartwise density seminorms, fixed-support stages, direct limit, and coordinate representative is needed. I did not retain a local Definition change because the manifest logical consumer closure includes batches 60, 62, 63, 65, 68, 120, 121, 124, and 129, outside this assignment.

- `lem-qftx-wavefront-chart-invariance`, Statement, opening sentence and Facts & Assumptions [F2]: the claim is for an arbitrary smooth manifold, but its global `WF` source `def-qftx-wavefront-hadamard` defines global `WF` only after assuming an oriented, time-oriented, globally hyperbolic Lorentzian manifold with $n\ge2$. This item has no Lorentzian hypothesis. Supply a global wavefront definition for arbitrary smooth manifolds or state the actual required domain.

- `thm-qftx-wavefront-product`, Statement, opening paragraph: the same global-`WF` scope mismatch occurs in its hypotheses “$M$ is a smooth manifold” and “$f:N\to M$” with arbitrary smooth manifolds. The cited global definition is restricted to Lorentzian dimension at least two. A general global wavefront definition is needed before this theorem can be stated for its present domain.

- `cex-qftx-square-delta`, Statement refuted and Proof 1.1–2.1: it uses global $\operatorname{WF}(\delta_0)$ on $\mathbb R^n$ for every $n\ge1$, while the assigned global definition requires $n\ge2$ and Lorentzian structure. The local Euclidean wavefront definition does apply for $n\ge1$, but the item uses the global notation. State and use the local Euclidean wavefront set, or supply a general global definition.

- `def-qftx-wavefront-hadamard`, Definition, causal-curve sentence at lines 39–40 and null-geodesic sentence at line 47: “causal curve” is only described by regularity and causal tangent, without a parameter domain or endpoints; $J^\pm$ and strong causality then quantify over these curves. The later geodesic notation uses $\gamma:I\to M$ but never states that $I$ is an interval. Specify the curve domains, regularity pieces, and endpoint convention used for $J^\pm$.

- `def-qftx-wavefront-hadamard`, Definition, line 41: “Let $\nabla$ be the unique torsion-free connection with $\nabla g=0$” assumes existence and uniqueness. Its declared dependencies provide smooth manifolds and cotangent spaces, but no affine-connection definition or general-dimensional Levi–Civita existence/uniqueness result. The locally available nondegenerate-metric theorem is explicitly four-dimensional and does not justify the stated $n\ge2$ scope. Supply a general-dimensional proof/source (for example, a Koszul construction with the needed connection rules) or make the connection an explicit part of the data.

- `def-qftx-wavefront-hadamard`, Definition, line 51: the displayed $P$ is applied to a distribution $W\in\mathcal D'(M\times M)$, but the item does not define $P$'s smooth-function domain/range or its action on density-dual distributions, nor the induced actions $P_x,P_y$. Define the differential operator on smooth scalars and its formal-transpose action on distributions (including the product-manifold convention), or cite an exact supplier that does so.

- `thm-qftx-wavefront-product`, Proof 1.2: the local Fourier formula constructs a candidate pullback in coordinates, but the proof does not establish that the construction is independent of the source cutoff and coordinate choices or how the local definitions patch to a global distribution. The finite-cover remarks elsewhere do not supply this for the pullback. Fredenhagen–Rejzner Appendix A.7 gives only a proof outline and explicitly uses a locally finite cover/partition of unity before deferring details. Add the required localization, overlap-agreement, and independence argument, or cite a complete pullback theorem with its exact hypotheses.

## Repairs and checks

I changed `prop-qftx-hadamard-wick-change`'s title from “equivalent Wick algebras” to “Smooth Hadamard changes intertwine the polynomial microcausal products.” Its statement proves a bijective product-intertwiner on the stated class, while the local suppliers do not establish associativity of the distribution-kernel product on that class. I also defined \(\mathcal C_g^-:=\tau^*\mathcal C_g^+\) in Proof 1.1 before using the past-frequency relation. I synchronized the corresponding Step 1.1 derivation in `physics-non-fluid-129-2026-10-21-r2-batch-58.proof-contracts.json`. No stale `verification.judge` record was present on the changed item.

For `prop-qftx-hadamard-wick-change`, reflow reported unchanged, precheck passed, and the final proof-layout command reported 1 item, 4 steps, and 0 defects. No other item or page was changed.

## Page verdicts

- `qftx-microlocal-products` (A page): page metadata, ordered item inventory, and required-page links are consistent. The page itself is acceptable; the assigned item findings above remain open.
- `qftx-microlocal-products-examples` (B page): page metadata, example inventory, and required-page links are consistent. The page itself is acceptable; `cex-qftx-square-delta` has the open wavefront-domain finding above.

## Blocker and coverage limit

No blocker prevented completion of the batch review. Repairs to the global wavefront and manifold-distribution definitions were left for owner disposition because their current-run consumer closures cross other batches; this report does not certify those outside consumers. Direct dependency statements were opened and used, but I did not re-audit every transitive published supplier proof. The source reading was limited to the cited relevant sections and locators above, not the full contents of either paper.
