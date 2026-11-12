---
title: Integer multiplication on rational vector spaces
status: published
research_item: lem-author-4b6f215bcf3b-rational-module-multiplication
dependency_level: 0
---

PDF p. 6: Finite-coefficient comparison

## Prerequisites

- [math:def-vector-space](https://alphabetamath.cc/item/def-vector-space)
- [math:def-left-and-right-modules](https://alphabetamath.cc/item/def-left-and-right-modules)
- [math:def-rationals](https://alphabetamath.cc/item/def-rationals)
- [math:def-rat-operations](https://alphabetamath.cc/item/def-rat-operations)
- [math:thm-rat-field](https://alphabetamath.cc/item/thm-rat-field)
- [math:def-group-isomorphism-and-automorphism](https://alphabetamath.cc/item/def-group-isomorphism-and-automorphism)


## Statement

For a rational vector space $V$ and a positive integer $n$, multiplication by $n$ is an automorphism of the underlying abelian group. Here a rational vector space means a vector space over the field $\mathbb Q$, equivalently a module over $\mathbb Q$ with unital scalar action. The scalar denoted by $n$ is its canonical image $n_{\mathbb Q}=[(n,1)]$ in $\mathbb Q$, and multiplication by $n$ means the map $m_n:V\to V$, $m_n(v)=n_{\mathbb Q}v$; this agrees with adding $v$ to itself $n$ times. An automorphism of the underlying abelian group means a bijective additive map $V\to V$.

## Statement references

[math:def-vector-space](https://alphabetamath.cc/item/def-vector-space)

[math:def-left-and-right-modules](https://alphabetamath.cc/item/def-left-and-right-modules)

[math:def-rationals](https://alphabetamath.cc/item/def-rationals)

[math:def-rat-operations](https://alphabetamath.cc/item/def-rat-operations)

[math:thm-rat-field](https://alphabetamath.cc/item/thm-rat-field)

[math:def-group-isomorphism-and-automorphism](https://alphabetamath.cc/item/def-group-isomorphism-and-automorphism)

## Facts & Assumptions

**Given:** A rational vector space $V$ and a positive integer $n$; write $n_{\mathbb Q}=[(n,1)]$.

**Goal:** Prove that $m_n(v)=n_{\mathbb Q}v$ is an automorphism of the additive group of $V$.

[F1] The vector-space axioms give an abelian additive group and a scalar action satisfying $a(u+v)=au+av$, $(a+b)v=av+bv$, $(ab)v=a(bv)$ and $1v=v$ for $a,b\in\mathbb Q$ and $u,v\in V$. These are axioms (V1)–(V5) of [math:def-vector-space](https://alphabetamath.cc/item/def-vector-space). The definition of a unital left module over $\mathbb Q$ requires the same abelian-group structure and exactly these four scalar-action axioms; since $\mathbb Q$ is a field, the module and vector-space definitions therefore agree. [math:def-left-and-right-modules](https://alphabetamath.cc/item/def-left-and-right-modules) [math:thm-rat-field](https://alphabetamath.cc/item/thm-rat-field)

[F2] In the rational pair model, $[(a,b)]=[(c,d)]$ exactly when $ad=cb$; $0=[(0,1)]$, $1=[(1,1)]$, products are $[(a,b)][(c,d)]=[(ac,bd)]$, and the reciprocal of a nonzero $[(a,b)]$ is $[(b,a)]$. The rational operations are well-defined and make $\mathbb Q$ a field. [math:def-rationals](https://alphabetamath.cc/item/def-rationals) [math:def-rat-operations](https://alphabetamath.cc/item/def-rat-operations) [math:thm-rat-field](https://alphabetamath.cc/item/thm-rat-field)

[F3] A group isomorphism is a bijective group homomorphism; an isomorphism from a group to itself is an automorphism. For an additive group, being a homomorphism means preserving addition. [math:def-group-isomorphism-and-automorphism](https://alphabetamath.cc/item/def-group-isomorphism-and-automorphism)

## Proof

**Given:** $V$ and $n>0$ as in the statement.

1.1 Since $n>0$, the integer $n$ is nonzero, so $[(n,1)]\ne[(0,1)]$: equality would force $n\cdot1=0\cdot1$ by the pair criterion in [F2]. Thus $b=[(1,n)]=1/n_{\mathbb Q}$ is a well-defined rational scalar and $n_{\mathbb Q}b=bn_{\mathbb Q}=1$ by [F2]. Scalar multiplication therefore defines maps $m_n(v)=n_{\mathbb Q}v$ and $s_n(v)=bv$ from $V$ to itself; each is additive by $a(u+v)=au+av$ in [F1]. Also $n_{\mathbb Q}$ is the sum of $n$ copies of $1$: the rational addition rule gives $[(k,1)]+[(1,1)]=[(k+1,1)]$, and induction starts at $[(1,1)]=1$. Induction using $(a+b)v=av+bv$ and $1v=v$ in [F1] then identifies $m_n(v)$ with the sum of $n$ copies of $v$. [given, F1, F2, algebra]

2.1 For every $v\in V$, scalar associativity and the unit axiom in [F1] give $s_n(m_n(v))=(bn_{\mathbb Q})v=v$ and $m_n(s_n(v))=(n_{\mathbb Q}b)v=v$. Hence $m_n$ is injective (apply $s_n$ to any equality of its values) and surjective (every $w\in V$ equals $m_n(s_n(w))$). Since $m_n$ is additive by step 1.1, it is an automorphism of the underlying abelian group by [F3], with inverse $s_n$. [F1, F3, step 1.1] ∎
