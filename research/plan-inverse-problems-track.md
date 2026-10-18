# Inverse Problems — integrated prose scaffold

**Status: six source dossiers integrated and substantive audit repairs applied; planning only.** This document proposes
55 ordered A/B pairs (110 pages) for the new `inverse-problems` category. It
does not author library carriers or edit the shared `research/plan-spec.json`.
Exact page registrations, proposed item IDs, dependency edges, pathway parts,
and current supplier paths are also recorded in
`research/inverse-problems-planning-2026-10-18/proposed-registration-delta.json`.
The six reader reports and their source metadata remain in that directory.

The category treats an inverse problem as recovery of an unknown object from a
forward map, then separates identifiability, stability, regularization,
statistical risk, posterior uncertainty, and computation. It reuses published
numerical regularization, optimization, statistical, Bayesian, functional
analysis, and forward-PDE results by their exact current interfaces. It does
not re-teach SVD, finite-dimensional least squares, Tikhonov, Landweber,
IRGNM, generic proximal optimization, PDE adjoints, general posterior kernels,
or general MCMC. New pages add inverse-specific bridges and results the
existing carriers do not prove.

The dependency direction is one-way: the category may depend on published
mathematics and on its earlier inverse-problem pairs; other categories do not
depend on it. Every proposed `op-` item is a terminal research question, never
a logical supplier. Every A page has a B examples companion; B items are
worked examples, counterexamples, or explicit numerical illustrations and
never supply another page. Algorithms are operational definitions with named
spaces, data, admissibility checks, outputs, branches, and stopping rules;
their convergence or risk guarantees are separate result items.

## Current supplier interfaces

The following are the live published carriers inspected by the author/readers for this scaffold; reviewer checks and exact paths are separately recorded in the audit inventory.
The entry names the exact interface being reused; it does not certify a result
beyond the carrier's own assumptions or its recorded proof scope.

| Current carrier path | Exact supplier interfaces and intended use |
|---|---|
| `library/functional-analysis/compact-self-adjoint-hilbert-schmidt-and-trace-class-operators.md`; `library/linear-algebra/the-moore-penrose-pseudoinverse-and-regularised-least-squares.md` | `thm-singular-value-decomposition-for-compact-operators`, `thm-moore-penrose-pseudoinverse-exists-and-is-unique`, and the finite-dimensional minimum-norm least-squares formulas supply compact Hilbert SVD, adjoints, generalized inverse, and finite matrix algebra. New work adds the Picard range condition and inverse-specific source classes where not already supplied. |
| `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/numerical-inverse-problems-and-regularization-error.md`; `.../spectral-regularization-and-parameter-choice.md`; `.../iterative-regularization-and-early-stopping.md` | Reuse `thm-tikhonov-error-chain-with-discretization-and-residual`, `lem-truncated-svd-bias-and-data-noise-decomposition`, `lem-hilbert-tikhonov-noise-amplification-bound`, `def-compact-spectral-filter-and-qualification`, `thm-tikhonov-convergence-under-noise-parameter-coupling`, `thm-tikhonov-source-condition-rate-and-qualification-saturation`, `alg-morozov-discrepancy-bracketing-and-bisection`, `thm-morozov-discrepancy-choice-converges`, `alg-landweber-iteration-with-discrepancy-stopping`, `thm-landweber-source-and-noise-error-bounds`, and `thm-irlgnm-local-source-condition-discrepancy-convergence`. These are the current source of the published deterministic algorithms and their exact guarantees. |
| `library/mathematical-statistics/minimax-lower-bounds-and-information-theoretic-methods.md`; `library/mathematical-statistics/decision-theoretic-upper-bounds-and-oracle-risk.md`; `library/mathematical-statistics/losses-risk-and-decision-rules.md` | Reuse `thm-two-point-le-cam-risk-bound`, `thm-assouad-hypercube`, `thm-fano-packing`, `thm-gaussian-sparse-sequence-minimax-lower-bound`, `cor-matching-minimax-rate`, `def-loss-function-and-risk`, and `def-bayes-and-minimax-risk`. The sparse-sequence theorem is finite-dimensional identity design; it does not establish inverse singular-value rates. |
| `library/bayesian-computational-statistics/weak-nonparametric-bernstein-von-mises.md`; `.../bayesian-models-priors-and-posterior-laws.md`; `.../gaussian-process-support-and-concentration.md`; `.../gaussian-process-priors-and-posterior-laws.md` | Reuse `def-negative-sobolev-space-for-white-noise`, `lem-white-noise-is-borel-gaussian-on-negative-sobolev-space`, the posterior-kernel and finite Gaussian-process posterior interfaces, and Banach-Gaussian support, RKHS, Cameron–Martin, and Fernique results. These do not themselves prove inverse-posterior stability or contraction. |
| `library/bayesian-computational-statistics/posterior-consistency-and-tests.md`; `.../gaussian-process-posterior-contraction.md`; `.../iid-posterior-contraction.md`; `.../functional-bayesian-limits-and-credible-set-calibration.md`; `.../adaptive-empirical-bayes-credible-set-calibration.md` | Reuse the exact Hellinger/TV convention, posterior denominator and testing tools, and the stated model-specific contraction and coverage theorems. In particular `thm-adaptive-empirical-bayes-credible-ball-conservative-coverage-on-polished-tails` applies only to its polished-tail Gaussian sequence setting; it is not general inverse-problem coverage. The published example `ex-posterior-credible-interval-need-not-have-nominal-frequency-coverage` supplies a caveat, not a theorem. |
| `library/bayesian-computational-statistics/general-state-mcmc-kernels-and-reversibility.md`; `.../mcmc-ergodicity-and-mixing.md`; `.../feynman-kac-particle-filters.md` | Reuse general-state invariance/reversibility, drift-minorization/ergodicity, and Feynman–Kac SMC interfaces. Invariance alone is not mixing or a finite-run error guarantee. |
| `library/numerical-optimization-inverse-problems-and-uncertainty-quantification/proximal-gradient-and-accelerated-composite-optimization.md`; `.../operator-splitting-admm-and-primal-dual-methods.md`; `.../gauss-newton-and-levenberg-marquardt-methods.md`; `.../discrete-continuous-and-pde-adjoint-sensitivities.md` | Reuse exact finite-dimensional convex proximal/PHDG, safeguarded LM, automatic differentiation, and PDE adjoint-gradient suppliers. They do not automatically extend to infinite-dimensional TV, arbitrary denoisers, or ill-posed nonlinear inverse maps. |
| `library/pde/fredholm-elliptic-problems-and-the-elliptic-spectrum.md`; `.../sobolev-traces-and-zero-boundary-values.md`; `.../wave-energy-finite-propagation-and-huygens.md`; `library/numerical-pdes-and-spatial-discretization/volume-integral-scattering-and-partial-wave-error.md` | Reuse weak elliptic solvability, Sobolev trace/Green formulas, the stated wave energy/finite-propagation results, and the outgoing Helmholtz volume-integral forward model. They are forward-model suppliers, not inverse uniqueness or stability theorems. |

The live status and exact item lists for every row above are recorded again in
the machine-readable delta. No draft item (including
`def-finite-hypothesis-testing-beta`) is a supplier. The existing selective
confidence-set result is not used as a general inverse confidence theorem.

## Pair designs in dependency order

Each pair below names its A and B pages, the new items and their logical
suppliers, the theorem contracts, the proof work, and the source lane. The
machine-readable delta records the same dependencies as item `deps` and page
`requires` arrays. “Existing” means a current published carrier at the path in
the supplier table; a cited paper is evidence, never a substitute for a local
proof.

<a id="ip-01"></a>

### IP-01 — Inverse maps, identifiability, and stability

**Pages:** `inverse-problems-identifiability-and-stability` /
`inverse-problems-identifiability-and-stability-examples`.
**A items:** `def-ip-forward-map-and-solution-classes`,
`def-ip-identifiability-and-stability-modulus`, and
`thm-ip-kernel-directions-preclude-unrestricted-recovery`.
The definitions name parameter/data metric spaces, an admissible truth class,
the forward map, a loss, identifiability modulo an explicitly declared
equivalence, and a stability modulus on that class. The theorem says that if
two admissible truths have identical data but positive separation `Δ` in a
metric loss, no data-only estimator can recover both exactly; at their common
observation its worst-case loss is at least `Δ/2`. More generally, if one
admissible observed datum lies within noise radius `δ` of each truth's
forward data, the same bound holds. Prove it by the triangle inequality.
This pair establishes the
category vocabulary and prevents injectivity, continuity of the inverse, and
regularized recovery from being conflated. **B leaves:** a nontrivial linear
kernel, a severely ill-conditioned injective diagonal map, and a constrained
class that removes the particular kernel ambiguity. **Suppliers/source:**
metric and norm interfaces from functional analysis; reader 1 §§3–4 and reader
6's identifiability discussion.

<a id="ip-02"></a>

### IP-02 — Compact linear inverse maps and the Picard criterion

**Pages:** `linear-operators-pseudoinverses-and-picard-criteria` /
`linear-operators-pseudoinverses-and-picard-criteria-examples`.
**A items:** `def-ip-unbounded-hilbert-moore-penrose-inverse`, `def-ip-compact-linear-inverse-model`,
`thm-ip-closed-range-pseudoinverse-stability`, and
`thm-ip-picard-range-criterion-for-compact-operators`.
For compact `K:X→Y` between Hilbert spaces, use the published compact SVD and
Moore–Penrose suppliers. Add the exact Picard condition: with positive singular
values `s_j` and left singular vectors `u_j`, `y∈R(K)` iff `y⊥N(K*)` and
`Σ_j |⟨y,u_j⟩|²/s_j²<∞`, and then `K†y` has coefficients
`⟨y,u_j⟩/s_j` in the minimum-norm right-singular coordinates. Prove both
directions by solving the coefficient equation and using completeness; state
separately that `D(K†)=R(K)⊕R(K)⊥` and `K†` is bounded on this domain iff `R(K)` is closed. The finite matrix pseudoinverse carrier does not supply this unbounded Hilbert-space inverse: define it locally on this domain, with the orthogonal-range component mapped to zero. A nonzero `y∈N(K*)` is the explicit counterexample to omitting the orthogonality clause. **B leaves:** a dense
nonclosed range diagonal operator and an inconsistent datum outside the range.
**Requires:** IP-01 and published compact-operator SVD plus pseudoinverse pages.
**Source:** reader 1, Clason §§3.1–3.2, pp. 16–26.

<a id="ip-03"></a>

### IP-03 — Deterministic source classes and optimal recovery

**Pages:** `deterministic-source-conditions-and-optimal-recovery` /
`deterministic-source-conditions-and-optimal-recovery-examples`.
**A items:** `def-ip-power-source-set`,
`thm-ip-source-ball-modulus-of-continuity`, and
`thm-ip-deterministic-minimax-lower-bound-on-source-balls`.
For compact `K`, define `X_{ν,ρ}={|K|^νw:||w||≤ρ}` in `N(K)^⊥`; retain
`ν>0`, the deterministic noise ball `||y^δ-Kx†||≤δ`, and minimum-norm
solution conventions. Prove the conditional modulus bound
`ε(X_{ν,ρ},δ)≤δ^{ν/(ν+1)}ρ^{1/(ν+1)}` by spectral interpolation and attain
its exponent along `δ_j=ρs_j^{ν+1}` on singular-vector directions. Define the displayed centered modulus as `sup{||x||:x∈X_{ν,ρ},||Kx||≤δ}`; the two-truth modulus uses differences and its corresponding factors of two. Testing truths ±x against common noisy data zero gives the reconstruction lower bound. Arbitrarily large gaps in singular values do not give an equal power lower bound at every δ without further spectral assumptions. The lower bound applies to every reconstruction rule over the whole source ball;
it is not a claim about arbitrary truths outside that class. Reuse the
published source-power/Tikhonov items where their hypotheses match and supply
only the source-ball minimax argument locally. **B leaves:** diagonal
polynomial and exponential singular decay with power and logarithmic source
sets. **Requires:** IP-02 and the published spectral-regularization page.
**Source:** reader 1, Clason §4.2, pp. 36–43.

<a id="ip-04"></a>

### IP-04 — Data, operator, discretization, and solve errors

**Pages:** `operator-approximation-and-regularization-error` /
`operator-approximation-and-regularization-error-examples`.
**A items:** `def-ip-error-budget-for-computed-inversion` and
`prop-ip-regularized-output-error-splits-by-source`.
State the exact decomposition for a computed reconstruction into truth bias,
data perturbation, forward-operator approximation, pre-inversion residual,
and algebraic solve residual. The proposition is the triangle-inequality
identity/bound for the declared operators and inputs; it supplies no rate
until each term has a separately proved bound. Reuse
`thm-tikhonov-error-chain-with-discretization-and-residual`,
`lem-computed-augmented-tikhonov-solve-residual-and-output-error`, and
`thm-tikhonov-forward-discretization-and-stopping-coupling` rather than
restating them. **B leaves:** a mesh sequence with resolved data but unstable
small singular values, plus an iterative solve stopped at a nonzero residual.
**Requires:** IP-02, the existing numerical inverse error page, and the
published discretization/linear-solve suppliers. **Source:** reader 1,
Clason Ch. 8; numerical suppliers above.

<a id="ip-05"></a>

### IP-05 — Parameter rules and the noise-free veto

**Pages:** `parameter-choice-and-bakushinskii-veto` /
`parameter-choice-and-bakushinskii-veto-examples`.
**A items:** `def-ip-noise-level-free-parameter-rule` and
`thm-ip-bakushinskii-veto`.
Define a heuristic as a rule using only the operator and observed datum, not
the unknown noise level. For discontinuous `K†`, the veto says no such rule
can be universally convergent over all admissible data/noise sequences. The
proof converts hypothetical universal convergence into continuity of `K†`;
state clearly that this excludes universality, not success on restricted
classes. Existing Morozov, GCV, and L-curve algorithms remain their own
published interfaces, with heuristic status retained where the library gives
no optimality guarantee. **B leaves:** noise underestimation, a stable
restricted class, and a discrete-grid L-curve choice. **Requires:** IP-02,
IP-03, and `spectral-regularization-and-parameter-choice`.
**Source:** reader 1, Clason Thm. 4.8 and §§5–6.

<a id="ip-06"></a>

### IP-06 — Factorized and composite linear inversion

**Pages:** `factorized-and-composite-linear-inversion` /
`factorized-and-composite-linear-inversion-examples`.
**A items:** `def-ip-composite-double-regularization`,
`thm-ip-double-discrepancy-conditional-convergence`, and
`op-ip-optimal-composite-discrepancy-rate`.
Define the order explicitly for `A=G∘F` and the composed estimator
`R^F_γ R^G_α y`. Any theorem must assume the source's compatible
minimum-norm factorization (including `A†=F†G†` where invoked), the common
filter/source conditions, and both residual stopping rules; it must not claim
`(G∘F)†=F†G†` in general. The proof separates the first-stage regularization
error from amplification by the second stage and then uses its discrepancy
bound. The preprint is recent but unreviewed and has an order inconsistency
between introduction and body; resolve the version/order before authoring.
Optimality remains an `op-` item, never a supplier. **B leaves:** commuting
diagonal factors and a noncommuting/rank-deficient failure. **Requires:**
IP-02, IP-03, IP-05. **Source:** reader 1, Brandt–Horn (2026), all 22 pp.;
research-preprint status and proof caveats retained.

