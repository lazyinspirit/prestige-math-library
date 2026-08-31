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
group work, `research/frontier-26-alpha-groups.json` is the assignment: it permits at
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

run: frontier-26
role: alpha-adjudicate
label: step8-c
covers: 2, 3, 4

# Step 8 — group **c**, run `frontier-26`

You are the group Alpha for batches **2**, **3**, **4**: 4 A/B pair(s), 8 page(s), 145 item(s), 94 open rejection(s) over 94 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-26-alpha-c-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-26-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 2 | `krylov-subspaces-arnoldi-and-gmres` | A | linear-algebra | 168.009 | `eigenvalue-iterations-and-the-qr-algorithm` |
| 2 | `krylov-subspaces-arnoldi-and-gmres-examples` | B | linear-algebra | 168.01 | `krylov-subspaces-arnoldi-and-gmres` |
| 2 | `matrix-differentiation-and-first-order-spectral-perturbation` | A | linear-algebra | 288.000021 | `the-inverse-function-theorem-completed`, `the-moore-penrose-pseudoinverse-and-regularised-least-squares` |
| 2 | `matrix-differentiation-and-first-order-spectral-perturbation-examples` | B | linear-algebra | 288.000022 | `matrix-differentiation-and-first-order-spectral-perturbation` |
| 3 | `the-lp-spaces-holder-minkowski-and-riesz-fischer` | A | measure-theory | 288.027 | `the-radon-nikodym-theorem-and-lebesgue-decomposition-examples`, `triangularisation-and-jordan-canonical-form` |
| 3 | `the-lp-spaces-holder-minkowski-and-riesz-fischer-examples` | B | measure-theory | 288.028 | `the-lp-spaces-holder-minkowski-and-riesz-fischer` |
| 4 | `analytic-continuation-and-monodromy` | A | complex-analysis | 341 | `simply-connected-plane-domains`, `the-identity-theorem-and-the-open-mapping-theorem`, `covering-spaces-and-lifting`, `the-field-of-fractions-and-localisation`, `countability-axioms-and-cardinal-functions`, `classification-of-covering-spaces` |
| 4 | `analytic-continuation-and-monodromy-examples` | B | complex-analysis | 342 | `analytic-continuation-and-monodromy` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `krylov-subspaces-arnoldi-and-gmres` — Krylov Subspaces, Arnoldi and GMRES (20 item(s))

- `def-krylov-subspace-of-a-matrix-and-start-vector` · definition — The Krylov subspace $K_m(A,b)=\operatorname{span}\{b,Ab,\dots,A^{m-1}b\}$
- `def-grade-and-relative-minimal-polynomial-of-a-start-vector` · definition — The grade of a start vector and its relative minimal polynomial
- `prop-krylov-subspace-is-the-polynomial-image-of-the-start-vector` · proposition — The Krylov subspace consists exactly of vectors of the form $p(A)b$ with $\deg p<m$
- `thm-krylov-dimensions-grow-by-one-until-the-grade-and-then-stabilise` · theorem — The dimensions of the Krylov spaces grow by one until the grade and then stabilize
- `cor-for-invertible-a-the-exact-solution-enters-the-krylov-space-at-the-grade` · corollary — If $A$ is invertible, the exact solution of $Ax=b$ lies in the Krylov space at the grade
- `def-arnoldi-process` · definition — The Arnoldi process for building an orthonormal basis of a Krylov subspace
- `thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization` · theorem — Before breakdown, Arnoldi produces an orthonormal Krylov basis and the factorization $AQ_m=Q_{m+1}\bar H_m$ with $\bar H_m$ upper Hessenberg
- `prop-lucky-arnoldi-breakdown-is-equivalent-to-krylov-invariance` · proposition — Exact Arnoldi breakdown is equivalent to invariance of the current Krylov space
- `def-ritz-values-and-ritz-vectors-from-arnoldi` · definition — Ritz values and Ritz vectors extracted from the Arnoldi Hessenberg reduction
- `prop-ritz-residual-formula-for-an-arnoldi-ritz-pair` · proposition — An Arnoldi Ritz pair has residual norm controlled by the last Hessenberg subdiagonal entry
- `def-gmres-iterate` · definition — The GMRES iterate as the residual minimizer over an affine Krylov space
- `thm-arnoldi-reduces-gmres-to-a-small-hessenberg-least-squares-problem` · theorem — Arnoldi reduces GMRES to a least-squares problem for the small Hessenberg matrix
- `cor-gmres-minimizes-the-residual-over-the-affine-krylov-space` · corollary — GMRES minimizes the residual norm over the affine Krylov space $x_0+K_m(A,r_0)$
- `cor-unrestarted-gmres-residual-norms-are-nonincreasing` · corollary — For unrestarted GMRES, the residual norms are nonincreasing
- `prop-gmres-residuals-are-polynomials-in-a-applied-to-the-initial-residual` · proposition — The GMRES residual has the form $r_m=p_m(A)r_0$ with $p_m(0)=1$ and $\deg p_m\le m$
- `thm-unrestarted-gmres-terminates-in-at-most-the-relative-grade-in-exact-arithmetic` · theorem — In exact arithmetic, unrestarted GMRES terminates no later than the relative grade
- `prop-diagonalizable-gmres-residual-bound-keeps-the-eigenvector-conditioning-factor` · proposition — For a diagonalizable matrix, the GMRES residual bound carries the eigenvector-conditioning factor $\kappa(V)$
- `def-restarted-gmres-m` · definition — Restarted GMRES$(m)$ as repeated GMRES cycles on fixed-size Krylov spaces
- `prop-restarted-gmres-preserves-cyclewise-minimization-but-not-full-termination` · proposition — Restarted GMRES preserves cyclewise residual minimization but loses the unrestarted finite-termination guarantee
- `def-matrix-free-access-model-for-krylov-methods` · definition — The matrix-free access model for Krylov methods

### `krylov-subspaces-arnoldi-and-gmres-examples` — Krylov Subspaces, Arnoldi and GMRES: Examples and Counterexamples (8 item(s))

