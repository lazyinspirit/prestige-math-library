---
id: ex-emx-punctured-flux
kind: example
title: Closed flux form without global vector potential
status: draft
origin: session
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - thm-emx-local-potential-homotopy
  - thm-local-coordinate-formula-for-the-exterior-derivative
  - thm-real-power-continuity-and-derivatives
  - thm-chain-rule-for-total-derivatives
  - thm-algebra-of-derivatives
  - def-emx-lorentz-star
  - def-smooth-singular-chain-and-cochain-complexes
  - def-integral-of-a-form-over-a-smooth-singular-simplex
  - def-cross-product-in-r3
  - def-oriented-unit-normal-and-flux-of-a-surface-patch
  - thm-heine-borel-rn
  - prop-integration-of-top-forms-by-finite-parametrizations
  - lem-emx-unit-sphere-radial-flux
dependency_roles:
  thm-emx-local-potential-homotopy: mathematical-premise
  thm-local-coordinate-formula-for-the-exterior-derivative: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-emx-lorentz-star: mathematical-premise
  def-smooth-singular-chain-and-cochain-complexes: mathematical-premise
  def-integral-of-a-form-over-a-smooth-singular-simplex: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-oriented-unit-normal-and-flux-of-a-surface-patch: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  prop-integration-of-top-forms-by-finite-parametrizations: mathematical-premise
  lem-emx-unit-sphere-radial-flux: mathematical-premise
physical_scope: Pure mathematical example; no magnetic-charge or physical premise is asserted.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
---

## Example

On $\mathbb R^3\setminus\{0\}$, put $r=(x^2+y^2+z^2)^{1/2}$ and define the smooth two-form $\beta=(x\,dy\wedge dz+y\,dz\wedge dx+z\,dx\wedge dy)/r^3$. Let $T$ be the tetrahedron with vertices $(1,1,1),(1,-1,-1),(-1,1,-1),(-1,-1,1)$, which contains the origin in its interior. For each face choose its affine smooth singular simplex $\sigma_j$ in the outward orientation, and let $z=\sum_j(q\circ\sigma_j)$ for $q(p)=p/\|p\|_2$. Then $z$ is a finite smooth singular two-cycle on the outward-oriented unit sphere, $d\beta=0$, and $\int_z\beta=4\pi$, so $\beta$ is not globally exact.

## Example references

[[thm-emx-local-potential-homotopy]]

[[lem-emx-unit-sphere-radial-flux]]

[[def-emx-lorentz-star]]

## Facts & Assumptions

**Given:** The punctured domain, the form $\beta$, the tetrahedron $T$, and its outward orientation as in the Example.

[F1] [[thm-local-coordinate-formula-for-the-exterior-derivative]] gives $d(P\,dx+Q\,dy+R\,dz)=(\partial_xR-\partial_zQ)\,dy\wedge dz+(\partial_yP-\partial_xR)\,dz\wedge dx+(\partial_zQ-\partial_yP)\,dx\wedge dy$; equivalently, $d(i_X(dx\wedge dy\wedge dz))=(\partial_xX_1+\partial_yX_2+\partial_zX_3)\,dx\wedge dy\wedge dz$.

[F2] [[thm-real-power-continuity-and-derivatives]], [[thm-chain-rule-for-total-derivatives]], and [[thm-algebra-of-derivatives]] give the derivative rules for the smooth coefficient functions $x_i r^{-3}$ on $r>0$.

[F3] [[def-smooth-singular-chain-and-cochain-complexes]] defines a smooth singular cycle as a finite smooth chain with zero signed boundary.

[F4] [[def-emx-lorentz-star]] defines the period of a closed form on a finite real smooth singular cycle as the finite signed sum of its simplex integrals, and exactness means a global smooth primitive exists.

[F5] [[def-integral-of-a-form-over-a-smooth-singular-simplex]] defines $\int_\sigma\beta$ as the integral of the pullback over the affine simplex, with the chosen orientation determining its sign.

[F6] [[def-cross-product-in-r3]] gives the coordinate cross product used for tangent area vectors.

