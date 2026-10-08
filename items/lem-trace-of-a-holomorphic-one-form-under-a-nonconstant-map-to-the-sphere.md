---
id: lem-trace-of-a-holomorphic-one-form-under-a-nonconstant-map-to-the-sphere
kind: lemma
title: Trace of a holomorphic differential along a nonconstant map to the sphere
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 14
deps:
  - def-axiom-of-choice
  - def-riemann-surface-and-holomorphic-atlas
  - def-genus-and-euler-characteristic-compact-riemann-surface
  - def-line-bundle-associated-to-a-divisor
  - def-holomorphic-and-meromorphic-map-of-riemann-surfaces
  - def-riemann-sphere-holomorphic-charts
  - rem-riemann-sphere-one-point-compactification
  - thm-compact-subset-of-a-hausdorff-space-is-closed
  - thm-compact-subset-is-closed-and-bounded
  - thm-closed-subspace-of-a-compact-space-is-compact
  - thm-compactness-under-continuous-maps
  - thm-heine-borel-rn
  - cor-complex-differentiability-implies-continuity
  - def-compact-space
  - thm-proper-holomorphic-map-riemann-surfaces-has-degree
  - thm-local-normal-form-holomorphic-map-riemann-surfaces
  - def-ramification-index-and-branch-value
  - def-isolated-singularity-types
  - thm-zero-order-factorization-holomorphic-function
  - def-meromorphic-differential-on-a-riemann-surface
  - thm-identity-theorem-holomorphic-functions
  - thm-liouville-bounded-entire-function
  - thm-taylor-expansion-holomorphic-function
  - thm-riemann-roch-compact-riemann-surfaces
  - def-smooth-differential-k-form
  - prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges
  - def-smooth-singular-simplex
  - def-smooth-singular-chain-and-cochain-complexes
  - def-integral-of-a-form-over-a-smooth-singular-simplex
  - thm-path-lifting-for-covering-maps
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Karl Otto Forster, Lectures on Riemann Surfaces (GTM 81)"
      url: "http://ronan.terpereau.perso.math.cnrs.fr/Master_Class_2023_Dijon/FORSTER_Lectures%20on%20Riemann%20Surfaces.pdf"
      locator: "Ch. 2, proof of Theorem 20.7(b), printed p. 164: the trace of a holomorphic differential on P^1 extends holomorphically and vanishes."
    - title: "Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)"
      url: "https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf"
      locator: "Ch. 15, proof in one direction of Abel's theorem, printed p. 129: the trace differential on P^1 is holomorphic and zero; the local root-of-unity cancellation is also described."
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

The conclusion and its main proof are choice-free. Full AC is used only in the
supplementary Riemann–Roch check at step 4.1, which confirms the same
$\Omega(\widehat{\mathbb C})=0$ consequence
([[def-axiom-of-choice]]). Let $X$ be a compact connected Riemann surface and
let $F:X\to\widehat{\mathbb C}$ be a nonconstant holomorphic map. It is proper,
so it has a positive degree $n=\deg F$, and its finite branch-value set is
denoted by $R$ ([[def-riemann-surface-and-holomorphic-atlas]],
[[def-holomorphic-and-meromorphic-map-of-riemann-surfaces]],
[[rem-riemann-sphere-one-point-compactification]],
[[thm-proper-holomorphic-map-riemann-surfaces-has-degree]]).

For every holomorphic differential $\omega$ on $X$, the following hold.

1. **Trace differential.** On a disk $V\subseteq\widehat{\mathbb C}\setminus R$
   that is evenly covered by inverse branches
   $\varphi_1,\ldots,\varphi_n:V\to X$, define
   $$F_*\omega\big|_V:=\sum_{j=1}^n\varphi_j^*\omega.$$
   These local holomorphic differentials agree on overlaps and extend uniquely
   to a holomorphic differential on all of $\widehat{\mathbb C}$.
2. **Vanishing.** The extended differential is zero.
3. **Transfer-chain integral.** Let $\gamma$ be a finite smooth singular
   $1$-chain in $\widehat{\mathbb C}\setminus R$. For each smooth path simplex
   $\sigma$ in it and each point $x$ over its initial endpoint, lift $\sigma$
   through the covering $F:X\setminus F^{-1}(R)\to\widehat{\mathbb C}\setminus R$
   starting at $x$. The sum of these $n$ lifted simplices, extended linearly,
   is the **transfer chain** $\operatorname{Tr}_F(\gamma)$. Then
   $$\int_{\operatorname{Tr}_F(\gamma)}\omega=\int_\gamma F_*\omega=0.$$
   The sum counts lifted paths with multiplicity; it does not assert that the
   inverse image of a closed curve is a disjoint union of embedded circles.
