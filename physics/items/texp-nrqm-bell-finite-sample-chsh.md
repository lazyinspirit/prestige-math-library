---
id: texp-nrqm-bell-finite-sample-chsh
aliases: [nrqm-bell-finite-sample-chsh]
kind: thought-experiment
domain: physics
title: "Finite samples of a declared arrangement: the CHSH estimator, its concentration and the limits of a finite-sample verdict"
status: draft
origin: session
dependency_level: 12
deps: [def-nrqm-bell-declared-spin-arrangement, def-nrqm-bell-binary-correlation-models, post-nrqm-framework-preparation-and-apparatus, def-probability-measure, def-random-element-and-real-random-variable, def-independence-of-finite-random-variables, def-moments-variance-and-covariance, cor-chebyshev-inequality-for-random-variables, cor-variance-adds-for-pairwise-independent-random-variables, cor-expectation-linearity-monotonicity-and-modulus-bound, def-expectation-of-a-nonnegative-or-integrable-random-variable, lem-nrqm-composites-chsh-and-finite-sampling-law, def-finite-sum]
dependency_roles:
  def-nrqm-bell-declared-spin-arrangement: formulation-prerequisite
  def-nrqm-bell-binary-correlation-models: mathematical-premise
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
  def-probability-measure: mathematical-premise
  def-random-element-and-real-random-variable: mathematical-premise
  def-independence-of-finite-random-variables: mathematical-premise
  def-moments-variance-and-covariance: mathematical-premise
  cor-chebyshev-inequality-for-random-variables: mathematical-premise
  cor-variance-adds-for-pairwise-independent-random-variables: mathematical-premise
  cor-expectation-linearity-monotonicity-and-modulus-bound: mathematical-premise
  def-expectation-of-a-nonnegative-or-integrable-random-variable: mathematical-premise
  lem-nrqm-composites-chsh-and-finite-sampling-law: mathematical-premise
  def-finite-sum: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A conditional finite-sampling analysis for a declared spin correlation arrangement: under a declared independent and identically distributed sampling model with n runs per setting pair, the sample CHSH functional is unbiased, has variance at most 4/n and satisfies the stated Chebyshev concentration inequality; threshold events on either side of 2 have explicitly bounded model probabilities, and every acceptance criterion that rejects a positive-probability outcome sequence fails with positive probability. The item asserts no measured count, no p-value, no power, no error rate, no sample size and no empirical conclusion; the independence and identical distribution of trials is the declared statistical assumption of clause (ii) of P7, not a consequence of the framework."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 6.1.4, printed pages 113-115 (PDF pages 121-123): the estimation of the two sides of Bell's inequality from finite series of trials, and the statement that a value is estimated from the results"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 8 'Multiparticle States and Tensor Products', Section 5, chapter pages 16-19: the singlet probabilities and the definite-spin ensemble compared through accumulated frequencies of many trials"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf"
    - title: "N. Brunner, D. Cavalcanti, S. Pironio, V. Scarani and S. Wehner, 'Bell nonlocality', Reviews of Modern Physics 86 (2014) 419, Section I.A, PDF pages 2-3: the joint probabilities of a Bell experiment estimated from repeated runs, and the assumption that the settings are chosen independently of the specification"
      url: "https://arxiv.org/pdf/1303.2849"
verification:
  precheck: pass
---

## Statement

Adopt a declared spin correlation arrangement $(V\widehat\otimes V,\rho,
a_{0},a_{1},b_{0},b_{1})$ of [[def-nrqm-bell-declared-spin-arrangement]]
with its outcome laws $\nu^{\rho}_{ij}(\varepsilon,\delta)$, correlations
$E_{ij}=E_{ij}(\nu^{\rho})$ and CHSH functional
$S=S(\nu^{\rho})$. Let $n\ge1$ and declare the following **sampling model**
(the statistical model of clause (ii) of the preparation and apparatus
postulate P7, [[post-nrqm-framework-preparation-and-apparatus]]): on a
probability space $(\Omega,\mathcal F,\mathbb P)$ let
$$\bigl(\Sigma_{ijk},\mathrm T_{ijk}\bigr)_{\substack{i,j\in\{0,1\}\\ k\in\{1,\dots,n\}}}$$
be $4n$ random elements with values in $\Sigma\times\Sigma$ that are
**mutually independent** and have the declared laws
$$\mathbb P\bigl((\Sigma_{ijk},\mathrm T_{ijk})=(\varepsilon,\delta)\bigr) =\nu^{\rho}_{ij}(\varepsilon,\delta) \qquad\text{for every }i,j,k,\varepsilon,\delta$$
([[def-independence-of-finite-random-variables]],
[[def-random-element-and-real-random-variable]]). Define the **sample
correlations** and the **sample CHSH functional**
$$\widehat E_{ij}:=\frac1n\sum_{k=1}^{n}\Sigma_{ijk}\mathrm T_{ijk}, \qquad \widehat S:=\widehat E_{00}+\widehat E_{01}+\widehat E_{10}-\widehat E_{11}.$$
Then:

