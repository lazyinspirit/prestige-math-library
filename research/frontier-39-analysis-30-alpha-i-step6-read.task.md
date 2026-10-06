# Step 6 Alpha group reader — read-only digest — group **i**, run `frontier-39-analysis-30`

- You are the read-only Step 6 Alpha group reader for batches **15**, **16**, **30**: 3 A/B pair(s), 6 page(s), 92 item(s).

- Read every owned item and every listed seam before returning the compact
  schema-constrained digest. That file, not this conversation, is the handoff
  to a fresh Step-7 adjudicator. No judge verdict is supplied here.
- Read items in dependency order across the group: suppliers before their
  direct and indirect consumers, including prerequisites outside the group.
- In the digest, `pages_read` is exactly the ids under **Your pages** and
  `items_read` exactly the ids under **Your content**. External items you
  open belong only in `published_dependencies`; never add them to those inventories.
- Everything below is derived from disk by `tools/step7-scope.mjs`; no line
  of it is a judgement about mathematics.

## Read scope

- **Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything an owned item touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

- **This dispatch is read-only.** Record concerns about owned items and alerts
  about other groups in the returned digest; do not repair anything.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 15 | `the-direct-method-and-euler-lagrange-equations` | A | pde | 458.039 | `schauder-and-lp-elliptic-estimates`, `interior-and-boundary-sobolev-elliptic-regularity`, `monadicity-and-becks-theorem`, `banach-space-differential-calculus-and-banach-manifolds` |
| 15 | `the-direct-method-and-euler-lagrange-equations-examples` | B | pde | 458.04 | `the-direct-method-and-euler-lagrange-equations` |
| 16 | `constrained-variational-problems-and-variational-inequalities` | A | pde | 458.041 | `the-direct-method-and-euler-lagrange-equations`, `weak-elliptic-maximum-principles-and-holder-regularity` |
| 16 | `constrained-variational-problems-and-variational-inequalities-examples` | B | pde | 458.042 | `constrained-variational-problems-and-variational-inequalities` |
| 30 | `uncertainty-principles-for-fourier-analysis` | A | fourier-analysis | 510.06511 | `finite-fourier-analysis-and-the-fast-fourier-transform`, `schwartz-space-and-the-plancherel-theorem`, `the-identity-theorem-and-the-open-mapping-theorem` |
| 30 | `uncertainty-principles-for-fourier-analysis-examples` | B | fourier-analysis | 510.06512 | `uncertainty-principles-for-fourier-analysis` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `the-direct-method-and-euler-lagrange-equations` — The Direct Method and Euler Lagrange Equations (27 item(s))

