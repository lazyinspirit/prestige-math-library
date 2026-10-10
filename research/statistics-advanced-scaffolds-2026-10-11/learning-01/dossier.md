# Learning-01 source dossier

**Commissioned scope.** Learning foundations: PAC and agnostic learning, ERM, VC and Rademacher complexity, stability, sample compression, PAC-Bayes, calibration, minimax/sample complexity, distribution shift/domain adaptation, adversarial robustness, and fairness limitations. This is a Category 4 dossier. Every proposed new interface below belongs in Category 4. The designs use existing mathematical and probability suppliers plus earlier Category 4 pairs; they create no Category 3 dependency or backward edge. Category 4 may consume Categories 1–3 elsewhere in the integrated plan, but none is required by this dossier.

**Evidence standard.** I read the full source units and proof text identified in `sources.json`; acquisition alone is not treated as reading. The SHA-256 values there identify the exact local source and extraction files. A theorem is called proved only where its cited source gives a proof or where a proposed local route is stated. Errata, omitted exercises, scope restrictions, OCR limits, and open local proof work are recorded below.

## Proposed dependency-ordered pairs

The block IDs are provisional interfaces for the Category 4 author to reconcile across learning readers. Pair count is coverage-driven. Each pair has a prose page and a separate example page; examples illustrate the results but do not supply proof prerequisites.

### ML-01 — Statistical learning setup, finite-class PAC, and ERM

**Pages:** `learning-risk-pac-erm` / `learning-risk-pac-erm-examples`.

**Scope:** Define measurable input and label spaces $X,Y$, a data law $D$ on $Z=X×Y$, a measurable hypothesis class $H$, loss $\ell$, population risk $R_D(h)=\mathbb{E}_D[\ell(h(X),Y)]$, empirical risk $\hat R_S(h)$, realizability, agnostic excess risk relative to $\inf_{h\in H}R_D(h)$, PAC learnability, consistency, exact ERM, and approximate ERM. Separate the realizable and noisy/agnostic models. Include a finite-class realizable theorem and a bounded-loss agnostic uniform-convergence theorem.

**Proposed item interfaces:** `def-statistical-learning-problem-and-risk`; `def-empirical-risk-and-erm`; `def-realizable-and-agnostic-pac-learnability`; `alg-finite-class-consistent-learner`; `thm-finite-class-realizable-pac-bound`; `thm-finite-class-agnostic-uniform-convergence`; `thm-erm-excess-risk-from-uniform-deviation`.

**Claims and proof routes:** For a finite binary concept class $H$, a consistent output on $m$ iid examples has error at most $(\log|H|+\log(1/\delta))/m$ with probability at least $1-\delta$. For each fixed $h$, the bounded 0–1 loss concentration bound is Hoeffding; a union bound gives, simultaneously for every $h\in H$,
\[
R_D(h)\leq \hat R_S(h)+\sqrt{\frac{\log|H|+\log(2/\delta)}{2m}}.
\]
For an exact ERM, compare its empirical risk with any comparator and add the two uniform-deviation terms; this yields $R_D(\hat h)-\inf_H R_D\leq 2\sup_{h\in H}|R_D(h)-\hat R_S(h)|$. An $\eta$-approximate ERM adds $\eta$. State measurability/existence or use infima and an approximate minimizer; do not silently assume a minimizer exists. The finite-class source's “consistent case” assumes a target concept in $H$ and an algorithm returning a consistent member. The agnostic source theorem uses a finite $H$, iid sample, and bounded binary loss.

**Examples:** A finite threshold or finite lookup class demonstrating the consistent versus agnostic rate distinction; an approximate ERM computation where the optimization error is explicitly added to the statistical oracle bound.

**Requires:** Existing `def-random-element-and-real-random-variable`, `def-probability-measure`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `def-independent-random-elements`, `thm-independent-random-elements-have-product-joint-law`, `thm-finite-and-countable-subadditivity-of-measures`, `cor-markov-inequality-for-random-variables`, and a concentration interface (see supplier audit). No Bayesian interface is needed.

**Sources:** Mohri–Rostamizadeh–Talwalkar, *Foundations of Machine Learning*, 2e, Chapter 2, §2.2, Theorems 2.5 and 2.13 and their complete proofs, local PDF physical pp. 26–45; Chapter 2 §2.4 for the general iid supervised setup. See `fml-ch02-pac-physical-26-45.txt`. The finite-class theorem proof is the bad-consistent-hypothesis event, $(1-\epsilon)^m\le e^{-m\epsilon}$, union bound, and solving for $m$; the agnostic proof is Hoeffding for each fixed hypothesis plus a union bound.

### ML-02 — VC growth, Rademacher bounds, and sample-complexity limits

**Pages:** `learning-vc-rademacher-minimax` / `learning-vc-rademacher-minimax-examples`.

