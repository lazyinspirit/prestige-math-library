# Frontier 27 — Step 8 group a adjudication

## Scope and outcome

Group `a` owns batches `2`, `3`, and `4`, six pages, and 106 items. I
adjudicated all 72 exact rejection tuples rendered for this group against the
current item text and the cited dependencies opened during the Step-7 read.

- `confirmed_fatal`: 15
- `confirmed_nonfatal`: 51
- `false_positive`: 6
- incoming alerts: 0
- cross-group findings: 0
- repaired and targeted for rejudge: 15 items

No web search was needed. The points at issue were resolved from the exact
library text, the opened published definitions and theorems, and elementary
derivations. No published item was changed.

## Confirmed fatal repairs

| item | defect and repair |
|---|---|
| `cex-conjugate-gradients-can-break-on-a-symmetric-indefinite-system` | The facts block applied the SPD-only CG definition to an indefinite matrix. The attempted first update is now defined locally, while the citation is explicitly confined to CG's legitimate domain. |
| `cex-conjugate-gradients-does-not-apply-to-a-nonsymmetric-invertible-matrix` | The facts block applied the SPD-only recurrence to a nonsymmetric matrix. The attempted algebraic updates are now defined locally without extending the cited definition's domain. |
| `def-c-c-and-c-c-infinity-on-rn` | The definition used complex-valued functions with published support and smoothness definitions that only cover real-valued functions. The scalar codomain is now real, matching those dependencies and the published finite-`p` spaces. |
| `def-c-zero-on-rn` | The definition used a complex codomain without a cited complex continuity convention. It is now real-valued, matching the cited Euclidean continuity and published `L^infinity` contracts. |
| `def-conjugate-gradient-recurrence` | Its denominator was used before the nonzero search direction was justified. The later denominator-positivity proposition now discharges this well-definedness obligation through `justified_by`. |
| `def-l-one-approximate-identity-on-rn` | The representative norm `norm(K_epsilon)_1` was undefined by the sole dependency. It is now defined locally as `integral |K_epsilon|`. |
| `def-lanczos-process-as-hermitian-arnoldi` | The recurrence quantified past Arnoldi breakdown. It is now restricted to pre-breakdown steps, and `q_0=0` is fixed explicitly. |
| `def-left-right-and-symmetric-positive-definite-preconditioning` | Cholesky existence was attributed to a definition that only names the factorization. The exact existence-and-uniqueness theorem is now a dependency and the cited source. |
| `def-series-and-absolute-convergence-in-a-normed-space` | The real-valued finite-sum definition was applied to vectors. Vector partial sums are now defined recursively from `0_V` and vector addition. |
| `ex-minres-on-a-symmetric-indefinite-system` | The claimed step-2 iterate lay outside the stated no-breakdown MINRES definition. The example now claims and verifies only the defined step-1 residual minimizer. |
| `fs-l-one-convolution-is-defined-at-every-point` | The singular representatives were not functions at zero. They are now assigned value zero there, leaving their `L^1` classes and the divergent convolution at zero unchanged. |
| `prop-invertible-preconditioners-give-equivalent-linear-systems-with-explicit-residual-maps` | The error formulas used `x_*` without assuming a solution exists. Parts 2 and 3 now state that hypothesis and define the original and transformed errors. |
| `thm-conjugate-gradient-residuals-are-orthogonal-and-search-directions-are-a-conjugate` | Step 3.1 equated `p_i^* A p_{k+1}` with the oppositely oriented energy pairing under the library's first-slot-linear convention. It now proves the matrix expression directly. |
| `thm-hermitian-arnoldi-collapses-to-the-lanczos-three-term-recurrence` | Its `j=1` recurrence contained undefined `q_0`. The Statement now sets `q_0=0` together with `beta_0=0`. |
| `thm-support-of-a-convolution-lies-in-the-closure-of-the-support-sumset` | It applied the published real-valued support definition to complex representatives. The Statement now explicitly extends support to complex-valued functions by closing their nonzero sets. |

## Confirmed nonfatal decisions

Each row below is a correct claim with an immediate local bridge, citation, or
case omitted. None is false, overstrong, ill-typed, or supported by an invalid
witness, so fatal-only Step 8 leaves its text unchanged.

