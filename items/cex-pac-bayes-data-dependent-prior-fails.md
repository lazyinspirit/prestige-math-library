---
id: cex-pac-bayes-data-dependent-prior-fails
kind: counterexample
title: "A data-dependent prior can invalidate the PAC-Bayes bound"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-pac-bayes-prior-and-posterior
  - thm-pac-bayes-kl-bound
  - def-population-and-empirical-risk
  - lem-population-and-empirical-risk-are-measurable
  - def-probability-measure
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - lem-natural-logarithm-bounded-by-argument
justified_by: []
proof_strategy: direct
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Pierre Alquier, User-friendly Introduction to PAC-Bayes Bounds, Chapter 2, §2.1.1"
      url: "https://arxiv.org/pdf/2110.11216v4"
---

## Statement refuted

Let $\mathcal X=\{1,\ldots,20\}$ with its full sigma-algebra, let $D$ be uniform on $\mathcal X$, let $c(x)=0$, and let $\mathcal H=\{h_A:A\subseteq\mathcal X,\ |A|=10\}$ with its full sigma-algebra, where $h_A(x)=\mathbf1_A(x)$. Use the zero-one loss $\ell(h,x)=\mathbf1\{h(x)\ne c(x)\}$, the sample size $m=10$, confidence $\delta=1/4$, and tuning parameter $\lambda=20$. Draw independent observations $X_1,\ldots,X_{10}$ with common law $D$. For each sample $S=(X_1,\ldots,X_{10})$, let $A(S)$ be the lexicographically first ten-element subset disjoint from $\{X_1,\ldots,X_{10}\}$ and put $\pi_S=\rho_S=\delta_{h_{A(S)}}$. Even if one drops the requirement that the prior be fixed independently of the sample, the same PAC-Bayes formula holds with probability at least $3/4$ over this sample:
$$\mathbb E_{h\sim\rho_S}R_D(h)\le\mathbb E_{h\sim\rho_S}\widehat R_S(h)+\frac{\lambda}{8m}+\frac{\mathrm{KL}(\rho_S\|\pi_S)+\log(1/\delta)}{\lambda},$$
where $R_D(h)=D\{x:h(x)\ne c(x)\}$, $\widehat R_S(h)=m^{-1}\sum_{i=1}^{m}\ell(h,X_i)$, and $\mathrm{KL}$ is the supremum of the finite-partition divergences with zero-numerator terms equal to $0$ and positive-numerator/zero-denominator terms equal to $+\infty$.

## Statement references

[[thm-pac-bayes-kl-bound]]: gives this form of bound when the prior is fixed independently of the sample.

[[def-pac-bayes-prior-and-posterior]]: defines the prior's sample-independence requirement and the finite-partition relative entropy.

[[def-natural-logarithm]]: $\log$ is the inverse of the real exponential on positive reals.

[Alquier, *User-friendly Introduction to PAC-Bayes Bounds*, Chapter 2, §2.1.1](https://arxiv.org/pdf/2110.11216v4): states the PAC-Bayes result with a prior fixed before observing the sample.

## Facts & Assumptions

**Given:** The finite instance space and hypothesis class with their full sigma-algebras, the uniform distribution $D$, the target $c(x)=0$, the indicator hypotheses $h_A$, and an IID sample $S=(X_1,\ldots,X_{10})$.

[F1] A probability measure has total mass one; population risk is the integral of the loss, empirical risk is its sample average, and fixed-predictor risks are measurable under the stated assumptions. [[def-probability-measure]], [[def-population-and-empirical-risk]], [[lem-population-and-empirical-risk-are-measurable]]

[F2] For each sample, relative entropy is the supremum over finite measurable partitions of the partition divergence, using the natural logarithm. [[def-pac-bayes-prior-and-posterior]], [[def-natural-logarithm]]

[F3] The proved PAC-Bayes inequality assumes that its prior is fixed independently of the sample. [[thm-pac-bayes-kl-bound]]

[F4] The natural logarithm is increasing and for $x\ge1$ satisfies $0\le\log x\le x-1\le x$. [[thm-natural-logarithm-laws]], [[lem-natural-logarithm-bounded-by-argument]]

## Counterexample

**Proof technique:** direct.

**Given:** The finite learning problem and the sample-dependent measures in the Statement.

1.1 For each sample $s=(x_1,\ldots,x_{10})$, its observed support has at most ten points, so its complement in $\mathcal X$ has at least ten points. Let $A(s)$ be the lexicographically first ten-element subset of that complement. This defines a measurable function of the sample because the sample space is finite. Put $\pi_s=\rho_s=\delta_{h_{A(s)}}$. [given, construct]

2.1 Every $A(s)$ has ten points, so [F1] gives $R_D(h_{A(s)})=10/20=1/2$. Since $A(s)$ is disjoint from the sample support, every sampled label is predicted as zero and $\widehat R_s(h_{A(s)})=0$. [given, F1, step 1.1, algebra]

3.1 The measures $\pi_s$ and $\rho_s$ are equal, so every finite-partition divergence is zero and [F2] gives $\mathrm{KL}(\rho_s\|\pi_s)=0$. By [F4], $\log4\le3$, and therefore the proposed right side is at most $20/(8\cdot10)+3/20=2/5<1/2$. Thus the displayed inequality fails for every sample. [F2, F4, step 1.1, step 2.1, algebra]

4.1 The failure probability is one, contradicting the claimed success probability $3/4$. The choice $\pi_s$ violates the fixed-prior hypothesis [F3], which is why this construction does not contradict the stated PAC-Bayes theorem. [F3, step 3.1, given] ∎