(a) $\mathbb E[\widehat E_{ij}]=E_{ij}$ and
$\operatorname{Var}(\widehat E_{ij})\le1/n$ for all $(i,j)$;

(b) $\mathbb E[\widehat S]=S$, $\operatorname{Var}(\widehat S)\le4/n$, and
for every $\varepsilon>0$
$$\mathbb P\bigl(|\widehat S-S|\ge\varepsilon\bigr)\le\frac{4}{n\varepsilon^{2}} ;$$

(c) threshold consequences: if the declared model satisfies
$S\le2-\varepsilon$ for some $\varepsilon>0$, then
$\mathbb P(\widehat S>2)\le4/(n\varepsilon^{2})$; if the declared model is
the singlet arrangement with $S=-2\sqrt2$ and
$\varepsilon:=2\sqrt2-2$, then
$\mathbb P(\widehat S\ge-2)\le4/(n\varepsilon^{2})$. Moreover, for every
declared acceptance criterion $C\subseteq(\Sigma\times\Sigma)^{4n}$ that
rejects at least one outcome sequence $(x_{ijk})$ with
$\prod_{i,j,k}\nu^{\rho}_{ij}(x_{ijk})>0$, the failure probability of the
criterion is at least $\prod_{i,j,k}\nu^{\rho}_{ij}(x_{ijk})>0$;

(d) scope: the independence, the identical distribution and the tables
$\nu^{\rho}$ are declared model assumptions of the sampling model, not
consequences of P1-P6; clauses (a)-(c) assert no measured count, no p-value,
no error rate, no power, no required sample size and no empirical conclusion.

## Facts & Assumptions

**Given:** A declared arrangement with tables $\nu^{\rho}_{ij}$, correlations $E_{ij}$ and CHSH functional $S$; the $4n$ mutually independent random elements $(\Sigma_{ijk},\mathrm T_{ijk})$ with the declared laws; the sample correlations $\widehat E_{ij}$ and the sample functional $\widehat S$; a declared criterion $C$.

[F1] The outcome laws, correlations and CHSH functional are the ones of clause (d) of [[def-nrqm-bell-declared-spin-arrangement]] and clauses (b), (d) of [[def-nrqm-bell-binary-correlation-models]]; the sampling model of the statement is an additional declared assumption in the sense of clause (ii) of [[post-nrqm-framework-preparation-and-apparatus]] and is not implied by the framework's postulates.

[F2] A finite family of finite-valued random elements is mutually independent when the probability of every joint event factors as the product over the index set ([[def-independence-of-finite-random-variables]]); in particular every sequence of values with all one-run probabilities positive has probability equal to the product of those probabilities, which is positive ([[lem-nrqm-composites-chsh-and-finite-sampling-law]] clause (b)).

[F3] Expectation is linear, and for a finite family of integrable real random variables the expectation of the finite sum is the sum of the expectations ([[cor-expectation-linearity-monotonicity-and-modulus-bound]], [[def-expectation-of-a-nonnegative-or-integrable-random-variable]], [[def-finite-sum]]).

[F4] Variance is defined by $\operatorname{Var}(X)=\mathbb E[(X-\mathbb E[X])^{2}]=\mathbb E[X^{2}]-\mathbb E[X]^{2}$ for a square-integrable real random variable, and $\operatorname{Var}(cX)=c^{2}\operatorname{Var}(X)$ ([[def-moments-variance-and-covariance]]); the variances of a finite pairwise-independent family add, $\operatorname{Var}(\sum_{l}X_{l})=\sum_{l}\operatorname{Var}(X_{l})$ ([[cor-variance-adds-for-pairwise-independent-random-variables]]).

[F5] For a square-integrable real random variable and $a>0$, $\mathbb P(|X-\mathbb E[X]|\ge a)\le\operatorname{Var}(X)/a^{2}$ ([[cor-chebyshev-inequality-for-random-variables]]).

## Proof

**Proof technique:** direct; identify each sample correlation as a mean of independent bounded products, compute its mean and variance, add the four variances of the independent setting groups, apply Chebyshev, and read the positive-probability statement off the product law.

**Given:** The data of the statement and [F1]-[F5].