**Scope:** Define the growth/shattering coefficient of a binary class on a finite sample, its VC dimension, empirical Rademacher complexity, and uniform convergence. State a Sauer–Shelah growth bound for traces, a Rademacher generalization bound with its normalization fixed, and a VC corollary. Derive the ERM oracle rate. State realizable and agnostic minimax lower-rate claims only with repaired, nonvacuous parameter ranges and transparent proof obligations.

**Proposed item interfaces:** `def-growth-function-on-a-sample`; `def-vc-dimension-of-a-binary-hypothesis-class`; `def-empirical-rademacher-complexity`; `thm-sauer-shelah-for-hypothesis-class-traces`; `thm-rademacher-uniform-generalization-bound`; `cor-vc-uniform-generalization-bound`; `thm-vc-erm-oracle-rate`; `thm-realizable-vc-sample-complexity-lower-bound`; `thm-agnostic-vc-excess-risk-lower-bound`.

**Claims and proof routes:** A sample of $m$ points induces a finite trace family on its $m$ indices. Apply the existing Sauer–Shelah theorem after relabeling that sample as $[m]$; for $0\le d\le m$, the trace count is at most $\sum_{j=0}^{d}\binom mj$, and for $1\le d\le m$ this is at most $(em/d)^d$. This local transfer is valid even though the repository's current shattering definition is only for set families on $[n]$; the general-domain function-class definition remains a new item. Rademacher routes: symmetrize the supremum of population-minus-empirical risk with an independent ghost sample, insert independent Rademacher signs, and apply bounded-difference concentration; for binary classification, contract through the loss class. Fix the factor convention once: Mohri et al. and Bartlett–Mendelson normalize empirical Rademacher complexity differently in some statements. Do not splice their constants.

The finite-VC upper bound is a uniform high-probability statement for iid samples and binary loss, with complexity of order $\sqrt{(d\log(em/d)+\log(1/\delta))/m}$; its exact displayed split terms are in Mohri et al., Corollary 3.19. The ERM excess-risk upper bound is twice the uniform deviation (plus any approximate-optimization error). For realizable learning, Sauer growth plus a double-sample/shatter-coefficient argument gives the standard VC upper rate (O((d\log(1/\epsilon)+\log(1/\delta))/\epsilon)); a sharper optimal upper bound needs a separate proof/source if the author wants to remove the $\log(1/\epsilon)$ factor. For agnostic binary learning, the upper rate is (O((d+\log(1/\delta))/\epsilon^2)) up to the displayed complexity logarithms.

**Lower-bound source and proof obligations:** Mohri et al. Theorem 3.20 prints a realizable lower bound for every (m\ge1) with threshold ((d-1)/(32m)), although the proof sets an atom to probability (1-8\epsilon). The printed statement is impossible when the threshold exceeds the allowed risk range; the proof only supports a nontrivial range. Theorem 3.23 similarly prints $\sqrt{d/(320m)}$ for every $m$, although its proof restricts $\epsilon\le1/64$. Its key Bernoulli two-point testing Lemma 3.21 is explicitly left as Exercise D.3, so that proof is incomplete in the source. Do not reproduce these as unrestricted proved statements. A sound local route is to state the lower rates for $m\ge C d$ (equivalently $\epsilon$ in a fixed small interval), use a shattered set of $d$ points and a product prior over labels/biases, and prove the one-coordinate testing inequality by a total-variation/Hellinger bound for two Bernoulli laws; sum coordinate errors and choose a prior realization attaining the average. Exact constants and confidence ranges must be proved locally or taken from an additional complete source before publication. This establishes the meaningful orders $\Omega(d/\epsilon)$ realizable and $\Omega(d/\epsilon^2)$ agnostic at constant confidence; the source's printed constants are not being endorsed as-is.

**Examples:** Trace counting for intervals/halfspaces on a finite point set; a class of VC dimension one showing why the crude $n^d$ corollary is false at $n=d=1$; finite-sample comparison between VC and data-dependent Rademacher bounds. The counterexample is already registered locally as `fs-a-family-of-vc-dimension-d-has-at-most-n-to-the-d-members`.

**Requires:** ML-01 risk, empirical risk, ERM, iid and concentration interfaces; existing `def-shattering-and-vc-dimension` and `thm-sauer-shelah` for finite set families; `lem-conditional-hoeffding-bound-for-bounded-martingale-differences`, `thm-azuma-hoeffding-inequality`, and measure-level subadditivity. If the theorem uses the sharper $\sum_{j\le d}\binom mj\le(em/d)^d$ inequality, include its elementary proof/edge cases in this pair or cite the correct existing binomial lemma; do not substitute the local loose $(m+1)^d$ corollary for the sharp count.

