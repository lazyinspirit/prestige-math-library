---
id: ex-emx-punctured-flux
kind: example
title: Closed flux form without global vector potential
status: published
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
  - thm-change-of-variables-for-compact-jordan-sets
  - lem-riemann-integral-unchanged-by-content-zero-modification
  - def-riemann-integral-over-a-jordan-set
  - thm-jordan-boundary-criterion
  - thm-continuous-functions-on-compact-jordan-sets-are-integrable
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
  thm-change-of-variables-for-compact-jordan-sets: mathematical-premise
  lem-riemann-integral-unchanged-by-content-zero-modification: mathematical-premise
  def-riemann-integral-over-a-jordan-set: mathematical-premise
  thm-jordan-boundary-criterion: mathematical-premise
  thm-continuous-functions-on-compact-jordan-sets-are-integrable: mathematical-premise
physical_scope: Pure mathematical example; no magnetic-charge or physical premise is asserted.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Example

Put $N=\mathbb R^3\setminus\{0\}$, $r=(x^2+y^2+z^2)^{1/2}$, and define the smooth two-form $\beta=(x\,dy\wedge dz+y\,dz\wedge dx+z\,dx\wedge dy)/r^3$ on $N$. Let $T$ be the tetrahedron with vertices $(1,1,1),(1,-1,-1),(-1,1,-1),(-1,-1,1)$, which contains the origin in its interior. Label these vertices $v_0,v_1,v_2,v_3$ in the displayed order. For $0\le j\le3$, let $\sigma_j:\Delta^2\to N$ be the affine simplex whose ordered vertices are $v_0,\ldots,\widehat v_j,\ldots,v_3$, and put $c_j=(-1)^{j+1}$. Let $q:N\to S^2$ be $q(p)=p/\|p\|_2$ and $\iota:S^2\hookrightarrow N$ the inclusion. Then $z=\sum_{j=0}^3c_j(\iota\circ q\circ\sigma_j)$ is a finite smooth singular two-cycle in $N$ representing the outward-oriented tetrahedron boundary projected to the unit sphere. Then $d\beta=0$ and $\int_z\beta=4\pi$, so $\beta$ is not globally exact on $N$.

## Example references

[[thm-emx-local-potential-homotopy]]

[[lem-emx-unit-sphere-radial-flux]]

[[def-emx-lorentz-star]]

## Facts & Assumptions

**Given:** The punctured domain, the form $\beta$, the tetrahedron $T$, and its outward orientation as in the Example.

[F1] [[thm-local-coordinate-formula-for-the-exterior-derivative]] gives $d\beta=(\partial_x X_1+\partial_y X_2+\partial_z X_3)\,dx\wedge dy\wedge dz$ when $\beta=X_1\,dy\wedge dz+X_2\,dz\wedge dx+X_3\,dx\wedge dy$.

[F2] [[thm-real-power-continuity-and-derivatives]], [[thm-chain-rule-for-total-derivatives]], and [[thm-algebra-of-derivatives]] give the derivative rules for the smooth coefficient functions $x_i r^{-3}$ on $r>0$.

[F3] [[def-smooth-singular-chain-and-cochain-complexes]] defines a smooth singular cycle as a finite smooth chain with zero signed boundary.

[F4] [[def-emx-lorentz-star]] defines the period of a closed form on a finite real smooth singular cycle as the finite signed sum of its simplex integrals, and exactness means a global smooth primitive exists.

[F5] [[def-integral-of-a-form-over-a-smooth-singular-simplex]] defines $\int_\sigma\beta$ as the integral of the pullback over the affine simplex, with the chosen orientation determining its sign.

[F6] [[def-cross-product-in-r3]] gives the coordinate cross product used for tangent area vectors.

[F7] [[def-oriented-unit-normal-and-flux-of-a-surface-patch]] fixes the surface orientation through the parameter cross product; an outward-oriented face parametrization has its cross product in the outward normal direction; the boundary orientation is outward normal first.

[F8] [[thm-heine-borel-rn]] makes the unit sphere, a closed bounded subset of $\mathbb R^3$, compact; thus the smooth area form $\omega$ on it has compact support.

[F9] [[prop-integration-of-top-forms-by-finite-parametrizations]] identifies a compactly supported top-form integral on an oriented manifold with the sum of pullback integrals over finitely many orientation-preserving patches whose interiors are disjoint and whose closures cover the support.

[F10] [[lem-emx-unit-sphere-radial-flux]] defines the outward area form $\omega_u(v,w)=u\cdot(v\times w)$ on $S^2$ and computes $\int_{S^2}\omega=4\pi$.

[F11] [[thm-emx-local-potential-homotopy]] says that a smooth closed form with a nonzero period on a smooth singular cycle cannot be globally exact.

[F12] [[thm-change-of-variables-for-compact-jordan-sets]] applies to an injective $C^1$ map on an open Euclidean set with invertible derivative and a compact Jordan subset. For the coordinate swap $R(u,v)=(v,u)$ on the standard closed parameter triangle $K=\{u,v\ge0:u+v\le1\}$, $R(K)=K$ and $\det DR=-1$. Thus, for a continuous two-form $h(u,v)\,du\wedge dv$ near $K$, its pullback by $R$ has integral $-\int_K h$.