<a id="ip-07"></a>

### IP-07 — Statistical inverse experiments and white noise

**Pages:** `statistical-inverse-experiments-and-white-noise` /
`statistical-inverse-experiments-and-white-noise-examples`.
**A items:** `def-ip-isonormal-white-noise-experiment` and
`thm-ip-white-noise-spectral-sequence-representation`.
Define the experiment as the family
`Y(g)=⟨Kx†,g⟩+εZ(g)` over `g` in a separable Hilbert observation space, with
isonormal `Z`; do not assert that the sample is an observation-space vector.
Realize it in the existing negative-Sobolev white-noise carrier when its
scale assumptions match. For a fixed orthonormal basis, prove the coordinate
sequence has independent `N(⟨Kx†,u_j⟩,ε²)` laws and reconstructs the same
cylinder experiment. **B leaves:** direct functionals, coefficient sequence,
and a finite-dimensional truncation with its omitted tail visible.
**Suppliers:** `def-statistical-experiment`,
`def-negative-sobolev-space-for-white-noise`, and
`lem-white-noise-is-borel-gaussian-on-negative-sobolev-space`.
**Source:** reader 2's MAP testing model, pp. 2–3; Ding–Mathé §2.

<a id="ip-08"></a>

### IP-08 — Gaussian sequence inversion and exact risk

**Pages:** `gaussian-sequence-models-and-risk-decomposition` /
`gaussian-sequence-models-and-risk-decomposition-examples`.
**A items:** `def-ip-gaussian-sequence-inverse-model`,
`def-ip-statistical-ellipsoid-class`, `alg-ip-svd-truncated-estimator`, and
`thm-ip-truncated-estimator-exact-risk`.
For observations `Z_j=θ_j+ε s_j^{-1}ξ_j` with independent standard normal
`ξ_j`, define the cutoff estimator using the first `D` coordinates. Over
`Σ a_j²θ_j²≤Q²` with nondecreasing positive `a_j`, prove its exact worst-case
squared risk is `Q²/a_{D+1}²+ε²Σ_{j≤D}s_j^{-2}`: the variance sums on retained
coordinates and a one-coordinate truth attains the tail bias. Clearly
separate sequence risk from deterministic worst-case error. **B leaves:**
mildly and severely ill-posed spectra and the zero-noise limit.
**Requires:** IP-07 and IP-02. **Source:** reader 2, Ding–Mathé (2017), full
7-page proof; reader 1, Clason Ch. 12 for the different white-noise risk.

<a id="ip-09"></a>

### IP-09 — Minimax estimation over inverse source classes

**Pages:** `minimax-estimation-over-inverse-source-classes` /
`minimax-estimation-over-inverse-source-classes-examples`.
**A items:** `thm-ip-general-source-minimax-comparison` and
`cor-ip-mild-and-severe-estimation-rates`.
Use the exact model and axis assumptions from Ding–Mathé. The cutoff risk
tradeoff gives an upper bound; the product-prior/hyperrectangle argument gives
a lower bound: if `R_cut` is the square root of the best cutoff risk and `R_*` is minimax RMS error, prove `R_cut/2.2≤R_*≤R_cut`. Derive
polynomial and exponential examples by balancing the explicit bias and
variance terms. This is order-sharp up to constants, not Pinsker sharp
constant optimality. Reuse published Le Cam/Fano/KL suppliers only after
checking that the inverse experiment's divergence calculation is locally
proved. **B leaves:** Sobolev, analytic, and power-source classes.
**Requires:** IP-03 and IP-08; `minimax-lower-bounds-and-information-theoretic-methods`.
**Source:** reader 2, Ding–Mathé (2017), complete proof.

<a id="ip-10"></a>

### IP-10 — Minimax signal detection and separation rates

**Pages:** `minimax-testing-and-detection-rates` /
`minimax-testing-and-detection-rates-examples`.
**A items:** `lem-ip-gaussian-product-mixture-testing-bound`, `lem-ip-weighted-chi-square-triangular-array-limit`, `def-ip-minimax-detection-risk-and-separation`,
`thm-ip-ellipsoid-detection-boundary`, and
`thm-ip-sparse-detection-regime-split`.
Define type-I error, maximal type-II error, and separation radius separately
from estimation risk. For the Gaussian sequence experiment and ellipsoid
alternative, preserve the source's distinction between `q=2` and `q<2`,
polynomial versus exponential singular loss, and the vanishing-largest-weight
condition needed for sharp Gaussian asymptotics. Build the upper test from the
extremal weighted chi-square statistic and the lower bound from a symmetric
product mixture/chi-square likelihood ratio. The article's detailed proof
supplement was inaccessible; before authoring these theorem carriers, supply
the omitted likelihood-ratio and limiting-normal calculations locally or
source a complete proof. Do not certify the main article's proof outline as a
local proof. **B leaves:** mild/severe regimes and a `q<2` boundary case.
For `q=2`, record the source's four rate regimes without crossing them:
`ε^{4α/(4α+4β+1)}` for mildly ill-posed Sobolev axes,
`ε(log ε⁻¹)^{β+1/4}` for mildly ill-posed analytic axes,
`(log ε⁻¹/β)^{-α}` for severely ill-posed Sobolev axes, and
`ε^{α/(α+β)}` for severely ill-posed analytic axes. The sparse `q<2`
case has a distinct boundary parameter and distinct rates.
**Requires:** IP-07–IP-08 plus published finite testing/KL interfaces.
**Source:** reader 2, Ingster–Sapatinas–Suslina (2012), 26 pp.; supplement
access limitation recorded.

<a id="ip-11"></a>

### IP-11 — Adaptive spectral regularization by SOLIT

**Pages:** `adaptive-spectral-regularization-and-solit` /
`adaptive-spectral-regularization-and-solit-examples`.
**A items:** `def-ip-ordered-filter-grid-and-source-index`,
`alg-ip-solit-parameter-choice`, and `thm-ip-solit-oracle-risk-and-rate`.
For a separable Hilbert Gaussian white-noise inverse experiment, injective
Hilbert–Schmidt operator, ordered nonnegative filters, the source representation
`f=φ(K*K)g`, the paper's convexity condition on `xφ⁻¹(√x)`, qualification
bound, and geometrically growing candidate variances, define the smallest
index whose differences from all finer candidates pass the two-index
chi-square/variance threshold. The theorem is the stated oracle inequality;
derive its risk comparison by monotone bias plus a geometric variance-ratio
sum. State the mild eigenvalue rate and the severe restriction
`0<ϑ≤1/2` exactly; for `ϑ>1` the candidate grid may fail to exist.
**B leaves:** antiderivative, satellite-gradiometry, and heat examples with
the last marked empirical. **Requires:** IP-03, IP-07–IP-08, and the existing
`spectral-regularization-and-parameter-choice` page.
**Source:** reader 2, Li–Werner (2024), complete 28 pp.; their conjectured
severe-regime optimality remains conjectural.

<a id="ip-12"></a>

### IP-12 — Linear feature identifiability and Gaussian MAP tests

**Pages:** `feature-inference-and-map-testing` /
`feature-inference-and-map-testing-examples`.
**A items:** `def-ip-feature-estimability-through-adjoint-range`,
`thm-ip-isonormal-gaussian-posterior-law`,
`alg-ip-gaussian-map-feature-test`,
`thm-ip-map-test-level-and-power`, and
`thm-ip-unrestricted-map-test-can-have-level-one`.
For `Y(g)=⟨Kx†,g⟩+εZ(g)`, Gaussian prior `N(m₀,C₀)` with positive trace-class
covariance, and bounded feature `φ∈X*`, derive the posterior Gaussian marginal
of `φ(U)`. The posterior covariance is
`ε² C₀^{1/2}(C₀^{1/2}K*K C₀^{1/2}+ε²I)^{-1}C₀^{1/2}` and its affine mean
is the corresponding Gaussian-conditioning mean. The MAP half-space test
compares the posterior feature mean with zero. On a truth ball
`||x†||_V≤1`, calibrate any nonzero probe `Φ` with
critical value `ε||Φ||Q⁻¹(1−α)+||K*Φ−φ||_{V*}`; prove level at most `α` by
separating feature approximation error and Gaussian noise. State the
commutation condition for the weighted Tikhonov probe formula. Prove the
unrestricted level-one obstruction only under the source theorem's commuting
and non-eigenfeature assumptions. **B leaves:** a feature in `R(K*)`, a feature
only in its closure, and a non-eigenfeature with level failure. **Requires:**
IP-07, IP-02, `functional-analysis/hilbert-space-geometry-and-riesz-representation`,
`bayesian-computational-statistics/bayesian-models-priors-and-posterior-laws`,
and `bayesian-computational-statistics/gaussian-process-priors-and-posterior-laws`.
**Source:** reader 2, Kretschmann–Werner (2025), Thms. 2.3–2.15 and §3;
empirical same-sample tuning stays empirical.

<a id="ip-13"></a>

### IP-13 — Active network tomography and identifiability by design

**Pages:** `network-tomography-and-experiment-design` /
`network-tomography-and-experiment-design-examples`.
**A items:** `def-ip-tree-probing-experiment`, `alg-ip-link-loss-em`, and
`def-ip-network-tomography-design-criterion`.
Fix a rooted tree, a declared family of multicast receiver sets, independent
link-level Bernoulli success variables, and counts of observed path outcomes.
The EM procedure validates that every link is covered, computes conditional
expected latent link successes under current parameters, updates each link
probability by expected successes divided by probes traversing that link, and
stops on a declared likelihood tolerance or finite iteration cap; it returns
convergence status without asserting a global optimum. The pair records the
chapter's split/coverage criterion only as a reported literature result until
its original proof is sourced; local counterexamples for unicast product
nonidentifiability and additive Gaussian delay-sum ambiguity are proved
directly. **B leaves:** two-receiver multicast versus separate unicast and a
normal-delay tree with nonidentifiable means. **Requires:** IP-07,
`mathematical-statistics/statistical-experiments-models-and-identifiability`
for experiment definitions, and
`bayesian-computational-statistics/em-algorithm-and-latent-variable-likelihood-ascent`
for the EM mechanics used here. **Source:**
reader 2, Lawrence–Michailidis–Nair (2007), all 21 pp.;
dependence and temporal homogeneity remain model assumptions.

<a id="ip-14"></a>

### IP-14 — Unknown operators, model mismatch, and robustness limits

**Pages:** `statistical-inverse-model-misspecification` /
`statistical-inverse-model-misspecification-examples`.
**A items:** `def-ip-operator-and-prior-mismatch` and
`thm-ip-no-uniform-recovery-under-unrestricted-operator-mismatch`.
Define truth, forward operator, noise law, and prior/model mismatch as separate
objects. If two admissible truth/operator pairs yield the same observation
law while their truths are `Δ` apart, every estimator has worst-case expected
metric loss at least `Δ/2` for a metric loss; prove by coupling to the common
law and the triangle inequality. A stronger decision-risk version requires
the loss/convexity hypotheses in the statistical supplier. No assertion says
all mismatch is fatal: quantitative robustness follows when the mismatch
class has a proved modulus. **B leaves:** identical data laws under a
nonidentifiable operator pair and a restricted operator class with a positive
stability modulus. **Requires:** IP-01, IP-07, and IP-08.
**Sources:** reader 2's tomography misspecification discussion and reader 6,
InverseBench, all 29 pp.; benchmark observations remain empirical.

<a id="ip-15"></a>

### IP-15 — Function-space priors and sample regularity

**Pages:** `function-space-priors-and-random-regularity` /
`function-space-priors-and-random-regularity-examples`.
**A items:** `def-ip-prior-on-a-forward-domain` and
`lem-ip-gaussian-series-prior-regularity`.
State a prior as a Borel probability on a named separable Banach/Hilbert
parameter space and separately require prior probability one on the measurable
forward-map domain. The series lemma may use independent Gaussian coefficients
only with its displayed covariance/eigenvalue and basis regularity assumptions;
prove convergence in the selected norm using the cited summability and
Gaussian moment argument. Reuse published Banach-Gaussian support, RKHS,
Cameron–Martin, Fernique, and Gaussian-series suppliers rather than making
sample regularity follow from a covariance symbol alone. **B leaves:** a
trace-class Gaussian in its support space, a prior whose draws fail a uniform
ellipticity bound, and a Besov series at the threshold smoothness.
**Requires:** IP-01 and `gaussian-process-support-and-concentration` plus the
published Gaussian construction pages. **Source:** reader 3, Dashti–Stuart
§§2.1–2.6, pp. 11–39.

<a id="ip-16"></a>

### IP-16 — Likelihood potentials and posterior propriety

**Pages:** `bayesian-inverse-likelihoods-and-posterior-propriety` /
`bayesian-inverse-likelihoods-and-posterior-propriety-examples`.
**A items:** `def-ip-misfit-evidence-and-posterior-law` and
`thm-ip-function-space-posterior-propriety`.
For a prior `μ₀`, jointly measurable potential `Φ(u;y)`, and fixed datum `y`,
define `Z(y)=∫exp(−Φ(u;y))μ₀(du)`. The normalized posterior exists exactly
when `0<Z(y)<∞`; for data-indexed claims, state the observation law and
normalizer version/null-fiber convention. Under a common lower envelope and
`exp(M₁)∈L¹(μ₀)`, prove finiteness; prove positivity by choosing a point in
`supp μ₀` and using continuity on a neighborhood of positive prior mass.
The printed bounded-noncompact-set positivity shortcut is not used.
**B leaves:** a proper Gaussian likelihood, a zero-evidence fiber, and an
improper prior with finite evidence at one datum. **Requires:** IP-15,
`bayesian-models-priors-and-posterior-laws`, standard-Borel conditioning, and
Tonelli/Radon–Nikodym suppliers when the dominated formula is invoked.
**Source:** reader 3, Dashti–Stuart §§3.1–3.2.

<a id="ip-17"></a>

### IP-17 — Hellinger stability and posterior discretization

