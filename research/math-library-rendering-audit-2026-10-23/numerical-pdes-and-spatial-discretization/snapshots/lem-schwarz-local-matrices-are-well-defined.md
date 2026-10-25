---
id: lem-schwarz-local-matrices-are-well-defined
kind: lemma
title: "Schwarz local matrices and exact solves are well defined"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-overlapping-schwarz-subspace-correction-data
  - thm-galerkin-coarse-correction-is-energy-orthogonal-projector
  - thm-hermitian-positive-definite-linear-system-has-a-unique-energy-minimizer
  - prop-transpose-laws
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jinchao Xu, Iterative Methods by Space Decomposition and Subspace
        Correction, SIAM Review 34(4) (1992)"
      url: https://numerik.mi.fu-berlin.de/wiki/SS_2020/NumericsIII_Dokumente/Xu92.pdf
      locator: "Section 3.1, pp. 585–586: restricted local SPD operators."
    - title: "Peter Bastian, Lecture Notes on Parallel Solution of Large Sparse Linear
        Systems, University of Heidelberg (2015)"
      url: https://conan.iwr.uni-heidelberg.de/data/scripts/num3.pdf
      locator: "Chapter 4 §4.1, pp. 57–59: local restricted matrices and exact
        projection equations."
verification:
  precheck: pass
---

## Statement

For the data of [[def-overlapping-schwarz-subspace-correction-data]], every
local matrix $A_i=R_i^{\mathsf T}AR_i$ with $i\in\mathcal I$ is symmetric
positive definite and therefore invertible. If the coarse index $0$ is
present, then $A_0=P^{\mathsf T}AP$ is the SPD Galerkin coarse matrix. Hence
every exact local solve in the definition exists uniquely.

## Facts & Assumptions

**Given:** The real SPD matrix $A$, the full-column-rank prolongations
$R_i$, and the index set $\mathcal I$ of
[[def-overlapping-schwarz-subspace-correction-data]].

[F1] The definition gives $A_i=R_i^{\mathsf T}AR_i$ and requires each $R_i$
to have full column rank
([[def-overlapping-schwarz-subspace-correction-data]]).

[F2] For SPD $A$ and full-column-rank $P$, the Galerkin matrix
$P^{\mathsf T}AP$ is SPD and the exact Galerkin coarse correction is defined
([[thm-galerkin-coarse-correction-is-energy-orthogonal-projector]]).

[F3] A real SPD matrix has a unique solution to $Mx=b$ for every right-hand
side, so it is invertible
([[thm-hermitian-positive-definite-linear-system-has-a-unique-energy-minimizer]]).

[F4] Transposition reverses matrix products, and $A^{\mathsf T}=A$
([[prop-transpose-laws]]).

## Proof

1.1 Fix any $i\in\mathcal I$ with $i\ne0$ and any nonzero $z\in\mathbb R^{n_i}$. Full column rank in [F1] gives $R_i z\ne0$, so $z^{\mathsf T}A_i z=(R_i z)^{\mathsf T}A(R_i z)>0.$ Also [F4] gives $A_i^{\mathsf T}=R_i^{\mathsf T}A^{\mathsf T}R_i=A_i$. Thus every such $A_i$ is SPD. [F1, F4, given, algebra]

1.2 If $0\in\mathcal I$, then $R_0=P$ and [F2] gives that $A_0=P^{\mathsf T}AP$ is SPD and the exact coarse solve is defined. If $0\notin\mathcal I$, no separate coarse matrix is part of the one-level definition. [F2, given]

2.1 By [F3], every SPD $A_i$ in step 1.1 or 1.2 has a unique solution for each local right-hand side. Therefore all exact local solves in [[def-overlapping-schwarz-subspace-correction-data]] are well-defined. [F3, step 1.1, step 1.2] ∎
