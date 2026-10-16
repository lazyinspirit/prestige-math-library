---
id: lem-qc-cz-matching-pauli-frame-action
kind: lemma
title: "Controlled-Z matching action on a Pauli frame"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-finite-simple-graph, def-qc-controlled-phase-rotation, def-qc-binary-adjacency-matrix, def-qc-phase-aware-n-qubit-pauli-group, def-qc-tensor-register-and-permutation]
justified_by: []
dependency_level: 8
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415, §20.6"
      url: https://arxiv.org/pdf/1907.09415
    - title: "Robert Raussendorf, Daniel E. Browne, and Hans J. Briegel, Measurement-based quantum computation on cluster states, §II B"
      url: https://arxiv.org/pdf/quant-ph/0301052
---

## Statement

Let $n\ge0$ and let $M$ be a matching, meaning a set of pairwise disjoint
two-element subsets of the ordered wire set $\{1,\ldots,n\}$. Give the graph
$G_M=(\{1,\ldots,n\},M)$ the vertex order $1,\ldots,n$, so vertex $j$ is
coordinate $j$ (position $j-1$ in the zero-based vertex list) of its binary
adjacency matrix. Let $A_M:=A_2(G_M)\in M_n(\mathbb F_2)$ from
[[def-qc-binary-adjacency-matrix]], so $(A_M)_{jk}=1$ exactly when
$\{j,k\}\in M$. For $x,z\in\mathbb F_2^n$, all coordinates use this wire
order, and binary dot products mean $a\cdot b:=\sum_{j=1}^n a_jb_j$ in
$\mathbb F_2$. Define $q_M(x):=\sum_{\{j,k\}\in M}x_jx_k\in\mathbb F_2$.
For $n\ge1$, put
$P(x,z):=X^xZ^z=P(0,x,z)$ as in
[[def-qc-phase-aware-n-qubit-pauli-group]]. For $n=0$, the unique empty
vectors satisfy $X^x=Z^z=I_{\mathbb C}$ and we define $P(x,z)=I_{\mathbb C}$;
the register is the empty tensor product from
[[def-qc-tensor-register-and-permutation]]. With
$CZ_M:=\prod_{\{j,k\}\in M}CZ_{jk}$,

$$CZ_M P(x,z)=(-1)^{q_M(x)}P(x,z\oplus A_Mx)CZ_M.$$

For the empty wire set or empty matching the sum is zero and the formula is
the identity.

## Facts & Assumptions

**Given:** A finite ordered set of $n$ qubits, a matching $M$, and binary
vectors $x,z\in\mathbb F_2^n$.

[F1] The angle-$\pi$ controlled phase acts on $|y_jy_k\rangle$ by
$(-1)^{y_jy_k}$ ([[def-qc-controlled-phase-rotation]]).

[F2] $A_M$ is symmetric with zero diagonal and records precisely the matching
edges ([[def-qc-binary-adjacency-matrix]]).

[F3] For $n\ge1$, the Pauli frame convention is
$P(x,z)=P(0,x,z)=X^xZ^z$ on the ordered register
([[def-qc-phase-aware-n-qubit-pauli-group]]). The $n=0$ identity convention is
specified in the Statement.

[F4] The zero-wire tensor register is $\mathbb C$ with basis $\{1\}$, and the
product basis spans each finite ordered register
([[def-qc-tensor-register-and-permutation]]).

## Proof


1.1 For $y\in\mathbb F_2^n$, write $q_M(y)=\sum_{\{j,k\}\in M}y_jy_k$. By [F1], $CZ_M|y\rangle=(-1)^{q_M(y)}|y\rangle$. Expanding each edge term over $\mathbb F_2$ gives the cross term $\sum_{\{j,k\}\in M}(y_jx_k+x_jy_k)$. By the stated coordinate order and dot-product convention, $(A_Mx)_j=\sum_{k:\{j,k\}\in M}x_k$, so this cross term is exactly $(A_Mx)\cdot y$. Hence $q_M(y\oplus x)=q_M(y)+q_M(x)+(A_Mx)\cdot y$. [F1, F2, algebra]

2.1 Applying the left side of the claimed identity to $|y\rangle$ gives $(-1)^{z\cdot y+q_M(y\oplus x)}|y\oplus x\rangle$. Applying the right side gives $(-1)^{q_M(x)+q_M(y)+(z\oplus A_Mx)\cdot y}|y\oplus x\rangle$; step 1.1 makes these signs equal. The ordered computational basis spans the register, so the operators agree. When $n=0$ or $M=\varnothing$, every sum is empty and both sides are the identity frame relation by [F3]--[F4]. [step 1.1, F3, F4, algebra, cases] ∎

