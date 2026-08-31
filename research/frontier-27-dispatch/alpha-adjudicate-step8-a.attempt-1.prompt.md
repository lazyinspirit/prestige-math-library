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
group work, `research/frontier-27-alpha-groups.json` is the assignment: it permits at
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

run: frontier-27
role: alpha-adjudicate
label: step8-a
covers: 2, 3, 4

# Step 8 — group **a**, run `frontier-27`

You are the group Alpha for batches **2**, **3**, **4**: 3 A/B pair(s), 6 page(s), 106 item(s), 72 open rejection(s) over 72 item(s).

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

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-an-incomplete-subspace-need-not-be-closed` | `normed-and-banach-spaces-examples` | gpt-5.6-terra | `d8ec16ed08f0e5dc745919ebc072c02c9bbc351e77332bb6cebee7b608beabbf` |
| `cex-conjugate-gradients-can-break-on-a-symmetric-indefinite-system` | `conjugate-gradients-minres-and-preconditioning-examples` | gpt-5.6-terra | `32f8c484be48a98a8874841d25961ef9d6244927d2379803530bc421733b12be` |
| `cex-conjugate-gradients-does-not-apply-to-a-nonsymmetric-invertible-matrix` | `conjugate-gradients-minres-and-preconditioning-examples` | gpt-5.6-terra | `8c64a549c0c950a94368140f0e2ac7638cac7fad8cbe270dfc550462ade90bef` |
| `cex-two-l-two-functions-can-have-convolution-outside-l-two` | `density-separability-and-convolution-in-lp-examples` | gpt-5.6-terra | `60f61a543d865b944289e62f6e7a9fd447c9e31bfbe168ba2d3999e75708f885` |
| `cor-convolution-of-conjugate-l-p-and-l-q-functions-is-continuous-and-vanishes-at-infinity` | `density-separability-and-convolution-in-lp` | gpt-5.6-terra | `5ddd50d747ad149696dcbba0648b140b042ef263318f2d39996a61d052f13c9b` |
| `cor-l-one-approximate-identities-converge-uniformly-on-compacta-for-continuous-functions` | `density-separability-and-convolution-in-lp` | gpt-5.6-terra | `516dd7d7a947d19bb1e77acd23d3d254e48dcbe6953739a729efd8c07b24d76a` |
| `def-c-c-and-c-c-infinity-on-rn` | `density-separability-and-convolution-in-lp` | gpt-5.6-terra | `cfb9149e07550830fe0645c665dc4f3dc14bdb305b82c62955d72fbb083a66c1` |
| `def-c-zero-on-rn` | `density-separability-and-convolution-in-lp` | gpt-5.6-terra | `812ab3b4cddda95356207d2ed911677486ae37057933c6a443db8e8205989f77` |
| `def-conjugate-gradient-recurrence` | `conjugate-gradients-minres-and-preconditioning` | gpt-5.6-terra | `f1a97c9fec426ec71318c4a691c31617e7ebcba6ae54cf1828dc93d6d9c722db` |
| `def-l-one-approximate-identity-on-rn` | `density-separability-and-convolution-in-lp` | gpt-5.6-terra | `eba5a61f4c615228433072b6281c34318a952c4d98bd45f539a78517460ebcdc` |
| `def-lanczos-process-as-hermitian-arnoldi` | `conjugate-gradients-minres-and-preconditioning` | gpt-5.6-terra | `be20daab221004faaeb4e3c5ec6be30d985e53192085f3be2e5f5c2c67b0c473` |
| `def-left-right-and-symmetric-positive-definite-preconditioning` | `conjugate-gradients-minres-and-preconditioning` | gpt-5.6-terra | `b065382ca04be75e6d8887bb797bc486b94f7be2b507fb5b5b4cd38fac9c8ad9` |
| `def-minres-iterate-from-the-lanczos-tridiagonalization` | `conjugate-gradients-minres-and-preconditioning` | gpt-5.6-terra | `52aec087aceeb9a4338fa84c213907ac83d82164abc53559e3da29ac30704681` |
| `def-product-norms-on-finitely-many-normed-spaces` | `normed-and-banach-spaces` | gpt-5.6-terra | `12e6c7d90f88af1da13426c540c028b17ed566be02d8efc3aaecd7bfb93ffc16` |
| `def-series-and-absolute-convergence-in-a-normed-space` | `normed-and-banach-spaces` | gpt-5.6-terra | `7bb95fd438d5866fc3cc73f4ca15c3b07f1a0a2524a5a8f8875e4f0f6f61e21d` |
| `ex-c-of-a-compact-space-is-banach` | `normed-and-banach-spaces-examples` | gpt-5.6-terra | `91583fec631d65e126756bfc57077cd989ee6c3eeca9e18739e71fb26308dc55` |
| `ex-c0-is-a-banach-space` | `normed-and-banach-spaces-examples` | gpt-5.6-terra | `ac2844313a5ab19b5379ba89ba65ff67268c0746e6667135081802e490f92474` |
| `ex-cb-of-a-space-is-banach` | `normed-and-banach-spaces-examples` | gpt-5.6-terra | `ce9268ea14b56f7cc085537d75c94f1afd0a1a97b8327af319fd38c46f72da92` |
| `ex-clustered-eigenvalues-give-a-better-cg-bound-than-spread-eigenvalues` | `conjugate-gradients-minres-and-preconditioning-examples` | gpt-5.6-terra | `0db5f6860030dfb34e1111a94873809d27c4f4630dae7802fb84065318ccb50b` |
| `ex-conjugate-gradients-can-terminate-at-a-relative-grade-smaller-than-the-dimension` | `conjugate-gradients-minres-and-preconditioning-examples` | gpt-5.6-terra | `4fb1b56e8fbf6d884f639002fcfc8e7337d9f0c718b05664c4cbd4e35089e5fd` |
| `ex-conjugate-gradients-on-a-two-by-two-hermitian-positive-definite-system` | `conjugate-gradients-minres-and-preconditioning-examples` | gpt-5.6-terra | `f22a8f57658c0625300c000356681314d3782ce1283739bb82d32875b30dae97` |
| `ex-ell-infinity-is-a-banach-space` | `normed-and-banach-spaces-examples` | gpt-5.6-terra | `e437a771ef2ea2a725618224c8650eaaab6404a2a1237524226ef6b8a7737753` |
| `ex-finite-sequences-c00-with-standard-norms` | `normed-and-banach-spaces-examples` | gpt-5.6-terra | `9394c6884d05495788650b591387c24f74f3708dc91195c3271e2e97c309163a` |
| `ex-jacobi-and-gauss-seidel-splittings-with-spectral-radius-comparison` | `conjugate-gradients-minres-and-preconditioning-examples` | gpt-5.6-terra | `436b2d33877276c2ab6f7ca16352394924accdb24ee88d4603424072ef16a14f` |
| `ex-lp-banach-space-dictionary` | `normed-and-banach-spaces-examples` | gpt-5.6-terra | `5cd9a38a72c077f57c22ab6f3b9c7f7529a796841c66cc9c7ad3d8514c4b4478` |
| `ex-minres-on-a-symmetric-indefinite-system` | `conjugate-gradients-minres-and-preconditioning-examples` | gpt-5.6-terra | `75696280472669b93e981ff1cf2c79c292e2e38de3463c38d4a59bbfd3fffcef` |
| `ex-mollifying-the-unit-interval-indicator-at-two-scales` | `density-separability-and-convolution-in-lp-examples` | gpt-5.6-terra | `b89a5d6571b23fd1bf97bbfdef45e9b58d8f5ded72f6e9b5b4dc4db16382df38` |
| `ex-polynomials-are-not-complete-in-the-supremum-norm` | `normed-and-banach-spaces-examples` | gpt-5.6-terra | `aa7fec577ab514afcd7cb735dedf781b85f6e01d3c8fb3c1bcc79d75ca20da85` |
| `ex-rational-box-step-functions-give-a-countable-dense-family-in-l-two-of-unit-interval` | `density-separability-and-convolution-in-lp-examples` | gpt-5.6-terra | `cd8dcce94870a2fc0765766c800506dc1db54bc99b1fe68dc0c88efcd6b0a3e9` |
| `ex-the-gaussian-family-is-an-l-one-approximate-identity` | `density-separability-and-convolution-in-lp-examples` | gpt-5.6-terra | `dace5fc0faab8915e6d47c3236e8a4f9dc1254f59b9c41240f914d48f28f2975` |
| `fs-convolution-is-measurable-for-every-lebesgue-representative` | `density-separability-and-convolution-in-lp-examples` | gpt-5.6-terra | `353833a9a842e8c4ed73391303579cf28864c468dc2e42caf095779d7b606ea4` |
| `fs-l-one-convolution-is-defined-at-every-point` | `density-separability-and-convolution-in-lp-examples` | gpt-5.6-terra | `fe1c19e1263823f25b233cb2e3ba084aa883bc05e8c71562cebce14f949483d5` |
| `lem-a-compact-set-inside-a-bounded-open-set-admits-an-explicit-compactly-supported-cutoff` | `density-separability-and-convolution-in-lp` | gpt-5.6-terra | `38521f8ffc28144a7c55b2bec509ab40f258d24a666f588fac05a3dc1487a016` |
| `lem-absolutely-convergent-series-is-cauchy` | `normed-and-banach-spaces` | gpt-5.6-terra | `25737e158279223120e7858f8326c173e48a5dab32135de73816e0097687dcfc` |
| `lem-borel-representatives-make-the-convolution-integrand-borel-measurable` | `density-separability-and-convolution-in-lp` | gpt-5.6-terra | `9f52c10c57c5bc465c9ecf4ca28f29fccd8bd5d27486481122188993203aa81d` |
| `lem-closed-subspace-of-a-banach-space-is-banach` | `normed-and-banach-spaces` | gpt-5.6-terra | `03035bc1825db1b75db75ca90456251e3dce23b6fa1f1e4534b5c8055d791ab6` |
| `lem-compactly-supported-continuous-functions-are-translation-continuous-in-l-p` | `density-separability-and-convolution-in-lp` | gpt-5.6-terra | `32ddf10f6e4d88bc3e8d5346f9a67fa20ac0d8c53b3a5ea73efa571aaf5fe278` |
| `lem-completion-operations-are-well-defined` | `normed-and-banach-spaces` | gpt-5.6-terra | `919ca7aeada5dba5611948a5689b94d7bc472095762ebbdb715934374530ae44` |
| `lem-convolution-is-independent-of-the-chosen-borel-representatives` | `density-separability-and-convolution-in-lp` | gpt-5.6-terra | `06e9fb3f2ed1e2dd7512d007641276b3b4df13df1e2ee40ea02dc7ef56e07eb6` |
| `lem-countable-generators-yield-countable-set-algebras` | `density-separability-and-convolution-in-lp` | gpt-5.6-terra | `b831f2dde32eb5cd87510efea4c76601eddd71439e46e1c9ca593173a1311aa2` |
| `lem-elementary-duality-formula-for-nonnegative-l-p-functions` | `density-separability-and-convolution-in-lp` | gpt-5.6-terra | `e484d538fdcb78a95dc30be867b7cd8eef72d84fec5cf427d27900a648cbbb0b` |
| `lem-finite-measure-sets-admit-compact-open-sandwiches-with-small-excess` | `density-separability-and-convolution-in-lp` | gpt-5.6-terra | `5577f993ae2847fc27aad1064614eb4b7428062a20fecedabe9889440a733f12` |
| `lem-finite-measure-sets-are-approximable-by-a-countable-generating-algebra` | `density-separability-and-convolution-in-lp` | gpt-5.6-terra | `4114dec67a589ee312aa2b5f67b510898e296f07c0fe5305eeaf55986a68c6fb` |
| `lem-finite-measure-sets-are-approximable-by-finite-unions-of-boxes` | `density-separability-and-convolution-in-lp` | gpt-5.6-terra | `af6a8571082f107b5094f9b2227bb8251034d31bfa9849280780ab4f50dc8bd5` |
| `lem-finite-product-norms-are-equivalent` | `normed-and-banach-spaces` | gpt-5.6-terra | `9c12415dba32a644090c84a80dd26532ff5b0b980d82ad503f8bbd6acf7d809a` |
| `lem-vector-operations-are-continuous-in-a-normed-space` | `normed-and-banach-spaces` | gpt-5.6-terra | `5f755f4978f8780574773b191d3acf45e692f2c6396ade329be961eb8ad5392d` |
| `prop-invertible-preconditioners-give-equivalent-linear-systems-with-explicit-residual-maps` | `conjugate-gradients-minres-and-preconditioning` | gpt-5.6-terra | `7a205a50266d61ff073a7f4ecce51f287cfea4f15f58918ee965832a44accf88` |
| `prop-l-one-convolution-is-bilinear-commutative-and-associative` | `density-separability-and-convolution-in-lp` | gpt-5.6-terra | `b867093a937505dc9c2ee7af492a94775bc159182ee11d556d29f93e2bd5d931` |
| `prop-mollifier-families-are-l-one-approximate-identities` | `density-separability-and-convolution-in-lp` | gpt-5.6-terra | `8946fcaba4c3b51eacc2855df4041a2f07eaa8d845d44b40464879c9c16b2897` |
| `thm-banach-series-criterion` | `normed-and-banach-spaces` | gpt-5.6-terra | `1068a405a1a6711dd29a20ebc798fa9fb6f4eb99f7fd899c8e257953868f2cef` |
| `thm-c-c-infinity-rn-is-dense-in-l-p-of-rn` | `density-separability-and-convolution-in-lp` | gpt-5.6-terra | `6fb5aab1c297648e2aed994b362133027a6e8458b21610c13921348f5274e4f7` |
| `thm-completion-universal-property-for-bounded-linear-maps` | `normed-and-banach-spaces` | gpt-5.6-terra | `5b23485352eec5cfb31e40ca666cc3cc8172063f29d3b6f486ef37f78f6044c4` |
| `thm-conjugate-gradient-chebyshev-bound-in-the-a-norm` | `conjugate-gradients-minres-and-preconditioning` | gpt-5.6-terra | `ce4e533ce10ef36ab9d206efc02d7a1567325c9b25fc324af712d86fa4adbec0` |
| `thm-conjugate-gradient-is-the-krylov-galerkin-method-and-minimizes-the-energy-error` | `conjugate-gradients-minres-and-preconditioning` | gpt-5.6-terra | `8e7eb23d5ff397056e275436073158515642425f9e0c428f8db3d216db0aa868` |
| `thm-conjugate-gradient-residuals-are-orthogonal-and-search-directions-are-a-conjugate` | `conjugate-gradients-minres-and-preconditioning` | gpt-5.6-terra | `cdbd2a45ba0f5d3975d271d4bca4f92cac118802ae6171c81aa8dde2e24882b7` |
| `thm-conjugate-gradient-terminates-by-the-relative-grade-in-exact-arithmetic` | `conjugate-gradients-minres-and-preconditioning` | gpt-5.6-terra | `92c08cab79502aad3059f2569d36a2dcb32416605751f65fcf7bd4a05689ed14` |
| `thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign` | `density-separability-and-convolution-in-lp` | gpt-5.6-terra | `6e3c91ea047289fa22031d25ffcfff89ea4182db557f455b9e2c4e79959c3dd0` |
| `thm-finite-products-of-banach-spaces-are-banach` | `normed-and-banach-spaces` | gpt-5.6-terra | `1db4664ee3a88aed2e992023977d8e42c32e0191d80d3dc1ad25446d60b054a6` |
| `thm-hermitian-arnoldi-collapses-to-the-lanczos-three-term-recurrence` | `conjugate-gradients-minres-and-preconditioning` | gpt-5.6-terra | `219f033a69ceca1f98f368fbac0534f2be9f2b17e6dd92935104ff397496faa7` |
| `thm-l-infinity-closure-of-c-c-rn-is-c-zero-rn` | `density-separability-and-convolution-in-lp` | gpt-5.6-terra | `344363c3a539d4f3039299541a2127f7c77ebb412911ae4248d33c6709d8a6bb` |
| `thm-l-infinity-of-unit-interval-is-not-separable` | `density-separability-and-convolution-in-lp` | gpt-5.6-terra | `da5175a341fb0bab907f2a6cb076c887bd1801e466cfaf1dadce6e6eadb63e20` |
| `thm-l-one-approximate-identities-converge-in-l-p` | `density-separability-and-convolution-in-lp` | gpt-5.6-terra | `64092e6972e9188123ecfea31243b28283c39ef2f3a056af6210972f1b4bd652` |
| `thm-l-one-convolution-exists-almost-everywhere-and-obeys-the-l-one-bound` | `density-separability-and-convolution-in-lp` | gpt-5.6-terra | `6197c17266484a4d0186223bd47eac035fb5dc6daaf5adabf151005c75aeec32` |
| `thm-l-p-of-a-sigma-finite-countably-generated-measure-space-is-separable` | `density-separability-and-convolution-in-lp` | gpt-5.6-terra | `4233d80f4a94a4463c388bb53ab63afad65914e05c341249ffa79f4aa2bb542c` |
| `thm-metric-completion-carries-a-unique-banach-space-structure` | `normed-and-banach-spaces` | gpt-5.6-terra | `ef0178daffa74c6f0990bb8e1dea5f193f17a22e20b1db10bbc0832c95923d28` |
| `thm-minkowski-integral-inequality` | `density-separability-and-convolution-in-lp` | gpt-5.6-terra | `f5c52d360c13e730cb265915ad86f118349ec9c8519d756280db7b1787ba8e48` |
| `thm-minres-minimizes-the-euclidean-residual-over-the-hermitian-krylov-space` | `conjugate-gradients-minres-and-preconditioning` | gpt-5.6-terra | `708a1996c3835d4bd9516df686cd7702a4cce7e31a391f9548b5083e03b42307` |
| `thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn` | `density-separability-and-convolution-in-lp` | gpt-5.6-terra | `ef17727b3b2b5d9479a248936cfb506353bf771920294295df2b3a50e474cbb6` |
| `thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p` | `density-separability-and-convolution-in-lp` | gpt-5.6-terra | `25d42ea9597a9a3de3e0a46bafa80ef525f57a4e2828c7e38966143818c3e822` |
| `thm-support-of-a-convolution-lies-in-the-closure-of-the-support-sumset` | `density-separability-and-convolution-in-lp` | gpt-5.6-terra | `47cd6bbef3a0822484a7016154290e16390cc38f076b32b7b1053829969df582` |
| `thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity` | `density-separability-and-convolution-in-lp` | gpt-5.6-terra | `0ed19d22505b276ba23eaee61850cbb8d8c2c8abca1e88364def0e9fe9dcb344` |
| `thm-young-convolution-inequality` | `density-separability-and-convolution-in-lp` | gpt-5.6-terra | `e1db5312cf6872d93dbccb8e333ef0df1148cb3a18aee1c4cd83d445ff059018` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — fatal-only configured-judge adjudication, `frontier-27`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/frontier-27-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Descriptive defect-ledger subclasses
such as `invalid-inference`, `false-claim`, or `ill-typed-construction` are not
valid adjudication `defect_type` values.

For an incoming alert, append the owning-group disposition to
`research/frontier-27-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-27-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-27-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
