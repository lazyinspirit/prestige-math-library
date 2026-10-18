---
id: thm-maxwell-edge-fem-energy-conservation
kind: theorem
title: Semidiscrete edge-face Maxwell energy conservation
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps:
  - def-maxwell-edge-fem-semidiscretization
  - lem-maxwell-finite-dimensional-ode-existence-uniqueness
  - def-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Long Chen, Finite Element Methods for Maxwell Equations, complete lecture notes
      url: https://www.math.uci.edu/~chenlong/226/FEMMaxwell.pdf
      locator: "§2, printed pp. 6–8: the coefficient-weighted Maxwell curl-curl variational pairing and edge-element mass matrices. The semidiscrete first-order energy identity is proved locally."
    - title: John B. Schneider, Understanding the Finite-Difference Time-Domain Method
      url: https://eecs.wsu.edu/~schneidj/ufdtd/ufdtd.pdf
      locator: "Chapter 2 §2.14 and Chapter 9 §9.3, printed pp. 25–26 and 246–249: Maxwell field energy convention and staggered curl exchange."
verification:
  precheck: pass
---

## Statement

Assume Countable Choice only as inherited from the real $H(\operatorname{div})$/Piola finite-element space interfaces in [[def-maxwell-edge-fem-semidiscretization]]. For the lossless source-free semidiscretization
$$M_e\dot e-C^TM_b b=0,\qquad \dot b+Ce=0,$$
the weighted energy
$$\mathcal H_h(t)=\frac12\|e(t)\|_{M_e}^2+\frac12\|b(t)\|_{M_b}^2$$
is constant in time. The local matrix calculation uses no further choice principle.

## Facts & Assumptions


**Given:** The finite-dimensional semidiscrete fields, symmetric positive definite matrices, and the source-free equations above.

[A1] The Countable Choice Axiom is the principle that every countable family of nonempty sets has a choice function; it is included only because the imported FE-space and Piola definitions declare it. ([[def-countable-choice]])

[F1] $M_e,M_b$ are symmetric positive definite and the semidiscrete equations are $M_e\dot e=C^TM_b b$ and $M_b\dot b=-M_bCe$. ([[def-maxwell-edge-fem-semidiscretization]])

## Proof

1.1 In the declared Countable Choice branch [A1], the FE bases and matrices in [F1] are fixed finite objects; the calculation below makes no selection. Differentiating the electric part gives $\frac{d}{dt}\frac12 e^TM_ee=e^TM_e\dot e=e^TC^TM_bb$. [A1, F1, algebra]

2.1 Differentiating the magnetic part gives $\frac{d}{dt}\frac12 b^TM_bb=b^TM_b\dot b=-b^TM_bCe=-e^TC^TM_bb$, because the scalar transpose equals itself. The two derivatives cancel, so $\mathcal H_h'(t)=0$ throughout the interval of existence. [F1, step 1.1, algebra] ∎
