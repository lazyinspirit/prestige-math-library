---
title: Principal divisors are endpoint boundaries
status: published
research_item: lem-author-1437578267d2-graph-boundary
dependency_level: 10
---

PDF p. 13: Divisor presentation for supported degree six

## Prerequisites

- [lem-author-1437578267d2-supported-degrees](item-lem-author-1437578267d2-supported-degrees)
- [lem-author-1437578267d2-length-orders](item-lem-author-1437578267d2-length-orders)
- [lem-author-1437578267d2-boundary-norm](item-lem-author-1437578267d2-boundary-norm)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume AC. Let $T$ be any integral finite-type curve over an algebraically closed field. Put $Z_0(T)=\bigoplus_{x\in T\text{ closed}}\mathbb Z[x]$, and let $B_1(T)$ be the free abelian group on integral one-dimensional closed subschemes $W\subset T\times\mathbb A^1_s$ contained in neither endpoint $s=0,1$. Such a $W$ is called admissible. Define $b[W]=[W_1]-[W_0]$, extended linearly, with
$$[W_\epsilon]=\sum_{w\in W\cap\{s=\epsilon\}}\ell_{\mathcal O_{W,w}}(\mathcal O_{W,w}/(s-\epsilon))[p(w)],\qquad \epsilon=0,1,$$
where $p:T\times\mathbb A^1\to T$ is projection. The endpoint intersections are finite and have the indicated finite lengths; projection on each endpoint identifies its residue field with that of the corresponding point of $T$. These definitions require no embedding of $T$; they agree with the supported-cycle definitions whenever such an embedding is supplied. For these groups and this boundary,
$$bB_1(T)=\operatorname{im}(\operatorname{div}_T:k(T)^\times\to Z_0(T)).$$
For $f\ne1$ in $k(T)^\times$, the closure in $T\times\mathbb A^1_s$ of the rational graph $s=1/(1-f)$ is an admissible generator whose boundary is $\operatorname{div}_T(f)$; for $f=1$ the zero chain suffices.

## Statement references

[lem-author-1437578267d2-supported-degrees](item-lem-author-1437578267d2-supported-degrees)

## Facts & Assumptions
**Given:** AC, $T$ and $f\in k(T)^\times$ as stated.

**Goal:** Realize each principal divisor by an endpoint boundary and prove equality of subgroups.

[F1] The length divisor map is a homomorphism, and a quotient by a nonzero element of a closed-point local ring of an integral finite-type curve has finite length. [lem-author-1437578267d2-length-orders](item-lem-author-1437578267d2-length-orders)

[F2] Every boundary is principal, and for a dominant generator it is the divisor of the norm of $(s-1)/s$. [lem-author-1437578267d2-boundary-norm](item-lem-author-1437578267d2-boundary-norm)

[F3] For an integral curve embedded as a closed subscheme of a smooth threefold, the two supported cycle groups and their boundary are exactly the intrinsic endpoint groups and quotient-length formula displayed above. [lem-author-1437578267d2-supported-degrees](item-lem-author-1437578267d2-supported-degrees)

## Proof
1.1 For any generator $V$ of $B_1(T)$ and $\epsilon=0,1$, the endpoint intersection is a proper closed subset of the noetherian integral curve $V$, hence is finite and zero-dimensional. At each point in that intersection $s-\epsilon$ is nonzero in the local domain, so [F1] gives finite quotient length. Projection identifies the endpoint subscheme with a closed subscheme of $T$, preserving point residue fields. Thus the displayed formula defines $b$ for arbitrary $T$ and agrees with [F3] in its embedded setting. [F1, F3, given]

1.2 If $f=1$, its divisor is zero by [F1]. Otherwise $h=1/(1-f)$ is a rational function distinct from both zero and one. It is regular on a nonempty open subset of $T$; its graph there is integral and isomorphic to that open subset. [F1, given, algebra]

2.1 Its reduced closure $W$ in $T\times\mathbb A^1$ is an integral closed curve dominating $T$, with function field $k(T)$. Neither endpoint contains its generic point, since $h\ne0,1$; hence each endpoint intersection is zero-dimensional or empty and $W$ is admissible. [step 1.1, step 1.2, construct]

3.1 For $f\ne1$, in $k(W)=k(T)$, $(s-1)/s=(h-1)/h=f$ and the norm for the identity field extension is the identity. By [F2], $b[W]=\operatorname{div}_T(f)$, including its length multiplicities. Thus every principal divisor is a boundary; the reverse inclusion is also [F2]. [F2, step 1.2, step 2.1, algebra] ∎
