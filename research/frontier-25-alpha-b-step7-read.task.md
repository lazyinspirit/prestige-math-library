# Step 8 — group **b**, run `frontier-25`

You are the group Alpha for batches **2**, **3**, **9**: 4 A/B pair(s), 8 page(s), 135 item(s), 0 open rejection(s) over 0 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-25-alpha-b-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-25-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 2 | `the-moore-penrose-pseudoinverse-and-regularised-least-squares` | A | linear-algebra | 168.005 | `direct-matrix-factorisations-lu-cholesky-and-qr` |
| 2 | `the-moore-penrose-pseudoinverse-and-regularised-least-squares-examples` | B | linear-algebra | 168.006 | `the-moore-penrose-pseudoinverse-and-regularised-least-squares` |
| 2 | `eigenvalue-iterations-and-the-qr-algorithm` | A | linear-algebra | 168.007 | `direct-matrix-factorisations-lu-cholesky-and-qr` |
| 2 | `eigenvalue-iterations-and-the-qr-algorithm-examples` | B | linear-algebra | 168.008 | `eigenvalue-iterations-and-the-qr-algorithm` |
| 3 | `the-radon-nikodym-theorem-and-lebesgue-decomposition` | A | measure-theory | 288.025 | `signed-and-complex-measures-hahn-and-jordan-examples` |
| 3 | `the-radon-nikodym-theorem-and-lebesgue-decomposition-examples` | B | measure-theory | 288.026 | `the-radon-nikodym-theorem-and-lebesgue-decomposition` |
| 9 | `rank-theorems-and-embedded-submanifolds` | A | differential-geometry | 449 | `smooth-partitions-of-unity-and-exhaustions`, `tangent-cotangent-and-the-differential`, `constant-rank-submersions-and-regular-level-sets` |
| 9 | `rank-theorems-and-embedded-submanifolds-examples` | B | differential-geometry | 450 | `rank-theorems-and-embedded-submanifolds` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `the-moore-penrose-pseudoinverse-and-regularised-least-squares` — The Moore--Penrose Pseudoinverse and Regularised Least Squares (17 item(s))

- `def-moore-penrose-pseudoinverse` · definition — The Moore--Penrose pseudoinverse $A^+$ as the solution of the four Penrose equations
- `thm-moore-penrose-pseudoinverse-exists-and-is-unique` · theorem — Every finite real or complex matrix has a unique Moore--Penrose pseudoinverse
- `prop-pseudoinversion-is-involutive-adjoint-compatible-and-unitarily-equivariant` · proposition — Pseudoinversion is involutive, commutes with adjoints, and is equivariant under unitary left and right factors
- `thm-aa-plus-and-a-plus-a-are-orthogonal-projections-onto-the-image-spaces` · theorem — $AA^+$ and $A^+A$ are the orthogonal projections onto $\operatorname{im}A$ and $\operatorname{im}A^*$
- `cor-moore-penrose-image-and-kernel-identities` · corollary — The Moore--Penrose pseudoinverse exchanges image and adjoint-image, and exchanges kernel and adjoint-kernel
- `prop-full-column-rank-pseudoinverse-formula` · proposition — If $A$ has full column rank, then $A^+=(A^*A)^{-1}A^*$
- `prop-full-row-rank-pseudoinverse-formula` · proposition — If $A$ has full row rank, then $A^+=A^*(AA^*)^{-1}$
- `thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution` · theorem — For every right-hand side $b$, $A^+b$ is the unique least-squares solution of minimum Euclidean norm
- `thm-least-squares-solutions-form-an-affine-kernel-translate-of-a-plus-b` · theorem — Every least-squares solution has the form $A^+b+(I-A^+A)z$, and the same affine family specializes to exact solutions when $b\in\operatorname{im}A$
- `prop-reduced-qr-formulas-for-full-rank-pseudoinverses` · proposition — Reduced QR gives the full-column and full-row-rank pseudoinverse formulas without forming normal equations
- `def-tikhonov-regularised-least-squares` · definition — The Tikhonov regularised least-squares objective $\|Ax-b\|_2^2+\lambda\|x\|_2^2$ for $\lambda>0$
- `thm-tikhonov-regularised-least-squares-has-a-unique-minimiser` · theorem — For every $\lambda>0$, the Tikhonov objective is strictly convex and has the unique minimiser $(A^*A+\lambda I)^{-1}A^*b$
- `prop-tikhonov-regularisation-has-singular-filter-factors` · proposition — Tikhonov regularisation scales each singular component by the filter factor $\sigma/(\sigma^2+\lambda)$
- `thm-tikhonov-regularised-solutions-converge-to-the-pseudoinverse-solution` · theorem — As $\lambda\downarrow0$, the Tikhonov minimisers converge to the Moore--Penrose solution $A^+b$
- `def-truncated-singular-value-pseudoinverse-at-a-declared-threshold` · definition — The truncated singular-value pseudoinverse obtained by discarding singular values below a declared numerical-rank threshold
- `prop-truncated-svd-and-tikhonov-are-hard-and-smooth-spectral-filters` · proposition — Truncated SVD and Tikhonov regularisation act as hard and smooth spectral filters on the singular components
- `thm-pseudoinversion-is-continuous-on-each-fixed-rank-stratum-and-discontinuous-at-rank-loss` · theorem — The Moore--Penrose pseudoinverse is continuous on each fixed-rank stratum and is not continuous across rank loss

