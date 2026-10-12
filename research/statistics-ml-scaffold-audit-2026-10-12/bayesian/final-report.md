# Bayesian/computational-statistics scaffold audit — final report

Date: 2026-10-12. This is a prose-design audit of all 59 Category 3 pairs. Every proposed result, dependency interface, and local proof route remains design-only; no theorem was authored, formally proved, or published as part of this audit. The before-snapshot is preserved and the in-scope plan retains the same 59 pair/page identities.

Current plan SHA-256: `ed611178215b39ef193361757671cadbdf08e83603076395a4efa2965c34d602`.  
Provider plan SHA-256s are recorded in `supplier-index.json`: MSF `27060a3fbe3d124aff0470c3780c7b5d1fadeed64d8eb5bad14ce8306632e67e`; SME `168404be0c9913a6dc7b0c98e2b3e9b005fcce9946b6b31d4c9825de922ba6c8`; ML `de4dd13424fd25ddec4bf14ec47251dafb343d553691ad6b3a56e87feb368185` for independent P-SDE/P-NUM-SDE suppliers.  

Supplier-index SHA-256: `f6006f1c58044e745e691b9031f2c47b01ccaa3cc3f4ffb7453dc0580a74a6e8`.  
Machine-readable 59-pair evidence: `research/statistics-ml-scaffold-audit-2026-10-12/bayesian/pair-audit.json` (59 rows).

## Reconciled supplier interfaces

Every upstream contract below is a proposed plan clause, not a published library result. Exact full clause text, provider path/line, and clause SHA-256 appear once in `supplier-index.json`; each pair row references those records and lists its own exact item dependencies/statuses. The same index records direct and transitive pair consumers and the exact downstream Category 4 item consumers for BCS-03, BCS-11 and BCS-22.

### MSF-01 measurable model-kernel bridge

**Status:** proposed Category 1 design, unauthored/unpublished. BCS-01 and BCS-05 now treat the exact clause as present in the live plan, superseding the earlier crash-time “worker errored” status. The contract requires a measurable parameter space and probability kernel with parameter-measurable event probabilities; an arbitrary indexed family alone does not supply this. BCS-01 still distinguishes an Ω-indexed RCD from a data-indexed posterior kernel and retains the standard-Borel/AC premises for factorization.

### MSF-36 Hilbert sample-mean CLT for BCS-50

**Status:** proposed Category 1 design, unauthored/unpublished. The exact current IDs are `def-l2-m-approximable-causal-bernoulli-shift`, `lem-finite-dependent-vector-clt`, `lem-long-run-covariance-is-trace-class`, `lem-positive-trace-class-covariance-defines-hilbert-gaussian`, and `thm-hilbert-valued-clt-for-l2-m-approximable-bernoulli-shifts`. The current MSF-36 clause also reuses published Bochner-integration and trace-class operator results. The interface is weak convergence of the normalized sample mean in `H=L²[0,1]`; it is not a partial-sum-process FCLT. The definition clarifies `$X_{t,0}$` as an all-replaced independent copy and keeps the approximation summability over `$m\ge1$`. BCS-50 separately requires the stronger P-P-S bootstrap approximation rate, integer block growth with `b→∞` and `b/√n→0`, and exact taper conditions. The TBB supplement proof remains unavailable, so no TBB proof completion is claimed.

### SME-44 state-space model laws for BCS-38–45

**Status:** proposed Category 2 design, unauthored/unpublished. `def-general-state-space-model-by-kernels` supplies the finite-horizon standard-Borel state/observation spaces, initial law, jointly measurable transition/observation kernels, and joint kernel product law consumed by BCS-38. `def-linear-gaussian-state-space-model-with-independent-noises` supplies linear-Gaussian equations, centered mutually independent initial/process/measurement noises, and PSD covariance matrices consumed by BCS-39. The observed innovation block must be SPD only where inverted. BCS-40–45 inherit the model-law contracts through BCS-38/39; SME-44 does not supply filtering algorithms or convergence.

### MSF-16 QMD-to-LAN boundary for BCS-10

**Status:** proposed Category 1 design, unauthored/unpublished. The repaired contract does not assume the entire local alternative is absolutely continuous with respect to the base law. It forms the normalized absolutely-continuous component, proves one-observation singular/zero-overlap mass `o(1/n)`, and proves the product experiment differs in total variation by `o(1)`. MSF-16 states fixed-local-sequence LAN only. BCS-10’s abstract TV-BvM theorem requires LAN uniformly on compact local-parameter sets, an interior point, nonsingular `V`, positive continuous prior density, and posterior contraction at every diverging local radius. A QMD-only route therefore needs a separate compact-uniform remainder proof; the source-specific IID misspecified LAN route retains its common-dominator density, differentiability, square-integrable local Lipschitz envelope, and positive-definite KL-curvature assumptions. The MLE sandwich theorem retains its distinct consistency/approximate-maximization premises.

### P-NUM-SDE-01/02 Euler suppliers for BCS-55

**Status:** independent pre-category designs, unauthored and unpublished. P-NUM-SDE-01 defines the Euler–Maruyama recursion/interpolation and its global-Lipschitz, linear-growth, time-modulus, adaptedness, and finite-second-moment setup; its moment derivation remains local. P-NUM-SDE-02 records the exact H-M-S autonomous strong-rate assumptions, including uniform all-order moments, and the source’s Theorem 4.4 proof. Its weak-order case is a separate local backward-Kolmogorov design: bounded test function, $C^{2,4}$ derivatives with growth $C(1+\|x\|^q)$, uniform moments $p\ge2q+8$, and corrected one-step remainder $O(h^2)(1+\|x\|^{q+4})$. The weak exposition sources do not prove this rate. P-SDE-01 is a transitive strong-solution prerequisite. Exact clauses, provider lines/hashes, consumer trace and audit-file digests are in `supplier-index.json` and BCS-55’s pair row.

### BCS-03 Gaussian conditioning and downstream interfaces

