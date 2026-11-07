---
dependency_level: 0
id: lem-equivariant-splitting-from-invertible-kernel-polynomial
kind: lemma
title: Equivariant splitting from a polynomial invertible on the kernel
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-exact-and-short-exact-sequences-of-modules
proof_strategy: direct
axiom_use: No choice axiom is used; the section is specified by a lift-independent formula.
sources:
  references:
    - title: Alexander Carney, The Arithmetic Hodge Index Theorem and Rigidity of Dynamical Systems over Function Fields
      url: https://arxiv.org/pdf/1810.06342v2
      locator: Section 4.2, Corollary 4.4 and its explicit splitting formula
    - title: Alexander Carney, Heights and arithmetic dynamics over finitely generated fields
      url: https://arxiv.org/pdf/2010.07200v1
      locator: Section 8.1, splitting following Lemma 8.4
---

## Statement

Let $F$ be a field, let $D$ be a vector subspace of an $F$-vector space $E$, and let $\pi:E\to V$ be a surjective linear map with kernel $D$. Let $T:E\to E$ be linear with $T(D)\subseteq D$, and let $T_V$ be its induced operator on $V$. Suppose $P\in F[t]$ satisfies $P(T_V)=0$ and the operator $A=P(T)|_D:D\to D$ is bijective. Then restriction of $\pi$ gives an isomorphism $\ker P(T)\to V$. Its inverse $s:V\to E$ is the unique linear section of $\pi$ satisfying $Ts=sT_V$. For any $e\in E$ with $\pi(e)=v$, it is given by
$$s(v)=e-A^{-1}P(T)e.$$
No finite-dimensionality or choice of a family of lifts is required.

## Statement references

[[def-exact-and-short-exact-sequences-of-modules]]

[Carney 2019, Corollary 4.4](https://arxiv.org/pdf/1810.06342v2)

[Carney 2020, Section 8.1](https://arxiv.org/pdf/2010.07200v1)

## Facts & Assumptions

**Given:** The spaces, maps, polynomial and kernel bijection in the Statement.

[F1] A short exact sequence has injective first map, surjective last map, and middle kernel equal to the first image. Vector spaces are modules over their scalar field. ([[def-exact-and-short-exact-sequences-of-modules]])

## Proof

1.1 Since $\pi T=T_V\pi$, induction on powers and linearity give $\pi P(T)=P(T_V)\pi=0$. Thus $P(T)e\in D$ for every $e$. Define $R(e)=e-A^{-1}P(T)e$. This is a linear map on $E$ and $R(d)=0$ for $d\in D$, because $P(T)d=Ad$. Therefore it factors uniquely through $\pi$ as a linear map $s:V\to E$: two lifts differ by an element of $D$ and give the same value of $R$. Existence and uniqueness of that value for each $v$ use surjectivity, without a simultaneous choice of lifts. [given, F1, construct, algebra]

2.1 For every $e$, $\pi R(e)=\pi e$, and $P(T)R(e)=P(T)e-AA^{-1}P(T)e=0$. Hence $\pi s$ is the identity and the image of $s$ lies in $\ker P(T)$. If $e\in\ker P(T)$, then $R(e)=e$; if also $\pi e=0$, then $e\in D$ and $Ae=0$, so $e=0$. Thus restriction of $\pi$ to this kernel is bijective with inverse $s$. [given, F1, step 1.1, algebra]

2.2 On $D$, the operators $A=P(T)|_D$ and $T|_D$ commute, and multiplying that equality by $A^{-1}$ on both sides shows that $A^{-1}$ commutes with $T|_D$. Consequently $TR(e)=R(Te)$ for every $e$. Applying this to any lift of $v$ proves $Ts(v)=s(T_Vv)$. [given, step 1.1, algebra]

3.1 If $u:V\to E$ is another equivariant linear section, polynomial equivariance gives $P(T)u=uP(T_V)=0$. Thus its image lies in $\ker P(T)$, on which $\pi$ has the unique inverse established in step 2.1. Hence $u=s$. This proves all assertions. [given, step 2.1, step 2.2, algebra] ∎
