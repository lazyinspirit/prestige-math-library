---
id: ex-numerical-cancellation-within-filled-graph
kind: example
title: "Numerical cancellation can remove an entry from the structural pattern"
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
---

## Example

Work over $\mathbb Q$, which is a field, and take

$$A=\begin{pmatrix}3&1&1/2\\1&2&1\\1/2&1&3\end{pmatrix}$$

with vertices $\{0,1,2\}$ and elimination order $(1,0,2)$. The initial structural graph is a triangle. After eliminating vertex $1$, the numerical entry between vertices $0$ and $2$ cancels to zero, although the symbolic graph retains that edge. Every pivot in this ordering is nonzero.

## Facts & Assumptions

**Given:** The displayed symmetric matrix over $\mathbb Q$, the vertex labels, and the elimination order $(1,0,2)$.

[L1] [[def-symmetric-structural-elimination-graph-and-ordering]]: the graph update retains existing edges between remaining vertices and completes the later-neighbor set to a clique.

[L2] [[thm-rat-field]]: the rational numbers with their standard operations form a field.

[L3] [[thm-filled-graph-contains-schur-complement-support]]: assume each pivot $p_k$ is nonzero and define $S^{k+1}_{ij}=S^k_{ij}-S^k_{iv_k}S^k_{v_kj}/p_k$.

[L4] [[thm-filled-graph-contains-schur-complement-support]]: every nonzero off-diagonal entry of each Schur complement is an edge of the corresponding filled graph.

## Verification

1.1 All three off-diagonal positions of $A$ are nonzero, so the initial graph has edges $\{0,1\}$, $\{0,2\}$, and $\{1,2\}$. Eliminating vertex $1$ leaves $\{0,2\}$ as a later-neighbor pair, and [L1] retains its edge in the filled graph. [given, L1, algebra]

2.1 The first pivot is $2$, and the update in [L3] gives $S^1_{02}=1/2-(1)(1)/2=0$. The two remaining diagonal entries are $3-1/2=5/2$, so the last two pivots are both $5/2$ and are nonzero. Thus all pivots are nonzero while the numerical support loses $\{0,2\}$. [given, L2, L3, step 1.1, algebra]

3.1 By [L4], the filled graph contains the numerical support; step 1.1 shows its edge $\{0,2\}$ remains, while step 2.1 shows the corresponding numerical entry is zero. Thus the inclusion is strict in this example. [L1, L4, step 1.1, step 2.1] ∎