[F7] [[def-oriented-unit-normal-and-flux-of-a-surface-patch]] fixes the surface orientation through the parameter cross product; an outward-oriented face parametrization has its cross product in the outward normal direction.

[F8] [[thm-heine-borel-rn]] makes the unit sphere, a closed bounded subset of $\mathbb R^3$, compact; thus the smooth area form $\omega$ on it has compact support.

[F9] [[prop-integration-of-top-forms-by-finite-parametrizations]] identifies a compactly supported top-form integral on an oriented manifold with the sum of pullback integrals over finitely many orientation-preserving patches whose interiors are disjoint and whose closures cover the support.

[F10] [[lem-emx-unit-sphere-radial-flux]] defines the outward area form $\omega_u(v,w)=u\cdot(v\times w)$ on $S^2$ and computes $\int_{S^2}\omega=4\pi$.

[F11] [[thm-emx-local-potential-homotopy]] says that a smooth closed form with a nonzero period on a smooth singular cycle cannot be globally exact.

## Verification

1.1 Writing $X=(x,y,z)/r^3$, the coordinate formula in [F1] gives $d\beta=(\partial_x(xr^{-3})+\partial_y(yr^{-3})+\partial_z(zr^{-3}))\,dx\wedge dy\wedge dz$. By [F2], $\partial_x(xr^{-3})=r^{-3}-3x^2r^{-5}$, with the analogous formulas for $y,z$; their sum is $3r^{-3}-3(x^2+y^2+z^2)r^{-5}=0$. Thus $d\beta=0$ throughout $r>0$. [F1, F2, given, algebra]

1.2 Write the vertices as $v_0,v_1,v_2,v_3$. Their edge differences from $v_0$ are linearly independent: a relation $a(0,-2,-2)+b(-2,0,-2)+c(-2,-2,0)=0$ forces $b+c=a+c=a+b=0$, hence $a=b=c=0$. Also $v_0+v_1+v_2+v_3=0$, so $0$ is the barycenter with all four positive barycentric coefficients and is strictly inside the tetrahedron. Each face avoids the origin, so $q$ is smooth on a neighborhood of it. The intersection of the compact convex tetrahedron with any ray from $0$ is a bounded interval $[0,t_u]$ with $t_u>0$, so that ray meets $\partial T$ at exactly one point. Thus $q:\partial T\to S^2$ is a bijection. On a face in the plane $n\cdot p=h$ with outward unit normal $n$, one has $h>0$ and the inverse of $q$ is $u\mapsto hu/(n\cdot u)$; hence each face interior maps diffeomorphically to an open spherical patch, the four patch interiors are disjoint, and their closures cover $S^2$. The shared edges of the outward-oriented face simplices have opposite induced orientations, so their signed boundary cancels; since $q$ agrees on shared edges, [F3] gives $\partial z=0$. For face tangent vectors $v,w$, $Dq_p(v)=(v-(q\cdot v)q)/\|p\|_2$, and expanding the cross product after this substitution gives
$$
q\cdot(Dq_p(v)\times Dq_p(w))=\frac{p\cdot(v\times w)}{\|p\|_2^3}>0,
$$
because $p=h n+\text{(tangential part)}$ and [F7] gives $n\cdot(v\times w)>0$ in the outward face orientation. Thus $q$ preserves each face orientation. Expanding the coefficients of $\beta$ gives $\beta_p(v,w)=p\cdot(v\times w)/\|p\|_2^3$; on $S^2$ this is the outward area form $\omega$. By [F8], $\omega$ has compact support. By [F5], the integral over each smooth singular face is its pullback integral, and [F4] sums those integrals to $\int_z\beta$. The face interiors are disjoint and their closures cover $S^2$, so [F9] identifies their sum with $\int_{S^2}\omega$. This is exactly the top-form integral computed by [F10]; hence $\int_z\beta=4\pi$. [F3, F4, F5, F6, F7, F8, F9, F10, given]

2.1 Step 1.2 gives $\int_z\beta=4\pi\ne0$. Since step 1.1 proved $d\beta=0$, [F11] makes $\beta$ nonexact on the punctured domain. [F11, step 1.1, step 1.2] ∎
