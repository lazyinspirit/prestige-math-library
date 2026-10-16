---
id: thm-qc-graph-state-unique-stabilizer-ray
kind: theorem
title: "Graph state is the unique joint stabilizer ray"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-qc-graph-state, def-qc-controlled-phase-rotation, def-qc-tensor-register-and-permutation, thm-qc-computational-basis-orthonormal, def-qc-stabilizer-subgroup, lem-qc-graph-state-stabilizer-generators, lem-qc-stabilizer-average-projector, thm-qc-stabilizer-projector-rank-and-code-dimension, def-qc-dirac-notation-conversion]
justified_by: []
dependency_level: 14
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
    - title: "M. Hein et al., Entanglement in graph states and its applications, Proposition 3, p. 16"
      url: https://arxiv.org/pdf/quant-ph/0602096
    - title: "Robert Raussendorf, Daniel E. Browne, and Hans J. Briegel, Measurement-based quantum computation on cluster states, §§II B–C"
      url: https://arxiv.org/pdf/quant-ph/0301052
---

## Statement

Let $G=(V,E)$ be an ordered finite simple graph on $n$ vertices, let
$|G\rangle$ be its graph state, and let $K_v=X_v\prod_{u\in N(v)}Z_u$ be
the generators from [[lem-qc-graph-state-stabilizer-generators]]. Their common
$+1$ eigenspace is exactly $\operatorname{span}\{|G\rangle\}$. If $S_G$ is
the subgroup they generate, its orthogonal projector is

$$\Pi_G=2^{-n}\sum_{g\in S_G}g=|G\rangle\langle G|.$$

For $V=\varnothing$, $S_G=\{I\}$ and the formula is the identity projector
on the one-dimensional trivial register.

## Facts & Assumptions

**Given:** A finite ordered simple graph, its graph state and stabilizer
generators.

[F1] The $K_v$ are commuting Hermitian involutions, fix $|G\rangle$, and
have independent binary Pauli labels ([[lem-qc-graph-state-stabilizer-generators]]).

[F2] The graph-state Definition is the finite controlled-$Z$ edge product
applied to $|+\rangle^{\otimes V}$ ([[def-qc-graph-state]]).

[F3] The average $|S|^{-1}\sum_{g\in S}g$ is the orthogonal projector onto the
common $+1$ fixed space ([[lem-qc-stabilizer-average-projector]]).

[F4] For a rank-$r$ stabilizer subgroup on $n$ qubits, the fixed-space
projector has rank $2^{n-r}$
([[thm-qc-stabilizer-projector-rank-and-code-dimension]]).

[F5] Every edge gate is the unitary diagonal matrix $\operatorname{diag}(1,1,1,-1)$
([[def-qc-controlled-phase-rotation]]).

[F6] The product inner product makes the norm of an elementary tensor the
product of factor norms, and the empty tensor register is $\mathbb C$
([[def-qc-tensor-register-and-permutation]]).

[F7] A stabilizer subgroup is a finite abelian subgroup of the phase-aware
Pauli group that contains no $-I$ ([[def-qc-stabilizer-subgroup]]).

[F8] The ordered computational basis of $\mathbb C^2$ is orthonormal
([[thm-qc-computational-basis-orthonormal]]).

[F9] The rank-one Dirac operator $|u\rangle\langle u|$ acts by
$z\mapsto\langle z,u\rangle u$ in the root-linear-first convention
([[def-qc-dirac-notation-conversion]]).

## Proof


1.1 The vector $|+\rangle=2^{-1/2}(|0\rangle+|1\rangle)$ has norm one by [F8], and $|+\rangle^{\otimes V}$ has norm one by the product inner product [F6]. Every edge gate in [F2] is unitary by [F5], so their finite product preserves norm and $|G\rangle$ is a unit vector. When $V=\varnothing$, the empty tensor and edge product give the unit vector $1\in\mathbb C$ directly. [F2, F5, F6, F8, algebra, cases]

2.1 If $n>0$, every product of the commuting involutions in [F1] is indexed by a subset of the $n$ generators. Its binary $X$-support is the indicator of that subset, so the independent labels in [F1] make the $2^n$ products distinct. Every product fixes the nonzero vector $|G\rangle$ from step 1.1, so the generated group cannot contain $-I$. It is a stabilizer subgroup by [F7] and has rank $n$. [F1, F7, step 1.1, algebra]

3.1 For $n>0$, apply [F3] to the subgroup in step 2.1 to identify its group average with the common $+1$ projector. Its rank is $2^{n-n}=1$ by [F4]. The graph state fixes this line by [F1] and is unit by step 1.1, so the orthogonal projector onto the line is $|G\rangle\langle G|$ by [F9]. If $n=0$, the empty generator family generates $\{I\}$, whose average is the identity on $\mathbb C$; this is also $|1\rangle\langle1|$. [F1, F3, F4, F9, step 1.1, step 2.1, algebra, cases] ∎

