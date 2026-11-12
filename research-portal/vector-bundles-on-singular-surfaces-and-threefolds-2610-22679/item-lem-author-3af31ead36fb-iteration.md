---
title: Iterating a conditional free-summand criterion
status: published
research_item: lem-author-3af31ead36fb-iteration
dependency_level: 2
---

PDF p. 1: Serre splitting theorem

## Prerequisites

- [lem-author-3af31ead36fb-split-complement](item-lem-author-3af31ead36fb-split-complement)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring)
- [math:def-left-and-right-modules](https://alphabetamath.cc/item/def-left-and-right-modules)
- [math:def-module-homomorphism-kernel-image-and-cokernel](https://alphabetamath.cc/item/def-module-homomorphism-kernel-image-and-cokernel)
- [math:def-projective-module](https://alphabetamath.cc/item/def-projective-module)
- [math:def-generated-cyclic-finitely-generated-and-free-modules](https://alphabetamath.cc/item/def-generated-cyclic-finitely-generated-and-free-modules)
- [math:def-direct-sum-of-a-family-of-modules](https://alphabetamath.cc/item/def-direct-sum-of-a-family-of-modules)
- [math:def-prime-and-maximal-ideals](https://alphabetamath.cc/item/def-prime-and-maximal-ideals)
- [math:def-localisation-of-a-module](https://alphabetamath.cc/item/def-localisation-of-a-module)


## Statement
Assume the Axiom of Choice. Let $A$ be a nonzero commutative ring and let $d$ be a nonnegative integer. Suppose every finite projective $A$-module of constant rank greater than $d$ has a free rank-one direct summand. Then every finite projective $A$-module $P$ of constant rank $r>d$ is isomorphic to $A^{r-d}\oplus Q$ for a finite projective module $Q$ of constant rank $d$. The criterion is an explicit hypothesis of this lemma.

## Facts & Assumptions

**Given:** $A$, $d$, $P$, $r$, Choice, and the conditional free-summand criterion in the statement.

**Goal:** Obtain the displayed decomposition and rank.

[A1] Choice is retained because [F1] assumes it; this proof uses only the module-complement conclusion of [F1]. The finite iteration introduces no additional choice assumption. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] The complement of a free rank-one summand of a finite projective constant-rank module is finite projective and has rank one less. [lem-author-3af31ead36fb-split-complement](item-lem-author-3af31ead36fb-split-complement)

[F2] Rings are unital, and $A$ is commutative and nonzero. All modules are unital left $A$-modules; module isomorphisms are bijective $A$-linear maps. [math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring) [math:def-left-and-right-modules](https://alphabetamath.cc/item/def-left-and-right-modules) [math:def-module-homomorphism-kernel-image-and-cokernel](https://alphabetamath.cc/item/def-module-homomorphism-kernel-image-and-cokernel)

[F3] Finite projective means finitely generated and projective. Projectivity is the lifting property through surjective module maps; a free module has a basis, and free rank $n$ means that this basis has $n$ elements. [math:def-projective-module](https://alphabetamath.cc/item/def-projective-module) [math:def-generated-cyclic-finitely-generated-and-free-modules](https://alphabetamath.cc/item/def-generated-cyclic-finitely-generated-and-free-modules)

[F4] Finite direct sums have coordinatewise operations. Write $A^n$ for $n$ copies of $A$, with $A^0=0$. A free rank-one direct summand of $M$ means an isomorphism $M\cong A\oplus N$ for some $A$-module $N$. [math:def-direct-sum-of-a-family-of-modules](https://alphabetamath.cc/item/def-direct-sum-of-a-family-of-modules) [math:def-module-homomorphism-kernel-image-and-cokernel](https://alphabetamath.cc/item/def-module-homomorphism-kernel-image-and-cokernel)

[F5] Constant rank $n$ means that $M_{\mathfrak p}=(A\setminus\mathfrak p)^{-1}M$ is free of rank $n$ over $A_{\mathfrak p}$ for every prime ideal $\mathfrak p$ of $A$. Here prime ideals are proper ideals with $ab\in\mathfrak p$ implying $a\in\mathfrak p$ or $b\in\mathfrak p$; thus $A\setminus\mathfrak p$ is multiplicative. [math:def-prime-and-maximal-ideals](https://alphabetamath.cc/item/def-prime-and-maximal-ideals) [math:def-localisation-of-a-module](https://alphabetamath.cc/item/def-localisation-of-a-module) [math:def-generated-cyclic-finitely-generated-and-free-modules](https://alphabetamath.cc/item/def-generated-cyclic-finitely-generated-and-free-modules)

## Proof

1.1 Put $M_0=P$. Since $r>d$, the assumed criterion gives $M_0\cong A\oplus M_1$ in the sense of [F4]. By [F1], $M_1$ is finite projective of constant rank $r-1$. This establishes the first decomposition with the meanings of finite projectivity and rank in [F3] and [F5]; the use of [F1] is under [A1]. [A1, F1, F3, F4, F5, given, construct]

2.1 Inductively, suppose $1\leq j<r-d$ and $P\cong A^j\oplus M_j$, where $M_j$ is finite projective of constant rank $r-j$. Since $r-j>d$, the same criterion and [F1] give $M_j\cong A\oplus M_{j+1}$ with complement of rank $r-j-1$. Composing isomorphisms and regrouping coordinates gives $P\cong A^{j+1}\oplus M_{j+1}$: the regrouping map sends $((a_1,\ldots,a_j),(b,m))$ to $((a_1,\ldots,a_j,b),m)$, is $A$-linear, and is inverted by separating the last coordinate. This uses the coordinatewise operations and isomorphisms of [F2] and [F4]. The finite induction starting at step 1.1 ends at $j=r-d$, including the case $r-d=1$ where no induction extension is needed. Taking $Q=M_{r-d}$ proves $P\cong A^{r-d}\oplus Q$ with $Q$ finite projective of constant rank $d$, also when $d=0$. [F1, F2, F3, F4, F5, given, step 1.1, construct] ∎
