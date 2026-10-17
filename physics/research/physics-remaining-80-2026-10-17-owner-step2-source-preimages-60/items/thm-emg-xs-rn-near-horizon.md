---
id: thm-emg-xs-rn-near-horizon
kind: theorem
title: Extremal RN to Bertotti-Robinson in C-infinity local scaling
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 7
deps:
  - def-emg-xs-rn-data
  - thm-emg-xs-rn-verification
  - def-emg-xs-br-products
  - thm-emg-xs-br-verification
  - def-emg-xs-geometric-electrovac
dependency_roles:
  def-emg-xs-rn-data: mathematical-premise
  thm-emg-xs-rn-verification: mathematical-premise
  def-emg-xs-br-products: mathematical-premise
  thm-emg-xs-br-verification: mathematical-premise
  def-emg-xs-geometric-electrovac: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: David Tong, General Relativity, complete author-hosted lecture notes
      url: https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf
      locator: Section 6.2.5 gives the extremal RN throat and its AdS2 x S2 Robinson-Bertotti form; the exact pullback and C-infinity convergence are proved locally.
    - title: Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1, complete 238-page lecture notes
      url: https://arxiv.org/pdf/gr-qc/9712019v1
      locator: Chapter 3 curvature conventions and Chapter 7 charged-solution context; no limiting argument is imported.
verification:
  precheck: pass
---

## Statement

Fix $L>0$ and take the extremal RN datum with $M=q_e=L$, $q_m=0$, on $r>L$ in [[def-emg-xs-rn-data]]. For each dimensionless $\lambda>0$, define

$$\Phi_\lambda(T,R,\omega)=(x^0=T/\lambda,\ r=L+\lambda R,\ \omega),\qquad (T,R,\omega)\in\mathbb R\times(0,\infty)\times S^2.$$

Writing $g_\lambda=\Phi_\lambda^*g$ and $\mathcal F_\lambda=\Phi_\lambda^*\mathcal F$, one has

$$g_\lambda=-\frac{R^2}{(L+\lambda R)^2}\,dT^2+\frac{(L+\lambda R)^2}{R^2}\,dR^2+(L+\lambda R)^2\gamma_{S^2},\qquad \mathcal F_\lambda=-\frac{L}{(L+\lambda R)^2}\,dT\wedge dR.$$

As $\lambda\downarrow0$, these tensors converge in $C^\infty_{\rm loc}$ on $\mathbb R_T\times(0,\infty)_R\times S^2$ to

$$g_0=-\frac{R^2}{L^2}dT^2+\frac{L^2}{R^2}dR^2+L^2\gamma_{S^2},\qquad \mathcal F_0=-\frac1L\,dT\wedge dR.$$

Under $T=L\tau$, $R=Lz$, the limiting datum is exactly the $f(z)=z^2$, $z>0$ product in [[def-emg-xs-br-products]], and it is a geometric electrovac datum by [[thm-emg-xs-br-verification]]. Here $C^\infty_{\rm loc}$ means uniform convergence of every coordinate derivative on every compact subset in a finite smooth atlas. The convergence is only on $R>0$; no extension or convergence across $R=0$ is asserted.

## Facts & Assumptions

**Given:** The RN and Bertotti-Robinson definitions, the extremal parameters $M=q_e=L>0$, and $\lambda>0$.

[F1] [[def-emg-xs-rn-data]] gives $f(r)=1-2M/r+(q_e^2+q_m^2)/r^2$ and $\mathcal F=-q_e r^{-2}dx^0\wedge dr$ when $q_m=0$.

[F2] [[thm-emg-xs-rn-verification]] proves the dyonic RN datum is source-free electrovac on every open domain with $r>0$ and $f\ne0$. Only its geometric clause is used.

[F3] [[def-emg-xs-br-products]] defines $g_{L,z^2}$ and $\mathcal F_L$ on $z>0$.

[F4] [[thm-emg-xs-br-verification]] proves this limiting product is electrovac.

[F5] [[def-emg-xs-geometric-electrovac]] defines the geometric equations satisfied by both source and limiting data.

[A1] $L>0$, $\lambda>0$, and $R>0$, so $r=L+\lambda R>L$ and every denominator displayed in the Statement is nonzero.

## Proof

1.1 The map $\Phi_\lambda$ is a diffeomorphism from $\mathbb R_T\times(0,\infty)_R\times S^2$ onto the RN exterior $r>L$, since $x^0=T/\lambda$ and $r=L+\lambda R$ have smooth inverses. Its pullback satisfies $dx^0=dT/\lambda$ and $dr=\lambda dR$, while $f(r)=(1-L/r)^2=\lambda^2R^2/(L+\lambda R)^2$. Substitution into the RN metric in [F1] gives the displayed $g_\lambda$. The starting RN datum is a geometric electrovac by the first clause of [F2]; the claim here is the exact coordinate pullback and its limit. [given, A1, F1, F2, algebra, construct]

2.1 The RN two-form in [F1] pulls back to $-\frac{L}{(L+\lambda R)^2}\frac{dT}{\lambda}\wedge(\lambda dR)=-\frac{L}{(L+\lambda R)^2}dT\wedge dR$, which is the displayed $\mathcal F_\lambda$. [given, A1, F1, step 1.1, algebra]

3.1 At $\lambda=0$ the coefficient formulas in the Statement are smooth for $R>0$. Fix any compact subset $K$ of $\mathbb R_T\times(0,\infty)_R\times S^2$ and choose a finite smooth atlas on its sphere projection. In each chart, $R$ is bounded below by a positive number and $L+\lambda R\ge L$ for $0\le\lambda\le1$. Every coordinate derivative of every displayed coefficient is therefore a continuous function of $(\lambda,T,R,\theta,\phi)$ on a compact set containing $\{0\}\times K$; uniform continuity implies that each such derivative converges uniformly on $K$ to its value at $\lambda=0$. Since this holds for every derivative order and the atlas is finite, the convergence is $C^\infty_{\rm loc}$. [given, A1, step 1.1, step 2.1, algebra]

4.1 Substituting $T=L\tau$ and $R=Lz$ into $g_0,\mathcal F_0$ gives $L^2(-z^2d\tau^2+z^{-2}dz^2+\gamma_{S^2})$ and $-L\,d\tau\wedge dz$, exactly [F3] with $f=z^2$. By [F4] this limiting product satisfies the equations defined in [F5]. This identification is on $z>0$ only and does not add a horizon chart. [given, F3, F4, F5, step 3.1, algebra] ∎
