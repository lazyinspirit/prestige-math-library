# Bayesian/computational statistics scaffold audit — working evidence

Date: 2026-10-12. This is a working record for the Category 3 audit. The
category scaffold remains prose draft; external-source citations below are
not library proof suppliers. Full per-pair decisions and remaining proof
obligations will be recorded in `pair-audit.json` after each pair is checked.

## Verified repairs and interfaces

- **BCS-01:** The prior-predictive joint law needs a measurable probability
  kernel on a measurable parameter space. An arbitrary indexed family
  `P_theta` from MSF-01 does not imply measurability in `theta`. Added the
  explicit kernel bridge `MSF-01 def-parameter-measurable-statistical-model-as-markov-kernel`
  as an earlier prerequisite, with prior probability and standard-Borel
  parameter target for the RCD existence result. The RCD supplier assumes
  AC (the Axiom of Choice), not a dominating density or absolute-continuity
  premise for this general conditional-law result. The RCD theorem yields an
  $\Omega$-indexed kernel for conditioning on $\sigma(Y)$; I added the exact
  standard-Borel factor-through/disintegration suppliers only for claims of a
  kernel indexed by all observation values $y$. BCS-02's dominated formula
  handles its own data-indexed posterior separately.
- **BCS-02:** A collection of section-wise Radon–Nikodym versions need not be
  jointly measurable. The proper-prior Tonelli normalizer claim now requires
  a jointly measurable normalized sampling-kernel density against a
  sigma-finite data measure. This is separate from BCS-01's general kernel.
- **BCS-03:** Replaced vague family names with explicit Beta, shape-rate Gamma,
  exposure Poisson, Dirichlet, and multinomial conventions and proper
  parameter/domain restrictions. Gaussian conditioning contract permits a
  singular joint Gaussian and singular conditional covariance, but requires
  the observed covariance block to be positive definite; the usual Schur
  complement formula is therefore defined with an ordinary inverse. Removed
  duplicate posterior-prediction/total-variance theorem because BCS-04 owns
  it. This is the interface Cat4 must preserve.
- **BCS-04:** Credible-set mass statements require measurable sets and a
  posterior probability; Bayes action/conditional expectation language
  retains the Axiom-of-Choice and integrability conditions of the
  existing projection result.
- **BCS-05:** Hierarchical model now requires measurable hyperparameter prior
  and probability kernels; predictive integration specifies the new-group
  conditional law and finite-evidence conditions. Reuses the MSF-01
  measurable-kernel bridge, rather than an implicit measurability premise.
- **BCS-06:** Type-II marginal-likelihood maximizer is asserted only when an
  argmax exists. Corrected the balanced one-way Gaussian random-effects ANOVA
  example by defining the model and both mean squares and deriving
  $E(MSB)=\sigma^2+r\tau^2$, $E(MSW)=\sigma^2$; the raw method-of-moments
  estimate $(MSB-MSW)/r$ may be negative.
- **BCS-07:** The Schwartz consistency claim now states a well-specified
  dominated IID truth, positive prior mass in each KL neighborhood, and
  tests separating alternatives with summable type-I and uniform type-II
  errors (exponential bounds suffice), yielding the stated almost-sure
  posterior conclusion. Rate conclusions are explicitly separate.
- **BCS-14:** Added a measurable random-probability-measure existence theorem
  with an explicit local Poisson-random-measure construction from
  countably many finite-intensity mark strips. The proof contract includes
  independent Poisson counts, conditional iid marks, measurable evaluations,
  finite and positive total mass, Laplace transforms, normalized gamma
  increments, and a posterior disintegration verification on partition/data
  rectangles followed by monotone class. This does not treat Ferguson's cited
  gamma-process theorem as a proof of the gamma process's existence.
- **BCS-16:** Replaced an incorrect sub-Gaussian coefficient-tail requirement
  with Castillo–Nickl Condition 1 P2: common density bounded above, bounded
  below on $(-\tau,\tau)$ for $\tau>M$, and finite second moment, plus
  theorem-local continuity at each normalized truth coordinate. Added the
  scale-series summability check ensuring the prior is $L^2$-valued, exact
  negative-Sobolev weights and the bounded-Lipschitz convergence contract.
