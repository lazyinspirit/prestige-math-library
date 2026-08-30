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
group work, `research/frontier-25-alpha-groups.json` is the assignment: it permits at
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

run: frontier-25
role: alpha-adjudicate
label: step8-b
covers: 2, 3, 9

# Step 8 — group **b**, run `frontier-25`

You are the group Alpha for batches **2**, **3**, **9**: 4 A/B pair(s), 8 page(s), 135 item(s), 99 open rejection(s) over 99 item(s).

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

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-a-defective-jordan-block-has-ill-conditioned-eigenvectors` | `eigenvalue-iterations-and-the-qr-algorithm-examples` | gpt-5.6-terra | `00ae5f1c3c1774a8b3cf31d23b297c4f99ff388c167afb3ea73941d42d887752` |
| `cex-a-rank-drop-at-a-point-need-not-persist-locally` | `rank-theorems-and-embedded-submanifolds-examples` | gpt-5.6-terra | `8b9a4beb195f8a93ddc0d6e9a41ddd4c5491200cb657d5042e6df88746ecf260` |
| `cex-an-absolutely-continuous-finite-measure-can-have-an-unbounded-radon-nikodym-derivative` | `the-radon-nikodym-theorem-and-lebesgue-decomposition-examples` | gpt-5.6-terra | `dfbd7ff2685830f2876253e12c9e490278607d8b50464a6308213dae68140d20` |
| `cex-countably-many-concentric-circles-give-an-injective-immersion-not-an-embedding` | `rank-theorems-and-embedded-submanifolds-examples` | gpt-5.6-terra | `831b2a3fc20037d9b93c952c18d4ceb77cffc95fe643863c6060fbb31c46c4f6` |
| `cex-counting-measure-on-zero-one-shows-the-dominating-measure-needs-sigma-finiteness` | `the-radon-nikodym-theorem-and-lebesgue-decomposition-examples` | gpt-5.6-terra | `c450e8f6df4b75213a60d0d33f9e84212563b3a9d46730ef89421f902ce9b04a` |
| `cex-lebesgue-plus-counting-measure-has-no-lebesgue-decomposition-relative-to-lebesgue-measure` | `the-radon-nikodym-theorem-and-lebesgue-decomposition-examples` | gpt-5.6-terra | `6d8602fb55c3ce2da8c8e53cf3cc2d05e54d43013b30a0c328e5cbf69f169bab` |
| `cex-pseudoinversion-is-discontinuous-at-a-rank-changing-diagonal-family` | `the-moore-penrose-pseudoinverse-and-regularised-least-squares-examples` | gpt-5.6-terra | `7bb2c900063153eb57d23ca7bcaa9adc7e24a8d9688cd99637d206de912cb198` |
| `cex-the-figure-eight-is-an-immersed-image-not-an-embedded-submanifold` | `rank-theorems-and-embedded-submanifolds-examples` | gpt-5.6-terra | `d52a9c621423f809835289150143dea372008e1d2285288784414f9a10ea565c` |
| `cex-two-radon-nikodym-derivatives-can-differ-on-a-null-set` | `the-radon-nikodym-theorem-and-lebesgue-decomposition-examples` | gpt-5.6-terra | `2d9a37a6df6c31531c656b90af0c9c545192666b2bf538521ad4718024f24ec2` |
| `cex-x-inverse-dlambda-on-zero-one-shows-finiteness-is-needed-in-the-epsilon-delta-criterion` | `the-radon-nikodym-theorem-and-lebesgue-decomposition-examples` | gpt-5.6-terra | `3fda89f258a38fb6709c5d906dc55660fc47a1177ccb8585c87026de5e7fcc03` |
| `cor-a-discrete-embedded-submanifold-is-closed-locally-and-countable` | `rank-theorems-and-embedded-submanifolds` | gpt-5.6-terra | `83d16079a182f76f78943ad8c846cd7ddd68511d5e3cf23ebacb39fdd0d5c9d5` |
| `cor-an-injective-immersion-from-a-compact-manifold-is-an-embedding` | `rank-theorems-and-embedded-submanifolds` | gpt-5.6-terra | `b67b525951c54bdfebdba668a4589bd2318185bcf632f822e0d9babfd5350774` |
| `cor-finite-complex-measures-admit-integrable-radon-nikodym-densities` | `the-radon-nikodym-theorem-and-lebesgue-decomposition` | gpt-5.6-terra | `655e1152687128dee7ddf5761797481fb1d7e768a0997596e8ffab60beeed0e2` |
| `cor-reciprocal-rule-for-equivalent-sigma-finite-measures` | `the-radon-nikodym-theorem-and-lebesgue-decomposition` | gpt-5.6-terra | `ebde32cbd530f731d32d8bb73490d3a62301b2b0415cafd027dc75017c33a175` |
| `cor-the-immersion-and-submersion-loci-are-open` | `rank-theorems-and-embedded-submanifolds` | gpt-5.6-terra | `1d820fb8cf8c58e872778f20200fa14d7f20a4197692de956f7f7889042e1cb7` |
| `def-eigenpair-residual-and-normwise-backward-error` | `eigenvalue-iterations-and-the-qr-algorithm` | gpt-5.6-terra | `5d1fb6709a1dacd3dbdb6a93aa4b6f2d2eae9d1049e72f3a586bc76170a74c9d` |
| `def-embedded-submanifold-and-slice-chart` | `rank-theorems-and-embedded-submanifolds` | gpt-5.6-terra | `9fc2581c7cad6ce2769cad40feb5e3cc97ac4fed78447070e88d912a931d919e` |
| `def-inverse-and-shifted-inverse-iteration` | `eigenvalue-iterations-and-the-qr-algorithm` | gpt-5.6-terra | `a3c013a94c1f640a8cea3334f2e9d5f73d1b4e3384f178deded0a95b6b9d1d59` |
| `def-power-iteration` | `eigenvalue-iterations-and-the-qr-algorithm` | gpt-5.6-terra | `aeaf2a499e1a5f89892f5573966bd59e425c3d866a1272897c5b6d723e927897` |
| `def-rank-of-a-smooth-map-at-a-point` | `rank-theorems-and-embedded-submanifolds` | gpt-5.6-terra | `d3a0ea0e97bcc1caddd3903f425cb5893d9da014ded3e89d72bb711dba103543` |
| `def-rayleigh-quotient-iteration` | `eigenvalue-iterations-and-the-qr-algorithm` | gpt-5.6-terra | `35e8db7935f40801bacdc7e2a35d0db47089c03b62efe3efb8271396e719037a` |
| `def-subspace-iteration-and-the-dominant-invariant-subspace` | `eigenvalue-iterations-and-the-qr-algorithm` | gpt-5.6-terra | `b14aee95e8a4c0e56a7f21acd2485a507fc512949e6d5feb353d50c03986e65e` |
| `def-tikhonov-regularised-least-squares` | `the-moore-penrose-pseudoinverse-and-regularised-least-squares` | gpt-5.6-terra | `933d39246f626c5a0607b989e600b0ff829d968d5fb838f7e26836155b9aa252` |
| `def-truncated-singular-value-pseudoinverse-at-a-declared-threshold` | `the-moore-penrose-pseudoinverse-and-regularised-least-squares` | gpt-5.6-terra | `cc467384ca20df1f73aba40e470577729e210d8e92033d037803262bdf9b9789` |
| `def-unshifted-and-shifted-qr-iteration-with-deflation-and-wilkinson-shift` | `eigenvalue-iterations-and-the-qr-algorithm` | gpt-5.6-terra | `8ee176b2ece83545c9b74e84a59926f780be9b62e80d92901f5f6207619ffae2` |
| `ex-a-cylinder-as-the-preimage-of-a-circle-under-projection` | `rank-theorems-and-embedded-submanifolds-examples` | gpt-5.6-terra | `b74ee129ccd057ce1a105fd46b423eff147b17c10d3efcc5a959ddd58c2ba249` |
| `ex-a-piecewise-quadratic-distribution-function-recovers-its-density` | `the-radon-nikodym-theorem-and-lebesgue-decomposition-examples` | gpt-5.6-terra | `deb666ae70c3ac1f8825fc79aba6358b82d1588c5f4fc95e225e6167de3604c4` |
| `ex-a-regular-value-with-empty-fibre` | `rank-theorems-and-embedded-submanifolds-examples` | gpt-5.6-terra | `cc333ef47ed6d4bc557e588b9da3510326b979a549d090fdecc35cf7e3d321c9` |
| `ex-an-overdetermined-inconsistent-system-and-its-minimum-norm-least-squares-solution` | `the-moore-penrose-pseudoinverse-and-regularised-least-squares-examples` | gpt-5.6-terra | `70fac63f4349c1c787e328fb771923c014df2dd533bdfc9eac25cd4156b7c1a3` |
| `ex-an-underdetermined-system-and-its-minimum-norm-exact-solution` | `the-moore-penrose-pseudoinverse-and-regularised-least-squares-examples` | gpt-5.6-terra | `8241480376cf672c8b874dd2dc9433a978f2204ef383cab0d2b677e9ba17e071` |
| `ex-coordinate-inclusions-and-projections-as-immersion-and-submersion` | `rank-theorems-and-embedded-submanifolds-examples` | gpt-5.6-terra | `0346dd77570aaf90848b35e5f508f08b7a20bdd1325421f5344e5b80db34c417` |
| `ex-householder-reduction-to-hessenberg-form-for-a-three-by-three-matrix` | `eigenvalue-iterations-and-the-qr-algorithm-examples` | gpt-5.6-terra | `c4c8191b5c632c694bd607852506b800fedcc0c89c1aeeff945504cf9b637a24` |
| `ex-power-iteration-on-a-diagonal-matrix-displays-the-eigenvalue-ratio-rate` | `eigenvalue-iterations-and-the-qr-algorithm-examples` | gpt-5.6-terra | `e4a696696962277b043db3618f373125e308695af196b1b491c1a28ac05bdc55` |
| `ex-rayleigh-quotient-iteration-on-a-two-by-two-symmetric-matrix` | `eigenvalue-iterations-and-the-qr-algorithm-examples` | gpt-5.6-terra | `0bbefacbcac812fbe4c8c3ba4e0c57047cbe8eb8ccc21d05e6d0855d2d5af167` |
| `ex-shifted-inverse-iteration-targets-a-nondominant-eigenvalue` | `eigenvalue-iterations-and-the-qr-algorithm-examples` | gpt-5.6-terra | `27e9216f18d8c5b2d2b7b700b57ae7acb048c84a03933cab33186f844fd8ac76` |
| `ex-the-chain-rule-for-radon-nikodym-derivatives-on-zero-one` | `the-radon-nikodym-theorem-and-lebesgue-decomposition-examples` | gpt-5.6-terra | `4a22cd4e45129099c62af892f5ed531eba75e9b780309ef264bad39be6ff00fe` |
| `ex-the-density-two-x-on-zero-one-is-the-radon-nikodym-derivative-of-two-x-indicator-dlambda` | `the-radon-nikodym-theorem-and-lebesgue-decomposition-examples` | gpt-5.6-terra | `bfe9c455f418e71b5846519a4157c43cb41f53efdb7d33a32c130ce54294fdbd` |
| `ex-the-graph-of-the-sine-function-as-an-embedded-submanifold` | `rank-theorems-and-embedded-submanifolds-examples` | gpt-5.6-terra | `584d6be25e6e3bfe0b603d5bac01078628a369da0d990130821f667104ad5ee0` |
| `ex-the-lebesgue-decomposition-of-half-lebesgue-plus-half-cantor-measure` | `the-radon-nikodym-theorem-and-lebesgue-decomposition-examples` | gpt-5.6-terra | `9bf0cab848d17f0fd808c031ed3fe1f743b9aad84983e912e92edaf369e7c3f9` |
| `ex-the-special-linear-group-as-a-regular-level-set` | `rank-theorems-and-embedded-submanifolds-examples` | gpt-5.6-terra | `9e97cac3522f929ce1d35cd4e5d39b9b0f936c246d5ad87ae24265edac61f71d` |
| `ex-wilkinson-shifted-qr-deflates-a-symmetric-tridiagonal-tail` | `eigenvalue-iterations-and-the-qr-algorithm-examples` | gpt-5.6-terra | `fa532895d07ae77d5b2c1874881d625b2d959b97d64e17b7deb912a0f76eab9d` |
| `fs-a-regular-value-must-belong-to-the-image` | `rank-theorems-and-embedded-submanifolds` | gpt-5.6-terra | `deb7ab97345c5999cea74484616009952131db259ded521e651c0b92a68c09b8` |
| `fs-absolutely-continuous-measures-always-have-bounded-radon-nikodym-derivatives` | `the-radon-nikodym-theorem-and-lebesgue-decomposition-examples` | gpt-5.6-terra | `0dcb017cac98e0ee35140a9be34f7fa885c321ef1b35f832d390dcca6e88d9f5` |
| `fs-constant-rank-at-one-point-implies-constant-rank-nearby` | `rank-theorems-and-embedded-submanifolds` | gpt-5.6-terra | `1d9b9624eb82f9b7b62cdd8d11b4f3c69742dd36c2e4a4f156334519330c00d6` |
| `fs-every-measure-is-absolutely-continuous-or-singular-with-respect-to-lebesgue-measure` | `the-radon-nikodym-theorem-and-lebesgue-decomposition-examples` | gpt-5.6-terra | `f161dfcfc99bc738586aab2541ffc1c59cb2ff0434868c155ee37c90303313d0` |
| `fs-the-epsilon-delta-condition-characterises-absolute-continuity-for-every-measure` | `the-radon-nikodym-theorem-and-lebesgue-decomposition-examples` | gpt-5.6-terra | `7edf5b640a656bd9075b51bb2f8aceb508b09937a4980940164f0ec5d48fae23` |
| `fs-the-image-of-every-immersion-is-an-embedded-submanifold` | `rank-theorems-and-embedded-submanifolds` | gpt-5.6-terra | `d810c321e59473fb90cdc75f848fa7960ca5cd2267cfea2c7487f65d4424877c` |
| `fs-the-intrinsic-topology-of-an-immersed-submanifold-is-always-the-subspace-topology` | `rank-theorems-and-embedded-submanifolds` | gpt-5.6-terra | `36c48a7db23b9f7adb30a0a4c96922aea74138f42651e58190a7b60ebbb2c22f` |
| `fs-the-radon-nikodym-derivative-is-a-uniquely-determined-function` | `the-radon-nikodym-theorem-and-lebesgue-decomposition-examples` | gpt-5.6-terra | `b154aa0292c373518f7b35bbd4221c2d4c75a5d2347d78c3d14f50ec1fcf686f` |
| `fs-the-radon-nikodym-theorem-holds-without-sigma-finiteness` | `the-radon-nikodym-theorem-and-lebesgue-decomposition-examples` | gpt-5.6-terra | `707121c7268d9b42d6dd503c295b1f30b6e5e16710926c355983bea44bcaea9b` |
| `lem-slice-chart-restrictions-form-a-smooth-atlas` | `rank-theorems-and-embedded-submanifolds` | gpt-5.6-terra | `d46359502f56401a68248602780eb507566fdfe182a6e26f72bab1836876304b` |
| `prop-a-smooth-map-of-locally-maximal-rank-has-locally-constant-rank` | `rank-theorems-and-embedded-submanifolds` | gpt-5.6-terra | `68b6b418c02a2c4e34ed7615eae2ec275e42e40080bad3636f83729323e89174` |
| `prop-eigenpair-residual-thresholds-give-backward-error-stopping-rules` | `eigenvalue-iterations-and-the-qr-algorithm` | gpt-5.6-terra | `d52043ed0592966c1fd052703a9ab5d2c708ee7f3344d01b1ca302c748866e23` |
| `prop-full-column-rank-pseudoinverse-formula` | `the-moore-penrose-pseudoinverse-and-regularised-least-squares` | gpt-5.6-terra | `800ba411af469cf660b3d31ebbc6fb9f122adb6294e27b5dc46734b7b421f62c` |
| `prop-full-row-rank-pseudoinverse-formula` | `the-moore-penrose-pseudoinverse-and-regularised-least-squares` | gpt-5.6-terra | `6321772622afe1ed6a525c32b41b2355e19574d4f1c9ef5987e1f18d3d55b9b0` |
| `prop-hermitian-rayleigh-quotient-stationary-points-and-residual-gradient` | `eigenvalue-iterations-and-the-qr-algorithm` | gpt-5.6-terra | `4e7fc35e134de198dd09fc3bd20d435e77dfec2d2486ae99bde9f866192bca08` |
| `prop-pseudoinversion-is-involutive-adjoint-compatible-and-unitarily-equivariant` | `the-moore-penrose-pseudoinverse-and-regularised-least-squares` | gpt-5.6-terra | `d7cc676933988d9be2a40542b5018743e27822e4c1fe7ec7b5b603758318b18d` |
| `prop-rayleigh-quotient-and-residual-converge-along-hermitian-power-iteration` | `eigenvalue-iterations-and-the-qr-algorithm` | gpt-5.6-terra | `1de53b03a660962c1c4d8b53a862f042b4716e05d72cabbb7b1e320acbb038a5` |
| `prop-reduced-qr-formulas-for-full-rank-pseudoinverses` | `the-moore-penrose-pseudoinverse-and-regularised-least-squares` | gpt-5.6-terra | `5c5101e7c005aeaa0998eec678e2c6d4ef193adfb5b32123f35d72a744860c7c` |
| `prop-smoothness-into-an-embedded-submanifold-is-an-initial-property` | `rank-theorems-and-embedded-submanifolds` | gpt-5.6-terra | `60dd4d29b2d0ee809b566b4369fe47ca464be53813c7e2e03846f9cb7ce3777f` |
| `prop-smoothness-of-a-map-on-an-embedded-submanifold-is-local-in-the-ambient-space` | `rank-theorems-and-embedded-submanifolds` | gpt-5.6-terra | `3088980a6af192b5f1d85d731d1a0f8834581a8d0558f0796040994bfd94fb7d` |
| `prop-tangent-space-of-a-regular-level-set-is-the-kernel` | `rank-theorems-and-embedded-submanifolds` | gpt-5.6-terra | `3707b97eeeae081a4e98ea8c930c84744fb61d37e7c23a6292504ec21cb0c00b` |
| `prop-the-diagonal-is-an-embedded-submanifold` | `rank-theorems-and-embedded-submanifolds` | gpt-5.6-terra | `1dfd2bb1ee2ebffe3abf96d7faa052b0602ee6b82e9174f852e312d6097d6286` |
| `prop-the-graph-of-a-smooth-map-is-an-embedded-submanifold` | `rank-theorems-and-embedded-submanifolds` | gpt-5.6-terra | `e03bef9cf6a6463b90198e29f8fad2d73d1160efd062f25f34f3bca9de470f5e` |
| `prop-the-image-of-a-smooth-embedding-is-an-embedded-submanifold` | `rank-theorems-and-embedded-submanifolds` | gpt-5.6-terra | `5bbfcab989a1c631042d5a079ff672dcf3839272d1df444a586280d5d18219ac` |
| `prop-the-radon-nikodym-derivative-is-integrable-exactly-when-the-absolutely-continuous-part-is-finite` | `the-radon-nikodym-theorem-and-lebesgue-decomposition` | gpt-5.6-terra | `b1d8a1a523c6dca25d9976a583853e0e869ece35206d3e2c28b2f9be3d45f092` |
| `prop-the-smooth-structure-of-an-embedded-submanifold-is-unique` | `rank-theorems-and-embedded-submanifolds` | gpt-5.6-terra | `dcec15447c38520128222ef6c9f573a99c8003b593657f976651832c04d58c7d` |
| `prop-tikhonov-regularisation-has-singular-filter-factors` | `the-moore-penrose-pseudoinverse-and-regularised-least-squares` | gpt-5.6-terra | `7ac7e6170b33d252acf85de113d88c9e442b4063fe6c48b13f9a3455890d169e` |
| `prop-transverse-intersections-of-coordinate-slices-have-the-expected-local-form` | `rank-theorems-and-embedded-submanifolds` | gpt-5.6-terra | `420a3f58e0b949038d0dbe9ec5ed4ecebdb8b68621d91e62df96520daf5c3eec` |
| `prop-truncated-svd-and-tikhonov-are-hard-and-smooth-spectral-filters` | `the-moore-penrose-pseudoinverse-and-regularised-least-squares` | gpt-5.6-terra | `22ee4d41c101ca6d5567cced32508549523199968465b26e5328b967e9806b83` |
| `prop-unshifted-qr-is-orthonormalised-simultaneous-iteration-and-preserves-unitary-similarity` | `eigenvalue-iterations-and-the-qr-algorithm` | gpt-5.6-terra | `c1694b097d16a7be1e4ee67dddb4fce7c87f4fb9e09175efc55934318b84c5c1` |
| `thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution` | `the-moore-penrose-pseudoinverse-and-regularised-least-squares` | gpt-5.6-terra | `696b01d04a6380220d6973d4a351776f710ef0148d4d5daab2108b2ade2b6df2` |
| `thm-a-regular-level-set-is-an-embedded-submanifold` | `rank-theorems-and-embedded-submanifolds` | gpt-5.6-terra | `c9724f2acc1efbf0be0b883219658655d5cae145e7df16adb421ccba6ae39925` |
| `thm-aa-plus-and-a-plus-a-are-orthogonal-projections-onto-the-image-spaces` | `the-moore-penrose-pseudoinverse-and-regularised-least-squares` | gpt-5.6-terra | `87bef15e73b9653f17774df7ebf6d584f7761ce500a28a9a28f39059ffdcca84` |
| `thm-absolute-continuity-is-equivalent-for-a-signed-or-complex-measure-its-variation-and-its-jordan-data` | `the-radon-nikodym-theorem-and-lebesgue-decomposition` | gpt-5.6-terra | `abd546d24748f140a7d4a8396b5f0e3312a65f5fe3fcce23d879337d9af53a54` |
| `thm-additivity-of-radon-nikodym-derivatives` | `the-radon-nikodym-theorem-and-lebesgue-decomposition` | gpt-5.6-terra | `9b235dd6947d83b1e17691dd8809cd5f76b519deb8ed0cedc216ec59552f444d` |
| `thm-chain-rule-for-radon-nikodym-derivatives` | `the-radon-nikodym-theorem-and-lebesgue-decomposition` | gpt-5.6-terra | `da31a2bd7b171932addc314ed40af10640d7eb9907912259f0781d8e8c79acc3` |
| `thm-constant-rank-theorem-for-manifolds` | `rank-theorems-and-embedded-submanifolds` | gpt-5.6-terra | `4d4926647d142164335c7a26da28575a61bda7e281e5c1e778e3eb002654113b` |
| `thm-eigenpair-residual-realises-the-minimum-norm-backward-error` | `eigenvalue-iterations-and-the-qr-algorithm` | gpt-5.6-terra | `8551592011229ca38ef2adbb553ae7fc88fd2548602836961362ff8b05bea4c5` |
| `thm-epsilon-delta-characterisation-of-absolute-continuity-for-finite-signed-or-complex-measures` | `the-radon-nikodym-theorem-and-lebesgue-decomposition` | gpt-5.6-terra | `a514009b24f66dcb6abec53121a2064d761c06ff24c89d9a94f97cf061551b25` |
| `thm-finite-borel-measures-on-r-have-a-unique-absolutely-continuous-discrete-and-singular-continuous-decomposition` | `the-radon-nikodym-theorem-and-lebesgue-decomposition` | gpt-5.6-terra | `4ac265ba6b1717438824646986f79861327cfaaf015ed3ad7cb11a85d285b966` |
| `thm-hermitian-rayleigh-quotient-iteration-has-local-cubic-convergence` | `eigenvalue-iterations-and-the-qr-algorithm` | gpt-5.6-terra | `11b780164f07021c134c0a3d99730c726e227c085b44ea112c66214b12354d15` |
| `thm-householder-similarity-reduces-to-hessenberg-and-tridiagonal-form` | `eigenvalue-iterations-and-the-qr-algorithm` | gpt-5.6-terra | `3887bf7e0ec39f41e62feaca86f8c2c9c57dc69fd54bc86d089a32b7be6c7793` |
| `thm-integration-against-a-radon-nikodym-derivative` | `the-radon-nikodym-theorem-and-lebesgue-decomposition` | gpt-5.6-terra | `42a71b1642aa9b0faa0194936b664f1b218c2172073855735e8b4b8fda84b0ab` |
| `thm-least-squares-solutions-form-an-affine-kernel-translate-of-a-plus-b` | `the-moore-penrose-pseudoinverse-and-regularised-least-squares` | gpt-5.6-terra | `38e7e3676de977886a31b2b9d0a69a5e38c37fa2e87d5ee9870bd9ae3592eb5a` |
| `thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures` | `the-radon-nikodym-theorem-and-lebesgue-decomposition` | gpt-5.6-terra | `b8ad0c1b725c8563677493c290c5a04e1935f698b2960e2e3b5a4142aaa8028c` |
| `thm-lebesgue-decomposition-is-unique-for-sigma-finite-signed-measures` | `the-radon-nikodym-theorem-and-lebesgue-decomposition` | gpt-5.6-terra | `eafd79e7830e44cd9dd9c2cf17cd6de7e42f8610904ba56ffc3333c0c28ceb89` |
| `thm-polar-decomposition-for-signed-and-complex-measures` | `the-radon-nikodym-theorem-and-lebesgue-decomposition` | gpt-5.6-terra | `f57fb80fff8fba9a733a6c74bf0ca695e8f9fb70594f93d65248aba2e8a508a9` |
| `thm-power-iteration-converges-projectively-under-a-simple-strictly-dominant-eigenvalue` | `eigenvalue-iterations-and-the-qr-algorithm` | gpt-5.6-terra | `6a12b6ce814281a2b9010f414cff0227f46b0d248bcbe53d88dd2e3370724935` |
| `thm-preimage-theorem-for-submanifolds-under-submersions` | `rank-theorems-and-embedded-submanifolds` | gpt-5.6-terra | `35f9d98cd2be5d670e55252e3f59dc619b827dcb68a493dc5c74564109eb737f` |
| `thm-pseudoinversion-is-continuous-on-each-fixed-rank-stratum-and-discontinuous-at-rank-loss` | `the-moore-penrose-pseudoinverse-and-regularised-least-squares` | gpt-5.6-terra | `192ed219e2e931b9f3d3f9724423778c7ef23ba02e5497b1e510b767ca3f251b` |
| `thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality` | `the-radon-nikodym-theorem-and-lebesgue-decomposition` | gpt-5.6-terra | `d1ccdd69bde8512393538b305063ca8ffa05e0d7c09926e066ec0d17d97697df` |
| `thm-shifted-inverse-iteration-converges-to-the-simple-eigenvalue-nearest-the-shift` | `eigenvalue-iterations-and-the-qr-algorithm` | gpt-5.6-terra | `6d31d1b4c27eb07b017cf3d675508b88592247bf2242445dd7f56683ea91f953` |
| `thm-smooth-inverse-function-theorem-on-manifolds` | `rank-theorems-and-embedded-submanifolds` | gpt-5.6-terra | `0736c805f3109ddcb1f16acd9312da232ee792894f22584a6e0a7c4373715ba1` |
| `thm-subspace-iteration-converges-to-the-dominant-invariant-subspace-under-a-spectral-gap` | `eigenvalue-iterations-and-the-qr-algorithm` | gpt-5.6-terra | `1cf51a5c83e839d5f2d6c8e52ba20b4b07aedad5163c43e05af5b409a8776f3c` |
| `thm-tikhonov-regularised-least-squares-has-a-unique-minimiser` | `the-moore-penrose-pseudoinverse-and-regularised-least-squares` | gpt-5.6-terra | `af743e9488719075adc24f44059eca024906a89b8cf98dfcb366bfc5cbf0eda7` |
| `thm-tikhonov-regularised-solutions-converge-to-the-pseudoinverse-solution` | `the-moore-penrose-pseudoinverse-and-regularised-least-squares` | gpt-5.6-terra | `8c2538b3abb704eef06886b23f0d50cf276983661deb5789de1c27e01a8a4cc3` |
| `thm-unshifted-qr-converges-under-separated-moduli-and-leading-minor-hypotheses` | `eigenvalue-iterations-and-the-qr-algorithm` | gpt-5.6-terra | `88cd7a344aad3af663e6e9d039a953857c89abee7c38f400a87fd95efe94e6e4` |
| `thm-wilkinson-shifted-symmetric-tridiagonal-qr-has-local-deflation-away-from-ties` | `eigenvalue-iterations-and-the-qr-algorithm` | gpt-5.6-terra | `134a309de8258de9bcf33e33868d7bf46fd8730a912b5585518d2899d401282f` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — fatal-only configured-judge adjudication, `frontier-25`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/frontier-25-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set.

For an incoming alert, append the owning-group disposition to
`research/frontier-25-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-25-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-25-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
