---
id: lem-distinct-minimal-normal-subgroups-centralize-one-another
kind: lemma
title: "Distinct minimal normal subgroups centralize one another"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-commutator-and-commutator-subgroup, def-minimal-normal-subgroup-and-socle, def-normal-subgroup]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "James E. Humphreys, A Course in Group Theory, Chapter 16"
      url: "https://djvu.online/file/3PC3bR3vM2abK"
---

## Statement

Let $G$ be a finite group, and let $M,N \trianglelefteq G$ be distinct minimal normal
subgroups. Then every element of $M$ commutes with every element of $N$.
Equivalently, $[M,N]=1$.

## Facts & Assumptions

**Given:** A finite group $G$ and distinct minimal normal subgroups $M,N \trianglelefteq G$.

[L1] Using the convention of
[[def-commutator-and-commutator-subgroup]], put
$$[M,N]:=\langle [m,n]=mnm^{-1}n^{-1}:m\in M,\ n\in N\rangle.$$

[A1] Because $M$ and $N$ are normal in $G$, the subgroup $[M,N]$ is normal in
$G$ and is contained in both $M$ and $N$.

## Proof

**Proof technique:** direct.

1.1 By [A1], the subgroup $[M,N]$ is a normal subgroup of $G$ contained in $M$. Since $M$ is minimal normal, either $[M,N]=1$ or $[M,N]=M$. [given, A1]

2.1 The same argument with $N$ shows that either $[M,N]=1$ or $[M,N]=N$. Because $M \neq N$, the subgroup $[M,N]$ cannot equal both $M$ and $N$. [given, A1, step 1.1]

3.1 Therefore $[M,N]=1$. By [L1], every commutator $[m,n]$ is trivial, so $mn=nm$ for all $m \in M$ and $n \in N$. [L1, step 2.1] ∎
