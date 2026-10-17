---
id: lem-tgr-schwarzschild-horizon-data
kind: lemma
title: Exact Schwarzschild horizon data at the zero-rotation KN point
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 8
deps:
  - def-tgr-horizon-screen-family
  - thm-emg-xs-kn-extension
  - def-emg-causal-solution-and-horizon-vocabulary
  - def-gr-killing-field
  - thm-real-power-continuity-and-derivatives
dependency_roles:
  def-tgr-horizon-screen-family: mathematical-premise
  thm-emg-xs-kn-extension: mathematical-premise
  def-emg-causal-solution-and-horizon-vocabulary: mathematical-premise
  def-gr-killing-field: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2"
      url: https://arxiv.org/pdf/1410.6626
      locator: "Section 3.3, equations (3.18)–(3.21), for the exact rotating-family root and advanced-coordinate metric; the local proof handles the a=q=0 case."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), complete 238-page lecture notes"
      url: https://arxiv.org/pdf/gr-qc/9712019
      locator: "Chapter 7, equations (7.114)–(7.128), for the Kerr/Schwarzschild parameter and horizon context; the geometric verification is supplied locally."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

In the selected smooth ingoing KN model of [[thm-emg-xs-kn-extension]], set $a=q=0$ and let $m=M>0$. The metric, time orientation field and potential reduce to
$$g=-f(r)\,dv^2+2\,dv\,dr+r^2\gamma,\qquad N=\partial_v-\frac{1+f(r)^2}{2}\partial_r,\qquad \mathcal A_{\rm in}=0,\qquad f(r)=1-\frac{2m}{r}.$$
The hypersurface $H=\{r=2m\}$ is a null Killing horizon for $\chi=\partial_v$ in the exact vocabulary of [[def-emg-causal-solution-and-horizon-vocabulary]]. Its generator is future-directed, its signed surface gravity is $\kappa_H=1/(4m)$, and its round sections have area $16\pi m^2$. The angular-velocity, potential and angular-momentum parameter functions of [[def-tgr-horizon-screen-family]] are respectively $\Omega_{\rm KN}=0$, $\Phi_{\rm KN}=0$, and $j=0$ at this parameter point.

This is an exact geometric special case of the selected metric, not a uniqueness or formation theorem.

## Facts & Assumptions

**Given:** The smooth ingoing KN metric data and time orientation field of [[thm-emg-xs-kn-extension]], the mathematical parameter point $m=M>0$, $a=q=0$, and the local horizon vocabulary.

[F1] [[thm-emg-xs-kn-extension]]: for real $M,a,q$ on $\mathbb R_v\times(0,\infty)_r\times S^2$, the product metric is smooth, the potential is $\mathcal A_{\rm in}=-qr\Sigma^{-1}(dv-a\beta)$, and the time orientation is $N=\partial_v-\frac{1+f_0^2}{2}\partial_r$, where $\Sigma=r^2+a^2Z^2$ and $f_0=1-(2Mr-q^2)/\Sigma$.

[F2] [[def-emg-causal-solution-and-horizon-vocabulary]]: a smooth embedded hypersurface is null when its induced metric is degenerate; a Killing horizon has a nonempty dense nonzero-generator part on which its Killing field is null, tangent and normal; signed surface gravity is fixed by the ambient-covector identity $d(g(\chi,\chi))=-2\kappa_H\chi^\flat$.

[F3] [[def-gr-killing-field]]: a smooth vector field is Killing exactly when $\mathcal L_\chi g=0$.

[F4] [[def-tgr-horizon-screen-family]]: at $a=q=0$, $r_+=m+\sqrt{m^2}=2m$, $D=4m^2$, $A=4\pi D$, $j=ma$, $\kappa_{\rm KN}=(r_+-m)/D$, $\Omega_{\rm KN}=a/D$, and $\Phi_{\rm KN}=qr_+/D$.

[F5] [[thm-real-power-continuity-and-derivatives]]: for $r>0$, $(r^{-1})'=-r^{-2}$.

[A1] $m>0$ and $a=q=0$. The parameters are real mathematical values; no physical units are assigned by this lemma.

## Proof

1.1 Substituting $M=m$, $a=q=0$ into [F1] gives $\Sigma=r^2$, $f_0=f=1-2m/r$, the displayed ingoing metric and $N=\partial_v-\frac{1+f^2}{2}\partial_r$; the potential vanishes. The inverse of the $(v,r)$ metric block $\begin{pmatrix}-f&1\\1&0\end{pmatrix}$ is $\begin{pmatrix}0&1\\1&f\end{pmatrix}$, so $g^{-1}(dr,dr)=f$. At $r_H=2m>0$, $f(r_H)=0$ and $\chi^\flat=g(\partial_v,\cdot)=-f\,dv+dr=dr$, with $dr(\chi)=0$. Thus $H=\{r=2m\}$ is a null hypersurface and $\chi$ is tangent, null and normal there. Since every coefficient is independent of $v$, $\mathcal L_\chi g=0$, so [F3] makes $\chi$ Killing; $\chi$ never vanishes, so the nonzero-generator part is all of $H$. Finally $g(\chi,N)=dr(N)=-1/2<0$ on $H$, so its generator is future-directed. This verifies the exact horizon conditions in [F2]. [F1, F2, F3, A1, algebra]

2.1 The Killing norm is $g(\chi,\chi)=-f$, so $d(g(\chi,\chi))=-f'(r_H)dr$. From $f(r)=1-2m/r$ and [F5], $f'(r)=2m/r^2$, so at $r_H=2m$ this is $-\frac1{2m}dr$. Comparing with [F2] and $\chi^\flat=dr$ gives $-2\kappa_Hdr=-\frac1{2m}dr$, hence $\kappa_H=1/(4m)$. A section at fixed $v$ and $r=2m$ has induced metric $(2m)^2\gamma$. In spherical coordinates $\gamma=d\theta^2+\sin^2\theta\,d\psi^2$, so its area is $(2m)^2\int_0^{2\pi}\int_0^\pi\sin\theta\,d\theta\,d\psi=16\pi m^2$. Substitution in [F4] gives the same area and surface-gravity functions and gives $j=\Omega_{\rm KN}=\Phi_{\rm KN}=0$. [F2, F4, F5, step 1.1, algebra] ∎

## Remarks

The generic selected-model supplier [[prop-emg-xs-kn-horizon-data]] is stated only for $a^2+q^2>0$. This lemma supplies its missing zero-rotation, zero-charge parameter point directly from the smooth ingoing metric data; it does not extend any field-equation or global-horizon conclusion.