- `ex-a-krylov-chain-with-early-stabilisation-and-its-relative-minimal-polynomial` · example — A Krylov chain can stabilize early when the start vector has a short relative minimal polynomial
- `ex-arnoldi-factorization-by-hand-for-a-three-step-krylov-chain` · example — A hand calculation of Arnoldi shows the Hessenberg factorization entry by entry
- `ex-lucky-arnoldi-breakdown-on-an-invariant-krylov-space` · example — Lucky breakdown occurs when the current Krylov space is already invariant
- `ex-a-ritz-pair-and-its-residual-from-a-small-arnoldi-run` · example — A Ritz pair from Arnoldi has a residual given by the last Hessenberg column entry
- `ex-gmres-on-a-small-nonsymmetric-system` · example — GMRES on a small nonsymmetric system becomes a two- or three-dimensional least-squares problem
- `cex-gmres-can-stagnate-on-a-nonnormal-matrix-with-moderate-conditioning` · counterexample — A nonnormal matrix can make GMRES stagnate even when ordinary conditioning is not extreme
- `ex-restarted-gmres-versus-full-gmres-on-the-same-system` · example — Restarted GMRES can need more cycles than unrestarted GMRES on the same system
- `ex-matrix-free-gmres-for-a-sparse-operator` · example — Matrix-free GMRES only needs repeated applications of the operator to vectors

### `matrix-differentiation-and-first-order-spectral-perturbation` — Matrix Differentiation and First-order Spectral Perturbation (23 item(s))

- `def-real-frechet-derivative-on-real-and-complex-matrix-spaces` · definition — The real Frechet derivative on real and complex matrix spaces with the Frobenius norm
- `prop-matrix-differentials-obey-sum-product-and-adjoint-rules` · proposition — Matrix differentials obey the sum rule, product rule, and adjoint rule
- `thm-derivative-of-matrix-inversion` · theorem — On the invertible locus, $D\operatorname{inv}(A)[H]=-A^{-1}HA^{-1}$
- `thm-determinant-differential-and-jacobis-formula` · theorem — The determinant differential is $D\det(A)[H]=\operatorname{tr}(\operatorname{adj}(A)H)$ at every matrix, and Jacobi's formula holds on the invertible locus
- `prop-differentials-of-trace-and-frobenius-linear-functionals` · proposition — Trace and Frobenius-linear matrix functionals differentiate by inspection
- `prop-gradient-of-a-quadratic-matrix-form` · proposition — Matrix quadratic forms have the expected first derivative and Hessian
- `thm-gradient-and-hessian-of-the-frobenius-least-squares-functional` · theorem — The Frobenius least-squares objective has gradient $A^*(Ax-b)$ and Hessian $A^*A$ in the vector variable
- `def-compatible-left-and-right-eigenvectors-for-a-simple-eigenvalue` · definition — Compatible left and right eigenvectors for a simple eigenvalue
- `prop-simple-eigenvalues-admit-left-right-normalization` · proposition — For a simple eigenvalue, left and right eigenvectors pair nontrivially and may be normalized by $y^*x=1$
- `def-condition-number-of-a-simple-eigenvalue` · definition — The normwise condition number of a simple eigenvalue
- `def-simple-spectral-projector` · definition — The simple spectral projector $P=xy^*/(y^*x)$
- `prop-simple-spectral-projector-is-scale-invariant` · proposition — The simple spectral projector is unchanged by nonzero rescalings of the left and right eigenvectors
- `def-reduced-resolvent-or-group-inverse-at-a-simple-eigenvalue` · definition — The reduced resolvent, or group inverse, on the complementary invariant subspace of a simple eigenvalue
- `prop-reduced-resolvent-identities-for-a-simple-eigenvalue` · proposition — The reduced resolvent satisfies the standard projector and inverse identities on the complementary invariant subspace
- `thm-simple-eigenpair-branches-exist-locally-after-gauge-fixing` · theorem — A simple eigenvalue and a gauge-fixed right eigenvector admit local $C^1$ branches in the underlying real matrix space
- `thm-derivative-of-a-simple-eigenvalue-is-y-star-a-prime-x` · theorem — Along a differentiable matrix path, a simple eigenvalue satisfies $\lambda'=y^*A'x$ under the normalization $y^*x=1$
- `prop-simple-eigenvalue-condition-number-is-norm-x-norm-y-over-y-star-x` · proposition — The normwise condition number of a simple eigenvalue is $\|x\|_2\|y\|_2/|y^*x|$
- `thm-derivative-of-the-simple-spectral-projector` · theorem — The derivative of the simple spectral projector is expressed by the reduced resolvent and the perturbation
- `thm-gauge-fixed-simple-eigenvector-derivative-formula` · theorem — In a fixed gauge, the derivative of a simple right eigenvector is obtained by applying the reduced resolvent to the perturbation
- `cor-hermitian-simple-eigenpair-derivative-simplifications` · corollary — For a Hermitian simple eigenvalue, one may take $y=x$ and the first-order formulas simplify accordingly
- `thm-directional-derivative-of-a-simple-positive-singular-value` · theorem — If $\sigma>0$ is a simple singular value with left and right singular vectors $u,v$, then its real directional derivative is $\operatorname{Re}(u^*Hv)$
- `cex-a-defective-jordan-block-produces-square-root-eigenvalue-splitting` · counterexample — A defective Jordan block can split under perturbation at square-root scale
- `cex-an-ordered-eigenvector-branch-need-not-be-differentiable-through-a-crossing` · counterexample — An ordered eigenvector branch need not extend differentiably through an eigenvalue crossing

### `matrix-differentiation-and-first-order-spectral-perturbation-examples` — Matrix Differentiation and First-order Spectral Perturbation: Examples and Counterexamples (9 item(s))

- `ex-the-inverse-derivative-of-a-two-by-two-matrix` · example — Differentiating the inverse of a $2\times2$ matrix reproduces the closed formula entrywise
- `ex-determinant-differential-at-an-invertible-and-a-singular-matrix` · example — The adjugate formula still differentiates the determinant at a singular matrix, while Jacobi's inverse form does not
- `ex-the-gradient-and-hessian-of-a-small-least-squares-functional` · example — A small least-squares problem makes the gradient and Hessian formulas explicit
- `ex-simple-nonnormal-eigenvalue-derivative-uses-left-and-right-eigenvectors` · example — For a nonnormal matrix, the simple eigenvalue derivative uses distinct left and right eigenvectors
- `ex-a-hermitian-simple-eigenvalue-derivative-is-a-rayleigh-quotient-direction` · example — For a Hermitian family, the first derivative of a simple eigenvalue is the corresponding Rayleigh quotient direction
- `ex-two-gauge-choices-give-different-eigenvector-derivatives` · example — Different gauge choices change the eigenvector derivative but not the eigenvalue derivative or projector derivative
- `ex-a-jordan-block-splits-by-a-square-root-perturbation` · example — A $2\times2$ Jordan block splits into two eigenvalues separated by a square root
- `ex-the-directional-derivative-of-a-simple-singular-value` · example — The directional derivative of a simple singular value is the real part of $u^*Hv$
- `cex-an-eigenvector-branch-cannot-stay-differentiable-through-a-symmetric-crossing` · counterexample — At a symmetric crossing, an ordered eigenvector branch cannot remain differentiable

