# Step 8 — group **a**, run `frontier-27`

You are the group Alpha for batches **2**, **3**, **4**: 3 A/B pair(s), 6 page(s), 106 item(s), 0 open rejection(s) over 0 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-27-alpha-a-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-27-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 2 | `conjugate-gradients-minres-and-preconditioning` | A | linear-algebra | 288.000061 | `krylov-subspaces-arnoldi-and-gmres`, `convex-and-semicontinuous-functions-on-rn` |
| 2 | `conjugate-gradients-minres-and-preconditioning-examples` | B | linear-algebra | 288.000062 | `conjugate-gradients-minres-and-preconditioning` |
| 3 | `density-separability-and-convolution-in-lp` | A | measure-theory | 288.029 | `the-lp-spaces-holder-minkowski-and-riesz-fischer-examples` |
| 3 | `density-separability-and-convolution-in-lp-examples` | B | measure-theory | 288.03 | `density-separability-and-convolution-in-lp` |
| 4 | `normed-and-banach-spaces` | A | functional-analysis | 288.047 | `rn-as-a-normed-space`, `completeness-and-uniform-continuity`, `the-lp-spaces-holder-minkowski-and-riesz-fischer` |
| 4 | `normed-and-banach-spaces-examples` | B | functional-analysis | 288.048 | `normed-and-banach-spaces` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `conjugate-gradients-minres-and-preconditioning` — Conjugate Gradients, MINRES and Preconditioning (21 item(s))

- `def-energy-inner-product-and-norm-for-a-hermitian-positive-definite-matrix` · definition — The energy inner product $\langle u,v\rangle_A=\langle Au,v\rangle$ and energy norm $\|u\|_A$ for a Hermitian positive-definite matrix
- `def-quadratic-energy-of-a-hermitian-positive-definite-linear-system` · definition — The quadratic energy $\phi(x)=\tfrac12\langle Ax,x\rangle-\operatorname{Re}\langle b,x\rangle$ of a Hermitian positive-definite linear system
- `thm-hermitian-positive-definite-linear-system-has-a-unique-energy-minimizer` · theorem — For Hermitian positive-definite $A$, the exact solution of $Ax=b$ is the unique minimizer of the quadratic energy
- `def-krylov-galerkin-iterate-for-a-hermitian-positive-definite-system` · definition — The $m$th Krylov Galerkin iterate in the affine space $x_0+K_m(A,r_0)$ for a Hermitian positive-definite system
- `prop-galerkin-orthogonality-for-a-krylov-galerkin-iterate` · proposition — Galerkin orthogonality turns residual orthogonality into $A$-orthogonality of the error, and the Galerkin iterate is unique
- `def-conjugate-gradient-recurrence` · definition — The conjugate-gradient recurrence
- `prop-conjugate-gradient-denominators-are-positive-before-convergence` · proposition — Before convergence, every CG denominator $p_k^*Ap_k$ is positive
- `thm-conjugate-gradient-residuals-are-orthogonal-and-search-directions-are-a-conjugate` · theorem — In exact arithmetic, CG residuals are mutually orthogonal and the search directions are $A$-conjugate
- `thm-conjugate-gradient-is-the-krylov-galerkin-method-and-minimizes-the-energy-error` · theorem — CG is the Krylov Galerkin method, and the $m$th iterate uniquely minimizes the $A$-norm of the error over $x_0+K_m(A,r_0)$
- `thm-conjugate-gradient-terminates-by-the-relative-grade-in-exact-arithmetic` · theorem — In exact arithmetic, CG terminates no later than the relative grade and hence in at most $n$ steps
- `thm-conjugate-gradient-chebyshev-bound-in-the-a-norm` · theorem — CG obeys the Chebyshev $A$-norm bound in terms of the spectral condition number $\kappa_2(A)$
- `rem-floating-point-conjugate-gradients-can-lose-orthogonality-conjugacy-and-finite-termination` · remark — In floating-point arithmetic, CG can lose exact residual orthogonality, $A$-conjugacy, and the finite-termination guarantee
- `def-lanczos-process-as-hermitian-arnoldi` · definition — The Lanczos process as Arnoldi specialized to a Hermitian matrix, with the usual real-subdiagonal phase convention
- `thm-hermitian-arnoldi-collapses-to-the-lanczos-three-term-recurrence` · theorem — With a Hermitian matrix, Arnoldi collapses to the Lanczos three-term recurrence and a real symmetric tridiagonal projection
- `def-minres-iterate-from-the-lanczos-tridiagonalization` · definition — The MINRES iterate from the Lanczos tridiagonal least-squares problem
- `thm-minres-minimizes-the-euclidean-residual-over-the-hermitian-krylov-space` · theorem — For Hermitian $A$, including the indefinite case, MINRES minimizes the Euclidean residual over $x_0+K_m(A,r_0)$
- `def-stationary-iteration-from-a-matrix-splitting` · definition — Stationary iteration from a matrix splitting $A=M-N$
- `thm-stationary-splitting-converges-iff-the-iteration-matrix-has-spectral-radius-below-one` · theorem — A stationary splitting converges for every start if and only if its iteration matrix has spectral radius below $1$
- `def-left-right-and-symmetric-positive-definite-preconditioning` · definition — Left preconditioning, right preconditioning, and symmetric preconditioning of a linear system
- `prop-invertible-preconditioners-give-equivalent-linear-systems-with-explicit-residual-maps` · proposition — Invertible preconditioners give equivalent linear systems, with the transformed residuals and errors written explicitly
- `thm-symmetric-positive-definite-preconditioning-preserves-the-hermitian-positive-definite-cg-problem` · theorem — Symmetric positive-definite preconditioning preserves a Hermitian positive-definite CG problem, and the CG bound uses the transformed condition number

