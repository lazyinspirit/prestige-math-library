---
title: Valuative dimension and degreewise bounded towers
status: draft
research_item: def-valuative-dimension-and-boundedness
dependency_level: 5
---

PDF p. 4: Finite valuative dimension; PDF p. 9: Boundedness input

## Prerequisites

- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum)

## Definition
All rings are commutative with identity. The **Krull dimension** of a nonzero ring is the supremum, in the nonnegative integers together with infinity, of the lengths $n$ of strict chains of prime ideals $\mathfrak p_0\subsetneq\cdots\subsetneq\mathfrak p_n$. The zero ring has dimension $-1$. A **domain** is a nonzero ring without zero divisors. Its fraction field is denoted $\operatorname{Frac}(D)$. A **valuation overring** of a domain $D$ is a subring $V$ of $\operatorname{Frac}(D)$ containing $D$ such that, for every nonzero element $x$ of that field, at least one of $x$ and $x^{-1}$ lies in $V$.

The **valuative dimension** $\dim_v D$ of a domain $D$ is the supremum of the Krull dimensions of its valuation overrings. For a ring $A$, put $\dim_v A=\sup_{\mathfrak p\in\operatorname{Spec}A}\dim_v(A/\mathfrak p)$, with the supremum of the empty set equal to $-1$. For a scheme $X$, put $\dim_v X=\sup_{\operatorname{Spec}A\subseteq X}\dim_v A$, over all affine open subschemes, again taking the empty supremum to be $-1$. The scheme has **finite valuative dimension** if this value is finite.

Let $F^jE$ be a decreasing filtration of a spectrum $E$, and let $S$ be a specified set of integers. It is **degreewise bounded above in filtration on $S$** if, for every $i\in S$, there is an integer $N(i)$ such that $\pi_iF^jE=0$ for all $j\geq N(i)$. If $S=\mathbb Z$, it is simply **degreewise bounded above in filtration**. The bound may depend on $i$. This is a condition on the homotopy groups of the stages; completeness is the separately defined condition that the inverse limit of the tower is the zero spectrum.

## Facts & Assumptions
**Given:** A scheme $X$, or a decreasing filtration $F^\bullet E$ and a set $S\subseteq\mathbb Z$.

**Goal:** Justify the quantities and conditions in the definition.

[F1] A scheme has a set of affine open subschemes and their coordinate rings; a decreasing filtration has stages $F^jE$, transition maps and functorial homotopy groups. The tower-vanishing definition of completeness is the one stated above. [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base) [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum)

## Justification
1.1 The fraction field of a domain is itself a valuation overring, so the supremum defining $\dim_v D$ is taken over a nonempty set. Prime quotients are domains. Prime ideals, subrings of a fixed field, affine opens and finite chains of ideals form sets; their suprema exist in $\{-1,0,1,\ldots,\infty\}$ with the stated empty convention. Isomorphisms of rings preserve prime chains, fraction fields and valuation overrings, so the scheme expression does not depend on the chosen presentation of any particular affine open. [F1, given, construct]

2.1 Each $\pi_iF^jE$ is a well-defined group, and the displayed quantifiers give a definite property of the tower and the specified set of degrees. The bound is chosen separately for each degree. Completeness is a condition on the inverse limit, so the two formulations are recorded separately; no uniform bound or injectivity of transition maps is included in either definition. [F1, given, step 1.1] ∎
