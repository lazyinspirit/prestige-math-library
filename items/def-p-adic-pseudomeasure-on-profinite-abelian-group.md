---
id: def-p-adic-pseudomeasure-on-profinite-abelian-group
kind: definition
title: P-adic pseudomeasures on profinite abelian groups
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
- def-iwasawa-algebra-of-profinite-abelian-group
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: J. Rodrigues Jacinto and C. Williams, An Introduction to p-adic L-functions
    url: https://msp.org/ent/2025/4-1/ent-v4-n1-p03-p.pdf
    locator: Definition 3.34, §3.6, printed pp. 129–130; ambient fractions and all-group-difference
      integrality are distinguished
verification: {}
---

## Definition

Let $G$ be a profinite abelian group and let $\Lambda(G)=\mathbb Z_p\llbracket G\rrbracket$ be its completed group algebra. Let $S$ be the multiplicative set of elements of $\Lambda(G)$ that are not zero divisors. The **ambient total quotient ring** is $Q(\Lambda(G))=S^{-1}\Lambda(G)$; its elements are total-quotient fractions. A **p-adic pseudomeasure** on $G$ is an element $\lambda\in Q(\Lambda(G))$ satisfying
$$([g]-[1])\lambda\in\Lambda(G)\qquad\text{for every }g\in G.$$
Here $[g]$ is the group-like element represented by $g$ at each finite quotient. Thus the pseudomeasures form the augmentation-integral subclass of the ambient fractions. Division of an integral element by a regular denominator always defines an ambient fraction, but does not by itself prove pseudomeasure status. The bounded-measure interpretation is used only when a compatible finite distribution has actually been proved to define a bounded functional.

## Definition references

[J. Rodrigues Jacinto and C. Williams, *An Introduction to p-adic L-functions*, Definition 3.34, §3.6, pp. 129–130](https://msp.org/ent/2025/4-1/ent-v4-n1-p03-p.pdf)

## Facts & Assumptions

**Given:** A profinite abelian group $G$ and its completed group algebra.

[F1] The completed group algebra is the commutative ring of compatible finite group-ring coordinates. For $G\cong\mathbb Z_p$ it has the coordinate $[\gamma]=1+T$. [[def-iwasawa-algebra-of-profinite-abelian-group]]

## Proof

1.1 The non-zero-divisors contain $1$ and are closed under products: if $abx=0$ with $a,b$ regular, then $bx=0$ and hence $x=0$. Their localization exists as equivalence classes of pairs $(r,s)$, with $(r,s)\sim(r',s')$ when some regular $t$ kills $rs'-r's$; regularity makes this equivalent to $rs'=r's$. The usual cross-multiplication formulas define its ring operations. The map from $\Lambda(G)$ to this localization is injective, since an element killed by a regular denominator is zero. Thus the ambient ring and its integral subring in the Definition are well defined. [F1, given, construct, algebra]

2.1 The group-like coordinates are compatible and multiply as $[g][h]=[gh]$. The displayed condition therefore defines a subclass of the ambient ring without invoking any measure-existence or compactness theorem. It is a $\Lambda(G)$-submodule: for two such fractions $\lambda,\mu$ and any $a\in\Lambda(G)$, both $([g]-[1])(\lambda+\mu)$ and $([g]-[1])a\lambda$ are integral by addition and commutativity. This proves well-definedness of the source's stronger integrality condition. [F1, step 1.1, algebra]

3.1 The distinction is strict already for $G=\mathbb Z_p$: by [F1], $T=[\gamma]-[1]$ is regular, since multiplication by it shifts formal-series coefficients. Hence $T^{-2}$ is an ambient fraction, but $([\gamma]-[1])T^{-2}=T^{-1}$ is not integral: an inverse to $T$ in $\mathbb Z_p\llbracket T\rrbracket$ would have product with $T$ of constant coefficient $1$, whereas every such product has constant coefficient zero. Thus the original larger class of fractions is retained as the ambient ring, while only its all-group-difference-integral elements receive the source's pseudomeasure name. [F1, step 1.1, step 2.1, algebra] ∎