### `the-lp-spaces-holder-minkowski-and-riesz-fischer` — The $L^p$ Spaces Holder Minkowski and Riesz Fischer (33 item(s))

- `def-conjugate-exponents` · definition — Conjugate exponents, including the endpoint conventions
- `def-essential-supremum-with-respect-to-a-measure` · definition — The essential supremum of a measurable function with respect to a measure
- `def-calligraphic-l-p-on-a-measure-space` · definition — The function space $\mathcal{L}^p(\mu)$ for $0 < p < \infty$
- `def-l-infinity-on-a-measure-space` · definition — The space $L^\infty(\mu)$ of essentially bounded measurable functions
- `def-null-subspace-of-almost-everywhere-zero-functions` · definition — The null subspace of measurable functions that vanish almost everywhere
- `def-l-p-space-as-a-quotient-by-null-functions` · definition — The space $L^p(\mu)$ as the quotient by null functions
- `rem-elements-of-l-p-are-equivalence-classes-and-pointwise-statements-require-a-representative` · remark — Elements of $L^p$ are equivalence classes, so pointwise statements require a representative
- `rem-ell-p-is-l-p-of-counting-measure` · remark — $\ell^p$ is the $L^p$ space of counting measure
- `thm-holder-inequality-for-integrals` · theorem — Holder's inequality for integrals, including the endpoint cases
- `thm-equality-case-in-holder-inequality` · theorem — Equality in Holder's inequality for $1 < p < \infty$
- `thm-generalized-holder-inequality-for-products` · theorem — Generalized Holder inequality puts products into $L^r$
- `cor-cauchy-schwarz-inequality-for-l-two` · corollary — Cauchy-Schwarz inequality for $L^2$
- `rem-finite-counting-measure-holder-and-cauchy-schwarz-agree-with-published-finite-inequalities` · remark — On a finite counting space, Holder and Cauchy-Schwarz agree with the published finite-dimensional inequalities
- `thm-minkowski-inequality-for-integrals` · theorem — Minkowski's inequality for integrals, including $p = \infty$
- `thm-equality-case-in-minkowski-inequality` · theorem — Equality in Minkowski's inequality for $1 < p < \infty$
- `rem-finite-counting-measure-minkowski-agrees-with-the-published-finite-theorem` · remark — On a finite counting space, Minkowski agrees with the published finite-dimensional theorem
- `prop-essential-supremum-is-attained-as-the-least-essential-bound` · proposition — The essential supremum is attained as the least essential bound
- `thm-calligraphic-l-p-and-l-infinity-are-vector-spaces-for-p-at-least-one` · theorem — $\mathcal{L}^p$ and $L^\infty$ are vector spaces for $p \ge 1$
- `prop-null-functions-form-a-linear-subspace-and-are-exactly-the-zero-seminorm-class` · proposition — Null functions form a linear subspace and are exactly the zero-seminorm class
- `thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space` · theorem — The $L^p$ norm descends to the quotient and makes $L^p$ a normed space for $1 \le p \le \infty$
- `thm-riesz-fischer-completeness-of-l-p` · theorem — Riesz-Fischer completeness of $L^p$ for $1 \le p \le \infty$
- `cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences` · corollary — $L^p$-convergent sequences have almost-everywhere convergent subsequences
- `cor-l-p-convergence-implies-convergence-in-measure` · corollary — Convergence in $L^p$ implies convergence in measure
- `thm-finite-measure-l-r-includes-into-l-p-for-p-less-r` · theorem — On a finite measure space, $L^r$ includes into $L^p$ for $p < r$
- `thm-ell-p-includes-into-ell-r-for-p-less-r` · theorem — $\ell^p$ includes into $\ell^r$ for $p < r$
- `thm-lyapunov-interpolation-inequality-for-l-p-norms` · theorem — Lyapunov's interpolation inequality for $L^p$ norms
- `rem-lyapunov-inequality-is-equivalent-to-log-convexity-of-p-to-log-norm` · remark — Lyapunov interpolation is equivalent to log-convexity of $p \mapsto \log \lVert f \rVert_p$
- `thm-l-p-norms-converge-to-the-essential-supremum-for-essentially-bounded-l-r-functions` · theorem — For essentially bounded $L^r$ functions, the $L^p$ norms converge to the essential supremum
- `thm-parallelogram-law-in-l-two` · theorem — The parallelogram law in $L^2$
- `prop-the-p-functional-is-not-a-norm-for-zero-less-p-less-one` · proposition — For $0 < p < 1$, the $p$-functional is not a norm
- `thm-the-l-p-distance-for-zero-less-p-less-one-is-a-complete-translation-invariant-metric` · theorem — For $0 < p < 1$, the $L^p$ distance is a complete translation-invariant metric
- `thm-reverse-p-triangle-inequality-for-nonnegative-functions-when-zero-less-p-less-one` · theorem — For $0 < p < 1$, nonnegative functions satisfy the reverse $p$-triangle inequality
- `rem-lp-completeness-and-the-banach-property` · remark — A complete normed-space viewpoint on $L^p$ belongs to the later functional-analysis dictionary

### `the-lp-spaces-holder-minkowski-and-riesz-fischer-examples` — The $L^p$ Spaces Holder Minkowski and Riesz Fischer — Examples (19 item(s))