**Status:** proposed Category 3 result, unauthored/unpublished. The Gaussian conditioner assumes a jointly PSD block covariance and an SPD observed covariance block; the state and conditional covariance may be singular. Singular observed blocks and pseudoinverse formulas are excluded. BCS-11’s exact output ID is `thm-finite-gaussian-process-posterior-and-predictive-laws`, matching ML-15 byte-for-byte; ML-15 retains PSD prior/noise/predictive covariances and an SPD observed covariance wherever inverted. ML-59 consumes BCS-03 under the same PSD/SPD split.

### BCS-22 ELBO interface for ML-53 and ML-59

**Status:** proposed Category 3 design, unauthored/unpublished. For nonnegative measurable `γ`, the plan requires `Z=∫γ dμ∈(0,∞)`, defines `π=γ/Z`, and requires `q≪π` plus finite `q`-integrability of `|log γ|+|log q|` before asserting `log Z=ELBO(q)+KL(q‖π)`. Exact coordinate ascent additionally needs a finite conditional expectation, a positive finite normalizer, an admissible family member, and an attained exact maximizer. ML-53 and the repaired ML-59 explicitly preserve the propriety, absolute-continuity, and integrability conditions. ML-59 also separates the `t=1` reconstruction likelihood and retains positive schedule/reverse variances.

### BCS-12 Banach Gaussian proof chain

BCS-12 reuses the exact published suppliers `def-measurable-function-between-measurable-spaces`, `def-strongly-measurable-banach-valued-function`, `def-bochner-integrable-function`, `thm-bochner-integrability-criterion`, `lem-bochner-integral-norm-inequality`, and `thm-bounded-linear-maps-commute-with-bochner-integration` to define its covariance, with separable-Borel strong measurability obtained by simple approximation. Its Gaussian-specific future items are Fernique exponential-square integrability, Cameron–Martin translation, support equality, Borell concentration, and the Gaussian sieve bounds. It establishes `E||W||<∞` before centering the Borell tail, uses `r≥0` and `σ_W>0`, and handles `σ_W=0` as `W=0` almost surely. Its support route uses the explicit exponential translation density and Hahn–Banach separation; the source’s sieve constants are retained. These items are not library proofs.

### BCS-14 and BCS-16 scope checks

BCS-14 treats a Dirichlet process as a measurable random probability measure and names the full finite-strip Poisson-random-measure construction, normalized gamma law, measurable countably additive evaluations, finite-positive total mass, posterior verification on finite refinements, and monotone-class extension. It does not infer generic weak support or contraction from finite-partition update alone. BCS-16 matches Castillo–Nickl (2013), Condition 1 P2 and Theorem 9: bounded coefficient density, lower bound on `(-τ,τ)` with `τ>M`, finite second moment, and theorem-local continuity at normalized truth coefficients. The scale-series condition gives an `L²` prior; the weak limit remains in the specified negative Sobolev topology, with no unsupported sub-Gaussian-tail or strong-TV claim.

## Pair-by-pair source ranges and future proof obligations

The source ranges below are the exact citations recorded in each audited pair. The per-pair JSON additionally preserves the source-map rows, full-text read limits, exact supplier IDs/statuses and provider hashes. Every listed obligation is future authoring/proof work.

### BCS-01 — Bayesian models, priors, and posterior laws

**Pair suppliers:** local none; direct earlier-category MSF-01. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Gelman et al., *Bayesian Data Analysis*, §§1.1–1.3; Johnson, Ott & Dogucu, *Bayes Rules!*, §§2.1.1–2.1.4, 2.3.1–2.3.6. Reuse the inspected local RCD and probability-kernel items; source hashes and exact extraction ranges are in the Bayesian-01 manifest.

**Future proof obligations:**
- Prove product-kernel joint law and state whether each conclusion is an RCD or data-indexed kernel; respect null-version nonuniqueness and AC=Axiom of Choice.

### BCS-02 — Posterior propriety and dominated Bayes formula

**Pair suppliers:** local BCS-01; direct earlier-category MSF-04. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Gelman et al., *Bayesian Data Analysis*, §§1.3, 2.8; Johnson, Ott & Dogucu, *Bayes Rules!*, §§2.1.3–2.1.4, 2.3.4–2.3.6. Do not duplicate the generic proper-prior posterior-kernel theorem.

**Future proof obligations:**
- Prove finite-positive normalization, Tonelli almost-everywhere claim, flat-prior normal example, and improper Beta endpoint divergence.

### BCS-03 — Conjugate families and Gaussian conditioning

**Pair suppliers:** local BCS-01, BCS-02; direct earlier-category MSF-04, MSF-05. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Gelman et al., *Bayesian Data Analysis*, 3rd ed., §§2.1, 2.4–2.6, 3.3–3.6, App. A; Johnson, Ott & Dogucu, *Bayes Rules!*, Ch. 3 §§3.1–3.5, Ch. 5 §§5.2.1–5.2.4/5.3.1–5.3.4; Bayesian-04 Särkkä App. A. The normal-model example with a textbook arithmetic typo is not reused.

**Future proof obligations:**
- Prove updates, Dirichlet normalization, Gaussian residual independence and PSD Schur complement; Category 4 consumers must retain observed-SPD condition.

### BCS-04 — Posterior prediction, credible sets, and Bayes actions

**Pair suppliers:** local BCS-01, BCS-02; direct earlier-category MSF-03. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Gelman et al., *Bayesian Data Analysis*, §§1.3, 2.5, 9.1; Johnson, Ott & Dogucu, *Bayes Rules!*, Ch. 8 §§8.1–8.3, §16.5. Neither source gives generic arbitrary-loss minimizer existence.

**Future proof obligations:**
- Prove predictive total-variance identity and loss minimizers under exact integrability; carry L2 projection assumptions.

### BCS-05 — Hierarchical Bayes and partial pooling

