---
id: lem-tdmath-smooth-partial-legendre-transform-differential
kind: lemma
title: Differential of a C2 partial Legendre transform on a local inverse chart
status: draft
origin: pipeline
domain: mathematics
library: physics
deps:
  - thm-chain-rule-for-total-derivatives
  - thm-chain-sum-product-and-composition-rules-for-banach-derivatives
  - def-ck-euclidean-maps-and-diffeomorphisms
dependency_roles:
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-chain-sum-product-and-composition-rules-for-banach-derivatives: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Daniel Arovas, Thermodynamics and Statistical Mechanics, Appendix II, §2.15
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Book:_Thermodynamics_and_Statistical_Mechanics_(Arovas)/02:_Thermodynamics/2.15:_Appendix_II-_Legendre_Transformations
dependency_level: 0
---

## Statement

Let $\mathcal O\subseteq\mathbb R^k\times\mathbb R^m$ be open with $k,m\ge1$, and let $f:\mathcal O\to\mathbb R$ be $C^2$. Suppose the map $(u,z)\mapsto(x,z):=(D_u f(u,z),z)$ restricts to a $C^1$ diffeomorphism between open neighborhoods, with inverse $(x,z)\mapsto(g(x,z),z)$. Define

$$\widehat f(x,z):=f(g(x,z),z)-x\cdot g(x,z).$$

Then $\widehat f$ is $C^2$ and

$$d\widehat f=-g\cdot dx+D_z f(g(x,z),z)\cdot dz.$$

This is a local statement. Existence of the inverse chart is a hypothesis; the lemma asserts no global inverse or boundary transform.

## Facts & Assumptions

**Given:** An open domain, a $C^2$ function $f$, and a $C^1$ inverse chart $g$ for $(u,z)\mapsto(D_u f(u,z),z)$.

[F1] [[thm-chain-rule-for-total-derivatives]]: Differentiating a composition of totally differentiable maps gives the composed derivative.

[F2] [[def-ck-euclidean-maps-and-diffeomorphisms]]: A $C^1$ diffeomorphism is a bijection between open neighborhoods whose map and inverse are both $C^1$.

[F3] [[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]]: Differentiation of a bounded-bilinear product obeys the sum of the two product terms.

## Proof

**Proof technique:** direct.

1.1 The inverse identity gives $D_u f(g(x,z),z)=x$. By [F1], differentiating the composition in $\widehat f$ gives $d[f(g(x,z),z)]=x\cdot dg+D_z f(g(x,z),z)\cdot dz$. [given, F1, F2]

2.1 Apply [F3] componentwise to the finite scalar products in $x\cdot g$ to obtain $d[x\cdot g]=g\cdot dx+x\cdot dg$. Subtracting this from step 1.1 cancels the $x\cdot dg$ terms and yields the stated differential. [F3, step 1.1, algebra]

3.1 The coefficient functions $g$ and $D_zf(g,z)$ are $C^1$, since $g$ is $C^1$, $f$ is $C^2$, and [F1] applies to their compositions. The first partial derivatives of $\widehat f$ are therefore $C^1$, so $\widehat f$ is $C^2$. [given, F1, F2, step 2.1] ∎
