---
title: Unique lifting from vanishing groups yields the Chern classification
status: published
research_item: lem-author-9b282fc59773-unique-lifting-criterion
dependency_level: 17
sources:
  references:
    - title: Aravind Asok and Jean Fasel, A cohomological classification of vector
        bundles on smooth affine threefolds
      url: https://arxiv.org/pdf/1204.0770v5
      locator: Theorem 1, p. 2; §6, pp. 22–26
---

## Prerequisites

- [def-author-9b282fc59773-chern-map-and-fibers](item-def-author-9b282fc59773-chern-map-and-fibers)
- [lem-author-9b282fc59773-fixed-determinant-fibers](item-lem-author-9b282fc59773-fixed-determinant-fibers)
- [lem-author-9b282fc59773-compatible-presentation-fibers](item-lem-author-9b282fc59773-compatible-presentation-fibers)
- [lem-author-9b282fc59773-zero-obstruction-extension](item-lem-author-9b282fc59773-zero-obstruction-extension)
- [math:def-group](https://alphabetamath.cc/item/def-group)
- [math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Use $C_X,V,T$ as defined. Suppose $v:V\to M$, $b:N\to T$ are bijections and $t:M\to N$ is surjective with $b t v=C_X$. Suppose also that, for every $n\in N$, there are abelian groups $A_n,H_n,D_n$ exact in a sequence $A_n\to H_n\to D_n$, with $A_n=D_n=0$, and that the nonempty fiber $t^{-1}(n)$ is a surjective image of the underlying set of $H_n$. Then every $V_{L,a}$ is a singleton and $C_X$ is a bijection.

## Statement references
[def-author-9b282fc59773-chern-map-and-fibers](item-def-author-9b282fc59773-chern-map-and-fibers)

[lem-author-9b282fc59773-fixed-determinant-fibers](item-lem-author-9b282fc59773-fixed-determinant-fibers)

[lem-author-9b282fc59773-compatible-presentation-fibers](item-lem-author-9b282fc59773-compatible-presentation-fibers)

[lem-author-9b282fc59773-zero-obstruction-extension](item-lem-author-9b282fc59773-zero-obstruction-extension)

[math:def-group](https://alphabetamath.cc/item/def-group)

[math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Facts & Assumptions
**Given:** Precisely the sets, maps, compatibility and group hypotheses of the Statement. Here $T=\operatorname{Pic}(X)\times\mathrm{CH}^2(X)$. Retain the Axiom of Choice and universe assumptions of the Chern-map definition; Choice is inherited for those supplied objects and is not used for any additional selection below. [def-author-9b282fc59773-chern-map-and-fibers](item-def-author-9b282fc59773-chern-map-and-fibers) [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

**Goal:** Deduce existence and uniqueness for the actual Chern invariants.

[F1] Exactness with zero end groups forces the middle group to be zero, and its nonempty surjective images are singletons. [lem-author-9b282fc59773-zero-obstruction-extension](item-lem-author-9b282fc59773-zero-obstruction-extension)

[F2] The compatible bijections identify $V_{L,a}$ with the corresponding $t$-fiber. [lem-author-9b282fc59773-compatible-presentation-fibers](item-lem-author-9b282fc59773-compatible-presentation-fibers)

[F3] Singleton fixed-invariant fibers are equivalent to bijectivity of $C_X$. [lem-author-9b282fc59773-fixed-determinant-fibers](item-lem-author-9b282fc59773-fixed-determinant-fibers)

[F4] Use the supplied abelian-group convention, with additive identity $0$. A zero group has underlying set $\{0\}$. For the arrows $f_n:A_n\to H_n$ and $g_n:H_n\to D_n$, preserving addition means $f_n(a+a\prime)=f_n(a)+f_n(a\prime)$ and $g_n(h+h\prime)=g_n(h)+g_n(h\prime)$. Exactness at $H_n$ means $\{f_n(a):a\in A_n\}=\{h\in H_n:g_n(h)=0\}$. These are the arrow, exactness and zero-group conventions of [F1]. [math:def-group](https://alphabetamath.cc/item/def-group) [lem-author-9b282fc59773-zero-obstruction-extension](item-lem-author-9b282fc59773-zero-obstruction-extension)

[F5] A map is surjective if every element of its codomain has a preimage, injective if equal images force equal inputs, and bijective if both conditions hold. Its fiber over $n$ is the preimage of the singleton $\{n\}$; thus $t^{-1}(n)=\{m\in M:t(m)=n\}$. [math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)

## Proof
1.1 Fix an arbitrary $y=(L,a)\in T$. Bijectivity of $b$ gives a unique $n\in N$ over $y$. Surjectivity of $t$ makes $t^{-1}(n)$ nonempty. The exact group sequence and zero end groups imply $H_n=0$; its asserted surjection onto $t^{-1}(n)$ and [F1] imply that this fiber is a singleton. [given, F1, F4, F5]

2.1 Compatibility identifies that fiber with $V_{L,a}$ by [F2], so $V_{L,a}$ is also a singleton. As $y$ was arbitrary, [F3] gives bijectivity of $C_X$. This argument needs a quotient description only after existence of a lift; it does not select a canonical lift or add determinant framings. [F2, F3, F5, step 1.1] ∎
