---
id: lem-approximate-margin-kkt-limit-under-mfcq
kind: lemma
title: "Limits of approximate margin-KKT points under MFCQ"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-clarke-subdifferential-and-gradient-flow
  - def-margin-kkt-and-mfcq
  - thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
justified_by: []
proof_strategy: direct
axiom_use: "No choice principle is used; exact KKT witnesses follow from the finite-intersection property for nested compact sets in a finite-dimensional Euclidean box."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Kaifeng Lyu and Jian Li, Gradient Descent Maximizes the Margin of Homogeneous Neural Networks, Appendix C.1, Theorem C.4"
      url: "https://arxiv.org/pdf/1906.05890"
    - title: "Matus Telgarsky, Deep Learning Theory lecture notes, §9.1"
      url: "https://mjt.cs.illinois.edu/dlt/"
---

## Statement

Let $N,d\ge1$ and let $q_1,\ldots,q_N:\mathbb R^d\to\mathbb R$ be locally Lipschitz. Let $\theta_*$ be feasible for $q_i(\theta)\ge1$ and satisfy MFCQ in the margin convention. Suppose that for every $\varepsilon>0$ there is a feasible $\theta_\varepsilon$ with $\|\theta_\varepsilon-\theta_*\|_2\le\varepsilon$ and multipliers/subgradients witnessing that $\theta_\varepsilon$ is an $(\varepsilon,\varepsilon)$-approximate Clarke KKT point. Then $\theta_*$ is a Clarke KKT point.

## Statement references

[[def-clarke-subdifferential-and-gradient-flow|Clarke subdifferential and closed-graph convention]]

[[def-margin-kkt-and-mfcq|Approximate margin-KKT and MFCQ definitions]]

[Kaifeng Lyu and Jian Li, *Gradient Descent Maximizes the Margin of Homogeneous Neural Networks*, Appendix C.1, Theorem C.4](https://arxiv.org/pdf/1906.05890)

[Matus Telgarsky, *Deep Learning Theory* lecture notes, §9.1](https://mjt.cs.illinois.edu/dlt/)

## Facts & Assumptions

**Given:** Locally Lipschitz margins, a feasible point satisfying MFCQ, and for every tolerance a nearby feasible approximate KKT witness with stationarity and complementarity errors no larger than that tolerance.

[F1] [[def-clarke-subdifferential-and-gradient-flow]]: Clarke subdifferentials are compact, locally bounded, and have closed graph; for fixed $v$, their support function $q_i^\circ(\theta;v)$ is upper semicontinuous in $\theta$.

[F2] [[def-margin-kkt-and-mfcq]]: approximate KKT supplies nonnegative multipliers, subgradients, and the two error bounds; exact KKT is the corresponding zero-error stationarity and complementary-slackness condition.

[F3] [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]: closed bounded subsets of finite-dimensional Euclidean space are compact.

## Proof

**Proof technique:** bound all approximate witnesses uniformly with the MFCQ direction, then apply the finite-intersection property to nested compact sets of witnesses.

1.1 Let $I=\{i:q_i(\theta_*)=1\}$. If $I=\varnothing$, every constraint has positive slack near $\theta_*$. Local boundedness in [F1] gives a common bound $M$ on all nearby subgradients. For any sufficiently small $\varepsilon$, the approximate witness in [F2] satisfies $\lambda_i\le\varepsilon/c_i$ for positive local slack bounds $c_i$, so its stationarity residual gives $\|\theta_*\|_2\le2\varepsilon+M\varepsilon\sum_i c_i^{-1}$. This holds for every small $\varepsilon$, hence $\theta_*=0$; setting all exact multipliers to zero gives KKT. [F1, F2, given, algebra]

1.2 Suppose $I\ne\varnothing$. By MFCQ choose $v$ and let $c>0$ be a common lower bound for $\langle h,v\rangle$ over active $i$ and $h\in\partial^\circ q_i(\theta_*)$; such a bound exists by compactness and finiteness. Then $q_i^\circ(\theta_*;-v)\le-c$ for each active $i$. Upper semicontinuity in [F1] gives a neighborhood where every active subgradient satisfies $\langle h,v\rangle\ge c/2$. Shrink it so each inactive constraint has slack at least $c_i>0$ and all subgradients are bounded by $M$. For any sufficiently small $\varepsilon$, the approximate witness has $\lambda_i\le\varepsilon/c_i$ for inactive $i$. Dotting its stationarity equation with $v$ therefore bounds the sum of active multipliers by $\frac{2}{c}((\|\theta_*\|_2+2\varepsilon)\|v\|_2+M\|v\|_2\varepsilon\sum_{i\notin I}c_i^{-1})$. Thus, for all sufficiently small $\varepsilon$, all multipliers and subgradients in every witness are uniformly bounded. [F1, F2, given, construct, algebra]

2.1 Choose an integer $m_0$ large enough that every approximate witness with $\varepsilon=1/m$ for $m\ge m_0$ lies in a fixed closed bounded box $B$ of the finite-dimensional space of parameters, multipliers, and subgradients, using step 1.2. For each $m\ge m_0$, let $K_m\subseteq B$ consist of feasible witnesses with $\|\theta-\theta_*\|_2\le1/m$, stationarity residual at most $1/m$, and aggregate complementarity residual at most $1/m$. The hypothesis makes every $K_m$ nonempty; continuity and the closed-graph property in [F1] make it closed. Hence each $K_m$ is compact by [F3], and $K_{m+1}\subseteq K_m$. [F1, F2, F3, step 1.2, construct]

3.1 The nested family $(K_m)_{m\ge m_0}$ has the finite-intersection property, since every finite intersection equals its smallest-index member. Compactness of $K_{m_0}$ therefore makes $\bigcap_{m\ge m_0}K_m$ nonempty. Any tuple in this intersection has $\theta=\theta_*$, zero stationarity residual, and zero complementarity residual, because each corresponding norm/error is at most $1/m$ for every $m$. It is consequently an exact Clarke KKT witness by [F2]. This argument selects one point from one nonempty intersection and uses no choice principle. [F1, F2, F3, step 2.1, algebra] ∎
