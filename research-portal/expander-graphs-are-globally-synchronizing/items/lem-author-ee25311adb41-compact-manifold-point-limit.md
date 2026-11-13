---
id: lem-author-ee25311adb41-compact-manifold-point-limit
kind: lemma
title: Finite tail length and point convergence on a compact analytic manifold
domain: mathematics
status: draft
origin: pipeline
deps:
  - lem-author-ee25311adb41-analytic-metric-transfer
  - lem-author-ee25311adb41-compact-critical-cluster
  - lem-author-ee25311adb41-gradient-tail-length
  - lem-author-ee25311adb41-analytic-ball-trapping
  - math:def-countable-choice
  - math:def-riemannian-distance-on-a-connected-manifold
  - math:thm-riemannian-distance-is-a-metric
  - math:thm-the-riemannian-distance-topology-is-the-manifold-topology
  - math:def-riemannian-speed-and-length
dependency_roles:
  lem-author-ee25311adb41-analytic-metric-transfer: mathematical-premise
  lem-author-ee25311adb41-compact-critical-cluster: mathematical-premise
  lem-author-ee25311adb41-gradient-tail-length: mathematical-premise
  lem-author-ee25311adb41-analytic-ball-trapping: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:def-riemannian-distance-on-a-connected-manifold: mathematical-premise
  math:thm-riemannian-distance-is-a-metric: mathematical-premise
  math:thm-the-riemannian-distance-topology-is-the-manifold-topology: mathematical-premise
  math:def-riemannian-speed-and-length: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 7
---

## Statement

Assume countable choice. On every nonempty connected compact real analytic manifold without boundary with any smooth Riemannian metric, every downward gradient trajectory of a real analytic potential has finite length and converges to one critical point. Analytic manifold, metric, potential and gradient have the conventions in [[lem-author-ee25311adb41-analytic-metric-transfer]]; no isolation of critical points is assumed.

## Facts & Assumptions

[F1] The compact critical-cluster lemma gives $p$, $U(p)=L$, and $q(t_j)\to p$. The transfer and trapping lemmas give a whole tail in a neighborhood satisfying the gradient inequality. The local length estimate bounds length after any later $s$ by $e(s)^{1-\rho}/[c(1-\rho)]$, where $e(s)=U(q(s))-L\to0$. Distance is at most joining-curve length.

[F2] On a connected Riemannian manifold, $d_g$ is a finite metric; in particular it satisfies the triangle inequality ([[math:thm-riemannian-distance-is-a-metric]]).

[F9] Exact suppliers: [[lem-author-ee25311adb41-analytic-metric-transfer]], [[lem-author-ee25311adb41-compact-critical-cluster]], [[lem-author-ee25311adb41-gradient-tail-length]], [[lem-author-ee25311adb41-analytic-ball-trapping]], [[math:def-countable-choice]], [[math:def-riemannian-distance-on-a-connected-manifold]], [[math:thm-riemannian-distance-is-a-metric]], [[math:thm-the-riemannian-distance-topology-is-the-manifold-topology]], [[math:def-riemannian-speed-and-length]].

## Proof

**Given:** The data and hypotheses of the Statement.

**Goal:** Establish its conclusion.

1.1 Apply the first four lemmas to obtain the critical cluster point $p$, a trapped tail starting at $a$, and constants $c>0$, $0<\rho<1$. For every $s\ge a$ and $b>s$ the length estimate gives $\int_s^b\|q'\|_gdt\le e(s)^{1-\rho}/[c(1-\rho)]$. Taking the supremum over $b$ proves finite tail length and shows that the bound tends to zero as $s\to\infty$. The initial segment has finite length because its speed is continuous on the compact interval $[0,a]$. [F1, F9, given]

2.1 Fix $s\ge a$. For cluster times $t_j\ge s$, distance is at most the length of $q|_{[s,t_j]}$, hence $d_g(q(s),q(t_j))\le e(s)^{1-\rho}/[c(1-\rho)]$. Letting $j\to\infty$ and using $q(t_j)\to p$ gives $d_g(q(s),p)\le e(s)^{1-\rho}/[c(1-\rho)]\to0$. The limit $p$ is critical by the cluster lemma. This proves convergence to a single point without assuming that it is isolated or a local minimum. [F1, F2, F9, step 1.1] ∎
