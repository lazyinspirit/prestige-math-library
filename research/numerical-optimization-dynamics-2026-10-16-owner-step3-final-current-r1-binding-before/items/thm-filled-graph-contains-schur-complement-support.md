---
id: thm-filled-graph-contains-schur-complement-support
kind: theorem
title: "The filled graph contains every off-diagonal Schur-complement nonzero"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-field, lem-of-zero-mult, lem-of-no-zero-divisors, def-symmetric-structural-elimination-graph-and-ordering]
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
dependency_level: 1

forward_refs: [ex-numerical-cancellation-within-filled-graph]
---

## Statement

Let $F$ be a field, let $A\in M_{n\times n}(F)$ satisfy $A_{ij}=A_{ji}$ for
all $i,j<n$, and fix an elimination ordering. Let $G_k=(V_k,E_k)$ be its
symbolic filled graphs from
[[def-symmetric-structural-elimination-graph-and-ordering]]. Put $S^0=A$.
Assume each pivot $p_k:=S^k_{v_kv_k}$ is nonzero, and for every pair of
remaining vertices define the Schur update

$$S^{k+1}_{ij}:=S^k_{ij}-\frac{S^k_{iv_k}S^k_{v_kj}}{p_k}.$$

Then for every stage $k$, each nonzero off-diagonal entry $S^k_{ij}$ has
$\{i,j\}\in E_k$. At each elimination step, the later neighbors of the
eliminated vertex form a clique in the next filled graph. Thus the symbolic
filled graph contains each numerical Schur complement's off-diagonal support;
equality of these off-diagonal patterns is not asserted.

## Facts & Assumptions

**Given:** A field $F$, a symmetric matrix in $M_{n\times n}(F)$, a fixed elimination ordering, nonzero pivots, and the Schur-complement update in the Statement.

[L1] [[def-symmetric-structural-elimination-graph-and-ordering]]: at step $k$, the graph deletes $v_k$, retains edges between remaining vertices, and adds every edge between distinct vertices of $N_k(v_k)$.

[L2] [[def-field]]: division by a nonzero pivot means multiplication by its multiplicative inverse.

[L3] [[lem-of-zero-mult]]: in a field, $0\cdot a=0$ for every $a$.

[L4] [[lem-of-no-zero-divisors]]: in a field, $ab=0$ implies $a=0$ or $b=0$.

[A1] For every $k<n$, $p_k\ne0$ and $S^{k+1}_{ij}=S^k_{ij}-S^k_{iv_k}S^k_{v_kj}/p_k$ for all $i,j\in V_{k+1}$.

## Proof

1.1 At stage $0$, $S^0=A$ and the initial edge set consists exactly of the unordered off-diagonal pairs with nonzero matrix entry. Hence every nonzero off-diagonal entry of $S^0$ corresponds to an edge of $G_0$. [given, L1, algebra]

1.2 Suppose the support inclusion holds at stage $k$. If $S^{k+1}_{ij}\ne0$ for distinct $i,j\in V_{k+1}$, then at least one of $S^k_{ij}$ and $S^k_{iv_k}S^k_{v_kj}/p_k$ is nonzero. In the first case, the induction hypothesis gives $\{i,j\}\in E_k$, and the update retains that edge. In the second case, the numerator is nonzero because a zero numerator would give a zero quotient by [L2] and [L3]; then [L4] forces both pivot couplings to be nonzero. The induction hypothesis gives $\{i,v_k\},\{v_k,j\}\in E_k$, so $i,j\in N_k(v_k)$ and the update adds $\{i,j\}$. Thus every such nonzero is supported by an edge of $G_{k+1}$. [A1, L1, L2, L3, L4, induction, algebra]

2.1 The base case and induction step prove the support inclusion at every stage. For any two distinct later neighbors of $v_k$, the graph update inserts their pair by definition, so the later-neighbor set is a clique in $G_{k+1}$. [step 1.1, step 1.2, L1, induction] ∎

## Remarks

The conclusion is a support inclusion, not equality: an arithmetic subtraction can cancel a nonzero entry while the symbolic edge remains. The companion page gives an explicit cancellation calculation in [[ex-numerical-cancellation-within-filled-graph]]. No factorization-cost bound follows from this graph statement.