### `the-moore-penrose-pseudoinverse-and-regularised-least-squares-examples` — The Moore--Penrose Pseudoinverse and Regularised Least Squares: Examples and Counterexamples (9 item(s))

- `ex-diagonal-pseudoinverse-and-the-two-orthogonal-projections` · example — A diagonal rank-deficient matrix makes $A^+$, $AA^+$, and $A^+A$ completely explicit
- `ex-an-overdetermined-inconsistent-system-and-its-minimum-norm-least-squares-solution` · example — An overdetermined inconsistent system has a unique minimum-norm least-squares solution given by $A^+b$
- `ex-an-underdetermined-system-and-its-minimum-norm-exact-solution` · example — An underdetermined consistent system has infinitely many exact solutions but a unique minimum-norm one
- `ex-a-rank-deficient-matrix-has-an-affine-family-of-least-squares-minimisers` · example — A rank-deficient matrix has an affine family of least-squares minimisers of the form $A^+b+(I-A^+A)z$
- `ex-a-full-column-rank-pseudoinverse-from-reduced-qr` · example — A full-column-rank pseudoinverse can be read off directly from a reduced QR factorisation
- `ex-ridge-regularisation-filters-a-diagonal-inverse-problem` · example — Ridge regularisation damps the small-singular-value directions in a diagonal inverse problem
- `ex-truncated-svd-denoising-on-a-diagonal-problem` · example — Truncated SVD denoising on a diagonal problem keeps the declared large singular directions and discards the noisy ones
- `fs-reverse-order-pseudoinversion-holds-without-hypotheses` · false-statement — For arbitrary matrices, $(AB)^+=B^+A^+$
- `cex-pseudoinversion-is-discontinuous-at-a-rank-changing-diagonal-family` · counterexample — The family $\operatorname{diag}(1,t)$ shows that pseudoinversion is not continuous across rank loss

### `eigenvalue-iterations-and-the-qr-algorithm` — Eigenvalue Iterations and the QR Algorithm (20 item(s))

