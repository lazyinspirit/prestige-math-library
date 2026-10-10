# Bayesian-06 source dossier: resampling and computational uncertainty

**Assignment:** resampling/computational uncertainty: bootstrap validity, failure and refinements; jackknife; permutation inference; cross-validation/model comparison; numerical versus statistical error; multilevel and quasi-Monte Carlo.

This is a Category 3 planning dossier. It proposes prose pages and proof interfaces only. No library item, page, canonical plan, commit, or engine state was changed. The only files authored for the role are this dossier, its source ledger, its progress record, and the ignored source cache. The proposed dependency graph has no direct or transitive Category 4 edge.

The research source PDFs and extracted text are in the ignored role cache. Per-source SHA-256 hashes, exact read extents, source anchors, theorem assumptions, proof status and unresolved source gaps are in [sources.json](sources.json). The QMC manuscript carries the author's notice not to redistribute or post it electronically; this dossier paraphrases its results and the local ignored cache remains private.

## Category and dependency boundary

The role is Category 3. The proposals may depend on existing mathematics, independent numerical suppliers, and the earlier Category 1/2 interfaces. Statistical foundations such as MSF-01 through MSF-03, MSF-08, MSF-10, MSF-11, MSF-14 and SME-12 are planned earlier interfaces from the commission, not published library items yet. Each use below is conditional on those interfaces being authored and audited with their stated contracts. Category 4 model-learning results are neither prerequisites nor suppliers.

The proposed pairs are role-local labels. The canonical author should reconcile the labels and order with the other Bayesian-06 proposals before assigning final BCS numbers.

## Existing suppliers inspected

I read the actual item bodies, page bodies, hypotheses and proofs identified below, rather than relying only on filenames. Their hashes are in the supplier inventory in sources.json.

| Existing supplier | What the published contract supplies | Limit |
|---|---|---|
| Probability definitions and moments: def-identically-distributed-and-iid-random-variables; def-partial-sums-and-sample-means; def-moments-variance-and-covariance | Mutual IID, sample-mean notation, finite-moment definitions; no independence or integrability is silently added by the sample-mean notation. | No resampling law, influence expansion, bootstrap approximation or risk target. |
| IID limits: cor-iid-finite-variance-weak-law; thm-lindeberg-levy-iid-central-limit-theorem | For IID finite-variance real variables, exact sample-mean variance and weak-law bound; the IID CLT assumes positive finite variance. | Does not prove a conditional bootstrap CLT or a CV variance result. |
| Empirical/weak convergence: thm-empirical-measures-of-iid-euclidean-samples-converge-weakly; def-weak-convergence-of-borel-probability-measures; thm-portmanteau-theorem; thm-continuous-mapping-theorem; thm-slutsky-for-real-random-variables | Almost-sure weak convergence of empirical measures for IID Euclidean samples; bounded-continuous-test definition; Portmanteau, continuous mapping and real Slutsky contracts. | Empirical-measure convergence alone does not imply bootstrap consistency or uniform quantile coverage. |
| Weak-convergence pages: library/probability/weak-convergence-tightness-and-representation.md; library/probability/modes-of-convergence-for-random-variables.md | Existing probability-law and convergence machinery, including a Levy–Prokhorov metric and metrization theorem. | No statistical resampling or computational-error interface. |
| LLN/CLT and expectation pages: library/probability/weak-laws-and-series-of-independent-random-variables.md; library/probability/central-limit-theorems.md; library/probability/probability-spaces-random-variables-and-expectation.md | Published IID weak/strong laws, scalar and triangular-array CLTs, expectation, covariance and moment foundations. | No functional weak-dependent time-series CLT for the Hilbert-valued block-bootstrap setting. |
| Floating-point suppliers: def-standard-relative-floating-point-model-and-unit-roundoff; thm-floating-point-dot-product-componentwise-and-normwise-error-bounds; ex-a-floating-point-dot-product-error-bound | A relative unit-roundoff model and a sequential dot-product perturbation bound. The dot-product theorem assumes nu<1 and that products and intermediate sums stay in the normal range. | This is a local arithmetic bound, not a general roundoff analysis for arbitrary statistical software or algorithms. |
| Conditioning/stability: def-condition-number-of-a-nonsingular-linear-system; thm-householder-qr-is-backward-stable-in-the-standard-floating-point-model; library/linear-algebra/matrix-norms-condition-numbers-and-numerical-stability.md; library/linear-algebra/direct-matrix-factorisations-lu-cholesky-and-qr.md | Problem condition numbers, error propagation for linear systems, and QR/factorization interfaces. | The Householder QR stability theorem is explicitly conditional on the local reflector-step perturbation bound; it is not a blanket proof that every computed fit is stable. |
| Statistical task search | Searches of current items and library filenames/bodies found no published bootstrap, jackknife, permutation-test, CV, resampling, MLMC or QMC statistical supplier. | The earlier MSF/SME interfaces are planned prerequisites, not existing library artifacts. |