| item | nonfatal disposition |
|---|---|
| `cex-an-incomplete-subspace-need-not-be-closed` | A closed dense subset equals the ambient space directly from the definitions of closure and density. |
| `cex-two-l-two-functions-can-have-convolution-outside-l-two` | For the displayed positive kernels, absolute integrability at each `x>2` follows immediately by splitting into bounded and tail regions. |
| `cor-convolution-of-conjugate-l-p-and-l-q-functions-is-continuous-and-vanishes-at-infinity` | The norm identity is the elementary reflection-and-translation change of variables for Lebesgue measure. |
| `cor-l-one-approximate-identities-converge-uniformly-on-compacta-for-continuous-functions` | The proof uses a compact neighbourhood, hence a bounded Borel set of finite measure; the overbroad wording of `[L3]` carries no load. |
| `def-product-norms-on-finitely-many-normed-spaces` | The three formulas are well formed; the omitted `2`-norm triangle check is the standard finite-dimensional Minkowski calculation. |
| `ex-c-of-a-compact-space-is-banach` | For complex scalars, boundedness follows immediately by applying the real extreme-value theorem to the continuous modulus or to real and imaginary parts. |
| `ex-c0-is-a-banach-space` | The sequential closedness argument is valid in the norm metric, and closure under vector operations is immediate from the definition of convergence to zero. |
| `ex-cb-of-a-space-is-banach` | Coordinate limits exist by completeness of the real or complex scalar field, an immediate standard bridge. |
| `ex-clustered-eigenvalues-give-a-better-cg-bound-than-spread-eigenvalues` | The computation compares the universal error factors; a particular right-hand side and initial error are unnecessary to that comparison. |
| `ex-conjugate-gradients-can-terminate-at-a-relative-grade-smaller-than-the-dimension` | The displayed first-step update is the standard recurrence already fixed on the paired A page; the missing direct citation is local. |
| `ex-conjugate-gradients-on-a-two-by-two-hermitian-positive-definite-system` | The computations use the paired page's recurrence; the omitted direct citation does not affect the arithmetic. |
| `ex-ell-infinity-is-a-banach-space` | Coordinate limits exist by scalar completeness; the remainder of the supremum-norm proof is correct. |
| `ex-finite-sequences-c00-with-standard-norms` | The inclusions are visibly linear and norm-preserving under the displayed restricted norms, so the completion applications are valid. |
| `ex-jacobi-and-gauss-seidel-splittings-with-spectral-radius-comparison` | The update rule is the defining stationary iteration on the paired A page; the missing tag is local. |
| `ex-mollifying-the-unit-interval-indicator-at-two-scales` | The omitted choice hypothesis belongs to the cited general proposition, while the displayed compact-support and mass calculation verifies this concrete family directly. |
| `ex-polynomials-are-not-complete-in-the-supremum-norm` | Compactness of `[a,b]` and the unital point-separating polynomial algebra are immediate checks before Stone--Weierstrass. |
| `ex-rational-box-step-functions-give-a-countable-dense-family-in-l-two-of-unit-interval` | Intersecting rational interval approximants with `[0,1]` preserves rational endpoints and cannot increase the error. |
| `ex-the-gaussian-family-is-an-l-one-approximate-identity` | The standard normalized Gaussian integral is correct; the missing normalization citation is a dependency gap rather than a false computation. |
| `lem-a-compact-set-inside-a-bounded-open-set-admits-an-explicit-compactly-supported-cutoff` | A bounded open subset of `R^n` has nonempty complement; inserting that one-line observation licenses the distance function. |
| `lem-absolutely-convergent-series-is-cauchy` | A convergent real sequence is Cauchy, so the scalar tail estimate is immediate. |
| `lem-borel-representatives-make-the-convolution-integrand-borel-measurable` | Complex multiplication is continuous on `R^2`, so the product of the two Borel complex-valued factors is Borel. |
| `lem-compactly-supported-continuous-functions-are-translation-continuous-in-l-p` | The closed ball used in the proof is Borel measurable and bounded, so its Lebesgue measure is finite under the cited result's exact form. |
| `lem-completion-operations-are-well-defined` | Completeness of the real scalar field supplies convergence of the Cauchy norm sequence; the missing citation is local. |
| `lem-convolution-is-independent-of-the-chosen-borel-representatives` | Reflection is the linear map `-I`, so nullity of `x-N_f` follows from linear invariance followed by translation invariance. |
| `lem-countable-generators-yield-countable-set-algebras` | A nonempty finite family can be enumerated with repetitions; the empty case is already separate. |
| `lem-elementary-duality-formula-for-nonnegative-l-p-functions` | Choosing a nonnegative measurable representative makes the displayed extremizer pointwise well defined. |
| `lem-finite-measure-sets-admit-compact-open-sandwiches-with-small-excess` | Outer regularity plus measurability, finiteness, and the separately cited difference formula gives the exact excess estimate. |
| `lem-finite-measure-sets-are-approximable-by-a-countable-generating-algebra` | Finite unions of a sigma-finite cover give the required increasing finite-measure exhaustion. |
| `lem-finite-measure-sets-are-approximable-by-finite-unions-of-boxes` | An at-most-countable cube family is handled by a finite list or an enumeration; the empty case takes the empty union. |
| `lem-finite-product-norms-are-equivalent` | For nonnegative coordinates, squaring gives `norm(a)_2 <= norm(a)_1` immediately. |
| `lem-vector-operations-are-continuous-in-a-normed-space` | The usual modulus metric on `C`, identified with the Euclidean metric on `R^2`, supplies the neighbourhood condition. |
| `prop-l-one-convolution-is-bilinear-commutative-and-associative` | The affine reflection-translation substitution preserves Lebesgue measure; the omission is a local change-of-variables citation. |
| `prop-mollifier-families-are-l-one-approximate-identities` | The displayed rescaling identity is the standard integral consequence of the cited linear measure-scaling theorem. |
| `thm-banach-series-criterion` | The nonnegative comparison test against the geometric series makes the telescoping series absolutely convergent. |
| `thm-c-c-infinity-rn-is-dense-in-l-p-of-rn` | Existence of a standard unit-mass compactly supported smooth bump is the familiar local construction; the density argument itself is correct. |
| `thm-completion-universal-property-for-bounded-linear-maps` | Any second bounded linear extension is Lipschitz by the same estimate `[L2]`, hence continuous and subject to extension uniqueness. |
| `thm-conjugate-gradient-chebyshev-bound-in-the-a-norm` | The omitted `kappa=1` case is immediate: `A` is a positive scalar multiple of the identity and CG solves after one step. |
| `thm-conjugate-gradient-is-the-krylov-galerkin-method-and-minimizes-the-energy-error` | The omitted recurrence citation supplies all update identities used in step 1.1. |
| `thm-conjugate-gradient-terminates-by-the-relative-grade-in-exact-arithmetic` | Hermitian positive definiteness implies invertibility immediately, for example by the already opened Cholesky factorization theorem. |
| `thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign` | Rescaling a smooth compactly supported function preserves smoothness and scales its compact support; the domination argument is otherwise complete. |
| `thm-finite-products-of-banach-spaces-are-banach` | The duplicate threshold name is a notational collision; renaming the product Cauchy threshold leaves the proof unchanged. |
| `thm-l-infinity-closure-of-c-c-rn-is-c-zero-rn` | A continuous function's essential supremum equals its supremum, and the uniform-limit theorem then gives the claimed representative. |
| `thm-l-infinity-of-unit-interval-is-not-separable` | Uncountability of `[0,1]` is a foundational fact; the separated-family argument is correct. |
| `thm-l-one-approximate-identities-converge-in-l-p` | Choosing Borel representatives makes the product integrand measurable; this is the same representative bridge already developed on the page. |
| `thm-l-one-convolution-exists-almost-everywhere-and-obeys-the-l-one-bound` | Translation invariance of the Lebesgue integral is the immediate change-of-variables bridge in step 1.1. |
| `thm-l-p-of-a-sigma-finite-countably-generated-measure-space-is-separable` | The published `L^p` norm theorem supplies the triangle inequality used in the final estimate. |
| `thm-metric-completion-carries-a-unique-banach-space-structure` | Products with a dense factor are dense, and continuous maps agreeing on a dense set into a metric space agree everywhere. |
| `thm-minkowski-integral-inequality` | Finite unions of a sigma-finite cover form the increasing finite-measure exhaustion used for truncation. |
| `thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn` | The rational-density fact `[L2]` licenses the endpoint and coefficient choices; the defect is only an omitted tag. |
| `thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity` | Translation invariance of the integral follows immediately from the cited translation invariance of Lebesgue measure. |
| `thm-young-convolution-inequality` | Tonelli is a standard already published product-measure theorem; adding its direct dependency is a local citation repair. |

