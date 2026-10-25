---
id: cor-rqmc-studentized-replicate-clt
kind: corollary
title: "Studentized RQMC replicate means are asymptotically normal as $R\\to\\infty$"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - def-rqmc-point-set-and-estimator
  - thm-rqmc-single-rule-unbiasedness
  - cor-rqmc-replicate-variance-estimator
  - cor-independent-replicate-mean-clt
  - thm-iid-monte-carlo-sample-variance-consistency
  - def-weak-convergence-of-borel-probability-measures
  - thm-slutsky-for-real-random-variables
  - def-moments-variance-and-covariance
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
axiom_use: "Assume AC only through the independent-replicate CLT supplier. The replicate variance and sample-variance identities are choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Book: The Quasi-Monte Carlo Parts, Chapter 17 §§17.1 and 17.4"
      url: "https://artowen.su.domains/mc/qmcstuff.pdf"
    - title: "Pierre L’Ecuyer and Christiane Lemieux, Recent Advances in Randomized Quasi-Monte Carlo Methods, §5 (replication context)"
      url: "https://www.math.uwaterloo.ca/~clemieux/papers/survey01.pdf"
---

## Statement

Assume AC. Fix the data, the RQMC rule, and an integrable target $I=I(f)$.
Let $\widehat I_1,\widehat I_2,\ldots$ be independent full-set randomizations
of the same rule, with common mean $I$ and variance $0<\tau^2<\infty$. Define
$\overline I_R=R^{-1}\sum_{r=1}^R\widehat I_r$ for $R\ge2$, and
$\widehat V_R=[R(R-1)]^{-1}\sum_{r=1}^R(\widehat I_r-\overline I_R)^2$.
With the quotient assigned any fixed value when $\widehat V_R=0$,
$$\frac{\overline I_R-I}{\sqrt{\widehat V_R}}\ \Rightarrow\ N(0,1) \qquad\text{as }R\to\infty.$$
This limit is over independent randomizations for a fixed integrand and
target. It asserts neither normality of a single scrambled-rule estimate nor
accurate finite-$R$ Student interval coverage.

## Facts & Assumptions
**Given:** AC, fixed data and rule, independent full-set RQMC estimates with mean $I$ and variance $0<\tau^2<\infty$.

[F1] [[def-rqmc-point-set-and-estimator]]: Full-set randomizations are copies of the entire point array, independent across replicates.

[F2] [[thm-rqmc-single-rule-unbiasedness]]: Each marginally uniform full-set estimate has mean $I(f)$.

[F3] [[cor-rqmc-replicate-variance-estimator]]: $\widehat V_R$ is the variance estimate for the replicate mean, with $\widehat V_R=s_R^2/R$ for the usual sample variance $s_R^2$.

[F4] [[cor-independent-replicate-mean-clt]]: Under AC, IID replicate estimates with positive finite variance satisfy $\sqrt R(\overline I_R-I)/\tau\Rightarrow N(0,1)$.

[F5] [[thm-iid-monte-carlo-sample-variance-consistency]]: For IID real variables with finite second moment, $s_R^2\to\tau^2$ almost surely.

[F6] [[def-weak-convergence-of-borel-probability-measures]]: The symbol $\Rightarrow$ denotes convergence against bounded continuous functions.

[F7] [[thm-slutsky-for-real-random-variables]]: If $Y_R\Rightarrow Y$ and $W_R\to c\ne0$ in probability, then $Y_R/W_R\Rightarrow Y/c$, with an arbitrary fixed value assigned on $W_R=0$.

[A1] [[def-axiom-of-choice]]: AC is the stated axiom hypothesis passed to [F4].



## Proof

**Proof technique:** direct.

**Given:** The assumptions and notation of the Statement.

1.1 By [F1] the replicate estimates form an IID sequence. Their common mean is $I$ by [F2], and their variance is the positive finite number $\tau^2$ by hypothesis. Under [A1], apply [F4] to obtain $Y_R:=\sqrt R(\overline I_R-I)/\tau\Rightarrow N(0,1)$. [A1, F1, F2, F4, given]

2.1 Let $s_R^2=(R-1)^{-1}\sum_{r=1}^R(\widehat I_r-\overline I_R)^2$. The finite second moment and [F5] give $s_R^2\to\tau^2$ almost surely, hence $s_R/\tau\to1$ in probability. By [F3], $\sqrt{\widehat V_R}=s_R/\sqrt R$; on $s_R>0$ the displayed statistic equals $Y_R/(s_R/\tau)$. [F3, F5, step 1.1, algebra]

3.1 Since $\tau>0$, step 2.1 implies $\mathbb P(s_R=0)\to0$. Assigning any fixed value on that event matches the quotient convention in [F7]. Apply [F7] to step 1.1 with denominator $s_R/\tau\to1$ to obtain the stated standard-normal limit. The limit is in $R$ at fixed $n$, not in the point count $n$. [F6, F7, step 1.1, step 2.1] ∎