## Dependency-ordered proposed pairs

### BCS-01 — Resampling procedures and the sampling-unit contract

**Pages:** resampling-algorithms-and-sampling-units / resampling-algorithms-and-sampling-units-examples.

**Proposed interfaces:** def-resampling-scheme-and-resampling-unit, def-empirical-bootstrap-law, alg-iid-nonparametric-bootstrap, alg-delete-d-jackknife, and alg-subsampling-without-replacement.

**Scope and hypotheses:** Define an observed IID sample, the empirical law, conditional resampling, delete-d samples, and subsamples drawn without replacement. Make the sampling unit explicit: individual, pair, cluster, block or assignment unit. A method is only a candidate for inference after a separate validity result matches its resampling law to the data-generating/sampling design. Distinguish a conditional bootstrap distribution from a Bayesian posterior and from a design-based randomization distribution. The pair supplies algorithms and vocabulary, not universal validity.

**Proof route:** The empirical law is a probability measure; resampling with replacement has conditional IID draws from it, and deletion/subsampling are finite combinatorial constructions. Prove the algorithmic distribution statements directly. Statistical validity is deferred to BCS-02 through BCS-06.

**Examples:** IID empirical bootstrap and delete-one jackknife for a sample mean; cluster data where resampling people individually breaks the cluster unit; a time series where independent-point resampling destroys dependence.

**Requires:** MSF-01 statistical experiment and MSF-02 statistic/estimator; existing def-identically-distributed-and-iid-random-variables and def-partial-sums-and-sample-means. For design-based assignments, connect separately to SME-12 rather than changing the bootstrap definition.

**Sources:** S01, §§1–2 and §10, full printed pp. 1–35; S02, §§1–3, printed pp. 1–15.

### BCS-02 — IID bootstrap and jackknife validity for smooth statistics

**Pages:** iid-bootstrap-and-jackknife-validity / iid-bootstrap-and-jackknife-validity-examples.

**Proposed interfaces:** thm-bootstrap-consistency-for-smooth-finite-dimensional-statistics, thm-delete-one-jackknife-linearization, alg-percentile-basic-bc-and-bca-intervals, and thm-bootstrap-t-coverage-under-edgeworth-conditions.

**Scope and hypotheses:** Own a deliberately readable first-order theorem for IID Euclidean observations and a finite-dimensional functional such as g(E X), with finite covariance and a differentiable g whose derivative gives a nonzero finite asymptotic variance. The bootstrap theorem must state conditional weak convergence in probability and the exact centering/scaling used. State the jackknife as a delete-one linear approximation under the same smoothness/influence-function regime. Define percentile, basic, BC/BCa and bootstrap-t interval algorithms, but make interval guarantees separate from algorithm definitions.

**Proof route:** Use the existing IID CLT, a local conditional CLT for draws from the empirical law, the delta method and a conditional continuous-mapping/Slutsky argument. Derive the jackknife first-order expansion from the same derivative and identify the remainder that must be o_P(n^-1/2). A second-order/Edgeworth theorem for BCa or bootstrap-t needs its own smoothness, nonlattice and moment assumptions; do not infer that theorem from the 1985 review. The review explicitly omits most technical proofs.

**Failure and limits:** Ordinary bootstrap can be inconsistent for nonsmooth or boundary functionals, maxima/extremes and degenerate U-statistics. The jackknife's linearization can fail at a kink such as the sample median. BC/BCa transformation invariance is not a substitute for regularity. The source review describes examples and caveats but delegates many proofs to Efron (1982).