- **BCS-33:** Replaced the batch-means heuristic-only scope with the explicit
  overlapping-batch-means algorithm and Flegal–Jones Theorem 2/Corollary 1
  premises, including minorization, moment exponent, monotonicity, and every
  batch-sequence condition. The separate Markov CLT is written as a
  Poisson-equation/martingale route.
- **BCS-34:** Inspected the complete statements and proofs of
  `cor-globally-lipschitz-odes-have-global-solutions` and
  `cor-lipschitz-ode-uniqueness-and-stability-estimate`; added those exact
  suppliers for globally Lipschitz Hamiltonian force fields. The former
  requires a continuous field globally Lipschitz in state uniformly in time;
  the latter gives the $e^{L|t-t_0|}$ stability bound. More general force
  fields still need completeness/no-explosion proof.
- **BCS-38/39:** Aligned their required model contracts with Cat2's settled
  IDs `SME-44 def-general-state-space-model-by-kernels` and
  `SME-44 def-linear-gaussian-state-space-model-with-independent-noises`.
- **BCS-41/42/51/52:** Expanded algorithm and theorem contracts for Feynman–Kac
  path targets/proposal weights, Chopin's recursively defined CLT class and
  resampling-specific variance, finite-group identity-including Monte Carlo
  p-values, and the Chung–Romano two-sample U-statistic projections.

## External primary-source anchors checked

- Castillo & Nickl (2013), “Nonparametric Bernstein–von Mises Theorems in
  Gaussian White Noise,” full text cached at
  `scratchpad/statistics-advanced-scaffolds-2026-10-11/sources/bayesian-02/castillo-nickl-white-noise-bvm-2013.txt`.
  §1.2 defines the negative Sobolev norm by the weighted coefficient sum;
  Condition 1 P2 and Theorem 9 (article pp. 2010–2017; cached PDF pp. 15–29)
  use a coefficient density bounded above, bounded below on `(-tau,tau)`
  with `tau>M`, and finite second moment (with continuity near each truth
  coefficient for the theorem), not a sub-Gaussian-tail assumption. Repaired
  BCS-16 accordingly. The source also requires a suitably regular orthonormal
  basis and a truth with bounded normalized coefficients. Exact norm weights:
  `a_l^{-1}(log a_l)^(-2 delta)`, where `a_l=2^l` for wavelets and
  `max(2,|l|)` for trigonometric basis, `delta>1/2`.
- Ferguson (1973), “A Bayesian Analysis of Some Nonparametric Problems,”
  Ann. Statist. 1(2), 209–230, author-hosted full text
  `https://users.wpi.edu/~balnan/Ferguson1973.pdf`: §3 Lemma 1, Definition 1,
  Proposition 2 and Theorem 1, PDF pp. 212–218, and §4 Theorems 1–2, pp.
  218–220. Section 3's Kolmogorov construction first gives a finitely
  additive random process and Proposition 2 controls each fixed decreasing
  sequence; it is not used alone as a proof of an a.s. countably additive
  random measure. Section 4's gamma-process construction invokes the main
  theorem of external reference [4] without proving it. I therefore use the
  source for its DP/partition/update contracts and require the BCS-local
  finite-strip Poisson construction to establish random-measure existence.
- Horváth, Kokoszka & Reeder (2013), “Estimation of the mean of functional
  time series and a two-sample problem,” JRSS B 75; author full text
  `https://www.stat.colostate.edu/~piotr/horvathKokoszkaReeder2013.pdf`,
  §§1.1–2, Theorem 1 and Appendix A.1: centered strictly stationary
  separable-Hilbert-valued Bernoulli shift with iid innovations, measurable
  filter, finite second moment and
  `sum_m (E||X_0-X_{0,m}||^2)^(1/2)<infinity` has an $H$-valued Gaussian
  sample-mean CLT with long-run covariance. This is not a partial-sum-process
  FCLT. Cat1 agreed to add exact supplier IDs `def-l2-m-approximability-for-stationary-hilbert-process`,
  `lem-finite-dependent-hilbert-vector-clt`, and
  `thm-hilbert-valued-clt-for-l2-m-approximable-bernoulli-shifts`; its worker
  then errored before confirming the edits landed. Root has been notified.
  Until reconciled, these are unmet earlier dependencies, not existing suppliers.