**Sources:** Mohri et al., Chapter 3 §§3.1–3.4, Theorems 3.3, 3.5, 3.17, Corollary 3.19, Theorems 3.20 and 3.23, full proof/exercise notes, local PDF physical pp. 46–76; Appendix D, physical pp. 454–465, for Hoeffding/McDiarmid concentration. Bartlett–Mendelson, “Rademacher and Gaussian Complexities: Risk Bounds and Structural Results,” JMLR 3 (2002), pp. 463–482, Theorems 5, 7, 8, 9, 12 and appendices A–B, read in full. Theorem 8 supplies a second complete symmetrization/McDiarmid route for general bounded loss. Do not use the paper's introductory Theorem 1 display, which omits a confidence term; its later numbered theorem statements include the confidence terms.

### ML-03 — Stability, compression, and PAC-Bayes guarantees

**Pages:** `learning-stability-compression-pac-bayes` / `learning-stability-compression-pac-bayes-examples`.

**Scope:** Define replacement-sample uniform stability and sample compression/reconstruction. Separate a sufficient stability condition from a necessary one. Give one uniform-stability generalization theorem, a regularized RKHS algorithm example with all kernel/loss hypotheses, a compression PAC bound, and a PAC-Bayes theorem for posterior-averaged risk. Keep deterministic predictors, randomized posterior draws, expected bounds, and high-probability-over-data claims distinct.

**Proposed item interfaces:** `def-uniform-algorithmic-stability`; `thm-uniform-stability-generalization-bound`; `alg-rkhs-regularized-erm`; `thm-rkhs-regularized-erm-stability`; `def-sample-compression-scheme`; `alg-compression-based-consistent-learner`; `thm-consistent-sample-compression-pac-bound`; `def-pac-bayes-prior-and-posterior`; `thm-catoni-pac-bayes-bound`; `alg-gibbs-posterior`.

**Claims and proof routes:** For an iid sample and a symmetric algorithm whose returned loss satisfies $0\le\ell\le M$ on every hypothesis/example pair, and whose loss changes by at most $\beta$ when one sample point is replaced, Bousquet–Elisseeff Theorem 12 gives, with probability at least $1-\delta$ over the sample,
\[
R(A_S)\le \hat R_S(A_S)+2\beta+(4m\beta+M)\sqrt{\frac{\log(1/\delta)}{2m}}.
\]
Mohri et al. Theorem 14.2 gives a slightly tighter bound under its own stability convention; choose one convention and source rather than mixing constants. Proof route: show the expected generalization gap is $O(\beta)$, bound the one-coordinate change of the gap, and apply McDiarmid. The RKHS algorithm minimizes $m^{-1}\sum_i\ell(f,z_i)+\lambda\|f\|_{\mathcal H}^2$. For fixed $\lambda$, a kernel with $K(x,x)\le\kappa^2$ and a convex $\sigma$-admissible loss gives uniform stability $\beta\le\sigma^2\kappa^2/(2\lambda m)$; its high-probability conclusion additionally needs the bounded-loss hypothesis. This is sufficient, not necessary: some unstable algorithms generalize, ordinary ERM can be unstable, and tuning $\lambda$ on the same sample is outside the fixed-parameter statement.

For a deterministic compression/reconstruction scheme of size at most $d$, consistency, iid realizable examples, and a reconstruction rule that maps every retained sub-sample to a hypothesis, the Floyd–Warmuth/Littlestone–Warmuth argument gives
\[
\Pr[\text{some consistent reconstructed hypothesis has error}>\epsilon]
\le \sum_{i=0}^{d}\binom mi(1-\epsilon)^{m-i},\qquad m>d.
\]
The compression learner selects one retained subset of at most $d$ sample points and returns the reconstruction hypothesis; consistency of the reconstructed hypothesis with the full sample is part of the scheme/learner hypothesis. Proof: union bound over possible retained index sets; conditioned on a retained set, the remaining examples miss a fixed hypothesis's error set with probability at most $(1-\epsilon)^{m-i}$. This implies PAC learnability and a sample-size upper bound after solving the displayed sum. A maximum VC class has a size-$d$ compression construction in the cited paper; the much stronger assertion that every finite-VC class has a size-$O(d)$ sample compression scheme is not established there. The 1995 authors describe that as open; record it as historical source status and verify contemporary status before asserting it remains open.