### `conjugate-gradients-minres-and-preconditioning-examples` — Conjugate Gradients, MINRES and Preconditioning: Examples and Counterexamples (9 item(s))

- `ex-conjugate-gradients-on-a-two-by-two-hermitian-positive-definite-system` · example — CG on a $2\times2$ Hermitian positive-definite system reaches the solution in at most two steps
- `ex-conjugate-gradients-can-terminate-at-a-relative-grade-smaller-than-the-dimension` · example — CG can terminate at a relative grade strictly smaller than the ambient dimension
- `ex-clustered-eigenvalues-give-a-better-cg-bound-than-spread-eigenvalues` · example — Clustered eigenvalues give a visibly better CG condition-number bound than equally sized spread spectra
- `cex-conjugate-gradients-can-break-on-a-symmetric-indefinite-system` · counterexample — A symmetric indefinite matrix can make the CG denominator vanish or change sign before convergence
- `cex-conjugate-gradients-does-not-apply-to-a-nonsymmetric-invertible-matrix` · counterexample — A nonsymmetric invertible matrix does not fit the CG orthogonality and minimization theory
- `ex-minres-on-a-symmetric-indefinite-system` · example — MINRES still minimizes the residual on a small symmetric indefinite system
- `ex-jacobi-and-gauss-seidel-splittings-with-spectral-radius-comparison` · example — Jacobi and Gauss-Seidel splittings can be compared by the spectral radii of their iteration matrices
- `ex-diagonal-spd-preconditioning-improves-the-preconditioned-condition-number` · example — A diagonal positive-definite preconditioner can improve the relevant condition number
- `cex-a-preconditioner-can-worsen-the-preconditioned-condition-number` · counterexample — A preconditioner can worsen the condition number that actually controls CG

### `density-separability-and-convolution-in-lp` — Density Separability and Convolution in $L^p$ (35 item(s))

