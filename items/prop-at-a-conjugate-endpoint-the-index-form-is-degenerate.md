---
id: prop-at-a-conjugate-endpoint-the-index-form-is-degenerate
kind: proposition
title: At a conjugate endpoint the index form is degenerate
status: published
origin: pipeline
deps:
  - prop-exponential-map-scales-geodesic-time
  - thm-ftc-first-part
  - thm-integration-by-parts
  - thm-nonnegative-continuous-with-zero-integral-vanishes
  - thm-newton-leibniz-with-interior-derivative
  - thm-principal-inverse-sine-and-cosine-derivatives
  - def-principal-inverse-sine-and-cosine
  - thm-gram-schmidt-orthonormalisation
  - cor-trigonometric-parity-and-pythagorean-identity
  - def-conjugate-points-along-a-geodesic-and-their-multiplicity
  - def-countable-choice
  - def-euclidean-inner-product
  - def-induced-connection-and-second-fundamental-form
  - def-index-form-of-a-geodesic-segment
  - def-jacobi-field
  - def-riemannian-distance-on-a-connected-manifold
  - def-riemannian-metric-and-riemannian-manifold
  - def-riemannian-speed-and-length
  - lem-integration-by-parts-for-the-index-form
  - prop-jacobi-fields-are-the-null-solutions-of-the-index-form-with-fixed-endpoints
  - prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions
  - prop-tangent-space-of-a-regular-level-set-is-the-kernel
  - thm-a-regular-level-set-is-an-embedded-submanifold
  - thm-chain-rule
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data
  - thm-variation-field-of-a-geodesic-variation-is-a-jacobi-field
  - thm-existence-uniqueness-and-smooth-dependence-of-geodesics
  - thm-fundamental-theorem-of-riemannian-geometry
  - thm-quarter-turn-values-and-shift-formulas
  - thm-sine-and-cosine-derivatives
  - thm-the-induced-connection-is-levi-civita
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: "Chapter 10, printed pp.173–190: the index form and its relation to conjugate points; the sphere between antipodes is the model case."
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "§23.3, printed pp.165–169: degeneracy of the index form at a conjugate endpoint and non-strict minimality in the sphere model."
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume exactly $\mathrm{AC}_\omega$ through the declared dependencies.

(a) Let $(M,g)$ be a finite-dimensional Riemannian manifold without boundary,
let $a<b$, and let $\gamma:[a,b]\to M$ be an affinely parametrized geodesic.
If $\gamma(a)$ and $\gamma(b)$ are conjugate along $\gamma$, then the
fixed-endpoint index form on $\mathcal X_0(\gamma)$ is degenerate: there is a
nonzero $J\in\mathcal X_0(\gamma)$ with
$$I_\gamma(J,W)=0\qquad\text{for every }W\in\mathcal X_0(\gamma).$$

(b) On the round sphere $S_R^n$ of radius $R>0$ with $n\ge2$, let
$p\in S_R^n$, let $v\in T_pS_R^n$ be a unit vector, and let
$\gamma(t)=\exp_p(tv)$ on $[0,\pi R]$. Then $\gamma(\pi R)=-p$, the segment is
a minimizing geodesic with
$$d(p,-p)=L(\gamma)=\pi R,$$
and it is not a strict local minimizer: for every $\varepsilon>0$ there is a
piecewise $C^1$ path $\sigma$ from $p$ to $-p$ with $\sigma\ne\gamma$,
$L(\sigma)=\pi R$ and $\sup_{t\in[0,\pi R]}d(\sigma(t),\gamma(t))<\varepsilon$.
The fixed-endpoint index form on $[0,\pi R]$ is degenerate with nullspace
exactly the space of Jacobi fields vanishing at both endpoints, of dimension
$n-1$.

## Facts & Assumptions

**Given:** The general geodesic segment of (a), and for (b) the radius $R>0$,
the integer $n\ge2$, the point $p\in S_R^n$, the unit vector
$v\in T_pS_R^n$, and the radial geodesic $\gamma(t)=\exp_p(tv)$.

[A1] Countable choice is the assumption $\mathrm{AC}_\omega$ of
[[def-countable-choice]]. It is inherited through the index-form and
Jacobi-field interfaces
([[prop-jacobi-fields-are-the-null-solutions-of-the-index-form-with-fixed-endpoints]],
[[def-index-form-of-a-geodesic-segment]]). The
explicit trigonometric computations use no further choice and no full Axiom of
Choice is assumed.

