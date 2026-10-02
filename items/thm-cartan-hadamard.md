---
id: thm-cartan-hadamard
kind: theorem
title: Cartan hadamard
status: draft
origin: pipeline
deps:
  - thm-no-conjugate-points-under-nonpositive-sectional-curvature
  - prop-conjugate-points-and-multiplicity-are-invariant-under-affine-reparametrization
  - thm-a-complete-local-isometry-is-a-covering-map
  - thm-hopf-rinow
  - thm-gauss-lemma
  - thm-conjugate-points-are-critical-values-of-the-exponential-map-along-the-geodesic
  - def-universal-covering-space
  - cor-connected-cover-of-a-simply-connected-space-is-trivial
  - def-countable-choice
  - thm-the-differential-of-exp-p-at-zero-is-the-identity
  - prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions
  - def-pullback-riemannian-metric
  - lem-local-isometries-send-geodesics-to-geodesics
  - def-riemannian-isometry-and-local-isometry
  - thm-existence-uniqueness-and-smooth-dependence-of-geodesics
  - cor-convex-subsets-of-rn-are-contractible
  - lem-contractibility-implies-trivial-fundamental-group
  - def-simply-connected
  - prop-topological-manifolds-are-locally-compact-and-locally-path-connected
  - cor-rn-is-polygonally-connected-and-locally-path-connected
  - def-sectional-curvature
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Theorem 24.3.1 with its proof, §§24.3 and 20.1, printed pp.147–149, 178–179"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§5, pp.17–19: the Cartan–Hadamard route through the complete-local-isometry cover theorem"
---

## Statement

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$. Let
$(M,g)$ be a connected, boundaryless, finite-dimensional Riemannian manifold
that is complete and whose sectional curvature satisfies $K\le0$ at every
tangent two-plane. Then for every $p\in M$:

1. the exponential map $\exp_p:T_pM\to M$ is a smooth covering map when its
   domain carries the pulled-back metric $\tilde g:=\exp_p^*g$;
2. $(T_pM,\tilde g)$ is complete and $T_pM$ is simply connected, so $\exp_p$ is
   a **universal cover** of $M$;
3. if in addition $M$ is simply connected, then $\exp_p$ is a diffeomorphism
   for every $p$, and $M$ is diffeomorphic to the Euclidean space $T_pM$.

The curvature sign is the one of [[def-sectional-curvature]], so $K\le0$
includes the flat case; no lower bound on curvature, no compactness and no
dimension restriction (other than finiteness) are assumed. The completeness of
$(T_pM,\tilde g)$ is a conclusion, not a hypothesis: without it the pulled-back
metric need not be complete even for a local diffeomorphism of a complete
manifold.

## Facts & Assumptions

**Given:** The complete connected boundaryless Riemannian manifold $(M,g)$
with $K\le0$, a point $p\in M$, and the inherited $\mathrm{AC}_\omega$ of [A1].

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$
([[def-countable-choice]]), carried by the Hopf–Rinow, exponential and covering
suppliers used below, and by the sectional-curvature and no-conjugate-points
interfaces; no further family of choices is made.

[F1] Under $K\le0$ no unit-speed geodesic has conjugate points: a nonzero
Jacobi field with $J(0)=0$ cannot vanish again at a positive time
([[thm-no-conjugate-points-under-nonpositive-sectional-curvature]]).

[F2] For $v\ne0$, $\exp_p$ fails to be a local diffeomorphism at $v$ exactly
when $\gamma(t)=\exp_p(tv)$ has $\gamma(0)$ and $\gamma(1)$ conjugate along
$\gamma$; at $v=0$ its differential is the identity,
$d(\exp_p)_0=\operatorname{id}$, hence invertible
([[thm-conjugate-points-are-critical-values-of-the-exponential-map-along-the-geodesic]],
[[thm-the-differential-of-exp-p-at-zero-is-the-identity]]).

