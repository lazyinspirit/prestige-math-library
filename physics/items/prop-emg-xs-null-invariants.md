---
id: prop-emg-xs-null-invariants
kind: proposition
title: Null wave curvature and zero quadratic invariants
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 3
deps:
  - def-emg-xs-null-wave
  - thm-emg-xs-null-wave-verification
  - def-emg-xs-geometric-electrovac
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - def-gr-curvature-tensor-and-derived-tensors
  - thm-gr-curvature-tensoriality-and-coordinate-formula
  - thm-gr-curvature-algebraic-symmetries
dependency_roles:
  def-emg-xs-null-wave: mathematical-premise
  thm-emg-xs-null-wave-verification: mathematical-premise
  def-emg-xs-geometric-electrovac: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  thm-gr-curvature-tensoriality-and-coordinate-formula: mathematical-premise
  thm-gr-curvature-algebraic-symmetries: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1, complete 238-page lecture notes
      url: https://arxiv.org/pdf/gr-qc/9712019v1
      locator: Chapter 3, Riemann sign and contractions; the null-wave Riemann components and contractions are computed here.
    - title: David Tong, General Relativity, complete author-hosted lecture notes
      url: https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf
      locator: Sections 3-4, curvature and Einstein-Maxwell conventions; the scalar-invariant calculation is local.
verification:
  precheck: pass
---

## Remark

In this item, “flat” means that the Riemann tensor $R_{abcd}$ of [[def-gr-curvature-tensor-and-derived-tensors]] vanishes identically on the four-manifold.

## Statement

For every null-wave electrovac datum of [[def-emg-xs-null-wave]] and [[thm-emg-xs-null-wave-verification]],

$$\mathcal F_{ab}\mathcal F^{ab}=0,\qquad S=0,\qquad \operatorname{Ric}_{ab}\operatorname{Ric}^{ab}=0,\qquad R_{abcd}R^{abcd}=0.$$

In the displayed coordinates the only potentially nonzero independent Riemann components are

$$R_{uiuj}=-\frac12P_{ij},\qquad i,j\in\{x,y\}.$$

If $a(u_0)^2+b(u_0)^2>0$ at any $u_0$, then the Riemann tensor is nonzero there; the metric is not flat. Here $R_{abcd}$ and $S$ use the convention in [[def-emg-xs-geometric-electrovac]].

## Facts & Assumptions

**Given:** The null-wave profile data, its field, and the verified geometric electrovac family.

[F1] [[def-emg-xs-null-wave]] gives $P=-(a^2+b^2)(x^2+y^2)+h$, $\mathcal F=a\,du\wedge dx+b\,du\wedge dy$, and $h_{xx}+h_{yy}=0$.

[F2] [[thm-emg-xs-null-wave-verification]] proves that the metric and field form a smooth source-free geometric electrovac datum.

[F3] [[def-emg-xs-geometric-electrovac]] fixes the curvature sign, Ricci contraction, and scalar contraction used here.

[F4] [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]] gives the metric-selected Christoffel formula $\Gamma^a{}_{bc}=\tfrac12g^{ad}(\partial_bg_{dc}+\partial_cg_{bd}-\partial_dg_{bc})$.

[F5] [[def-gr-curvature-tensor-and-derived-tensors]] defines $R^a{}_{bcd}$ by $R(\partial_c,\partial_d)\partial_b=R^a{}_{bcd}\partial_a$, lowers by $R_{abcd}=g_{ae}R^e{}_{bcd}$, and contracts $\operatorname{Ric}_{bd}=g^{ac}R_{abcd}=R^a{}_{bad}$.

[F6] [[thm-gr-curvature-tensoriality-and-coordinate-formula]] gives $R^a{}_{bcd}=\partial_c\Gamma^a{}_{db}-\partial_d\Gamma^a{}_{cb}+\Gamma^a{}_{ce}\Gamma^e{}_{db}-\Gamma^a{}_{de}\Gamma^e{}_{cb}$ in every smooth chart.

[F7] [[thm-gr-curvature-algebraic-symmetries]] gives $R_{abcd}=-R_{bacd}$, $R_{abcd}=-R_{abdc}$, and $R_{abcd}=R_{cdab}$ for the lowered Levi-Civita curvature tensor.