[F1] The sphere $S_R^n=\{x:|x|=R\}$ is a nonempty regular level set, hence a
smooth boundaryless $n$-manifold with $T_xS_R^n=x^\perp$; the induced metric is
the restriction of the Euclidean inner product, the ambient Levi-Civita
derivative is ordinary differentiation, and the induced connection is the
tangential projection of the ambient derivative, equal to the Levi-Civita
connection of the induced metric
([[thm-a-regular-level-set-is-an-embedded-submanifold]],
[[prop-tangent-space-of-a-regular-level-set-is-the-kernel]],
[[prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions]],
[[def-riemannian-metric-and-riemannian-manifold]],
[[def-euclidean-inner-product]],
[[thm-fundamental-theorem-of-riemannian-geometry]],
[[def-induced-connection-and-second-fundamental-form]],
[[thm-the-induced-connection-is-levi-civita]]). A smooth curve on $S_R^n$ has
Riemannian speed equal to the ambient norm of its velocity, since the two
metrics coincide on tangent vectors, and an ambient acceleration orthogonal to
the sphere has zero tangential projection. In Euclidean coordinates ordinary
directional differentiation is metric compatible because the metric
coefficients are constant and is torsion free because mixed partials commute;
uniqueness in the cited fundamental theorem therefore identifies it with the
ambient Levi–Civita connection.

[F2] Initial data determine a unique maximal geodesic: a geodesic defined on
an interval with $\gamma(0)=p$ and $\gamma'(0)=v$ is $t\mapsto\exp_p(tv)$ there
([[thm-existence-uniqueness-and-smooth-dependence-of-geodesics]],
[[prop-exponential-map-scales-geodesic-time]]).

[F3] A smooth variation through affinely parametrized geodesics has a Jacobi
variation field ([[thm-variation-field-of-a-geodesic-variation-is-a-jacobi-field]]).

[F4] A Jacobi field is uniquely determined by its initial value and initial
covariant derivative ([[thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data]]).

[F5] Distance is the infimum of lengths of piecewise $C^1$ joining paths, so a
curve from $p$ to $q$ of length $d(p,q)$ is minimizing and the length of any
joining path is at least $d(p,q)$; the length of a smooth curve is the integral
of its Riemannian speed
([[def-riemannian-distance-on-a-connected-manifold]],
[[def-riemannian-speed-and-length]]).

[F6] The points $\gamma(a)$ and $\gamma(b)$ are conjugate along $\gamma$
exactly when some nonzero Jacobi field along the segment vanishes at both
endpoints, and the multiplicity is the dimension of that space
([[def-conjugate-points-along-a-geodesic-and-their-multiplicity]]). The radical
of the index form restricted to the continuous piecewise-$C^2$ fixed-endpoint fields is exactly the
set of smooth Jacobi fields vanishing at both endpoints
([[prop-jacobi-fields-are-the-null-solutions-of-the-index-form-with-fixed-endpoints]],
[[def-index-form-of-a-geodesic-segment]]).

