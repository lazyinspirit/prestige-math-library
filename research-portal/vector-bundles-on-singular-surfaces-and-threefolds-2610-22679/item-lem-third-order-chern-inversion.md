---
title: Formal Chern arithmetic through degree three
status: published
research_item: lem-third-order-chern-inversion
dependency_level: 2
---

PDF p. 11: Inverse total Chern series; PDF p. 17: Exterior-power Chern computation

## Prerequisites

- [lem-virtual-chern-extension-interface](item-lem-virtual-chern-extension-interface)
- [math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring)
- [math:def-group](https://alphabetamath.cc/item/def-group)
- [math:def-subgroup](https://alphabetamath.cc/item/def-subgroup)
- [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism)


## Statement
Let $R$ be a commutative ring with unit. A formal series $C(t)=1+\sum_{i\geq1}a_i t^i$ has a multiplicative inverse, and, modulo terms of degree at least four,
$$C(t)^{-1}=1-a_1t+(a_1^2-a_2)t^2+(-a_1^3+2a_1a_2-a_3)t^3.$$
For $D(t)=1+\sum_{i\geq1}b_i t^i$, the coefficients in degrees one, two and three of $C(t)D(t)$ are respectively $a_1+b_1$, $a_2+a_1b_1+b_2$, and $a_3+a_2b_1+a_1b_2+b_3$.

More generally, let $G$ be an abelian group and let $c_t:G\to 1+tR[\![t]\!]$ be a group homomorphism, where the target uses series multiplication. Write $c_t(x)=1+\sum_{i\geq1}c_i(x)t^i$. If $r\geq1$ and $H$ is a subgroup of $G$ on which $c_i$ vanishes for every $1\leq i<r$, then $c_r:H\to(R,+)$ is a group homomorphism. In particular, under the hypotheses of the virtual Chern extension, these formulas apply to its total Chern series, with $R=\bigoplus_{i\geq0}H^{2i,i}(X)$. If $c_1(x)=c_1(y)$, then $c_2(x-y)=c_2(x)-c_2(y)$.

Here $R[\![t]\!]$ denotes the ring of formal sequences of coefficients, with multiplication defined by the finite convolution formula $[t^n](AB)=\sum_{i=0}^n[t^i]A\,[t^{n-i}]B$. The notation $1+tR[\![t]\!]$ means the series with constant coefficient one, and $[t^n]A$ denotes the coefficient of $t^n$. Equality modulo terms of degree at least four means equality of coefficients in degrees zero through three. A virtual Chern class is an element of the bundle Grothendieck group equipped with the extended series described by the cited interface.

## Statement references
[lem-virtual-chern-extension-interface](item-lem-virtual-chern-extension-interface)

[math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring)

[math:def-group](https://alphabetamath.cc/item/def-group)

[math:def-subgroup](https://alphabetamath.cc/item/def-subgroup)

[math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism)

## Facts & Assumptions

**Given:** A commutative unital ring $R$, the series $C$ and $D$, and, for the additivity assertion, the group homomorphism $c_t$, integer $r$ and subgroup $H$ specified in the statement.

**Goal:** Establish the inverse and product formulas, the subgroup additivity assertion and the stated conditional virtual Chern consequences.

[F1] Under its stated hypotheses, including the Axiom of Choice and the exact-sequence Whitney identity, the virtual Chern extension supplies a homomorphism from the bundle Grothendieck group to the multiplicative group of total series. Its coefficients lie in $H^{2i,i}(X)$, and $\bigoplus_{i\geq0}H^{2i,i}(X)$ is commutative because the first grading of each summand is even. [lem-virtual-chern-extension-interface](item-lem-virtual-chern-extension-interface)

[F2] The commutative-ring interface supplies a unital ring with an abelian additive group, associative commutative multiplication and distributivity. The group interface supplies the abelian-group laws; a subgroup contains zero and is closed under addition and inverses. A group homomorphism is a function preserving the group operation. These are the algebraic meanings used here; identity and inverse preservation are derived in step 2.1. [math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring), [math:def-group](https://alphabetamath.cc/item/def-group), [math:def-subgroup](https://alphabetamath.cc/item/def-subgroup), [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism)

## Proof

**Proof technique:** Compare coefficients of formal series.

1.1 Convolution of two constant-one series again has constant coefficient one. It is commutative by the ring laws in [F2], and associative because either parenthesization of a triple product has degree-$n$ coefficient $\sum_{i+j+k=n}a_i b_j d_k$, a finite sum; the series $1$ is its identity. Set $q_0=1$ and recursively $q_n=-\sum_{i=1}^n a_iq_{n-i}$ for $n\geq1$. Each $q_n$ is uniquely determined by the earlier coefficients using a finite sum, so $Q(t)=\sum_{n\geq0}q_nt^n$ is a well-defined formal series. The coefficient of $t^n$ in $C Q$ is zero for $n>0$ and one for $n=0$; commutativity gives $Q C=1$ as well. Thus the constant-one series form an abelian group. The recursion yields $q_1=-a_1$, $q_2=a_1^2-a_2$, and $q_3=-a_1^3+2a_1a_2-a_3$, proving the inverse formula. [given, F2, construct, algebra]

1.2 The convolution formula gives $[t^n](CD)=a_n+b_n+\sum_{i=1}^{n-1}a_i b_{n-i}$ for $n\geq1$, taking the constant coefficients to be one. Substituting $n=1,2,3$ gives the three displayed product coefficients. [given, F2, algebra]

2.1 First apply the homomorphism law in [F2] to $0+0$: writing $U=c_t(0)$ gives $U=U^2$. Multiply this equality by the inverse supplied in step 1.1 to obtain $1=U$. For every $z\in G$, the same law gives $c_t(z)c_t(-z)=c_t(0)=1$, so $c_t(-z)=c_t(z)^{-1}$, by multiplying by $c_t(z)^{-1}$. Now let $x,y\in H$. Subgroup closure in [F2] ensures $0,x+y,-x\in H$. The homomorphism property gives $c_t(x+y)=c_t(x)c_t(y)$. Comparing degree $r$ as in step 1.2 gives $c_r(x+y)=c_r(x)+c_r(y)+\sum_{i=1}^{r-1}c_i(x)c_{r-i}(y)$. Each summand vanishes by the hypothesis on $H$, including the empty-sum case $r=1$. Since $c_t(0)=1$, one has $c_r(0)=0$; applying the addition formula to $x+(-x)=0$ and adding $-c_r(x)$ to both sides gives $c_r(-x)=-c_r(x)$. Thus $c_r$ is a group homomorphism. [given, F2, step 1.1, step 1.2, algebra]

3.1 Under the hypotheses in [F1], the total series satisfy the hypotheses just used, so all preceding formulas apply to virtual classes. For $x,y$ with common first coefficient $u$, steps 1.1 and 1.2 give $c_2(x-y)=c_2(x)+(u^2-c_2(y))-u^2=c_2(x)-c_2(y)$. This proves the stated virtual consequences and completes the proof. [F1, F2, step 1.1, step 1.2, step 2.1, algebra] ∎
