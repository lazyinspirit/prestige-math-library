---
id: prop-emg-potential-ricci-wave-identity
kind: proposition
title: Lorenz potential wave contains Ricci coupling
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
proof_strategy: direct
deps: [def-emg-electrovacuum-cauchy-system, def-emg-lorentzian-forms, lem-emg-lorentz-hodge-calculus, lem-gr-contracted-commutator-identity]
dependency_roles:
  def-emg-electrovacuum-cauchy-system: mathematical-premise
  def-emg-lorentzian-forms: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  lem-gr-contracted-commutator-identity: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity, Cambridge lecture notes, October 12 2022 revision, sections 4.2 and 6.2"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      locator: "Section 4.2 fixes the vector Ricci identity and curvature sign; section 6.2, equation (6.8), states the Maxwell equations in a curved spacetime."
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Lecture Notes in Physics 540 (2000), section 5.4"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
      locator: "Section 5.4, printed pp. 83-84 (PDF pp. 82-83), states the source-free Maxwell equations, records local representation by a potential, and notes that nontrivial spacetime topology may prevent a global potential. The Ricci identity is derived completely below from the current GR supplier."
verification:
  precheck: pending
---

## Statement

Let $(M,g,N,o)$ be the Lorentzian geometry and use the curvature convention of [[def-emg-lorentzian-forms]]. Let $A_a$ be a smooth one-form, $A^a:=g^{ab}A_b$, and $F:=dA$, so $F_{ab}=\nabla_aA_b-\nabla_bA_a$ by torsion-freeness. Define $\Box_gA_b:=\nabla^a\nabla_aA_b$ and $\operatorname{div}A:=\nabla_aA^a$. Then

$$\nabla^aF_{ab}=\Box_gA_b-\nabla_b(\operatorname{div}A)-\operatorname{Ric}_{bc}A^c.$$

Consequently, if $\nabla_aF^{ab}=-\mu_0J^b$, the Lorenz condition $\operatorname{div}A=0$ makes the potential equation

$$\Box_gA_b-\operatorname{Ric}_{bc}A^c=-\mu_0J_b.$$

The curvature term is part of the identity; this is not an uncoupled collection of scalar metric wave equations. The statement is local in the sense that it assumes a potential $A$ is already defined on the open set under consideration; it does not assert a global potential for every closed $F$.

## Facts & Assumptions

**Given:** The smooth oriented, time-oriented Lorentzian geometry, a smooth one-form $A$, its exterior derivative $F=dA$, and, in the last display, the indicated Maxwell source equation.

[F1] [[def-emg-lorentzian-forms]]: $\nabla$ is the torsion-free metric-compatible connection with $R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$ and $\operatorname{Ric}_{bd}=R^a{}_{bad}$.

[F2] [[lem-emg-lorentz-hodge-calculus]]: $dA$ has coordinate components $2\partial_{[a}A_{b]}$.

[F3] [[lem-gr-contracted-commutator-identity]]: for a smooth vector field $Z$, $\nabla_a\nabla_bZ^a-\nabla_b\nabla_aZ^a=\operatorname{Ric}_{bd}Z^d$ in the same curvature convention.

[A1] The source convention in [[def-emg-electrovacuum-cauchy-system]] is $\nabla_aF^{ab}=-\mu_0J^b$; the source-free case has $J=0$.

## Proof

1.1 By [F2], $F_{ab}=2\partial_{[a}A_{b]}$. The Levi-Civita Christoffel symbols are symmetric in their lower indices by [F1], so their contribution cancels under antisymmetrization; hence $F_{ab}=\nabla_aA_b-\nabla_bA_a$. Metric compatibility then gives $F^{ab}=\nabla^aA^b-\nabla^bA^a$. [F1, F2, algebra]

2.1 Taking the divergence of the raised identity in 1.1 yields $\nabla_aF^{ab}=\nabla_a\nabla^aA^b-\nabla_a\nabla^bA^a$. Apply [F3] with the free index raised by $g^{bc}$: $\nabla_a\nabla^bA^a=\nabla^b\nabla_aA^a+\operatorname{Ric}^b{}_cA^c$. Substitution gives $\nabla_aF^{ab}=\Box_gA^b-\nabla^b(\operatorname{div}A)-\operatorname{Ric}^b{}_cA^c$. [step 1.1, F1, F3, algebra]

3.1 Lower the free index in 2.1 using $\nabla g=0$. This proves the first display. If the source Maxwell equation [A1] holds, then imposing $\operatorname{div}A=0$ removes exactly its gradient term and gives the stated Lorenz-gauge equation with the Ricci coupling retained. [step 2.1, A1, algebra] ∎
