---
id: alg-capped-diis-projector-proposal
kind: algorithm
title: Finite-memory capped DIIS projector proposal with fallback
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps: [def-self-consistent-projector-response-map, lem-gapped-projector-map-well-defined, lem-capped-diis-coefficient-minimizer-exists, def-matrix-product-and-identity-matrix, def-frobenius-matrix-norm]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Thorsten Rohwedder, An analysis for some methods and algorithms of quantum chemistry, Chapter 4 §4.1
      url: https://depositonce.tu-berlin.de/bitstreams/7a3115d5-2ab7-4041-b9ea-5259a6659a2e/download
    - title: Homer F. Walker and Peng Ni, Anderson Acceleration for Fixed-Point Iterations, §1
      url: https://users.wpi.edu/~walker/Papers/Walker-Ni%2CSINUM%2CV49%2C1715-1735.pdf
verification:
  precheck: n/a
---

## Definition

Input: current $P_k\in\mathcal P_r$, up to $m-1$ earlier stored projectors
$P_i$ and their Hermitian matrices $F(P_i)$, memory cap $m\ge1$, coefficient
cap $C\ge1$, and an exact or certified solver for the constrained least-squares
problem. The procedure is one proposal step:

1. Form each commutator residual $R_i=[F(P_i),P_i]:=F(P_i)P_i-P_iF(P_i)$ for the stored history together with the current iterate. Retain at most the most recent $m$ residuals.
2. Find coefficients minimizing $\|\sum_i c_iR_i\|_F^2$ subject to $\sum_i c_i=1$ and $\|c\|_1\le C$. If the configured linear-system solver reports a singular system or cannot certify a minimizer, return $(P_k,\texttt{singular-or-uncertified-ls})$ and request the baseline SCF update. If it returns multiple minimizers, select the unique minimum-Euclidean-norm minimizer supplied by [[lem-capped-diis-coefficient-minimizer-exists]].
3. If the returned coefficients fail either constraint, return $(P_k,\texttt{coefficient-cap-failure})$ and request the baseline update. Otherwise form $F_{mix}=\sum_i c_iF(P_i)$. If the $r$th gap of $F_{mix}$ is not certified, return $(P_k,\texttt{candidate-gap-failure})$ and request the baseline update.
4. Return the projector $Y=\Pi_r(F_{mix})$ as a DIIS candidate.

The commutator least-squares objective defines a proposal; it is not a fixed-point
error certificate. The outer safeguarded procedure checks $\|Y-\Phi(Y)\|_F$
separately before accepting a candidate. This algorithm makes no bare DIIS
convergence claim.
