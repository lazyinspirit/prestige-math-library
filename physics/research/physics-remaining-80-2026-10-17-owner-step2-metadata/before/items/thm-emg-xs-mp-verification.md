---
id: thm-emg-xs-mp-verification
kind: theorem
title: Full harmonic Majumdar-Papapetrou Einstein-Maxwell verification
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 4
deps:
  - def-emg-xs-harmonic-mp
  - lem-emg-conformastatic-chart-is-lorentzian
  - def-emg-xs-geometric-electrovac
  - lem-emg-conformastatic-curvature
  - lem-emg-maxwell-current-forms
  - lem-emg-lorentz-hodge-calculus
dependency_roles:
  def-emg-xs-harmonic-mp: mathematical-premise
  lem-emg-conformastatic-chart-is-lorentzian: mathematical-premise
  def-emg-xs-geometric-electrovac: mathematical-premise
  lem-emg-conformastatic-curvature: mathematical-premise
  lem-emg-maxwell-current-forms: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1, complete 238-page lecture notes
      url: https://arxiv.org/pdf/gr-qc/9712019v1
      locator: Chapter 3, equations (3.65)-(3.67), (3.90), (3.92), and (3.95), PDF pages 82-88; the component identity is expanded locally.
    - title: David Tong, General Relativity, complete author-hosted lecture notes
      url: https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf
      locator: Sections 3.2-3.4 and 6, for independent curvature, Maxwell, and harmonic multi-black-hole conventions; no local component calculation is delegated to the source.
    - title: Reinhard Meinel and Moritz Hütten, On the black hole limit of electrically counterpoised dust configurations, arXiv:1105.3807v3
      url: https://arxiv.org/pdf/1105.3807
      locator: Section 2, equations (1)-(4), PDF pages 2-3, for the conformastatic metric and potential context.
verification:
  precheck: pass
---

## Statement

Every datum of [[def-emg-xs-harmonic-mp]] satisfies the source-free geometric Einstein-Maxwell equations of [[def-emg-xs-geometric-electrovac]]:

$$d\mathcal F_\sigma=0,\qquad d(\star_g\mathcal F_\sigma)=0,\qquad \operatorname{Ric}_{ab}=2Q_{ab}(\mathcal F_\sigma),\quad Q_{ab}(F):=F_{ac}F_b{}^c-\tfrac14g_{ab}F_{cd}F^{cd}.$$

More explicitly, with $q_H:=\sum_iH_i^2$, the only nonzero independent raised field components are $\mathcal F^{i0}_\sigma=\sigma H_i/H^2$ and the quadratic-field components are

$$\mathcal F_{\sigma,ab}\mathcal F_\sigma^{ab}=-\frac{2q_H}{H^4},\qquad Q_{00}=\frac{q_H}{2H^6},\qquad Q_{0i}=0,\qquad Q_{ij}=\frac{\delta_{ij}q_H-2H_iH_j}{2H^2}.$$

## Facts & Assumptions

**Given:** The data of [[def-emg-xs-harmonic-mp]], its Lorentzian metric, and the geometric electrovac convention in [[def-emg-xs-geometric-electrovac]].

[F1] [[def-emg-xs-harmonic-mp]] supplies $H>0$, $\Delta_\delta H=0$, $g_{00}=-H^{-2}$, $g_{ij}=H^2\delta_{ij}$, $\mathcal A_\sigma=\sigma(H^{-1}-1)dx^0$, and $\mathcal F_{i0}=-\sigma H_i/H^2$.

[F2] [[lem-emg-conformastatic-chart-is-lorentzian]] supplies $g^{00}=-H^2$, $g^{ij}=H^{-2}\delta_{ij}$, $\sqrt{|\det g|}=H^2$, and the future orthonormal frame $n=H\partial_{x^0}$, $e_i=H^{-1}\partial_i$.

