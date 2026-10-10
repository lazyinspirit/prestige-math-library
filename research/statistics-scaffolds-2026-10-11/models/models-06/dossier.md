# Models-06 source dossier

**Role:** models-06 source reader. **State:** completed source research and draft planning evidence only. No library item, canonical plan, workflow, or setting was changed.

**Assigned scope:** multiple testing, familywise and false-discovery-rate control, simultaneous and selective inference, reproducibility; sequential tests, martingale confidence sequences, optional stopping, group-sequential designs, and basic adaptive experiments. Learning and bandit allocation remain reserved for category 4.

The source manifest at [sources.json](sources.json) records every source URL and authority, PDF or HTML hash, complete-extraction hash, full page count, exact read ranges, proof anchors, and reading limits. All 14 acquired PDFs were extracted page by page with PyMuPDF fitz 1.26.4; the additional NAP Executive Summary was extracted from every public-reader page block with Python html.parser. Extraction is not treated as reading.

## Findings and dependency boundary

The existing library has strong probability and martingale prerequisites but no statistical-inference supplier for valid p-values, familywise or FDR error, simultaneous statistical confidence, selective inference, group-sequential tests, or adaptive tests. Statistical tests and confidence sets are proposed in the foundations-02 dossier, not present as library items. Category-2 proposals below may use existing probability and linear-algebra items and the planned category-1 interfaces listed below. They introduce their own category-2 error-rate, p-value, and sequential-design definitions where category 1 does not yet propose them.

**Planned category-1 interfaces, not existing suppliers:**

- foundations-01 F01-P01, proposed **def-statistical-experiment-and-identifiability**, and F01-P04, proposed **def-dominated-statistical-model-and-likelihood**. The sufficiency and exponential-family suppliers proposed elsewhere in that dossier are not required here.
- foundations-02 F2-P05, proposed **def-tests-size-level-power-and-randomization**; and F2-P08, proposed **def-confidence-sets-from-pivots-and-test-inversion**.
- The current foundations-02 dossier does not propose a general calibrated-p-value definition. M06-P01 therefore defines null-valid, superuniform p-values locally. It does not use a category-3 or category-4 method.

There is no dependency on another models assignment, Bayesian statistics, computational statistics, machine learning, response-adaptive allocation, or bandit learning. The polyhedral selective-inference proposal uses a Gaussian event and contrast only; lasso is not a supplier. The adaptive-experiment proposal changes only the analysis or sample size of a prespecified primary test; it does not learn treatment allocation.

## Existing library supplier audit

I inspected the bodies of the following pages and the exact listed item bodies. IDs below are existing published suppliers, not names inferred from a title or plan.