- `def-eigenpair-residual-and-normwise-backward-error` · definition — The residual $r=Ax-\mu x$ and the normwise backward error of an approximate eigenpair
- `thm-eigenpair-residual-realises-the-minimum-norm-backward-error` · theorem — For a unit vector $x$, the smallest perturbation making $(\mu,x)$ an exact eigenpair has spectral norm $\|Ax-\mu x\|_2$
- `def-power-iteration` · definition — Power iteration with normalisation and Rayleigh-quotient eigenvalue estimates
- `thm-power-iteration-converges-projectively-under-a-simple-strictly-dominant-eigenvalue` · theorem — If a diagonalisable matrix has a simple eigenvalue of strictly largest modulus and the start vector has a nonzero component in that eigendirection, power iteration converges projectively at the eigenvalue-ratio rate
- `def-inverse-and-shifted-inverse-iteration` · definition — Inverse iteration and shifted inverse iteration
- `thm-shifted-inverse-iteration-converges-to-the-simple-eigenvalue-nearest-the-shift` · theorem — If $\mu$ is not an eigenvalue and one simple eigenvalue is uniquely nearest to $\mu$, shifted inverse iteration converges to its eigendirection
- `def-rayleigh-quotient-iteration` · definition — Rayleigh-quotient iteration for Hermitian matrices
- `prop-hermitian-rayleigh-quotient-stationary-points-and-residual-gradient` · proposition — For a Hermitian matrix, the eigenvectors are the stationary points of the Rayleigh quotient and the residual is its constrained gradient
- `prop-rayleigh-quotient-and-residual-converge-along-hermitian-power-iteration` · proposition — For Hermitian matrices, the Rayleigh quotient and residual converge with the expected rates along power iteration
- `thm-hermitian-rayleigh-quotient-iteration-has-local-cubic-convergence` · theorem — Near a simple Hermitian eigenvector, Rayleigh-quotient iteration converges cubically
- `def-subspace-iteration-and-the-dominant-invariant-subspace` · definition — Subspace iteration and the dominant invariant subspace of a matrix
- `thm-subspace-iteration-converges-to-the-dominant-invariant-subspace-under-a-spectral-gap` · theorem — Subspace iteration converges to the dominant invariant subspace when a spectral gap separates the wanted and unwanted eigenvalues
- `def-upper-hessenberg-and-real-symmetric-tridiagonal-matrices` · definition — Upper Hessenberg matrices and real symmetric tridiagonal matrices
- `thm-householder-similarity-reduces-to-hessenberg-and-tridiagonal-form` · theorem — Householder similarities reduce a general matrix to upper Hessenberg form and a real symmetric matrix to tridiagonal form
- `def-unshifted-and-shifted-qr-iteration-with-deflation-and-wilkinson-shift` · definition — Unshifted QR iteration, shifted QR iteration, deflation, and the Wilkinson shift
- `prop-unshifted-qr-is-orthonormalised-simultaneous-iteration-and-preserves-unitary-similarity` · proposition — Unshifted QR is orthonormalised simultaneous iteration, and every QR iterate is unitarily similar to the original matrix
- `thm-unshifted-qr-converges-under-separated-moduli-and-leading-minor-hypotheses` · theorem — If a matrix is diagonalisable, its eigenvalue moduli are distinct, and the leading principal minors of the eigenvector matrix are nonzero, then unshifted QR converges to triangular form with the eigenvalues on the diagonal
- `prop-shifted-qr-preserves-upper-hessenberg-form` · proposition — Shifted QR iteration preserves upper Hessenberg form
- `thm-wilkinson-shifted-symmetric-tridiagonal-qr-has-local-deflation-away-from-ties` · theorem — Away from the tie case, a Wilkinson-shifted symmetric tridiagonal QR step stays tridiagonal
- `prop-eigenpair-residual-thresholds-give-backward-error-stopping-rules` · proposition — A residual threshold on a normalised approximate eigenpair is exactly a normwise backward-error stopping rule

### `eigenvalue-iterations-and-the-qr-algorithm-examples` — Eigenvalue Iterations and the QR Algorithm: Examples and Counterexamples (9 item(s))

- `ex-power-iteration-on-a-diagonal-matrix-displays-the-eigenvalue-ratio-rate` · example — Power iteration on a diagonal matrix shows the $|\lambda_2/\lambda_1|^k$ convergence rate explicitly
- `cex-equal-dominant-moduli-can-make-power-iteration-cycle` · counterexample — Equal dominant moduli can make power iteration alternate or cycle instead of converging
- `cex-a-start-vector-orthogonal-to-the-dominant-left-eigendirection-can-defeat-power-iteration` · counterexample — For a nonnormal matrix, a start vector orthogonal to the dominant left eigendirection can defeat power iteration
- `ex-shifted-inverse-iteration-targets-a-nondominant-eigenvalue` · example — Shifted inverse iteration can target a non-dominant eigenvalue by moving it closest to the shift
- `ex-rayleigh-quotient-iteration-on-a-two-by-two-symmetric-matrix` · example — Rayleigh-quotient iteration on a $2\times2$ symmetric matrix exhibits fast local convergence
- `ex-householder-reduction-to-hessenberg-form-for-a-three-by-three-matrix` · example — A single Householder similarity reduces a $3\times3$ matrix to Hessenberg form
- `ex-unshifted-and-shifted-qr-steps-on-a-symmetric-matrix` · example — One unshifted QR step and one shifted QR step on the same symmetric matrix show the role of the shift
- `ex-wilkinson-shifted-qr-deflates-a-symmetric-tridiagonal-tail` · example — A Wilkinson-shifted QR step can sharply reduce the tail of a symmetric tridiagonal matrix
- `cex-a-defective-jordan-block-has-ill-conditioned-eigenvectors` · counterexample — A defective Jordan block shows that tiny perturbations can destroy an eigenvector picture even when eigenvalues barely move

