---
id: lem-emg-fx-warped-curvature
kind: lemma
title: Warped two-sphere curvature and charged mass conservation
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 3
deps:
  - def-emg-fx-spherical-quotient
  - lem-emg-fx-two-dimensional-ricci-trace
  - def-emg-xs-rn-data
  - def-gr-curvature-tensor-and-derived-tensors
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - thm-gr-curvature-tensoriality-and-coordinate-formula
dependency_roles:
  def-emg-fx-spherical-quotient: mathematical-premise
  lem-emg-fx-two-dimensional-ricci-trace: mathematical-premise
  def-emg-xs-rn-data: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  thm-gr-curvature-tensoriality-and-coordinate-formula: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: K. A. Bronnikov, S.-W. Kim and M. V. Skvortsov, The Birkhoff theorem and string clouds, arXiv:1604.04905v1 (2016)
      url: https://arxiv.org/pdf/1604.04905
      locator: "Sections 2–3, equations (3), (8) and (9), PDF pp. 2–4: the spherical Einstein equations and radial Maxwell stress; all warped-product component formulas below are derived locally."
    - title: David Tong, General Relativity, complete author-hosted lecture notes
      url: https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf
      locator: "Sections 3.2.2 and 3.4.1, printed pp. 105–108 and 130–131 (PDF pp. 112–115 and 137–138): curvature sign, Ricci contraction, and curvature identities."
verification:
  precheck: pass
---

## Statement

For an exact spherical Einstein–Maxwell–$\Lambda$ datum, let
$z=q^{-1}(dr,dr)$ and
$\Delta_qr:=q^{AB}(\nabla^q_A dr)_B$. The warped metric
$g=q+r^2\gamma_{S^2}$ has
$$\operatorname{Ric}(g)_{AB} =\operatorname{Ric}(q)_{AB}-2r^{-1}(\nabla^q_A dr)_B,\qquad \operatorname{Ric}(g)_{ij}=(1-z-r\Delta_qr)\gamma_{ij},\qquad \operatorname{Ric}(g)_{Ai}=0.$$
Its Maxwell tensor satisfies
$$Q_{AB}(\mathcal F)=-\frac{Q^2}{2r^4}q_{AB},\qquad Q_{ij}(\mathcal F)=\frac{Q^2}{2r^4}g_{ij},\qquad Q_{Ai}(\mathcal F)=0.$$
Consequently the Einstein–Maxwell–$\Lambda$ equations imply
$$\nabla^q_A dr_B=\frac12(\Delta_qr)q_{AB},\qquad \Delta_qr=\frac{1-z}{r}-\Lambda r-\frac{Q^2}{r^3},\qquad d\varpi=0.$$

## Statement references

[[def-emg-fx-spherical-quotient]]

## Facts & Assumptions

**Given:** The smooth warped product, fixed product orientation, constant charges $q_e,q_m$, and field equation $\operatorname{Ric}(g)=\Lambda g+2Q(\mathcal F)$.

[F1] [[def-emg-fx-spherical-quotient]] fixes $g=q+r^2\gamma_{S^2}$, $\mathcal F=(q_e/r^2)\epsilon_2+q_m\omega_{S^2}$, $Q^2=q_e^2+q_m^2$, the explicit tensor $Q_{ab}$, and the Einstein–Maxwell–$\Lambda$ equation.

[F2] [[lem-emg-fx-two-dimensional-ricci-trace]] gives $\operatorname{Ric}(q)=\tfrac12S_q q$ and $\nabla^q\epsilon_2=0$ for this two-dimensional Lorentzian base.

[F3] [[def-gr-curvature-tensor-and-derived-tensors]] defines the curvature convention and Ricci contraction used here.

[F4] [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]] gives the metric-compatible Christoffel formula for the four-dimensional warped metric.

[F5] [[thm-gr-curvature-tensoriality-and-coordinate-formula]] gives its coordinate curvature formula.

[F6] [[def-emg-xs-rn-data]] fixes $\gamma_{S^2}=d\theta^2+\sin^2\theta\,d\phi^2$ and the outward area form $\omega_{S^2}=\sin\theta\,d\theta\wedge d\phi$ on a polar chart.

## Proof

1.1 Let $A,B,C\in\{0,1\}$ be base indices and $i,j,k\in\{2,3\}$ sphere indices. In base coordinates, write $r_A:=\partial_A r$ and $r^A:=q^{AB}r_B$, the components of the vector field $q^{AB}\partial_Br$ (the $q$-dual of $dr$). The inverse metric is $g^{AB}=q^{AB}$ and $g^{ij}=r^{-2}\gamma^{ij}$. Substituting the block metric $g_{AB}=q_{AB}$, $g_{ij}=r^2\gamma_{ij}$, $g_{Ai}=0$ into [F4] gives the mixed Christoffels $\Gamma^A{}_{ij}=-\frac12q^{AB}\partial_B(r^2\gamma_{ij})=-r r^A\gamma_{ij}$ and $\Gamma^i{}_{Aj}=\frac12r^{-2}\gamma^{ik}\partial_A(r^2\gamma_{kj})=r^{-1}r_A\delta^i_j$. All other mixed Christoffels vanish because the inverse metric is block diagonal, $q_{AB}$ is independent of sphere coordinates, and $\gamma_{ij}$ is independent of base coordinates. The unit round sphere has $\Gamma^\theta{}_{\phi\phi}=-\sin\theta\cos\theta$ and $\Gamma^\phi{}_{\theta\phi}=\Gamma^\phi{}_{\phi\theta}=\cot\theta$ on the polar chart of [F6]. Substitution in [F5] and contraction by [F3] give $\operatorname{Ric}(\gamma)_{\theta\theta} =-\partial_\theta\cot\theta-\cot^2\theta=1$ and $\operatorname{Ric}(\gamma)_{\phi\phi} =\partial_\theta(-\sin\theta\cos\theta)-\cos^2\theta+2\cos^2\theta =\sin^2\theta$, with mixed component zero. Thus $\operatorname{Ric}(\gamma)=\gamma$ on that chart and everywhere by smoothness. [F1, F3, F4, F5, F6, given, algebra]

