---
title: Unique divisibility is invariant under group isomorphism
status: published
research_item: lem-author-b87d598e83f3-isomorphism-transfers-roots
dependency_level: 0
---

## Prerequisites

- [math:def-group](https://alphabetamath.cc/item/def-group)
- [math:def-group-isomorphism-and-automorphism](https://alphabetamath.cc/item/def-group-isomorphism-and-automorphism)
- [math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)
- [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism)
- [math:thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse](https://alphabetamath.cc/item/thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse)
- [math:prop-composition-preserves-injectivity-surjectivity-and-bijectivity](https://alphabetamath.cc/item/prop-composition-preserves-injectivity-surjectivity-and-bijectivity)
- [math:thm-induction-principle](https://alphabetamath.cc/item/thm-induction-principle)
- [math:lem-two-functions-are-equal-exactly-when-they-agree-at-every-point](https://alphabetamath.cc/item/lem-two-functions-are-equal-exactly-when-they-agree-at-every-point)


## Statement
Let $u:G\to H$ be an isomorphism of abelian groups. For $A=G,H$ and each positive integer $n$, write $n_A:A\to A$ for the map $n_A(a)=a+\cdots+a$ with $n$ summands. If multiplication by every positive integer is bijective on $G$, then the same is true on $H$.

## Facts & Assumptions
**Given:** The isomorphism and bijectivity hypotheses in the statement, with the multiplication maps defined there.

**Goal:** Transfer bijectivity of every positive multiplication map to $H$.

[F1] The additive abelian-group operations are those of [math:def-group](https://alphabetamath.cc/item/def-group). By [math:def-group-isomorphism-and-automorphism](https://alphabetamath.cc/item/def-group-isomorphism-and-automorphism), an isomorphism is a bijective group homomorphism; [math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection) defines bijectivity.

[F2] By [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism), $u(x+y)=u(x)+u(y)$ for all $x,y\in G$.

[F3] [math:thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse](https://alphabetamath.cc/item/thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse) gives a two-sided inverse $u^{-1}:H\to G$ for the bijection $u$, and this inverse is itself bijective. No choice principle is needed.

[F4] [math:prop-composition-preserves-injectivity-surjectivity-and-bijectivity](https://alphabetamath.cc/item/prop-composition-preserves-injectivity-surjectivity-and-bijectivity) states that a composite of bijections is bijective.

[F5] [math:thm-induction-principle](https://alphabetamath.cc/item/thm-induction-principle) gives induction for a property of natural numbers from its case at $0$ and its successor implication. For positive summand counts, apply it to the count $r+1$ with $r\in\mathbb{N}$.

[F6] [math:lem-two-functions-are-equal-exactly-when-they-agree-at-every-point](https://alphabetamath.cc/item/lem-two-functions-are-equal-exactly-when-they-agree-at-every-point) identifies two functions when their domains coincide and they agree at every point of that domain.

## Proof
1.1 Fix a positive integer $n$. By [F1] and [F3], $u$ has a bijective inverse $u^{-1}:H\to G$. For each $g\in G$, apply [F5] to the property $P(r)$ that $u((r+1)_G(g))=(r+1)_H(u(g))$. Its case at $r=0$ holds because $1_A(a)=a$. Using the summand convention $(m+1)_A(a)=m_A(a)+a$ for positive $m$, [F2] and $P(r)$ give $u((r+2)_G(g))=u((r+1)_G(g))+u(g)=(r+1)_H(u(g))+u(g)=(r+2)_H(u(g))$, proving $P(r+1)$. Induction gives $P(r)$ for every $r\in\mathbb{N}$, hence $u(n_G(g))=n_H(u(g))$ for every $g\in G$. Applying this identity to $g=u^{-1}(h)$ and using [F3] gives $n_H(h)=u(n_G(u^{-1}(h)))$ for every $h\in H$. Both $n_H$ and $u\circ n_G\circ u^{-1}$ are functions $H\to H$ by the stated map types and [F4], so [F6] gives $n_H=u\circ n_G\circ u^{-1}$. [given, F1, F2, F3, F4, F5, F6, algebra]

2.1 The map $n_G$ is bijective by hypothesis, and $u$ and $u^{-1}$ are bijective by [F1] and [F3]. Applying [F4] twice to the composite in step 1.1 shows that $n_H$ is bijective. Since $n$ was an arbitrary positive integer, the conclusion holds for every positive multiplication map on $H$. [given, F1, F3, F4, step 1.1] ∎
