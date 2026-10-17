---
id: lem-emg-conformastatic-curvature
kind: lemma
title: "Arbitrary-positive-H conformastatic Ricci and Einstein components"
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 2
proof_strategy: direct
deps:
  - def-emg-conformastatic-chart-data
  - lem-emg-conformastatic-chart-is-lorentzian
  - thm-real-power-continuity-and-derivatives
  - thm-chain-rule
  - thm-algebra-of-derivatives
  - thm-clairaut-schwarz-mixed-partials
dependency_roles:
  def-emg-conformastatic-chart-data: mathematical-premise
  lem-emg-conformastatic-chart-is-lorentzian: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3, equations (3.65)–(3.67), printed pp. 75–76 (PDF pp. 82–83); equations (3.90), (3.92), (3.95), printed pp. 81–82 (PDF pp. 88–89)"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Coordinate curvature sign/order, Ricci contraction, scalar curvature, and Einstein tensor. Carroll's displayed coordinate formula is checked against the local convention below."
    - title: "David Tong, General Relativity, full author-hosted lecture notes, Michaelmas 2019, §§3.2.2 and 3.4.1, equations (3.14)–(3.16), (3.39)–(3.41), printed pp. 105–108 and 130–132 (PDF pp. 112–115 and 137–139)"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "Independent coordinate Riemann/Ricci/Einstein formulas with matching R(X,Y)Z sign; all conformastatic component products are derived locally."
    - title: "Reinhard Meinel and Moritz Hütten, On the black hole limit of electrically counterpoised dust configurations, arXiv:1105.3807v3 (2011), §2, equation (1), PDF p. 2"
      url: "https://arxiv.org/pdf/1105.3807"
      locator: "Source for the named static conformal coordinate form only; its paper does not supply the arbitrary-H Ricci table."
verification:
  precheck: pass
---

## Statement

Let $D\subseteq\mathbb R^3$ be open, let $H\in C^3(D,(0,\infty))$, and take the C3 coordinate metric $g_H$ from [[def-emg-conformastatic-chart-data]], which is Lorentzian by [[lem-emg-conformastatic-chart-is-lorentzian]]. All indices range over $0,1,2,3$, spatial indices $i,j,k$ range over $1,2,3$, and repeated indices are summed. Use the coordinate connection
$$\Gamma^\alpha{}_{\beta\gamma}:=\frac12g^{\alpha\delta}\bigl(\partial_\beta g_{\delta\gamma}+\partial_\gamma g_{\beta\delta}-\partial_\delta g_{\beta\gamma}\bigr)$$
and the explicit curvature convention
$$R^\alpha{}_{\beta\mu\nu}:=\partial_\mu\Gamma^\alpha{}_{\nu\beta}-\partial_\nu\Gamma^\alpha{}_{\mu\beta}+\Gamma^\alpha{}_{\mu\lambda}\Gamma^\lambda{}_{\nu\beta}-\Gamma^\alpha{}_{\nu\lambda}\Gamma^\lambda{}_{\mu\beta},\qquad \operatorname{Ric}_{\beta\nu}:=R^\alpha{}_{\beta\alpha\nu},\qquad S:=g^{\beta\nu}\operatorname{Ric}_{\beta\nu},\qquad G_{\mu\nu}:=\operatorname{Ric}_{\mu\nu}-\tfrac12Sg_{\mu\nu}.$$
The displayed Christoffel coefficients define the unique torsion-free, $g_H$-compatible connection on the global coordinate chart, and the displayed curvature is formed from that connection. These are the standard coordinate formulas with the Riemann sign $R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$; the C3 regularity suffices for every displayed derivative. With $H_i,H_{ij},q,\Delta H$ as in [[def-emg-conformastatic-chart-data]], the only nonzero Christoffel types are
$$\Gamma^0{}_{0i}=\Gamma^0{}_{i0}=-\frac{H_i}{H},\qquad \Gamma^i{}_{00}=-\frac{H_i}{H^5},\qquad \Gamma^i{}_{jk}=\frac{\delta_{ij}H_k+\delta_{ik}H_j-\delta_{jk}H_i}{H}.$$
The Ricci components, scalar curvature, and orthonormal-frame Einstein components are
$$\operatorname{Ric}_{00}=\frac{q}{H^6}-\frac{\Delta H}{H^5},\qquad \operatorname{Ric}_{0i}=0,\qquad \operatorname{Ric}_{ij}=-\frac{\delta_{ij}\Delta H}{H}+\frac{\delta_{ij}q-2H_iH_j}{H^2},$$
$$S=-\frac{2\Delta H}{H^3},\qquad G(n,n)=\frac{q-2H\Delta H}{H^4},\qquad G(n,e_i)=0,\qquad G(e_i,e_j)=\frac{\delta_{ij}q-2H_iH_j}{H^4},$$
where $n=H\partial_0$ and $e_i=H^{-1}\partial_i$ are the frame fields of [[lem-emg-conformastatic-chart-is-lorentzian]]. No harmonicity condition on $H$ is imposed.

