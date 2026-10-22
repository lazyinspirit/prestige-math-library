---
id: thm-csm-frontier-fk-square-critical-point
kind: theorem
title: "Exact square-lattice FK critical point and subcritical decay"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 8
deps:
  - def-countable-choice
  - def-csm-frontier-fk-infinite-volume-states
  - lem-csm-frontier-fk-crossing-amplification
dependency_roles:
  def-countable-choice: mathematical-premise
  def-csm-frontier-fk-infinite-volume-states: mathematical-premise
  lem-csm-frontier-fk-crossing-amplification: mathematical-premise
justified_by: []
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Vincent Beffara and Hugo Duminil-Copin, The self-dual point of the two-dimensional random-cluster model is critical for q >= 1"
      url: https://arxiv.org/pdf/1006.5073
      locator: "Theorems 1–2 and Section 4: the exact square-lattice threshold and subcritical exponential connectivity decay."
    - title: "Geoffrey Grimmett, The Random-Cluster Model, second edition"
      url: https://www.statslab.cam.ac.uk/~grg/books/rcm1-1.pdf
      locator: "Chapters 4 and 6: infinite-volume free/wired states, planar duality, and the square-lattice critical-point route."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. For every real $q\geq1$, put $p_{\rm sd}(q)=\sqrt q/(1+\sqrt q)$. For every $p>p_{\rm sd}(q)$, the wired state has $\theta^1(p,q)>0$; for every $p<p_{\rm sd}(q)$, both free and wired states have zero percolation probability and the free and wired critical thresholds $p_c^0(q),p_c^1(q)$ equal $p_{\rm sd}(q)$. For every $p<p_{\rm sd}(q)$, there are constants $C(p,q),c(p,q)>0$ such that every cylinder-limit FK state $\phi$ on $\mathbb Z^2$ satisfies
$$\phi(x\leftrightarrow y)\leq C(p,q)e^{-c(p,q)\lVert x-y\rVert_2}\qquad(x,y\in\mathbb Z^2).$$
No equality of the free and wired measures at $p=p_{\rm sd}(q)$, critical exponent, or order of transition is asserted.

## Statement references

[[def-countable-choice]]

[[def-csm-frontier-fk-infinite-volume-states]]

[[lem-csm-frontier-fk-crossing-amplification]]

## Facts & Assumptions

**Given:** Countable Choice ([[def-countable-choice]]), real $q\geq1$, $p\in(0,1)$, the square-lattice free and wired cylinder-limit FK states, and the crossing/sharpness interface of [[lem-csm-frontier-fk-crossing-amplification]].

[F1] For $b\in\{0,1\}$, $\theta^b(p,q)$ and $p_c^b(q)=\inf\{p:\theta^b(p,q)>0\}$ have the definitions in [[def-csm-frontier-fk-infinite-volume-states]].

[F2] Wired positivity above $p_{\rm sd}$, zero free and wired percolation below $p_{\rm sd}$, subcritical exponential decay for every cylinder-limit state, and free/wired threshold coincidence are proved in [[lem-csm-frontier-fk-crossing-amplification]].

## Proof

1.1 Fix $q\geq1$ and write $p_s=p_{\rm sd}(q)$. By [F2], $\theta^1(p,q)>0$ for every $p>p_s$ and $\theta^1(p,q)=0$ for every $p<p_s$. Therefore the infimum defining $p_c^1(q)$ is $p_s$: no parameter below $p_s$ belongs to the defining set, while every parameter above $p_s$ does. [F1, F2, algebra]

2.1 The free/wired threshold-coincidence conclusion in [F2] gives $p_c^0(q)=p_c^1(q)=p_s$. This is a statement about the two infima; it does not identify the measures or their percolation probabilities at $p=p_s$. [F1, F2, step 1.1]

3.1 For $p<p_s$, [F2] directly supplies constants $C(p,q),c(p,q)>0$ for which the displayed two-point bound holds uniformly for every arbitrary-boundary cylinder-limit FK state. These are exactly the cylinder-limit states in the statement, with the definition in [F1]. The stated choice hypothesis is the one used by the supplier to construct the probability laws and its countable subcritical coupling. [F1, F2] ∎

## Remarks

The threshold and subcritical conclusions apply to all real $q\geq1$. Countable Choice binds the actual infinite-volume probability-law and coupling construction; the underlying finite numerical threshold result has a separate choice-free local proof. No assertion at criticality is added.

