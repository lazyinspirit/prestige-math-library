---
title: Signed diagonal binomial moments agree at order one
status: published
research_item: lem-author-11a9fe6cf386-diagonal-binomial-moments
dependency_level: 2
---

## Prerequisites

- [lem-author-11a9fe6cf386-signed-spin-four-coefficients](item-lem-author-11a9fe6cf386-signed-spin-four-coefficients)
- [math:def-binomial-coefficient](https://alphabetamath.cc/item/def-binomial-coefficient)


## Statement

For the real arrays $\alpha,\beta$ of the signed spin-four isometry, define $w_{j,a,b}=\binom6j/\sqrt{\binom8{j+a}\binom8{j+b}}$ for integers $j,a,b$ with $0\leq j\leq6$ and $0\leq a,b\leq2$. Then $D_{ab}=\sum_{j=0}^6w_{j,a,b}(\alpha_{j+a}\alpha_{j+b}-\beta_{j+a}\beta_{j+b})=0$ for all nine pairs $(a,b)\in\{0,1,2\}^2$. The common diagonal weighted norms at $a=0,1,2$ are $5/14,1/7,5/14$, respectively. Equivalently one may sum to $8$, declaring each term with $j>6$ to be zero before taking any quotient.

## Statement references

[lem-author-11a9fe6cf386-signed-spin-four-coefficients](item-lem-author-11a9fe6cf386-signed-spin-four-coefficients)

[math:def-binomial-coefficient](https://alphabetamath.cc/item/def-binomial-coefficient)

## Facts & Assumptions

[F1] The real arrays have supports $\{0,6\}$ and $\{2,8\}$, respectively, with $\alpha_0^2=\beta_8^2=1/3$ and $\alpha_6^2=\beta_2^2=2/3$. Each individual support has its two indices separated by six. [lem-author-11a9fe6cf386-signed-spin-four-coefficients](item-lem-author-11a9fe6cf386-signed-spin-four-coefficients)

[F2] For natural numbers $n,k$, $\binom nk$ is the number of $k$-element subsets of an $n$-element set. In particular $\binom n0=\binom nn=1$, $\binom n1=n$, and $\binom nk=0$ for $k>n$. [math:def-binomial-coefficient](https://alphabetamath.cc/item/def-binomial-coefficient)

## Proof

**Given:** The real arrays, integer index ranges and zero-term convention in the Statement.

**Goal:** Prove all nine diagonal-difference identities and the three common weighted norms.

1.1 For each integer $0\leq k\leq8$, an eight-element set has a $k$-element subset, so $\binom8k>0$ by [F2]. The index ranges give $0\leq j+a,j+b\leq8$, hence all displayed weights in the sum to $6$ are defined. If $a\ne b$, a nonzero product from one array would require two supported indices to differ by $b-a$, whose nonzero absolute value is at most two. By [F1] its distinct supported indices differ by six. Thus no such product exists, and both weighted sums vanish for all $a\ne b$. [given, F1, F2, algebra]

1.2 Count the needed binomial values from [F2]. Each two-element subset of an $n$-element set occurs twice among the $n(n-1)$ ordered pairs of distinct elements. Each three-element subset of a six-element set occurs six times among its $6\cdot5\cdot4$ ordered triples of distinct elements. Thus $\binom62=15$, $\binom63=20$ and $\binom82=28$. Complementation bijects $k$-element subsets with $(n-k)$-element subsets, so together with the boundary and singleton values of [F2] this gives $(\binom6j)_{j=0}^6=(1,6,15,20,15,6,1)$ and $\binom80=\binom88=1$, $\binom86=28$. [F2, algebra]

2.1 For $a=b=0$, the alpha sum is $1/3+(2/3)/28=5/14$, while the beta sum is $(2/3)15/28=5/14$. For $a=b=1$, the alpha sum is $(2/3)6/28=1/7$, and the beta sum is the same. For $a=b=2$, the alpha sum is $(2/3)15/28=5/14$, while the beta sum is $(2/3)/28+1/3=5/14$. These are all supported contributions by [F1], and the binomial values are those of step 1.2. Taking differences proves all remaining $D_{aa}=0$. If the sum is extended to $8$, its additional terms are zero by the stated convention, which never evaluates a quotient outside the original range. Together with step 1.1 this proves every claim. [given, F1, F2, step 1.1, step 1.2, algebra] ∎