- `def-translation-of-a-function-on-rn` · definition — Translation of a function on $\mathbb{R}^n$
- `def-c-c-and-c-c-infinity-on-rn` · definition — The spaces $C_c(\mathbb{R}^n)$ and $C_c^\infty(\mathbb{R}^n)$
- `def-c-zero-on-rn` · definition — The space $C_0(\mathbb{R}^n)$ of continuous functions vanishing at infinity
- `def-convolution-of-two-functions-on-rn` · definition — Convolution of two functions on $\mathbb{R}^n$
- `def-l-one-approximate-identity-on-rn` · definition — An $L^1$ approximate identity on $\mathbb{R}^n$
- `def-mollifier-family-generated-by-a-unit-mass-smooth-bump` · definition — The mollifier family generated by a unit-mass smooth bump
- `thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p` · theorem — Simple functions with finite-measure support are dense in $L^p(\mu)$ for $1 \le p < \infty$
- `thm-simple-functions-are-dense-in-l-infinity-in-essential-supremum` · theorem — Simple functions are dense in $L^\infty(\mu)$ in the essential-supremum norm
- `lem-finite-measure-sets-are-approximable-by-finite-unions-of-boxes` · lemma — A finite-measure measurable set in $\mathbb{R}^n$ is approximable in measure by a finite union of boxes
- `thm-box-step-functions-are-dense-in-l-p-of-rn` · theorem — Finite linear combinations of box indicators are dense in $L^p(\mathbb{R}^n)$ for $1 \le p < \infty$
- `lem-a-compact-set-inside-a-bounded-open-set-admits-an-explicit-compactly-supported-cutoff` · lemma — A compact set inside a bounded open set admits an explicit compactly supported continuous cutoff
- `lem-finite-measure-sets-admit-compact-open-sandwiches-with-small-excess` · lemma — A finite-measure measurable set in $\mathbb{R}^n$ has a compact core and a bounded open neighbourhood of arbitrarily small excess
- `thm-c-c-rn-is-dense-in-l-p-of-rn` · theorem — $C_c(\mathbb{R}^n)$ is dense in $L^p(\mathbb{R}^n)$ for $1 \le p < \infty$
- `thm-l-infinity-closure-of-c-c-rn-is-c-zero-rn` · theorem — The $L^\infty$-closure of $C_c(\mathbb{R}^n)$ is $C_0(\mathbb{R}^n)$, not all of $L^\infty(\mathbb{R}^n)$
- `thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn` · theorem — Rational box-step functions form a countable dense subset of $L^p(\mathbb{R}^n)$ for $1 \le p < \infty$
- `lem-countable-generators-yield-countable-set-algebras` · lemma — A countable generator of a sigma-algebra yields a countable algebra of sets
- `lem-finite-measure-sets-are-approximable-by-a-countable-generating-algebra` · lemma — Finite-measure sets are approximable in measure by sets from a countable generating algebra
- `thm-l-p-of-a-sigma-finite-countably-generated-measure-space-is-separable` · theorem — If $\mu$ is sigma-finite and $\mathcal{A}$ is countably generated, then $L^p(\mu)$ is separable for $1 \le p < \infty$
- `thm-l-infinity-of-unit-interval-is-not-separable` · theorem — $L^\infty[0,1]$ is not separable
- `lem-compactly-supported-continuous-functions-are-translation-continuous-in-l-p` · lemma — Continuous compactly supported functions are translation-continuous in $L^p$
- `thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity` · theorem — $\|\tau_h f - f\|_p \to 0$ in $L^p(\mathbb{R}^n)$ as $h \to 0$, for $1 \le p < \infty$
- `lem-borel-representatives-make-the-convolution-integrand-borel-measurable` · lemma — Borel representatives make the convolution integrand Borel measurable
- `lem-convolution-is-independent-of-the-chosen-borel-representatives` · lemma — Convolution on $L^1(\mathbb{R}^n)$ is independent of the chosen Borel representatives
- `thm-l-one-convolution-exists-almost-everywhere-and-obeys-the-l-one-bound` · theorem — If $f,g \in L^1(\mathbb{R}^n)$, then $f*g$ exists almost everywhere, belongs to $L^1$, and $\|f*g\|_1 \le \|f\|_1 \|g\|_1$
- `prop-l-one-convolution-is-bilinear-commutative-and-associative` · proposition — Convolution on $L^1(\mathbb{R}^n)$ is bilinear, commutative, and associative
- `thm-support-of-a-convolution-lies-in-the-closure-of-the-support-sumset` · theorem — The support of a convolution lies in the closure of the support sumset
- `lem-elementary-duality-formula-for-nonnegative-l-p-functions` · lemma — For $1 < p < \infty$, the $L^p$ norm of a nonnegative function is the supremum of its pairings with $L^q$ unit vectors
- `thm-minkowski-integral-inequality` · theorem — Minkowski's integral inequality
- `thm-young-convolution-inequality` · theorem — Young's convolution inequality
- `cor-convolution-of-conjugate-l-p-and-l-q-functions-is-continuous-and-vanishes-at-infinity` · corollary — If $1/p + 1/q = 1$, then $f*g$ is continuous and vanishes at infinity
- `prop-mollifier-families-are-l-one-approximate-identities` · proposition — A unit-mass smooth bump generates an $L^1$ approximate identity
- `thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign` · theorem — Convolution with a mollifier is smooth, and derivatives pass under the integral sign
- `thm-l-one-approximate-identities-converge-in-l-p` · theorem — Every $L^1$ approximate identity converges to the identity in $L^p$ for $1 \le p < \infty$
- `cor-l-one-approximate-identities-converge-uniformly-on-compacta-for-continuous-functions` · corollary — $L^1$ approximate identities converge uniformly on compacta for continuous functions
- `thm-c-c-infinity-rn-is-dense-in-l-p-of-rn` · theorem — $C_c^\infty(\mathbb{R}^n)$ is dense in $L^p(\mathbb{R}^n)$ for $1 \le p < \infty$