[F3] Hopf–Rinow: metric completeness, geodesic completeness, the global
definition of $\exp_q$ on $T_qM$ for one (equivalently every) $q$, and
compactness of closed bounded subsets are equivalent for a nonempty connected
boundaryless Riemannian manifold ([[thm-hopf-rinow]]); in particular $M$ is
geodesically complete and $\exp_p$ is defined on all of $T_pM$, and geodesics
of $M$ are defined for all real times. A geodesic is determined by its value
and velocity at one time ([[thm-existence-uniqueness-and-smooth-dependence-of-geodesics]]).

[F4] A local Riemannian isometry $F:(N,\hat g)\to(M,g)$ intertwines covariant
derivatives along curves: $D_t^g(dF(W))=dF(D_t^{\hat g}W)$ for every smooth
field $W$ along a curve; consequently a curve in $N$ is a geodesic of $\hat g$
if and only if its image under $F$ is a geodesic of $g$
([[lem-local-isometries-send-geodesics-to-geodesics]],
[[def-riemannian-isometry-and-local-isometry]]).

[F5] If $F:N\to M$ is an immersion, the pullback tensor $F^*g$ is a Riemannian
metric on $N$. If $F$ is also a local diffeomorphism, it is a local
isometry from $(N,F^*g)$ to $(M,g)$
([[prop-pullback-of-a-riemannian-metric-is-riemannian-exactly-for-immersions]],
[[def-pullback-riemannian-metric]]).

[F6] Let $F:(N,\hat g)\to(M,g)$ be a local isometry between connected
boundaryless Riemannian manifolds with $N$ complete and nonempty. Then $F$ is
surjective and a smooth covering map, and $M$ is complete
([[thm-a-complete-local-isometry-is-a-covering-map]]). A universal cover of $M$
is a covering map with simply connected total space
([[def-universal-covering-space]]).

[F7] $\mathbb R^n$ is contractible for every $n\ge1$
([[cor-convex-subsets-of-rn-are-contractible]] applied to the nonempty convex
set $\mathbb R^n$); a contractible space
has trivial fundamental group
([[lem-contractibility-implies-trivial-fundamental-group]]), and a
path-connected space with trivial fundamental group is simply connected
([[def-simply-connected]]). For $n\ge1$, $\mathbb R^n$ is path connected
([[cor-rn-is-polygonally-connected-and-locally-path-connected]]); for $n=0$ the
one-point space is simply connected.

[F8] Every connected covering of a locally path-connected simply connected
space is one-sheeted and isomorphic to the identity covering
([[cor-connected-cover-of-a-simply-connected-space-is-trivial]]); every
topological manifold is locally path connected
([[prop-topological-manifolds-are-locally-compact-and-locally-path-connected]]).

## Proof

1.1 The exponential map is a local diffeomorphism and a local isometry for the pulled-back metric. [F1, F2, F5, given]
If $v\ne0$ and $\gamma(t)=\exp_p(tv)$ had a conjugate pair $(0,1)$, then
conjugacy and its multiplicity are unchanged under affine reparametrization
([[prop-conjugate-points-and-multiplicity-are-invariant-under-affine-reparametrization]]),
so the unit-speed reparametrization of $\gamma$ would carry a nonzero Jacobi
field vanishing at the start and at a later positive instant, contradicting
[F1]; hence by [F2] the
differential $d(\exp_p)_v$ is invertible for every $v\ne0$, and at $v=0$ the
same holds by [F2]. Thus $\exp_p$ is a local diffeomorphism on all of
$T_pM$, in particular an immersion, and $\tilde g:=\exp_p^*g$ is a Riemannian
metric on $T_pM$ by [F5]. By construction $\exp_p:(T_pM,\tilde g)\to(M,g)$
satisfies $(\exp_p)^*g=\tilde g$, so it is a local isometry, and the
intertwining property of [F4] applies to it. [F1, F2, F5, given]

