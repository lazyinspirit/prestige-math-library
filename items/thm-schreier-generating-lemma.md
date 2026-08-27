---
id: thm-schreier-generating-lemma
kind: theorem
title: "The nontrivial Schreier generators generate the subgroup"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-schreier-rewriting-map, lem-schreier-generators-lie-in-the-subgroup, lem-schreier-rewriting-is-invariant-under-free-reduction]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. I. Kargapolov and Ju. I. Merzljakov, Fundamentals of the Theory of Groups"
      url: "https://www.scribd.com/document/1049379192/Fundamentals-of-the-Theory-of-Groups-M-I-Kargapolov-J-I-Merzljakov"
    - title: "Roger C. Lyndon and Paul E. Schupp, Combinatorial Group Theory"
      url: "https://www.scribd.com/document/384118619/CombinatorialGroupTheory"
---

## Statement

Let $F(X)$ be a free group, let $H\le F(X)$, and let $\mathcal T$ be a
Schreier system. Then the nontrivial Schreier generators generate $H$.

## Facts & Assumptions

**Given:** A free group $F(X)$, a subgroup $H\le F(X)$, and a Schreier system $\mathcal T$.

[L1] The Schreier rewrite of a word $w=a_1\cdots a_n$ is $\tau(w)=\sigma_1\cdots\sigma_n$, where $\sigma_j=s(t_{j-1},x)$ if $a_j=x\in X$ and $\sigma_j=s(t_j,x)^{-1}$ if $a_j=x^{-1}\in X^{-1}$; in either case $t_{j-1}a_j=\sigma_j t_j$ ([[def-schreier-rewriting-map]]).

[L2] Every Schreier generator lies in $H$ ([[lem-schreier-generators-lie-in-the-subgroup]]).

[L3] Schreier rewriting is unchanged by free reduction ([[lem-schreier-rewriting-is-invariant-under-free-reduction]]).

## Proof

**Proof technique:** direct.

1.1 Let $h\in H$, and choose any word $w$ on $X\sqcup X^{-1}$ representing $h$. By [L3], free-reducing $w$ does not change its rewrite, so we may assume $w=a_1\cdots a_n$ is reduced. If $t_j$ denotes the chosen representative of the coset of the prefix $a_1\cdots a_j$, and if $\sigma_j$ is the $j$th Schreier rewriting factor from [L1], then $t_{j-1}a_j=\sigma_j t_j$ for every $j$. [L1, L3, given]

2.1 Multiplying the identities from step 1.1 yields $h=w=\sigma_1\cdots \sigma_n t_n=\tau(w)t_n$. Because $h\in H$, the last coset is $H$, so the final representative is $t_n=1$. Thus $h=\tau(w)$ is a product of Schreier generators and their inverses. [L1, step 1.1]

3.1 By [L2], each Schreier generator belongs to $H$, so the same is true for its inverse. After deleting the trivial factors in the product from step 2.1, we obtain an expression for $h$ as a product of nontrivial Schreier generators and their inverses. Therefore those nontrivial generators generate $H$. [L2, step 2.1] ∎
