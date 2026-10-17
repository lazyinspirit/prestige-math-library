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

Input: the current pair $(P_k,F(P_k))$ with $P_k\in\mathcal P_r$ and
$F(P_k)$ Hermitian; up to $m-1$ earlier pairs $(P_i,F(P_i))$, in chronological
order, with $P_i\in\mathcal P_r$ and $F(P_i)$ Hermitian; memory cap $m\ge1$;
coefficient cap $C\ge1$; a constrained least-squares solver that either returns
a globally minimizing coefficient vector selected by minimum Euclidean norm
among all minimizers, with certificates for feasibility and optimality, or
reports failure; and a Hermitian eigensolver for mixed Fock matrices. The
eigensolver returns a certified ordered spectrum and, when the $r$th gap is
strict, its occupied projector, or reports failure. The procedure is one
proposal step:

1. Form each commutator residual $R_i=[F(P_i),P_i]:=F(P_i)P_i-P_iF(P_i)$ for the earlier pairs followed by the current pair. This gives at most $m$ residuals.
2. Call the constrained solver on these residuals with $c\in\mathbb R^s$, $\sum_i c_i=1$, and $\|c\|_1\le C$. If it reports failure, including a singular Gram-system failure, return $(P_k,\texttt{singular-or-uncertified-ls})$; the caller then performs the baseline SCF update. The returned vector must be the certified global minimizer with the minimum-norm tie-break guaranteed to exist by [[lem-capped-diis-coefficient-minimizer-exists]].
3. If the returned coefficients fail either constraint or their feasibility certificate, return $(P_k,\texttt{coefficient-cap-failure})$; the caller then performs the baseline update. Otherwise form $F_{mix}=\sum_i c_iF(P_i)$ and call the eigensolver on it. If the eigensolver fails or does not certify a strict $r$th gap, return $(P_k,\texttt{candidate-gap-failure})$; the caller then performs the baseline update.
4. If the eigensolver certifies a strict gap, return $(Y,\texttt{candidate})$, where $Y$ is its occupied projector $\Pi_r(F_{mix})$.

The commutator least-squares objective defines a proposal; it is not a fixed-point
error certificate. The outer safeguarded procedure checks $\|Y-\Phi(Y)\|_F$
separately before accepting a candidate. This algorithm makes no bare DIIS
convergence claim.
