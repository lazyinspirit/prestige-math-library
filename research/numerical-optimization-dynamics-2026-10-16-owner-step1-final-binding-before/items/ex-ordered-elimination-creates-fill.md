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
---

## Example

Work over $\mathbb Q$, which is a field, and take

$$A=\begin{pmatrix}2&-1&0\\-1&2&-1\\0&-1&2\end{pmatrix}$$

with vertices $\{0,1,2\}$ and elimination order $(1,0,2)$. The initial structural graph is the path $0-1-2$. Eliminating its middle vertex creates the edge $\{0,2\}$, and the first Schur complement has a nonzero entry in that position. The pivots in the full order are nonzero, so the ordered elimination is defined throughout.

## Facts & Assumptions

**Given:** The displayed symmetric matrix over $\mathbb Q$, the vertex labels, and the elimination order $(1,0,2)$.

[L1] [[def-symmetric-structural-elimination-graph-and-ordering]]: a pivot's remaining neighbors are joined pairwise when that pivot is eliminated.

[L2] [[thm-rat-field]]: the rational numbers with their standard operations form a field.

[L3] [[thm-filled-graph-contains-schur-complement-support]]: assume each pivot $p_k$ is nonzero and define $S^{k+1}_{ij}=S^k_{ij}-S^k_{iv_k}S^k_{v_kj}/p_k$.

[L4] [[thm-filled-graph-contains-schur-complement-support]]: every nonzero off-diagonal entry of each Schur complement is an edge of the corresponding filled graph.

## Verification

1.1 The off-diagonal nonzero entries of $A$ are exactly $A_{01}=A_{10}=-1$ and $A_{12}=A_{21}=-1$, so the initial structural graph is the path with edges $\{0,1\}$ and $\{1,2\}$. The first pivot is $p_0=2\ne0$; by the update in [L3], $S^1=\begin{pmatrix}3/2&-1/2\\-1/2&3/2\end{pmatrix}$. The next pivot is $p_1=3/2\ne0$, and the final pivot is $p_2=3/2-(-1/2)^2/(3/2)=4/3\ne0$. Thus every pivot is nonzero. [given, L1, L2, L3, algebra]

2.1 The first pivot is $v_0=1$, whose later-neighbor set is $\{0,2\}$. By [L1] its elimination adds $\{0,2\}$; the previously computed $S^1_{02}=-1/2$ is nonzero, consistently with the filled-support result [L4]. Thus the edge is a genuine fill edge for this numerical matrix. [given, L1, L4, step 1.1, algebra]

3.1 This ordering creates one structural fill edge. The computation gives a finite example only and supplies no general fill bound. [step 1.1, step 2.1] ∎