4. **Boundary and principal divisor.** If $\gamma$ is a smooth path simplex
   from a regular value $b$ to a regular value $a$, then
   $$\partial\operatorname{Tr}_F(\gamma)=F^*(a)-F^*(b)=\operatorname{div}(m_{a,b}\circ F).$$
   Here $F^*(c):=\sum_{F(x)=c}e_x(F)[x]$. For $g=m_{a,b}\circ F$,
   $\operatorname{div}(g)$ is the finite formal sum of its local zero orders and
   negative pole orders: in a coordinate $z$ at $x$, $g=z^r u$ with
   $u(0)\ne0$ contributes $r[x]$; the support is finite because it lies in the
   two finite fibres over $a$ and $b$
   ([[def-isolated-singularity-types]],
   [[thm-zero-order-factorization-holomorphic-function]]).
   For distinct $a,b$, take
   $$m_{a,b}(z)=\begin{cases}(z-a)/(z-b),&a,b\in\mathbb C,\\ 1/(z-b),&a=\infty,\ b\in\mathbb C,\\ z-a,&a\in\mathbb C,\ b=\infty;\end{cases}$$
   and set $m_{a,a}=1$. Thus the divisor claim also applies when either
   endpoint is $\infty$. Integrals of complex forms are taken componentwise.

## Facts & Assumptions

**Given:** A compact connected Riemann surface $X$, a nonconstant holomorphic
map $F:X\to\widehat{\mathbb C}$, a holomorphic differential $\omega$ on $X$,
and the objects in the statement.

[F1] A holomorphic map is continuous; a compact subset of a Hausdorff space is
closed; a closed subset of a compact space is compact; and the continuous image
of a compact space is compact
([[def-holomorphic-and-meromorphic-map-of-riemann-surfaces]],
[[thm-compact-subset-of-a-hausdorff-space-is-closed]],
[[thm-closed-subspace-of-a-compact-space-is-compact]],
[[thm-compactness-under-continuous-maps]],
[[def-compact-space]]).

[F2] A proper nonconstant holomorphic map between connected Riemann surfaces is
onto with finite fibres, has constant positive degree given by the weighted
fibre count, has finitely many branch values when the target is compact, and
is a degree-$n$ covering off those values
([[thm-proper-holomorphic-map-riemann-surfaces-has-degree]],
[[def-ramification-index-and-branch-value]]).

[F3] Near each $x\in X$, in centred holomorphic coordinates, $F$ has the form
$t=z^{e_x(F)}$; its inverse branches over $t\ne0$ are
$z=\zeta^k t^{1/e_x(F)}$ for the $e_x(F)$ roots of unity $\zeta^k$
([[thm-local-normal-form-holomorphic-map-riemann-surfaces]],
[[def-ramification-index-and-branch-value]]).

[F4] A meromorphic differential has a local expression $h(z)\,dz$, and it is
holomorphic exactly when each coefficient $h$ is holomorphic; its transition
law is the differential pullback law
([[def-meromorphic-differential-on-a-riemann-surface]]).

[F5] The Riemann sphere is compact Hausdorff, and its chart at infinity is
$w=1/z$ ([[rem-riemann-sphere-one-point-compactification]],
[[def-riemann-sphere-holomorphic-charts]]).

[F6] Every bounded entire function on $\mathbb C$ is constant
([[thm-liouville-bounded-entire-function]]).

[F7] Smooth singular $1$-chains are finite linear combinations of smooth
singular $1$-simplices, their boundary is the terminal point minus the initial
point, and the integral over a chain is the corresponding finite linear sum
([[def-smooth-singular-simplex]],
[[def-smooth-singular-chain-and-cochain-complexes]],
[[def-integral-of-a-form-over-a-smooth-singular-simplex]]).

[F8] A path in the base of a covering has a unique lift from each prescribed
starting point ([[thm-path-lifting-for-covering-maps]]).

[F9] Pullback of smooth forms is smooth and functorial; in local coordinates
the integral of a pulled-back form along a lifted simplex is the integral of
the original form along the base simplex after pullback
([[prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges]],
[[def-integral-of-a-form-over-a-smooth-singular-simplex]],
[[def-smooth-differential-k-form]]).

[F10] If two holomorphic functions on a connected plane domain agree on a set
with an accumulation point in the domain, they agree identically
([[thm-identity-theorem-holomorphic-functions]]).

