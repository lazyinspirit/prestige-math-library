---
title: Signed mixed binomial sums cancel at order one
status: published
research_item: lem-author-11a9fe6cf386-mixed-binomial-cancellation
dependency_level: 2
---

## Prerequisites

- [lem-author-11a9fe6cf386-signed-spin-four-coefficients](item-lem-author-11a9fe6cf386-signed-spin-four-coefficients)
- [math:def-binomial-coefficient](https://alphabetamath.cc/item/def-binomial-coefficient)


## Statement

For the real arrays $\alpha,\beta$ of the signed spin-four isometry, define $w_{j,a,b}=\binom6j/\sqrt{\binom8{j+a}\binom8{j+b}}$ for integers $j,a,b$ with $0\leq j\leq6$ and $0\leq a,b\leq2$. Then $M_{ab}=\sum_{j=0}^6w_{j,a,b}\alpha_{j+a}\beta_{j+b}=0$ for every $a,b$. Equivalently one may sum to $8$, declaring the terms with $j>6$ zero before taking any quotient.

## Facts & Assumptions

[F1] The coefficient arrays, supports and negative amplitude are those of the signed spin-four isometry. [lem-author-11a9fe6cf386-signed-spin-four-coefficients](item-lem-author-11a9fe6cf386-signed-spin-four-coefficients)

[F2] For natural numbers $n,k$, the binomial coefficient $\binom nk$ counts the $k$-element subsets of an $n$-element set; in particular $\binom n0=\binom nn=1$ and $\binom nk=0$ for $k>n$. [math:def-binomial-coefficient](https://alphabetamath.cc/item/def-binomial-coefficient)

## Proof

**Given:** The real coefficient arrays, integer index ranges and zero-term convention in the Statement.

**Goal:** Establish the stated identities and implications.

1.1 For $0\leq k\leq8$, an eight-element set has a $k$-element subset, so $\binom8k>0$. The stated integer ranges give $0\leq j+a,j+b\leq8$, hence all weights in the sum to $6$ are defined. A nonzero summand requires $j+a\in\{0,6\}$ and $j+b\in\{2,8\}$. Their difference $b-a$ must belong to $\{2,8,-4\}$ and also to $[-2,2]$. Thus $b-a=2$, forcing $(a,b)=(0,2)$. There are then exactly two possible indices, $j=0$ and $j=6$, both inside the summation range. All other eight sums are termwise zero. [F1, F2, given, algebra]

2.1 Empty and full subsets give $\binom60=\binom66=1$ and $\binom80=\binom88=1$. In an eight-element set, each two-element subset is counted twice among the $8\cdot7$ ordered pairs of distinct elements, so $\binom82=8\cdot7/2=28$. Complementation is a bijection between its six-element and two-element subsets, so $\binom86=28$ as well. Therefore $M_{02}=\alpha_0\beta_2/\sqrt{28}+\alpha_6\beta_8/\sqrt{28}=\sqrt2/(3\sqrt{28})-\sqrt2/(3\sqrt{28})=0$. This uses the sign before adding contributions. The omitted $j=7,8$ terms have zero numerator weight and contribute zero under the stated convention. [F1, F2, step 1.1, algebra] ∎