For PAC-Bayes, let $\pi$ be a fixed prior independent of the iid sample, losses lie in $[0,C]$, and $\rho\ll\pi$ be any posterior, including one selected from the data. The associated Gibbs algorithm is $d\hat\rho_\lambda/d\pi(\theta)\propto\exp[-\lambda\hat R_S(\theta)]$. For each fixed $\lambda>0$, with probability at least $1-\delta$ simultaneously for every $\rho$,
\[
\mathbb E_{\theta\sim\rho}R(\theta)\le \mathbb E_{\theta\sim\rho}\hat R_S(\theta)+\frac{\lambda C^2}{8m}+\frac{\mathrm{KL}(\rho\|\pi)+\log(1/\delta)}{\lambda}.
\]
Proof: Hoeffding exponential moment for each parameter, integrate under $\pi$, Markov, then the Donsker–Varadhan variational formula. If $\lambda$ is selected from a finite grid, pay $\log|\Lambda|$ in the confidence term by a union bound. The bound controls the posterior-average risk; it is not automatically a pointwise guarantee for every posterior draw. Fixed-bin sample compression and PAC-Bayes are distinct mechanisms.

**Examples:** Leave-one-out replacement for stability; fixed regularization on a bounded-kernel RKHS; a size-$d$ maximum-class compression illustration; a two-point or finite-model PAC-Bayes posterior where the prior is visibly fixed before sampling.

**Requires:** ML-01 risk/iid/ERM definitions; ML-02 VC/shattering if the compression example uses a VC class. The RKHS example either introduces the reproducing-kernel and regularizer interfaces here or follows the later learning-02 kernel/RKHS pair; the author must place it after the actual interface, not leave it as a hidden supplier. Existing Hilbert-space and inner-product items may be reused only for the norm facts they actually state.

**Sources:** Bousquet–Elisseeff, “Stability and Generalization,” JMLR 2 (2002), pp. 499–526, full paper including Appendix proofs; Theorems 12, 22, and Lemma 23. Mohri et al., Chapter 14 §14.2, Theorem 14.2 and §14.3, physical pp. 350–362, plus Chapter 4 Theorem 4.1 for the ERM deviation comparison. Floyd–Warmuth, “Sample Compression, Learnability, and the Vapnik–Chervonenkis Dimension,” Machine Learning 21 (1995), pp. 269–304, §§3–7 and Appendix proof of Theorem 5, physical pp. 6–15, 17–30 and 34–35; source OCR corrupts some displayed formulas, so the clean union-bound formula must be checked against the PDF or rederived locally. Alquier, *User-friendly Introduction to PAC-Bayes Bounds*, Chapter 2 §§2.1–2.4, PDF physical pp. 20–39, including the complete Donsker–Varadhan and Theorem 2.1 proofs.

### ML-04 — Probability calibration, proper scores, and fairness limits

**Pages:** `learning-calibration-proper-scores-fairness` / `learning-calibration-proper-scores-fairness-examples`.

**Scope:** Define a probabilistic classifier and state full multiclass reliability, classwise/marginal calibration, and top-confidence calibration separately. State the limited calibration conclusion from proper scoring rules and the conditions under which a finite-bin estimator is consistent. Prove one specific incompatibility theorem for group risk scores. Do not turn empirical calibration plots, ECE, or a social fairness criterion into a universal theorem.

**Proposed item interfaces:** `def-multiclass-calibration-notions`; `thm-conditional-probability-forecast-is-calibrated`; `def-strictly-proper-scoring-rule`; `thm-fixed-bin-calibration-error-can-underestimate`; `thm-calibration-estimator-consistency-under-refining-partitions`; `def-group-risk-score-and-balance-criteria`; `thm-calibration-balance-incompatibility-for-unequal-base-rates`.

**Claims and proof routes:** For a measurable score $g(X)\in\Delta^{K-1}$, full reliability is $\Pr(Y\in\cdot\mid g(X))=g(X)$; classwise calibration is $\Pr(Y=y\mid g_y(X))=g_y(X)$; top-confidence calibration is $\Pr(Y=\arg\max g(X)\mid\max g(X))=\max g(X)$. These are distinct for $K\ge3$, though the paper shows they coincide in the binary case. For any measurable feature map $h$, $g(X)=\Pr(Y\in\cdot\mid h(X))$ is calibrated; a constant prior predictor is therefore calibrated but may be uninformative. Vaicenavicius et al.'s fixed finite, data-independent partition with continuous convex distance can asymptotically underestimate expected miscalibration almost surely; equality needs the stated Jensen-affinity condition. Their consistency theorem instead requires a uniformly/Lipschitz-continuous calibration function, a distance continuous in its first argument, and a sequence of finite, data-independent partitions whose mesh tends to zero; take the sample-size limit first and then refine the partition as stated. Therefore fixed-bin ECE is not universally consistent, and a finite-bin result cannot be substituted for continuous calibration.

