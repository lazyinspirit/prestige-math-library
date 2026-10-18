---
id: lem-schwarz-additive-inverse-is-local-energy-minimum
kind: lemma
title: "The additive Schwarz inverse minimizes summed local energy"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - def-overlapping-schwarz-subspace-correction-data
  - lem-schwarz-local-matrices-are-well-defined
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jinchao Xu, Iterative Methods by Space Decomposition and Subspace Correction, SIAM Review 34(4) (1992)"
      url: https://numerik.mi.fu-berlin.de/wiki/SS_2020/NumericsIII_Dokumente/Xu92.pdf
      locator: "Sections 3.1–3.2, pp. 585–587: exact restricted subspace equations and additive preconditioning."
    - title: "Peter Bastian, Lecture Notes on Parallel Solution of Large Sparse Linear Systems, University of Heidelberg (2015)"
      url: https://conan.iwr.uni-heidelberg.de/data/scripts/num3.pdf
      locator: "Chapter 4 §§4.1–4.2, printed pp. 57–63: local orthogonal projections and additive Schwarz bounds."
---

## Statement

For the data of [[def-overlapping-schwarz-subspace-correction-data]], assume
$\sum_{i\in\mathcal I}V_i=V$. Let
$R=[R_i]_{i\in\mathcal I}$ and
$\mathcal D=\operatorname{diag}(A_i)_{i\in\mathcal I}$, so
$B=R\mathcal D^{-1}R^{\mathsf T}$. Then $B$ is SPD and, for every $x\in V$,
$$ x^{\mathsf T}B^{-1}x = \min_{\substack{z=(z_i)_{i\in\mathcal I}\\Rz=x}} \sum_{i\in\mathcal I}z_i^{\mathsf T}A_i z_i. $$

## Facts & Assumptions

**Given:** The local SPD matrices $A_i$, the prolongations $R_i$, and the
spanning condition $\sum_{i\in\mathcal I}\operatorname{Ran}(R_i)=V$.

[F1] The Schwarz definition gives $A_i=R_i^{\mathsf T}AR_i$ and
$B=\sum_{i\in\mathcal I}R_iA_i^{-1}R_i^{\mathsf T}$
([[def-overlapping-schwarz-subspace-correction-data]]).

[F2] Every local matrix $A_i$ is SPD and invertible
([[lem-schwarz-local-matrices-are-well-defined]]).

## Proof

1.1 The block matrix $\mathcal D$ is SPD by [F2]. The spanning assumption makes the concatenated map $R$ surjective. If $x^{\mathsf T}Bx=0$, then $0=(R^{\mathsf T}x)^{\mathsf T}\mathcal D^{-1}(R^{\mathsf T}x),$ so $R^{\mathsf T}x=0$ because $\mathcal D^{-1}$ is SPD. Surjectivity of $R$ then gives $x=0$. Thus $B$ is SPD and has an inverse. [F1, F2, given, algebra]

2.1 For fixed $x$, define $z_*=\mathcal D^{-1}R^{\mathsf T}B^{-1}x$. Then $Rz_*=BB^{-1}x=x$, so it is feasible. For any other feasible $z$, write $w=z-z_*$. Then $Rw=0$ and $z_*^{\mathsf T}\mathcal Dw=x^{\mathsf T}B^{-1}Rw=0$. Therefore $z^{\mathsf T}\mathcal Dz=z_*^{\mathsf T}\mathcal Dz_*+w^{\mathsf T}\mathcal Dw\ge z_*^{\mathsf T}\mathcal Dz_*$. Direct multiplication gives $z_*^{\mathsf T}\mathcal Dz_*=x^{\mathsf T}B^{-1}x$. This proves the minimum identity. [F1, F2, step 1.1, algebra] ∎
