---
id: cor-three-closed-sets-covering-s2-contain-an-antipodal-pair
kind: corollary
title: "One member of every three-set closed cover of $S^2$ contains an antipodal pair"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-borsuk-ulam-in-dimension-two, lem-distance-to-set-is-lipschitz, thm-metric-spaces-are-tychonoff-and-perfectly-normal, def-euclidean-spheres-and-closed-balls]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Corollary 1.11"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
pipeline_run: null
---

## Statement

If three closed subsets $A_1,A_2,A_3$ cover $S^2$, then one of them contains a pair of antipodal points: there are $i\in\{1,2,3\}$ and $x\in S^2$ with $x,-x\in A_i$.

## Facts & Assumptions

**Given:** Closed subsets $A_1,A_2,A_3\subseteq S^2$ with $S^2=A_1\cup A_2\cup A_3$.

[L1] For every continuous map $f:S^2\to\mathbb R^2$, there is an $x\in S^2$ with $f(x)=f(-x)$ ([[thm-borsuk-ulam-in-dimension-two]]).

[L2] If $A$ is a nonempty subset of a metric space, then $|d(x,A)-d(y,A)|\le d(x,y)$, so $x\mapsto d(x,A)$ is continuous ([[lem-distance-to-set-is-lipschitz]]).

[L3] For every closed subset $C$ of a metric space there is a continuous real-valued function with zero set $C$; for nonempty $C$ one may use $d(x,C)$, and for $C=\varnothing$ one may use the constant function $1$ ([[thm-metric-spaces-are-tychonoff-and-perfectly-normal]]).

[F1] The sphere $S^2$ carries the Euclidean subspace metric ([[def-euclidean-spheres-and-closed-balls]]).

## Proof

**Proof technique:** direct.

1.1 For $i=1,2$, define $\delta_i(x)=d(x,A_i)$ when $A_i\ne\varnothing$, and define $\delta_i(x)=1$ when $A_i=\varnothing$. By [L2] and [L3], each $\delta_i$ is continuous and its zero set is exactly $A_i$. [given, F1, L2, L3]

2.1 Apply [L1] to $\delta=(\delta_1,\delta_2):S^2\to\mathbb R^2$. There is $x\in S^2$ such that $\delta_1(x)=\delta_1(-x)$ and $\delta_2(x)=\delta_2(-x)$. [step 1.1, L1, choose]

3.1 If either common value is zero, then $x$ and $-x$ both lie in the corresponding $A_i$. If both common values are positive, neither point lies in $A_1\cup A_2$, so the covering hypothesis puts both in $A_3$. In every case one cover member contains the antipodal pair. [step 1.1, step 2.1, L3, given] ∎
