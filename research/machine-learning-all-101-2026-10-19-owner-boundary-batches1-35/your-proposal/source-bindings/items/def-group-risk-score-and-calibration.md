---
id: def-group-risk-score-and-calibration
kind: definition
title: "KMR's finite group-conditioned risk-score assignment and calibration"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-probability-calibration
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Jon Kleinberg, Sendhil Mullainathan, and Manish Raghavan, Inherent Trade-Offs in the Fair Determination of Risk Scores, arXiv:1609.05807v2 (2016), §§1.1–1.2"
      url: "https://arxiv.org/pdf/1609.05807v2"
    - title: "Applied Statistics: From Data to Decisions, MS&E 125, Fairness in Algorithmic Decision-Making, section ‘The impossibility: you cannot satisfy them all’"
      url: "https://stanford-mse-125.github.io/book/lec20-fairness.html"
---

## Definition

Let $\Sigma$ and $\mathcal B$ be nonempty finite sets of feature types and score bins. For each group $t\in\{1,2\}$, let $N_t>0$ be its total mass and let $a_{t\sigma}\ge0$ satisfy $\sum_{\sigma\in\Sigma}a_{t\sigma}=1$. Let $p_\sigma\in[0,1]$ be the probability of the positive binary outcome $Y=1$ for feature type $\sigma$, with the same $p_\sigma$ in both groups. A randomized risk assignment consists of scores $v_b\in[0,1]$ for $b\in\mathcal B$ and a single matrix $X_{\sigma b}\ge0$ with $\sum_{b\in\mathcal B}X_{\sigma b}=1$ for each $\sigma$; conditional on feature type $\sigma$, the assignment chooses bin $b$ with probability $X_{\sigma b}$, independently of group and outcome. Thus, for a group-$t$ individual chosen according to its feature distribution, $\Pr_t(\Sigma=\sigma,Y=1,B=b)=a_{t\sigma}p_\sigma X_{\sigma b}$ and $\Pr_t(\Sigma=\sigma,Y=0,B=b)=a_{t\sigma}(1-p_\sigma)X_{\sigma b}$, and the assigned score is $S=v_B$. The expected positive mass is $\mu_t=N_t\sum_\sigma a_{t\sigma}p_\sigma$, and the group base rate is $\rho_t=\mu_t/N_t$.

The assignment is **calibrated within group $t$** if for every $b\in\mathcal B$,
$$
\sum_{\sigma\in\Sigma}a_{t\sigma}p_\sigma X_{\sigma b}=v_b\sum_{\sigma\in\Sigma}a_{t\sigma}X_{\sigma b}.
$$
This cross-multiplied condition also covers bins with zero assigned mass. The instance permits perfect prediction when $p_\sigma\in\{0,1\}$ for every feature type with $a_{1\sigma}+a_{2\sigma}>0$; a score assignment is perfectly predictive when $S=Y$ almost surely in each group.

## Definition references

[[def-probability-calibration]]: within each group, full reliability of the binary forecast $(1-S,S)$ gives the calibration identity for each distinct score value. This is the per-bin identity above when every score value occurs in only one bin; if distinct bins share a score, full reliability gives only the aggregate identity across those bins.

[Kleinberg, Mullainathan, and Raghavan, complete 23-page paper](https://arxiv.org/pdf/1609.05807v2): §§1.1–1.2 define the finite feature-type, group, randomized-bin model and calibration within each group.

[Applied Statistics: From Data to Decisions, full chapter](https://stanford-mse-125.github.io/book/lec20-fairness.html): the section “The impossibility: you cannot satisfy them all” treats calibration within groups for real-valued scores and distinguishes the score theorem from its binary-classifier companion.
