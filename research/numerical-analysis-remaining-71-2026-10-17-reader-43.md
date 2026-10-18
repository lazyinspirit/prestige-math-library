# Step 3a reader report — batch 43

Run: `numerical-analysis-remaining-71-2026-10-17`  
Role: reader (`reader-43`)  
Scope: batch `43`

## Opened inventory

Assigned pages:

- A page: `maxwell-eigenproblems-and-compatible-vector-waves` at `library/numerical-pdes-and-spatial-discretization/maxwell-eigenproblems-and-compatible-vector-waves.md`.
- B page: `maxwell-eigenproblems-and-compatible-vector-waves-examples` at `library/numerical-pdes-and-spatial-discretization/maxwell-eigenproblems-and-compatible-vector-waves-examples.md`.

Assigned items, read in dependency order:

1. `lem-pe11-compact-self-adjoint-spectral-approximation`
2. `lem-pe11-hcurl-weak-limit`
3. `def-na-pe11-maxwell-cavity-eigenproblem`
4. `lem-pe11-zero-eigenvalue-is-curl-kernel`
5. `lem-pe11-gauge-space-infinite-dimensional`
6. `lem-pe11-smooth-nedelec-approximation`
7. `lem-pe11-continuous-gauge-compact-embedding`
8. `lem-pe11-gauge-conforming-edge-approximation`
9. `thm-pe11-edge-maxwell-spectral-approximation`
10. `ex-pe11-spherical-shell-pec-zero-mode`
11. `ex-pe11-unit-cube-maxwell-mode`
12. `ex-pe11-repeated-cube-maxwell-cluster`

Context pages opened:

- `finite-element-eigenvalue-approximation`
- `discrete-de-rham-complexes-and-edge-elements`
- `finite-element-pde-constrained-optimization`
- `discrete-de-rham-complexes-and-edge-elements-examples`

The B-page's linked context item `ex-na-nodal-curlcurl-spurious-gradient-mode` was also opened; its computation and limitation to the naive nodal pair match the B-page summary.

Additional suppliers opened for the assigned proofs:

- Spectral and Hilbert-space interfaces: `thm-spectral-theorem-for-compact-self-adjoint-operators`, `thm-orthogonal-decomposition-by-a-closed-subspace`, `thm-rank-nullity`, `def-eigenvalue-eigenvector-eigenspace-and-spectrum`, `def-axiom-of-choice`, `def-countable-choice`, `def-dependent-choice`, `thm-bolzano-weierstrass`, `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`, `lem-pde-l2-control-space-separable`, `lem-separable-hilbert-bounded-sequence-weak-subsequence`, `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`, `thm-rellich-compactness-from-w-one-p-zero-to-lp`, `thm-compact-coercive-form-spectrum-and-minmax`, `lem-finite-dimensional-galerkin-minmax`, and `def-nullhomotopic-map-and-contractible-space`.
- Maxwell spaces, meshes, and moments: `def-na-hcurl-space`, `def-na-hdiv-space`, `def-na-zero-tangential-hcurl`, `def-na-lowest-order-whitney-de-rham-spaces`, `def-na-curl-curl-kernel-quotient-gauge`, `def-matching-affine-simplicial-meshes`, `def-oriented-simplicial-cell-chains`, `def-covariant-contravariant-piola-maps-and-hdiv-hcurl`, `thm-affine-piola-differential-and-trace-moment-identities`, `lem-na-nedelec-edge-unisolvence`, `lem-na-whitney-moments-commute-with-grad-curl-div`, `lem-stokes-theorem-for-the-standard-simplex`, `lem-affine-simplex-gauss-green-formula`, `lem-oriented-facet-cancellation-on-matching-meshes`, and `cor-vector-valued-ftc-and-lipschitz-bound`.
- PE09 and continuous compactness chain: `thm-na-regular-decomposition-zero-tangential-hcurl`, `lem-na-full-dirichlet-hcurl-regular-decomposition`, `lem-na-lipschitz-scalar-h1-h2-extension`, `lem-na-lipschitz-support-and-zero-boundary-closure`, `lem-na-compact-support-hcurl-fourier-splitting`, `lem-test-function-cutoffs-and-euclidean-localization`, `lem-weak-leibniz-rule-with-a-smooth-factor`, `lem-na-hcurl-curlfree-potential-contractible`, `lem-na-contractible-lipschitz-polyhedron-boundary-connected`, `lem-na-relative-curl-kernel-is-zero-boundary-gradients`, `lem-na-graded-whitney-mesh-size-and-boundary-shifts`, `lem-na-whitney-averaged-pullback-moment-bounds`, `lem-na-whitney-cochain-correction-and-strong-convergence`, `thm-na-uniformly-bounded-commuting-cochain-projection`, `lem-na-discrete-gradient-lift-gap-estimate`, and `thm-na-discrete-compactness-and-poincare-lowest-order-nedelec`.
- Approximation, convolution, and example interfaces: `def-l-one-approximate-identity-on-rn`, `thm-l-one-approximate-identities-converge-in-l-p`, `lem-smooth-bump-between-concentric-euclidean-balls`, `lem-euclidean-balls-have-positive-finite-lebesgue-measure`, `lem-distributional-derivatives-commute-with-convolution-against-test-functions`, `thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign`, `thm-local-coordinate-formula-for-the-exterior-derivative`, `thm-the-exterior-derivative-commutes-with-pullback`, `def-integral-of-a-form-over-a-smooth-singular-simplex`, `lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set`, `thm-dominated-convergence`, `cor-cauchy-schwarz-inequality-for-l-two`, `thm-local-smooth-approximation-in-wkp`, `lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space`, `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`, `thm-tonelli-and-fubini-for-completed-product-measures`, and `def-wkp-zero-as-a-sobolev-closure`.