- Pilavakis, Paparoditis & Sapatinas (2019), “Moving block and tapered block
  bootstrap for functional time series with application to the K-sample
  problem,” full cached text at
  `scratchpad/statistics-advanced-scaffolds-2026-10-11/sources/bayesian-06/pilavakis-paparoditis-sapatinas-2019.txt`;
  Assumption 1 §2.1, Theorem 2.1 §2.2 and proof: dependent bootstrap requires
  stronger `m*(E||X_t-X_{t,m}||^2)^(1/2)->0`; block size `b->infinity` and
  `b/sqrt(n)->0`. Theorem 2.2 also requires the exact taper shape/centering
  premises now recorded in BCS-50. The TBB Theorem 2.2/Lemma 5.2 proof depends
  on unavailable supplement, so its local proof remains an obligation.
- Chung & Romano (2011), “Exact and Asymptotically Robust Permutation Tests,”
  Stanford Technical Report 2011-09, complete report PDF pp.1–47, §§3.2,
  Theorems 3.1–3.2 and Appendix A Lemmas A.1–A.2: the studentized weak-null
  route couples the permutation sample to the pooled mixture and uses
  first-order Hájek projections. A first-order nondegeneracy/positive finite
  variance premise is needed for the standard-normal studentized conclusion;
  mere positive kernel second moment does not exclude projection degeneracy.
  This projection/U-statistic contract is being specified inside BCS-52,
  not attributed to a generic IID CLT supplier.
- Flegal & Jones (2010), “Batch Means and Spectral Variance Estimators in
  MCMC,” Ann. Stat. 38(2), DOI 10.1214/09-AOS735, full arXiv text
  `https://arxiv.org/pdf/0811.1729`, Theorem 2 §3 and proof Appendix B.3:
  overlapping-batch-means long-run variance consistency requires their
  geometric-ergodicity, minorization and moment conditions and admissible
  batch sequence; it is not a generic consequence of the iid CLT. The
  high-level `b_n=floor(n^nu)` corollary additionally has `delta>2/3` and
  `(1+delta/2)^(-1)<nu<3/4`. Theorem 2's exact assumptions were checked
  directly from the author PDF pages 8–9, including the one-step minorization,
  `E_pi|g|^(2+delta+epsilon)`, and all five batch-sequence conditions; the
  scaffold records those rather than treating power growth alone as sufficient.
- Chopin (2004), “Central Limit Theorem for Sequential Monte Carlo Methods,”
  full cached text `scratchpad/statistics-advanced-scaffolds-2026-10-11/sources/bayesian-04/chopin-smc-clt.txt`:
  Theorem 1 and Appendix establish the fixed-horizon particle-count CLT via
  the recursively defined `Phi_t^(d)` moment/conditional-expectation class;
  Theorem 2 gives the residual-resampling variance correction; Theorem 5's
  bounded asymptotic-variance-in-time conclusion assumes bounded test
  oscillation, uniformly bounded transition/proposal density ratios and a
  likelihood bounded above and away from zero. This is an asymptotic-variance
  result, not a generic finite-N uniform accuracy theorem.
- Kleijn & van der Vaart (2012), “The Bernstein–Von-Mises theorem under
  misspecification,” Econometrica 82(5), §4 Corollary 4.2 and §3 Theorem 3.2,
  full cached text `scratchpad/statistics-advanced-scaffolds-2026-10-11/sources/bayesian-02/kvdv2012.txt`:
  consistency at a KL minimizer requires positive mass of every KL
  neighborhood and tests with null error tending to zero plus uniform
  alternative error tending to zero; their displayed `Q_theta` may be a
  finite subprobability. The compact-parameter theorem additionally assumes
  compactness, unique minimizer, finite likelihood-ratio means, and the
  stated fractional-moment continuity. Repaired BCS-09 to expose the actual
  testing contract.