| Existing page and exact suppliers | Reusable content | Boundary |
|---|---|---|
| library/probability/probability-spaces-random-variables-and-expectation.md: **lem-probability-measure-basic-identities**, **def-random-element-and-real-random-variable**, **def-law-or-distribution-of-a-random-element**, **def-cumulative-distribution-function-of-a-random-variable**, **def-moments-variance-and-covariance** | General probability-space laws, random variables, CDFs, expectations and moments. **lem-probability-measure-basic-identities** explicitly proves finite and countable probability union bounds. | It contains no statistical model, null, test, p-value, FWER/FDR, confidence coverage or inference claim. |
| library/measure-theory/measures-and-their-basic-properties.md: **thm-finite-and-countable-subadditivity-of-measures** | For arbitrary measurable events under a measure, the measure of a countable union is at most the sum of event measures. This is the general event inequality used by Bonferroni proofs. | It is a measure theorem, not a testing procedure. |
| library/probability/independence-borel-cantelli-and-zero-one-laws.md: **def-independent-random-elements**, **thm-rectangle-criterion-for-independent-random-elements**, **thm-independent-random-elements-have-product-joint-law** | The actual mutual-independence and product-law interfaces used to state independent p-value or independent-stage assumptions. | Pairwise independence alone is not substituted for mutual independence. Independence is an assumption of BH and combination-test results, not a conclusion of design adaptation. |
| library/probability/conditional-expectation.md: **def-conditional-expectation-as-an-ae-class**, **thm-tower-property-of-conditional-expectation**, **thm-taking-out-what-is-known**, **cor-conditional-variance-decomposition** | Conditional event identities, tower property, and variance decomposition used for the conditional-error proof, the conditional Gaussian decomposition, and martingale arguments. | The page records AC for Radon–Nikodym conditional-expectation existence. No regular conditional distribution is supplied by that page. |
| library/probability/discrete-time-martingales.md: **def-filtration-and-filtered-probability-space**, **def-adapted-and-integrable-stochastic-process**, **def-martingale-submartingale-and-supermartingale**, **def-martingale-difference-sequence**, **def-predictable-discrete-time-process**, **thm-bounded-predictable-transforms-preserve-martingales** | Discrete-time information flow, integrability/adaptedness, martingale signs, differences, and bounded predictable transforms. | The definitions do not imply nonnegativity or a unit initial mean; these are added in a test-supermartingale statement. |
| library/probability/stopping-times-and-optional-stopping.md: **def-discrete-stopping-time**, **def-stopped-random-variable-and-stopped-process**, **thm-optional-sampling-for-bounded-stopping-times**, **thm-optional-stopping-under-uniform-integrability**, **thm-optional-stopping-with-integrable-time-and-bounded-increments**, **thm-optional-stopping-with-a-dominating-integrable-variable**, **rem-optional-stopping-requires-a-passage-to-the-limit-hypothesis** | Literal stopping-time event tests, bounded optional sampling, and distinct hypotheses for unbounded stopping. The bounded theorem gives the supermartingale expectation inequality needed at a finite first-crossing time. | The page explicitly distinguishes bounded from almost-surely finite stopping. Almost-sure finiteness or integrable time alone is not an optional-stopping theorem. The Ville proof below uses only bounded stops and a monotone limit of crossing events. |
| library/probability/martingale-inequalities-and-convergence.md: **thm-doob-l1-maximal-inequality**, **thm-doob-lp-maximal-inequality**, **lem-conditional-hoeffding-bound-for-bounded-martingale-differences**, **thm-azuma-hoeffding-inequality** | Finite-horizon nonnegative-submartingale maximum bounds, Lp maximum bounds, conditional Hoeffding mgf, and fixed-terminal-time Azuma–Hoeffding. | Doob L1 is stated for nonnegative submartingales, not nonnegative supermartingales. Azuma–Hoeffding as published is a fixed-time tail bound, not an anytime guarantee. Neither is silently used as Ville’s inequality. |
| library/probability/discrete-time-martingales-examples.md and library/probability/stopping-times-and-optional-stopping-examples.md: **ex-stopping-a-likelihood-ratio-martingale**, **cex-optional-stopping-fails-for-unbounded-simple-random-walk-hitting-time**, **cex-integrable-stopping-time-alone-does-not-suffice-for-arbitrary-martingale-increments** | The likelihood-ratio example proves the finite-horizon density-process identity and bounded-stop change-of-measure formula. The counterexamples show why unbounded optional stopping needs an explicit limit hypothesis. | The existing likelihood-ratio example is finite-horizon; a new sequential likelihood-ratio page must state consistency/density-process hypotheses for every time. |
| library/probability/weak-convergence-tightness-and-representation.md and library/probability/central-limit-theorems.md: **def-standard-normal-and-normal-laws**, **def-multivariate-normal-law** | Scalar and multivariate Gaussian-law conventions for the known-variance polyhedral and canonical group-sequential examples. | No multiple-testing, selective-inference, or group-sequential rejection boundary is supplied. |
| library/linear-algebra/inner-product-spaces-and-orthogonality.md: **def-inner-product-space**, **prop-standard-coordinate-inner-products**, **def-orthogonal-projection**, **prop-orthogonal-projection-formula-and-linearity** | Finite-dimensional Euclidean inner products and orthogonal decomposition used for the Gaussian polyhedral selection argument. | The Gaussian selection event and its truncation interval remain new statistical work. |

A search through existing item bodies and statistical library pages for p-value, FWER, FDR, multiplicity, simultaneous inference, selective inference, confidence sequences, alpha spending, and adaptive-testing procedures found no such suppliers. The existing **thm-the-bonferroni-inequalities** is the finite combinatorial inclusion-exclusion/sieve inequality; it is not the Bonferroni multiple-testing procedure. The existing false statement **fs-a-bonferroni-truncation-is-exact** is also combinatorial and supplies no inferential result. The correct existing reusable probability interface for statistical Bonferroni is subadditivity, not either of those sieve items.

## Proposed dependency-ordered A/B pairs

All IDs below are proposals, not authored or validated library items. Each A page is a reusable definition or theorem supplier. B pages are worked examples or counterexamples; they are not cross-page suppliers. Algorithms are specified separately from the proved property they satisfy.

### M06-P01 — Valid p-values and error-rate definitions

