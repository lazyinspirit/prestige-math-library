---
id: cor-greens-theorem-from-general-stokes
title: "General Stokes agrees with both planar Green formulas"
kind: corollary
status: published
origin: pipeline
deps: ["thm-general-stokes-theorem", "cor-greens-theorem-in-circulation-form", "cor-the-planar-divergence-theorem-flux-form-of-greens-theorem", "prop-integration-of-top-forms-by-finite-parametrizations"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lee Theorem 16.17, p.415; classical items cited for both statements"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Statement

Assume $\mathrm{AC}_\omega$. For a compact smooth planar region $D$ oriented by $dx\wedge dy$ and smooth $P,Q$ on a neighborhood, general Stokes gives
$$\int_{\partial D}(P\,dx+Q\,dy)=\int_D(Q_x-P_y)\,dx\,dy,$$
$$\int_{\partial D}(P\,dy-Q\,dx)=\int_D(P_x+Q_y)\,dx\,dy.$$
When $D$ also has the supplied finite elementary Green decomposition required by the classical results, these are exactly their circulation and outward-flux formulas. Outer boundary curves run counterclockwise and holes clockwise.

## Facts & Assumptions

[F1] [[thm-general-stokes-theorem]]: Assume $\mathrm{AC}_\omega$. Let $M$ be an oriented smooth $n$-manifold with boundary, $n\geq1$, and let $\eta\in\Omega_c^{n-1}(M)$. With $j:\partial M\hookrightarrow M$ and the outward-normal-first orientation, $$\int_M d\eta=\int_{\partial M}j^*\eta.$$ An empty boundary contributes zero; in dimension one its integral is a finite signed sum of point values.

[F2] [[cor-greens-theorem-in-circulation-form]]: Let $D$ be a finite elementary Green region with its supplied decomposition, positively oriented, and let $P,Q$ be $C^1$ on an open $U\subseteq\mathbb R^2$ containing $D$. Define the **lift** $$\widetilde F(x,y,z):=\bigl(P(x,y),\ Q(x,y),\ 0\bigr)\qquad\bigl((x,y,z)\in U\times\mathbb R\bigr),$$ a field on the open set $U\times\mathbb R\subseteq\mathbb R^3$. Then $\widetilde F$ is $C^1$, its curl has first and second coordinates identically $0$ and third coordinate $\partial_xQ-\partial_yP$ at every point, independent of $z$, and the circulation of the planar field around the positive boundary chain equals the integral of the third coordinate of the curl of the lift: $$\int_{\partial D}(P,Q)\cdot d\mathbf r=\iint_D\bigl(\operatorname{curl}\widetilde F\bigr)_z(x,y,0)\,dA.$$

[F3] [[cor-the-planar-divergence-theorem-flux-form-of-greens-theorem]]: Let $D$ be a finite elementary Green region with its supplied decomposition, positively oriented, and let $F=(F_x,F_y)$ be $C^1$ on an open $U\subseteq\mathbb R^2$ containing $D$. Then $$\int_{\partial D}(-F_y)\,dx+F_x\,dy=\iint_D(\partial_xF_x+\partial_yF_y)\,dA,$$ the right-hand integrand being the divergence of $F$ as a field on an open subset of $\mathbb R^2$. Moreover, if $\sigma:[\alpha,\beta]\to\mathbb R^2$ is one of the arcs of the positive boundary chain and its derivative is nowhere zero on a piece with continuous derivative extension $v$, then on that piece $$\int_\sigma(-F_y)\,dx+F_x\,dy=\int_\sigma\langle F,\nu\rangle\,ds,\qquad \nu:=\frac{(v_2,-v_1)}{\lVert v\rVert_2},$$ where $\nu$ is the unit vector obtained from the tangent $v$ by a quarter turn clockwise.

[F4] [[prop-integration-of-top-forms-by-finite-parametrizations]]: Let $n\geq1$, let $M^n$ be oriented, and let $\omega\in\Omega_c^n(M)$. For $1\leq i\leq m$ let $D_i\subset\mathbb R^n$ be bounded open Jordan domains and $F_i:\overline D_i\to M$ continuous and smooth up to the boundary in target coordinates: near each parameter point, a target coordinate representative extends smoothly to a Euclidean neighborhood. Suppose $F_i|_{D_i}$ is an orientation-preserving diffeomorphism onto an open $W_i\subset M$, the $W_i$ are pairwise disjoint, and $\operatorname{supp}\omega\subset\bigcup_i\overline W_i$. Then $$\int_M\omega=\sum_{i=1}^m\int_{D_i}F_i^*\omega.$$ An empty family is allowed when the support is empty. No nonsingularity of $DF_i$ on $\partial D_i$, and no $M$-valued extension across a genuine target boundary, is assumed.

## Proof

**Given:** The objects and hypotheses in the statement above.

1.1 The coordinate derivative gives $d(Pdx+Qdy)=(Q_x-P_y)dx\wedge dy$ and $d(Pdy-Qdx)=(P_x+Q_y)dx\wedge dy$. Apply Stokes to these smooth one-forms on compact $D$. [F1, algebra]

2.1 For a positive tangent $v=(v_1,v_2)$, the outward normal is $\nu=(v_2,-v_1)/\|v\|$, since $(\nu,v)$ has positive determinant. Thus the flux form evaluated on $v$ is $Pv_2-Qv_1=\langle(P,Q),\nu\rangle\|v\|$. This yields counterclockwise outer curves and clockwise holes. Parametrization integration identifies these form integrals with the scalar Riemann and curve integrals. [F3, F4, step 1.1]

3.1 On the common elementary smooth scope, the classical circulation result uses the lift $(P,Q,0)$, whose third curl component is $Q_x-P_y$, and the flux result uses divergence $P_x+Q_y$. These match the two computed expressions exactly. Their supplied decomposition and neighborhood hypotheses are retained. Empty regions or zero fields give zero; no corners theorem is invoked. [F2, F3, step 1.1, step 2.1] ∎
