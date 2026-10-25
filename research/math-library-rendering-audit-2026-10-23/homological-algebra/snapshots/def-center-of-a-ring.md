---
id: def-center-of-a-ring
kind: definition
title: "The center of a ring"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 0
justified_by: []
aliases: []
deps: [def-ring, def-subring, def-commutative-ring]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "W. Crawley-Boevey, Noncommutative Algebra, §1.4 (printed p.3), definition of Z(R)"
      url: "https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf"
    - title: "nLab, Morita equivalence, Definitions (center of an algebra)"
      url: "https://ncatlab.org/nlab/show/Morita+equivalence"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $A$ be a ring. An element $z\in A$ is **central** when $za=az$ for every $a\in A$. The **center** of $A$ is
$$Z(A)=\{z\in A: za=az\text{ for every }a\in A\}.$$
It is a subring of $A$ containing the identity, and it is commutative; consequently $A$ is commutative if and only if $Z(A)=A$. An element of $Z(A)$ is called a central element of $A$. No choice is used.

## Facts & Assumptions

**Given:** A ring $A$ ([[def-ring]]) with zero $0$, identity $1$, and center $Z(A)=\{z\in A: za=az\text{ for every }a\in A\}$.

[F1] $A$ is an abelian group under addition with identity $0$ in which every element has an additive inverse, a monoid under multiplication with identity $1$, and multiplication distributes over addition on both sides ([[def-ring]]).

[F2] A subset $S\subseteq A$ is a subring of $A$ exactly when $1\in S$ and $S$ is closed under addition, additive inverses, and multiplication ([[def-subring]]).

[F3] The ring $A$ is commutative exactly when $xy=yx$ for all $x,y\in A$ ([[def-commutative-ring]]).

## Verification

**Proof technique:** direct.

1.1 Zero and one are central: for every $a\in A$ distributivity gives $a\cdot 0=a\cdot(0+0)=a\cdot 0+a\cdot 0$, and cancelling $a\cdot 0$ in the additive group yields $a\cdot 0=0$, while $0\cdot a=(0+0)\cdot a=0\cdot a+0\cdot a$ similarly yields $0\cdot a=0$; hence $0\cdot a=0=a\cdot 0$ and $0\in Z(A)$. Likewise $1\cdot a=a=a\cdot 1$ for every $a$ by the identity law, so $1\in Z(A)$. [F1, given, algebra]

1.2 The center is closed under addition: if $z,z'\in Z(A)$ and $a\in A$, then $(z+z')\cdot a=z\cdot a+z'\cdot a=a\cdot z+a\cdot z'=a\cdot(z+z')$ by the two distributive laws, so $z+z'\in Z(A)$. [F1, given, algebra]

1.3 The center is closed under multiplication: if $z,z'\in Z(A)$ and $a\in A$, then $(zz')\cdot a=z\cdot(z'\cdot a)=z\cdot(a\cdot z')=(z\cdot a)\cdot z'=(a\cdot z)\cdot z'=a\cdot(z\cdot z')$, using associativity of multiplication together with the centrality of $z$ and then of $z'$; hence $zz'\in Z(A)$. [F1, given, algebra]

1.4 The center is commutative: for $z,z'\in Z(A)$, centrality of $z$ evaluated at $a=z'$ gives $zz'=z'z$, so multiplication in $Z(A)$ is commutative. [given, algebra]

1.5 The equivalence $A$ commutative $\Leftrightarrow$ $Z(A)=A$ holds: if $A$ is commutative then $za=az$ for all $z,a\in A$ by [F3], so every element of $A$ is central and $Z(A)=A$; conversely if $Z(A)=A$, then for arbitrary $x,y\in A$ the element $x$ lies in $Z(A)$ and hence $xy=yx$, so $A$ is commutative by [F3]. [F3, given, algebra]

2.1 The center is closed under additive inverses: if $z\in Z(A)$ and $a\in A$, then $(-z)\cdot a+z\cdot a=(-z+z)\cdot a=0\cdot a=0$ by step 1.1, so $(-z)\cdot a$ is the additive inverse of $z\cdot a$ and therefore equals $-(z\cdot a)$ by uniqueness of additive inverses in $(A,+,0)$; symmetrically $a\cdot(-z)=-(a\cdot z)$. Since $z$ is central, $-(z\cdot a)=-(a\cdot z)$, so $(-z)\cdot a=a\cdot(-z)$ and $-z\in Z(A)$. [F1, step 1.1, given, algebra]

3.1 By steps 1.1, 1.2, 2.1 and 1.3 the subset $Z(A)$ contains $1$ and is closed under addition, additive inverses and multiplication, so it is a subring of $A$ by [F2]; in particular it is a ring in its own right, with the addition, multiplication, zero and identity inherited from $A$. [F2, step 1.1, step 1.2, step 2.1, step 1.3]

4.1 Steps 1.1-1.3 and 2.1 supply the closure conditions of the center with its identity, step 3.1 assembles them into the statement that $Z(A)$ is a subring of $A$, step 1.4 shows that this subring is commutative, and step 1.5 gives the asserted equivalence between commutativity of $A$ and $Z(A)=A$; every element considered lies in $A$ and no choice principle is used. [step 1.1, step 1.2, step 1.3, step 2.1, step 3.1, step 1.4, step 1.5] ∎
