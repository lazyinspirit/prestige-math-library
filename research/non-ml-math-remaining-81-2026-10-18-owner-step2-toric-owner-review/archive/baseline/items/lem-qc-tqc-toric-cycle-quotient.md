---
id: lem-qc-tqc-toric-cycle-quotient
kind: lemma
title: Toric cycle classes are determined by two winding parities
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-qc-tqc-periodic-square-cellulation
  - lem-qc-tqc-toric-incidence-ranks
justified_by: []
proof_strategy: direct
axiom_use: "None; all chains and bases are finite over F2."
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

Let $Z_1$ be the space of primal edge chains with even incidence at every
vertex, and let $B_1$ be the span of the face boundaries. Then $B_1\subseteq
Z_1$, the quotient $Z_1/B_1$ has dimension two, and the two winding
parities give coordinates on that quotient. The same statement holds for
dual edge chains, with dual vertex boundaries in place of face boundaries.
The horizontal loop $\gamma_h=\sum_i h_{i,0}$ has winding pair $(1,0)$,
and the vertical loop $\gamma_v=\sum_j v_{0,j}$ has pair $(0,1)$; their dual
counterparts give the corresponding basis of the dual quotient.
The horizontal loop $\gamma_h=\sum_i h_{i,0}$ has winding pair $(1,0)$,
and the vertical loop $\gamma_v=\sum_j v_{0,j}$ has pair $(0,1)$; their dual
counterparts give the corresponding basis of the dual quotient.

## Facts & Assumptions

**Given:** The periodic square cellulation for $L\ge3$. Here $\mathbb F_2=\{0,1\}$ with addition modulo two, and $\mathbb F_2^S$ is the coordinate vector space on a finite set $S$.

[F1] [[def-qc-tqc-periodic-square-cellulation]]: there are $L^2$ vertices and faces and $2L^2$ edges, with horizontal and vertical edges indexed periodically.

[F2] [[lem-qc-tqc-toric-incidence-ranks]]: the span of face boundaries has dimension $L^2-1$, and the vertex-edge and dual incidence graphs are connected.

## Proof

1.1 The primal vertex-edge graph has the explicit spanning tree $T=\{h_{i,0}:0\le i<L-1\}\cup\{v_{i,j}:i\in\mathbb Z_L,\ 0\le j<L-1\}$. The horizontal edges form a path through row zero, and each other row is attached to that path by one vertical column path; hence $T$ is connected and has no cycle. For each edge $e\notin T$, add $e$ to the unique tree path between its endpoints. This gives a cycle $\gamma_e$ containing $e$ and no other edge outside $T$. These cycles are independent because the coefficient of each non-tree edge in a linear combination is its own coefficient. They span $Z_1$: subtract from any cycle the $\gamma_e$ corresponding to its non-tree edges; the remainder is an even-incidence chain supported on the tree, and a nonempty finite forest has a leaf of odd degree, so the remainder is zero. Thus $\dim Z_1=|E|-(|V|-1)=L^2+1$. [given, F1, construct, algebra]

2.1 Every face boundary has even incidence at each vertex, so $B_1\subseteq Z_1$. By [F2], $\dim B_1=L^2-1$. For a cycle $c$, define $w_h^k(c)=\sum_j c(h_{k,j})$ and $w_v^\ell(c)=\sum_i c(v_{i,\ell})$, with all sums in $\mathbb F_2$. Summing the even-incidence equations over column $k$ shows $w_h^k=w_h^{k-1}$; summing over row $\ell$ shows $w_v^\ell=w_v^{\ell-1}$. Thus the two parities $w_h,w_v$ are independent of the chosen cuts. Each face boundary crosses every such cut zero or two times, so both parities vanish on $B_1$. [given, F1, F2, step 1.1, algebra]

3.1 The horizontal fundamental loop $\gamma_h=\sum_i h_{i,0}$ has $(w_h,w_v)=(1,0)$, and the vertical fundamental loop $\gamma_v=\sum_j v_{0,j}$ has $(w_h,w_v)=(0,1)$. Therefore no nonzero combination of these loops lies in $B_1$. A basis of $B_1$ together with $\gamma_h,\gamma_v$ is an independent family of $(L^2-1)+2=L^2+1$ cycles, which is the dimension of $Z_1$ from step 1.1. It is therefore a basis of $Z_1$, proving that the winding map identifies $Z_1/B_1$ with $\mathbb F_2^2$. The dual square cellulation has the same coordinate graph and incidence counts, so the identical argument proves its two winding coordinates. [F1, F2, step 1.1, step 2.1, algebra] ∎