A strictly proper scoring rule uniquely maximizes expected score at the true forecast distribution; strict propriety supports truthful probability reporting under the assumed predictive distribution. It does not by itself guarantee calibration of an arbitrary learned model on every subgroup or directly isolate calibration from resolution/sharpness. For the precise Kleinberg–Mullainathan–Raghavan risk-score model, define calibration within each group and balance of mean scores among positive cases and among negative cases. Their exact theorem says simultaneous satisfaction is possible only when group base rates are equal or the score is perfect (takes only values 0 and 1). The proof conditions on score level sets and uses the two group base rates to force the same posterior outcome probabilities; if the rates differ, an interior score cannot satisfy both balance equations. This is a theorem about these criteria and risk assignments, not all notions of fairness, all decision policies, or all distributions. Their approximate theorem has a source-specific $f(\epsilon)$ rate; include it only with the exact approximation definitions and formula from Theorem 1.2.

**Examples:** Multiclass score tables separating all three calibration notions; the constant base-rate predictor; fixed-bin underestimation with an explicit within-bin varying calibration function; two groups with unequal base rates showing the exact risk-score impossibility.

**Requires:** ML-01 probability/risk notation; ML-02 concentration only for finite-sample calibration estimation. Conditional probabilities and regular conditional distributions require measurable-space hypotheses; use the repository's actual conditional-expectation/measure suppliers and state existence assumptions rather than treating all measurable spaces as automatically admitting regular conditional laws.

**Sources:** Vaicenavicius et al., “Evaluating Model Calibration in Classification,” AISTATS/PMLR 89 (2019), full main paper pp. 1–9 and Supplement A.2 proof pages 1–4, 10-page supplement read in full. Gneiting–Raftery, “Strictly Proper Scoring Rules, Prediction, and Estimation,” JASA 102(477) (2007), selected full units §§1, 2.1–2.2, 3.1–3.2, PDF pp. 1–7 (later sections were not read and are not relied on). Kleinberg–Mullainathan–Raghavan, “Inherent Trade-Offs in the Fair Determination of Risk Scores,” arXiv:1609.05807v2 (2016), full 23-page article and proof, especially Definitions 1–3 and Theorems 1.1–1.2.

### ML-05 — Distribution shift and domain adaptation

**Pages:** `learning-domain-adaptation` / `learning-domain-adaptation-examples`.

**Scope:** Define source and target input distributions, source/target label laws, binary-classifier $H\Delta H$ divergence, and arbitrary-loss discrepancy. State one target-risk bound with its irreducible joint-labeling term and one general bounded-loss discrepancy theorem. A weighting algorithm may be included only alongside its optimization assumptions; do not imply unlabeled target data removes label shift or makes negative transfer impossible.

**Proposed item interfaces:** `def-source-target-domain-learning-problem`; `def-h-delta-h-divergence`; `def-loss-discrepancy-between-domains`; `thm-target-risk-bound-by-source-risk-divergence-and-joint-error`; `thm-discrepancy-domain-adaptation-bound`; `alg-empirical-discrepancy-reweighting`.