**Examples:** Mean versus absolute mean at zero; smooth g(mean); median under a point mass/tie pattern; a bootstrap interval under skewness illustrating the difference between point estimate and interval coverage.

**Requires:** BCS-01; MSF-02 and MSF-14 delta-method/asymptotic-normality interfaces; MSF-10 if coverage is claimed; existing IID CLT, moments and weak-convergence suppliers.

**Sources:** S01, §§1–5, §§7–10, printed pp. 1–35; S02, §§2–5 and Appendix, printed pp. 2–31.

### BCS-03 — Bootstrap failures, m-out-of-n refinements and uniform subsampling

**Pages:** bootstrap-failure-and-subsampling / bootstrap-failure-and-subsampling-examples.

**Proposed interfaces:** cex-ordinary-bootstrap-fails-for-nonsmooth-or-degenerate-statistics, alg-m-out-of-n-bootstrap, thm-m-out-of-n-validity-under-explicit-rate-conditions, alg-subsampling-quantile-inference, and thm-uniform-subsampling-and-bootstrap-coverage.

**Scope and hypotheses:** Present m-out-of-n resampling with replacement and subsampling without replacement as distinct algorithms. State m→∞ and m/n→0 where that is the source's regime; normalize roots at their actual sample sizes, not automatically at n. Give the explicit distributional/quantile regularity and uniformity assumptions of the chosen theorem. Separate pointwise bootstrap consistency from uniform coverage over a distribution class. Include the source examples where the ordinary bootstrap fails, including extremes, boundary/nonsmooth maps and degenerate statistics. Extrapolation can improve second-order accuracy only in the source's regular regime; it is not a universal repair.

**Proof route:** Use the complete proofs of the stated Bickel–Götze–van Zwet results. For uniform inference, use Romano–Shaikh's one-sided CDF comparison for subsampling and its feasible-root approximation condition, then their estimated-distribution metric plus uniform root-law condition for the bootstrap. State that weak convergence of estimated laws alone does not control quantiles; retain their Bernoulli boundary counterexample. The selection of m remains a method-specific tuning problem.

**Examples:** Ordinary bootstrap for a sample maximum; absolute mean at the null boundary; m-out-of-n/subsampling under a stated root; a weak-metric distribution approximation with failed uniform quantile coverage.

**Requires:** BCS-01 and BCS-02; MSF-14 for asymptotic roots; existing weak convergence/Portmanteau. Any empirical-process functional version must either use MSF-20 under its exact entropy/measurability hypotheses or prove the needed local version here.

**Sources:** S02, §§2–6 and Appendix proofs, printed pp. 2–31; S03, Theorems 2.1–2.4 and Appendix A.1–A.2, journal pp. 2800–2810 and 2818–2822 / PDF pp. 3–13 and 21–25. S03 supplementary application proofs were not read; see sources.json.

### BCS-04 — Moving and tapered block bootstrap for dependent data

**Pages:** block-bootstrap-for-dependent-data / block-bootstrap-for-dependent-data-examples.

**Proposed interfaces:** alg-moving-block-bootstrap, alg-tapered-block-bootstrap, def-l2-m-approximable-functional-time-series, thm-moving-block-bootstrap-for-sample-mean, and thm-tapered-block-bootstrap-for-sample-mean.

**Scope and hypotheses:** Preserve the source's L2-valued strictly stationary process and its exact L2-m-approximability/Assumption 1 conditions. For the main MBB/TBB mean and long-run-covariance results require b→∞ and b/sqrt(n)→0, as encoded by b^-1 + b n^-1/2 = o(1). TBB also needs the data-window assumptions. State separately the multiple-independent-series setting, sample proportions bounded away from zero and one, null-centering scheme, and continuity of the statistic as a functional of the basic deviation process. Do not generalize this theorem to arbitrary weak dependence or all time-series statistics.