**Pages:** `hellinger-posterior-stability-and-discretization` /
`hellinger-posterior-stability-and-discretization-examples`.
**A items:** `thm-ip-hellinger-data-stability` and
`thm-ip-posterior-potential-discretization-error`.
Use separable Banach `X,Y`, `μ₀(X')=1`, positive prior mass in a bounded
subset of `X'`, continuous `Φ`, data-ball lower envelope
`Φ(u;y)≥−M₁(r,||u||)`, data Lipschitz bound
`|Φ(u;y)−Φ(u;y')|≤M₂(r,||u||)||y−y'||`, and the precise weighted
integrability `exp(M₁)(1+M₂²)∈L¹(μ₀)`. Then evidence is locally bounded above
and below and the posterior is locally Lipschitz in the library's Hellinger
convention. For discretization, require shared lower envelope and potential
error `≤M₂(||u||)ψ(N)` with `ψ(N)→0`; derive `d_H≤Cψ(N)` for large `N`.
The proof uses a support-point neighborhood, exponential-difference bounds,
normalizer bounds, and the exact library Hellinger/TV convention. It does not
give pointwise stability of posterior draws. **B leaves:** a stable potential,
a mesh approximation with nonintegrable error envelope, and misleading
posterior-mean stability despite a poor full posterior. **Requires:** IP-16,
`posterior-consistency-and-tests` (`def-hellinger-distance-for-dominated-laws`,
`thm-hellinger-tv-comparison-under-library-convention`). **Source:** reader 3,
Dashti–Stuart §§4.1–4.2; incorporate the corrected support-point argument in
reader-3.md.

<a id="ip-18"></a>

### IP-18 — Linear Gaussian inverse posteriors and Tikhonov

**Pages:** `linear-gaussian-inverse-posteriors-and-tikhonov` /
`linear-gaussian-inverse-posteriors-and-tikhonov-examples`.
**A items:** `thm-ip-finite-linear-gaussian-posterior` and
`cor-ip-gaussian-map-equals-tikhonov-minimizer`.
For finite-dimensional `x~N(m₀,C₀)` with positive-semidefinite prior
covariance, observations `y=Ax+η`, and independent `η~N(0,Γ)` with
`Γ≻0`, derive posterior mean
`m₀+C₀A^T(AC₀A^T+Γ)^{-1}(y−Am₀)` and covariance
`C₀−C₀A^T(AC₀A^T+Γ)^{-1}AC₀` by conditioning; allow singular state
covariance. Its MAP/posterior mean equals the minimizer of
`(Ax−y)^TΓ⁻¹(Ax−y)+(x−m₀)^TC₀^†(x−m₀)` only on the prior support, with
the pseudoinverse/range convention stated. Do not promote the finite result
to arbitrary function spaces. **B leaves:** singular state covariance,
preconditioning, and the mismatch between a non-Gaussian MAP and posterior
mean. **Requires:** IP-16, the published multivariate-normal conditioning and
finite Gaussian process posterior pages, and the existing finite Tikhonov
supplier. **Sources:** reader 1 Ch. 13 (finite Gaussian sketch); reader 3
§§3–4.

<a id="ip-19"></a>

### IP-19 — Small-ball MAP and Cameron–Martin geometry

**Pages:** `map-estimators-and-cameron-martin-geometry` /
`map-estimators-and-cameron-martin-geometry-examples`.
**A items:** `lem-ip-gaussian-shift-small-ball-ratio`, `def-ip-small-ball-map-estimator` and
`thm-ip-gaussian-small-ball-map-functional`.
For a Gaussian prior `N(0,C)` on a separable Banach space with Cameron–Martin
space `E`, define MAP through ratios of posterior small-ball probabilities,
not an infinite-dimensional Lebesgue density. Under the source's lower
quadratic potential bound, local upper bound and local Lipschitz continuity,
prove the ratio limit `exp(I(z₂)−I(z₁))` for `z₁,z₂∈E`, where
`I(u)=Φ(u)+||u||_E²/2`, infinite outside `E`. Existence of a minimizer
requires the additional compact embedding used in the source. **B leaves:**
finite-dimensional MAP equality, an infinite-dimensional pointwise density
fallacy, and a case where MAP differs from posterior mean.
**Requires:** IP-15–IP-16 and `gaussian-process-support-and-concentration`.
**Source:** reader 3, Dashti–Stuart §4.3.

<a id="ip-20"></a>

### IP-20 — Posterior contraction in Gaussian sequence inversion

**Pages:** `posterior-contraction-in-gaussian-sequence-inversion` /
`posterior-contraction-in-gaussian-sequence-inversion-examples`.
**A items:** `def-ip-posterior-contraction-rate` and
`thm-ip-conjugate-gaussian-sequence-contraction`.
Restrict the theorem to diagonal observations
`Y_j=s_jθ_j+εξ_j` and independent Gaussian prior coordinates with specified
variances. Derive each posterior mean and variance by scalar conditioning;
state a contraction radius from the exact sum of squared bias, sampling
variance of the posterior mean, and posterior variance. With
`v_j=(τ_j^{-2}+s_j²/ε²)^{-1}` and
`λ_j=τ_j²s_j²/(ε²+τ_j²s_j²)`, the expected posterior second moment about
truth is
`Σ_j[(1−λ_j)²(θ_j†)²+v_j²s_j²/ε²+v_j]` whenever this series is finite.
Markov's inequality then bounds the expected posterior mass outside radius
`R` by this sum divided by `R²`. Any sharper contraction rate needs a bound on
that sum and any polished-tail/source-index assumption stated explicitly.
Posterior Hellinger stability is not contraction as `ε→0`.
**B leaves:** polynomial and exponential singular-value decay and a prior with
too little mass near the truth. **Requires:** IP-07–IP-09, IP-16, IP-18, and
`gaussian-process-posterior-contraction` only for hypotheses its exact theorem
matches. **Sources:** reader 2, Ding–Mathé; reader 3 §§4–5; published
Gaussian-sequence/Bayesian contraction suppliers.

<a id="ip-21"></a>

### IP-21 — Credible sets and frequentist coverage

**Pages:** `credible-sets-and-frequency-coverage-in-inverse-problems` /
`credible-sets-and-frequency-coverage-in-inverse-problems-examples`.
**A items:** `def-ip-credible-set-and-frequency-coverage` and
`op-ip-honest-coverage-over-ill-posed-truth-classes`.
Define posterior credibility under the chosen prior and repeated-sampling
coverage under a specified truth/experiment separately. The open problem asks
for nontrivial honest coverage over a stated ill-posedness class while
retaining useful diameter; it is not a theorem supplier. Use the existing
posterior credible-interval counterexample and polished-tail empirical-Bayes
coverage theorem only at their exact scopes. Any proposed inverse-specific
coverage result needs its own prior, truth class, noise law, radius, and
frequentist probability statement. **B leaves:** nominal Bayesian mass with
undercoverage and polished-tail versus sparse-gap truths.
**Requires:** IP-07, IP-16, IP-20, `adaptive-empirical-bayes-credible-set-calibration`,
and `functional-bayesian-limits-and-credible-set-calibration`.
**Source:** reader 2's explicit coverage limitation; reader 3 §§4–6; current
published coverage counterexample and polished-tail theorem.

<a id="ip-22"></a>

### IP-22 — Function-space pCN and invariant posterior kernels

**Pages:** `function-space-mcmc-and-pcn` /
`function-space-mcmc-and-pcn-examples`.
**A items:** `alg-ip-prior-preserving-crank-nicolson`,
`thm-ip-pcn-posterior-invariance`, and
`thm-ip-pcn-small-step-acceptance-under-potential-bounds`.
For Gaussian reference `μ₀=N(0,C)` on a separable Hilbert space and proper
target `dμ/dμ₀∝exp(−Φ)`, propose
`v=√(1−β²)u+βξ`, `ξ~μ₀`, and accept with
`min(1,exp(Φ(u)−Φ(v)))`. The prior-reversible proposal plus the MH correction
gives invariance by detailed balance; no infinite-dimensional Lebesgue
density is used. State the potential bounds for the small-step acceptance
claim. Do not infer mixing, ESS, mesh-independent cost, or posterior
correctness of an approximate forward solver. **B leaves:** pCN versus a
function-space random walk with singular reverse proposal flow.
**Requires:** IP-15–IP-16, `general-state-mcmc-kernels-and-reversibility`,
`mcmc-ergodicity-and-mixing`, and Gaussian prior support.
**Source:** reader 3, Cotter–Roberts–Stuart–White (2013), all 23 pp.

<a id="ip-23"></a>

### IP-23 — Posterior computation and error accounting

**Pages:** `posterior-computation-error-and-diagnostics` /
`posterior-computation-error-and-diagnostics-examples`.
**A items:** `def-ip-posterior-computation-error-budget` and
`prop-ip-bounded-posterior-functional-error`.
Separate posterior-model error, forward/PDE solver error, finite-dimensional
discretization, approximate transition-kernel error, burn-in/mixing, and
Monte-Carlo error. For a bounded measurable functional `f`, prove
`|E_μf−E_νf|≤2||f||∞ TV(μ,ν)` under the library TV convention, then use a
separate sample-average error bound only under its stated chain assumptions.
The decomposition is a bookkeeping identity/bound, not a computable
certificate unless every component has an estimator or verified bound.
**B leaves:** exact invariant kernel with short run, exact posterior with
biased PDE solve, and low ESS despite correct invariance.
**Requires:** IP-17 and IP-22, plus published statistical/computational error,
MCMC diagnostic, and Feynman–Kac pages.
**Source:** reader 3 §5; exact current Bayesian computation suppliers.

<a id="ip-24"></a>

### IP-24 — Conditional flow matching for inverse posteriors

**Pages:** `conditional-flow-matching-for-inverse-posteriors` /
`conditional-flow-matching-for-inverse-posteriors-examples`.
**A items:** `lem-ip-lipschitz-ode-triangular-flow-and-c1-density`, `alg-ip-conditional-flow-matching`,
`thm-ip-exact-triangular-transport-disintegrates-to-posterior`, and
`op-ip-function-space-flow-matching-error-theory`.
For finite-dimensional joint law `π(dx,dy)=π_y(dx)π_Y(dy)`, independent
reference `η`, and invertible block-triangular map `T(x,y)=(T_y(x),y)` that
pushes `η⊗π_Y` to `π`, conclude `T_y#η=π_y` for `π_Y`-almost every `y`.
Conditional flow matching regresses `X₁−X₀` on
`X_t=(1−t)X₀+tX₁,Y`; it returns a trained vector field and a numerical ODE
solver status. A Jacobian/divergence density formula requires C¹ spatial
regularity (or a named a.e./Sobolev-flow theorem); global Lipschitzness alone
only gives the stated bi-Lipschitz flow. Function-space approximation is an
open problem. **B leaves:** accurate posterior means with low independent-MH
acceptance and a likelihood-free case where MH correction is unavailable.
**Requires:** IP-16, IP-17, IP-23, finite-dimensional conditional laws, and
ODE existence. **Source:** reader 3, Blechschmidt et al. (2026), all 38 pp.;
unreviewed preprint and explicitly finite-dimensional.

<a id="ip-25"></a>

### IP-25 — Nonlinear maps and tangential cone control

**Pages:** `nonlinear-inverse-problems-and-tangential-cone-conditions` /
`nonlinear-inverse-problems-and-tangential-cone-conditions-examples`.
**A items:** `def-ip-nonlinear-forward-map`, `def-ip-tangential-cone-condition`,
`lem-ip-tcc-residual-derivative-comparison`, and
`thm-ip-tcc-local-minimum-norm-identifiability`.
For Fréchet differentiable `F` on a Hilbert ball, state the TCC with
`0≤η<1` and derive
`(1−η)||F(x+h)−F(x)||≤||F'(x)h||≤(1+η)||F(x+h)−F(x)||`.
The local uniqueness result additionally assumes the solution is the
`x₀`-minimum-norm solution and the source's orthogonality condition
`x†−x₀∈N(F'(x†))⊥`; TCC is a substantive local hypothesis, not a consequence
of differentiability. **B leaves:** a smooth map whose derivative TCC fails,
and a local TCC neighborhood. **Requires:** IP-01–IP-02 and the existing
Fréchet derivative/adjoint suppliers. **Source:** reader 5, Clason Ch. 9,
Lem. 9.5 and Thms. 9.8–9.9.

<a id="ip-26"></a>

### IP-26 — Nonlinear Tikhonov existence and stability

**Pages:** `nonlinear-tikhonov-existence-and-stability` /
`nonlinear-tikhonov-existence-and-stability-examples`.
**A items:** `def-ip-nonlinear-tikhonov-functional`,
`thm-ip-nonlinear-tikhonov-minimizer-exists`, and
`thm-ip-nonlinear-tikhonov-weak-cluster-stability`.
For nonempty weakly closed domain `D(F)` in a Hilbert space, assume `F` has a sequentially weak-to-weak closed graph: `x_n⇀x`, `F(x_n)⇀z` imply `x∈D(F)` and `F(x)=z`. For
`α>0`, minimize
`½||F(x)−y||²+α/2||x−x₀||²`. The direct method uses coercivity from the
penalty, the published `lem-bounded-minimising-sequence-has-a-weakly-convergent-subsequence`, `thm-hilbert-spaces-are-reflexive-by-riesz-representation`, and `cor-weak-convergence-implies-lower-semicontinuity-of-the-norm` (with their choice/HB hypotheses), and weak-to-weak graph closedness to prove existence: bounded objective bounds both `x_n` and `F(x_n)`, extract weak subsequences of both, identify the graph limit, and take lower limits. Weak-to-strong closedness alone does not identify a merely weak data limit. For fixed positive `α`, perturbed data produce minimizer cluster points that minimize the limiting functional. For vanishing-noise regularization, additionally require an exact solution and `δ→0`, `α→0`, `δ²/α→0`; cluster points are `x₀`-minimum-norm exact solutions. Keep these two stability/convergence statements distinct; uniqueness is not general. Numerical algorithms may
find local minima and are not covered by this global minimizer theorem.
**B leaves:** two minimizers and a weakly closed nonlinear map.
**Requires:** IP-25 and the Hilbert weak compactness/lower-semicontinuity
suppliers. **Source:** reader 5, Clason Ch. 10, Thms. 10.1–10.2.

<a id="ip-27"></a>

### IP-27 — Bregman distances and variational source rates

**Pages:** `variational-source-conditions-and-bregman-rates` /
`variational-source-conditions-and-bregman-rates-examples`.
**A items:** `def-ip-banach-convex-subgradient-and-dual-pairing`, `lem-ip-banach-fenchel-duality-for-regularization`, `lem-ip-index-function-young-conjugate-bound`, `def-ip-bregman-distance`, `def-ip-variational-source-condition`,
and `thm-ip-vsc-nonlinear-regularization-rate`.
For convex `R`, subgradient `ξ∈∂R(x†)`, define
`D_R^ξ(x,x†)=R(x)−R(x†)−⟨ξ,x−x†⟩`. State the VSC on a named regularizer
sublevel with coefficient `β₁<1`, index function and conjugate conditions.
For the Hilbert nonlinear theorem, `α≈δ` gives the source's
`O(√δ)` solution error and `O(δ)` residual; for Banach versions state only
the Bregman/residual/penalty rates with each regularizer-compatibility,
approximate-minimizer, and noise-coupling assumption. Prove the rate by
testing the minimizing inequality against `x†`, using the VSC, and applying
the index-function conjugate bound. **B leaves:** power and logarithmic index
functions, and failure when `β₁≥1`. **Requires:** IP-25–IP-26 and the
published convex subdifferential/duality suppliers. **Sources:** reader 5,
Clason Thms. 10.7–10.8; Kaltenbacher (2024), Thm. 3 and its stated domain.