- `ex-x-to-the-minus-a-on-zero-one-and-on-one-infinity-calibrates-l-p-membership` · example — The family $x^{-a}$ on $(0,1)$ and $(1,\infty)$ calibrates $L^p$ membership
- `ex-k-to-the-minus-a-membership-in-ell-p` · example — The sequence $(k^{-a})$ belongs to $\ell^p$ exactly when $ap > 1$
- `ex-finite-counting-measure-on-n-points-recovers-rn-p-norms` · example — Finite counting measure on $n$ points recovers the published $p$-norms on $\mathbb{R}^n$
- `ex-indicator-of-the-rationals-has-zero-essential-supremum-but-pointwise-supremum-one` · example — The indicator of the rationals has essential supremum $0$ but pointwise supremum $1$
- `ex-proportional-functions-realise-the-equality-case-of-holder` · example — Proportional functions realize the equality case of Holder
- `ex-a-two-step-function-shows-the-l-p-norm-converging-to-the-essential-supremum` · example — A two-step function shows $\lVert f \rVert_p \to \lVert f \rVert_\infty$
- `ex-the-parallelogram-law-on-two-indicator-functions-in-l-two` · example — The parallelogram law on two explicit $L^2$ indicator functions
- `cex-l-one-not-subset-l-two-on-the-line` · counterexample — $L^1(\mathbb{R})$ is not a subset of $L^2(\mathbb{R})$
- `cex-l-two-not-subset-l-one-on-the-line` · counterexample — $L^2(\mathbb{R})$ is not a subset of $L^1(\mathbb{R})$
- `rem-the-published-typewriter-sequence-shows-why-riesz-fischer-only-promises-a-subsequence` · remark — The published typewriter sequence shows why Riesz-Fischer only promises a subsequence
- `cex-half-norm-fails-the-triangle-inequality-on-two-indicators` · counterexample — The $p = 1/2$ functional fails the triangle inequality on two indicators
- `cex-a-nonzero-function-on-a-null-set-has-zero-l-p-seminorm` · counterexample — A nonzero function on a null set has zero $L^p$ seminorm
- `cex-a-cauchy-sequence-in-calligraphic-l-p-can-converge-to-two-distinct-functions` · counterexample — A Cauchy sequence in $\mathcal{L}^p$ can converge to two distinct functions
- `fs-l-p-includes-into-l-r-on-every-measure-space-when-p-less-r` · false-statement — FALSE: $L^p$ includes into $L^r$ on every measure space whenever $p < r$
- `fs-the-p-seminorm-on-calligraphic-l-p-is-a-norm` · false-statement — FALSE: the $p$-seminorm on $\mathcal{L}^p$ is a norm
- `fs-the-essential-supremum-equals-the-pointwise-supremum` · false-statement — FALSE: the essential supremum equals the pointwise supremum
- `fs-every-l-p-cauchy-sequence-converges-pointwise-almost-everywhere` · false-statement — FALSE: every $L^p$-Cauchy sequence converges pointwise almost everywhere
- `fs-l-one-half-with-its-p-functional-is-a-normed-space` · false-statement — FALSE: $L^{1/2}$ with its $p$-functional is a normed space
- `fs-holder-equality-forces-the-functions-themselves-to-be-proportional` · false-statement — FALSE: equality in Holder forces the functions themselves to be proportional

### `analytic-continuation-and-monodromy` — Analytic Continuation, Monodromy, and Riemann Surfaces (22 item(s))

- `def-holomorphic-germ` · definition — Holomorphic germs at a point
- `thm-holomorphic-germs-at-a-point-form-a-local-ring` · theorem — Holomorphic germs at a point form a local ring
- `def-function-element-and-direct-analytic-continuation` · definition — Function elements and direct analytic continuation
- `def-analytic-continuation-along-a-path` · definition — Analytic continuation along a path by admissible chains
- `lem-refinement-of-analytic-continuation-chains` · lemma — Two admissible continuation chains along one path admit a common refinement
- `thm-end-germ-of-path-continuation-is-independent-of-the-chain` · theorem — The terminal germ of a continuation along a fixed path is chain-independent
- `thm-uniqueness-of-analytic-continuation` · theorem — Analytic continuation along a fixed path is unique whenever it exists
- `def-complete-analytic-function` · definition — The complete analytic function generated by one germ
- `thm-monodromy-theorem` · theorem — Fixed-endpoint homotopic paths give the same analytic continuation
- `cor-single-valued-continuation-on-simply-connected-domains` · corollary — On a simply connected domain, pathwise continuation glues to one holomorphic function
- `rem-monodromy-corollary-agrees-with-the-earlier-simply-connected-logarithm-theorems` · remark — The monodromy corollary agrees with the earlier simply connected logarithm theorems
- `def-riemann-surface-of-a-complete-analytic-function` · definition — The germ space of a complete analytic function
- `lem-germ-neighborhoods-form-a-riemann-surface-basis` · lemma — The germ neighborhoods form a Hausdorff, second-countable Riemann-surface atlas
- `thm-germ-projection-is-a-local-biholomorphism` · theorem — The germ projection is a local biholomorphism
- `rem-covering-maps-among-complete-analytic-functions` · remark — A germ projection is not automatically a covering map
- `thm-riemann-surface-of-the-logarithm` · theorem — The Riemann surface of the logarithm is the complex plane over the punctured plane via exp
- `thm-riemann-surface-of-an-nth-root` · theorem — The Riemann surface of an nth root is the n-sheeted covering w maps to w to the nth power
- `rem-schwarz-reflection-as-analytic-continuation` · remark — Schwarz reflection is an analytic continuation construction
- `def-singular-boundary-point-and-natural-boundary` · definition — Singular boundary points and natural boundaries of function elements
- `thm-circle-of-convergence-contains-a-singular-point` · theorem — A power series of finite radius has a singular point on its circle of convergence
- `thm-pringsheim-theorem` · theorem — Pringsheim's theorem for power series with nonnegative coefficients
- `thm-factorial-gap-series-has-the-unit-circle-as-natural-boundary` · theorem — The factorial-gap series has the unit circle as a natural boundary

### `analytic-continuation-and-monodromy-examples` — Analytic Continuation, Monodromy, and Riemann Surfaces — Examples (11 item(s))