**Proof route and source gap:** The source includes the MBB theorem proof and the validity proof for its two-sample functional mean test. It explicitly sends the Lemma 5.2 and TBB Theorem 2.2 proofs to the supplementary material. The author-hosted supplement returned HTTP 403; the arXiv source bundle contains only the main TeX and example PDFs. Therefore the TBB theorem's statement and assumptions were read, but its source proof was not. Before publication either supply a local proof or leave that theorem unclaimed. A functional delta-method extension needs the exact Hadamard/quasi-Hadamard conditions named in the paper.

**Missing earlier supplier:** The paper uses an external Hilbert-valued weak-dependence FCLT for the target sample mean. No current library item supplies that theorem. Add an earlier Category 2 probability supplier for the paper's L2-m-approximable class, or include and prove the target FCLT as an explicit prerequisite before claiming bootstrap validity. Do not silently treat IID CLT as sufficient.

**Examples:** MBB block concatenation, tapering/endpoint treatment, a null-centered two-series mean test, and an IID series where block resampling is valid but needlessly costly.

**Requires:** BCS-01; the new Category 2 Hilbert-valued L2-m-approximable FCLT supplier just described; existing weak-convergence/continuous-mapping suppliers. The pair has no Category 4 dependency.

**Sources:** S04, full main article, arXiv v3 PDF pp. 1–29 (Bernoulli 25 (2019), 3496–3526): Assumption 1, §2/Theorems 2.1–2.2, §3/Theorem 3.1 and Corollary 3.1, §5 proof appendix. TBB proof supplement is unavailable/unread.

### BCS-05 — Exact permutation tests and random-permutation Monte Carlo

**Pages:** finite-group-permutation-inference / finite-group-permutation-inference-examples.

**Proposed interfaces:** def-finite-group-permutation-test, alg-random-permutation-test-with-identity, thm-full-group-permutation-validity-with-ties, thm-random-permutation-plus-one-validity, and thm-randomized-boundary-exactness.

**Scope and hypotheses:** The null law must be invariant under a stated finite group action. Full-group ranks are finite-sample conservative under ties; a randomized boundary rule yields exact level. For a limited random draw of transformations, state the exact identity-inclusion, sampling-with/without-replacement and tie assumptions. The common (B+1)/(w+1) correction is weakly valid under the source conditions; the uncorrected B/w can be anti-conservative or zero. It is not an approximation theorem for arbitrary, non-invariant nulls.

**Proof route:** Prove orbit-conditional rank validity directly, accounting for stabilizers and tied statistics. Then condition on the random transformation set/identity and derive the corrected Monte Carlo rank bound. Keep exact design-based randomization under a sharp null (SME-12) distinct from an IID permutation test under distributional invariance (MSF-11).

**Examples:** Two-sample exchangeability, a group orbit with tied statistics, random permutations with and without identity, and a weak-null example that is not invariant.

**Requires:** MSF-02, MSF-08 and MSF-11; SME-12 only for the separate assignment-randomization interface.

**Sources:** S09, complete article, TEST 27 (2018), 811–825 / PDF pp. 1–15, especially Theorems 1–2 and Propositions 1–3 with their proofs.

### BCS-06 — Studentized permutation tests under weak parameter nulls

**Pages:** asymptotically-robust-permutation-tests / asymptotically-robust-permutation-tests-examples.

**Proposed interfaces:** def-two-sample-u-statistic-parameter, alg-studentized-two-sample-u-permutation-test, thm-studentized-wilcoxon-validity-under-heterogeneous-laws, and thm-studentized-u-statistic-permutation-validity.

**Scope and hypotheses:** State separate exact and asymptotic nulls. Under P=Q, exchangeability yields finite-sample exactness. Under a weaker equality of parameters such as theta(P)=theta(Q), use a studentized statistic with independent IID samples within each group, sample proportions converging to p in (0,1), positive limiting variance, and consistent variance estimates under P, Q and the pooled mixture. The complete two-sample U-statistic theorem must name the antisymmetric kernel and its finite-moment/nondegeneracy assumptions. Unstudentized Wilcoxon inference for equal means/medians is not licensed by the P=Q exactness theorem.

**Proof route and source boundary:** The 2011 Stanford report contains the full proof route for the Wilcoxon and antisymmetric two-sample U-statistic results: Hoeffding/Hájek projections, permutation distribution comparison and studentization. The 2013 paper extends the framework to general asymptotically linear estimators and k samples, but explicitly places all proofs in a supplement. That supplement was unavailable. Use its statements only to identify a possible extension; do not claim its proof was read or import the broader result without a local proof.

