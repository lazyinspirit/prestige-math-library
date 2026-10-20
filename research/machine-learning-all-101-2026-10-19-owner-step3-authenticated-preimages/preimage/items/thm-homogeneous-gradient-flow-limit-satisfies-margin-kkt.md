---
id: thm-homogeneous-gradient-flow-limit-satisfies-margin-kkt
kind: theorem
title: "Homogeneous gradient-flow limit points satisfy margin KKT conditions"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - def-homogeneous-classifier-margin-and-exponential-risk
  - def-margin-kkt-and-mfcq
  - lem-approximate-margin-kkt-limit-under-mfcq
  - lem-homogeneous-clarke-flow-produces-approximate-margin-kkt-points
  - lem-homogeneous-margin-constraints-satisfy-mfcq
justified_by: []
proof_strategy: direct
axiom_use: "No additional choice principle is used; the theorem composes the tolerance-wise and finite-intersection arguments proved by its local suppliers."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Kaifeng Lyu and Jian Li, Gradient Descent Maximizes the Margin of Homogeneous Neural Networks, Theorem 4.4 and Appendix C.4"
      url: "https://arxiv.org/pdf/1906.05890"
    - title: "Matus Telgarsky, Deep Learning Theory lecture notes, §§9.1 and 10.2"
      url: "https://mjt.cs.illinois.edu/dlt/"
---

## Statement

Let $N,p\ge1$ and let $q_1,\ldots,q_N:\mathbb R^p\to\mathbb R$ be locally Lipschitz functions that are positively homogeneous of common degree $L>0$ and admit the Clarke chain rule along absolutely continuous arcs. Set $\mathcal L(\theta)=\sum_i e^{-q_i(\theta)}$. Suppose $\theta:[0,\infty)\to\mathbb R^p$ is a global Clarke gradient-flow trajectory for $\mathcal L$ and $\mathcal L(\theta(t_0))<1$ at some $t_0\ge0$. Then every limit point $u_*$ of $\theta(t)/\|\theta(t)\|_2$ as $t\to\infty$ satisfies $q_{\min}(u_*)>0$, and there is an $\alpha>0$ such that $\alpha u_*$ is a Clarke KKT point of minimizing $\frac12\|\theta\|_2^2$ subject to $q_i(\theta)\ge1$ for all $i$.

## Statement references

[[def-clarke-subdifferential-and-gradient-flow|Global Clarke trajectory convention]]

[[def-margin-kkt-and-mfcq|Margin-form Clarke KKT definition]]

[[lem-homogeneous-clarke-flow-produces-approximate-margin-kkt-points|Cluster points and tolerance-wise approximate KKT witnesses]]

[Kaifeng Lyu and Jian Li, *Gradient Descent Maximizes the Margin of Homogeneous Neural Networks*, Theorem 4.4 and Appendix C.4](https://arxiv.org/pdf/1906.05890)

[Matus Telgarsky, *Deep Learning Theory* lecture notes, §§9.1 and 10.2](https://mjt.cs.illinois.edu/dlt/)

## Facts & Assumptions

**Given:** The homogeneous margin model, exponential loss, a global Clarke flow, and a time when the loss is below one.

[F1] [[def-homogeneous-classifier-margin-and-exponential-risk]]: each margin is degree-$L$ positively homogeneous and the empirical risk is $\mathcal L=\sum_i e^{-q_i}$.

[F2] [[def-margin-kkt-and-mfcq]]: a Clarke KKT point is feasible and has nonnegative multipliers, subgradients, stationarity, and complementary slackness; MFCQ is positivity of every active margin subgradient on one direction.

[F3] [[lem-homogeneous-clarke-flow-produces-approximate-margin-kkt-points]]: each normalized-direction cluster point has positive minimum margin and, for every tolerance, admits a nearby feasible rescaling with stationarity and complementarity errors at most that tolerance.

[F4] [[lem-approximate-margin-kkt-limit-under-mfcq]]: a feasible point satisfying MFCQ is KKT if, for every positive tolerance, it has a nearby feasible approximate KKT witness with both errors at most that tolerance.

[F5] [[lem-homogeneous-margin-constraints-satisfy-mfcq]]: every feasible point of these positive-degree homogeneous margin constraints satisfies MFCQ.

## Proof

**Proof technique:** approximate each directional limit by feasible approximate KKT points, then pass to an exact KKT point using MFCQ.

1.1 Fix a limit point $u_*$ of the normalized trajectory. By [F3], $q_{\min}(u_*)>0$ and, for every $\varepsilon>0$, there is a feasible $(\varepsilon,\varepsilon)$-approximate KKT point within $\varepsilon$ of $\theta_*:=u_*/q_{\min}(u_*)^{1/L}$. [F1, F3, given, choose]

2.1 The limit $\theta_*$ is feasible and satisfies MFCQ by [F5]. Applying [F4] directly to the tolerance-wise witnesses from step 1.1 shows that $\theta_*$ is a Clarke KKT point. Taking $\alpha=q_{\min}(u_*)^{-1/L}>0$ gives $\theta_*=\alpha u_*$, as required. [F2, F4, F5, step 1.1, algebra] ∎
