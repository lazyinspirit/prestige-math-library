---
id: ex-weak-metric-does-not-guarantee-uniform-bootstrap-coverage
kind: example
title: Weakly close root laws can still give failed uniform coverage
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-m-out-of-n-bootstrap-and-subsampling
  - lem-uniform-cdf-order-and-quantile-coverage
  - def-identically-distributed-and-iid-random-variables
  - def-partial-sums-and-sample-means
  - def-cumulative-distribution-function-of-a-random-variable
  - thm-logarithm-derivative-and-integral
  - def-confidence-set-and-coverage
  - def-weak-convergence-of-borel-probability-measures
  - def-levy-prokhorov-metric
  - thm-levy-prokhorov-metric-metrizes-weak-convergence
  - lem-bernoulli-root-laws-are-uniformly-weak-close
  - thm-uniform-subsampling-coverage-under-root-law-control
  - def-bernoulli-and-binomial-random-variables
  - lem-bernoulli-and-binomial-mean-and-variance
  - cor-chebyshev-inequality-for-random-variables
  - def-axiom-of-choice
  - thm-rationals-countable
  - lem-q-and-irrationals-dense-r
  - def-separable-space
justified_by: []
proof_strategy: direct
axiom_use: "AC is used only to invoke the published theorem that the Levy–Prokhorov metric metrizes weak convergence on the real line. The Bernoulli coupling, uniform probability bound, and coverage counterexample are choice-free."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "J. P. Romano and A. M. Shaikh, On the Uniform Asymptotic Validity of Subsampling and the Bootstrap, §2.2, Remark 2.7 and Example 2.1"
      url: "https://home.uchicago.edu/amshaikh/webfiles/uniformity.pdf"
verification:
  precheck: pass
---

## Example

Assume AC and let $n\ge1$. Let $\mathcal P=\{\operatorname{Bernoulli}(p):0\le p\le1\}$, and use the sample mean with root $R_{n,p}=\sqrt n(\bar X_n-p)$. Under the ordinary bootstrap, the conditional root law is the conditional law of $R_{n,p}^*=\sqrt n(\bar X_n^* -\bar X_n)$ given the observed sample; write $\mathcal L^*$ for this law and $\mathcal L$ for the sampling law. For every $\epsilon>0$,
$$\sup_{p\in[0,1]}P_p\!\left(\pi\bigl(\mathcal L^*(R_{n,p}^*),\mathcal L(R_{n,p})\bigr)>\epsilon\right)\longrightarrow0,$$
so the root laws are uniformly close in a metric for weak convergence. Nevertheless, for any fixed $\lambda>0$ and $\alpha\in(0,e^{-\lambda})$, the one-sided bootstrap lower confidence set based on the $(1-\alpha)$-quantile has coverage below $1-\alpha$ along $p_n=1-\lambda/n$. Thus weak-metric closeness alone does not ensure uniform quantile coverage.

## Facts & Assumptions

**Given:** AC, the Bernoulli model class, the sample-mean estimator, the ordinary bootstrap root, and the generalized quantile convention from [[lem-uniform-cdf-order-and-quantile-coverage]].

[A1] [[def-axiom-of-choice]]: AC is the assertion that every family of nonempty sets has a choice function.

[F1] [[def-m-out-of-n-bootstrap-and-subsampling]]: The ordinary bootstrap draws a size-$n$ sample conditionally IID from $P_n$ and centers the resampled statistic at $\widehat\theta_n$.

[F2] [[def-identically-distributed-and-iid-random-variables]]: The original observations are mutually independent and have one common law.

[F3] [[def-partial-sums-and-sample-means]]: $\bar X_n=n^{-1}\sum_{i=1}^nX_i$.

[F4] [[def-bernoulli-and-binomial-random-variables]]: A Bernoulli$(p)$ variable is $1$ with probability $p$ and $0$ otherwise; a binomial variable is a finite sum of independent Bernoulli variables.

[F5] [[lem-bernoulli-and-binomial-mean-and-variance]]: A binomial$(n,p)$ variable has mean $np$ and variance $np(1-p)$.

[F6] [[cor-chebyshev-inequality-for-random-variables]]: For a square-integrable real random variable $Y$ and $t>0$, $P(|Y-EY|\ge t)\le\operatorname{Var}(Y)/t^2$.

[F7] [[lem-bernoulli-root-laws-are-uniformly-weak-close]]: For every $n$ and $p,q\in[0,1]$, $\pi(\mu_{n,p},\mu_{n,q})\le|p-q|^{1/3}$ for the centered, $\sqrt n$-scaled Bernoulli sample-mean roots.

