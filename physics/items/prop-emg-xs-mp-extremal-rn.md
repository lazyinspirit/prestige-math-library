---
id: prop-emg-xs-mp-extremal-rn
kind: proposition
title: Single-center MP is extremal Reissner-Nordström exterior
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 7
deps:
  - def-emg-xs-harmonic-mp
  - thm-emg-xs-mp-verification
  - def-emg-xs-geometric-electrovac
  - def-emg-xs-rn-data
  - thm-emg-xs-rn-verification
dependency_roles:
  def-emg-xs-harmonic-mp: mathematical-premise
  thm-emg-xs-mp-verification: mathematical-premise
  def-emg-xs-geometric-electrovac: mathematical-premise
  def-emg-xs-rn-data: mathematical-premise
  thm-emg-xs-rn-verification: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: David Tong, General Relativity, complete author-hosted lecture notes
      url: https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf
      locator: Section 6, extremal Reissner-Nordström and the single-center harmonic coordinate form in “Multi-Black Hole Solutions”.
    - title: Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1, complete 238-page lecture notes
      url: https://arxiv.org/pdf/gr-qc/9712019v1
      locator: Chapter 3, curvature and electrovac conventions; this item proves the coordinate identification directly.
verification:
  precheck: pass
---

## RN extremality convention

For this Reissner–Nordström parameterization with $M>0$, “extremal” means $M^2=q_e^2+q_m^2$. In the purely electric case $q_m=0$, this is $|q_e|=M$.

## Statement

Let $m>0$ have length units, let $\sigma\in\{-1,+1\}$, put $\rho=|x|$ on $D=\mathbb R^3\setminus\{0\}$, and use $H=1+m/\rho$ in [[def-emg-xs-harmonic-mp]]. Under the radial diffeomorphism $R=\rho+m$ from $\rho>0$ to $R>m$, the full metric and field data equal the dyonic Reissner-Nordström datum of [[def-emg-xs-rn-data]] with

$$M=m,\qquad q_e=\sigma m,\qquad q_m=0,\qquad f(R)=\left(1-\frac mR\right)^2.$$

The parameters satisfy $|q_e|=M$; this is the extremal parameter relation in the displayed RN convention. By [[thm-emg-xs-mp-verification]] and the geometric clause of [[thm-emg-xs-rn-verification]], these identical exterior data satisfy the source-free geometric electrovac equations. The identification is only between the open exteriors $\rho>0$ and $R>m$; no horizon extension or global completeness follows.

## Facts & Assumptions

**Given:** The single-center harmonic MP datum with $m>0$, the RN data convention, and the geometric electrovac equation.

[F1] [[def-emg-xs-harmonic-mp]] gives $g=-H^{-2}(dx^0)^2+H^2(d\rho^2+\rho^2\gamma_{S^2})$ and $\mathcal A_\sigma=\sigma(H^{-1}-1)dx^0$.

[F2] [[def-emg-xs-rn-data]] defines the RN metric and field by $g=-f(dx^0)^2+f^{-1}dR^2+R^2\gamma_{S^2}$ and $\mathcal F=-q_eR^{-2}dx^0\wedge dR+q_m\omega_{S^2}$.

[F3] [[thm-emg-xs-mp-verification]] proves the MP data are electrovac; the first, geometric clause of [[thm-emg-xs-rn-verification]] proves every RN datum on $f\ne0$ is electrovac. Its separate SI tensor-normalization clause is not used.

[F4] [[def-emg-xs-geometric-electrovac]] fixes the geometric Ricci equation $\operatorname{Ric}=2Q(\mathcal F)$ used to identify the common field data.

[F5] The RN extremality convention above is $M^2=q_e^2+q_m^2$ for $M>0$; when $q_m=0$, this is $|q_e|=M$.

[A1] $m>0$, $\rho>0$, and $R=\rho+m$; hence $R>m$ and $f(R)\ne0$.

## Proof

1.1 On $\rho>0$, $H=1+m/\rho$ is smooth and positive. Direct differentiation gives $\partial_i(\rho^{-1})=-x^i\rho^{-3}$ and $\partial_i^2(\rho^{-1})=-\rho^{-3}+3(x^i)^2\rho^{-5}$, so $\Delta_\delta H=m(-3\rho^{-3}+3\rho^2\rho^{-5})=0$; hence $H$ satisfies the hypotheses of [F1]. The map $\rho\mapsto R=\rho+m$ has smooth inverse $\rho=R-m$ on the stated open intervals and derivative $1$, so it is a diffeomorphism. Since $H=R/(R-m)$, we have $H^{-1}=1-m/R$ and $d\rho=dR$. Substitution into [F1] gives $g=-(1-m/R)^2(dx^0)^2+(1-m/R)^{-2}dR^2+R^2\gamma_{S^2}$, because the sphere coefficient is $H^2\rho^2=R^2$ and the radial coefficient is $H^2=(1-m/R)^{-2}$. [given, A1, F1, algebra, construct]

2.1 The potential transforms as $\mathcal A_\sigma=\sigma((R-m)/R-1)dx^0=-\sigma mR^{-1}dx^0$. Differentiating gives $\mathcal F_\sigma=-\sigma mR^{-2}dx^0\wedge dR$, which is exactly [F2] with $q_e=\sigma m$ and $q_m=0$. The coordinate map preserves the displayed orientation, and both future fields point along the positive $x^0$ direction on $R>m$. [given, A1, F1, F2, step 1.1, algebra]

3.1 We have $M=m>0$, $|q_e|=m=M$, and $q_m=0$. By [F5], this is the extremal RN parameter relation, and $f(R)>0$ on $R>m$. The equality of the metrics in step 1.1 and two-forms in step 2.1 transfers the MP electrovac equations of [F3] to the identical RN exterior, with electrovac meaning the equations in [F4]. The conclusion does not extend the coordinate map to $\rho=0$ or $R=m$. [given, F1, F2, F3, F4, F5, A1, step 1.1, step 2.1] ∎
