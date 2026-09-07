---
id: cor-classical-three-dimensional-stokes-theorem
title: "Agreement of general and classical surface Stokes"
kind: corollary
status: draft
origin: pipeline
deps: ["thm-general-stokes-theorem", "prop-integration-over-an-oriented-embedded-submanifold", "prop-integration-of-top-forms-by-finite-parametrizations", "thm-the-classical-stokes-theorem-for-a-c2-surface-patch", "def-divergence-and-curl-of-a-c1-vector-field"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lee Theorem 16.34 proof, p.427"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Statement

Assume $\mathrm{AC}_\omega$. Let $S\subset\mathbb R^3$ be a compact oriented smooth embedded surface with boundary, and let $F$ be smooth on an open neighborhood of $S$. Set $\alpha=F_xdx+F_ydy+F_zdz$ and $\mu=dx\wedge dy\wedge dz$. Then
$$d\alpha=\iota_{\operatorname{curl}F}\mu,\qquad \int_{\partial S}\alpha=\int_S\iota_{\operatorname{curl}F}\mu.$$
On an oriented parametrization $r(u,v)$ the latter integrand is $(\operatorname{curl}F)(r)\cdot(r_u\times r_v)\,du\wedge dv$; on a boundary curve it is $F(r)\cdot r^{\prime}\,dt$. On the common smooth patch scope this is the published classical Stokes theorem, using the standard Euclidean metric identification.

## Facts & Assumptions

[F1] [[thm-general-stokes-theorem]]: Assume $\mathrm{AC}_\omega$. Let $M$ be an oriented smooth $n$-manifold with boundary, $n\geq1$, and let $\eta\in\Omega_c^{n-1}(M)$. With $j:\partial M\hookrightarrow M$ and the outward-normal-first orientation, $$\int_M d\eta=\int_{\partial M}j^*\eta.$$ An empty boundary contributes zero; in dimension one its integral is a finite signed sum of point values.

[F2] [[prop-integration-over-an-oriented-embedded-submanifold]]: Let $j:S\hookrightarrow M$ be an oriented embedded smooth $k$-submanifold, with boundary allowed. For a smooth $k$-form $\omega$ on $M$ such that $j^*\omega$ has compact support on $S$, define $\int_S\omega:=\int_Sj^*\omega$. If $F:T\to S$ is an orientation-preserving diffeomorphism, this equals $\int_T(jF)^*\omega$. Compact support is required on $S$ itself.

[F3] [[prop-integration-of-top-forms-by-finite-parametrizations]]: Let $n\geq1$, let $M^n$ be oriented, and let $\omega\in\Omega_c^n(M)$. For $1\leq i\leq m$ let $D_i\subset\mathbb R^n$ be bounded open Jordan domains and $F_i:\overline D_i\to M$ continuous and smooth up to the boundary in target coordinates: near each parameter point, a target coordinate representative extends smoothly to a Euclidean neighborhood. Suppose $F_i|_{D_i}$ is an orientation-preserving diffeomorphism onto an open $W_i\subset M$, the $W_i$ are pairwise disjoint, and $\operatorname{supp}\omega\subset\bigcup_i\overline W_i$. Then $$\int_M\omega=\sum_{i=1}^m\int_{D_i}F_i^*\omega.$$ An empty family is allowed when the support is empty. No nonsingularity of $DF_i$ on $\partial D_i$, and no $M$-valued extension across a genuine target boundary, is assumed.

[F4] [[thm-the-classical-stokes-theorem-for-a-c2-surface-patch]]: Let $(D,\varphi)$ be a $C^2$ patch over a finite elementary Green region (def-the-induced-boundary-chain-of-a-c2-surface-patch), with positive boundary chain $\partial D=(\sigma_1,\ldots,\sigma_m)$ and induced boundary chain $\varphi(\partial D)$, and let $F$ be a $C^1$ vector field on an open set $U\subseteq\mathbb R^3$ containing $\varphi[D]$. Then the circulation around the induced boundary chain equals the flux of the curl in the induced orientation: $$\oint_{\varphi(\partial D)}F\cdot d\mathbf r=\int_D\bigl\langle(\operatorname{curl}F)\circ\varphi,\ \varphi_u\times\varphi_v\bigr\rangle.$$ The right-hand side is the flux of $\operatorname{curl}F$ through the patch in the orientation induced by $\varphi$, in the sense of def-oriented-unit-normal-and-flux-of-a-surface-patch.

[F5] [[def-divergence-and-curl-of-a-c1-vector-field]]: Let $n\ge1$, let $U\subseteq\mathbb R^n$ be open and let $F=(F_0,\ldots,F_{n-1}):U\to\mathbb R^n$ be $C^1$ in the componentwise Euclidean sense of def-ck-euclidean-maps-and-diffeomorphisms. Then the **divergence** of $F$ is $\operatorname{div}F:=\sum_{i<n}\partial_iF_i$, the function $U\to\mathbb R$ whose value at $p$ is $\sum_{i<n}\partial_iF_i(p)$. The partial derivatives are those of def-directional-and-partial-derivatives, and the sum is the finite sum used throughout def-euclidean-inner-product. Since each $\partial_iF_i$ is continuous on $U$, so is $\operatorname{div}F$. Now let $n=3$ and let $F:U\to\mathbb R^3$ be $C^1$ on an open $U\subseteq\mathbb R^3$. Following def-cross-product-in-r3, write the three coordinates of a point and of a vector as $x,y,z$ rather than $0,1,2$, so that $F=(F_x,F_y,F_z)$ means $F=(F_0,F_1,F_2)$ and $\partial_x,\partial_y,\partial_z$ are $\partial_0,\partial_1,\partial_2$. With that naming, the **curl** of $F$ is $\operatorname{curl}F:=(\partial_yF_z-\partial_zF_y,\ \partial_zF_x-\partial_xF_z,\ \partial_xF_y-\partial_yF_x)$, a map $U\to\mathbb R^3$ each of whose coordinates is continuous on $U$. In this naming the divergence reads $\operatorname{div}F=\partial_xF_x+\partial_yF_y+\partial_zF_z$. Both operators are defined pointwise from the first partial derivatives of the components, so no differentiability of $F$ beyond $C^1$ is used and no orientation or metric structure enters beyond the standard coordinates of def-jacobian-matrix-and-gradient. For a $C^1$ scalar function $f$ on $U$, the gradient $\nabla f=(\partial_0f,\ldots,\partial_{n-1}f)$ is that of def-jacobian-matrix-and-gradient; in the three-coordinate naming, $\nabla f=(\partial_xf,\partial_yf,\partial_zf)$.

## Proof

**Given:** The objects and hypotheses in the statement above.

1.1 Expand $d\alpha$. Its coefficients of $dy\wedge dz,dz\wedge dx,dx\wedge dy$ are respectively $\partial_yF_z-\partial_zF_y,\partial_zF_x-\partial_xF_z,\partial_xF_y-\partial_yF_x$, exactly the three curl components. Contraction with $\mu$ gives the same expansion. [F5, algebra]

2.1 Pull back to the compact surface and apply general Stokes, obtaining the integral identity. Evaluating the contracted three-form on $(r_u,r_v)$ gives $\det(\operatorname{curl}F,r_u,r_v)=(\operatorname{curl}F)\cdot(r_u\times r_v)$. The boundary pullback of $\alpha$ is $F(r)\cdot r^{\prime}dt$ directly. [F1, F2, step 1.1]

3.1 The finite-parametrization theorem turns these expressions into the scalar flux and circulation integrals. For a patch over a supplied finite elementary Green region with its induced boundary chain, the classical theorem has exactly these two integrals; smooth $r,F$ meet its $C^2,C^1$ requirements. Reversing the surface orientation changes both signs; empty surface or zero field gives zero. [F3, F4, step 2.1] ∎