### `the-radon-nikodym-theorem-and-lebesgue-decomposition` — The Radon Nikodym Theorem and Lebesgue Decomposition (20 item(s))

- `def-measure-concentrated-on-a-measurable-set` · definition — A positive, signed, or complex measure concentrated on a measurable set
- `def-absolutely-continuous-with-respect-to-a-positive-measure` · definition — Absolute continuity of a signed or complex measure with respect to a positive measure
- `thm-absolutely-continuous-and-singular-with-respect-to-the-same-positive-measure-implies-zero` · theorem — A signed or complex measure that is both absolutely continuous and singular with respect to the same positive measure is zero
- `thm-absolute-continuity-is-equivalent-for-a-signed-or-complex-measure-its-variation-and-its-jordan-data` · theorem — For signed and complex measures, absolute continuity is equivalent for the measure, its Jordan or real-imaginary parts, and its total variation
- `thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures` · theorem — Every sigma-finite signed measure admits a Lebesgue decomposition relative to a sigma-finite positive measure
- `thm-lebesgue-decomposition-is-unique-for-sigma-finite-signed-measures` · theorem — The Lebesgue decomposition of a sigma-finite signed measure is unique
- `def-the-absolutely-continuous-and-singular-parts-of-a-sigma-finite-signed-measure` · definition — The absolutely continuous part and the singular part in the Lebesgue decomposition
- `thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality` · theorem — A sigma-finite signed measure that is absolutely continuous with respect to a sigma-finite positive measure has a unique almost-everywhere density
- `cor-finite-complex-measures-admit-integrable-radon-nikodym-densities` · corollary — A finite complex measure absolutely continuous with respect to a sigma-finite positive measure has an integrable complex density
- `def-radon-nikodym-derivative` · definition — The Radon-Nikodym derivative as an almost-everywhere equivalence class
- `thm-integration-against-a-radon-nikodym-derivative` · theorem — Integrating against a Radon-Nikodym derivative recovers integration against the measure
- `thm-additivity-of-radon-nikodym-derivatives` · theorem — Radon-Nikodym derivatives add almost everywhere
- `thm-chain-rule-for-radon-nikodym-derivatives` · theorem — Radon-Nikodym derivatives satisfy the chain rule along nu << mu << lambda
- `cor-reciprocal-rule-for-equivalent-sigma-finite-measures` · corollary — Equivalent sigma-finite positive measures have reciprocal Radon-Nikodym derivatives almost everywhere
- `thm-total-variation-of-an-absolutely-continuous-signed-or-complex-measure-has-density-the-absolute-value` · theorem — The total variation of an absolutely continuous signed or complex measure has density the absolute value of the Radon-Nikodym derivative
- `prop-the-radon-nikodym-derivative-is-integrable-exactly-when-the-absolutely-continuous-part-is-finite` · proposition — The Radon-Nikodym derivative is integrable exactly when the absolutely continuous part is finite
- `thm-epsilon-delta-characterisation-of-absolute-continuity-for-finite-signed-or-complex-measures` · theorem — For finite signed or complex measures, absolute continuity is equivalent to the epsilon-delta small-set condition
- `thm-polar-decomposition-for-signed-and-complex-measures` · theorem — Every finite signed or complex measure has a polar decomposition against its total variation
- `thm-finite-borel-measures-on-r-have-a-unique-absolutely-continuous-discrete-and-singular-continuous-decomposition` · theorem — Every finite Borel measure on R has a unique absolutely continuous, discrete, and singular-continuous decomposition
- `rem-von-neumanns-hilbert-space-proof-of-radon-nikodym` · remark — Von Neumann's Hilbert-space proof of Radon-Nikodym is shorter but depends on L^2 Riesz representation

### `the-radon-nikodym-theorem-and-lebesgue-decomposition-examples` — The Radon Nikodym Theorem and Lebesgue Decomposition — Examples (15 item(s))