- `def-proper-coercive-and-weakly-lower-semicontinuous-functional` · definition — Proper, coercive and weakly lower semicontinuous extended-real functionals
- `def-convex-and-strictly-convex-functionals-on-a-banach-space` · definition — Convex and strictly convex functionals on a convex subset of a real vector space
- `lem-norm-closed-convex-sets-are-weakly-closed` · lemma — A norm-closed convex set is weakly sequentially closed
- `lem-convex-norm-lower-semicontinuous-functionals-are-weakly-lower-semicontinuous` · lemma — A convex norm-lower-semicontinuous functional is weakly lower semicontinuous
- `lem-coercivity-makes-every-finite-level-minimising-sequence-bounded` · lemma — Coercivity bounds every finite-level sequence
- `lem-bounded-minimising-sequence-has-a-weakly-convergent-subsequence` · lemma — A bounded sequence in a reflexive Banach space has a weakly convergent subsequence
- `lem-w-one-p-is-reflexive` · lemma — W^{1,p}(Omega) is reflexive for 1<p<infinity
- `lem-weak-closedness-keeps-the-direct-method-limit-admissible` · lemma — Weak closedness keeps the direct-method limit admissible
- `lem-liminf-passage-makes-the-weak-limit-a-minimiser` · lemma — The liminf passage makes the weak limit a minimiser
- `thm-direct-method-in-a-reflexive-banach-space` · theorem — The direct method in a reflexive Banach space
- `cor-strict-convexity-gives-uniqueness-of-a-minimiser` · corollary — Strict convexity gives uniqueness of a minimiser
- `def-gateaux-and-frechet-derivatives-of-a-functional` · definition — Gateaux and Frechet derivatives of a functional
- `lem-fundamental-lemma-of-the-calculus-of-variations` · lemma — The fundamental lemma of the calculus of variations
- `lem-caratheodory-composition-is-measurable` · lemma — A Caratheodory integrand composed with measurable functions is measurable
- `lem-differentiation-of-an-integral-functional` · lemma — Differentiation of an integral functional under growth domination
- `thm-first-variation-vanishes-at-an-interior-minimiser` · theorem — The first variation vanishes at an interior minimiser
- `thm-weak-euler-lagrange-equation-for-integral-functionals` · theorem — The weak Euler-Lagrange equation for integral functionals with fixed trace
- `cor-classical-euler-lagrange-equation-under-regularity` · corollary — The classical Euler-Lagrange equation under regularity
- `lem-boundary-fundamental-lemma-of-the-calculus-of-variations` · lemma — The boundary fundamental lemma of the calculus of variations
- `thm-natural-boundary-condition-for-free-boundary-variations` · theorem — The natural boundary condition for free boundary variations
- `lem-affine-dirichlet-trace-class-is-nonempty-convex-and-weakly-closed` · lemma — The affine Dirichlet trace class is nonempty, convex and weakly closed
- `thm-stationarity-is-sufficient-for-a-global-minimum-of-a-convex-differentiable-functional` · theorem — Stationarity is sufficient for a global minimum of a convex differentiable functional
- `lem-a-twice-differentiable-local-minimiser-has-nonnegative-second-variation` · lemma — A twice differentiable local minimiser has nonnegative second variation
- `thm-direct-method-for-convex-integral-functionals` · theorem — The direct method for convex integral functionals
- `thm-dirichlet-principle-for-poisson-equation` · theorem — The Dirichlet principle for the Poisson equation
- `cor-minimisers-are-classical-when-elliptic-regularity-applies` · corollary — Minimisers are classical when elliptic regularity applies
- `rem-euler-lagrange-is-necessary-not-sufficient-without-convexity` · remark — Euler-Lagrange is necessary but not sufficient without convexity

### `the-direct-method-and-euler-lagrange-equations-examples` — The Direct Method and Euler Lagrange Equations — Examples (10 item(s))

- `ex-dirichlet-energy-with-affine-boundary-data` · example — The harmonic affine extension minimises the Dirichlet energy
- `ex-one-dimensional-euler-lagrange-equation` · example — The one-dimensional Euler-Lagrange equation for an energy with a potential
- `cex-a-coercive-functional-need-not-attain-without-weak-lower-semicontinuity` · counterexample — A coercive functional need not attain without weak lower semicontinuity
- `cex-a-minimising-sequence-need-not-converge-strongly` · counterexample — A minimising sequence need not converge strongly
- `cex-euler-lagrange-stationarity-does-not-imply-a-minimum` · counterexample — Stationarity of the Euler-Lagrange equation does not imply a minimum
- `cex-nonstrict-convexity-allows-many-minimisers` · counterexample — Non-strict convexity allows many minimisers
- `ex-natural-neumann-condition-from-a-free-endpoint` · example — The natural Neumann condition from a free endpoint in one dimension
- `cex-a-norm-closed-nonconvex-set-need-not-be-weakly-closed` · counterexample — A norm-closed nonconvex set need not be weakly closed
- `cex-nonconvex-gradient-energy-can-lose-weak-lower-semicontinuity` · counterexample — A nonconvex gradient energy can lose weak lower semicontinuity
- `ex-fixed-trace-and-free-trace-variations-give-different-boundary-equations` · example — Fixed-trace and free-trace variations give different boundary equations

### `constrained-variational-problems-and-variational-inequalities` — Constrained Variational Problems and Variational Inequalities (26 item(s))