<a id="ip-28"></a>

### IP-28 — Nonlinear Landweber with discrepancy stopping

**Pages:** `nonlinear-landweber-and-discrepancy-stopping` /
`nonlinear-landweber-and-discrepancy-stopping-examples`.
**A items:** `alg-ip-nonlinear-landweber-discrepancy` and
`thm-ip-nonlinear-landweber-fejer-and-finite-stopping`.
Use continuously Fréchet differentiable `F`, local TCC `η<1/2`,
`||F'(x)||≤1`, exact solution in the declared outer ball and initial iterate
in the inner ball. Define
`x_{n+1}=x_n+F'(x_n)^*(y^δ−F(x_n))` and stop at the first residual at most
`τδ`, with `τ>2(1+η)/(1−2η)`, or return a budget-exhausted status. Prove
Fejér decrease while above threshold and finite stopping by summing the
squared-error decrease; state the source's exact/noisy convergence hypotheses
separately. **B leaves:** residual below noise threshold, a violated local
ball, and exact data. **Requires:** IP-25, IP-27, and published Hilbert
adjoints. **Source:** reader 5, Clason Ch. 11, Thms. 11.3–11.6.

<a id="ip-29"></a>

### IP-29 — Regularized nonlinear Levenberg–Marquardt

**Pages:** `regularized-gauss-newton-and-levenberg-marquardt` /
`regularized-gauss-newton-and-levenberg-marquardt-examples`.
**A items:** `alg-ip-regularized-levenberg-marquardt` and
`thm-ip-lm-local-discrepancy-stopping`.
Define each LM step as the unique minimizer of the linearized least-squares
residual plus a positive Tikhonov penalty about the current iterate; give the
forcing rule, range-approximation condition, product-type TCC, local starting
ball, parameter sequence, and residual discrepancy stop. The theorem is
local: under Clason's full hypotheses it has a finite stopping index
`O(1+|log δ|)`; it is not a generic guarantee for arbitrary inexact linear
solves. Reuse the existing finite-dimensional safeguarded LM procedure for
its finite optimization mechanics and the published IRGNM theorem for the
distinct iteratively regularized Gauss–Newton scheme; do not mint a duplicate
IRGNM result. **B leaves:** well-conditioned local step versus an unstable
unregularized linearization. **Requires:** IP-25–IP-26, published
`gauss-newton-and-levenberg-marquardt-methods`, and
`iterative-regularization-and-early-stopping`. **Source:** reader 5,
Clason Ch. 11, §§11.2–11.4.

<a id="ip-30"></a>

### IP-30 — Banach range invariance and EIT rates

**Pages:** `banach-range-invariance-and-eit-rates` /
`banach-range-invariance-and-eit-rates-examples`.
**A items:** `def-ip-differential-range-invariance`,
`thm-ip-joint-regularization-rate-under-range-invariance`, and
`thm-ip-frozen-newton-rate-under-range-invariance`.
State `F(x)−F(x₀)=K r(x)` in named Banach spaces, distinguish it from TCC,
and make relaxation/penalty terms explicit when enlarged spaces create
nonidentifiability. The joint theorem requires the paper's regularizer
compatibility, VSC index assumptions, Lipschitz `r`, parameter/noise coupling,
and approximate-minimizer tolerance. Frozen Newton additionally requires the
decreasing `α_n`, tolerance, stopping schedule, conjugate-growth, linked
`β_n`, and small Taylor-remainder conditions. Retain the paper's explicit
3D conductivity/EIT regularity classes and logarithmic rates. **B leaves:** a
partial observation where TCC is unavailable but range invariance holds, and
a relaxed variable that requires a penalty. **Requires:** IP-25, IP-27,
published PDE state/adjoint and elliptic suppliers. **Source:** reader 5,
Kaltenbacher (2024), Thms. 3, 5, 7–11.

<a id="ip-31"></a>

### IP-31 — Spatial BV, finite perimeter, and TV conventions

**Pages:** `spatial-bv-and-total-variation-regularization` /
`spatial-bv-and-total-variation-regularization-examples`.
**A items:** `lem-ip-bv-extension-translation-and-coarea`, `lem-ip-finite-perimeter-relative-isoperimetry`, `def-ip-spatial-bv-and-distributional-tv`,
`lem-ip-bv-compactness-lower-semicontinuity`, and
`def-ip-boundary-tv-conventions`.
Define `BV(Ω)` by an `L¹` function whose distributional derivative is a finite
vector-valued Radon measure; define spatial TV as its total variation, and
finite perimeter as `χ_E∈BV`. Distinguish full-space, Dirichlet, and Neumann
boundary conventions and the Neumann constant nullspace. Prove lower
semicontinuity under `L¹` convergence from the supremum-over-test-fields
definition and quote/locally prove compactness with the exact bounded-domain
hypotheses. The existing interval BV definition does not supply this
multidimensional interface. **B leaves:** a jump across a smooth curve,
constant functions under Neumann TV, and a non-BV oscillatory sequence.
**Requires:** `measure-theory/radon-measures-and-the-riesz-markov-kakutani-theorem`,
`measure-theory/the-lp-spaces-holder-minkowski-and-riesz-fischer`, and
`real-analysis/bounded-variation-and-riemann-stieltjes`; new pair IP-31 is
the prerequisite for IP-32. **Source:** reader 5,
Iglesias–Mercier–Scherzer (2018), §§1, 4 and Appendix.

<a id="ip-32"></a>

### IP-32 — TV source certificates and level-set convergence

**Pages:** `tv-source-certificates-and-geometric-convergence` /
`tv-source-certificates-and-geometric-convergence-examples`.
**A items:** `lem-ip-tv-dual-attainment-and-certificate-limit`, `lem-ip-tv-level-set-uniform-density-and-hausdorff`, `def-ip-tv-dual-source-certificate` and
`thm-ip-2d-tv-level-set-convergence`.
For the source's linear bounded `A:L²(Ω)→L²(Σ)`, two-dimensional BV setting,
and a minimum-TV truth `u†`, require
`R(A*)∩∂TV(u†)≠∅`. State full-space/Dirichlet/Neumann boundary conventions
separately. Under that source condition, take `α_n→0`, data `f+w_n`, and `||w_n||||A*||/α_n≤η`, with `η<2√π` for full-space/Dirichlet TV and `η<1/C(Ω)` for Neumann TV (the specified Sobolev–Poincaré constant). Bounded Dirichlet domains additionally need the source's variational-curvature lower bound by an `L²` function on the complement; an arbitrary Lipschitz domain is insufficient. Then, after a subsequence, for almost every nonzero level `t`, level sets converge in measure and their boundaries in Hausdorff distance to those of the selected minimum-TV limit. The target limit and its uniqueness must be identified separately. The functional is `½||Au−(f+w_n)||²+α_n TV(u)`. In particular `α=o(δ)` is not this theorem; it can violate the density threshold when `||w||≈δ`. The proof modules are
Fenchel duality, dual certificate convergence, coarea/finite perimeter,
boundary-specific uniform density bounds, and compactness. Do not claim this
for nonlinear maps or arbitrary dimension. **B leaves:** circular Radon
inversion, deblurring, and a truth lacking the certificate.
**Requires:** IP-31, IP-27, and existing convex duality/optimization suppliers.
**Source:** reader 5, Iglesias–Mercier–Scherzer (2018), Thms. 1–2.

<a id="ip-33"></a>

### IP-33 — Sparse recovery and nullspace certificates

**Pages:** `sparse-recovery-and-nullspace-certificates` /
`sparse-recovery-and-nullspace-certificates-examples`.
**A items:** `def-ip-nullspace-property`,
`thm-ip-basis-pursuit-exact-recovery-under-nsp`, and
`lem-ip-nullspace-property-stability-cone`.
For `A∈R^{m×n}` and support sets `S` with `|S|≤s`, define the strict nullspace
property `||h_S||₁<||h_{Sᶜ}||₁` for every nonzero `h∈ker A`. Prove that every
`s`-sparse `x†` is the unique minimizer of `||x||₁` subject to `Ax=Ax†` by
decomposing `x†+h` over `S,Sᶜ`; prove the robust cone estimate separately if
claimed. Exact support recovery is not asserted for noisy data. **B leaves:**
an NSP matrix, a nullspace violating NSP, and a sparse Gaussian identity-design
problem tied only to the existing minimax supplier. **Requires:** IP-01–IP-02,
published `proximal-gradient-and-accelerated-composite-optimization` and
finite-dimensional norm suppliers. **Source status:** reader 5 explicitly
found no full sparse-recovery text; before authoring, obtain a complete
authoritative compressed-sensing source or supply the displayed proof
locally. No RIP theorem is imported from an unread source.

<a id="ip-34"></a>

### IP-34 — Stable compressed sensing with noise

**Pages:** `compressed-sensing-with-noise-and-model-selection` /
`compressed-sensing-with-noise-and-model-selection-examples`.
**A items:** `lem-ip-robust-nsp-block-tail-estimate`, `def-ip-robust-nullspace-property`,
`alg-ip-basis-pursuit-denoising`, and
`thm-ip-robust-nsp-noisy-recovery-bound`.
For `||Ax−y||₂≤ε`, the algorithm minimizes `||x||₁` over the residual ball
and returns infeasible/budget-exhausted statuses explicitly. A robust NSP
contract
`||h_S||₂≤(ρ/√s)||h_{Sᶜ}||₁+τ||Ah||₂` with `ρ<1` gives
`||x̂−x†||₂≤C₁σ_s(x†)₁/√s+C₂ε` and
`||x̂−x†||₁≤C₃σ_s(x†)₁+C₄√s ε`;
derive constants from the standard cone decomposition rather than naming an
RIP without proving it. The existing sparse minimax theorem is identity
design only. **B leaves:** bounded noise, compressible truth, and a design
with a large nullspace component. **Requires:** IP-33 and published proximal
and primal-dual procedures. **Source gate:** same complete-source/local-proof
requirement as IP-33.

<a id="ip-35"></a>

### IP-35 — Physical constraints and manifold-valued inversion

**Pages:** `manifold-and-physical-constraint-inversion` /
`manifold-and-physical-constraint-inversion-examples`.
**A items:** `def-ip-admissible-constraint-class`,
`prop-ip-constraints-can-remove-kernel-ambiguity`, and
`alg-ip-stiefel-constrained-regularized-gradient`.
For admissible set `C`, uniqueness of `Ax=y` on `C` follows exactly when
`(C−C)∩ker A={0}`; this is a direct injectivity proof on the restricted class,
not a stability claim. Define a Stiefel example algorithm with tangent
projection, declared retraction, positive step schedule, objective/residual
check, and finite-budget return. Reuse the published Stiefel/Grassmann
Riemannian optimization mechanics only under their finite-dimensional
hypotheses; do not generalize to arbitrary nonlinear manifolds or positivity
constraints without a compatible retraction and proof.
**B leaves:** a constraint eliminating one null direction, one leaving a
continuous ambiguity, and an inadmissible PDE state rejected before solve.
**Requires:** IP-01, IP-25,
`numerical-optimization-inverse-problems-and-uncertainty-quantification/riemannian-optimization-on-stiefel-and-grassmann-manifolds`,
and `pde/constrained-variational-problems-and-variational-inequalities`.
**Sources:** reader 5's explicit
manifold-constraint gap; reader 6, InverseBench, all 29 pp.

<a id="ip-36"></a>

### IP-36 — Euclidean Radon transform and filtered backprojection

**Pages:** `radon-transform-and-fourier-slice-reconstruction` /
`radon-transform-and-fourier-slice-reconstruction-examples`.
**A items:** `def-ip-2d-radon-transform`, `thm-ip-fourier-slice-identity`,
`thm-ip-radon-normal-operator`, and
`alg-ip-filtered-backprojection-complete-data`.
For `f∈C_c^∞(R²)` and all line orientations/offsets, define `Rf(θ,s)` with
one fixed normalization. Prove the Fourier-slice identity by Fubini; with the
source's normalization state `R*R=4π|D|⁻¹` and
`f=(4π)⁻¹R*|D_s|Rf`. The filtered-backprojection procedure requires complete
line data and a declared filter; no theorem here covers finite detectors,
truncation, or noisy sampling. The Sobolev stability displayed as an exercise
in Salo's notes is not imported as a proved supplier unless separately proved.
**B leaves:** a smooth compact phantom, a point source distributional limit,
and a discretized complete-data reconstruction. **Requires:** `functional-analysis/tempered-distributions-and-the-fourier-transform`,
`fourier-analysis/bochner-inversion-and-plancherel-on-lca-groups`, and
`fourier-analysis/finite-fourier-analysis-and-the-fast-fourier-transform`.
**Source:** reader 4, Salo §2.1, pp. 4–7.

<a id="ip-37"></a>

### IP-37 — Limited-angle visibility and instability

**Pages:** `limited-angle-tomography-and-invisible-singularities` /
`limited-angle-tomography-and-invisible-singularities-examples`.
**A items:** `def-ip-visible-covector-for-limited-angle-data`,
`prop-ip-limited-angle-fourier-visibility`, and
`op-ip-stable-limited-angle-reconstruction`.
For a specified open set of line normals `Θ`, the Fourier-slice theorem
identifies the measured Fourier wedge. In `L²` without compact-support or
analyticity restrictions, Fourier content supported outside that wedge is
invisible, giving nonidentifiability on the unrestricted class. For compactly
supported functions, analytic continuation can restore uniqueness while
remaining severely unstable; do not claim a compact-support nullspace. The
open problem concerns quantitative stability and noise-robust recovery from
restricted angles on a declared smoothness class. **B leaves:** an invisible
Fourier wedge, compact-support analytic continuation, and instability from
small measured wedge data. **Requires:** IP-01 and IP-36.
**Source:** reader 4, Salo §2.1; analytic-transform comparison from
Mazzucchelli–Salo–Tzou (2023).

<a id="ip-38"></a>

### IP-38 — Geodesic X-ray transforms on simple surfaces

**Pages:** `geodesic-x-ray-transforms-on-simple-manifolds` /
`geodesic-x-ray-transforms-on-simple-manifolds-examples`.
**A items:** `lem-ip-surface-geodesic-flow-index-form-and-transport`, `def-ip-simple-surface-and-geodesic-xray-transform`,
`lem-ip-pestov-identity-for-geodesic-data`, and
`thm-ip-2d-simple-surface-xray-injectivity`.
Use a compact two-dimensional smooth Riemannian manifold with strictly convex
boundary, no conjugate points, and nontrapping geodesic flow; take scalar
`f∈C_c^∞(M°)`. Prove `If=0⇒f=0` via the transport equation for a primitive,
the two-dimensional Pestov identity, and positivity of the index form. Do
not upgrade to all dimensions or arbitrary weights: the lecture proof is
explicitly simplified to 2D, while broader versions cite an unread external
proof. Trapping and conjugate points receive separate examples and open
status. **B leaves:** a simple disk, a trapped geometry, and conjugate-point
visibility failure. **Requires:** IP-01, IP-36,
`differential-geometry/riemannian-metrics-length-distance-and-volume`, and
`differential-geometry/geodesics-the-exponential-map-completeness-and-hopf-rinow`.
**Source:** reader 4, Salo §§2.2–2.4,
pp. 7–19; precise 2D scope retained.