**Pair suppliers:** local BCS-01, BCS-02, BCS-03; direct earlier-category MSF-01. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Gelman et al., *Bayesian Data Analysis*, §§5.1–5.4, 5.7; Johnson, Ott & Dogucu, *Bayes Rules!*, Chs. 15–16. Improper scale-prior examples are warnings, not generic prior recommendations.

**Future proof obligations:**
- Construct product-kernel law and prove conditional Normal update and valid evidence normalization.

### BCS-06 — Marginal likelihoods, Bayes factors, and empirical Bayes

**Pair suppliers:** local BCS-02, BCS-05; direct earlier-category MSF-01, MSF-04. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Gelman et al., *Bayesian Data Analysis*, §7.4, §§5.1, 5.3–5.4; Johnson, Ott & Dogucu, *Bayes Rules!*, Ch. 8 §§8.2.1–8.2.2. No numerical evidence algorithm is claimed.

**Future proof obligations:**
- Derive E(MSB)=σ²+rτ² and E(MSW)=σ² under stated balanced Gaussian random-effects model; no structural-zero claim from truncation.

### BCS-07 — Hellinger geometry and posterior consistency

**Pair suppliers:** local BCS-01, BCS-02; direct earlier-category MSF-04, MSF-21. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Ghosal–Ghosh–van der Vaart (2000), §§1–2, 7–8, Theorems 2.1, 2.4, 7.1 and 7.3 and their denominator/test proofs; Kleijn–van der Vaart (2012), §4, Lemma 4.1 and Corollary 4.2. MSF-21 is planned and supplies KL/Pinsker only if its final contracts match.

**Future proof obligations:**
- Prove denominator lower bound, tested numerator control, Fubini/Borel–Cantelli; separate any in-probability variant.

### BCS-08 — IID posterior contraction by entropy and prior mass

**Pair suppliers:** local BCS-07; direct earlier-category MSF-04, MSF-21. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Ghosal–Ghosh–van der Vaart (2000), Theorems 2.1 and 2.4, §7 Theorems 7.1/7.3 and §8, Lemma 8.1 and complete proof units, printed pp. 503–507, 521–526, 529–530.

**Future proof obligations:**
- Prove denominator/test/sieve shell argument or reproduce fully read proof; preserve metric and TV convention.

### BCS-09 — Posterior consistency at a KL projection

**Pair suppliers:** local BCS-07, BCS-08; direct earlier-category MSF-04, MSF-21. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Kleijn–van der Vaart (2012), §4 Lemma 4.1/Corollary 4.2 and §3 Theorem 3.2 proof, printed pp. 366–379.

**Future proof obligations:**
- Prove numerator/denominator control at KL minimizer; use compact test construction only under exact premises.

### BCS-10 — Parametric Bernstein–von Mises limits and misspecification

**Pair suppliers:** local BCS-08, BCS-09; direct earlier-category MSF-04, MSF-12, MSF-15, MSF-16. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Kleijn–van der Vaart (2012), §§2.1–2.2, Theorem 2.1, Lemmas 2.1–2.2, Example 2.1, printed pp. 358–362.

**Future proof obligations:**
- Prove the normalized AC-component QMD LAN argument, singular/zero-overlap mass rate, and product total-variation comparison without claiming a full RN derivative for the whole local alternative.
- Prove compact-uniform LAN from any selected QMD hypotheses or use the exact source-specific IID misspecified differentiability/envelope/KL-curvature route.
- Prove posterior contraction at every diverging multiple of the LAN rate and the compact-local posterior Gaussian approximation.
- Prove the MLE sandwich expansion only under its additional consistency and approximate-maximization assumptions.

### BCS-11 — Gaussian-process priors and finite posterior laws

**Pair suppliers:** local BCS-01, BCS-02, BCS-03; direct earlier-category none. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** van der Vaart–van Zanten (2008), §1 and Gaussian process preliminaries; reuse the inspected live Gaussian-process and Kolmogorov suppliers. **Proposed result item:** `thm-finite-gaussian-process-posterior-and-predictive-laws`. The finite-regression conditioning proof is local.

**Future proof obligations:**
- Prove FDD consistency/extension then use BCS-03 conditioner. Cat4 consumer uses exact finite-GP theorem ID and must keep only observed block invertible.

### BCS-12 — Banach Gaussian priors, RKHS support, and concentration

**Pair suppliers:** local BCS-11; direct earlier-category none. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** van der Vaart–van Zanten (2008), §1.2, Theorem 2.1 and §5 proof, printed pp. 1437–1440, 1454–1456. Their RKHS-closure identity is cited, not proved; Borell's inequality is a separate prerequisite.

**Future proof obligations:**
- Prove Fernique exponential-square integrability for a tight Borel Gaussian law on a separable Banach space, or cite an exact earlier supplier.
- Prove the Cameron–Martin density identity for h=Cℓ by exponential Gaussian tilting and measure determination, including representative independence.
- Prove support equality: establish zero in support via tightness/separability and Gaussian difference law; use translation for closure(H)⊂support and Hahn–Banach for the reverse inclusion.
- Prove the Borell norm tail from Gaussian isoperimetry, with r≥0 and separate σW=0 deterministic case.
- Derive the source sieve entropy, tail, and local-mass bounds with the exact displayed constants and statistical-distance compatibility premises.

### BCS-13 — Gaussian-process posterior contraction

**Pair suppliers:** local BCS-08, BCS-11, BCS-12; direct earlier-category MSF-04. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** van der Vaart–van Zanten (2008), Theorem 3.1 and proof, §§3.2–3.3, §5, source PDF pp. 7–13, 20–22. A Gaussian concentration theorem alone is not a posterior theorem.

**Future proof obligations:**
- Prove each likelihood-distance and log-likelihood moment comparison, then instantiate entropy, prior mass and tests; verify log-GP normalizer.

### BCS-14 — Dirichlet-process priors and finite-partition updates

