---
id: lem-emg-potential-maxwell-wave-identity
kind: lemma
title: Curved Lorentzian potential wave identity
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 0
proof_strategy: direct
deps:
  - def-emg-lorentzian-forms
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - def-gr-curvature-tensor-and-derived-tensors
  - thm-gr-curvature-algebraic-symmetries
  - def-dual-connection
  - lem-emg-lorentz-hodge-calculus
  - thm-clairaut-schwarz-mixed-partials
dependency_roles:
  def-emg-lorentzian-forms: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  thm-gr-curvature-algebraic-symmetries: mathematical-premise
  def-dual-connection: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "A. I. Harte, Gravitational lensing beyond geometric optics: I. Formalism and observables, arXiv:1808.06203v2 (2018), §3.1, equation (40)"
      url: "https://arxiv.org/pdf/1808.06203v2"
      locator: "The source-free Maxwell potential equation in Lorenz gauge is stated with the same curvature sign; the identity below is proved locally from the imported connection and curvature definitions."
    - title: "H. S. Reall, General Relativity, Cambridge Part III lecture notes, 12 October 2022 revision, §6.2, equations (6.7)–(6.10)"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      locator: "Curved-spacetime Maxwell equation and covariant Lorentz equation. Reall uses Gaussian units; no normalization or physical field law is imported into this mathematical identity."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Let $(M,g,N,o)$ be an oriented, time-oriented smooth Lorentzian four-manifold of signature $(-,+,+,+)$ with the metric-selected connection $\nabla$ of [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]. Use the curvature operator, Ricci contraction, and sign convention of [[def-gr-curvature-tensor-and-derived-tensors]]. Let $A$ be a real one-form whose coefficients in every smooth chart are $C^3$. On such coefficients, use the covariant-derivative component formula $\nabla_aA_b:=\partial_aA_b-\Gamma^c{}_{ab}A_c$ and define $dA$ as the $C^2$ two-form with chart components $(dA)_{ab}:=\partial_aA_b-\partial_bA_a$; for smooth $A$ this agrees with the exterior derivative of [[lem-emg-lorentz-hodge-calculus]]. The transformation law for these antisymmetrized components follows by the chain rule, since the second-derivative chart-transition terms cancel by equality of mixed partials. Define $(\Box A)_b:=g^{ac}\nabla_a\nabla_c A_b$, $(\operatorname{div}A):=\nabla^aA_a$, and $(PA)_b:=\Box A_b-\operatorname{Ric}_b{}^cA_c$. Then

$$ \nabla^a(dA)_{ab}=(PA)_b-\nabla_b(\operatorname{div}A). $$

The same identity holds for a complex one-form after complex-linear extension. The identity is local and uses no field equation, gauge condition, boundary condition, or physical assumption.

## Facts & Assumptions

**Given:** A smooth oriented, time-oriented Lorentzian four-manifold with metric-compatible torsion-free connection, a real $C^3$ one-form $A$, and the curvature convention in the Statement.

[F1] [[def-emg-lorentzian-forms]] supplies the smooth oriented Lorentzian four-manifold and the metric-selected connection convention; [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]] states that this connection is torsion-free, metric-compatible, and extends to tensor fields.

[F2] [[def-gr-curvature-tensor-and-derived-tensors]] defines $R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$, $R_{abcd}=g_{ae}R^e{}_{bcd}$, and $\operatorname{Ric}_{bd}=g^{ac}R_{abcd}$.

[F3] [[thm-gr-curvature-algebraic-symmetries]] proves $R_{abcd}=-R_{abdc}$, $R_{abcd}=R_{cdab}$, and $\operatorname{Ric}_{ab}=\operatorname{Ric}_{ba}$ for this curvature convention.

[F4] [[def-dual-connection]] defines the induced covector connection by $(\nabla_X\omega)(Z)=X(\omega(Z))-\omega(\nabla_XZ)$.

[F5] [[lem-emg-lorentz-hodge-calculus]] supplies $(dA)_{ab}=2\partial_{[a}A_{b]}$ and the real-linearity of $d$.

[F6] [[thm-clairaut-schwarz-mixed-partials]] states that continuous second partial derivatives commute; it supplies the cancellation of the second-derivative chart-transition terms for the stated $C^3$ extension of $d$.

## Proof


1.1 In any chart the stated extension has $(dA)_{ab}=\partial_aA_b-\partial_bA_a$ and $\nabla_aA_b=\partial_aA_b-\Gamma^c{}_{ab}A_c$. Under a chart change, differentiating $A'_b=(\partial x^c/\partial y^b)A_c$ and antisymmetrizing cancels the second-derivative transition terms by [F6], so these components define a two-form. Torsion freedom gives $\Gamma^c{}_{ab}=\Gamma^c{}_{ba}$, so $(dA)_{ab}=\nabla_aA_b-\nabla_bA_a$. Therefore $\nabla^a(dA)_{ab}=\Box A_b-\nabla^a\nabla_bA_a$. [F1, F5, F6, algebra]

1.2 For vector fields $X,Y,Z$, expand the dual-connection rule [F4] twice. The scalar-derivative terms cancel by $X(Yf)-Y(Xf)=[X,Y]f$, leaving $([\nabla_X,\nabla_Y]\omega-\nabla_{[X,Y]}\omega)(Z)=-\omega(R(X,Y)Z)$ for every one-form $\omega$. Since coordinate fields commute, $[\nabla_c,\nabla_b]A_a=-R^d{}_{acb}A_d$. [F2, F4, algebra]

2.1 Contract the last identity with $g^{ac}$. By metric compatibility, $g^{ac}[\nabla_c,\nabla_b]A_a=\nabla^a\nabla_bA_a-\nabla_b\nabla^aA_a$. By [F3] and the Ricci definition in [F2], $g^{ac}R^d{}_{acb}=g^{de}g^{ac}R_{eacb}=g^{de}g^{ac}R_{bcae}=-g^{de}g^{ac}R_{aecb}=-\operatorname{Ric}_b{}^d$; thus $\nabla^a\nabla_bA_a=\nabla_b(\nabla^aA_a)+\operatorname{Ric}_b{}^dA_d$. [F2, F3, step 1.2, algebra]

3.1 Substituting step 2.1 into step 1.1 gives $\nabla^a(dA)_{ab}=\Box A_b-\nabla_b(\nabla^aA_a)-\operatorname{Ric}_b{}^dA_d=(PA)_b-\nabla_b(\operatorname{div}A)$ by the definition of $P$. All identities are pointwise tensor identities, so they hold in every chart; complex-linear extension follows by applying the real identity to the real and imaginary parts separately. [given, step 1.1, step 2.1, algebra] ∎
