---
id: prop-conjugate-instants-are-isolated-unless-the-geodesic-is-constant
kind: proposition
title: "Conjugate instants are isolated unless the geodesic is constant"
status: draft
origin: pipeline
deps:
  - cor-double-orthogonal-complement-and-dimension
  - cor-the-tangent-space-of-an-n-manifold-has-dimension-n
  - def-conjugate-points-along-a-geodesic-and-their-multiplicity
  - def-compact-space
  - def-countable-choice
  - def-jacobi-field
  - def-linear-map
  - def-orthogonality-and-orthogonal-complement
  - def-riemannian-metric-and-riemannian-manifold
  - def-vector-field-and-section-along-a-smooth-curve
  - lem-curvature-is-c-infinity-linear-in-all-three-vector-fields
  - lem-wronskian-of-two-jacobi-fields-is-constant
  - prop-local-frame-formula-for-covariant-differentiation-along-a-curve
  - thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data
  - thm-closed-subspace-of-a-compact-space-is-compact
  - thm-finite-dimensional-orthogonal-decomposition
  - thm-rank-nullity
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "Danny Calegari, Notes on Riemannian Geometry (2015), §5.8, Lemma 5.22"
      url: https://math.uchicago.edu/~dannyc/courses/riem_geo_2013/riem_geo_notes.pdf
      locator: "PDF labels P27-P28, lines 1728-1781. The full passage gives the conserved Jacobi-field pairing and states isolation. Its proof sketches, without establishing, a smoothly parameterized family of endpoint-vanishing Jacobi fields; the local proof below supplies the missing perturbation argument."
---

## Statement

Assume exactly the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$,
used through [[lem-wronskian-of-two-jacobi-fields-is-constant]]. Let $(M,g)$ be
a finite-dimensional Riemannian manifold, let $I\subseteq\mathbb R$ be an
interval with nonempty interior, let $\gamma:I\to M$ be an affinely
parametrized geodesic, and fix $a\in I$. Define
$$C_a(\gamma):=\{t\in I:t>a\text{ and }\gamma(a),\gamma(t)\text{ are conjugate along }\gamma|_{[a,t]}\}.$$
If $\gamma$ is nonconstant, then $C_a(\gamma)$ is discrete in
$I\cap(a,\infty)$, and every compact subinterval of $I\cap(a,\infty)$ meets
$C_a(\gamma)$ in finitely many points. If $\gamma$ is constant, then
$C_a(\gamma)=\varnothing$. No completeness or full Axiom of Choice is assumed.
At included endpoints, discreteness is relative to the parameter interval and
derivatives are one-sided.

## Facts & Assumptions

**Given:** The inherited assumption is exactly $\mathrm{AC}_\omega$; the
finite-dimensional Riemannian manifold, nondegenerate interval, affine
geodesic, and initial time $a$ are fixed.

[A1] The Axiom of Countable Choice $\mathrm{AC}_\omega$ is the principle that
every countable family of nonempty sets has a choice function
([[def-countable-choice]]).

[F1] A smooth field $J$ along $\gamma$ is Jacobi exactly when
$$D_t^2J+R(J,\dot\gamma)\dot\gamma=0,$$
with the fixed curvature convention and one-sided derivatives at included
endpoints ([[def-jacobi-field]]).

[F2] The endpoints $\gamma(a),\gamma(t)$ are conjugate along the restricted
segment exactly when there is a nonzero Jacobi field vanishing at both
endpoints; a constant segment has no conjugate endpoints
([[def-conjugate-points-along-a-geodesic-and-their-multiplicity]]).

[F3] At any time in the interval, each pair of initial value and covariant
derivative determines exactly one Jacobi field on all of $I$
([[thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data]]).

[F4] Assuming the inherited $\mathrm{AC}_\omega$, for any two Jacobi fields
along an affine geodesic the Wronskian
$$g(D_tJ,K)-g(J,D_tK)$$
is constant ([[lem-wronskian-of-two-jacobi-fields-is-constant]]).

[F5] In a pulled-back local frame, a smooth vector field along a curve has
arbitrary smooth coefficient functions ([[def-vector-field-and-section-along-a-smooth-curve]]).