## Facts & Assumptions

**Given:** The open set $D$, positive C3 function $H$, the coordinate tensor $g_H$, and the definitions of its connection, curvature, and contractions in the Statement.

[F1] [[def-emg-conformastatic-chart-data]] supplies $g_{00}=-H^{-2}$, $g_{ij}=H^2\delta_{ij}$, $g_{0i}=0$, and $H_i,H_{ij},q,\Delta H$.

[F2] [[lem-emg-conformastatic-chart-is-lorentzian]] supplies $g^{00}=-H^2$, $g^{ij}=H^{-2}\delta_{ij}$, $\sqrt{|\det g|}=H^2$, and the frame $n=H\partial_0$, $e_i=H^{-1}\partial_i$.

[F3] Positive-base powers have derivative $(u^\alpha)'=\alpha u^{\alpha-1}$ for $u>0$, and the ordinary one-variable chain and product rules apply. ([[thm-real-power-continuity-and-derivatives]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]])

[F4] Since $H$ is C3, its second coordinate partials commute: $\partial_iH_j=\partial_jH_i$. ([[thm-clairaut-schwarz-mixed-partials]])

[A1] $H$ is C3, positive everywhere on $D$, and independent of $x^0$. No condition $\Delta H=0$ is assumed.

## Proof

1.1 Because $\mathcal M$ has one global coordinate chart, the displayed $\Gamma^\alpha{}_{\beta\gamma}$ define a connection by $\nabla_{\partial_\beta}\partial_\gamma=\Gamma^\alpha{}_{\beta\gamma}\partial_\alpha$ and the connection Leibniz rule. The formula is symmetric in $\beta,\gamma$, so the connection is torsion-free. Lowering its upper index gives $g_{\rho\alpha}\Gamma^\alpha{}_{\beta\gamma}=\tfrac12(\partial_\beta g_{\rho\gamma}+\partial_\gamma g_{\rho\beta}-\partial_\rho g_{\beta\gamma})$; adding the expressions with $(\rho,\gamma)$ interchanged cancels opposite derivative terms and yields $\partial_\beta g_{\rho\gamma}$, which is metric compatibility. Applying the formula to $g_{00}=-H^{-2}$ and $g_{ij}=H^2\delta_{ij}$ gives $\Gamma^0{}_{0i}=\tfrac12(-H^2)(2H^{-3}H_i)=-H_i/H$, $\Gamma^i{}_{00}=-\tfrac12H^{-2}(2H^{-3}H_i)=-H_i/H^5$, and $\Gamma^i{}_{jk}=(\delta_{ij}H_k+\delta_{ik}H_j-\delta_{jk}H_i)/H$. Every other type vanishes because $g$ is diagonal and time-independent. The derivatives use [F3] and the positivity of $H$. [given, F1, F2, F3, algebra]

2.1 Any other torsion-free, $g_H$-compatible connection $\widehat\nabla$ differs from $\nabla$ by the tensor $C(X,Y):=\widehat\nabla_XY-\nabla_XY$. Torsion-freeness gives $C(X,Y)=C(Y,X)$, while subtracting the two compatibility identities gives $C_{XYZ}:=g_H(C(X,Y),Z)=-C_{XZY}$. Thus $C_{XYZ}=C_{YXZ}=-C_{YZX}=-C_{ZYX}=C_{ZXY}=C_{XZY}=-C_{XYZ}$, so $C=0$ by nondegeneracy of $g_H$. Therefore the displayed connection is unique. Its trace is $\Gamma^\alpha{}_{\alpha i}=\Gamma^0{}_{0i}+\sum_{k=1}^3\Gamma^k{}_{ki}=-H_i/H+3H_i/H=2H_i/H$, while $\Gamma^\alpha{}_{\alpha0}=0$. [F2, step 1.1, algebra]