- `ex-logarithm-continuation-around-the-unit-circle-shifts-by-two-pi-i` · example — Continuing the logarithm once around the unit circle adds 2 pi i
- `ex-square-root-continuation-around-the-origin-changes-sign` · example — Continuing a square root once around the origin changes its sign
- `ex-helicoid-model-of-the-logarithm-surface` · example — The logarithm surface admits the standard helicoid model
- `ex-two-sheeted-model-of-the-square-root-surface` · example — The square-root surface is a two-sheeted covering of the punctured plane
- `ex-the-geometric-series-has-only-one-singular-boundary-point` · example — The geometric series has only one singular point on its unit circle
- `cex-the-factorial-gap-series-has-the-unit-circle-as-a-natural-boundary` · counterexample — The factorial-gap series shows that a holomorphic function need not continue past its boundary
- `cex-sum-z-to-n-over-n-squared-is-continuous-on-the-closed-disc-but-singular-at-one` · counterexample — The series sum z to the n over n squared is continuous on the closed disc but singular at 1
- `fs-every-holomorphic-function-on-a-domain-continues-past-its-boundary` · false-statement — FALSE: every holomorphic function on a domain continues past its boundary
- `fs-continuation-along-same-endpoint-paths-always-agrees` · false-statement — FALSE: continuation along two paths with the same endpoints always agrees
- `fs-the-riemann-surface-of-a-multivalued-function-is-always-a-subset-of-c-squared` · false-statement — FALSE: the Riemann surface of a multivalued function is automatically a subset of C squared
- `fs-every-boundary-point-of-a-radius-one-power-series-is-singular` · false-statement — FALSE: every boundary point of a radius-one power series is singular

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
| `cex-a-cauchy-sequence-in-calligraphic-l-p-can-converge-to-two-distinct-functions` | `the-lp-spaces-holder-minkowski-and-riesz-fischer-examples` | gpt-5.6-terra | `61b7ddd23f6978cd50ede23fb140f16d7505f993a0cabae1741d1971a47d467c` |
| `cex-a-defective-jordan-block-produces-square-root-eigenvalue-splitting` | `matrix-differentiation-and-first-order-spectral-perturbation` | gpt-5.6-terra | `8cf5e9c80f67a90f3734a7934e1a9fa363a7ff543e44ac8e9f2fed46782cee0b` |
| `cex-a-nonzero-function-on-a-null-set-has-zero-l-p-seminorm` | `the-lp-spaces-holder-minkowski-and-riesz-fischer-examples` | gpt-5.6-terra | `d03363d9c6d205b0796599105de62349410ef1dcfdfe554ef8d07fe49d710186` |
| `cex-an-ordered-eigenvector-branch-need-not-be-differentiable-through-a-crossing` | `matrix-differentiation-and-first-order-spectral-perturbation` | gpt-5.6-terra | `7186c4b7f7b30afcac61067581a57691c31d5df3dc832f218f8edce609cf1004` |
| `cex-gmres-can-stagnate-on-a-nonnormal-matrix-with-moderate-conditioning` | `krylov-subspaces-arnoldi-and-gmres-examples` | gpt-5.6-terra | `0895a60996529085904ee2e332b68e9ec14e90b043e2a85fe0f9c38451ac3b87` |
| `cex-l-one-not-subset-l-two-on-the-line` | `the-lp-spaces-holder-minkowski-and-riesz-fischer-examples` | gpt-5.6-terra | `41c965898c3aca1f5cbc8c22839d887c59ec523fec821768ed0782ff2b316b02` |
| `cex-l-two-not-subset-l-one-on-the-line` | `the-lp-spaces-holder-minkowski-and-riesz-fischer-examples` | gpt-5.6-terra | `ad2c6ddef18810662d1da1d5e88121a467823dc49b57ff0aa2ccf8420360f862` |
| `cex-sum-z-to-n-over-n-squared-is-continuous-on-the-closed-disc-but-singular-at-one` | `analytic-continuation-and-monodromy-examples` | gpt-5.6-terra | `0e73995354bf04c4568b9de63d10a46f8775782bf1a23cc8a6ecd4a94498eaad` |
| `cor-for-invertible-a-the-exact-solution-enters-the-krylov-space-at-the-grade` | `krylov-subspaces-arnoldi-and-gmres` | gpt-5.6-terra | `91667b619722b4f640adc7034cad89b6d8ae90c93040947f531222ebd722923a` |
| `cor-hermitian-simple-eigenpair-derivative-simplifications` | `matrix-differentiation-and-first-order-spectral-perturbation` | gpt-5.6-terra | `aa6cd0e1c6020e6b955345dcfd822e09d23d76ca6c3095d706bb2b6c5b21e88d` |
| `cor-l-p-convergence-implies-convergence-in-measure` | `the-lp-spaces-holder-minkowski-and-riesz-fischer` | gpt-5.6-terra | `a36a1ee2bff4ef6a3b26602d0655ab9f152fd352a51d5914d9c15652c86911e7` |
| `cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences` | `the-lp-spaces-holder-minkowski-and-riesz-fischer` | gpt-5.6-terra | `36d8c33dd15acd764189242609b885f4ce4b93e9eb63c123b764b35e2f6d223f` |
| `cor-single-valued-continuation-on-simply-connected-domains` | `analytic-continuation-and-monodromy` | gpt-5.6-terra | `9c24ef609f8ebb2b00ea0b88b33633887d22769f588c039d0afe300436665aad` |
| `cor-unrestarted-gmres-residual-norms-are-nonincreasing` | `krylov-subspaces-arnoldi-and-gmres` | gpt-5.6-terra | `d8f4f6cf498566412b6bc8529bad4fb409ce7877501514c56ed6ba58a5efd44a` |
| `def-calligraphic-l-p-on-a-measure-space` | `the-lp-spaces-holder-minkowski-and-riesz-fischer` | gpt-5.6-terra | `8ce3160203f31421273cfcc7721feabdf3cc74de3851307c22cf93c4b62a3351` |
| `def-compatible-left-and-right-eigenvectors-for-a-simple-eigenvalue` | `matrix-differentiation-and-first-order-spectral-perturbation` | gpt-5.6-terra | `1c80c2719d5f39b914ea997f3cb8733987bad74db42fbc65f7c2fc0db7ca6e98` |
| `def-condition-number-of-a-simple-eigenvalue` | `matrix-differentiation-and-first-order-spectral-perturbation` | gpt-5.6-terra | `08908a52c39263319722bce91c1080c56673c573172f693ee78d8355a2be706d` |
| `def-gmres-iterate` | `krylov-subspaces-arnoldi-and-gmres` | gpt-5.6-terra | `b92b620c17fd69924d3870b5a2620740863e533adf47b75e4632b9828856d00d` |
| `def-grade-and-relative-minimal-polynomial-of-a-start-vector` | `krylov-subspaces-arnoldi-and-gmres` | gpt-5.6-terra | `8490a77d5f760773ace8f7e111b77a7a07e299fd6f2a9633c9c17751f0e10c2a` |
| `def-l-p-space-as-a-quotient-by-null-functions` | `the-lp-spaces-holder-minkowski-and-riesz-fischer` | gpt-5.6-terra | `7373c7e152307fd71a666a4f43ee9413ce8f428684e28ed7cb4cc082620eacdd` |
| `def-null-subspace-of-almost-everywhere-zero-functions` | `the-lp-spaces-holder-minkowski-and-riesz-fischer` | gpt-5.6-terra | `198246cf7afbdad9d133348c66cd6914debb7db382ec501fe71c8ac02f4c5fe6` |
| `def-real-frechet-derivative-on-real-and-complex-matrix-spaces` | `matrix-differentiation-and-first-order-spectral-perturbation` | gpt-5.6-terra | `adf938e626c03fbb62c11d6db6e127aaa50ebdfe410ca906aac2923d119aee7e` |
| `ex-a-hermitian-simple-eigenvalue-derivative-is-a-rayleigh-quotient-direction` | `matrix-differentiation-and-first-order-spectral-perturbation-examples` | gpt-5.6-terra | `ff82370c5796c33caec992105310455db7e18c049015078c86aec94067a5e7bd` |
| `ex-a-jordan-block-splits-by-a-square-root-perturbation` | `matrix-differentiation-and-first-order-spectral-perturbation-examples` | gpt-5.6-terra | `412beea1ab97dc3e8065455462117d37c962ba2b25218fe491f029980f9cfcdf` |
| `ex-a-krylov-chain-with-early-stabilisation-and-its-relative-minimal-polynomial` | `krylov-subspaces-arnoldi-and-gmres-examples` | gpt-5.6-terra | `cda0e76d62969c0e0b359d93de81309e1ad20240ce3d54cde074c9eaa370b908` |
| `ex-a-two-step-function-shows-the-l-p-norm-converging-to-the-essential-supremum` | `the-lp-spaces-holder-minkowski-and-riesz-fischer-examples` | gpt-5.6-terra | `860d1bdd3d4e1c9349c847fbcc35557840e9a2b1fa9bc048cafc85c91588734a` |
| `ex-finite-counting-measure-on-n-points-recovers-rn-p-norms` | `the-lp-spaces-holder-minkowski-and-riesz-fischer-examples` | gpt-5.6-terra | `440848cfd25d80eee89dd90079a02170421d841d5e80915d8d23c1f008f932cf` |
| `ex-indicator-of-the-rationals-has-zero-essential-supremum-but-pointwise-supremum-one` | `the-lp-spaces-holder-minkowski-and-riesz-fischer-examples` | gpt-5.6-terra | `e2de8b662332c8cefdd2af18f940fda51fea0003228415750bd575675c97c66e` |
| `ex-k-to-the-minus-a-membership-in-ell-p` | `the-lp-spaces-holder-minkowski-and-riesz-fischer-examples` | gpt-5.6-terra | `12ba653ab7a7c4b3e4f560f768c572d09f2d094671b6ff6d764a4116eda1d5e2` |
| `ex-logarithm-continuation-around-the-unit-circle-shifts-by-two-pi-i` | `analytic-continuation-and-monodromy-examples` | gpt-5.6-terra | `01b5e8ee8b4ce4c2bfe52c8f41fb25ea5feb8fa9c6293a26ea2dfb83bf3e0feb` |
| `ex-lucky-arnoldi-breakdown-on-an-invariant-krylov-space` | `krylov-subspaces-arnoldi-and-gmres-examples` | gpt-5.6-terra | `5e62ee59909127f1321b354ae76a1b887123664cb921a24c8782a415ec7cc10a` |
| `ex-matrix-free-gmres-for-a-sparse-operator` | `krylov-subspaces-arnoldi-and-gmres-examples` | gpt-5.6-terra | `9640b9c7e9b5b62dfee87952090d621344c79ed66117569573f88b5de376447f` |
| `ex-proportional-functions-realise-the-equality-case-of-holder` | `the-lp-spaces-holder-minkowski-and-riesz-fischer-examples` | gpt-5.6-terra | `d65416fceb93afa6ad22e786db62a3cbdf5b9952ea5443f93e99c8a5c22431f3` |
| `ex-restarted-gmres-versus-full-gmres-on-the-same-system` | `krylov-subspaces-arnoldi-and-gmres-examples` | gpt-5.6-terra | `030890f86c586af08df064901eeae739e3a689d088382435b5cd17767828ed7d` |
| `ex-simple-nonnormal-eigenvalue-derivative-uses-left-and-right-eigenvectors` | `matrix-differentiation-and-first-order-spectral-perturbation-examples` | gpt-5.6-terra | `48bc2a22ffd6f9278db0282a85de8fb7a12f500896a9643f1f4f3872ed1e9c72` |
| `ex-square-root-continuation-around-the-origin-changes-sign` | `analytic-continuation-and-monodromy-examples` | gpt-5.6-terra | `41650dced0f19c7cba994dcfdd5c79d8e41964bc1430b852d49671771d6d33c0` |
| `ex-the-geometric-series-has-only-one-singular-boundary-point` | `analytic-continuation-and-monodromy-examples` | gpt-5.6-terra | `ab3cc545b210b444db733c590b00e6e6774a5555bcd8cbe7613901b16b336ae2` |
| `ex-two-gauge-choices-give-different-eigenvector-derivatives` | `matrix-differentiation-and-first-order-spectral-perturbation-examples` | gpt-5.6-terra | `6569778694d8a58416ca2d507d4e32747f14f21e345b5570a69d6dcf46b1100a` |
| `ex-x-to-the-minus-a-on-zero-one-and-on-one-infinity-calibrates-l-p-membership` | `the-lp-spaces-holder-minkowski-and-riesz-fischer-examples` | gpt-5.6-terra | `95bf6a66788733102bbfcc6034be3599b75379e435f9841ac420911d9404050f` |
| `fs-every-l-p-cauchy-sequence-converges-pointwise-almost-everywhere` | `the-lp-spaces-holder-minkowski-and-riesz-fischer-examples` | gpt-5.6-terra | `6ab5ce8d2ec0ae4f466f7ed3d55f2e716ef49950e2c82ee1648c70dfe59c6bdc` |
| `fs-l-one-half-with-its-p-functional-is-a-normed-space` | `the-lp-spaces-holder-minkowski-and-riesz-fischer-examples` | gpt-5.6-terra | `15112e8a83d27dbcd073983b608802bb2b536cacef50165ccd87e41b2819ac04` |
| `fs-the-p-seminorm-on-calligraphic-l-p-is-a-norm` | `the-lp-spaces-holder-minkowski-and-riesz-fischer-examples` | gpt-5.6-terra | `c68427e8607cb3c4866e96ba92774fc4e637de006f5397aa59b7afc7ae1c6a11` |
| `lem-germ-neighborhoods-form-a-riemann-surface-basis` | `analytic-continuation-and-monodromy` | gpt-5.6-terra | `5979a87046ff34216ad5b179396da34745abc3fbdc686e592ec3c0806dddd4f8` |
| `lem-refinement-of-analytic-continuation-chains` | `analytic-continuation-and-monodromy` | gpt-5.6-terra | `0d3be1f2aed4d3ce6beea5d44c5d2a5e7f5028251b63622d953c26c7e4a9d53e` |
| `prop-diagonalizable-gmres-residual-bound-keeps-the-eigenvector-conditioning-factor` | `krylov-subspaces-arnoldi-and-gmres` | gpt-5.6-terra | `c67eafa444ae18079905dbdcf0a9219089a21781d9fe296c50dd64727e653dc7` |
| `prop-essential-supremum-is-attained-as-the-least-essential-bound` | `the-lp-spaces-holder-minkowski-and-riesz-fischer` | gpt-5.6-terra | `2cf556d337827d124b82352acc4a6a1eb0dd3a01f4682c536e710c59df412c5d` |
| `prop-gmres-residuals-are-polynomials-in-a-applied-to-the-initial-residual` | `krylov-subspaces-arnoldi-and-gmres` | gpt-5.6-terra | `99f87d4d82b15d2acee7b128104a315496272315c68a8b5b03e86372f8d42b89` |
| `prop-krylov-subspace-is-the-polynomial-image-of-the-start-vector` | `krylov-subspaces-arnoldi-and-gmres` | gpt-5.6-terra | `7f04949b345335f8231715e447d6cd69f33746b070db18d4f26d8005e8d18f42` |
| `prop-lucky-arnoldi-breakdown-is-equivalent-to-krylov-invariance` | `krylov-subspaces-arnoldi-and-gmres` | gpt-5.6-terra | `8c4cfb15cd8b503e0439b4b9007c8defca0c37cf285c5931a18a87ef51d5b6b0` |
| `prop-matrix-differentials-obey-sum-product-and-adjoint-rules` | `matrix-differentiation-and-first-order-spectral-perturbation` | gpt-5.6-terra | `8b7e27427169a0a93f2be72ed274e1c219dafa7dca58312b229301df4708d820` |
| `prop-null-functions-form-a-linear-subspace-and-are-exactly-the-zero-seminorm-class` | `the-lp-spaces-holder-minkowski-and-riesz-fischer` | gpt-5.6-terra | `90a51c2d87bd5d351617031e06d152cf3a9e2ff60816e70fae658b7d60b1320f` |
| `prop-reduced-resolvent-identities-for-a-simple-eigenvalue` | `matrix-differentiation-and-first-order-spectral-perturbation` | gpt-5.6-terra | `3e259807b50b2951225caf14495dc41564edb56f803003e64b5c97b5194937b6` |
| `prop-restarted-gmres-preserves-cyclewise-minimization-but-not-full-termination` | `krylov-subspaces-arnoldi-and-gmres` | gpt-5.6-terra | `e635d59387eb833e08e5ce61a7d4bae59f2cc7af300a31a5863dadbb73b75b8b` |
| `prop-ritz-residual-formula-for-an-arnoldi-ritz-pair` | `krylov-subspaces-arnoldi-and-gmres` | gpt-5.6-terra | `3d0f97c5d914f07534d8cf9ac1d03a14877cb0e76e2d328f20a72f4ab9114fbc` |
| `prop-simple-eigenvalue-condition-number-is-norm-x-norm-y-over-y-star-x` | `matrix-differentiation-and-first-order-spectral-perturbation` | gpt-5.6-terra | `a43e047f632b0197298e084a7c60da4939ddcbbd846230d2b8907b66943e3eb2` |
| `prop-simple-eigenvalues-admit-left-right-normalization` | `matrix-differentiation-and-first-order-spectral-perturbation` | gpt-5.6-terra | `065179a31429bf045e758520a82249f6fe617a7ea1dfc1dcfc6880c2f8636140` |
| `prop-the-p-functional-is-not-a-norm-for-zero-less-p-less-one` | `the-lp-spaces-holder-minkowski-and-riesz-fischer` | gpt-5.6-terra | `96a9402014f5b47925ba8ae2acf41db79f9ed5a1658afeadbbe08d1224769c1b` |
| `rem-covering-maps-among-complete-analytic-functions` | `analytic-continuation-and-monodromy` | gpt-5.6-terra | `3c5a097ded7fbd14bf04aa849fb966890740da90839a244063f5094acb14152e` |
| `rem-finite-counting-measure-holder-and-cauchy-schwarz-agree-with-published-finite-inequalities` | `the-lp-spaces-holder-minkowski-and-riesz-fischer` | gpt-5.6-terra | `3755321ae60b07406251fc88a1e4d8620abc89ec5996d41d2e694bce0b42ac43` |
| `rem-finite-counting-measure-minkowski-agrees-with-the-published-finite-theorem` | `the-lp-spaces-holder-minkowski-and-riesz-fischer` | gpt-5.6-terra | `8d9be8b17ff6d4b5c00d169a1ad19a81e1b0b481a0a0f563852f211eabcbf343` |
| `rem-lyapunov-inequality-is-equivalent-to-log-convexity-of-p-to-log-norm` | `the-lp-spaces-holder-minkowski-and-riesz-fischer` | gpt-5.6-terra | `31929d7d3883731ecd60e0e767e8ade647d66088d6104259964e2fb22e073dc0` |
| `rem-monodromy-corollary-agrees-with-the-earlier-simply-connected-logarithm-theorems` | `analytic-continuation-and-monodromy` | gpt-5.6-terra | `73c47f9c87ca76bf9d703d318b78c400251af30d3ca0c330e261358fc8f14e54` |
| `rem-schwarz-reflection-as-analytic-continuation` | `analytic-continuation-and-monodromy` | gpt-5.6-terra | `61146330bbca551e39d31586c0a3377ff709b8d433b78e1c5c13e699d02d7e40` |
| `thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization` | `krylov-subspaces-arnoldi-and-gmres` | gpt-5.6-terra | `8f6d49c0cec2862863c42f6cf88d90ad9e04838d06dd6ccaabcb1e49c0fab220` |
| `thm-arnoldi-reduces-gmres-to-a-small-hessenberg-least-squares-problem` | `krylov-subspaces-arnoldi-and-gmres` | gpt-5.6-terra | `0b6758ad5971c48d281970d2e020d70c224f8b5ddba2c97ff6d35248ef696463` |
| `thm-calligraphic-l-p-and-l-infinity-are-vector-spaces-for-p-at-least-one` | `the-lp-spaces-holder-minkowski-and-riesz-fischer` | gpt-5.6-terra | `caa05b11d135d9b887ac03d97e6d3985784dee08bf6c3c2788a26a3ba5cad3c0` |
| `thm-derivative-of-matrix-inversion` | `matrix-differentiation-and-first-order-spectral-perturbation` | gpt-5.6-terra | `b95933d01b86f13edf0c465a7ff48a8c6a862203dafcc4fdd7b158c0de73772a` |
| `thm-determinant-differential-and-jacobis-formula` | `matrix-differentiation-and-first-order-spectral-perturbation` | gpt-5.6-terra | `1ec8103d3c4a77e0a60c5e018b51fcc1ac59bab6f2ca33b359a49a8e6fb175eb` |
| `thm-directional-derivative-of-a-simple-positive-singular-value` | `matrix-differentiation-and-first-order-spectral-perturbation` | gpt-5.6-terra | `ca03658a299fd701b1eff0f0a64a1e62780961b78bfc457d46b6bfe10299cb7c` |
| `thm-ell-p-includes-into-ell-r-for-p-less-r` | `the-lp-spaces-holder-minkowski-and-riesz-fischer` | gpt-5.6-terra | `1773c473ef3f84c5dec96fbfcd5152312b7190cbb182ab515c824cb8447d0114` |
| `thm-end-germ-of-path-continuation-is-independent-of-the-chain` | `analytic-continuation-and-monodromy` | gpt-5.6-terra | `55d9180e78690469285c6b3370c87ed488a9fd7736f15e49011862a4bc3d5974` |
| `thm-equality-case-in-holder-inequality` | `the-lp-spaces-holder-minkowski-and-riesz-fischer` | gpt-5.6-terra | `c9b86870bb169dec0bac690a53b3810f2c4bdb391fd993127efac41e5be83c51` |
| `thm-equality-case-in-minkowski-inequality` | `the-lp-spaces-holder-minkowski-and-riesz-fischer` | gpt-5.6-terra | `e7e1531c2ab21c2482cc2057df579631833e992bc7fe792bd07ef9d138dbf93f` |
| `thm-factorial-gap-series-has-the-unit-circle-as-natural-boundary` | `analytic-continuation-and-monodromy` | gpt-5.6-terra | `37fe133eda3360b537867367f781a595da38cb9f7fe4fc017dfa51791f717e4a` |
| `thm-finite-measure-l-r-includes-into-l-p-for-p-less-r` | `the-lp-spaces-holder-minkowski-and-riesz-fischer` | gpt-5.6-terra | `98ebcda4b122d90e44cc1059a928bfe6bf82ffa260bfd7c37fa71946a984d172` |
| `thm-gauge-fixed-simple-eigenvector-derivative-formula` | `matrix-differentiation-and-first-order-spectral-perturbation` | gpt-5.6-terra | `0dae88cdd4cdbd49f7fc82f2eb2b25bea4c5238fb441843f620c764bec92f132` |
| `thm-generalized-holder-inequality-for-products` | `the-lp-spaces-holder-minkowski-and-riesz-fischer` | gpt-5.6-terra | `1bc9aca8bc85e52404ded1fcf80d854d5459f18c9cbd21282616c85a09b00e59` |
| `thm-germ-projection-is-a-local-biholomorphism` | `analytic-continuation-and-monodromy` | gpt-5.6-terra | `5e1616d9cf7d81ea3b3d143bf52a0dae1b0f4fd538332c081fb813b58d320160` |
| `thm-gradient-and-hessian-of-the-frobenius-least-squares-functional` | `matrix-differentiation-and-first-order-spectral-perturbation` | gpt-5.6-terra | `b69a151c0ffb396ccb06565338de755ac6428a420d09f41a95b2566084be549e` |
| `thm-holder-inequality-for-integrals` | `the-lp-spaces-holder-minkowski-and-riesz-fischer` | gpt-5.6-terra | `d477c9eb145b6eac16cd24eea706f5026246c7b019642784cb37128aece02f76` |
| `thm-holomorphic-germs-at-a-point-form-a-local-ring` | `analytic-continuation-and-monodromy` | gpt-5.6-terra | `c29c46c6565a0232dd60d90bb6478d04882eac20f04b1256821110fa8e8ed199` |
| `thm-krylov-dimensions-grow-by-one-until-the-grade-and-then-stabilise` | `krylov-subspaces-arnoldi-and-gmres` | gpt-5.6-terra | `360f093c0b8868d94184efe86ca7baf2251ece99bc630800dd2a238223ac23e8` |
| `thm-l-p-norms-converge-to-the-essential-supremum-for-essentially-bounded-l-r-functions` | `the-lp-spaces-holder-minkowski-and-riesz-fischer` | gpt-5.6-terra | `9c76126f0691a50faacc4bf9cbae1100e06d925df9d64232a96b4e8341a57da4` |
| `thm-lyapunov-interpolation-inequality-for-l-p-norms` | `the-lp-spaces-holder-minkowski-and-riesz-fischer` | gpt-5.6-terra | `d079d967b354c30d9dfa4d1d3bc5165b900b144c5f44b2a57963f9cc9a98f05c` |
| `thm-minkowski-inequality-for-integrals` | `the-lp-spaces-holder-minkowski-and-riesz-fischer` | gpt-5.6-terra | `822c935d9641fb11177221a5e83b326994c5b20a96bc98b013998ae3fa1577a9` |
| `thm-monodromy-theorem` | `analytic-continuation-and-monodromy` | gpt-5.6-terra | `f4a3c6a71424f797dc503e64e471f1f8c79ed76a5b04e27ee662796388181bdb` |
| `thm-parallelogram-law-in-l-two` | `the-lp-spaces-holder-minkowski-and-riesz-fischer` | gpt-5.6-terra | `2b981b25e94b8d24435060f267db625e4dfb5cf1fb60adc46b6d5ccc9cb31a3a` |
| `thm-reverse-p-triangle-inequality-for-nonnegative-functions-when-zero-less-p-less-one` | `the-lp-spaces-holder-minkowski-and-riesz-fischer` | gpt-5.6-terra | `595537fcb436e89cce9faaa8cf4cf1f84802805e10c89f982577a12d2a4eac9a` |
| `thm-riemann-surface-of-an-nth-root` | `analytic-continuation-and-monodromy` | gpt-5.6-terra | `089da14618a3aa70efac1429e8a79ef4a9e95c974e178eaf3c43d23c0bf57638` |
| `thm-riemann-surface-of-the-logarithm` | `analytic-continuation-and-monodromy` | gpt-5.6-terra | `bf61318c33f3ea710ea6e6d907e10f3ac63f70f47ff14640ef1b5440314bfc36` |
| `thm-riesz-fischer-completeness-of-l-p` | `the-lp-spaces-holder-minkowski-and-riesz-fischer` | gpt-5.6-terra | `19172aa60e28f1eed46632de333a1b1ccbde1a4488624af64cfa61a9ba57b7ae` |
| `thm-simple-eigenpair-branches-exist-locally-after-gauge-fixing` | `matrix-differentiation-and-first-order-spectral-perturbation` | gpt-5.6-terra | `cd8828033ff03b01b99612eec939b8487278be8734f76280ce0f990962557b37` |
| `thm-the-l-p-distance-for-zero-less-p-less-one-is-a-complete-translation-invariant-metric` | `the-lp-spaces-holder-minkowski-and-riesz-fischer` | gpt-5.6-terra | `e6ac0f791cc2ce02e4443a302f1487588c06db645c4c76f0defd2a7eb7af7e04` |
| `thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space` | `the-lp-spaces-holder-minkowski-and-riesz-fischer` | gpt-5.6-terra | `09b8a1a8c7066d24340122cffe38e75d639dd0585b67020df17a1aaa76916891` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — fatal-only configured-judge adjudication, `frontier-26`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/frontier-26-judge-adjudications.jsonl`
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
`research/frontier-26-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-26-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-26-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