**Pair suppliers:** local BCS-01, BCS-03; direct earlier-category none. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Ferguson (1973), §§3–4, Lemma 1/Definition 1/Proposition 2/Theorem 1, full source PDF pp. 212–219; the detailed finite-strip Poisson construction and its measurability/disintegration proof are supplied locally. Ghosal–van der Vaart (2007), §7 finite-dimensional DP prior-mass argument, printed pp. 713–716. The mixture-contraction result is outside this pair's claims.

**Future proof obligations:**
- Prove finite-strip PRM/thinning, measurable evaluations, finite positive total, Laplace/gamma/Dirichlet laws and posterior monotone-class identity; Ferguson delegates gamma-process existence.

### BCS-15 — Dirichlet normal-mixture posterior contraction

**Pair suppliers:** local BCS-08, BCS-14; direct earlier-category MSF-04, MSF-21. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Ghosal–van der Vaart (2007), Theorems 1 and 5, §§1–2, 4–9 and full proof of Theorem 1, printed pp. 700–720.

**Future proof obligations:**
- Prove sieve entropy, convolution approximation, DP prior-mass and scale-tail lemmas; check exact rate alternatives.

### BCS-16 — Weak nonparametric Bernstein–von Mises limits

**Pair suppliers:** local BCS-08; direct earlier-category none. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Castillo–Nickl (2013), Definition 1, Condition 1, Theorems 5, 7–9 and complete proof units, §§1–3, printed pp. 2009–2017/source PDF pp. 5–29. The density assumption is boundedness plus finite second moment and local positivity (and theorem-local continuity), not a sub-Gaussian tail.

**Future proof obligations:**
- Prove product-prior finite-coordinate limit and tail tightness; establish white noise is not L2-valued.

### BCS-17 — Functional BvM limits and credible-set calibration

**Pair suppliers:** local BCS-08, BCS-16; direct earlier-category none. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Castillo–Nickl (2013), Theorems 1–4, printed pp. 9–14; Castillo–Nickl (2014), Theorem 3, Theorems 4–5, Corollaries 1–2, Proposition 5, §§5.3–5.4, source PDF pp. 12–18, 22–28.

**Future proof obligations:**
- Prove nonlinear remainder and source-specific weak-BvM/quantile mappings under exact contraction and regularity.

### BCS-18 — Adaptive empirical-Bayes credible-set calibration and failure

**Pair suppliers:** local BCS-03, BCS-06; direct earlier-category none. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Szabó–van der Vaart–van Zanten (2015), model (2.1)–(2.7), Theorems 3.1, 3.6, 5.1, §§5 and 9 proofs, source PDF pp. 4–13, 20–24, 31–33.

**Future proof obligations:**
- Reproduce source hyperparameter bracket and bias/radius comparisons, checking every sequence and inflation quantifier.

### BCS-19 — Generalized Bayes loss updates and temperature calibration

**Pair suppliers:** local BCS-01, BCS-02; direct earlier-category MSF-21. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Bissiri–Holmes–Walker (2016), equations (7)–(8), §§1.1–2.3 and 3.1–3.4. The unneeded supplementary uniqueness proof characterizing KL from axioms is not imported; uniqueness here follows from the direct Gibbs KL identity.

**Future proof obligations:**
- Prove direct KL decomposition and uniqueness with every integral finite; supplement axiomatic uniqueness is excluded.

### BCS-20 — Computational foundations: factorization, KL, and optimization

**Pair suppliers:** local BCS-01, BCS-02; direct earlier-category MSF-04, MSF-21. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Figueiredo, *Lecture Notes on the EM Algorithm*, §§1–4, PDF pp. 1–7; Boyd–Vandenberghe, *Convex Optimization*, Ch. 9 §§9.2–9.3, 9.5, PDF pp. 477–483, 498–505. Their regimes do not yield a global nonconvex optimizer theorem. **Items:** `def-latent-variable-joint-and-observed-data-factorization`, `thm-observed-density-is-latent-marginal-under-tonelli`, `thm-kullback-leibler-is-nonnegative`, `alg-gradient-descent`, `alg-damped-newton`, `thm-gradient-descent-rate-under-strong-convexity-and-smoothness`, `thm-newton-local-quadratic-convergence-under-lipschitz-hessian`.

**Future proof obligations:**
- Prove Tonelli/conditional factorization, KL nonnegativity, descent recurrence and local Newton contraction; no global nonconvex claim.

### BCS-21 — Latent-variable EM and likelihood ascent

**Pair suppliers:** local BCS-02, BCS-20; direct earlier-category MSF-04. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Figueiredo, §§1–4, PDF pp. 1–7; its zero-KL parameter-equality statement is not used without model identifiability. **Items:** `alg-expectation-maximization`, `thm-em-observed-log-likelihood-is-nondecreasing`, `thm-generalized-em-is-nondecreasing-under-q-ascent`, `rem-em-ascent-does-not-imply-global-optimality-or-convergence`.

**Future proof obligations:**
- Prove exact likelihood–Q–KL identity and generalized-EM ascent; no sequence/global-optimum conclusion.

### BCS-22 — Variational inference and the evidence lower bound

**Pair suppliers:** local BCS-02, BCS-20; direct earlier-category MSF-04. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Blei, Kucukelbir & McAuliffe (2017), §§1, 2.1–2.5, PDF pp. 1–11; Jordan et al. (1999), §§6.1–6.3, printed pp. 213–220, PDF pp. 31–38. Both are derivations/reviews, not generic convergence or calibration theorems. **Items:** `def-variational-family-and-elbo`, `thm-elbo-kl-decomposition`, `alg-coordinate-ascent-variational-inference`, `thm-exact-coordinate-ascent-does-not-decrease-elbo`, `cex-mean-field-variational-inference-underestimates-correlated-gaussian-variance`, `rem-high-elbo-alone-does-not-certify-posterior-calibration`.

**Future proof obligations:**
- Prove ELBO=logZ−KL and exact coordinate monotonicity; consumers must retain absolute-continuity and integrability premises.