2.1 The straight rays through $0$ are $\tilde g$-geodesics defined for all time. [F3, F4, step 1.1]
Fix $v\in T_pM$ and let $c(t):=tv$ be the straight ray in $T_pM$; the curve
$c$ is defined for all $t\in\mathbb R$. Its image under $\exp_p$ is
$(\exp_p\circ c)(t)=\exp_p(tv)=\gamma_v(t)$, the $g$-geodesic of $M$ with
$\gamma_v(0)=p$, $\gamma_v'(0)=v$, which by [F3] is defined for all real $t$
because $M$ is complete. Since $D_t^g(\exp_p\circ c)'=0$ and by step 1.1
$\exp_p$ is a local isometry, [F4] gives
$d(\exp_p)_{tv}\bigl(D_t^{\tilde g}c'\bigr)=D_t^g(\exp_p\circ c)'=0$; the
differential of the local diffeomorphism $\exp_p$ at $tv$ is invertible, so
$D_t^{\tilde g}c'=0$ and $c$ is a $\tilde g$-geodesic. This holds for every
$v\in T_pM$; in particular the straight ray begins at $0$ at time $0$, so the
geodesic in $(T_pM,\tilde g)$ with initial data $(0,u)$ is $t\mapsto tu$.
[F3, F4, step 1.1]

3.1 The pulled-back metric is complete. [F3, step 2.1]
At the point $0\in T_pM$ the exponential map of the Riemannian manifold
$(T_pM,\tilde g)$ is defined on all of its tangent space: by step 2.1 the
maximal $\tilde g$-geodesic with initial data $(0,u)$ is $t\mapsto tu$, defined
for every $t\in\mathbb R$, so
$\exp^{(\tilde g)}_0(u)=u$ under the canonical identification
$T_0(T_pM)\cong T_pM$. Thus $\exp^{(\tilde g)}_0$ is globally defined (it is
the identity of $T_pM$). The manifold $(T_pM,\tilde g)$ is connected and
boundaryless, so the equivalence of [F3] applied to it yields that
$(T_pM,\tilde g)$ is geodesically and metrically complete. [F3, step 2.1]

4.1 The exponential map is a covering map. [F6, step 1.1, step 3.1]
The map $\exp_p:(T_pM,\tilde g)\to(M,g)$ is a local isometry by step 1.1
between connected boundaryless Riemannian manifolds, and the source
$(T_pM,\tilde g)$ is nonempty and complete by step 3.1. Hence [F6] applies:
$\exp_p$ is surjective and a smooth covering map. [F6, step 1.1, step 3.1]

5.1 Universal cover and the simply connected case. [F7, F8, step 4.1]
If $\dim M=0$, then $T_pM=\{0\}$ and $\exp_p$ is the identity of a point, which
is a diffeomorphism and trivially a universal cover. Otherwise $T_pM\cong
\mathbb R^n$ is contractible by [F7], hence path connected with trivial
fundamental group, hence simply connected by [F7]. By step 4.1 and the
definition of a universal cover in [F6], $\exp_p$ is a universal cover of $M$
whenever $M$ is connected. If $M$ is simply connected as well, then $M$ is a
locally path-connected simply connected space by [F8], so [F8] applies to the
connected covering $\exp_p$: it is one-sheeted and isomorphic to the identity
covering, in particular bijective. A bijective local diffeomorphism is a
diffeomorphism, so $\exp_p$ is a diffeomorphism, and through it $M$ is
diffeomorphic to the Euclidean space $T_pM$. Both assertions hold for every
$p\in M$; the completeness of $(T_pM,\tilde g)$ was proved, not assumed. The
only selections are those made one at a time by the Hopf-Rinow and covering
suppliers [F3] and [F6], so the inherited $\mathrm{AC}_\omega$ of [A1] is
consumed exactly through them.
[F7, F8, step 4.1] ∎
