---
id: thm-groups-of-order-thirty-have-a-normal-sylow-subgroup
kind: theorem
title: "Every group of order $30$ has normal Sylow $3$- and $5$-subgroups and is not simple"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-cauchys-theorem-for-finite-groups, thm-left-coset-action-and-its-kernel, thm-sign-is-a-homomorphism, cor-sign-from-disjoint-cycle-structure, thm-image-subgroup-and-kernel-normal, thm-first-isomorphism-theorem-groups, cor-order-of-a-quotient-group, thm-classification-of-groups-of-order-pq, cor-normal-sylow-subgroup-of-a-normal-subgroup-is-normal, def-simple-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Consequences of the Sylow Theorems, Sections 1-5"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf"
pipeline_run: null
---

## Statement

Every group of order $30$ has normal Sylow $3$- and $5$-subgroups and is not simple. See [[thm-cauchys-theorem-for-finite-groups]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Let $G$ be a finite group and let $p$ be prime. If $p\mid|G|$, then $G$ contains an element of order $p$. ([[thm-cauchys-theorem-for-finite-groups]]).

[L2] For $H\le G$, left multiplication gives a transitive action on $G/H$ and a homomorphism $\rho:G\to\operatorname{Sym}(G/H)$ with $$\ker\rho=\operatorname{Core}_G(H).$$ ([[thm-left-coset-action-and-its-kernel]]).

[L3] For every natural $n$, the function $\operatorname{sgn}:S_n\to\{+1,-1\}$ is a group homomorphism. It is surjective exactly when $n\ge2$; for $n=0$ and $n=1$ its image is $\{1\}$. ([[thm-sign-is-a-homomorphism]]).

[L4] A cycle of length $k$ has sign $(-1)^{k-1}$. If $\sigma\in S_n$ and $c(\sigma)$ is the number of cycles after every fixed point is included as a one-cycle, then $$\operatorname{sgn}(\sigma)=(-1)^{n-c(\sigma)}.$$. ([[cor-sign-from-disjoint-cycle-structure]]).

[L5] The image of a group homomorphism is a subgroup and its kernel is a normal subgroup. For every group homomorphism $f:G\to H$, one has $\operatorname{im}f\le H$ and $\ker f\mathrel{\trianglelefteq}G$. ([[thm-image-subgroup-and-kernel-normal]]).

[L6] First isomorphism theorem for groups: $G/\ker f\cong\operatorname{im}f$. For every homomorphism $f:G\to H$, the rule $g\ker f\mapsto f(g)$ is an isomorphism from $G/\ker f$ onto $\operatorname{im}f$. ([[thm-first-isomorphism-theorem-groups]]).

[L7] Let $N\mathrel{\trianglelefteq}G$. If $[G:N]$ is finite, then the quotient group $G/N$ is finite and $$|G/N|=[G:N].$$ In particular, if $G$ is finite, then $$|G/N|=\frac{|G|}{|N|}.$$. ([[cor-order-of-a-quotient-group]]).

[L8] Let $p<q$ be primes. - If $p\nmid(q-1)$, every group of order $pq$ is cyclic. - If $p\mid(q-1)$, there are exactly two isomorphism classes of groups of order $pq$: the cyclic group $C_{pq}$ and one nonabelian semidirect product $C_q\rtimes C_p$. ([[thm-classification-of-groups-of-order-pq]]).

[L9] If $N\trianglelefteq G$ and $P$ is a normal Sylow $p$-subgroup of $N$, then $P\trianglelefteq G$. ([[cor-normal-sylow-subgroup-of-a-normal-subgroup-is-normal]]).

[L10] A group $G$ is simple if $G\ne\{1\}$ and its only normal subgroups are $\{1\}$ and $G$, where normality is as in def-normal-subgroup. ([[def-simple-group]]).

## Proof

**Proof technique:** direct.

1.1 Choose an involution by Cauchy's theorem and use the left regular permutation representation. [L1, L2, L3, L4, L5, L6, L7, L8, L9, L10, given, algebra]

2.1 Left multiplication by the involution is a product of fifteen transpositions, so composing with sign gives a surjection to ${\pm1}$ whose normal kernel has order $15$. [step 1.1, given, algebra]

3.1 The published order-$pq$ classification makes that kernel cyclic. [step 2.1, given, algebra]

4.1 Its Sylow $3$- and $5$-subgroups are normal in the kernel and hence normal in $G$. [step 3.1, given, algebra]

5.1 Either is a nontrivial proper normal subgroup. This proves the stated claim. [step 4.1, given, algebra] ∎
