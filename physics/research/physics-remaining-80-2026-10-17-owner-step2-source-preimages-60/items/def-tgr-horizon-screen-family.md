---
id: def-tgr-horizon-screen-family
kind: definition
title: Smooth null screen and subextremal Kerr–Newman parameter family
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-gr-smooth-lorentzian-objects
  - def-gr-metric-selected-connection
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - def-embedded-submanifold-and-slice-chart
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-embedded-submanifold-and-slice-chart: mathematical-premise
justified_by:
  - lem-tgr-null-screen-quotient-positive
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), complete 238-page lecture notes"
      url: https://arxiv.org/pdf/gr-qc/9712019
      locator: "Chapter 7, equations (7.114)–(7.128), printed pp. 207–214 (PDF pp. 213–220), for the Kerr parameter family, horizons and generator context."
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2"
      url: https://arxiv.org/pdf/1410.6626
      locator: "Section 3.3, equations (3.18)–(3.21), printed pp. 16–17 (PDF pp. 17–18), for the KN root and advanced-coordinate horizon data."
verification:
  precheck: pending
---

## Definition

Let $(\mathcal M,g,N)$ be a time-oriented smooth Lorentzian four-manifold of signature $(-,+,+,+)$, with the metric-selected connection $\nabla$ of [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]. Here $N$ is the supplied smooth future timelike vector field defining the time orientation; it is not a coordinate frame or a tetrad.

A **smooth null hypersurface** is a smooth embedded three-dimensional submanifold $H\subset\mathcal M$ such that, at every $p\in H$, the restriction of $g_p$ to $T_pH$ has a one-dimensional radical
$$L_p:=\{v\in T_pH:g_p(v,w)=0\text{ for every }w\in T_pH\}.$$
A **smooth affine null generator field** on $H$ is a smooth vector field $k$ along $H$ such that $k_p$ is a nonzero future-directed section of $L_p$ and $\nabla_k k=0$ along $H$. Thus $k$ is both tangent and normal to $H$, and its integral-curve parameter is affine.

For each $p\in H$, the **screen space** is the quotient vector space
$$\mathcal S_p:=k_p^\perp/\mathbb R k_p,\qquad k_p^\perp:=\{v\in T_p\mathcal M:g_p(v,k_p)=0\}.$$
Its candidate **screen metric** is $\bar g_p([X],[Y]):=g_p(X,Y)$. The result [[lem-tgr-null-screen-quotient-positive]] establishes that these spaces form a smooth rank-two vector bundle over $H$ and that $\bar g$ is a well-defined positive-definite metric on it.

For smooth local screen sections represented by smooth fields $X,Y$ tangent to $H$, define the **screen deformation form**
$$B([X],[Y]):=g(\nabla_X k,Y).$$
The same lemma establishes that this form is well defined on the quotient. Its **expansion** is $\theta:=\operatorname{tr}_{\bar g}B$ and its **shear** is $\sigma:=B-\frac12\theta\bar g$. In the area theorem below, $B$ is proved symmetric, so $\sigma$ is a symmetric trace-free form on each screen space.

Independently, let
$$\mathcal P:=\{(m,a,q)\in\mathbb R^3:m>0,\ m^2>a^2+q^2\}.$$
These are real mathematical parameters with no physical units assigned here. On this open parameter domain set
$$s:=\sqrt{m^2-a^2-q^2},\quad r_+:=m+s,\quad D:=r_+^2+a^2,$$
$$A:=4\pi D,\quad j:=ma,\quad \kappa_{\rm KN}:=\frac{r_+-m}{D},\quad \Omega_{\rm KN}:=\frac{a}{D},\quad \Phi_{\rm KN}:=\frac{qr_+}{D}.$$
Because the radicand and $D$ are strictly positive on $\mathcal P$, these are smooth real-valued functions there: the repeated derivative formula for $x^{1/2}$ on $(0,\infty)$ and the chain rule are given in [[def-gr-smooth-lorentzian-objects]], Facts [F2]. This definition assigns no geometric or thermodynamic interpretation to these functions and asserts no event-horizon existence, formation, uniqueness or thermodynamic-identification theorem.

## Remarks

The screen construction is local and makes no claim that every null hypersurface is complete or has compact cross-sections. The parameter domain is the strictly subextremal open family only; its extremal boundary is handled separately by the exact supplier in the companion example.