### BCS-23 — Laplace approximation and deterministic quadrature

**Pair suppliers:** local BCS-02, BCS-20; direct earlier-category none. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** UConn note *Laplace's Method for Integrals*, entire 8-page note (author not stated); NIST DLMF §2.3(iii), equations 2.3.13–2.3.18 and conditions (a)–(c); Driscoll–Braun, *Fundamentals of Numerical Computation*, §5.6.1, equations 5.6.1–5.6.9. DLMF points elsewhere for full error proofs; the local Laplace proof and explicit trapezoid bound remain required.

**Future proof obligations:**
- Prove rescaled local domination/off-mode exponential bound and cellwise interpolation error.

### BCS-24 — Approximate Bayesian computation and summary-based inference

**Pair suppliers:** local BCS-01, BCS-02, BCS-20; direct earlier-category MSF-01, MSF-02, MSF-05. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Lintusaari et al. (2017), PDF pp. 1–6, 10–23, 46–47; Fearnhead–Prangle (2012), PDF pp. 1–18, 35–38; Beaumont et al. (2002), PDF pp. 1–6; Blum (2010), PDF pp. 1–11, 20–24; Robert et al. (2011), PDF pp. 1–4. Blum's quadratic-adjustment lemma proof is in an unread supplement; Robert et al. show model-choice failure, with only a special Gibbs-field exception. **Items:** `def-approximate-bayesian-computation`, `alg-abc-rejection`, `thm-abc-rejection-target-is-tolerance-conditioned-posterior`, `thm-abc-zero-tolerance-target-is-summary-posterior-under-density-regularity`, `thm-sufficient-summary-recovers-full-posterior`, `cex-identifiable-model-with-insufficient-abc-summary`.

**Future proof obligations:**
- Prove approximate-identity TV limit and posterior factorization; unread Blum supplement is not imported.

### BCS-25 — IID Monte Carlo integration and error

**Pair suppliers:** local none; direct earlier-category none. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Owen, *Monte Carlo Theory, Methods and Examples*, Ch. 2 §§2.1–2.3, printed pp. 15–22; the CLT proof is supplied by the live local theorem.

**Future proof obligations:**
- Apply SLLN to Y and Y² for sample variance; require n≥2 and finite second moment.

### BCS-26 — Control variates, antithetics, and stratification

**Pair suppliers:** local BCS-25; direct earlier-category none. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Owen, Ch. 8 §8.9, pp. 28–32, equations (8.26)–(8.34), Algorithm 8.3; Ch. 9 Theorem 9.4 cites an unread external estimated-control result, which is not imported.

**Future proof obligations:**
- Prove covariance minimizer and variance formulae; fitted-control comparison retains fixed-dimension/fourth-moment premise.

### BCS-27 — Rejection sampling

**Pair suppliers:** local BCS-25; direct earlier-category none. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Owen, Ch. 4 §4.7, printed pp. 21–26, Algorithms 4.5–4.6 and Theorems 4.2–4.5 with proof.

**Future proof obligations:**
- Compute accepted subdensity/mass and geometric count under independent ideal proposals.

### BCS-28 — Ordinary and self-normalized importance sampling

**Pair suppliers:** local BCS-25; direct earlier-category MSF-14. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Owen, Ch. 9 §§9.1–9.3, pp. 4–13, and §9.10, pp. 25–27. Theorem 9.2 proves SNIS strong consistency, not a CLT; local ratio proof is still required.

**Future proof obligations:**
- Prove RN change-of-measure, SLLN and bivariate ratio CLT/delta method; ESS is not missed-support detection.

### BCS-29 — General-state Markov kernels, invariance, and reversibility

**Pair suppliers:** local none; direct earlier-category none. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Roberts–Rosenthal (2004), §2 and local checked kernel pages; source detailed-balance proof is countable-state and the general measure proof is local.

**Future proof obligations:**
- Prove symmetric flow has target marginal via Tonelli; no irreducibility/mixing result follows.

### BCS-30 — Metropolis–Hastings kernels

**Pair suppliers:** local BCS-29; direct earlier-category none. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Owen Ch. 11 §§11.2–11.4, §§11.10–11.13; Roberts–Rosenthal (2004), §§2–3.5. Any general-state result delegated to external small-set lemmas is not imported here.

**Future proof obligations:**
- Prove accepted flow symmetry and measurable disintegration including diagonal rejection mass; invariance does not imply convergence.

### BCS-31 — Gibbs sampling and scan schemes

**Pair suppliers:** local BCS-29, BCS-30; direct earlier-category none. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Owen Ch. 12 §§12.1, 12.4, pp. 49–55; Roberts–Rosenthal §2.5. The source's discrete derivation is generalized locally to kernels.

**Future proof obligations:**
- Prove conditional-kernel preservation and compose scan kernels with their declared timing.

### BCS-32 — General-state MCMC ergodicity and mixing

**Pair suppliers:** local BCS-29, BCS-30, BCS-31; direct earlier-category none. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Roberts–Rosenthal (2004), §§3.2–3.5, 4.1–4.6, pp. 16–41; Jones (2004), §§1–4, PDF pp. 1–14. Their Theorems 4 and 9 cite small-set conversion results, so the new Cat3 proof must provide the specific conversion/coupling step it uses.

**Future proof obligations:**
- Supply small/petite conversion, drift theorem and coupling/regeneration proof for exact stated hypotheses; do not import countable-state theorem.

### BCS-33 — MCMC central limit theorems, MCSE, and long-run variance

**Pair suppliers:** local BCS-32; direct earlier-category none. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Roberts–Rosenthal (2004), §§5.1–5.4, pp. 42–51; Jones (2004), Theorems 1, 9, and §§2–4; Flegal & Jones (2010), Theorem 2 and proof Appendix B.3, Corollary 1, full arXiv PDF pp. 8–10. Local proof must show the theorem's batch conditions; `b_n\sim n^\nu` alone is not the source's full contract except under the stated corollary conditions.

