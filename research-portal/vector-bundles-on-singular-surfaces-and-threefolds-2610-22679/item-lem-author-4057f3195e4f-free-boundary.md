---
title: Restriction of finite-support divisors
status: published
research_item: lem-author-4057f3195e4f-free-boundary
dependency_level: 0
---

PDF p. 13: Divisibility of the normalization Picard group

## Prerequisites

- [math:def-group](https://alphabetamath.cc/item/def-group)
- [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism)
- [math:thm-int-comm-ring](https://alphabetamath.cc/item/thm-int-comm-ring)
- [math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)
- [math:thm-subset-of-a-finite-set](https://alphabetamath.cc/item/thm-subset-of-a-finite-set)
- [math:thm-sum-rule](https://alphabetamath.cc/item/thm-sum-rule)


## Statement

Let $S$ be a set and $B\subseteq S$. For any set $T$, write $\mathbb Z^{(T)}$ for the set of functions $f:T\to\mathbb Z$ with finite support $\operatorname{supp}(f)=\{t\in T:f(t)\ne0\}$. Give this set pointwise addition $(f+g)(t)=f(t)+g(t)$, zero function $0_T(t)=0$, and negation $(-f)(t)=-f(t)$.

Let $i:\mathbb Z^{(B)}\to\mathbb Z^{(S)}$ be extension by zero: $i(f)(s)=f(s)$ for $s\in B$ and $i(f)(s)=0$ for $s\in S\setminus B$. Let $r:\mathbb Z^{(S)}\to\mathbb Z^{(S\setminus B)}$ be restriction, $r(g)=g|_{S\setminus B}$.

These sets are abelian groups and these maps are homomorphisms. The sequence $\mathbb Z^{(B)}\xrightarrow{i}\mathbb Z^{(S)}\xrightarrow{r}\mathbb Z^{(S\setminus B)}\to0$ is exact. Here $0$ denotes the group with one element and its unique operation, and the terminal arrow is the unique map to this group. Exactness means $\operatorname{im}(i)=\ker(r)$ and $r$ is surjective. Explicitly, $\operatorname{im}(i)=\{i(f):f\in\mathbb Z^{(B)}\}$ and $\ker(r)=\{g\in\mathbb Z^{(S)}:r(g)=0_{S\setminus B}\}$; surjectivity means that every function in the target has a preimage under $r$.

## Statement references

[math:def-group](https://alphabetamath.cc/item/def-group)

[math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism)

[math:thm-int-comm-ring](https://alphabetamath.cc/item/thm-int-comm-ring)

[math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)

## Facts & Assumptions

[F1] An abelian group has an associative and commutative operation, an identity, and inverses; we use additive notation ([math:def-group](https://alphabetamath.cc/item/def-group), Definition, axioms G1--G3 and the commutativity clause).

[F2] A homomorphism of additive groups is a function $u$ satisfying $u(x+y)=u(x)+u(y)$ for every pair $x,y$ in its domain ([math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism), Definition, the group clause H1).

[F3] Integer addition is well-defined, associative and commutative, has identity $0$, and every integer $n$ has additive inverse $-n$ ([math:thm-int-comm-ring](https://alphabetamath.cc/item/thm-int-comm-ring), Statement and Proof, steps 1.1--1.5).

[F4] A set is finite when it is in bijection with some von Neumann natural number; the empty set is finite ([math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality), Definition and consequence (b)).

[F5] Every subset of a finite set is finite ([math:thm-subset-of-a-finite-set](https://alphabetamath.cc/item/thm-subset-of-a-finite-set), Statement, clause 1).

[F6] The union of two disjoint finite sets is finite ([math:thm-sum-rule](https://alphabetamath.cc/item/thm-sum-rule), Statement, clause 1, two blocks).

**Given:** A set $S$ and a subset $B\subseteq S$, with the finite-support functions, pointwise operations, extension $i$ and restriction $r$ defined in the statement.

**Goal:** Verify that the groups and homomorphisms are well-defined and that the displayed sequence is exact in the explicit sense above.

## Proof

1.1 Fix any set $T$ and $f,g\in\mathbb Z^{(T)}$. Put $U=\operatorname{supp}(f)$ and $V=\operatorname{supp}(g)$, both finite by definition. Since $V\setminus U\subseteq V$, it is finite by [F5]. The sets $U$ and $V\setminus U$ are disjoint, so [F6] makes $U\cup(V\setminus U)=U\cup V$ finite. Outside $U\cup V$ both functions vanish, hence $\operatorname{supp}(f+g)\subseteq U\cup V$ and is finite by [F5]. The additive inverse laws in [F3] imply $-n=0$ exactly when $n=0$, so $\operatorname{supp}(-f)=U$; the zero function has empty support, finite by [F4]. Thus the pointwise operations stay in $\mathbb Z^{(T)}$; the laws in [F3], evaluated at each $t\in T$, give all abelian-group axioms in [F1], also for empty $T$. Extension by zero preserves the support as the same underlying set, and for $g_1\in\mathbb Z^{(S)}$ the set $\operatorname{supp}(r(g_1))=\operatorname{supp}(g_1)\cap(S\setminus B)$ is finite by [F5], so both maps are well-defined. Their formulas give $i(f_1+f_2)=i(f_1)+i(f_2)$ and $r(g_1+g_2)=r(g_1)+r(g_2)$ for $f_1,f_2\in\mathbb Z^{(B)}$ and $g_1,g_2\in\mathbb Z^{(S)}$, so they are homomorphisms by [F2]. For $h\in\mathbb Z^{(S\setminus B)}$, define $\widetilde h(s)=0$ on $B$ and $\widetilde h(s)=h(s)$ on $S\setminus B$. Its support is exactly the finite support of $h$, viewed as a subset of $S$, and $r(\widetilde h)=h$. Hence $r$ is surjective. [F1, F2, F3, F4, F5, F6, given, construct, algebra]

2.1 A function $g\in\mathbb Z^{(S)}$ satisfies $r(g)=0_{S\setminus B}$ exactly when it vanishes outside $B$. In that case $\operatorname{supp}(g|_B)=\operatorname{supp}(g)\cap B$ is finite by [F5], and $g=i(g|_B)$. Conversely, every $i(f)$ vanishes outside $B$ and therefore belongs to $\ker(r)$. This proves $\ker(r)=\operatorname{im}(i)$. Together with the surjectivity in step 1.1, this proves exactness as defined in the statement. The terminal map is a homomorphism because its target has only one element. [F5, given, step 1.1, construct] ∎
