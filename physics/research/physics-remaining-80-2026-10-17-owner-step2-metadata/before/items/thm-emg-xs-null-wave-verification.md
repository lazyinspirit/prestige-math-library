---
id: thm-emg-xs-null-wave-verification
kind: theorem
title: Exact electrovac plane-wave family
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 4
deps:
  - def-emg-xs-null-wave
  - def-emg-xs-geometric-electrovac
  - lem-emg-maxwell-current-forms
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - def-gr-curvature-tensor-and-derived-tensors
  - thm-gr-curvature-tensoriality-and-coordinate-formula
dependency_roles:
  def-emg-xs-null-wave: mathematical-premise
  def-emg-xs-geometric-electrovac: mathematical-premise
  lem-emg-maxwell-current-forms: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  thm-gr-curvature-tensoriality-and-coordinate-formula: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1, complete 238-page lecture notes
      url: https://arxiv.org/pdf/gr-qc/9712019v1
      locator: Chapter 3, curvature sign and coordinate formula; the full plane-wave connection and Ricci calculation is local.
    - title: David Tong, General Relativity, complete author-hosted lecture notes
      url: https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf
      locator: Sections 3-4 for differential-form and Einstein-Maxwell conventions; the full plane-wave calculation is local.
verification:
  precheck: pass
---

## Statement

Every candidate datum in [[def-emg-xs-null-wave]] is a smooth source-free geometric electrovac datum in the convention of [[def-emg-xs-geometric-electrovac]]. Its only nonzero Ricci component is

$$\operatorname{Ric}_{uu}=2(a(u)^2+b(u)^2),$$

and its Maxwell quadratic tensor has only $Q_{uu}=a(u)^2+b(u)^2$ nonzero. Thus $\operatorname{Ric}=2Q(\mathcal F)$ for arbitrary smooth profiles $a,b$ and every smooth transverse harmonic addition $h$ specified in the definition. No asymptotic-flatness or finite-energy assertion is included.

## Facts & Assumptions

**Given:** The metric, orientation, potential, field, profiles and transverse harmonic condition of [[def-emg-xs-null-wave]].

[F1] [[def-emg-xs-null-wave]] gives $g=-2du\,dv+dx^2+dy^2+Pdu^2$, $\mathcal F_{ux}=a$, $\mathcal F_{uy}=b$, $N=\partial_u+\frac{P+1}{2}\partial_v$, and $\Delta_\perp h=0$.

[F2] [[def-emg-xs-geometric-electrovac]] requires $d\mathcal F=0$, $d(\star_g\mathcal F)=0$, and $\operatorname{Ric}=2Q(\mathcal F)$ with the stated curvature sign and signature.

[F3] [[lem-emg-maxwell-current-forms]] proves $d(\star_gF)=-\iota_v\mathrm{vol}_g$ where $v^b=\nabla_aF^{ab}$.

[F4] [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]] gives the metric-selected Christoffel formula $\Gamma^a{}_{bc}=\tfrac12g^{ad}(\partial_bg_{dc}+\partial_cg_{bd}-\partial_dg_{bc})$.

[F5] [[def-gr-curvature-tensor-and-derived-tensors]] defines $R^a{}_{bcd}$ by $R(\partial_c,\partial_d)\partial_b=R^a{}_{bcd}\partial_a$ and $\operatorname{Ric}_{bd}=g^{ac}R_{abcd}=R^a{}_{bad}$.

[F6] [[thm-gr-curvature-tensoriality-and-coordinate-formula]] gives the coordinate curvature formula $R^a{}_{bcd}=\partial_c\Gamma^a{}_{db}-\partial_d\Gamma^a{}_{cb}+\Gamma^a{}_{ce}\Gamma^e{}_{db}-\Gamma^a{}_{de}\Gamma^e{}_{cb}$ with the sign used here.

[A1] The profiles and $h$ have the smoothness and units in [[def-emg-xs-null-wave]], and $h_{xx}+h_{yy}=0$ everywhere.

## Proof

1.1 In the ordered coordinates $(u,v,x,y)$ the metric matrix has $(u,v)$ block $\begin{pmatrix}P&-1\\-1&0\end{pmatrix}$ and transverse block $I_2$. Its inverse has $g^{uv}=g^{vu}=-1$, $g^{vv}=-P$, $g^{uu}=0$, $g^{xx}=g^{yy}=1$; the determinant is $-1$. The field has only $\mathcal F_{ux}=a$ and $\mathcal F_{uy}=b$, so direct raising gives $\mathcal F^{vx}=-a$, $\mathcal F^{vy}=-b$, with $\mathcal F^{ux}=\mathcal F^{uy}=0$. Direct differentiation of $\mathcal F=a(u)du\wedge dx+b(u)du\wedge dy$ gives $d\mathcal F=0$, since each derivative term contains $du\wedge du$. [given, F1, algebra]

2.1 The nonzero Christoffel symbols, apart from lower-index symmetry, are $\Gamma^v{}_{uu}=-P_u/2$, $\Gamma^v{}_{ui}=-P_i/2$, and $\Gamma^i{}_{uu}=-P_i/2$ for $i\in\{x,y\}$. Substitution of the metric and inverse into [F4] gives these entries; the remaining metric derivatives vanish or lie in a constant block. Each trace $\Gamma^a{}_{ac}$ is zero. Hence $\nabla_a\mathcal F^{ab}=\partial_a\mathcal F^{ab}$, because $\Gamma^b{}_{ac}\mathcal F^{ac}=0$ by symmetry. The only nonzero raised field components have upper pair $vx$ or $vy$, are independent of $v$, and have no component with upper $u$; therefore every $\partial_a\mathcal F^{ab}=0$. By [F3], $d(\star_g\mathcal F)=0$. [given, F1, F3, F4, step 1.1, algebra]

3.1 The coordinate curvature and Ricci formulas [F5, F6] with the Christoffel list in step 2.1 have zero trace-derivative and trace-product terms because $\Gamma^a{}_{ac}=0$. In the last product $\Gamma^a{}_{b c}\Gamma^c{}_{a d}$, $c=u$ gives a zero second factor (no Christoffel has upper $u$), $c=v$ gives a zero first factor (no Christoffel has lower $v$), and for transverse $c=i$ a nonzero first factor requires $a=v$, making the second factor zero because it then has lower $v$. Hence that product vanishes. In the derivative term $\partial_a\Gamma^a{}_{\nu\beta}$, the only nonzero derivatives are $\partial_x\Gamma^x{}_{uu}=-P_{xx}/2$ and $\partial_y\Gamma^y{}_{uu}=-P_{yy}/2$. Thus $\operatorname{Ric}_{uu}=-(P_{xx}+P_{yy})/2$ and every other Ricci component is zero. From [F1], $P_{xx}+P_{yy}=-4(a^2+b^2)+h_{xx}+h_{yy}=-4(a^2+b^2)$, giving the stated Ricci component. [given, F1, F2, F5, F6, A1, step 2.1, algebra]

4.1 Raising the field indices from step 1.1 gives $\mathcal F_{ab}\mathcal F^{ab}=0$ and $\mathcal F_{uc}\mathcal F_u{}^c=a^2+b^2$; all other $\mathcal F_{ac}\mathcal F_b{}^c$ entries vanish. Hence $Q_{uu}=a^2+b^2$ and all other $Q$ entries vanish. Comparing with step 3.1 proves $\operatorname{Ric}=2Q$. Together with the closedness in step 1.1, the source-free divergence in step 2.1, and [F2], this proves the geometric electrovac equations. [given, F1, F2, F5, step 1.1, step 2.1, step 3.1, algebra] ∎