**Future proof obligations:**
- Prove martingale conditional variance/Lindeberg/endpoints and OBM regeneration/block consistency under every batch condition.

### BCS-34 — Hamiltonian Monte Carlo and leapfrog correction

**Pair suppliers:** local BCS-20, BCS-30; direct earlier-category none. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Neal, “MCMC Using Hamiltonian Dynamics,” §§2.1–2.3, 3.1–3.2, 4.2, 5.2. Its detailed-balance proof is informal; the measure-level proof is local. High-dimensional scaling applies only to its product-target regime.

**Future proof obligations:**
- Prove shear Jacobian, involution and MH balance; prove exact-flow energy/volume only for smooth complete flow.

### BCS-35 — Langevin algorithms: ULA bias and MALA exactness

**Pair suppliers:** local BCS-20, BCS-30; direct earlier-category none. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Durmus–Moulines, §1, Theorem 10/§4.6, Theorem 21 and §§3.3/4.12; local Gaussian proof avoids the source's external diffusion-contraction route for the basic bias claim.

**Future proof obligations:**
- Derive Gaussian stationary variance/MALA ratio; quantitative weighted-TV source rate needs its full coupling/diffusion proof or local proof.

### BCS-36 — Adaptive MCMC convergence limits

**Pair suppliers:** local BCS-29, BCS-32; direct earlier-category none. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Roberts–Rosenthal (2007), “Coupling and Ergodicity of Adaptive MCMC Algorithms,” §§1–10, Theorems 5, 13, 18, 19, 23. The source gives a bounded-function WLLN under its stronger theorem conditions but no general adaptive CLT.

**Future proof obligations:**
- Verify source coupling proof, conditional probability formulation, initial moment and all common constants; no general adaptive CLT.

### BCS-37 — MCMC diagnostics and finite-run limitations

**Pair suppliers:** local BCS-32, BCS-33, BCS-36; direct earlier-category none. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Vehtari et al., “Rank-normalization, folding, and localization,” §§1–5 and Appendices A–D, PDF pp. 1–26. The recommendations $\hat R=1.01$ and ESS $=400$ are not universal theorem thresholds.

**Future proof obligations:**
- Author exact source rank transformations, chain splitting and MCSE definitions; empirical thresholds remain non-theorems.

### BCS-38 — State-space models and exact Bayesian filtering

**Pair suppliers:** local BCS-01, BCS-02; direct earlier-category MSF-01, SME-44. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Särkkä, *Bayesian Filtering and Smoothing*, Ch. 3.6 and Ch. 4; Doucet–Johansen §§2–3.

**Future proof obligations:**
- Prove Ionescu–Tulcea path construction and recursive conditional identities; use data-indexed versions only under matching factor-through assumptions.

### BCS-39 — Exact linear-Gaussian Kalman filtering

**Pair suppliers:** local BCS-03, BCS-38; direct earlier-category SME-44. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Särkkä Ch. 4 §§4.1–4.3/App. A; Law–Stuart–Zygalakis Ch. 3 §3.1. Their density derivation is narrower; local PSD/SPD block proof remains required.

**Future proof obligations:**
- Prove affine prediction/BCS-03 conditioning and verify Joseph/subtractive update equivalence.

### BCS-40 — Fixed-interval Gaussian smoothing and RTS recursion

**Pair suppliers:** local BCS-03, BCS-38, BCS-39; direct earlier-category none. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Särkkä Ch. 8 §§8.1–8.3; Law–Stuart–Zygalakis Ch. 3 §3.1.

**Future proof obligations:**
- Derive backward conditional Gaussian recursion and PSD output by factorization/BCS-03.

### BCS-41 — Feynman–Kac targets and sequential particle filters

**Pair suppliers:** local BCS-28, BCS-38; direct earlier-category none. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Doucet–Johansen §§3–4; Chopin §§2.1–2.2.

**Future proof obligations:**
- Prove or assume measurable kernel RN versions as explicit contract; derive path ratio and conditional-expectation unbiasedness under finite integrability.

### BCS-42 — Finite-horizon SMC error, CLTs, and degeneracy

**Pair suppliers:** local BCS-41; direct earlier-category none. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Chopin (2004), Theorems 1–2, 4–5 and Appendices A.1/A.3–A.4, source PDF pp. 7–14, 27–31; Doucet–Johansen §3 CLT displays refer elsewhere for proof.

**Future proof obligations:**
- Prove conditional triangular-array induction and variance recursion; zero fractional-weight residual mass has zero correction; long-time result stays separate.

### BCS-43 — Particle smoothing, backward simulation, and Rao–Blackwellized filters

**Pair suppliers:** local BCS-38, BCS-39, BCS-41; direct earlier-category none. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Särkkä Ch. 7 §§7.1–7.5 and Ch. 11 §§11.1–11.4; Doucet–Johansen §5; Lindsten–Schön §§3–4. Delegated consistency identities remain local proof obligations.

**Future proof obligations:**
- Prove Bayes backward weights and any consistency theorem under stated continuity/dominating/integrability; RBPF exactness is conditional on sampled path.

### BCS-44 — Particle MCMC: PMMH and particle Gibbs

**Pair suppliers:** local BCS-30, BCS-41; direct earlier-category none. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Andrieu–Roberts, §§1–3/Theorem 1; Lindsten–Schön §4.1/Appendix A; Särkkä Ch. 12 §§12.1–12.3.5. The sources delegate core particle-Gibbs marginal/ergodicity steps; the explicit target integration/conditional verification is a local proof obligation.

**Future proof obligations:**
- Display/integrate extended target and prove selected posterior marginal and each conditional update; no ergodicity claim without separate conditions.

### BCS-45 — Data assimilation: 3DVAR, 4DVAR, and ensemble filters