[F8] [[def-confidence-set-and-coverage]]: A confidence procedure has measurable membership sections, and its coverage at a fixed parameter is the probability that the procedure contains that parameter.

[F9] [[def-levy-prokhorov-metric]]: $\pi$ is the infimum of radii satisfying the two closed-set enlargement inequalities in the statement of the definition.

[F10] [[def-weak-convergence-of-borel-probability-measures]]: Weak convergence of Borel laws means convergence of integrals against all bounded continuous real functions.

[F11] [[thm-levy-prokhorov-metric-metrizes-weak-convergence]]: Under AC, convergence in Levy–Prokhorov distance on a separable metric space is equivalent to weak convergence of Borel probability laws.

[F12] [[thm-uniform-subsampling-coverage-under-root-law-control]]: Uniform quantile coverage follows from the stated one-sided root-CDF comparisons and uniform feasible-root CDF control; a weak metric alone is not among those premises.

[F13] [[thm-logarithm-derivative-and-integral]]: For $x>0$, $\log'(x)=1/x$ and $\log x=\int_1^xdt/t$.

[F14] [[lem-uniform-cdf-order-and-quantile-coverage]]: The generalized quantile is $q_G(u)=\inf\{x:G(x)\ge u\}$ for $u\in(0,1)$, with $q_G(0)=-\infty$ and $q_G(1)=+\infty$.

[F15] The Euclidean metric space $\mathbb R$ is separable because $\mathbb Q$ is countable and dense in $\mathbb R$. [[def-separable-space]] [[thm-rationals-countable]] [[lem-q-and-irrationals-dense-r]]

## Verification

1.1 Under $P_p$, $\bar X_n$ has law $\operatorname{Binomial}(n,p)/n$. Conditional on the sample, the bootstrap observations are IID Bernoulli$(\bar X_n)$, so their centered root law is $\mu_{n,\bar X_n}$, while the true root law is $\mu_{n,p}$. By [F7], $\pi(\mathcal L^*(R_{n,p}^*),\mathcal L(R_{n,p}))\le|\bar X_n-p|^{1/3}$. [F1, F2, F3, F4, F7]

1.2 Fix $\lambda>0$, take $p_n=1-\lambda/n$ for $n>\lambda$, and let $q_n$ be the conditional $(1-\alpha)$-quantile of $R_{n,p_n}^*$. Define the lower interval $I_n=[\bar X_n-q_n/\sqrt n,1]\cap[0,1]$. It is measurable because the data take only finitely many values, and $p_n\in I_n$ is exactly the coverage event for root threshold $q_n$. [F1, F3, F8]

2.1 From [F5], $\operatorname{Var}_p(\bar X_n)=p(1-p)/n\le1/(4n)$. For each $\epsilon>0$, Chebyshev's inequality [F6] and step 1.1 give $\sup_{p\in[0,1]}P_p\{\pi(\mathcal L^*(R_{n,p}^*),\mathcal L(R_{n,p}))>\epsilon\}\le\sup_pP_p\{|\bar X_n-p|>\epsilon^3\}\le1/(4n\epsilon^6)\to0$. By [F15], $\mathbb R$ is a separable metric space, so [F11] shows this is uniform closeness in a metric that induces weak convergence. [A1, F5, F6, F9, F10, F11, F15, step 1.1, algebra]

2.2 On the event $X_1=\cdots=X_n=1$, the empirical law is $\delta_1$, every bootstrap root is zero, and [F14] gives $q_n=0$ because $1-\alpha\in(0,1)$; then $I_n=\{1\}$ and $p_n\notin I_n$. This event has probability $p_n^n=(1-\lambda/n)^n$. By the integral formula in [F13], $n\log(1-\lambda/n)=-n\int_{1-\lambda/n}^1dt/t\to-\lambda$, since the integrand converges uniformly to $1$ on that shrinking interval; exponentiating gives $p_n^n\to e^{-\lambda}$. Hence $\limsup_nP_{p_n}(p_n\in I_n)\le1-e^{-\lambda}<1-\alpha$, so $\liminf_n\inf_{p\in[0,1]}P_p(p\in I_n)<1-\alpha$. [F1, F13, F14, step 1.2, algebra]

3.1 Steps 1.1 and 2.1 establish uniform weak-metric closeness, while steps 1.2 and 2.2 show the coverage failure. Thus weak-metric closeness alone does not imply uniform quantile coverage or the stronger root-CDF and feasible-root conditions in [F12]. The coupling and coverage calculation use no choice; AC enters only through the metric-to-weak-topology equivalence [F11]. [A1, F7, F11, F12, step 1.1, step 2.1, step 1.2, step 2.2] ∎
