---
id: lem-homogeneous-margin-constraints-satisfy-mfcq
kind: lemma
title: "Homogeneous margin constraints satisfy MFCQ"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-margin-kkt-and-mfcq
  - def-homogeneous-classifier-margin-and-exponential-risk
  - lem-clarke-euler-identity-for-homogeneous-margins
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Kaifeng Lyu and Jian Li, Gradient Descent Maximizes the Margin of Homogeneous Neural Networks, Appendix C.2, Lemma C.7"
      url: "https://arxiv.org/pdf/1906.05890"
---

## Statement

For homogeneous sample margins $q_i$ of degree $L>0$, every feasible point of the problem $\min_\theta\frac12\|\theta\|_2^2$ subject to $q_i(\theta)\ge1$ satisfies MFCQ in the margin convention.

## Statement references

[[def-margin-kkt-and-mfcq|Margin-form MFCQ definition]]

[[def-homogeneous-classifier-margin-and-exponential-risk|Homogeneous sample-margin convention]]

[[lem-clarke-euler-identity-for-homogeneous-margins|Clarke Euler identity]]

[Kaifeng Lyu and Jian Li, *Gradient Descent Maximizes the Margin of Homogeneous Neural Networks*, Appendix C.2, Lemma C.7 (its MFCQ sign convention is inconsistent)](https://arxiv.org/pdf/1906.05890)

[[def-margin-kkt-and-mfcq|Sign-consistent local MFCQ convention]]

## Facts & Assumptions

**Given:** The degree-$L$ homogeneous classifier margins and a feasible point $\theta$.

[F1] [[def-homogeneous-classifier-margin-and-exponential-risk]]: each sample margin satisfies $q_i(c\theta)=c^Lq_i(\theta)$ for every $c>0$, with $L>0$.

[F2] [[lem-clarke-euler-identity-for-homogeneous-margins]]: for $h_i\in\partial^\circ q_i(\theta)$, $\langle\theta,h_i\rangle=Lq_i(\theta)$ when $\theta\ne0$.

[F3] [[def-margin-kkt-and-mfcq]]: at a feasible point, MFCQ in margin form asks for one direction whose pairing with every Clarke subgradient of every active margin is strictly positive.

## Proof

**Proof technique:** use the parameter vector itself as the strict feasible direction.

1.1 By [F1], $q_i(0)=q_i(2\cdot0)=2^Lq_i(0)$. Since $2^L>1$, this forces $q_i(0)=0$ for every $i$. Thus a feasible point cannot be $\theta=0$, because feasibility requires every margin to be at least one. [F1, given, algebra]

2.1 Choose $v=\theta$. If no constraint is active, the universal condition in [F3] is vacuous. Otherwise, for each active index $i$, $q_i(\theta)=1$ and every $h_i\in\partial^\circ q_i(\theta)$ satisfies $\langle h_i,v\rangle=\langle\theta,h_i\rangle=Lq_i(\theta)=L>0$ by [F2]. Hence the same direction $v$ satisfies MFCQ for all active margins. [F2, F3, step 1.1, given, choose, algebra] ∎
