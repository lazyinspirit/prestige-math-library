---
id: lem-qc-tqc-finite-square-cycle-is-boundary
kind: lemma
title: Finite square-lattice cycles are boundaries
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: []
justified_by: []
proof_strategy: direct
axiom_use: "None; the proof is a finite-support calculation over the two-element field."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Eric Dennis, Alexei Kitaev, Andrew Landahl, and John Preskill, Topological quantum memory"
      url: https://arxiv.org/pdf/quant-ph/0110143
    - title: "Alexei Kitaev, Fault-tolerant quantum computation by anyons"
      url: https://arxiv.org/pdf/quant-ph/9707021
---

## Statement

In the infinite square lattice, every finitely supported edge chain over
$\mathbb F_2$ whose incidence at each vertex is even is the boundary of a
finitely supported collection of square faces. The same conclusion holds for
the translated dual square lattice.

## Facts & Assumptions

**Given:** Finitely supported coefficients $H_{i,j},V_{i,j}\in\mathbb F_2$ on the horizontal and vertical edges of the integer square lattice, satisfying the cycle equations

$$H_{i,j}+H_{i-1,j}+V_{i,j}+V_{i,j-1}=0$$

for every $(i,j)\in\mathbb Z^2$. All sums below are finite because the coefficients have finite support.

## Proof

1.1 For each row $j$, sum the cycle equations over $i\in\mathbb Z$. The horizontal terms cancel in pairs, giving $S_j=S_{j-1}$, where $S_j:=\sum_i V_{i,j}$. Finite support gives $S_j=0$ for all sufficiently large $|j|$, so $S_j=0$ for every $j$. Define a face coefficient $F_{i,j}:=\sum_{k>i}V_{k,j}$ in $\mathbb F_2$. For fixed $j$, this coefficient is zero for $i$ sufficiently large by finite support and for $i$ sufficiently negative because then it equals $S_j=0$. It is also zero for all but finitely many rows. Hence $F$ is a finitely supported face chain. [given, construct, algebra]

2.1 The vertical edge $v_{i,j}$ belongs to the boundaries of $f_{i-1,j}$ and $f_{i,j}$, so its coefficient in $\partial F$ is $F_{i-1,j}+F_{i,j}=V_{i,j}$. Thus $\partial F$ and the given chain agree on every vertical edge. [given, step 1.1, algebra]

3.1 The horizontal edge $h_{i,j}$ belongs to the boundaries of $f_{i,j-1}$ and $f_{i,j}$. Its coefficient in $\partial F$ is $F_{i,j-1}+F_{i,j}=\sum_{k>i}(V_{k,j-1}+V_{k,j})$. The cycle equation at $(k,j)$ replaces each summand by $H_{k,j}+H_{k-1,j}$; summing over $k>i$ telescopes to $H_{i,j}$ because the sequence is finitely supported. Thus $\partial F$ and the given chain agree on every horizontal edge, proving $\partial F=(H,V)$. Translating the dual square lattice by $(1/2,1/2)$ identifies it with the same integer grid, so the identical construction proves the dual assertion. [given, step 1.1, step 2.1, algebra] ∎