## False positives

| item | reason the rejection is false |
|---|---|
| `def-minres-iterate-from-the-lanczos-tridiagonalization` | The explicit assumption that Lanczos runs through step `m` without breakdown already entails a nonzero initial residual and excludes `r_0=0`. |
| `ex-lp-banach-space-dictionary` | The full cited remark explicitly states that sequence spaces `ell^p` are the counting-measure instances of `L^p`; the rejection read only its headline claim. |
| `fs-convolution-is-measurable-for-every-lebesgue-representative` | `[L1]` accurately describes what the two cited Borel-representative items do and carries only editorial context; the refutation itself rests on the exact continuous-precomposition counterexample `[L2]`. |
| `lem-closed-subspace-of-a-banach-space-is-banach` | Closedness is an explicit hypothesis of the Statement. A Facts block need not repeat a Statement hypothesis for the proof to use it. |
| `thm-minres-minimizes-the-euclidean-residual-over-the-hermitian-krylov-space` | `[F1]` invokes the MINRES definition, which already includes the nonzero-residual and no-breakdown assumptions; step 1.1 uses `[F1]` together with the Arnoldi reduction. |
| `thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p` | The published `L^p` space cited by this item is real-valued, so the real simple-approximation theorem applies exactly. |

## Rejudge targets