### `density-separability-and-convolution-in-lp-examples` — Density Separability and Convolution in $L^p$ — Examples (12 item(s))

- `ex-indicator-of-the-unit-interval-convolved-with-itself-is-the-tent-function` · example — $\mathbf{1}_{[0,1]} * \mathbf{1}_{[0,1]}$ is the tent function
- `ex-mollifying-the-unit-interval-indicator-at-two-scales` · example — Mollifying $\mathbf{1}_{[0,1]}$ at two scales
- `ex-rational-box-step-functions-give-a-countable-dense-family-in-l-two-of-unit-interval` · example — A concrete countable dense family in $L^2[0,1]$
- `ex-initial-interval-indicators-are-one-separated-in-l-infinity` · example — The family $\{\mathbf{1}_{[0,t]} : t \in [0,1]\}$ is $1$-separated in $L^\infty[0,1]$
- `ex-young-inequality-for-an-l-one-kernel-and-an-l-two-function` · example — Young's inequality on an $L^1 * L^2$ pair
- `ex-the-gaussian-family-is-an-l-one-approximate-identity` · example — The Gaussian family is an $L^1$ approximate identity
- `fs-c-c-of-rn-is-dense-in-l-infinity-of-rn` · false-statement — FALSE: $C_c(\mathbb{R}^n)$ is dense in $L^\infty(\mathbb{R}^n)$
- `fs-l-p-of-every-measure-space-is-separable-for-finite-p` · false-statement — FALSE: $L^p(\mu)$ is separable for every measure $\mu$ and every $1 \le p < \infty$
- `fs-translation-is-continuous-in-l-infinity` · false-statement — FALSE: translation is continuous in $L^\infty$
- `fs-l-one-convolution-is-defined-at-every-point` · false-statement — FALSE: if $f,g \in L^1(\mathbb{R}^n)$, then $f*g(x)$ is defined for every $x$
- `cex-two-l-two-functions-can-have-convolution-outside-l-two` · counterexample — Two $L^2$ functions can have convolution outside $L^2$
- `fs-convolution-is-measurable-for-every-lebesgue-representative` · false-statement — FALSE: the Borel-representative discipline in convolution is unnecessary because continuous precomposition always preserves Lebesgue measurability

