---
id: prop-emg-fx-throat-scaling
kind: proposition
title: Extremal dyonic RN throat as a local scaled limit
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-emg-xs-rn-data
  - thm-emg-xs-rn-near-horizon
dependency_roles:
  def-emg-xs-rn-data: mathematical-premise
  thm-emg-xs-rn-near-horizon: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "David Tong, General Relativity, Cambridge Part III Mathematical Tripos, Michaelmas 2019, complete author-hosted lecture notes"
      url: https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf
      locator: "Section 6.2.5, printed pp. 266–268 (PDF pp. 273–275), derives the extremal RN throat metric as AdS2 × S2. The exact pullback of the Maxwell two-form and all-derivative compact convergence are proved here."
    - title: "Lars Aalsma, Jan Pieter van der Schaar and Manus R. Visser, Extremal black hole decay in de Sitter space, JHEP 07 (2024) 259, arXiv:2311.13742"
      url: https://arxiv.org/pdf/2311.13742
      locator: "Section 2.1, equations (2.4)–(2.11), PDF pp. 4–5, gives the extremal RN metric and an independent near-horizon coordinate scaling. Its units and charge convention are not imported."
physical_scope: null
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Let $m>0$ and $q_e,q_m\in\mathbb R$ be length parameters with $q_e^2+q_m^2=m^2$, set the RN mass parameter $M=m$, and use the exact dyonic RN metric and two-form on $r>m$. For each dimensionless $\lambda>0$, define $\Phi_\lambda(T,R,\omega)=(x^0=T/\lambda,\ r=m+\lambda R,\ \omega)$ on $D=\mathbb R_T\times(0,\infty)_R\times S^2$. Then

$$g_\lambda:=\Phi_\lambda^*g=-\frac{R^2}{(m+\lambda R)^2}\,dT^2+\frac{(m+\lambda R)^2}{R^2}\,dR^2+(m+\lambda R)^2\gamma_{S^2},\qquad \mathcal F_\lambda:=\Phi_\lambda^*\mathcal F=-\frac{q_e}{(m+\lambda R)^2}\,dT\wedge dR+q_m\omega_{S^2}.$$

As $\lambda\downarrow0$, the pair converges with every coordinate derivative uniformly on each compact subset of $D$ to

$$g_0=-\frac{R^2}{m^2}\,dT^2+\frac{m^2}{R^2}\,dR^2+m^2\gamma_{S^2},\qquad \mathcal F_0=-\frac{q_e}{m^2}\,dT\wedge dR+q_m\omega_{S^2}.$$

Here $x^0,r,T,R,m,q_e,q_m$ have length units, $\lambda$ is dimensionless, and $\gamma_{S^2},\omega_{S^2}$ are the unit round metric and outward area form. “Convergence with every coordinate derivative uniformly on compact subsets” means that, in a finite smooth atlas, every coordinate derivative of each tensor coefficient converges uniformly on each compact subset. The convergence is only on $R>0$: it asserts neither extension through $R=0$, uniform control over the whole original exterior, nor a decoupled theory. In the positive-electric subcase $q_e=m$, $q_m=0$, the displayed pullbacks agree exactly with the inherited near-horizon theorem's field and metric formulas.

## Statement references

[[def-emg-xs-rn-data]]

[[thm-emg-xs-rn-near-horizon]]

## Facts & Assumptions

**Given:** The exact dyonic RN datum with $M=m>0$, $q_e^2+q_m^2=m^2$, a dimensionless $\lambda>0$, and $R>0$.

[F1] [[def-emg-xs-rn-data]]: on $f\ne0$, $g=-f(dx^0)^2+f^{-1}dr^2+r^2\gamma_{S^2}$ and $\mathcal F=-q_e r^{-2}dx^0\wedge dr+q_m\omega_{S^2}$, where $f=1-2M/r+(q_e^2+q_m^2)/r^2$.

[F2] [[thm-emg-xs-rn-near-horizon]]: only for $M=q_e=L>0$, $q_m=0$, the map $\Phi_\lambda(T,R,\omega)=(x^0=T/\lambda,r=L+\lambda R,\omega)$ has the stated exact pullbacks and $C^\infty_{\rm loc}$ limit on $R>0$. The local argument below extends the explicit coordinate calculation to the dyonic charge pair; [F2] is used only in its exact positive-electric case.

[A1] $m>0$, $\lambda>0$, and $R>0$, so $r=m+\lambda R>m$ and $m+\lambda R\ge m>0$. The extremality identity is $q_e^2+q_m^2=m^2$.

## Proof

1.1 The extremality identity gives $f(r)=(1-m/r)^2=\lambda^2R^2/(m+\lambda R)^2$. The map $\Phi_\lambda$ is a diffeomorphism from $D$ onto $\mathbb R_{x^0}\times(m,\infty)_r\times S^2$, with inverse $T=\lambda x^0$, $R=(r-m)/\lambda$. Its differentials satisfy $dx^0=dT/\lambda$ and $dr=\lambda dR$. Substitution in [F1] gives the displayed $g_\lambda$. [given, A1, F1, algebra, construct]

2.1 The same pullback differentials give $dx^0\wedge dr=(dT/\lambda)\wedge(\lambda dR)=dT\wedge dR$; substituting $r=m+\lambda R$ in the two-form of [F1] gives the displayed $\mathcal F_\lambda$. [given, A1, F1, step 1.1, algebra]

3.1 Fix a compact $K\subset D$ and choose $0<\delta\le R\le B<\infty$ on its radial projection. For $A_\lambda(R)=(m+\lambda R)^{-2}$ and each integer $j\ge0$,
$$\partial_R^jA_\lambda(R)=(-1)^j(j+1)!\,\frac{\lambda^j}{(m+\lambda R)^{j+2}}.$$
The denominator is at least $m^{j+2}$; for $j=0$, $A_\lambda\to m^{-2}$ uniformly on $[\delta,B]$, and for $j\ge1$ the displayed derivatives tend uniformly to zero. Thus every radial derivative of $R^2A_\lambda$ converges uniformly to that of $R^2/m^2$. The other radial metric coefficient is $m^2R^{-2}+2m\lambda R^{-1}+\lambda^2$, and the angular coefficient is $m^2+2m\lambda R+\lambda^2R^2$; all their derivatives converge uniformly on $[\delta,B]$. The electric field coefficient is $-q_eA_\lambda$, and the magnetic term is independent of $\lambda$. The fixed smooth sphere tensors have bounded derivatives on compact subsets of each chart in a finite atlas covering the sphere projection of $K$. Therefore every coordinate derivative of every coefficient of $g_\lambda$ and $\mathcal F_\lambda$ converges uniformly on $K$ to the displayed $g_0$ and $\mathcal F_0$. [given, A1, F1, step 1.1, step 2.1, algebra]

4.1 If $q_e=m$ and $q_m=0$, formulas 1.1–3.1 specialize to $M=q_e=m>0$, $x^0=T/\lambda$, $r=m+\lambda R$ and $\mathcal F_\lambda=-m(m+\lambda R)^{-2}dT\wedge dR$. These are exactly the current hypotheses and field pullback in [F2]; the same metric formula and local all-derivative convergence agree with that supplier. No statement about unprovided charge sectors is inferred from [F2]. [given, F2, step 1.1, step 2.1, step 3.1, algebra] ∎

## Remarks

The two-form is pulled back along the same coordinate map as the metric. The limiting field is not set to a constant by analogy: its electric coefficient is $-q_e/m^2$ and its magnetic component remains $q_m\omega_{S^2}$. The uniformity statement is local in the scaled coordinate $R$ and deliberately excludes the boundary $R=0$.
