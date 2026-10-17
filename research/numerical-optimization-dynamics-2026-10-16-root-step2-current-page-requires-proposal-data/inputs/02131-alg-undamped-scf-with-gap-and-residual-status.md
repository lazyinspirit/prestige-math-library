---
id: alg-undamped-scf-with-gap-and-residual-status
kind: algorithm
title: Finite-budget undamped self-consistent projector iteration
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps: [def-self-consistent-projector-response-map, lem-gapped-projector-map-well-defined, alg-fixed-point-iteration]
justified_by: [lem-finite-budget-scf-iteration-work]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Eric Cancès and Claude Le Bris, On the convergence of SCF algorithms for the Hartree-Fock equations, §2.2
      url: https://www.numdam.org/item/M2AN_2000__34_4_749_0.pdf
verification:
  precheck: n/a
---

## Definition

Input: $n,r$, a response map $F:U\to\mathbb H_n$ and its occupied projector
map $\Phi$ from [[def-self-consistent-projector-response-map]], an initial
projector $P_0\in\mathcal P_r$, a required gap $g_{min}>0$, residual tolerance
$\varepsilon\ge0$, and update budget $N\in\mathbb N_0$. Assume each iterate
belongs to a declared invariant input set $K\subseteq U$. Use the Frobenius
metric and the fixed-point interface of [[alg-fixed-point-iteration]].

For $k=0,1,\ldots,N$:

1. Compute the ordered eigenvalues of $F(P_k)$. If the eigensolver fails with no certified ordered spectrum, return $(P_k,\texttt{eigensolve-failure},\varnothing,k)$. If $\lambda_{r+1}(F(P_k))-\lambda_r(F(P_k))<g_{min}$, return $(P_k,\texttt{gap-loss},\varnothing,k)$.
2. Set $P_{k+1}^{raw}=\Phi(P_k)$ and $\rho_k=\|P_k-P_{k+1}^{raw}\|_F$. If $\rho_k\le\varepsilon$, return $(P_k,\texttt{residual-tolerance-met},\rho_k,k)$.
3. If $k=N$, return $(P_k,\texttt{iteration-budget-exhausted},\rho_k,k)$. Otherwise set $P_{k+1}=P_{k+1}^{raw}$ and continue.

It reports a residual stopping status, gap loss, eigensolver failure, or budget
exhaustion separately. A finite budget
does not guarantee that the residual tolerance will be met, and the definition
asserts no convergence from damping or from a positive gap alone.