[F7] Euclidean Cauchy–Schwarz bounds $|\langle x,y\rangle|\le |x||y|$
([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[F8] Sine and cosine satisfy $\sin^2x+\cos^2x=1$, with
$(\sin x)'=\cos x$ and $(\cos x)'=-\sin x$, and the chain rule applies;
$\sin0=0$, $\cos0=1$, $\sin\pi=0$ and $\cos\pi=-1$
([[cor-trigonometric-parity-and-pythagorean-identity]],
[[thm-sine-and-cosine-derivatives]], [[thm-chain-rule]],
[[thm-quarter-turn-values-and-shift-formulas]]).

[F9] If $V$ is $C^2$ and $W$ is $C^1$ on the pieces of a finite subdivision
(with one-sided derivatives at piece endpoints), then
$$I_\gamma(V,W)=[g(D_tV,W)]_a^b-\sum_{j=1}^{m-1}g(\Delta_jD_tV,W(t_j))-\sum_{k=1}^{m}\int_{t_{k-1}}^{t_k}g(D_t^2V+R(V,T)T,W)\,dt,$$
and the jump sum is absent when $V$ is smooth
([[lem-integration-by-parts-for-the-index-form]]). A Jacobi field satisfies
$D_t^2J+R(J,T)T=0$ ([[def-jacobi-field]]).

[F10] The integral of a continuous function is a $C^1$ primitive, including
one-sided endpoint derivatives ([[thm-ftc-first-part]]). Integration by parts
holds for $C^1$ functions ([[thm-integration-by-parts]]); Newton--Leibniz
holds on each closed piece ([[thm-newton-leibniz-with-interior-derivative]]).
A continuous nonnegative function with zero integral vanishes
([[thm-nonnegative-continuous-with-zero-integral-vanishes]]).

[F11] The principal $\arccos:[-1,1]\to[0,\pi]$ is continuous and has derivative
$-1/\sqrt{1-y^2}$ on $(-1,1)$
([[def-principal-inverse-sine-and-cosine]],
[[thm-principal-inverse-sine-and-cosine-derivatives]]).
Finite Gram--Schmidt supplies an orthonormal basis of a supplied
finite-dimensional inner product space ([[thm-gram-schmidt-orthonormalisation]]).

## Proof

**Proof technique:** read degeneracy off the vanishing Jacobi field, and on the
sphere compare the radial geodesic with the family of meridians through the
antipode.

1.1 For every unit $u\in T_pS_R^n$ the curve $s_u(t)=\cos(t/R)p+R\sin(t/R)u$ is a unit-speed geodesic of $S_R^n$, and in particular $s_v(t)=\exp_p(tv)$ for all real $t$; consequently $\gamma=s_v|_{[0,\pi R]}$ and $\gamma(\pi R)=-p$. [F1, F2, F8, given]
Since $u\perp p$ and $|u|=1$ with $|p|=R$, the Pythagorean identity gives $|s_u(t)|^2=R^2\cos^2(t/R)+R^2\sin^2(t/R)=R^2$, so $s_u$ maps into $S_R^n$. The chain rule gives $s_u'(t)=-(1/R)\sin(t/R)p+\cos(t/R)u$ and $s_u''(t)=-(1/R^2)s_u(t)$; thus $|s_u'|^2=\sin^2(t/R)+\cos^2(t/R)=1$, and $s_u''$ is a multiple of $s_u$, hence orthogonal to the sphere at $s_u(t)$. By [F1] the tangential projection of the ambient acceleration is the covariant derivative of $s_u'$ along $s_u$, so $s_u$ is a unit-speed geodesic. It satisfies $s_u(0)=p$ and $s_u'(0)=u$, so by [F2] it equals the maximal geodesic $\exp_p(tu)$; at $t=\pi R$ the values $\cos\pi=-1$ and $\sin\pi=0$ of [F8] give $s_u(\pi R)=-p$.

1.2 Part (a) holds. [F6, F9, given]
If $\gamma(a)$ and $\gamma(b)$ are conjugate along $\gamma$, [F6] supplies a nonzero Jacobi field $J$ along $\gamma$ with $J(a)=J(b)=0$. A Jacobi field is smooth, hence a member of the index-form space, and its endpoint values place it in the fixed-endpoint subspace $\mathcal X_0(\gamma)$. For $W\in\mathcal X_0(\gamma)$ the integration-by-parts identity of [F9] applies with a smooth $J$ and no derivative jumps; the integral vanishes pointwise because $J$ is Jacobi, and the boundary term $[g(D_tJ,W)]_a^b$ vanishes because $W(a)=W(b)=0$. Hence $I_\gamma(J,W)=0$ for every $W\in\mathcal X_0(\gamma)$, and $I_\gamma$ is degenerate with the nonzero null vector $J$.

2.1 Let $\theta\in(0,\pi)$ and let $w\in T_pS_R^n$ be a unit vector with $w\perp v$; such a $w$ exists because $n\ge2$ makes $p^\perp\cap v^\perp$ at least one-dimensional. Put $u_\theta=\cos\theta\,v+\sin\theta\,w$ and $s_\theta=s_{u_\theta}$ on $[0,\pi R]$. Then $s_\theta$ is a unit-speed curve on $S_R^n$ with $s_\theta(0)=p$ and $s_\theta(\pi R)=-p$, its length is $\pi R$, and $s_\theta\ne\gamma$. [F1, F5, F8, step 1.1, given]
The vector $u_\theta$ is a unit vector of $T_pS_R^n$ because $v,w$ are orthonormal tangent vectors at $p$; step 1.1 therefore applies to $s_\theta$. The endpoints are $s_\theta(0)=\cos0\,p+0=p$ and $s_\theta(\pi R)=\cos\pi\,p+R\sin\pi\,u_\theta=-p$ by [F8]. Unit speed makes the length equal to the parameter length $\pi R$ by [F5]. At the midpoint, $s_\theta(\pi R/2)=\cos(\pi/2)p+R\sin(\pi/2)u_\theta=Ru_\theta$ differs from $s_v(\pi R/2)=Rv$ for $0<\theta<\pi$, because $u_\theta=\cos\theta\,v+\sin\theta\,w$ with $\sin\theta\ne0$ and $w\perp v$; hence $s_\theta\ne\gamma$.

2.2 In the setting of (b), $d(p,-p)=\pi R$ and $\gamma$ is minimizing. [F1, F5, F7, F10, F11, step 1.1]
For any piecewise $C^1$ joining path $\sigma$, put $q(t)=\langle p,\sigma(t)\rangle/R^2$ and $\vartheta(t)=\arccos q(t)\in[0,\pi]$. On an interval with $0<\vartheta<\pi$, $\langle\sigma,\sigma'\rangle=0$ and differentiation gives $|\vartheta'|=|\langle p-q\sigma,\sigma'\rangle|/(R^2\sqrt{1-q^2})\le |\sigma'|/R$ by [F7], because $|p-q\sigma|=R\sqrt{1-q^2}$. For $0<\delta<\pi/2$, let $t_+$ be the first time $\vartheta=\pi-\delta$ and $t_-$ the last time before $t_+$ with $\vartheta=\delta$. Continuity, the endpoint values and compactness of the level sets supply these times, and $\delta\le\vartheta\le\pi-\delta$ on $[t_-,t_+]$. Thus $\vartheta$ is piecewise $C^1$ on this subinterval by [F11]. Integrating the derivative bound piece by piece using [F10] gives $L(\sigma)\ge R(\pi-2\delta)$. Letting $\delta\downarrow0$ yields $L(\sigma)\ge\pi R$. By step 1.1, $\gamma$ joins the poles with unit speed for time $\pi R$, so $L(\gamma)=\pi R$ and the infimum in [F5] is attained by $\gamma$.

2.3 The fixed-endpoint index form on $[0,\pi R]$ is degenerate, and its radical has dimension $n-1$. [F1, F3, F4, F6, F9, F10, F11, step 1.1, step 1.2]
For each $w\in T_pS_R^n$ perpendicular to $v$, vary the initial direction through $u_s=\cos s\,v+\sin s\,w$ when $w$ is unit, scaling linearly for general $w$. Step 1.1 makes $s_{u_s}(t)$ a geodesic variation; its variation field is $J_w(t)=R\sin(t/R)w$. By [F3] it is Jacobi, and it vanishes at $0$ and $\pi R$. Its initial covariant derivative is $w$, so the $n-1$ independent choices of $w\in v^\perp\cap T_pS_R^n$ give independent endpoint-vanishing Jacobi fields. The tangent field $tT(t)$ is also Jacobi by [F3], applied to the geodesic variation $(s,t)\mapsto\gamma((1+s)t)$; it vanishes at $0$, has initial derivative $v$, and is nonzero at $\pi R$. By [F4], these $n$ fields span all Jacobi fields with $J(0)=0$, because their initial derivatives form a basis of $T_pS_R^n$. Their endpoint evaluation has one-dimensional image, generated by $(\pi R)T(\pi R)$, so its kernel has dimension $n-1$. It remains to justify the radical on the full piecewise-$C^1$ domain, rather than only the domain of [F6]. Choose an orthonormal basis $e_2,\ldots,e_n$ of $p^\perp\cap v^\perp$ by [F11]. Along $\gamma$, the frame $E_1=T$, $E_i=e_i$ is orthonormal and parallel by [F1]: the constant $e_i$ have zero ambient derivative and $T'$ is normal. Write a radical field $V$ in this frame as a continuous piecewise-$C^1$ vector function $x$. Put $B_{ij}(t)=g(R(E_j,T)T,E_i)$, a smooth matrix. The definition in [F6] gives
$$0=I(V,W)=\int(\langle x',y'\rangle-\langle Bx,y\rangle)\,dt$$
for every endpoint-zero piecewise-$C^1$ coefficient vector $y$. On any closed piece $[c,d]$ of $x$, define $H(t)=\int_c^t B(s)x(s)\,ds$, $h=x'+H$ and $\bar h=(d-c)^{-1}\int_c^d h$. Take $y(t)=\int_c^t(h(s)-\bar h)\,ds$ on $[c,d]$ and zero outside. It is an admissible continuous piecewise-$C^1$ test since $y(c)=y(d)=0$. By [F10], $H'=Bx$ and integration by parts gives
$$0=\int_c^d\langle h,y'\rangle=\int_c^d|h-\bar h|^2.$$
Therefore $h=\bar h$ everywhere on $[c,d]$, so $x'=\bar h-H$ is $C^1$, including one-sided endpoints. Hence $V$ is piecewise $C^2$. Since it annihilates every piecewise-$C^2$ endpoint-zero test, [F6] makes it a smooth endpoint-vanishing Jacobi field. Conversely every such Jacobi field annihilates the entire piecewise-$C^1$ space by [F9], exactly as in step 1.2. Thus the radical is precisely the already computed $(n-1)$-dimensional space.

3.1 For every $t\in[0,\pi R]$ the distance between $\gamma(t)$ and $s_\theta(t)$ is at most $R\theta$. [F1, F5, F8, step 1.1, step 2.1]
Fix $t$ and define $\rho(s)=\cos(t/R)p+R\sin(t/R)(\cos s\,v+\sin s\,w)$ for $s\in[0,\theta]$. Then $\rho$ is smooth, $\rho(s)\in S_R^n$ by the Pythagorean identity, $\rho(0)=s_v(t)=\gamma(t)$ and $\rho(\theta)=s_\theta(t)$. Its velocity is $\rho'(s)=R\sin(t/R)(-\sin s\,v+\cos s\,w)$, a tangent vector of ambient norm $R\sin(t/R)\le R$, because $v,w$ are orthonormal and orthogonal to $p$; by [F1] the Riemannian speed of $\rho$ is that ambient norm. Hence $L(\rho)\le R\theta$ by [F5], and since $\rho$ joins $\gamma(t)$ to $s_\theta(t)$, the distance is at most $L(\rho)\le R\theta$. Taking the supremum over $t$ gives $\sup_{t\in[0,\pi R]}d(\gamma(t),s_\theta(t))\le R\theta$.

4.1 The geodesic $\gamma$ of (b) is not a strict local minimizer. [step 2.1, step 2.2, step 3.1]
Given $\varepsilon>0$, choose $\theta\in(0,\pi)$ with $R\theta<\varepsilon$ and put $\sigma=s_\theta$. By step 2.1, $\sigma$ is a piecewise $C^1$ path from $p$ to $-p$ with $\sigma\ne\gamma$ and $L(\sigma)=\pi R=L(\gamma)$, and by step 3.1 it satisfies $\sup_td(\sigma(t),\gamma(t))<\varepsilon$. Thus every uniform neighborhood of $\gamma$ contains a competitor of the same length, while step 2.2 shows that $\gamma$ is minimizing; strict local minimality fails.

5.1 Boundary, degeneracy and choice audit. [A1, F6, step 1.2, step 2.1, step 2.3, step 4.1]
The segment $[a,b]$ of (a) is nondegenerate, and included endpoints use the one-sided conventions of the index-form and Jacobi-field definitions. In (a) the empty and zero-dimensional cases are vacuous because no conjugate pair exists, and in dimension one the vanishing space is zero by the multiplicity bound of [F6]. In (b), $R>0$ and $n\ge2$; the case $n=1$ is excluded because the competitor construction needs a normal direction orthogonal to $v$, and on the circle the two semicircles are not arbitrarily close. The competitors $s_\theta$ are distinct from $\gamma$ and have exactly the same length, so no strict inequality of lengths is claimed at the conjugate endpoint; the open geodesic before $\pi R$ is not addressed here. The vector $w$ of step 2.1 is chosen once from the nonzero finite-dimensional space $p^\perp\cap v^\perp$; no choice function on a family is used, and exactly the declared $\mathrm{AC}_\omega$ is inherited through the index-form and Jacobi-field interfaces. The proposition asserts degeneracy and non-strictness; it claims no converse and does not say that every conjugate endpoint fails to minimize.
$\square$

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 10, printed pp.173–190, relates the index form to conjugate points; Datar, *Lectures on Riemannian Geometry*, §23.3, printed pp.165–169, records that the index form degenerates at a conjugate endpoint and that the sphere between antipodes is minimizing without being a strict minimizer. The explicit meridian family, the uniform closeness bound and the nullspace identification are computed above rather than quoted.
