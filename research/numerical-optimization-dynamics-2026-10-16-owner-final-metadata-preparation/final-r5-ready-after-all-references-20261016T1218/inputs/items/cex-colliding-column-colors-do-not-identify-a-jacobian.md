---
id: cex-colliding-column-colors-do-not-identify-a-jacobian
kind: counterexample
title: "A colliding color seed cannot distinguish two Jacobians with different entries"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-structural-column-coloring-for-sparse-jacobian-recovery, thm-sparse-jacobian-is-recovered-by-a-proper-column-coloring]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Thomas F. Coleman and Jorge J. Moré, Estimation of Sparse Jacobian Matrices and Graph Coloring Problems, Argonne National Laboratory Report ANL-81-39"
      url: "https://digital.library.unt.edu/ark:/67531/metadc283504/"
    - title: "Bradley M. Bell and Kasper Kristensen, Computing Sparse Jacobians and Hessians Using Algorithmic Differentiation"
      url: "https://arxiv.org/pdf/2111.05207"
dependency_level: 2
---

## Statement refuted

For any coloring of the columns, one compressed product determines every Jacobian entry allowed by the row support.

## Facts & Assumptions

**Given:** One row with safe support $S_0=\{0,1\}$, a coloring that assigns both columns the same color, and seed $s=(1,1)^T$.

[F1] [[def-structural-column-coloring-for-sparse-jacobian-recovery]]: the compressed observation for seed $s$ is $Js$.

[F2] [[thm-sparse-jacobian-is-recovered-by-a-proper-column-coloring]]: the recovery guarantee requires a proper coloring, and collision-free supports permit reading one entry from each compressed row.

## Counterexample

**Given:** The row pattern and colliding seed in the Facts & Assumptions.

1.1 The distinct candidate Jacobian rows $J=(1,2)$ and $K=(3,0)$ are realized at $(0,0)$ by the linear maps $F(z_0,z_1)=z_0+2z_1$ and $G(z_0,z_1)=3z_0$. Both supports lie in $S_0$, but [F1] gives $Js=1+2=3$ and $Ks=3+0=3$. [given, F1, construct, algebra]

2.1 Since the same observation is compatible with different entries in columns $0$ and $1$, this colliding seed does not identify the row. The collision violates the proper-coloring hypothesis of [F2], so the unconditional statement is false. [given, F2, step 1.1, algebra] ∎