- `thm-direct-method-on-a-weakly-closed-constraint-set` · theorem — The direct method on a weakly closed constraint set
- `lem-strong-ltwo-compactness-preserves-unit-normalisation` · lemma — Weak H^1 convergence plus Rellich preserves the L^2 unit normalisation
- `thm-banach-implicit-function-theorem-for-a-split-surjective-derivative` · theorem — A split surjective derivative parametrises its level set
- `lem-regular-banach-constraint-directions-are-realised-by-level-set-curves` · lemma — Regular constraint directions are realised by level-set curves
- `lem-tangent-space-to-a-regular-level-set-is-the-kernel-of-the-constraint-derivative` · lemma — The tangent space of a regular level set is the kernel of the constraint derivative
- `lem-the-differential-annihilates-the-tangent-kernel-at-a-constrained-extremum` · lemma — The differential annihilates the tangent kernel at a constrained extremum
- `lem-functionals-vanishing-on-the-common-kernel-of-an-independent-family` · lemma — Functionals vanishing on a common kernel are combinations of an independent family
- `thm-hilbert-space-lagrange-multiplier-rule-for-one-regular-constraint` · theorem — The Lagrange multiplier rule for one regular constraint in Hilbert space
- `thm-finite-regular-constraint-lagrange-multiplier-rule` · theorem — The finite regular-constraint Lagrange multiplier rule
- `lem-lagrange-multiplier-is-unique-when-constraint-gradients-are-independent` · lemma — The multiplier vector is unique when the constraint gradients are independent
- `lem-hilbert-projection-characterisation-by-a-variational-inequality` · lemma — The projection onto a closed convex set is characterised by a variational inequality
- `lem-metric-projection-onto-a-nonempty-closed-convex-set-is-nonexpansive` · lemma — The metric projection onto a closed convex set is nonexpansive
- `thm-stampacchia-variational-inequality` · theorem — Stampacchia's variational inequality
- `lem-one-dimensional-trace-truncation-compatibility` · lemma — Endpoint trace commutes with Sobolev truncation on an interval
- `def-closed-convex-obstacle-set-and-variational-inequality` · definition — The closed convex obstacle set and the obstacle variational inequality
- `lem-the-obstacle-admissible-set-is-closed-convex-and-weakly-closed` · lemma — The obstacle admissible set is nonempty, convex, norm closed and weakly sequentially closed
- `thm-existence-and-uniqueness-for-the-obstacle-problem` · theorem — Existence, uniqueness and energy minimality for the obstacle problem
- `thm-lipschitz-stability-of-strongly-monotone-variational-inequalities` · theorem — Lipschitz stability of strongly monotone variational inequalities
- `lem-nonnegative-test-pairings-imply-a-e-nonnegativity-for-ltwo-functions` · lemma — A function with nonnegative test pairings is nonnegative a.e.
- `cor-obstacle-complementarity-in-distribution-form` · corollary — Obstacle complementarity in distribution form
- `cor-obstacle-reaction-is-supported-on-the-contact-set-under-measure-regularity` · corollary — The obstacle reaction is supported on the contact set under measure regularity
- `thm-lewy-stampacchia-bounds-in-the-sourced-obstacle-regularity-class` · theorem — Lewy–Stampacchia distribution bound for bounded-coefficient obstacle forms
- `lem-absolute-value-does-not-increase-dirichlet-energy-or-change-ltwo-normalisation` · lemma — The absolute value preserves the L^2 norm and the Dirichlet energy
- `thm-first-dirichlet-eigenfunction-by-constrained-minimisation` · theorem — The first Dirichlet eigenfunction by constrained minimisation
- `thm-higher-eigenvalues-by-orthogonality-constrained-minimisation` · theorem — Higher eigenvalues by orthogonality-constrained minimisation
- `rem-pointwise-and-integral-constraints-have-different-regularity-tests` · remark — Pointwise and integral constraints have different regularity tests

### `constrained-variational-problems-and-variational-inequalities-examples` — Constrained Variational Problems and Variational Inequalities - Examples (8 item(s))

- `ex-rayleigh-quotient-on-an-interval` · example — The Rayleigh quotient on an interval
- `ex-isoperimetric-integral-constraint-and-its-multiplier` · example — An integral constraint and its constant multiplier
- `cex-the-ltwo-unit-sphere-is-not-weakly-closed-in-an-infinite-dimensional-hilbert-space` · counterexample — The L^2 unit sphere is not weakly sequentially closed in infinite dimensions
- `ex-one-dimensional-obstacle-problem-and-contact-set` · example — A one-dimensional obstacle problem and its contact set
- `cex-obstacle-complementarity-product-needs-extra-regularity` · counterexample — The complementarity product needs extra regularity
- `cex-obstacle-admissible-set-can-be-empty-when-trace-and-obstacle-are-incompatible` · counterexample — The obstacle admissible set can be empty when trace and obstacle are incompatible
- `cex-dependent-equality-constraints-have-nonunique-multiplier-vectors` · counterexample — Dependent equality constraints have nonunique multiplier vectors
- `ex-one-dimensional-obstacle-reaction-is-supported-on-the-contact-set` · example — The one-dimensional obstacle reaction is supported on the contact set

