---
id: thm-calibration-and-balance-incompatibility-for-risk-scores
kind: theorem
title: "Calibration and both outcome-balance criteria force equal base rates or perfect prediction"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-group-risk-score-and-calibration
  - def-positive-and-negative-score-balance
  - lem-score-means-as-threshold-rate-areas
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Jon Kleinberg, Sendhil Mullainathan, and Manish Raghavan, Inherent Trade-Offs in the Fair Determination of Risk Scores, arXiv:1609.05807v2 (2016), Theorem 1.1 and §2 proof"
      url: "https://arxiv.org/pdf/1609.05807v2"
    - title: "Applied Statistics: From Data to Decisions, MS&E 125, Fairness in Algorithmic Decision-Making, section ‘The impossibility: you cannot satisfy them all’"
      url: "https://stanford-mse-125.github.io/book/lec20-fairness.html"
---

## Statement

Let $\Sigma$ and $\mathcal B$ be nonempty finite sets. In group $t\in\{1,2\}$, feature type $\sigma\in\Sigma$ has proportion $a_{t\sigma}\ge0$, where $\sum_\sigma a_{t\sigma}=1$, and total mass $N_t>0$. The positive binary outcome $Y=1$ has probability $p_\sigma\in[0,1]$ for feature type $\sigma$, with $p_\sigma$ the same in both groups. A common randomized assignment chooses bin $b\in\mathcal B$ from feature type $\sigma$ with probability $X_{\sigma b}\ge0$, where $\sum_bX_{\sigma b}=1$; this choice is independent of group and outcome. Bin $b$ has score $v_b\in[0,1]$, and $S=v_B$. Define $\rho_t=\sum_\sigma a_{t\sigma}p_\sigma$ and $\mu_t=N_t\rho_t$. Assume $0<\mu_t<N_t$ for both groups. Define the positive- and negative-outcome mean scores by
$$
\alpha_t=\frac{\sum_{\sigma,b}a_{t\sigma}p_\sigma X_{\sigma b}v_b}{\rho_t},\qquad \beta_t=\frac{\sum_{\sigma,b}a_{t\sigma}(1-p_\sigma)X_{\sigma b}v_b}{1-\rho_t}.
$$
Suppose $\alpha_1=\alpha_2$ and $\beta_1=\beta_2$, and the assignment is calibrated within each group, meaning
$$
\sum_\sigma a_{t\sigma}p_\sigma X_{\sigma b}=v_b\sum_\sigma a_{t\sigma}X_{\sigma b}
$$
for every group $t$ and bin $b$, and suppose the mean score among positive outcomes is equal across groups and the mean score among negative outcomes is equal across groups. Then either $\rho_1=\rho_2$ or $S=Y$ almost surely under each group law. In the latter case, every feature type with positive mass in either group has $p_\sigma\in\{0,1\}$, so the instance permits perfect prediction.

## Statement references

[Kleinberg, Mullainathan, and Raghavan, complete 23-page paper](https://arxiv.org/pdf/1609.05807v2): Theorem 1.1 and the complete proof in §2 establish the equal-base-rate or perfect-prediction alternatives under these three named score criteria.

[Applied Statistics: From Data to Decisions, full chapter](https://stanford-mse-125.github.io/book/lec20-fairness.html): the section “The impossibility: you cannot satisfy them all” states the real-valued score theorem and distinguishes it from the separate binary-classifier theorem.

## Facts & Assumptions

**Given:** The finite two-group risk-score model in the statement, groupwise calibration, and balance of the positive-class and negative-class mean scores. Prove equal base rates or perfect prediction.

[F1] [[def-group-risk-score-and-calibration]]: the group law is finite, and the same row-stochastic feature-to-bin assignment is used independently of group and outcome, with scores in $[0,1]$.

[F2] [[def-group-risk-score-and-calibration]]: for every group and bin, calibration gives $\Pr_t(Y=1,B=b)=v_b\Pr_t(B=b)$.

[F3] [[def-positive-and-negative-score-balance]]: the class-conditioned means are $\alpha_t=\mathbb E_t[S\mid Y=1]$ and $\beta_t=\mathbb E_t[S\mid Y=0]$; balance means $\alpha_1=\alpha_2$ and $\beta_1=\beta_2$.

[F4] [[lem-score-means-as-threshold-rate-areas]]: in each group, $\alpha_t=\int_0^1\operatorname{TPR}_t(u)\,du$ and $\beta_t=\int_0^1\operatorname{FPR}_t(u)\,du$.

## Proof

1.1 Set $\alpha=\alpha_1=\alpha_2$ and $\beta=\beta_1=\beta_2$ by [F3]; since $S\in[0,1]$, both common means lie in $[0,1]$. By [F4], these means are the respective areas under the groups' true-positive-rate and false-positive-rate threshold functions. Summing the calibration identity [F2] over all bins gives $\mathbb E_t[S]=\Pr_t(Y=1)=\rho_t$ for each $t$. Partitioning this finite expectation by $Y$ gives $\rho_t=\rho_t\alpha+(1-\rho_t)\beta$, hence $\rho_t(1-\alpha)=(1-\rho_t)\beta$. [given, F2, F3, F4, algebra]

2.1 If $\alpha<1$, then $1-\alpha>0$ and $1-\rho_t>0$, so the last identity yields $\rho_t/(1-\rho_t)=\beta/(1-\alpha)$ for both groups. Therefore $\rho_1/(1-\rho_1)=\rho_2/(1-\rho_2)$; cross-multiplication gives $\rho_1=\rho_2$. If instead $\alpha=1$, the identity and $1-\rho_t>0$ give $\beta=0$. [given, step 1.1, algebra]

3.1 In the branch $\alpha=1$ and $\beta=0$, each group has positive and negative mass by hypothesis. The score has finite support in $[0,1]$, so a conditional mean of one on $Y=1$ is possible only when every positive-mass score value is $1$; a conditional mean of zero on $Y=0$ is possible only when every positive-mass score value is $0$. Thus $S=Y$ almost surely in both groups. If a feature type $\sigma$ with positive mass had $0<p_\sigma<1$, both outcomes would have positive mass at $\sigma$. The same assignment row $X_{\sigma b}$ is used for both outcomes [F1], so their conditional score laws would agree, contradicting concentration at scores $1$ and $0$, respectively. Hence every occupied feature type has $p_\sigma\in\{0,1\}$, which permits perfect prediction. [given, F1, F3, step 2.1, algebra] ∎

## Remarks

The proof is choice-free: it uses finite sums, finite conditional means, and algebra only. The theorem concerns the named calibration and class-conditioned score means; it does not assert a theorem about demographic parity, equalized odds, causal fairness, or all fairness criteria. The approximate result in KMR Theorem 1.2 is not asserted here; it requires its own exact approximation definitions and function $f(\varepsilon)$.