- Ghosal, Ghosh & van der Vaart (2000), “Convergence rates of posterior
  distributions,” Ann. Statist. 28(2), Theorem 2.1: retain separate
  entropy, sieve-tail and joint KL/second-log-moment prior-mass hypotheses;
  conclusion is contraction in probability in the selected metric, not an
  automatic minimax theorem. `d` can denote total variation or root
  Hellinger; constants and entropy convention must follow the selected
  version.
- Existing ODE corollaries inspected in full: `items/cor-globally-lipschitz-odes-have-global-solutions.md`
  proves global existence/uniqueness for continuous vector fields globally
  state-Lipschitz with a common constant; `items/cor-lipschitz-ode-uniqueness-and-stability-estimate.md`
  proves the exact Gronwall stability bound. BCS-34 reuses them only when the
  Hamiltonian vector field satisfies those hypotheses.

## Cross-category interfaces sent

- Cat4 replacement worker was told to preserve BCS-03's joint-PSD/observed-SPD
  Gaussian conditioning identity with singular conditional covariance allowed,
  and BCS-22's ELBO identity only under absolute continuity and finite
  integrability/KL conditions. It acknowledged those conditions and says
  it will retain them in ML-15/53/59. BCS-11 GP consumers should have a
  positive-definite finite observation covariance for inverse-based posterior
  formulas (or use an explicit separate singular version); latent covariance
  may be singular.
- Cat2 settled exact SME-44 clauses `def-general-state-space-model-by-kernels`
  (finite horizon, standard-Borel state/observation spaces and joint kernel
  factorization) for BCS-38 and
  `def-linear-gaussian-state-space-model-with-independent-noises` (PSD
  covariances, centered process/measurement noises mutually independent
  across times and from the initial state) for BCS-39; the scaffold now names
  these exact interfaces.
- Cat1 agreed to add the MSF-01 kernel bridge needed by BCS-01/05 and three
  MSF-36 interfaces for the Hilbert-valued sample-mean CLT used in BCS-50.
- Parent/Cat1 were sent the BCS-52 U-statistic scope: independent iid samples,
  fixed order `(r,r)`, symmetric-within-block/antisymmetric-between-block
  kernel, null equality, second moments under group and pooled assignments,
  first projections, degenerate remainder, mixture-permutation comparison,
  and positive finite nondegenerate first-projection variances under each
  group and pooled mixture for studentization.

## Additional contract checks from the final pair pass

- **BCS-34:** Added the exact smoothness scope for exact Hamiltonian-flow
  claims (`U` is `C^2` and the Hamiltonian vector field is complete). The
  inspected ODE suppliers guarantee completeness from a continuous globally
  state-Lipschitz vector field and give the Gronwall stability bound; local
  Lipschitz alone remains insufficient for a global flow. Finite leapfrog
  maps remain defined by their explicit shears and do not invoke flow
  completeness.
- **BCS-35:** Read the actual Durmus–Moulines L1/H1 definitions and Theorem 10
  in the cached full text (`statistics-advanced-scaffolds-2026-10-11/sources/
  bayesian-03/durmus-moulines-ula.txt`, L1 pp. 3–4, H1 and Theorem 10 pp.
  9–11). The scaffold now states the `C^1` globally Lipschitz-gradient and
  `C^2` superlinear radial-drift assumptions, the constant-step bound
  `0 < gamma < L^{-1}`, unique invariant `pi_gamma`, and the weighted-TV
  `O(sqrt(gamma))` comparison. This rate is separate from the exact Gaussian
  AR(1) bias example.
- **BCS-41:** Strengthened the path importance-ratio contract: initial-law
  and each transition-kernel domination are explicit, and the jointly
  measurable kernel Radon–Nikodym versions are part of the input/proof
  obligation. A pathwise absolute-continuity statement alone does not license
  an unverified pointwise product formula.