[F11] A pole of order $r$ has local form $z^{-r}u(z)$ with $u(0)\ne0$; a zero
of order $r$ has local form $z^ru(z)$ with $u(0)\ne0$
([[def-isolated-singularity-types]],
[[thm-zero-order-factorization-holomorphic-function]]).

[F12] Under full AC, the Riemann–Roch theorem identifies
$i(0)=h^0(X,K_X\otimes\mathcal O_X(0)^*)$ and gives $i(0)=g$
([[thm-riemann-roch-compact-riemann-surfaces]],
[[def-axiom-of-choice]]).

[F13] The zero-divisor bundle $\mathcal O_X(0)$ is trivial, and the holomorphic
sections of the canonical bundle are exactly the holomorphic differentials
([[def-line-bundle-associated-to-a-divisor]]).

[F14] The Riemann sphere has topological genus $0$
([[def-genus-and-euler-characteristic-compact-riemann-surface]]).

[F15] A holomorphic function on a plane domain is continuous
([[cor-complex-differentiability-implies-continuity]]).

[F16] A closed disk in $\mathbb C$ is compact, continuous images of compact
spaces are compact, and compact subsets of metric spaces are bounded
([[thm-heine-borel-rn]],
[[thm-compactness-under-continuous-maps]],
[[thm-compact-subset-is-closed-and-bounded]]).

[F17] A holomorphic coefficient on a disk equals its convergent Taylor series
there ([[thm-taylor-expansion-holomorphic-function]]).

## Proof

**Proof technique:** direct local construction, followed by the identity theorem.

1.1 For every compact $K\subseteq\widehat{\mathbb C}$, [F5] makes $K$ closed; continuity of $F$ from [F1] makes $F^{-1}(K)$ closed in compact $X$, hence compact by [F1]. Thus $F$ is proper in the stated sense, so [F2] supplies its degree $n\ge1$, its finite branch-value set $R$, and its finite-sheeted covering away from $R$. [F1, F2, F5, given]

1.2 On a disk $V$ evenly covered off $R$, each inverse branch $\varphi_j$ is holomorphic, so [F4] gives a holomorphic pullback $\varphi_j^*\omega$ and their finite sum is holomorphic. At a point $y\in V\cap V'$, both sheet lists contain each point of $F^{-1}(y)$ exactly once. Match the branches whose values at $y$ coincide; local uniqueness of an inverse to a biholomorphism makes each matched pair equal on a neighbourhood of $y$, and finitely many branches let us shrink to one common neighbourhood. Thus the lists differ there only by a permutation, so their sums agree. Hence the local definitions give a well-defined holomorphic differential on $\widehat{\mathbb C}\setminus R$. [F2, F3, F4, given]

1.3 Fix $y_0\in R$. Its fibre is finite by [F2], say $F^{-1}(y_0)=\{x_1,\ldots,x_s\}$. Fix one target chart $t$ centred at $y_0$; applying the local normal form to each chart expression in this same target chart gives pairwise disjoint source coordinate neighbourhoods $U_i$ with $t\circ F=z_i^{e_i}$ and $e_i=e_{x_i}(F)$. The degree formula gives $\sum_i e_i=n$. The complement $X\setminus\bigcup_iU_i$ is compact; its image is compact by continuity and therefore closed in the Hausdorff sphere, and it omits $y_0$. Shrink the target disk $V$ about $y_0$ to miss that image and so that each local power model is defined over $V$. Then every point over $V$ lies in one of the $U_i$, so the local computations below account for every inverse branch over $V\setminus\{y_0\}$. [F1, F2, F3, F5, given]

1.4 Let $\sigma$ be a smooth singular path simplex in the complement of $R$. By [F2] that complement is covered by degree-$n$ local biholomorphic sheets; for each of the $n$ points over its initial endpoint, [F8] gives one lift. On each subinterval lying in an evenly covered neighbourhood, the lift is the holomorphic inverse branch composed with $\sigma$, hence is smooth; a finite subdivision as in the path-lifting construction makes each lift a smooth singular path chain. Summing the $n$ lifts defines $\operatorname{Tr}_F(\sigma)$. Linearity defines it on finite chains. [F2, F7, F8, given]

1.5 Suppose $\gamma$ runs from regular $b$ to regular $a$. Each lift contributes its terminal point minus its initial point to the boundary by [F7]. Lifting the reverse path gives the inverse endpoint correspondence, so the terminal points are exactly the fibre over $a$, once each, and the initial points are exactly the fibre over $b$, once each. Thus $\partial\operatorname{Tr}_F(\gamma)=F^*(a)-F^*(b)$; regularity makes every ramification weight in these two fibres equal to $1$. [F2, F3, F7, F8, algebra]