<a id="ip-39"></a>

### IP-39 — Analytic double fibrations and Bolker visibility

**Pages:** `analytic-double-fibration-and-bolker-visibility` /
`analytic-double-fibration-and-bolker-visibility-examples`.
**A items:** `def-ip-distributions-conormal-kernels-and-cotangent-relation`, `lem-ip-analytic-cutoff-sequence-and-fbi-invariance`, `lem-ip-holomorphic-morse-normalization-and-gaussian-contour`, `def-ip-analytic-double-fibration-transform`,
`def-ip-bolker-condition`, `lem-ip-double-fibration-conormal-kernel`,
`lem-ip-bolker-geometric-criteria`, `def-ip-analytic-wavefront-fbi-transform`,
`thm-ip-analytic-stationary-phase-with-exponential-remainder`,
`thm-ip-analytic-wavefront-recovery-under-bolker`,
`lem-ip-one-sided-analytic-support-continuation`, and
`thm-ip-local-support-from-one-sided-vanishing`.
For analytic manifolds `X,G` and an embedded incidence manifold `Z⊂G×X`,
assume both projections are submersions and the dimensions satisfy the
reader-4 contract; define the weighted fiber transform on compactly supported
distributions. Define its canonical relation as the nonzero conormal bundle
`(N*Z\0)'`. The conormal-kernel lemma must be proved in incidence coordinates:
write `Z` locally as a graph, express the fiber integral with delta
distributions, and identify its conormal singularity and canonical relation.
Define Bolker as injectivity and immersion of the left projection of that
relation into `T*G\0`; prove the local differential-rank and global fiber
criteria separately. This prevents “no conjugate points” from being used as
a substitute for the actual rank hypotheses.

Define `WF_a` through exponential decay of a specified Gaussian/FBI packet
transform and state the compact-support and coordinate-localization
conventions. The analytic stationary-phase supplier applies only to a
localized analytic oscillatory integral with one critical point, invertible
complex Hessian, and positive imaginary quadratic form on real directions; it
must give the leading determinant, optimally truncated analytic amplitude series and an exponential remainder
bound. Its proof route is contour deformation to the complex critical point,
quadratic normalization by the complex Morse lemma, Gaussian integration, and
an exponentially small bound on the localized complement. Reduce the
localized transform kernel to this integral using the Bolker immersion,
prove uniqueness of the complex critical point by the inverse function
theorem, and verify positivity from the FBI Gaussian term. The analytic
wavefront theorem then states: at a canonical pair where Bolker holds and the
analytic weight is nonzero, analytic regularity of `Rf` at the data covector
implies analytic regularity of `f` at the associated object covector. The
one-sided-support lemma states the needed microlocal continuation step for a
distribution vanishing on one side of a `C²` hypersurface; prove it from the
localized FBI estimate and the one-sided support/Laplace-transform bound.
Combining these two theorems gives local support only when the measured data
vanish near the data point and the hypersurface conormal is visible. The
article proves its tailored kernel, Bolker, and FBI reduction, but cites the
general FBI characterization, analytic stationary phase, distribution/FIO
wavefront calculus, and analytic continuation; the local carriers must prove
the specialized contracts above rather than cite those labels. This is
qualitative analytic recovery, not noisy-data stability or an algorithm.
**B leaves:** a visible conormal, a missing-angle covector, and a conjugate
point that violates Bolker. **Requires:** IP-36–IP-38, `real-analysis/power-series-and-real-analytic-functions`, and `differential-geometry/smooth-manifolds-and-smooth-maps`; the new analytic-FBI/FIO items are explicit proof modules, not external suppliers.
**Source:** reader 4, Mazzucchelli–Salo–Tzou (2023), Thms. 1.2–1.3 and
full proof §§2–5, all 46 pp.; reader-4 prerequisite annex records which
general analytic foundations the source imports.

<a id="ip-40"></a>

### IP-40 — Hyperbolic inverse problems and finite-time visibility

**Pages:** `inverse-wave-problems-and-finite-time-observability` /
`inverse-wave-problems-and-finite-time-observability-examples`.
**A items:** `lem-ip-riemannian-green-boundary-traces-and-wave-lifting`, `lem-ip-simple-geodesic-polar-extension`, `lem-ip-borel-jet-realization-and-beam-patching`, `lem-ip-variable-metric-domain-of-dependence`, `thm-ip-variable-metric-wave-ibvp-energy-wellposedness`,
`def-ip-hyperbolic-dirichlet-to-neumann-map`,
`lem-ip-wave-alessandrini-identity`,
`lem-ip-simple-geometry-global-eikonal-geometric-optics`,
`lem-ip-gaussian-beam-null-bicharacteristic`,
`thm-ip-wave-data-determine-light-ray-integrals`, and
`cor-ip-wave-coefficient-uniqueness-under-simple-geometry`.
First prove the variable-metric forward problem on a compact smooth
Riemannian manifold with smooth boundary and real smooth `q`: establish
existence, uniqueness, finite-time energy control in `L∞_t H¹_x` (including
the lower-order `L²` term if needed), and a zero-initial-data correction
estimate by integration by parts and a Galerkin/semigroup construction. State
any coercivity shift and obtain the terminal-data version by time reversal.
The existing wave page is Euclidean/constant-speed, so it does not supply
this lemma. Define the full time-dependent DN map only after the IBVP contract
and boundary trace pairing are stated. For two smooth interior potentials,
derive the Alessandrini pairing identity by integrating the forward and
terminal-adjoint equations against one another; name the trace regularity
needed for each boundary term.

On a simple geometry, prove the polar-distance eikonal construction along a
maximal ray and solve the transport equations. With a transverse cutoff of
width `ε=λ^{-1/(n+8)}`, give the source's residual bound and correct the
approximate solution using the just-proved energy estimate; the contract is
`||R||_{L∞H¹}≤C λ^{-1}||χ||_{W^{4,∞}}` and the resulting `||R||₂=O(λ^{-1/2})`.
Show the product measures converge to the ray integral. This finite-order
error accounting is what makes the limiting DN identity valid. The
Gaussian-beam lemma is a separate, broader local module: for a real-principal-
symbol operator and an embedded, nonperiodic null bicharacteristic without
cusps, solve the eikonal equation to infinite order, obtain positive
transverse imaginary Hessian from the Riccati equation, solve the transport
hierarchy, Borel-sum, and prove residual `O(λ^{-N})` for each requested `N`
with Gaussian decay away from the ray; state cutoff and boundary conditions.
The lecture only sketches this general beam proof, so its uniform estimates
and patching must be supplied locally and cannot be inferred from the simple
geometry construction.

For `q_j∈C_c^∞(M°)`, equal DN maps then determine the integrals of
`q₁−q₂` on nontrapped maximal rays of length `<T`. Conclude coefficient
uniqueness only in the stated simple case, after proving the IP-38 spatial
X-ray injectivity and assuming `T` exceeds the longest relevant geodesic.
Finite propagation leaves a perturbation supported beyond distance `T/2`
unseen. Do not claim a noise stability modulus. **B leaves:** a short-time
invisible perturbation, the ray-limit error terms, and a simple geometry with
adequate observation time. **Requires:** IP-38, `pde/wave-energy-finite-propagation-and-huygens`, `pde/sobolev-traces-and-zero-boundary-values`, and local variable-metric IBVP/GO modules above. **Source:** reader 4, Salo §3, pp. 20–39 and reader-4 prerequisite annex; the exact beam argument is explicitly only sketched in Salo.

<a id="ip-41"></a>

### IP-41 — Scalar Calderón maps and conditional uniqueness

**Pages:** `calderon-problem-and-cgo-uniqueness` /
`calderon-problem-and-cgo-uniqueness-examples`.
**A items:** `lem-ip-smooth-manifold-elliptic-nonresonant-regularity`, `lem-ip-boundary-quasimode-jets-and-borel-correction`, `def-ip-conductivity-dirichlet-to-neumann-map`,
`lem-ip-conductivity-liouville-transform-and-dn-conjugacy`,
`lem-ip-alessandrini-identity`, `lem-ip-limiting-carleman-estimate-on-product`,
`thm-ip-cgo-solvability-and-remainder-bound`,
`thm-ip-boundary-determination-of-scalar-conductivity`,
`lem-ip-cubic-dn-small-data-differentiability`, and
`thm-ip-transversely-anisotropic-calderon-uniqueness`, and `thm-ip-semilinear-cubic-dn-identification`.
Define the smooth Euclidean scalar-conductivity DN map for positive `γ` and
state its full-data boundary trace contract. The Liouville module sets
`ρ=√γ`, transforms `div_g(γ∇v)=0` to `(-Δ_g+q)u=0` with `q=Δ_gρ/ρ`,
and proves the exact boundary relation
`Λ_γ f=ρ|∂ Λ_q(ρ|∂ f)−(∂_νρ)|∂ f`; this algebra and boundary conjugacy
are local obligations, since the source leaves the algebra as Exercise 4.1
and does not state the boundary formula. For real smooth potentials, assume
zero is not a Dirichlet eigenvalue, define the Schrödinger DN maps, and prove
the Alessandrini identity by Riemannian Green's formula. Do not let the
published Euclidean weak-elliptic supplier stand in for this smooth-manifold
nonresonant contract.

For boundary determination on a bounded smooth Euclidean domain, prove
equality of all boundary normal derivatives from equality of full scalar DN
maps by the boundary-concentrating complex-phase quasimodes, energy correction,
and induction in boundary normal coordinates. The supplier must include the
quasimode residual, exact-solution correction estimate, and Borel summation
step cited in Salo; equality of boundary jets is not interior uniqueness.
For interior potential recovery in dimension `d≥3`, use a compact
transversally-anisotropic product subdomain of `R×M₀`, smooth potentials with
zero outside a compact interior set, nonresonance at zero, and an injective
geodesic X-ray transform on `M₀`. State the exact limiting-Carleman contract:
for `Φ=it−r` and the allowed product geometry/phase variants, prove a
large-`|λ|` right-solvability estimate for
`(-Δ_g+q)(e^{iλΦ}R)=e^{iλΦ}F` with
`||R||₂≤C|λ|^{-1}||F||₂`, specifying the domain, support and boundary
conditions. Derive solvability by duality/Hahn–Banach from the conjugated
operator estimate; prove the weighted estimate by writing the conjugated
Laplacian, using the null eikonal cancellation and the positive commutator
term, and controlling lower-order terms uniformly. The lecture cites this
decisive estimate rather than proving it, so the Carleman calculation and
CGO product-error estimates are new local proofs, not imported results.
Solve the complex transport equation for the amplitude, apply the remainder
estimate to construct exact CGO solutions, and pass the opposite-frequency
product limit through the Alessandrini identity to recover ray integrals and
then the potential. Keep the conductivity conclusion separate: infer it only
where boundary data determine the needed `ρ` boundary values/normal derivative
and the Liouville boundary-value problem is unique. General smooth-manifold
and partial-data uniqueness remains outside scope.

The optional semilinear branch for `−Δ_gu+qu³=0` is a separate contract:
prove small-data solvability and three-times differentiable dependence of the
DN map before using its third derivative, then justify the four-harmonic-
factor identity and concentration limit. Salo states the formal identity
but does not prove the implicit-function/differentiability step; unless that
local lemma is completed, list the branch as a conditional proof obligation,
not as an established theorem. **B leaves:** equality of boundary jets
without interior equality, a product geometry satisfying injective X-ray
conditions, and a partial-data configuration outside the theorem. **Requires:** IP-38, IP-40, `pde/fredholm-elliptic-problems-and-the-elliptic-spectrum`, `pde/sobolev-traces-and-zero-boundary-values`, `differential-geometry/smooth-manifolds-and-smooth-maps`, and the local Liouville/Carleman/CGO modules above. **Source:** reader 4, Salo §4, pp. 39–57 and reader-4 prerequisite annex; the Carleman solvability estimate is cited in Salo, not proved there.

<a id="ip-42"></a>

### IP-42 — Anisotropic gauge and unresolved uniqueness

**Pages:** `anisotropic-calderon-gauge-and-open-uniqueness` /
`anisotropic-calderon-gauge-and-open-uniqueness-examples`.
**A items:** `thm-ip-boundary-fixing-diffeomorphism-preserves-dn-map` and
`op-ip-general-anisotropic-calderon-uniqueness`.
For a smooth boundary-fixing diffeomorphism `F`, define
`(F_*γ)(x)=DF(y)γ(y)DF(y)^T/|det DF(y)|` with `y=F^{-1}(x)`; a change of
variables in the weak energy form proves the DN map is unchanged.
Thus the tensor is not identifiable before quotienting by this gauge. The
general manifold/partial-data uniqueness question is stated only for a
precisely declared class and current source/status check; it is an `op-`
terminal, not a supplier. **B leaves:** a nontrivial boundary-fixing change
of variables and the induced equivalent tensor. **Requires:** IP-41,
`differential-geometry/smooth-manifolds-and-smooth-maps`, and
`differential-geometry/riemannian-metrics-length-distance-and-volume`.
**Source:** reader 4, Salo §4,
pp. 39–57; general uniqueness is explicitly unresolved there.

<a id="ip-43"></a>

### IP-43 — Fixed-frequency inverse scattering and Born linearization

**Pages:** `inverse-scattering-and-born-linearization` /
`inverse-scattering-and-born-linearization-examples`.
**A items:** `def-ip-fixed-frequency-far-field-data`,
`lem-ip-born-linearization-of-the-scattering-map`, and
`alg-ip-regularized-born-reconstruction`.
Use a compactly supported contrast/potential and the existing outgoing
Helmholtz volume-integral model. If the volume-integral operator norm is below
one, expand the resolvent as a Neumann series; the first Born term is the
Fréchet linearization and the existing Born remainder bound controls its
forward-model error. The reconstruction procedure takes finite
incident/observation directions, wavenumber, complex far-field samples, a
declared discrete Fourier map and filter, noise threshold, and iteration
budget; it applies the regularized inverse-Fourier map once, evaluates the
declared data residual, and returns the reconstruction with discrepancy,
residual-above-threshold, or budget status. Make no global nonlinear
uniqueness claim; it would need
a separate complete inverse-scattering source. **B leaves:** a small-volume
contrast in the Born regime, one outside the norm bound, and limited-aperture
missing frequencies. **Requires:** IP-01–IP-02,
`numerical-pdes-and-spatial-discretization/volume-integral-scattering-and-partial-wave-error`,
and the published Fourier transform pages. **Source:** published forward
scattering items; empirical inverse scattering contexts in reader 6 are not
used as a theorem.

