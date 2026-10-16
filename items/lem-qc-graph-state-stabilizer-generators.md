---
id: lem-qc-graph-state-stabilizer-generators
kind: lemma
title: "Graph-state stabilizer generators"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-qc-graph-state, def-qc-controlled-phase-rotation, def-qc-binary-adjacency-matrix, def-qc-pauli-matrices, def-qc-phase-aware-n-qubit-pauli-group, thm-qc-pauli-commutator-is-symplectic-pairing, lem-qc-graph-state-edge-gates-commute]
justified_by: []
dependency_level: 10
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "M. Hein et al., Entanglement in graph states and its applications, Proposition 2, p. 15"
      url: https://arxiv.org/pdf/quant-ph/0602096
    - title: "Robert Raussendorf, Daniel E. Browne, and Hans J. Briegel, Measurement-based quantum computation on cluster states, pp. 3–5"
      url: https://arxiv.org/pdf/quant-ph/0301052
---

## Statement

Let $G=(V,E)$ be an ordered finite simple graph and let $|G\rangle$ be its
graph state. Write $X_v,Z_v$ for the one-qubit Pauli matrices embedded on the
tensor factor indexed by $v$; in the phase-aware Pauli convention, vertex at
zero-based position $r$ is wire $r+1$. For $v\in V$, put
$K_v:=X_v\prod_{u\in N(v)}Z_u$. Each $K_v$ is a Hermitian involution,
$K_v|G\rangle=|G\rangle$, the generators commute pairwise, and their binary
Pauli labels are independent. This includes $V=\varnothing$, where the
generating family is empty.

## Facts & Assumptions

**Given:** A finite simple graph $G=(V,E)$, its ordered graph state, and the
one-qubit Pauli matrices.

[F1] The graph state is $U_G|+\rangle^{\otimes V}$ with one $CZ_{uv}$ per edge, and the embedded edge gates commute ([[def-qc-graph-state]], [[lem-qc-graph-state-edge-gates-commute]]).

[F2] The angle-$\pi$ controlled phase is the diagonal Hermitian involution $\operatorname{diag}(1,1,1,-1)$ ([[def-qc-controlled-phase-rotation]]).

[F3] Number coordinates by the vertices in their fixed order; $e_v$ is the coordinate unit vector at vertex $v$, and $(A_2(G))_{uv}=1$ exactly when $\{u,v\}\in E$. The binary dot product is the coordinate sum $\sum_{w\in V}a_wb_w$ in $\mathbb F_2$. Thus $A_2(G)$ is symmetric with zero diagonal ([[def-qc-binary-adjacency-matrix]]).

[F4] The one-qubit $X,Y,Z$ matrices are Hermitian involutions, and the phase-aware tensor Pauli frame has binary $X$- and $Z$-support with zero-scalar convention $X^xZ^z$ ([[def-qc-pauli-matrices]], [[def-qc-phase-aware-n-qubit-pauli-group]]).

[F5] Pauli operators commute exactly when their binary labels have zero symplectic pairing ([[thm-qc-pauli-commutator-is-symplectic-pairing]]).

## Proof


1.1 Every $CZ_{uv}$ is a diagonal Hermitian involution by [F2]. Conjugating $X_v$ by an incident gate gives $CZ_{uv}X_vCZ_{uv}=Z_uX_v$ by checking the four computational-basis pairs; a nonincident edge gate commutes with $X_v$. Since the edge gates commute by [F1], $U_GX_vU_G^\dagger=X_v\prod_{u\in N(v)}Z_u=K_v$. The tensor factors are Hermitian involutions, so $K_v$ is also a Hermitian involution. [F1, F2, F3, algebra]

1.2 The binary label of $K_v$ is $(e_v,A_2(G)e_v)$ because the $Z$ coordinate at $u$ is $(A_2(G)e_v)_u=(A_2(G))_{uv}$. For distinct $v,w$, the binary symplectic pairing of these labels is $e_v\cdot A_2(G)e_w+A_2(G)e_v\cdot e_w =(A_2(G))_{vw}+(A_2(G))_{wv}=0$ in $\mathbb F_2$ by [F3]. Thus [F5] gives pairwise commutation. Equivalently, when $\{v,w\}\in E$ the two local $X/Z$ anticommutations cancel, and when it is not an edge all overlapping factors are both $Z$ or act on different sites. [F3, F4, F5, algebra]

2.1 Using $X_v|+\rangle^{\otimes V}=|+\rangle^{\otimes V}$ and $U_G^\dagger=U_G$, we obtain $K_v|G\rangle=U_GX_vU_G^\dagger U_G|+\rangle^{\otimes V}=U_G|+\rangle^{\otimes V}=|G\rangle$. [step 1.1, F1, algebra]

3.1 In a product of generators indexed by $S\subseteq V$, the binary $X$-support is $\sum_{v\in S}e_v=1_S$ by [F4]. It vanishes only for $S=\varnothing$, so no nonempty product has identity binary label; the generators are independent. For empty $V$ this assertion is vacuous. [F4, algebra] ∎