**Pair suppliers:** local BCS-20, BCS-38, BCS-39, BCS-40; direct earlier-category none. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Law–Stuart–Zygalakis Ch. 2 §§2.1–2.7, Ch. 3 §§3.1/3.3, Ch. 4 §§4.1–4.4.3, Theorem 4.10 (printed pp. 96–97); no general 4DVAR optimizer convergence proof is supplied.

**Future proof obligations:**
- Prove Gaussian update and geometric error recursion; state ensemble-size hypotheses for linear-Gaussian EnKF limit.

### BCS-46 — ABC-MCMC and ABC-sequential Monte Carlo

**Pair suppliers:** local BCS-24, BCS-30, BCS-41; direct earlier-category none. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Lintusaari et al. (2017), PDF pp. 1–6, 10–23; Fearnhead–Prangle (2012), PDF pp. 1–18. Claims are the local augmented-target derivations, not the sources' unrelated simulation-performance claims.

**Future proof obligations:**
- Prove MH flow invariance and RN incremental weighting/support for declared kernels.

### BCS-47 — Resampling schemes and the sampling-unit contract

**Pair suppliers:** local none; direct earlier-category MSF-01, MSF-02, SME-12. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Efron & Tibshirani (1985), §§1–2, 10, printed pp. 1–35; Bickel, Götze & van Zwet (1997), §§1–3, pp. 1–14.

**Future proof obligations:**
- Author operational algorithms and preserve cluster/block/assignment units; prove validity only for matched sampling design.

### BCS-48 — IID bootstrap and jackknife for smooth statistics

**Pair suppliers:** local BCS-47; direct earlier-category MSF-02, MSF-10, MSF-14. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Efron & Tibshirani (1985), §§1–5, 7–10; Bickel et al. (1997), §§2–5 and Appendix. The review omits many technical proofs; local theorem proof required.

**Future proof obligations:**
- Prove empirical conditional CLT/delta remainder and jackknife linearization; Edgeworth coverage outside scope.

### BCS-49 — Bootstrap failure, m-out-of-n methods, and subsampling

**Pair suppliers:** local BCS-47, BCS-48; direct earlier-category MSF-10, MSF-14. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Bickel et al. (1997), §§2–8 and Appendix, pp. 2–31; Romano & Shaikh (2012), Theorems 2.1–2.4 and Appendix A.1–A.2, journal pp. 2801–2822. Some application proofs in the supplement were not read and are not used.

**Future proof obligations:**
- Prove theorem only under exact distribution-class and quantile/root conditions; unread supplemental application proof is excluded.

### BCS-50 — Moving and tapered block bootstrap for dependent data

**Pair suppliers:** local BCS-47; direct earlier-category MSF-36. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Horváth–Kokoszka–Reeder (2013), §1.1–§2, Theorem 1 and Appendix A.1, author-hosted full PDF; Pilavakis, Paparoditis & Sapatinas (2019), Assumption 1 §2.1, Theorems 2.1–2.2, Theorem 3.1/Corollary 3.1 and §5 appendix, PDF pp. 2–13, 16–27. MBB main-paper proof units read; TBB supplemental proof unavailable/unread.

**Future proof obligations:**
- Prove MBB conditional-law/covariance limits and TBB missing Lemma 5.2/Theorem 2.2 locally; keep multiple-series centering/differentiability premises.

### BCS-51 — Exact permutation tests and random-permutation Monte Carlo

**Pair suppliers:** local none; direct earlier-category MSF-02, MSF-08, MSF-11, SME-12. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Hemerik & Goeman (2018), “Exact Testing with Random Permutations,” Theorems 1–2 and Propositions 1–3 with proof, *TEST* 27, 811–825, PDF pp. 1–15.

**Future proof obligations:**
- Prove conditional orbit rank and exchangeable identity-list ranks for each with/without-replacement design; uncorrected p-value may be zero.

### BCS-52 — Studentized permutation tests under weak parameter nulls

**Pair suppliers:** local BCS-51; direct earlier-category MSF-02. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Chung & Romano (2011), Stanford Technical Report 2011-09, §3.2 Theorems 3.1–3.2 and Appendix A Lemmas A.1–A.2 with proofs, full PDF pp. 1–47; Chung & Romano (2013), *Annals of Statistics* 41(2), 484–507, full main article read but proof supplement unavailable and not a proof supplier.

**Future proof obligations:**
- Prove Hoeffding decomposition/remainder, mixture coupling, projection CLT and group/mixture variance-estimator consistency; no scalar-CLT shortcut; 2013 supplement excluded.

### BCS-53 — Cross-validation risk, model selection, and comparison uncertainty

**Pair suppliers:** local none; direct earlier-category MSF-02, MSF-03, MSF-14. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Arlot & Celisse (2010), *Statistics Surveys* 4, §§2–8, pp. 40–79; Bengio & Grandvalet (2004), *JMLR* 5, §§2–4/Theorem 6 proof, pp. 1089–1105. Survey's empirical recommendations are not universal theorems.

**Future proof obligations:**
- Prove Bengio–Grandvalet result only under IID/symmetric-algorithm/fixed-K/all-distributions contract; derive other variance claims separately.

### BCS-54 — Statistical, resampling, simulation, and numerical error ledger

**Pair suppliers:** local BCS-25, BCS-47, BCS-51, BCS-53; direct earlier-category none. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Efron & Tibshirani (1985), §9, pp. 29–30; Owen (2019), *Monte Carlo Book: Quasi-Monte Carlo Parts*, Ch. 17 §§17.1/17.4 and end note, printed pp. 89–99, 132–134; inspected floating-point suppliers.

**Future proof obligations:**
- Put each target on a common space and retain covariance terms or prove independence/centering; restrict roundoff claims to supplier domain.

### BCS-55 — Multilevel Monte Carlo and cost theorem

**Pair suppliers:** local BCS-25, BCS-54; direct independent pre-category P-NUM-SDE-01/02; transitive P-SDE-01. No Category 4 pair is a supplier. See the pair JSON and supplier index for exact clauses, paths, source-line/hash references and audited status.

