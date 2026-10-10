# Bayesian-04 source dossier: sequential computation

This dossier covers sequential computation: state-space models, Bayesian filtering and smoothing, Kalman methods, Feynman–Kac and sequential Monte Carlo (SMC), particle degeneracy and error, particle MCMC, and data assimilation. It is a planning dossier only; it adds no library items, pages, canonical plan edits, engine actions, or commits. The complete source PDFs and extracted text are kept in the ignored role cache. Their URLs, file hashes, read anchors, and limitations are recorded in [sources.json](sources.json).

The dependency boundary is strict: Category 3 may use existing mathematics, independent numerical suppliers, and Categories 1–2, but cannot depend directly or indirectly on Category 4. In particular, Gaussian-process inference is outside this dossier. The reusable Gaussian conditioning theorem should be the earlier Category 3 pair already coordinated with the author, not an ML/GP result. Any generic optimizer needed for variational or 4D-Var computation must be supplied in Category 3 before that use; the existing finite-instance approximation-algorithm definition is not such a supplier.

## Existing suppliers checked

I inspected the actual page and item bodies, including the statements, dependencies, assumptions, and proofs where present. These are reusable foundations, but there is no existing state-space, filtering, smoothing, Kalman, SMC, Feynman–Kac, particle-MCMC, or data-assimilation item/page.