**Claims and proof routes:** Ben-David et al. Theorem 2 gives, for a binary class $H$, source/target input laws $D_S,D_T$, a fixed classifier $h$, and $\lambda=\min_{h'\in H}(\epsilon_S(h')+\epsilon_T(h'))$,
\[
\epsilon_T(h)\le \epsilon_S(h)+\tfrac12 d_{H\Delta H}(D_S,D_T)+\lambda.
\]
The source-target labeling functions need not coincide; the “joint ideal” term $\lambda$ accounts for their incompatibility within $H$. Proof: compare $h$ to a joint near-minimizer, insert the two labeling errors, and bound the disagreement-probability difference by the $H\Delta H$ divergence. Finite VC dimension is additionally needed for the paper's uniform finite-sample estimation bounds on divergence; it is not a substitute for small $\lambda$. Thus small unlabeled divergence alone gives no useful target guarantee when labelings conflict.

Mansour–Mohri–Rostamizadeh define $\mathrm{disc}_L(P,Q)=\sup_{h,h'\in H}|L_P(h',h)-L_Q(h',h)|$. Their Theorem 8 assumes a symmetric loss satisfying the triangle inequality and uses minimizers $h_Q^*\in\arg\min_H L_Q(h,f_Q)$ and $h_P^*\in\arg\min_H L_P(h,f_P)$. For every $h\in H$ it states
\[
L_P(h,f_P)\le L_P(h_P^*,f_P)+L_Q(h,h_Q^*)+\mathrm{disc}_L(P,Q)+\min\{L_Q(h_Q^*,h_P^*),L_P(h_Q^*,h_P^*)\}.
\]
This generalizes beyond binary 0–1 loss but is not a free guarantee for arbitrary losses: boundedness/Rademacher or pseudo-dimension assumptions enter when estimating discrepancy from finite unlabeled samples. Their Theorem 2's discrepancy-estimation route is symmetrization plus bounded-loss Rademacher concentration. Their weighting algorithm minimizes $\mathrm{disc}_L(\hat P,\hat Q')$ over distributions $\hat Q'$ supported on the observed labeled-source sample; for 0–1 loss this is an LP, and for square loss with bounded linear predictors it is an SDP. Regularized RKHS adaptation is a separate theorem with convexity, norm, and fixed-sample support constraints; state target labels are not used where the paper assumes only unlabeled target covariates.

**Examples:** Covariate shift with a shared labeling rule and small discrepancy; two domains with identical input marginals but conflicting labels, so $\lambda$ is large; a one-dimensional reweighting example versus an empirical result.

**Requires:** ML-01 risk and hypothesis-class definitions; ML-02 VC/Rademacher tools for the empirical-divergence estimator; ML-03 or learning-02 kernel/RKHS interfaces only if including regularized adaptation. Existing finite set-family Sauer supports finite traces after relabeling but does not itself define $H\Delta H$ or a general-domain VC class.

**Sources:** Ben-David et al., “A theory of learning from different domains,” Machine Learning 79 (2010), pp. 151–175, full article and Appendix proofs, especially Definitions 1–2 and Theorems 2–3. Mansour–Mohri–Rostamizadeh, “Domain Adaptation: Learning Bounds and Algorithms,” arXiv:0902.3430v3 (2023), full setup/Sections 1–5 and Appendix A proof of Theorem 2, plus Appendix B Theorem 14. Local reading covered PDF physical pp. 1–11; empirical figure pages 12–15 were not read or relied on. The paper's discrepancy theorem and its sample-estimation theorem are separate claims.

### ML-06 — Adversarial risk and distribution-specific sample separation

**Pages:** `learning-adversarial-robust-generalization` / `learning-adversarial-robust-generalization-examples`.

**Scope:** Define robust risk relative to an explicit norm-ball threat set and distinguish natural risk from robust risk. Prove a sample-complexity separation in the paper's Gaussian mixture regime, then contrast the paper's binary-coordinate model where linear classifiers and a coordinate-threshold architecture have different robustness behavior. State the dimension, norm, noise, perturbation, and probability scaling in every theorem. Do not state a distribution-free accuracy/robustness impossibility.

**Proposed item interfaces:** `def-adversarial-robust-risk-for-a-threat-set`; `alg-gaussian-mixture-robust-mean-classifier`; `thm-robust-learning-sample-upper-bound-for-gaussian-mixtures`; `thm-robust-learning-sample-lower-bound-for-gaussian-mixtures`; `alg-coordinate-threshold-preprocessing`; `thm-architecture-dependent-robustness-in-binary-feature-model`.

**Claims and proof routes:** Schmidt et al.'s robust risk is the probability that some perturbed input within the specified ℓ∞ ball changes the label. In the Gaussian model, Y is uniform on {−1,+1}, X|Y=y is N(yθ*,σ²I_d), and ||θ*||₂=√d. Corollary 22 assumes d≥2 and σ≤d^(1/4)/32. The normalized class-weighted sample mean has robust error at most 1% with probability at least 1−2 exp(−d/[8(σ²+1)]) when n≥64 ε²√d and ¼d^(−1/4)≤ε≤¼; one sample suffices for ε≤¼d^(−1/4). In this Gaussian family, Corollary 19 gives a one-sample classifier with error at most β and probability at least 1−2 exp(−d/[8(σ²+1)]) when σ≤d^(1/4)/(5√log(1/β)). For the lower bound, any learner from n≥0 samples, with θ drawn from N(0,I_d) and ε≥0, has expected robust error at least (1−1/d)/2 when n≤ε²σ²/(8 log d). Taking σ=c₁d^(1/4) gives a lower scale Ω(ε²√d/log d), against the upper O(ε²√d) in the stated intermediate perturbation regime. This separation is dimension-dependent, not a universal sample-complexity law. The proof uses Gaussian likelihood/posterior calculations, a common adversarial perturbation, and a maximum-of-Gaussians tail bound; local Gaussian-vector norm concentration is a missing supplier unless derived in the pair.

In the Bernoulli-coordinate model, θ*∈{−1,+1}^d and each coordinate equals its label-correlated sign with probability 1/2+τ. Theorem 8 gives a standard one-sample learner when τ≥c·d^(−1/4). Theorem 31 assumes τ≤1/4, ε<3τ, 0<γ<1/2, and uniform θ*∈{−1,+1}^d; every linear-classifier learner has expected robust error at least 1/2−γ when n≤ε²γ²/[5000τ⁴ log(4d/γ)]. Yet coordinatewise thresholding T(x)_i=sign(x_i) is invariant to the paper's ℓ∞ perturbations for ε<1, and Theorem 10 gives its associated nonlinear learner robust error at most 1% from one sample when τ≥c·d^(−1/4). This is a concrete architecture/distribution interaction, not proof that every nonlinear model is robust or that every linear model fails.

**Examples:** Explicit Gaussian scaling with $d$ and $\epsilon$, reporting the logarithmic lower-bound gap; a binary-coordinate perturbation that preserves coordinate signs; contrasting natural and robust risks on the same distribution.

**Requires:** ML-01 risk and probability; ML-02 concentration and sample complexity; ML-05 domain-law notation if the author wants a common distribution-shift interface. Add a proved Gaussian norm/tail supplier or prove the needed tail bound inline. Keep $\ell_p$, perturbation-radius, and architecture assumptions explicit.

**Sources:** Schmidt et al., “Adversarially Robust Generalization Requires More Data,” arXiv:1804.11285v2 / NeurIPS 2018, full main text pp. 1–16 and Appendix A–B proofs pp. 22–38. Experiments are not relied on. Exact theorem/corollary references: Theorem 4/Corollary 19, Theorem 5/Corollary 22, Corollary 23, Theorems 8, 10, and 31.

## Existing supplier audit

I checked the item bodies, not just titles or page indexes. These published items are useful mathematical prerequisites, with the scope limits below:

| Existing interface | Actual checked body and scope | Learning use / limit |
|---|---|---|
| `def-shattering-and-vc-dimension` | `items/def-shattering-and-vc-dimension.md`; defines trace, shattering, VC dimension only for $\mathcal F\subseteq\mathcal P([n])$, with the empty-family convention. | Supports trace combinatorics after reindexing a finite sample; it is not a general-domain hypothesis-class definition. |
| `thm-sauer-shelah` | `items/thm-sauer-shelah.md`; published shifting proof, $|\mathcal F|\le\sum_{i=0}^d\binom ni$ for finite set families on $[n]$. | Exact trace-count supplier. Reindex sample points; prove the transfer explicitly. |
| `cor-sauer-shelah-polynomial-bound` | `items/cor-sauer-shelah-polynomial-bound.md`; for $d\ge1$, $|\mathcal F|\le(n+1)^d$. | Coarse consequence only. Do not silently replace the sharper binomial sum or $ (em/d)^d$ with this. |
| `fs-a-family-of-vc-dimension-d-has-at-most-n-to-the-d-members` | In the examples list of `library/combinatorics/linear-algebra-methods-in-combinatorics.md`; explicit false-statement counterexample. | Useful warning against $n^d$ at $n=d=1$. |
| `thm-sauer-shelah-by-multilinear-polynomials` | Published second proof on the combinatorics page, finite set-family scope. | Independent supplier route; still not a statistical learning theorem. |
| `lem-conditional-hoeffding-bound-for-bounded-martingale-differences` | `items/lem-conditional-hoeffding-bound-for-bounded-martingale-differences.md`; deterministic width, conditional mean zero, finite measurable endpoints; AC inherited. | Supports concentration routes. Preserve deterministic width and measurability assumptions. |
| `thm-azuma-hoeffding-inequality` | `items/thm-azuma-hoeffding-inequality.md`; two-sided martingale inequality with deterministic increment widths, AC inherited. | Supports bounded differences via a Doob martingale only after the bounded-difference argument is supplied. It is not itself the learning theorem. |
| `thm-finite-and-countable-subadditivity-of-measures` | `items/thm-finite-and-countable-subadditivity-of-measures.md`; general measure-level countable union bound. | Correct union-bound supplier on general probability spaces. `thm-finite-union-bound` is finite-space only. |
| `def-probability-measure`; `def-random-element-and-real-random-variable`; `def-expectation-of-a-nonnegative-or-integrable-random-variable` | Published on the measure/probability pages and checked at item/page level. | Supports ambient probability, measurable random elements, laws and risk expectations. |
| `def-independent-random-elements`; `thm-independent-random-elements-have-product-joint-law` | Published on `library/probability/independence-borel-cantelli-and-zero-one-laws.md`; product law for arbitrary measurable independent random elements under its hypotheses. | Supports iid samples and ghost-sample/product arguments; still requires specifying measurable sample space and independence. |
| `lem-chernoff-bound-for-independent-bernoulli-trials` | Published detailed Bernoulli Chernoff proof in computability theory page. | Optional finite Bernoulli tail route only; do not use it as the general bounded-data concentration supplier. |
| `def-rademacher-functions-on-the-unit-interval`; `thm-khintchine-inequality-for-finite-rademacher-sums` | Existing harmonic-analysis items. | These are harmonic-analysis Rademacher signs/sums, not empirical Rademacher complexity or a learning risk bound. |

Relevant published page bodies checked: `library/combinatorics/linear-algebra-methods-in-combinatorics.md`; `library/probability/probability-spaces-random-variables-and-expectation.md`; `library/probability/independence-borel-cantelli-and-zero-one-laws.md`; `library/probability/martingale-inequalities-and-convergence.md`; `library/combinatorics/finite-probability-spaces-and-random-variables.md`; and `library/measure-theory/measures-and-their-basic-properties.md`. There is no local `library/statistics` page and no checked learning-theory item for PAC, ERM, empirical Rademacher complexity, stability, compression, PAC-Bayes, calibration, adaptation, fairness, or adversarial robust risk. The general-domain VC definition and learning-specific Rademacher definitions are therefore new interfaces, not already supplied by these pages.

## Coverage and dependency map

| Assigned topic | Pair | Independent source evidence | Key dependency / caution |
|---|---|---|---|
| PAC, agnostic learning, ERM | ML-01 | Mohri et al. Ch. 2; Ch. 4 | iid, measurable risk, finite-class/ bounded-loss hypotheses; approximate optimization adds its error. |
| VC and Rademacher reuse | ML-02 | Mohri et al. Ch. 3 + Appendix D; Bartlett–Mendelson full paper | Existing VC/Sauer is finite set-family only; use correct trace transfer and source normalization. |
| Minimax/sample complexity | ML-02 | Mohri et al. Thms. 3.20/3.23 | Printed lower statements need range repair; agnostic proof has an exercise gap. |
| Stability | ML-03 | Bousquet–Elisseeff full paper; Mohri et al. Ch. 14 | Bounded loss and replacement stability; fixed hyperparameters; sufficient, not necessary. |
| Compression | ML-03 | Floyd–Warmuth full selected units and Thm. 5 proof | Scheme consistency/reconstruction required; general $O(d)$ VC compression not established by this source. OCR obscures some displayed formulas. |
| PAC-Bayes | ML-03 | Alquier Ch. 2 full unit/proofs | Fixed sample-independent prior; bounded loss; posterior KL and λ; high-probability is over sample and controls posterior average. |
| Calibration/proper scoring/fairness | ML-04 | Vaicenavicius main + supplement; Gneiting–Raftery selected units; Kleinberg et al. full paper | Three multiclass notions differ; fixed-bin ECE may underestimate; risk-score theorem concerns only its three criteria. |
| Distribution shift/adaptation | ML-05 | Ben-David et al. complete proofs; Mansour et al. §§1–5 and appendices A–C | Divergence plus irreducible label term; finite-class assumptions only for finite-sample estimation; no guarantee if joint error is large. |
| Adversarial robustness | ML-06 | Schmidt et al. full main + appendices A–B | Specific Gaussian/Bernoulli models, norm, scaling, and architecture; add a Gaussian norm-tail supplier. |

Dependency order: ML-01 → ML-02 → ML-03 → ML-04 → ML-05 → ML-06 is a safe linear presentation. Calibration can branch after ML-01; adaptation and robustness use ML-01/02 risk and complexity interfaces. If learning-02 supplies the shared RKHS definitions before ML-03 or ML-05, insert that prerequisite explicitly; if not, either introduce the exact needed kernel interface in the relevant pair or omit that application until its dependency exists. There is no edge from any of these Category 4 interfaces back into Category 3.

## Source limits and open proof work

* The Mohri book's official second-edition errata page is saved with its hash. It corrects the final equality in the printed proof of Theorem 3.17 (Sauer's lemma): the relevant VC-dimension step is an inequality, not necessarily equality. Follow the corrected inequality in any reuse.
* Mohri et al. Theorems 3.20 and 3.23 cannot be quoted in their unrestricted printed parameter ranges. Theorem 3.21's binary-testing lemma is left as Exercise D.3. Publication-quality lower-bound items need the range repair and a complete testing proof or a second source with full proof.
* Bousquet–Elisseeff and Mohri et al. state stability bounds with different constants/conventions. Select one statement and carry its definition consistently. The RKHS stability theorem itself does not establish bounded loss; Theorem 12's concentration guarantee still requires bounded returned loss.
* Floyd–Warmuth source text extraction/OCR drops several equations. The compression union-bound formula is checked against the Appendix proof structure and is simple to rederive, but do not treat the garbled sample-complexity display as an exact formula.
* The 1995 compression article calls size-$O(d)$ compression for every VC-$d$ class open at that time. The dossier does not assert current status without a current source.
* Gneiting–Raftery was read only through the complete units listed in `sources.json`; no claim here relies on later sections. The PAC-Bayes source is an arXiv tutorial marked by its author for research/teaching/private study; cached copies are ignored workspace artifacts, not proposed library content.
* The author-hosted Daumé *A Course in Machine Learning* chapter was inspected as a candidate but is incomplete where it treats learning theory: the conjunction argument has a TODO, the Occam theorem has TODOs, and only the VC definition is complete. It is excluded as a supplier. The attempted Understanding Machine Learning PDF endpoint was blocked and returned an error HTML page, so it contributes no evidence.
* Calibration paper experiments and all cited robustness/domain-adaptation empirical figures are not used as theorem evidence. Source PDFs/selected extractions and SHA-256 values are listed in `sources.json`.
