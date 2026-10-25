---
id: cor-the-space-of-jacobi-fields-along-a-geodesic-has-dimension-two-n
kind: corollary
title: The space of Jacobi fields along a geodesic has dimension two n
status: published
origin: pipeline
deps:
  - cor-the-tangent-space-of-an-n-manifold-has-dimension-n
  - def-covariant-derivative-along-a-curve
  - def-dimension
  - def-jacobi-field
  - def-linear-basis
  - def-linear-map
  - def-vector-field-and-section-along-a-smooth-curve
  - def-vector-space
  - lem-curvature-is-c-infinity-linear-in-all-three-vector-fields
  - thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997), Chapter 10"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: "Corollary 10.5 and proof following Proposition 10.4, printed p.176 / PDF label P192, lines 6905–6908; Proposition 10.4 proof, lines 6892–6904."
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "Proposition 21.2.4, printed p.157 / PDF label P164, gives compact-segment initial-data existence and uniqueness only; the dimension claim is Lee Corollary 10.5 and is proved locally here."
---

## Statement

For every finite $n\ge0$, every $n$-dimensional Riemannian manifold $(M,g)$,
every nondegenerate interval $I$, and every affinely parametrized geodesic
$\gamma:I\to M$, the set $\mathcal J(\gamma)$ of smooth Jacobi fields along
$\gamma$ is a real vector space of dimension $2n$. Constant geodesics and
$n=0$ are included. If a derivative is evaluated at an included endpoint of
$I$, it is interpreted one-sided. No completeness or choice axiom is required.

## Facts & Assumptions

**Given:** A finite-dimensional Riemannian manifold of dimension $n\ge0$, a nondegenerate interval $I$, a specified affinely parametrized geodesic $\gamma:I\to M$, and a parameter $a\in I$.

[F1] A smooth vector field along $\gamma$ is a smooth section of the pulled-back tangent bundle; in any pulled-back frame its coefficient functions are smooth ([[def-vector-field-and-section-along-a-smooth-curve]]).

[F2] A smooth field $J$ is Jacobi exactly when $$D_t^2J+R(J,\dot\gamma)\dot\gamma=0$$ on $I$; constant geodesics and one-sided endpoint derivatives are included ([[def-jacobi-field]]).

[F3] Covariant differentiation along a curve is real-linear on sections, so $D_t^2$ is real-linear as well; included endpoints use one-sided derivatives ([[def-covariant-derivative-along-a-curve]]).

[F4] Curvature is $C^\infty$-linear in each vector-field slot. In a local frame this gives pointwise linearity of $J\mapsto R(J,\dot\gamma)\dot\gamma$ for fields along $\gamma$ ([[lem-curvature-is-c-infinity-linear-in-all-three-vector-fields]]).

[F5] A real vector space has pointwise addition, a zero vector, and scalar multiplication satisfying the vector-space axioms ([[def-vector-space]]).

[F6] For $p\in M$, the tangent space $T_pM$ is an $n$-dimensional real vector space ([[cor-the-tangent-space-of-an-n-manifold-has-dimension-n]]).

[F7] An $n$-dimensional vector space has a basis with $n$ elements; a basis is linearly independent and spanning ([[def-dimension]], [[def-linear-basis]]).

[F8] A map of real vector spaces is linear when it preserves every linear combination of two vectors ([[def-linear-map]]).

[F9] For every $a\in I$ and every pair $v,w\in T_{\gamma(a)}M$, exactly one Jacobi field on all of $I$ has $J(a)=v$ and $D_tJ(a)=w$; included endpoints use one-sided derivatives, and the result includes constant geodesics and $n=0$ ([[thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data]]).

## Proof

**Proof technique:** Transfer a basis of the initial-data space through the linear initial-value map.

1.1 The smooth fields along $\gamma$ are closed under pointwise addition and real scalar multiplication: in a pulled-back frame these operations add and scale smooth coefficient functions by [F1]. The zero section and pointwise additive inverses are smooth too. The vector-space axioms hold in each tangent fiber by [F5] and [F6], hence hold pointwise for the space of smooth fields. [F1, F5, F6]