- `ex-the-density-two-x-on-zero-one-is-the-radon-nikodym-derivative-of-two-x-indicator-dlambda` · example — The density $2x$ on $[0,1]$ is the Radon-Nikodym derivative of its density measure
- `ex-the-lebesgue-decomposition-of-half-lebesgue-plus-half-cantor-measure` · example — The Lebesgue decomposition of one half Lebesgue plus one half Cantor measure
- `ex-delta-zero-plus-lebesgue-on-zero-one-splits-into-discrete-and-absolutely-continuous-parts` · example — The measure $\delta_0+\lambda\!\restriction_{[0,1]}$ splits into discrete and absolutely continuous parts
- `ex-the-chain-rule-for-radon-nikodym-derivatives-on-zero-one` · example — The chain rule for Radon-Nikodym derivatives on $[0,1]$
- `ex-a-piecewise-quadratic-distribution-function-recovers-its-density` · example — A piecewise-quadratic distribution function recovers its density
- `cex-counting-measure-on-zero-one-shows-the-dominating-measure-needs-sigma-finiteness` · counterexample — Counting measure on $[0,1]$ shows the dominating measure needs sigma-finiteness
- `cex-x-inverse-dlambda-on-zero-one-shows-finiteness-is-needed-in-the-epsilon-delta-criterion` · counterexample — $x^{-1}d\lambda$ on $(0,1)$ shows finiteness is needed in the epsilon-delta criterion
- `cex-two-radon-nikodym-derivatives-can-differ-on-a-null-set` · counterexample — Two Radon-Nikodym derivatives can differ on a null set
- `cex-lebesgue-plus-counting-measure-has-no-lebesgue-decomposition-relative-to-lebesgue-measure` · counterexample — Lebesgue plus counting measure has no Lebesgue decomposition relative to Lebesgue measure
- `cex-an-absolutely-continuous-finite-measure-can-have-an-unbounded-radon-nikodym-derivative` · counterexample — An absolutely continuous finite measure can have an unbounded Radon-Nikodym derivative
- `fs-every-measure-is-absolutely-continuous-or-singular-with-respect-to-lebesgue-measure` · false-statement — FALSE: every measure is absolutely continuous or singular with respect to Lebesgue measure
- `fs-the-radon-nikodym-derivative-is-a-uniquely-determined-function` · false-statement — FALSE: the Radon-Nikodym derivative is a uniquely determined function
- `fs-the-epsilon-delta-condition-characterises-absolute-continuity-for-every-measure` · false-statement — FALSE: the epsilon-delta condition characterises absolute continuity for every measure
- `fs-the-radon-nikodym-theorem-holds-without-sigma-finiteness` · false-statement — FALSE: the Radon-Nikodym theorem holds without sigma-finiteness
- `fs-absolutely-continuous-measures-always-have-bounded-radon-nikodym-derivatives` · false-statement — FALSE: absolutely continuous measures always have bounded Radon-Nikodym derivatives

### `rank-theorems-and-embedded-submanifolds` — Rank Theorems and Embedded Submanifolds (37 item(s))

