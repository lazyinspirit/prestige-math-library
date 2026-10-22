---
id: lem-qsmx-transverse-ising-majorana-car
kind: lemma
title: Hermiticity and CAR of the ordered Ising Majoranas
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-qsm-pauli-two-qubit-conventions
  - def-qsmx-transverse-ising-majoranas
dependency_roles:
  def-qsm-pauli-two-qubit-conventions: mathematical-premise
  def-qsmx-transverse-ising-majoranas: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "G. B. Mbeng, A. Russomanno, and G. E. Santoro, The quantum Ising chain for beginners, arXiv:2009.09208v2, §§1–2 and 6.2"
      url: "https://arxiv.org/pdf/2009.09208"
    - title: "Pieter Claeys, Quench dynamics in the Transverse Field Ising Model, Many-body Quantum Dynamics @ TU Dresden lecture notes, §6"
      url: "https://www.pks.mpg.de/fileadmin/user_upload/MPIPKS/group_pages/DQI/TFIM_2024.pdf"
---

## Statement

For every integer $N\ge1$ and real $h,J$, let $\mathcal H_N$, $X_j,Y_j,Z_j$, and $\gamma_1,\ldots,\gamma_{2N}$ be the matrices defined for the open transverse Ising chain. Then each $\gamma_a$ is Hermitian and
$$\gamma_a\gamma_b+\gamma_b\gamma_a=2\delta_{ab}I_{\mathcal H_N}\qquad(1\le a,b\le2N).$$

## Statement references

[[def-qsmx-transverse-ising-majoranas]]

## Facts & Assumptions

**Given:** The finite tensor-product space and ordered operators of [[def-qsmx-transverse-ising-majoranas]].

[F1] [[def-qsmx-transverse-ising-majoranas]]: $\gamma_{2j-1}=(Z_1\cdots Z_{j-1})X_j$ and $\gamma_{2j}=(Z_1\cdots Z_{j-1})Y_j$, with the empty string equal to the identity.

[F2] [[def-qsm-pauli-two-qubit-conventions]]: the matrices $X,Y,Z$ are explicitly displayed; conjugate-transpose gives $X^*=X$, $Y^*=Y$, $Z^*=Z$, and direct multiplication of those displayed matrices gives the pairwise relations used below.

## Proof

1.1 The string $S_{j-1}=Z_1\cdots Z_{j-1}$ is Hermitian, has square $I$, and commutes with $X_j$ and $Y_j$ because it acts on different tensor factors. Hence $\gamma_{2j-1}$ and $\gamma_{2j}$ are Hermitian, and each squares to $I$. [given, F1, F2, algebra]

2.1 On one site, $\gamma_{2j-1}\gamma_{2j}=S_{j-1}^2X_jY_j=iZ_j$ and $\gamma_{2j}\gamma_{2j-1}=S_{j-1}^2Y_jX_j=-iZ_j$. Their sum is zero, so the two distinct operators at the same site anticommute. [F1, F2, step 1.1, algebra]

3.1 Let $j<\ell$ and choose either $X_j$ or $Y_j$ at site $j$ and either $X_\ell$ or $Y_\ell$ at site $\ell$. The string in the later operator contains exactly one $Z_j$; all other factors commute across distinct sites, while both $X_j$ and $Y_j$ anticommute with $Z_j$ by [F2]. Moving the earlier site matrix past the later string therefore contributes exactly one minus sign. Thus every pair of operators at distinct sites anticommutes. Together with the squares from step 1.1 and the same-site computation in step 2.1, this gives the stated CAR for all indices. [given, F1, F2, step 1.1, step 2.1, algebra] ∎
