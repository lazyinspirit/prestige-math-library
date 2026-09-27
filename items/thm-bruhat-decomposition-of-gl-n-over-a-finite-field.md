---
id: thm-bruhat-decomposition-of-gl-n-over-a-finite-field
kind: theorem
title: Bruhat decomposition of GL_n over a finite field
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-gaussian-elimination-produces-a-pivot-permutation, lem-rank-matrices-determine-the-pivot-permutation, def-standard-subgroups-of-gl-n-over-a-finite-field, def-weyl-group-and-length-for-finite-gl-n, def-symmetric-group]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Example 4.5 and Lemma 4.7, printed p. 18"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
    - title: "Jay Taylor, Finite Reductive Groups - Exercise 4.28, printed pp. 38-39"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement

Let $n\ge1$, let $q$ be a prime power, put $G=\operatorname{GL}_n(\mathbb F_q)$
with standard Borel subgroup $B$ of invertible upper triangular matrices
([[def-standard-subgroups-of-gl-n-over-a-finite-field]]), and for
$\sigma\in S_n=\operatorname{Sym}(\{1,\dots,n\})$ let $P_\sigma\in G$ be the
permutation matrix with $(P_\sigma)_{ij}=1$ exactly when $i=\sigma(j)$ and let
$W=N/T\cong S_n$ be the Weyl group, so that $\sigma\mapsto w_\sigma=P_\sigma T$
is an isomorphism $S_n\to W$ ([[def-weyl-group-and-length-for-finite-gl-n]]).
Then:

1. **Covering.** Every $g\in G$ admits a factorisation $g=b_1P_\sigma b_2$ with
   $\sigma\in S_n$ and $b_1,b_2\in B$; equivalently
   $G=\bigcup_{\sigma\in S_n}BP_\sigma B$.
2. **Separation.** The southwest rank matrix of an element $x\in BP_\sigma B$
   satisfies $r_{i,j}(x)=\#\{\,k\le j:\sigma(k)\ge i\,\}$
   ([[lem-rank-matrices-determine-the-pivot-permutation]]), hence determines
   $\sigma$; consequently $BP_\sigma B\cap BP_\tau B=\varnothing$ whenever
   $\sigma\ne\tau$ and the double coset $BxB$ of any $x\in G$ equals exactly one
   of the sets $BP_\sigma B$.
3. **Decomposition.** $G$ is the disjoint union
   $$G=\bigsqcup_{\sigma\in S_n}BP_\sigma B,$$
   so the map $\sigma\mapsto BP_\sigma B$ is a bijection from $S_n$ onto the set
   of double cosets $BxB$ of $G$, and $B\backslash G/B$ is in bijection with
   $S_n$ and with the Weyl group $W$.

## Facts & Assumptions

**Given:** An integer $n\ge1$, a prime power $q$, the group $G=\operatorname{GL}_n(\mathbb F_q)$ with standard Borel subgroup $B$ of invertible upper triangular matrices, the symmetric group $S_n$ with permutation matrices $P_\sigma\in G$ and the Weyl group $W=N/T\cong S_n$.

[L1] Every $g\in G$ has a factorisation $g=b_1P_\sigma b_2$ with $b_1,b_2\in B$ and a permutation matrix $P_\sigma$, $\sigma\in S_n$ ([[lem-gaussian-elimination-produces-a-pivot-permutation]]).

[L2] $B=\{\,b\in G:b\text{ is upper triangular}\,\}$ is a subgroup of $G$ ([[def-standard-subgroups-of-gl-n-over-a-finite-field]]).

[L3] For $g\in M_n(\mathbb F_q)$ and $1\le i,j\le n$ let $r_{i,j}(g)$ denote the rank of the submatrix of $g$ on the rows $i,\dots,n$ and the columns $1,\dots,j$. If $g\in BP_\sigma B$ then $r_{i,j}(g)=\#\{\,k\le j:\sigma(k)\ge i\,\}$, and, for $g\in G$, the rank matrix $(r_{i,j}(g))_{1\le i,j\le n}$ determines $\sigma$ uniquely ([[lem-rank-matrices-determine-the-pivot-permutation]]).

[L4] $W=N/T$ is a group and $\sigma\mapsto w_\sigma=P_\sigma T$ is an isomorphism of groups $S_n\to W$, so that every element of $W$ has the form $w_\sigma$ for exactly one $\sigma\in S_n$; in particular $|W|=|S_n|$ ([[def-weyl-group-and-length-for-finite-gl-n]], [[def-symmetric-group]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] every $g\in G$ can be written $g=b_1P_\sigma b_2$ with $b_1,b_2\in B$ and $\sigma\in S_n$; since $B$ is a subgroup of $G$ by [L2], this says $g\in BP_\sigma B$. Hence the union of the sets $BP_\sigma B$ over $\sigma\in S_n$ is all of $G$. [L1, L2]

1.2 Suppose $x\in BP_\sigma B\cap BP_\tau B$ for $\sigma,\tau\in S_n$. Applying the first assertion of [L3] to $x\in BP_\sigma B$ and to $x\in BP_\tau B$ gives, for every pair $(i,j)$ of indices, $r_{i,j}(x)=\#\{\,k\le j:\sigma(k)\ge i\,\}$ and $r_{i,j}(x)=\#\{\,k\le j:\tau(k)\ge i\,\}$; hence the rank matrices of $\sigma$ and $\tau$ in the sense of [L3] coincide, and the second assertion of [L3] yields $\sigma=\tau$. [L3]

2.1 In particular, if $\sigma,\tau\in S_n$ satisfy $\sigma\ne\tau$, then no element lies in $BP_\sigma B\cap BP_\tau B$, that is $BP_\sigma B\cap BP_\tau B=\varnothing$; and for $x\in G$ step 1.1 provides some $\sigma$ with $x\in BP_\sigma B$, so $BxB=BP_\sigma B$ equals one of the displayed sets. [step 1.1, step 1.2]

3.1 Combining steps 1.1 and 2.1, the family $(BP_\sigma B)_{\sigma\in S_n}$ consists of pairwise disjoint subsets of $G$ whose union is $G$; that is exactly the displayed disjoint union $G=\bigsqcup_{\sigma\in S_n}BP_\sigma B$. Consequently the assignment $\sigma\mapsto BP_\sigma B$ is a well-defined injection $S_n\to\{BxB:x\in G\}$ (distinct $\sigma$ give disjoint double cosets) and it is surjective, because every $x\in G$ lies in the set $BP_\sigma B=BxB$ for the $\sigma$ provided by step 1.1. [step 1.1, step 2.1, L2]

4.1 Composing the bijection $\sigma\mapsto BP_\sigma B$ of step 3.1 with the inverse of the isomorphism $S_n\to W$, $\sigma\mapsto w_\sigma$, of [L4] gives a bijection $W\to\{BxB:x\in G\}$; hence the double coset set $B\backslash G/B$ has exactly $|W|=|S_n|$ elements, indexed by the elements of $W$. [step 3.1, L4] ∎

**Remark.** The two ingredients are independent: [[lem-gaussian-elimination-produces-a-pivot-permutation]] produces the factorisation by explicit triangular row and column operations and so gives the covering, while [[lem-rank-matrices-determine-the-pivot-permutation]] shows that the southwest rank matrix is constant on double cosets and separates them, which gives the disjointness. No choice principle is used: the elimination of the first lemma is deterministic and the rank matrix is a finite invariant.