- `def-rank-of-a-smooth-map-at-a-point` · definition — The rank of a smooth map at a point
- `def-immersion-submersion-and-constant-rank-map` · definition — Immersions, submersions, and constant-rank maps
- `def-regular-and-critical-points-and-values` · definition — Regular and critical points and values
- `cor-the-immersion-and-submersion-loci-are-open` · corollary — The immersion and submersion loci are open
- `thm-smooth-inverse-function-theorem-on-manifolds` · theorem — The smooth inverse function theorem on manifolds
- `thm-constant-rank-theorem-for-manifolds` · theorem — The constant-rank theorem for manifolds
- `cor-local-normal-form-for-immersions` · corollary — Local normal form for immersions
- `cor-local-normal-form-for-submersions` · corollary — Local normal form for submersions
- `cor-every-immersion-is-locally-an-embedding` · corollary — Every immersion is locally an embedding
- `cor-every-submersion-is-an-open-map` · corollary — Every submersion is an open map
- `prop-a-smooth-map-of-locally-maximal-rank-has-locally-constant-rank` · proposition — A smooth map of locally maximal rank has locally constant rank
- `def-embedded-submanifold-and-slice-chart` · definition — Embedded submanifolds and slice charts
- `lem-slice-chart-restrictions-form-a-smooth-atlas` · lemma — Slice-chart restrictions form a smooth atlas
- `def-smooth-embedding` · definition — Smooth embeddings
- `prop-the-smooth-structure-of-an-embedded-submanifold-is-unique` · proposition — The smooth structure of an embedded submanifold is unique
- `prop-the-inclusion-of-an-embedded-submanifold-is-a-smooth-embedding` · proposition — The inclusion of an embedded submanifold is a smooth embedding
- `prop-the-image-of-a-smooth-embedding-is-an-embedded-submanifold` · proposition — The image of a smooth embedding is an embedded submanifold
- `cor-an-injective-immersion-from-a-compact-manifold-is-an-embedding` · corollary — An injective immersion from a compact manifold is an embedding
- `def-immersed-submanifold` · definition — Immersed submanifolds
- `prop-smoothness-into-an-embedded-submanifold-is-an-initial-property` · proposition — Smoothness into an embedded submanifold is an initial property
- `prop-smoothness-of-a-map-on-an-embedded-submanifold-is-local-in-the-ambient-space` · proposition — Smoothness of a map on an embedded submanifold is local in the ambient space
- `def-codimension-and-hypersurface` · definition — Codimension and hypersurfaces
- `def-local-defining-map-for-an-embedded-submanifold` · definition — Local defining maps for embedded submanifolds
- `thm-embedded-submanifolds-admit-local-defining-submersions` · theorem — Embedded submanifolds admit local defining submersions
- `thm-a-regular-level-set-is-an-embedded-submanifold` · theorem — A regular level set is an embedded submanifold
- `prop-tangent-space-of-a-regular-level-set-is-the-kernel` · proposition — The tangent space of a regular level set is the kernel
- `thm-preimage-theorem-for-submanifolds-under-submersions` · theorem — The preimage theorem for submanifolds under submersions
- `prop-the-diagonal-is-an-embedded-submanifold` · proposition — The diagonal is an embedded submanifold
- `prop-the-graph-of-a-smooth-map-is-an-embedded-submanifold` · proposition — The graph of a smooth map is an embedded submanifold
- `prop-transverse-intersections-of-coordinate-slices-have-the-expected-local-form` · proposition — Transverse intersections of coordinate slices have the expected local form
- `cor-a-discrete-embedded-submanifold-is-closed-locally-and-countable` · corollary — A discrete embedded submanifold is locally closed and countable
- `fs-every-injective-immersion-is-an-embedding` · false-statement — An injective immersion need not be an embedding
- `fs-the-image-of-every-immersion-is-an-embedded-submanifold` · false-statement — The image of every immersion need not be an embedded submanifold
- `fs-a-regular-value-must-belong-to-the-image` · false-statement — A regular value need not belong to the image
- `fs-constant-rank-at-one-point-implies-constant-rank-nearby` · false-statement — Rank at one point need not determine nearby rank
- `fs-every-embedded-submanifold-is-an-open-subset-of-the-ambient-manifold` · false-statement — An embedded submanifold need not be open in the ambient manifold
- `fs-the-intrinsic-topology-of-an-immersed-submanifold-is-always-the-subspace-topology` · false-statement — The intrinsic topology of an immersed submanifold need not be the subspace topology

### `rank-theorems-and-embedded-submanifolds-examples` — Rank Theorems and Embedded Submanifolds — Examples (8 item(s))

- `ex-coordinate-inclusions-and-projections-as-immersion-and-submersion` · example — Coordinate inclusions are immersions and coordinate projections are submersions
- `ex-the-special-linear-group-as-a-regular-level-set` · example — The special linear group is a codimension-one embedded submanifold
- `ex-a-cylinder-as-the-preimage-of-a-circle-under-projection` · example — A cylinder is the preimage of a circle under a projection
- `ex-the-graph-of-the-sine-function-as-an-embedded-submanifold` · example — The graph of the sine function is an embedded submanifold
- `ex-a-regular-value-with-empty-fibre` · example — A value outside the image can still be regular
- `cex-the-figure-eight-is-an-immersed-image-not-an-embedded-submanifold` · counterexample — A figure-eight curve is an immersed image but not an embedded submanifold
- `cex-countably-many-concentric-circles-give-an-injective-immersion-not-an-embedding` · counterexample — Countably many concentric circles give an injective immersion that is not an embedding
- `cex-a-rank-drop-at-a-point-need-not-persist-locally` · counterexample — A rank drop at one point need not persist locally

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
`research/frontier-25-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 — group reading digest, `frontier-25`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-8 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

Put a finding about another group's item in `alerts`, not `concerns`; the scope
tool routes it to that item's owning group before adjudication.
