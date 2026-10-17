---
id: ex-ordered-elimination-creates-fill
kind: example
title: "Eliminating the middle vertex creates structural fill"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-symmetric-structural-elimination-graph-and-ordering, thm-filled-graph-contains-schur-complement-support, thm-rat-field]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Yousef Saad, Iterative Methods for Sparse Linear Systems, 2nd ed., Chapter 3 §§3.2.1, 3.3.2 and 3.6, printed pp. 77–83 and 96–98"
      url: "https://www-users.cse.umn.edu/~saad/IterMethBook_2ndEd.pdf"
    - title: "Prabhakar Poupart and Jingjing Wan, CS475/CS675 Lecture 4: Sparse Gaussian Elimination, Graph Representation, slides 6–10, University of Waterloo, May 12, 2016"
      url: "https://cs.uwaterloo.ca/~ppoupart/teaching/cs475-spring16/slides/cs475-lecture4.pdf"
dependency_level: 2
---

## Example

Work over $\mathbb Q$, which is a field, and take

$$A=\begin{pmatrix}2&-1&0\\-1&2&-1\\0&-1&2\end{pmatrix}$$

with vertices $\{0,1,2\}$ and elimination order $(1,0,2)$. The initial structural graph is the path $0-1-2$. Eliminating its middle vertex creates the edge $\{0,2\}$, and the first Schur complement has a nonzero entry in that position. The pivots in the full order are nonzero, so the ordered elimination is defined throughout.

## Facts & Assumptions

**Given:** The displayed symmetric matrix over $\mathbb Q$, the vertex labels, and the elimination order $(1,0,2)$.

[L1] [[def-symmetric-structural-elimination-graph-and-ordering]]: a pivot's remaining neighbors are joined pairwise when that pivot is eliminated.

[L2] [[thm-rat-field]]: the rational numbers with their standard operations form a field.

[A1] Use the Schur-update convention $S^0=A$: at stage $k$, set $p_k=S^k_{v_kv_k}$ and, if $p_k\ne0$, define $S^{k+1}_{ij}=S^k_{ij}-S^k_{iv_k}S^k_{v_kj}/p_k$ for the remaining vertices $i,j$. Each update is defined after its current pivot has been checked.

[L4] [[thm-filled-graph-contains-schur-complement-support]]: for a symmetric matrix over a field and a fixed ordering, if every pivot in the Schur updates is nonzero, every nonzero off-diagonal entry of each Schur complement is an edge of the corresponding filled graph.

## Verification

1.1 The off-diagonal nonzero entries of $A$ are exactly $A_{01}=A_{10}=-1$ and $A_{12}=A_{21}=-1$, so the initial structural graph is the path with edges $\{0,1\}$ and $\{1,2\}$. The first pivot is $p_0=A_{11}=2\ne0$, so [A1] defines $S^1=\begin{pmatrix}3/2&-1/2\\-1/2&3/2\end{pmatrix}$ on the remaining labels $(0,2)$. Now $p_1=S^1_{00}=3/2\ne0$, so the next update is defined and gives $S^2_{22}=3/2-(-1/2)^2/(3/2)=4/3$. Hence $p_2=4/3\ne0$, and its update leaves the empty matrix. Thus all three pivots are nonzero and every stage is defined. [given, A1, L1, L2, algebra]

2.1 The first eliminated vertex is $v_0=1$, whose later-neighbor set is $\{0,2\}$. By [L1] its elimination adds the previously absent edge $\{0,2\}$; the computed $S^1_{02}=-1/2$ is nonzero. Since $A$ is symmetric over the field $\mathbb Q$ and step 1.1 verifies all pivots, [L4] applies to these Schur complements. After the first elimination only two vertices remain, so later eliminations cannot join a new pair. Thus this ordering creates exactly one fill edge, realized by a numerical nonzero. [given, L1, L2, L4, step 1.1, algebra]

3.1 This ordering creates one structural fill edge. The computation gives a finite example only and supplies no general fill bound. [step 1.1, step 2.1] ∎