### `uncertainty-principles-for-fourier-analysis` — Uncertainty Principles for Fourier Analysis (16 item(s))

- `def-spatial-and-frequency-centres-and-variances` · definition — Spatial and frequency centres and variances of an $L^2$ function with finite second moments
- `lem-centering-by-translation-and-modulation-preserves-the-variance-product` · lemma — Centring by translation and modulation preserves the variance product
- `lem-position-derivative-commutator-estimate` · lemma — The coordinate inequality $\|x_jf\|_2\|\partial_jf\|_2\ge\frac12\|f\|_2^2$
- `rem-heisenberg-uncertainty-is-owned-by-functional-analysis` · remark — The sharp Heisenberg theorem is owned by functional analysis
- `cor-dimensional-heisenberg-uncertainty-inequality` · corollary — The summed $n$-dimensional Heisenberg inequality
- `thm-support-measure-uncertainty-inequality` · theorem — The support-measure uncertainty inequality $|E||F|\ge1$
- `lem-compact-support-gives-an-entire-fourier-laplace-transform` · lemma — Compact support gives an entire Fourier-Laplace transform by slices
- `thm-qualitative-compact-support-uncertainty-principle` · theorem — A function and its transform cannot both have compact support
- `lem-hardy-entire-growth-rigidity` · lemma — Entire rigidity under Gaussian growth and real-axis decay
- `thm-hardy-gaussian-uncertainty-principle` · theorem — Hardy's Gaussian uncertainty principle in $\mathbb R^n$
- `lem-hardy-subcritical-gaussians-show-the-threshold-is-sharp` · lemma — Subcritical Gaussians show the Hardy threshold $ab=1$ is sharp
- `rem-proof-cost-and-complex-analysis-interface-for-hardy-uncertainty` · remark — Proof cost and complex-analysis interface for Hardy uncertainty
- `thm-finite-dft-support-product-uncertainty` · theorem — Finite support-product uncertainty for the unitary DFT
- `rem-uncertainty-principles-measure-different-notions-of-localisation` · remark — Uncertainty principles measure different notions of localisation
- `lem-gaussian-decay-gives-an-entire-fourier-laplace-transform` · lemma — Gaussian decay gives an entire Fourier-Laplace transform and its growth bound
- `lem-separately-holomorphic-vanishing-on-a-real-box-is-zero` · lemma — Separately holomorphic functions vanishing on a real box are zero

### `uncertainty-principles-for-fourier-analysis-examples` — Uncertainty Principles for Fourier Analysis — Examples (5 item(s))

- `ex-gaussian-attains-heisenberg-equality` · example — The Gaussian attains equality in the Heisenberg inequality
- `cex-finite-variance-is-not-the-same-as-compact-support` · counterexample — Finite variance is not compact support
- `ex-hardy-critical-and-subcritical-gaussian-regimes` · example — Critical, subcritical and supercritical Gaussian regimes for Hardy's theorem
- `ex-finite-dft-delta-and-constant-extremisers` · example — Delta and constant functions are finite DFT extremisers
- `cex-both-supports-cannot-be-singletons-when-n-is-greater-than-one` · counterexample — Both finite supports cannot be singletons when $N>1$

## Your seams

Your pages depend on another group's:

- `the-direct-method-and-euler-lagrange-equations` requires `schauder-and-lp-elliptic-estimates` (group h, batch 13)
- `the-direct-method-and-euler-lagrange-equations` requires `interior-and-boundary-sobolev-elliptic-regularity` (group g, batch 12)
- `constrained-variational-problems-and-variational-inequalities` requires `weak-elliptic-maximum-principles-and-holder-regularity` (group g, batch 14)
- `uncertainty-principles-for-fourier-analysis` requires `finite-fourier-analysis-and-the-fast-fourier-transform` (group a, batch 28)

Another group's pages depend on yours:

- `strongly-continuous-semigroups-and-hille-yosida` (group j) requires your `constrained-variational-problems-and-variational-inequalities`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

---

# Step 6 Alpha group reader — read-only digest, `frontier-39-analysis-30`

- **Role and scope:** You are the Step 6 Alpha group reader for the assigned group in the generated group header. Read every assigned page and item, its cited published dependencies, and every listed cross-group seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned group: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the group.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-7 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the group's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-group findings correctly:** Put a finding about another group's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
