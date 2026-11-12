---
id: lem-author-4b6f215bcf3b-rational-derived-quotient
kind: lemma
title: Finite derived quotients of rational complexes vanish
status: published
domain: mathematics
deps:
  - lem-author-4b6f215bcf3b-rational-complex-multiplication
  - lem-derived-coefficient-exact-sequence
  - math:def-derived-category-of-an-abelian-category
  - math:prop-cohomology-factors-through-the-derived-category
dependency_roles:
  lem-author-4b6f215bcf3b-rational-complex-multiplication: mathematical-premise
  lem-derived-coefficient-exact-sequence: mathematical-premise
  math:def-derived-category-of-an-abelian-category: mathematical-premise
  math:prop-cohomology-factors-through-the-derived-category: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 2
---

## Statement

Let $C$ be an object of $D(\mathbb Z)$ isomorphic to the underlying complex of a complex of $\mathbb Q$-vector spaces, and let $n>0$ be an integer. Then $C\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z/n$ is zero in $D(\mathbb Z)$. Here $D(\mathbb Z)$ is the derived category of cochain complexes of abelian groups, obtained by inverting quasi-isomorphisms in the homotopy category. For these coefficients, the derived tensor product is represented by the mapping cone of multiplication by $n$ on any complex representing $C$; this construction descends to $D(\mathbb Z)$ without a boundedness assumption. A complex is acyclic when all its cohomology groups vanish, and it represents zero in $D(\mathbb Z)$ exactly when it is acyclic.

## Facts & Assumptions

**Given:** $C$ and $n$ as stated.

**Goal:** Show $C\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z/n\simeq0$.

[F1] Multiplication by $n$ is an isomorphism on the underlying complex of a complex of $\mathbb Q$-vector spaces. [[lem-author-4b6f215bcf3b-rational-complex-multiplication]]

[F2] The finite-coefficient construction is a functor on $D(\mathbb Z)$, represented on complexes by $C/n=\operatorname{Cone}(n:C\to C)$. For every integer $i$ it has the natural short exact sequence below, with $M[n]=\{x\in M:nx=0\}$ and $M/nM$ the quotient by the image of multiplication by $n$. No boundedness is required. [[lem-derived-coefficient-exact-sequence]]
$$0\longrightarrow H^i(C)/nH^i(C)\longrightarrow H^i(C/n)\longrightarrow H^{i+1}(C)[n]\longrightarrow0.$$

[F3] For every integer $i$, cohomology defines a functor $H^i:D(\mathbb Z)\to\mathrm{Ab}$ agreeing with cochain cohomology on complexes and induced maps. Consequently it sends isomorphisms to isomorphisms of abelian groups. The induced map of multiplication by $n$ sends a cocycle class $[x]$ to $[nx]=n[x]$. [[math:prop-cohomology-factors-through-the-derived-category]]

[F4] We use the localization and standing size convention of the derived-category interface. A quasi-isomorphism is a map inducing isomorphisms on all cohomology groups and becomes invertible in $D(\mathbb Z)$. In particular, the map from an acyclic complex to the zero complex is inverted. [[math:def-derived-category-of-an-abelian-category]]

## Proof

1.1 Let $R$ be the underlying complex of a complex of $\mathbb Q$-vector spaces and $\alpha:C\xrightarrow{\sim}R$ the given isomorphism in $D(\mathbb Z)$. By [F1] and [F3], multiplication by $n$ induces an automorphism of $H^i(R)$ for every $i$. Also by [F3], $H^i(\alpha)$ is an isomorphism of abelian groups, so $H^i(\alpha)(nx)=nH^i(\alpha)(x)$. Conjugating multiplication by $n$ through this group isomorphism proves that multiplication by $n$ is an automorphism of $H^i(C)$ for every $i$. [F1, F3, given, algebra]

2.1 Therefore both $H^i(C)/nH^i(C)$ and $H^{i+1}(C)[n]$ vanish. The exact sequence in [F2] gives $H^i(C\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z/n)=0$ for every $i$. Thus the coefficient complex is acyclic, and its map to the zero complex is a quasi-isomorphism, hence an isomorphism in $D(\mathbb Z)$ by [F4]. This proves the stated vanishing. [F2, F4, step 1.1, algebra] ∎