- **BCS-45:** Read Law–Stuart–Zygalakis Theorem 4.10 and its proof (printed
  pp. 96–97). The 3DVAR tracking scope now names the truth dynamics, noisy
  observations, fixed Kalman-like gain, contraction map, and exact
  `limsup ||m_j-v_j^dagger|| <= c epsilon/(1-a)` conclusion. It no longer
  treats the source's `O(epsilon/(1-a))` shorthand as a standalone theorem.
- **BCS-52:** Read Chung–Romano (2011) Theorems 3.1–3.2 and Appendix A proof
  (PDF pp. 18–19, 41–43). Added the exact two-sample order-`(r,r)` projection
  functions, the pooled-mixture projection, the order of the remainder,
  consistency requirements under `P`, `Q`, and the pooled mixture, and the
  studentizer `V_{m,n}=r(sigmahat_m^2/m+sigmahat_n^2/n)^{1/2}`. The bridge is
  the source's mixture coupling plus projection/variance arguments; an iid
  scalar CLT alone is not being treated as a U-statistic theorem.

- **BCS-42:** Read Chopin (2004) Theorem 1 equations (3)–(5), Theorem 2
  equations (7)–(8), Theorems 4–5 and Appendix A. The scaffold now includes
  the recursive variance equations and residual-resampling correction; if
  expected fractional residual weight is zero, offspring are deterministic
  and the correction is zero.
- **BCS-45:** Read Law–Stuart–Zygalakis Theorem 4.10 and its displayed proof
  recursion. The tracking bound uses a fixed 3DVAR gain and global contraction
  of `(I-KH)Psi`, with uniformly bounded observation errors.
- **BCS-56/57:** Read Owen (2019) Chapter 17 Theorems 17.3–17.5 in the cached
  full text. The finite-variance scramble constant, net/base requirements and
  smooth mixed-derivative rate are now stated explicitly. Owen refers the
  variance proofs to external papers; those proofs remain local authoring
  obligations unless an exact existing supplier is later established.

At the last status check the Cat1 worker had errored after agreeing to add the
MSF-01 measurable-model kernel and MSF-36 Hilbert sample-mean CLT; the root was
notified. Cat2 has finalized the SME-44 clauses and its owner confirmed after
inspecting BCS-38/39 that their exact Requires and model scopes match. BCS-01,
BCS-05 and BCS-50 retain the exact Cat1 interface while clearly marking the
producer edit as unconfirmed.

The category remains at **59 main pairs before and after repair**. No new main
pair was introduced; all added named contracts are earlier Cat1/Cat2
interfaces or local prerequisites/results inside their consuming BCS pair.

## Checks actually run

- A Python structural check matched all 59 pair headings in order to the 59
  JSON audit records, verified each record has its own finding, page IDs,
  supplier list and proof obligations, and checked every direct BCS dependency
  points to an earlier pair.
- Scanned the actual `Requires` clause of each pair for Category 4 identifiers;
  none were found. Category 4 appears only as a downstream consumer of stable
  BCS interfaces.
- Ran `git diff --check` on the two owned paths; it returned no whitespace
  errors. No software tests were run because this task changes prose scaffolds
  and audit evidence, not executable code.
- These structural checks validate inventory and formatting only. The primary
  source anchors and inspected supplier IDs are recorded per pair in
  `pair-audit.json`; they do not certify future item proofs as authored.


## Crash-recovery reconciliation and final current-state evidence

The preceding worker-error notes are historical crash-time records. They are
superseded by the current plan and evidence files below. The scope remains the
same 59 Bayesian pairs; no library item/page, canonical-plan integration,
workflow control, publication, or commit was made. The preserved before-file
hash is `6d87ff7581ee324847530d23200a42a702179e07efa89f5bde09328dbc9eeff3`.

- **MSF-01 / BCS-01 and BCS-05:** The current Category 1 plan contains the
  exact `def-parameter-measurable-statistical-model-as-markov-kernel` bridge.
  The pair audit now treats that proposed, unauthored interface as present in
  the supplier design, not as absent because an earlier worker errored.
  Standard-Borel RCD and data-indexed-kernel proof conditions remain explicit.
