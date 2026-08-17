---
id: lem-nontrivial-normal-subgroup-of-a-solvable-group-has-an-abelian-normal-subgroup
kind: lemma
title: "A nontrivial normal subgroup of a solvable group contains a nontrivial abelian subgroup normal in the whole group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-derived-series-solvable-group-and-derived-length, thm-subgroups-and-quotients-of-solvable-groups-are-solvable, thm-derived-subgroup-is-characteristic-and-abelianization-is-universal, lem-characteristic-subgroups-are-normal-and-characteristic-is-transitive, lem-characteristic-subgroup-of-a-normal-subgroup-is-normal, thm-quotient-abelian-iff-contains-commutator-subgroup, def-normal-subgroup]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "David A. Craven, Finite Group Theory, Theorem 2.13 (the claim opening its proof)"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf"
pipeline_run: null
---

## Statement

Let $Q$ be a solvable group and let $N\trianglelefteq Q$ with $N\ne1$. Then $N$
contains a subgroup $A\ne1$ that is abelian and normal in $Q$.

## Facts & Assumptions

**Given:** A solvable group $Q$ and a normal subgroup $N\trianglelefteq Q$ with $N\ne1$.

[L1] The derived series of a group $N$ is $N^{(0)}=N$, $N^{(r+1)}=[N^{(r)},N^{(r)}]$; $N$ is solvable when $N^{(n)}=1$ for some $n\in\mathbb N$, and its derived length is the least such $n$. The trivial group has derived length $0$ ([[def-derived-series-solvable-group-and-derived-length]]).

[L2] Every subgroup and every quotient of a solvable group is solvable; no finiteness hypothesis is required ([[thm-subgroups-and-quotients-of-solvable-groups-are-solvable]]).

[L3] For every group $G$, the derived subgroup $G'=[G,G]$ is characteristic, hence normal ([[thm-derived-subgroup-is-characteristic-and-abelianization-is-universal]]).

[L4] If $K\operatorname{char}H$ and $H\operatorname{char}G$, then $K\operatorname{char}G$ ([[lem-characteristic-subgroups-are-normal-and-characteristic-is-transitive]]).

[L5] If $K$ is characteristic in $N$ and $N\trianglelefteq G$, then $K\trianglelefteq G$ ([[lem-characteristic-subgroup-of-a-normal-subgroup-is-normal]]).

[L6] Let $N\trianglelefteq G$. Then $G/N$ is abelian if and only if $[G,G]\subseteq N$ ([[thm-quotient-abelian-iff-contains-commutator-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 $N$ is a subgroup of the solvable group $Q$, so $N$ is solvable by [L2]. Let $n$ be its derived length, so $N^{(n)}=1$ and $N^{(r)}\ne1$ for $r<n$ by the leastness in [L1]. Since $N\ne1$ and the trivial group is the only group of derived length $0$, we have $n\ge1$. [L1, L2, given]

2.1 Put $A:=N^{(n-1)}$. Then $A\ne1$ by the leastness in step 1.1, and $A\le N$ because each term of the derived series lies in the preceding one by [L1]. [L1, step 1.1]

2.2 $[A,A]=N^{(n)}=1$ by [L1] and step 1.1, so $A/1$ is abelian by [L6] applied to the trivial normal subgroup of $A$; that is, $A$ is abelian. [L1, L6, step 1.1]

3.1 Each term of the derived series is characteristic in the preceding term by [L3], so iterating [L4] along $N^{(n-1)}\operatorname{char}\cdots\operatorname{char}N^{(0)}=N$ makes $A$ characteristic in $N$. [L1, L3, L4, step 2.1]

4.1 $A$ is characteristic in $N$ and $N\trianglelefteq Q$, so $A\trianglelefteq Q$ by [L5]. With steps 2.1 and 2.2, $A$ is a nontrivial abelian subgroup of $N$ that is normal in $Q$. This proves the stated claim. [L5, given, step 2.1, step 2.2, step 3.1] ∎