2.1 In $U_i$, write $\omega=h_i(z_i)\,dz_i$ with $h_i(z_i)=\sum_{m\ge0}c_{i,m}z_i^m$ by [F17]. On any simply connected sector of the punctured target disk, choose a branch of $t^{1/e_i}$; the $e_i$ inverse branches are $z_i=\zeta^k t^{1/e_i}$, where $\zeta$ is a primitive $e_i$-th root of unity, and changing the root branch only permutes them. Their contribution to the coefficient of $dt$ in the trace is $$\sum_{k=0}^{e_i-1}h_i(\zeta^k t^{1/e_i})\frac{\zeta^k}{e_i}t^{1/e_i-1}=\sum_{q\ge1}c_{i,qe_i-1}t^{q-1},$$ because $\sum_{k=0}^{e_i-1}\zeta^{k(m+1)}$ is zero unless $e_i\mid(m+1)$, when it equals $e_i$. Termwise summation is valid inside the convergent Taylor radius, so this branch-independent power series is holomorphic at $t=0$. Summing over the finitely many $i$ extends the trace holomorphically over $y_0$; repeating at each point of finite $R$ proves the extension claim. [F3, F4, F17, step 1.3, algebra]

3.1 If two holomorphic differentials extend the trace, their difference is zero on the complement of finite $R$, which accumulates at every point of $R$. The identity theorem [F10] applied to local coefficient functions makes the difference zero near every point of $R$ as well, so the extension is unique. [F10, step 2.1]

3.2 To show that every holomorphic differential $\eta$ on the sphere is zero, write $\eta=g(z)\,dz$ on $\mathbb C$. In the infinity coordinate $w=1/z$, its coefficient is $-g(1/w)w^{-2}$ and is holomorphic at $w=0$ by [F4, F5]. Thus $g(z)=O(|z|^{-2})$ as $|z|\to\infty$; it is bounded outside a disk. By [F15] it is continuous, and [F16] makes its image of a closed disk bounded, so $g$ is bounded on all of $\mathbb C$. Liouville's theorem [F6] makes $g$ constant; its limit at infinity is zero, so $g=0$. Applied to the extension from step 2.1, this proves clause 2. [F4, F5, F6, F15, F16, step 2.1]

4.1 As an independent AC-dependent check, [F14] gives genus $g=0$ for the sphere. Under the full AC hypothesis of [F12], Riemann–Roch at $D=0$ gives $h^0(K_{\widehat{\mathbb C}})=i(0)=g$ after [F13] trivializes $\mathcal O_X(0)$ and identifies holomorphic sections of $K$ with holomorphic differentials. Hence it also gives $\Omega(\widehat{\mathbb C})=0$, agreeing with the direct choice-free proof in step 3.2. [F12, F13, F14, step 3.2, given]

4.2 On each evenly covered subinterval, [F9] identifies the integral of $\omega$ over each lifted segment with the integral of the corresponding inverse-branch pullback along the base segment. Summing over the $n$ starting points gives the integral of $\sum_j\varphi_j^*\omega=F_*\omega$ there; adding the finitely many subintervals and simplices yields $\int_{\operatorname{Tr}_F(\gamma)}\omega=\int_\gamma F_*\omega$. Step 3.2 makes the right side zero, proving clause 3 with multiplicities retained even when lifts trace the same geometric subset. [F7, F9, step 1.2, step 3.2, algebra]

5.1 If $a\ne b$, the stated rational function $m_{a,b}$ has one simple zero at $a$, one simple pole at $b$, and no other zero or pole, including at $\infty$ by [F5]. In a local coordinate at $x$, [F3] writes $F$ as a power $z^{e_x(F)}$; composing with a simple zero or pole therefore gives order $e_x(F)$ or $-e_x(F)$ by [F11], respectively, and order zero elsewhere. Consequently $\operatorname{div}(m_{a,b}\circ F)=F^*(a)-F^*(b)$ under the definitions in the statement. If $a=b$, both sides are zero because $m_{a,a}=1$. Combining this with step 1.5 proves clause 4. [F3, F5, F11, step 1.5, algebra] ∎

## Remarks

For a closed path, monodromy can permute the sheets, so its inverse image as a
subset need not be a union of closed curves. The transfer chain records all
path lifts with their multiplicities; this is the object for which the trace
integral identity and endpoint boundary formula hold.
