---
id: lem-radial-jacobi-tensor-is-invertible-before-the-first-conjugate-point
kind: lemma
title: Radial jacobi tensor is invertible before the first conjugate point
status: draft
origin: pipeline
deps:
  - def-radial-jacobi-tensor
  - def-conjugate-points-along-a-geodesic-and-their-multiplicity
  - thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data
  - def-jacobi-field
  - thm-rank-nullity
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
      locator: "§§26.1–26.2, pp.191–197: invertibility of the radial Jacobi tensor before the first conjugate time"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§§2–4, pp.6–16: the matrix Jacobi equation and singularity of A exactly at conjugate times"
---

## Statement

Let $(M,g)$ be a Riemannian manifold of dimension $n\ge2$, let
$\gamma:I\to M$ be a unit-speed geodesic on an interval $I$ with nonempty
interior and $0\in I$, put $p:=\gamma(0)$, and let
$$A(t):N_0\longrightarrow N_t,\qquad A(t)w=J_w(t),$$
be the radial Jacobi tensor of [[def-radial-jacobi-tensor]], where $N_t$ is the
normal space at $\gamma(t)$ and $J_w$ is the normal Jacobi field with
$J_w(0)=0$, $D_tJ_w(0)=w$
([[thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data]]).

Define the **first conjugate instant** of $p$ along $\gamma$ to be
$$\tau:=\inf\{t\in I:t>0\text{ and }0,t\text{ are conjugate along }\gamma\},$$
with $\tau:=+\infty$ when the set is empty; here conjugate means that
$\mathcal K_\gamma(0,t)$ contains a nonzero Jacobi field
([[def-conjugate-points-along-a-geodesic-and-their-multiplicity]]). Then for
every $t\in I$ with
$$0<t<\tau,$$
the radial Jacobi tensor $A(t):N_0\to N_t$ is an isomorphism of the
$(n-1)$-dimensional normal spaces. Equivalently, in the parallel identification
$\bar A(t)=P_t^{-1}\circ A(t)\in\operatorname{End}(N_0)$ of
[[def-radial-jacobi-tensor]], the matrix $\bar A(t)$ is invertible for every
$t$ with $0<t<\tau$. No claim is made about invertibility after $\tau$.
No completeness, compactness or choice hypothesis is used.

## Facts & Assumptions

**Given:** The manifold, the unit-speed geodesic, the interval with $0\in I$, the radial Jacobi tensor $A$ of [[def-radial-jacobi-tensor]] and a time $t\in I$ with $t>0$.

[F1] For every $w\in N_0$ there is a unique Jacobi field $J_w$ along $\gamma$ on all of $I$ with $J_w(0)=0$ and $D_tJ_w(0)=w$, and $w\mapsto J_w$ is linear; moreover $J_w$ is normal and $A(t):N_0\to N_t$, $w\mapsto J_w(t)$, is a linear map of the $(n-1)$-dimensional real vector spaces $N_0$ and $N_t$ ([[def-radial-jacobi-tensor]], [[thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data]]).

[F2] For $a<b$ the space $\mathcal K_\gamma(a,b)=\{J\text{ Jacobi along }\gamma:J(a)=0,J(b)=0\}$ is a finite-dimensional real vector space; $a,b$ are conjugate exactly when $\mathcal K_\gamma(a,b)$ contains a nonzero field, and then the multiplicity is $\dim\mathcal K_\gamma(a,b)$; for nonconstant $\gamma$ this dimension is at most $n-1$ ([[def-conjugate-points-along-a-geodesic-and-their-multiplicity]]). Consequently, for $0<t<\tau$ the space $\mathcal K_\gamma(0,t)$ is $\{0\}$.

[F3] Jacobi fields obey $D_t^2J+R(J,T)T=0$ with $T=\dot\gamma$ ([[def-jacobi-field]]), and the local metric-compatibility commutator calculation in
[[def-radial-jacobi-tensor]] gives
$g(R(X,Y)Z,W)+g(Z,R(X,Y)W)=0$, without choice. In particular
$\operatorname{Rm}(J,T,T,T)=0$.