**Examples:** Same mean, unequal variances and shapes; P=Q versus equal-parameter null; unstudentized rank statistic size failure; studentized U-statistic with estimated scale.

**Requires:** BCS-05; MSF-02 and MSF-14 for estimator/asymptotic-linear interfaces; existing IID CLT, continuous mapping and Slutsky suppliers. No Category 4 result is required.

**Sources:** S07, full Stanford Technical Report 2011-09, PDF pp. 1–47, including Theorems 2.1–2.3, 3.1–3.2 and appendices A–B. S08, full main article, Annals of Statistics 41(2) (2013), 484–507 / PDF pp. 1–25; proofs are in the unread supplement.

### BCS-07 — Cross-validation targets, model selection and comparison uncertainty

**Pages:** cross-validation-risk-and-model-comparison / cross-validation-risk-and-model-comparison-examples.

**Proposed interfaces:** def-cross-validation-split-and-risk-target, alg-holdout-loo-lpo-v-fold-and-repeated-cv, def-risk-estimation-versus-model-identification, thm-cross-validation-risk-bias-at-training-size, and thm-no-universal-unbiased-k-fold-cv-variance-estimator.

**Scope and hypotheses:** Define prediction risk for an estimator trained on a specified training-sample size, a split protocol, and a candidate family. Cross-validation estimates the risk of the fitted procedure at the fold training size; that is not automatically full-sample risk. Distinguish selecting a risk-minimizing estimator from identifying a true model. Repeated/overlapping folds are dependent; model comparisons should preserve the paired, shared-sample structure. Time-series dependence needs blocked or otherwise design-matched splits. There is no universally best K across risks, model families and goals.

**Proof route:** Use Arlot–Celisse's full survey to state which conclusions are proved in particular frameworks and which are empirical. Prove Bengio–Grandvalet's no-unbiased-estimator result under its precise symmetric-algorithm, IID-data, fixed K-fold framework. The theorem rules out one universal estimator valid across all distributions; it does not rule out model-specific, asymptotic or biased variance estimators. Explain the three covariance components and why treating fold errors as independent can understate variance.

**Examples:** Risk-estimation versus model-identification goal; holdout and K-fold training-size bias; comparing two procedures on the same folds; a time-ordered sample where IID folds leak future dependence.

**Requires:** MSF-02 statistic/estimator and MSF-03 loss/risk; MSF-14 only for a specific asymptotic selection theorem. No Category 4 learning result is a prerequisite.

**Sources:** S05, full survey, Statistics Surveys 4 (2010), 40–79 / PDF pp. 1–40, especially §§2–8 and its separate estimation/identification analysis. S06, complete JMLR 5 (2004), 1089–1105 / PDF pp. 1–17, especially §§2–4 and Theorem 6 proof.

### BCS-08 — A ledger separating statistical, simulation and numerical error

**Pages:** statistical-and-computational-error-accounting / statistical-and-computational-error-accounting-examples.

**Proposed interfaces:** def-statistical-computational-discretization-and-roundoff-error, thm-successive-reference-error-decomposition, alg-independent-replication-error-estimate, and rem-error-variances-require-covariance-conditions.

**Scope and hypotheses:** Define successive exact reference quantities for a data estimator, a finite-B bootstrap/permutation approximation, a discretized simulation target, and a floating-point output. A pathwise triangle-inequality decomposition is available once every intermediate target is explicitly defined. A variance/MSE decomposition is stronger and must include covariance terms or independence/centering assumptions; never add named error variances by default. A CI across independent randomized QMC replicates estimates integration-randomization uncertainty, not data-sampling uncertainty. Finite B affects the bootstrap/permutation distribution estimate even when the data sample is fixed. QMC deterministic discrepancy error has no replicate-based confidence interval unless the method is randomized.

**Proof route:** Prove the nested identity by adding and subtracting each explicitly defined reference target, then use the triangle inequality. For independent IID replicates, prove the variance-of-the-average and sample-variance formula from the existing moment definitions. Propagate a proved floating-point perturbation bound through a locally Lipschitz statistic only on the stated normal-range/conditioning domain. Do not claim a generic end-to-end bound without local solver, optimizer, or arithmetic hypotheses.