<a id="ip-44"></a>

### IP-44 — PDE-constrained inversion and adjoint error control

**Pages:** `numerical-pde-inversion-and-adjoint-error-control` /
`numerical-pde-inversion-and-adjoint-error-control-examples`.
**A items:** `alg-ip-finite-element-pde-tikhonov`,
`prop-ip-discrete-adjoint-gradient-and-residual-status`, and
`def-ip-pde-solver-admissibility-contract`.
The algorithm accepts a parameter set, finite-element forward model, data,
noise level, penalty, initial admissible parameter, and finite iteration/solve
budgets. It checks PDE admissibility, solves state and adjoint systems to
declared residual tolerances, computes the discrete reduced gradient, performs
a safeguarded regularized step, and returns converged, discrepancy-stopped,
linear-solve-failed, inadmissible, or budget-exhausted status. The proposition
reuses the exact discrete-adjoint gradient and solve-residual suppliers; it
does not claim the discretized minimizer converges to the true parameter.
**B leaves:** CFL-invalid PDE iterate, biased under-solved adjoint, and a
separately bounded mesh/discretization error.
**Requires:** IP-04, IP-25–IP-26, and
`numerical-optimization-inverse-problems-and-uncertainty-quantification/finite-element-pde-constrained-optimization`,
`numerical-optimization-inverse-problems-and-uncertainty-quantification/discrete-continuous-and-pde-adjoint-sensitivities`, and
`numerical-pdes-and-spatial-discretization/finite-element-meshes-and-interpolation`.
**Sources:** existing numerical-analysis suppliers; reader 6 InverseBench's
admissibility findings remain empirical.

<a id="ip-45"></a>

### IP-45 — Logarithmic EIT stability on explicit conductivity classes

**Pages:** `eit-logarithmic-stability-and-conductivity-classes` /
`eit-logarithmic-stability-and-conductivity-classes-examples`.
**A items:** `lem-ip-planar-beltrami-dbar-logarithmic-stability`, `lem-ip-higher-dimensional-cgo-fourier-logarithmic-stability`, `lem-ip-bv-translation-modulus-for-conductivity`, `def-ip-calderon-admissible-conductivity-class` and
`thm-ip-calderon-logarithmic-l2-stability`.
On a bounded smooth `Ω⊂(0,1)^d`, assume bi-Lipschitz boundary charts,
`0<m≤γ≤M`, boundary agreement with the fixed background, and a bounded
class `X₂(R)` in BV for `d=2` or the source's bounded `C^{1,α}` class for
`d≥3`. The full-text source gives constants `C,ρ,t₀>0` and the explicit
modulus `ω(t)=[log(1/min(t,t₀))]^{−ρ}` such that
`||γ−γ₀||_{L²(Ω)}≤Cω(||Λ_γ−Λ_{γ₀}||)` in the stated DN operator norm.
The proof is separate by dimension: BV translation moduli plus the cited
two-dimensional stability theorem, and higher-dimensional logarithmic DN
stability plus embedding. This is conditional uniqueness with severe
instability, not a Lipschitz guarantee. **B leaves:** d=2 BV and d≥3 smooth
classes plus perturbations showing the logarithm is consequential.
**Requires:** IP-31, IP-41, `pde/fredholm-elliptic-problems-and-the-elliptic-spectrum`,
and exact Sobolev trace suppliers. **Source:** reader 6, de Hoop et al. (2025),
Thm. 3.2, all 80 pp.; constants depend on the listed geometry/class data. The paper imports the decisive dimension-specific inverse stability theorems; its BV translation calculation does not independently prove them. The local stability-foundation modules below are mandatory suppliers.

<a id="ip-46"></a>

### IP-46 — Learned reconstruction targets and risk

**Pages:** `learned-reconstruction-targets-and-risk` /
`learned-reconstruction-targets-and-risk-examples`.
**A items:** `def-ip-learned-reconstruction-estimator`,
`def-ip-inverse-risk-under-train-and-test-laws`, and
`prop-ip-posterior-mean-is-square-loss-optimal`.
Distinguish a point estimator, unrolled update, denoiser/prior, score field,
amortized inverse map, and posterior sampler by their domain/codomain,
training law, test law, and target. Under a proper posterior and finite
second moment, conditional expectation minimizes posterior squared-error
risk; state the almost-sure equivalence class and do not imply it is an
admissible or perceptually representative truth. Distribution shift changes
the risk measure and receives no bound without an explicit divergence or
stability premise. Reuse the published conditional-expectation projection and
statistical loss/risk interfaces. **B leaves:** posterior mean outside a
nonconvex signal class, a train/test prior shift, and a calibrated posterior
sample. **Requires:** IP-01, IP-16, IP-20, and published risk/conditional-law
pages. **Sources:** reader 3 §4 and reader 6's complete diffusion survey and
InverseBench; perceptual-distortion theorem is not claimed as independently
read.

<a id="ip-47"></a>

### IP-47 — Noise-robust neural-operator approximation for EIT

**Pages:** `neural-operator-eit-inverse-map` /
`neural-operator-eit-inverse-map-examples`.
**A items:** `lem-ip-boundary-spectral-counting-and-sobolev-scale`, `def-ip-mean-zero-ntd-and-smoothed-kernel-observation`, `lem-ip-ntd-smoothing-and-hilbert-schmidt-kernel-bound`, `lem-ip-eit-forward-continuity-and-class-compactness`, `thm-ip-hilbert-map-extension-with-concave-modulus`, `lem-ip-boundary-chart-lifting-and-fourier-projection`, `thm-ip-generalized-fno-uniform-approximation-on-compact-sets`, `def-ip-generalized-fourier-neural-operator`,
`lem-ip-stable-extension-of-the-eit-inverse-map`,
`thm-ip-eit-fno-noise-robust-existence`, and
`op-ip-finite-sample-generalization-of-neural-inverse-maps`.
Use the exact conductivity classes and kernel observation representation of
IP-45. Extend the inverse map from its compact exact-data domain to the
Hilbert kernel space with the same `ω⋆` modulus; show the admissible forward
image is compact; invoke the locally proved generalized-FNO universal approximation
theorem under smooth globally Lipschitz non-polynomial activation and the
domain-chart/lifting assumptions. Then for every `ε>0` there exists a network
`Ψ` with
`sup_{γ∈X_d(R),η∈K_δ}||γ−Ψ(κ_γ+η)||₂≤ε+C⋆ω⋆(δ)` for compact perturbation
set `K`. The kernel input is the mean-zero NtD map (with dimension-dependent smoothing), not the unsmoothed DN map or an arbitrary electrode matrix. The theorem is an existence result, not a training, finite-sample,
cost, or calibration guarantee. The finite-sample/general inverse-map
generalization question is an `op-` terminal. **B leaves:** continuum theorem
versus finite-element 2D experiments and a finite sample outside a uniform BV
bound. **Requires:** IP-45–IP-46 and published Fourier/neural approximation
suppliers if any; extension, compactness, and FNO approximation modules are
new and must be locally proved. **Source:** reader 6, de Hoop et al. (2025),
Thms. 3.2, 3.8–3.9, 4.6, 4.8, all 80 pp.

<a id="ip-48"></a>

### IP-48 — Unrolled reconstruction and finite-iteration limits

**Pages:** `unrolled-inverse-solvers-and-generalization` /
`unrolled-inverse-solvers-and-generalization-examples`.
**A items:** `def-ip-unrolled-regularization-architecture` and
`prop-ip-finite-unrolling-does-not-imply-regularization-convergence`.
Define a depth-`N` unrolled map by its initialization, update maps, trained
parameters, and data-consistency term. Prove only the finite statement: the
deployed map is the composition of those `N` maps on its declared domain; it
is not the limit of the underlying iteration unless a separate uniform
stability/convergence theorem proves that limit. A training loss bound is
not a forward-data residual bound or a test-risk bound. The counterexample
uses learned updates that fit a finite training set and fail on a shifted
operator. **B leaves:** exact truncated Landweber versus learned finite-depth
updates and an out-of-distribution parameter. **Requires:** IP-46 and the
published Landweber, automatic-differentiation, and proximal interfaces.
**Sources:** reader 6, InverseBench and the complete diffusion survey;
empirical claims stay scoped to their datasets.

<a id="ip-49"></a>

### IP-49 — Plug-and-play MMSE denoisers and stationarity

**Pages:** `plug-and-play-mmse-regularization` /
`plug-and-play-mmse-regularization-examples`.
**A items:** `lem-ip-tweedie-mmse-jacobian-and-prox-potential`, `def-ip-pnp-ista-with-denoiser`,
`thm-ip-exact-mmse-pnp-ista-stationarity`, and
`rem-ip-arbitrary-denoiser-has-no-inherited-objective`.
For nondegenerate prior on `R^n`, exact AWGN MMSE denoiser
`D_σ(z)=E[X|X+N(0,σ²I)=z]`, `g∈C¹` with `L`-Lipschitz gradient, finite
lower-bounded constructed objective `g+h_mmse`, and fixed
`0<γ≤1/L`, define `x_t=D_σ(x_{t−1}−γ∇g(x_{t−1}))`. The theorem constructs
an extended-valued, generally nonconvex `h_mmse` and proves objective
monotonicity and `||∇(g+h_mmse)(x_t)||→0`. Its proof uses Tweedie, the
possibly nonconvex prox identity, a quadratic majorizer, and summable descent.
It proves stationarity only: no global minimum, rate, posterior sampling, or
trained-network guarantee. **B leaves:** exact scalar MMSE, approximate CNN
denoiser outside the theorem, and a false iterative-AWGN noise model.
**Requires:** IP-46, the published proximal-map and smooth-descent suppliers.
**Source:** reader 6, Xu et al. (2020), complete 10 pp.; preserve the appendix
notation correction noted in reader-6.md.

<a id="ip-50"></a>

### IP-50 — Score and diffusion methods for inverse data

**Pages:** `score-diffusion-inverse-solvers` /
`score-diffusion-inverse-solvers-examples`.
**A items:** `lem-ip-conditional-score-and-tweedie-identities`, `def-ip-diffusion-prior-score-and-measurement-score`,
`alg-ip-measurement-guided-diffusion-reconstruction`, and
`prop-ip-plugged-in-measurement-score-is-approximate`.
For additive Gaussian diffusion, state the exact identity
`∇log p_t(x_t|y)=∇log p_t(x_t)+∇log p_t(y|x_t)` and explain that the second
term integrates over `p(x₀|x_t)` and is generally intractable. Tweedie's
identity and the score-matching/conditional-mean minimizer equivalence hold
only under the survey's smoothness/support conditions. Define a discrete
predictor/corrector procedure from trained reverse kernels `Q_{θ,k}` and
declared correction maps `a_k(x,y)`: start from the stated terminal reference
law, draw `x_{k−1}` from the corrected kernel
`Q_{θ,k}(·|x_k,y;a_k)` for `k=N,…,1`, apply only an explicitly declared
admissibility projection, and return `x₀` or the first solver/admissibility
failure status. Inputs include the schedule, score network, observation
operator, noise model, correction rule, and finite compute budget. Replacing
the exact score by a point/Gaussian/
moment/proximal surrogate yields an approximate algorithm, not an exact
posterior sampler. **B leaves:** explicit-score, variational, latent-optimization,
and MCMC/particle families; contrasting their target and exactness conditions.
**Requires:** IP-46, IP-48, IP-49, published SDE/ODE and MCMC suppliers.
**Source:** reader 6, Daras et al. (2024), all 38 pp.; method taxonomy is a
non-exhaustive work-in-progress survey.

<a id="ip-51"></a>

### IP-51 — Benchmarks, prior shift, and solver admissibility

**Pages:** `inverse-problem-benchmarking-and-shift` /
`inverse-problem-benchmarking-and-shift-examples`.
**A items:** `def-ip-benchmark-risk-and-compute-budget` and
`rem-ip-inversebench-scoped-findings`.
Specify test population, training population, measurement operator, forward
solver, admissible state set, noise, query/gradient/ODE budget, metric, and
uncertainty diagnostic before comparing methods. Record InverseBench's
observed trade-offs only for its selected first-Born optics, multi-coil MRI,
black-hole imaging, FWI, and 2D Navier–Stokes data. Its PDE sets include one
validation case and ten test cases for Navier–Stokes; the reported CFL,
step-size, and prior-shift effects are empirical. Do not encode a ranking as a
theorem or extrapolate to a new distribution. **B leaves:** the five benchmark
models, a prior-matched versus out-of-distribution case, and a solver-invalid
iterate. **Requires:** IP-14, IP-35, IP-44, and IP-46–IP-50.
**Source:** reader 6, Zheng et al., ICLR 2025, full 29 pp. and appendices.

<a id="ip-52"></a>

### IP-52 — Open frontiers in calibrated and robust learned inversion

**Pages:** `open-frontiers-in-learned-inverse-problems` /
`open-frontiers-in-learned-inverse-problems-examples`.
**A items:** `op-ip-calibration-under-score-and-solver-error`,
`op-ip-distributionally-robust-inversion-under-operator-shift`,
`op-ip-finite-compute-multimodal-posterior-fidelity`, and
`op-ip-neural-operator-sample-complexity-for-inverse-maps`.
Each item must formulate a separate target: (1) bound frequentist coverage
error of credible sets as a function of score, forward-solver, and finite-time
sampling error over a stated truth class; (2) give a nonvacuous recovery
modulus when the operator/test distribution lies in an explicitly bounded
shift class; (3) relate finite compute to total-variation/Wasserstein error
and missed posterior modes for a stated multimodal family; (4) obtain
finite-sample generalization and discretization-transfer bounds for a neural
operator on a compact infinite-dimensional inverse-map domain. These are dated research targets as of 2026-10-18, motivated by the cited works' stated limitations; absence of a proof in a dossier is not evidence of unresolved mathematical status. Each future `op-` carrier must specify a concrete model, constants, error norm and quantifiers, and receive a current authoritative solution-status review. Until that review, retain it as a proposed open-problem formulation with status-check owed; no claim that every specialization is unsolved is authorized. No open item is a
supplier. **B leaves:** one scope example and one known limitation for each
question. **Requires:** IP-14 and IP-46–IP-51 for formulation context only;
these edges are nonlogical page context, and no item `deps` may target an
`op-` item. **Sources:** reader 3 flow-matching limitations; reader 6,
Daras et al., InverseBench, de Hoop et al.; source reports in this directory.




## Audit-added prerequisite contracts and proof architecture

All IDs here are explicit new draft-authoring obligations homed on the indicated existing A page; none is asserted proved. They preserve the 52 pair scopes and close missing supplier designs without pretending that a citation is a local proof. The machine inventory gives their proposed logical edges. Generic existing suppliers are used only within their inspected interfaces. A failure to complete any supplier blocks its descendants, rather than turning an established theorem into an open problem.