The repaired items requiring targeted rejudgment are:

1. `cex-conjugate-gradients-can-break-on-a-symmetric-indefinite-system`
2. `cex-conjugate-gradients-does-not-apply-to-a-nonsymmetric-invertible-matrix`
3. `def-c-c-and-c-c-infinity-on-rn`
4. `def-c-zero-on-rn`
5. `def-conjugate-gradient-recurrence`
6. `def-l-one-approximate-identity-on-rn`
7. `def-lanczos-process-as-hermitian-arnoldi`
8. `def-left-right-and-symmetric-positive-definite-preconditioning`
9. `def-series-and-absolute-convergence-in-a-normed-space`
10. `ex-minres-on-a-symmetric-indefinite-system`
11. `fs-l-one-convolution-is-defined-at-every-point`
12. `prop-invertible-preconditioners-give-equivalent-linear-systems-with-explicit-residual-maps`
13. `thm-conjugate-gradient-residuals-are-orthogonal-and-search-directions-are-a-conjugate`
14. `thm-hermitian-arnoldi-collapses-to-the-lanczos-three-term-recurrence`
15. `thm-support-of-a-convolution-lies-in-the-closure-of-the-support-sumset`

No alert, cross-group, or published-repair row was needed.

## Validation and blockers

- Focused `precheck` passed on all eight repaired proof-bearing items: 8 checked, 0 failing.
- `depcheck --quiet` exited 0 with no errors and 312 standing warnings.
- `content-policy` passed separately for batches 2, 3, and 4: 30, 47, and 29 scoped items, all with 0 errors and 0 warnings.
- The licensed edits' citation and derivation rows were mechanically regenerated in the three owned batch proof-contract files; strict checks then passed 21/21, 41/41, and 21/21 with 0 errors and 0 warnings.
- Focused `rendercheck` passed all 15 repaired files: valid YAML, balanced and parseable math, and no rendering-contract violations.
- `defect-ledger validate --run frontier-27` passed after the locked append: 214 run rows, 0 errors.
- The exact adjudication append contains 72 group-a rows: 15 fatal, 51 nonfatal, and 6 false positives.
- `step8-scope check --run frontier-27` passed: 4 groups, 449 partitioned items, 76 routed rejection rows, and 0 cross-group alerts requiring disposition.
- The Step-8 guard was run against `pre-step8`. All 15 group-a edits carry exact matching fatal licences and it reports 0 group-a errors. The latest level-wide invocation found 96 changed items, 66 licensed changes, and 30 unlicensed edits belonging to other concurrently active groups.
- `defect-ledger check --run frontier-27` passed with 244 run rows and 0 errors.

There are no group-a mathematical blockers. The only remaining guard failures
are outside this group's ownership and must be closed by their assigned groups.