[F3] [[lem-emg-conformastatic-curvature]] states the curvature convention and gives $\Gamma^0{}_{0i}=-H_i/H$, $\Gamma^i{}_{00}=-H_i/H^5$, and $\Gamma^i{}_{jk}=(\delta_{ij}H_k+\delta_{ik}H_j-\delta_{jk}H_i)/H$. Summing its coordinate Ricci formula gives $\Gamma^\alpha{}_{\alpha i}=2H_i/H$, $\Gamma^\alpha{}_{\alpha0}=0$, and its arbitrary-positive-$H$ Ricci table.

[F4] [[lem-emg-maxwell-current-forms]] proves $d(\star_gF)=-\iota_v\mathrm{vol}_g$ for $v^b=\nabla_aF^{ab}$, so $v=0$ implies the source-free second Maxwell equation.

[F5] [[lem-emg-lorentz-hodge-calculus]] supplies $d^2=0$ for smooth differential forms.

[A1] The hypotheses of [[def-emg-xs-harmonic-mp]] hold on $D$; in particular $H$ is smooth, positive, time-independent, and Euclidean harmonic.

## Proof

1.1 Since $\mathcal F_\sigma=d\mathcal A_\sigma$, the identity $d^2=0$ in [F5] gives $d\mathcal F_\sigma=0$. Raising the two indices of $\mathcal F_{i0}=-\sigma H_i/H^2$ with [F2] gives $\mathcal F^{i0}=\sigma H_i/H^2$ and $\mathcal F^{0i}=-\sigma H_i/H^2$. Contracting the antisymmetric pair yields $\mathcal F_{ab}\mathcal F^{ab}=2\sum_i\mathcal F_{i0}\mathcal F^{i0}=-2q_H/H^4$. [given, F1, F2, F5, algebra]

2.1 The last Christoffel term in $\nabla_a\mathcal F^{ab}=\partial_a\mathcal F^{ab}+\Gamma^a{}_{ac}\mathcal F^{cb}+\Gamma^b{}_{ac}\mathcal F^{ac}$ vanishes because $\Gamma^b{}_{ac}$ is symmetric in $a,c$ and $\mathcal F^{ac}$ is antisymmetric. For $b=0$, the remaining terms are $\partial_i(\sigma H_i/H^2)+(2H_i/H)(\sigma H_i/H^2)=\sigma\Delta_\delta H/H^2=0$, after the product rule cancels the two $q_H/H^3$ terms. For $b=i$, $\partial_0\mathcal F^{0i}=0$, all $\mathcal F^{ji}=0$, and the only possible trace term is $\Gamma^\alpha{}_{\alpha0}\mathcal F^{0i}=0$. Thus $v^b=\nabla_a\mathcal F^{ab}=0$ for every $b$, and [F4] gives $d(\star_g\mathcal F_\sigma)=0$. [given, F1, F2, F3, A1, step 1.1, algebra]

2.2 The only nonzero contraction in $\mathcal F_{0c}\mathcal F_0{}^c$ is $\sum_iF_{0i}F_0{}^i=q_H/H^6$, while $\mathcal F_{ic}\mathcal F_j{}^c=F_{i0}g^{00}F_{j0}=-H_iH_j/H^2$. Combining these with $\mathcal F_{ab}\mathcal F^{ab}=-2q_H/H^4$ and $g_{00}=-H^{-2}$, $g_{ij}=H^2\delta_{ij}$ gives $Q_{00}=q_H/(2H^6)$, $Q_{0i}=0$, and $Q_{ij}=(\delta_{ij}q_H-2H_iH_j)/(2H^2)$. [given, F1, F2, step 1.1, algebra]

3.1 Substituting $\Delta_\delta H=0$ into the arbitrary-positive-$H$ table [F3] gives $\operatorname{Ric}_{00}=q_H/H^6$, $\operatorname{Ric}_{0i}=0$, and $\operatorname{Ric}_{ij}=(\delta_{ij}q_H-2H_iH_j)/H^2$. These are exactly twice the entries in step 2.2; together with the closedness in step 1.1 and source-free divergence in step 2.1 they are all three equations in [[def-emg-xs-geometric-electrovac]]. [given, F2, F3, step 1.1, step 2.1, step 2.2, algebra] ∎