**Examples:** Data-sampling error versus conditional bootstrap Monte Carlo error; permutation p-value resolution versus test-size uncertainty; Euler discretization bias versus path-simulation variance; RQMC replicate variance versus dataset uncertainty; dot-product roundoff versus estimator standard error.

**Requires:** BCS-01 and BCS-05 for finite resampling computation; BCS-07 for CV fold dependence; existing def-moments-variance-and-covariance, IID suppliers, def-standard-relative-floating-point-model-and-unit-roundoff and thm-floating-point-dot-product-componentwise-and-normwise-error-bounds. This pair precedes BCS-09 through BCS-11.

**Sources:** S01, §9 finite bootstrap sample size, printed pp. 29–30. S11, Chapter 17 §17.1, §17.4 and end note “Bootstrap t,” printed pp. 89–99 and 132–134 / PDF pp. 91–101 and 134–136. Existing floating-point supplier contracts inspected in the source inventory.

### BCS-09 — Multilevel Monte Carlo: telescoping estimator and cost theorem

**Pages:** multilevel-monte-carlo / multilevel-monte-carlo-examples.

**Proposed interfaces:** def-coupled-level-approximations, alg-multilevel-monte-carlo, thm-mlmc-cost-from-bias-variance-and-work-rates, and rem-mlmc-adaptive-bias-estimation-is-heuristic.

**Scope and hypotheses:** Define P_l on geometrically refined levels h_l=M^-l T and the telescoping identity E P_L=E P_0+sum_l E(P_l-P_(l-1)). Couple fine/coarse paths within each correction; level estimators must be independent across levels for the simple variance sum. State weak-bias rate |E(P_l-P)|≤c1 h_l^α with α≥1/2, correction variance ≤c2 N_l^-1 h_l^β with β>0, and cost ≤c3 N_l h_l^-1. State target MSE, level cap and allocation, and give the three complexity regimes: beta>1 gives O(epsilon^-2), beta=1 gives O(epsilon^-2 log(epsilon)^2), and beta<1 gives O(epsilon^(-2-(1-beta)/alpha)) under the source's constants.

**Proof route and numerical supplier gap:** Prove telescoping, allocate N_l proportional to sqrt(V_l/C_l), split the MSE budget between bias and sampling variance, and bound the geometric level sums. Giles supplies this abstract theorem and proof. His Euler/Lipschitz application uses weak and strong convergence results cited from other literature; it does not prove those SDE discretization rates. Any concrete Euler complexity theorem must add a Category 3 numerical-SDE supplier with the exact coefficient/payoff regularity assumptions, or remain an explicit conditional example. The adaptive algorithm's bias test is heuristic; the theorem assumes known rate constants and does not certify that estimator.

**Examples:** Euler payoff with source rates alpha=1, beta=1 (O(epsilon^-2 log^2 epsilon) cost versus O(epsilon^-3) standard MC); discontinuous payoff with beta=1/2 and alpha=1 (O(epsilon^-5/2)); an example where weak order or correction-variance rates fail.

**Requires:** BCS-08, existing IID/moment suppliers. The Euler-specific numerical convergence theorem is a planned Category 3 supplier, not an assumed external or Category 4 result.

**Sources:** S10, complete article, Operations Research 56(3) (2008), 607–617 / PDF pp. 1–11; Theorem 3.1 and full proof, PDF pp. 3–5 / journal pp. 609–611; §5 adaptive algorithm and its heuristic limitation, pp. 612–613.

### BCS-10 — Deterministic quasi-Monte Carlo and discrepancy guarantees

**Pages:** quasi-monte-carlo-discrepancy-and-rules / quasi-monte-carlo-discrepancy-and-rules-examples.

**Proposed interfaces:** def-star-discrepancy-and-digital-net, def-hardykrause-variation, alg-digital-net-and-lattice-rule, thm-koksma-hlawka-integration-bound, and thm-uniform-distribution-integrates-riemann-functions.

