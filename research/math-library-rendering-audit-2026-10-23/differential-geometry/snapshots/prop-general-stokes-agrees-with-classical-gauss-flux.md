---
id: prop-general-stokes-agrees-with-classical-gauss-flux
title: "Agreement with classical Gauss flux in Euclidean space"
kind: proposition
status: published
origin: pipeline
deps: ["thm-divergence-theorem-relative-to-a-volume-form", "prop-integration-of-top-forms-by-finite-parametrizations", "thm-the-divergence-theorem-for-an-elementary-solid-region", "def-oriented-unit-normal-and-flux-of-a-surface-patch", "lem-divergence-form-identity", "def-simple-solid-region-in-a-coordinate-direction", "thm-jordan-boundary-criterion"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
sources:
  references:
    - title: "Lee Lemma 16.30 and Theorem 16.32, pp.423–424"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Statement

Let $F$ be a smooth vector field on an open subset $O\subseteq\mathbb R^3$ and let $\mu=dx\wedge dy\wedge dz$. Then the volume-form divergence is $\partial_xF_x+\partial_yF_y+\partial_zF_z$. For a smooth surface parametrization $r(u,v)$ with image in $O$ (and pointwise also for a $C^1$ parametrization),
$$r^*(\iota_F\mu)=\big(F(r)\cdot(r_u\times r_v)\big)\,du\wedge dv.$$
Assuming $\mathrm{AC}_\omega$, consequently the volume-form divergence theorem agrees with the classical Gauss flux theorem on every compact smooth region $E\subset O$, oriented by $\mu$, supplied with the elementary-solid presentation required by that classical theorem. Here a smooth region is an embedded three-dimensional manifold with boundary and its usual induced smooth structure; the same field is defined on the open neighborhood $O$ of all of $E$.

## Facts & Assumptions

[F1] [[thm-divergence-theorem-relative-to-a-volume-form]]: Assume $\mathrm{AC}_\omega$. Let $M^n$ be oriented with boundary, $n\geq1$, let $\mu$ be a positive smooth volume form, and let $X$ be a compactly supported smooth vector field. Then $$\int_M(\operatorname{div}_\mu X)\mu=\int_{\partial M}j^*(\iota_X\mu),$$ with outward-normal-first orientation. For compact $M$ every smooth $X$ is allowed.

[F2] [[prop-integration-of-top-forms-by-finite-parametrizations]]: Let $n\geq1$, let $M^n$ be oriented, and let $\omega\in\Omega_c^n(M)$. For $1\leq i\leq m$ let $D_i\subset\mathbb R^n$ be bounded open Jordan domains and $F_i:\overline D_i\to M$ continuous and smooth up to the boundary in target coordinates: near each parameter point, a target coordinate representative extends smoothly to a Euclidean neighborhood. Suppose $F_i|_{D_i}$ is an orientation-preserving diffeomorphism onto an open $W_i\subset M$, the $W_i$ are pairwise disjoint, and $\operatorname{supp}\omega\subset\bigcup_i\overline W_i$. Then $$\int_M\omega=\sum_{i=1}^m\int_{D_i}F_i^*\omega.$$ An empty family is allowed when the support is empty. No nonsingularity of $DF_i$ on $\partial D_i$, and no $M$-valued extension across a genuine target boundary, is assumed.

[F3] [[thm-the-divergence-theorem-for-an-elementary-solid-region]]: Let $E$ be an elementary solid region with presentation $\Sigma=\bigl((D_1,\varphi_1),\ldots,(D_P,\varphi_P)\bigr)$ (def-elementary-solid-region) and let $F$ be a $C^1$ vector field on an open set containing $E$. Then $$\iiint_E\operatorname{div}F=\iint_{\partial E}\langle F,n\rangle,$$ where the left side is the integral of $\operatorname{div}F$ over $E$ and the right side is the flux of $F$ over the presentation $\Sigma$, that is $\sum_{j=1}^P\int_{D_j}\langle F(\varphi_j),\varphi_{j,u}\times\varphi_{j,v}\rangle$. At every interior parameter point whose projection lies in the interior of the relevant base, the orientation in which that flux is taken is the outward one, by cor-every-face-of-an-elementary-solid-region-is-outward-oriented.

[F4] [[def-oriented-unit-normal-and-flux-of-a-surface-patch]]: For a regular patch $(D,\varphi)$, the parametrization induces on its interior the unit normal $$N_\varphi=\frac{\varphi_u\times\varphi_v}{\|\varphi_u\times\varphi_v\|_2}.$$ The denominator is positive there by regularity and thm-surface-area-density-is-cross-product-norm, and the vector is orthogonal to the tangent plane (def-tangent-plane-of-a-regular-surface-patch). Choosing $N_\varphi$ rather than $-N_\varphi$ is an **orientation**. For a continuous vector field $F$, the flux in the orientation induced by $\varphi$ is $\int_D(F\circ\varphi)\cdot(\varphi_u\times\varphi_v)$. This is the scalar Riemann integral of a continuous function on $D$ (def-surface-area-and-scalar-surface-integral-of-a-patch, def-euclidean-inner-product); replacing the orientation by its negative negates the integrand.

[F5] [[lem-divergence-form-identity]]: For a positive volume form $\mu$ and smooth vector field $X$ on an oriented smooth $n$-manifold, $n\geq1$, with boundary allowed, $d(\iota_X\mu)=(\operatorname{div}_\mu X)\mu$. No tangency assumption on $X$ at the boundary is needed.

[F6] [[def-simple-solid-region-in-a-coordinate-direction]]: A simple description gives a compact Jordan measurable solid $E$. In particular, the supplied simple descriptions in an elementary-solid presentation make $E$ compact and Jordan measurable in $\mathbb R^3$.

[F7] [[thm-jordan-boundary-criterion]]: A metric-bounded set $E\subseteq\mathbb R^m$ is Jordan measurable if and only if its boundary $\partial E$ is null, equivalently has content zero.

## Proof

**Given:** The objects and hypotheses in the statement above.

1.1 Direct contraction gives $\iota_F\mu=F_xdy\wedge dz-F_ydx\wedge dz+F_zdx\wedge dy$. Differentiating gives $(\partial_xF_x+\partial_yF_y+\partial_zF_z)\mu$, so the volume-form divergence is the usual Euclidean divergence by the divergence-form identity, which has no choice hypothesis. [F5, algebra]

1.2 Evaluation of the contraction on $(r_u,r_v)$ is $\det(F(r),r_u,r_v)=F(r)\cdot(r_u\times r_v)$. This is precisely the published flux integrand. For an outward-oriented regular parametrization its cross product is outward. [F4, algebra]

1.3 The elementary-solid data make $E$ a compact Jordan set, so $\partial E$ has content zero. As a compact manifold with boundary, $E$ has finitely many connected components $E_1,\ldots,E_m$: connected relative coordinate balls and half-balls show that components are open, and compactness makes their open cover finite. Their interiors $U_j=\operatorname{int}_{\mathbb R^3}E_j$ are connected and dense in $E_j$. Indeed, every point has a relative ball or half-ball whose interior part is connected and dense; closures of distinct interior components therefore cannot meet, and each such closure is relatively open, so connectedness of $E_j$ permits only one. Each $U_j$ is bounded and open, $\overline U_j=E_j$, and $\partial U_j\subseteq\partial E$, so $U_j$ is a Jordan domain. [F6, F7, given]

2.1 Use in F2 the finite family of identity inclusions $q_j:\overline U_j=E_j\to E$. Their restrictions are orientation-preserving diffeomorphisms onto the disjoint open subsets $U_j$ of $E$, and their image closures cover $E$. Their target-coordinate representatives extend smoothly across parameter boundary points: boundary coordinates of a smooth full-dimensional embedded region are restrictions of local smooth ambient coordinates. Thus F2 applies to $(\operatorname{div}_\mu F)\mu$. By step 1.1 its pullbacks have the usual scalar divergence as coefficient. Summing over $U_j$ gives exactly the scalar integral over $E$: the omitted set is $\partial E$ of content zero, and finite additivity of the scalar Riemann integral applies to these disjoint pieces. Hence the two volume integrals coincide. [F2, F6, F7, step 1.1, step 1.3]

3.1 Apply F1 on the compact smooth region $E$; $F|_E$ has compact support and $\mu$ is positive for its specified orientation. It identifies the intrinsic boundary integral with this volume integral. Independently, F3 applies to the supplied elementary-solid data and the smooth field on $O$, identifying the classical presentation flux with the same scalar volume integral. Therefore the intrinsic boundary integral equals that presentation flux, and the two divergence theorems agree. Step 1.2 also identifies each patch's pointwise flux expression. The zero field gives zero throughout; if an empty region is allowed separately, both integrals are zero by the empty-sum convention. [F1, F3, step 1.2, step 2.1] ∎
