---
id: thm-qa-finite-abelian-dual-character-orthogonality
kind: theorem
title: Dual-index character orthogonality
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-qa-finite-abelian-character-dual, def-additive-character-of-a-finite-abelian-group, thm-qa-finite-abelian-dual-has-same-cardinality, thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form, def-group-isomorphism-and-automorphism, lem-inverse-of-bijective-group-homomorphism, lem-qa-character-dual-of-a-product-factors, lem-qa-cyclic-group-has-n-characters, lem-qa-finite-character-values-have-unit-modulus, lem-complex-conjugation-and-modulus-laws, thm-complex-nth-roots-and-roots-of-unity, lem-finite-sum-reindexing-and-fubini]
dependency_level: 3
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, version 6"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
---


## Statement

For a finite abelian group $G$ and $x,y\in G$,
$$\sum_{\chi\in\widehat G}\chi(x)\overline{\chi(y)}=\begin{cases}|G|,&x=y,\\0,&x\ne y.\end{cases}$$
This is orthogonality of the columns indexed by group elements. It is proved from cyclic root sums and is not inferred from row orthogonality.

## Facts & Assumptions

**Given:** A finite abelian group $G$ and $x,y\in G$.

[F1] $G$ is isomorphic to a finite product of cyclic groups, with the empty product representing the trivial group ([[thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form]]).

[F2] Characters of a finite product factor coordinatewise ([[lem-qa-character-dual-of-a-product-factors]]).

[F3] On a cyclic factor $C_n=\langle g\rangle$, the character with generator value $\omega_n^k$ is $\chi( jg)=\omega_n^{kj}$ for every integer $j$, where $\omega_n:=\exp(2\pi i/\iota_{\mathbb R}(n))$; these are the $n$ distinct characters ([[lem-qa-cyclic-group-has-n-characters]], [[thm-complex-nth-roots-and-roots-of-unity]]).

[F4] Every value of an additive character of a finite abelian group has modulus one ([[lem-qa-finite-character-values-have-unit-modulus]]); for complex numbers $z$, $z\overline z=|z|^2$ ([[lem-complex-conjugation-and-modulus-laws]]).

[F5] Finite sums over finite products of index sets may be factored as iterated sums ([[lem-finite-sum-reindexing-and-fubini]]).

[F6] $|\widehat G|=|G|$, so the character index set is finite ([[thm-qa-finite-abelian-dual-has-same-cardinality]]).

[F7] An additive character preserves the group operation and sends the identity to $1$ ([[def-additive-character-of-a-finite-abelian-group]]).

[F8] A group isomorphism is a bijective homomorphism ([[def-group-isomorphism-and-automorphism]]).

[F9] The inverse of a bijective group homomorphism is a homomorphism ([[lem-inverse-of-bijective-group-homomorphism]]).

[F10] $\widehat G$ is the set of additive characters of $G$ ([[def-qa-finite-abelian-character-dual]]).

## Proof

1.1 If $G$ is trivial, every additive character sends its identity to $1$ by [F7], so [F10] makes the character set a singleton; the sum is $1=|G|$ and the formula holds. Otherwise fix an invariant-factor isomorphism $\varphi:G\to P=\prod_i C_{n_i}$ from [F1]. By [F8] and [F9], composition with $\varphi$ and $\varphi^{-1}$ gives inverse bijections of the character sets [F10], taking $x,y$ to $a=\varphi(x),b=\varphi(y)$. Thus it suffices to compute the sum for $P$. [F1, F6, F7, F8, F9, F10, construct]

1.2 In each cyclic factor write $a_i=r_i g_i$ and $b_i=s_i g_i$, with $0\le r_i,s_i<n_i$. By [F3] and [F7], a character whose value on $g_i$ is $\omega_{n_i}^k$ has values $\omega_{n_i}^{kr_i}$ and $\omega_{n_i}^{ks_i}$ on $a_i$ and $b_i$. By [F4], $|\omega_{n_i}|=1$, so $\overline{\omega_{n_i}^{ks_i}}=\omega_{n_i}^{-ks_i}$. The character-indexed sum in this coordinate is therefore $\sum_{k=0}^{n_i-1}\omega_{n_i}^{k(r_i-s_i)}$. If $r_i=s_i$ modulo $n_i$, this equals $n_i$. Otherwise $q:=\omega_{n_i}^{r_i-s_i}\ne1$ by distinctness of the roots in [F3], and $q^{n_i}=1$, so $\sum_{k=0}^{n_i-1}q^k=(1-q^{n_i})/(1-q)=0$ by the geometric-sum identity. For $n_i=1$ the first case applies and the sum is $1$. [F3, F4, F7, algebra]

2.1 Under the product-character bijection, finite-sum factorization [F5] makes the sum over $\widehat P$ the product of these cyclic sums. It is therefore $\prod_i n_i$ exactly when every coordinate of $a$ equals the corresponding coordinate of $b$, and is zero otherwise. [step 1.2, F2, F5]

3.1 The coordinate map $\varphi$ is injective, so all coordinates agree exactly when $x=y$; and [F1] gives $|G|=|P|=\prod_i n_i$. The empty product case was handled in step 1.1. This proves the formula. [step 1.1, step 2.1, F1] ∎