**A proposal:** **def-null-valid-p-value-and-fwer-fdr**. For each test \(H_{0i}\) and each parameter \(\theta\in\Theta_{0i}\), define a valid p-value \(P_i\) by
\[
\Pr_\theta(P_i\le u)\le u\quad(0\le u\le1).
\]
A continuous exact null p-value is uniform; discrete nonrandomized p-values are generally superuniform, not necessarily uniform. For a finite family, let \(I_0(\theta)=\{i:\theta\in\Theta_{0i}\}\), \(V=\sum_{i\in I_0}1\{i\text{ rejected}\}\), and \(R=\#\{i\text{ rejected}\}\). Define FWER as \(\Pr_\theta(V\ge1)\), and FDR as \(\mathbb E_\theta[V/(R\vee1)]\). The direct relation \(\mathrm{FDR}\le\mathrm{FWER}\) follows from \(V/(R\vee1)\le1\{V\ge1\}\); under the global null the two are equal. These are different operating characteristics: FDR control alone does not claim FWER control at the same level.

**B proposal:** **ex-discrete-superuniform-p-value-and-global-null**. Work a discrete null p-value whose mass is conservative at some cutoffs, then compare the two error rates under a global null and a mixed configuration.

**Dependencies:** planned foundations-01 statistical experiment/model interface and planned foundations-02 test interface; existing probability laws and probability union bound. No p-value validity claim may be inferred from a test’s name alone.

**Evidence/proof route:** Benjamini–Hochberg 1995, PDF p. 4, defines FDR using \(Q=V/R\) with \(Q=0\) when \(R=0\), identifies FDR with weak FWER under the global null, and notes FDR is bounded by FWER. The displayed inequality above is proved directly from the definitions.

### M06-P02 — Bonferroni strong FWER control

**A proposal:** **thm-bonferroni-familywise-error-control**. Given fixed numbers \(a_i\ge0\) with \(\sum_{i=1}^m a_i\le\alpha\), reject \(H_{0i}\) only when \(P_i\le a_i\). For every parameter configuration and arbitrary dependence,
\[
\Pr_\theta(V\ge1)\le\sum_{i\in I_0(\theta)}\Pr_\theta(P_i\le a_i)\le\sum_{i\in I_0(\theta)}a_i\le\alpha.
\]
The equal-weight rule uses \(a_i=\alpha/m\). State the family before seeing the p-values; do not select \(m\) after looking at results.

**B proposal:** **ex-bonferroni-test-family**. Hand-calculate adjusted cutoffs for a small family and contrast with unadjusted repeated tests under independent global-null p-values.

**Dependencies:** M06-P01 valid p-values; existing **lem-probability-measure-basic-identities** or **thm-finite-and-countable-subadditivity-of-measures**.

**Evidence/proof route:** Goeman–Solari 2010, PDF pp. 8–9, states null p-value validity and proves the Bonferroni single-step property. The complete proof is the finite union bound above. No independence assumption is needed.

### M06-P03 — Holm step-down strong FWER control

**A proposal:** **thm-holm-stepdown-strong-fwer**. Sort the p-values \(P_{(1)}\le\cdots\le P_{(m)}\), with a fixed tie convention. At step \(j\), compare \(P_{(j)}\) to \(\alpha/(m-j+1)\); stop and retain all remaining hypotheses at the first failure; reject the preceding hypotheses if all steps pass. For any configuration of true and false nulls and any dependence, Holm strongly controls FWER at \(\alpha\).

**Proof route:** Let \(j\) be the earliest rank occupied by a true null. If any true null is rejected by this step-down rule, then that earliest true null is rejected. All \(m_0=|I_0|\) true nulls lie among ranks \(j,\ldots,m\), so \(m-j+1\ge m_0\). The rejection event is therefore contained in \(\bigcup_{i\in I_0}\{P_i\le\alpha/m_0\}\). Validity and subadditivity give probability at most \(m_0(\alpha/m_0)=\alpha\). This direct proof must accompany the algorithm.

**B proposal:** **ex-holm-versus-unadjusted-testing**. Work four ordered p-values with an early stop; calculate which hypotheses Holm rejects, and separately calculate the exact inflation from unadjusted independent global-null tests.

**Dependencies:** M06-P01 and P02; M06-P02 may be cited for its event-union proof. The p-values may be dependent.

**Evidence:** Goeman–Solari, Theorem 1 and induction proof, PDF p. 5, and Holm specialization PDF p. 9. The source’s general successor-function theorem is not needed for the ordinary finite Holm proof and does not authorize importing graphical gatekeeping procedures.

### M06-P04 — Bonferroni simultaneous confidence sets

**A proposal:** **thm-bonferroni-simultaneous-coverage**. For a fixed finite target vector \((\theta_1,\dots,\theta_m)\), suppose \(C_i(X)\) has marginal coverage at least \(1-\alpha_i\), uniformly over the stated model, and \(\sum_i\alpha_i\le\alpha\). Then
\[
\Pr_\theta(\theta_i\in C_i(X)\text{ for every }i)\ge1-\alpha.
\]
No independence is required. If each interval is obtained by test inversion, state its individual coverage hypothesis before combining it. Do not use “simultaneous” for a collection of pointwise intervals without this joint statement.

**B proposal:** **ex-bonferroni-simultaneous-normal-intervals**. Under an explicitly stated normal, known-variance model, use two-sided per-coordinate \(\alpha/m\) intervals and check the joint coverage by the union bound. A t interval is excluded unless its distributional assumptions and derivation are supplied by the relevant category-1 source.

**Dependencies:** planned foundations-02 F2-P08 test-inversion/confidence-set supplier; existing probability subadditivity and normal law.

**Proof route/evidence:** The joint failure event is a finite union of marginal failure events. The union bound proves the claim. No separate simultaneous-confidence source is needed for that proof; the precise marginal interval examples must have their own valid coverage derivation.

### M06-P05 — Benjamini–Hochberg under independent tests

**A proposal:** **thm-benjamini-hochberg-independent-fdr**. For \(m\) mutually independent p-values, each true-null p-value exactly \(U(0,1)\), and arbitrary false-null p-value distributions, define
\[
k=\max\{i:P_{(i)}\le iq/m\},\qquad \text{reject ranks }1,\ldots,k.
\]
For \(q\in(0,1)\), the FDR is at most \((m_0/m)q\le q\), where \(m_0\) is the number of true nulls. The source theorem’s continuous-uniform condition is the initial library statement. A discrete superuniform extension should be included only with its own leave-one-out proof, not silently read into the original paper.

**Proof route:** Write \(Q=V/(R\vee1)\), condition on the false-null p-values, and use the independence of true-null uniforms. The Benjamini–Hochberg appendix proves the conditional lemma by induction on \(m\), conditioning on the largest true-null p-value, splitting its possible values at the data-dependent boundary, and applying the induction hypothesis to the remaining \(m-1\) values. Integrating the lemma over the false-null p-values gives \(\mathbb E(Q)\le(m_0/m)q\). This proof is longer than the FWER union proof and should not be replaced by a simulation.

**B proposal:** **ex-bh-independent-family**. Order a short vector of independent continuous null p-values and show the BH rank threshold. Use this only to illustrate the algorithm; calculate FDR from the probability model if a numerical guarantee is claimed.

**Dependencies:** M06-P01 and independent random-element/product-law supplier; planned foundations-02 test interface. The \(m_0/m\) factor does not make FDR equal FWER except at the global null.

**Evidence/cross-check:** Benjamini–Hochberg 1995, Theorem 1, PDF p. 6 / journal p. 293, and complete Appendix A proof, PDF pp. 12–13 / journal pp. 299–300. The page images of the author-hosted PDF were checked to confirm the OCR-damaged step-up formula and induction equations. Benjamini–Yekutieli 2001 independently derives the independent-case bound, PDF pp. 16–17.

### M06-P06 — BY arbitrary-dependence and BH under PRDS

**A proposal:** **thm-by-fdr-under-arbitrary-dependence-and-bh-under-prds**. Keep two theorems and two conditions separate.

1. For arbitrary dependence among valid p-values, use the BY cutoff \(P_{(k)}\le kq/(mH_m)\), where \(H_m=\sum_{j=1}^m1/j\). Then FDR is at most \((m_0/m)q\).
2. For p-values that are PRDS on the true-null subset, the unmodified BH cutoff \(kq/m\) has FDR at most \((m_0/m)q\). PRDS means that for each true-null coordinate \(i\), the conditional probability of every increasing subset of the p-vector is nondecreasing in \(P_i\), under the source’s regular conditional formulation. Do not replace PRDS with “positive pairwise correlations”; the source’s Gaussian sufficient conditions are narrower, and two-sided dependent tests are not generally covered.

**Proof routes:** For BY, decompose FDR as a sum over true nulls and rejection counts \(k\). On the event a true null is rejected with \(R=k\), its p-value is at most \(kq/(mH_m)\). Superuniformity gives
\[
\mathrm{FDR}\le\sum_{i\in I_0}\sum_{k=1}^m\frac1k\Pr(P_i\le kq/(mH_m))\le \frac{m_0q}{mH_m}\sum_{k=1}^m\frac1k=\frac{m_0}{m}q.
\]
This argument makes no dependence assumption. The PRDS result instead uses the paper’s monotonicity-event argument and is not proved by that arbitrary-dependence calculation.

**B proposal:** **ex-bh-prds-versus-by-arbitrary-dependence**. Show the BH and BY thresholds for a fixed \(m,q\) and explain exactly which dependence premise is available. Do not assert that BH fails or succeeds under a made-up joint distribution.

**Dependencies:** M06-P01 and harmonic-number arithmetic; no statistical independence required for the BY rule. The PRDS result additionally requires the precise PRDS hypothesis.

**Evidence:** Benjamini–Yekutieli 2001, PRDS definition and BH theorem PDF p. 4; arbitrary-dependence BY rule PDF p. 5; PRDS proof PDF pp. 13–16; BY harmonic-factor proof PDF pp. 18–19. The full paper was read. It explicitly warns that its general PRDS Gaussian sufficient condition does not cover all two-sided or pairwise comparison settings, PDF p. 18.

### M06-P07 — Selective inference after a polyhedral selection event

**A proposal:** **thm-truncated-normal-selective-inference-for-polyhedral-events**. Define selective type-I error as \(\Pr_\mu(\text{reject }H_0\mid S)\) for the stated selection event \(S\), not as ordinary unconditional error or familywise control. In the finite-sample theorem let
\[
Y\sim N_n(\mu,\sigma^2I_n),\quad S=\{AY\le b\},\quad \sigma>0\text{ known},\quad \eta\ne0.
\]
Decompose \(T=\eta^TY\) and \(Z=(I-\eta\eta^T/(\eta^T\eta))Y\). Before selection, \(T\) and \(Z\) are independent; conditional on \(Z=z\) and \(S\), \(T\) is normal with mean \(\eta^T\mu\) and variance \(\sigma^2\eta^T\eta\), truncated to the interval \([V^-(z),V^+(z)]\) obtained by substituting \(Y=z+\eta T/(\eta^T\eta)\) into \(AY\le b\). Writing \(\theta=\eta^T\mu\), \(s_\eta=\sigma\|\eta\|\), and \(L=V^-(z), U=V^+(z)\), the conditional pivot is
\[
\frac{\Phi((T-\theta)/s_\eta)-\Phi((L-\theta)/s_\eta)}{\Phi((U-\theta)/s_\eta)-\Phi((L-\theta)/s_\eta)}.
\]
The truncated-normal probability integral transform is Uniform(0,1) conditional on \(Z=z,S\), so its inversion gives exact selective tests and confidence sets wherever the conditioning event has positive probability.

**B proposal:** **ex-selective-inference-after-choosing-the-larger-of-two-means**. With \(Y_1,Y_2\) independent normal observations of known common variance and selection event \(Y_1\ge Y_2\), condition on \(Z=Y_2\). The selected \(T=Y_1\) is a lower-truncated normal. Compute its truncated CDF and invert it. This is a simple polyhedral event, not a lasso/ML dependency.

**Proof route/evidence:** Lee et al. 2016, Lemma 4.1 and Proposition 4.2 characterize the selection event, Lemma 5.1 derives the truncation interval, Theorem 5.2 proves the conditional uniform pivot, and Theorem 6.1 plus Appendix A invert it to exact intervals. The complete article was read. Fithian–Sun–Taylor 2017 provides an independent treatment of selective type-I error and test/CI duality in the read pages. Unknown variance, nonlinear/nonpolyhedral selection, and simultaneous guarantees across a data-selected family are outside this statement.

**Dependencies:** planned foundations-01 experiment/model supplier; planned foundations-02 test and confidence-set suppliers; existing multivariate normal and Euclidean projection suppliers. No FDR claim follows from one conditionally valid selected contrast.

### M06-P08 — Reproducibility, replication, transparency, and interpretation

**A proposal:** **def-computational-reproducibility-replicability-and-transparent-reporting**. Use the National Academies’ Chapter 3 definitions explicitly: computational reproducibility compares results using the same input data, code/computational methods, and analysis conditions; replicability compares studies aimed at the same question using each study’s own new data; generalizability concerns different contexts or populations. Record that these words vary across fields and the library adopts this stated convention. Distinguish reproducibility of a computation from correctness of its conclusion.

A transparent report should identify data and code where lawful and ethical, computational environment and methods, data cleaning/curation, analysis decisions and when they were made, whether the study is exploratory or confirmatory, and relevant uncertainty. These practices are recommendations and definitions, not a theorem guaranteeing valid inference or replication. The National Academies explicitly notes that exact computational reproduction can repeat an error and that rigorously performed, correctly analyzed, transparently reported work can still fail to replicate.

**B proposal:** **ex-transparent-analysis-plan-and-reproduction**. Use the National Academies’ data-cleaning/curation example: teams begin with the same raw dataset but different documented grouping and analysis decisions produce different reported results. Separate whether the original computation can be reproduced from whether an independent study replicates the scientific result. This is an interpretive example; no error probability is claimed.

**Dependencies:** none beyond model/test terminology and probability. No open-data requirement overrides privacy, human-subject, contractual, or other legal restrictions.

**Evidence:** NASEM Chapter 3, Conclusion 3-1, printed pp. 45–46; measurement and variation discussion pp. 46–52; Box 3-2 and Finding 3-1, pp. 53–54. The complete Chapter 3 was read from the full institutional PDF. Ioannidis 2005 was read in full, pp. 1–6, as context on study selection and reporting. Its PPV formula is recorded in sources.json as a read source anchor but is not imported as a category-2 dependency. PLOS issued a 2022 correction to that article’s bias Table 2; the corrected table is not used.

### M06-P09 — Test supermartingales, Ville’s inequality, and optional stopping

**A proposal:** **thm-ville-bound-for-test-supermartingales**. Under every distribution in a null family, let \(M_t\ge0\) be an adapted integrable discrete-time supermartingale with \(\mathbb E M_0\le1\). Define \(\tau=\inf\{t\ge0:M_t\ge1/\alpha\}\). Then
\[
\Pr(\tau<\infty)\le\alpha.
\]
A threshold rule is therefore a valid sequential test at every stopping time: the test may stop when the statistic crosses, but it cannot claim that a fixed-time level-\(\alpha\) p-value remains valid under arbitrary repeated peeking.

**Proof route:** For each deterministic \(N\), \(\tau\wedge N\) is bounded. Bounded optional sampling for a supermartingale gives \(\mathbb E M_{\tau\wedge N}\le\mathbb E M_0\le1\). On \(\{\tau\le N\}\), the stopped process is at least \(1/\alpha\); off that event it is nonnegative. Therefore \(\Pr(\tau\le N)\le\alpha\). The events increase with \(N\); continuity from below yields the infinite-horizon bound. This proof does not invoke unbounded optional stopping.

**B proposal:** **cex-repeated-fixed-level-tests-inflate-type-i**. Under a global null let \(P_1,\dots,P_K\) be independent uniform p-values from \(K\) fresh looks and stop at the first \(P_j\le\alpha\). The false-rejection probability is \(1-(1-\alpha)^K>\alpha\) for \(K>1\). Label this particular model clearly; it illustrates why repeated ordinary tests need a sequential adjustment, not that all optional stopping invalidates all inference.

**Dependencies:** existing filtration/martingale definitions and **thm-optional-sampling-for-bounded-stopping-times**; **lem-probability-measure-basic-identities** for continuity from below if used. The new property is Ville’s finite-crossing argument.

**Evidence:** Howard et al. 2020, Definition 1, Theorem 1, and Ville proof, read PDF pp. 9–18 and p. 45; Wolpert Duke notes, read PDF pp. 1–5 and 13–16; existing bounded optional-sampling statement and optional-stopping counterexamples. Howard’s continuous-time extension has additional usual filtration and path regularity requirements; this proposal is discrete time.

### M06-P10 — Sequential likelihood-ratio test

**A proposal:** **def-sequential-likelihood-ratio-test-and-type-i-bound**. For simple \(H_0:P_0\) against \(H_1:P_1\), assume \(P_1|_{\mathcal F_t}\ll P_0|_{\mathcal F_t}\) for every \(t\) and consistent finite-time likelihood ratios \(L_t=dP_1|_{\mathcal F_t}/dP_0|_{\mathcal F_t}\). Under \(P_0\), \(L_t\) is a nonnegative mean-one martingale. The one-sided algorithm rejects \(H_0\) at the first \(t\) with \(L_t\ge1/\alpha\); its false-rejection probability is at most \(\alpha\) by M06-P09. State no type-II error or stopping-time optimality claim unless separately proved.

**B proposal:** **ex-sequential-bernoulli-likelihood-ratio-test**. For \(X_i\sim\mathrm{Bernoulli}(p_0)\) under the simple null and \(p_0,p_1\in(0,1)\), give
\[
L_t=(p_1/p_0)^{\sum_{i\le t}X_i}\big((1-p_1)/(1-p_0)\big)^{t-\sum_{i\le t}X_i}.
\]
Verify its one-step conditional mean is one under \(H_0\), then apply the threshold guarantee.

**Algorithm/property separation:** the likelihood-ratio process and stopping boundary are the test definition; the martingale property requires the stated likelihood model; the error bound is a separate theorem through M06-P09. Wald’s two-boundary cutoffs, type-II approximation, and optimality are not imported.

**Dependencies:** planned foundations-01 dominated model/likelihood; existing conditional-expectation and martingale suppliers; M06-P09 for the guarantee.

**Evidence:** Howard et al. 2020 derives the nonnegative-supermartingale threshold method. Wolpert’s Duke notes discuss SPRT but mark Wald cutoffs as approximations; the exact likelihood-ratio martingale/finite-stop identity is already present as **ex-stopping-a-likelihood-ratio-martingale**. That existing example is only finite-horizon, so the new statement must prove its consistent all-time density process.

### M06-P11 — Martingale confidence sequences

**A proposal:** **thm-test-supermartingale-inversion-confidence-sequence**. A confidence sequence \(C_t(X)\) for parameter \(\theta\) satisfies \(\Pr_\theta(\theta\in C_t\text{ for all }t\ge1)\ge1-\alpha\), not merely a fixed-time marginal coverage inequality. If for every \(\theta\), under \(P_\theta\), \(M_t(\theta)\) is a nonnegative supermartingale with \(\mathbb E_\theta M_0(\theta)\le1\), set
\[
C_t=\{\theta:M_t(\theta)<1/\alpha\}.
\]
M06-P09 gives the all-time coverage proof. Include measurability of the parameter-indexed set when an interval-valued claim is made.

**B proposal:** **ex-subgaussian-normal-mixture-confidence-sequence**. Suppose \(X_t-\mu\) has conditional mgf bounded by \(\exp(\lambda^2\sigma^2/2)\) for every real \(\lambda\) given the past. Put \(S_t=\sum_{i\le t}(X_i-\mu)\) and \(V_t=t\sigma^2\). Mixing the exponential supermartingales \(\exp(\lambda S_t-\lambda^2V_t/2)\) over a centered normal mixing law of precision \(\rho>0\) gives
\[
M_t=\sqrt{\frac{\rho}{V_t+\rho}}\exp\!\left(\frac{S_t^2}{2(V_t+\rho)}\right).
\]
The event \(M_t\ge1/\alpha\) is equivalent to
\[
|S_t|\ge u_\alpha(V_t),\qquad u_\alpha(v)=\sqrt{(v+\rho)\log\frac{v+\rho}{\alpha^2\rho}}.
\]
Thus \([\bar X_t-u_\alpha(t\sigma^2)/t,\bar X_t+u_\alpha(t\sigma^2)/t]\) covers \(\mu\) simultaneously for every \(t\ge1\) with probability at least \(1-\alpha\). State that \(\sigma^2\) is a valid known sub-Gaussian proxy and the conditional mgf condition, not merely a marginal variance assertion.

**Proof route:** Each fixed-\(\lambda\) exponential is a supermartingale by the conditional mgf hypothesis. Integrating nonnegative processes preserves the supermartingale inequality by conditional Tonelli, with initial mixture mean one. Completing the square in the Gaussian integral gives the displayed \(M_t\). Ville’s inequality gives the crossing bound; inversion gives the confidence sequence. This explicit proof supplements the source’s mixture boundary statement.

**Dependencies:** M06-P09; existing conditional Hoeffding/mgf or conditional-expectation suppliers; planned foundations-02 confidence-set terminology. No category-4 “best arm” result is used.

**Evidence:** Howard et al. 2021, confidence-sequence definition and arbitrary-stopping coverage PDF pp. 1–3; scalar sub-\(\psi\) setup and stitched boundary PDF pp. 4–8; mixture lemma PDF p. 9 and complete proof PDF pp. 27–28; two-sided normal-mixture bound PDF p. 28. These focused sections, including the mixture proof, were read; unlisted sections of the 48-page article were not. Howard et al. 2020 supplies an independent time-uniform supermartingale treatment, read pp. 9–18 and 45.

### M06-P12 — Group-sequential alpha spending

**A proposal:** **def-group-sequential-design-and-alpha-spending-boundaries**. For a prespecified maximum \(K\) and information times \(0<t_1<\cdots<t_K=1\), define a nondecreasing spending function \(A\) with \(A(0)=0\) and \(A(1)=\alpha\). In the one-sided canonical normal model under \(H_0\), the standardized statistics have the stipulated joint null law (for example, independent increments and \(\operatorname{Cov}(Z_j,Z_k)=\sqrt{I_j/I_k}\) for \(j\le k\)). Define boundaries recursively so that
\[
\Pr_0(\text{reject at or before look }k)=\Pr_0(\max_{j\le k}Z_j\ge b_j)=A(t_k).
\]
The design is an algorithm for calculating \(b_k\) under the joint law. Its property is exact cumulative type-I spending at each planned information time and total type-I error \(A(1)=\alpha\). A two-sided boundary uses its separately calibrated two-sided crossing event.

**B proposal:** **ex-pocock-and-obrien-fleming-spending**. Compare two spending functions only as named designs, calculate their boundaries by the joint-normal recursion, and verify cumulative crossing probabilities. Invert the sequential test only when a repeated confidence interval is explicitly calibrated by the same stopping rule.

**Dependencies:** planned foundations-01 experiment/normal model; existing normal and multivariate-normal laws; no independence shortcut across cumulative looks. The algorithm and its calibration guarantee remain separate.

**Evidence/proof route:** DeMets–Lan 1994 gives the spending-function formulation, information fraction, recursive critical-value calculation, and test inversion, PDF pp. 2–3, 6–7, and 9. Grayling–Wason–Mander 2018 gives the known-variance normal model, canonical covariance and joint-normal integration, PDF pp. 2–4, and was fully read. Minas Chapter 5 §§5.3–5.3.1 independently describes the repeated-look joint-distribution calculation, printed pp. 72–74. The exact result is conditional on the stipulated joint null law and information fractions; it is not asserted for arbitrary data-dependent looks or an estimated variance without a recalibration argument.

### M06-P13 — Two-stage conditional-error adaptive test

**A proposal:** **thm-conditional-error-preserving-two-stage-adaptation**. Let \(\mathcal F_1\) be the interim information under a null \(P_0\), and let the prespecified design have conditional rejection probability \(A(X_1)=P_0(\text{reject under original design}\mid\mathcal F_1)\), with \(\mathbb E_0A(X_1)\le\alpha\). After adaptation based on \(X_1\), require the conditional probability of any eventual rejection under the adapted design, including early decisions, to satisfy
\[
P_0(\text{eventual rejection under adapted design}\mid\mathcal F_1)\le A(X_1)\quad\text{a.s.}
\]
Then the adapted design has type-I error at most \(\alpha\), since iterated expectation bounds its rejection probability by \(\mathbb E_0A(X_1)\). A sufficient implementation is a second-stage p-value that is conditionally superuniform under the null given \(\mathcal F_1\) and the rule \(p_2\le A(X_1)\). Fresh independent stage-2 data are one sufficient route to the required conditional calibration, but the actual conditional null law must be stated.

**B proposal:** **ex-two-stage-sample-size-adaptation-with-conditional-error**. Choose a stage-2 sample size from interim nuisance information or conditional power, then calculate the conditional null test so that its rejection probability is no greater than the original conditional error. Use new stage-2 participants and the conditional law appropriate to the selected sample size. Include a counterexample note that changing inverse-normal weights as a function of the selected stage-2 size without recalibrating the conditional test can inflate error.

**Algorithm/property separation:** selecting a sample size or continuation rule is a design algorithm; conditional error control is a separate theorem. Conditional power is not a type-I guarantee. Treatment-allocation learning, endpoint selection, multi-arm adaptive selection, and multi-stage closed testing are excluded.

**Dependencies:** M06-P01 valid p-values; planned foundations-02 test interface; existing conditional expectation tower property. No dependencies on category 3 or 4.

**Evidence/proof route:** The theorem is the law of total probability plus the conditional superuniform inequality. Sugiura–Uesaka 2008, PDF pp. 6–9, derives conditional-error and adaptive sample-size calculations. Minas 2013, complete Chapter 5 §§5.4.1–5.4.2, printed pp. 74–79, independently states conditional invariance, conditional superuniformity of \(p_2\mid X_1\), the conditional-error function, and the same integral proof. Both treatments warn that changes to combination statistics/weights need calibration; Sugiura–Uesaka PDF p. 8 specifically cautions against changing inverse-normal weights based on a data-selected stage-2 sample size without further argument.

## Topic-to-source coverage and remaining limits

| Assigned topic | Proposed coverage | Main source-backed unit | Independent treatment or existing proof support |
|---|---|---|---|
| Valid p-values and error-rate definitions | M06-P01 | BH 1995 PDF p. 4 | Goeman–Solari 2010 p. 8; existing general probability laws. |
| Strong familywise control | M06-P02–P03 | Goeman–Solari 2010 pp. 5, 8–9 | Direct union-bound and first-true-null proofs; existing subadditivity. |
| FDR under independence | M06-P05 | BH 1995 full article and Appendix A | BY 2001 pp. 16–17. |
| FDR under PRDS and arbitrary dependence | M06-P06 | BY 2001 full article | Separate proof routes and assumptions stated above; no pairwise-correlation shortcut. |
| Simultaneous confidence | M06-P04 | Direct event-union proof | Planned Cat-1 pivot/test-inversion supplier; normal example hypotheses explicit. |
| Selective inference | M06-P07 | Lee et al. 2016 full article | Fithian–Sun–Taylor 2017 read selective-error and test/CI-duality ranges. |
| Reproducibility and transparency | M06-P08 | NASEM Chapter 3 full focused chapter | Ioannidis 2005 read in full as context only; NASEM Executive Summary read in full as ancillary. |
| Optional stopping and sequential tests | M06-P09–P10 | Howard et al. 2020 pp. 9–18, 45 | Wolpert Duke pp. 1–5, 13–16; existing bounded optional sampling and counterexamples. |
| Martingale confidence sequences | M06-P11 | Howard et al. 2021 definition, mixture lemma/proof, normal mixture | Howard et al. 2020 sub-\(\psi\)/Ville treatment; existing martingale and conditional-mgf suppliers. |
| Group-sequential trials | M06-P12 | DeMets–Lan 1994 and Grayling et al. 2018, both fully read | Minas Chapter 5 §§5.3–5.3.1. |
| Basic adaptive experiments | M06-P13 | Sugiura–Uesaka 2008 pp. 1–10 | Minas Chapter 5 §§5.4.1–5.4.2, complete focused chapter. |
| Learning/bandit allocation | Excluded from this assignment | None used | Reserved for category 4. |

The core guarantees have complete proof routes in the dossier: event subadditivity for Bonferroni and simultaneous coverage; first-true-null ordering for Holm; the conditional-induction proof for BH; the monotonicity proof for PRDS; the harmonic sum for BY; truncated-normal conditioning for the polyhedral selective pivot; bounded optional sampling plus a monotone finite-horizon limit for Ville; exponential-mixture integration for the sub-Gaussian confidence sequence; joint-null boundary calibration for group sequential tests; and iterated conditional rejection probabilities for two-stage adaptation.

## Source gaps, cautions, and exclusions

1. The old library does not yet have a statistical experiment, p-value, testing, confidence set, FWER/FDR, selective-inference, confidence-sequence, group-sequential, or adaptive-test item. Planned foundations-01/02 interfaces are proposals only until those owners integrate them.
2. The BH statement is initially restricted to independent continuous-uniform true-null p-values, matching the fully read original proof. A discrete superuniform extension can be proved by a leave-one-out argument but is not claimed unless that argument is written into the future item.
3. Ordinary BH under dependence is not given as a general guarantee. The source-backed alternatives here are BH under the precise PRDS-on-true-nulls condition and BY’s harmonic correction under arbitrary dependence.
4. Selective inference is restricted to a fixed, finite-sample Gaussian model with known variance and a polyhedral selection event of positive probability. No general nonlinear selection, unknown-variance result, selective FDR, or post-selection lasso dependency is proposed.
5. Ville and confidence-sequence claims are discrete-time. The 2020 source’s continuous-time statements need the additional filtration and path-regularity hypotheses; they are not imported.
6. Group-sequential exactness is under the stated joint null law and information times. Unknown variance, misspecification, or genuinely data-dependent look timing requires separate calibration; there is no silent asymptotic fallback.
7. The adaptive pair is two-stage and single-hypothesis. It requires conditionally valid second-stage testing after whatever adaptation was made. Response-adaptive treatment allocation, adaptive endpoint/arm selection, and bandits are outside the scope.
8. Reproducibility recommendations are conceptual/reporting guidance, not proved operating characteristics. Ioannidis 2005 is read as context only; no base-rate PPV model is a dependency. PLOS’s 2022 correction to that article’s bias Table 2 was noted; the corrected table is not used.
9. The University of Warwick thesis remains a partial source-document read: only its complete Chapter 5 and source-identification pages were read. The NASEM report is likewise a partial source-document read, with complete Chapter 3 pp. 39–54 read. Their unread remainder is explicitly recorded in sources.json.

No mathematical guarantee depends on an unproved empirical assertion, a simulation, a source preview, an abstract, or a search snippet. No external application, build workflow, statistical item, plan, or setting was changed.
