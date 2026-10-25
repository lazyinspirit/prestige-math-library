---
id: lem-local-margin-minimum-satisfies-kkt-under-mfcq
kind: lemma
title: "A constrained local margin minimum satisfies Clarke KKT under MFCQ"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-clarke-subdifferential-and-gradient-flow
  - def-margin-kkt-and-mfcq
  - thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
  - thm-strict-separation-of-a-point-from-a-closed-convex-set
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the convex-hull and multiplier arguments use finite-dimensional compactness and separation."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Kaifeng Lyu and Jian Li, Gradient Descent Maximizes the Margin of Homogeneous Neural Networks, Appendix C.1–C.2"
      url: "https://arxiv.org/pdf/1906.05890"
    - title: "Matus Telgarsky, Deep Learning Theory lecture notes, §9.1"
      url: "https://mjt.cs.illinois.edu/dlt/"
---

## Statement

Let $N,d\ge1$ and let $q_1,\ldots,q_N:\mathbb R^d\to\mathbb R$ be locally Lipschitz, and let $\theta_*$ be a local minimum of $\frac12\|\theta\|_2^2$ among points satisfying $q_i(\theta)\ge1$. If $\theta_*$ satisfies MFCQ in the margin convention, then $\theta_*$ is a Clarke KKT point for these margin constraints.

## Statement references

[[def-clarke-subdifferential-and-gradient-flow|Clarke subdifferential convention]]

[[def-margin-kkt-and-mfcq|Margin-form KKT and MFCQ definitions]]

[Kaifeng Lyu and Jian Li, *Gradient Descent Maximizes the Margin of Homogeneous Neural Networks*, Appendix C.1–C.2](https://arxiv.org/pdf/1906.05890)

[Matus Telgarsky, *Deep Learning Theory* lecture notes, §9.1](https://mjt.cs.illinois.edu/dlt/)

## Facts & Assumptions

**Given:** The locally Lipschitz margins, the feasible region, a constrained local minimizer $\theta_*$, and margin-form MFCQ there.

[F1] [[def-clarke-subdifferential-and-gradient-flow]]: the Clarke generalized directional derivative is the support function of the compact convex Clarke subdifferential.

[F2] [[def-margin-kkt-and-mfcq]]: at an active margin $q_i(\theta_*)=1$, MFCQ supplies one direction $v$ with $\langle h_i,v\rangle>0$ for every $h_i\in\partial^\circ q_i(\theta_*)$; KKT requires nonnegative multipliers, stationarity, and complementary slackness.

[F3] [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]: a closed and bounded subset of a finite-dimensional Euclidean space is compact.

[F4] [[thm-strict-separation-of-a-point-from-a-closed-convex-set]]: a point outside a nonempty closed convex set is strictly separated from that set by a linear functional.

## Proof

**Proof technique:** derive Fritz-John multipliers by finite-dimensional separation, then use MFCQ to rule out the abnormal objective multiplier.

1.1 Write $f(\theta)=\frac12\|\theta\|_2^2$ and $g_i(\theta)=1-q_i(\theta)$. Then $f$ is differentiable with $\partial^\circ f(\theta_*)=\{\theta_*\}$, and $\partial^\circ g_i(\theta_*)=-\partial^\circ q_i(\theta_*)$ by the Clarke definition. Let $I$ be the finite active set $\{i:q_i(\theta_*)=1\}$. [F1, F2, given, algebra]

2.1 Set $S:=\partial^\circ f(\theta_*)\cup\bigcup_{i\in I}\partial^\circ g_i(\theta_*)$. Each constituent is compact and convex, so $S$ is bounded. In any finite convex combination of points of $S$, group together the points from each constituent; convexity then writes the combination using at most one point from each of the finitely many constituents. Therefore $C:=\operatorname{conv}(S)$ is the continuous image of the product of those constituents and their finite coefficient simplex. That product is closed and bounded in a finite-dimensional Euclidean space, hence compact by [F3], so $C$ is compact, nonempty, and convex. [F1, F3, step 1.1, construct]

3.1 If $0\notin C$, [F4] strictly separates $0$ from $C$, giving a direction $v$ with $\langle h,v\rangle<0$ for every $h\in S$. By [F1], this means $f^\circ(\theta_*;v)<0$ and $g_i^\circ(\theta_*;v)<0$ for every active $i$. The definition of each limsup gives a positive step bound for which each corresponding difference quotient along $\theta_*+tv$ is negative; taking the minimum of these finitely many bounds makes $f(\theta_*+tv)<f(\theta_*)$ and $g_i(\theta_*+tv)<0$ simultaneously for every active constraint. Continuity preserves the already strict inactive constraints. This is a feasible descent from a constrained local minimum, a contradiction. Hence $0\in C$. [F1, F4, step 2.1, given, assume-contra, discharge-contradiction]

4.1 Since $0\in\operatorname{conv}(S)$ and each Clarke subdifferential in $S$ is convex, group the finite convex combination by its constituent set. There are coefficients $\alpha_0\ge0$ and $\alpha_i\ge0$ for active $i$, with $\alpha_0+\sum_{i\in I}\alpha_i=1$, and vectors $h_0\in\partial^\circ f(\theta_*)$, $h_i\in\partial^\circ g_i(\theta_*)$ such that $0=\alpha_0h_0+\sum_{i\in I}\alpha_i h_i$. [F1, step 3.1, construct]

5.1 If there are no active constraints, the coefficients in step 4.1 sum to one, so $\alpha_0=1$. Otherwise, if $\alpha_0=0$, some active coefficient is positive; dotting the equality in step 4.1 with the MFCQ direction from [F2] makes the right-hand sum strictly negative, a contradiction. In either case $\alpha_0>0$. Divide by $\alpha_0$, set $\lambda_i=\alpha_i/\alpha_0$ for active indices and $\lambda_i=0$ otherwise, and put $\widetilde h_i=-h_i\in\partial^\circ q_i(\theta_*)$. Then $\theta_*=\sum_i\lambda_i\widetilde h_i$, all $\lambda_i\ge0$, and $\lambda_i(q_i(\theta_*)-1)=0$ for every $i$. These are exactly the margin-form Clarke KKT conditions in [F2]. [F2, step 4.1, algebra] ∎