1.2 In an oriented orthonormal coframe for the two-dimensional Lorentzian base and the round sphere, $\epsilon_{AB}\epsilon^{AB}=-2$ and the sphere area form has squared norm $2/r^4$. The two summands of $\mathcal F$ occupy orthogonal blocks, so $\mathcal F_{ab}\mathcal F^{ab}=2(q_m^2-q_e^2)/r^4$. The same two-dimensional contractions give $\mathcal F_{AC}\mathcal F_B{}^C=-q_e^2r^{-4}q_{AB}$ and $\mathcal F_{ik}\mathcal F_j{}^k=q_m^2r^{-4}g_{ij}$; mixed contractions vanish. Substituting these three identities into [F1]'s definition of $Q$ yields the stated base and sphere components. [F1, F2, given, algebra]

2.1 In the coordinate Ricci formula, the terms in $\operatorname{Ric}(g)_{AB}$ with only base indices give $\operatorname{Ric}(q)_{AB}$. The remaining sphere-index terms are $$-\partial_B(2r_A/r)+(2r_C/r)\Gamma^C{}_{AB} -2r_Ar_B/r^2=-2r^{-1}(\partial_Br_A-\Gamma^C{}_{AB}r_C),$$ which is $-2r^{-1}(\nabla^q_A dr)_B$. For $\operatorname{Ric}(g)_{ij}$, the pure-sphere terms give $\operatorname{Ric}(\gamma)_{ij}=\gamma_{ij}$. The base derivative terms are $-[\partial_A(rr^A)+\Gamma^C{}_{CA}rr^A]\gamma_{ij} =-(r\Delta_qr+z)\gamma_{ij}$. The mixed trace $\Gamma^k{}_{kA}\Gamma^A{}_{ij}=-2z\gamma_{ij}$ cancels the two mixed products $-\Gamma^k{}_{jA}\Gamma^A{}_{ik} -\Gamma^A{}_{jk}\Gamma^k{}_{iA}=2z\gamma_{ij}$. For $\operatorname{Ric}(g)_{Ai}$, the derivative $\partial_i\Gamma^\alpha{}_{\alpha A}$ vanishes because $\Gamma^\alpha{}_{\alpha A}=\Gamma^B{}_{BA}+2r_A/r$ depends only on the base coordinates, and all derivatives $\partial_\alpha\Gamma^\alpha{}_{iA}$ vanish because the only nonzero such coefficients are $\Gamma^j{}_{iA}=(r_A/r)\delta^j_i$. In the remaining products, the term $\Gamma^\ell{}_{\ell k}\Gamma^k{}_{iA}=(r_A/r)\Gamma^\ell{}_{\ell i}$ is canceled by $-\Gamma^j{}_{ik}\Gamma^k{}_{jA}=-(r_A/r)\Gamma^j{}_{ij}=-(r_A/r)\Gamma^j{}_{ji}$; every other product contains a zero mixed Christoffel. Thus $\operatorname{Ric}(g)_{Ai}=0$. These identities give the three stated warped Ricci formulas. [F1, F3, F4, F5, step 1.1]

3.1 The base Einstein equation, steps 2.1 and 1.2, and [F2] yield $$\frac12S_q q_{AB}-2r^{-1}(\nabla^q_A dr)_B =(\Lambda-Q^2/r^4)q_{AB}.$$ Its right-hand side and the first term are scalar multiples of $q$, so $\nabla^q dr$ is a scalar multiple of $q$. Taking its trace identifies that multiple as $\tfrac12\Delta_qr$. The sphere Einstein equation gives $1-z-r\Delta_qr=\Lambda r^2+Q^2/r^2$, which rearranges to the stated formula for $\Delta_qr$. [F1, F2, step 2.1, step 1.2, algebra]

4.1 Differentiate $z=q^{AB}r_Ar_B$. Metric compatibility gives $dz=2(\nabla^q dr)(\nabla^q r,\cdot)=\Delta_qr\,dr$ by step 3.1. Therefore $$d\varpi=\frac12(1-z)dr-\frac r2dz -\frac{Q^2}{2r^2}dr-\frac{\Lambda r^2}{2}dr.$$ Substituting $\Delta_qr=(1-z)/r-\Lambda r-Q^2/r^3$ from step 3.1 makes the coefficient of $dr$ zero term by term. Thus $d\varpi=0$, completing the conditional calculation. [F1, step 3.1, algebra] ∎