| Existing supplier | Checked mathematical contract and boundary |
|---|---|
| `library/probability/markov-kernels-and-markov-chains.md` | Includes `def-measure-kernel-and-probability-kernel`, `def-time-homogeneous-markov-chain-with-transition-kernel`, `lem-bounded-function-form-of-the-markov-property`, `def-conditional-independence-given-a-sigma-algebra`, `thm-ionescu-tulcea-construction-of-a-markov-chain`, and path-space Markov-property results. The chain definition is filtration-relative and the path-law construction explicitly assumes AC. Kernel sections are pointwise probability measures with measurable evaluations. |
| `library/probability/conditional-distributions-and-regular-conditional-probability.md` | `thm-existence-of-regular-conditional-distributions-for-standard-borel-targets`, conditional integration, disintegration, `thm-conditional-density-formula`, and `thm-bayes-formula-for-dominated-kernels`. The RCD existence result requires a standard-Borel target. The density theorem normalizes only fibres with finite positive marginal density and uses a supplied filler on zero/infinite fibres; those fibres have zero marginal mass. |
| `library/probability/conditional-expectation.md`; `items/def-conditional-independence-given-a-sigma-algebra.md` | Conditional expectations are almost-everywhere classes; the conditional-independence definition uses bounded test functions and explicitly carries AC through the library convention. |
| `items/thm-ionescu-tulcea-construction-of-a-markov-chain.md` | Full proof checked. It constructs consistent finite-prefix laws and their countable-product extension for history-dependent kernels, with AC used in the nonempty-path/recursive-choice and extension route. This is sufficient for a general discrete-time kernel model, but it does not supply Bayesian likelihood updates. |
| `items/def-multivariate-normal-law.md`; `library/probability/central-limit-theorems.md` | A multivariate normal law with any positive-semidefinite covariance, including singular covariance, is defined under AC. No general conditional-Gaussian block theorem is present. The author has confirmed a new earlier Category 3 `thm-multivariate-normal-conditional-law` with joint covariance PSD and observed block SPD; it may allow singular state covariance and excludes singular observed blocks. |
| `items/ex-conditional-density-of-a-bivariate-normal-law.md` | A proved scalar bivariate example with positive marginal scales and −1 < correlation < 1. It does not cover general block dimensions or singular state covariance, and it is an example rather than a theorem supplier. |
| `library/linear-algebra/direct-matrix-factorisations-lu-cholesky-and-qr.md` | `thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique`, `thm-cholesky-solves-hermitian-positive-definite-systems-and-has-half-the-lu-factorisation-cost`, and `thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost` supply SPD Cholesky and triangular solves. A singular covariance does not qualify for Cholesky without a separate support-restricted factorization. |
| `library/probability/central-limit-theorems.md` | `def-multivariate-normal-law`, `thm-lindeberg-feller-central-limit-theorem-sufficiency` (under the page's AC convention), IID CLTs, and Lindeberg–Feller tools are present. These do not by themselves prove an SMC CLT; Chopin's finite-horizon theorem has an algorithm-specific recursive variance and moment class. |
| `items/def-gaussian-process.md` | Defines Gaussian processes by finite-dimensional normal laws, including singular covariance. It contains no general Gaussian posterior/conditional theorem and is not a needed dependency for sequential filtering. |
| `items/def-optimization-problem-and-approximation-ratio.md` | Concerns explicitly encoded finite instances, rational objectives, polynomial algorithms, and approximation ratios. It is not a generic real-valued optimization or convergence theorem. |

Searches of `items/` and `library/` found no existing state-space-model, filtering, smoothing, Kalman/RTS, particle-filter, Feynman–Kac, SMC error, particle-MCMC, 3DVAR, 4DVAR, EnKF, or data-assimilation pair/page. The above checked materials are prerequisites, not substitutes for those missing interfaces.

## Recommended dependency-ordered pairs

The labels `SEQ-01`–`SEQ-08` are role-local proposal labels; the author should assign the final sequential BCS numbers after integrating all six dossiers. The pairs should appear in the order below, except that the data-assimilation pair must be placed after any generic Category 3 optimization supplier it actually uses. All proposals avoid Category 4 dependencies.

### SEQ-01 — State-space models and exact Bayesian filtering recursion

**Pages:** `bcs-state-space-filtering` / `bcs-state-space-filtering-examples`.

**Proposed interfaces:** `def-state-space-model`, `def-filtering-predictive-and-smoothing-laws`, `thm-bayesian-filtering-recursion`, and `alg-recursive-bayesian-filter` (the algorithm item has kind `algorithm`). Define a finite-horizon model on standard-Borel state and observation spaces with initial law μ₀, Markov transition kernels Mₖ, and observation kernels Gₖ; for the displayed likelihood form, specify jointly measurable densities gₖ(yₖ|xₖ) with respect to sigma-finite observation measures. For each realized observation sequence require finite, positive evidence normalizers before writing normalized posterior laws. Give forecast μₖ⁻=μₖ−1Mₖ and analysis μₖ(dx)∝ gₖ(yₖ|x)μₖ⁻(dx), together with the evidence product. Define the whole-path smoothing law separately from the current filtering marginal.

**Proof route:** Use Ionescu–Tulcea for the joint state path and the product observation kernel, then conditional integration and Bayes' formula for dominated kernels; alternatively establish the RCD identity on standard-Borel spaces. Verify the forward recursion by iterated integration and conditional independence. Do not claim a normalized posterior at a zero-probability observation fibre: the existing density theorem only supplies an arbitrary filler there. Distinguish the exact Bayesian recursion from any approximation used to evaluate it.

**Examples:** A finite-state hidden Markov model and a scalar linear-Gaussian model. An example with a zero likelihood at a particular observation should show why an arbitrary version is not a quotient by zero.

**Requires:** `def-measure-kernel-and-probability-kernel`, `thm-ionescu-tulcea-construction-of-a-markov-chain`, `thm-existence-of-regular-conditional-distributions-for-standard-borel-targets`, `thm-conditional-integration-through-a-regular-conditional-law`, `thm-bayes-formula-for-dominated-kernels`, and `def-conditional-independence-given-a-sigma-algebra`.

### SEQ-02 — Exact linear-Gaussian Kalman filtering

**Pages:** `bcs-kalman-filter` / `bcs-kalman-filter-examples`.

**Proposed interfaces:** def-linear-gaussian-state-space-model, alg-kalman-filter, and thm-kalman-filter-is-exact-posterior. State a finite-dimensional model with transition equation x[k+1] = F[k] x[k] + q[k] and observation equation y[k] = H[k] x[k] + r[k]. Require a Gaussian initial state, mutually independent Gaussian process and observation noises, and the required independence from the initial state and past. State and process covariance matrices may be positive semidefinite. Require innovation covariance S[k] = H[k] Pminus[k] H[k]^T + R[k] to be positive definite at every update (for example, R[k] positive definite). Define K[k] = Pminus[k] H[k]^T S[k]^-1, m[k] = mminus[k] + K\[k\](y[k] - H[k]mminus[k]), and P[k] = Pminus[k] - K[k] S[k] K[k]^T. State the prediction equations separately. The Joseph covariance form is an algebraically equivalent implementation, not a different posterior theorem.

**Proof route:** Prediction preserves joint Gaussianity and gives the stated mean and covariance by affine transformation and independence. At an update, apply the earlier thm-multivariate-normal-conditional-law to the joint state/observation vector. Its contract is: joint block covariance [[A,C],[C^T,B]] is positive semidefinite and B is positive definite. Then the conditional mean is a + C B^-1(y - b) and the conditional covariance is A - C B^-1 C^T, which is positive semidefinite; A need not be invertible. Prove this using residual X - a - C B^-1(Y - b), whose covariance with Y is zero, then use independence of uncorrelated jointly Gaussian vectors. The local proof must not require a nonsingular state covariance or full joint density. Do not include a singular innovation/pseudoinverse branch without a separate range-qualified theorem.

**Examples:** One scalar update and a deterministic/singular prior state covariance with strictly positive observation noise; the latter demonstrates why P[k] need not be positive definite while S[k] must be.

**Requires:** SEQ-01, earlier `thm-multivariate-normal-conditional-law`, `def-multivariate-normal-law`, covariance/affine-map suppliers, and matrix multiplication/inverse identities. Cholesky may be used to implement solves when S is SPD; do not form an inverse numerically as an algorithmic prescription.

### SEQ-03 — Fixed-interval Gaussian smoothing and RTS recursion

**Pages:** `bcs-kalman-smoothing` / `bcs-kalman-smoothing-examples`.

**Proposed interfaces:** alg-rts-smoother and thm-rts-smoother-is-exact-fixed-interval-posterior. Give the backward recursion for k = T-1,...,0: J[k] = P[k|k] F[k]^T Pminus[k+1]^-1; m[k|T] = m[k|k] + J\[k\](m[k+1|T] - mminus[k+1]); and P[k|T] = P[k|k] + J\[k\](P[k+1|T] - Pminus[k+1])J[k]^T. To use the displayed inverse in the standard theorem, require Pminus[k+1] to be positive definite at every backward step. A broader singular-covariance result needs an explicit support/range conditional-law proof and must not silently substitute a pseudoinverse.

**Proof route:** Factor the joint filtering law of ((x_k,x_{k+1})), condition its Gaussian block using the earlier Gaussian theorem, and use the conditional-independence/Markov factorization to replace the next filtering law by the already computed smoothed law. Induct backward. The result is an exact fixed-interval posterior, not an online filter.

**Examples:** A two-time scalar model comparing filtering and smoothing variance; a singular forecast covariance marked outside the displayed RTS theorem.

**Requires:** SEQ-01 and SEQ-02, `thm-multivariate-normal-conditional-law`, and SPD linear-system solves.

### SEQ-04 — Feynman–Kac targets, importance proposals, and particle filters

**Pages:** `bcs-feynman-kac-particle-filters` / `bcs-feynman-kac-particle-filter-examples`.

**Proposed interfaces:** def-feynman-kac-path-measure, alg-bootstrap-particle-filter, alg-proposal-particle-filter, and thm-particle-normalizer-estimator-is-unbiased. For a finite horizon define the path measure by gamma\[t\](dx[0:t]) = mu0(dx[0]) times the product of transition kernels M\[k\](x[k-1], dx[k]) for k = 1,...,t, times the product of potentials G\[k\](x[k]) for k = 0,...,t. Set Z[t] = gamma\[t\](1) and eta[t] = gamma[t]/Z[t] when 0 < Z[t] < infinity. State proposal support: the target increment measure must be absolutely continuous with respect to the proposal on all paths contributing to the target. For an observation proposal q[k], the incremental weight at x[k] is G\[k\](x[k]) times the Radon-Nikodym derivative of M\[k\](x[k-1],·) with respect to q\[k\](x[k-1],·), when that derivative exists; with densities m and q it is G\[k\](x[k]) m\[k\](x[k]|x[k-1]) / q\[k\](x[k]|x[k-1]). Bootstrap uses q = M and weight G. Define resampling through offspring counts with conditional mean N times each normalized weight; identify multinomial and residual resampling specifically, not as interchangeable variance laws.

**Proof route:** Derive the importance ratio from the path target/proposal Radon–Nikodym derivative. Prove target recursion by conditional expectation. For the bootstrap normalizer estimator, use induction and the conditional unbiasedness of the weighted empirical measure and resampling offspring counts. Restrict the unbiased-normalizer claim to the stated finite-horizon integrability and resampling conditions; arbitrary biased/adaptive resampling is not covered.

**Examples:** Bootstrap versus observation-informed proposal for a sharply peaked likelihood; a proposal with missing target support showing that a finite empirical answer can be biased because the importance ratio is undefined on omitted target mass.

**Requires:** SEQ-01 and existing measure-kernel, density/Bayes, conditional expectation, Markov path-law, and importance-sampling suppliers from the earlier Monte Carlo pair. No Gaussian-process interface is required.

### SEQ-05 — Finite-horizon SMC error and long-horizon failure modes

**Pages:** `bcs-smc-error-and-degeneracy` / `bcs-smc-error-and-degeneracy-examples`.

**Proposed interfaces:** thm-finite-horizon-smc-central-limit-theorem, def-effective-sample-size, and examples/remarks for weight and ancestry degeneracy. For proposal law pi_t and target law eta_t define the incremental importance ratio v_t = d eta_t / d pi_t. Define the test class recursively: at time zero, functions with finite second moment under pi_0; at time t, functions phi for which some delta > 0 gives E_pi_t[|v_t phi|^(2+delta)] < infinity and the function from the previous particle to the proposal expectation of v_t phi belongs to the previous time's class. Require the constant-one function to be in the scalar class at every time. State the CLT for the weighted estimator and post-resampling empirical estimator, with their distinct recursive asymptotic variances; multinomial and residual resampling have different variance recursions. The finite-time result is the particle-count limit N -> infinity at fixed horizon, not a uniform-in-time guarantee. For uniform-in-time marginal variance, state the strong mixing/boundedness assumptions: bounded test oscillation, uniformly bounded transition and proposal density ratios, and 0 < f_min <= f(y|x) <= f_max < infinity. State these as sufficient, restrictive conditions. Chopin's fixed-parameter SIR theorem gives asymptotic-variance growth of order t^(p/2) under its regular parametric assumptions, for the resampling variants covered there; it is not a universal rate for every particle method.

**Proof route:** Use the induction/martingale-array proof in Chopin: conditional on the previous particle population, the mutation/resampling draw has a triangular-array CLT; the (2 + delta)-moment conditions give Lindeberg, and the recursive variance calculation yields the stated formula. For time-uniform bounds, prove contraction of the Feynman-Kac operators under the exact ratio/potential assumptions and sum the resulting geometric bound. Keep this proof distinct from the fixed-time CLT.

**Examples:** A two-step population with one dominant normalized weight; ancestry collapse when resampling repeatedly; a fixed-parameter posterior concentrating with time. Define ESS as 1 divided by the sum of squared normalized weights and explain that it measures weight concentration, not estimator variance, posterior coverage, or convergence.

**Requires:** SEQ-04, `thm-lindeberg-feller-central-limit-theorem-sufficiency`, and conditional expectation/martingale tools. Do not infer general SMC CLTs solely from the IID CLT.

### SEQ-06 — Particle smoothing, backward simulation, and Rao–Blackwellization

**Pages:** `bcs-particle-smoothing` / `bcs-particle-smoothing-examples`.

**Proposed interfaces:** alg-particle-backward-simulator, alg-fixed-lag-particle-smoother, alg-rao-blackwellized-particle-filter, and a finite-horizon consistency result with explicit conditions. Given filtering particles x[k,i] and normalized weights W[k,i], backward simulation chooses ancestor i with probability proportional to W[k,i] times f(x[k+1]* | x[k,i]), when this transition density exists. State the complexity convention: evaluating all particle pairs for a full smoothing marginal is O(N^2 T); drawing a fixed number of backward paths by the standard particle recursion is O(NT) after the filtering pass, assuming bounded-cost transition-density evaluation. Fixed-lag smoothing is biased at nonzero lag in general; a bias bound requires a separate forgetting/mixing hypothesis. In a conditionally linear-Gaussian model, RBPF samples the nonlinear component and performs exact Kalman updates for the conditional linear-Gaussian component.

**Proof route:** Derive the backward conditional weights by Bayes' formula from the Markov factorization; prove finite-horizon consistency through convergence of the filtering empirical measures and the backward kernel under continuity/dominating/integrability assumptions. For RBPF, factor the joint law and apply the exact Kalman theorem conditionally. Do not claim ancestry-only smoothing is equivalent to backward simulation or that a finite lag is unbiased.

**Examples:** A short regime-switching linear-Gaussian model comparing ancestor tracing and backward simulation; a counterexample where a fixed lag omits information from a distant observation.

**Requires:** SEQ-01, SEQ-02, SEQ-04, and the conditional-density/Markov factorization suppliers.

### SEQ-07 — Particle MCMC: pseudo-marginal MH and particle Gibbs

**Pages:** `bcs-particle-mcmc` / `bcs-particle-mcmc-examples`.

**Proposed interfaces:** alg-particle-marginal-metropolis-hastings, thm-particle-marginal-metropolis-hastings-is-exact, alg-particle-gibbs, and thm-particle-gibbs-is-invariant. For PMMH require a prior density p(theta), a proposal q, and a nonnegative likelihood estimator Lhat(theta,U) whose expectation under m_theta is L(theta). The extended target is proportional to p(theta) m_theta(U) Lhat(theta,U). The current likelihood estimate and auxiliary variable must be retained after an MH rejection. Refreshing the current estimate on every iteration (MCWM) is generally inexact. For particle Gibbs, define the particle cloud, ancestor variables, selected path and extended target sufficiently to identify conditional SMC as a Gibbs full-conditional update; the backward simulator changes the path conditional while preserving that target. Finite-N invariance does not imply fast mixing or irreducibility. On proposing (theta_new,U_new), accept with probability min(1, [p(theta_new)Lhat(theta_new,U_new)q(theta_current|theta_new)]/[p(theta_current)Lhat(theta_current,U_current)q(theta_new|theta_current)]); after rejection retain (theta_current,U_current).

**Proof route:** PMMH: integrate out U to recover p(theta)L(theta), then verify detailed balance for MH on the extended target. Particle Gibbs: write the normalized extended target explicitly, verify that marginalizing the auxiliary cloud and index variables gives the smoothing target for the selected path, and check each conditional-SMC/backward-simulation step is a Gibbs conditional. This local route is required because the read Lindsten-Schon source delegates the core extended-target identity and some convergence assumptions to cited results. For an ergodicity claim, add irreducibility/aperiodicity and proposal-support hypotheses and prove them separately; otherwise assert invariance only.

**Examples:** An exact pseudo-marginal rejection step retaining its auxiliary estimate; MCWM's loss of detailed balance; finite-N particle Gibbs with poor path movement despite exact invariance.

**Requires:** SEQ-04 and the earlier Category 3 Metropolis–Hastings/extended-target result from the Bayesian-03 Monte Carlo pairs. It has no Category 4 prerequisite.

### SEQ-08 — Data assimilation: variational methods and ensemble filters

**Pages:** `bcs-data-assimilation` / `bcs-data-assimilation-examples`.

**Proposed interfaces:** def-data-assimilation-problem, alg-three-dimensional-variational-assimilation, alg-four-dimensional-variational-assimilation, alg-ensemble-kalman-filter, and a separately scoped 3DVAR contraction theorem. Distinguish forecast/analysis, filtering/online inference, and fixed-interval smoothing/offline inference. For 3DVAR, define the objective as one half times (x - x_forecast)^T B^-1 (x - x_forecast) plus one half times (y - Hx)^T R^-1 (y - Hx), with B and R positive definite; under the Gaussian prior/error model its minimizer is the MAP point estimate, not posterior spread. For strong-constraint 4DVAR, minimize the prior penalty plus observation-misfit penalties along the model trajectory over the assimilation window; weak-constraint 4DVAR includes model-error variables and their penalties. EnKF forms a sample forecast covariance P_N, gain K_N = P_N H^T (H P_N H^T + R)^-1, then updates particles; specify the perturbed-observation or deterministic square-root variant because these are distinct finite-ensemble algorithms. Require R positive definite for the displayed inverse. Finite-ensemble nonlinear output is approximate, and the linear-Gaussian exact limit is a limit as ensemble size grows. The source-supported 3DVAR tracking result requires a contraction of the analysis-forecast map with factor a < 1 and bounded observation error epsilon, yielding a long-time error bound of order C epsilon/(1-a). State it only under those hypotheses.

**Proof route:** Derive the linear-Gaussian 3DVAR update from the quadratic objective and identify it with the Kalman analysis. For the tracking theorem, iterate the contraction inequality and sum the geometric series. For EnKF convergence to the Kalman filter, establish the law-of-large-numbers limit under the specified linear model and independent finite-moment ensemble sampling; do not call a finite ensemble exact. 4DVAR is a definition/algorithm until a continuous optimizer and convergence theorem is supplied. The earlier Category 3 generic optimization pair must precede any computational/convergence claim for the 4DVAR solve. Existing `def-optimization-problem-and-approximation-ratio` does not fill this gap.

**Examples:** A linear-Gaussian forecast/analysis; finite-ensemble covariance fluctuation; a nonlinear model where EnKF is an approximation; a 4DVAR objective with multiple local minima showing that an optimizer guarantee cannot be inferred from the objective definition.

**Requires:** SEQ-01–SEQ-03, matrix/SPD suppliers, and the earlier Category 3 generic optimization interface if an optimization algorithm is claimed. No neural-network or Category 4 result is permitted.

## Exact hypotheses, algorithms, and proof obligations

The reusable filter identity for the dominated finite-horizon model is: forecast mu_minus[k] = mu[k-1] M[k]; evidence increment Z[k] = integral of g\[k\](y[k]|x) against mu_minus[k]; and analysis mu\[k\](dx) = g\[k\](y[k]|x) mu_minus\[k\](dx) / Z[k] only when 0 < Z[k] < infinity. Then total evidence through T is the product of the increments. If the observation model is a general kernel rather than a dominated likelihood, formulate the update through an RCD on standard-Borel spaces and remember that it is determined only almost surely under the observation law. Never normalize at impossible data.

For the Kalman proof, the minimum exact covariance assumptions are joint PSD block covariance and SPD observed/innovation block. Under a Gaussian vector (X,Y) with mean (a,b) and covariance [[A,C],[C^T,B]], B positive definite, the conditional law for every y is Gaussian with mean a + C B^-1(y-b) and covariance A - C B^-1 C^T, whose Schur complement is PSD. This does not cover singular B. Särkkä's source derivation uses Gaussian density manipulations that have stronger nonsingularity assumptions; use the local residual-independence proof to establish the PSD/SPD version.

The exact Kalman assumptions permit singular state and process covariances but require each innovation S to be invertible. The standard RTS formula adds the inverse of Pminus[k+1], so its display requires positive-definite forecast covariance; do not propagate the Kalman filter's more general PSD contract to RTS without a separate range theorem. Joseph form improves numerical covariance preservation but does not relax the exact-model hypotheses.

For SMC, finite-horizon consistency/CLTs, long-time variance control, unbiased evidence estimation, and path smoothing are distinct claims. Chopin's CLT requires the recursive weighted 2+delta test-function class: at time zero, finite second moment under the proposal; at each later time, a 2+delta moment for the importance ratio times test function and closure of the proposal conditional expectation in the previous class. The constant-one function must belong to the class at every time. Multinomial and residual resampling have different variance formulas. Uniform-time results need substantially stronger boundedness/mixing assumptions. ESS reports concentration of normalized weights only. Repeated resampling can improve weight balance while worsening ancestral diversity. No fixed particle count yields a uniform accuracy guarantee over arbitrary horizons or models.

Particle MCMC exactness is finite-particle invariance obtained by an extended target, not a guarantee of good mixing. Pseudo-marginal MH depends critically on nonnegative unbiased likelihood estimation and retention of the current auxiliary estimator at rejection. Particle Gibbs needs the complete extended-target factorization for a local proof. The source's delegated proof steps are explicit in [sources.json](sources.json) and must be repaired by local proof before publication.

## Coverage and source map

| Topic | Proposed pair | Main source anchors | Main proof or limitation |
|---|---|---|---|
| State-space formulation and filter recursion | SEQ-01 | S01 Ch. 3.6, Ch. 4; S02 §2 | Kernel path law plus Bayes/RCD; observation-version caveat. |
| Kalman filtering and Gaussian conditioning | SEQ-02 | S01 Ch. 4 §§4.1–4.3, App. A; S06 Ch. 3 §3.1 | New Gaussian block conditional theorem needed for PSD/SPD version; textbook density proof is narrower. |
| RTS smoothing | SEQ-03 | S01 Ch. 8 §§8.1–8.3; S06 Ch. 3 §3.1 | Standard inverse requires Pminus[k+1] positive definite; singular branch excluded. |
| Feynman–Kac, bootstrap/proposal filters | SEQ-04 | S02 §§3–4; S03 §2.1–2.3 | Proposal domination/support and proper resampling assumptions; normalizer unbiasedness by induction. |
| SMC CLT, asymptotic variance, degeneracy | SEQ-05 | S03 Theorems 1–2, 4–5 and Appendix A.1, A.3–A.4 | Finite-horizon moment class versus restrictive uniform-time assumptions; no universal CLT/ESS certificate. |
| Particle smoothing, backward simulation, RBPF | SEQ-06 | S01 Ch. 7 §§7.1–7.5, Ch. 11 §§11.1–11.4; S02 §5; S05 §3–4 | Backward conditional derivation; source proof gaps; fixed-lag bias needs forgetting conditions. |
| PMMH and particle Gibbs | SEQ-07 | S04 §§1–3/Theorem 1 proof; S05 §4.1, Theorem 1 and Appendix A | Extended-target exactness; source-delegated PG identity and ergodicity proof must be supplied locally. |
| 3DVAR, 4DVAR, EnKF, data assimilation | SEQ-08 | S01 Ch. 3/5, S06 Ch. 2 §§2.1–2.7, Ch. 4 §§4.1–4.4.3 | EnKF is approximate at finite ensemble in nonlinear settings; 3DVAR tracking needs contraction; 4DVAR optimization prerequisite. |

Full source provenance, exact local hashes, and complete read extents are in `sources.json`. All source units cited above were read with their printed proofs when present; limitations and intentionally unproved cited dependencies are not upgraded into local proof claims.

## Minimal missing suppliers and open proof obligations

1. **Gaussian conditioning at the right generality.** Add one reusable Category 3 theorem with joint covariance PSD and observed block SPD, allowing singular state covariance. Prove it with the residual-independence and Schur-complement argument. Do not add pseudoinverses for singular observed blocks without a separate range/support statement.
2. **Generalized RTS singular case.** The standard RTS theorem is ready under Pminus[k+1] positive definite. A broader PSD version needs a conditional Gaussian with singular observed covariance plus range compatibility, or else remains explicitly excluded.
3. **SMC finite-time CLT.** The complete local theorem must include Chopin's recursively defined weighted (2+δ)-moment class and separate multinomial/residual variance recursions. The tutorial's CLT display refers to Del Moral and is not itself a proof.
4. **SMC time-uniform accuracy.** State all bounded-ratio, positive bounded-likelihood and bounded-test-oscillation assumptions; these conditions are restrictive. Do not infer uniform accuracy from a finite-time CLT, ESS, or source-level heuristics.
5. **Particle Gibbs.** Supply the extended target and demonstrate its smoothing marginal and conditional-SMC Gibbs kernels locally. Lindsten–Schön's proof of the core marginal identity cites another PMCMC theorem, and its irreducibility/aperiodicity discussion cites the original PMCMC theorem. If no local chain-ergodicity theorem is added, assert invariance only.
6. **4DVAR numerical optimization.** The existing approximation-algorithm interface handles finite rational instances only. A continuous finite-dimensional optimizer interface and any convergence guarantee must be in Category 3 and earlier than 4DVAR's use. Without it, 4DVAR may be defined as an objective/minimization formulation, but numerical convergence must not be claimed.
7. **Data-assimilation approximation boundaries.** EnKF's finite-ensemble nonlinear output is approximate; 4DVAR's minimizer is a point estimate; model error and data informativeness are distinct from numerical or sampling error. Keep every guarantee tied to its exact assumptions.
