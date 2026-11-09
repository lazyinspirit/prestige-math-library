---
id: lem-author-9b282fc59773-unique-lifting-criterion
kind: lemma
title: Unique lifting from vanishing groups yields the Chern classification
status: published
domain: mathematics
deps:
  - def-author-9b282fc59773-chern-map-and-fibers
  - lem-author-9b282fc59773-fixed-determinant-fibers
  - lem-author-9b282fc59773-compatible-presentation-fibers
  - lem-author-9b282fc59773-zero-obstruction-extension
dependency_roles:
  def-author-9b282fc59773-chern-map-and-fibers: mathematical-premise
  lem-author-9b282fc59773-fixed-determinant-fibers: mathematical-premise
  lem-author-9b282fc59773-compatible-presentation-fibers: mathematical-premise
  lem-author-9b282fc59773-zero-obstruction-extension: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Aravind Asok and Jean Fasel, A cohomological classification of vector
        bundles on smooth affine threefolds
      url: https://arxiv.org/pdf/1204.0770v5
      locator: Theorem 1, p. 2; §6, pp. 22–26
dependency_level: 15
---

## Statement
Use $C_X,V,T$ as defined. Suppose $v:V\to M$, $b:N\to T$ are bijections and $t:M\to N$ is surjective with $b t v=C_X$. Suppose also that, for every $n\in N$, there are abelian groups $A_n,H_n,D_n$ exact in a sequence $A_n\to H_n\to D_n$, with $A_n=D_n=0$, and that the nonempty fiber $t^{-1}(n)$ is a surjective image of the underlying set of $H_n$. Then every $V_{L,a}$ is a singleton and $C_X$ is a bijection.

## Statement references
[[def-author-9b282fc59773-chern-map-and-fibers]]

[[lem-author-9b282fc59773-fixed-determinant-fibers]]

[[lem-author-9b282fc59773-compatible-presentation-fibers]]

[[lem-author-9b282fc59773-zero-obstruction-extension]]

## Facts & Assumptions
**Given:** Precisely the sets, maps, compatibility and group hypotheses of the Statement.

**Goal:** Deduce existence and uniqueness for the actual Chern invariants.

[F1] Exactness with zero end groups forces the middle group to be zero, and its nonempty surjective images are singletons. [[lem-author-9b282fc59773-zero-obstruction-extension]]

[F2] The compatible bijections identify $V_{L,a}$ with the corresponding $t$-fiber. [[lem-author-9b282fc59773-compatible-presentation-fibers]]

[F3] Singleton fixed-invariant fibers are equivalent to bijectivity of $C_X$. [[lem-author-9b282fc59773-fixed-determinant-fibers]]

## Proof
1.1 Fix an arbitrary $y=(L,a)\in T$. Bijectivity of $b$ gives a unique $n\in N$ over $y$. Surjectivity of $t$ makes $t^{-1}(n)$ nonempty. The exact group sequence and zero end groups imply $H_n=0$; its asserted surjection onto $t^{-1}(n)$ and [F1] imply that this fiber is a singleton. [given, F1]

2.1 Compatibility identifies that fiber with $V_{L,a}$ by [F2], so $V_{L,a}$ is also a singleton. As $y$ was arbitrary, [F3] gives bijectivity of $C_X$. This argument needs a quotient description only after existence of a lift; it does not select a canonical lift or add determinant framings. [F2, F3, step 1.1] ∎
