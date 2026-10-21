---
id: lem-grid-diagram-is-admissible
kind: lemma
title: "A knot grid diagram is admissible"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-grid-diagram-for-an-oriented-knot
  - def-admissible-pointed-heegaard-floer-data
dependency_level: 1
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ciprian Manolescu, Peter Ozsvath, and Sucharit Sarkar, A combinatorial description of knot Floer homology, §3"
      url: "https://arxiv.org/pdf/math/0607691"
      locator: "Lemma 3.5 and its periodic-domain calculation for knot grids"
---

## Statement

Every toroidal grid diagram representing a knot is an admissible $2n$-pointed Heegaard diagram in the stated knot Floer convention: each nonzero periodic domain with zero local multiplicity at every $O$-marking has both positive and negative region coefficients.

## Statement references

[[def-grid-diagram-for-an-oriented-knot|The toroidal grid, its one-component condition, and the $O$/$X$ markings]]

[[def-admissible-pointed-heegaard-floer-data|The definition of multipointed Heegaard admissibility]]

## Facts & Assumptions

**Given:** A grid diagram of grid number $n$ representing one oriented knot.

[F1] [[def-grid-diagram-for-an-oriented-knot]] identifies the $O$-to-$X$ row matching followed by the $X$-to-$O$ column matching as a single $n$-cycle, and every row and column has exactly one marking of each type.

[F2] [[def-admissible-pointed-heegaard-floer-data]] defines admissibility by requiring every nonzero periodic domain with zero multiplicity at all $w$-basepoints to have both positive and negative region coefficients; in a grid, $w=O$ and $z=X$.

## Proof

1.1 Regard the grid torus as the standard Heegaard torus separating the two solid tori of $S^3$, with horizontal circles meridians of the first and vertical circles meridians of the second. The $n$ parallel meridian disks in either solid torus cut it into $n$ balls, one for each row or column annulus. Push the row $O$-to-$X$ arcs into the first solid torus and the column $X$-to-$O$ arcs into the second. Their pushing disks lie in disjoint row or column annuli and are disjoint from the compression disks, so each arc system is simultaneously boundary parallel as required by [F2]. The over/under convention is vertical over horizontal, exactly [F1]'s link. Thus these data represent the same oriented knot and satisfy the topological part of the multipointed definition; it remains to prove its admissibility condition. [F1, F2, given, construct]

1.2 Let $p_{ij}$ be the coefficient of cell $R_{ij}$ in a periodic domain $P$. Because $\partial P$ is a sum of whole horizontal and vertical circles, the coefficient jump across a vertical circle is independent of the row, and the jump across a horizontal circle is independent of the column. Fix reference indices $i_0,j_0$ and set $a_i=p_{i,j_0}$ and $b_j=p_{i_0,j}-p_{i_0,j_0}$. Summing the constant jumps from the reference row and column gives $p_{ij}=a_i+b_j$ for every cell. Since the marking permutation in [F1] is one cycle, number its basepoint pairs in reverse order of knot travel so that row region $A_i$ contains $w_i,z_i$ and column region $B_i$ contains $w_i,z_{i+1}$, as allowed by the convention in [F2]. Then $P=\sum_i a_iA_i+\sum_i b_iB_i$, with local multiplicities $n_{w_i}(P)=a_i+b_i$ and $n_{z_i}(P)=a_i+b_{i-1}$. [F1, F2, construct]

2.1 Suppose $P$ is periodic and all $n_{w_i}(P)=0$. Then $b_i=-a_i$, so $n_{z_i}(P)=a_i-a_{i-1}$ and $\sum_i n_{z_i}(P)=0$. If one $n_{z_i}(P)$ is nonzero, these integer multiplicities include both a positive and a negative value; each is a region coefficient at the corresponding $X$-cell, so $P$ has both signs. [step 1.2, algebra]

3.1 If all $n_{z_i}(P)$ also vanish, then all $a_i$ are the same integer $c$ and all $b_i=-c$. Hence $P=c(\sum_iA_i-\sum_iB_i)=0$, because each of the two sums is the whole torus with coefficient one. Thus a nonzero periodic domain with zero $O$-multiplicity cannot have all $X$-multiplicities zero, and step 2.1 proves it has both signs. By [F2], the grid diagram is admissible. [F2, step 1.2, step 2.1, algebra] ∎