[F13] [[thm-jordan-boundary-criterion]] makes a bounded set with content-zero boundary Jordan measurable; the boundary of $K$ consists of three line segments and has two-dimensional content zero. [[thm-continuous-functions-on-compact-jordan-sets-are-integrable]] makes each continuous coefficient integrable on $K$. [[lem-riemann-integral-unchanged-by-content-zero-modification]] permits setting it to zero on $\partial K$ without changing its integral. The zero-extension definition in [[def-riemann-integral-over-a-jordan-set]] then identifies that value with its integral on $K^\circ$.

## Verification

1.1 Put $s=x^2+y^2+z^2>0$. Repeated application of the positive-base power rule in [F2] gives derivatives of every order of $u^{-1/2}$ and $u^{-3/2}$ on $u>0$; the chain and product rules then show that $q(p)=p s^{-1/2}$ and every coefficient of $\beta$ are smooth on $N$. Writing $X=(x,y,z)/r^3$, the coordinate formula in [F1] gives $d\beta=(\partial_x(xr^{-3})+\partial_y(yr^{-3})+\partial_z(zr^{-3}))\,dx\wedge dy\wedge dz$. By [F2], $\partial_x(xr^{-3})=r^{-3}-3x^2r^{-5}$, with the analogous formulas for $y,z$; their sum is $3r^{-3}-3(x^2+y^2+z^2)r^{-5}=0$. Thus $d\beta=0$ throughout $N$. [F1, F2, given, algebra]

2.1 The edge matrix with columns $v_1-v_0=(0,-2,-2)$, $v_2-v_0=(-2,0,-2)$ and $v_3-v_0=(-2,-2,0)$ has determinant $-16$. Since $v_0+v_1+v_2+v_3=0$, the origin has strictly positive barycentric coordinates and lies in the interior of $T$. Each face avoids it, so step 1.1 supplies smooth extensions of $q\sigma_j$ near $\Delta^2$. The ordered tetrahedron has negative orientation; its outward boundary therefore has coefficients $-(-1)^j=c_j$ on the ordered faces $\sigma_j$. In the formal signed boundary of $\sum_jc_j\sigma_j$, every ordered edge occurs twice with opposite coefficients: deleting indices $i<j$ in either order changes the boundary sign by $-1$. Composing these identical edge maps with $\iota q$ preserves their equality, so $\partial z=0$ by [F3]. This uses no extension of $q$ across the origin. [F2, F3, F7, given, step 1.1, algebra]

2.2 A ray from the interior point $0$ meets the compact convex tetrahedron in an interval $[0,t_u]$ with $t_u>0$ and meets its boundary only at $t_u u$. Hence $q:\partial T\to S^2$ is bijective. On a face $n\cdot p=h$ with outward unit normal $n$, $h>0$ and the inverse is $u\mapsto hu/(n\cdot u)$; it is smooth on the spherical face interior, where $n\cdot u>0$. These interiors give disjoint open patches whose closures cover $S^2$. For any tangent vectors $v,w$ at $p\in N$, $Dq_p(v)=(v-(q\cdot v)q)/\|p\|_2$; expanding the cross product gives $q\cdot(Dq_p(v)\times Dq_p(w))=p\cdot(v\times w)/\|p\|_2^3=\beta_p(v,w)$. Thus $q^*\omega=\beta$ on $N$, and $\iota^*\beta=\omega$ on $S^2$. For positively oriented face vectors the displayed value is positive, because $p\cdot(v\times w)=h n\cdot(v\times w)>0$. Hence radial projection preserves the outward face orientation. [F2, F6, F7, F10, given, step 1.1, algebra]

3.1 In the positive affine coordinates on $\Delta^2$, write $G_j=q\sigma_j$ on $K$. The orientation sign of $G_j$ is $c_j$ by steps 2.1–2.2. Set $H_j=G_j$ when $c_j=1$ and $H_j=G_j\circ R$ when $c_j=-1$, with $R$ as in [F12]. Each $H_j$ is smooth near $K$ and restricts on its interior to an orientation-preserving diffeomorphism onto its spherical face patch. By [F12], $\int_K H_j^*\omega=c_j\int_KG_j^*\omega$ in both cases. The simplex definition [F5], the pullback identity in step 2.2, and the finite signed sum [F4] give $\int_z\beta=\sum_jc_j\int_KG_j^*\omega=\sum_j\int_KH_j^*\omega$. The parameter triangles are compact Jordan sets; their edges have content zero, and the smooth pullback coefficients are bounded, so their closed-triangle integrals equal the open-interior integrals by [F13]. Compact support follows from [F8]; the four patches satisfy [F9], yielding $\int_z\beta=\int_{S^2}\omega=4\pi$ by [F10]. [F4, F5, F8, F9, F10, F12, F13, step 2.1, step 2.2, algebra]

4.1 Step 3.1 gives $\int_z\beta=4\pi\ne0$. Since step 1.1 proved $d\beta=0$, [F11] makes $\beta$ nonexact on the punctured domain. [F11, step 1.1, step 3.1] ∎