**IP-10 (testing foundations).** `lem-ip-gaussian-product-mixture-testing-bound` proves the likelihood-ratio second moment for a finite product of symmetric Gaussian shifts, `E₀L²=∏cosh(a_j²/ε²)`, first in finite dimension then by a justified limit with uniformly bounded second moments. Use `cosh t≤exp(t²/2)` to obtain indistinguishability, the exact testing risk inequality and the sharp log-likelihood expansion when its largest term vanishes. `lem-ip-weighted-chi-square-triangular-array-limit` normalizes `Σw_j(ξ_j²−1)` by `2Σw_j²`, proves a Lyapunov/Lindeberg bound from `max|w_j|/(Σw_j²)^{1/2}→0`, and treats shifted means for upper-test power. Solve the stated constrained extremal problem and check its maximizing/minimizing inequalities before deriving rates; the sparse `q<2` branch needs its separate threshold statistic and product-mixture construction, with boundary parameter cases explicitly proved. The missing supplement remains a source limitation, not permission to omit these derivations.

**IP-19 (MAP foundations).** `lem-ip-gaussian-shift-small-ball-ratio` proves Gaussian ball probability ratios for Cameron–Martin shifts using the Cameron–Martin change of measure, finite-dimensional projection approximations and exponential-integrability/tail control; it cannot assume an infinite-dimensional density. Reuse the published `lem-banach-gaussian-rkhs-unit-ball-is-compact` (AC, centered tight real separable-Banach Gaussian), then the lower-bound/potential argument yields existence of a minimizing subsequence; do not duplicate that compactness theorem. Ball ratios for fixed Cameron–Martin centers and existence of a global strong MAP are separate conclusions; do not infer the latter from the former alone.

**IP-24 (flows).** `lem-ip-lipschitz-ode-triangular-flow-and-c1-density` proves global existence and the `exp(∫L)` bi-Lipschitz estimate by Grönwall for a continuous-in-time drift with integrable global spatial Lipschitz constant, including a growth bound at the origin. Its separate C¹ clause assumes a continuous spatial derivative and proves the variational matrix ODE and Liouville determinant formula. Disintegration alone proves the a.e.-data transport conclusion and does not require that density clause. Training is finite-sample regression with optimizer tolerance and a finite ODE budget; failed training/integration is an explicit output status, and ideal regression does not imply a learned field is exact.

**IP-27 (index calculus).** `def-ip-banach-convex-subgradient-and-dual-pairing` specifies a real Banach space X, dual X*, proper convex lower-semicontinuous extended penalty, dual pairing, subgradient and Fenchel conjugate; it does not extend the finite-dimensional prox supplier by analogy. `lem-ip-banach-fenchel-duality-for-regularization` proves the precise primal–dual equality used by TV/range invariance under a stated continuity-at-one-feasible-point qualification, by separating the convex epigraph/value-function set and proving the conjugate/subgradient optimality equivalence; dual attainment requires the separately displayed coercivity/compactness or certificate assumption. No unqualified dual attainment is asserted. `lem-ip-index-function-young-conjugate-bound` defines the exact convex conjugate of the negative concave index function in the VSC, states monotonicity/concavity domains, and proves the Young inequality used to absorb the data term. Quadratic Hilbert VSC rates and Banach Bregman rates retain separate hypotheses; no norm error follows from a Bregman bound without a proved coercivity/uniform-convexity conversion.

**IP-31–32 (BV geometry).** `lem-ip-bv-extension-translation-and-coarea` proves the bounded-Lipschitz extension bound, BV translation bound and coarea `|Du|(Ω)=∫P({u>t};Ω)dt` by smooth approximation, layer-cake and lower semicontinuity. `lem-ip-finite-perimeter-relative-isoperimetry` proves the full-space and relative-domain inequalities needed for the selected boundary convention, with scale and extension constants. Do not import an interval BV statement as either result. `lem-ip-tv-dual-attainment-and-certificate-limit` derives the TV Fenchel dual in the named `L²` spaces, handles Neumann constants separately (require control by A or normalize them), and uses the source certificate to prove strong convergence of minimum-norm dual maximizers. `lem-ip-tv-level-set-uniform-density-and-hausdorff` derives uniform two-sided density by comparison with local perimeter competitors and the boundary-specific isoperimetry under the stated `||w||||A*||/α` threshold. Prove tight common support where required, subsequence/a.e.-level measure convergence through coarea, and that a hypothetical Hausdorff boundary defect contradicts density and measure convergence. These are substantive geometric proofs, not a finite-grid TV solver guarantee.

**IP-34 (sparse recovery).** `lem-ip-robust-nsp-block-tail-estimate` orders the coordinates of an error h outside its largest s-coordinate block, divides into blocks of size s, and bounds each later block's ℓ² norm by the preceding block's ℓ¹ norm divided by √s. Combine this with the optimality cone `||h_{Sᶜ}||₁≤||h_S||₁+2σ_s(x†)₁` and `||Ah||₂≤2ε`, then solve the `(1−ρ)` inequality to display constants in both claimed norms. The algorithm is a declared convex constrained solve to exact optimality or a stated primal-dual gap; a nonzero gap adds a proved tolerance term rather than inheriting the exact-minimizer theorem.

**IP-38 (geodesic foundations).** `lem-ip-surface-geodesic-flow-index-form-and-transport` constructs the unit tangent bundle and invariant Liouville measure in charts, derives the X,V,perpendicular commutators and integration-by-parts formulas, and proves positivity of the fixed-endpoint index form from no conjugate points by the Jacobi/Riccati factorization. Strict convexity and nontrapping make exit times and the transport primitive well behaved; compact interior support and vanishing ray data eliminate boundary terms. These statements supply the actual Pestov argument and must precede it.

**IP-39 (analytic foundations).** `def-ip-distributions-conormal-kernels-and-cotangent-relation` defines test-function topology, distributions/compact support, pullback by a submersion, pushforward with proper support, densities, cotangent bundles and conormal kernel oscillatory representation in incidence charts. Prove the coordinate transformation rules needed by this transform rather than assume a full FIO calculus. `lem-ip-analytic-cutoff-sequence-and-fbi-invariance` uses analytic-cutoff sequences `|∂^αχ_N|≤C(CN)^{|α|}` for `|α|≤N`, not nonexistent compactly supported analytic bump functions; proves equivalence of the selected local exponential FBI criterion across the analytic charts/packets actually used, with polynomial distribution growth controlled. `lem-ip-holomorphic-morse-normalization-and-gaussian-contour` proves the holomorphic inverse/Morse lemma with quantitative neighborhoods, admissible contour deformation and Gaussian determinant branch, then factorial coefficient bounds optimally truncated at order proportional to the large parameter. Boundary/complement estimates must use the cutoff sequence and positive imaginary phase. A leading stationary-phase term with an exponentially small remainder is not generally correct: include the truncated analytic asymptotic amplitude series and its exponential remainder. The one-sided support continuation lemma must prove the conormal obstruction by localizing the distribution, applying the FBI/Laplace estimate to its first possible support contact, and deriving contradiction; it is a distinct supplier, not an automatic consequence of smooth wavefront calculus. These specialized foundational proofs are substantial and explicitly owed even though MST imports them.

**IP-40 (variable metric waves).** `lem-ip-riemannian-green-boundary-traces-and-wave-lifting` derives coordinate-invariant divergence/Green formulas and smooth boundary-data lifting; state compatible data in e.g. smooth classes vanishing near time endpoints before completing to named energy/trace spaces. Include the normal-trace estimate actually used by the DN pairing. `lem-ip-simple-geodesic-polar-extension` proves the required geodesic extension outside the boundary and nonsingular polar chart from simplicity/Jacobi fields on the compact ray tube, rather than applying distance through its center/cut locus. `lem-ip-borel-jet-realization-and-beam-patching` proves parameter-uniform Borel jet realization by a decreasing-cutoff construction, symplectic/Riccati positivity, finite cover patching and residual/normalization estimates for the high-order complex phase. Keep phase-space nonselfintersection distinct from possible spatial crossings; patch branches there rather than assume all rays are embedded in configuration space. Correct the Gaussian-beam residual with the previously proved energy solver; the product limit requires normalized amplitudes, Gaussian integral normalization, mixed-term bounds and an error order exceeding the amplitude growth. `lem-ip-variable-metric-domain-of-dependence` proves a local cone energy inequality with the Riemannian distance metric, yielding finite propagation and the two-boundary-trip time T/2 invisibility statement. The existing Euclidean finite-speed theorem cannot supply the metric version. Static q gives spatial geodesic integrals; time-dependent q gives light-ray integrals and requires a separate injectivity theorem. In dimension greater than two, the wave corollary may assume an explicitly proved injective spatial X-ray transform; IP38 alone supplies only the two-dimensional case.