1.1 [Mean and variance of one sample correlation] Fix $(i,j)$ and put $X_{k}:=\Sigma_{ijk}\mathrm T_{ijk}$ for $k=1,\dots,n$. Each $X_{k}$ takes values in $\{-1,+1\}$, so $\mathbb E[X_{k}]=\sum_{\varepsilon,\delta}\varepsilon\delta\nu^{\rho}_{ij}(\varepsilon,\delta)=E_{ij}$ by [F1] and [F3], and $X_{k}^{2}=1$ identically, so $\operatorname{Var}(X_{k})=\mathbb E[X_{k}^{2}]-\mathbb E[X_{k}]^{2}=1-E_{ij}^{2}\le1$ by [F4]; the $X_{k}$ are mutually independent because the corresponding pairs are, and $\widehat E_{ij}=\frac1n\sum_{k}X_{k}$. Hence $\mathbb E[\widehat E_{ij}]=\frac1n\sum_{k}\mathbb E[X_{k}]=E_{ij}$ by [F3], and $\operatorname{Var}(\widehat E_{ij})=\frac{1}{n^{2}}\operatorname{Var}(\sum_{k}X_{k})=\frac{1}{n^{2}}\sum_{k}\operatorname{Var}(X_{k})\le\frac{n}{n^{2}}=\frac1n$ by [F4]; this is (a). [given, F1, F3, F4, algebra]

1.2 [Positive failure probability] Let $(x_{ijk})$ be a sequence of outcomes with $p:=\prod_{i,j,k}\nu^{\rho}_{ij}(x_{ijk})>0$. By mutual independence [F2] the event that the sample equals this sequence has probability exactly $p>0$; if the criterion $C$ rejects this sequence, that is $(x_{ijk})\notin C$, then the singleton event $\{(\Sigma_{ijk},\mathrm T_{ijk})=(x_{ijk})\}$ is contained in the failure event $\{(\Sigma_{ijk},\mathrm T_{ijk})\notin C\}$, so the failure probability is at least $p>0$. [given, F1, F2, algebra]

2.1 [CHSH estimator moments and concentration] The four families $\{X_{k}\}_{k}$ for the four setting pairs involve disjoint groups of the $4n$ mutually independent random elements, so the four estimators $\widehat E_{ij}$ are mutually independent; by [F3] and [F4], $\mathbb E[\widehat S]=E_{00}+E_{01}+E_{10}-E_{11}=S$ and $\operatorname{Var}(\widehat S)=\sum_{i,j}\operatorname{Var}(\widehat E_{ij})\le4\cdot\frac1n=\frac4n$ by step 1.1. Chebyshev [F5] applied to $\widehat S$ gives $\mathbb P(|\widehat S-S|\ge\varepsilon)\le\operatorname{Var}(\widehat S)/\varepsilon^{2}\le4/(n\varepsilon^{2})$ for every $\varepsilon>0$; this is (b). [step 1.1, F1, F3, F4, F5, algebra]

3.1 [Threshold events] If $S\le2-\varepsilon$ then $\{\widehat S>2\}\subseteq\{|\widehat S-S|\ge\varepsilon\}$, so its probability is at most $4/(n\varepsilon^{2})$ by step 2.1. For the singlet arrangement $S=-2\sqrt2$, so $-\!S=2\sqrt2$ and $\{\widehat S\ge-2\}\subseteq\{|\widehat S-S|\ge2\sqrt2-2\}$, giving the second bound. [step 2.1, F1, algebra]

4.1 [Assembly and scope] Steps 1.1 and 2.1 prove (a) and (b), step 1.2 and step 3.1 prove the two parts of (c), and (d) records that the sampling model is the declared assumption of P7 clause (ii) and that no measured count, p-value, error rate, power, sample size or empirical conclusion is asserted. [step 1.1, step 1.2, step 2.1, step 3.1, F1] ∎

## Remarks

- **Finite-sample threshold crossings.** At the displayed singlet settings, each of the four possible outcome pairs has strictly positive probability. A sequence with product signs $+1$ at the first three setting pairs and $-1$ at the last therefore has positive probability and gives $\widehat S=4\ge-2$. For a representable model with $S<2$, a crossing $\widehat S>2$ has positive probability only when its declared tables support at least one such sequence, as specified by clause (c); a deterministic table need not support one. The displayed Chebyshev upper bounds remain valid independently of that support condition. More generally, if two specified finite-sample models both assign positive probability to the same record, that record is possible under both and cannot deductively exclude either; a record assigned probability zero by one specified ideal model can exclude that model conditional on its sampling and apparatus assumptions. Thus this item makes no blanket claim that finite samples cannot distinguish all model pairs. No optimality, power or sample-size assertion is made.
- **No inference is drawn.** The clauses are probabilities inside the declared sampling model. They do not compute a p-value, do not attach a confidence level and do not assert anything about a real experiment; the preparation, detection and selection qualifications remain as stated in [[rem-nrqm-bell-boundaries-and-comparison-scope]].
