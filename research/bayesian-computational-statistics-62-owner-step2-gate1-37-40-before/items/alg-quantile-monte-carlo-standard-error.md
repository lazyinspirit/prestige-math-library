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
  - prop-measure-monotonicity
  - cor-archimedean-reciprocal
  - thm-continuity-from-above-for-measures
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

**Inputs:** $M\ge2$ equal-length scalar chains with $N\ge2$ observations each, a quantile level $\alpha\in(0,1)$,
and the fixed levels $u_-=.16$ and $u_+=.84$ used for a one-standard-error
approximation. **Output:** The approximate error interval and MCSE below, or
**not estimable**.

1. If $N<4$, return **not estimable**. This procedure calls
   [[alg-multichain-effective-sample-size]], whose input chains must have length
   at least $4$.
2. Pool the draws and compute $\widehat q_\alpha=Q_S(\alpha)$ by
   [[def-empirical-left-quantile-for-finite-draws]]. Form the indicator chains
   $I_{m,n}=\mathbf1\{x_{m,n}\le\widehat q_\alpha\}$, Blom-normalize their
   pooled values by [[def-blom-rank-normalization-for-pooled-draws]], and
   compute $E_\alpha$ with [[alg-multichain-effective-sample-size]]. If the
   indicator chains are constant or $E_\alpha$ is not estimable, return
   **not estimable**.
3. Set $a=E_\alpha\alpha+1$ and
   $b=E_\alpha(1-\alpha)+1$. For $u\in(0,1)$, define the lower Beta quantile
   $Q_{a,b}(u)=\inf\{t\in[0,1]:F_{a,b}(t)\ge u\}$, where
   $F_{a,b}(t)=\operatorname{Beta}(a,b)((0,t])$ and
   [[def-beta-distribution]] supplies the probability measure. Let
   $v_-=Q_{a,b}(u_-)$ and $v_+=Q_{a,b}(u_+)$. For integers $n\ge1$, the sets
   $E_n=(0,1/n]$ in $(0,1)$ decrease to the empty set: for every $p\in(0,1)$,
   [[cor-archimedean-reciprocal]] gives $n$ with $1/n<p$. They have finite
   Beta measure because the Beta law is a probability measure. Thus
   [[thm-continuity-from-above-for-measures]] gives
   $F_{a,b}(1/n)=\operatorname{Beta}(a,b)(E_n)\to0$. Since $F_{a,b}$ is
   nondecreasing by [[prop-measure-monotonicity]] and $F_{a,b}(1)=1$, for each
   $u\in\{u_-,u_+\}\subset(0,1)$ there is an $n$ with
   $F_{a,b}(1/n)<u$; no $t\le1/n$ then belongs to the defining level set, while
   $t=1$ does. Hence $0<1/n\le Q_{a,b}(u)\le1$, so $v_-,v_+\in(0,1]$ and both
   calls to $Q_S$ lie in its domain. Also $u_-<u_+$ makes the upper level set a
   subset of the lower one, so $v_-\le v_+$. The order-statistic definition
   makes $Q_S$ nondecreasing, hence $Q_S(v_-)\le Q_S(v_+)$.
4. Return the approximate Monte Carlo error interval
   $[Q_S(v_-),Q_S(v_+)]$ and the estimate
   $$\widehat{\operatorname{MCSE}}(\widehat q_\alpha)=\frac{Q_S(v_+)-Q_S(v_-)}2.$$

All Beta shape parameters are positive because $E_\alpha>0$ and
$0<\alpha<1$. This is a finite-run approximation, not a theorem that the
interval has a prescribed coverage probability. Its statistical interpretation
requires conditions for the relevant quantile and indicator-chain limit
behavior; none are asserted here.