1.2 Write $V=T_{\gamma(a)}M$. By [F6] and [F7], choose a basis $e_1,\ldots,e_n$ of $V$, with the empty basis when $n=0$. Equip $V\times V$ with componentwise operations; every vector-space axiom follows in each component from [F5] and [F6]. Put $q_i=(e_i,0)$ and $r_i=(0,e_i)$ for $1\le i\le n$. These vectors span $V\times V$: expand each component in the basis of $V$. They are linearly independent because a vanishing linear combination has first and second components $\sum_i a_i e_i=0$ and $\sum_i b_i e_i=0$, forcing all $a_i,b_i$ to vanish by basis independence. Thus these $2n$ vectors form a basis of $V\times V$, also when $n=0$. [F5, F6, F7]

2.1 Put $T=\dot\gamma$ and define $L(J)=D_t^2J+R(J,T)T$. By [F3], its first term is real-linear in $J$; by [F4], its second term is pointwise real-linear in $J$. Thus $L(\lambda J+\mu K)=\lambda L(J)+\mu L(K)$ for smooth fields $J,K$ and real scalars $\lambda,\mu$. By [F2], $\mathcal J(\gamma)=\{J:L(J)=0\}$; it contains zero and is closed under addition and scalar multiplication. The inherited vector-space axioms from step 1.1 therefore make $\mathcal J(\gamma)$ a real vector space. [F2, F3, F4, step 1.1]

3.1 Define the initial-data map $E:\mathcal J(\gamma)\to T_{\gamma(a)}M\times T_{\gamma(a)}M$ by $E(J)=(J(a),D_tJ(a))$. The target has the componentwise vector-space operations established in step 1.2. Endpoint evaluation and covariant differentiation make $E$ preserve every linear combination by [F3], so it is linear by [F8]. Fact [F9] says exactly that every pair in its target is attained by one Jacobi field, and that no two Jacobi fields have the same image. Hence $E$ is bijective. [F3, F8, F9, step 1.2, step 2.1]

4.1 By [F9], let $J_i$ and $K_i$ be the unique Jacobi fields with initial data $(e_i,0)$ and $(0,e_i)$, respectively. Their images under $E$ are $q_i$ and $r_i$. Since $E$ is a linear bijection by step 3.1, the fields $J_1,\ldots,J_n,K_1,\ldots,K_n$ are linearly independent and span $\mathcal J(\gamma)$: apply $E$ to a relation or to the difference between a field and the corresponding linear combination, then use that the $q_i,r_i$ are a basis. Therefore $\mathcal J(\gamma)$ has dimension $2n$. If $n=0$, [F9] gives the unique zero field and this basis is empty. [F8, F9, step 3.1, step 1.2]

5.1 The proof applies to $n=1$ with its two-element product basis, and to constant $\gamma$ because [F2] and [F9] include that case; the zero field and zero initial data are included. The hypothesis that $I$ is nondegenerate is needed for $D_t$; if $a$ is an included endpoint, [F3] and [F9] use the stated one-sided derivatives. A supplied geodesic rules out the empty-manifold case. The construction uses one finite basis of a single tangent space and the uniquely determined fields from [F9], so it uses no choice axiom. The statement is a dimension assertion, not an iff claim. [F2, F3, F6, F7, F9, step 3.1, step 1.2, step 4.1] ∎

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 10, Proposition 10.4 and Corollary 10.5, printed p.176 / PDF label P192, especially lines 6892–6908. Corollary 10.5 states that the Jacobi-field space has dimension $2n$ and identifies $J\mapsto(J(a),D_tJ(a))$ as a bijection. The local proof above supplies the vector-space structure and constructs the dimension from a basis of $T_{\gamma(a)}M\times T_{\gamma(a)}M$, including $n=0$ and endpoint conventions. Datar, *Lectures on Riemannian Geometry*, Proposition 21.2.4, printed p.157 / PDF label P164, states compact-segment initial-data existence and uniqueness only; the broader in-run prerequisite [[thm-existence-and-uniqueness-of-jacobi-fields-from-initial-data]] proves the interval scope used here.