**Scope and hypotheses:** Define the unit-cube integral and equal-weight quadrature, star discrepancy, low-discrepancy digital nets/sequences and lattice rules. State the Koksma–Hlawka bound only for finite Hardy–Krause variation; state the Riemann-integrability hypothesis for the uniform-distribution convergence theorem. Explain that the discrepancy/variation quantities are generally unknown or expensive, the bound may be pessimistic, and unbounded/infinite-variation integrands can fail to converge even when integrable. Effective dimension is a useful empirical structure, not a universal regularity theorem.

**Proof route and gap:** Give a local one-dimensional summation-by-parts proof and a multidimensional route by anchored-box discrepancy integration by parts/induction on dimension, with the exact Hardy–Krause boundary convention. Owen states the Koksma–Hlawka theorem but attributes the full d-dimensional proof to Hlawka/Kuipers–Niederreiter; its proof is not reproduced. A canonical theorem therefore needs that local derivation or an explicitly approved proof supplier. Construction-specific Halton/digital-net/lattice discrepancy rates also cite external results; only include rates whose proof route and exact dimension/base/sample-size conditions are supplied.

**Examples:** A smooth bounded-variation integral; an unbounded inverse-CDF transform; bad high-dimensional projections; a digital net at powers of its base versus arbitrary n.

**Requires:** BCS-08 and standard integration/probability foundations. No statistical learning result is required.

**Sources:** S11, complete Chapters 15–16, printed pp. 3–88 / PDF pp. 5–90, including discrepancy, Koksma–Hlawka, Halton/digital nets, lattice rules, periodization and limitations. Many construction theorem proofs are cited externally, as recorded in sources.json.

### BCS-11 — Randomized quasi-Monte Carlo and error estimation

**Pages:** randomized-quasi-monte-carlo-and-replicates / randomized-quasi-monte-carlo-and-replicates-examples.

**Proposed interfaces:** def-randomized-quasi-monte-carlo-rule, alg-nested-uniform-scrambling, alg-independent-rqmc-replicates, thm-rqmc-unbiasedness-and-replicate-variance, and thm-scrambled-net-variance-under-source-conditions.

**Scope and hypotheses:** An RQMC point is marginally uniform while the point set retains low discrepancy. Marginal uniformity proves unbiasedness; independent randomizations of the complete point set permit a between-replicate variance estimate. State the number of points n separately from the number of independent randomizations R. For nested uniform scrambling of a (0,m,d)-net in base b with b≥max(d,2), Owen gives a finite-variance bound no worse than e times the ordinary Monte Carlo variance; a smooth-integrand theorem gives a faster variance rate under its mixed-derivative condition. Neither statement grants a universal CLT: the source says a CLT is known only under narrower scrambling/smoothness conditions and not for general t>0 nets. Small R can produce poor interval coverage; show the source's bimodal-replicate example.

**Proof route and external gaps:** Prove unbiasedness and the independent-replicate variance formula directly from uniform marginals and IID randomizations. The e-factor scrambled-net variance theorem and smooth O(n^-3 polylog) theorem refer to Owen (1997a,b); either prove their ANOVA/scramble lemmas locally or keep them as source-supported statements with a recorded proof obligation. The bootstrap-t end note concerns bootstrap of independent replicate estimates, not a general bootstrap theorem for the original data.

**MLQMC boundary:** Giles says MLMC can be combined with QMC in principle, but these assigned sources do not establish a general MLQMC complexity theorem. Any combined method needs its own coupling, unbiasedness, levelwise variance and randomized-replicate error proof; keep it as an open extension, not a consequence of either theorem.

**Examples:** One full randomization vs R independent randomizations; nested uniform scramble vs digital shift; smooth and singular integrands; finite-R interval under a skewed replicate distribution.

**Requires:** BCS-08 and BCS-10; existing IID, moments, weak-convergence and Slutsky suppliers. No Category 4 dependency.

**Sources:** S11, complete Chapter 17, printed pp. 89–138 / PDF pp. 91–140, including §§17.1–17.14 and the “Bootstrap t” end note. The source is an author manuscript, not a redistributable publication.

## Topic-to-pair and source coverage