**Conditional Euler cases:** Under P-NUM-SDE-01’s global-Lipschitz/linear-growth, $1/2$-Hölder time and finite-$L^2$ initial-state contract, a separate local interpolation/Itô-isometry/BDG/Grönwall proof gives strong mean-square rate $O(h)$. Shared Brownian increments then give coupled correction variance $O(h)$ for a Lipschitz payoff, so $\beta=1$; strong-only bias is $O(h^{1/2})$, so $\alpha=1/2$. A separate weak-order-one case requires P-NUM-SDE-02’s bounded smooth test/backward-solution contract, $C^{2,4}$ polynomial-growth derivatives and uniform moments $p\ge2q+8$; its corrected local remainder is $O(h^2)(1+\|x\|^{q+4})$. When the payoff also satisfies the Lipschitz condition, $(\alpha,\beta)=(1,1)$. Both cases instantiate $O(\epsilon^{-2}\log^2(\epsilon^{-1}))$. A Lipschitz payoff alone does not imply weak order one. H-M-S’s source proof supports the strong rate only under its exact autonomous all-moment hypotheses; it does not establish the finite-$L^2$ local route. The P-NUM pairs remain designs, not completed library proofs.

**Primary source ranges:** Giles (2008), “Multilevel Monte Carlo Path Simulation,” Theorem 3.1 and full proof, *Operations Research* 56(3), 607–617, PDF pp. 1–11; Higham–Mao–Stuart (2002), Assumptions 3.1/4.1/4.2, Lemma 4.3, and Theorem 4.4 full proof, printed pp. 1054–1056. The weak exposition sources state the order under “sufficient regularity” but do not prove the local weak-rate design.

**Future proof obligations:**
- Prove the abstract MLMC allocation/cost theorem from the stated bias, correction-variance, work, and level-independence assumptions.
- Prove the finite-$L^2$ global-Lipschitz/time-Hölder Euler strong estimate and shared-increment correction bound locally; separately, reproduce or import H-M-S only with its exact autonomous all-moment premises.
- Prove the weak Taylor/telescoping argument with remainder $O(h^2)(1+\|x\|^{q+4})$ and $p\ge2q+8$, and separately derive the required backward-solution regularity from coefficient/payoff assumptions.
- Keep adaptive bias stopping explicitly heuristic.

### BCS-56 — Deterministic quasi-Monte Carlo and discrepancy

**Pair suppliers:** local BCS-25, BCS-54; direct earlier-category none. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Art Owen, *Monte Carlo Book: The Quasi-Monte Carlo Parts*, Chapters 15–16, printed pp. 3–88/PDF pp. 5–90. The source cites external full proofs of Koksma–Hlawka and construction rates; local proof remains required. Author notice forbids redistribution; source is only paraphrased.

**Future proof obligations:**
- Prove anchored-box integration by parts; define general HK via face Vitali variations; construction rates need separate hypotheses.

### BCS-57 — Randomized quasi-Monte Carlo and replicate error

**Pair suppliers:** local BCS-54, BCS-56; direct earlier-category none. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Owen (2019), Chapter 17 §§17.1–17.14, printed pp. 89–137/PDF pp. 91–140, Theorems 17.3 and 17.5 (17.3's and 17.5's full variance proofs refer to external papers). No general RQMC CLT or MLQMC complexity theorem is imported.

**Future proof obligations:**
- Use/prove nested-scrambling ANOVA results; source proofs cite Owen (1997a/b); replicate interval needs additional assumptions.

### BCS-58 — Synthetic likelihood and indirect inference

**Pair suppliers:** local BCS-20, BCS-25; direct earlier-category MSF-01, MSF-02, MSF-04. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Ong et al. (2018), “Variational Bayes with Synthetic Likelihood,” PDF pp. 1–4; Frazier et al. (2019), “Bayesian Inference Using Synthetic Likelihood: Asymptotics and Adjustments,” *JASA* 114(527), pp. 2821–2827. The later BSL optimizer pages and online theorem proofs were not read; no BSL calibration theorem is proposed.

**Future proof obligations:**
- Any consistency claim needs uniform law, unique separated target, simulation control and identification; no BSL calibration claim.

### BCS-59 — Identifiability and approximation bias in computational inference

**Pair suppliers:** local BCS-20, BCS-21, BCS-22, BCS-23, BCS-24, BCS-54, BCS-58; direct earlier-category MSF-01, MSF-05. See the pair JSON for exact item IDs, published/proposed status, transitive paths, and provider clause hashes.

**Primary source ranges:** Robert et al. (2011), PDF pp. 1–4; Lintusaari et al. (2017), Fearnhead–Prangle (2012), Blum (2010), Ong et al. (2018), Frazier et al. (2019), only their read ranges above. Blum's supplementary Lemma 2 and Frazier's BSL theorem proofs were not acquired/read and are not used.

**Future proof obligations:**
- Prove common-space triangle decompositions and counterexamples; do not import unread ABC/BSL supplement claims.

There is no standalone BCS-59 row in the source matrix. Its direct citation above is recorded with the Bayesian-05 dossier row; the machine evidence cross-references the exact BCS-24/58 topic rows and preserves the source-read limits.

## Source and status boundaries

The six Bayesian source dossiers and their manifests/progress hashes are recorded in `supplier-index.json`. Full text was consulted for uncertain claims; material unread/unavailable supplements are explicitly excluded from proof claims, including the TBB supplement for BCS-50 and the broad 2013 robust-permutation supplement for BCS-52. The 2011 Chung–Romano proof route is used only at its read scope.

All reusable library suppliers are statused as published or proposed in the shared supplier index. All Cat1/Cat2 contracts remain proposed until their owners author and prove them. All BCS results and algorithms remain prose designs. Structural validation checks pair order, page uniqueness, category direction, cycles, and explicit pair dependencies; it does not certify the mathematical proofs.