[F4] Rank-nullity for a linear map with finite-dimensional domain: the domain dimension is the sum of the rank and the nullity ([[thm-rank-nullity]]).

## Proof

1.1 The initial-derivative map and normality of twice-vanishing fields. [F1, F3, given]
By [F1] the assignment $w\mapsto J_w$ from $N_0$ to the Jacobi fields along $\gamma$ is linear, and uniqueness in [F1] makes it injective: if $J_w=0$ then $w=D_tJ_w(0)=0$. Its image is exactly the space of **normal** Jacobi fields vanishing at $0$: each $J_w$ is normal by [F1], and conversely a normal Jacobi field $J$ with $J(0)=0$ equals $J_{D_tJ(0)}$ with $D_tJ(0)\in N_0$ by normality and uniqueness. Now let $J$ be any Jacobi field with $J(0)=J(t)=0$. The function $u(s):=g(J(s),T(s))$ satisfies $$u''=g(D_s^2J,T)+2g(D_sJ,D_sT)+g(J,D_s^2T)=g(D_s^2J,T)=-\operatorname{Rm}(J,T,T,T)=0$$ by [F1] and the skewness of [F3], so $u$ is affine on the interval from $0$ to $t$; since $u(0)=u(t)=0$, the affine function $u$ vanishes identically, and therefore $$0=u'(0)=g(D_tJ(0),T(0))+g(J(0),D_tT(0))=g(D_tJ(0),T(0)).$$ Hence $D_tJ(0)\in N_0$ and $J=J_{D_tJ(0)}$: every field in $\mathcal K_\gamma(0,t)$ is a normal field vanishing at $0$, necessarily of the form $J_w$. [F1, F3, given]

2.1 The kernel of $A(t)$. [F1, F2, step 1.1]
For $w\in N_0$ we have $A(t)w=J_w(t)$ by definition, so $$w\in\ker A(t)\iff J_w(t)=0\iff J_w\in\mathcal K_\gamma(0,t).$$ By step 1.1 the map $w\mapsto J_w$ is a linear bijection from $N_0$ onto the normal Jacobi fields vanishing at $0$, and it carries $\ker A(t)$ onto exactly the elements of that space which also vanish at $t$, namely onto $\mathcal K_\gamma(0,t)$; the inverse is $J\mapsto D_tJ(0)$, which step 1.1 shows to be normal for every $J\in\mathcal K_\gamma(0,t)$. Therefore $\ker A(t)$ is linearly isomorphic to $\mathcal K_\gamma(0,t)$, so $\dim\ker A(t)=\dim\mathcal K_\gamma(0,t)$; by [F2] the latter is the multiplicity of the pair $(0,t)$ when that pair is conjugate and is $0$ when it is not. [F1, F2, step 1.1]

3.1 Before the first conjugate instant the kernel is zero. [F2, step 2.1, given]
Let $0<t<\tau$. By the definition of $\tau$ as an infimum, no pair $(0,s)$ with $0<s<\tau$ is conjugate: if some $0<s<\tau$ were conjugate, then $\tau\le s<\tau$, a contradiction. Since $t<\tau$, the pair $(0,t)$ is not conjugate, so by [F2] the space $\mathcal K_\gamma(0,t)$ is $\{0\}$; step 2.1 gives $\ker A(t)=\{0\}$, and $A(t)$ is injective. [F2, step 2.1, given]

4.1 Injectives between equidimensional spaces are isomorphisms. [F1, F4, step 3.1]
By [F1] the map $A(t):N_0\to N_t$ is linear and both spaces have dimension $n-1<\infty$. Injective means $\dim\ker A(t)=0$, so rank-nullity [F4] gives $\dim\operatorname{im}A(t)=n-1=\dim N_t$; hence $A(t)$ is surjective as well and therefore an isomorphism. In the parallel identification of [[def-radial-jacobi-tensor]] the matrix $\bar A(t)$ represents this isomorphism, so it is invertible at this $t$. The argument used only the given geodesic; no completeness, compactness or choice principle enters. [F1, F4, step 3.1] ∎
