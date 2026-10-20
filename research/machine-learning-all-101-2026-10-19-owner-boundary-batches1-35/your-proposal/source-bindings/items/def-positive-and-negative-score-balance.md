---
id: def-positive-and-negative-score-balance
kind: definition
title: "Balance for positive and negative outcomes"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-group-risk-score-and-calibration
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Jon Kleinberg, Sendhil Mullainathan, and Manish Raghavan, Inherent Trade-Offs in the Fair Determination of Risk Scores, arXiv:1609.05807v2 (2016), §1.1"
      url: "https://arxiv.org/pdf/1609.05807v2"
    - title: "Applied Statistics: From Data to Decisions, MS&E 125, Fairness in Algorithmic Decision-Making, section ‘The impossibility: you cannot satisfy them all’"
      url: "https://stanford-mse-125.github.io/book/lec20-fairness.html"
---

## Definition

Let $\Sigma$ and $\mathcal B$ be nonempty finite sets, and let $t\in\{1,2\}$ index two groups. In group $t$, feature type $\sigma$ has proportion $a_{t\sigma}\ge0$, where $\sum_\sigma a_{t\sigma}=1$, and total mass $N_t>0$. The positive binary outcome $Y=1$ has probability $p_\sigma\in[0,1]$ for feature type $\sigma$, with the same $p_\sigma$ in both groups. A common randomized assignment sends feature type $\sigma$ to bin $b\in\mathcal B$ with probability $X_{\sigma b}\ge0$, where $\sum_bX_{\sigma b}=1$, independently of group and outcome; bin $b$ has score $v_b\in[0,1]$. Set $\rho_t=\sum_\sigma a_{t\sigma}p_\sigma$ and $\mu_t=N_t\rho_t$. Assume $0<\mu_t<N_t$ for each group, so both outcome classes have positive mass. Define the mean score among positive outcomes and among negative outcomes in group $t$ by
$$
\alpha_t=\frac{\sum_{\sigma\in\Sigma}\sum_{b\in\mathcal B}a_{t\sigma}p_\sigma X_{\sigma b}v_b}{\rho_t},\qquad \beta_t=\frac{\sum_{\sigma\in\Sigma}\sum_{b\in\mathcal B}a_{t\sigma}(1-p_\sigma)X_{\sigma b}v_b}{1-\rho_t},
$$
where the finite group law is $\Pr_t(\Sigma=\sigma,Y=1,B=b)=a_{t\sigma}p_\sigma X_{\sigma b}$ and $\Pr_t(\Sigma=\sigma,Y=0,B=b)=a_{t\sigma}(1-p_\sigma)X_{\sigma b}$. The assignment is **balanced for positive outcomes** if $\alpha_1=\alpha_2$, and **balanced for negative outcomes** if $\beta_1=\beta_2$. These are class-conditioned mean-score criteria; they do not assert equal mean scores over whole groups or equal thresholded error rates.

## Definition references

[[def-group-risk-score-and-calibration]]: fixes the finite joint law, the $[0,1]$ score, the group base rate $\rho_t$, and the nondegeneracy condition $0<\mu_t<N_t$.

[Kleinberg, Mullainathan, and Raghavan, complete 23-page paper](https://arxiv.org/pdf/1609.05807v2): §1.1 defines balance for the negative and positive classes as equality of the corresponding groupwise mean assigned scores.

[Applied Statistics: From Data to Decisions, full chapter](https://stanford-mse-125.github.io/book/lec20-fairness.html): the section “The impossibility: you cannot satisfy them all” states both score-balance criteria and distinguishes them from the binary-classifier theorem.
