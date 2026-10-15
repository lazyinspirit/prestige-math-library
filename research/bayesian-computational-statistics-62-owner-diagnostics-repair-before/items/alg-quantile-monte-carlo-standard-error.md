---
id: alg-quantile-monte-carlo-standard-error
kind: algorithm
title: Quantile Monte Carlo standard error
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-blom-rank-normalization-for-pooled-draws
  - def-empirical-left-quantile-for-finite-draws
  - def-beta-distribution
  - alg-multichain-effective-sample-size
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Aki Vehtari et al., Rank-normalization, folding, and localization, §4.4, equation (20)"
      url: https://arxiv.org/pdf/1903.08008v5
    - title: "Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 11, §11.12"
      url: https://artowen.su.domains/mc/Ch-MCMC.pdf
verification:
  precheck: n/a
axiom_use: "The Blom score use inherits the full Axiom of Choice through the standard-normal law interface. The Beta distribution uses only Countable Choice through its finite-positive density normalization; these are separately declared assumptions."
---

## Definition

**Inputs:** $M\ge2$ equal-length scalar chains, a quantile level $\alpha\in(0,1)$,
and the fixed levels $u_-=.16$ and $u_+=.84$ used for a one-standard-error
approximation.

1. Pool the draws and compute $\widehat q_\alpha=Q_S(\alpha)$ by
   [[def-empirical-left-quantile-for-finite-draws]]. Form the indicator chains
   $I_{m,n}=\mathbf1\{x_{m,n}\le\widehat q_\alpha\}$, Blom-normalize their
   pooled values by [[def-blom-rank-normalization-for-pooled-draws]], and
   compute $E_\alpha$ with [[alg-multichain-effective-sample-size]]. If the
   indicator chains are constant or $E_\alpha$ is not estimable, return
   **not estimable**.
2. Set $a=E_\alpha\alpha+1$ and
   $b=E_\alpha(1-\alpha)+1$. For $u\in(0,1)$, define the lower Beta quantile
   $Q_{a,b}(u)=\inf\{t\in[0,1]:F_{a,b}(t)\ge u\}$, where
   $F_{a,b}(t)=\operatorname{Beta}(a,b)((0,t])$ and
   [[def-beta-distribution]] supplies the probability measure. Let
   $v_-=Q_{a,b}(u_-)$ and $v_+=Q_{a,b}(u_+)$.
3. Return the approximate Monte Carlo error interval
   $[Q_S(v_-),Q_S(v_+)]$ and the estimate
   $$\widehat{\operatorname{MCSE}}(\widehat q_\alpha)=\frac{Q_S(v_+)-Q_S(v_-)}2.$$

All Beta shape parameters are positive because $E_\alpha>0$ and
$0<\alpha<1$. This is a finite-run approximation, not a theorem that the
interval has a prescribed coverage probability. Its statistical interpretation
requires conditions for the relevant quantile and indicator-chain limit
behavior; none are asserted here.