- **MSF-36 / BCS-50:** The current supplier IDs are exactly
  `def-l2-m-approximable-causal-bernoulli-shift`,
  `lem-finite-dependent-vector-clt`,
  `lem-long-run-covariance-is-trace-class`,
  `lem-positive-trace-class-covariance-defines-hilbert-gaussian`, and
  `thm-hilbert-valued-clt-for-l2-m-approximable-bernoulli-shifts`. The proposed
  interface is the $H=L^2[0,1]$ normalized sample-mean CLT, not a partial-sum
  process FCLT. Its local finite-dependent CLT, covariance transfer, and
  Gaussian construction are still unauthored proof obligations. BCS-50 keeps
  the strictly stronger P-P-S bootstrap approximation rate, block/taper
  premises and unavailable TBB supplement proof separate.
- **SME-44 / BCS-38–45:** The exact Category 2 state-space interfaces remain
  proposed/unauthored. BCS-38 consumes the finite-horizon standard-Borel
  kernel joint-law clause; BCS-39 consumes the centered, mutually independent
  linear-Gaussian noise clause with PSD $P_0,Q_t,R_t$ and SPD only where an
  observed innovation covariance is inverted. BCS-40–45 inherit through
  BCS-38/39; no filtering or convergence result is attributed to SME-44.
- **BCS-03 / GP consumer:** The local Gaussian conditioner requires a joint
  PSD covariance and an observed block $B\succ0$; state and conditional
  covariance may be singular. BCS-11 uses its exact finite-GP result ID
  `thm-finite-gaussian-process-posterior-and-predictive-laws`, now identical
  to the ML-15 consumer interface. ML-15 retains PSD latent/noise/predictive
  covariance and the observed-SPD inverse condition. ML-59 consumes the
  BCS-03 conditioner under the same PSD/SPD split.
- **BCS-22 / ELBO consumers:** The exact identity requires $Z\in(0,\infty)$,
  $q\ll\pi$, and finite $q$-integrability of $|\log\gamma|+|\log q|$; exact
  coordinate ascent also requires a finite conditional expectation, positive
  finite normalizer, admissible attained maximizer. ML-53 and the now-repaired
  ML-59 explicitly retain posterior propriety, absolute continuity, and
  log-integrability. ML-59 also separates $t=1$ from its degenerate
  reconstruction conditional and keeps positive schedule/reverse variances.
- **BCS-10 / MSF-16:** Read the full Kleijn–van der Vaart source units cited in
  BCS-10: Theorem 2.1, Lemmas 2.1–2.2 and Example 2.1, printed pp. 358–362;
  the LAN setup is pp. 357–358. The BvM theorem assumes compact-uniform LAN
  and posterior contraction at every diverging local radius. The source's IID
  misspecified LAN lemma uses common-dominator jointly measurable densities,
  differentiability in $P_0$-probability, a square-integrable local
  log-likelihood Lipschitz envelope and positive-definite second-order
  KL-contrast. The repaired MSF-16 QMD clause allows a singular component:
  use the normalized absolutely-continuous likelihood, prove one-observation
  singular/zero-overlap mass $o(1/n)$ and compare products in TV by $o(1)$;
  do not claim a whole-law RN derivative. MSF-16 supplies fixed-sequence LAN
  only; compact-uniformity remains a separate obligation for a QMD-only route.
- **BCS-12 / Banach Gaussian chain:** Read van der Vaart–van Zanten (2008),
  §2 and Theorem 2.1, plus the complete §5 proof, printed pp. 1437–1440 and
  1454–1456. The covariance definition reuses `def-measurable-function-between-measurable-spaces`, `def-strongly-measurable-banach-valued-function`, `def-bochner-integrable-function`, `thm-bochner-integrability-criterion`, `lem-bochner-integral-norm-inequality`, and `thm-bounded-linear-maps-commute-with-bochner-integration`; separable-Borel strong measurability is obtained by countable simple approximation. The live library has no exact Banach Gaussian supplier, so BCS-12 names the Fernique exponential-moment theorem, the
  Cameron–Martin exponential-density translation identity, the
  Hahn–Banach/support theorem, Borell's norm-tail theorem, and the sieve
  entropy/tail/local-mass theorem separately. It requires $E\|W\|<\infty$
  before centering Borell, states $r\ge0$ and $\sigma_W>0$, and handles
  $\sigma_W=0$ as the deterministic $W=0$ case. Every result remains design
  only; its future proof obligations name the route and exact source constants.