### `normed-and-banach-spaces` — Normed and Banach Spaces (20 item(s))

- `rem-real-and-complex-normed-space-convention` · remark — Real and complex scalar conventions for normed spaces
- `def-banach-space` · definition — Banach space
- `lem-reverse-triangle-inequality-in-a-normed-space` · lemma — The reverse triangle inequality in a normed space
- `def-linear-isometry-and-isometric-isomorphism` · definition — Linear isometries and isometric isomorphisms
- `def-normed-subspace` · definition — Normed subspace
- `lem-complete-subspace-is-closed` · lemma — A complete normed subspace is closed
- `lem-closed-subspace-of-a-banach-space-is-banach` · lemma — A closed subspace of a Banach space is Banach
- `def-product-norms-on-finitely-many-normed-spaces` · definition — The standard product norms on a finite product of normed spaces
- `lem-vector-operations-are-continuous-in-a-normed-space` · lemma — Vector addition and scalar multiplication are continuous in a normed space
- `lem-finite-product-norms-are-equivalent` · lemma — The standard finite product norms are equivalent
- `thm-finite-products-of-banach-spaces-are-banach` · theorem — Finite products of Banach spaces are Banach
- `def-series-and-absolute-convergence-in-a-normed-space` · definition — Series and absolute convergence in a normed space
- `lem-absolutely-convergent-series-is-cauchy` · lemma — An absolutely convergent series has Cauchy partial sums
- `thm-banach-series-criterion` · theorem — Series criterion for Banach spaces
- `def-completion-of-a-normed-space` · definition — Completion of a normed space
- `lem-completion-operations-are-well-defined` · lemma — The Cauchy-class operations of a normed-space completion are well defined
- `thm-metric-completion-carries-a-unique-banach-space-structure` · theorem — The metric completion of a normed space carries a unique compatible Banach-space structure
- `thm-completion-universal-property-for-bounded-linear-maps` · theorem — Bounded linear maps extend uniquely across the completion
- `cor-normed-space-completions-are-uniquely-linearly-isometric` · corollary — Any two completions of a normed space are uniquely linearly isometric
- `rem-lp-spaces-are-banach-spaces` · remark — The classical $L^p$ spaces are Banach spaces

### `normed-and-banach-spaces-examples` — Normed and Banach Spaces — Examples (9 item(s))

- `ex-ell-infinity-is-a-banach-space` · example — $\ell^\infty$ is Banach for the supremum norm
- `ex-c0-is-a-banach-space` · example — $c_0$ is Banach for the supremum norm
- `ex-cb-of-a-space-is-banach` · example — $C_b(X)$ is Banach for the supremum norm
- `ex-c-of-a-compact-space-is-banach` · example — $C(K)$ is Banach when $K$ is compact metric
- `ex-finite-sequences-c00-with-standard-norms` · example — The finitely supported sequences form an incomplete normed space with different standard completions
- `ex-polynomials-are-not-complete-in-the-supremum-norm` · example — Polynomials are not complete in the supremum norm on a compact interval
- `ex-lp-banach-space-dictionary` · example — Dictionary of the classical $L^p$ and $\ell^p$ Banach spaces
- `cex-an-incomplete-subspace-need-not-be-closed` · counterexample — An incomplete normed subspace need not be closed
- `cex-equivalent-metrics-need-not-come-from-equivalent-norms` · counterexample — Topologically equivalent metrics on a vector space need not come from equivalent norms

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
`research/frontier-27-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — targeted repair-integrity review, `frontier-27`

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