| Assignment topic | Pair(s) | Source coverage | Main proof/validity boundary |
|---|---|---|---|
| Bootstrap algorithms and sampling unit | BCS-01 | S01, S02 | Algorithm defines a conditional law; sampling design determines the unit. |
| IID bootstrap and jackknife validity | BCS-02 | S01, S02 | Smooth finite-dimensional statistic; the 1985 review omits most proofs. |
| Bootstrap failures, BC/BCa and other refinements | BCS-02–03 | S01, S02, S03 | Nonregular examples invalidate ordinary bootstrap; refinement needs stronger expansion assumptions. |
| m-out-of-n bootstrap and subsampling | BCS-01, BCS-03 | S02, S03 | m→∞, m/n→0 and root/quantile conditions; m selection remains hard. |
| Dependent block bootstrap | BCS-04 | S01, S04 | L2-m-approximability and block-rate assumptions; TBB proof supplement unavailable. |
| Exact and Monte Carlo permutation inference | BCS-05 | S09; MSF-11/SME-12 interfaces | Finite-group invariance or known assignment law; ties and identity inclusion matter. |
| Asymptotically robust permutation tests | BCS-06 | S07, S08 | Studentization and variance consistency under weak parameter null; 2013 supplement proof not read. |
| Cross-validation, model comparison and uncertainty | BCS-07 | S05, S06 | Risk-at-training-size differs from model identification; no universal unbiased K-fold variance estimator. |
| Numerical/statistical/computational error | BCS-08 | S01, S11; floating-point suppliers | Keep sampling, finite resampling, discretization and rounding layers separate; no free independence assumption. |
| Multilevel Monte Carlo | BCS-09 | S10 | Abstract rate theorem proved; SDE-specific weak/strong rates are external prerequisites. |
| Deterministic quasi-Monte Carlo | BCS-10 | S11 Chapters 15–16 | Koksma–Hlawka requires finite HK variation; deterministic QMC gives no generic error bar. |
| Randomized quasi-Monte Carlo | BCS-11 | S11 Chapter 17 | Marginal uniformity gives unbiasedness; replicated randomizations estimate only their own computational error. |

## Critical gaps and proof obligations for integration

1. **TBB supplement:** the local block-bootstrap cache contains the complete 29-page arXiv main paper, not the supplementary file. The source's TBB Theorem 2.2 and Lemma 5.2 proofs are explicitly deferred. The author-hosted supplement request returned HTTP 403, and the arXiv source archive listing did not include it. Do not mark these proofs read.
2. **Functional time-series limit:** no current library supplier gives the L2-m-approximable Hilbert-valued FCLT used by the block-bootstrap paper. Plan it earlier in Category 2 or prove the needed target theorem locally before asserting bootstrap validity.
3. **2013 robust permutation supplement:** the 2013 article's main text is complete, but its proofs are in a separate supplement that could not be fetched from Project Euclid's security-challenged endpoint. The 2011 report is a full proof source for the narrower two-sample U-statistic results, not a replacement for every 2013 asymptotically linear/k-sample theorem.
4. **Uniform bootstrap limits:** state the distribution class, root scaling, one- or two-sided CDF comparison, feasible-root error and quantile conditions. Pointwise consistency or weak convergence in a metric is not enough for uniform coverage.
5. **BCa/second-order bootstrap theory:** the review describes BC/BCa and studentized intervals but omits proofs. A theorem requires a separately stated Edgeworth/smoothness/moment regime and local proof.
6. **CV uncertainty:** Bengio–Grandvalet's result is universal over distributions for a fixed K-fold framework. Do not paraphrase it as “variance cannot be estimated,” or treat K fold errors as independent replications.
7. **MLMC applications:** keep the proven abstract rate-complexity theorem separate from Euler SDE rate assumptions and from Giles's heuristic adaptive bias stopping rule.
8. **QMC/RQMC proof scope:** Koksma–Hlawka, scrambled-net variance rates and construction-specific discrepancy bounds have external proofs in Owen's source. The planned page must either provide the local proof route or state a narrower result whose proof is actually supplied. No universal QMC rate, RQMC CLT, or MLQMC complexity result is available from this source set.

## Reader handoff

The detailed local source cache, full-text read ranges, source hashes, checked supplier hashes, rights notes and blocked-supplement records are in [sources.json](sources.json). The machine-readable completion record is [progress.json](progress.json).