- **BCS-14 / DP existence:** The plan's normalized-gamma PRM construction is
  the local existence proof obligation, not an assumed gamma-process theorem:
  finite-intensity mark strips, independent Poisson counts/marks, measurable
  countable-additive evaluations, Laplace transforms, finite positive total
  mass, Dirichlet partition laws, and a posterior identity checked on finite
  refinements then extended by monotone class are all named. It does not infer
  generic weak support or contraction from the DP definition/update.
- **BCS-16 / nonparametric BvM:** The coefficient-prior contract matches
  Castillo–Nickl (2013), Condition 1 P2 and Theorem 9: bounded coefficient
  density, locally bounded below on $(-\tau,\tau)$ for $\tau>M$, finite
  second moment, and theorem-local continuity at normalized truth coordinates.
  The scale-series condition gives an $L^2$ prior; the weak limit remains in
  the specified negative Sobolev space, not $L^2$. No sub-Gaussian tail or
  strong-TV claim is added.
- **BCS-52 / local inference prerequisites:** All order-$(r,r)$ U-statistic
  estimand, projection, Hoeffding decomposition, degenerate-remainder,
  mixture-coupling, pooled-variance and projected-CLT results are explicitly
  local to BCS-52. Its only local pair dependency is BCS-51; MSF-11 is
  transitive through BCS-51. The `Requires` field no longer contains a
  BCS-52 self-edge. The unavailable 2013 supplement is excluded from proof
  claims.
- **BCS-55:** Removed a stale proposed Euler weak/strong rate supplier that
  had no owner inventory or proof source. Giles (2008), Theorem 3.1 and its
  complete proof (PDF pp. 3–5; journal pp. 609–611), supports the abstract
  bias/variance/work MLMC cost theorem, not the Euler SDE rates it cites.
  Concrete SDE examples remain conditional on separately proved rates.

The current upstream source-plan hashes are MSF `27060a3fbe3d124aff0470c3780c7b5d1fadeed64d8eb5bad14ce8306632e67e`, SME `168404be0c9913a6dc7b0c98e2b3e9b005fcce9946b6b31d4c9825de922ba6c8`, and ML `de4dd13424fd25ddec4bf14ec47251dafb343d553691ad6b3a56e87feb368185`; ML supplies the independent P-NUM-SDE prerequisites. MSF-36 defines $X_{t,0}$ as an all-replaced independent copy while keeping its approximation summability over $m\ge1$.

**Focused BCS-55 consumer follow-up:** Restored the conditional Euler–Maruyama examples using exact independent P-NUM-SDE-01/02 links, with P-SDE-01 recorded transitively. The finite-$L^2$ global-Lipschitz/time-Hölder strong rate is a local proof obligation distinct from H-M-S’s all-moment source theorem. Shared Brownian increments and a Lipschitz payoff yield $\beta=1$; strong-only bias gives $\alpha=1/2$. Weak $\alpha=1$ remains a local backward-Kolmogorov design with $p\ge2q+8$ and the corrected pointwise remainder $O(h^2)(1+\|x\|^{q+4})$; Lipschitz payoff alone does not provide that rate. The audit binds the focused P-NUM-SDE-02 follow-up record; no Category 4 dependency was added.

Current audit metadata: 59 pair rows; 56 unique proposed prerequisite/output
items and 56 exact proposed pair-contract records in the shared supplier index.
The plan hash is `ed611178215b39ef193361757671cadbdf08e83603076395a4efa2965c34d602`; the supplier-index hash is `f6006f1c58044e745e691b9031f2c47b01ccaa3cc3f4ffb7453dc0580a74a6e8`.
All 59 rows carry the exact current plan hash, before-snapshot reference,
source-range evidence, current supplier statuses, exact clause hash references,
and one or more open future proof obligations. These are prose-design audits;
none claims an item has been authored, formally proved, or published.