[F8] The Curvature convention above defines “flat” to mean that $R_{abcd}$ vanishes identically on the four-manifold.

[A1] The smoothness, profile, and harmonicity hypotheses in [[def-emg-xs-null-wave]] hold.

## Proof

1.1 The inverse metric in the null block has $g^{uu}=0$, $g^{uv}=g^{vu}=-1$, and $g^{vv}=-P$, while $g^{xx}=g^{yy}=1$. From [F1], the only nonzero lower field components are $\mathcal F_{ux}=a$ and $\mathcal F_{uy}=b$, so the only nonzero raised components are $\mathcal F^{vx}=-a$ and $\mathcal F^{vy}=-b$. No lower nonzero component shares its index pair with a raised nonzero component. Thus $\mathcal F_{ab}\mathcal F^{ab}=0$. [given, F1, F3, algebra]

1.2 From the metric of [F1], the Christoffel formula [F4] gives $\Gamma^v{}_{uu}=-P_u/2$, $\Gamma^v{}_{ui}=-P_i/2$, and $\Gamma^i{}_{uu}=-P_i/2$ for $i=x,y$, with lower-index symmetry, and every other Christoffel vanishes. A derivative term in [F6] can therefore be nonzero only from differentiating one of those three displayed types; antisymmetry in the two curvature-direction indices reduces these possibilities to $R^i{}_{u j u}$, $R^v{}_{i u j}$, $R^v{}_{u i u}$, and $R^v{}_{u i j}$, together with their reversed-last-pair partners. Direct differentiation gives $R^i{}_{u j u}=-P_{ij}/2$, $R^v{}_{i u j}=P_{ij}/2$, $R^v{}_{u i u}=(-P_{ui}+P_{iu})/2=0$, and $R^v{}_{u i j}=(-P_{ji}+P_{ij})/2=0$. All quadratic terms vanish: an intermediate upper/lower index $v$ requires a Christoffel with lower $v$, an intermediate index $u$ requires one with upper $u$, and for a transverse intermediate index the only possible chain is $\Gamma^v{}_{ui}\Gamma^i{}_{uu}$; it occurs only with equal antisymmetrized indices and cancels. Lowering the first index by [F5] gives the independent components $R_{uiuj}=-P_{ij}/2$, with the partners supplied by the skew and pair-exchange symmetries [F7]. The Ricci contraction [F5] therefore has only $\operatorname{Ric}_{uu}=-\tfrac12(P_{xx}+P_{yy})=2(a^2+b^2)$ nonzero. [given, F1, F2, F4, F5, F6, F7, A1, algebra]

2.1 Since $g^{uu}=0$ and the only nonzero lower Ricci component is $\operatorname{Ric}_{uu}$, its scalar trace is $S=0$. Raising both indices of the Ricci tensor produces only a $vv$ component, while $\operatorname{Ric}_{vv}=0$; hence $\operatorname{Ric}_{ab}\operatorname{Ric}^{ab}=0$. [given, F1, F3, F5, step 1.2, algebra]

2.2 By step 1.2 and the curvature symmetries [F7], every nonzero Riemann component has the form $R_{uiuj}$ or one of its partners, and there is no nonzero component with a $v$ slot. In the full contraction $R_{abcd}R^{abcd}$, raising either displayed $u$ slot pairs it with a $v$ slot because $g^{uv}=-1$ and $g^{uu}=0$. Each resulting contraction term therefore contains a Riemann component with a $v$ index and is zero. Thus $R_{abcd}R^{abcd}=0$. [given, F1, F3, F5, F7, step 1.2, algebra]

3.1 If $a(u_0)^2+b(u_0)^2>0$, then $P_{xx}+P_{yy}=-4(a^2+b^2)$ at $u_0$. At least one of $P_{xx},P_{yy}$ is nonzero there, so step 1.2 gives a nonzero component $R_{uxux}$ or $R_{uyuy}$. By [F8], this nonzero Riemann component shows the datum is not flat. [given, F1, F8, step 1.2, algebra] ∎