**IP-41 (elliptic foundations).** `lem-ip-smooth-manifold-elliptic-nonresonant-regularity` proves the smooth-boundary trace, Green, lifting, nonresonant Fredholm solvability and regularity statements on compact manifolds by partitions of unity, uniformly elliptic local estimates, compact resolvent and spectral exclusion. The named Euclidean weak theorem supplies only its coordinate-compatible weak step. `lem-ip-boundary-quasimode-jets-and-borel-correction` constructs the boundary complex phase and amplitude jets with quantified vanishing residual, supplies the Borel realization (reuse IP40's jet construction), and bounds the exact correction by elliptic energy. For the product Carleman module, write the correct conjugation first for real limiting weight t, convexify it, establish the semiclassical commutator estimate including boundary/support terms, then dualize and conjugate the additional oscillatory factor. The complex eikonal cancellation alone does not prove a coercive estimate; do not assert arbitrary boundary conditions on the right inverse. State its L²-to-L² `O(1/|λ|)` remainder contract and support/extension domain explicitly. In base dimension above two, injective X-ray is an additional hypothesis unless a higher-dimensional supplier is independently authored. `thm-ip-semilinear-cubic-dn-identification` depends on the small-data lemma: in `C^{2,α}` with nonresonant Dirichlet Laplacian, prove a contraction/implicit-function construction, differentiate three times with quantitative remainder and boundary trace bounds, derive the four-harmonic-factor identity and prove the intersecting-ray concentration limit. It is a separate actual theorem design, not an optional named branch without a consumer ID.

**IP-45 (logarithmic stability foundations).** Fix `Γ={γ∈L∞(Ω):m≤γ≤M,γ=1 on Ω\Ω′}`, `Ω′⊂⊂Ω`, and `X₂(R)={γ∈Γ∩BV(Ω):||γ||_{BV}≤R}`; in d≥3 use the source's fixed `C^{1,α}` norm bound and the same background collar. All equality and positivity conventions are a.e. when appropriate. `lem-ip-bv-translation-modulus-for-conductivity` extends γ by one, proves no jump measure occurs at the collar, obtains `||τ_hγ−γ||₁≤R|h|`, and interpolates with the uniform L∞ bound to obtain a uniform Lp modulus. `lem-ip-planar-beltrami-dbar-logarithmic-stability` must prove the quantitative planar inverse theorem for this uniformly elliptic class and modulus: construct normalized Beltrami CGO solutions, control their spectral parameter growth, relate boundary integral scattering data to the DN difference, estimate low-frequency scattering differences and high-frequency tails using the translation modulus, and optimize the spectral cutoff at a logarithmic scale. `lem-ip-higher-dimensional-cgo-fourier-logarithmic-stability` similarly proves the quantitative CGO boundary identity, exponential-in-frequency low-mode bound and smoothness-tail estimate for the stated d≥3 conductivity class, followed by optimization and Liouville recovery. These are major missing proofs: de Hoop et al. cite the core planar and higher-dimensional theorems rather than prove them. Their bibliography [24] and [31]–[32] are precise source-recovery leads, not accepted suppliers. Preserve the full theorem scope; authoring cannot pass until these modules are locally proved and their actual references read. Set ω(0)=0 and fix t₀<1 so the displayed logarithm is meaningful.

**IP-47 (kernel, extension and approximation foundations).** `lem-ip-boundary-spectral-counting-and-sobolev-scale` constructs the compact boundary Laplacian spectral resolution from local elliptic estimates and min–max, proves a counting upper bound `N(Λ)≤C(1+Λ)^{(d−1)/2}` by chart bracketing/Fourier comparison, and defines Sobolev spectral norms with the norm equivalences used below. This weaker Weyl bound already suffices for convergence of `Σ(1+λ_j)^{-1−r_d}`; no full unproved Weyl asymptotic is needed. `def-ip-mean-zero-ntd-and-smoothed-kernel-observation` defines NtD on mean-zero boundary data and potentials modulo constants, the Sobolev spectral scale on ∂Ω, the positive smoothing operator `C=(I−Δ_{∂Ω})^{-1}` on mean-zero functions and `r_d=(d−1)/2−1+τ`, `τ>0`, with observed operator `R_γ C^{r_d/2}`. Choose `r₂=0` using `τ=1/2`; in d=3 choose any positive r₃. Fix the kernel as the zero-mean-in-each-variable representative by extending the operator to kill constants; otherwise its kernel on mean-zero inputs is not unique. `lem-ip-ntd-smoothing-and-hilbert-schmidt-kernel-bound` proves elliptic NtD estimates and the smoothing degree required for a Hilbert–Schmidt operator, identifies it with its L²(∂Ω×∂Ω) kernel by ONB expansion, and proves the inequalities transferring kernel differences to the DN norm used by IP45. Distinguish unsmoothed low-dimensional kernels from smoothing required in higher dimension; numerical electrode matrices need their own approximation bound. `lem-ip-eit-forward-continuity-and-class-compactness` proves weak PDE energy stability, forward continuity in the source's conductivity Lp topology, compactness/closedness of X₂(R) via BV plus uniform ellipticity/collar and of the higher-dimensional class via Ascoli–Arzelà, and compactness of the resulting kernel image. Check the C^{1,α} closed-ball topology rather than assuming its unit ball compact in itself. `thm-ip-hilbert-map-extension-with-concave-modulus` proves the precise Hilbert extension theorem for a continuous nondecreasing concave modulus vanishing at zero; build the required admissible concave ω⋆ majorant of the logarithm and prove its global extension bound. Do not assert a same-modulus extension for arbitrary moduli or invoke scalar McShane for vector values. The cited Benyamini–Lindenstrauss extension theorem is another local proof/source-recovery obligation. `lem-ip-boundary-chart-lifting-and-fourier-projection` constructs finite boundary charts, smooth partition/lift/restriction maps and Fourier projection with uniform error on compact function sets, and handles different input/output dimensions. `thm-ip-generalized-fno-uniform-approximation-on-compact-sets` proves finite-rank reduction and a finite-dimensional neural universal approximation lemma for the specified smooth globally Lipschitz nonpolynomial activation, realizes the finite-rank map in the generalized FNO architecture and controls lifting/restriction errors. It may not cite an unnamed preexisting neural supplier. Approximate on the compact Minkowski sum of the exact kernel image and the compact noise set intersected with the δ-ball; compactness of a bounded infinite-dimensional noise ball would be false. The final `ε+Cω⋆(δ)` bound is the triangle inequality between extension stability and uniform compact-set approximation. Neither the extension nor this existence argument supplies trained weights, statistical sample complexity, or a rate in network size.

**IP-49–50 (denoising and scores).** `lem-ip-tweedie-mmse-jacobian-and-prox-potential` differentiates Gaussian convolution under proved integrability and shows `∇D_σ(z)=Cov(X|z)/σ²`, positive definite under the stated nondegenerate density. It constructs the inverse on the denoiser image and the extended penalty with the correct step-size scaling, then proves the global prox inequality from the convex conjugate of the Gaussian log-partition (not merely stationarity of a prox candidate). The penalty depends on γ, σ and the prior; a learned approximate denoiser needs a separate perturbation bound. The objective/descent proof must supply the Lipschitz/surrogate control needed for its vanishing-gradient conclusion. `lem-ip-conditional-score-and-tweedie-identities` gives jointly positive differentiable densities and a dominating derivative envelope, applies Bayes and differentiation under the conditional integral to derive the exact score split and Gaussian Tweedie identity. A substituted point estimate inside a nonlinear likelihood is generally not this integral; a scalar mixture/nonlinear example explicitly demonstrates the discrepancy.

## Planning integrity and current research status

The six dossiers report nineteen PDF reads of eighteen distinct works (Clason is read in two lanes): 759 unique PDF pages, or 896 reader-pages counting that repeat. These are inherited, attributed reading extents. This audit independently examined selected original extraction passages (including TV Theorem 2 and EIT §§2–4), not all complete works. No future item proof has been accepted. Cited-only Beltrami/stability, Hilbert extension, analytic microlocal and Carleman foundations are explicit blocked-until-authored designs with exact descendant edges; they are established-result authoring obligations rather than mathematical open problems. Every `op-` proposal also owes a formulation-specific dated source/status review before carrier creation. Generic formulations such as “stable limited-angle reconstruction” and “honest coverage” include many solved special cases; the source limitation itself never establishes openness.

Audit reuse reconciliation: the two original proposed weak-compactness/norm-lower-semicontinuity IDs in IP26 are superseded by the exact published suppliers above; no duplicate carriers should be minted for them. Original pair and page IDs remain fixed. Basic distributions already exist on the tempered-distribution page; IP39 extends only the manifold/submersion/conormal interface and reuses those exact existing distribution definitions.

## Audit coverage expansion — additional stable pairs

The original IP01–52 and their page IDs remain unchanged. The following three pairs extend the inventory to 55 A/B pairs (110 proposed pages). Their finite-dimensional claims have explicit elementary proof designs below; they do not rely on an invented additional full-text read. Source references are bibliographic leads pending retrieval/statement verification before carrier provenance is finalized. They reuse published matrix/Gaussian/regularization machinery.

<a id="ip-53"></a>

### IP-53 — Real phase retrieval and phaseless ambiguity

**Pages:** `real-phase-retrieval-and-complement-property` /
`real-phase-retrieval-and-complement-property-examples`.
**A items:** `def-ip-real-frame-phase-retrieval`, `def-ip-frame-complement-property`,
`thm-ip-real-phase-retrieval-complement-property`,
`cor-ip-full-spark-sharp-real-phase-measurement-count`, and
`alg-ip-finite-sign-enumeration-phase-retrieval`.
For known real measurement vectors `a_i∈R^d`, `d≥1`, define the intensity map
`x↦((a_i^Tx)²)_{i=1}^m` on `R^d/{±1}`; name the quotient metric
`min(||x−z||₂,||x+z||₂)` and distinguish intensities from amplitudes. The
complement property says that for every subset S of {1,…,m}, either its
measurement vectors or those of its complement span R^d. Prove injectivity
modulo global sign iff this property holds. If two signals have the same
intensities, `(a_i^T(x−z))(a_i^T(x+z))=0`; partition indices according to
which factor vanishes and apply the spanning property to obtain `x=z` or
`x=−z`. Conversely, if both spans are proper, choose nonzero u and v in
their respective orthogonal complements. The signals `u+v` and `u−v` have
identical intensities and are not equal modulo sign. Include all zero-vector
and zero-signal cases explicitly. This is a real finite-frame theorem, not a
complex phase-retrieval theorem or a Fourier-magnitude uniqueness theorem.

For a full-spark frame (every d vectors independent), `m≥2d−1` suffices:
every partition has a side of size at least d. No frame with `m≤2d−2`
can work: partition into two sets each of size at most d−1. Exhibit full-spark
vectors on the real moment curve using a Vandermonde determinant, proving
attainability of the sharp count. The algorithm accepts A, nonnegative
intensities b, exact/noisy mode, feasibility tolerance, maximum sign patterns,
and a linear-solve budget; take amplitudes `r_i=√b_i`, enumerate `s∈{±1}^m`
modulo global sign, solve `Ax=s⊙r` (or its finite least-squares problem) using
the published QR/SVD supplier, and check residuals. In exact mode return the
feasible equivalence class/all ambiguities, infeasible, or budget-exhausted.
In noisy mode return the smallest amplitude-residual candidate among visited
patterns and its status. Full enumeration minimizes amplitude least squares
since `min_s||Ax−s⊙r||²=Σ(|a_i^Tx|−r_i)²`; it is exponential computation and
has no inherited intensity-noise or statistical optimality guarantee.
**B leaves:** a two-dimensional three-vector full-spark frame; a failed
partition with an explicit ambiguous pair; real versus complex ambiguity;
Fourier-magnitude translation/reflection ambiguities; and incomplete sign
enumeration. **Requires:** IP-01–IP-02 and published finite QR/SVD,
orthogonal complements. Prove the moment-curve determinant locally: its alternating determinant is divisible by every node difference, both sides have degree d(d−1)/2, and the lexicographic leading coefficient is one; distinct nodes therefore give independent columns.
**Source lead:** Balan–Casazza–Edidin, “On signal reconstruction without phase,”
Applied and Computational Harmonic Analysis 20 (2006), 345–356,
<https://doi.org/10.1016/j.acha.2005.07.001>. Not claimed full-text read here.

<a id="ip-54"></a>

### IP-54 — Bayesian measurement design and information gain

**Pages:** `bayesian-inverse-experimental-design-and-information-gain` /
`bayesian-inverse-experimental-design-and-information-gain-examples`.
**A items:** `def-ip-design-indexed-inverse-experiment`,
`def-ip-expected-information-gain`, `thm-ip-eig-is-joint-relative-entropy`,
`thm-ip-linear-gaussian-information-gain-logdet`, and
`alg-ip-finite-candidate-information-design`.
Let a finite design set D index jointly measurable dominated likelihoods
`p_d(y|θ)` with a proper prior μ₀ and common specified sigma-finite observation
measure. Define predictive density `p_d(y)=∫p_d(y|θ)μ₀(dθ)` and posterior only
on positive finite evidence fibers. Expected information gain is
`∫KL(μ_d^y||μ₀)p_d(y)dy`. Prove the equality with joint relative entropy
`KL(P_{θ,Y|d} || μ₀⊗P_{Y|d})` by the density `p_d(y|θ)/p_d(y)`, disintegration
and an explicitly justified integral exchange: the negative part of the
log-likelihood-ratio integral is controlled by the bound on `t log t`, while
the positive part may be infinite. Either permit `+∞` as an extended objective
or assume integrability before numerical optimization; no subtraction of two
infinite entropies is allowed. Equal data under two truth/operator pairs
cannot be repaired merely by labeling the objective Bayesian.

For `θ~N(m,C)`, `C≥0`, and `Y=A_dθ+η_d` with independent
`η_d~N(0,Γ_d)`, `Γ_d>0`, show
`EIG(d)=½logdet(I+Γ_d^{-1/2}A_d C A_d^TΓ_d^{-1/2})` by the nonsingular
predictive/conditional observation Gaussian densities. This handles singular
state covariance without using its differential entropy. Mean m cancels;
noise dependence on θ would change the formula. The algorithm validates each
finite candidate's Γ and dimensions, computes the symmetric whitened matrix
and log determinant via a declared stable factorization, subtracts a declared
cost, returns the maximal feasible utility with deterministic tie rule, or
all-inadmissible/budget-exhausted. Its exact arithmetic finite optimum is
proved by exhaustive comparison; floating-point evaluation requires the
published solve/determinant error interface and a comparison tolerance. An
MC estimate of nonlinear EIG is a different procedure and does not acquire
this exact optimum guarantee. **B leaves:** sensor placement along high prior
variance directions; repeated measurements with correlated noise; singular
prior support; and a design optimized under the wrong forward operator.
**Requires:** IP-12, IP-16, IP-18, IP-23; published Gaussian conditioning,
disintegration, relative entropy and finite optimal-design suppliers.
**Source lead:** Chaloner–Verdinelli, “Bayesian Experimental Design: A Review,”
Statistical Science 10 (1995), 273–304,
<https://doi.org/10.1214/ss/1177009939>. No new complete reading claimed.

<a id="ip-55"></a>

### IP-55 — Dynamical observations and finite system realization

**Pages:** `dynamic-data-identifiability-and-system-realization` /
`dynamic-data-identifiability-and-system-realization-examples`.
**A items:** `def-ip-discrete-linear-input-state-output-experiment`,
`thm-ip-finite-observability-identifies-initial-state`,
`thm-ip-state-similarity-preserves-input-output-data`,
`alg-ip-exact-block-hankel-realization`, and
`thm-ip-hankel-realization-recovers-controllable-observable-system`.
Define `x_{k+1}=Ax_k+Bu_k`, `y_k=Cx_k` over real finite-dimensional spaces,
with known dimensions/horizon, fixed time sampling, inputs and observation
noise convention. For known A,C and known inputs, subtract the forced response;
initial-state recovery from q noiseless outputs is injective iff the stacked
observability matrix `O_q=[C;CA;…;CA^{q−1}]` has full column rank. Prove by
its kernel; least-squares sensitivity is controlled by the smallest singular
value when nonzero. Noise and discretization enter the previously proved
error budget. Unknown state coordinates have a gauge:
`(A,B,C,x₀)↦(T^{-1}AT,T^{-1}B,CT,T^{-1}x₀)` for invertible T gives identical
outputs for every common input sequence, by induction. This is structural
nonidentifiability, distinct from an unobservable mode for known A,C.

For exact impulse-response Markov parameters `M_k=CA^kB`, form q-by-q block
Hankel matrices `H₀=[M_{i+j}]` and `H₁=[M_{i+j+1}]`, `0≤i,j<q`.
Assume `O_q` and `R_q=[B,AB,…,A^{q−1}B]` both have rank d, so
`H₀=O_qR_q` and `H₁=O_q A R_q`. The algorithm accepts the necessary
`M₀,…,M_{2q−1}`, exact rank d or exact rank test, computes a thin-SVD rank
d factorization `H₀=ŌŘ`, sets `Â=Ō†H₁Ř†`, and extracts `B̂` as the first
input block of Ř and `Ĉ` as the first output block of Ō; return inconsistent
rank/data, failed solve, or success. Prove there is invertible T with
`Ō=O_qT`, `Ř=T^{-1}R_q` from equality of column spaces and full ranks;
then the left/right inverse identities give `Â=T^{-1}AT`, `B̂=T^{-1}B`,
`Ĉ=CT`. This proves exact realization modulo similarity under the stated
finite controllability/observability ranks. It does not prove noisy rank
selection, stable pole recovery, continuous-time identification under
aliasing, or nonlinear parameter identifiability. **B leaves:** an unobserved
state mode; two similar realizations; finite-difference/solver error in an
ODE-generated observation map; a small Hankel singular value; and continuous-
time frequencies aliased by discrete sampling. **Requires:** IP-01–IP-02,
IP-04, IP-14, IP-25, published matrix rank/SVD/pseudoinverse and numerical
sensitivity suppliers. **Source lead:** Ho–Kalman, “Effective construction of
linear state-variable models from input/output functions,” Regelungstechnik
14 (1966), 545–548, <https://doi.org/10.1524/auto.1966.14.112.545>.
Bibliographic lead only; the displayed finite algebra is the local proof design.

### Explicit severely ill-posed imaging demonstrations (IP-04/IP-08 B leaves)

Add `ex-ip-deconvolution-and-backward-heat-spectral-budgets` to the IP08 B
inventory. On the periodic torus with normalized Fourier basis supplied by `thm-fourier-basis-and-parseval-on-the-n-torus`, convolution
by known k has multipliers `k̂(j)`. A zero multiplier makes that coefficient
unidentifiable; nonzero multipliers tending to zero give an unbounded inverse
by unit Fourier modes. Gaussian blur has `|k̂(j)|=exp(−c|j|²)`, while the
forward heat map at fixed T>0 has `exp(−T|j|²)` under the declared Laplacian
normalization. Prove these by `lem-lca-fourier-transform-intertwines-translation-modulation-and-convolution` and solving
each heat coefficient ODE; derive rather than guess 2π constants from the
library convention. For a Sobolev ball `Σ(1+|j|²)^s|θ_j|²≤Q²`, truncation
at |j|≤N has bias squared bounded by `Q²(1+N²)^{-s}` and white-noise variance
`ε²Σ_{|j|≤N}exp(2T|j|²)` for heat (replace T by c for blur).
Choose `N²=a log(ε^{-1})`, `0<a<1/T`: the variance is at most
`C ε^{2−2Ta}(log ε^{-1})^{d/2}`, and squared risk is bounded by order
`(log ε^{-1})^{-s}`. The lower bound uses the IP09 inverse sequence lower
bound only after ordering lattice multiplicities correctly; the example
itself claims the displayed upper bound and instability, not a new minimax
constant. In the IP04 companion, compute the additional output error from a
perturbed diffusion time `T+ΔT`, a retained multiplier error, and a truncated
solver residual, using the exact computed-inversion decomposition. The same
finite images with a smooth visible output need not imply a stable initial
condition. These proofs reuse the existing Fourier and heat equation bodies;
no new full-text source reading is claimed.

Assumption inheritance: every authoring contract must carry the exact choice, scalar-field, measurability, support and domain hypotheses of its imported interfaces. In particular Hilbert adjoints/SVD consume Countable Choice, the Banach Gaussian/MAP and general disintegration interfaces consume AC, and weak compactness/norm separation use their stated DC/HB/ultrafilter assumptions. Record each exact proof use and dependency when those interfaces are invoked; elementary finite span/kernel and triangle arguments require no added choice principle.

Proposed dependency status: the machine inventory is a conservative candidate overapproximation for future author refinement, not an actual authored or minimal dependency graph. Candidate page imports do not add hypotheses to a theorem: IP01 remains a metric-space triangle-inequality statement, with no Hilbert assumption. At authoring, retain only actual used logical suppliers and separately record nonlogical context; complete proofs, source verification and ordinary workflow gates remain owed.