[F6] If $V(t)=e(\gamma(t))v(t)$ in a local frame, then
$$D_tV=e(\gamma(t))(v'(t)+B(t)v(t))$$
for the frame connection matrix $B(t)$ ([[prop-local-frame-formula-for-covariant-differentiation-along-a-curve]]).

[F7] Each tangent fiber has a positive-definite inner product $g_p$
([[def-riemannian-metric-and-riemannian-manifold]]).

[F8] If $M$ has dimension $n$, every tangent fiber is an $n$-dimensional real
vector space ([[cor-the-tangent-space-of-an-n-manifold-has-dimension-n]]).

[F9] A map is linear when it preserves every linear combination
([[def-linear-map]]).

[F10] For a linear map with finite-dimensional domain,
$$\dim V=\dim\ker T+\dim\operatorname{im}T$$
([[thm-rank-nullity]]).

[F11] In a finite-dimensional inner-product space, every subspace $Y$ has the
orthogonal direct-sum decomposition $V=Y\oplus Y^\perp$
([[thm-finite-dimensional-orthogonal-decomposition]]).

[F12] In the same setting,
$$\dim Y+\dim Y^\perp=\dim V$$
([[cor-double-orthogonal-complement-and-dimension]]).

[F13] The orthogonal complement is
$$Y^\perp=\{z:g(z,y)=0\text{ for every }y\in Y\}$$
([[def-orthogonality-and-orthogonal-complement]]).

[F14] A closed subset of a compact space is compact with its subspace topology
([[thm-closed-subspace-of-a-compact-space-is-compact]]).

[F15] A space is compact when every open cover has a finite subcover
([[def-compact-space]]).

[F16] Curvature is $C^\infty$-linear in each vector-field slot, so the
Jacobi operator is linear in its field argument
([[lem-curvature-is-c-infinity-linear-in-all-three-vector-fields]]).

## Proof

**Proof technique:** Represent the endpoint map for Jacobi fields by a smooth
square matrix. At a singular time, the Wronskian makes its derivative an
isomorphism from the kernel to the orthogonal cokernel; a finite-dimensional
block estimate then isolates that singular time.

1.1 If $n=0$, every tangent fiber is zero by [F8], so [F2] gives $C_a(\gamma)=\varnothing$. Assume $n>0$ and choose a basis $e_1,\ldots,e_n$ of $T_{\gamma(a)}M$. For each $v$ in this fiber, let $J_v$ be the unique Jacobi field with $J_v(a)=0$ and $D_tJ_v(a)=v$, supplied by [F3]. The local frame formula [F6] and curvature-slot linearity [F16] show that the Jacobi equation [F1] is linear in the field; therefore linear combinations of these fields have the corresponding linear-combination initial data. Uniqueness in [F3] makes $v\mapsto J_v$ linear by [F9]. For $t>a$, define the endpoint map $E_t(v)=J_v(t)$. By [F2], $t\in C_a(\gamma)$ exactly when $\ker E_t\ne\{0\}$: a nonzero endpoint-vanishing Jacobi field has nonzero initial derivative by [F3], and conversely a nonzero $v\in\ker E_t$ gives such a field. In the fixed basis at $a$ and any local frame at $\gamma(t)$, $E_t$ is an $n\times n$ matrix $A(t)$. Its columns are smooth by [F3] and [F5], so $A$ is smooth locally and conjugate instants are exactly its singular times. [F1, F2, F3, F5, F6, F8, F9, F16]

1.2 Near the initial time $a$, use a local frame along $\gamma$ whose value at $a$ is the chosen basis. The endpoint matrix satisfies $A(a)=0$. By [F6], the derivative of the coefficient column of $J_v$ at $a$ equals the coefficients of $D_tJ_v(a)$ because the connection-matrix term is multiplied by $J_v(a)=0$. Thus $A'(a)=I_n$ and $A(t)/(t-a)\to I_n$ as $t\downarrow a$. Since the determinant is a polynomial in the matrix entries and $\det I_n=1$, $A(t)$ is invertible for all sufficiently close $t>a$ in $I$. This also rules out accumulation at $a$ when $a$ is an included endpoint. [F3, F5, F6, F8, algebra]

2.1 Fix $t_0\in C_a(\gamma)$ and use one local frame near $\gamma(t_0)$ to write $A_0=A(t_0)$. Put $K=\ker A_0$, $Y=\operatorname{im}A_0$, and $C=Y^\perp$ in the target fiber at $t_0$. The inner product and orthogonal decomposition [F7, F11, F13] give the projections $P_Y,P_C$; [F10] and [F12] give $\dim K=\dim C$. For $u\in K$ and any $v\in T_{\gamma(a)}M$, both $J_u(a)$ and $J_v(a)$ vanish, so their Wronskian is zero at $a$ and hence at $t_0$ by [F4]. Since $J_u(t_0)=0$, this says $g(D_tJ_u(t_0),J_v(t_0))=0$. As $J_v(t_0)$ ranges over $Y$, $D_tJ_u(t_0)\in C$. Define $B:K\to C$ by $B(u)=D_tJ_u(t_0)$. The map is linear by step 1.1, the real-linearity of $D_t$ in [F6], and [F9]. If $B(u)=0$, then $J_u(t_0)=0$ and $D_tJ_u(t_0)=0$, so uniqueness [F3], applied with initial time $t_0$, gives $J_u=0$ and then $u=D_tJ_u(a)=0$. Thus $B$ is injective; the equal finite dimensions make it an isomorphism. [A1, F3, F4, F6, F7, F8, F9, F10, F11, F12, F13, step 1.1]

3.1 Split the domain as $K\oplus K^\perp$ and the target as $Y\oplus C$. The map $B_0=P_YA_0|_{K^\perp}:K^\perp\to Y$ is an isomorphism: its kernel is zero, and every element of $Y$ is $A_0(u+v)=A_0v$ for the decomposition $u+v\in K\oplus K^\perp$. By continuity, for all sufficiently small $h$, $B_h=P_YA(t_0+h)|_{K^\perp}$ is still invertible with uniformly bounded inverse; this follows in bases from continuity of its nonzero determinant and the adjugate formula. For $u\in K$, the derivative $A'(t_0)u$ is the coordinate vector of $D_tJ_u(t_0)$, since $J_u(t_0)=0$ and [F6]; step 2.1 puts this vector in $C$. Hence, in operator norm, $P_YA(t_0+h)|_K=o(|h|)$, $P_CA(t_0+h)|_K=hB+o(|h|)$, and $P_CA(t_0+h)|_{K^\perp}=O(|h|)$. If $A(t_0+h)(u+v)=0$ with $u\in K$ and $v\in K^\perp$, the $Y$-component and the bounded inverse of $B_h$ give $\|v\|=o(|h|)\|u\|$. The $C$-component then gives $0=hB(u)+o(|h|)\|u\|+O(|h|)\|v\|=hB(u)+o(|h|)\|u\|$. Because $B$ is an isomorphism, this forces $u=0$ for all sufficiently small nonzero $h$, and then the $Y$-component forces $v=0$. Thus $A(t_0+h)$ is injective and hence invertible. Restricting to $h$ with $t_0+h\in I$ proves that $t_0$ is isolated, including at a one-sided endpoint. The argument uses only finite-dimensional matrix estimates, not a selected sequence of kernel vectors. [F3, F6, F7, F8, F10, F11, F12, F13, step 2.1, algebra]

4.1 On a neighborhood of any time in $I\cap(a,\infty)$, the endpoint matrix has continuous entries by step 1.1. Its singular set is the zero set of the continuous determinant, so $C_a(\gamma)$ is closed relative to $I\cap(a,\infty)$. Step 3.1 shows this closed set is discrete. If $K_0$ is a compact subinterval of $I\cap(a,\infty)$, then $C_a(\gamma)\cap K_0$ is closed in $K_0$ and hence compact by [F14]. Its cover by its open singletons has a finite subcover by [F15], so it is finite. If the intersection is empty the conclusion is immediate. [F14, F15, step 1.1, step 3.1]

5.1 If $\gamma$ is constant, [F2] gives no conjugate times, so the set is empty. The nondegenerate interval and one-sided endpoint conventions are those in [F1] and [F3]; the initial time itself is excluded by $t>a$, and the zero Jacobi field does not witness conjugacy by [F2]. The local matrix and compact-cover arguments after the Wronskian invocation make no selection. Exactly $\mathrm{AC}_\omega$ is inherited and spent to use [F4], through its stated curvature-symmetry dependency; no full Axiom of Choice or further choice principle is used. The proposition is not an iff claim. [A1, F1, F2, F3, F4, step 1.1, step 2.1, step 3.1, step 4.1] ∎

## Source locator

Calegari, *Notes on Riemannian Geometry* (2015), §5.8, Lemma 5.22, PDF labels
P27–P28, lines 1728–1781. The full passage first proves that the Jacobi-field
Wronskian pairing is constant and then states that conjugate points are
isolated. Its proof sketch assumes a smoothly parameterized family of
endpoint-vanishing Jacobi fields with a first-order expansion, but does not
establish that family or its parameter dependence. The matrix kernel/cokernel
argument above supplies that missing step. The local use of the conserved
Wronskian is also independently supplied by
[[lem-wronskian-of-two-jacobi-fields-is-constant]].