The batch proof-contract file was read and its assigned rows reviewed. The two edited rows were updated to reflect the corrected index quantifier and the explicit mollifier construction. No judge record existed on either edited item.

## Findings and repairs

### `lem-pe11-compact-self-adjoint-spectral-approximation`

The first statement clause referred to `T_{n_j}` without declaring the index sequence. The proof already begins with an arbitrary strictly increasing sequence `n_1<n_2<...` and proves the asserted implication for it. I made that quantifier explicit in the Statement and aligned the step 1.1 proof-contract derivation. This only clarifies the existing argument. The direct consumer `thm-pe11-edge-maxwell-spectral-approximation` was checked: its uses concern a chosen refining sequence and the no-positive-pollution conclusion, so the clarified supplier covers the inference without a changed mathematical conclusion.

Authoritative context checked: Peter Monk, *Finite Element Methods for Maxwell's Equations*, §2.3.4, Theorem 2.52, printed p. 35 ([source](https://djvu.online/file/jcJa2PquKRPxA)). The theorem assumes pointwise convergence to a compact self-adjoint operator and a collectively compact self-adjoint family; it gives the full multiplicity count in an isolated eigenvalue disk. The local proof in the item supplies the positive-operator and eigenspace-gap details used here.

### `lem-pe11-smooth-nedelec-approximation`

Step 1.2 previously invoked a compactly supported smooth approximate identity and curl-commutation without constructing the kernel or citing the distributional convolution identity. I added the local construction: choose a smooth nonnegative bump equal to one on the half-unit ball and supported in the unit ball, normalize its positive finite integral, scale it to an approximate identity, and choose an explicit sequence of radii below the support-to-boundary margin. The proof now also bounds the convolution support by the kernel-radius neighborhood of the zero extension's support, so it remains compactly contained in the cavity. It cites the approximate-identity definition and convergence theorem, the compact-bump convolution smoothness theorem, and distributional derivative commutation. This establishes that the mollifications are compactly supported smooth fields in the cavity and converge with their curls in `L^2`.

The proof contract now includes the matching source clauses and the repaired step 1.2 derivation. The direct consumers `lem-pe11-gauge-conforming-edge-approximation` and `thm-pe11-edge-maxwell-spectral-approximation` were checked; they use the repaired H(curl)-convergence and PEC membership conclusions. Their statements and proofs require no change.

Authoritative context checked: Long Chen, *Finite Element Methods for Maxwell Equations*, §1.1, pp. 1–3, for the first-family edge basis and oriented edge circulation, and §1.2, pp. 4–5, for the commuting curl moment ([source](https://www.math.uci.edu/~chenlong/226/FEMMaxwell.pdf)). Ralf Hiptmair and Clemens Pechstein, *Regular Decompositions of Vector Fields—Continuous, Discrete, and Structure-Preserving*, §2.1 and §3.1, Theorem 2, printed pp. 3–8, supplies the stated H(curl) regular-decomposition interface used in the compactness chain ([source](https://www.sam.math.ethz.ch/sam_reports/reports_final/reports2019/2019-18.pdf)).

### Unedited defects

None confirmed in the assigned items or pages. No findings remain outside this reader's edit scope.

## Page verdicts

| Page | Verdict |
| --- | --- |
| `maxwell-eigenproblems-and-compatible-vector-waves` | Acceptable after the two item repairs. Its summary, coefficient caveat, kernel gauge, and commuting-projection diagram agree with the reviewed definitions and theorem. |
| `maxwell-eigenproblems-and-compatible-vector-waves-examples` | Acceptable. The three examples support its summary; the linked nodal example accurately describes a mismatch for that naive finite-element pair. No B-page prose was edited. |

## Validation and blockers

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-pe11-compact-self-adjoint-spectral-approximation.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-pe11-compact-self-adjoint-spectral-approximation.md` — pass.
- `node tools/tsx-run.mjs tools/reflow.mts items/lem-pe11-smooth-nedelec-approximation.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-pe11-smooth-nedelec-approximation.md` — pass.
- Final required layout check, one command for both changed items: `node tools/proof-layout.mjs items/lem-pe11-compact-self-adjoint-spectral-approximation.md items/lem-pe11-smooth-nedelec-approximation.md` — 2 items, 10 steps, 0 defects.
- No blocker affects batch 43. The latest native run status still reports an unrelated `3a-collect` blocker: `collect-11` failed three times (covers batch 11). This reader did not intervene in that separate batch.

Coverage limitation: the review opened every assigned page and item and the direct or intermediate dependency sources needed for their claims. For published foundational suppliers, the review checked the cited statement and the relevant proof interface rather than re-auditing every transitive proof in the repository.
