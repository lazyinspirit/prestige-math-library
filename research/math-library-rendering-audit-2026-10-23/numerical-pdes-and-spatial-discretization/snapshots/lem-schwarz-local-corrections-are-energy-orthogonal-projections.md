---
id: lem-schwarz-local-corrections-are-energy-orthogonal-projections
kind: lemma
title: "Exact Schwarz local corrections are energy-orthogonal projections"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - def-overlapping-schwarz-subspace-correction-data
  - lem-schwarz-local-matrices-are-well-defined
  - thm-galerkin-coarse-correction-is-energy-orthogonal-projector
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
      locator: "Sections 3.1–3.2, pp. 585–587: exact restricted subspace equations and
        additive preconditioning."
    - title: "Peter Bastian, Lecture Notes on Parallel Solution of Large Sparse Linear
        Systems, University of Heidelberg (2015)"
      url: https://conan.iwr.uni-heidelberg.de/data/scripts/num3.pdf
      locator: "Chapter 4 §§4.1–4.2, printed pp. 57–63: local orthogonal projections
        and additive Schwarz bounds."
verification:
  precheck: pass
---

## Statement

For the data of [[def-overlapping-schwarz-subspace-correction-data]], every
$\Pi_i=R_iA_i^{-1}R_i^{\mathsf T}A$ is an $A$-orthogonal projection, meaning
an idempotent $A$-self-adjoint operator, with range $V_i$. Consequently, for every
$x\in V$,
$$ \|x\|_A^2=\|\Pi_i x\|_A^2+\|(I-\Pi_i)x\|_A^2, \qquad a(\Pi_i x,x)=\|\Pi_i x\|_A^2. $$

## Facts & Assumptions

**Given:** A real SPD matrix $A$, the full-column-rank prolongations, and the
index set of [[def-overlapping-schwarz-subspace-correction-data]].

[F1] The Schwarz definition gives $A_i=R_i^{\mathsf T}AR_i$ and
$\Pi_i=R_iA_i^{-1}R_i^{\mathsf T}A$
([[def-overlapping-schwarz-subspace-correction-data]]).

[F2] Every local matrix $A_i$ is SPD and invertible
([[lem-schwarz-local-matrices-are-well-defined]]).

[F3] If the coarse index $0$ is present, then
$C=I-PA_0^{-1}P^{\mathsf T}A$ is the $A$-orthogonal projector onto
$\operatorname{Ran}(P)^{\perp_A}$
([[thm-galerkin-coarse-correction-is-energy-orthogonal-projector]]).

[F4] Transposition reverses products, and a two-sided inverse of a symmetric
invertible matrix is symmetric ([[prop-transpose-laws]]).

## Proof

1.1 Fix $i\in\mathcal I$ with $i\ne0$. Multiplication using [F1] gives $\Pi_i^2 =R_iA_i^{-1}(R_i^{\mathsf T}AR_i)A_i^{-1}R_i^{\mathsf T}A =\Pi_i.$ By [F2], $A_i^{-1}$ is symmetric; [F4] therefore gives $\Pi_i^{\mathsf T}A=A\Pi_i$. Its range is contained in $\operatorname{Ran}(R_i)$, and $\Pi_iR_i=R_i$, so its range is exactly $V_i$. [F1, F2, F4, algebra]

1.2 If $0\in\mathcal I$, write $\Pi_0=I-C$ with $C$ from [F3]. Since $C^2=C$ and $C$ is $A$-self-adjoint, $I-C$ is also idempotent and $A$-self-adjoint. Moreover, $\operatorname{Ran}(I-C)=\ker C=\operatorname{Ran}(P)$ because $C$ projects onto $\operatorname{Ran}(P)^{\perp_A}$. Thus $\Pi_0$ is the $A$-orthogonal projection onto $V_0$. If $0\notin\mathcal I$, there is no coarse projection to check. [F1, F3, algebra]

2.1 For every present index $i$, idempotence and $A$-self-adjointness give $a(\Pi_i x,(I-\Pi_i)x)=a(x,\Pi_i(I-\Pi_i)x)=0$. Expanding the squared norm of $x=\Pi_i x+(I-\Pi_i)x$ proves the Pythagorean identity. Also $a(\Pi_i x,x)=a(\Pi_i x,\Pi_i x)$ by the same orthogonality. [step 1.1, step 1.2, algebra] ∎