3.1 In the Ricci formula, $\partial_i\Gamma^i{}_{00}=-\Delta H/H^5+5q/H^6$ by differentiating $-H_iH^{-5}$. The trace-product term is $\Gamma^i{}_{00}\Gamma^\alpha{}_{\alpha i}=-2q/H^6$. The final product contraction $\Gamma^\alpha{}_{0\beta}\Gamma^\beta{}_{0\alpha}$ has two nonzero orders for each spatial $i$, namely $\Gamma^0{}_{0i}\Gamma^i{}_{00}$ and $\Gamma^i{}_{00}\Gamma^0{}_{i0}$; each is $H_i^2/H^6$, so its subtraction contributes $-2q/H^6$. Thus $\operatorname{Ric}_{00}=q/H^6-\Delta H/H^5$. [given, F1, F2, step 1.1, step 2.1, algebra]

3.2 For $\operatorname{Ric}_{0i}$, the derivative terms vanish because all coefficients are time-independent and $\Gamma^\alpha{}_{\alpha0}=0$. In the trace-product term, a nonzero $\Gamma^\alpha{}_{0i}$ requires $\alpha=0$, but then $\Gamma^\beta{}_{\beta0}=0$. In the last contraction, the only potentially nonzero first factors are $\Gamma^0{}_{0j}$ or $\Gamma^j{}_{00}$; their paired factors have a lower time-space connection slot that vanishes. Hence $\operatorname{Ric}_{0i}=0$. [given, F1, step 1.1, step 2.1, algebra]

3.3 For spatial $i,j$, $\Gamma^k{}_{ij}=(\delta_{ki}H_j+\delta_{kj}H_i-\delta_{ij}H_k)/H$. Differentiating and summing $k$ gives $\partial_k\Gamma^k{}_{ij}=2H_{ij}/H-2H_iH_j/H^2-\delta_{ij}\Delta H/H+\delta_{ij}q/H^2$. The trace term is $-\partial_j\Gamma^\alpha{}_{\alpha i}=-2H_{ij}/H+2H_iH_j/H^2$, using the commuting mixed partials of [F4]. The other trace product is $\Gamma^k{}_{ij}\Gamma^\alpha{}_{\alpha k}=(4H_iH_j-2\delta_{ij}q)/H^2$. [given, F1, F2, F3, F4, step 1.1, step 2.1, algebra]

4.1 In the last Ricci contraction, the time-index product is $\Gamma^0{}_{i0}\Gamma^0{}_{j0}=H_iH_j/H^2$. The spatial numerator is $(\delta_{ai}H_b+\delta_{ab}H_i-\delta_{ib}H_a)(\delta_{bj}H_a+\delta_{ba}H_j-\delta_{ja}H_b)$. Summing over $a,b$ gives the nine terms $H_iH_j,H_iH_j,-\delta_{ij}q,H_iH_j,3H_iH_j,-H_iH_j,-\delta_{ij}q,-H_iH_j,H_iH_j$, hence the spatial product is $(5H_iH_j-2\delta_{ij}q)/H^2$. Including the time product, the full product before the Ricci minus sign is $(6H_iH_j-2\delta_{ij}q)/H^2$. Combining this with step 3.3 gives $\operatorname{Ric}_{ij}=-\delta_{ij}\Delta H/H+(\delta_{ij}q-2H_iH_j)/H^2$. [step 1.1, step 3.3, algebra]

4.2 Contracting the Ricci table with $g^{00}=-H^2$ and $g^{ij}=H^{-2}\delta_{ij}$ gives $g^{00}\operatorname{Ric}_{00}=-q/H^4+\Delta H/H^3$ and $\sum_{ij}g^{ij}\operatorname{Ric}_{ij}=q/H^4-3\Delta H/H^3$. Their sum is $S=-2\Delta H/H^3$. [step 3.1, step 3.3, F2, algebra]

5.1 The coordinate Einstein component is $G_{00}=\operatorname{Ric}_{00}-\tfrac12Sg_{00}=q/H^6-2\Delta H/H^5$, so $G(n,n)=H^2G_{00}=(q-2H\Delta H)/H^4$. For spatial indices, $G_{ij}=\operatorname{Ric}_{ij}-\tfrac12Sg_{ij}=(\delta_{ij}q-2H_iH_j)/H^2$ because the $\delta_{ij}\Delta H/H$ terms cancel; therefore $G(e_i,e_j)=H^{-2}G_{ij}=(\delta_{ij}q-2H_iH_j)/H^4$. The mixed components vanish by step 3.2. [step 3.2, step 3.1, step 3.3, step 4.1, step 4.2, F2, algebra] ∎

## Remarks

For constant $H$, all displayed curvature components vanish. For nonconstant harmonic $H$, the scalar curvature is zero but the Einstein tensor need not vanish. The table is not restricted to electrovacuum, and it is not a physical field equation.
